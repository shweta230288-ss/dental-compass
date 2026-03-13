import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';

const CHERRY_WIDGET_SRC = 'https://files.withcherry.com/widgets/widget.js';
const CHERRY_SCRIPT_ID = 'cherry-widget-script';
const CHERRY_FONT_ID = 'cherry-widget-font';

type CherryWindow = Window & {
  _hw?: ((...args: any[]) => void) & { q?: any[][] };
  __cherryWidgetScriptPromise?: Promise<void>;
  __cherryWidgetLoaded?: boolean;
};

const CherryFinancing = () => {
  useEffect(() => {
    let isMounted = true;
    const win = window as CherryWindow;
    const widgetContainerIds = ['all', 'hero', 'calculator', 'howitworks', 'testimony', 'faq'];

    const clearWidgetContainers = () => {
      widgetContainerIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
      });
    };

    const ensureQueue = () => {
      if (typeof win._hw === 'function') return;
      const queue = ((...args: any[]) => {
        (queue.q = queue.q || []).push(args);
      }) as CherryWindow['_hw'];
      win._hw = queue;
    };

    const ensureScript = () => {
      if (win.__cherryWidgetLoaded) return Promise.resolve();
      if (win.__cherryWidgetScriptPromise) return win.__cherryWidgetScriptPromise;

      win.__cherryWidgetScriptPromise = new Promise<void>((resolve, reject) => {
        const markLoaded = () => {
          win.__cherryWidgetLoaded = true;
          resolve();
        };

        const existingScript = document.getElementById(CHERRY_SCRIPT_ID) as HTMLScriptElement | null;

        if (existingScript) {
          if (existingScript.dataset.loaded === 'true') {
            markLoaded();
            return;
          }

          existingScript.addEventListener(
            'load',
            () => {
              existingScript.dataset.loaded = 'true';
              markLoaded();
            },
            { once: true },
          );

          existingScript.addEventListener(
            'error',
            () => {
              win.__cherryWidgetScriptPromise = undefined;
              reject(new Error('Cherry widget script failed to load'));
            },
            { once: true },
          );

          return;
        }

        const script = document.createElement('script');
        script.id = CHERRY_SCRIPT_ID;
        script.src = CHERRY_WIDGET_SRC;
        script.async = true;

        script.addEventListener(
          'load',
          () => {
            script.dataset.loaded = 'true';
            markLoaded();
          },
          { once: true },
        );

        script.addEventListener(
          'error',
          () => {
            win.__cherryWidgetScriptPromise = undefined;
            reject(new Error('Cherry widget script failed to load'));
          },
          { once: true },
        );

        document.body.appendChild(script);
      });

      return win.__cherryWidgetScriptPromise;
    };

    const initWidget = () => {
      if (!isMounted || typeof win._hw !== 'function') return;

      clearWidgetContainers();

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
        widgetContainerIds,
      );
    };

    const bootstrap = async () => {
      clearWidgetContainers();

      if (!document.getElementById(CHERRY_FONT_ID)) {
        const link = document.createElement('link');
        link.id = CHERRY_FONT_ID;
        link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200..900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }

      ensureQueue();

      try {
        await ensureScript();
        if (!isMounted) return;

        initWidget();

        window.setTimeout(() => {
          if (!isMounted) return;

          const hasRendered = widgetContainerIds.some((id) => {
            const el = document.getElementById(id);
            return Boolean(el && el.childElementCount > 0);
          });

          if (!hasRendered) {
            initWidget();
          }
        }, 1200);
      } catch (error) {
        console.error('Cherry widget failed to load', error);
      }
    };

    bootstrap();

    return () => {
      isMounted = false;
      clearWidgetContainers();
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
