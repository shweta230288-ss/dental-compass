import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Ruler } from 'lucide-react';
import heroImage from '@/assets/service-orthodontics.jpg';

export default function Orthodontics() {
  return (
    <ServicePageLayout
      title="Orthodontics"
      metaDescription="Orthodontic treatment at Kaya Dental in Leominster, MA. Invisalign and braces for straighter teeth and a beautiful smile. Schedule your consultation."
      heroSubtitle="Straight Teeth, Beautiful Smile"
      heroDescription="Orthodontic treatment does more than create a beautiful smile—it improves your bite, makes teeth easier to clean, and can prevent long-term dental problems. At Kaya Dental, we offer modern orthodontic solutions including Invisalign clear aligners for teens and adults."
      heroImage={heroImage}
      icon={Ruler}
      detailedDescription={[
        {
          title: 'Benefits Beyond Aesthetics',
          content: `While a straighter smile certainly looks great, orthodontic treatment offers important health benefits too. Properly aligned teeth are easier to brush and floss, reducing your risk of cavities and gum disease. A correct bite prevents uneven wear, jaw pain, and TMJ problems.

Orthodontic issues left untreated can worsen over time, leading to more complex and costly treatment later. That's why we recommend orthodontic evaluations for children by age 7 and encourage adults to explore treatment options too—it's never too late!`,
        },
        {
          title: 'Our Orthodontic Options',
          content: `We're proud to offer Invisalign clear aligners as our primary orthodontic treatment option. Invisalign uses a series of custom-made, virtually invisible aligners to gradually straighten teeth without metal brackets and wires.

For complex cases that may benefit from traditional braces, we can coordinate care with trusted orthodontic specialists in our area. We'll help you understand all your options and choose the best solution for your needs.`,
        },
      ]}
      benefits={[
        'Straighter, more attractive smile',
        'Improved bite and jaw function',
        'Easier to clean teeth',
        'Reduced risk of dental problems',
        'Invisalign clear aligners available',
        'Treatment for teens and adults',
        'Digital treatment planning',
        'Coordination with specialists available',
      ]}
      whatToExpect={[
        {
          title: 'Orthodontic Consultation',
          description: 'We evaluate your teeth, bite, and jaw alignment using X-rays and digital scans to determine if orthodontic treatment is right for you.',
        },
        {
          title: 'Treatment Planning',
          description: 'For Invisalign, we create a detailed digital treatment plan showing how your teeth will move throughout treatment.',
        },
        {
          title: 'Active Treatment',
          description: 'You\'ll wear your aligners or braces as directed, with regular check-ins to monitor progress and make adjustments.',
        },
        {
          title: 'Retention Phase',
          description: 'After treatment, you\'ll wear retainers to maintain your new smile and prevent teeth from shifting back.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Conditions We Treat',
          items: [
            'Crowded teeth',
            'Gaps between teeth',
            'Overbite and underbite',
            'Crossbite',
            'Open bite',
            'Misaligned midline',
          ],
        },
        {
          title: 'Invisalign Benefits',
          items: [
            'Virtually invisible',
            'Removable for eating',
            'Comfortable to wear',
            'No food restrictions',
            'Easy to maintain hygiene',
            'Digital treatment preview',
          ],
        },
        {
          title: 'When to Consider Orthodontics',
          items: [
            'Difficulty cleaning crowded teeth',
            'Self-consciousness about smile',
            'Jaw pain or clicking',
            'Uneven tooth wear',
            'Biting cheek or tongue often',
            'Speech difficulties',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Am I too old for orthodontic treatment?',
          answer: 'No! Orthodontic treatment can be successful at any age. In fact, one in four orthodontic patients is an adult. As long as your teeth and gums are healthy, you can benefit from straighter teeth.',
        },
        {
          question: 'How long does orthodontic treatment take?',
          answer: 'Treatment time varies depending on the complexity of your case. Many Invisalign patients complete treatment in 6-18 months. We\'ll provide a personalized timeline during your consultation.',
        },
        {
          question: 'Does orthodontic treatment hurt?',
          answer: 'You may experience some pressure or mild discomfort when you start treatment or switch to new aligners, but this typically subsides within a few days. Most patients find Invisalign quite comfortable.',
        },
        {
          question: 'How often will I need appointments?',
          answer: 'Invisalign patients typically visit every 6-8 weeks to pick up new aligners and have their progress checked. This is often less frequent than traditional braces.',
        },
        {
          question: 'Will I need to wear a retainer after treatment?',
          answer: 'Yes, retainers are essential for maintaining your results. We\'ll provide retainers and instructions for how often to wear them after your treatment is complete.',
        },
      ]}
      relatedServices={[
        { title: 'Invisalign', path: '/services/invisalign' },
        { title: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry' },
        { title: 'Family Dentistry', path: '/services/family-dentistry' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
      ]}
    />
  );
}
