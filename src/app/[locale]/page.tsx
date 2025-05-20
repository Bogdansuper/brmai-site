// src/app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
// Import the new server component instead of the client component directly
import BRMHomePageServer from "./BRMHomePageServer"; // Adjusted path assuming it's in the same [locale] folder

export async function generateMetadata(
  { params }: { params: { locale: string } } // Explicitly type params here and destructure
) {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'BRMHomePage' });
  const baseUrl = "https://mybrmai.com";
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
        'x-default': `${baseUrl}/`
      },
    },
    openGraph: {
      title: t('seoTitle'),
      description: t('seoDescription'),
      url: canonicalUrl, // Use the locale-specific canonical URL
      siteName: "BRM AI",
      images: [
        {
          url: "https://mybrmai.com/og-image.jpg", // Ensure this image exists
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
      images: ["https://mybrmai.com/og-image.jpg"] // Ensure this image exists
    }
  };
}

export default async function Page(
  { params }: { params: { locale: string } } // Explicitly type params here and destructure
) {
  // const locale = params.locale; // locale can be accessed here if needed
  return <BRMHomePageServer />;
}

// Option 2 (Alternative to Option 1): Let Next.js/TypeScript infer props as much as possible
// export default async function Page(props: any) { // Simplest, but less type-safe
//   return <BRMHomePageClient />;
// }