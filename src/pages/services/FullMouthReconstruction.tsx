import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Sparkles } from 'lucide-react';
import heroImage from '@/assets/service-full-mouth-reconstruction-new.jpg';

export default function FullMouthReconstruction() {
  return (
    <ServicePageLayout
      showMembershipBanner={false}
      title="Full Mouth Reconstruction"
      heroHeadline="Full Mouth Reconstruction: Your Smile, Whole Again"
      canonicalPath="/services/full-mouth-reconstruction"
      metaDescription="Full mouth reconstruction at Kaya Dental in Leominster, MA. A personalized plan combining implants, crowns, and more to rebuild comfort, function, and confidence. Call today."
      heroSubtitle="Complete Smile Restoration"
      heroDescription="When many teeth are worn, damaged, or missing at once, it can feel overwhelming — even hopeless. Full mouth reconstruction at Kaya Dental in Leominster, MA brings everything together into one clear, personalized plan, rebuilding your smile with treatments chosen for comfort, function, and a natural look."
      introDescription="If years of wear, damage, or missing teeth have added up, a full mouth reconstruction combines the right treatments into one carefully planned journey — so you're not piecing things together visit by visit."
      heroImage={heroImage}
      icon={Sparkles}
      detailedDescription={[
        {
          title: 'One Plan Instead of Ten Visits of Guesswork',
          content: `A full mouth reconstruction isn't a single procedure — it's a carefully sequenced combination of treatments, which might include crowns, implants, bridges, or dentures, chosen for your mouth and sequenced so each step builds on the last. Instead of fixing one tooth at a time as problems appear, we look at the whole picture: your bite, your jaw, your gums, and how you want your smile to feel.

Modern technology makes this far more precise than it used to be. Our in-office CBCT 3D imaging and digital scanning let us plan your reconstruction in detail before treatment begins.`,
        },
        {
          title: 'Rebuilding More Than Teeth',
          content: `Patients who complete a full mouth reconstruction often tell us the biggest change wasn't in the mirror. Being able to chew comfortably, speak clearly, and smile without covering your mouth changes how you show up in the world.

We take this journey at your pace. Every step is explained in plain language, comfort measures are always available, and you'll always know what's happening now, what's next, and why.`,
        },
      ]}
      benefits={[
        'One clear, personalized plan for your whole smile',
        'Chew and speak comfortably again',
        'Natural-looking results shaped around your face',
        'Treats the underlying causes, not just the symptoms',
        'Modern 3D planning for precise, predictable care',
        'Every step explained — no surprises',
        'Comfort-first care at every visit',
        'Financing available if cost is a concern',
      ]}
      whatToExpect={[
        {
          title: 'A Thorough, Unhurried Consultation',
          description: 'We listen to your history and goals, examine your teeth, gums, and bite, and use our in-office CBCT 3D scan and digital imaging to see the complete picture.',
        },
        {
          title: 'A Written, Step-by-Step Plan',
          description: 'You receive a clear plan laying out each phase, why it\'s recommended, what it costs, and how long it takes — so you can make decisions with full information.',
        },
        {
          title: 'Care in Comfortable Phases',
          description: 'Treatment is sequenced so each step builds on the last, with healing time built in. We keep you comfortable throughout and never rush the process.',
        },
        {
          title: 'Your Finished Smile',
          description: 'Once your reconstruction is complete, we fine-tune your bite and show you how to keep your new smile healthy for years to come.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Treatments We May Combine',
          items: [
            'Dental crowns to rebuild worn or damaged teeth',
            'Dental implants and All-on-X for missing teeth',
            'Bridges to replace teeth in a row',
            'Full and partial dentures',
            'Tooth-colored fillings',
          ],
        },
        {
          title: 'Who It Helps',
          items: [
            'Teeth worn down by grinding or acid erosion',
            'Multiple damaged, failing, or missing teeth',
            'Chronic jaw discomfort or bite problems',
            'Old dental work that needs comprehensive replacement',
            'Anyone ready for a complete, lasting solution',
          ],
        },
        {
          title: 'Why Choose Kaya Dental',
          items: [
            'CBCT 3D imaging and digital scanning in our office',
            'Dr. Dani is a Fellow of the International Dental Implant Association',
            'A patient-first approach — we go at your pace',
            'Honest guidance on what\'s needed and what isn\'t',
            'Clear pricing and financing options up front',
          ],
        },
      ]}
      faqs={[
        {
          question: 'What is a full mouth reconstruction, exactly?',
          answer: 'It\'s a personalized combination of restorative treatments — crowns, implants, bridges, dentures, and more — planned together to rebuild a smile with extensive damage or tooth loss. The key word is "planned": instead of addressing problems one at a time, we create one coordinated plan for your whole mouth.',
        },
        {
          question: 'How long does it take?',
          answer: 'It depends on what your mouth needs — some reconstructions take a few months, others longer, especially when implants need time to heal. At your consultation we\'ll give you a realistic timeline for your specific case, with each phase explained before anything begins.',
        },
        {
          question: 'Will it be painful?',
          answer: 'We put comfort first at every visit. Areas are thoroughly numbed during treatment, and we offer options to help anxious patients relax. Most patients tell us the process was far more comfortable than they had feared — and that the results were worth it.',
        },
        {
          question: 'How much does it cost?',
          answer: 'Because every reconstruction is different, cost depends entirely on your plan. We\'ll walk you through exact pricing before treatment starts — no surprises. If cost is a concern, we offer Cherry and CareCredit financing to spread it out. Call our Leominster office and we\'ll talk through your options.',
        },
        {
          question: 'Am I too old for this, or is my case too advanced?',
          answer: 'Patients in their 70s, 80s, and beyond complete full mouth reconstructions successfully. Modern techniques and 3D planning make more things possible than ever before. The best way to know is a consultation — we\'ll give you an honest assessment of what\'s achievable for your mouth.',
        },
      ]}
      relatedServices={[
        { title: 'Dental Implants', path: '/services/dental-implants' },
        { title: 'All-on-X Implants', path: '/services/all-on-x' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'Dentures', path: '/services/dentures' },
      ]}
    />
  );
}
