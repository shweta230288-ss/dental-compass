import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { Zap, Camera, Brain, Phone, Scan, Leaf, Gem, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import techDigitalXray from '@/assets/tech-digital-xray.jpg';
import techIteroScanner from '@/assets/tech-itero-scanner.jpg';
import techAiOverjet from '@/assets/tech-ai-overjet.jpg';
import techCbct from '@/assets/tech-cbct-scanner.jpg';
import tech3dPrintCrown from '@/assets/3d-print-crown-in-hand.jpg.asset.json';
import tech3dPrintInlayOnlay from '@/assets/3d-print-inlay-onlay.jpg.asset.json';


const technologies = [
  {
    icon: Zap,
    title: 'Digital X-Rays',
    image: techDigitalXray,
    description: 'Our digital X-ray technology provides instant, high-resolution images with up to 90% less radiation than traditional X-rays. This allows for faster diagnoses and more accurate treatment planning while prioritizing your safety.',
    benefits: [
      'Instant image viewing',
      'Up to 90% less radiation exposure',
      'Enhanced image quality',
      'Eco-friendly (no chemical processing)',
      'Easy image sharing and storage',
    ],
  },
  {
    icon: Scan,
    title: 'CBCT 3D Cone Beam Imaging',
    image: techCbct,
    description: 'Our in-office CBCT (Cone Beam Computed Tomography) scanner captures a complete three-dimensional view of your teeth, jawbone, nerves, sinuses, and airway in a single scan that takes under a minute. Unlike flat, two-dimensional X-rays, 3D cone beam imaging lets us see bone volume and anatomy from every angle, so we can plan dental implants, root canals, extractions, and airway concerns with exceptional precision—right here in Leominster, with no need for an outside imaging referral.',
    benefits: [
      'Full 3D view of teeth, bone, nerves, and sinuses',
      'Scan completed in under a minute',
      'Precise dental implant planning and placement',
      'Guided root canal and wisdom tooth evaluation',
      'Lower radiation than a traditional medical CT scan',
      'No referral to an outside imaging center',
      'See your own scan on screen during your visit',
    ],
  },
  {

    icon: Camera,
    title: 'Digital Intraoral Scanners',
    image: techIteroScanner,
    description: 'Say goodbye to uncomfortable dental impressions. Our iTero and 3Shape scanners create precise 3D digital models of your teeth in minutes, making treatments like Invisalign more comfortable and accurate than ever before.',
    benefits: [
      'No messy impression materials',
      'Highly accurate 3D models',
      'Faster treatment planning',
      'Real-time visualization',
      'Perfect for Invisalign treatment',
    ],
  },
  {
    icon: Brain,
    title: 'AI-Powered Diagnostics (Overjet)',
    image: techAiOverjet,
    description: 'We utilize Overjet\'s FDA-cleared AI technology to analyze dental X-rays with unprecedented precision. This advanced system helps identify potential issues early, ensuring nothing is missed during your examination.',
    benefits: [
      'FDA-cleared AI analysis',
      'Early detection of cavities and bone loss',
      'Objective measurements',
      'Enhanced treatment planning',
      'Improved patient communication',
    ],
  },
];

export default function Technology() {
  return (
    <Layout>
      <SEOHead
        title="Dental Technology & CBCT 3D Imaging | Leominster MA | Kaya Dental"
        description="Advanced dental technology from your trusted dentist in Leominster, MA. CBCT 3D cone beam imaging, digital X-rays, iTero scanners, 3D printing, and AI diagnostics."
        canonicalPath="/technology"
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
              Advanced Technology
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              State-of-the-Art Dental Care
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Your comfort and care are at the heart of everything we do. We've invested in advanced 
              dental technology so your visits are quicker, more comfortable, and stress-free. 
              We're here to make your smile journey as smooth as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-10 md:space-y-16">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4 md:mb-6 md:block">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <tech.icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                    </div>
                    <h2 className="font-serif text-xl md:text-3xl font-bold text-foreground md:mt-6">
                      {tech.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                    {tech.description}
                  </p>
                  <h4 className="font-semibold text-foreground text-sm md:text-base mb-2 md:mb-3">Key Benefits:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-1 md:gap-2">
                    {tech.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 md:gap-3 text-muted-foreground text-xs md:text-base">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-medium ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={tech.image} 
                    alt={tech.title}
                    className="w-full h-auto aspect-video object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced 3D Printing & Restorative Dentistry */}
      <section className="py-20 md:py-28 bg-secondary" aria-labelledby="midas-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-xs md:text-sm uppercase tracking-[0.2em]">
              Advanced 3D Printing &amp; Restorative Dentistry
            </span>
            <h2 id="midas-heading" className="font-serif text-3xl md:text-4xl font-bold text-primary mt-3 mb-6 leading-tight">
              Precision-Crafted Restorations. Inspired by Nature.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Kaya Dental, we combine SprintRay Midas 3D printing with a tooth-preserving approach to modern dentistry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Using <strong className="text-foreground font-semibold">advanced ceramic-filled restorative materials</strong>, we create custom crowns, inlays, and onlays designed for natural-looking beauty and precise fit. These innovative restorations can help preserve healthy tooth structure when appropriate, with the added convenience of same-day treatment for select cases.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10">
              Our broader in-office 3D printing capabilities also support custom dental appliances, night guards, and surgical guides.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {[
                {
                  src: tech3dPrintCrown.url,
                  alt: 'Hand holding a 3D printed dental crown model with the in-office printer behind it',
                  caption: 'A custom crown model, printed in our office',
                },
                {
                  src: tech3dPrintInlayOnlay.url,
                  alt: 'Hand holding a printed dental inlay and onlay next to a model of teeth',
                  caption: 'Inlays and onlays printed in a single appointment',
                },
              ].map(({ src, alt, caption }) => (
                <figure key={caption} className="text-left">
                  <div className="rounded-2xl overflow-hidden shadow-medium">
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[16/10] object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-muted-foreground mt-3 px-1">{caption}</figcaption>
                </figure>
              ))}
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                { icon: Leaf, label: 'Preserve Natural Teeth' },
                { icon: Gem, label: 'Advanced Materials' },
                { icon: Clock, label: 'Same-Day Options' },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center justify-center gap-3 bg-card rounded-xl px-4 py-3 shadow-card">
                  <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="tel:978-534-4000">
                <Phone className="w-5 h-5 mr-2" />
                Call (978) 534-4000
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-10 md:p-16 text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Experience the Difference
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Ready to experience modern dentistry with state-of-the-art technology? 
              Schedule your appointment today and see the difference advanced care can make.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
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