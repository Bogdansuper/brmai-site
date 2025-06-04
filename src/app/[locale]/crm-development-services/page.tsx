import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/crm-development-services`;
  
  const getLocalizedContent = () => {
    switch(resolvedParams.locale) {
      case 'es':
        return {
          title: 'Desarrollo de Software CRM Personalizado | Servicios de Integración CRM',
          description: 'Desarrollo de software CRM personalizado y servicios de integración CRM. CRM para pequeñas empresas en USA con soluciones a medida.',
          keywords: [
            'desarrollo de software CRM personalizado',
            'servicios de integración CRM',
            'CRM para pequeñas empresas USA'
          ]
        };
      case 'ca':
        return {
          title: 'Desenvolupament de Software CRM Personalitzat | Serveis d\'Integració CRM',
          description: 'Desenvolupament de software CRM personalitzat i serveis d\'integració CRM. CRM per a petites empreses amb solucions a mida.',
          keywords: [
            'desenvolupament de software CRM personalitzat',
            'serveis d\'integració CRM',
            'CRM per a petites empreses'
          ]
        };
      case 'uk':
        return {
          title: 'Розробка Спеціального ПЗ CRM | Послуги Інтеграції CRM',
          description: 'Розробка спеціального програмного забезпечення CRM та послуги інтеграції CRM. CRM для малого бізнесу з індивідуальними рішеннями.',
          keywords: [
            'розробка спеціального ПЗ CRM',
            'послуги інтеграції CRM',
            'CRM для малого бізнесу'
          ]
        };
      case 'ru':
        return {
          title: 'Разработка Специального ПО CRM | Услуги Интеграции CRM',
          description: 'Разработка специального программного обеспечения CRM и услуги интеграции CRM. CRM для малого бизнеса с индивидуальными решениями.',
          keywords: [
            'разработка специального ПО CRM',
            'услуги интеграции CRM',
            'CRM для малого бизнеса'
          ]
        };
      default:
        return {
          title: 'Custom CRM Software Development | CRM Integration Services USA',
          description: 'Expert custom CRM software development and CRM integration services. CRM for small business USA with tailored solutions and seamless integrations.',
          keywords: [
            'custom CRM software development',
            'CRM integration services',
            'CRM for small business USA'
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
        'en': `${baseUrl}/en/crm-development-services`,
        'uk': `${baseUrl}/uk/crm-development-services`,
        'es': `${baseUrl}/es/crm-development-services`,
        'ca': `${baseUrl}/ca/crm-development-services`,
        'ru': `${baseUrl}/ru/crm-development-services`,
        'x-default': `${baseUrl}/en/crm-development-services`
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
      siteName: 'BRM AI - Custom CRM Development',
      images: [
        {
          url: `${baseUrl}/crm-development-services.png`,
          width: 1200,
          height: 630,
          alt: 'Custom CRM Software Development Services',
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      site: '@BRMAI_tech',
      creator: '@BRMAI_tech',
      images: [`${baseUrl}/crm-development-services.png`],
    },
  };
}

export default async function CRMDevelopmentServicesPage({ params }: Props) {
  const resolvedParams = await params;
  
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/crm-development-services#service`,
        "name": "Custom CRM Software Development",
        "description": "Professional custom CRM software development services with integration capabilities and tailored solutions for businesses",
        "provider": {
          "@type": "Organization",
          "@id": "https://mybrmai.com/#organization",
          "name": "BRM AI",
          "url": "https://mybrmai.com"
        },
        "serviceType": "CRM Development",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "CRM Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom CRM Development",
                "description": "Tailored CRM software development from scratch"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "CRM Integration Services",
                "description": "Integration of CRM systems with existing business tools"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "CRM Migration Services",
                "description": "Migration from existing CRM systems to new platforms"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/crm-development-services#webpage`,
        "url": `https://mybrmai.com/${resolvedParams.locale}/crm-development-services`,
        "name": "Custom CRM Software Development Services",
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
              "name": "CRM Development Services",
              "item": `https://mybrmai.com/${resolvedParams.locale}/crm-development-services`
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="crm-development-services-schema"
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
              <span>CRM Development Services</span>
            </nav>

            {/* Hero Section */}
            <section className="mb-20">
              <h1 className="text-4xl md:text-6xl font-normal mb-8 uppercase tracking-wider">
                Custom CRM Software Development
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Transform your customer relationships with custom CRM software development. 
                Our CRM integration services help small businesses in USA streamline operations, 
                boost sales, and improve customer satisfaction.
              </p>
              <Link 
                href={`/${resolvedParams.locale}#contact`}
                className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
              >
                Book a Free Consultation
              </Link>
            </section>

            {/* Custom vs Off-the-Shelf Comparison */}
            <section className="mb-20">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Custom CRM vs Off-the-Shelf Solutions</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="border border-green-500/30 p-8 bg-green-500/5">
                  <h3 className="text-2xl mb-6 font-medium text-green-400">Custom CRM Development</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>100% tailored to your business processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>No monthly subscription fees</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>Complete data ownership and control</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>Unlimited users and customization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>Seamless integration with existing tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>Scalable and future-proof architecture</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-red-500/30 p-8 bg-red-500/5">
                  <h3 className="text-2xl mb-6 font-medium text-red-400">Off-the-Shelf CRM</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span>Generic features that may not fit your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span>Ongoing monthly subscription costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span>Limited data access and vendor lock-in</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span>Per-user licensing fees can be expensive</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span>Limited integration capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span>Dependent on vendor's update schedule</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Services Grid */}
            <section className="mb-20">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Our CRM Development Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Custom CRM Development</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Build a CRM system from scratch that perfectly matches your business processes and workflows.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Requirement analysis & design</li>
                    <li>• Custom feature development</li>
                    <li>• User interface design</li>
                    <li>• Database architecture</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">CRM Integration Services</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Seamlessly integrate your CRM with existing business tools and third-party applications.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Email marketing integration</li>
                    <li>• Accounting software sync</li>
                    <li>• E-commerce platform connection</li>
                    <li>• API development & integration</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Sales Pipeline Management</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Advanced sales pipeline features to track leads, opportunities, and close more deals.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Lead scoring & qualification</li>
                    <li>• Deal tracking & forecasting</li>
                    <li>• Automated follow-up reminders</li>
                    <li>• Sales performance analytics</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Customer Communication Hub</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Centralized communication management across all customer touchpoints and channels.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Email template management</li>
                    <li>• SMS integration</li>
                    <li>• Communication history tracking</li>
                    <li>• Automated messaging workflows</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Reporting & Analytics</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Comprehensive reporting and analytics to gain insights into your sales and customer data.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Custom dashboard creation</li>
                    <li>• Real-time data visualization</li>
                    <li>• Performance metrics tracking</li>
                    <li>• Automated report generation</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Mobile CRM Application</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Mobile-responsive CRM access to manage your customer relationships on the go.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Mobile-optimized interface</li>
                    <li>• Offline data synchronization</li>
                    <li>• Location-based features</li>
                    <li>• Push notifications</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Case Study */}
            <section className="mb-20 border-t border-gray-900 pt-16">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">CRM Development Case Study</h2>
              <div className="border border-gray-800 p-8">
                <h3 className="text-2xl mb-6 font-medium">Manufacturing Company CRM: 300% Sales Increase</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg mb-4 font-medium text-white">Challenge</h4>
                    <p className="text-gray-400 mb-6">
                      A mid-sized manufacturing company was struggling with scattered customer data across 
                      multiple spreadsheets and systems, leading to lost leads and poor customer service.
                    </p>
                    
                    <h4 className="text-lg mb-4 font-medium text-white">Custom CRM Solution</h4>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Unified customer database</li>
                      <li>• Automated lead distribution</li>
                      <li>• Integration with existing ERP</li>
                      <li>• Custom quotation system</li>
                      <li>• Real-time inventory checks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-4 font-medium text-white">Results Achieved</h4>
                    <ul className="text-gray-400 space-y-3">
                      <li>• <strong className="text-white">300% increase</strong> in sales within 12 months</li>
                      <li>• <strong className="text-white">85% reduction</strong> in response time to leads</li>
                      <li>• <strong className="text-white">$1.2M annual savings</strong> in operational costs</li>
                      <li>• <strong className="text-white">95% improvement</strong> in customer satisfaction</li>
                      <li>• <strong className="text-white">50% faster</strong> quote generation process</li>
                    </ul>
                    
                    <div className="mt-6 p-4 border border-gray-700">
                      <p className="text-gray-400 italic">
                        "The custom CRM transformed our business. We now have complete visibility into our 
                        sales pipeline and our team is more productive than ever."
                      </p>
                      <div className="mt-2 text-sm">
                        <div className="font-medium">Robert Johnson</div>
                        <div className="text-gray-500">Sales Director</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CRM Features for Small Business */}
            <section className="mb-20">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">CRM for Small Business USA</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl mb-6 font-medium">Essential Features</h3>
                  <ul className="text-gray-400 space-y-3">
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Contact Management:</strong> Centralized customer database with detailed profiles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Lead Tracking:</strong> Automated lead capture and scoring system</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Task Management:</strong> Automated reminders and follow-up scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Email Integration:</strong> Seamless email communication tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Sales Reporting:</strong> Real-time sales performance dashboards</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl mb-6 font-medium">Small Business Benefits</h3>
                  <ul className="text-gray-400 space-y-3">
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Cost-Effective:</strong> No monthly fees, one-time investment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Scalable Growth:</strong> Grows with your business needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Easy Training:</strong> Intuitive interface designed for your team</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Data Security:</strong> Your data stays on your servers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Local Support:</strong> Dedicated support from USA-based team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-16 border border-gray-800 mb-16">
              <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Build Your Custom CRM?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Transform your customer relationships with a custom CRM solution designed specifically for your business. 
                Get a free consultation and project estimate today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={`/${resolvedParams.locale}#contact`}
                  className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
                >
                  Book a Free Consultation
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/ai-automation-services`}
                  className="px-8 py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm"
                >
                  Explore AI Integration
                </Link>
              </div>
            </section>

            {/* Internal Links */}
            <section className="mt-16">
              <h2 className="text-2xl mb-8 uppercase tracking-wider">Related Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href={`/${resolvedParams.locale}/ai-automation-services`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">AI Automation Services</h3>
                  <p className="text-gray-400 text-sm">Enhance your CRM with AI-powered automation features</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/web-development-company`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Web Development</h3>
                  <p className="text-gray-400 text-sm">Professional websites integrated with your CRM system</p>
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