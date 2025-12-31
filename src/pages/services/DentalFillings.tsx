import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Circle } from 'lucide-react';
import heroImage from '@/assets/service-dental-fillings-new.jpg';

export default function DentalFillings() {
  return (
    <ServicePageLayout
      title="Dental Fillings"
      metaDescription="Tooth-colored dental fillings at Kaya Dental in Leominster, MA. Natural-looking cavity treatment that preserves your smile. Schedule your appointment."
      heroSubtitle="Cavity Treatment"
      heroDescription="Cavities are one of the most common dental problems, but they're also one of the easiest to treat when caught early. At Kaya Dental, we use tooth-colored composite fillings that blend seamlessly with your natural teeth while providing durable, long-lasting protection."
      heroImage={heroImage}
      icon={Circle}
      detailedDescription={[
        {
          title: 'What Are Dental Fillings?',
          content: `Dental fillings are restorations used to repair teeth damaged by decay (cavities). When bacteria in your mouth produce acids that erode tooth enamel, a cavity forms. Left untreated, cavities can grow larger and cause pain, infection, or even tooth loss.

Fillings restore the tooth's shape, function, and integrity while preventing further decay. At Kaya Dental, we primarily use composite (tooth-colored) fillings that match your natural tooth color for an invisible repair.`,
        },
        {
          title: 'Tooth-Colored Composite Fillings',
          content: `Unlike older amalgam (silver) fillings, composite fillings are made of a tooth-colored resin that blends naturally with your teeth. They bond directly to the tooth structure, which often allows us to preserve more of your natural tooth.

Composite fillings are mercury-free, durable, and provide an excellent seal against further decay. They're suitable for both front and back teeth and can also be used to repair chipped or worn teeth.`,
        },
      ]}
      benefits={[
        'Matches your natural tooth color',
        'Preserves more tooth structure',
        'Mercury-free and biocompatible',
        'Bonds strongly to the tooth',
        'Durable and long-lasting',
        'Can repair chips and cracks too',
        'Single-visit treatment',
        'Minimal post-treatment sensitivity',
      ]}
      whatToExpect={[
        {
          title: 'Anesthesia',
          description: 'We gently numb the area around the affected tooth so you won\'t feel any discomfort during the procedure.',
        },
        {
          title: 'Decay Removal',
          description: 'We carefully remove the decayed portion of the tooth, preserving as much healthy tooth structure as possible.',
        },
        {
          title: 'Filling Placement',
          description: 'The composite material is applied in layers, with each layer hardened using a special curing light.',
        },
        {
          title: 'Shaping and Polishing',
          description: 'We shape and polish the filling to match your natural bite and ensure a comfortable, natural feel.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Signs You May Need a Filling',
          items: [
            'Toothache or sensitivity',
            'Visible holes in teeth',
            'Dark spots on teeth',
            'Pain when biting or chewing',
            'Food getting stuck in teeth',
            'Rough or sharp tooth edges',
          ],
        },
        {
          title: 'Composite vs. Amalgam',
          items: [
            'Composite: Tooth-colored',
            'Composite: Mercury-free',
            'Composite: Bonds to tooth',
            'Composite: More conservative',
            'Amalgam: Silver appearance',
            'We recommend composite fillings',
          ],
        },
        {
          title: 'Caring for Your Filling',
          items: [
            'Wait until numbness wears off to eat',
            'Brush and floss normally',
            'Avoid very hard foods',
            'Report any sensitivity',
            'Keep regular dental appointments',
            'Fillings can last many years',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Do fillings hurt?',
          answer: 'The procedure is performed with local anesthesia, so you shouldn\'t feel pain during treatment. You may experience some sensitivity for a few days afterward, which typically resolves on its own.',
        },
        {
          question: 'How long do fillings last?',
          answer: 'Composite fillings typically last 5-10 years or longer with proper care. Factors affecting longevity include the size and location of the filling, your bite, and your oral hygiene habits.',
        },
        {
          question: 'Can I replace my old silver fillings?',
          answer: 'Yes! Many patients choose to replace their old amalgam fillings with tooth-colored composites for aesthetic reasons. We can evaluate your existing fillings and discuss replacement options.',
        },
        {
          question: 'How do I prevent cavities?',
          answer: 'Prevent cavities by brushing twice daily with fluoride toothpaste, flossing daily, limiting sugary foods and drinks, and visiting us regularly for checkups and cleanings.',
        },
        {
          question: 'What if my cavity is too large for a filling?',
          answer: 'Large cavities may require alternative treatments such as dental crowns or onlays. During your exam, we\'ll recommend the best option based on the extent of damage and remaining tooth structure.',
        },
      ]}
      relatedServices={[
        { title: 'Exam & Cleaning', path: '/services/exam-cleaning' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'Root Canal', path: '/services/root-canal' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
      ]}
    />
  );
}
