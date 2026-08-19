import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  Clock,
  AlertTriangle,
  Timer,
  ShieldCheck,
  MapPin,
  CheckCircle,
  ArrowRight,
  Stethoscope,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ReviewBadges } from '@/components/reviews/ReviewBadges';
import heroImage from '@/assets/service-emergency-dentistry-new.jpg';

const PHONE_TEL = 'tel:9785344000';
const PHONE_DISPLAY = '(978) 534-4000';
const BASE_URL = 'https://kayadentalbydani.com';

const triage = [
  {
    icon: AlertTriangle,
    label: 'Immediate',
    window: 'Call within 5 minutes',
    text:
      'A tooth knocked completely out of the socket is a true dental emergency. Keep it moist in milk, do not scrub the root, and call us right away — the faster we see you, the better the odds of saving that tooth for good.',
  },
  {
    icon: Timer,
    label: 'Urgent',
    window: 'Treat within 6 hours',
    text:
      'A tooth that is still in the socket but pushed in, tipped, twisted, or loosened needs same-day attention. Call and we will reserve one of our same-day emergency slots for you.',
  },
  {
    icon: Stethoscope,
    label: 'Less Urgent',
    window: 'Treat within 12–24 hours',
    text:
      'A chipped or broken tooth that is still firmly anchored, a lost filling or crown, or a nagging toothache. Timing is less critical, but calling early usually means a simpler, less expensive repair.',
  },
];

const emergencies = [
  'Severe or throbbing toothache',
  'Knocked-out or loosened tooth',
  'Cracked, chipped, or broken tooth',
  'Lost filling or crown',
  'Swelling, abscess, or suspected infection',
  'Bleeding gums after an injury',
  'Sports or accident-related mouth injury',
  'Painful wisdom tooth',
  'Broken denture or dental appliance',
];

const walkInPoints = [
  'Same-day emergency visits available as availability permits',
  'Walk-ins welcome — calling first gets you seen faster',
  'Daily time reserved specifically for patients in pain',
  'CBCT 3D imaging on site for an accurate, same-visit diagnosis',
  'Pain relief first, then a clear plan and honest pricing',
  'Membership plan and Cherry / CareCredit financing for uninsured patients',
];

const faqs = [
  {
    question: 'Do you offer same-day emergency dental appointments in Leominster?',
    answer:
      'Yes. Kaya Dental holds time in the schedule every day for emergencies, so same-day emergency visits are possible in most cases as availability permits. Call (978) 534-4000 as early in the day as you can and our team will tell you exactly when we can see you.',
  },
  {
    question: 'Do you accept walk-in dental emergencies?',
    answer:
      'We do accept emergency walk-ins as availability permits. Because we may already be treating other urgent patients, calling ahead — even from the car — lets us prepare a room, review your symptoms, and get you out of pain sooner.',
  },
  {
    question: 'What counts as a dental emergency?',
    answer:
      'Severe tooth pain, a knocked-out or loosened tooth, a cracked or broken tooth, swelling or a suspected infection, a lost filling or crown, and any injury to the mouth after an accident or sports collision all count. If you are not sure, call us — we will help you decide over the phone at no cost.',
  },
  {
    question: 'How fast can I be seen if a tooth was knocked out?',
    answer:
      'Immediately. An avulsed (knocked-out) tooth is the most time-sensitive dental emergency there is. Keep the tooth moist in milk or saliva, avoid touching the root, and call us on your way in so we can be ready when you arrive.',
  },
  {
    question: 'What if my dental emergency happens after hours or on a weekend?',
    answer:
      'Call the office anyway. Our voicemail includes guidance for urgent situations, and we prioritize urgent patients first thing the next business day. If you have uncontrolled bleeding, trouble breathing or swallowing, significant facial swelling, or a suspected broken jaw, go to the nearest emergency room.',
  },
  {
    question: 'What does emergency dental care cost, and what if I do not have insurance?',
    answer:
      'Emergency visits follow the same fees and insurance guidelines as our regular care, and we always review costs with you before treatment. If you are uninsured, our in-office membership plan plus Cherry and CareCredit financing keep urgent care affordable.',
  },
];

