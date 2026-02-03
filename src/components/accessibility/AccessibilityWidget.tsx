import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accessibility, Plus, Minus, RotateCcw, Type, Moon, Sun, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  reducedMotion: false,
};

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('accessibility-settings');
      return saved ? JSON.parse(saved) : defaultSettings;
    }
    return defaultSettings;
  });

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

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

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

  const toggleHighContrast = () => {
    setSettings(prev => ({
      ...prev,
      highContrast: !prev.highContrast
    }));
  };

  const toggleReducedMotion = () => {
    setSettings(prev => ({
      ...prev,
      reducedMotion: !prev.reducedMotion
    }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <div className="fixed bottom-4 left-4 z-[100]" role="region" aria-label="Accessibility controls">
      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent",
          isOpen 
            ? "bg-destructive text-destructive-foreground" 
            : "bg-accent text-accent-foreground hover:scale-105"
        )}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close accessibility menu" : "Open accessibility menu"}
      >
        {isOpen ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <Accessibility className="w-7 h-7" aria-hidden="true" />
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
            className="absolute bottom-16 left-0 bg-card border border-border rounded-2xl shadow-xl p-4 min-w-[200px]"
            role="menu"
            aria-label="Accessibility options"
          >
            <h3 className="font-semibold text-foreground text-sm mb-4 flex items-center gap-2">
              <Accessibility className="w-4 h-4 text-accent" aria-hidden="true" />
              Accessibility
            </h3>

            {/* Font Size Controls */}
            <div className="mb-4">
              <label className="text-xs text-muted-foreground block mb-2">
                Text Size: {settings.fontSize}%
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseFontSize}
                  disabled={settings.fontSize <= 80}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    "bg-secondary hover:bg-secondary/80 text-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-accent",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                  aria-label="Decrease text size"
                >
                  <Type className="w-4 h-4" aria-hidden="true" />
                  <Minus className="w-3 h-3 absolute" aria-hidden="true" />
                </button>
                
                <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
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
                    "bg-secondary hover:bg-secondary/80 text-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-accent",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                  aria-label="Increase text size"
                >
                  <Type className="w-5 h-5" aria-hidden="true" />
                  <Plus className="w-3 h-3 absolute" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Toggle Options */}
            <div className="space-y-2 mb-4">
              {/* High Contrast */}
              <button
                onClick={toggleHighContrast}
                className={cn(
                  "w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left",
                  "focus:outline-none focus:ring-2 focus:ring-accent",
                  settings.highContrast 
                    ? "bg-accent text-accent-foreground" 
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                )}
                role="menuitemcheckbox"
                aria-checked={settings.highContrast}
              >
                {settings.highContrast ? (
                  <Sun className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5" aria-hidden="true" />
                )}
                <span className="text-sm font-medium">High Contrast</span>
              </button>

              {/* Reduced Motion */}
              <button
                onClick={toggleReducedMotion}
                className={cn(
                  "w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left",
                  "focus:outline-none focus:ring-2 focus:ring-accent",
                  settings.reducedMotion 
                    ? "bg-accent text-accent-foreground" 
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                )}
                role="menuitemcheckbox"
                aria-checked={settings.reducedMotion}
              >
                <RotateCcw className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">Reduce Motion</span>
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className={cn(
                "w-full flex items-center justify-center gap-2 p-2 rounded-lg transition-colors",
                "border border-border text-muted-foreground hover:text-foreground hover:bg-secondary",
                "focus:outline-none focus:ring-2 focus:ring-accent"
              )}
              aria-label="Reset all accessibility settings to default"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm">Reset All</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
