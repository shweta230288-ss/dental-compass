import { Star, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=kaya+dental&rlz=1C5CHFA_enUS1192US1192&oq=kaya+de&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYQDIGCAMQRRg5MgcIBBAuGIAEMgcIBRAAGIAEMgYIBhBFGD0yBggHEEUYPdIBCDQxNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&zx=1768166807866&no_sw_cr=1#lrd=0x89e3ef57446db337:0x1911c06f2e35821,1,,,,';
export const DEMANDFORCE_REVIEWS_URL = 'https://local.demandforce.com/b/leominsterdentistry';

function GoogleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.32-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.68 28.18A13.2 13.2 0 0 1 11 24c0-1.45.25-2.86.68-4.18v-5.7H4.34A21.94 21.94 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.34-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.34 5.7c1.74-5.2 6.59-9.07 12.32-9.07z"
      />
    </svg>
  );
}

interface ReviewBadgesProps {
  /** 'light' for badges on dark backgrounds, 'dark' for badges on light backgrounds */
  variant?: 'light' | 'dark';
  /** 'md' compact pills, 'lg' prominent cards */
  size?: 'md' | 'lg';
  className?: string;
}

export function ReviewBadges({ variant = 'light', size = 'md', className }: ReviewBadgesProps) {
  const pill =
    variant === 'light'
      ? 'bg-primary-foreground/10 border-accent/40 text-primary-foreground hover:bg-primary-foreground/20'
      : 'bg-card border-border text-foreground hover:bg-muted';

  if (size === 'lg') {
    const card =
      variant === 'light'
        ? 'bg-primary-foreground/[0.08] border-accent/50 text-primary-foreground hover:bg-primary-foreground/[0.16] hover:border-accent'
        : 'bg-card border-border text-foreground hover:border-accent/60 hover:bg-muted';

    const items = [
      {
        href: GOOGLE_REVIEWS_URL,
        label: 'Read our 4.9 star Google reviews (opens in a new tab)',
        icon: <GoogleGlyph className="w-7 h-7 flex-shrink-0" />,
        rating: '4.9',
        source: 'Google Reviews',
        count: '700+ reviews',
      },
      {
        href: DEMANDFORCE_REVIEWS_URL,
        label: 'Read our 5.0 star verified patient reviews on Demandforce (opens in a new tab)',
        icon: <BadgeCheck className="w-7 h-7 flex-shrink-0 text-accent" />,
        rating: '5.0',
        source: 'Verified Patient Reviews',
        count: '3,600+ reviews',
      },
    ];

    return (
      <div
        className={cn(
          'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-xl',
          className
        )}
      >
        {items.map((item) => (
          <a
            key={item.source}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={cn(
              'group flex items-center gap-3 rounded-2xl border-2 px-4 py-3.5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
              card
            )}
          >
            {item.icon}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold leading-none">{item.rating}</span>
                <span className="flex items-center gap-0.5 text-accent">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </span>
              </div>
              <div className="mt-1 text-[13px] font-semibold leading-tight">{item.source}</div>
              <div className="text-[12px] opacity-75 leading-tight">{item.count}</div>
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5', className)}>
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Read our 4.9 star Google reviews (opens in a new tab)"
        className={cn(
          'group inline-flex items-center gap-2.5 rounded-full border px-4 py-2.5 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
          pill
        )}
      >
        <GoogleGlyph className="w-5 h-5 flex-shrink-0" />
        <span className="flex items-center gap-0.5 text-accent">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </span>
        <span className="text-sm font-semibold whitespace-nowrap">4.9 Stars</span>
        <span className="opacity-40">|</span>
        <span className="text-sm font-semibold whitespace-nowrap">700+ Google Reviews</span>
      </a>

      <a
        href={DEMANDFORCE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Read our 5.0 star verified patient reviews on Demandforce (opens in a new tab)"
        className={cn(
          'group inline-flex items-center gap-2.5 rounded-full border px-4 py-2.5 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
          pill
        )}
      >
        <BadgeCheck className="w-5 h-5 flex-shrink-0 text-accent" />
        <span className="flex items-center gap-0.5 text-accent">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </span>
        <span className="text-sm font-semibold whitespace-nowrap">5.0 Stars</span>
        <span className="opacity-40">|</span>
        <span className="text-sm font-semibold whitespace-nowrap">3,600+ Patient Reviews</span>
      </a>
    </div>
  );
}
