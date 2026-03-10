import { motion } from 'framer-motion';

const towns = ['Leominster', 'Lunenburg', 'Lancaster', 'Ayer', 'Shirley', 'Ashburnham', 'Westminster', 'Princeton', 'Gardner'];

export function ServiceAreasSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proudly Serving Our Community
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Quality dental care is never far away. We welcome patients from across North Central Massachusetts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
        >
          {towns.map((town) => (
            <span
              key={town}
              className="px-5 py-2.5 rounded-full bg-background border border-border text-foreground text-sm font-medium shadow-sm hover:border-accent hover:text-accent transition-colors"
            >
              {town}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Conveniently Located Off Route 2
          </span>
        </motion.div>
      </div>
    </section>
    </section>
  );
}
