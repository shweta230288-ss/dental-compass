import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';

const CherryFinancing = () => {
  useEffect(() => {
    // Load Google Fonts for Cherry widget
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200..900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Set up _hw queue before script loads
    (window as any)._hw = (window as any)._hw || function (...args: any[]) {
      ((window as any)._hw.q = (window as any)._hw.q || []).push(args);
    };

    // Init the widget (queued until script loads)
    (window as any)._hw('init', {
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
    }, ['calculator', 'faq', 'testimony', 'hero']);

    // Load the Cherry widget script
    const script = document.createElement('script');
    script.id = '_hw';
    script.src = 'https://files.withcherry.com/widgets/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      link.remove();
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
