import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { AlertTriangle } from 'lucide-react';
import heroImage from '@/assets/service-emergency-dentistry.jpg';

export default function EmergencyDentistry() {
  return (
    <ServicePageLayout
      title="Emergency Dentistry"
      metaDescription="Same-day emergency dental care at Kaya Dental in Leominster, MA. Toothache, broken tooth, knocked-out tooth—we're here when you need us."
      heroSubtitle="Urgent Dental Care"
      heroDescription="Dental emergencies don't wait for convenient times. At Kaya Dental, we reserve time in our schedule for same-day emergency appointments because we understand that dental pain and injuries need immediate attention. When you're in pain, call us—we're here to help."
      heroImage={heroImage}
      icon={AlertTriangle}
      detailedDescription={[
        {
          title: 'What Is a Dental Emergency?',
          content: `A dental emergency is any situation involving your teeth, gums, or mouth that requires immediate attention. This includes severe pain that disrupts your daily activities, trauma to teeth or mouth, uncontrolled bleeding, swelling that affects breathing or swallowing, or infection with fever.

If you're unsure whether your situation is an emergency, call us. Our team will help you determine the best course of action and get you the care you need as quickly as possible.`,
        },
        {
          title: 'Prompt Care for Better Outcomes',
          content: `Quick action during a dental emergency can mean the difference between saving and losing a tooth. For knocked-out teeth, reimplantation is most successful within 30-60 minutes. For infections, prompt treatment prevents spread and serious complications.

We're equipped to handle a wide range of dental emergencies, from severe toothaches and broken teeth to dental abscesses and trauma injuries. Our goal is to relieve your pain and address the underlying problem quickly.`,
        },
      ]}
      benefits={[
        'Same-day emergency appointments',
        'Quick pain relief',
        'Advanced diagnostic technology',
        'Experienced emergency care',
        'Comprehensive treatment options',
        'After-hours guidance available',
        'Compassionate, calm care',
        'Follow-up care coordination',
      ]}
      whatToExpect={[
        {
          title: 'Call Us Immediately',
          description: 'When you call with an emergency, we\'ll prioritize your case and get you in as soon as possible.',
        },
        {
          title: 'Rapid Assessment',
          description: 'We quickly evaluate your condition, take any necessary X-rays, and determine the best treatment approach.',
        },
        {
          title: 'Pain Relief and Treatment',
          description: 'Our first priority is relieving your pain. We then address the underlying cause of the emergency.',
        },
        {
          title: 'Follow-Up Care',
          description: 'After emergency treatment, we schedule follow-up appointments to ensure complete healing and long-term solutions.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Common Dental Emergencies',
          items: [
            'Severe toothache',
            'Knocked-out tooth',
            'Cracked or broken tooth',
            'Lost filling or crown',
            'Dental abscess or infection',
            'Injury to gums or mouth',
          ],
        },
        {
          title: 'While You Wait',
          items: [
            'Rinse with warm salt water',
            'Apply cold compress for swelling',
            'Take over-the-counter pain reliever',
            'Save any tooth fragments',
            'Keep knocked-out tooth moist',
            'Avoid aspirin on gums',
          ],
        },
        {
          title: 'When to Go to the ER',
          items: [
            'Uncontrolled bleeding',
            'Difficulty breathing or swallowing',
            'Severe facial swelling',
            'Jaw fracture',
            'High fever with swelling',
            'Facial trauma with other injuries',
          ],
        },
      ]}
      faqs={[
        {
          question: 'What should I do if a tooth is knocked out?',
          answer: 'Handle the tooth by the crown (not the root), gently rinse if dirty, and try to place it back in the socket. If that\'s not possible, keep it moist in milk or saliva and get to us within 30-60 minutes for the best chance of saving it.',
        },
        {
          question: 'How do I manage severe tooth pain at home?',
          answer: 'Rinse with warm salt water, take over-the-counter pain medication as directed, apply a cold compress to reduce swelling, and avoid hot, cold, or sweet foods. Then call us for an emergency appointment.',
        },
        {
          question: 'What if I have a dental emergency after hours?',
          answer: 'Call our office and follow the instructions for after-hours emergencies. We provide guidance for immediate care and can often arrange an early morning appointment.',
        },
        {
          question: 'Is a lost filling or crown an emergency?',
          answer: 'While not always as urgent as severe pain or trauma, a lost filling or crown should be addressed quickly to prevent further damage or sensitivity. Call us to schedule a prompt appointment.',
        },
        {
          question: 'How can I prevent dental emergencies?',
          answer: 'Wear a mouthguard during sports, avoid chewing ice or hard objects, don\'t use teeth as tools, maintain good oral hygiene, and keep regular dental appointments to catch problems early.',
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
