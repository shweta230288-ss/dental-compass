import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Clock, Heart, Sparkles, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: 'Clinical Excellence',
    description: 'State-of-the-art technology combined with years of expertise',
    color: 'primary',
  },
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Every smile tells a story, and we\'re honored to be part of yours',
    color: 'accent',
  },
  {
    icon: Users,
    title: 'Family-Friendly',
    description: 'Welcoming patients of all ages with personalized treatment plans',
    color: 'kaya-purple',
  },
  {
    icon: Clock,
    title: 'Convenient Hours',
    description: 'Flexible scheduling to accommodate your busy lifestyle',
    color: 'kaya-gold',
  },
  {
    icon: Sparkles,
    title: 'Modern Technology',
    description: 'Digital X-rays, 3D printing, AI diagnostics, and more',
    color: 'primary',
  },
  {
    icon: Shield,
    title: 'Insurance Friendly',
    description: 'We work with most insurance providers and offer membership plans',
    color: 'accent',
  },
];

const colorClasses = {
  primary: {
    bg: 'bg-primary/10',
    bgHover: 'group-hover:bg-primary',
    text: 'text-primary',
    textHover: 'group-hover:text-primary-foreground',
    border: 'border-primary/20',
    glow: 'group-hover:shadow-[0_0_30px_hsl(175_85%_50%/0.3)]',
  },
  accent: {
    bg: 'bg-accent/10',
    bgHover: 'group-hover:bg-accent',
    text: 'text-accent',
    textHover: 'group-hover:text-accent-foreground',
    border: 'border-accent/20',
    glow: 'group-hover:shadow-[0_0_30px_hsl(325_80%_60%/0.3)]',
  },
  'kaya-purple': {
    bg: 'bg-kaya-purple/10',
    bgHover: 'group-hover:bg-kaya-purple',
    text: 'text-kaya-purple',
    textHover: 'group-hover:text-white',
    border: 'border-kaya-purple/20',
    glow: 'group-hover:shadow-[0_0_30px_hsl(270_70%_60%/0.3)]',
  },
  'kaya-gold': {
    bg: 'bg-kaya-gold/10',
    bgHover: 'group-hover:bg-kaya-gold',
    text: 'text-kaya-gold',
    textHover: 'group-hover:text-background',
    border: 'border-kaya-gold/20',
    glow: 'group-hover:shadow-[0_0_30px_hsl(45_90%_55%/0.3)]',
  },
};

export function HighlightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Why Choose{' '}
            <span className="text-gradient-multi">Kaya Dental?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We believe dental care is more than just treating teeth—it's about nurturing 
            your overall well-being, confidence, and smile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const colors = colorClasses[item.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass p-8 rounded-2xl border ${colors.border} hover:border-transparent transition-all duration-500 group cursor-pointer ${colors.glow}`}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.bgHover} flex items-center justify-center mb-5 transition-all duration-300`}>
                  <item.icon className={`w-7 h-7 ${colors.text} ${colors.textHover} transition-colors`} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gradient-multi transition-all">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}