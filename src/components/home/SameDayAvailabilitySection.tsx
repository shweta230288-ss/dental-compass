import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, CalendarCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SameDayAvailabilitySection() {
  return (
    <section
      className="py-5 md:py-6 bg-background"
      aria-labelledby="same-day-heading"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-xl border border-accent/20 bg-gradient-to-r from-kaya-navy to-kaya-navy/95 px-5 py-4 md:px-6 md:py-5 shadow-card"
        >
          {/* Subtle gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            {/* Icon + Heading */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                <CalendarCheck className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-accent mb-0">
                  Urgent Care, Unhurried Attention
                </span>
                <h2
                  id="same-day-heading"
                  className="font-serif text-lg md:text-xl font-bold text-white leading-tight"
                >
                  Dental Emergency? Same-Day Appointments Available
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="flex-1 md:max-w-md">
              <p className="text-white/80 text-sm leading-relaxed">
                We reserve time every day for emergency dental patients in Leominster.
                Walk-ins are welcome as availability permits.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-2 shrink-0">
              <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap">
                <a href="tel:978-534-4000">
                  <Phone className="w-4 h-4 mr-1.5" />
                  Call (978) 534-4000
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white whitespace-nowrap"
              >
                <Link to="/emergency-dental-care">
                  Emergency Care
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
