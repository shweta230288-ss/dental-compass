import { useState, useEffect, useCallback, useRef, type CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Plus, 
  Minus, 
  RotateCcw, 
  Type, 
  Moon, 
  X,
  Link2,
  AlignJustify,
  BookOpen,
  Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  dyslexiaFont: boolean;
  textSpacing: boolean;
  highlightLinks: boolean;
  readingGuide: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  reducedMotion: false,
  dyslexiaFont: false,
  textSpacing: false,
  highlightLinks: false,
  readingGuide: false,
};

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [scrollThumb, setScrollThumb] = useState({ heightPct: 0, topPct: 0 });
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('accessibility-settings');
      return saved ? JSON.parse(saved) : defaultSettings;
    }
    return defaultSettings;
  });
  const [guidePosition, setGuidePosition] = useState(0);
  const widgetRef = useRef<HTMLDivElement>(null);
  // Ref for the *scrollable* element inside the panel (keep separate from motion wrapper)
  // to avoid mobile issues where transforms/animations can break overflow scrolling.
  const panelScrollRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    // Small delay to prevent immediate close on open
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Apply settings on mount and when they change
  useEffect(() => {
    // Font size
    document.documentElement.style.fontSize = `${settings.fontSize}%`;
    
    // High contrast
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }

    // Dyslexia font
    if (settings.dyslexiaFont) {
      document.documentElement.classList.add('dyslexia-font');
    } else {
      document.documentElement.classList.remove('dyslexia-font');
    }

    // Text spacing
    if (settings.textSpacing) {
      document.documentElement.classList.add('text-spacing');
    } else {
      document.documentElement.classList.remove('text-spacing');
    }

    // Highlight links
    if (settings.highlightLinks) {
      document.documentElement.classList.add('highlight-links');
    } else {
      document.documentElement.classList.remove('highlight-links');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Custom (always visible) scroll indicator for mobile.
  // Android/Chrome often hides native scrollbars; this provides a reliable visual cue.
  const updateScrollIndicator = useCallback(() => {
    const el = panelScrollRef.current;
    if (!el) return;

    const scrollHeight = el.scrollHeight;
    const clientHeight = el.clientHeight;
    const scrollTop = el.scrollTop;
    const overflow = scrollHeight - clientHeight;

    const hasOverflow = overflow > 4;
    setShowScrollIndicator(isMobile && hasOverflow);

    if (!hasOverflow) {
      setScrollThumb({ heightPct: 0, topPct: 0 });
      return;
    }

    // Thumb size reflects how much content is visible. Clamp to keep it usable.
    const heightPct = Math.max(18, Math.min(60, (clientHeight / scrollHeight) * 100));
    const topPct = ((scrollTop / overflow) * (100 - heightPct)) || 0;
    setScrollThumb({ heightPct, topPct });
  }, [isMobile]);

  useEffect(() => {
    if (!isOpen) return;

    // The panel is animated in; measure after layout settles so overflow is detected correctly
    // (especially on Android with large text / dynamic viewport changes).
    let raf1 = requestAnimationFrame(() => {
      let raf2 = requestAnimationFrame(() => {
        updateScrollIndicator();
      });
      // store raf2 in raf1 slot for cleanup convenience
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (raf1 as any) = raf2;
    });

    // Track panel size changes (font size, orientation, address bar, etc.)
    const el = panelScrollRef.current;
    let ro: ResizeObserver | undefined;
    if (el && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => updateScrollIndicator());
      ro.observe(el);
    }

    // Recompute when viewport changes (address bar show/hide, rotation, etc.)
    window.addEventListener('resize', updateScrollIndicator);

    return () => {
      cancelAnimationFrame(raf1);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cancelAnimationFrame((raf1 as any) ?? 0);
      ro?.disconnect();
      window.removeEventListener('resize', updateScrollIndicator);
    };
  }, [isOpen, settings.fontSize, settings.textSpacing, isMobile, updateScrollIndicator]);

  // Reading guide mouse/touch tracking
  const handlePointerMove = useCallback((e: MouseEvent | TouchEvent) => {
    const clientY = 'touches' in e ? e.touches[0]?.clientY : e.clientY;
    if (clientY !== undefined) {
      setGuidePosition(clientY);
    }
  }, []);

  useEffect(() => {
    if (!settings.readingGuide) return;

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, [settings.readingGuide, handlePointerMove]);

  const increaseFontSize = () => {
    setSettings(prev => ({
      ...prev,
      fontSize: Math.min(prev.fontSize + 10, 150)
    }));
  };

  const decreaseFontSize = () => {
    setSettings(prev => ({
      ...prev,
      fontSize: Math.max(prev.fontSize - 10, 80)
    }));
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  const toggleOptions = [
    {
      key: 'highContrast' as const,
      label: 'High Contrast',
      icon: Moon,
      description: 'White on navy theme'
    },
    {
      key: 'reducedMotion' as const,
      label: 'Reduce Motion',
      icon: Eye,
      description: 'Disable animations'
    },
    {
      key: 'dyslexiaFont' as const,
      label: 'Dyslexia Font',
      icon: Type,
      description: 'OpenDyslexic font'
    },
    {
      key: 'textSpacing' as const,
      label: 'Text Spacing',
      icon: AlignJustify,
      description: 'Increase spacing'
    },
    {
      key: 'highlightLinks' as const,
      label: 'Highlight Links',
      icon: Link2,
      description: 'Make links visible'
    },
    {
      key: 'readingGuide' as const,
      label: 'Reading Guide',
      icon: BookOpen,
      description: isMobile ? 'Line follows touch' : 'Line follows cursor',
      mobileNote: isMobile ? '(Touch to move)' : undefined
    },
  ];

  const panelClassName = cn(
    // Mobile: fixed bottom sheet so it can't render off-screen
    isMobile ? "fixed left-4 right-4 bottom-20" : "absolute bottom-16 left-0",
    "bg-card border border-border rounded-2xl shadow-xl p-4 pr-6",
    isMobile ? "w-auto" : "w-[280px]",
    // Needed so our custom scroll indicator (absolute) is positioned correctly
    "relative"
  );

  const scrollAreaStyle: CSSProperties = {
    // Constrain height so the panel always becomes internally scrollable
    // even at large text sizes.
    maxHeight: isMobile ? 'min(78vh, calc(100dvh - 140px))' : 'min(60vh, calc(100dvh - 96px))',
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
    WebkitOverflowScrolling: 'touch',
    touchAction: 'pan-y',
  };

  return (
    <>
      {/* Reading Guide Line */}
      {settings.readingGuide && (
        <div
          className="fixed left-0 right-0 h-12 pointer-events-none z-[99] transition-transform duration-75"
          style={{ 
            top: guidePosition - 24,
            background: 'linear-gradient(to bottom, transparent 0%, hsl(38 70% 50% / 0.15) 40%, hsl(38 70% 50% / 0.15) 60%, transparent 100%)'
          }}
          aria-hidden="true"
        >
          <div 
            className="absolute left-0 right-0 top-1/2 h-0.5 bg-accent/40"
            style={{ transform: 'translateY(-50%)' }}
          />
        </div>
      )}

      {/* Use px-based positioning so the widget doesn't drift/scale when users increase global font size */}
      <div
        ref={widgetRef}
        className="fixed bottom-[16px] left-[16px] z-[100]"
        role="region"
        aria-label="Accessibility controls"
      >
        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            // Use fixed px sizes so the icon stays correct at higher text scaling
            "w-[56px] h-[56px] rounded-full shadow-lg flex items-center justify-center transition-all duration-300",
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent",
            isOpen 
              ? "bg-destructive text-destructive-foreground" 
              : "bg-accent text-accent-foreground hover:scale-105"
          )}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close accessibility menu" : "Open accessibility menu"}
        >
          {isOpen ? (
            <X className="w-[24px] h-[24px]" aria-hidden="true" />
          ) : (
            <Accessibility className="w-[28px] h-[28px]" aria-hidden="true" />
          )}
        </button>

        {/* Accessibility Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className={panelClassName}
              role="menu"
              aria-label="Accessibility options"
            >
              {showScrollIndicator && (
                <div
                  className="pointer-events-none absolute right-2 top-3 bottom-3 w-1 rounded-full bg-border/60"
                  aria-hidden="true"
                >
                  <div
                    className="absolute left-0 right-0 rounded-full bg-accent/70"
                    style={{
                      height: `${scrollThumb.heightPct}%`,
                      top: `${scrollThumb.topPct}%`,
                    }}
                  />
                </div>
              )}

              {/* Scrollable content area */}
              <div
                ref={panelScrollRef}
                onScroll={updateScrollIndicator}
                className={cn(
                  "overflow-y-auto scrollbar-thin overscroll-contain",
                  // Leave room for the indicator on the right so it never overlaps content
                  "pr-2"
                )}
                style={scrollAreaStyle}
              >
                <h3 className="font-semibold text-foreground text-sm mb-4 flex items-center gap-2">
                  <Accessibility className="w-4 h-4 text-accent" aria-hidden="true" />
                  Accessibility Options
                </h3>

                {/* Font Size Controls */}
                <div className="mb-4 p-3 bg-secondary/50 rounded-xl">
                  <label className="text-xs text-muted-foreground block mb-2 font-medium">
                    Text Size: {settings.fontSize}%
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={decreaseFontSize}
                      disabled={settings.fontSize <= 80}
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                        "bg-background hover:bg-background/80 text-foreground border border-border",
                        "focus:outline-none focus:ring-2 focus:ring-accent",
                        "disabled:opacity-50 disabled:cursor-not-allowed"
                      )}
                      aria-label="Decrease text size"
                    >
                      <Minus className="w-4 h-4" aria-hidden="true" />
                    </button>

                    <div className="flex-1 h-2 bg-background rounded-full overflow-hidden border border-border">
                      <div
                        className="h-full bg-accent transition-all duration-300"
                        style={{ width: `${((settings.fontSize - 80) / 70) * 100}%` }}
                      />
                    </div>

                    <button
                      onClick={increaseFontSize}
                      disabled={settings.fontSize >= 150}
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                        "bg-background hover:bg-background/80 text-foreground border border-border",
                        "focus:outline-none focus:ring-2 focus:ring-accent",
                        "disabled:opacity-50 disabled:cursor-not-allowed"
                      )}
                      aria-label="Increase text size"
                    >
                      <Plus className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Toggle Options */}
                <div className="space-y-2 mb-4">
                  {toggleOptions.map(option => {
                    const Icon = option.icon;
                    const isActive = settings[option.key];

                    return (
                      <button
                        key={option.key}
                        onClick={() => toggleSetting(option.key)}
                        className={cn(
                          "w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left",
                          "focus:outline-none focus:ring-2 focus:ring-accent",
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "bg-secondary/50 text-foreground hover:bg-secondary"
                        )}
                        role="menuitemcheckbox"
                        aria-checked={isActive}
                      >
                        <div
                          className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center",
                            isActive ? "bg-accent-foreground/20" : "bg-background"
                          )}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-medium block">{option.label}</span>
                          <span
                            className={cn(
                              "text-xs block truncate",
                              isActive ? "text-accent-foreground/70" : "text-muted-foreground"
                            )}
                          >
                            {option.description}
                          </span>
                        </div>
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                            isActive
                              ? "border-accent-foreground bg-accent-foreground"
                              : "border-border"
                          )}
                        >
                          {isActive && (
                            <svg
                              className="w-3 h-3 text-accent"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Reset Button */}
                <button
                  onClick={resetSettings}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 p-3 rounded-xl transition-colors",
                    "border border-border text-muted-foreground hover:text-foreground hover:bg-secondary",
                    "focus:outline-none focus:ring-2 focus:ring-accent"
                  )}
                  aria-label="Reset all accessibility settings to default"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-medium">Reset All Settings</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
