// src/app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import BRMHomePageClient from "@/components/BRMHomePageClient";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'BRMHomePage' });
  const baseUrl = "https://mybrmai.com"; // Define your base URL
  // Assuming your page path for the locale is simply /locale or / for defaultLocale
  // Adjust if you have more segments like /locale/something
  const canonicalPath = locale === "en" ? "/" : `/${locale}`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  return {
    title: t('seoTitle'),
    description: t('seoDescription'),
    keywords: [
      "ai business automation",
      "ai business process automation",
      "business process automation ai",
      "ai for business automation",
      "artificial intelligence business process management",
      "business process automation with ai",
      "ai in bpm",
      "using ai to automate business process"
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/`,
        'uk': `${baseUrl}/uk`,
        'es': `${baseUrl}/es`,
        'ca': `${baseUrl}/ca`,
        'ru': `${baseUrl}/ru`,
        'x-default': `${baseUrl}/` // Default version, usually English
      },
    },
    openGraph: {
      title: t('seoTitle'),
      description: t('seoDescription'),
      url: "https://mybrmai.com",
      siteName: "BRM AI",
      images: [
        {
          url: "https://mybrmai.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t('seoTitle')
        }
      ],
      locale: locale,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: t('seoTitle'),
      description: t('seoDescription'),
      images: ["https://mybrmai.com/og-image.jpg"]
    }
  };
}

export default function Page() {
  return <BRMHomePageClient />;
}