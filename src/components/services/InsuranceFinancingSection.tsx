import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CreditCard, ShieldCheck, Sparkles, Phone, ArrowRight, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const insurances = [
  'Delta Dental Premier',
  'MetLife',
  'United Healthcare',
  'Blue Cross Blue Shield',
  'And many more...',
];

const PHONE_TEL = 'tel:9785344000';

interface InsuranceFinancingSectionProps {
  showMembershipBanner?: boolean;
}

export function InsuranceFinancingSection({
  showMembershipBanner = true,
}: InsuranceFinancingSectionProps) {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            <ShieldCheck className="w-4 h-4" />
            Insurance &amp; Financing
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Care That Fits Your Budget
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ hyphens: 'none' }}>
            We work with most major dental insurance providers and offer flexible monthly payment
            options — so cost never stands between you and the care you need.
          </p>
        </motion.div>

        {/* Insurance pills */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
          {insurances.map((insurance, index) => (
            <motion.span
              key={insurance}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="bg-card px-4 py-2 rounded-full text-sm font-medium text-foreground shadow-sm"
            >
              {insurance}
            </motion.span>
          ))}
        </div>

        {/* No insurance banner */}
        {showMembershipBanner && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-10"
          >
            <Link to="/membership" className="block group">
              <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-2 border-accent/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  <div className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-7 h-7 text-accent" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-1">
                        No Insurance? No Problem!
                      </h3>
                      <p className="text-muted-foreground text-sm" style={{ hyphens: 'none' }}>
                        Join our in-house membership plan — save up to{' '}
                        <span className="text-accent font-semibold">$300+</span> annually
                      </p>
                    </div>
                  </div>
                  <span className="flex-shrink-0 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium group-hover:gap-3 transition-all duration-300">
                    View Plans
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Financing options */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: CreditCard,
              name: 'Cherry Financing',
              desc: 'Split your treatment into budget-friendly monthly payments with no hidden fees. Apply in seconds — approval in minutes.',
              cta: 'Explore Cherry Financing',
              to: '/payment-plans/cherry',
            },
            {
              icon: Wallet,
              name: 'CareCredit',
              desc: 'A trusted healthcare credit card with promotional financing options for treatments large and small.',
              cta: 'Learn About CareCredit',
              to: '/payment-plans',
            },
          ].map((opt, i) => (
            <motion.div
              key={opt.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 shadow-soft flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <opt.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground leading-tight">
                  {opt.name}
                </h3>
              </div>
              <p
                className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1"
                style={{ hyphens: 'none' }}
              >
                {opt.desc}
              </p>
              <Button className="w-full h-auto whitespace-normal py-3" asChild>
                <Link to={opt.to}>{opt.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Ask about financing call CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-8 text-center"
        >
          <Button variant="outline" className="h-auto whitespace-normal py-3" asChild>
            <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" />
              Ask About Financing
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

