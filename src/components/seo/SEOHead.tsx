import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}

const BASE_URL = 'https://kayadentalbydani.com';
const DEFAULT_OG_IMAGE = '/lovable-uploads/03eeafb9-a86b-4bc7-a8e8-fc311ba5d7df.jpg';

export function SEOHead({
  title,
  description,
  canonicalPath = '',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes('Kaya Dental') ? title : `${title} | Kaya Dental`;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content="Kaya Dental" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Additional SEO */}
      <meta name="geo.region" content="US-MA" />
      <meta name="geo.placename" content="Leominster" />
      <meta name="geo.position" content="42.5245;-71.7607" />
      <meta name="ICBM" content="42.5245, -71.7607" />
    </Helmet>
  );
}
