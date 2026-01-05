import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Zap, Camera, Printer, Brain, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import techDigitalXray from '@/assets/tech-digital-xray.jpg';
import techIteroScanner from '@/assets/tech-itero-scanner.jpg';
import tech3dPrinter from '@/assets/tech-3d-printer.jpg';
import techAiOverjet from '@/assets/tech-ai-overjet.jpg';

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
    icon: Camera,
    title: 'iTero Intraoral Scanner',
    image: techIteroScanner,
    description: 'Say goodbye to uncomfortable dental impressions. Our iTero scanner creates precise 3D digital models of your teeth in minutes, making treatments like Invisalign more comfortable and accurate than ever before.',
    benefits: [
      'No messy impression materials',
      'Highly accurate 3D models',
      'Faster treatment planning',
      'Real-time visualization',
      'Perfect for Invisalign treatment',
    ],
  },
  {
    icon: Printer,
    title: '3D Printing Technology',
    image: tech3dPrinter,
    description: 'With in-house 3D printing, we can create custom dental appliances, surgical guides, and temporary restorations right here in our office. This means faster turnaround times and perfectly fitted solutions.',
    benefits: [
      'Same-day dental appliances',
      'Precise surgical guides',
      'Custom night guards and retainers',
      'Reduced wait times',
      'Perfect fit every time',
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
      <Helmet>
        <title>Dental Technology | Kaya Dental Leominster MA</title>
        <meta name="description" content="Experience advanced dental technology at Kaya Dental including digital X-rays, iTero scanners, 3D printing, and AI-powered diagnostics with Overjet." />
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
              Advanced Technology
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              State-of-the-Art Dental Care
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              We invest in the latest dental technology to provide you with more accurate diagnoses, 
              comfortable treatments, and better outcomes. Experience the difference modern dentistry makes.
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