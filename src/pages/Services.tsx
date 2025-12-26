import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const allServices = [
  {
    category: 'General Care',
    services: [
      { title: 'General Dentistry', path: '/services/general-dentistry', description: 'Comprehensive dental exams, cleanings, and preventive care.' },
      { title: 'Exam and Cleaning', path: '/services/exam-cleaning', description: 'Regular checkups and professional cleaning for optimal oral health.' },
      { title: 'Family Dentistry', path: '/services/family-dentistry', description: 'Gentle, comprehensive care for every family member.' },
      { title: 'Dental Fillings', path: '/services/dental-fillings', description: 'Tooth-colored fillings to restore damaged teeth.' },
    ],
  },
  {
    category: 'Cosmetic Services',
    services: [
      { title: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry', description: 'Transform your smile with veneers, bonding, and more.' },
      { title: 'Teeth Whitening', path: '/services/teeth-whitening', description: 'Professional whitening for a brighter, radiant smile.' },
      { title: 'Invisalign', path: '/services/invisalign', description: 'Clear aligners for discreet teeth straightening.' },
      { title: 'Dental Crowns', path: '/services/dental-crowns', description: 'Custom crowns to restore strength and beauty.' },
    ],
  },
  {
    category: 'Restorative Care',
    services: [
      { title: 'Dental Implants', path: '/services/dental-implants', description: 'Permanent tooth replacement that looks and feels natural.' },
      { title: 'Root Canal', path: '/services/root-canal', description: 'Pain-free treatment to save infected teeth.' },
      { title: 'Dentures', path: '/services/dentures', description: 'Custom dentures for a natural-looking smile.' },
      { title: 'Dental Crowns', path: '/services/dental-crowns', description: 'Restore damaged teeth with custom-fitted crowns.' },
    ],
  },
  {
    category: 'Specialized Care',
    services: [
      { title: 'Emergency Dentistry', path: '/services/emergency-dentistry', description: 'Prompt care when dental emergencies strike.' },
      { title: 'Orthodontics', path: '/services/orthodontics', description: 'Traditional braces and modern alignment solutions.' },
      { title: 'Wisdom Tooth Removal', path: '/services/wisdom-tooth-removal', description: 'Safe extraction of problematic wisdom teeth.' },
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Layout>
      <Helmet>
        <title>Dental Services | Kaya Dental Leominster MA</title>
        <meta name="description" content="Comprehensive dental services at Kaya Dental including cosmetic dentistry, dental implants, Invisalign, teeth whitening, and emergency care in Leominster, MA." />
      </Helmet>

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
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              Comprehensive Dental Care
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              From routine cleanings to advanced restorative procedures, we offer a complete 
              range of dental services using state-of-the-art technology and compassionate care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background" ref={ref}>
        <div className="container">
          {allServices.map((category, catIndex) => (
            <div key={category.category} className="mb-16 last:mb-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 pb-4 border-b border-border"
              >
                {category.category}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: (catIndex * 0.1) + (index * 0.05) }}
                  >
                    <Link
                      to={service.path}
                      className="block h-full p-6 rounded-xl border border-border bg-card hover:border-accent hover:shadow-medium transition-all duration-300 group"
                    >
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center text-accent text-sm font-medium">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
