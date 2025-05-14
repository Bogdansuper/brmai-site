// src/app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import BRMHomePageClient from "@/components/BRMHomePageClient";

// Define a specific type for the props expected by generateMetadata
interface GenerateMetadataProps {
  params: { locale: string };
}

export async function generateMetadata(props: GenerateMetadataProps) {
  const awaitedParams = await props.params; // Explicitly await props.params
  const locale = awaitedParams.locale;      // Then destructure locale

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

// Minimal and explicit props for the Page component in a dynamic segment
interface PageComponentProps {
  params: { locale: string };
  // searchParams?: { [key: string]: string | string[] | undefined }; // If you ever use searchParams
}

export default async function Page(props: PageComponentProps) {
  const awaitedParams = await props.params; // Explicitly await props.params
  const locale = awaitedParams.locale;      // Then destructure locale

  // 'locale' is available here if you needed to pass it to BRMHomePageClient
  // For example: <BRMHomePageClient locale={locale} />
  // But BRMHomePageClient uses useLocale(), so it's not strictly needed here.
  return <BRMHomePageClient />;
}