import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { AlignCenter } from 'lucide-react';
import heroImage from '@/assets/service-invisalign-new.jpg';

export default function Invisalign() {
  return (
    <ServicePageLayout
      showMembershipBanner={false}
      title="Invisalign"
      heroHeadline="Invisalign Clear Aligners That Straighten Teeth Without Metal Braces"
      canonicalPath="/services/invisalign"
      metaDescription="Invisalign clear aligners at Kaya Dental in Leominster, MA. Straighten your teeth discreetly and comfortably with digital iTero scanning. Call to schedule your consultation."
      heroSubtitle="Clear Aligners"
      heroDescription="Wishing your teeth were straighter but not thrilled about the idea of metal brackets at work or in photos? Invisalign lets adults and teens throughout Leominster, MA and nearby Lunenburg and Lancaster straighten their smile with clear, comfortable, removable aligners that fit quietly into everyday life."
      heroImage={heroImage}
      icon={AlignCenter}
      detailedDescription={[
        {
          title: "What Invisalign Actually Feels Like",
          content: `Invisalign uses a series of clear, custom aligners that gradually and gently shift your teeth into place. Because they're removable, you can take them out to eat, drink, and brush like normal, so there's no awkward food restrictions or extra effort keeping your teeth clean.

At Kaya Dental, we use iTero digital scanning to map your treatment from day one, so every aligner is built for a precise, comfortable fit. You'll typically switch to a new set every one to two weeks, with easy check-ins along the way.`,
        },
        {
          title: "A Comfortable Alternative for Adults",
          content: `A lot of our adult patients tell us they're worried about looking self-conscious in meetings or photos, or that they simply don't want the hassle of traditional braces. Invisalign aligners are virtually invisible, so most coworkers and friends won't even notice you're wearing them.

Without metal brackets or wires, there's nothing to irritate your cheeks or gums, and many patients find treatment more comfortable than they expected. Depending on your case, treatment often takes six to eighteen months, and we'll walk you through a realistic timeline before you start.`,
        },
      ]}
      benefits={[
        "A discreet, nearly invisible way to straighten your teeth",
        "Removable aligners, so eating and brushing stay simple",
        "No metal brackets or wires poking at your cheeks",
        "Fewer office visits than traditional braces",
        "A precise, predictable plan mapped out from the start",
        "iTero digital scanning, no messy impressions",
        "Effective for a wide range of alignment concerns",
        "Aligners custom-made for your smile alone",
      ]}
      whatToExpect={[
        {
          title: "A Digital Preview of Your New Smile",
          description: "We scan your teeth with our iTero scanner, no messy impressions, and show you a preview of how your smile could look before you commit to anything.",
        },
        {
          title: "Aligners Made Just for You",
          description: "Your custom aligner series is designed around that scan for a fit that feels precise and comfortable from the start.",
        },
        {
          title: "Easy Progress Check-Ins",
          description: "You'll switch aligners every one to two weeks and stop by our Leominster office periodically so we can make sure everything is moving as planned.",
        },
        {
          title: "A Smile You're Proud to Show",
          description: "Once treatment wraps up, we'll fit you with a retainer to help your new smile stay exactly where it belongs.",
        },
      ]}
      additionalInfo={[
        {
          title: "Invisalign Can Help With",
          items: [
            "Crowded teeth",
            "Gaps between teeth",
            "Overbite and underbite",
            "Crossbite",
            "Open bite",
            "General misalignment",
          ],
        },
        {
          title: "Why Adults Prefer Invisalign",
          items: [
            "Nearly invisible in meetings and photos",
            "Removable for meals and brushing",
            "No food off-limits",
            "A more comfortable daily fit",
            "Fewer surprise office visits",
            "Easier to keep teeth clean",
          ],
        },
        {
          title: "Simple Care Tips",
          items: [
            "Wear aligners 20-22 hours a day",
            "Remove them to eat and drink",
            "Rinse aligners with lukewarm water",
            "Brush your teeth before reinserting",
            "Keep them safe in their case",
            "Track your progress with us",
          ],
        },
      ]}
      faqs={[
        {
          question: "How long will Invisalign treatment actually take?",
          answer: "Most patients complete treatment in six to eighteen months depending on how much movement is needed, and minor cases can finish even sooner. We'll give you a realistic, personalized timeline at your consultation so there are no surprises. Call our Leominster office to find out what your timeline might look like.",
        },
        {
          question: "Is Invisalign really as effective as traditional braces?",
          answer: "Yes, Invisalign can treat most of the same issues as traditional braces, often with more comfort and far less disruption to your day. Our iTero digital planning lets us map precise movements so results stay predictable. Give us a call if you'd like to know whether your case is a good fit.",
        },
        {
          question: "Will people be able to tell I'm wearing aligners?",
          answer: "Most people won't notice at all. Invisalign aligners are clear and fit closely to your teeth, which is why so many adults choose them for work and social settings. If you're self-conscious about your smile during treatment, ask us about it when you call, we're glad to talk through what to expect.",
        },
        {
          question: "Is Invisalign uncomfortable to wear?",
          answer: "You may feel mild pressure for a day or two after switching to a new set, which is just a sign your teeth are moving, but most patients find it far more comfortable than metal braces. There are no wires or brackets to irritate your mouth. Call us if you have specific comfort concerns before starting.",
        },
        {
          question: "What does Invisalign cost, and are there payment options?",
          answer: "Cost depends on the complexity of your case, and we'll walk you through exact pricing at your consultation with no pressure to decide on the spot. We also offer financing through Cherry and CareCredit to help make treatment fit your budget. Call our office to ask about pricing and payment plans.",
        },
      ]}
      relatedServices={[
        { title: "Cosmetic Dentistry", path: "/services/cosmetic-dentistry" },
        { title: "Orthodontics", path: "/services/orthodontics" },
        { title: "Teeth Whitening", path: "/services/teeth-whitening" },
        { title: "General Dentistry", path: "/services/general-dentistry" },
      ]}
    />
  );
}
