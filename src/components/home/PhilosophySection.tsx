import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-kaya-charcoal text-kaya-cream relative overflow-hidden" ref={ref}>
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-40 h-40 border border-primary/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-60 h-60 border border-primary/20 rounded-full" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-sans text-sm uppercase tracking-[0.3em] mb-4 block">
              Our Philosophy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
          >
            <span className="text-gradient-gold italic">"Kaya"</span>
            <span className="text-kaya-cream"> — Body, Wellness & Wholeness</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-px bg-gradient-gold mx-auto mb-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 text-lg text-kaya-cream/80 leading-relaxed font-body"
          >
            <p>
              Kaya Dental, our name carries a deeper meaning—it comes from the Sanskrit word 
              <span className="text-primary font-medium"> "Kaya," meaning body, wellness, and wholeness</span>. 
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <p className="font-display text-xl text-primary italic mb-2">
              Warmly,
            </p>
            <p className="font-display text-2xl font-medium text-gradient-gold">
              The Kaya Dental Team
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}