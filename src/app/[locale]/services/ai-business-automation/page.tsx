import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Script from 'next/script';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/services/ai-business-automation`;
  
  const getLocalizedContent = () => {
    switch(resolvedParams.locale) {
      case 'es':
        return {
          title: 'Automatización de Procesos Empresariales con IA | Servicios BRM AI',
          description: 'Servicios profesionales de automatización de procesos empresariales con inteligencia artificial. Mejore la eficiencia de su empresa con nuestras soluciones de automatización.',
          keywords: [
            'automatización de procesos empresariales',
            'automatización con IA',
            'servicios de automatización empresarial',
            'inteligencia artificial para empresas',
            'consultoría en automatización'
          ]
        };
      case 'ca':
        return {
          title: 'Automatització de Processos Empresarials amb IA | Serveis BRM AI',
          description: 'Serveis professionals d\'automatització de processos empresarials amb intel·ligència artificial. Milloreu l\'eficiència de la vostra empresa amb les nostres solucions.',
          keywords: [
            'automatització de processos empresarials',
            'automatització amb IA',
            'serveis d\'automatització empresarial',
            'intel·ligència artificial per empreses',
            'consultoria en automatització'
          ]
        };
      case 'uk':
        return {
          title: 'Автоматизація Бізнес-Процесів з ШІ | Послуги BRM AI',
          description: 'Професійні послуги автоматизації бізнес-процесів з штучним інтелектом. Підвищте ефективність вашого бізнесу з нашими рішеннями автоматизації.',
          keywords: [
            'автоматизація бізнес-процесів',
            'автоматизація з ШІ',
            'послуги автоматизації бізнесу',
            'штучний інтелект для бізнесу',
            'консалтинг з автоматизації'
          ]
        };
      case 'ru':
        return {
          title: 'Автоматизация Бизнес-Процессов с ИИ | Услуги BRM AI',
          description: 'Профессиональные услуги автоматизации бизнес-процессов с искусственным интеллектом. Повысьте эффективность вашего бизнеса с нашими решениями.',
          keywords: [
            'автоматизация бизнес-процессов',
            'автоматизация с ИИ',
            'услуги автоматизации бизнеса',
            'искусственный интеллект для бизнеса',
            'консалтинг по автоматизации'
          ]
        };
      default:
        return {
          title: 'AI Business Process Automation Services | BRM AI',
          description: 'Professional AI-powered business process automation services. Transform your operations with our intelligent automation solutions and increase efficiency.',
          keywords: [
            'ai business process automation',
            'business process automation services',
            'ai automation consulting',
            'business automation solutions',
            'artificial intelligence business process management',
            'bpm ai services',
            'process automation consultancy'
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
        'en': `${baseUrl}/en/services/ai-business-automation`,
        'uk': `${baseUrl}/uk/services/ai-business-automation`,
        'es': `${baseUrl}/es/services/ai-business-automation`,
        'ca': `${baseUrl}/ca/services/ai-business-automation`,
        'ru': `${baseUrl}/ru/services/ai-business-automation`,
        'x-default': `${baseUrl}/en/services/ai-business-automation`
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
      images: [
        {
          url: `${baseUrl}/ai-automation-services.png`,
          width: 1200,
          height: 630,
          alt: 'AI Business Process Automation Services by BRM AI',
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      site: '@BRMAI_tech',
      creator: '@BRMAI_tech',
      images: [`${baseUrl}/ai-automation-services.png`],
    },
    
    other: {
      'revisit-after': '14 days',
      'rating': 'general',
      'distribution': 'global',
    },
  };
}

export default async function AIBusinessAutomationPage({ params }: Props) {
  const resolvedParams = await params;
  
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
    "@type": "Service",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/services/ai-business-automation#service`,
        "name": "AI Business Process Automation",
        "description": "Professional AI-powered business process automation services to transform operations and increase efficiency",
    "provider": {
      "@type": "Organization",
          "@id": "https://mybrmai.com/#organization",
          "name": "BRM AI",
          "url": "https://mybrmai.com"
        },
        "serviceType": "Business Process Automation",
        "areaServed": {
          "@type": "Country",
          "name": "Worldwide"
        },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
                "name": "Business Process Analysis",
                "description": "Comprehensive analysis of current business processes to identify automation opportunities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
                "name": "AI Implementation",
                "description": "Custom AI solution development and implementation for business process automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
                "name": "Process Optimization",
                "description": "Continuous improvement and optimization of automated business processes"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/services/ai-business-automation#webpage`,
        "url": `https://mybrmai.com/${resolvedParams.locale}/services/ai-business-automation`,
        "name": "AI Business Process Automation Services",
        "isPartOf": {
          "@id": "https://mybrmai.com/#website"
        },
        "about": {
          "@id": `https://mybrmai.com/${resolvedParams.locale}/services/ai-business-automation#service`
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
              "name": "Services",
              "item": `https://mybrmai.com/${resolvedParams.locale}/services`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "AI Business Automation",
              "item": `https://mybrmai.com/${resolvedParams.locale}/services/ai-business-automation`
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="ai-automation-schema"
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
                Get Started
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
              <span>Services</span>
              <span className="mx-2">→</span>
              <span>AI Business Automation</span>
            </nav>

            {/* Hero Section */}
            <section className="mb-20">
              <h1 className="text-4xl md:text-6xl font-normal mb-8 uppercase tracking-wider">
                AI Business Process
                <br />
                Automation Services
            </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Transform your business operations with our comprehensive AI-powered automation solutions. 
                Increase efficiency, reduce costs, and accelerate growth through intelligent process automation.
            </p>
            <Link 
                href={`/${resolvedParams.locale}#contact`}
                className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
            >
                Start Your Automation Journey
            </Link>
        </section>

            {/* Services Grid */}
            <section className="mb-20">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Our AI Automation Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Process Analysis & Strategy</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Comprehensive assessment of your current business processes to identify the best automation opportunities and create a strategic roadmap.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Business process mapping</li>
                    <li>• ROI analysis</li>
                    <li>• Automation roadmap</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">AI Implementation</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Custom development and deployment of AI-powered automation solutions tailored to your specific business requirements.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Custom AI development</li>
                    <li>• System integration</li>
                    <li>• Testing & validation</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Ongoing Optimization</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Continuous monitoring, maintenance, and improvement of your automated processes to ensure maximum efficiency and performance.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Performance monitoring</li>
                    <li>• Process optimization</li>
                    <li>• Support & maintenance</li>
                  </ul>
                </div>

              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Custom CRM Development</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Tailored Customer Relationship Management systems with built-in automation features to streamline your sales and customer service processes.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Custom CRM design</li>
                    <li>• Workflow automation</li>
                    <li>• Integration capabilities</li>
                  </ul>
              </div>

              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Document Processing</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Intelligent document processing and data extraction using AI to automate paperwork, invoicing, and data entry tasks.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• OCR & data extraction</li>
                    <li>• Document classification</li>
                    <li>• Automated workflows</li>
                  </ul>
              </div>

              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Training & Support</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Comprehensive training programs and ongoing support to ensure your team can effectively use and maintain the automated systems.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Team training</li>
                    <li>• Documentation</li>
                    <li>• 24/7 support</li>
                  </ul>
            </div>
          </div>
        </section>

            {/* Benefits Section */}
            <section className="mb-20 border-t border-gray-900 pt-16">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Why Choose AI Business Automation?</h2>
              <div className="grid md:grid-cols-2 gap-12">
              <div>
                  <h3 className="text-xl mb-6 font-medium">Key Benefits</h3>
                  <ul className="space-y-4 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Increased Efficiency:</strong> Automate repetitive tasks and reduce manual errors by up to 80%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Cost Reduction:</strong> Lower operational costs through intelligent process optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Scalability:</strong> Easily scale operations without proportional increase in workforce</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Data-Driven Insights:</strong> Gain valuable analytics and reporting capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span><strong className="text-white">Competitive Advantage:</strong> Stay ahead with cutting-edge AI technology</span>
                    </li>
                </ul>
              </div>
              <div>
                  <h3 className="text-xl mb-6 font-medium">Industries We Serve</h3>
                  <div className="grid grid-cols-2 gap-4 text-gray-400">
                    <div>• E-commerce</div>
                    <div>• Healthcare</div>
                    <div>• Finance</div>
                    <div>• Manufacturing</div>
                    <div>• Real Estate</div>
                    <div>• Professional Services</div>
                    <div>• Retail</div>
                    <div>• Technology</div>
            </div>
          </div>
          </div>
        </section>

        {/* CTA Section */}
            <section className="text-center py-16 border border-gray-800">
              <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Automate Your Business?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and discover how AI business process automation can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                  href={`/${resolvedParams.locale}#contact`}
                  className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/blog`}
                  className="px-8 py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm"
                >
                  Learn More in Our Blog
                </Link>
              </div>
            </section>

            {/* Internal Links */}
            <section className="mt-16">
              <h2 className="text-2xl mb-8 uppercase tracking-wider">Related Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href={`/${resolvedParams.locale}/blog/business-process-automation-guide`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Business Process Automation Guide</h3>
                  <p className="text-gray-400 text-sm">Complete guide to implementing automation in your business</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/blog/ai-business-automation-benefits`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Benefits of AI Automation</h3>
                  <p className="text-gray-400 text-sm">Discover the top advantages of AI-powered automation</p>
              </Link>
              <Link 
                  href={`/${resolvedParams.locale}/privacy-policy`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
              >
                  <h3 className="text-lg mb-2 font-medium">Privacy Policy</h3>
                  <p className="text-gray-400 text-sm">Learn about our data protection practices</p>
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