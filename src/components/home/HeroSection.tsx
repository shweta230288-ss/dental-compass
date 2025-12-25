import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
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
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 pattern-grid opacity-20 z-[1]" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float z-[1]" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float z-[1]" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Welcome to the Future of Dental Care
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          >
            Redefining{' '}
            <span className="text-gradient-cyan neon-cyan">Comfort</span> &{' '}
            <span className="text-gradient-magenta neon-magenta">Aesthetics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
          >
            Experience personalized dental care rooted in warmth, trust, and compassion. 
            At Kaya Dental, we bring expertise and passion together to craft radiant, 
            healthy smiles so you can shine with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 font-semibold glow-cyan group"
              asChild
            >
              <a href="tel:978-534-4000">
                <Phone className="w-5 h-5 mr-2" />
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent text-base px-8 backdrop-blur-sm"
              asChild
            >
              <a href="#about">Discover More</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { value: '3,400+', label: 'Happy Patients' },
              { value: '5★', label: 'Google Rating' },
              { value: '10+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className={`font-display text-3xl font-bold ${index === 0 ? 'text-primary' : index === 1 ? 'text-accent' : 'text-kaya-purple'}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}