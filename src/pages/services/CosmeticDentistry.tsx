import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Sparkle } from 'lucide-react';

export default function CosmeticDentistry() {
  return (
    <ServicePageLayout
      title="Cosmetic Dentistry"
      metaDescription="Transform your smile with cosmetic dentistry at Kaya Dental in Leominster, MA. Veneers, bonding, whitening, and smile makeovers."
      heroSubtitle="Smile Transformation"
      heroDescription="Your smile is one of the first things people notice about you. At Kaya Dental, our cosmetic dentistry services can transform your smile, boosting your confidence and enhancing your natural beauty. From subtle improvements to complete smile makeovers, we create stunning results."
      icon={Sparkle}
      benefits={[
        'Customized smile design tailored to your facial features',
        'Advanced techniques for natural-looking results',
        'Multiple treatment options to fit your goals and budget',
        'Digital smile preview before treatment begins',
        'Minimally invasive approaches when possible',
        'Long-lasting, beautiful results',
      ]}
      whatToExpect={[
        {
          title: 'Smile Consultation',
          description: 'We discuss your smile goals and concerns, examining your teeth and facial structure.',
        },
        {
          title: 'Treatment Planning',
          description: 'Using digital imaging, we create a customized treatment plan to achieve your ideal smile.',
        },
        {
          title: 'Personalized Treatment',
          description: 'We perform your chosen cosmetic procedures with precision and artistic skill.',
        },
        {
          title: 'Reveal Your New Smile',
          description: 'See your transformed smile and receive care instructions for long-lasting results.',
        },
      ]}
      faqs={[
        {
          question: 'What cosmetic procedures do you offer?',
          answer: 'We offer teeth whitening, dental veneers, bonding, crown lengthening, gum contouring, and complete smile makeovers.',
        },
        {
          question: 'How long does a smile makeover take?',
          answer: 'Treatment time varies based on your needs. Some improvements can be made in one visit, while comprehensive makeovers may take several weeks.',
        },
        {
          question: 'Is cosmetic dentistry covered by insurance?',
          answer: 'Most cosmetic procedures are not covered by insurance, but some treatments that also restore function may have partial coverage. We offer flexible payment options.',
        },
      ]}
      relatedServices={[
        { title: 'Teeth Whitening', path: '/services/teeth-whitening' },
        { title: 'Invisalign', path: '/services/invisalign' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'Dental Implants', path: '/services/dental-implants' },
      ]}
    />
  );
}
