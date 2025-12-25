import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-primary text-primary-foreground" ref={ref}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
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
            <p>
              At Kaya Dental, we bring expertise and passion together to craft radiant, healthy 
              smiles so you can shine with confidence.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 font-serif text-xl italic text-accent"
          >
            Warmly,<br />
            <span className="font-semibold not-italic">The Kaya Dental Team</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
