import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import drDaniPhoto from '@/assets/dr-kunal-dani.jpg';
export function DoctorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <section className="py-20 bg-background" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="lg:pr-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6
          }}>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Meet Your Dentist
              </span>
            </motion.div>

            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">Dr. Kunal Dani, DMD</motion.h2>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Dr. Kunal Dani brings a passion for dentistry and a commitment to patient-centered 
                care to every appointment. With advanced training in cosmetic and restorative 
                dentistry, he combines clinical excellence with a gentle, compassionate approach.
              </p>
              <p>
                "I believe every patient deserves to feel comfortable, informed, and confident 
                in their dental care. My goal is to help you achieve a healthy, beautiful smile 
                that lasts a lifetime."
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              <Button variant="default" size="lg" asChild>
                <Link to="/about" className="inline-flex items-center">
                  Learn More About Dr. Dani
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6
        }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={drDaniPhoto} alt="Dr. Kunal Dani, DDS - Kaya Dental" className="w-full h-auto object-cover" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>;
}