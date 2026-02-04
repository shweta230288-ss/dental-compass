import { Helmet } from 'react-helmet-async';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://kayadentalbydani.com",
  "name": "Kaya Dental",
  "image": "https://kayadentalbydani.com/lovable-uploads/03eeafb9-a86b-4bc7-a8e8-fc311ba5d7df.jpg",
  "url": "https://kayadentalbydani.com",
  "telephone": "+1-978-534-4000",
  "email": "info@kayadentalbydani.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "130 N Main St Suite 1",
    "addressLocality": "Leominster",
    "addressRegion": "MA",
    "postalCode": "01453",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.5245,
    "longitude": -71.7607
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "07:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "3400"
  },
  "sameAs": [
    "https://www.google.com/maps?cid=kaya-dental-leominster"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dental Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "General Dentistry"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cosmetic Dentistry"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dental Implants"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Invisalign"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Teeth Whitening"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Dentistry"
        }
      }
    ]
  },
  "founder": {
    "@type": "Person",
    "name": "Dr. Kunal Dani",
    "jobTitle": "DMD",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Tufts University School of Dental Medicine"
    }
  },
  "description": "Kaya Dental in Leominster, MA offers comprehensive dental care including cosmetic dentistry, dental implants, Invisalign, and family dentistry with state-of-the-art technology."
};

export function LocalBusinessSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
}
