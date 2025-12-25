import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Zap, Camera, Printer, Brain } from 'lucide-react';

const technologies = [
  {
    icon: Zap,
    title: 'Digital X-Rays',
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
          <div className="space-y-16">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <tech.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                    {tech.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {tech.description}
                  </p>
                  <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {tech.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-secondary rounded-2xl p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <tech.icon className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
