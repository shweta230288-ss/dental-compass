import { ServicePageLayout } from '@/components/services/ServicePageLayout';
import { Target } from 'lucide-react';
import heroImage from '@/assets/service-root-canal-new.jpg';

export default function RootCanal() {
  return (
    <ServicePageLayout
      title="Root Canal Therapy"
      metaDescription="Gentle root canal treatment at Kaya Dental in Leominster, MA. Save your natural tooth and relieve pain with modern, comfortable endodontic care."
      heroSubtitle="Save Your Natural Tooth"
      heroDescription="Root canal therapy has an undeserved reputation for being painful, but modern techniques make the procedure comfortable and effective. At Kaya Dental, we use advanced technology to perform gentle root canals that relieve pain and save your natural tooth."
      heroImage={heroImage}
      icon={Target}
      detailedDescription={[
        {
          title: 'What Is a Root Canal?',
          content: `A root canal is a procedure to treat infection or inflammation inside a tooth. Each tooth contains soft tissue called pulp, which includes nerves and blood vessels. When the pulp becomes infected due to decay, cracks, or injury, it can cause severe pain and lead to abscess if left untreated.

During a root canal, we remove the infected pulp, clean and shape the inside of the tooth, then seal it to prevent future infection. The tooth is then restored with a crown to protect it and restore full function.`,
        },
        {
          title: 'Modern Root Canals Are Comfortable',
          content: `Thanks to modern anesthesia, advanced instruments, and refined techniques, root canal treatment today is typically no more uncomfortable than getting a filling. In fact, most patients report that the procedure relieves the pain they were experiencing, not causes it.

We take extra care to ensure your comfort throughout the procedure. If you're anxious about treatment, we can discuss options to help you feel more relaxed.`,
        },
      ]}
      benefits={[
        'Relieves severe tooth pain',
        'Saves your natural tooth',
        'Prevents spread of infection',
        'Maintains your natural smile',
        'Comfortable with modern techniques',
        'High success rate (95%+)',
        'Preserves jawbone structure',
        'Avoids more costly replacements',
      ]}
      whatToExpect={[
        {
          title: 'Diagnosis and Anesthesia',
          description: 'We take X-rays to see the extent of infection, then thoroughly numb the area so you\'ll be completely comfortable.',
        },
        {
          title: 'Access and Cleaning',
          description: 'We create a small opening in the tooth and carefully remove the infected pulp, then clean and shape the root canals.',
        },
        {
          title: 'Filling the Canals',
          description: 'The cleaned canals are filled with a biocompatible material and sealed to prevent future infection.',
        },
        {
          title: 'Crown Placement',
          description: 'We place a custom dental crown to protect the treated tooth and restore its full strength and function.',
        },
      ]}
      additionalInfo={[
        {
          title: 'Signs You May Need a Root Canal',
          items: [
            'Severe, persistent toothache',
            'Sensitivity to hot or cold',
            'Darkening of the tooth',
            'Swelling in the gums',
            'Pimple on the gums',
            'Pain when chewing or biting',
          ],
        },
        {
          title: 'Root Canal vs. Extraction',
          items: [
            'Saves your natural tooth',
            'Maintains natural bite',
            'Preserves jawbone',
            'Often less expensive overall',
            'Avoids implant or bridge',
            'Natural teeth function best',
          ],
        },
        {
          title: 'After Your Root Canal',
          items: [
            'Some tenderness is normal',
            'Over-the-counter pain relief usually sufficient',
            'Avoid chewing on that side initially',
            'Return for crown placement',
            'Care for it like natural teeth',
            'Regular checkups important',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Is a root canal painful?',
          answer: 'Modern root canals are performed with effective anesthesia and are typically no more uncomfortable than getting a filling. Most patients are relieved that the severe pain they were experiencing goes away after treatment.',
        },
        {
          question: 'How long does a root canal take?',
          answer: 'Most root canals can be completed in one appointment lasting 60-90 minutes. Complex cases may require two visits. We\'ll provide a timeline based on your specific situation.',
        },
        {
          question: 'Why do I need a crown after a root canal?',
          answer: 'A crown protects the treated tooth, which can become more brittle after the procedure. The crown restores the tooth\'s strength and appearance, helping it last for many years.',
        },
        {
          question: 'How long will my treated tooth last?',
          answer: 'With proper care, a tooth treated with a root canal can last a lifetime. Regular brushing, flossing, and dental checkups are essential for long-term success.',
        },
        {
          question: 'What happens if I don\'t get a root canal?',
          answer: 'Without treatment, the infection can spread to surrounding teeth and bone, cause an abscess, and eventually lead to tooth loss. Untreated dental infections can also affect your overall health.',
        },
      ]}
      relatedServices={[
        { title: 'Dental Crowns', path: '/services/dental-crowns' },
        { title: 'Emergency Dentistry', path: '/services/emergency-dentistry' },
        { title: 'Dental Fillings', path: '/services/dental-fillings' },
        { title: 'General Dentistry', path: '/services/general-dentistry' },
      ]}
    />
  );
}
