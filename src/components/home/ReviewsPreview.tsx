import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
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
    <section className="py-24 bg-secondary relative overflow-hidden" ref={ref}>
      {/* Decorative Lines */}
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
            Patient Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            What Our <span className="text-gradient-gold italic">Patients Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground font-body">
            Over <span className="text-primary font-medium">3,400+</span> five-star reviews on Google
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="luxury-card p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-foreground font-body mb-6 leading-relaxed italic">
                "{review.text}"
              </p>
              
              {/* Divider */}
              <div className="w-12 h-px bg-gradient-gold mb-4" />
              
              {/* Author */}
              <p className="font-display font-medium text-foreground">{review.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans tracking-wide shadow-gold"
            asChild
          >
            <Link to="/reviews">Read All Reviews</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}