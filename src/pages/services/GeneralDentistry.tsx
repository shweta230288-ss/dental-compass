import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Stethoscope } from 'lucide-react';

export default function GeneralDentistry() {
  return (
    <ServicePageLayout
      title="General Dentistry"
      metaDescription="Comprehensive general dentistry services at Kaya Dental in Leominster, MA. Preventive care, exams, cleanings, and more for your optimal oral health."
      heroSubtitle="Preventive Care"
      heroDescription="At Kaya Dental, our general dentistry services form the foundation of your oral health. From routine exams to preventive treatments, we're dedicated to keeping your smile healthy and catching potential issues before they become serious problems."
      icon={Stethoscope}
      benefits={[
        'Comprehensive oral examinations using advanced diagnostic technology',
        'Professional teeth cleaning by experienced hygienists',
        'Early detection of cavities, gum disease, and oral cancer',
        'Personalized treatment plans tailored to your needs',
        'Patient education for better at-home oral care',
        'Digital X-rays with 90% less radiation exposure',
      ]}
      whatToExpect={[
        {
          title: 'Comprehensive Examination',
          description: 'We thoroughly examine your teeth, gums, and oral tissues using digital imaging and AI-powered diagnostics.',
        },
        {
          title: 'Professional Cleaning',
          description: 'Our hygienists remove plaque and tartar buildup, then polish your teeth for a fresh, clean feeling.',
        },
        {
          title: 'Personalized Treatment Plan',
          description: 'We discuss any findings and create a customized care plan to address your specific oral health needs.',
        },
        {
          title: 'Preventive Recommendations',
          description: 'You\'ll receive guidance on at-home care and schedule follow-up visits to maintain optimal oral health.',
        },
      ]}
      faqs={[
        {
          question: 'How often should I visit the dentist?',
          answer: 'We recommend visiting every six months for routine checkups and cleanings. However, some patients may benefit from more frequent visits based on their oral health needs.',
        },
        {
          question: 'What happens during a dental exam?',
          answer: 'During your exam, we check for cavities, gum disease, oral cancer, and other issues. We also review your dental X-rays and discuss any concerns you may have.',
        },
        {
          question: 'Are dental X-rays safe?',
          answer: 'Yes! Our digital X-rays use up to 90% less radiation than traditional X-rays, making them very safe while providing excellent diagnostic images.',
        },
      ]}
      relatedServices={[
        { title: 'Exam and Cleaning', path: '/services/exam-cleaning' },
        { title: 'Family Dentistry', path: '/services/family-dentistry' },
        { title: 'Dental Fillings', path: '/services/dental-fillings' },
        { title: 'Emergency Dentistry', path: '/services/emergency-dentistry' },
      ]}
    />
  );
}
