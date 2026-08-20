import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Phone, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/seo/SEOHead';
import { ReviewBadges } from '@/components/reviews/ReviewBadges';
import traumaCase1 from '@/assets/trauma-case-1.png.asset.json';
import traumaCase2 from '@/assets/trauma-case-2.png.asset.json';
import allOnXCase from '@/assets/all-on-x-case.png.asset.json';
import cosmeticCrownsCase from '@/assets/cosmetic-crowns-case.png.asset.json';

const cases = [
  {
    title: 'Chipped Front Teeth After a Fall',
    image: traumaCase1.url,
    alt: 'Before and after photos of chipped front teeth repaired with tooth-colored bonding at Kaya Dental in Leominster, MA',
    treatment: 'Same-day composite bonding',
    summary:
      'A patient came to us after fracturing both upper front teeth. Using tooth-colored composite bonding, the natural shape, length, and shade were rebuilt in a single visit — no drilling of healthy tooth structure required.',
  },
  {
    title: 'Fractured Enamel Edges Restored',
    image: traumaCase2.url,
    alt: 'Before and after photos of fractured tooth edges restored with cosmetic bonding at Kaya Dental in Leominster, MA',
    treatment: 'Cosmetic edge reshaping and bonding',
    summary:
      'Uneven, chipped edges from dental trauma were smoothed and rebuilt to restore a balanced, natural-looking smile line while preserving as much original enamel as possible.',
  },
  {
    title: 'Full-Mouth Restoration with All-on-X',
    image: allOnXCase.url,
    alt: 'Before and after photos of a full-mouth restoration using All-on-X dental implants at Kaya Dental in Leominster, MA',
    treatment: 'All-on-X implant-supported restoration',
    summary:
      'A patient struggling with multiple failing teeth received a complete, implant-supported full-arch restoration. The result is a secure, natural-looking smile rebuilt for long-term comfort and confidence.',
  },
  {
    title: 'Cosmetic Crowns Transformation',
    image: cosmeticCrownsCase.url,
    alt: 'Before and after photos of cosmetic dental crowns placed at Kaya Dental in Leominster, MA',
    treatment: 'Custom ceramic crowns',
    summary:
      'A damaged and discolored front tooth was restored with a custom ceramic crown that matched the shape, shade, and translucency of the surrounding teeth for a seamless result.',
  },
];

const highlights = [
  {
    icon: Clock,
    title: 'Same-Day Appointments',
    text: 'Need care quickly? We reserve time each day for urgent visits so you can get relief without the long wait.',
  },
  {
    icon: Sparkles,
    title: 'Natural-Looking Results',
    text: 'Shade-matched materials and precise technique help every restoration blend beautifully with your smile.',
  },
  {
    icon: ShieldCheck,
    title: 'Conservative Approach',
    text: 'We preserve healthy tooth structure whenever possible, treating only what needs treating.',
  },
];

export default function SmileGallery() {
  return (
    <Layout>
      <SEOHead
        title="Smile Gallery | Before & After Results in Leominster, MA | Kaya Dental"
        description="Explore real before and after smile transformations from Kaya Dental, your trusted dentist in Leominster, MA. See results from bonding, implants, All-on-X, and more."
        canonicalPath="/smile-gallery"
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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Smile Gallery
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Real results from real patients. These before and after photos showcase the kind of
              transformations we create every day right here in Leominster, MA — from subtle repairs
              to full smile makeovers.
            </p>
            <div className="mt-8">
              <ReviewBadges variant="light" size="lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Before &amp; After Transformations
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every smile has a story. Each photo below shows an actual case treated at Kaya Dental,
              reflecting the personalized care and attention we bring to every visit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {cases.map((c, index) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl shadow-card overflow-hidden flex flex-col"
              >
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover bg-muted"
                />
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide mb-4">
                    Before &amp; After
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm font-medium text-accent mb-4">{c.treatment}</p>
                  <p className="text-muted-foreground leading-relaxed">{c.summary}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-8 max-w-3xl">
            Photos shown are of actual patients treated at Kaya Dental and are used with permission.
            Individual results vary based on each patient's condition and treatment plan.
          </p>
        </div>
      </section>

      {/* Why patients choose us */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((h, index) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-card p-6 md:p-8 rounded-xl shadow-card"
              >
                <h.icon className="w-8 h-8 text-accent mb-4" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{h.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Schedule a consultation and discover what is possible for your smile. Our team will walk
            you through your options, costs, and timing before anything begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:978-534-4000">
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                Call Now: (978) 534-4000
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/services">Explore Services</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
