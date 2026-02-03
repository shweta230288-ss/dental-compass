import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import kayaLogo from '@/assets/kaya-logo.png';
const quickLinks = [{
  name: 'About Us',
  path: '/about'
}, {
  name: 'Our Services',
  path: '/services'
}, {
  name: 'Technology',
  path: '/technology'
}, {
  name: 'Patient Success Stories',
  path: '/reviews'
}, {
  name: 'Membership Plans',
  path: '/membership'
}, {
  name: 'New Patients',
  path: '/new-patients'
}, {
  name: 'Contact',
  path: '/contact'
}];
const services = [{
  name: 'General Dentistry',
  path: '/services/general-dentistry'
}, {
  name: 'Cosmetic Dentistry',
  path: '/services/cosmetic-dentistry'
}, {
  name: 'Dental Implants',
  path: '/services/dental-implants'
}, {
  name: 'Invisalign',
  path: '/services/invisalign'
}, {
  name: 'Teeth Whitening',
  path: '/services/teeth-whitening'
}, {
  name: 'Emergency Care',
  path: '/services/emergency-dentistry'
}];
export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo" aria-label="Site footer">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={kayaLogo} alt="" className="h-28 w-auto mb-4" aria-hidden="true" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              "Kaya" meaning body, wellness, and wholeness. We bring expertise and passion 
              together to craft radiant, healthy smiles so you can shine with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="font-serif text-xl font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3" role="list">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="font-serif text-xl font-semibold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3" role="list">
              {services.map(service => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4" role="list">
              <li>
                <a 
                  href="tel:978-534-4000" 
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded-sm"
                  aria-label="Call us at (978) 534-4000"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">(978) 534-4000</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Cronindental88@gmail.com" 
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded-sm"
                  aria-label="Email us at Cronindental88@gmail.com"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">Cronindental88@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <address className="text-sm not-italic">
                  130 N Main St Suite 1<br />
                  Leominster, MA 01453
                </address>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm">
                  Mon - Thu: 8AM - 5PM<br />
                  Fri: 7AM - 2PM<br />
                  Sat & Sun: Closed
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
            
            
          </div>
        </div>
      </div>
    </footer>
  );
}