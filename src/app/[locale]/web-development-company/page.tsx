import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/web-development-company`;
  
  const getLocalizedContent = () => {
    switch(resolvedParams.locale) {
      case 'es':
        return {
          title: 'Empresa de Desarrollo Web | Servicios de Desarrollo de Sitios Web',
          description: 'Empresa profesional de desarrollo web y diseño. Servicios de desarrollo de sitios web en USA con precios competitivos y resultados garantizados.',
          keywords: [
            'empresa de desarrollo web',
            'empresa de diseño web',
            'servicios de desarrollo de sitios web USA'
          ]
        };
      case 'ca':
        return {
          title: 'Empresa de Desenvolupament Web | Serveis de Desenvolupament de Llocs Web',
          description: 'Empresa professional de desenvolupament web i disseny. Serveis de desenvolupament de llocs web amb preus competitius i resultats garantits.',
          keywords: [
            'empresa de desenvolupament web',
            'empresa de disseny web',
            'serveis de desenvolupament de llocs web'
          ]
        };
      case 'uk':
        return {
          title: 'Компанія Веб-Розробки | Послуги Розробки Веб-Сайтів',
          description: 'Професійна компанія веб-розробки та дизайну. Послуги розробки веб-сайтів з конкурентними цінами та гарантованими результатами.',
          keywords: [
            'компанія веб-розробки',
            'компанія веб-дизайну',
            'послуги розробки веб-сайтів'
          ]
        };
      case 'ru':
        return {
          title: 'Компания Веб-Разработки | Услуги Разработки Веб-Сайтов',
          description: 'Профессиональная компания веб-разработки и дизайна. Услуги разработки веб-сайтов с конкурентными ценами и гарантированными результатами.',
          keywords: [
            'компания веб-разработки',
            'компания веб-дизайна',
            'услуги разработки веб-сайтов'
          ]
        };
      default:
        return {
          title: 'Web Development Company | Professional Website Development Services',
          description: 'Leading web development company offering professional website development services USA. Custom web design, e-commerce, and mobile-responsive solutions.',
          keywords: [
            'web development company',
            'web design company',
            'website development services USA'
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
        'en': `${baseUrl}/en/web-development-company`,
        'uk': `${baseUrl}/uk/web-development-company`,
        'es': `${baseUrl}/es/web-development-company`,
        'ca': `${baseUrl}/ca/web-development-company`,
        'ru': `${baseUrl}/ru/web-development-company`,
        'x-default': `${baseUrl}/en/web-development-company`
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
      siteName: 'BRM AI - Web Development Company',
      images: [
        {
          url: `${baseUrl}/web-development-company.png`,
          width: 1200,
          height: 630,
          alt: 'Professional Web Development Company',
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      site: '@BRMAI_tech',
      creator: '@BRMAI_tech',
      images: [`${baseUrl}/web-development-company.png`],
    },
  };
}

export default async function WebDevelopmentCompanyPage({ params }: Props) {
  const resolvedParams = await params;
  
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/web-development-company#service`,
        "name": "Web Development Company",
        "description": "Professional web development company offering custom website development, web design, and digital solutions",
        "provider": {
          "@type": "Organization",
          "@id": "https://mybrmai.com/#organization",
          "name": "BRM AI",
          "url": "https://mybrmai.com"
        },
        "serviceType": "Web Development",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Website Development",
                "description": "Tailored website development solutions for businesses"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce Development",
                "description": "Professional online store development and integration"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile App Development",
                "description": "Mobile application development for iOS and Android"
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
            "name": "How long does it take to develop a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Website development typically takes 4-12 weeks depending on complexity, features, and requirements. Simple websites can be completed in 4-6 weeks, while complex e-commerce or custom applications may take 8-12 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "What's included in your web development packages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our packages include custom design, responsive development, SEO optimization, content management system, security features, hosting setup, and 3 months of free support."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide ongoing maintenance and support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer comprehensive maintenance packages including security updates, content updates, performance optimization, and technical support. Plans start from $99/month."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/web-development-company#webpage`,
        "url": `https://mybrmai.com/${resolvedParams.locale}/web-development-company`,
        "name": "Web Development Company",
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
              "name": "Web Development Company",
              "item": `https://mybrmai.com/${resolvedParams.locale}/web-development-company`
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="web-development-company-schema"
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
              <span>Web Development Company</span>
            </nav>

            {/* Hero Section */}
            <section className="mb-20">
              <h1 className="text-4xl md:text-6xl font-normal mb-8 uppercase tracking-wider">
                Web Development Company
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Leading web development company delivering professional website development services. 
                We specialize in custom web design, e-commerce solutions, and cutting-edge digital experiences 
                that drive business growth.
              </p>
              <Link 
                href={`/${resolvedParams.locale}#contact`}
                className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
              >
                Book a Free Consultation
              </Link>
            </section>

            {/* Services Grid */}
            <section className="mb-20">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Our Web Development Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Custom Website Development</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Tailored website solutions built from scratch to match your unique business requirements and brand identity.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Custom design & development</li>
                    <li>• Responsive & mobile-friendly</li>
                    <li>• SEO-optimized structure</li>
                    <li>• Fast loading performance</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">E-commerce Development</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Complete online store solutions with payment integration, inventory management, and customer portal features.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Shopping cart integration</li>
                    <li>• Payment gateway setup</li>
                    <li>• Inventory management</li>
                    <li>• Order tracking system</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Mobile App Development</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Native and cross-platform mobile applications for iOS and Android with seamless user experiences.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• iOS & Android development</li>
                    <li>• Cross-platform solutions</li>
                    <li>• App store deployment</li>
                    <li>• Ongoing maintenance</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Web Design Services</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Modern, user-focused web design that converts visitors into customers with intuitive navigation and compelling visuals.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• UI/UX design</li>
                    <li>• Brand identity integration</li>
                    <li>• Conversion optimization</li>
                    <li>• Accessibility compliance</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">CMS Development</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Content management systems that allow you to easily update and manage your website content without technical knowledge.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• WordPress development</li>
                    <li>• Custom CMS solutions</li>
                    <li>• Easy content editing</li>
                    <li>• Multi-user permissions</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">API Integration</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Seamless integration with third-party services, payment processors, and business tools to enhance functionality.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Third-party API integration</li>
                    <li>• Custom API development</li>
                    <li>• Database integration</li>
                    <li>• Cloud services setup</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pricing Table */}
            <section className="mb-20 border-t border-gray-900 pt-16">
              <h2 className="text-3xl mb-12 uppercase tracking-wider text-center">Web Development Packages</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-800 p-8 text-center">
                  <h3 className="text-2xl mb-4 font-medium">Basic Website</h3>
                  <div className="text-3xl mb-6 font-bold">$2,999</div>
                  <ul className="text-gray-400 space-y-3 mb-8 text-left">
                    <li>• Up to 5 pages</li>
                    <li>• Responsive design</li>
                    <li>• Contact form</li>
                    <li>• SEO optimization</li>
                    <li>• 3 months support</li>
                    <li>• Basic hosting setup</li>
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
                  <h3 className="text-2xl mb-4 font-medium">Business Website</h3>
                  <div className="text-3xl mb-6 font-bold">$5,999</div>
                  <ul className="text-gray-400 space-y-3 mb-8 text-left">
                    <li>• Up to 15 pages</li>
                    <li>• Custom design</li>
                    <li>• CMS integration</li>
                    <li>• E-commerce ready</li>
                    <li>• Analytics setup</li>
                    <li>• 6 months support</li>
                    <li>• Performance optimization</li>
                  </ul>
                  <Link 
                    href={`/${resolvedParams.locale}#contact`}
                    className="block w-full py-3 bg-white text-black hover:bg-gray-200 transition-all uppercase tracking-wider text-sm text-center"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="border border-gray-800 p-8 text-center">
                  <h3 className="text-2xl mb-4 font-medium">Enterprise Solution</h3>
                  <div className="text-3xl mb-6 font-bold">$12,999</div>
                  <ul className="text-gray-400 space-y-3 mb-8 text-left">
                    <li>• Unlimited pages</li>
                    <li>• Advanced functionality</li>
                    <li>• Custom integrations</li>
                    <li>• User management system</li>
                    <li>• Advanced security</li>
                    <li>• 12 months support</li>
                    <li>• Dedicated project manager</li>
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

            {/* Testimonials */}
            <section className="mb-20">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-gray-800 p-8">
                  <p className="text-gray-400 mb-6 italic text-lg">
                    "BRM AI delivered an exceptional website that increased our online sales by 250%. 
                    Their team understood our vision and executed it perfectly."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-medium">Jennifer Martinez</div>
                      <div className="text-gray-500">CEO, RetailMax Store</div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-800 p-8">
                  <p className="text-gray-400 mb-6 italic text-lg">
                    "Outstanding web development company. They built our complex e-commerce platform 
                    on time and within budget. Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-medium">David Thompson</div>
                      <div className="text-gray-500">Founder, TechGear Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-20 border-t border-gray-900 pt-16">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div className="border-b border-gray-800 pb-6">
                  <h3 className="text-xl mb-3 font-medium text-white">How long does it take to develop a website?</h3>
                  <p className="text-gray-400">
                    Website development typically takes 4-12 weeks depending on complexity, features, and requirements. 
                    Simple websites can be completed in 4-6 weeks, while complex e-commerce or custom applications may take 8-12 weeks.
                  </p>
                </div>

                <div className="border-b border-gray-800 pb-6">
                  <h3 className="text-xl mb-3 font-medium text-white">What's included in your web development packages?</h3>
                  <p className="text-gray-400">
                    Our packages include custom design, responsive development, SEO optimization, content management system, 
                    security features, hosting setup, and 3 months of free support.
                  </p>
                </div>

                <div className="border-b border-gray-800 pb-6">
                  <h3 className="text-xl mb-3 font-medium text-white">Do you provide ongoing maintenance and support?</h3>
                  <p className="text-gray-400">
                    Yes, we offer comprehensive maintenance packages including security updates, content updates, 
                    performance optimization, and technical support. Plans start from $99/month.
                  </p>
                </div>

                <div className="border-b border-gray-800 pb-6">
                  <h3 className="text-xl mb-3 font-medium text-white">Can you help with website redesign projects?</h3>
                  <p className="text-gray-400">
                    Absolutely! We specialize in website redesigns to improve performance, user experience, and modern design standards. 
                    We can work with your existing content and optimize for better results.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-16 border border-gray-800 mb-16">
              <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Start Your Web Project?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Partner with our experienced web development company to create a powerful online presence. 
                Get a free consultation and project quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={`/${resolvedParams.locale}#contact`}
                  className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
                >
                  Book a Free Consultation
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/blog/build-small-business-website`}
                  className="px-8 py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm"
                >
                  Read Our Guide
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
                  <p className="text-gray-400 text-sm">Enhance your website with AI-powered automation</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/crm-development-services`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">CRM Development</h3>
                  <p className="text-gray-400 text-sm">Custom CRM solutions integrated with your website</p>
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