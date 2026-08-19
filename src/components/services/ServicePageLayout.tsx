import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone, ShieldCheck, CreditCard, HeartHandshake, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LucideIcon } from 'lucide-react';
import drDani from '@/assets/dr-kunal-dani.jpg';
import { ReviewBadges } from '@/components/reviews/ReviewBadges';
import { InsuranceFinancingSection } from '@/components/services/InsuranceFinancingSection';

const PHONE_TEL = 'tel:9785344000';
const PHONE_DISPLAY = '(978) 534-4000';
const BASE_URL = 'https://kayadentalbydani.com';

interface ServicePageLayoutProps {
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  /** Benefit-driven headline. Defaults to the service title. */
  heroHeadline?: string;
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
  /** Canonical path, e.g. /services/dental-implants */
  canonicalPath?: string;
  /** Whether to show the "No Insurance? No Problem!" membership banner. */
  showMembershipBanner?: boolean;
}


export function ServicePageLayout({
  title,
  metaDescription,
  heroSubtitle,
  heroHeadline,
  heroDescription,
  heroImage,
  icon: Icon,
  benefits,
  detailedDescription,
  whatToExpect,
  additionalInfo,
  faqs,
  relatedServices,
  canonicalPath,
  showMembershipBanner = true,
}: ServicePageLayoutProps) {

  const headline = heroHeadline ?? title;
  const pageTitle = `${title} Leominster MA | Kaya Dental`;
  const canonicalUrl = canonicalPath ? `${BASE_URL}${canonicalPath}` : undefined;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${title} in Leominster, MA`,
    serviceType: title,
    description: metaDescription,
    areaServed: [
      'Leominster MA',
      'Lunenburg MA',
      'Lancaster MA',
      'Ayer MA',
      'Shirley MA',
      'Ashburnham MA',
      'Westminster MA',
      'Princeton MA',
      'Gardner MA',
    ],
    provider: {
      '@type': 'Dentist',
      '@id': BASE_URL,
      name: 'Kaya Dental',
      telephone: '+1-978-534-4000',
      url: BASE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '130 N Main St Suite 1',
        addressLocality: 'Leominster',
        addressRegion: 'MA',
        postalCode: '01453',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 42.5245,
        longitude: -71.7607,
      },
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '700',
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        {faqs.length > 0 && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-12 lg:py-20 text-primary-foreground">
        <div className="container">
          {/* Mobile Hero Image */}
          {heroImage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:hidden mb-6"
            >
              <img
                src={heroImage}
                alt={`${title} at Kaya Dental in Leominster, MA`}
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
            </motion.div>
          )}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="min-w-0"
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                {heroSubtitle}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-4 break-words">
                {headline}
              </h1>

              <p className="text-primary-foreground/80 text-base lg:text-lg leading-relaxed mb-6">
                {heroDescription}
              </p>

              {/* Dual review trust badges */}
              <ReviewBadges variant="light" size="lg" className="mb-6 lg:mb-8" />

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto h-auto whitespace-normal py-3" asChild>
                  <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 font-semibold">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    Call Now {PHONE_DISPLAY}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-auto whitespace-normal py-3 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link to="/contact">Request an Appointment</Link>
                </Button>
              </div>
            </motion.div>
            {/* Desktop Hero Image */}
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block"
              >
                <img
                  src={heroImage}
                  alt={`${title} at Kaya Dental in Leominster, MA`}
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Problem & Solution intro */}
      <section className="pt-12 lg:pt-16 pb-8 lg:pb-12 bg-background">
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 break-words">
              Compassionate {title} for Leominster Families
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have been putting off care because you are worried about pain, cost, or feeling
              judged, you are not alone — and you are in the right place. Patients across Leominster,
              Lunenburg, Lancaster, and Gardner come to Kaya Dental because we listen first, explain
              every option in plain language, and never rush you into treatment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our goal is simple: help you feel comfortable in the chair and confident about your
              smile again. From your first phone call to your follow-up visit, our Leominster, MA
              team keeps things gentle, transparent, and centered on what matters most to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Description Sections */}
      {detailedDescription && detailedDescription.length > 0 && (
        <section className="pt-8 lg:pt-12 pb-16 bg-background">
          <div className="container">

            <div className="space-y-16">
              {detailedDescription.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={
                    section.image
                      ? 'grid lg:grid-cols-2 gap-12 items-start'
                      : 'max-w-4xl'
                  }
                >
                  <div className={section.image && index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 break-words">
                      {section.title}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      {section.content.split(/\n\s*\n/).map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                          {paragraph.trim()}
                        </p>
                      ))}
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
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 break-words">
                Why Patients Choose Kaya Dental for {title}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 md:gap-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 md:gap-3"
                  >
                    <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                    </span>
                    <span className="text-muted-foreground text-sm md:text-base">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border"
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
        <section className="py-16 bg-secondary">
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
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4 break-words">
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

      {/* FAQ Accordion */}

      {faqs.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 break-words">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Common questions about {title.toLowerCase()} in Leominster, MA.
              </p>
            </motion.div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-card rounded-xl border border-border px-5 border-b"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Dentist Authority */}

      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-8 lg:gap-12 items-center max-w-5xl mx-auto"
          >
            <img
              src={drDani}
              alt="Dr. Kunal Dani, DMD — dentist in Leominster, MA"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Meet Your Dentist
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                Dr. Kunal Dani, DMD
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Dani earned his dental degree from Tufts University School of Dental Medicine and
                continues advanced clinical training each year in implant dentistry, cosmetic
                restorations, and clear aligner therapy. That ongoing education means Leominster
                patients get modern, evidence-based care without leaving their community.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Just as important as technique is comfort. Dr. Dani takes the time to explain your
                options, answer every question, and build a plan that respects your budget, your
                schedule, and your goals.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Tufts-trained, DMD</span>
                </div>
                <div className="flex items-start gap-2">
                  <HeartHandshake className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Gentle, patient-first care</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Serving Leominster since 1961
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Insurance & Financing */}
      <InsuranceFinancingSection showMembershipBanner={showMembershipBanner} />




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
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Related Services
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
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
                  className="block p-4 md:p-6 rounded-xl border border-border bg-card hover:border-accent hover:shadow-medium transition-all duration-300 group h-full"
                >
                  <h3 className="font-serif text-sm md:text-lg font-semibold text-foreground mb-1 md:mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center text-accent text-xs md:text-sm font-medium">
                    Learn More <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground mb-4 break-words">
              Ready for a healthy, beautiful smile?
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-8">
              Contact our Leominster office today to speak directly with our team and secure your
              visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto h-auto whitespace-normal py-4 text-base md:text-lg font-semibold"
                asChild
              >
                <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  Call Now {PHONE_DISPLAY}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-auto whitespace-normal py-4 text-base bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/contact">Contact Us Online</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
