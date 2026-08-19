import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Circle } from 'lucide-react';
import heroImage from '@/assets/service-dental-fillings-new.jpg';

export default function DentalFillings() {
  return (
    <ServicePageLayout
      title="Dental Fillings"
      heroHeadline="Tooth-Colored Fillings That Stop Cavities Early"
      canonicalPath="/services/dental-fillings"
      metaDescription="Comfortable, tooth-colored fillings at Kaya Dental in Leominster, MA. Gentle cavity care that blends into your smile. Call our office to schedule."
      heroSubtitle="Cavity Treatment"
      heroDescription="A little tooth sensitivity or a dark spot doesn't have to turn into a bigger problem. At Kaya Dental in Leominster, MA, we treat cavities early with tooth-colored composite fillings that blend right into your smile — quick, comfortable, and usually done in one visit."
      heroImage={heroImage}
      icon={Circle}
      detailedDescription={[
        {
          title: 'Catching Cavities Before They Grow',
          content: `A cavity starts small — a little sensitivity to sweets or cold, maybe a spot you can see in the mirror. Left alone, it can grow and eventually cause real pain or infection. Treated early with a filling, it's a simple, low-stress fix.

At Kaya Dental, we use composite (tooth-colored) fillings almost exclusively. They bond directly to your tooth, which lets us keep more of your natural, healthy structure instead of removing extra tooth the way older techniques required.`,
        },
        {
          title: 'Fillings You Won\'t Even Notice',
          content: `Unlike the dark metal fillings of the past, composite fillings are shaded to match your tooth so the repair disappears into your smile. They're free of mercury and hold up well to everyday chewing on both front and back teeth.

If you've been avoiding a checkup because of old memories of the drill, know that our approach today is gentler and faster — most patients are surprised how easy the appointment turns out to be. Give us a call and let's get it looked at.`,
        },
      ]}
      benefits={[
        'Blends naturally into your smile — no dark spots',
        'Preserves more of your healthy, natural tooth',
        'Mercury-free and gentle on your body',
        'Bonds securely so it holds up to daily use',
        'Usually finished in a single, quick visit',
        'Stops small cavities before they turn into bigger problems',
        'Minimal soreness afterward',
        'Affordable option, with financing available if needed',
      ]}
      whatToExpect={[
        {
          title: 'Getting You Numb and Comfortable',
          description: 'We gently numb the area first, so you\'re relaxed and shouldn\'t feel anything during treatment.',
        },
        {
          title: 'Clearing Away the Decay',
          description: 'We carefully remove just the decayed part of the tooth, keeping as much of your healthy structure as possible.',
        },
        {
          title: 'Filling and Bonding',
          description: 'The tooth-colored material is layered in and set with a curing light, bonding tightly to your tooth.',
        },
        {
          title: 'A Bite That Feels Right',
          description: 'We shape and polish the filling so it feels smooth and natural when you bite down — no rough edges.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Signs Worth Getting Checked',
          items: [
            'A twinge with sweets, hot, or cold',
            'A visible dark spot or small hole',
            'Discomfort when you bite down',
            'Food that keeps catching in one spot',
            'A rough or sharp edge on a tooth',
          ],
        },
        {
          title: 'Why We Choose Composite',
          items: [
            'Matches your natural tooth color',
            'Free of mercury',
            'Bonds directly to your tooth',
            'Lets us keep more healthy structure',
            'A conservative, tooth-preserving choice',
          ],
        },
        {
          title: 'Taking Care of Your Filling',
          items: [
            'Wait until numbness fades before eating',
            'Brush and floss as usual',
            'Go easy on very hard or sticky foods',
            'Let us know if anything feels off',
            'Keep up with your regular visits',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Will a filling hurt?',
          answer: 'You shouldn\'t feel pain during the procedure since we numb the area completely beforehand. Some patients notice mild sensitivity for a day or two afterward, which fades on its own. If dental anxiety has kept you away, tell us — we\'ll take things at your pace, and you can always call ahead to talk it through.',
        },
        {
          question: 'How long will a filling last?',
          answer: 'A well-placed composite filling typically lasts many years, especially with good home care and regular checkups. How long it lasts depends a bit on where it is and your bite. Come see us for a checkup and we can tell you how yours is holding up.',
        },
        {
          question: 'Can I get my old silver fillings replaced?',
          answer: 'Yes — many patients choose to swap old dark fillings for tooth-colored ones for a more natural look. We\'ll take a look and let you know if it makes sense for your teeth. Call our Leominster office to set up an evaluation.',
        },
        {
          question: 'What does a filling cost, and what if I don\'t have insurance?',
          answer: 'Fillings are one of the more affordable dental treatments, and we\'ll always share clear pricing before we begin. If you\'re uninsured, our membership plan or Cherry/CareCredit financing can help make it manageable. Just ask our team when you call.',
        },
        {
          question: 'What if the cavity is too big for a simple filling?',
          answer: 'If decay is more extensive, a crown or other restoration may serve you better long-term, and we\'ll explain exactly why if that\'s the case. We\'ll never push you toward more treatment than you actually need. Schedule a visit and we\'ll give you an honest recommendation.',
        },
      ]}
      relatedServices={[
        { title: 'Exam & Cleaning', path: '/services/exam-cleaning' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'Root Canal', path: '/services/root-canal' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
      ]}
    />
  );
}
