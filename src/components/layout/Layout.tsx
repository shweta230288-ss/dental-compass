import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SkipLink } from '../accessibility/SkipLink';
import { AccessibilityWidget } from '../accessibility/AccessibilityWidget';
import { LocalBusinessSchema } from '../seo/LocalBusinessSchema';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <LocalBusinessSchema />
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1" role="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
