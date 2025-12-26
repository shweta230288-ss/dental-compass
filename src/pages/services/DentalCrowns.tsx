import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Crown } from 'lucide-react';

export default function DentalCrowns() {
  return (
    <ServicePageLayout
      title="Dental Crowns"
      metaDescription="Custom dental crowns at Kaya Dental in Leominster, MA. Restore damaged teeth with natural-looking, durable crowns."
      heroSubtitle="Restorative Excellence"
      heroDescription="Dental crowns restore damaged, decayed, or weakened teeth to their full strength and beauty. At Kaya Dental, we craft custom crowns that look, feel, and function like your natural teeth, using advanced materials and precision technology."
      icon={Crown}
      benefits={[
        'Natural-looking ceramic and porcelain materials',
        'Custom-matched to your tooth shade',
        'Restores full function and strength',
        'Protects weakened teeth from further damage',
        'Long-lasting durability (10-15+ years)',
        '3D-printed precision for perfect fit',
      ]}
      whatToExpect={[
        {
          title: 'Tooth Preparation',
          description: 'We reshape your tooth to accommodate the crown and take precise digital impressions.',
        },
        {
          title: 'Temporary Crown',
          description: 'A temporary crown protects your tooth while your permanent crown is being crafted.',
        },
        {
          title: 'Crown Fabrication',
          description: 'Your custom crown is created using high-quality materials matched to your natural teeth.',
        },
        {
          title: 'Final Placement',
          description: 'We place your permanent crown, ensuring perfect fit, bite, and appearance.',
        },
      ]}
      faqs={[
        {
          question: 'How long do dental crowns last?',
          answer: 'With proper care, dental crowns typically last 10-15 years or longer. Some patients keep their crowns for 25+ years.',
        },
        {
          question: 'Will my crown look natural?',
          answer: 'Absolutely. We use tooth-colored materials and carefully match the shade, shape, and translucency to your natural teeth.',
        },
        {
          question: 'Is getting a crown painful?',
          answer: 'No, we use local anesthesia to ensure complete comfort. Most patients report minimal to no discomfort during or after the procedure.',
        },
      ]}
      relatedServices={[
        { title: 'Dental Fillings', path: '/services/dental-fillings' },
        { title: 'Root Canal', path: '/services/root-canal' },
        { title: 'Dental Implants', path: '/services/dental-implants' },
        { title: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry' },
      ]}
    />
  );
}
