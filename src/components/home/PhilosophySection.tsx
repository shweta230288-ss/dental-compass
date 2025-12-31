import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import teamPhoto from '@/assets/team-photo.jpg';
import officeFrontDesk from '@/assets/office-front-desk.jpg';

export function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-primary text-primary-foreground" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="rounded-2xl shadow-2xl overflow-hidden h-80 md:h-96">
                <img
                  src={teamPhoto}
                  alt="Kaya Dental team providing compassionate care"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 w-48 md:w-56 rounded-xl overflow-hidden shadow-xl border-4 border-primary hidden md:block"
              >
                <img
                  src={officeFrontDesk}
                  alt="Kaya Dental welcoming front desk"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Our Philosophy
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-8"
            >
              <span className="text-accent">"Kaya"</span> — Body, Wellness & Wholeness
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-primary-foreground/90 leading-relaxed"
            >
              <p>
                Kaya Dental, our name carries a deeper meaning—it comes from the Sanskrit word 
                <span className="text-accent font-semibold"> "Kaya," meaning body, wellness, and wholeness</span>. 
                To us, dental care is more than just treating teeth; it's about nurturing your overall 
                well-being, confidence, and smile.
              </p>
              <p>
                Every smile tells a story, and we're honored to be part of yours. Our philosophy is 
                personalized care rooted in warmth, trust, and compassion, guided by a deep commitment 
                to clinical excellence.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 font-serif text-xl italic text-accent"
            >
              Warmly,<br />
              <span className="font-semibold not-italic">The Kaya Dental Team</span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
