import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Smile } from 'lucide-react';
import heroImage from '@/assets/service-all-on-x-new.jpg';

export default function AllOnX() {
  return (
    <ServicePageLayout
      showMembershipBanner={false}
      title="All-on-X Implants"
      heroHeadline="All-on-X: A Complete Smile, Fixed in Place"
      canonicalPath="/services/all-on-x"
      metaDescription="All-on-X full-arch dental implants at Kaya Dental in Leominster, MA. Replace an entire row of teeth with a fixed, natural-looking smile planned with CBCT 3D imaging. Call today."
      heroSubtitle="Full-Arch Tooth Replacement"
      heroDescription="Losing most or all of the teeth in an arch changes everything — what you can eat, how you speak, how you feel in photos. All-on-X at Kaya Dental in Leominster, MA replaces a full row of teeth with a fixed bridge supported by a few carefully placed implants, so your new smile doesn't come out at night or slip when you laugh."
      introDescription="If loose dentures or failing teeth have been holding you back, All-on-X offers a fixed, permanent alternative — a complete arch of teeth secured by implants, planned precisely with our in-office CBCT 3D imaging."
      heroImage={heroImage}
      icon={Smile}
      detailedDescription={[
        {
          title: 'A Full Arch, Held by a Few Implants',
          content: `All-on-X uses four or more implants to support an entire arch of teeth — a fixed bridge that stays in place around the clock. Because the implants act like natural roots, your new teeth feel secure when you bite into an apple, speak in a meeting, or smile for a photo.

The number and position of implants are planned around your bone, your bite, and your goals. Our CBCT 3D scan lets us see exactly what we're working with before anything begins, so the plan fits your mouth — not a template.`,
        },
        {
          title: 'From Loose Dentures to a Smile You Trust',
          content: `Many All-on-X patients spent years managing with removable dentures — avoiding certain foods, using adhesives, worrying about slipping. The biggest thing they tell us afterward isn't about teeth at all: it's about not thinking about them anymore.

You won't be left without teeth during the process, either. We talk through comfortable temporary options so your smile and your daily life continue while everything heals.`,
        },
      ]}
      benefits={[
        'A full arch of teeth that stays fixed in place',
        'Eat, speak, and laugh without slipping or clicking',
        'No adhesives and nothing to take out at night',
        'Helps preserve your jawbone after tooth loss',
        'Designed to look natural and feel like your own teeth',
        'Often placed with fewer implants than older full-arch methods',
        'A lasting alternative to removable dentures',
        'Financing available if cost is a concern',
      ]}
      whatToExpect={[
        {
          title: 'A Personal Consultation and 3D Plan',
          description: 'We listen to your goals, then use our in-office CBCT 3D scan to map your jawbone and plan exactly where each implant will go — before treatment begins.',
        },
        {
          title: 'Implant Placement, Gently Done',
          description: 'Your implants are placed with a careful, minimally invasive approach under local anesthesia. Most patients are surprised by how manageable the visit feels.',
        },
        {
          title: 'Teeth While You Heal',
          description: 'You won\'t be left with a gap — we arrange a comfortable temporary arch so you can smile and eat soft foods with confidence while the implants bond with your bone.',
        },
        {
          title: 'Your Final, Fixed Smile',
          description: 'Once healing is complete, your custom full-arch bridge is attached — shaped and shaded to look natural, and designed to stay put for the long term.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Who All-on-X Is For',
          items: [
            'Patients missing most or all teeth in an arch',
            'Anyone tired of loose or uncomfortable dentures',
            'People with failing teeth facing full-arch replacement',
            'Most patients qualify, even with some bone loss',
            'Those looking for a fixed, long-term solution',
          ],
        },
        {
          title: 'All-on-X Compared to Traditional Dentures',
          items: [
            'Fixed in place — no slipping or clicking',
            'Chew with far more force and confidence',
            'No adhesives, no nightly removal',
            'Stimulates and helps preserve the jawbone',
            'Feels closer to having your own teeth back',
          ],
        },
        {
          title: 'Why Plan It at Kaya Dental',
          items: [
            'CBCT 3D imaging in our office for precise planning',
            'Dr. Dani is a Fellow of the International Dental Implant Association',
            'A gentle, patient-first approach at every visit',
            'Honest answers about whether All-on-X is right for you',
            'Clear pricing and financing options before we begin',
          ],
        },
      ]}
      faqs={[
        {
          question: 'What exactly does "All-on-X" mean?',
          answer: 'It simply means a full arch of teeth supported by a number of implants — often four, sometimes more depending on your bone and bite. The "X" is the number of implants chosen for your specific case. At your consultation, our CBCT 3D scan tells us exactly what number is right for you.',
        },
        {
          question: 'Is the procedure painful?',
          answer: 'Most patients tell us it was easier than they expected. We numb the area thoroughly, and any soreness in the days after is usually mild and manageable with over-the-counter medication. If you feel anxious about treatment, tell us when you call — we\'ll make sure you\'re comfortable every step of the way.',
        },
        {
          question: 'Will I be without teeth during the process?',
          answer: 'No. We arrange a comfortable temporary arch so your smile and daily routine aren\'t interrupted while the implants heal and bond with your jawbone. Once healing is complete, your final fixed bridge is attached. We\'ll walk you through the full timeline at your consultation.',
        },
        {
          question: 'Am I a candidate if I\'ve been told I have bone loss?',
          answer: 'Possibly, yes. Many patients who were turned away years ago are candidates today thanks to modern planning and placement techniques. Our in-office CBCT 3D imaging shows us exactly what we\'re working with, so we can give you an honest answer for your specific case — just call to schedule a consultation.',
        },
        {
          question: 'How much does All-on-X cost, and can I spread it out?',
          answer: 'It\'s an investment, and we\'ll always walk you through the full picture clearly before starting. If you\'re uninsured or want to spread out the cost, we offer Cherry and CareCredit financing. Call our Leominster office and we\'ll talk through options that work for your budget.',
        },
        {
          question: 'How long do All-on-X teeth last?',
          answer: 'With good home care and regular checkups, an implant-supported full-arch bridge is designed to last for many years. Like natural teeth, it needs brushing, cleaning, and professional visits — and we\'ll show you exactly how to care for it so it stays healthy long-term.',
        },
      ]}
      relatedServices={[
        { title: 'Dental Implants', path: '/services/dental-implants' },
        { title: 'Dentures', path: '/services/dentures' },
        { title: 'Full Mouth Reconstruction', path: '/services/full-mouth-reconstruction' },
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
      ]}
    />
  );
}
