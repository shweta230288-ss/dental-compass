import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <section className="py-20 bg-background" ref={ref}>
      <div className="container">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="bg-primary rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          
          

          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Schedule your appointment today and experience the Kaya Dental difference. 
              New patients are always welcome!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8" asChild>
                <a href="tel:978-534-4000">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (978) 534-4000
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-base px-8" asChild>
                <a href="https://maps.google.com/?q=130+N+Main+St+Suite+1+Leominster+MA+01453" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-primary-foreground/80 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span>Mon, Tue, Thu: 8AM - 5PM
Wed, Fri: 7AM - 5PM / 2PM</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span>130 N Main St Suite 1, Leominster</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                <span>(978) 534-4000</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}