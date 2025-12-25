import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin, Sparkles, ArrowRight } from 'lucide-react';
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
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-kaya-purple/20" />
          <div className="absolute inset-0 pattern-grid opacity-10" />
          
          {/* Glowing Orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/30 rounded-full blur-3xl" />

          {/* Border Gradient Effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-gradient" />

          <div className="relative p-10 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Start Your Journey
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Ready to Transform{' '}
              <span className="text-gradient-multi">Your Smile?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg"
            >
              Schedule your appointment today and experience the Kaya Dental difference. 
              New patients are always welcome!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 font-semibold glow-cyan group"
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
                className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent text-base px-8"
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
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { icon: '🕐', label: 'Mon-Fri: 8AM-5PM', color: 'primary' },
                { icon: '📍', label: '130 N Main St Suite 1, Leominster', color: 'accent' },
                { icon: '📞', label: '(978) 534-4000', color: 'kaya-purple' },
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className={`flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}