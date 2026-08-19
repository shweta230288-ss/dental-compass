import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { AlertTriangle } from 'lucide-react';
import heroImage from '@/assets/service-emergency-dentistry-new.jpg';

export default function EmergencyDentistry() {
  return (
    <ServicePageLayout
      title="Emergency Dentistry"
      heroHeadline="In Pain Right Now? We'll Get You Out of It Today"
      canonicalPath="/services/emergency-dentistry"
      metaDescription="Same-day emergency dental care at Kaya Dental in Leominster, MA, just off Route 2. Toothache, broken tooth, or knocked-out tooth—call now and we'll take care of you."
      heroSubtitle="Urgent Dental Care"
      heroDescription="You don't have to keep hurting until your regular appointment. Kaya Dental in Leominster, MA holds space in our schedule every day for patients in pain, so if you're dealing with a toothache, break, or injury, call us now — we'll see you as quickly as we can and walk you through what to do until then."
      heroImage={heroImage}
      icon={AlertTriangle}
      detailedDescription={[
        {
          title: 'Not Sure If It\'s an Emergency? Call Anyway.',
          content: `You don't need a medical degree to know something is wrong — that's our job. If you're in pain that won't let up, a tooth got knocked loose or out, you're swollen, bleeding, or just feel like something isn't right, pick up the phone. We'll ask a few quick questions, help you figure out what's going on, and get you in as soon as we possibly can.

There's no judgment here, whether it's been years since your last cleaning or this came out of nowhere. Our Leominster team, led by Dr. Kunal Dani and Dr. Amy Majzoub, has treated every kind of dental emergency and we're ready for yours.`,
        },
        {
          title: 'Fast, Precise Care That Protects Your Tooth',
          content: `Time matters in a dental emergency, but so does getting the diagnosis right the first time. That's why we use CBCT 3D imaging to see exactly what's happening beneath the surface — the crack, the infection, the position of a loosened tooth — so we can treat it correctly instead of guessing.

Our approach is always to save your natural tooth whenever possible. Whether it's a severe toothache, a broken tooth, or a knocked-out tooth, our goal is simple: stop the pain fast and fix the problem for good.`,
        },
      ]}
      benefits={[
        'Same-day emergency appointments whenever possible',
        'Fast, effective pain relief',
        'CBCT 3D imaging for an accurate diagnosis',
        'Calm, judgment-free care from Dr. Dani and Dr. Majzoub',
        'Treatment options explained in plain language',
        'Guidance over the phone before your visit',
        'Gentle care for anxious and nervous patients',
        'Membership plan and financing options for uninsured patients',
      ]}
      whatToExpect={[
        {
          title: 'Call Us First',
          description: 'Tell us what happened. We\'ll give you immediate advice, calm you down, and get you on the schedule as soon as possible, often the same day.',
        },
        {
          title: 'A Gentle, Thorough Look',
          description: 'We\'ll examine the area and use digital or CBCT imaging when needed so we understand exactly what\'s going on before we touch a thing.',
        },
        {
          title: 'Relief Comes First',
          description: 'Our first job is getting you comfortable. Once your pain is under control, we\'ll explain your options and treat the underlying cause.',
        },
        {
          title: 'A Plan for What\'s Next',
          description: 'We\'ll make sure you know how to care for yourself at home and schedule any follow-up so this doesn\'t happen again.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Common Reasons Patients Call Us',
          items: [
            'A toothache that won\'t quit',
            'A knocked-out or loosened tooth',
            'A cracked or broken tooth',
            'A lost filling or crown',
            'Swelling or a suspected infection',
            'An injury to the gums, lips, or mouth',
          ],
        },
        {
          title: 'What to Do Until You Reach Us',
          items: [
            'Rinse gently with warm salt water',
            'Apply a cold compress to any swelling',
            'Take an over-the-counter pain reliever as directed',
            'Save any broken tooth pieces',
            'Keep a knocked-out tooth moist in milk',
            'Avoid placing aspirin directly on the gums',
          ],
        },
        {
          title: 'When to Head to the ER Instead',
          items: [
            'Bleeding that won\'t stop',
            'Trouble breathing or swallowing',
            'Significant facial swelling',
            'A suspected jaw fracture',
            'Fever along with swelling',
            'Facial trauma with other injuries',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Can you really see me today?',
          answer: 'We reserve time in our schedule specifically for patients in pain, so a same-day visit is possible in most cases. Call us as soon as you notice a problem and we\'ll tell you exactly when we can fit you in.',
        },
        {
          question: 'Will treatment be painful?',
          answer: 'Our priority in an emergency is comfort, not just repair — we use effective numbing and gentle techniques so you\'re not white-knuckling through the visit. Most patients tell us the relief starts as soon as we begin. If you\'re especially nervous, just tell our team and we\'ll talk through comfort options together.',
        },
        {
          question: 'What if I don\'t have insurance or can\'t afford it right now?',
          answer: 'We never want cost to stand between you and getting out of pain. We offer a membership plan for uninsured patients along with Cherry and CareCredit financing, so we can find a way to get you treated. Call us and we\'ll talk through the options before you come in.',
        },
        {
          question: 'Will I be able to go back to work or school afterward?',
          answer: 'Many emergency visits, like treating a toothache or repairing a chip, don\'t require any downtime at all. If your treatment does call for a bit of rest, we\'ll let you know exactly what to expect so you can plan accordingly. Just ask us during your visit and we\'ll give you a straight answer.',
        },
        {
          question: 'What if my emergency happens after hours?',
          answer: 'Call our office anyway — our voicemail includes guidance for urgent situations, and we\'ll help you decide whether it can wait until morning or needs immediate attention. We do our best to fit urgent patients in first thing the next day.',
        },
      ]}
      relatedServices={[
        { title: 'Root Canal', path: '/services/root-canal' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
        { title: 'Dental Fillings', path: '/services/dental-fillings' },
      ]}
    />
  );
}
