import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Star, Quote, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/seo/SEOHead';
const reviews = [
  {
    name: 'Abenc78',
    text: 'To start, I usually do not like going to the dentist\'s office since my old dentist retired few years back. I decided to try my kids\' dentist, Dr. Kunal Dani, whom I already knew was excellent from the work he had done on the kids teeth. Dr. Dani is very skilled and worked patiently to assure that I was comfortable. The office staff are kind, accommodating, and upfront with expectations and cost. Highly recommend Dr. Dani.',
    rating: 5,
  },
  {
    name: 'Richard Ortwein',
    text: 'This was our first time using Kaya Dental, we were there for a cleaning. A co-worker recommended them. We were very pleased with the service provided. The clerical staff, hygienist, and dentist were all very welcoming and pleasant to interact with. The staff are knowledgeable and do not try to up-sell their services. The office and rooms are very clean and the decor is calming. Would definitely recommend this dentist to anyone.',
    rating: 5,
  },
  {
    name: 'Beth MacBrian',
    text: 'I was hesitant to come here as I was not a fan of Dr. Cronin in the past, however I broke 2 teeth and was desperate for help. I\'m happy to say that I was very pleased with the care I received. The office got me in quickly to see Dr. Dani. They were able to squeeze me in for a cleaning and they used some stuff so my gums wouldn\'t hurt! Very happy with the service I got here and I\'ll definitely be back.',
    rating: 5,
  },
  {
    name: 'Crystal Blanchard',
    text: 'Dr. Dani and his Staff made my difficult dental journey amazing! My final appointment (from many stages) gave me the best smile I\'ve ever had! I have had bonded teeth for 35 yrs and I couldn\'t be happier with a bridge and veneers. Kaya Dental has important things like a truly skilled and professional Staff. They use advanced technology dental equipment that makes the whole process easy.',
    rating: 5,
  },
  {
    name: 'Natalia Spicer',
    text: 'I recently had a filling done by Dr. Kunal Dani, and I can confidently say he\'s one of the most caring and professional dentists I\'ve ever seen. From the moment I sat down, he made sure I felt comfortable and at ease. Dr. Dani was incredibly kind and reassuring. He allowed my kids to stay in the room with me, which made me feel so much more relaxed.',
    rating: 5,
  },
  {
    name: 'Donna Jeselson',
    text: 'Erica did an outstanding job cleaning my teeth and under my gums. Her evaluations of my gum and teeth health and consequential recommendations were excellent. Dr. Dani also did a thorough assessment of my oral health. Stellar team: conscientious, nice, working for your best smile.',
    rating: 5,
  },
  {
    name: 'Shaunah',
    text: 'Today was my first visit and it was an outstanding experience! Everyone was professional and exhibited great customer service! Dr. Dani answered all my questions thoroughly and made me feel completely comfortable.',
    rating: 5,
  },
  {
    name: 'Michelle R.',
    text: 'My experience with this office this year has been wonderful, and I would absolutely recommend to family and friends. The administrative staff, hygienists, and Dr. Dani are professional, welcoming, and kind. You can tell that everyone in the office enjoys their job, which says a lot. 5/5 is well deserved!',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <Layout>
      <SEOHead
        title="Patient Reviews | Trusted Dentist in Leominster MA | Kaya Dental"
        description="Read 3,400+ five-star reviews from Kaya Dental patients. See why we're the trusted dentist in Leominster, MA. Dr. Kunal Dani and our compassionate team."
        canonicalPath="/reviews"
      />
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
              Patient Success Stories
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
              Over 3,400+ five-star reviews on{' '}
              <a 
                href="https://www.google.com/search?q=kaya+dental&rlz=1C5CHFA_enUS1192US1192&oq=kaya+de&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYQDIGCAMQRRg5MgcIBBAuGIAEMgcIBRAAGIAEMgYIBhBFGD0yBggHEEUYPdIBCDQxNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&zx=1768166807866&no_sw_cr=1#lrd=0x89e3ef57446db337:0x1911c06f2e35821,1,,,," 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-accent transition-colors"
              >
                Google
              </a>
              {' '}and{' '}
              <a 
                href="https://local.demandforce.com/b/leominsterdentistry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-accent transition-colors"
              >
                Demandforce
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card p-4 md:p-8 rounded-xl shadow-card relative"
              >
                <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-8 md:h-8 text-accent/20" />
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-sm md:text-base mb-4 md:mb-6 leading-relaxed line-clamp-4 md:line-clamp-none">
                  "{review.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">{review.name}</p>
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
