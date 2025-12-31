import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Crown } from 'lucide-react';
import heroImage from '@/assets/service-dental-crowns-new.jpg';

export default function DentalCrowns() {
  return (
    <ServicePageLayout
      title="Dental Crowns"
      metaDescription="Custom dental crowns at Kaya Dental in Leominster, MA. Restore damaged teeth with natural-looking, durable crowns. Schedule your consultation today."
      heroSubtitle="Restore & Protect"
      heroDescription="Dental crowns are versatile restorations that can repair damaged teeth, protect weakened teeth, and improve your smile's appearance. At Kaya Dental, we create custom crowns that match your natural teeth perfectly for seamless, long-lasting results."
      heroImage={heroImage}
      icon={Crown}
      detailedDescription={[
        {
          title: 'What Are Dental Crowns?',
          content: `A dental crown is a custom-made cap that covers the entire visible portion of a tooth above the gum line. Crowns are designed to restore the tooth's shape, size, strength, and appearance while protecting it from further damage.

Modern dental crowns can be made from various materials including porcelain, ceramic, metal alloys, or a combination. We'll help you choose the best material based on the location of the tooth, your bite, and your aesthetic preferences.`,
        },
        {
          title: 'When Are Crowns Recommended?',
          content: `Dental crowns are recommended in many situations: to protect a weak tooth from breaking, restore a tooth that's already broken or severely worn, cover a tooth with a large filling, hold a dental bridge in place, cover a dental implant, or improve the appearance of a misshapen or discolored tooth.

Crowns are also placed after root canal therapy to protect the treated tooth and restore its full function. With proper care, dental crowns can last 10-15 years or longer.`,
        },
      ]}
      benefits={[
        'Restore strength to damaged teeth',
        'Natural-looking, seamless appearance',
        'Long-lasting durability (10-15+ years)',
        'Protect teeth from further damage',
        'Custom-made for perfect fit',
        'Multiple material options available',
        'Improve bite and chewing function',
        'Enhance smile aesthetics',
      ]}
      whatToExpect={[
        {
          title: 'Consultation and Preparation',
          description: 'We examine your tooth, take X-rays, and discuss the best crown option for your needs. The tooth is prepared and shaped.',
        },
        {
          title: 'Digital Impressions',
          description: 'Using our iTero scanner, we create precise digital impressions of your teeth—no messy traditional impressions needed.',
        },
        {
          title: 'Temporary Crown',
          description: 'A temporary crown protects your tooth while your permanent crown is being crafted by our dental lab.',
        },
        {
          title: 'Final Placement',
          description: 'Once ready, we check the fit and color match, then permanently bond your new crown in place.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Crown Materials',
          items: [
            'All-ceramic: Most natural appearance',
            'Porcelain-fused-to-metal: Durability + aesthetics',
            'Gold alloy: Maximum strength',
            'Zirconia: Strong and tooth-colored',
            'E-max: Premium aesthetics',
            'We help you choose the best option',
          ],
        },
        {
          title: 'Conditions Treated',
          items: [
            'Cracked or broken teeth',
            'Severely decayed teeth',
            'Worn down teeth',
            'After root canal therapy',
            'Teeth with large fillings',
            'Cosmetic improvements',
          ],
        },
        {
          title: 'Crown Care Tips',
          items: [
            'Brush and floss normally',
            'Avoid chewing ice or hard objects',
            'Wear a nightguard if you grind teeth',
            'Visit us for regular checkups',
            'Report any discomfort promptly',
            'Maintain good oral hygiene',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How long do dental crowns last?',
          answer: 'With proper care, dental crowns typically last 10-15 years, and many last even longer. Factors affecting longevity include oral hygiene habits, diet, teeth grinding, and the crown material.',
        },
        {
          question: 'Is getting a crown painful?',
          answer: 'The procedure is performed under local anesthesia, so you shouldn\'t feel pain during treatment. Some patients experience mild sensitivity after the anesthesia wears off, which typically resolves within a few days.',
        },
        {
          question: 'How many visits are required?',
          answer: 'Traditional crowns typically require two visits: one for preparation and impressions, and one for placement. In some cases, same-day crowns may be available using CAD/CAM technology.',
        },
        {
          question: 'Will my crown look natural?',
          answer: 'Absolutely! We carefully match the color, shape, and size of your crown to your natural teeth. Most people can\'t tell the difference between a well-made crown and a natural tooth.',
        },
        {
          question: 'Can a crown fall off?',
          answer: 'While rare, crowns can occasionally come loose due to decay, improper fit, or trauma. If your crown feels loose or comes off, contact us immediately. We can often recement it if caught early.',
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
