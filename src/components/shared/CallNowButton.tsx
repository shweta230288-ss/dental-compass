import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PHONE_TEL = 'tel:9785344000';
const PHONE_DISPLAY = '(978) 534-4000';

interface CallNowButtonProps {
  size?: 'default' | 'lg';
  showNumber?: 'desktop' | 'always' | 'never';
  fullWidth?: boolean;
  className?: string;
}

export function CallNowButton({
  size = 'default',
  showNumber = 'desktop',
  fullWidth = false,
  className,
}: CallNowButtonProps) {
  const isLarge = size === 'lg';

  return (
    <div className={cn('flex flex-col items-center gap-1', fullWidth && 'w-full', className)}>
      <Button
        size={isLarge ? 'lg' : 'default'}
        className={cn(
          'bg-accent hover:bg-accent/90 text-accent-foreground h-auto whitespace-normal shadow-md shadow-accent/20 transition-all hover:shadow-lg hover:shadow-accent/30',
          fullWidth && 'w-full',
          isLarge ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base'
        )}
        asChild
      >
        <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 font-semibold">
          <Phone className={cn('flex-shrink-0', isLarge ? 'w-5 h-5' : 'w-4 h-4')} />
          Just call now.
        </a>
      </Button>
      {showNumber !== 'never' && (
        <span
          className={cn(
            'text-sm font-medium tracking-wide text-current',
            showNumber === 'desktop' && 'hidden md:inline'
          )}
        >
          {PHONE_DISPLAY}
        </span>
      )}
    </div>
  );
}

export { PHONE_TEL, PHONE_DISPLAY };
