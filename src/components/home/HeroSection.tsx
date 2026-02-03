import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-label="Welcome to Kaya Dental"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-kaya-navy" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover object-center [transform:translateX(0%)_scale(1.15)] md:[transform:translateX(4%)_scale(1.4)] lg:[transform:translateX(4%)_scale(1.5)] contrast-[1.1] brightness-[1.05] saturate-[1.1]"
          onCanPlay={() => setIsVideoPlaying(true)}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-kaya-navy/70 via-kaya-navy/40 to-transparent" />
      </div>

      {/* Video Control Button - WCAG 2.2.2 Pause, Stop, Hide */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-20 right-4 z-20 p-3 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        aria-label={isVideoPlaying ? 'Pause background video' : 'Play background video'}
        aria-pressed={isVideoPlaying}
      >
        {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
          >
            Welcome to{' '}
            <span className="text-accent">Kaya Dental</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 font-light italic mb-6"
          >
            Redefining Comfort & Aesthetics
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
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
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8"
              asChild
            >
              <a href="tel:978-534-4000">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-base px-8 backdrop-blur-sm"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
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
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
