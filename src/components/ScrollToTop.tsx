import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const landedAt = useRef<number | null>(null);

  useLayoutEffect(() => {
    landedAt.current = null;
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' });
        landedAt.current = window.scrollY;
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  // Late-loading photos and fade-in animations can move a section after the
  // first scroll. Re-align once, but only while the reader hasn't scrolled away.
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const from = landedAt.current;
    if (from === null) return;

    const timer = window.setTimeout(() => {
      const target = document.getElementById(id);
      if (!target || window.scrollY !== from) return;
      const offset = target.getBoundingClientRect().top;
      if (Math.abs(offset) > 12) {
        window.scrollTo({ top: window.scrollY + offset, left: 0, behavior: 'instant' });
      }
    }, 300);

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
