import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const reviews = [
  {
    name: 'Shaunah',
    text: 'Today was my first visit and it was an outstanding experience! Everyone was professional and exhibited great customer service! Dr. Dani answered all my questions thoroughly.',
    rating: 5,
  },
  {
    name: 'Michelle R.',
    text: 'My experience with this office has been wonderful, and I would absolutely recommend to family and friends. The administrative staff, hygienists, and Dr. Dani are professional, welcoming, and kind.',
    rating: 5,
  },
  {
    name: 'David K.',
    text: 'You can tell that everyone in the office enjoys their job, which says a lot. 5/5 is well deserved, I\'d give 6/5 if possible! Best dental experience I\'ve ever had.',
    rating: 5,
  },
];

export function ReviewsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 pattern-dots opacity-20" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-kaya-gold/10 border border-kaya-gold/30 text-kaya-gold rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Patient Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What Our Patients{' '}
            <span className="text-gradient-multi">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 fill-kaya-gold text-kaya-gold" />
            ))}
          </div>
          <p className="text-muted-foreground text-lg">
            Over <span className="text-primary font-bold">3,400+</span> five-star reviews on Google
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative group hover:border-primary/30 transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-kaya-gold text-kaya-gold" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  {review.name.charAt(0)}
                </div>
                <p className="font-display font-bold text-foreground">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-cyan"
            asChild
          >
            <Link to="/reviews">Read All Reviews</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}