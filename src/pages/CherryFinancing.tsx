import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';

const CherryFinancing = () => {
  useEffect(() => {
    // Load Cherry widget script
    const script = document.createElement('script');
    script.src = 'https://files.withcherry.com/widgets/widget.js';
    script.async = true;
    script.id = '_hw';
    document.body.appendChild(script);

    script.onload = () => {
      if (typeof (window as any)._hw === 'function') {
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
      }
    };

    return () => {
      // Cleanup
      const el = document.getElementById('_hw');
      if (el) el.remove();
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
