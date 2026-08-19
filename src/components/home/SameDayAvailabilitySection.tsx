import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, CalendarCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SameDayAvailabilitySection() {
  return (
    <section
      className="py-10 bg-background"
      aria-labelledby="same-day-heading"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-kaya-navy to-kaya-navy/95 p-6 md:p-10 shadow-card"
        >
          {/* Decorative gold accents */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" aria-hidden="true" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
            {/* Icon + Heading */}
            <div className="flex items-center gap-4 lg:max-w-sm shrink-0">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                <CalendarCheck className="w-7 h-7 text-accent" />
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                  Urgent Care, Unhurried Attention
                </span>
                <h2
                  id="same-day-heading"
                  className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight"
                >
                  Dental Emergency? Same-Day Appointments Available
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="flex-1">
              <p className="text-white/85 text-base md:text-lg leading-relaxed">
                We reserve time every day for emergency dental patients in Leominster, and
                walk-ins are welcome as availability permits. Toothache, broken tooth, or a
                knocked-out tooth — call our office and we will do everything we can to get
                you in and out of pain as fast as possible.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                <a href="tel:978-534-4000">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (978) 534-4000
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white w-full"
              >
                <Link to="/emergency-dental-care">
                  Emergency Care
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
