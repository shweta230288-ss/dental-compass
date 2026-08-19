import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Target } from 'lucide-react';
import heroImage from '@/assets/service-root-canal-new.jpg';

export default function RootCanal() {
  return (
    <ServicePageLayout
      title="Root Canal Therapy"
      heroHeadline="A Root Canal Is How We End Your Pain, Not Cause It"
      canonicalPath="/services/root-canal"
      metaDescription="Gentle, comfortable root canal treatment at Kaya Dental in Leominster, MA, just off Route 2. Save your natural tooth and finally get relief from tooth pain."
      heroSubtitle="Save Your Natural Tooth"
      heroDescription="If someone mentions 'root canal' and your stomach drops, you're not alone — but the horror stories don't match modern dentistry. At Kaya Dental in Leominster, MA, we use gentle techniques and precise imaging so the procedure feels a lot like getting a filling, and it's what finally makes the pain stop."
      heroImage={heroImage}
      icon={Target}
      detailedDescription={[
        {
          title: 'What\'s Actually Happening Inside Your Tooth',
          content: `Deep inside each tooth is soft tissue called pulp, containing nerves and blood vessels. When decay, a crack, or an injury lets bacteria reach that pulp, it becomes infected or inflamed — which is usually what's causing your pain in the first place.

A root canal simply removes that infected tissue, cleans and seals the space inside the tooth, and protects it with a crown. Rather than losing the tooth, you keep it, and the infection that was hurting you is gone for good.`,
        },
        {
          title: 'Why the "Painful Root Canal" Reputation Is Outdated',
          content: `Older techniques and less effective anesthesia gave root canals a bad name decades ago, but that's not the procedure we perform today. With modern numbing, precise CBCT 3D imaging to map your tooth's anatomy, and refined instruments, most patients say it feels similar to a routine filling.

We know some patients are anxious about needles or being in the chair, so we take extra time to make sure you're comfortable before we start and check in with you throughout. Dr. Kunal Dani and Dr. Amy Majzoub will walk you through every step so there are no surprises.`,
        },
      ]}
      benefits={[
        'Ends severe tooth pain, often immediately',
        'Saves your natural tooth instead of extracting it',
        'Stops infection from spreading further',
        'Keeps your smile and bite looking natural',
        'Performed comfortably with modern anesthesia',
        'Backed by precise CBCT 3D imaging',
        'Protects your jawbone and neighboring teeth',
        'Membership plan and financing available if you\'re uninsured',
      ]}
      whatToExpect={[
        {
          title: 'A Careful Look and Complete Numbing',
          description: 'We use digital X-rays and CBCT 3D imaging when needed to see exactly what\'s happening, then thoroughly numb the area so you feel calm, comfortable, and pain-free.',
        },
        {
          title: 'Gently Clearing the Infection',
          description: 'We create a small opening, carefully remove the infected tissue, and clean and shape the space inside the tooth.',
        },
        {
          title: 'Sealing It Up',
          description: 'The cleaned space is filled with a biocompatible material and sealed to keep infection from coming back.',
        },
        {
          title: 'Protecting Your Tooth Long-Term',
          description: 'We place a custom crown so your tooth is strong, comfortable, and ready for everyday use again.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Signs You May Need a Root Canal',
          items: [
            'A toothache that won\'t let up',
            'Sharp sensitivity to hot or cold',
            'A tooth that\'s darkening',
            'Swelling near the gum line',
            'A small bump on the gums',
            'Pain when chewing or biting down',
          ],
        },
        {
          title: 'Root Canal vs. Extraction',
          items: [
            'Keeps your natural tooth in place',
            'Preserves your natural bite',
            'Protects your jawbone over time',
            'Often more affordable than replacement',
            'Avoids the need for an implant or bridge',
            'Your own tooth still works best',
          ],
        },
        {
          title: 'Caring for Your Tooth Afterward',
          items: [
            'Mild tenderness for a few days is normal',
            'Over-the-counter pain relief is usually enough',
            'Avoid chewing on that side until your crown is placed',
            'Come back for your crown appointment',
            'Brush and floss it like any other tooth',
            'Keep up with regular checkups',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Is a root canal actually painful?',
          answer: 'With modern anesthesia, most patients feel about the same as they would getting a filling — and many are relieved to find the toothache they came in with disappears. If you\'re nervous about needles or pain, tell our team; we\'ll make sure you\'re fully comfortable before we start. Call us with any questions ahead of your visit.',
        },
        {
          question: 'How much does a root canal cost?',
          answer: 'Cost depends on which tooth is involved and its condition, so we\'ll give you clear pricing before any treatment begins. If you\'re uninsured, we offer a membership plan plus Cherry and CareCredit financing to help make treatment manageable. Call our office and we can talk through your options.',
        },
        {
          question: 'Can I go back to work the same day?',
          answer: 'Most patients return to work or normal activities right after their appointment, since local anesthesia wears off within a few hours. Some tenderness for a day or two is normal but usually doesn\'t stop daily activities. Let us know if your job requires anything specific and we\'ll plan around it.',
        },
        {
          question: 'How long does recovery take?',
          answer: 'Most people feel back to normal within a few days, with any mild soreness managed easily with over-the-counter pain relievers. Full healing happens gradually as your crown is placed and the tooth settles in. Call us if discomfort lingers or worsens so we can take a look.',
        },
        {
          question: 'Can I get in the same day if I\'m in pain?',
          answer: 'We do our best to see patients in pain as quickly as possible, often the same day. Call us right away and we\'ll get you on the schedule and provide guidance for managing discomfort until your visit.',
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
