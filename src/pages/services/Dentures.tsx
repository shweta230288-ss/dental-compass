import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { LayoutGrid } from 'lucide-react';
import heroImage from '@/assets/service-dentures.jpg';

export default function Dentures() {
  return (
    <ServicePageLayout
      title="Dentures"
      metaDescription="Custom dentures at Kaya Dental in Leominster, MA. Full and partial dentures that look natural and fit comfortably. Restore your smile today."
      heroSubtitle="Replace Missing Teeth"
      heroDescription="Missing multiple teeth or all of your teeth can significantly impact your quality of life. At Kaya Dental, we create custom dentures that restore your smile, improve your ability to eat and speak, and boost your confidence. Modern dentures are more comfortable and natural-looking than ever before."
      heroImage={heroImage}
      icon={LayoutGrid}
      detailedDescription={[
        {
          title: 'Types of Dentures We Offer',
          content: `We offer several types of dentures to meet different needs. Full dentures replace all teeth in the upper or lower arch and rest on the gums. Partial dentures replace some missing teeth and attach to your remaining natural teeth.

For patients seeking maximum stability, implant-supported dentures anchor to dental implants placed in the jawbone. These "snap-on" dentures won't slip or shift, allowing you to eat, speak, and smile with complete confidence.`,
        },
        {
          title: 'Modern Denture Technology',
          content: `Today's dentures are crafted from advanced materials that look remarkably natural. The teeth are designed to match your facial features, skin tone, and remaining natural teeth for a seamless appearance.

We take careful measurements and impressions to ensure your dentures fit comfortably. Our digital technology helps us create dentures with precise fit and natural aesthetics that restore both function and appearance.`,
        },
      ]}
      benefits={[
        'Restore ability to eat and chew',
        'Improve speech clarity',
        'Support facial structure',
        'Boost confidence and self-esteem',
        'Custom-made for natural appearance',
        'Multiple options available',
        'Implant-supported options for stability',
        'Affordable tooth replacement',
      ]}
      whatToExpect={[
        {
          title: 'Consultation and Planning',
          description: 'We examine your mouth, discuss your goals, and determine the best type of denture for your needs.',
        },
        {
          title: 'Impressions and Measurements',
          description: 'We take detailed impressions and measurements to ensure your dentures fit perfectly and look natural.',
        },
        {
          title: 'Try-In Appointment',
          description: 'You\'ll try a wax model of your dentures so we can make adjustments before the final version is made.',
        },
        {
          title: 'Final Fitting',
          description: 'Your completed dentures are carefully fitted and adjusted for optimal comfort and function.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Full Dentures',
          items: [
            'Replace all teeth in an arch',
            'Rest on the gums',
            'Custom-fitted for comfort',
            'Natural-looking teeth and gums',
            'Removable for cleaning',
            'Periodic adjustments may be needed',
          ],
        },
        {
          title: 'Partial Dentures',
          items: [
            'Replace some missing teeth',
            'Attach to remaining teeth',
            'Prevent remaining teeth from shifting',
            'Removable for cleaning',
            'Can be upgraded to full dentures',
            'Metal or acrylic frameworks',
          ],
        },
        {
          title: 'Implant-Supported Dentures',
          items: [
            'Maximum stability and comfort',
            'No slipping or sliding',
            'Better chewing ability',
            'Preserve jawbone',
            'Can be fixed or removable',
            'Long-lasting solution',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How long does it take to get dentures?',
          answer: 'The denture process typically takes several weeks, including consultations, impressions, try-ins, and adjustments. If extractions are needed, additional healing time is required.',
        },
        {
          question: 'Will dentures affect how I eat and speak?',
          answer: 'There\'s an adjustment period when you first get dentures. With practice, most patients adapt within a few weeks and can eat and speak normally. We provide guidance to help you adjust.',
        },
        {
          question: 'How do I care for my dentures?',
          answer: 'Remove and rinse dentures after eating, brush them daily with a denture brush and cleanser, and soak them overnight. Also brush your gums, tongue, and palate daily, and visit us for regular checkups.',
        },
        {
          question: 'How long do dentures last?',
          answer: 'With proper care, dentures typically last 5-10 years. However, your mouth changes over time, so dentures may need relining or replacement to maintain a good fit.',
        },
        {
          question: 'What are the alternatives to dentures?',
          answer: 'Alternatives include dental implants (for individual teeth) or implant-supported dentures (for multiple teeth). During your consultation, we\'ll discuss all options to help you make the best choice.',
        },
      ]}
      relatedServices={[
        { title: 'Dental Implants', path: '/services/dental-implants' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
        { title: 'Family Dentistry', path: '/services/family-dentistry' },
      ]}
    />
  );
}
