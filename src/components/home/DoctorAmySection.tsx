import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap } from 'lucide-react';
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
                Meet Your Dentist
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
                Dr. Amy Majzoub is proud to provide compassionate, personalized dental care built on trust, honesty, and lasting patient relationships. She believes in preserving natural teeth whenever possible and creating thoughtful treatment plans that prioritize long-term oral health and patient comfort.
              </p>
              <p>
                A graduate of the University of Connecticut School of Dental Medicine, Dr. Majzoub combines strong clinical expertise with a gentle, patient-centered approach. She is known for taking the time to listen carefully, explain treatment options clearly, and help patients feel confident and comfortable in every step of their care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-primary to-kaya-navy-dark rounded-xl p-6 text-primary-foreground mb-8"
            >
              <GraduationCap className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-serif text-lg font-bold mb-3">Education & Credentials</h3>
              <ul className="space-y-2 text-primary-foreground/90 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Doctor of Dental Medicine (DMD), University of Connecticut School of Dental Medicine
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Compassionate, patient-centered approach with a focus on long-term oral health
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Committed to preserving natural teeth whenever possible
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button variant="default" size="lg" asChild>
                <Link to="/about" className="inline-flex items-center">
                  Meet Our Team
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
