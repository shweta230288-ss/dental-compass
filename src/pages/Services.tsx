import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import serviceGeneralDentistry from '@/assets/service-general-dentistry-new.jpg';
import serviceExamCleaning from '@/assets/service-exam-cleaning-new.jpg';
import serviceFamilyDentistry from '@/assets/service-family-dentistry-new.jpg';
import serviceDentalFillings from '@/assets/service-dental-fillings-new.jpg';
import serviceCosmeticDentistry from '@/assets/service-cosmetic-dentistry-new.jpg';
import serviceTeethWhitening from '@/assets/service-teeth-whitening-new.jpg';
import serviceInvisalign from '@/assets/service-invisalign-new.jpg';
import serviceDentalImplants from '@/assets/service-dental-implants-new.jpg';
import serviceRootCanal from '@/assets/service-root-canal-new.jpg';
import serviceDentures from '@/assets/service-dentures-new.jpg';
import serviceDentalCrowns from '@/assets/service-dental-crowns-new.jpg';
import serviceEmergencyDentistry from '@/assets/service-emergency-dentistry-new.jpg';
import serviceOrthodontics from '@/assets/service-orthodontics-new.jpg';
import serviceWisdomTooth from '@/assets/service-wisdom-tooth-new.jpg';

const allServices = [
  {
    category: 'General Care',
    services: [
      { title: 'General Dentistry', path: '/services/general-dentistry', description: 'Comprehensive dental exams, cleanings, and preventive care.', image: serviceGeneralDentistry },
      { title: 'Exam and Cleaning', path: '/services/exam-cleaning', description: 'Regular checkups and professional cleaning for optimal oral health.', image: serviceExamCleaning },
      { title: 'Family Dentistry', path: '/services/family-dentistry', description: 'Gentle, comprehensive care for every family member.', image: serviceFamilyDentistry },
      { title: 'Dental Fillings', path: '/services/dental-fillings', description: 'Tooth-colored fillings to restore damaged teeth.', image: serviceDentalFillings },
    ],
  },
  {
    category: 'Cosmetic Services',
    services: [
      { title: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry', description: 'Transform your smile with veneers, bonding, and more.', image: serviceCosmeticDentistry },
      { title: 'Teeth Whitening', path: '/services/teeth-whitening', description: 'Professional whitening for a brighter, radiant smile.', image: serviceTeethWhitening },
      { title: 'Invisalign', path: '/services/invisalign', description: 'Clear aligners for discreet teeth straightening.', image: serviceInvisalign },
    ],
  },
  {
    category: 'Restorative Care',
    services: [
      { title: 'Dental Implants', path: '/services/dental-implants', description: 'Permanent tooth replacement that looks and feels natural.', image: serviceDentalImplants },
      { title: 'Root Canal', path: '/services/root-canal', description: 'Pain-free treatment to save infected teeth.', image: serviceRootCanal },
      { title: 'Dentures', path: '/services/dentures', description: 'Custom dentures for a natural-looking smile.', image: serviceDentures },
      { title: 'Dental Crowns', path: '/services/dental-crowns', description: 'Restore damaged teeth with custom-fitted crowns.', image: serviceDentalCrowns },
    ],
  },
  {
    category: 'Specialized Care',
    services: [
      { title: 'Emergency Dentistry', path: '/services/emergency-dentistry', description: 'Prompt care when dental emergencies strike.', image: serviceEmergencyDentistry },
      { title: 'Orthodontics', path: '/services/orthodontics', description: 'Traditional braces and modern alignment solutions.', image: serviceOrthodontics },
      { title: 'Wisdom Tooth Removal', path: '/services/wisdom-tooth-removal', description: 'Safe extraction of problematic wisdom teeth.', image: serviceWisdomTooth },
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
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: (catIndex * 0.1) + (index * 0.05) }}
                  >
                    <Link
                      to={service.path}
                      className="block h-full rounded-xl border border-border bg-card hover:border-accent hover:shadow-medium transition-all duration-300 group overflow-hidden"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3 md:p-5">
                        <h3 className="font-serif text-sm md:text-lg font-semibold text-foreground mb-1 md:mb-2 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-3 hidden md:block">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center text-accent text-xs md:text-sm font-medium">
                          Learn More <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                        </span>
                      </div>
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
