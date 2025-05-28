// src/app/[locale]/page.tsx
import React from 'react';
/** @jsxImportSource react */
// import { getTranslations } from 'next-intl/server'; // Keep commented for now
import type { Metadata, ResolvingMetadata } from 'next';
import BRMHomePageServerWrapper from '@/components/BRMHomePageServerWrapper'; // Import the wrapper

interface PageParams {
  locale: string;
}

// This is the props type Next.js will pass to the Page component for this route
interface Props {
  params: PageParams;
  // searchParams?: { [key: string]: string | string[] | undefined }; // Include if you use searchParams
}

// Restore generateMetadata function (still with static content for this step)
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const locale = params.locale;
  console.log(`[page.tsx] generateMetadata for locale: ${locale}`); 
  const baseUrl = "https://mybrmai.com";
  // const t = await getTranslations({ locale, namespace: 'Metadata' }); // Assuming you might use this later
  const canonicalPath = locale === "en" ? "/" : `/${locale}`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  return {
    // title: t('title'), // Example of using translations
    // description: t('description'),
    title: `AI Business Automation Solutions - ${locale.toUpperCase()}`,
    description: `Optimize your business with AI-driven automation. Explore services for process improvement and efficiency on mybrmai.com. Locale: ${locale}.`, 
    keywords: [
      "ai business automation", 
      "ai business process automation", 
      "business process automation ai", 
      "ai for business automation", 
      "artificial intelligence business process management", 
      "business process automation with ai", 
      "ai in bpm", 
      "using ai to automate business process",
      `ai solutions ${locale}` // Locale-specific keyword example
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/`,
        'uk': `${baseUrl}/uk`,
        'es': `${baseUrl}/es`,
        'ca': `${baseUrl}/ca`,
        'ru': `${baseUrl}/ru`,
        'x-default': `${baseUrl}/`
      },
    },
    openGraph: { 
      title: `AI Business Automation Solutions - ${locale.toUpperCase()}`,
      description: `Optimize your business with AI-driven automation. Explore services for process improvement and efficiency on mybrmai.com. Locale: ${locale}.`,
      url: canonicalUrl,
      siteName: 'My BRM AI',
      // images: [ // Add images later
      //   {
      //     url: `${baseUrl}/og-image.png`, // Replace with your actual image URL
      //     width: 1200,
      //     height: 630,
      //     alt: 'My BRM AI Open Graph Image',
      //   },
      // ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: "summary_large_image",
      title: `AI Business Automation Solutions - ${locale.toUpperCase()}`,
      description: `Optimize your business with AI-driven automation. Explore services for process improvement and efficiency on mybrmai.com. Locale: ${locale}.`,
      // siteId: '@yourTwitterHandle', // Add your Twitter handle
      // creator: '@yourTwitterHandle',
      // images: [`${baseUrl}/twitter-image.png`], // Replace with your actual image URL
    }
  };
}

export default async function Page({ params }: Props) {
  console.log(`[page.tsx] Rendering Page for locale: ${params.locale} using BRMHomePageServerWrapper`);
  // Pass the locale to the wrapper, which will pass it to the client component
  return <BRMHomePageServerWrapper locale={params.locale} />;
}