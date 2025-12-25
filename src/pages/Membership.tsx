import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Child Plan',
    price: '$400',
    period: '/year',
    description: 'For children through the age of 13 years old',
    features: [
      'Two Exams per year',
      'Two Cleanings (Fluoride Treatments Included)',
      'Unlimited X-Rays per Visit (As needed)',
      '15% off Dental Procedures (excluding Invisalign, Implants and Whitening)',
    ],
    popular: false,
  },
  {
    name: 'Adult Plan',
    price: '$500',
    period: '/year',
    description: 'Ideal for patients over the age of 14',
    features: [
      'Two Exams per year',
      'Two Cleanings (Fluoride Treatments Included)',
      'Unlimited X-Rays per Visit (As needed)',
      '15% off Dental Procedures (excluding Invisalign, Implants and Whitening)',
    ],
    popular: true,
  },
  {
    name: 'Periodontal Plan',
    price: '$700',
    period: '/year',
    description: 'For patients requiring periodontal care',
    features: [
      '15% off Initial Deep Cleaning',
      'Two Exams per year',
      'Two Periodontal Maintenances',
      'Unlimited X-Rays per Visit (As needed)',
      'Fluoride Treatment (Twice per Year)',
      '15% off Dental Procedures (excluding Invisalign, Implants and Whitening)',
    ],
    popular: false,
  },
];

const benefits = [
  'Guaranteed Immediate Enrollment',
  'No Yearly Maximum',
  'No Deductibles',
  'No Pre-Authorizations',
  'No Waiting Periods',
  'No Pre-Existing Condition Limitations',
  'No Hidden Fees',
];

const provisions = [
  'May not be combined with insurance plans',
  'Payment for services are due at the date of service',
  'This Plan is individual and may not be transferred',
  'Plans must be paid in full upon enrollment',
  'No refunds will be provided for dues of the plan annual fee under any circumstances including failure to schedule and maintain appointments',
  'Benefits are provided for ONE YEAR from the date the plan was purchased',
];

export default function Membership() {
  return (
    <Layout>
      <Helmet>
        <title>Membership Plans | Kaya Dental Leominster MA</title>
        <meta name="description" content="Save on dental care with Kaya Dental membership plans. No insurance? No problem! Adult, Child, and Periodontal plans available with no waiting periods." />
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
              Membership Plans
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              Quality Dental Care Made Affordable
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              No insurance? No problem! Our membership plans provide access to quality dental care 
              at reduced fees. Simple, affordable, and designed for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Why Our Membership Plans Are Great
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm"
              >
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-primary text-primary-foreground ring-4 ring-accent' 
                    : 'bg-card border border-border'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <h3 className={`font-serif text-2xl font-bold mb-2 ${plan.popular ? '' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-accent' : 'text-accent'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-accent' : 'text-accent'}`} />
                      <span className={plan.popular ? 'text-primary-foreground/90' : 'text-foreground'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  asChild
                >
                  <a href="tel:978-534-4000">
                    <Phone className="w-4 h-4 mr-2" />
                    Enroll Today
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8 text-sm"
          >
            All Cleaning appointments include Oral Cancer Screening & Periodontal Disease Evaluation.
          </motion.p>
        </div>
      </section>

      {/* Provisions */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
              Provisions of Membership Plans
            </h3>
            <ul className="space-y-3">
              {provisions.map((provision) => (
                <li key={provision} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-accent">•</span>
                  {provision}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
