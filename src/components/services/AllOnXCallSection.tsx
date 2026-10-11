import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PHONE_TEL = 'tel:9785344000';
const PHONE_DISPLAY = '(978) 534-4000';

export function AllOnXCallSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-primary p-6 md:p-10 lg:p-12 shadow-large"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="min-w-0">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Full Mouth Rehabilitation
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mt-2 mb-4 break-words">
            Ready to talk about All-on-X?
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
            A short call is the easiest way to find out whether All-on-X is right for you. Tell us
            what you’d like to fix, and we’ll walk you through your options, what’s involved, and
            what it costs — no pressure, no jargon.
          </p>
        </div>

        <div className="rounded-2xl bg-card p-6 md:p-8 border border-border text-center">
          <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider mb-2">
            Call our Leominster office
          </p>
          <a
            href={PHONE_TEL}
            className="block font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 hover:text-accent break-words"
          >
            {PHONE_DISPLAY}
          </a>
          <Button
            size="lg"
            className="w-full h-auto whitespace-normal py-3 text-base font-semibold"
            asChild
          >
            <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 flex-shrink-0" />
              Call Us Now
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
            Our Leominster team answers Monday through Friday.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
