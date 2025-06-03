import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

// Define a type for the section structure if needed, or use 'any' for simplicity here
type PrivacySection = {
  heading: string;
  paragraph1: string;
  // Add more paragraphs if your structure supports it, e.g., paragraph2?: string;
};

// Consolidated Props type for both page component and generateMetadata
type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/privacy-policy`;
  
  const getLocalizedContent = () => {
    switch(resolvedParams.locale) {
      case 'es':
        return {
          title: 'Política de Privacidad | BRM AI',
          description: 'Política de privacidad y protección de datos de BRM AI. Conoce cómo protegemos tu información personal y datos.',
        };
      case 'ca':
        return {
          title: 'Política de Privacitat | BRM AI',
          description: 'Política de privacitat i protecció de dades de BRM AI. Descobreix com protegim la teva informació personal i dades.',
        };
      case 'uk':
        return {
          title: 'Політика Конфіденційності | BRM AI',
          description: 'Політика конфіденційності та захисту даних BRM AI. Дізнайтесь, як ми захищаємо вашу особисту інформацію та дані.',
        };
      case 'ru':
        return {
          title: 'Политика Конфиденциальности | BRM AI',
          description: 'Политика конфиденциальности и защиты данных BRM AI. Узнайте, как мы защищаем вашу личную информацию и данные.',
        };
      default:
        return {
          title: 'Privacy Policy | BRM AI',
          description: 'Privacy policy and data protection information for BRM AI. Learn how we protect your personal information and data.',
        };
    }
  };

  const content = getLocalizedContent();
  
  return {
    title: content.title,
    description: content.description,
    authors: [{ name: 'BRM AI', url: 'https://mybrmai.com' }],
    creator: 'BRM AI',
    publisher: 'BRM AI',
    
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en/privacy-policy`,
        'uk': `${baseUrl}/uk/privacy-policy`,
        'es': `${baseUrl}/es/privacy-policy`,
        'ca': `${baseUrl}/ca/privacy-policy`,
        'ru': `${baseUrl}/ru/privacy-policy`,
        'x-default': `${baseUrl}/en/privacy-policy`
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
      title: content.title,
      description: content.description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'BRM AI - Business Process Automation',
    },
    
    twitter: {
      card: 'summary',
      title: content.title,
      description: content.description,
      site: '@BRMAI_tech',
      creator: '@BRMAI_tech',
    },
    
    other: {
      'revisit-after': '30 days',
      'rating': 'general',
      'distribution': 'global',
    },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'PrivacyPolicy' });
  const tShared = await getTranslations({ locale: resolvedParams.locale, namespace: 'Shared' });
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900/50">
        <nav className="px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link href={`/${resolvedParams.locale}`} className="text-xl font-medium tracking-tight">
              BRM-AI
            </Link>
            <Link href={`/${resolvedParams.locale}#contact`} className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all text-sm">
              {tShared('contactUsButton')}
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="pt-32 pb-24 px-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-normal mb-16 uppercase tracking-wider">
            {t('title')}
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl mb-6 uppercase tracking-wider">{t('introduction.heading')}</h2>
              <p className="text-gray-400 leading-relaxed">{t('introduction.paragraph1')}</p>
            </section>

            <section>
              <h2 className="text-2xl mb-6 uppercase tracking-wider">{t('informationWeCollect.heading')}</h2>
              <p className="text-gray-400 leading-relaxed">{t('informationWeCollect.paragraph1')}</p>
            </section>

            <section>
              <h2 className="text-2xl mb-6 uppercase tracking-wider">{t('howWeUseInformation.heading')}</h2>
              <p className="text-gray-400 leading-relaxed">{t('howWeUseInformation.paragraph1')}</p>
            </section>

            <section>
              <h2 className="text-2xl mb-6 uppercase tracking-wider">{t('dataSharing.heading')}</h2>
              <p className="text-gray-400 leading-relaxed">{t('dataSharing.paragraph1')}</p>
            </section>

            <section>
              <h2 className="text-2xl mb-6 uppercase tracking-wider">{t('yourRights.heading')}</h2>
              <p className="text-gray-400 leading-relaxed">{t('yourRights.paragraph1')}</p>
            </section>

            <section>
              <h2 className="text-2xl mb-6 uppercase tracking-wider">{t('contactUs.heading')}</h2>
              <p className="text-gray-400 leading-relaxed">{t('contactUs.paragraph1')}</p>
            </section>
          </div>

          <p className="text-gray-500 mt-16 text-sm">
            {t('lastUpdated', { date: new Date().toLocaleDateString() })}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-12 border-t border-gray-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BRM AI</p>
          <Link href={`/${resolvedParams.locale}`} className="hover:text-white transition-colors">
            {tShared('home')}
          </Link>
        </div>
      </footer>
    </div>
  );
} 