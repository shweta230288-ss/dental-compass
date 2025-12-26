import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Smile } from 'lucide-react';
import heroImage from '@/assets/service-cosmetic-dentistry.jpg';

export default function CosmeticDentistry() {
  return (
    <ServicePageLayout
      title="Cosmetic Dentistry"
      metaDescription="Transform your smile with cosmetic dentistry at Kaya Dental in Leominster, MA. Veneers, whitening, bonding, and smile makeovers. Schedule your consultation."
      heroSubtitle="Smile Transformation"
      heroDescription="Your smile is one of the first things people notice about you. At Kaya Dental, we offer a full range of cosmetic dentistry services designed to enhance your smile's appearance and boost your confidence. From subtle improvements to complete smile makeovers, we help you achieve the smile you've always wanted."
      heroImage={heroImage}
      icon={Smile}
      detailedDescription={[
        {
          title: 'The Art and Science of Beautiful Smiles',
          content: `Cosmetic dentistry combines artistic vision with advanced dental techniques to create stunning, natural-looking results. Dr. Dani takes a personalized approach to cosmetic treatment, considering your facial features, skin tone, and personal preferences to design a smile that looks naturally beautiful.

Whether you want to fix a single imperfection or transform your entire smile, we have the expertise and technology to help you achieve your goals. We use digital imaging to show you potential results before treatment begins, so you can see your new smile before committing.`,
        },
        {
          title: 'Our Cosmetic Services',
          content: `We offer a comprehensive range of cosmetic treatments including professional teeth whitening, dental veneers, bonding, crowns, and Invisalign clear aligners. Many patients benefit from a combination of treatments to achieve their ideal smile.

During your cosmetic consultation, we'll discuss your goals, examine your teeth and gums, and recommend the best treatments to achieve the results you want. We believe in conservative treatment whenever possible, preserving as much natural tooth structure as we can.`,
        },
      ]}
      benefits={[
        'Personalized smile design',
        'Natural-looking results',
        'Boost in confidence and self-esteem',
        'Multiple treatment options available',
        'Digital preview of potential results',
        'Conservative, tooth-preserving approach',
        'Experienced cosmetic dentist',
        'Long-lasting, beautiful results',
      ]}
      whatToExpect={[
        {
          title: 'Cosmetic Consultation',
          description: 'We discuss your smile goals, take photos, and examine your teeth to understand what changes you\'d like to make.',
        },
        {
          title: 'Smile Design',
          description: 'We create a personalized treatment plan and may use digital imaging to preview your potential results.',
        },
        {
          title: 'Treatment Phase',
          description: 'Depending on your treatment plan, we perform the necessary procedures to transform your smile.',
        },
        {
          title: 'Reveal Your New Smile',
          description: 'Enjoy your beautiful new smile! We provide care instructions to maintain your results long-term.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Popular Treatments',
          items: [
            'Professional teeth whitening',
            'Porcelain veneers',
            'Dental bonding',
            'Invisalign clear aligners',
            'Smile makeovers',
            'Gum contouring',
          ],
        },
        {
          title: 'Issues We Address',
          items: [
            'Stained or discolored teeth',
            'Chipped or cracked teeth',
            'Gaps between teeth',
            'Misshapen teeth',
            'Uneven gum line',
            'Crooked or crowded teeth',
          ],
        },
        {
          title: 'Why Choose Us',
          items: [
            'Artistic eye for smile design',
            'Advanced technology',
            'Natural-looking materials',
            'Personalized approach',
            'Comfortable experience',
            'Lasting results',
          ],
        },
      ]}
      faqs={[
        {
          question: 'What can cosmetic dentistry fix?',
          answer: 'Cosmetic dentistry can address many concerns including stained or yellowed teeth, chips and cracks, gaps between teeth, misshapen teeth, gummy smiles, and crooked or crowded teeth. Almost any aesthetic concern can be improved with the right treatment.',
        },
        {
          question: 'How long do cosmetic treatments last?',
          answer: 'Treatment longevity varies: whitening results last 1-3 years with touch-ups, veneers can last 10-15+ years, and bonding typically lasts 5-10 years. With proper care, many cosmetic treatments provide long-lasting results.',
        },
        {
          question: 'Are cosmetic procedures painful?',
          answer: 'Most cosmetic procedures involve little to no discomfort. We use local anesthesia when needed and prioritize your comfort throughout treatment. Many patients are surprised at how easy the procedures are.',
        },
        {
          question: 'How much does cosmetic dentistry cost?',
          answer: 'Costs vary widely depending on the treatments needed. During your consultation, we\'ll provide a detailed treatment plan with costs. We offer financing options to make your dream smile affordable.',
        },
        {
          question: 'What are dental veneers?',
          answer: 'Veneers are thin shells of porcelain or composite resin that are bonded to the front of teeth to improve their appearance. They can change the color, shape, size, and length of teeth for a dramatic smile transformation.',
        },
      ]}
      relatedServices={[
        { title: 'Teeth Whitening', path: '/services/teeth-whitening' },
        { title: 'Invisalign', path: '/services/invisalign' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'Dental Implants', path: '/services/dental-implants' },
      ]}
    />
  );
}
