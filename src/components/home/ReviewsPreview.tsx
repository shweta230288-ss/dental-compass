import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const reviews = [{
  name: 'Shaunah',
  text: 'Today was my first visit and it was an outstanding experience! Everyone was professional and exhibited great customer service! Dr. Dani answered all my questions thoroughly.',
  rating: 5
}, {
  name: 'Michelle R.',
  text: 'My experience with this office has been wonderful, and I would absolutely recommend to family and friends. The administrative staff, hygienists, and Dr. Dani are professional, welcoming, and kind.',
  rating: 5
}, {
  name: 'David K.',
  text: 'You can tell that everyone in the office enjoys their job, which says a lot. 5/5 is well deserved, I\'d give 6/5 if possible! Best dental experience I\'ve ever had.',
  rating: 5
}];
export function ReviewsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <section className="py-12 bg-secondary md:py-[50px]" ref={ref}>
      <div className="container">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-8 md:mb-14">
          <span className="text-accent font-medium text-xs md:text-sm uppercase tracking-wider">
            Patient Success Stories
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mt-1 md:mt-2 mb-2 md:mb-4">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-1 md:gap-2 mb-2 md:mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-accent text-accent" />)}
          </div>
          <p className="text-muted-foreground text-sm md:text-base">
            Over 3,400+ five-star reviews on Google
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {reviews.map((review, index) => <motion.div key={review.name} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-card p-5 md:p-8 rounded-xl shadow-card relative">
              <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-8 md:h-8 text-accent/20" />
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent text-accent" />)}
              </div>
              <p className="text-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                "{review.text}"
              </p>
              <p className="font-semibold text-foreground text-sm md:text-base">{review.name}</p>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/reviews">Read All Stories</Link>
          </Button>
        </motion.div>
      </div>
    </section>;
}