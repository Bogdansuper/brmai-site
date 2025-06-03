import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Script from 'next/script';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'AIBusinessAutomation' });
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/services/ai-business-automation`;
  
  return {
    title: t('seoTitle'),
    description: t('seoDescription'),
    keywords: [
      'ai business automation',
      'business process automation ai',
      'ai for business automation',
      'artificial intelligence business process management',
      'business automation software',
      'ai powered automation'
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: t('seoTitle'),
      description: t('seoDescription'),
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default async function AIBusinessAutomationPage({ params }: Props) {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'AIBusinessAutomation' });
  const tShared = await getTranslations({ locale: resolvedParams.locale, namespace: 'Shared' });
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Business Automation",
    "provider": {
      "@type": "Organization",
      "name": "BRM AI"
    },
    "description": "Complete AI-powered business process automation services including workflow automation, intelligent document processing, and predictive analytics.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intelligent Process Automation",
            "description": "Automate complex business processes using AI and machine learning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Analytics",
            "description": "Real-time business insights and predictive analytics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom AI Solutions",
            "description": "Tailored AI automation solutions for your specific business needs"
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900/50">
          <nav className="px-6 md:px-12 py-4">
            <div className="flex items-center justify-between">
              <Link href={`/${resolvedParams.locale}`} className="text-xl font-medium tracking-tight">
                BRM-AI
              </Link>
              <div className="flex items-center gap-6">
                <Link href={`/${resolvedParams.locale}#services`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t('allServices')}
                </Link>
                <Link href={`/${resolvedParams.locale}#contact`} className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all text-sm">
                  {t('getStarted')}
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-8 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-8 uppercase tracking-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl">
              {t('heroSubtitle')}
            </p>
            <Link 
              href={`/${resolvedParams.locale}#contact`}
              className="inline-block px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all text-sm tracking-wider"
            >
              {t('startJourney')}
            </Link>
          </div>
        </section>

        {/* What is AI Business Automation */}
        <section className="py-16 px-8 md:px-12 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal mb-8 uppercase tracking-wider">
              {t('whatIsTitle')}
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {t('whatIsDesc1')} <Link href="/blog/business-process-automation-guide" className="text-white hover:text-gray-300 underline">complete automation guide</Link>.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {t('whatIsDesc2')} <Link href="/blog/ai-business-automation-benefits" className="text-white hover:text-gray-300 underline">top benefits of AI automation</Link> for small and medium enterprises.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl mb-3 uppercase">{t('intelligentDecisionTitle')}</h3>
                  <p className="text-gray-400">{t('intelligentDecisionDesc')}</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3 uppercase">{t('continuousLearningTitle')}</h3>
                  <p className="text-gray-400">{t('continuousLearningDesc')}</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3 uppercase">{t('scalableSolutionsTitle')}</h3>
                  <p className="text-gray-400">{t('scalableSolutionsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 px-8 md:px-12 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal mb-16 uppercase tracking-wider text-center">
              {t('keyFeaturesTitle')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <div className="text-6xl font-thin text-gray-500 mb-6">AI</div>
                <h3 className="text-xl mb-4 uppercase">{t('naturalLanguageTitle')}</h3>
                <p className="text-gray-400">
                  {t('naturalLanguageDesc')}
                </p>
              </div>
              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <div className="text-6xl font-thin text-gray-500 mb-6">AI</div>
                <h3 className="text-xl mb-4 uppercase">{t('computerVisionTitle')}</h3>
                <p className="text-gray-400">
                  {t('computerVisionDesc')}
                </p>
              </div>
              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <div className="text-6xl font-thin text-gray-500 mb-6">AI</div>
                <h3 className="text-xl mb-4 uppercase">{t('predictiveAnalyticsTitle')}</h3>
                <p className="text-gray-400">
                  {t('predictiveAnalyticsDesc')}
                </p>
              </div>
              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <div className="text-6xl font-thin text-gray-500 mb-6">AI</div>
                <h3 className="text-xl mb-4 uppercase">{t('intelligentWorkflowsTitle')}</h3>
                <p className="text-gray-400">
                  {t('intelligentWorkflowsDesc')}
                </p>
              </div>
              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <div className="text-6xl font-thin text-gray-500 mb-6">AI</div>
                <h3 className="text-xl mb-4 uppercase">{t('seamlessIntegrationTitle')}</h3>
                <p className="text-gray-400">
                  {t('seamlessIntegrationDesc')}
                </p>
              </div>
              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <div className="text-6xl font-thin text-gray-500 mb-6">AI</div>
                <h3 className="text-xl mb-4 uppercase">{t('realTimeMonitoringTitle')}</h3>
                <p className="text-gray-400">
                  {t('realTimeMonitoringDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-8 md:px-12 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal mb-8 uppercase tracking-wider">
              {t('useCasesTitle')}
            </h2>
            <p className="text-gray-400 mb-12 max-w-3xl">
              {t('useCasesDesc')} <Link href="/#services" className="text-white hover:text-gray-300 underline">complete service portfolio</Link> to see how we can help your specific industry.
            </p>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl mb-6 uppercase">{t('financeTitle')}</h3>
                <ul className="space-y-3 text-gray-400">
                  {(t.raw('financeList') as string[]).map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl mb-6 uppercase">{t('customerServiceTitle')}</h3>
                <ul className="space-y-3 text-gray-400">
                  {(t.raw('customerServiceList') as string[]).map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl mb-6 uppercase">{t('humanResourcesTitle')}</h3>
                <ul className="space-y-3 text-gray-400">
                  {(t.raw('humanResourcesList') as string[]).map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl mb-6 uppercase">{t('supplyChainTitle')}</h3>
                <ul className="space-y-3 text-gray-400">
                  {(t.raw('supplyChainList') as string[]).map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-16 px-8 md:px-12 bg-gray-950">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-16 uppercase tracking-wider">
              {t('roiTitle')}
            </h2>
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="text-5xl font-bold mb-2">70%</div>
                <p className="text-gray-400">{t('costReduction')}</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">85%</div>
                <p className="text-gray-400">{t('fasterProcessing')}</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">95%</div>
                <p className="text-gray-400">{t('accuracyImprovement')}</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">3x</div>
                <p className="text-gray-400">{t('productivityIncrease')}</p>
              </div>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('roiDesc')} <Link href="/blog/choosing-automation-software" className="text-white hover:text-gray-300 underline">software selection tips</Link> in our comprehensive guides.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 md:px-12 border-t border-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-8 uppercase tracking-wider">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              {t('ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/${resolvedParams.locale}#contact`}
                className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all text-sm tracking-wider text-center"
              >
                {t('getFreeConsultation')}
              </Link>
              <Link 
                href={`/${resolvedParams.locale}/blog`}
                className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-all text-sm tracking-wider text-center"
              >
                {t('learnMoreBlog')}
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-8 md:px-12 border-t border-gray-900">
          <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} {t('footerCopyright')}</p>
            <div className="flex gap-6">
              <Link href={`/${resolvedParams.locale}`} className="hover:text-white transition-colors">
                {t('home')}
              </Link>
              <Link href={`/${resolvedParams.locale}#services`} className="hover:text-white transition-colors">
                {t('allServices')}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 