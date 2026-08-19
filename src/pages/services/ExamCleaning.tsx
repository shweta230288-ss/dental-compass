import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { ClipboardCheck } from 'lucide-react';
import heroImage from '@/assets/service-exam-cleaning-new.jpg';

export default function ExamCleaning() {
  return (
    <ServicePageLayout
      title="Exam & Cleaning"
      heroHeadline="Dental Exams and Cleanings That Keep Problems Away"
      canonicalPath="/services/exam-cleaning"
      metaDescription="Dental exams and cleanings at Kaya Dental in Leominster, MA. Comfortable, judgment-free preventive care for patients from Lunenburg, Lancaster, and Sterling."
      heroSubtitle="Preventive Care"
      heroDescription="A checkup and cleaning shouldn't feel intimidating. At Kaya Dental in Leominster, MA — just off Route 2 and convenient to Lunenburg, Lancaster, and Sterling — we use gentle techniques and advanced imaging to catch problems early and keep your visit as comfortable as possible."
      introDescription="Regular exams and cleanings are the simplest way to avoid bigger problems later. At our Leominster office, we use gentle techniques and modern imaging to catch issues early, remove buildup comfortably, and keep your smile on track without judgment."
      heroImage={heroImage}
      icon={ClipboardCheck}
      detailedDescription={[
        {
          title: 'Why Regular Checkups Matter — Even If It\'s Been a While',
          content: `Dental problems often develop quietly, with no pain until they've become bigger and more expensive to fix. If it's been years since your last cleaning, you're not alone, and you won't be judged when you walk through our door — we'll simply help you get back on track at a pace that feels manageable.

Professional cleanings remove the plaque and tartar that brushing and flossing can't reach on their own, helping prevent cavities, gum disease, and bad breath. Our conservative philosophy means we'll only recommend further treatment when it truly benefits you.`,
        },
        {
          title: 'Comfortable, Advanced Detection',
          content: `Dr. Kunal Dani and Dr. Amy Majzoub use AI-assisted imaging to spot cavities earlier than traditional methods, along with digital X-rays that use minimal radiation. When a closer look is needed, our in-office CBCT 3D scanner captures your teeth, bone, and sinuses in under a minute — no outside imaging referral or extra appointment required.

Our iTero digital scanner also lets us track changes in your smile over time without the mess of traditional impressions. Together, this technology means fewer surprises, more accurate answers, and a visit that respects your time and comfort.`,
        },
      ]}
      benefits={[
        'Early detection before small issues become costly',
        'A calm, judgment-free visit no matter how long it\'s been',
        'Gentle removal of plaque and tartar for a fresher smile',
        'Oral cancer screening included in every exam',
        'Minimal-radiation digital X-rays',
        'AI-assisted cavity detection for more accurate answers',
        'Clear pricing conversation before any additional treatment',
        'Membership plan available if you\'re without insurance',
      ]}
      whatToExpect={[
        {
          title: 'A Relaxed Welcome',
          description: 'We update your history and talk through any concerns or anxiety first, so nothing about your visit feels rushed or unfamiliar.',
        },
        {
          title: 'A Thorough, Gentle Exam',
          description: 'Dr. Dani or Dr. Majzoub carefully checks your teeth, gums, and oral tissues, narrating what they see so there are no surprises.',
        },
        {
          title: 'A Comfortable Cleaning',
          description: 'Our hygienist gently removes plaque and tartar buildup and polishes your teeth, checking in with you along the way.',
        },
        {
          title: 'Honest Next Steps',
          description: 'We review any findings, answer every question, and give you a clear, judgment-free plan for keeping your smile healthy.',
        },
      ]}
      additionalInfo={[
        {
          title: 'During Your Exam',
          items: [
            'Gentle visual examination of all teeth',
            'Gum health assessment',
            'Oral cancer screening',
            'Bite and jaw evaluation',
            'Existing restoration check',
            'Digital X-rays only when needed',
          ],
        },
        {
          title: 'During Your Cleaning',
          items: [
            'Tartar (calculus) removal',
            'Plaque removal',
            'Teeth polishing',
            'Flossing tips tailored to you',
            'Optional fluoride treatment',
            'Judgment-free home care guidance',
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
            'Call us anytime with a concern',
          ],
        },
      ]}
      faqs={[
        {
          question: 'It\'s been years since my last cleaning — will you make me feel bad about it?',
          answer: 'Never. We see this often, and our only goal is to help you move forward comfortably. We\'ll check things over, explain what we find in plain language, and build a plan that meets you where you are. Call us whenever you\'re ready to schedule.',
        },
        {
          question: 'What if I don\'t have dental insurance?',
          answer: 'We offer an in-house membership plan designed for patients without insurance, as well as Cherry and CareCredit financing to help spread out any costs. Reach out to our Leominster office and we\'ll help you find an option that fits.',
        },
        {
          question: 'I have real dental anxiety — how do you handle that?',
          answer: 'We take dental anxiety seriously and build our visits around your comfort, explaining each step before we do it and slowing down whenever you need. Let us know about your anxiety when you call, and we\'ll tailor your appointment around it.',
        },
        {
          question: 'Are dental X-rays safe, and will I be pressured into extra treatment?',
          answer: 'Our digital X-rays use significantly less radiation than older methods, and we only take them when they genuinely help your care. Following our conservative philosophy, we\'ll never recommend treatment you don\'t need — every option is explained clearly before you decide.',
        },
        {
          question: 'Can I bring my nervous child for their cleaning too?',
          answer: 'Of course. Our team is experienced with nervous first-timers of every age and takes extra time to explain things simply and keep the visit positive. Call us and we can schedule a gentle appointment for the whole family.',
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
