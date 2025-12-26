import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Minus } from 'lucide-react';
import heroImage from '@/assets/service-wisdom-tooth.jpg';

export default function WisdomToothRemoval() {
  return (
    <ServicePageLayout
      title="Wisdom Tooth Removal"
      metaDescription="Gentle wisdom tooth extraction at Kaya Dental in Leominster, MA. Expert care for impacted and problematic wisdom teeth. Schedule your consultation."
      heroSubtitle="Oral Surgery"
      heroDescription="Wisdom teeth, also known as third molars, often cause problems because there isn't enough room in the mouth for them to emerge properly. At Kaya Dental, we provide comfortable, expert wisdom tooth removal to prevent pain, infection, and damage to neighboring teeth."
      heroImage={heroImage}
      icon={Minus}
      detailedDescription={[
        {
          title: 'Why Wisdom Teeth Often Need Removal',
          content: `Wisdom teeth typically emerge in the late teens or early twenties, when the jaw is already fully developed and may not have space for these additional molars. This can cause wisdom teeth to become impacted (stuck beneath the gum), emerge at odd angles, or crowd other teeth.

Impacted or misaligned wisdom teeth can cause pain, infection, cysts, damage to adjacent teeth, and difficulty cleaning the area. Many dentists recommend removal before problems develop, especially when X-rays show potential issues.`,
        },
        {
          title: 'Our Approach to Wisdom Tooth Removal',
          content: `We use advanced imaging to carefully evaluate the position of your wisdom teeth and plan the safest, most comfortable extraction. Many wisdom teeth can be removed with simple extraction techniques, while impacted teeth may require surgical removal.

We prioritize your comfort throughout the procedure using effective anesthesia and gentle techniques. We'll provide detailed aftercare instructions and are always available to answer questions during your recovery.`,
        },
      ]}
      benefits={[
        'Prevent pain and infection',
        'Protect neighboring teeth from damage',
        'Avoid crowding and shifting of teeth',
        'Eliminate difficult-to-clean areas',
        'Prevent cysts and other complications',
        'Comfortable procedure with modern techniques',
        'Expert care from experienced team',
        'Thorough aftercare instructions',
      ]}
      whatToExpect={[
        {
          title: 'Evaluation and Imaging',
          description: 'We take X-rays to assess the position of your wisdom teeth and plan the best approach for removal.',
        },
        {
          title: 'Anesthesia and Comfort',
          description: 'We ensure you\'re completely numb and comfortable before beginning. Sedation options may be available.',
        },
        {
          title: 'Extraction',
          description: 'We carefully remove the wisdom teeth using appropriate techniques for your specific situation.',
        },
        {
          title: 'Recovery and Healing',
          description: 'We provide detailed aftercare instructions and schedule follow-up as needed to ensure proper healing.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Signs of Wisdom Tooth Problems',
          items: [
            'Pain at the back of the mouth',
            'Swelling or tenderness in gums',
            'Difficulty opening mouth',
            'Bad breath or unpleasant taste',
            'Headaches or jaw pain',
            'Swelling in jaw or face',
          ],
        },
        {
          title: 'Types of Impaction',
          items: [
            'Soft tissue impaction',
            'Partial bony impaction',
            'Complete bony impaction',
            'Horizontal impaction',
            'Vertical impaction',
            'We assess each case individually',
          ],
        },
        {
          title: 'Recovery Tips',
          items: [
            'Rest for 24-48 hours',
            'Apply ice to reduce swelling',
            'Eat soft foods initially',
            'Avoid straws and spitting',
            'Take medications as prescribed',
            'Keep extraction sites clean',
          ],
        },
      ]}
      faqs={[
        {
          question: 'At what age should wisdom teeth be removed?',
          answer: 'Wisdom teeth are typically removed in the late teens or early twenties, when the roots are not fully formed and recovery is generally easier. However, removal can be done at any age if problems develop.',
        },
        {
          question: 'Is wisdom tooth removal painful?',
          answer: 'The procedure itself is performed with effective anesthesia, so you shouldn\'t feel pain during extraction. Some discomfort and swelling are normal afterward, but can be managed with prescribed or over-the-counter medication.',
        },
        {
          question: 'How long is the recovery period?',
          answer: 'Most patients can return to normal activities within a few days. Complete healing of the extraction sites takes about 1-2 weeks. We\'ll provide specific guidance based on your procedure.',
        },
        {
          question: 'Do all wisdom teeth need to be removed?',
          answer: 'Not necessarily. If wisdom teeth emerge fully, are properly positioned, and can be cleaned effectively, they may not need removal. We\'ll evaluate your specific situation and recommend the best approach.',
        },
        {
          question: 'What should I eat after wisdom tooth removal?',
          answer: 'Stick to soft foods like yogurt, applesauce, smoothies, and mashed potatoes for the first few days. Avoid hot, spicy, crunchy, or chewy foods. Gradually return to normal eating as you heal.',
        },
      ]}
      relatedServices={[
        { title: 'Emergency Dentistry', path: '/services/emergency-dentistry' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'Root Canal', path: '/services/root-canal' },
      ]}
    />
  );
}
