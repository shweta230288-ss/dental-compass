import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

export function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background with Gradient Border */}
      <div className="absolute inset-4 md:inset-8 rounded-3xl border border-gradient bg-secondary/50 backdrop-blur-sm" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Quote className="w-16 h-16 mx-auto text-primary/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            <span className="text-gradient-cyan">"Kaya"</span>
            <span className="text-foreground"> — Body, Wellness & Wholeness</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Kaya Dental, our name carries a deeper meaning—it comes from the Sanskrit word 
              <span className="text-primary font-semibold"> "Kaya," meaning body, wellness, and wholeness</span>. 
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
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <p className="font-display text-xl text-accent italic mb-2">
              Warmly,
            </p>
            <p className="font-display text-2xl font-bold text-gradient-magenta">
              The Kaya Dental Team
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}