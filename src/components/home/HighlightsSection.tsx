import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Building, Heart, Sparkles, Shield } from 'lucide-react';
import { ReviewBadges } from '@/components/reviews/ReviewBadges';

const highlights = [
  {
    icon: Award,
    title: 'Clinical Excellence',
    description: 'Experienced Leominster dentists delivering precise, modern care tailored to your goals and comfort.'
  },
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Every patient is treated like family. We listen first, explain clearly, and move at your pace.'
  },
  {
    icon: Users,
    title: 'Family-Friendly',
    description: 'Welcoming children, parents, and grandparents with personalized dental care for every age.'
  },
  {
    icon: Building,
    title: 'Independently Owned',
    description: 'A local Leominster dental practice built on relationships, not corporate quotas.'
  },
  {
    icon: Sparkles,
    title: 'Modern Technology',
    description: 'CBCT 3D imaging, digital X-rays, 3D printing, and AI diagnostics for safer, faster visits.'
  },
  {
    icon: Shield,
    title: 'Insurance Friendly',
    description: 'We work with most insurance plans and offer flexible membership and financing options.'
  }
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
          className="text-center mb-14">

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Kaya Dental in Leominster?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Kaya Dental, your smile, comfort, and trust come first. Our Leominster dental team combines advanced technology with genuine, patient-centered care to help every family in our community feel confident about their dental health.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {highlights.map((item, index) =>
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card p-4 md:p-8 rounded-xl shadow-card hover:shadow-medium transition-all duration-300 group">

              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-base md:text-xl font-semibold text-foreground mb-1 md:mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed hidden md:block">
                {item.description}
              </p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center">
          <p className="font-serif text-xl md:text-2xl text-foreground mb-6">
            See why our patients chose us over others.
          </p>
          <ReviewBadges variant="dark" size="lg" className="mx-auto" />
        </motion.div>
      </div>
    </section>);

}
