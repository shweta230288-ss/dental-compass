import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';

const CHERRY_WIDGET_SRC = 'https://files.withcherry.com/widgets/widget.js';
const CHERRY_SCRIPT_ID = '_hw';
const CHERRY_FONT_ID = 'cherry-widget-font';

type CherryWindow = Window & {
  _hw?: ((...args: any[]) => void) & { q?: any[][] };
  _hw_widgets?: string[];
  _hw_shared_layout?: unknown;
  _hw_global_config?: Record<string, unknown>;
  _hw_floating_config?: Record<string, unknown>;
  'loaded-_hw'?: boolean;
};

const CherryFinancing = () => {
  useEffect(() => {
    let isMounted = true;
    let hasRetried = false;
    let verifyTimeout: number | undefined;
    const win = window as CherryWindow;

    const widgetContainerIds = ['all', 'hero', 'calculator', 'howitworks', 'testimony', 'faq'];

    const clearWidgetContainers = () => {
      widgetContainerIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
      });
    };

    const hasRenderedContent = () => {
      const root = document.getElementById('all');
      return Boolean(root && root.childElementCount > 0);
    };

    const resetWidgetRuntime = () => {
      const existingScript = document.getElementById(CHERRY_SCRIPT_ID);
      if (existingScript) existingScript.remove();

      document
        .querySelectorAll(`script[src="${CHERRY_WIDGET_SRC}"]`)
        .forEach((scriptEl) => scriptEl.remove());

      document.querySelectorAll('.widget-mount').forEach((mount) => mount.remove());

      delete win._hw;
      delete win._hw_widgets;
      delete win._hw_shared_layout;
      delete win._hw_global_config;
      delete win._hw_floating_config;
      delete win['loaded-_hw'];
    };

    const ensureFont = () => {
      if (document.getElementById(CHERRY_FONT_ID)) return;

      const link = document.createElement('link');
      link.id = CHERRY_FONT_ID;
      link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200..900&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    };

    const initQueue = () => {
      const queueFn = ((...args: any[]) => {
        (queueFn.q = queueFn.q || []).push(args);
      }) as CherryWindow['_hw'];

      win._hw = queueFn;

      win._hw(
        'init',
        {
          debug: false,
          variables: {
            slug: 'kaya-dental',
            name: 'Kaya Dental',
            images: [21],
            customLogo: '',
            defaultPurchaseAmount: 2000,
            customImage: '',
            imageCategory: 'dental',
            language: 'en',
          },
          styles: {
            primaryColor: '#0b1548',
            secondaryColor: '#0b154810',
            fontFamily: 'Montserrat',
            headerFontFamily: 'Montserrat',
          },
        },
        ['all'],
      );
    };

    const bootstrapWidget = (allowRetry: boolean) => {
      if (!isMounted) return;

      resetWidgetRuntime();
      clearWidgetContainers();
      ensureFont();
      initQueue();

      const script = document.createElement('script');
      script.id = CHERRY_SCRIPT_ID;
      script.src = CHERRY_WIDGET_SRC;
      script.async = true;
      script.crossOrigin = 'anonymous';

      script.addEventListener('error', () => {
        console.error('[CherryWidget] script request failed');
        if (!allowRetry || !isMounted || hasRetried) return;

        hasRetried = true;
        window.setTimeout(() => bootstrapWidget(false), 800);
      });

      script.addEventListener('load', () => {
        if (!isMounted) return;

        verifyTimeout = window.setTimeout(() => {
          if (!isMounted || hasRenderedContent()) return;

          console.warn('[CherryWidget] loaded but not rendered; forcing one re-bootstrap');

          if (!allowRetry || hasRetried) return;
          hasRetried = true;
          bootstrapWidget(false);
        }, 2200);
      });

      document.body.appendChild(script);
    };

    bootstrapWidget(true);

    return () => {
      isMounted = false;
      if (verifyTimeout) window.clearTimeout(verifyTimeout);
      clearWidgetContainers();
      resetWidgetRuntime();
    };
  }, []);

  return (
    <Layout>
      <SEOHead
        title="Cherry Financing | Affordable Payment Plans | Kaya Dental"
        description="Apply for Cherry Financing at Kaya Dental. Easy approval, flexible monthly payments, and no hidden fees for your dental care in Leominster, MA."
        canonicalPath="/payment-plans/cherry"
      />

      <section className="py-12">
        <div className="container">
          <div id="all"></div>
          <div id="hero"></div>
          <div id="calculator"></div>
          <div id="howitworks"></div>
          <div id="testimony"></div>
          <div id="faq"></div>
        </div>
      </section>
    </Layout>
  );
};

export default CherryFinancing;
