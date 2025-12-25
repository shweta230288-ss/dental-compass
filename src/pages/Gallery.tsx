import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const galleryItems = [
  { id: 1, category: 'Whitening', before: 'Before whitening treatment', after: 'After professional whitening' },
  { id: 2, category: 'Invisalign', before: 'Before Invisalign', after: 'After Invisalign treatment' },
  { id: 3, category: 'Veneers', before: 'Before veneers', after: 'After veneer placement' },
  { id: 4, category: 'Implants', before: 'Before implant', after: 'After implant restoration' },
  { id: 5, category: 'Crowns', before: 'Before crown', after: 'After crown placement' },
  { id: 6, category: 'Bonding', before: 'Before bonding', after: 'After dental bonding' },
];

const categories = ['All', 'Whitening', 'Invisalign', 'Veneers', 'Implants', 'Crowns', 'Bonding'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      <Helmet>
        <title>Smile Gallery | Before & After | Kaya Dental</title>
        <meta name="description" content="View stunning smile transformations at Kaya Dental. Browse our before and after gallery featuring teeth whitening, Invisalign, veneers, implants, and more." />
      </Helmet>

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
              Smile Gallery
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              Real Results, Real Smiles
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              See the incredible transformations we've achieved for our patients. Every smile 
              tells a story of renewed confidence and joy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-card"
              >
                <div className="grid grid-cols-2">
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border-r border-border">
                    <span className="text-muted-foreground text-sm text-center px-4">
                      {item.before}
                    </span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-secondary to-accent/10 flex items-center justify-center">
                    <span className="text-foreground text-sm text-center px-4">
                      {item.after}
                    </span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-12 text-sm"
          >
            * Actual patient results. Individual results may vary. Images are used with patient consent.
          </motion.p>
        </div>
      </section>
    </Layout>
  );
}
