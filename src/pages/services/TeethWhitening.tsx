import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Sun } from 'lucide-react';

export default function TeethWhitening() {
  return (
    <ServicePageLayout
      title="Teeth Whitening"
      metaDescription="Professional teeth whitening at Kaya Dental in Leominster, MA. Achieve a brighter, more radiant smile with our safe, effective whitening treatments."
      heroSubtitle="Brighter Smiles"
      heroDescription="A brighter smile can transform your appearance and boost your confidence. At Kaya Dental, we offer professional teeth whitening treatments that deliver dramatic results safely and effectively, far exceeding what over-the-counter products can achieve."
      icon={Sun}
      benefits={[
        'Professional-strength whitening for dramatic results',
        'Safe treatment supervised by dental professionals',
        'Custom-fitted trays for at-home maintenance',
        'Results in as little as one visit',
        'Long-lasting brightness with proper care',
        'Treatment tailored to your sensitivity level',
      ]}
      whatToExpect={[
        {
          title: 'Shade Evaluation',
          description: 'We assess your current tooth shade and discuss your whitening goals.',
        },
        {
          title: 'Preparation',
          description: 'Your teeth are cleaned and your gums are protected before whitening begins.',
        },
        {
          title: 'Whitening Application',
          description: 'Professional-grade whitening gel is applied and activated for optimal results.',
        },
        {
          title: 'Take-Home Care',
          description: 'You receive custom trays and whitening gel for maintaining your bright smile at home.',
        },
      ]}
      faqs={[
        {
          question: 'How white will my teeth get?',
          answer: 'Most patients achieve 4-8 shades brighter. Results vary based on the original shade and type of staining.',
        },
        {
          question: 'Will whitening make my teeth sensitive?',
          answer: 'Some temporary sensitivity is normal. We use techniques and products designed to minimize discomfort.',
        },
        {
          question: 'How long do whitening results last?',
          answer: 'With proper care and occasional touch-ups, results can last 1-3 years. Avoiding staining foods and drinks helps maintain brightness.',
        },
      ]}
      relatedServices={[
        { title: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry' },
        { title: 'Exam and Cleaning', path: '/services/exam-cleaning' },
        { title: 'Invisalign', path: '/services/invisalign' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
      ]}
    />
  );
}
