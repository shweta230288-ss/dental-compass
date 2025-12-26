import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { AlignCenter } from 'lucide-react';

export default function Invisalign() {
  return (
    <ServicePageLayout
      title="Invisalign"
      metaDescription="Invisalign clear aligners at Kaya Dental in Leominster, MA. Straighten your teeth discreetly with comfortable, removable aligners."
      heroSubtitle="Clear Aligners"
      heroDescription="Achieve the straight, beautiful smile you've always wanted without traditional metal braces. Invisalign uses custom-made, virtually invisible aligners that gradually shift your teeth into perfect alignment while fitting seamlessly into your lifestyle."
      icon={AlignCenter}
      benefits={[
        'Virtually invisible clear aligners',
        'Removable for eating, drinking, and brushing',
        'Comfortable with no metal wires or brackets',
        'Fewer office visits than traditional braces',
        'Predictable results with 3D treatment planning',
        'iTero digital scanning—no messy impressions',
      ]}
      whatToExpect={[
        {
          title: 'Digital Consultation',
          description: 'We scan your teeth with our iTero scanner and show you a preview of your final results.',
        },
        {
          title: 'Custom Aligner Creation',
          description: 'Your personalized aligners are crafted using advanced 3D printing technology.',
        },
        {
          title: 'Regular Progress Checks',
          description: 'You\'ll switch to new aligners every 1-2 weeks, with periodic check-ins at our office.',
        },
        {
          title: 'Reveal Your New Smile',
          description: 'Once treatment is complete, you\'ll wear retainers to maintain your beautiful new smile.',
        },
      ]}
      faqs={[
        {
          question: 'How long does Invisalign treatment take?',
          answer: 'Treatment typically takes 6-18 months, depending on the complexity of your case. Many patients see results in as few as 6 months.',
        },
        {
          question: 'Is Invisalign as effective as braces?',
          answer: 'Yes! Invisalign can treat most orthodontic issues that traditional braces can, often with greater comfort and convenience.',
        },
        {
          question: 'How many hours a day do I wear the aligners?',
          answer: 'For best results, wear your aligners 20-22 hours per day, removing them only for eating, drinking, and oral hygiene.',
        },
      ]}
      relatedServices={[
        { title: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry' },
        { title: 'Orthodontics', path: '/services/orthodontics' },
        { title: 'Teeth Whitening', path: '/services/teeth-whitening' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
      ]}
    />
  );
}
