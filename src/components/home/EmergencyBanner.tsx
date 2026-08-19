import { Link } from 'react-router-dom';
import { AlertTriangle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function EmergencyBanner() {
  return (
    <section className="py-12 bg-secondary" aria-labelledby="emergency-banner-heading">
      <div className="container">
        <div className="bg-card border border-border rounded-2xl shadow-card p-6 md:p-10 flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-7 h-7 text-destructive" />
          </div>
          <div className="flex-1">
            <h2
              id="emergency-banner-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2"
            >
              Dental Emergency? Same-Day Visits Are Possible
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve time every day for emergency patients in Leominster, and walk-ins are welcome as
              availability permits. Toothache, broken tooth, or knocked-out tooth — call us and we will get you
              out of pain as fast as we can.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button asChild size="lg">
              <a href="tel:9785344000">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/emergency-dental-care">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
