import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/digital-marketing-agency-usa`;
  
  const getLocalizedContent = () => {
    switch(resolvedParams.locale) {
      case 'es':
        return {
          title: 'Agencia de Marketing Digital Cerca de Mí | Servicios de Marketing Social',
          description: 'Agencia de marketing digital líder cerca de ti. Servicios de marketing en redes sociales y marketing de contenidos para empresas en USA.',
          keywords: [
            'agencia de marketing digital cerca de mí',
            'agencia de marketing en redes sociales',
            'servicios de marketing de contenidos'
          ]
        };
      case 'ca':
        return {
          title: 'Agència de Màrqueting Digital Prop de Mi | Serveis de Màrqueting Social',
          description: 'Agència de màrqueting digital líder prop teu. Serveis de màrqueting a xarxes socials i màrqueting de continguts per a empreses.',
          keywords: [
            'agència de màrqueting digital prop de mi',
            'agència de màrqueting a xarxes socials',
            'serveis de màrqueting de continguts'
          ]
        };
      case 'uk':
        return {
          title: 'Агентство Цифрового Маркетингу Поруч | Послуги Соцмедіа Маркетингу',
          description: 'Провідне агентство цифрового маркетингу поруч з вами. Послуги маркетингу в соціальних мережах та контент-маркетинга.',
          keywords: [
            'агентство цифрового маркетингу поруч',
            'агентство маркетингу в соціальних мережах',
            'послуги контент-маркетингу'
          ]
        };
      case 'ru':
        return {
          title: 'Агентство Цифрового Маркетинга Рядом | Услуги Соцмедиа Маркетинга',
          description: 'Ведущее агентство цифрового маркетинга рядом с вами. Услуги маркетинга в социальных сетях и контент-маркетинга.',
          keywords: [
            'агентство цифрового маркетинга рядом',
            'агентство маркетинга в социальных сетях',
            'услуги контент-маркетинга'
          ]
        };
      default:
        return {
          title: 'Digital Marketing Agency Near Me | Social Media & Content Marketing USA',
          description: 'Leading digital marketing agency near you. Expert social media marketing agency and content marketing services. Drive growth with proven strategies.',
          keywords: [
            'digital marketing agency near me',
            'social media marketing agency',
            'content marketing services'
          ]
        };
    }
  };

  const content = getLocalizedContent();
  
  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    authors: [{ name: 'BRM AI', url: 'https://mybrmai.com' }],
    creator: 'BRM AI',
    publisher: 'BRM AI',
    
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en/digital-marketing-agency-usa`,
        'uk': `${baseUrl}/uk/digital-marketing-agency-usa`,
        'es': `${baseUrl}/es/digital-marketing-agency-usa`,
        'ca': `${baseUrl}/ca/digital-marketing-agency-usa`,
        'ru': `${baseUrl}/ru/digital-marketing-agency-usa`,
        'x-default': `${baseUrl}/en/digital-marketing-agency-usa`
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
      siteName: 'BRM AI - Digital Marketing Agency',
      images: [
        {
          url: `${baseUrl}/digital-marketing-agency.png`,
          width: 1200,
          height: 630,
          alt: 'Digital Marketing Agency Services',
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      site: '@BRMAI_tech',
      creator: '@BRMAI_tech',
      images: [`${baseUrl}/digital-marketing-agency.png`],
    },
  };
}

