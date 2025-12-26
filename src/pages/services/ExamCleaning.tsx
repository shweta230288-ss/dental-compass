import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Sparkles } from 'lucide-react';

export default function ExamCleaning() {
  return (
    <ServicePageLayout
      title="Exam and Cleaning"
      metaDescription="Professional dental exams and cleanings at Kaya Dental in Leominster, MA. Maintain optimal oral health with our thorough preventive care services."
      heroSubtitle="Preventive Care"
      heroDescription="Regular dental exams and professional cleanings are the cornerstone of good oral health. At Kaya Dental, we combine thorough examinations with gentle, effective cleanings to keep your smile at its best."
      icon={Sparkles}
      benefits={[
        'Thorough removal of plaque and tartar buildup',
        'Comprehensive oral cancer screening',
        'Gum health assessment and periodontal evaluation',
        'Polishing for a smooth, fresh feeling',
        'Fluoride treatment for added protection',
        'Personalized oral hygiene instructions',
      ]}
      whatToExpect={[
        {
          title: 'Health History Review',
          description: 'We review your medical history and discuss any changes or concerns since your last visit.',
        },
        {
          title: 'Professional Cleaning',
          description: 'Our skilled hygienists carefully remove plaque and tartar, then polish your teeth to a shine.',
        },
        {
          title: 'Comprehensive Exam',
          description: 'Dr. Dani examines your teeth, gums, and oral tissues, checking for any signs of problems.',
        },
        {
          title: 'Treatment Planning',
          description: 'We discuss any findings and schedule follow-up care if needed to keep your smile healthy.',
        },
      ]}
      faqs={[
        {
          question: 'Why do I need professional cleanings?',
          answer: 'Even with excellent brushing and flossing, plaque can build up in hard-to-reach areas. Professional cleanings remove this buildup to prevent cavities and gum disease.',
        },
        {
          question: 'Will the cleaning hurt?',
          answer: 'Most patients find cleanings comfortable. If you have sensitive teeth or gums, let us know and we can take steps to ensure your comfort.',
        },
        {
          question: 'How long does an exam and cleaning take?',
          answer: 'A typical appointment takes about 45-60 minutes, allowing time for a thorough cleaning and comprehensive examination.',
        },
      ]}
      relatedServices={[
        { title: 'General Dentistry', path: '/services/general-dentistry' },
        { title: 'Family Dentistry', path: '/services/family-dentistry' },
        { title: 'Teeth Whitening', path: '/services/teeth-whitening' },
        { title: 'Dental Fillings', path: '/services/dental-fillings' },
      ]}
    />
  );
}
