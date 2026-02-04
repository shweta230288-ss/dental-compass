import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { HighlightsSection } from '@/components/home/HighlightsSection';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { DoctorSection } from '@/components/home/DoctorSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { ReviewsPreview } from '@/components/home/ReviewsPreview';
import { CTASection } from '@/components/home/CTASection';
import { SEOHead } from '@/components/seo/SEOHead';

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Kaya Dental | Leominster MA Dentist | Redefining Comfort & Aesthetics"
        description="Kaya Dental in Leominster, MA offers comprehensive dental care including cosmetic dentistry, dental implants, Invisalign, and family dentistry. Call (978) 534-4000."
        canonicalPath=""
      />
      
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
