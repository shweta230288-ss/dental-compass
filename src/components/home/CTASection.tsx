import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Schedule your appointment today and experience the Kaya Dental difference.
                New patients are always welcome!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Contact Info */}
              <div className="flex flex-col justify-center space-y-5 order-2 lg:order-1">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">Address</h3>
                    <p className="text-primary-foreground/80 text-sm">
                      130 N Main St Suite 1<br />
                      Leominster, MA 01453
                    </p>
                    <a
                      href="https://maps.google.com/?q=130+N+Main+St+Suite+1+Leominster+MA+01453"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-sm hover:underline mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">Phone</h3>
                    <a href="tel:978-534-4000" className="text-accent hover:underline text-lg font-medium">
                      (978) 534-4000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">Office Hours</h3>
                    <div className="text-primary-foreground/80 text-sm space-y-0.5">
                      <p>Mon - Thu: 8AM - 5PM</p>
                      <p>Fri: 7AM - 2PM</p>
                      <p>Sat & Sun: Closed</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto mt-2" asChild>
                  <a href="tel:978-534-4000">
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Schedule
                  </a>
                </Button>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-medium h-[300px] lg:h-[350px] order-1 lg:order-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.8!2d-71.7575924!3d42.536672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3ef57446db337%3A0x1911c06f2e35821!2sKaya%20Dental!5e0!3m2!1sen!2sus!4v1707000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kaya Dental Location"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}