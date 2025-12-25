import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive exams, cleanings, and preventive care for optimal oral health.',
    path: '/services/general-dentistry',
    image: '🦷',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, bonding, and aesthetic treatments.',
    path: '/services/cosmetic-dentistry',
    image: '✨',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements that restore your confidence.',
    path: '/services/dental-implants',
    image: '🔧',
  },
  {
    title: 'Invisalign',
    description: 'Straighten your teeth discreetly with clear, comfortable aligners.',
    path: '/services/invisalign',
    image: '😁',
  },
  {
    title: 'Emergency Care',
    description: 'Prompt treatment for dental emergencies when you need it most.',
    path: '/services/emergency-dentistry',
    image: '🚨',
  },
  {
    title: 'Family Dentistry',
    description: 'Gentle, comprehensive care for every member of your family.',
    path: '/services/family-dentistry',
    image: '👨‍👩‍👧‍👦',
  },
];

export function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 border border-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border border-primary/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-sans text-sm uppercase tracking-[0.3em] mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            Comprehensive <span className="text-gradient-gold italic">Dental Care</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            From routine checkups to advanced treatments, we offer a full range of dental 
            services to meet all your oral health needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={service.path}
                className="luxury-card block h-full p-8 group"
              >
                <span className="text-4xl mb-6 block">{service.image}</span>
                <h3 className="font-display text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-primary font-sans text-sm tracking-wide group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans tracking-wide"
            asChild
          >
            <Link to="/services">
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}