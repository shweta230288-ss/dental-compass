import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';

const CHERRY_WIDGET_SRC = 'https://files.withcherry.com/widgets/widget.js';
const CHERRY_SCRIPT_ID = 'cherry-widget-script';
const CHERRY_FONT_ID = 'cherry-widget-font';

const CherryFinancing = () => {
  useEffect(() => {
    let isMounted = true;
    const widgetContainerIds = ['all', 'hero', 'calculator', 'howitworks', 'testimony', 'faq'];
    const widgetSections = ['calculator', 'faq', 'testimony', 'hero'];

    const clearWidgetContainers = () => {
      widgetContainerIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
      });
    };

    const resetWidgetRuntime = () => {
      const existingScript = document.getElementById(CHERRY_SCRIPT_ID);
      if (existingScript) existingScript.remove();
      delete (window as any)._hw;
    };

    const ensureQueue = () => {
      (window as any)._hw = function (...args: any[]) {
        ((window as any)._hw.q = (window as any)._hw.q || []).push(args);
      };
    };

    const initWidget = () => {
      if (!isMounted || typeof (window as any)._hw !== 'function') return;

      (window as any)._hw(
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
        widgetSections,
      );
    };

    clearWidgetContainers();
    resetWidgetRuntime();

    if (!document.getElementById(CHERRY_FONT_ID)) {
      const link = document.createElement('link');
      link.id = CHERRY_FONT_ID;
      link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200..900&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    ensureQueue();

    const script = document.createElement('script');
    script.id = CHERRY_SCRIPT_ID;
    script.src = CHERRY_WIDGET_SRC;
    script.async = true;
    script.addEventListener(
      'load',
      () => {
        if (!isMounted) return;
        initWidget();
      },
      { once: true },
    );

    document.body.appendChild(script);

    return () => {
      isMounted = false;
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
