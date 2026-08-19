import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Users } from 'lucide-react';
import heroImage from '@/assets/service-family-dentistry-new.jpg';

export default function FamilyDentistry() {
  return (
    <ServicePageLayout
      title="Family Dentistry"
      heroHeadline="Family Dentistry That Feels Like One Trusted Dental Home"
      canonicalPath="/services/family-dentistry"
      metaDescription="Family dentistry at Kaya Dental in Leominster, MA. A welcoming dental home for every age, serving families in Lunenburg, Lancaster, Sterling, and Fitchburg."
      heroSubtitle="Care for the Whole Family"
      heroDescription="From your toddler's first checkup to your parents' senior care, Kaya Dental in Leominster, MA gives every generation of your family one comfortable, judgment-free dental home. Families throughout Lunenburg, Lancaster, Sterling, and the Fitchburg area trust us to make each visit easier than the last."
      introDescription="From your child's first visit to your parents' senior care, our Leominster office treats every generation of your family under one roof. We coordinate appointments, explain things in plain language, and keep visits calm so your whole family feels comfortable coming back."
      heroImage={heroImage}
      icon={Users}
      detailedDescription={[
        {
          title: 'One Dental Home, Every Generation Welcome',
          content: `Kaya means body in Sanskrit — a reminder that we care for the whole person, at every age, not just a set of teeth. Our office has served the Leominster community since 1961, and today, under Dr. Kunal Dani and associate dentist Dr. Amy Majzoub, we're still that same familiar, trusted place, now with the technology to match.

We know bringing a nervous child — or a nervous adult — to the dentist can feel like a gamble at a new practice. Our team takes the time to explain everything simply, move at your child's pace, and treat every visit as a chance to build trust, not just check a box.`,
        },
        {
          title: 'Age-Appropriate Care That Grows With You',
          content: `From teaching a toddler how to brush to helping a parent navigate more complex dental needs later in life, we tailor every visit to the person in the chair. Our conservative, tooth-preserving philosophy means we recommend only what truly benefits each family member — never more.

If your family recently lost its longtime dentist to a practice change or retirement, we understand how unsettling that can feel. We're happy to review your records, pick up where things left off, and become the steady dental home your family can count on for years to come.`,
        },
      ]}
      benefits={[
        'One welcoming office for every age in your family',
        'Appointments coordinated together when possible',
        'Gentle, patient approach with nervous or first-time kids',
        'Judgment-free care if it\'s been a while for anyone',
        'Conservative treatment recommendations you can trust',
        'Digital iTero scanning instead of messy impressions',
        'Membership plan for family members without insurance',
        'A steady dental home for decades, not just one visit',
      ]}
      whatToExpect={[
        {
          title: 'A Welcoming First Impression',
          description: 'Our team greets every family member warmly, taking extra time with nervous kids or adults who haven\'t visited a dentist in a while.',
        },
        {
          title: 'Exams Paced to Each Person',
          description: 'We adjust our approach for each age and comfort level, making the visit reassuring for children and efficient for busy parents.',
        },
        {
          title: 'Clear, Kind Explanations',
          description: 'We explain what we see in simple terms for kids and straightforward terms for adults — no jargon, no pressure, just honest guidance.',
        },
        {
          title: 'Scheduling That Fits Your Life',
          description: 'When possible, we book multiple family members back-to-back or on the same day, so dental care doesn\'t take over your calendar.',
        },
      ]}
      additionalInfo={[
        {
          title: 'For Your Little Ones',
          items: [
            'First dental visit by age 1',
            'Gentle, unhurried exams and cleanings',
            'Dental sealants',
            'Fluoride treatments',
            'Habit and thumb-sucking guidance',
            'Orthodontic evaluations',
          ],
        },
        {
          title: 'For Teens',
          items: [
            'Cavity prevention coaching',
            'Sports mouthguards',
            'Orthodontic treatment options',
            'Wisdom teeth monitoring',
            'Confidence-building oral hygiene tips',
            'Cosmetic consultations',
          ],
        },
        {
          title: 'For Adults & Seniors',
          items: [
            'Preventive care and cleanings',
            'Conservative restorative treatments',
            'Cosmetic dentistry options',
            'Gum disease treatment',
            'Dentures and implants',
            'Oral cancer screenings',
          ],
        },
      ]}
      faqs={[
        {
          question: 'When should my child first visit the dentist?',
          answer: 'We recommend a first visit by age 1 or within six months of the first tooth coming in. Early, low-pressure visits help your child build comfort with the dentist and let us catch anything worth watching early. Call us to schedule a gentle first appointment.',
        },
        {
          question: 'Can our whole family come in on the same day?',
          answer: 'In most cases, yes. We know coordinating a family\'s schedule is hard enough without separate dental trips, so we do our best to book everyone back-to-back or on one visit. Contact our Leominster office and we\'ll find a schedule that works.',
        },
        {
          question: 'My child is terrified of the dentist — can you help?',
          answer: 'Absolutely — this is one of the most common concerns families bring to us. We move at your child\'s pace, explain everything in kid-friendly terms, and never force a visit that isn\'t going well. Call us ahead of time and we\'ll plan the appointment around your child\'s comfort.',
        },
        {
          question: 'What if we don\'t have dental insurance for the whole family?',
          answer: 'We offer an in-house membership plan built for families without insurance, along with Cherry and CareCredit financing to spread out costs. Give us a call and we can talk through what makes sense for your household.',
        },
        {
          question: 'Our previous dentist retired or the practice changed hands — can we switch?',
          answer: 'Yes, and we make it simple. We\'ll request your family\'s records and continue your care with the same conservative, unhurried approach we\'ve offered Leominster families since 1961. Reach out to get everyone set up as new patients.',
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
