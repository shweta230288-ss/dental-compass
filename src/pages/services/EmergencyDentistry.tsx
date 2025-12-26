import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { AlertCircle } from 'lucide-react';

export default function EmergencyDentistry() {
  return (
    <ServicePageLayout
      title="Emergency Dentistry"
      metaDescription="Emergency dental care at Kaya Dental in Leominster, MA. Same-day appointments for toothaches, broken teeth, and dental emergencies."
      heroSubtitle="Urgent Care"
      heroDescription="Dental emergencies can happen anytime and require prompt attention. At Kaya Dental, we reserve time each day for emergency appointments, ensuring you receive the urgent care you need when you need it most. Don't suffer in pain—call us immediately."
      icon={AlertCircle}
      benefits={[
        'Same-day emergency appointments available',
        'Prompt relief from severe tooth pain',
        'Treatment for knocked-out or broken teeth',
        'Care for dental infections and abscesses',
        'Repair of lost fillings and crowns',
        'Compassionate, calming care during stressful situations',
      ]}
      whatToExpect={[
        {
          title: 'Immediate Assessment',
          description: 'We quickly evaluate your emergency to determine the most appropriate treatment.',
        },
        {
          title: 'Pain Relief',
          description: 'Our first priority is relieving your pain and making you comfortable.',
        },
        {
          title: 'Emergency Treatment',
          description: 'We address the immediate problem, whether it\'s an extraction, repair, or infection treatment.',
        },
        {
          title: 'Follow-Up Planning',
          description: 'We schedule any necessary follow-up care to complete your treatment.',
        },
      ]}
      faqs={[
        {
          question: 'What counts as a dental emergency?',
          answer: 'Severe toothache, knocked-out teeth, broken teeth, lost fillings/crowns, abscesses, and significant bleeding are all dental emergencies.',
        },
        {
          question: 'What should I do if a tooth gets knocked out?',
          answer: 'Keep the tooth moist (in milk or saliva), handle it by the crown only, and get to our office within 30 minutes for the best chance of saving it.',
        },
        {
          question: 'Do you offer after-hours emergency care?',
          answer: 'We reserve emergency appointments during office hours. For after-hours emergencies, call our main number for guidance.',
        },
      ]}
      relatedServices={[
        { title: 'Root Canal', path: '/services/root-canal' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'Dental Fillings', path: '/services/dental-fillings' },
        { title: 'Wisdom Tooth Removal', path: '/services/wisdom-tooth-removal' },
      ]}
    />
  );
}