const emergencySchema = {
  '@context': 'https://schema.org',
  '@type': ['EmergencyService', 'Dentist'],
  '@id': `${BASE_URL}/emergency-dental-care`,
  name: 'Kaya Dental — Emergency Dental Care',
  description:
    'Emergency dentist in Leominster, MA offering same-day emergency dental visits and walk-in urgent dental care as availability permits.',
  url: `${BASE_URL}/emergency-dental-care`,
  telephone: '+1-978-534-4000',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '130 N Main St Suite 1',
    addressLocality: 'Leominster',
    addressRegion: 'MA',
    postalCode: '01453',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 42.5245, longitude: -71.7607 },
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '17:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '07:00', closes: '14:00' },
  ],
  availableService: {
    '@type': 'MedicalProcedure',
    name: 'Same-Day Emergency Dental Care',
    procedureType: 'https://schema.org/TherapeuticProcedure',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '3639',
    url: 'https://local.demandforce.com/b/leominsterdentistry',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function EmergencyDentalCare() {
  return (
    <Layout>
      <SEOHead
        title="Emergency Dentist Leominster MA | Same-Day Emergency Dental Visits"
        description="Emergency dentist in Leominster, MA. Same-day emergency dental visits and walk-ins welcome as availability permits. Toothache, broken or knocked-out tooth — call (978) 534-4000."
        canonicalPath="/emergency-dental-care"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(emergencySchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20 text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Emergency Dental Care in Leominster, MA
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-5 leading-tight">
              In Pain Today? Same-Day Emergency Visits Are Possible
            </h1>
            <p
              className="text-primary-foreground/80 text-lg leading-relaxed mb-6"
              style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}
            >
              Kaya Dental keeps time open every day for emergency patients, and walk-ins are welcome as
              availability permits. Whether it is a severe toothache, a broken tooth, or a tooth knocked out on
              the field, call us now — we will guide you over the phone and get you seen as quickly as we can.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Button asChild size="lg" variant="secondary">
                <a href={PHONE_TEL}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: {PHONE_DISPLAY}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/contact">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Link>
              </Button>
            </div>
            <ReviewBadges variant="light" size="lg" />
          </motion.div>
        </div>
      </section>

      {/* Availability strip */}
      <section className="bg-accent text-accent-foreground py-5">
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-center md:text-left">
          <p className="font-semibold text-base md:text-lg flex items-center justify-center md:justify-start gap-2">
            <Clock className="w-5 h-5 shrink-0" />
            Same-day emergency appointments available as availability permits
          </p>
          <p className="text-sm md:text-base opacity-90">
            Mon–Thu 8:00 a.m. – 5:00 p.m. · Fri 7:00 a.m. – 2:00 p.m.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-16">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Immediate Help for Dental Emergencies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dental pain does not wait for a convenient time, and you should not have to wait weeks for relief.
              Our Leominster team, led by Dr. Kunal Dani and Dr. Amy Majzoub, reserves space in the daily schedule
              for urgent patients so we can offer same-day emergency dental visits whenever our schedule allows.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Conveniently located off Route 2 at 130 N Main St, we care for emergency patients from Leominster,
              Lunenburg, Lancaster, Ayer, Shirley, Ashburnham, Westminster, Princeton, and Gardner — including
              patients who have never been to our office before.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {walkInPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 bg-secondary rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Triage */}
      <section className="py-14 md:py-16 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
              What to Do and When to Do It
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              With any dental injury, the sooner it is treated the better the outcome. Use these timelines as a
              guide — then call us so we can make the final call together.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {triage.map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-accent text-sm font-semibold mb-3">{item.window}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergencies we treat + first aid */}
      <section className="py-14 md:py-16">
        <div className="container grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-5">
              Dental Emergencies We Treat Same Day
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {emergencies.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Emergency dental care at Kaya Dental in Leominster, MA"
                loading="lazy"
                className="w-full h-56 md:h-72 object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                What to Do Until You Reach Us
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Rinse gently with warm salt water.</li>
                <li>Apply a cold compress to any swelling.</li>
                <li>Take an over-the-counter pain reliever as directed.</li>
                <li>Save any broken tooth pieces.</li>
                <li>Keep a knocked-out tooth moist in milk — handle it by the crown, not the root.</li>
                <li>Never place aspirin directly on the gums.</li>
              </ul>
            </div>
            <div className="bg-card border border-destructive/30 rounded-xl p-6">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Go to the ER Instead If You Have
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Bleeding that will not stop</li>
                <li>Trouble breathing or swallowing</li>
                <li>Significant facial swelling or fever</li>
                <li>A suspected jaw fracture or facial trauma with other injuries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-14 md:py-16 bg-secondary">
        <div className="container max-w-4xl text-center">
          <ShieldCheck className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            The Cost of an Emergency Visit
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Emergency care follows the same fees and insurance guidelines as our routine treatment, and we always
            walk you through the cost before we begin. No insurance? Our in-office membership plan and Cherry or
            CareCredit financing make urgent care manageable, so nothing stands between you and relief.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline">
              <Link to="/membership">
                Membership Plan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/payment-plans">
                Payment Plans
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-16">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Emergency Dentistry FAQs
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="text-center text-muted-foreground mt-8">
            Looking for more detail on treatment?{' '}
            <Link to="/services/emergency-dentistry" className="text-primary underline">
              See our emergency dentistry services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-4">Don't Wait — Call Now</h2>
          <p className="text-primary-foreground/80 mb-8 leading-relaxed">
            If you are experiencing a dental emergency in Leominster or the surrounding Route 2 communities, call
            Kaya Dental and we will do everything we can to see you today.
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href={PHONE_TEL}>
              <Phone className="w-4 h-4 mr-2" />
              Call {PHONE_DISPLAY}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
