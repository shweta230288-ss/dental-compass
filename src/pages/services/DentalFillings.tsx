import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { CircleDot } from 'lucide-react';

export default function DentalFillings() {
  return (
    <ServicePageLayout
      title="Dental Fillings"
      metaDescription="Tooth-colored dental fillings at Kaya Dental in Leominster, MA. Natural-looking composite fillings to restore cavities and damaged teeth."
      heroSubtitle="Restorative Care"
      heroDescription="When cavities develop, prompt treatment with dental fillings prevents further damage and restores your tooth's function. At Kaya Dental, we use tooth-colored composite fillings that blend seamlessly with your natural smile."
      icon={CircleDot}
      benefits={[
        'Natural-looking tooth-colored composite materials',
        'Mercury-free, biocompatible filling materials',
        'Preserves more natural tooth structure',
        'Bonds directly to tooth for added strength',
        'Same-day treatment for most cavities',
        'Long-lasting, durable restorations',
      ]}
      whatToExpect={[
        {
          title: 'Numbing & Comfort',
          description: 'We ensure you\'re completely comfortable with local anesthesia before beginning treatment.',
        },
        {
          title: 'Decay Removal',
          description: 'Using precise instruments, we gently remove the decayed portion of your tooth.',
        },
        {
          title: 'Filling Placement',
          description: 'We apply the composite material in layers, hardening each layer with a special curing light.',
        },
        {
          title: 'Shaping & Polishing',
          description: 'The filling is shaped to match your bite and polished for a natural appearance.',
        },
      ]}
      faqs={[
        {
          question: 'Do tooth-colored fillings last as long as metal fillings?',
          answer: 'Yes! Modern composite fillings are very durable and can last 10-15 years or more with proper care.',
        },
        {
          question: 'Will the filling match my tooth color?',
          answer: 'Absolutely. We carefully match the composite material to your natural tooth shade for a seamless, invisible restoration.',
        },
        {
          question: 'Is the procedure painful?',
          answer: 'No, we use local anesthesia to ensure you\'re completely comfortable throughout the procedure. Most patients feel no pain at all.',
        },
      ]}
      relatedServices={[
        { title: 'General Dentistry', path: '/services/general-dentistry' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'Root Canal', path: '/services/root-canal' },
        { title: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry' },
      ]}
    />
  );
}
