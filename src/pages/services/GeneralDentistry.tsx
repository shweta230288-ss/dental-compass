import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Stethoscope } from 'lucide-react';
import heroImage from '@/assets/service-general-dentistry-new.jpg';

export default function GeneralDentistry() {
  return (
    <ServicePageLayout
      title="General Dentistry"
      heroHeadline="Complete, Gentle Dental Care for Your Whole Smile"
      canonicalPath="/services/general-dentistry"
      metaDescription="General dentistry at Kaya Dental in Leominster, MA. Judgment-free, comprehensive care for patients from Lunenburg, Lancaster, Sterling, and the Fitchburg area."
      heroSubtitle="Comprehensive Dental Care"
      heroDescription="Whether it's been six months or several years since your last visit, you'll find a welcoming, judgment-free team at Kaya Dental in Leominster, MA. We serve patients throughout Lunenburg, Lancaster, Sterling, and the Fitchburg area with honest, unhurried care — no lectures, no pressure, just a clear plan for your smile."
      introDescription="Whether you are overdue for a checkup or looking for a new dental home in Leominster, you will find honest, unhurried care here. Dr. Kunal Dani and Dr. Amy Majzoub take time to understand your history, answer your questions, and build a prevention plan that fits your life."
      heroImage={heroImage}
      icon={Stethoscope}
      detailedDescription={[
        {
          title: 'Care Built Around You, Not a Checklist',
          content: `Kaya takes its name from the Sanskrit word for body — wellness, wholeness, balance. That idea shapes how we practice: your teeth don't exist in isolation, and neither does your comfort. Under Dr. Kunal Dani and associate dentist Dr. Amy Majzoub, our team takes time to actually listen before recommending anything.

We follow a conservative, tooth-preserving philosophy, which means we'll never push treatment you don't need. If you're coming back after a long gap, embarrassed about the state of your teeth, or simply nervous about what we might find, you can relax — we've helped many patients in exactly that spot, and we start with a calm conversation, not a lecture.`,
        },
        {
          title: 'Modern Technology, Gentler Visits',
          content: `We invest in technology that makes your visits faster, more comfortable, and more accurate. Digital X-rays use significantly less radiation, and our in-office CBCT 3D scanner captures a complete picture of your teeth, jaw, and nerves in under a minute — helpful when planning implants, root canals, or extractions without sending you elsewhere.

Our iTero digital scanner replaces messy, gag-inducing impressions with a quick digital scan, and our AI-assisted imaging helps us catch small issues before they become big, expensive problems. It all adds up to fewer surprises and a more comfortable chair-side experience.`,
        },
      ]}
      benefits={[
        'Welcomed back with no judgment, no matter how long it\'s been',
        'Honest treatment plans — never upsold, never rushed',
        'Comfortable visits with modern, low-radiation imaging',
        'One consistent dental home for the whole family',
        'Conservative, tooth-preserving approach to every recommendation',
        'Clear pricing conversations before any treatment begins',
        'Membership plan available if you don\'t have insurance',
        'Care that grows with you, from your first visit onward',
      ]}
      whatToExpect={[
        {
          title: 'A Warm Welcome',
          description: 'We start by listening — to your history, your concerns, and anything that\'s made past dental visits stressful — so we can put you at ease from the start.',
        },
        {
          title: 'A Gentle, Thorough Exam',
          description: 'Dr. Dani or Dr. Majzoub carefully checks your teeth and gums, explaining what they see in plain language as they go, with no surprises sprung on you later.',
        },
        {
          title: 'Comfortable Digital Imaging',
          description: 'If imaging is needed, our digital X-rays and CBCT scanner give us a clear picture quickly and comfortably, with minimal radiation.',
        },
        {
          title: 'A Plan You Understand and Agree To',
          description: 'We walk through what we found and what it costs before moving forward, so you\'re always in control of your care and your budget.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Our General Services',
          items: [
            'Comprehensive exams and cleanings',
            'Digital X-rays and CBCT 3D imaging',
            'Tooth-colored, tooth-preserving fillings',
            'Dental sealants',
            'Fluoride treatments',
            'Oral cancer screenings',
          ],
        },
        {
          title: 'A Practice You Can Rely On',
          items: [
            'Serving Leominster since 1961',
            'Led by Dr. Kunal Dani and Dr. Amy Majzoub',
            'Judgment-free approach for returning patients',
            'Gum disease and bite screening',
            'Custom mouthguards',
            'Flexible scheduling for busy lives',
          ],
        },
        {
          title: 'Paying for Care, Without Stress',
          items: [
            'Most major insurance accepted',
            'In-house membership plan if you\'re uninsured',
            'Cherry and CareCredit financing available',
            'No surprise-bill pressure tactics',
            'Clear cost discussion before treatment',
            'Family appointment scheduling',
          ],
        },
      ]}
      faqs={[
        {
          question: 'It\'s been years since my last dental visit — will I be judged?',
          answer: 'Not at all. We see patients returning after long gaps all the time, and our job is to help you move forward, not dwell on the past. Dr. Dani and our team will simply take a look, explain what we find, and build a plan at your pace. Call us whenever you\'re ready — there\'s no shame in starting today.',
        },
        {
          question: 'What if I don\'t have dental insurance?',
          answer: 'You still have real options. We offer an in-house membership plan designed for patients without insurance, plus financing through Cherry and CareCredit to help spread out costs. Give our Leominster office a call and we\'ll walk you through what fits your budget.',
        },
        {
          question: 'I get anxious at the dentist — can you help?',
          answer: 'Yes, and you\'re far from alone. We create a calm, unhurried environment, explain each step before we do it, and never push you faster than you\'re comfortable with. Call us and let us know about your anxiety ahead of time so we can plan your visit around it.',
        },
        {
          question: 'Will I be pushed into treatments I don\'t need?',
          answer: 'No. We practice conservative, tooth-preserving dentistry, which means we only recommend what genuinely benefits your health, and we explain the reasoning and cost clearly before you decide. If you ever want a second opinion, we welcome that conversation too.',
        },
        {
          question: 'My old dentist retired or the practice changed hands — can I switch to Kaya Dental?',
          answer: 'Absolutely, and it\'s a very common reason patients find us. We\'ll request your records, review your history together, and pick up your care right where it left off. Contact us to get set up as a new patient.',
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
