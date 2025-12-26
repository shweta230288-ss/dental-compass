import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { ClipboardCheck } from 'lucide-react';
import heroImage from '@/assets/service-exam-cleaning.jpg';

export default function ExamCleaning() {
  return (
    <ServicePageLayout
      title="Exam & Cleaning"
      metaDescription="Professional dental exams and cleanings at Kaya Dental in Leominster, MA. Preventive care to maintain a healthy smile. Schedule your appointment today."
      heroSubtitle="Preventive Care"
      heroDescription="Regular dental exams and professional cleanings are the foundation of a healthy smile. At Kaya Dental, we use advanced technology to detect problems early, remove harmful plaque and tartar, and help you maintain optimal oral health between visits."
      heroImage={heroImage}
      icon={ClipboardCheck}
      detailedDescription={[
        {
          title: 'Why Regular Checkups Matter',
          content: `Many dental problems develop silently without obvious symptoms until they become serious. Regular checkups allow us to catch issues like cavities, gum disease, and oral cancer in their earliest stages when they're easiest to treat.

Professional cleanings remove plaque and tartar that can't be eliminated by brushing and flossing alone. This helps prevent cavities, gum disease, and bad breath while keeping your teeth looking their best.`,
        },
        {
          title: 'Advanced Technology for Better Detection',
          content: `We use cutting-edge technology to provide the most thorough examinations possible. Our Overjet AI technology helps detect cavities earlier than traditional methods, while digital X-rays provide clear images with minimal radiation exposure.

Our iTero scanner can create detailed 3D images of your teeth, helping us identify problems and track changes over time. This technology allows us to provide you with the most accurate diagnoses and effective treatment plans.`,
        },
      ]}
      benefits={[
        'Early detection of dental problems',
        'Professional removal of plaque and tartar',
        'Fresher breath and cleaner teeth',
        'Prevention of cavities and gum disease',
        'Oral cancer screening included',
        'Personalized home care recommendations',
        'Digital X-rays with minimal radiation',
        'AI-assisted cavity detection',
      ]}
      whatToExpect={[
        {
          title: 'Medical History Review',
          description: 'We update your medical and dental history to ensure safe, appropriate care.',
        },
        {
          title: 'Comprehensive Examination',
          description: 'Dr. Dani thoroughly examines your teeth, gums, tongue, and oral tissues for any signs of problems.',
        },
        {
          title: 'Professional Cleaning',
          description: 'Our hygienist removes plaque and tartar buildup, then polishes your teeth for a smooth, clean finish.',
        },
        {
          title: 'Review and Recommendations',
          description: 'We discuss our findings, answer your questions, and provide personalized tips for home care.',
        },
      ]}
      additionalInfo={[
        {
          title: 'During Your Exam',
          items: [
            'Visual examination of all teeth',
            'Gum health assessment',
            'Oral cancer screening',
            'Bite and jaw evaluation',
            'Existing restoration check',
            'Digital X-rays if needed',
          ],
        },
        {
          title: 'During Your Cleaning',
          items: [
            'Tartar (calculus) removal',
            'Plaque removal',
            'Teeth polishing',
            'Flossing demonstration',
            'Fluoride treatment (optional)',
            'Home care instruction',
          ],
        },
        {
          title: 'Between Visits',
          items: [
            'Brush twice daily for 2 minutes',
            'Floss daily',
            'Use fluoride toothpaste',
            'Limit sugary foods and drinks',
            'Replace toothbrush every 3 months',
            'Call us with any concerns',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How often should I get a dental checkup?',
          answer: 'Most patients should visit every 6 months for routine exams and cleanings. However, some patients may benefit from more frequent visits depending on their oral health needs. We\'ll recommend the best schedule for you.',
        },
        {
          question: 'What if I have dental anxiety?',
          answer: 'We understand dental anxiety is common and take steps to ensure your comfort. Our gentle approach, calming environment, and open communication help anxious patients feel at ease. Let us know your concerns so we can help.',
        },
        {
          question: 'Are dental X-rays safe?',
          answer: 'Yes, our digital X-rays use significantly less radiation than traditional X-rays. We follow strict guidelines and only take X-rays when necessary for diagnosis or treatment planning.',
        },
        {
          question: 'Why do I need cleanings if I brush and floss?',
          answer: 'Even with excellent home care, plaque can harden into tartar that can only be removed with professional instruments. Cleanings also reach areas that are difficult to clean at home and help prevent gum disease.',
        },
        {
          question: 'What is involved in an oral cancer screening?',
          answer: 'During your exam, we visually inspect your mouth, tongue, and throat for any unusual spots, lumps, or discoloration. We also feel for any abnormalities in the neck and jaw area. Early detection is key for successful treatment.',
        },
      ]}
      relatedServices={[
        { title: 'General Dentistry', path: '/services/general-dentistry' },
        { title: 'Dental Fillings', path: '/services/dental-fillings' },
        { title: 'Family Dentistry', path: '/services/family-dentistry' },
        { title: 'Teeth Whitening', path: '/services/teeth-whitening' },
      ]}
    />
  );
}
