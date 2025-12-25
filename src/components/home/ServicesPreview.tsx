import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Sparkles, Users, AlertCircle, Wrench, SmilePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive exams, cleanings, and preventive care for optimal oral health.',
    path: '/services/general-dentistry',
    icon: Stethoscope,
    color: 'primary',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, bonding, and aesthetic treatments.',
    path: '/services/cosmetic-dentistry',
    icon: Sparkles,
    color: 'accent',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements that restore your confidence.',
    path: '/services/dental-implants',
    icon: Wrench,
    color: 'kaya-purple',
  },
  {
    title: 'Invisalign',
    description: 'Straighten your teeth discreetly with clear, comfortable aligners.',
    path: '/services/invisalign',
    icon: SmilePlus,
    color: 'kaya-gold',
  },
  {
    title: 'Emergency Care',
    description: 'Prompt treatment for dental emergencies when you need it most.',
    path: '/services/emergency-dentistry',
    icon: AlertCircle,
    color: 'accent',
  },
  {
    title: 'Family Dentistry',
    description: 'Gentle, comprehensive care for every member of your family.',
    path: '/services/family-dentistry',
    icon: Users,
    color: 'primary',
  },
];

const colorClasses = {
  primary: 'text-primary border-primary/30 hover:border-primary hover:shadow-[0_0_40px_hsl(175_85%_50%/0.2)]',
  accent: 'text-accent border-accent/30 hover:border-accent hover:shadow-[0_0_40px_hsl(325_80%_60%/0.2)]',
  'kaya-purple': 'text-kaya-purple border-kaya-purple/30 hover:border-kaya-purple hover:shadow-[0_0_40px_hsl(270_70%_60%/0.2)]',
  'kaya-gold': 'text-kaya-gold border-kaya-gold/30 hover:border-kaya-gold hover:shadow-[0_0_40px_hsl(45_90%_55%/0.2)]',
};

export function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Comprehensive{' '}
            <span className="text-gradient-cyan">Dental Care</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.path}
                className={`block h-full p-8 rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-500 group ${colorClasses[service.color as keyof typeof colorClasses]}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-current/10 flex items-center justify-center mb-5`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-current transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
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