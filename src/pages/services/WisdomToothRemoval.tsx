import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Minus } from 'lucide-react';

export default function WisdomToothRemoval() {
  return (
    <ServicePageLayout
      title="Wisdom Tooth Removal"
      metaDescription="Wisdom tooth extraction at Kaya Dental in Leominster, MA. Safe, comfortable removal of problematic wisdom teeth."
      heroSubtitle="Oral Surgery"
      heroDescription="Wisdom teeth often cause problems as they emerge, leading to pain, crowding, or infection. At Kaya Dental, we perform safe, comfortable wisdom tooth extractions to protect your oral health and prevent future complications."
      icon={Minus}
      benefits={[
        'Gentle extraction techniques',
        'Multiple anesthesia options for comfort',
        'Prevention of crowding and misalignment',
        'Treatment of impacted wisdom teeth',
        'Quick recovery with proper aftercare',
        'Detailed post-operative instructions',
      ]}
      whatToExpect={[
        {
          title: 'Evaluation & X-rays',
          description: 'We assess the position of your wisdom teeth and plan the best approach for removal.',
        },
        {
          title: 'Anesthesia & Comfort',
          description: 'We ensure you\'re completely comfortable with appropriate anesthesia before beginning.',
        },
        {
          title: 'Extraction',
          description: 'Using specialized techniques, we carefully remove the wisdom teeth.',
        },
        {
          title: 'Recovery Instructions',
          description: 'We provide detailed aftercare instructions and prescriptions for a smooth recovery.',
        },
      ]}
      faqs={[
        {
          question: 'Does wisdom tooth removal hurt?',
          answer: 'No, you\'ll be numb during the procedure and feel no pain. We provide medication to manage any discomfort during recovery.',
        },
        {
          question: 'How long is recovery?',
          answer: 'Most patients recover within 3-5 days. Swelling and discomfort are normal and typically peak on day 2-3.',
        },
        {
          question: 'Do all wisdom teeth need to be removed?',
          answer: 'Not always. If your wisdom teeth are healthy, properly positioned, and don\'t cause problems, removal may not be necessary.',
        },
      ]}
      relatedServices={[
        { title: 'Emergency Dentistry', path: '/services/emergency-dentistry' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
        { title: 'Root Canal', path: '/services/root-canal' },
        { title: 'Dental Fillings', path: '/services/dental-fillings' },
      ]}
    />
  );
}
