import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import amyPhotoAsset from '@/assets/amy-majzoub.jpg.asset.json';

export function DoctorAmySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });

  return (
    <section className="py-12 md:py-20 bg-secondary" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-sm lg:max-w-md mx-auto">
              <img
                alt="Dr. Amy Majzoub, DMD - Kaya Dental"
                className="w-full h-auto object-cover"
                src={amyPhotoAsset.url}
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <div className="lg:pl-8 order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Associate Dentist
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6"
            >
              Dr. Amy Majzoub, DMD
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-muted-foreground leading-relaxed mb-8"
            >
              <p>
                Dr. Amy Majzoub brings a gentle, patient-centered approach to every appointment, 
                blending clinical excellence with genuine compassion. She takes time to listen, 
                explain options clearly, and create treatment plans that feel right for your goals 
                and comfort.
              </p>
              <p>
                "I believe dental care should feel personal, not rushed. My goal is to help every 
                patient feel confident and cared for, from the first hello to the final result."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button variant="default" size="lg" asChild>
                <Link to="/about" className="inline-flex items-center">
                  Learn More About Dr. Amy
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

