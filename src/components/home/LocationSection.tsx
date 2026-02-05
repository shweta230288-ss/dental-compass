import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function LocationSection() {
  return <section className="bg-secondary py-[50px]" aria-labelledby="location-heading">
      <div className="container">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Visit Us
          </span>
          <h2 id="location-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Conveniently Located in Leominster
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're easy to find and ready to welcome you. Stop by our modern, comfortable office.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="rounded-2xl overflow-hidden shadow-medium h-[350px] lg:h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.8!2d-71.7575924!3d42.536672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3ef57446db337%3A0x1911c06f2e35821!2sKaya%20Dental!5e0!3m2!1sen!2sus!4v1707000000000" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kaya Dental Location" />
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }} className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">
                  130 N Main St Suite 1<br />
                  Leominster, MA 01453
                </p>
                <a href="https://maps.google.com/?q=130+N+Main+St+Suite+1+Leominster+MA+01453" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline mt-1 inline-block">
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:978-534-4000" className="text-accent hover:underline text-lg font-medium">
                  (978) 534-4000
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Mon - Thu: 8AM - 5PM</p>
                  <p>Fri: 7AM - 2PM</p>
                  <p>Sat & Sun: Closed</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto mt-4" asChild>
              <a href="tel:978-534-4000">
                <Phone className="w-5 h-5 mr-2" />
                Call to Schedule
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
}