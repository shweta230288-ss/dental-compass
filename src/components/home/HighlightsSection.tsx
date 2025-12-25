import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Clock, Heart, Sparkles, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: 'Clinical Excellence',
    description: 'State-of-the-art technology combined with years of expertise',
  },
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Every smile tells a story, and we\'re honored to be part of yours',
  },
  {
    icon: Users,
    title: 'Family-Friendly',
    description: 'Welcoming patients of all ages with personalized treatment plans',
  },
  {
    icon: Clock,
    title: 'Convenient Hours',
    description: 'Flexible scheduling to accommodate your busy lifestyle',
  },
  {
    icon: Sparkles,
    title: 'Modern Technology',
    description: 'Digital X-rays, 3D printing, AI diagnostics, and more',
  },
  {
    icon: Shield,
    title: 'Insurance Friendly',
    description: 'We work with most insurance providers and offer membership plans',
  },
];

export function HighlightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-secondary relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 gold-line" />
      <div className="absolute bottom-0 left-0 right-0 gold-line" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-sans text-sm uppercase tracking-[0.3em] mb-4 block">
            The Kaya Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            Why Choose <span className="text-gradient-gold italic">Kaya Dental?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            We believe dental care is more than just treating teeth—it's about nurturing 
            your overall well-being, confidence, and smile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="luxury-card p-10 text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:shadow-gold transition-all duration-500">
                <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}