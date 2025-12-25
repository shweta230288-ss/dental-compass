import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-lg overflow-hidden shadow-elegant"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-kaya-charcoal" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-primary/5 rounded-full" />

          <div className="relative p-12 md:p-20 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-primary font-sans text-sm uppercase tracking-[0.3em] mb-4 block"
            >
              Begin Your Journey
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-kaya-cream mb-6"
            >
              Ready to Transform{' '}
              <span className="text-gradient-gold italic">Your Smile?</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-24 h-px bg-gradient-gold mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-kaya-cream/70 max-w-2xl mx-auto mb-10 text-lg font-body"
            >
              Schedule your appointment today and experience the Kaya Dental difference. 
              New patients are always welcome.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans tracking-wide shadow-gold group"
                asChild
              >
                <a href="tel:978-534-4000">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (978) 534-4000
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-kaya-cream/30 text-kaya-cream hover:bg-kaya-cream/10 hover:border-kaya-cream/50 font-sans tracking-wide"
                asChild
              >
                <a href="https://maps.google.com/?q=130+N+Main+St+Suite+1+Leominster+MA+01453" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 text-kaya-cream/60 font-sans text-sm tracking-wide"
            >
              <span>Mon-Fri: 8AM-5PM</span>
              <span className="hidden md:block text-primary">✦</span>
              <span>130 N Main St Suite 1, Leominster</span>
              <span className="hidden md:block text-primary">✦</span>
              <span>(978) 534-4000</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}