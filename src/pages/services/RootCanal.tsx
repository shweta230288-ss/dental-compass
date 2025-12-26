import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Heart } from 'lucide-react';

export default function RootCanal() {
  return (
    <ServicePageLayout
      title="Root Canal"
      metaDescription="Gentle root canal treatment at Kaya Dental in Leominster, MA. Pain-free endodontic therapy to save infected teeth and relieve pain."
      heroSubtitle="Tooth-Saving Treatment"
      heroDescription="Root canal treatment has an undeserved reputation for being painful, but modern techniques make it as comfortable as getting a filling. At Kaya Dental, we use advanced technology to perform gentle, effective root canals that save your natural tooth and eliminate infection."
      icon={Heart}
      benefits={[
        'Pain-free treatment with modern anesthesia',
        'Saves your natural tooth from extraction',
        'Eliminates infection and relieves pain',
        'Advanced rotary instruments for efficiency',
        'High success rate (over 95%)',
        'Usually completed in one visit',
      ]}
      whatToExpect={[
        {
          title: 'Diagnosis & Numbing',
          description: 'We confirm the need for treatment and ensure you\'re completely numb and comfortable.',
        },
        {
          title: 'Access & Cleaning',
          description: 'We access the tooth\'s interior and remove infected pulp tissue and bacteria.',
        },
        {
          title: 'Shaping & Filling',
          description: 'The canal is shaped, disinfected, and filled with biocompatible material.',
        },
        {
          title: 'Restoration',
          description: 'A crown is typically placed to protect and restore the treated tooth.',
        },
      ]}
      faqs={[
        {
          question: 'Does a root canal hurt?',
          answer: 'No! With modern anesthesia and techniques, root canals are virtually painless. Most patients say it feels similar to getting a filling.',
        },
        {
          question: 'Why do I need a crown after a root canal?',
          answer: 'A crown protects the treated tooth, which can become brittle over time. The crown restores strength and prevents fracture.',
        },
        {
          question: 'How long does recovery take?',
          answer: 'Most patients return to normal activities the same day. Any mild soreness typically resolves within a few days.',
        },
      ]}
      relatedServices={[
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'Emergency Dentistry', path: '/services/emergency-dentistry' },
        { title: 'Dental Fillings', path: '/services/dental-fillings' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
      ]}
    />
  );
}