export default async function DigitalMarketingAgencyPage({ params }: Props) {
  const resolvedParams = await params;
  
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/digital-marketing-agency-usa#service`,
        "name": "Digital Marketing Agency",
        "description": "Comprehensive digital marketing services including social media marketing, content marketing, and online advertising",
        "provider": {
          "@type": "Organization",
          "@id": "https://mybrmai.com/#organization",
          "name": "BRM AI",
          "url": "https://mybrmai.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressRegion": "USA"
          }
        },
        "serviceType": "Digital Marketing",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Marketing",
                "description": "Professional social media marketing and management services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Content Marketing",
                "description": "Strategic content creation and marketing services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "PPC Advertising",
                "description": "Pay-per-click advertising campaign management"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/digital-marketing-agency-usa#webpage`,
        "url": `https://mybrmai.com/${resolvedParams.locale}/digital-marketing-agency-usa`,
        "name": "Digital Marketing Agency Near Me",
        "isPartOf": {
          "@id": "https://mybrmai.com/#website"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `https://mybrmai.com/${resolvedParams.locale}`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Digital Marketing Agency",
              "item": `https://mybrmai.com/${resolvedParams.locale}/digital-marketing-agency-usa`
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="digital-marketing-agency-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaOrgData),
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
              <Link 
                href={`/${resolvedParams.locale}#contact`} 
                className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all text-sm"
              >
                Book a Free Consultation
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-32 pb-24 px-8 md:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm text-gray-500">
              <Link href={`/${resolvedParams.locale}`} className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">→</span>
              <span>Digital Marketing Agency</span>
            </nav>

            {/* Hero Section */}
            <section className="mb-20">
              <h1 className="text-4xl md:text-6xl font-normal mb-8 uppercase tracking-wider">
                Digital Marketing Agency Near Me
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Partner with the leading digital marketing agency near you. Our expert team specializes in 
                social media marketing, content marketing services, and data-driven strategies that deliver 
                measurable results for businesses across the USA.
              </p>
              <Link 
                href={`/${resolvedParams.locale}#contact`}
                className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
              >
                Book a Free Consultation
              </Link>
            </section>

            {/* Services Overview */}
            <section className="mb-20">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Our Digital Marketing Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Social Media Marketing</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Comprehensive social media marketing agency services to build your brand presence and engage your audience.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Facebook & Instagram management</li>
                    <li>• LinkedIn B2B marketing</li>
                    <li>• Twitter & TikTok strategy</li>
                    <li>• Social media advertising</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Content Marketing Services</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Strategic content marketing services that attract, engage, and convert your target audience.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Blog content creation</li>
                    <li>• Video marketing</li>
                    <li>• Email marketing campaigns</li>
                    <li>• Content strategy development</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Search Engine Marketing</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Drive targeted traffic with our comprehensive search engine marketing and optimization services.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Google Ads management</li>
                    <li>• SEO optimization</li>
                    <li>• Keyword research & strategy</li>
                    <li>• Conversion tracking</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">PPC Advertising</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Maximize your ROI with expertly managed pay-per-click advertising campaigns across all platforms.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Google Ads optimization</li>
                    <li>• Facebook advertising</li>
                    <li>• LinkedIn ads management</li>
                    <li>• Campaign performance tracking</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Marketing Analytics</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Data-driven insights and comprehensive analytics to measure and optimize your marketing performance.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Performance dashboards</li>
                    <li>• ROI tracking & reporting</li>
                    <li>• Customer journey analysis</li>
                    <li>• Marketing attribution</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Brand Development</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Build a strong brand identity with our comprehensive brand development and positioning services.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Brand strategy development</li>
                    <li>• Visual identity design</li>
                    <li>• Brand messaging</li>
                    <li>• Reputation management</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Results Slider */}
            <section className="mb-20 border-t border-gray-900 pt-16">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Proven Results for Our Clients</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-800 p-8 text-center">
                  <div className="text-4xl font-bold mb-4 text-white">450%</div>
                  <h3 className="text-lg mb-2 font-medium">Increase in Lead Generation</h3>
                  <p className="text-gray-400 text-sm">E-commerce client achieved 450% increase in qualified leads within 6 months</p>
                </div>

                <div className="border border-gray-800 p-8 text-center">
                  <div className="text-4xl font-bold mb-4 text-white">$2.8M</div>
                  <h3 className="text-lg mb-2 font-medium">Revenue Generated</h3>
                  <p className="text-gray-400 text-sm">B2B client generated $2.8M in new revenue through our digital marketing campaigns</p>
                </div>

                <div className="border border-gray-800 p-8 text-center">
                  <div className="text-4xl font-bold mb-4 text-white">85%</div>
                  <h3 className="text-lg mb-2 font-medium">Reduction in Cost Per Lead</h3>
                  <p className="text-gray-400 text-sm">SaaS startup reduced cost per lead by 85% with optimized PPC campaigns</p>
                </div>
              </div>
            </section>

            {/* Location Map Section */}
            <section className="mb-20">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Digital Marketing Agency Near You</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl mb-6 font-medium">Serving Businesses Across the USA</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    As a leading digital marketing agency, we serve businesses across the United States with 
                    localized strategies and nationwide reach. Our team understands the unique challenges and 
                    opportunities in different markets.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-gray-400">
                    <div>
                      <h4 className="font-medium text-white mb-2">Major Cities We Serve:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• New York, NY</li>
                        <li>• Los Angeles, CA</li>
                        <li>• Chicago, IL</li>
                        <li>• Houston, TX</li>
                        <li>• Phoenix, AZ</li>
                        <li>• Philadelphia, PA</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">And Many More:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• San Antonio, TX</li>
                        <li>• San Diego, CA</li>
                        <li>• Dallas, TX</li>
                        <li>• San Jose, CA</li>
                        <li>• Austin, TX</li>
                        <li>• Jacksonville, FL</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-800 p-8">
                  <h3 className="text-xl mb-4 font-medium">Why Choose a Local Digital Marketing Partner?</h3>
                  <ul className="text-gray-400 space-y-3">
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Local Market Knowledge:</strong> Deep understanding of regional markets and customer behavior</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Time Zone Alignment:</strong> Real-time communication and support during your business hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Cultural Relevance:</strong> Marketing messages that resonate with your local audience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Compliance Expertise:</strong> Knowledge of local regulations and advertising standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Case Study */}
            <section className="mb-20 border-t border-gray-900 pt-16">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Client Success Story</h2>
              <div className="border border-gray-800 p-8">
                <h3 className="text-2xl mb-6 font-medium">Local Restaurant Chain: 300% Revenue Growth</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg mb-4 font-medium text-white">Challenge</h4>
                    <p className="text-gray-400 mb-6">
                      A regional restaurant chain with 12 locations was struggling with declining foot traffic 
                      and low online visibility in competitive local markets.
                    </p>
                    
                    <h4 className="text-lg mb-4 font-medium text-white">Our Strategy</h4>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Local SEO optimization for all locations</li>
                      <li>• Targeted social media campaigns</li>
                      <li>• Google Ads with location extensions</li>
                      <li>• Influencer partnerships</li>
                      <li>• Customer review management</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-4 font-medium text-white">Results in 12 Months</h4>
                    <ul className="text-gray-400 space-y-3">
                      <li>• <strong className="text-white">300% increase</strong> in online orders</li>
                      <li>• <strong className="text-white">250% growth</strong> in social media following</li>
                      <li>• <strong className="text-white">180% boost</strong> in foot traffic</li>
                      <li>• <strong className="text-white">400% improvement</strong> in local search rankings</li>
                      <li>• <strong className="text-white">$1.5M additional</strong> annual revenue</li>
                    </ul>
                    
                    <div className="mt-6 p-4 border border-gray-700">
                      <p className="text-gray-400 italic">
                        "BRM AI transformed our digital presence completely. We went from struggling to compete 
                        to dominating our local markets. Outstanding results!"
                      </p>
                      <div className="mt-2 text-sm">
                        <div className="font-medium">Maria Rodriguez</div>
                        <div className="text-gray-500">Marketing Director, Fresh Bites Restaurant Group</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-16 border border-gray-800 mb-16">
              <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Grow Your Business?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Partner with the digital marketing agency near you that delivers real results. 
                Get a free marketing audit and custom strategy proposal today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={`/${resolvedParams.locale}#contact`}
                  className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
                >
                  Book a Free Consultation
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/local-seo-services`}
                  className="px-8 py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm"
                >
                  Explore Local SEO
                </Link>
              </div>
            </section>

            {/* Internal Links */}
            <section className="mt-16">
              <h2 className="text-2xl mb-8 uppercase tracking-wider">Related Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href={`/${resolvedParams.locale}/local-seo-services`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Local SEO Services</h3>
                  <p className="text-gray-400 text-sm">Dominate local search results and attract nearby customers</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/web-development-company`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Web Development</h3>
                  <p className="text-gray-400 text-sm">Professional websites optimized for digital marketing</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/ai-automation-services`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Marketing Automation</h3>
                  <p className="text-gray-400 text-sm">AI-powered marketing automation to scale your campaigns</p>
                </Link>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-8 md:px-12 border-t border-gray-900">
          <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} BRM AI</p>
            <Link href={`/${resolvedParams.locale}`} className="hover:text-white transition-colors">
              Back to Home
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
} 