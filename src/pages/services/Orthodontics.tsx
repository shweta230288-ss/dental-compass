import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { GitCompare } from 'lucide-react';

export default function Orthodontics() {
  return (
    <ServicePageLayout
      title="Orthodontics"
      metaDescription="Orthodontic treatment at Kaya Dental in Leominster, MA. Traditional braces and clear aligners for straight, beautiful smiles."
      heroSubtitle="Alignment Solutions"
      heroDescription="A properly aligned smile isn't just beautiful—it's healthier. Straight teeth are easier to clean, reduce wear, and improve your bite. At Kaya Dental, we offer modern orthodontic solutions including traditional braces and clear aligners to achieve your perfect smile."
      icon={GitCompare}
      benefits={[
        'Multiple treatment options for all ages',
        'Traditional braces for complex cases',
        'Clear aligners for discreet treatment',
        'Improved bite function and comfort',
        'Easier oral hygiene with straight teeth',
        'Reduced risk of tooth wear and TMJ issues',
      ]}
      whatToExpect={[
        {
          title: 'Orthodontic Evaluation',
          description: 'We assess your bite, tooth alignment, and facial structure to determine the best approach.',
        },
        {
          title: 'Treatment Options',
          description: 'We present your options—braces, clear aligners, or other solutions—with estimated timelines.',
        },
        {
          title: 'Active Treatment',
          description: 'Regular adjustments gradually move your teeth into their ideal positions.',
        },
        {
          title: 'Retention Phase',
          description: 'After treatment, retainers keep your teeth in their new, perfect positions.',
        },
      ]}
      faqs={[
        {
          question: 'Am I too old for orthodontic treatment?',
          answer: 'Never! We treat patients of all ages. Adult orthodontics is increasingly popular, with discreet options like clear aligners.',
        },
        {
          question: 'How long does orthodontic treatment take?',
          answer: 'Treatment typically takes 12-24 months, depending on the complexity of your case. Some minor corrections take just a few months.',
        },
        {
          question: 'Which is better: braces or Invisalign?',
          answer: 'Both are excellent options. Clear aligners offer discretion and convenience, while traditional braces may be better for complex cases.',
        },
      ]}
      relatedServices={[
        { title: 'Invisalign', path: '/services/invisalign' },
        { title: 'Family Dentistry', path: '/services/family-dentistry' },
        { title: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
      ]}
    />
  );
}
