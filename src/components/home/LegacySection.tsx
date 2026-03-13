import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import drDaniCronin from '@/assets/dr-dani-dr-cronin.jpg';

const values = [
  'Truly patient-centered, individualized treatment',
  'Clinical expertise grounded in experience and integrity',
  'Respect for each patient\'s treatment needs and goals',
  'Building relationships that last a lifetime',
];

export function LegacySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-muted" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            A New Chapter
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            Same Legacy. New Leadership.
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center gap-4 md:gap-6"
          >
            <div className="text-center">
              <span className="block text-accent font-serif text-2xl md:text-3xl font-bold">1961</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Est.</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="w-16 md:w-28 h-px bg-gradient-to-r from-accent to-accent/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              <div className="w-10 md:w-20 h-px bg-gradient-to-r from-accent/30 to-accent" />
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <div className="text-center">
              <span className="block text-accent font-serif text-2xl md:text-3xl font-bold">Today</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">60+ years</span>
            </div>
          </motion.div>
          <p className="text-accent font-serif text-lg italic font-bold mt-4">
            Proudly serving the Leominster area
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-2xl mx-auto">
              <img
                src={drDaniCronin}
                alt="Dr. Michael Cronin and Dr. Kunal Dani at Kaya Dental"
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                As Dr. Michael Cronin's practice transitions into{' '}
                <span className="font-semibold text-foreground">Kaya Dental</span>,
                our commitment remains exactly the same.
              </p>
              <p>
                For over 60 years, patients have trusted this practice for clinical
                excellence, thoughtful care, and relationships that span generations.
                That foundation does not change.
              </p>
            </div>

            <div className="mt-8 mb-8">
              <p className="font-semibold text-foreground mb-4">We continue to believe in:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((value, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 bg-background rounded-xl p-4 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Most importantly, we remain what this community has always known us to
              be — a warm, kind, welcoming dental home where patients feel like family.
            </p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-serif text-lg italic text-accent font-bold"
            >
              Our name has evolved, but our values remain deeply rooted.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
