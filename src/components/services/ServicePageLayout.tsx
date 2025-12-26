import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ServicePageLayoutProps {
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage?: string;
  icon: LucideIcon;
  benefits: string[];
  detailedDescription?: {
    title: string;
    content: string;
    image?: string;
    imageAlt?: string;
  }[];
  whatToExpect: {
    title: string;
    description: string;
  }[];
  additionalInfo?: {
    title: string;
    items: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    path: string;
  }[];
}

export function ServicePageLayout({
  title,
  metaDescription,
  heroSubtitle,
  heroDescription,
  heroImage,
  icon: Icon,
  benefits,
  detailedDescription,
  whatToExpect,
  additionalInfo,
  faqs,
  relatedServices,
}: ServicePageLayoutProps) {
  return (
    <Layout>
      <Helmet>
        <title>{title} | Kaya Dental Leominster MA</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Hero with Image */}
      <section className="bg-primary py-16 lg:py-20 text-primary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                {heroSubtitle}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
                {title}
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                {heroDescription}
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:978-534-4000" className="inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Schedule Consultation
                </a>
              </Button>
            </motion.div>
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block"
              >
                <img
                  src={heroImage}
                  alt={`${title} at Kaya Dental`}
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Detailed Description Sections */}
      {detailedDescription && detailedDescription.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container">
            <div className="space-y-16">
              {detailedDescription.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                      {section.title}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  </div>
                  {section.image && (
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <img
                        src={section.image}
                        alt={section.imageAlt || section.title}
                        className="rounded-2xl shadow-lg w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Why Choose Kaya Dental for {title}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                What to Expect
              </h3>
              <div className="space-y-6">
                {whatToExpect.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold flex-shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Sections */}
      {additionalInfo && additionalInfo.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                    {info.title}
                  </h3>
                  <ul className="space-y-2">
                    {info.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about {title.toLowerCase()}.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Related Services
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={service.path}
                  className="block p-6 rounded-xl border border-border bg-card hover:border-accent hover:shadow-medium transition-all duration-300 group"
                >
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center text-accent text-sm font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Schedule your consultation today and take the first step toward a healthier, more beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:978-534-4000" className="inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (978) 534-4000
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">Contact Us Online</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
