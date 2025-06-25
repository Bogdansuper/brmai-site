// src/app/[locale]/page.tsx
import React from 'react';
/** @jsxImportSource react */
import { getTranslations } from 'next-intl/server';
import type { Metadata, ResolvingMetadata } from 'next';
import BRMHomePageServerWrapper from '@/components/BRMHomePageServerWrapper'; // Import the wrapper
import Script from 'next/script';

// Force static generation for better performance
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

interface PageParams {
  locale: string;
}

// This is the props type Next.js will pass to the Page component for this route
interface Props {
  params: Promise<PageParams>;
}

// Restore generateMetadata function with dynamic translations
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale } = await params;
  console.log(`[page.tsx] generateMetadata for locale: ${locale}`); 
  const baseUrl = "https://mybrmai.com";
  const t = await getTranslations({ locale, namespace: 'BRMHomePage' });
  const canonicalUrl = `${baseUrl}/${locale}`;

  // Get translated keywords based on locale
  const getLocalizedKeywords = () => {
    const baseKeywords = [
      "business automation",
      "business process automation", 
      "business process automation software",
      "ai business automation",
      "ai business process automation",
      "business process automation ai",
      "ai for business automation",
      "artificial intelligence business process management",
      "business process automation with ai",
      "ai in bpm",
      "using ai to automate business process"
    ];
    
    // Add locale-specific keywords
    switch(locale) {
      case 'es':
        baseKeywords.push(
          "automatización de procesos de negocio",
          "automatización empresarial con ia",
          "software de automatización de procesos"
        );
        break;
      case 'ca':
        baseKeywords.push(
          "automatització de processos de negoci",
          "automatització empresarial amb ia",
          "programari d'automatització de processos"
        );
        break;
      case 'uk':
        baseKeywords.push(
          "автоматизація бізнес-процесів",
          "автоматизація бізнесу з ШІ",
          "програмне забезпечення для автоматизації процесів"
        );
        break;
      case 'ru':
        baseKeywords.push(
          "автоматизация бизнес-процессов",
          "автоматизация бизнеса с ИИ",
          "программное обеспечение для автоматизации процессов"
        );
        break;
    }
    return baseKeywords;
  };

  return {
    title: t('seoTitle'),
    description: t('seoDescription'),
    keywords: getLocalizedKeywords(),
    authors: [{ name: 'BRM AI', url: 'https://mybrmai.com' }],
    creator: 'BRM AI',
    publisher: 'BRM AI',
    
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'uk': `${baseUrl}/uk`,
        'es': `${baseUrl}/es`,
        'ca': `${baseUrl}/ca`,
        'ru': `${baseUrl}/ru`,
        'x-default': `${baseUrl}/en`
      },
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    openGraph: { 
      title: t('seoTitle'),
      description: t('seoDescription'),
      url: canonicalUrl,
      siteName: 'BRM AI - Business Process Automation',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'BRM AI - Business Process Automation with Artificial Intelligence',
        },
      ],
      locale: locale,
      type: 'website',
    },
    
    twitter: {
      card: "summary_large_image",
      title: t('seoTitle'),
      description: t('seoDescription'),
      site: '@BRMAI_tech',
      creator: '@BRMAI_tech',
      images: [`${baseUrl}/twitter-image.png`],
    },
    
    verification: {
      google: 'your-google-verification-code', // Add your actual verification code
    },
    
    other: {
      'revisit-after': '7 days',
      'rating': 'general',
      'distribution': 'global',
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  console.log(`[page.tsx] Rendering Page for locale: ${locale} using BRMHomePageServerWrapper`);
  
  // Schema.org structured data
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mybrmai.com/#organization",
        "name": "BRM AI",
        "alternateName": "BRM AI Business Automation",
        "url": "https://mybrmai.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mybrmai.com/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "BRM AI specializes in business process automation using artificial intelligence, helping companies streamline operations and increase efficiency.",
        "foundingDate": "2023",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Barcelona",
          "addressRegion": "Catalonia",
          "addressCountry": "ES"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34-637-523-323",
          "contactType": "sales",
          "availableLanguage": ["English", "Spanish", "Catalan", "Ukrainian", "Russian"]
        },
        "sameAs": [
          "https://www.linkedin.com/in/bogdan-antonov-b48901206"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://mybrmai.com/#website",
        "url": "https://mybrmai.com",
        "name": "BRM AI - Business Process Automation",
        "description": "AI-powered business automation solutions for increased efficiency and growth",
        "publisher": {
          "@id": "https://mybrmai.com/#organization"
        },
        "inLanguage": ["en", "es", "ca", "uk", "ru"],
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://mybrmai.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://mybrmai.com/${locale}/#webpage`,
        "url": `https://mybrmai.com/${locale}`,
        "name": "Business Process Automation with AI | BRM AI",
        "isPartOf": {
          "@id": "https://mybrmai.com/#website"
        },
        "about": {
          "@id": "https://mybrmai.com/#organization"
        },
        "description": "Discover how BRM AI's business process automation software powered by artificial intelligence can transform your business operations",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `https://mybrmai.com/${locale}`
            }
          ]
        }
      },
      {
        "@type": "Service",
        "serviceType": "Business Process Automation",
        "provider": {
          "@id": "https://mybrmai.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Worldwide"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Business Automation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Business Process Automation",
                "description": "Complete automation of business processes using artificial intelligence"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom CRM Development",
                "description": "Tailored CRM systems for your unique business processes"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO & Digital Marketing",
                "description": "Comprehensive digital marketing and SEO optimization services"
              }
            }
          ]
        }
      }
    ]
  };
  
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaOrgData),
        }}
      />
      <BRMHomePageServerWrapper locale={locale} />
    </>
  );
}