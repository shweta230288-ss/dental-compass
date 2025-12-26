import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Stethoscope, 
  ClipboardCheck, 
  Users, 
  CircleDot,
  Sparkles,
  Sun,
  AlignCenter,
  Crown,
  Puzzle,
  Heart,
  Smile,
  AlertCircle,
  GitBranch,
  CircleX,
  LucideIcon
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface ServiceItem {
  title: string;
  path: string;
  description: string;
  icon: LucideIcon;
}

interface ServiceCategory {
  category: string;
  services: ServiceItem[];
}

const allServices: ServiceCategory[] = [
  {
    category: 'General Care',
    services: [
      { title: 'General Dentistry', path: '/services/general-dentistry', description: 'Comprehensive dental exams, cleanings, and preventive care.', icon: Stethoscope },
      { title: 'Exam and Cleaning', path: '/services/exam-cleaning', description: 'Regular checkups and professional cleaning for optimal oral health.', icon: ClipboardCheck },
      { title: 'Family Dentistry', path: '/services/family-dentistry', description: 'Gentle, comprehensive care for every family member.', icon: Users },
      { title: 'Dental Fillings', path: '/services/dental-fillings', description: 'Tooth-colored fillings to restore damaged teeth.', icon: CircleDot },
    ],
  },
  {
    category: 'Cosmetic Services',
    services: [
      { title: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry', description: 'Transform your smile with veneers, bonding, and more.', icon: Sparkles },
      { title: 'Teeth Whitening', path: '/services/teeth-whitening', description: 'Professional whitening for a brighter, radiant smile.', icon: Sun },
      { title: 'Invisalign', path: '/services/invisalign', description: 'Clear aligners for discreet teeth straightening.', icon: AlignCenter },
      { title: 'Dental Crowns', path: '/services/dental-crowns', description: 'Custom crowns to restore strength and beauty.', icon: Crown },
    ],
  },
  {
    category: 'Restorative Care',
    services: [
      { title: 'Dental Implants', path: '/services/dental-implants', description: 'Permanent tooth replacement that looks and feels natural.', icon: Puzzle },
      { title: 'Root Canal', path: '/services/root-canal', description: 'Pain-free treatment to save infected teeth.', icon: Heart },
      { title: 'Dentures', path: '/services/dentures', description: 'Custom dentures for a natural-looking smile.', icon: Smile },
      { title: 'Dental Crowns', path: '/services/dental-crowns', description: 'Restore damaged teeth with custom-fitted crowns.', icon: Crown },
    ],
  },
  {
    category: 'Specialized Care',
    services: [
      { title: 'Emergency Dentistry', path: '/services/emergency-dentistry', description: 'Prompt care when dental emergencies strike.', icon: AlertCircle },
      { title: 'Orthodontics', path: '/services/orthodontics', description: 'Traditional braces and modern alignment solutions.', icon: GitBranch },
      { title: 'Wisdom Tooth Removal', path: '/services/wisdom-tooth-removal', description: 'Safe extraction of problematic wisdom teeth.', icon: CircleX },
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
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <service.icon className="w-6 h-6 text-primary group-hover:text-accent-foreground transition-colors" />
                      </div>
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
