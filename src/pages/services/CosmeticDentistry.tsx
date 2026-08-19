import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Smile } from 'lucide-react';
import heroImage from '@/assets/service-cosmetic-dentistry-new.jpg';

export default function CosmeticDentistry() {
  return (
    <ServicePageLayout
      showMembershipBanner={false}
      title="Cosmetic Dentistry"
      heroHeadline="Cosmetic Dentistry Designed So You Can Smile with Confidence"
      canonicalPath="/services/cosmetic-dentistry"
      metaDescription="Love your smile again with cosmetic dentistry at Kaya Dental in Leominster, MA. Veneers, whitening, bonding, and smile makeovers from Dr. Kunal Dani and Dr. Amy Majzoub. Call to schedule your consultation."
      heroSubtitle="Smile Transformation"
      heroDescription="Maybe you cover your mouth when you laugh, avoid photos, or feel like your smile doesn't match how confident you feel inside. At Kaya Dental in Leominster, MA, we help patients from Lunenburg, Lancaster, and Gardner get a smile they're genuinely excited to show off, with a natural look, never an overdone one."
      introDescription="If you find yourself hiding your smile in photos or covering your mouth when you laugh, you are not alone. Our Leominster cosmetic consultations are designed to understand what bothers you and create a natural-looking plan that fits your goals and budget."
      heroImage={heroImage}
      icon={Smile}
      detailedDescription={[
        {
          title: "A Smile That Still Looks Like You",
          content: `A great smile shouldn't look like it came out of a catalog, it should look like the best version of your own smile. Dr. Kunal Dani and associate dentist Dr. Amy Majzoub take time to understand your face, your lifestyle, and what's actually bothering you before recommending anything, so the end result feels natural rather than forced.

We use digital imaging to give you a preview of what's possible before you commit to anything. That means no guessing and no pressure, just a clear picture of your options so you can decide what feels right for you and your budget.`,
        },
        {
          title: "Options for Every Goal and Every Budget",
          content: `Whether you want to fix one chipped tooth or you're ready for a full smile makeover, we have treatments that meet you where you are, including whitening, veneers, bonding, crowns, and Invisalign. Many patients combine a couple of these for a bigger change without a bigger commitment.

Kaya, from the Sanskrit word for body and wholeness, is at the heart of how we practice: conservative care that preserves as much of your natural tooth as possible. If cost is on your mind, we're happy to talk through financing through Cherry or CareCredit so a beautiful smile doesn't have to wait.`,
        },
      ]}
      benefits={[
        "A smile you actually want to show off in photos and at work",
        "Natural-looking results tailored to your face, never a one-size-fits-all look",
        "A real confidence boost in everyday conversations",
        "Multiple treatment paths so there's an option to fit your goals and budget",
        "A digital preview before you commit to any treatment",
        "A conservative approach that protects as much natural tooth as possible",
        "Care from experienced dentists who listen before they recommend anything",
        "Results built to last with simple, easy at-home care",
      ]}
      whatToExpect={[
        {
          title: "A Relaxed Conversation First",
          description: "We start by listening: what bothers you about your smile, what you want it to feel like, and any worries you have. No judgment, just questions.",
        },
        {
          title: "Your Personalized Smile Plan",
          description: "Using digital imaging, we map out a plan and, when helpful, show you a preview of your potential results so nothing feels like a surprise.",
        },
        {
          title: "Comfortable, Unhurried Treatment",
          description: "We move at a pace that keeps you comfortable, explaining each step so nothing feels rushed or unfamiliar.",
        },
        {
          title: "Your New Smile, Ready for Its Close-Up",
          description: "Once treatment is complete, we'll give you simple tips to keep your results looking great for years to come.",
        },
      ]}
      additionalInfo={[
        {
          title: "Popular Ways We Help",
          items: [
            "Professional teeth whitening",
            "Porcelain veneers",
            "Dental bonding",
            "Invisalign clear aligners",
            "Full smile makeovers",
            "Gum contouring",
          ],
        },
        {
          title: "If Any of This Sounds Familiar",
          items: [
            "Stained or discolored teeth",
            "Chipped or cracked teeth",
            "Gaps that bother you",
            "Teeth that feel misshapen",
            "An uneven gum line",
            "Crooked or crowded teeth",
          ],
        },
        {
          title: "Why Patients Choose Kaya Dental",
          items: [
            "A caring, judgment-free approach",
            "Digital iTero scanning and CBCT 3D imaging",
            "Natural-looking, tooth-preserving materials",
            "A plan built around your goals, not a template",
            "A relaxed, comfortable visit from start to finish",
            "Cherry and CareCredit financing available",
          ],
        },
      ]}
      faqs={[
        {
          question: "Will cosmetic dentistry make my teeth look fake or overdone?",
          answer: "Not with the right approach. Dr. Dani and Dr. Majzoub design every treatment around your natural features so the result looks like a healthier, brighter version of your own smile rather than something artificial. If you're ever unsure, give our Leominster office a call and we'll walk you through real examples.",
        },
        {
          question: "How long will my results last?",
          answer: "It depends on the treatment: whitening tends to last a year or two with occasional touch-ups, while veneers and crowns can last well over a decade with good care. We'll be upfront about what to expect for your specific plan during your visit. Call us and we can talk through what makes sense for your smile.",
        },
        {
          question: "Is cosmetic dentistry going to hurt?",
          answer: "Most cosmetic treatments involve little to no discomfort, and we use numbing when needed for anything more involved. Many patients tell us it was far easier than they expected. If you're nervous about pain, mention it when you call and we'll walk you through exactly what your visit will feel like.",
        },
        {
          question: "What does cosmetic dentistry cost, and can I afford it?",
          answer: "Costs vary depending on what you need, from a simple whitening session to a full smile makeover. During your consultation, we'll give you clear pricing with no surprises, and we offer financing through Cherry and CareCredit to help spread out the cost. Call our office to ask about what fits your budget.",
        },
        {
          question: "What exactly are veneers, and are they right for me?",
          answer: "Veneers are thin, custom shells bonded to the front of your teeth to change their color, shape, or length, a popular option for a dramatic yet natural-looking transformation. Whether they're the right fit depends on your goals and the condition of your teeth, which we can determine together at a consultation. Call us to find out if veneers make sense for you.",
        },
      ]}
      relatedServices={[
        { title: "Teeth Whitening", path: "/services/teeth-whitening" },
        { title: "Invisalign", path: "/services/invisalign" },
        { title: "Dental Crowns", path: "/services/dental-crowns" },
        { title: "Dental Implants", path: "/services/dental-implants" },
      ]}
    />
  );
}
