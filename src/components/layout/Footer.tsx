import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Sparkles } from 'lucide-react';
import kayaLogo from '@/assets/kaya-logo.png';

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Technology', path: '/technology' },
  { name: 'Smile Gallery', path: '/gallery' },
  { name: 'Patient Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

const services = [
  { name: 'General Dentistry', path: '/services/general-dentistry' },
  { name: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry' },
  { name: 'Dental Implants', path: '/services/dental-implants' },
  { name: 'Invisalign', path: '/services/invisalign' },
  { name: 'Teeth Whitening', path: '/services/teeth-whitening' },
  { name: 'Emergency Care', path: '/services/emergency-dentistry' },
];

export function Footer() {
  return (
    <footer className="relative bg-secondary border-t border-border overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Main Footer */}
      <div className="container relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={kayaLogo}
              alt="Kaya Dental"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              "Kaya" meaning body, wellness, and wholeness. We bring expertise and passion 
              together to craft radiant, healthy smiles.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-kaya-purple">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:978-534-4000"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm pt-1">(978) 534-4000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kayadental.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm pt-1">info@kayadental.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-kaya-purple/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-kaya-purple" />
                </div>
                <span className="text-sm pt-1">
                  130 N Main St Suite 1<br />
                  Leominster, MA 01453
                </span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-kaya-gold/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-kaya-gold" />
                </div>
                <span className="text-sm pt-1">
                  Mon - Fri: 8AM - 5PM<br />
                  Sat: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Kaya Dental PLLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/new-patients" className="hover:text-primary transition-colors">
              New Patients
            </Link>
            <Link to="/membership" className="hover:text-accent transition-colors">
              Membership Plans
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}