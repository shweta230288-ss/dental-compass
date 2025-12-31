import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Star, Quote, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    name: 'Shaunah',
    date: 'December 2024',
    text: 'Today was my first visit and it was an outstanding experience! Everyone was professional and exhibited great customer service! Dr. Dani answered all my questions thoroughly and made me feel completely comfortable.',
    rating: 5,
  },
  {
    name: 'Michelle R.',
    date: 'November 2024',
    text: 'My experience with this office this year has been wonderful, and I would absolutely recommend to family and friends. The administrative staff, hygienists, and Dr. Dani are professional, welcoming, and kind. You can tell that everyone in the office enjoys their job, which says a lot. 5/5 is well deserved!',
    rating: 5,
  },
  {
    name: 'David K.',
    date: 'November 2024',
    text: 'Best dental experience I\'ve ever had. The office is modern and clean, the staff is incredibly friendly, and Dr. Dani takes his time to explain everything. I actually look forward to my dental appointments now!',
    rating: 5,
  },
  {
    name: 'Sarah M.',
    date: 'October 2024',
    text: 'I was nervous about getting dental work done but the entire team at Kaya Dental made me feel at ease. They were patient, gentle, and the results exceeded my expectations. Highly recommend!',
    rating: 5,
  },
  {
    name: 'James L.',
    date: 'October 2024',
    text: 'Outstanding service from start to finish. The online scheduling is convenient, wait times are minimal, and the quality of care is exceptional. Dr. Dani is truly passionate about his work.',
    rating: 5,
  },
  {
    name: 'Patricia W.',
    date: 'September 2024',
    text: 'I\'ve been coming to Kaya Dental for over a year now and couldn\'t be happier. The staff remembers my name, the office is always spotless, and Dr. Dani provides excellent care. Worth every penny!',
    rating: 5,
  },
  {
    name: 'Robert H.',
    date: 'September 2024',
    text: 'From the moment I walked in, I felt welcomed. The technology they use is impressive and the team is very knowledgeable. Got my Invisalign here and the results are amazing!',
    rating: 5,
  },
  {
    name: 'Jennifer C.',
    date: 'August 2024',
    text: 'Dr. Dani and his team are fantastic! They take the time to explain procedures and answer all questions. The office has a calming atmosphere which really helps with dental anxiety.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <Layout>
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
              Patient Reviews
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              What Our Patients Say
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-2xl font-bold">5.0</span>
            </div>
            <p className="text-primary-foreground/80 text-lg">
              Over 3,400+ five-star reviews on Google
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
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
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <p className="text-muted-foreground mb-4">
              Love your experience? Leave us a review on Google!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a 
                  href="https://search.google.com/local/writereview?placeid=ChIJr0Tv3_pW44kRl6xPQBxJQgg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Leave a Google Review
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://www.google.com/search?q=Kaya+Dental+Reviews+Leominster+MA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View All Reviews
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join thousands of satisfied patients. Schedule your appointment today!
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="tel:978-534-4000">
                <Phone className="w-5 h-5 mr-2" />
                Call (978) 534-4000
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
