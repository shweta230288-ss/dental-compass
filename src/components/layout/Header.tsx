import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import kayaLogo from '@/assets/kaya-logo.png';
const navigationItems = [{
  name: 'Home',
  path: '/'
}, {
  name: 'About',
  path: '/about'
}, {
  name: 'Services',
  path: '/services',
  children: [{
    name: 'View All Services',
    path: '/services'
  }, {
    name: 'General Dentistry',
    path: '/services/general-dentistry'
  }, {
    name: 'Cosmetic Dentistry',
    path: '/services/cosmetic-dentistry'
  }, {
    name: 'Family Dentistry',
    path: '/services/family-dentistry'
  }, {
    name: 'Emergency Dentistry',
    path: '/services/emergency-dentistry'
  }, {
    name: 'Dental Implants',
    path: '/services/dental-implants'
  }, {
    name: 'Invisalign',
    path: '/services/invisalign'
  }, {
    name: 'Teeth Whitening',
    path: '/services/teeth-whitening'
  }]
}, {
  name: 'Technology',
  path: '/technology'
}, {
  name: 'Membership',
  path: '/membership'
}, {
  name: 'Reviews',
  path: '/reviews'
}, {
  name: 'New Patients',
  path: '/new-patients'
}, {
  name: 'Contact',
  path: '/contact'
}];
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
  return <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:978-534-4000" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>(978) 534-4000</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>130 N Main St Suite 1, Leominster, MA 01453</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon - Thu: 8AM - 5PM / Fri: 7AM - 2PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-background'}`}>
        <div className="container">
          <div className="flex items-center justify-between h-24 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={kayaLogo} alt="Kaya Dental - Redefining Comfort & Aesthetics" className="h-24 md:h-20 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navigationItems.map(item => <div key={item.name} className="relative" onMouseEnter={() => item.children && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                  <Link to={item.path} className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-accent ${location.pathname === item.path || location.pathname.startsWith(item.path + '/') ? 'text-accent' : 'text-foreground'}`}>
                    {item.name}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && <motion.div initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: 10
                }} transition={{
                  duration: 0.2
                }} className="absolute top-full left-0 w-56 bg-card rounded-lg shadow-medium border border-border py-2 mt-1">
                        {item.children.map(child => <Link key={child.name} to={child.path} className="block px-4 py-2 text-sm hover:bg-secondary hover:text-accent transition-colors">
                            {child.name}
                          </Link>)}
                      </motion.div>}
                  </AnimatePresence>
                </div>)}
            </nav>


            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="xl:hidden p-2 text-foreground hover:text-accent transition-colors" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="fixed inset-x-0 top-24 md:top-20 z-40 bg-background border-b border-border xl:hidden overflow-y-auto max-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-5rem)]">
            <nav className="container py-4">
              {navigationItems.map(item => <div key={item.name}>
                  <Link to={item.path} className={`block py-3 text-base font-medium border-b border-border/50 ${location.pathname === item.path ? 'text-accent' : 'text-foreground'}`}>
                    {item.name}
                  </Link>
                </div>)}
              <div className="pt-4 space-y-3">
                <a href="tel:978-534-4000" className="flex items-center gap-2 text-foreground hover:text-accent">
                  <Phone className="w-5 h-5" />
                  (978) 534-4000
                </a>
              </div>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </>;
}