import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Crown } from 'lucide-react';
import heroImage from '@/assets/service-dental-crowns-new.jpg';

export default function DentalCrowns() {
  return (
    <ServicePageLayout
      title="Dental Crowns"
      heroHeadline="Dental Crowns That Restore Strength and Confidence"
      canonicalPath="/services/dental-crowns"
      metaDescription="Custom, natural-looking dental crowns at Kaya Dental in Leominster, MA. Gentle, conservative care from Dr. Kunal Dani and Dr. Amy Majzoub. Call to schedule your visit."
      heroSubtitle="Restore & Protect"
      heroDescription="If a cracked, worn, or heavily filled tooth has you avoiding certain foods or hiding your smile in photos, a crown can quietly fix that. At Kaya Dental in Leominster, MA, we craft crowns using digital iTero scanning so they match your natural teeth and feel right the first time — no guesswork, no goopy impressions."
      heroImage={heroImage}
      icon={Crown}
      detailedDescription={[
        {
          title: 'A Cap That Gives Your Tooth Its Life Back',
          content: `Think of a crown as a custom-fitted cover that goes over a tooth that's cracked, worn down, or weakened — protecting it and giving it back its strength, shape, and natural look. You won't be stuck with a bulky, obvious "fake tooth" feeling; our crowns are shaped and shaded to blend in so well that even you may forget which tooth it is.

We take a conservative approach, which means we only remove what truly needs to go. Dr. Kunal Dani and Dr. Amy Majzoub will walk you through material options in plain language, so you understand exactly what's happening and why — never pressure, just a clear recommendation.`,
        },
        {
          title: 'When a Crown Is the Right Call',
          content: `You might need a crown if a tooth is cracked, badly worn, holding a large old filling together, finishing off a root canal, or simply doesn't look the way you'd like anymore. If you've been putting off a chipped or sensitive tooth because you're worried about pain or cost, you're not alone — most of our patients felt the same way before their first visit.

Once placed, a well-cared-for crown is built to go the distance, so this is a fix you make once and then get back to living — eating, laughing, and smiling without a second thought.`,
        },
      ]}
      benefits={[
        'Stop pain and sensitivity from a cracked or weakened tooth',
        'Get a crown that blends in — most people can\'t tell it\'s there',
        'Keep more of your natural tooth thanks to our conservative approach',
        'Digital iTero scanning means no messy impressions',
        'Built to hold up for years of normal eating and talking',
        'Protect a tooth so it doesn\'t need to be pulled later',
        'Chew and bite with confidence again',
        'Financing and membership options if you're uninsured or budgeting',
      ]}
      whatToExpect={[
        {
          title: 'A Relaxed Consultation',
          description: 'We\'ll look at the tooth, take any needed images, and talk through your options in everyday language — no rushing, no lecture, just an honest recommendation.',
        },
        {
          title: 'Comfortable Digital Scanning',
          description: 'Our iTero scanner captures a precise 3D image of your tooth in minutes, so you skip the messy putty tray most people dread.',
        },
        {
          title: 'A Temporary That Keeps You Comfortable',
          description: 'While your custom crown is being made, a temporary covers and protects the tooth so you can keep eating and speaking normally.',
        },
        {
          title: 'A Confident Fit',
          description: 'When your crown is ready, we check the fit, shape, and color against your smile before bonding it securely in place.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Crown Materials, In Plain English',
          items: [
            'All-ceramic: looks the most like a real tooth',
            'Porcelain-fused-to-metal: extra durability where you bite hardest',
            'Zirconia: strong and still tooth-colored',
            'E-max: a premium, lifelike option for front teeth',
            'We\'ll recommend the best fit for your smile and budget',
          ],
        },
        {
          title: 'When Patients Usually Need a Crown',
          items: [
            'A tooth cracked or chipped from an accident or grinding',
            'A tooth weakened by a large, old filling',
            'A tooth after root canal treatment',
            'A tooth that\'s worn down or misshapen',
            'A tooth you\'d simply like to look better',
          ],
        },
        {
          title: 'Living With Your New Crown',
          items: [
            'Brush and floss just like your other teeth',
            'Skip chewing ice or hard candy',
            'Ask about a nightguard if you grind your teeth',
            'Keep up with regular checkups',
            'Call us right away if anything feels off',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Will getting a crown hurt?',
          answer: 'No — we numb the area thoroughly before we start, so you shouldn\'t feel pain during the appointment. Afterward it\'s normal to notice mild tenderness for a day or two, and it fades quickly. If you\'re nervous about the visit, tell us and we\'ll go at your pace — just give us a call.',
        },
        {
          question: 'How much will a crown cost me?',
          answer: 'Cost depends on the tooth and material, and we\'ll always give you clear pricing before any work begins — no surprises. If you don\'t have insurance, our membership plan and Cherry or CareCredit financing can spread out the cost. Call our Leominster office and we\'ll talk through what fits your budget.',
        },
        {
          question: 'Will my crown actually look natural?',
          answer: 'Yes — we match the shade, shape, and translucency to your surrounding teeth, and most patients say friends and family can\'t tell which tooth was treated. Digital scanning helps us get that fit and color right the first time. Come in and see samples for yourself.',
        },
        {
          question: 'How many appointments will this take?',
          answer: 'Most crowns take two visits — one to prepare the tooth and scan it, and a second to bond your finished crown. You'll leave the first visit with a comfortable temporary so there\'s no gap in your smile. We\'ll schedule around your work day whenever we can.',
        },
        {
          question: 'What if my crown ever feels loose?',
          answer: 'It\'s uncommon, but if it happens, call us right away rather than waiting — we can often fix it quickly before it becomes a bigger issue. Don\'t try to glue it yourself. Just give our office a call and we\'ll get you in.',
        },
      ]}
      relatedServices={[
        { title: 'Dental Implants', path: '/services/dental-implants' },
        { title: 'Root Canal', path: '/services/root-canal' },
        { title: 'Dental Fillings', path: '/services/dental-fillings' },
        { title: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry' },
      ]}
    />
  );
}
