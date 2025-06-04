import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/local-seo-services`;
  
  const getLocalizedContent = () => {
    switch(resolvedParams.locale) {
      case 'es':
        return {
          title: 'SEO Local para Pequeñas Empresas | Paquetes de SEO para Negocios',
          description: 'Servicios de SEO local para pequeñas empresas. Paquetes de SEO para negocios pequeños con resultados garantizados y precios competitivos.',
          keywords: [
            'SEO local para pequeñas empresas',
            'servicios de SEO para pequeñas empresas',
            'paquetes de SEO para negocios pequeños'
          ]
        };
      case 'ca':
        return {
          title: 'SEO Local per a Petites Empreses | Paquets de SEO per a Negocis',
          description: 'Serveis de SEO local per a petites empreses. Paquets de SEO per a negocis petits amb resultats garantits i preus competitius.',
          keywords: [
            'SEO local per a petites empreses',
            'serveis de SEO per a petites empreses',
            'paquets de SEO per a negocis petits'
          ]
        };
      case 'uk':
        return {
          title: 'Локальне SEO для Малого Бізнесу | Пакети SEO для Підприємств',
          description: 'Послуги локального SEO для малого бізнесу. Пакети SEO для малих підприємств з гарантованими результатами.',
          keywords: [
            'локальне SEO для малого бізнесу',
            'послуги SEO для малого бізнесу',
            'пакети SEO для малих підприємств'
          ]
        };
      case 'ru':
        return {
          title: 'Локальное SEO для Малого Бизнеса | Пакеты SEO для Предприятий',
          description: 'Услуги локального SEO для малого бизнеса. Пакеты SEO для малых предприятий с гарантированными результатами.',
          keywords: [
            'локальное SEO для малого бизнеса',
            'услуги SEO для малого бизнеса',
            'пакеты SEO для малых предприятий'
          ]
        };
      default:
        return {
          title: 'Local SEO for Small Businesses | SEO Services & Packages',
          description: 'Professional local SEO for small businesses. Expert SEO services for small business with proven results. Small business SEO packages that deliver.',
          keywords: [
            'local SEO for small businesses',
            'SEO services for small business',
            'small business SEO packages'
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
        'en': `${baseUrl}/en/local-seo-services`,
        'uk': `${baseUrl}/uk/local-seo-services`,
        'es': `${baseUrl}/es/local-seo-services`,
        'ca': `${baseUrl}/ca/local-seo-services`,
        'ru': `${baseUrl}/ru/local-seo-services`,
        'x-default': `${baseUrl}/en/local-seo-services`
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
      siteName: 'BRM AI - Local SEO Services',
      images: [
        {
          url: `${baseUrl}/local-seo-services.png`,
          width: 1200,
          height: 630,
          alt: 'Local SEO Services for Small Businesses',
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      site: '@BRMAI_tech',
      creator: '@BRMAI_tech',
      images: [`${baseUrl}/local-seo-services.png`],
    },
  };
}

export default async function LocalSEOServicesPage({ params }: Props) {
  const resolvedParams = await params;
  
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/local-seo-services#service`,
        "name": "Local SEO for Small Businesses",
        "description": "Professional local SEO services designed specifically for small businesses to improve local search rankings and attract nearby customers",
        "provider": {
          "@type": "Organization",
          "@id": "https://mybrmai.com/#organization",
          "name": "BRM AI",
          "url": "https://mybrmai.com"
        },
        "serviceType": "Local SEO",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Local SEO Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Business Profile Optimization",
                "description": "Complete optimization of Google Business Profile for maximum local visibility"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local Citation Building",
                "description": "Building consistent business citations across local directories"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local Keyword Optimization",
                "description": "Targeting location-specific keywords for better local search rankings"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take to see local SEO results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local SEO results typically begin showing within 3-6 months, with significant improvements visible in 6-12 months. Google Business Profile optimization can show results in 2-4 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "What's included in your local SEO packages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our packages include Google Business Profile optimization, local citation building, on-page SEO, local keyword research, review management, and monthly reporting."
            }
          },
          {
            "@type": "Question",
            "name": "Do you guarantee first page rankings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While we cannot guarantee specific rankings due to Google's changing algorithms, we guarantee to improve your local search visibility and provide detailed reporting on progress."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/local-seo-services#webpage`,
        "url": `https://mybrmai.com/${resolvedParams.locale}/local-seo-services`,
        "name": "Local SEO Services for Small Businesses",
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
              "name": "Local SEO Services",
              "item": `https://mybrmai.com/${resolvedParams.locale}/local-seo-services`
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="local-seo-services-schema"
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
              <span>Local SEO Services</span>
            </nav>

            {/* Hero Section */}
            <section className="mb-20">
              <h1 className="text-4xl md:text-6xl font-normal mb-8 uppercase tracking-wider">
                Local SEO for Small Businesses
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Dominate local search results with our expert local SEO services for small business. 
                Our proven small business SEO packages help you attract nearby customers and grow your business online.
              </p>
              <Link 
                href={`/${resolvedParams.locale}#contact`}
                className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
              >
                Book a Free Consultation
              </Link>
            </section>

            {/* Pricing Table */}
            <section className="mb-20">
              <h2 className="text-3xl mb-12 uppercase tracking-wider text-center">Small Business SEO Packages</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-800 p-8 text-center">
                  <h3 className="text-2xl mb-4 font-medium">Local Starter</h3>
                  <div className="text-3xl mb-6 font-bold">$599<span className="text-lg font-normal">/month</span></div>
                  <ul className="text-gray-400 space-y-3 mb-8 text-left">
                    <li>• Google Business Profile optimization</li>
                    <li>• 15 local citations</li>
                    <li>• Basic on-page SEO (5 pages)</li>
                    <li>• Local keyword research</li>
                    <li>• Monthly reporting</li>
                    <li>• Review monitoring</li>
                  </ul>
                  <Link 
                    href={`/${resolvedParams.locale}#contact`}
                    className="block w-full py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm text-center"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="border border-white p-8 text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 text-sm font-medium">
                    MOST POPULAR
                  </div>
                  <h3 className="text-2xl mb-4 font-medium">Local Pro</h3>
                  <div className="text-3xl mb-6 font-bold">$899<span className="text-lg font-normal">/month</span></div>
                  <ul className="text-gray-400 space-y-3 mb-8 text-left">
                    <li>• Everything in Local Starter</li>
                    <li>• 30 local citations</li>
                    <li>• Advanced on-page SEO (10 pages)</li>
                    <li>• Local content creation</li>
                    <li>• Review response management</li>
                    <li>• Competitor analysis</li>
                    <li>• Local link building</li>
                  </ul>
                  <Link 
                    href={`/${resolvedParams.locale}#contact`}
                    className="block w-full py-3 bg-white text-black hover:bg-gray-200 transition-all uppercase tracking-wider text-sm text-center"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="border border-gray-800 p-8 text-center">
                  <h3 className="text-2xl mb-4 font-medium">Local Enterprise</h3>
                  <div className="text-3xl mb-6 font-bold">$1,299<span className="text-lg font-normal">/month</span></div>
                  <ul className="text-gray-400 space-y-3 mb-8 text-left">
                    <li>• Everything in Local Pro</li>
                    <li>• 50+ local citations</li>
                    <li>• Technical SEO audit & fixes</li>
                    <li>• Multi-location optimization</li>
                    <li>• Advanced analytics setup</li>
                    <li>• Priority support</li>
                    <li>• Quarterly strategy calls</li>
                  </ul>
                  <Link 
                    href={`/${resolvedParams.locale}#contact`}
                    className="block w-full py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </section>

            {/* Services Overview */}
            <section className="mb-20 border-t border-gray-900 pt-16">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Our Local SEO Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Google Business Profile</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Complete optimization of your Google Business Profile to maximize local search visibility and attract nearby customers.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Profile setup & verification</li>
                    <li>• Category optimization</li>
                    <li>• Photo & video optimization</li>
                    <li>• Q&A management</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Local Citation Building</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Build consistent business citations across high-authority local directories to improve local search rankings.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• NAP consistency audit</li>
                    <li>• Directory submissions</li>
                    <li>• Citation cleanup</li>
                    <li>• Industry-specific directories</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Local Keyword Research</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Identify and target location-specific keywords that your local customers are searching for.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Local keyword analysis</li>
                    <li>• Competitor keyword research</li>
                    <li>• Search volume analysis</li>
                    <li>• Keyword difficulty assessment</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">On-Page SEO Optimization</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Optimize your website content and structure for both users and search engines to improve local rankings.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Title tag optimization</li>
                    <li>• Meta description writing</li>
                    <li>• Local schema markup</li>
                    <li>• Internal linking strategy</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Review Management</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Manage and respond to customer reviews to build trust and improve your local search reputation.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Review monitoring</li>
                    <li>• Professional responses</li>
                    <li>• Review acquisition strategies</li>
                    <li>• Reputation management</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Local Link Building</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Acquire high-quality local backlinks to increase your website's authority and local search rankings.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Local partnership outreach</li>
                    <li>• Chamber of Commerce listings</li>
                    <li>• Local media coverage</li>
                    <li>• Event sponsorship opportunities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="mb-20">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Proven Local SEO Results</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-800 p-8 text-center">
                  <div className="text-4xl font-bold mb-4 text-white">350%</div>
                  <h3 className="text-lg mb-2 font-medium">Increase in Local Traffic</h3>
                  <p className="text-gray-400 text-sm">Average increase in local organic traffic within 6 months</p>
                </div>

                <div className="border border-gray-800 p-8 text-center">
                  <div className="text-4xl font-bold mb-4 text-white">85%</div>
                  <h3 className="text-lg mb-2 font-medium">First Page Rankings</h3>
                  <p className="text-gray-400 text-sm">Percentage of targeted local keywords ranking on first page</p>
                </div>

                <div className="border border-gray-800 p-8 text-center">
                  <div className="text-4xl font-bold mb-4 text-white">240%</div>
                  <h3 className="text-lg mb-2 font-medium">More Phone Calls</h3>
                  <p className="text-gray-400 text-sm">Average increase in phone calls from local search</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-20 border-t border-gray-900 pt-16">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div className="border-b border-gray-800 pb-6">
                  <h3 className="text-xl mb-3 font-medium text-white">How long does it take to see local SEO results?</h3>
                  <p className="text-gray-400">
                    Local SEO results typically begin showing within 3-6 months, with significant improvements visible in 6-12 months. 
                    Google Business Profile optimization can show results in 2-4 weeks.
                  </p>
                </div>

                <div className="border-b border-gray-800 pb-6">
                  <h3 className="text-xl mb-3 font-medium text-white">What's included in your local SEO packages?</h3>
                  <p className="text-gray-400">
                    Our packages include Google Business Profile optimization, local citation building, on-page SEO, 
                    local keyword research, review management, and monthly reporting.
                  </p>
                </div>

                <div className="border-b border-gray-800 pb-6">
                  <h3 className="text-xl mb-3 font-medium text-white">Do you guarantee first page rankings?</h3>
                  <p className="text-gray-400">
                    While we cannot guarantee specific rankings due to Google's changing algorithms, we guarantee to improve 
                    your local search visibility and provide detailed reporting on progress.
                  </p>
                </div>

                <div className="border-b border-gray-800 pb-6">
                  <h3 className="text-xl mb-3 font-medium text-white">Can you help with multiple business locations?</h3>
                  <p className="text-gray-400">
                    Yes, our Local Enterprise package includes multi-location optimization. We optimize each location's 
                    Google Business Profile and create location-specific landing pages.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-16 border border-gray-800 mb-16">
              <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Dominate Local Search?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Get more local customers with our proven local SEO strategies. 
                Start with a free local SEO audit and custom strategy proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={`/${resolvedParams.locale}#contact`}
                  className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
                >
                  Book a Free Consultation
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/blog/local-seo-checklist`}
                  className="px-8 py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm"
                >
                  Free SEO Checklist
                </Link>
              </div>
            </section>

            {/* Internal Links */}
            <section className="mt-16">
              <h2 className="text-2xl mb-8 uppercase tracking-wider">Related Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href={`/${resolvedParams.locale}/digital-marketing-agency-usa`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Digital Marketing</h3>
                  <p className="text-gray-400 text-sm">Complete digital marketing strategies for local businesses</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/web-development-company`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Web Development</h3>
                  <p className="text-gray-400 text-sm">SEO-optimized websites that rank in local search</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Back to Home</h3>
                  <p className="text-gray-400 text-sm">Explore all our digital services and solutions</p>
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