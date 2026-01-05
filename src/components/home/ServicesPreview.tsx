import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Service images
import generalDentistryImg from '@/assets/service-general-dentistry-new.jpg';
import cosmeticDentistryImg from '@/assets/service-cosmetic-dentistry-new.jpg';
import dentalImplantsImg from '@/assets/service-dental-implants-new.jpg';
import invisalignImg from '@/assets/service-invisalign-new.jpg';
import emergencyDentistryImg from '@/assets/service-emergency-dentistry-new.jpg';
import familyDentistryImg from '@/assets/service-family-dentistry-new.jpg';

interface Service {
  title: string;
  description: string;
  path: string;
  image: string;
}

const services: Service[] = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive exams, cleanings, and preventive care for optimal oral health.',
    path: '/services/general-dentistry',
    image: generalDentistryImg,
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, bonding, and aesthetic treatments.',
    path: '/services/cosmetic-dentistry',
    image: cosmeticDentistryImg,
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements that restore your confidence.',
    path: '/services/dental-implants',
    image: dentalImplantsImg,
  },
  {
    title: 'Invisalign',
    description: 'Straighten your teeth discreetly with clear, comfortable aligners.',
    path: '/services/invisalign',
    image: invisalignImg,
  },
  {
    title: 'Emergency Care',
    description: 'Prompt treatment for dental emergencies when you need it most.',
    path: '/services/emergency-dentistry',
    image: emergencyDentistryImg,
  },
  {
    title: 'Family Dentistry',
    description: 'Gentle, comprehensive care for every member of your family.',
    path: '/services/family-dentistry',
    image: familyDentistryImg,
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.path}
                className="block h-full rounded-xl border border-border bg-card overflow-hidden hover:border-accent hover:shadow-medium transition-all duration-300 group"
              >
                <div className="relative h-24 md:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="font-serif text-sm md:text-xl font-semibold text-foreground mb-1 md:mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-4 leading-relaxed hidden md:block">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-accent text-xs md:text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
