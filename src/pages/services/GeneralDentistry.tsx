import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Stethoscope } from 'lucide-react';
import heroImage from '@/assets/service-general-dentistry-new.jpg';

export default function GeneralDentistry() {
  return (
    <ServicePageLayout
      title="General Dentistry"
      metaDescription="Comprehensive general dentistry services at Kaya Dental in Leominster, MA. From routine checkups to restorative care, we keep your smile healthy."
      heroSubtitle="Comprehensive Dental Care"
      heroDescription="General dentistry forms the foundation of a healthy smile. At Kaya Dental, we provide comprehensive care for patients of all ages, from routine cleanings and exams to restorative treatments that keep your teeth and gums healthy for life."
      heroImage={heroImage}
      icon={Stethoscope}
      detailedDescription={[
        {
          title: 'Your Partner in Oral Health',
          content: `General dentistry encompasses the prevention, diagnosis, and treatment of a wide range of oral health conditions. At Kaya Dental, we believe in a proactive approach to dental care—catching problems early when they're easier and less expensive to treat.

Our general dentistry services include everything from routine checkups and cleanings to fillings, extractions, and other restorative treatments. We take the time to educate our patients about proper oral hygiene and work with you to develop a personalized care plan.`,
        },
        {
          title: 'Advanced Technology for Better Care',
          content: `We use the latest dental technology to provide more accurate diagnoses and more comfortable treatments. Our digital X-rays expose you to significantly less radiation than traditional X-rays while providing clearer images.

Our Overjet AI technology helps us detect cavities and other issues earlier than ever before, while our iTero scanner eliminates the need for messy traditional impressions. All of this technology works together to give you the best possible dental experience.`,
        },
      ]}
      benefits={[
        'Comprehensive care for all ages',
        'Preventive focus to catch problems early',
        'Advanced diagnostic technology',
        'Comfortable, modern treatment options',
        'Personalized treatment plans',
        'Education and guidance for home care',
        'Coordination with specialists when needed',
        'Flexible scheduling options',
      ]}
      whatToExpect={[
        {
          title: 'Welcome and Medical History',
          description: 'We review your medical and dental history to understand your unique needs and any conditions that may affect treatment.',
        },
        {
          title: 'Comprehensive Examination',
          description: 'Our dentist thoroughly examines your teeth, gums, and mouth, looking for signs of decay, gum disease, and other issues.',
        },
        {
          title: 'Diagnostic Imaging',
          description: 'Digital X-rays and other imaging help us see what\'s happening beneath the surface and detect problems early.',
        },
        {
          title: 'Treatment Plan Discussion',
          description: 'We discuss our findings with you and develop a personalized plan to address any issues and maintain your oral health.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Our General Services',
          items: [
            'Comprehensive exams and cleanings',
            'Digital X-rays and imaging',
            'Tooth-colored fillings',
            'Dental sealants',
            'Fluoride treatments',
            'Oral cancer screenings',
          ],
        },
        {
          title: 'Preventive Care Focus',
          items: [
            'Twice-yearly checkups recommended',
            'Professional cleanings',
            'Early cavity detection',
            'Gum disease screening',
            'Bite and jaw evaluation',
            'Custom mouthguards',
          ],
        },
        {
          title: 'For All Ages',
          items: [
            'Pediatric dental care',
            'Teen and young adult care',
            'Adult preventive care',
            'Senior dental services',
            'Special needs accommodations',
            'Family appointment scheduling',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How often should I visit the dentist?',
          answer: 'We recommend visiting every six months for a routine checkup and cleaning. However, some patients may need more frequent visits depending on their oral health status. We\'ll recommend the best schedule for you.',
        },
        {
          question: 'What happens during a routine dental exam?',
          answer: 'A routine exam includes a thorough examination of your teeth, gums, and mouth; digital X-rays if needed; professional cleaning; and a discussion of any findings or recommendations for treatment.',
        },
        {
          question: 'Do you treat dental anxiety?',
          answer: 'Yes! We understand that many people experience dental anxiety. We offer a calm, supportive environment and can discuss options to help you feel more comfortable during your visits.',
        },
        {
          question: 'What should I do for a dental emergency?',
          answer: 'If you experience a dental emergency such as severe pain, a knocked-out tooth, or significant bleeding, contact us immediately. We offer same-day emergency appointments whenever possible.',
        },
        {
          question: 'Do you accept dental insurance?',
          answer: 'Yes, we accept most major dental insurance plans. Our team will help you understand your coverage and maximize your benefits. We also offer payment plans for those without insurance.',
        },
      ]}
      relatedServices={[
        { title: 'Exam & Cleaning', path: '/services/exam-cleaning' },
        { title: 'Dental Fillings', path: '/services/dental-fillings' },
        { title: 'Family Dentistry', path: '/services/family-dentistry' },
        { title: 'Emergency Dentistry', path: '/services/emergency-dentistry' },
      ]}
    />
  );
}
