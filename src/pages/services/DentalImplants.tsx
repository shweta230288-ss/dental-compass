import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Puzzle } from 'lucide-react';

export default function DentalImplants() {
  return (
    <ServicePageLayout
      title="Dental Implants"
      metaDescription="Dental implants at Kaya Dental in Leominster, MA. Permanent tooth replacement that looks, feels, and functions like natural teeth."
      heroSubtitle="Permanent Solutions"
      heroDescription="Dental implants are the gold standard for replacing missing teeth. Unlike dentures or bridges, implants replace both the root and crown of your tooth, providing a permanent, natural-looking solution that preserves your jawbone and restores your complete smile."
      icon={Puzzle}
      benefits={[
        'Permanent tooth replacement—no removal needed',
        'Looks, feels, and functions like natural teeth',
        'Preserves jawbone and prevents bone loss',
        'No impact on adjacent healthy teeth',
        'Eat, speak, and smile with complete confidence',
        '95%+ success rate with proper care',
      ]}
      whatToExpect={[
        {
          title: 'Comprehensive Evaluation',
          description: 'We assess your oral health, bone density, and overall suitability for implants.',
        },
        {
          title: 'Implant Placement',
          description: 'The titanium implant post is surgically placed into your jawbone.',
        },
        {
          title: 'Healing Period',
          description: 'Over 3-6 months, the implant fuses with your bone in a process called osseointegration.',
        },
        {
          title: 'Crown Attachment',
          description: 'Once healed, your custom-made crown is attached to complete your new tooth.',
        },
      ]}
      faqs={[
        {
          question: 'Am I a candidate for dental implants?',
          answer: 'Most adults with good overall health and adequate bone density are candidates. We\'ll evaluate your specific situation during your consultation.',
        },
        {
          question: 'How long do dental implants last?',
          answer: 'With proper care, dental implants can last a lifetime. The crown may need replacement after 10-15 years due to normal wear.',
        },
        {
          question: 'Is the implant procedure painful?',
          answer: 'The procedure is performed under local anesthesia, so you\'ll feel no pain during placement. Most patients report less discomfort than expected during recovery.',
        },
      ]}
      relatedServices={[
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'Dentures', path: '/services/dentures' },
        { title: 'Root Canal', path: '/services/root-canal' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
      ]}
    />
  );
}
