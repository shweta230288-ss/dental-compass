import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
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
    <footer className="bg-kaya-charcoal text-kaya-cream relative overflow-hidden">
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary rounded-full" />
      </div>

      {/* Main Footer */}
      <div className="container relative py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={kayaLogo}
              alt="Kaya Dental"
              className="h-20 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-kaya-cream/70 font-body text-sm leading-relaxed mb-8 italic">
              "Kaya" meaning body, wellness, and wholeness. We bring expertise and passion 
              together to craft radiant, healthy smiles.
            </p>
            <div className="flex gap-4">
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
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-medium mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-kaya-cream/70 hover:text-primary transition-colors font-sans text-sm tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-medium mb-6 text-primary">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-kaya-cream/70 hover:text-primary transition-colors font-sans text-sm tracking-wide"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl font-medium mb-6 text-primary">Visit Us</h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:978-534-4000"
                  className="flex items-start gap-4 text-kaya-cream/70 hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-primary" />
                  <span className="font-sans text-sm tracking-wide">(978) 534-4000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kayadental.com"
                  className="flex items-start gap-4 text-kaya-cream/70 hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-primary" />
                  <span className="font-sans text-sm tracking-wide">info@kayadental.com</span>
                </a>
              </li>
              <li className="flex items-start gap-4 text-kaya-cream/70">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="font-sans text-sm tracking-wide">
                  130 N Main St Suite 1<br />
                  Leominster, MA 01453
                </span>
              </li>
              <li className="flex items-start gap-4 text-kaya-cream/70">
                <Clock className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="font-sans text-sm tracking-wide">
                  Mon - Fri: 8AM - 5PM<br />
                  Sat: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-kaya-cream/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-kaya-cream/50 font-sans text-sm tracking-wide">
            © {new Date().getFullYear()} Kaya Dental PLLC. All rights reserved.
          </p>
          <div className="flex items-center gap-8 font-sans text-sm text-kaya-cream/50 tracking-wide">
            <Link to="/new-patients" className="hover:text-primary transition-colors">
              New Patients
            </Link>
            <Link to="/membership" className="hover:text-primary transition-colors">
              Membership Plans
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}