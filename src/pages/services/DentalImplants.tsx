import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Layers } from 'lucide-react';
import heroImage from '@/assets/service-dental-implants.jpg';

export default function DentalImplants() {
  return (
    <ServicePageLayout
      title="Dental Implants"
      metaDescription="Dental implants at Kaya Dental in Leominster, MA. Replace missing teeth with natural-looking, permanent solutions. Schedule your implant consultation today."
      heroSubtitle="Permanent Tooth Replacement"
      heroDescription="Missing teeth affect far more than just your smile. They can change the way you eat, speak, and feel about yourself. At Kaya Dental, we offer state-of-the-art dental implants—one of the most advanced, reliable, and natural-looking solutions for replacing missing teeth."
      heroImage={heroImage}
      icon={Layers}
      detailedDescription={[
        {
          title: 'What Are Dental Implants?',
          content: `A dental implant is an artificial tooth root—typically made of biocompatible titanium—that is surgically placed into the jawbone. Once the implant integrates with the bone, it serves as a stable foundation for a custom dental crown, bridge, or denture.

The final result is a replacement tooth that looks, feels, and functions like a natural tooth. Unlike removable dentures or bridges that rely on neighboring teeth for support, dental implants are independent, secure, and designed to last for many years.`,
        },
        {
          title: 'Why Dental Implants Are the Gold Standard',
          content: `Dental implants are widely considered the gold standard for tooth replacement because they address both the visible tooth and the missing root beneath the gumline. Many patients are surprised to learn that implants are more affordable than expected, the procedure is relatively painless, and placement of a single dental implant often takes less than an hour.

Unlike other tooth replacement options, dental implants prevent bone loss in the jaw, maintain facial structure, and don't require altering adjacent healthy teeth.`,
        },
      ]}
      benefits={[
        'Look, feel, and function like natural teeth',
        'Prevent bone loss in the jaw',
        'Preserve facial structure and appearance',
        'No dietary restrictions once healed',
        'Long-lasting—can last decades with proper care',
        'Don\'t require altering adjacent teeth',
        'Improve speech and comfort',
        'Easy to care for like natural teeth',
      ]}
      whatToExpect={[
        {
          title: 'Consultation and Planning',
          description: 'We evaluate your oral health, bone levels, and smile goals using advanced imaging to create a personalized treatment plan.',
        },
        {
          title: 'Implant Placement',
          description: 'The titanium implant is gently placed into the jawbone in a minimally invasive procedure, often taking less than an hour.',
        },
        {
          title: 'Healing and Integration',
          description: 'Over 3-6 months, the implant integrates with the bone (osseointegration), creating a strong, stable foundation.',
        },
        {
          title: 'Final Restoration',
          description: 'Once healed, a custom-made crown, bridge, or denture is attached to the implant, restoring your complete smile.',
        },
      ]}
      additionalInfo={[
        {
          title: 'What Implants Can Replace',
          items: [
            'A single missing tooth',
            'Multiple missing teeth in a row',
            'All teeth (implant-supported dentures)',
            'Failing or damaged teeth',
            'Uncomfortable removable dentures',
            'Teeth lost due to injury or decay',
          ],
        },
        {
          title: 'Implants vs. Dentures',
          items: [
            'Secure and stable—no slipping',
            'Feel natural when eating and speaking',
            'Preserve jawbone health',
            'No adhesives required',
            'No removal for cleaning',
            'Long-term investment in oral health',
          ],
        },
        {
          title: 'Ideal Candidates',
          items: [
            'Healthy adults with missing teeth',
            'Those unhappy with dentures',
            'Adequate bone or candidates for grafting',
            'Good oral hygiene habits',
            'Non-smokers or willing to quit',
            'Seeking a permanent solution',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Is dental implant surgery painful?',
          answer: 'Most patients report that implant placement is more comfortable than a tooth extraction. The procedure is performed under local anesthesia, and most patients experience only mild soreness afterward—easily managed with over-the-counter pain medication.',
        },
        {
          question: 'How long do dental implants last?',
          answer: 'With proper care, dental implants can last many years or even a lifetime. Regular dental checkups, good oral hygiene, and avoiding tobacco use all contribute to long-term success.',
        },
        {
          question: 'Am I a candidate for dental implants?',
          answer: 'Most healthy adults with missing teeth are candidates for dental implants. Even patients who have been told they\'re not candidates may be surprised by modern implant techniques, including bone grafting options.',
        },
        {
          question: 'How much do dental implants cost?',
          answer: 'While dental implants may have a higher upfront cost than other options, they\'re often more cost-effective long-term. Unlike bridges or dentures that may need replacement, implants are designed to last decades. We offer financing options to make treatment accessible.',
        },
        {
          question: 'How long does the entire process take?',
          answer: 'The complete process typically takes 3-6 months, allowing time for the implant to integrate with your jawbone. Some patients may qualify for same-day implants in certain situations.',
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
