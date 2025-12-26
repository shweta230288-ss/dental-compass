import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Users } from 'lucide-react';

export default function FamilyDentistry() {
  return (
    <ServicePageLayout
      title="Family Dentistry"
      metaDescription="Family dentistry for all ages at Kaya Dental in Leominster, MA. Gentle, comprehensive dental care for children, parents, and grandparents."
      heroSubtitle="Care for All Ages"
      heroDescription="At Kaya Dental, we believe in providing exceptional dental care for your entire family. From your child's first dental visit to your parents' ongoing care, we create a comfortable, welcoming environment for patients of all ages."
      icon={Users}
      benefits={[
        'Convenient care for the whole family in one location',
        'Kid-friendly environment with gentle, patient staff',
        'Age-appropriate preventive care and education',
        'Flexible scheduling for busy families',
        'Comprehensive treatment options for all life stages',
        'Building positive dental experiences from childhood',
      ]}
      whatToExpect={[
        {
          title: 'Warm Welcome',
          description: 'Our friendly team greets each family member and helps everyone feel comfortable and at ease.',
        },
        {
          title: 'Age-Appropriate Care',
          description: 'We tailor our approach to each patient, whether it\'s a child\'s first visit or an adult checkup.',
        },
        {
          title: 'Education & Prevention',
          description: 'We teach children and adults proper brushing and flossing techniques for lifelong oral health.',
        },
        {
          title: 'Family Scheduling',
          description: 'We offer convenient appointment times so you can bring the whole family together.',
        },
      ]}
      faqs={[
        {
          question: 'At what age should my child first visit the dentist?',
          answer: 'We recommend bringing your child for their first dental visit by age 1 or within 6 months of their first tooth appearing.',
        },
        {
          question: 'Can the whole family be seen on the same day?',
          answer: 'Absolutely! We offer family block appointments so everyone can be seen during the same visit, saving you time.',
        },
        {
          question: 'How do you help children feel comfortable?',
          answer: 'Our team is specially trained to work with children. We use a gentle approach, explain procedures in kid-friendly terms, and create a positive, fun atmosphere.',
        },
      ]}
      relatedServices={[
        { title: 'General Dentistry', path: '/services/general-dentistry' },
        { title: 'Exam and Cleaning', path: '/services/exam-cleaning' },
        { title: 'Dental Fillings', path: '/services/dental-fillings' },
        { title: 'Orthodontics', path: '/services/orthodontics' },
      ]}
    />
  );
}
