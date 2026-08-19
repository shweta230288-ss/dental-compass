import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Sparkles } from 'lucide-react';
import heroImage from '@/assets/service-teeth-whitening-new.jpg';

export default function TeethWhitening() {
  return (
    <ServicePageLayout
      showMembershipBanner={false}
      title="Teeth Whitening"
      heroHeadline="Professional Teeth Whitening for a Brighter Smile in One Visit"
      canonicalPath="/services/teeth-whitening"
      metaDescription="Professional teeth whitening at Kaya Dental in Leominster, MA. Brighten your smile safely, comfortably, and effectively with in-office and take-home options. Call to schedule."
      heroSubtitle="Brighter, Whiter Smile"
      heroDescription="If years of coffee, tea, or just time have left your smile looking duller than you'd like, you're not alone, and it's easier to fix than you think. At Kaya Dental in Leominster, MA, we help patients throughout Lunenburg, Lancaster, and Ashburnham get a noticeably brighter smile safely, without the guesswork of drugstore kits."
      introDescription="A dull or stained smile can make you feel older or less confident than you really are. Our professional whitening options in Leominster give you brighter, more vibrant results than store-bought kits, safely and without the guesswork."
      heroImage={heroImage}
      icon={Sparkles}
      detailedDescription={[
        {
          title: "Why Patients Choose Us Over Store-Bought Kits",
          content: `Over-the-counter strips and trays often disappoint, or worse, leave your teeth sensitive and your gums irritated. Professional whitening at Kaya Dental uses stronger, dentist-supervised whitening agents so you get real, noticeable results without the guesswork.

We also customize every treatment to you, taking into account your current shade, your sensitivity level, and how bright you'd like to go. Many patients see teeth several shades whiter in a single visit, and we take steps throughout to keep you comfortable.`,
        },
        {
          title: "Whitening That Fits Your Life",
          content: `Some patients want dramatic results before a wedding, reunion, or big interview; others prefer to whiten gradually on their own schedule. Either way, we have you covered. Our in-office treatment delivers a brighter smile in about an hour, right in our Leominster office.

If you'd rather ease into it, our custom take-home kits include professional-strength gel and trays made just for your teeth, so whitening fits comfortably into your routine at home. Most patients notice a difference within one to two weeks of consistent use.`,
        },
      ]}
      benefits={[
        "A noticeably brighter smile you'll feel good about in photos",
        "Safe, dentist-supervised whitening that protects your enamel",
        "A treatment plan customized to your teeth and comfort level",
        "Results that last longer than store-bought alternatives",
        "Steps taken throughout treatment to minimize sensitivity",
        "Choose in-office speed or take-home convenience",
        "Even, consistent color across your whole smile",
        "A simple, affordable way to feel more confident",
      ]}
      whatToExpect={[
        {
          title: "A Conversation About Your Goals",
          description: "We look at your current shade, ask about any sensitivity concerns, and recommend whichever option, in-office or take-home, fits your life best.",
        },
        {
          title: "A Gentle Cleaning First",
          description: "A quick professional cleaning clears away surface stains so the whitening treatment can work evenly and effectively.",
        },
        {
          title: "Comfortable Whitening Treatment",
          description: "For in-office visits, we apply a professional whitening gel and monitor your comfort throughout the roughly hour-long appointment.",
        },
        {
          title: "Tips to Keep Your Smile Bright",
          description: "We'll share simple habits to help your results last, and let you know if a touch-up down the road makes sense.",
        },
      ]}
      additionalInfo={[
        {
          title: "What Causes Staining",
          items: [
            "Coffee, tea, and red wine",
            "Tobacco use",
            "Natural aging",
            "Certain medications",
            "Deeply pigmented foods",
            "Inconsistent brushing habits",
          ],
        },
        {
          title: "In-Office vs. Take-Home",
          items: [
            "In-office: dramatic results in about an hour",
            "Take-home: gradual whitening on your schedule",
            "In-office: ideal before a big event",
            "Take-home: fits around a busy week",
            "Both: professional-grade, dentist-supervised",
            "Both: customized to your teeth and comfort",
          ],
        },
        {
          title: "Keeping Your Smile Bright",
          items: [
            "Limit staining foods and drinks",
            "Sip dark beverages through a straw",
            "Brush and floss consistently",
            "Ask us about touch-up treatments",
            "Keep up with regular cleanings",
            "Use whitening toothpaste in moderation",
          ],
        },
      ]}
      faqs={[
        {
          question: "How long will my whitening results last?",
          answer: "Most patients enjoy their brighter smile for one to three years, depending on diet and habits like coffee or wine. Cutting back on staining foods and scheduling an occasional touch-up can help your results last even longer. Call our Leominster office if you'd like a personalized estimate.",
        },
        {
          question: "Will whitening make my teeth sensitive?",
          answer: "Some patients notice mild, temporary sensitivity, but we take steps to keep you comfortable throughout treatment, and any sensitivity typically fades within a day or two. If you've had sensitivity in the past, let us know when you call so we can tailor your treatment accordingly.",
        },
        {
          question: "Is professional whitening actually safe?",
          answer: "Yes. Because it's supervised by our dental team and tailored to your teeth, professional whitening is a safe, well-tested way to brighten your smile. We check your oral health before any treatment to make sure it's the right fit for you. Reach out with any concerns before your visit.",
        },
        {
          question: "Will whitening get rid of every stain?",
          answer: "Professional whitening works very well on stains from food, drinks, and aging, but some deeper stains from medication or injury may need a different solution, like bonding or veneers. We'll be honest with you about what to expect for your specific teeth. Call us to talk through your options.",
        },
        {
          question: "How white will my teeth actually get?",
          answer: "Results depend on your starting shade and the type of staining, but most patients see a difference of several shades. We'll set realistic expectations together during your visit so you know exactly what you're getting. Call our office to schedule a consultation and find out what's possible for you.",
        },
      ]}
      relatedServices={[
        { title: "Cosmetic Dentistry", path: "/services/cosmetic-dentistry" },
        { title: "Exam & Cleaning", path: "/services/exam-cleaning" },
        { title: "Dental Crowns", path: "/services/dental-crowns" },
        { title: "Invisalign", path: "/services/invisalign" },
      ]}
    />
  );
}
