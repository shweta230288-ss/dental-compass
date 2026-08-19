import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Ruler } from 'lucide-react';
import heroImage from '@/assets/service-orthodontics-new.jpg';

export default function Orthodontics() {
  return (
    <ServicePageLayout
      showMembershipBanner={false}
      title="Orthodontics"
      heroHeadline="Orthodontic Care for a Straighter, Healthier Bite at Every Age"
      canonicalPath="/services/orthodontics"
      metaDescription="Orthodontic care at Kaya Dental in Leominster, MA. Invisalign and orthodontic guidance for kids, teens, and adults, with digital treatment planning. Call to schedule a consultation."
      heroSubtitle="Straight Teeth, Healthier Smile"
      heroDescription="A straighter smile isn't just about appearance, it's about a bite that feels right and teeth that are actually easier to keep healthy. At Kaya Dental in Leominster, MA, we guide families throughout Lunenburg, Lancaster, and Westminster through orthodontic options, including Invisalign, at whatever age they're ready to start."
      heroImage={heroImage}
      icon={Ruler}
      detailedDescription={[
        {
          title: "More Than a Straighter Smile",
          content: `A straighter smile feels great, but the benefits go deeper. Properly aligned teeth are easier to brush and floss, which lowers your risk of cavities and gum disease, and a balanced bite helps prevent jaw pain, uneven wear, and TMJ discomfort down the road.

Left alone, small alignment issues tend to become bigger, more costly ones. That's why we recommend an orthodontic check for kids around age seven, while also welcoming adults who are just now ready to finally do something about a smile they've lived with for years.`,
        },
        {
          title: "Treatment Built Around Real Life",
          content: `For most of our patients, Invisalign is the primary path we recommend, using a series of clear, custom aligners to move teeth gradually without metal brackets or wires. It's discreet enough for the office and flexible enough for everyday life.

For more complex cases, we'll coordinate with trusted orthodontic specialists nearby so you always get the right level of care. Either way, we'll walk you through every option in plain language so you can choose what feels right, without pressure.`,
        },
      ]}
      benefits={[
        "A smile that finally looks and feels the way you want",
        "A healthier, more comfortable bite",
        "Teeth that are genuinely easier to keep clean",
        "Lower risk of future dental problems",
        "Invisalign clear aligners for teens and adults",
        "Care that fits comfortably into a busy schedule",
        "Digital, precise treatment planning",
        "Coordination with trusted specialists for complex cases",
      ]}
      whatToExpect={[
        {
          title: "A Thorough, Unhurried Consultation",
          description: "We check your bite, teeth, and jaw alignment with digital scans and X-rays, then talk honestly about whether orthodontic treatment makes sense for you.",
        },
        {
          title: "A Plan Mapped Out in Detail",
          description: "For Invisalign, we build a digital treatment plan that shows you how your smile will change step by step before you commit.",
        },
        {
          title: "Steady Progress, Minimal Disruption",
          description: "You'll wear your aligners as directed with periodic check-ins, keeping visits light and your routine mostly unchanged.",
        },
        {
          title: "Protecting Your New Smile",
          description: "Once treatment ends, a simple retainer routine keeps your teeth from drifting back, so your results truly last.",
        },
      ]}
      additionalInfo={[
        {
          title: "Concerns We Can Help With",
          items: [
            "Crowded teeth",
            "Gaps between teeth",
            "Overbite and underbite",
            "Crossbite",
            "Open bite",
            "A shifted midline",
          ],
        },
        {
          title: "Why Patients Like Invisalign",
          items: [
            "Virtually invisible day to day",
            "Removable for meals",
            "Comfortable to wear",
            "No food restrictions",
            "Easier to keep clean",
            "A digital preview of your results",
          ],
        },
        {
          title: "Signs It Might Be Time",
          items: [
            "Trouble cleaning crowded teeth",
            "Feeling self-conscious about your smile",
            "Jaw pain or clicking",
            "Uneven tooth wear",
            "Frequently biting your cheek or tongue",
            "Speech that feels affected",
          ],
        },
      ]}
      faqs={[
        {
          question: "Am I too old to start orthodontic treatment?",
          answer: "Not at all. We treat adult patients regularly, and as long as your teeth and gums are healthy, age really isn't a barrier to a straighter smile. Many adults find Invisalign fits their schedule and appearance concerns better than they expected. Call our Leominster office to see what makes sense for you.",
        },
        {
          question: "How long does treatment usually take?",
          answer: "It depends on your starting point, but many Invisalign patients complete treatment in six to eighteen months. We'll give you a realistic, personalized timeline once we've evaluated your bite and alignment. Reach out to schedule a consultation and get a clearer picture.",
        },
        {
          question: "Will orthodontic treatment be painful?",
          answer: "You may feel some mild pressure when you start or switch aligners, which usually fades within a few days, and most patients find Invisalign considerably more comfortable than traditional braces. If comfort is a concern for you, mention it when you call so we can talk through what to expect.",
        },
        {
          question: "How often will I need to come in?",
          answer: "Invisalign patients typically stop by every six to eight weeks to pick up new aligners and have their progress checked, which is often less frequent than traditional braces require. This makes it easier to fit treatment around work and family life. Call us to ask about scheduling that works for you.",
        },
        {
          question: "Do I really need to wear a retainer afterward?",
          answer: "Yes, retainers are what keep your results in place after active treatment ends, so skipping them risks your teeth slowly shifting back. We'll provide your retainer and clear instructions on how often to wear it. Call our office if you have any questions about the retention phase.",
        },
      ]}
      relatedServices={[
        { title: "Invisalign", path: "/services/invisalign" },
        { title: "Cosmetic Dentistry", path: "/services/cosmetic-dentistry" },
        { title: "Family Dentistry", path: "/services/family-dentistry" },
        { title: "General Dentistry", path: "/services/general-dentistry" },
      ]}
    />
  );
}
