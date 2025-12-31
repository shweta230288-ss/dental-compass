import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { HighlightsSection } from '@/components/home/HighlightsSection';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { DoctorSection } from '@/components/home/DoctorSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { ReviewsPreview } from '@/components/home/ReviewsPreview';
import { CTASection } from '@/components/home/CTASection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Kaya Dental | Leominster MA Dentist | Redefining Comfort & Aesthetics</title>
        <meta name="description" content="Kaya Dental in Leominster, MA offers comprehensive dental care including cosmetic dentistry, dental implants, Invisalign, and family dentistry. Call (978) 534-4000." />
        <link rel="canonical" href="https://kayadental.com" />
      </Helmet>
      
      <HeroSection />
      <HighlightsSection />
      <PhilosophySection />
      <DoctorSection />
      <ServicesPreview />
      <ReviewsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
