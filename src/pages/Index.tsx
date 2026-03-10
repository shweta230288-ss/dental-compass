import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { HighlightsSection } from '@/components/home/HighlightsSection';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { LegacySection } from '@/components/home/LegacySection';
import { DoctorSection } from '@/components/home/DoctorSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { ReviewsPreview } from '@/components/home/ReviewsPreview';
import { CTASection } from '@/components/home/CTASection';
import { ServiceAreasSection } from '@/components/home/ServiceAreasSection';
import { SEOHead } from '@/components/seo/SEOHead';

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Kaya Dental | Trusted Dentist in Leominster MA | Redefining Comfort & Aesthetics"
        description="Kaya Dental — your trusted dentist in Leominster, MA. Comprehensive dental care including cosmetic dentistry, dental implants, Invisalign, and family dentistry. Call (978) 534-4000."
        canonicalPath=""
      />
      
      <HeroSection />
      <HighlightsSection />
      <PhilosophySection />
      <LegacySection />
      <DoctorSection />
      <ServicesPreview />
      <ReviewsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
