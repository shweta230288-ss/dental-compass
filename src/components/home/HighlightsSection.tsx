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
    <section className="py-20 bg-secondary" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Kaya Dental?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe dental care is more than just treating teeth—it's about nurturing 
            your overall well-being, confidence, and smile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl shadow-card hover:shadow-medium transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
