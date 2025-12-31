import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Users } from 'lucide-react';
import heroImage from '@/assets/service-family-dentistry-new.jpg';

export default function FamilyDentistry() {
  return (
    <ServicePageLayout
      title="Family Dentistry"
      metaDescription="Family dentistry at Kaya Dental in Leominster, MA. Comprehensive dental care for patients of all ages. Schedule appointments for the whole family."
      heroSubtitle="Care for the Whole Family"
      heroDescription="At Kaya Dental, we welcome patients of all ages and provide dental care that grows with your family. From a child's first dental visit to senior care, our team creates positive experiences that build healthy habits for a lifetime of beautiful smiles."
      heroImage={heroImage}
      icon={Users}
      detailedDescription={[
        {
          title: 'One Dental Home for Everyone',
          content: `Having one dental office for the entire family makes it easier to schedule appointments, coordinate care, and build relationships with your dental team. We understand the unique needs of patients at every age and stage of life.

Our office is designed to be welcoming for children while providing sophisticated care for adults. We take pride in creating positive experiences that help children develop good oral health habits and overcome any dental anxiety.`,
        },
        {
          title: 'Age-Appropriate Care',
          content: `Children, teens, adults, and seniors all have different dental needs. Our team is trained to provide age-appropriate care, from teaching toddlers how to brush to managing the complex dental needs that can come with aging.

We believe in preventive care and education for all ages. By catching problems early and helping patients understand how to care for their teeth at home, we help families maintain healthy smiles for generations.`,
        },
      ]}
      benefits={[
        'Convenient care for all ages in one location',
        'Appointments scheduled together when possible',
        'Child-friendly, welcoming environment',
        'Experienced with pediatric dental needs',
        'Teen orthodontic evaluations',
        'Adult preventive and restorative care',
        'Senior dental services',
        'Building healthy habits early',
      ]}
      whatToExpect={[
        {
          title: 'Welcoming Environment',
          description: 'Our office is designed to put patients of all ages at ease, with a friendly team and comfortable treatment areas.',
        },
        {
          title: 'Age-Appropriate Exams',
          description: 'We tailor our approach to each patient\'s age and needs, making visits positive experiences for children and efficient for adults.',
        },
        {
          title: 'Education for Every Age',
          description: 'We teach children proper brushing and flossing techniques while keeping adults informed about maintaining their oral health.',
        },
        {
          title: 'Coordinated Family Care',
          description: 'We can often schedule multiple family members on the same day, making it easier to manage everyone\'s dental care.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Children\'s Dental Care',
          items: [
            'First dental visit by age 1',
            'Gentle exams and cleanings',
            'Dental sealants',
            'Fluoride treatments',
            'Habit counseling',
            'Orthodontic evaluations',
          ],
        },
        {
          title: 'Teen Dental Care',
          items: [
            'Cavity prevention',
            'Sports mouthguards',
            'Orthodontic treatment',
            'Wisdom teeth monitoring',
            'Oral hygiene coaching',
            'Cosmetic consultations',
          ],
        },
        {
          title: 'Adult & Senior Care',
          items: [
            'Preventive care and cleanings',
            'Restorative treatments',
            'Cosmetic dentistry',
            'Gum disease treatment',
            'Dentures and implants',
            'Oral cancer screenings',
          ],
        },
      ]}
      faqs={[
        {
          question: 'When should my child first visit the dentist?',
          answer: 'The American Academy of Pediatric Dentistry recommends a child\'s first dental visit by age 1 or within 6 months of the first tooth appearing. Early visits help establish a dental home and catch any issues early.',
        },
        {
          question: 'Can I schedule my whole family on the same day?',
          answer: 'Yes! We understand busy family schedules and do our best to accommodate multiple family members in back-to-back or simultaneous appointments whenever possible.',
        },
        {
          question: 'How do you handle children who are nervous about the dentist?',
          answer: 'Our team is experienced with anxious patients of all ages. We use gentle techniques, explain procedures in kid-friendly terms, and take our time to ensure every child feels comfortable and safe.',
        },
        {
          question: 'Do you offer orthodontic evaluations for children?',
          answer: 'Yes, we monitor your child\'s dental development and recommend orthodontic evaluations at the appropriate age, typically around age 7. We also offer Invisalign for teens and adults.',
        },
        {
          question: 'What services do you offer for seniors?',
          answer: 'We provide comprehensive care for seniors including dentures, implants, gum disease treatment, dry mouth management, and coordination with medical providers for patients with complex health needs.',
        },
      ]}
      relatedServices={[
        { title: 'General Dentistry', path: '/services/general-dentistry' },
        { title: 'Exam & Cleaning', path: '/services/exam-cleaning' },
        { title: 'Orthodontics', path: '/services/orthodontics' },
        { title: 'Emergency Dentistry', path: '/services/emergency-dentistry' },
      ]}
    />
  );
}
