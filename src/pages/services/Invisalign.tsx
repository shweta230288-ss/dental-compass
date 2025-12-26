import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { AlignCenter } from 'lucide-react';
import heroImage from '@/assets/service-invisalign.jpg';

export default function Invisalign() {
  return (
    <ServicePageLayout
      title="Invisalign"
      metaDescription="Invisalign clear aligners at Kaya Dental in Leominster, MA. Straighten your teeth discreetly with comfortable, removable aligners. Schedule your consultation today."
      heroSubtitle="Clear Aligners"
      heroDescription="Achieve the straight, beautiful smile you've always wanted without traditional metal braces. Invisalign uses custom-made, virtually invisible aligners that gradually shift your teeth into perfect alignment while fitting seamlessly into your lifestyle."
      heroImage={heroImage}
      icon={AlignCenter}
      detailedDescription={[
        {
          title: 'What is Invisalign?',
          content: `Invisalign is a modern orthodontic treatment that uses a series of clear, removable aligners to gradually straighten your teeth. Unlike traditional braces, Invisalign aligners are virtually invisible and can be removed for eating, drinking, and oral hygiene.

Each set of aligners is custom-made using advanced 3D imaging technology to ensure a precise fit and optimal results. You'll wear each set for about 1-2 weeks before moving on to the next set in your treatment plan.`,
        },
        {
          title: 'Benefits of Choosing Invisalign',
          content: `Invisalign offers numerous advantages over traditional braces. The clear aligners are nearly invisible, so most people won't even notice you're wearing them. They're also removable, which means you can continue to eat all your favorite foods and maintain your normal oral hygiene routine.

Many patients find Invisalign more comfortable than traditional braces because there are no metal brackets or wires to irritate your cheeks and gums. Treatment time is often shorter than traditional braces, with many patients achieving their desired results in 6-18 months.`,
        },
      ]}
      benefits={[
        'Virtually invisible clear aligners',
        'Removable for eating, drinking, and brushing',
        'Comfortable with no metal wires or brackets',
        'Fewer office visits than traditional braces',
        'Predictable results with 3D treatment planning',
        'iTero digital scanning—no messy impressions',
        'Treats a wide range of orthodontic issues',
        'Custom-made for your unique smile',
      ]}
      whatToExpect={[
        {
          title: 'Digital Consultation',
          description: 'We scan your teeth with our iTero scanner and show you a preview of your final results before treatment begins.',
        },
        {
          title: 'Custom Aligner Creation',
          description: 'Your personalized aligners are crafted using advanced 3D printing technology for a precise, comfortable fit.',
        },
        {
          title: 'Regular Progress Checks',
          description: 'You\'ll switch to new aligners every 1-2 weeks, with periodic check-ins at our office to monitor your progress.',
        },
        {
          title: 'Reveal Your New Smile',
          description: 'Once treatment is complete, you\'ll receive retainers to maintain your beautiful new smile for years to come.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Invisalign Can Treat',
          items: [
            'Crowded teeth',
            'Gaps between teeth',
            'Overbite and underbite',
            'Crossbite',
            'Open bite',
            'Generally misaligned teeth',
          ],
        },
        {
          title: 'Invisalign vs. Traditional Braces',
          items: [
            'Nearly invisible appearance',
            'Removable for meals and brushing',
            'No dietary restrictions',
            'More comfortable fit',
            'Fewer emergency visits',
            'Easier to maintain oral hygiene',
          ],
        },
        {
          title: 'Care Instructions',
          items: [
            'Wear aligners 20-22 hours daily',
            'Remove for eating and drinking',
            'Clean aligners with lukewarm water',
            'Brush teeth before reinserting',
            'Store aligners in their case',
            'Keep track of your progress',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How long does Invisalign treatment take?',
          answer: 'Treatment typically takes 6-18 months, depending on the complexity of your case. Many patients with minor alignment issues see results in as few as 6 months, while more complex cases may take longer. During your consultation, we\'ll provide a personalized treatment timeline.',
        },
        {
          question: 'Is Invisalign as effective as traditional braces?',
          answer: 'Yes! Invisalign can treat most orthodontic issues that traditional braces can, often with greater comfort and convenience. Advanced technology allows us to plan precise tooth movements for predictable, effective results.',
        },
        {
          question: 'How many hours a day do I wear the aligners?',
          answer: 'For best results, wear your aligners 20-22 hours per day, removing them only for eating, drinking anything other than water, and oral hygiene. Consistent wear is key to staying on track with your treatment timeline.',
        },
        {
          question: 'Does Invisalign treatment hurt?',
          answer: 'Most patients experience mild pressure or discomfort when switching to a new set of aligners, which is a sign your teeth are moving. This typically subsides within a few days and is generally less uncomfortable than traditional braces.',
        },
        {
          question: 'Can I eat normally with Invisalign?',
          answer: 'Absolutely! Since aligners are removable, you can eat all your favorite foods without restrictions. Simply remove your aligners before eating, brush your teeth, and reinsert them after your meal.',
        },
      ]}
      relatedServices={[
        { title: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry' },
        { title: 'Orthodontics', path: '/services/orthodontics' },
        { title: 'Teeth Whitening', path: '/services/teeth-whitening' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
      ]}
    />
  );
}
