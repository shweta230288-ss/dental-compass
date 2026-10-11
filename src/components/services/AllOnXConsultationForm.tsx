import { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { Phone, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';

const PHONE_TEL = 'tel:9785344000';
const PHONE_DISPLAY = '(978) 534-4000';
const COOLDOWN_KEY = 'kaya_consult_request_last_sent';
const COOLDOWN_MS = 30000;

const ARCH_OPTIONS = [
  'Upper arch',
  'Lower arch',
  'Both upper and lower',
  'Not sure yet — help me decide',
] as const;

const schema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your name')
    .max(200, 'That name is too long'),
  phone: z
    .string()
    .trim()
    .min(5, 'Please enter a phone number we can reach you at')
    .max(30, 'That phone number looks too long'),
  email: z
    .string()
    .trim()
    .max(254, 'That email address is too long')
    .refine((value) => value === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: 'Please enter a valid email address, or leave it blank',
    }),
  arch: z.string().trim().max(80, 'Please choose one of the options'),
  message: z
    .string()
    .trim()
    .max(2000, 'Please keep your note under 2,000 characters'),
});

type FieldName = keyof z.infer<typeof schema>;
type Errors = Partial<Record<FieldName, string>>;

const initialValues = {
  fullName: '',
  phone: '',
  email: '',
  arch: ARCH_OPTIONS[0] as string,
  message: '',
};

export function AllOnXConsultationForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const firstName = values.fullName.trim().split(/\s+/)[0] || 'there';

  const setField = (field: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setServerError('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Hidden field only a bot would fill in — accept it silently, store nothing.
    if (honeypot.trim() !== '') {
      setStatus('done');
      return;
    }

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as FieldName;
        if (field && !next[field]) next[field] = issue.message;
      }
      setErrors(next);
      return;
    }

    // Light throttle so one visitor can't flood the inbox.
    try {
      const last = Number(window.sessionStorage.getItem(COOLDOWN_KEY) || 0);
      if (Date.now() - last < COOLDOWN_MS) {
        setServerError('Please wait a moment before sending another request.');
        setStatus('error');
        return;
      }
    } catch {
      // Storage can be blocked; fall through and let the request through.
    }

    setStatus('submitting');
    setServerError('');

    const { error } = await supabase.from('consultation_requests').insert({
      full_name: values.fullName.trim(),
      phone: values.phone.trim(),
      email: values.email.trim() === '' ? null : values.email.trim(),
      treatment: `All-on-X — ${values.arch}`,
      message: values.message.trim() === '' ? null : values.message.trim(),
      source_page: window.location.pathname,
    });

    if (error) {
      setStatus('error');
      setServerError(
        'We couldn’t send your request just now. Please call us at ' +
          PHONE_DISPLAY +
          ' and we’ll take care of you.',
      );
      return;
    }

    try {
      window.sessionStorage.setItem(COOLDOWN_KEY, String(Date.now()));
    } catch {
      // Ignore — the submission is already stored.
    }
    setStatus('done');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-primary p-6 md:p-10 lg:p-12 shadow-large"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="min-w-0">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Full Mouth Rehabilitation
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mt-2 mb-4 break-words">
            Request an All-on-X Consultation
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-6">
            Tell us what you’d like to fix and we’ll call you back to walk through your options,
            what’s involved, and what it costs — no pressure, no jargon. If you’d rather talk to a
            person right now, we’d love that too.
          </p>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 text-accent font-semibold text-base md:text-lg hover:underline"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            Call Now {PHONE_DISPLAY}
          </a>
        </div>

        {status === 'done' ? (
          <div className="rounded-2xl bg-card p-6 md:p-8 border border-border">
            <CheckCircle2 className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
              Thank you, {firstName} — your request is in.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team will call you at {values.phone} to arrange your All-on-X consultation. If
              it’s quicker, just ring us on {PHONE_DISPLAY}.
            </p>
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a href={PHONE_TEL} className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl bg-card p-5 md:p-8 border border-border"
          >
            <div className="space-y-4">
              <div>
                <Label htmlFor="consult-name" className="text-foreground">
                  Your name
                </Label>
                <Input
                  id="consult-name"
                  name="name"
                  autoComplete="name"
                  value={values.fullName}
                  onChange={(e) => setField('fullName', e.target.value)}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? 'consult-name-error' : undefined}
                  className="mt-1.5"
                  placeholder="Jane Smith"
                />
                {errors.fullName && (
                  <p id="consult-name-error" role="alert" className="text-sm text-destructive mt-1.5">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="consult-phone" className="text-foreground">
                    Phone
                  </Label>
                  <Input
                    id="consult-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => setField('phone', e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'consult-phone-error' : undefined}
                    className="mt-1.5"
                    placeholder="(978) 555-0123"
                  />
                  {errors.phone && (
                    <p id="consult-phone-error" role="alert" className="text-sm text-destructive mt-1.5">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="consult-email" className="text-foreground">
                    Email <span className="text-muted-foreground font-normal">(optional)</span>
                  </Label>
                  <Input
                    id="consult-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => setField('email', e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'consult-email-error' : undefined}
                    className="mt-1.5"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="consult-email-error" role="alert" className="text-sm text-destructive mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="consult-arch" className="text-foreground">
                  Which teeth would you like to fix?
                </Label>
                <select
                  id="consult-arch"
                  name="arch"
                  value={values.arch}
                  onChange={(e) => setField('arch', e.target.value)}
                  className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {ARCH_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="consult-message" className="text-foreground">
                  Anything you’d like us to know?{' '}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Textarea
                  id="consult-message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={(e) => setField('message', e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'consult-message-error' : undefined}
                  className="mt-1.5"
                  placeholder="For example: I’ve worn the same lower denture for six years and it slips when I eat."
                />
                {errors.message && (
                  <p id="consult-message-error" role="alert" className="text-sm text-destructive mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Honeypot: hidden from people, tempting to bots. */}
              <div aria-hidden="true" className="hidden">
                <Label htmlFor="consult-website">Website</Label>
                <input
                  id="consult-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {status === 'error' && serverError && (
                <p role="alert" className="text-sm text-destructive leading-relaxed">
                  {serverError}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === 'submitting'}
                className="w-full h-auto whitespace-normal py-3 text-base font-semibold"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending…
                  </>
                ) : (
                  'Request My All-on-X Consultation'
                )}
              </Button>

              <p className="text-xs text-muted-foreground leading-relaxed">
                We use these details only to contact you about your consultation. This form doesn’t
                book an appointment or replace a call with our team.
              </p>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
}
