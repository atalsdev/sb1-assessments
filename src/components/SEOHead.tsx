import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface Props {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
}

export function SEOHead({
  title = 'MindCheck - Mental Health Self-Assessment Tools',
  description = 'Take free, confidential mental health screenings. Professional self-assessment tools for anxiety, depression, ADHD, and more.',
  type = 'website',
  image = 'https://mindcheck.com/og-image.jpg',
}: Props) {
  const { pathname } = useLocation();
  const url = `https://mindcheck.shop${pathname}`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
