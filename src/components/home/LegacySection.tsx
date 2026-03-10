import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import drDaniCronin from '@/assets/dr-dani-dr-cronin.jpg';

const values = [
  'Truly patient-centered, individualized treatment',
  'Clinical expertise grounded in experience and integrity',
  'Respect for each patient\'s opinions and goals',
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
          <div className="w-16 h-0.5 bg-accent mx-auto mb-4" />
          <p className="text-accent font-serif text-lg italic">
            60 years — proudly serving the Leominster area since 1961
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-lg mx-auto">
              <img
                src={drDaniCronin}
                alt="Dr. Michael Cronin and Dr. Kunal Dani at Kaya Dental"
                className="w-full h-[400px] md:h-[500px] object-cover object-[center_55%]"
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
              className="font-serif text-lg italic text-accent"
            >
              Our name has evolved, but our values remain deeply rooted.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
