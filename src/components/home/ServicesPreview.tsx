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
    icon: '🦷',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, bonding, and aesthetic treatments.',
    path: '/services/cosmetic-dentistry',
    icon: '✨',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements that restore your confidence.',
    path: '/services/dental-implants',
    icon: '🔧',
  },
  {
    title: 'Invisalign',
    description: 'Straighten your teeth discreetly with clear, comfortable aligners.',
    path: '/services/invisalign',
    icon: '😁',
  },
  {
    title: 'Emergency Care',
    description: 'Prompt treatment for dental emergencies when you need it most.',
    path: '/services/emergency-dentistry',
    icon: '🚨',
  },
  {
    title: 'Family Dentistry',
    description: 'Gentle, comprehensive care for every member of your family.',
    path: '/services/family-dentistry',
    icon: '👨‍👩‍👧‍👦',
  },
];

export function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            From routine checkups to advanced treatments, we offer a full range of dental 
            services to meet all your oral health needs.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.path}
                className="block h-full p-8 rounded-xl border border-border bg-card hover:border-accent hover:shadow-medium transition-all duration-300 group"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
