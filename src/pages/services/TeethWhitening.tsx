import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Sparkles } from 'lucide-react';
import heroImage from '@/assets/service-teeth-whitening.jpg';

export default function TeethWhitening() {
  return (
    <ServicePageLayout
      title="Teeth Whitening"
      metaDescription="Professional teeth whitening at Kaya Dental in Leominster, MA. Brighten your smile safely and effectively with in-office and take-home whitening options."
      heroSubtitle="Brighter, Whiter Smile"
      heroDescription="A bright, white smile can boost your confidence and make a lasting impression. At Kaya Dental, we offer professional teeth whitening treatments that deliver dramatic results safely and effectively—far superior to over-the-counter products."
      heroImage={heroImage}
      icon={Sparkles}
      detailedDescription={[
        {
          title: 'Why Choose Professional Whitening?',
          content: `Over-the-counter whitening products often deliver disappointing results and can even damage your teeth if used incorrectly. Professional teeth whitening at Kaya Dental uses higher-concentration whitening agents applied by trained dental professionals for safe, effective, and lasting results.

Our whitening treatments are customized to your unique needs, taking into account the current shade of your teeth, your sensitivity level, and your desired results. We can often achieve results that are 6-10 shades whiter in just one visit.`,
        },
        {
          title: 'Our Whitening Options',
          content: `We offer both in-office and take-home whitening options to fit your lifestyle and preferences. Our in-office treatment delivers dramatic results in about an hour—perfect for special occasions or when you want immediate results.

For those who prefer to whiten at their own pace, our custom take-home kits include professional-grade whitening gel and custom-fitted trays for comfortable, effective treatment. Many patients achieve their desired results within 1-2 weeks of consistent use.`,
        },
      ]}
      benefits={[
        'Dramatically whiter teeth in one visit',
        'Safe, professional-grade whitening agents',
        'Customized treatment for your needs',
        'Longer-lasting results than OTC products',
        'Reduced sensitivity with professional care',
        'Both in-office and take-home options',
        'Even, consistent whitening results',
        'Boost your confidence and appearance',
      ]}
      whatToExpect={[
        {
          title: 'Initial Consultation',
          description: 'We evaluate your teeth, discuss your goals, and recommend the best whitening option for your situation.',
        },
        {
          title: 'Pre-Whitening Cleaning',
          description: 'A professional cleaning removes surface stains and plaque for more effective whitening results.',
        },
        {
          title: 'Whitening Treatment',
          description: 'For in-office treatment, we apply professional whitening gel and activate it with a special light for about an hour.',
        },
        {
          title: 'Maintain Your Results',
          description: 'We provide tips for maintaining your new bright smile and may recommend touch-up treatments.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Causes of Tooth Discoloration',
          items: [
            'Coffee, tea, and red wine',
            'Tobacco use',
            'Aging and natural wear',
            'Certain medications',
            'Foods with strong colors',
            'Poor oral hygiene habits',
          ],
        },
        {
          title: 'In-Office vs. Take-Home',
          items: [
            'In-office: Immediate results',
            'Take-home: Gradual whitening',
            'In-office: 1-hour treatment',
            'Take-home: 1-2 week process',
            'Both: Professional-grade products',
            'Both: Customized for you',
          ],
        },
        {
          title: 'Maintaining Your Results',
          items: [
            'Avoid staining foods and drinks',
            'Use a straw for dark beverages',
            'Brush and floss regularly',
            'Consider touch-up treatments',
            'Visit us for regular cleanings',
            'Use whitening toothpaste sparingly',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How long do whitening results last?',
          answer: 'Results typically last 1-3 years depending on your diet, oral hygiene habits, and lifestyle factors. Avoiding staining foods and beverages and using touch-up treatments can extend your results significantly.',
        },
        {
          question: 'Will teeth whitening make my teeth sensitive?',
          answer: 'Some patients experience temporary sensitivity during or after whitening treatment. We use professional techniques to minimize sensitivity, and any discomfort typically resolves within a few days.',
        },
        {
          question: 'Is teeth whitening safe?',
          answer: 'Yes, professional teeth whitening is safe when performed by trained dental professionals. We carefully evaluate your oral health before treatment and use proven, safe whitening agents.',
        },
        {
          question: 'Can whitening remove all stains?',
          answer: 'Professional whitening is highly effective for most stains caused by food, beverages, and aging. However, some intrinsic stains (from medications or injury) may require alternative treatments like veneers.',
        },
        {
          question: 'How white will my teeth get?',
          answer: 'Results vary based on the original shade of your teeth and the type of staining present. Most patients achieve results 6-10 shades whiter. We\'ll discuss realistic expectations during your consultation.',
        },
      ]}
      relatedServices={[
        { title: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry' },
        { title: 'Exam & Cleaning', path: '/services/exam-cleaning' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'Invisalign', path: '/services/invisalign' },
      ]}
    />
  );
}
