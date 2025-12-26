import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Smile } from 'lucide-react';

export default function Dentures() {
  return (
    <ServicePageLayout
      title="Dentures"
      metaDescription="Custom dentures at Kaya Dental in Leominster, MA. Full and partial dentures for a natural-looking smile and restored function."
      heroSubtitle="Complete Smile Restoration"
      heroDescription="Missing teeth can affect your confidence, your ability to eat, and your facial structure. At Kaya Dental, we create custom dentures that look natural, fit comfortably, and restore your ability to smile, speak, and eat with confidence."
      icon={Smile}
      benefits={[
        'Custom-crafted for a natural appearance',
        'Comfortable fit with precise adjustments',
        'Restores chewing function and speech',
        'Supports facial structure to prevent sagging',
        'Full and partial options available',
        'Implant-supported dentures for added stability',
      ]}
      whatToExpect={[
        {
          title: 'Initial Consultation',
          description: 'We evaluate your oral health and discuss the best denture options for your needs.',
        },
        {
          title: 'Impressions & Measurements',
          description: 'Precise impressions ensure your dentures fit perfectly and look natural.',
        },
        {
          title: 'Try-In Appointment',
          description: 'You\'ll try on a wax model to verify fit, appearance, and bite before final fabrication.',
        },
        {
          title: 'Delivery & Adjustment',
          description: 'Your finished dentures are delivered and adjusted for optimal comfort and function.',
        },
      ]}
      faqs={[
        {
          question: 'How long does it take to get used to dentures?',
          answer: 'Most people adapt within a few weeks. Speaking and eating may feel different at first, but practice helps you adjust quickly.',
        },
        {
          question: 'Do I need to remove my dentures at night?',
          answer: 'Yes, removing dentures at night gives your gums a rest and helps maintain oral health. Clean them before storing.',
        },
        {
          question: 'How long do dentures last?',
          answer: 'With proper care, dentures typically last 5-10 years. They may need relining or adjustments as your mouth changes over time.',
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
