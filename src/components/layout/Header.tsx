import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import kayaLogo from '@/assets/kaya-logo.png';

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    children: [
      { name: 'General Dentistry', path: '/services/general-dentistry' },
      { name: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry' },
      { name: 'Family Dentistry', path: '/services/family-dentistry' },
      { name: 'Emergency Dentistry', path: '/services/emergency-dentistry' },
      { name: 'Dental Implants', path: '/services/dental-implants' },
      { name: 'Invisalign', path: '/services/invisalign' },
      { name: 'Teeth Whitening', path: '/services/teeth-whitening' },
      { name: 'View All Services', path: '/services' },
    ],
  },
  { name: 'Technology', path: '/technology' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Membership', path: '/membership' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'New Patients', path: '/new-patients' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-kaya-charcoal text-kaya-cream py-2.5">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center gap-8">
            <a href="tel:978-534-4000" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-sans tracking-wide">(978) 534-4000</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-sans tracking-wide">130 N Main St Suite 1, Leominster, MA 01453</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-sans tracking-wide">Mon-Fri: 8AM-5PM | Sat: By Appointment</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-soft py-2'
            : 'bg-card/80 backdrop-blur-sm py-4'
        }`}
      >
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 gold-line" />

        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group">
              <img
                src={kayaLogo}
                alt="Kaya Dental - Redefining Comfort & Aesthetics"
                className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-sans font-medium tracking-wide transition-colors ${
                      location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-56 bg-card rounded-lg shadow-elegant border border-border py-2 mt-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-5 py-2.5 text-sm font-sans hover:bg-secondary hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium tracking-wide shadow-gold"
                asChild
              >
                <a href="tel:978-534-4000">
                  Schedule Your Visit
                </a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-card border-b border-border xl:hidden overflow-hidden shadow-elegant"
          >
            <nav className="container py-6">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block py-3 text-base font-body border-b border-border/50 ${
                      location.pathname === item.path ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div className="pt-6 space-y-4">
                <a
                  href="tel:978-534-4000"
                  className="flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-sans">(978) 534-4000</span>
                </a>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans shadow-gold" size="lg" asChild>
                  <a href="tel:978-534-4000">
                    Schedule Your Visit
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}