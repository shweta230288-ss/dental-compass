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
    <section className="py-20 bg-secondary" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Patient Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-muted-foreground">
            Over 3,400+ five-star reviews on Google
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl shadow-card relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <p className="font-semibold text-foreground">{review.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/reviews">Read All Reviews</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
