import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Layers } from 'lucide-react';
import heroImage from '@/assets/service-dental-implants-new.jpg';

export default function DentalImplants() {
  return (
    <ServicePageLayout
      showMembershipBanner={false}
      title="Dental Implants"
      heroHeadline="Dental Implants That Replace Missing Teeth for Good"
      canonicalPath="/services/dental-implants"
      metaDescription="Natural-looking, permanent dental implants at Kaya Dental in Leominster, MA. Precise CBCT 3D planning and a gentle, conservative approach. Call to schedule your consultation."
      heroSubtitle="Permanent Tooth Replacement"
      heroDescription="A missing tooth can quietly change how you eat, speak, and smile in photos. At Kaya Dental in Leominster, MA, Dr. Kunal Dani and Dr. Amy Majzoub use precise CBCT 3D imaging to plan implants that look, feel, and function like your own teeth — so you can stop thinking about the gap and get back to your life."
      heroImage={heroImage}
      icon={Layers}
      detailedDescription={[
        {
          title: 'A Real Root, A Real Fix',
          content: `A dental implant replaces not just the visible part of a missing tooth but the root underneath it — the part most other options can't address. A small titanium post is placed in the jawbone, and once it's settled in, it becomes a sturdy base for a custom crown that's shaped and shaded to match your smile.

Because an implant stands on its own, we don't need to touch your healthy neighboring teeth to support it, unlike a bridge. It's an investment in your long-term comfort, not just a quick patch.`,
        },
        {
          title: 'Why So Many Patients Choose Implants',
          content: `Implants are popular because they solve the whole problem — missing tooth and missing root — while keeping your jawbone healthy and your face looking like you. Many patients come in expecting the process to be painful or unaffordable, and are relieved to learn placement is usually quick and well-tolerated, with manageable soreness afterward.

While your body heals and bonds with the implant, we make sure you're not left without a tooth — we'll talk through a comfortable temporary option so your daily life and appearance aren't interrupted along the way.`,
        },
      ]}
      benefits={[
        'Look, feel, and function like your own teeth',
        'Protect your jawbone from the shrinking that follows tooth loss',
        'Keep your facial shape looking like you',
        'Eat what you want again once you've healed',
        'Built to last for years with normal care',
        'Leave your healthy neighboring teeth untouched',
        'Speak and smile without worrying about slipping',
        'Financing available if cost is a concern',
      ]}
      whatToExpect={[
        {
          title: 'A Clear, Personalized Plan',
          description: 'Using our in-office CBCT 3D scan, we map your jawbone and nerves precisely, so your plan is tailored to your mouth — not a one-size-fits-all approach.',
        },
        {
          title: 'A Gentle Placement Visit',
          description: 'The implant is placed with a minimally invasive approach, often in under an hour, with local anesthesia so you're comfortable throughout.',
        },
        {
          title: 'Healing, With You Looking and Living Normally',
          description: 'While the implant bonds with your jawbone, we'll fit you with a comfortable option so your smile and daily routine aren't put on hold in the meantime.',
        },
        {
          title: 'Your Finished, Natural-Looking Smile',
          description: 'Once healing is complete, we attach your custom crown, bridge, or denture — and your new tooth is ready for everyday life.',
        },
      ]}
      additionalInfo={[
        {
          title: 'What Implants Can Replace',
          items: [
            'A single missing tooth',
            'Several missing teeth in a row',
            'A full arch, with implant-supported dentures',
            'A failing or damaged tooth',
            'An uncomfortable removable denture',
          ],
        },
        {
          title: 'Implants Compared to Dentures',
          items: [
            'Stay firmly in place — no slipping',
            'Feel natural when eating and talking',
            'Help preserve your jawbone',
            'No adhesives or nightly removal',
            'A long-term investment in your smile',
          ],
        },
        {
          title: 'Is an Implant Right for You?',
          items: [
            'Healthy adults with one or more missing teeth',
            'Anyone frustrated with a loose denture',
            'Most patients qualify, even with some bone loss',
            'Willing to keep up good oral hygiene',
            'Looking for a lasting solution, not a repeat fix',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Is getting an implant painful?',
          answer: 'Most patients tell us it felt easier than they expected — often more comfortable than a tooth extraction. We numb the area thoroughly, and any soreness afterward is usually mild and manageable with over-the-counter medication. If dental anxiety is holding you back, mention it when you call and we'll make sure you're comfortable every step of the way.',
        },
        {
          question: 'What will an implant cost me, and can I afford it?',
          answer: 'Implants are an investment, but we'll always walk you through pricing clearly before starting, and they often save money over time compared to repeatedly replacing bridges or dentures. If you're uninsured or want to spread out the cost, we offer Cherry and CareCredit financing. Call our Leominster office and we'll talk through options that work for your budget.',
        },
        {
          question: 'Am I too old, or is my bone loss too advanced, for an implant?',
          answer: 'Many patients who were told years ago that they weren't candidates are surprised to learn that today's techniques, including bone grafting, open up more options than before. Our CBCT 3D imaging lets us see exactly what we're working with and plan accordingly. Schedule a consultation and we'll give you an honest answer for your specific case.',
        },
        {
          question: 'Will I be without a tooth while it heals?',
          answer: 'No — we'll fit you with a comfortable option so your smile and ability to eat and speak aren't interrupted while your implant bonds with the bone. Healing takes some time, but you won't be left with a visible gap in the meantime. We'll walk you through exactly what to expect at your consultation.',
        },
        {
          question: 'How long will my implant last?',
          answer: 'With good oral hygiene, regular checkups, and avoiding tobacco, an implant is designed to last for many years, often a lifetime. It's one of the most durable tooth-replacement options available today. Give us a call and we can talk through what long-term care looks like for you.',
        },
      ]}
      relatedServices={[
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'Dentures', path: '/services/dentures' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
        { title: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry' },
      ]}
    />
  );
}
