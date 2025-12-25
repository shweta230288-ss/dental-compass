import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onCanPlay={() => setIsVideoPlaying(true)}
        >
          <source src="/videos/office-tour.mp4" type="video/mp4" />
        </video>
        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-kaya-charcoal/95 via-kaya-charcoal/80 to-kaya-charcoal/40" />
        {/* Gold shimmer overlay */}
        <div className="absolute inset-0 bg-shimmer opacity-30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full hidden lg:block" />
      <div className="absolute bottom-20 right-40 w-20 h-20 border border-primary/20 rounded-full hidden lg:block" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-sans text-sm uppercase tracking-[0.3em] mb-6">
              Welcome to Kaya Dental
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-kaya-cream leading-[1.1] mb-6"
          >
            Redefining{' '}
            <span className="text-gradient-gold italic">Comfort</span>
            <br />& <span className="text-gradient-gold italic">Aesthetics</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-px bg-gradient-gold mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-kaya-cream/80 mb-10 leading-relaxed font-body"
          >
            Experience personalized dental care rooted in warmth, trust, and compassion. 
            At Kaya Dental, we bring expertise and passion together to craft radiant, 
            healthy smiles so you can shine with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans tracking-wide shadow-gold group"
              asChild
            >
              <a href="tel:978-534-4000">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Your Visit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-kaya-cream/30 text-kaya-cream hover:bg-kaya-cream/10 hover:border-kaya-cream/50 font-sans tracking-wide"
              asChild
            >
              <a href="#about">Discover Our Story</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-kaya-cream/50 font-sans text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}