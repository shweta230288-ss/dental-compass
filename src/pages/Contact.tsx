import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              Get in Touch
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Have questions or ready to schedule an appointment? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-secondary">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">Phone</h3>
                    <a href="tel:978-534-4000" className="text-accent hover:underline text-base md:text-lg font-medium">
                      (978) 534-4000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-secondary">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      130 N Main St Suite 1<br />
                      Leominster, MA 01453
                    </p>
                    <a 
                      href="https://maps.google.com/?q=130+N+Main+St+Suite+1+Leominster+MA+01453"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-xs md:text-sm hover:underline mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-secondary">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">Email</h3>
                    <a href="mailto:Cronindental88@gmail.com" className="text-accent hover:underline text-sm md:text-base">
                      Cronindental88@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-secondary">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm md:text-base mb-2">Office Hours</h3>
                    <div className="text-muted-foreground text-xs md:text-sm space-y-1">
                      <div className="flex justify-between gap-6 md:gap-8">
                        <span>Mon, Tue, Thu</span>
                        <span>8AM - 5PM</span>
                      </div>
                      <div className="flex justify-between gap-6 md:gap-8">
                        <span>Wed, Fri</span>
                        <span>7AM - 5PM / 2PM</span>
                      </div>
                      <div className="flex justify-between gap-6 md:gap-8">
                        <span>Sat & Sun</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="tel:978-534-4000">
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Schedule
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-medium h-[500px] lg:h-auto"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.5694565!2d-71.7607!3d42.5245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3fa5f5c5d5d5d%3A0x5d5d5d5d5d5d5d5d!2s130%20N%20Main%20St%20%231%2C%20Leominster%2C%20MA%2001453!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kaya Dental Location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
