// src/app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import BRMHomePageClient from "@/components/BRMHomePageClient";

// Make GenerateMetadataProps also flexible for params for diagnosis
interface GenerateMetadataProps {
  params: any; // Typed as any for diagnosis
  searchParams?: any; // Add searchParams as any for consistency with PageProps diagnosis
}

export async function generateMetadata(props: GenerateMetadataProps) {
  // We now need to be careful when accessing props.params.locale
  // Assuming it resolves to { locale: string } despite the 'any' typing for now
  const locale = props.params.locale; 

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

// PageComponentProps already has params and searchParams as any
interface PageComponentProps {
  params: any; 
  searchParams?: any; 
}

export default async function Page(props: PageComponentProps) {
  return <BRMHomePageClient />;
}

// Option 2 (Alternative to Option 1): Let Next.js/TypeScript infer props as much as possible
// export default async function Page(props: any) { // Simplest, but less type-safe
//   return <BRMHomePageClient />;
// }