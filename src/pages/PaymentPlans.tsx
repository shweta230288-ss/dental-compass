import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { Link } from 'react-router-dom';
import { CreditCard, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const PaymentPlans = () => {
  return (
    <Layout>
      <SEOHead
        title="Payment Plans | Cherry & CareCredit Financing | Kaya Dental"
        description="Affordable dental payment plans at Kaya Dental in Leominster, MA. We offer Cherry Financing and CareCredit to make quality dental care accessible. Apply today!"
        canonicalPath="/payment-plans"
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Flexible Payment Plans
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>
            Quality dental care shouldn't be out of reach. We offer flexible financing options to fit every budget.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container max-w-4xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Kaya Dental, we believe everyone deserves a healthy, beautiful smile. That's why we partner with
            trusted financing providers to offer affordable monthly payment options — with plans that fit your lifestyle and budget.
          </p>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
            Our Financing Partners
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Cherry Financing */}
            <div className="bg-card rounded-xl shadow-soft border border-border p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-serif font-bold text-foreground">Cherry Financing</h3>
              </div>
              <p className="text-muted-foreground mb-6 flex-1">
                Cherry offers simple, transparent payment plans with no hidden fees. Apply in seconds and get approved for the care you need — right from our office or online.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Quick & easy application',
                  'Plans starting as low as $0 down',
                  'No hard credit check to apply',
                  'Flexible monthly payment options',
                  'Use for any dental treatment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/payment-plans/cherry">
                <Button className="w-full" size="lg">
                  Explore Cherry Financing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* CareCredit */}
            <div className="bg-card rounded-xl shadow-soft border border-border p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-serif font-bold text-foreground">CareCredit</h3>
              </div>
              <p className="text-muted-foreground mb-6 flex-1">
                CareCredit is a trusted healthcare credit card accepted at over 250,000 providers nationwide. Enjoy promotional financing options on dental treatments large and small.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Promotional 0% APR financing available',
                  'Accepted at 250,000+ healthcare providers',
                  'Use for the whole family',
                  'Easy online application',
                  'Reusable credit line for future visits',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.carecredit.com/apply/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full" size="lg">
                  Apply for CareCredit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Choose a Plan', desc: 'Select Cherry or CareCredit — whichever works best for you.' },
              { step: '2', title: 'Apply in Minutes', desc: 'Quick application with instant approval decisions. No surprises.' },
              { step: '3', title: 'Start Your Treatment', desc: 'Get the care you need today and pay over time with affordable monthly payments.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-serif font-bold mb-4">Questions About Financing?</h2>
          <p className="text-lg opacity-90 mb-8">
            Our team is happy to walk you through your options. Give us a call or visit our office to learn more.
          </p>
          <a href="tel:978-534-4000">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="w-5 h-5" />
              Call (978) 534-4000
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default PaymentPlans;
