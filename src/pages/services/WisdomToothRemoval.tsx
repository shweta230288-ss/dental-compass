import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Minus } from 'lucide-react';
import heroImage from '@/assets/service-wisdom-tooth-new.jpg';

export default function WisdomToothRemoval() {
  return (
    <ServicePageLayout
      title="Wisdom Tooth Removal"
      heroHeadline="Wisdom Teeth Bothering You? Let's Take Care of It, Gently"
      canonicalPath="/services/wisdom-tooth-removal"
      metaDescription="Gentle wisdom tooth removal at Kaya Dental in Leominster, MA, just off Route 2. Comfortable care for impacted or painful wisdom teeth. Call to schedule."
      heroSubtitle="Oral Surgery"
      heroDescription="Wisdom teeth cause problems because there's often simply not enough room for them — and the pain, pressure, or crowding they cause can be a lot to deal with. At Kaya Dental in Leominster, MA, we make wisdom tooth removal as comfortable and straightforward as possible, so you can put it behind you."
      heroImage={heroImage}
      icon={Minus}
      detailedDescription={[
        {
          title: 'Why Wisdom Teeth Cause Trouble',
          content: `Wisdom teeth usually try to come in during the late teens or early twenties, by which point your jaw has already finished growing and often doesn't have room for them. That can leave them impacted beneath the gum, coming in at an angle, or pushing against neighboring teeth.

Left alone, this can lead to pain, infection, cysts, and damage to the teeth next door — not to mention spots that are nearly impossible to keep clean. Removing them before problems set in is usually the more comfortable path, and it's something our team can evaluate for you with a simple exam and imaging.`,
        },
        {
          title: 'Comfortable Removal, Planned with Precision',
          content: `We use CBCT 3D imaging to see exactly where your wisdom teeth sit and how they relate to nerves and neighboring teeth, so we can plan the safest, most comfortable approach before we ever pick up an instrument. Many wisdom teeth come out with a straightforward extraction; more complex or impacted teeth may need a slightly different approach, which we'll explain clearly beforehand.

Comfort is central to how Dr. Kunal Dani and Dr. Amy Majzoub approach oral surgery — effective anesthesia, a calm environment, and sedation options if you'd like extra ease. We'll send you home with clear aftercare instructions and we're always a phone call away during your recovery.`,
        },
      ]}
      benefits={[
        'Relieves pain before it gets worse',
        'Protects neighboring teeth from damage',
        'Prevents crowding and shifting over time',
        'Eliminates hard-to-clean trouble spots',
        'Reduces the risk of cysts or infection',
        'Comfortable procedure with sedation options',
        'Precise planning with CBCT 3D imaging',
        'Clear aftercare guidance and support during recovery',
      ]}
      whatToExpect={[
        {
          title: 'A Clear Picture First',
          description: 'We use imaging, including CBCT 3D scans when helpful, to see exactly where your wisdom teeth sit and plan the gentlest approach.',
        },
        {
          title: 'Getting You Comfortable',
          description: 'We make sure you\'re fully numb before starting, and we\'ll talk with you about sedation options if you\'d like extra help relaxing.',
        },
        {
          title: 'The Removal Itself',
          description: 'We carefully remove the wisdom teeth using the technique that fits your specific situation, working efficiently and gently.',
        },
        {
          title: 'Supporting Your Recovery',
          description: 'We\'ll give you clear, simple aftercare instructions and check in as needed to make sure you\'re healing well.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Signs Your Wisdom Teeth May Be a Problem',
          items: [
            'Pain toward the back of your mouth',
            'Swollen or tender gums',
            'Trouble opening your mouth fully',
            'Bad breath or an unpleasant taste',
            'Headaches or jaw discomfort',
            'Swelling in the jaw or face',
          ],
        },
        {
          title: 'How Impaction Varies',
          items: [
            'Soft tissue impaction',
            'Partial bony impaction',
            'Complete bony impaction',
            'Horizontal impaction',
            'Vertical impaction',
            'We evaluate every case individually with imaging',
          ],
        },
        {
          title: 'Making Recovery Easier',
          items: [
            'Plan to rest for the first day or two',
            'Use ice to keep swelling down',
            'Stick to soft foods at first',
            'Skip straws and vigorous spitting',
            'Take any prescribed medication as directed',
            'Keep the extraction sites gently clean',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How much does wisdom tooth removal cost?',
          answer: 'Cost depends on how many teeth need removal and whether they\'re impacted, so we\'ll walk you through pricing during your consultation. For uninsured patients, we offer a membership plan along with Cherry and CareCredit financing to help make it affordable. Call us and we\'ll go over the details together.',
        },
        {
          question: 'Will it hurt during or after the procedure?',
          answer: 'You shouldn\'t feel pain during the extraction itself thanks to effective anesthesia, and we offer sedation if you\'d like to feel even more at ease. Some soreness and swelling afterward is normal but is manageable with medication and ice. Reach out if your discomfort feels like more than expected.',
        },
        {
          question: 'How much time will I need to take off work or school?',
          answer: 'Most patients take it easy for a day or two after the procedure and are back to normal activities within a few days. Full healing of the extraction sites takes about one to two weeks. We\'ll give you guidance tailored to your case so you can plan ahead.',
        },
        {
          question: 'Do all wisdom teeth need to come out?',
          answer: 'Not always. If yours have come in fully, sit in a good position, and can be cleaned easily, removal may not be necessary. We\'ll take a look with imaging and give you an honest recommendation either way. Call us to schedule an evaluation.',
        },
        {
          question: 'Can you see me quickly if I\'m in pain now?',
          answer: 'Yes, we do our best to get patients dealing with wisdom tooth pain in as soon as possible, often the same day. Call our office and let us know what you\'re experiencing so we can prioritize your visit.',
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
