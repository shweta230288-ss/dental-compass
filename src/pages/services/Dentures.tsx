import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { LayoutGrid } from 'lucide-react';
import heroImage from '@/assets/service-dentures-new.jpg';

export default function Dentures() {
  return (
    <ServicePageLayout
      title="Dentures"
      heroHeadline="Custom Dentures That Let You Eat, Speak, and Smile Comfortably"
      canonicalPath="/services/dentures"
      metaDescription="Comfortable, natural-looking custom dentures at Kaya Dental in Leominster, MA. Full, partial, and implant-supported options. Call to schedule your consultation."
      heroSubtitle="Replace Missing Teeth"
      heroDescription="Missing several teeth — or all of them — can make everyday things like eating dinner out or laughing in photos feel stressful. At Kaya Dental in Leominster, MA, we design custom dentures that fit comfortably and look like your own teeth, so you can get back to living without thinking about your smile."
      heroImage={heroImage}
      icon={LayoutGrid}
      detailedDescription={[
        {
          title: 'Dentures Built Around Your Life',
          content: `Everyone's situation is different, so we offer several paths forward. Full dentures replace an entire arch of teeth and rest gently on your gums. Partial dentures fill in gaps while working with the healthy teeth you still have.

If stability matters most to you — no worrying about slipping while you eat or talk — implant-supported dentures anchor securely so you can bite into an apple or laugh out loud without a second thought. Dr. Kunal Dani and Dr. Amy Majzoub will help you decide what fits your mouth, lifestyle, and budget.`,
        },
        {
          title: 'Comfortable, Natural-Looking, and Made for You',
          content: `Today's dentures look far more lifelike than what you may remember from years past. We shade and shape the teeth to suit your face, and our digital scanning technology helps us get a precise, comfortable fit from the start — cutting down on the sore spots and adjustments that used to be common.

There's an adjustment period with any new denture, and that's normal — we'll be with you through it, making small tweaks until eating and speaking feel natural again.`,
        },
      ]}
      benefits={[
        'Eat the foods you\'ve been avoiding',
        'Speak clearly without worrying about slipping',
        'Support your natural facial shape',
        'Feel confident smiling and laughing again',
        'Custom shading and shaping for a natural look',
        'Implant-supported options if stability matters most to you',
        'A plan that fits your budget, including financing options',
        'Ongoing adjustments so your fit stays comfortable',
      ]}
      whatToExpect={[
        {
          title: 'A Conversation About Your Goals',
          description: 'We\'ll examine your mouth and talk honestly about what matters most to you — comfort, stability, cost — before recommending a path forward.',
        },
        {
          title: 'Precise Impressions',
          description: 'We take careful measurements and impressions so your dentures are shaped specifically for your mouth, not a generic mold.',
        },
        {
          title: 'A Trial Fit You Can See and Feel',
          description: 'You\'ll try on a preview version so we can fine-tune fit and appearance together before anything is finalized.',
        },
        {
          title: 'Your Final, Comfortable Fit',
          description: 'We carefully fit your finished dentures and see you again afterward to make any small adjustments as you settle in.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Full Dentures',
          items: [
            'Replace a complete upper or lower arch',
            'Rest comfortably on the gums',
            'Custom-fitted to your mouth',
            'Natural-looking teeth and gum tone',
            'Simple to remove and clean',
          ],
        },
        {
          title: 'Partial Dentures',
          items: [
            'Fill in gaps from missing teeth',
            'Work with your remaining natural teeth',
            'Keep other teeth from shifting out of place',
            'Removable for easy cleaning',
            'Can be upgraded later if needed',
          ],
        },
        {
          title: 'Implant-Supported Dentures',
          items: [
            'The most stable, secure option',
            'No slipping while eating or speaking',
            'Helps protect your jawbone over time',
            'Available as fixed or removable',
            'A long-term investment in comfort',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How long before I have my new dentures?',
          answer: 'The process usually spans a few visits over several weeks so we can take impressions, check the fit, and make refinements together. If any teeth need to come out first, we\'ll build in time to heal comfortably. Call our office and we\'ll map out a timeline that works for you.',
        },
        {
          question: 'Will it feel strange to eat and talk with dentures?',
          answer: 'It\'s normal to notice an adjustment period at first, but most patients feel comfortable within a few weeks of everyday practice. We\'ll give you tips to speed up that process and check in to make sure the fit feels right. If something feels off longer than expected, just give us a call.',
        },
        {
          question: 'What do dentures cost, and are there payment options?',
          answer: 'Cost depends on the type of denture and any preparation your mouth needs, and we\'ll go over pricing clearly before you commit to anything. Our membership plan and Cherry/CareCredit financing are both available if you\'re uninsured or want to spread out payments. Ask our team about what fits your situation.',
        },
        {
          question: 'How do I take care of my dentures?',
          answer: 'Rinse them after eating, brush them daily with a denture-specific cleanser, and give your gums and tongue a gentle brushing too. Keeping up with regular checkups helps us catch fit changes early. We\'re happy to walk you through a simple daily routine at your visit.',
        },
        {
          question: 'Are dental implants a better option for me than dentures?',
          answer: 'It depends on your bone health, budget, and how much stability matters to you — there\'s no single right answer for everyone. Some patients choose implant-supported dentures for extra security, while others do very well with traditional dentures. Come in for a consultation and we\'ll help you decide honestly.',
        },
      ]}
      relatedServices={[
        { title: 'Dental Implants', path: '/services/dental-implants' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
        { title: 'Family Dentistry', path: '/services/family-dentistry' },
      ]}
    />
  );
}
