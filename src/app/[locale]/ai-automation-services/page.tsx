import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/ai-automation-services`;
  
  const getLocalizedContent = () => {
    switch(resolvedParams.locale) {
      case 'es':
        return {
          title: 'Herramientas de Automatización Empresarial con IA | BRM AI',
          description: 'Descubra las mejores herramientas de automatización empresarial con IA. Automatización de marketing, bots de servicio al cliente y contabilidad.',
          keywords: [
            'herramientas de automatización empresarial con IA',
            'automatización de procesos empresariales con IA',
            'mejores plataformas de automatización con IA'
          ]
        };
      case 'ca':
        return {
          title: 'Eines d\'Automatització Empresarial amb IA | BRM AI',
          description: 'Descobriu les millors eines d\'automatització empresarial amb IA. Automatització de màrqueting, bots de servei al client i comptabilitat.',
          keywords: [
            'eines d\'automatització empresarial amb IA',
            'automatització de processos empresarials amb IA',
            'millors plataformes d\'automatització amb IA'
          ]
        };
      case 'uk':
        return {
          title: 'Інструменти Автоматизації Бізнесу з ШІ | BRM AI',
          description: 'Відкрийте найкращі інструменти автоматизації бізнесу з ШІ. Автоматизація маркетингу, боти обслуговування клієнтів та бухгалтерія.',
          keywords: [
            'інструменти автоматизації бізнесу з ШІ',
            'автоматизація бізнес-процесів з ШІ',
            'найкращі платформи автоматизації з ШІ'
          ]
        };
      case 'ru':
        return {
          title: 'Инструменты Автоматизации Бизнеса с ИИ | BRM AI',
          description: 'Откройте лучшие инструменты автоматизации бизнеса с ИИ. Автоматизация маркетинга, боты обслуживания клиентов и бухгалтерия.',
          keywords: [
            'инструменты автоматизации бизнеса с ИИ',
            'автоматизация бизнес-процессов с ИИ',
            'лучшие платформы автоматизации с ИИ'
          ]
        };
      default:
        return {
          title: 'AI Business Automation Tools | Best AI Automation Platforms',
          description: 'Discover the best AI business automation tools for marketing automation, customer service bots, and accounting & invoicing. Transform your business with AI.',
          keywords: [
            'AI business automation tools',
            'business process automation with AI',
            'best AI automation platforms for business'
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
        'en': `${baseUrl}/en/ai-automation-services`,
        'uk': `${baseUrl}/uk/ai-automation-services`,
        'es': `${baseUrl}/es/ai-automation-services`,
        'ca': `${baseUrl}/ca/ai-automation-services`,
        'ru': `${baseUrl}/ru/ai-automation-services`,
        'x-default': `${baseUrl}/en/ai-automation-services`
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
      siteName: 'BRM AI - AI Business Automation Tools',
      images: [
        {
          url: `${baseUrl}/ai-automation-tools.png`,
          width: 1200,
          height: 630,
          alt: 'AI Business Automation Tools by BRM AI',
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      site: '@BRMAI_tech',
      creator: '@BRMAI_tech',
      images: [`${baseUrl}/ai-automation-tools.png`],
    },
  };
}

export default async function AIAutomationServicesPage({ params }: Props) {
  const resolvedParams = await params;
  
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/ai-automation-services#service`,
        "name": "AI Business Automation Tools",
        "description": "Comprehensive AI business automation tools for marketing automation, customer service bots, and accounting & invoicing",
        "provider": {
          "@type": "Organization",
          "@id": "https://mybrmai.com/#organization",
          "name": "BRM AI",
          "url": "https://mybrmai.com"
        },
        "serviceType": "AI Business Automation",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Automation Tools",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Marketing Automation",
                "description": "AI-powered marketing automation tools for lead generation and customer engagement"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Customer Service Bots",
                "description": "Intelligent chatbots and customer service automation solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Accounting & Invoicing",
                "description": "Automated accounting and invoicing systems powered by AI"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/ai-automation-services#webpage`,
        "url": `https://mybrmai.com/${resolvedParams.locale}/ai-automation-services`,
        "name": "AI Business Automation Tools",
        "isPartOf": {
          "@id": "https://mybrmai.com/#website"
        },
        "about": {
          "@id": `https://mybrmai.com/${resolvedParams.locale}/ai-automation-services#service`
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
              "name": "AI Automation Services",
              "item": `https://mybrmai.com/${resolvedParams.locale}/ai-automation-services`
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="ai-automation-services-schema"
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
              <span>AI Automation Services</span>
            </nav>

            {/* Hero Section */}
            <section className="mb-20">
              <h1 className="text-4xl md:text-6xl font-normal mb-8 uppercase tracking-wider">
                AI Business Automation Tools
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Transform your business with the best AI automation platforms for business. 
                From marketing automation to customer service bots and accounting systems - 
                discover how AI business automation tools can revolutionize your operations.
              </p>
              <Link 
                href={`/${resolvedParams.locale}#contact`}
                className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
              >
                Book a Free Consultation
              </Link>
            </section>

            {/* Main Services Grid */}
            <section className="mb-20">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Marketing Automation</h2>
              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Lead Generation Automation</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Automate your lead generation process with AI-powered tools that identify, 
                    qualify, and nurture prospects automatically. Increase conversion rates while 
                    reducing manual effort.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• AI-powered lead scoring</li>
                    <li>• Automated email sequences</li>
                    <li>• Behavioral targeting</li>
                    <li>• CRM integration</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Social Media Automation</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Streamline your social media presence with intelligent automation tools. 
                    Schedule posts, engage with followers, and analyze performance across all platforms.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Content scheduling</li>
                    <li>• Engagement automation</li>
                    <li>• Performance analytics</li>
                    <li>• Multi-platform management</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl mb-12 uppercase tracking-wider">Customer Service Bots</h2>
              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Intelligent Chatbots</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Deploy AI-powered chatbots that provide instant customer support 24/7. 
                    Handle common inquiries, collect information, and seamlessly transfer 
                    complex issues to human agents.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Natural language processing</li>
                    <li>• Multi-language support</li>
                    <li>• Integration with existing systems</li>
                    <li>• Continuous learning capabilities</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Voice Assistants</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Implement voice-powered customer service solutions that can handle 
                    phone inquiries, provide information, and route calls efficiently.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Voice recognition</li>
                    <li>• Automated call routing</li>
                    <li>• Real-time transcription</li>
                    <li>• Integration with CRM</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl mb-12 uppercase tracking-wider">Accounting & Invoicing</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Automated Invoicing</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Streamline your billing process with AI-powered invoicing automation. 
                    Generate, send, and track invoices automatically while managing payment follow-ups.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Automatic invoice generation</li>
                    <li>• Payment tracking</li>
                    <li>• Overdue reminders</li>
                    <li>• Multi-currency support</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Expense Management</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Automate expense tracking and categorization with AI-powered tools 
                    that scan receipts, categorize expenses, and generate financial reports.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Receipt scanning & OCR</li>
                    <li>• Automatic categorization</li>
                    <li>• Real-time reporting</li>
                    <li>• Tax compliance features</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="mb-20 border-t border-gray-900 pt-16">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Client Success Stories</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-800 p-6">
                  <p className="text-gray-400 mb-4 italic">
                    "BRM AI's automation tools reduced our lead processing time by 75% and increased our conversion rates significantly."
                  </p>
                  <div className="text-sm">
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-gray-500">CEO, TechStart Inc.</div>
                  </div>
                </div>

                <div className="border border-gray-800 p-6">
                  <p className="text-gray-400 mb-4 italic">
                    "The customer service bots handle 80% of our inquiries automatically, allowing our team to focus on complex issues."
                  </p>
                  <div className="text-sm">
                    <div className="font-medium">Mike Chen</div>
                    <div className="text-gray-500">Operations Director, RetailMax</div>
                  </div>
                </div>

                <div className="border border-gray-800 p-6">
                  <p className="text-gray-400 mb-4 italic">
                    "Automated invoicing saved us 20 hours per week and eliminated billing errors completely."
                  </p>
                  <div className="text-sm">
                    <div className="font-medium">Lisa Rodriguez</div>
                    <div className="text-gray-500">CFO, ServicePlus</div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-16 border border-gray-800 mb-16">
              <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Automate Your Business?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Discover how our AI business automation tools can transform your operations. 
                Get a free consultation and custom automation strategy for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={`/${resolvedParams.locale}#contact`}
                  className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
                >
                  Book a Free Consultation
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/blog/how-to-implement-ai-automation`}
                  className="px-8 py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm"
                >
                  Read Implementation Guide
                </Link>
              </div>
            </section>

            {/* Internal Links */}
            <section className="mt-16">
              <h2 className="text-2xl mb-8 uppercase tracking-wider">Related Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href={`/${resolvedParams.locale}/crm-development-services`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Custom CRM Solutions</h3>
                  <p className="text-gray-400 text-sm">Tailored CRM systems with automation features</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/web-development-company`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Web Development Services</h3>
                  <p className="text-gray-400 text-sm">Professional website development and design</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Back to Home</h3>
                  <p className="text-gray-400 text-sm">Explore all our AI services and solutions</p>
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