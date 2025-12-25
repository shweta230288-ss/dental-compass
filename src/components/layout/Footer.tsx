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
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={kayaLogo}
              alt="Kaya Dental"
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              "Kaya" meaning body, wellness, and wholeness. We bring expertise and passion 
              together to craft radiant, healthy smiles so you can shine with confidence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:978-534-4000"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">(978) 534-4000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kayadental.com"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">info@kayadental.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  130 N Main St Suite 1<br />
                  Leominster, MA 01453
                </span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Mon - Fri: 8:00 AM - 5:00 PM<br />
                  Sat: By Appointment<br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Kaya Dental PLLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <Link to="/new-patients" className="hover:text-accent transition-colors">
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
