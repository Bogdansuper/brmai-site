// src/app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
// Import the new server component instead of the client component directly
import BRMHomePageServer from "./BRMHomePageServer"; // Adjusted path assuming it's in the same [locale] folder
import type { Metadata, ResolvingMetadata } from 'next'; // Импортируем типы Next.js

// Тип для объекта params после разрешения Promise
type ResolvedPageParams = { locale: string };

// Предполагаемый тип пропсов, который может ожидать Vercel
type PotentiallyExpectedProps = {
  params: Promise<ResolvedPageParams>; // params - это Promise
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  props: PotentiallyExpectedProps, // Используем новый тип
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await props.params; // Ожидаем разрешения params
  const locale = resolvedParams.locale;

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
      url: canonicalUrl,
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

export default async function Page(
  props: PotentiallyExpectedProps // Используем новый тип
) {
  // Если вам нужен locale здесь, вы можете его получить:
  // const resolvedParams = await props.params;
  // const locale = resolvedParams.locale;
  
  // BRMHomePageServer, вероятно, получает locale из контекста next-intl,
  // поэтому явная передача locale может не потребоваться.
  return <BRMHomePageServer />;
}

// Option 2 (Alternative to Option 1): Let Next.js/TypeScript infer props as much as possible
// export default async function Page(props: any) { // Simplest, but less type-safe
//   return <BRMHomePageClient />;
// }