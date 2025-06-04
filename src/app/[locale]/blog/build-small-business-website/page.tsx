import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/blog/build-small-business-website`;
  
  const getLocalizedContent = () => {
    switch(resolvedParams.locale) {
      case 'es':
        return {
          title: 'Cómo Crear un Sitio Web para Pequeñas Empresas | Guía 2024',
          description: 'Aprende cómo crear un sitio web para pequeñas empresas paso a paso. Guía completa con consejos, herramientas y mejores prácticas.',
          keywords: [
            'cómo crear un sitio web para pequeñas empresas',
            'diseño web para pequeños negocios',
            'sitio web económico para empresas'
          ]
        };
      case 'ca':
        return {
          title: 'Com Crear un Lloc Web per a Petites Empreses | Guia 2024',
          description: 'Aprèn com crear un lloc web per a petites empreses pas a pas. Guia completa amb consells, eines i millors pràctiques.',
          keywords: [
            'com crear un lloc web per a petites empreses',
            'disseny web per a petits negocis',
            'lloc web econòmic per a empreses'
          ]
        };
      case 'uk':
        return {
          title: 'Як Створити Веб-Сайт для Малого Бізнесу | Посібник 2024',
          description: 'Дізнайтеся, як створити веб-сайт для малого бізнесу крок за кроком. Повний посібник з порадами, інструментами та кращими практиками.',
          keywords: [
            'як створити веб-сайт для малого бізнесу',
            'веб-дизайн для малого бізнесу',
            'недорогий веб-сайт для бізнесу'
          ]
        };
      case 'ru':
        return {
          title: 'Как Создать Веб-Сайт для Малого Бизнеса | Руководство 2024',
          description: 'Узнайте, как создать веб-сайт для малого бизнеса пошагово. Полное руководство с советами, инструментами и лучшими практиками.',
          keywords: [
            'как создать веб-сайт для малого бизнеса',
            'веб-дизайн для малого бизнеса',
            'недорогой веб-сайт для бизнеса'
          ]
        };
      default:
        return {
          title: 'How to Build a Small Business Website: Complete Guide 2024',
          description: 'Learn how to build a small business website step-by-step. Complete guide with tips, tools, and best practices for creating an effective business website.',
          keywords: [
            'how to build a small business website',
            'small business website design',
            'affordable website for small business'
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
        'en': `${baseUrl}/en/blog/build-small-business-website`,
        'uk': `${baseUrl}/uk/blog/build-small-business-website`,
        'es': `${baseUrl}/es/blog/build-small-business-website`,
        'ca': `${baseUrl}/ca/blog/build-small-business-website`,
        'ru': `${baseUrl}/ru/blog/build-small-business-website`,
        'x-default': `${baseUrl}/en/blog/build-small-business-website`
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
      type: 'article',
      siteName: 'BRM AI Blog',
      images: [
        {
          url: `${baseUrl}/build-small-business-website.png`,
          width: 1200,
          height: 630,
          alt: 'How to Build a Small Business Website',
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      site: '@BRMAI_tech',
      creator: '@BRMAI_tech',
      images: [`${baseUrl}/build-small-business-website.png`],
    },
  };
}

export default async function BuildSmallBusinessWebsitePage({ params }: Props) {
  const resolvedParams = await params;
  
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/blog/build-small-business-website#article`,
        "headline": "How to Build a Small Business Website: Complete Guide 2024",
        "description": "Learn how to build a small business website step-by-step. Complete guide with tips, tools, and best practices for creating an effective business website.",
        "author": {
          "@type": "Organization",
          "@id": "https://mybrmai.com/#organization",
          "name": "BRM AI"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://mybrmai.com/#organization",
          "name": "BRM AI"
        },
        "datePublished": "2024-06-03",
        "dateModified": "2024-06-03",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://mybrmai.com/${resolvedParams.locale}/blog/build-small-business-website`
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://mybrmai.com/build-small-business-website.png",
          "width": 1200,
          "height": 630
        },
        "articleSection": "Web Development",
        "keywords": ["how to build a small business website", "small business website design", "affordable website for small business"]
      },
      {
        "@type": "WebPage",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/blog/build-small-business-website#webpage`,
        "url": `https://mybrmai.com/${resolvedParams.locale}/blog/build-small-business-website`,
        "name": "How to Build a Small Business Website",
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
              "name": "Blog",
              "item": `https://mybrmai.com/${resolvedParams.locale}/blog`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "How to Build a Small Business Website",
              "item": `https://mybrmai.com/${resolvedParams.locale}/blog/build-small-business-website`
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="build-small-business-website-schema"
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
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm text-gray-500">
              <Link href={`/${resolvedParams.locale}`} className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">→</span>
              <Link href={`/${resolvedParams.locale}/blog`} className="hover:text-white">
                Blog
              </Link>
              <span className="mx-2">→</span>
              <span>How to Build a Small Business Website</span>
            </nav>

            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-normal mb-6 uppercase tracking-wider leading-tight">
                How to Build a Small Business Website: Complete Guide 2024
              </h1>
              <div className="flex items-center text-sm text-gray-500 mb-8">
                <span>Published on June 3, 2024</span>
                <span className="mx-2">•</span>
                <span>12 min read</span>
                <span className="mx-2">•</span>
                <span>Web Development</span>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                Building a small business website doesn't have to be complicated or expensive. 
                This comprehensive guide will walk you through every step of creating an effective website 
                that attracts customers and grows your business.
              </p>
            </header>

            {/* Table of Contents */}
            <div className="border border-gray-800 p-6 mb-12">
              <h2 className="text-lg font-medium mb-4">Table of Contents</h2>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#planning-your-website" className="hover:text-white">1. Planning Your Website</a></li>
                <li><a href="#choosing-platform" className="hover:text-white">2. Choosing the Right Platform</a></li>
                <li><a href="#domain-hosting" className="hover:text-white">3. Domain Name and Hosting</a></li>
                <li><a href="#design-essentials" className="hover:text-white">4. Design Essentials</a></li>
                <li><a href="#essential-pages" className="hover:text-white">5. Essential Pages</a></li>
                <li><a href="#seo-optimization" className="hover:text-white">6. SEO Optimization</a></li>
                <li><a href="#mobile-responsiveness" className="hover:text-white">7. Mobile Responsiveness</a></li>
                <li><a href="#launch-maintenance" className="hover:text-white">8. Launch and Maintenance</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              
              <section id="planning-your-website" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Planning Your Website</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Before you start building, proper planning is crucial for creating a website that serves your business goals effectively.
                </p>
                
                <h3 className="text-xl mb-4 font-medium">Define Your Goals</h3>
                <div className="border border-gray-800 p-6 mb-6">
                  <h4 className="text-lg mb-3 font-medium text-white">Primary Website Goals:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• <strong className="text-white">Generate Leads:</strong> Capture contact information from potential customers</li>
                    <li>• <strong className="text-white">Sell Products/Services:</strong> Enable online transactions and bookings</li>
                    <li>• <strong className="text-white">Build Brand Awareness:</strong> Showcase your expertise and credibility</li>
                    <li>• <strong className="text-white">Provide Information:</strong> Answer common customer questions</li>
                    <li>• <strong className="text-white">Improve Customer Service:</strong> Offer support and resources</li>
                  </ul>
                </div>

                <h3 className="text-xl mb-4 font-medium">Know Your Target Audience</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Understanding your audience is essential for creating a website that resonates with potential customers.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-800 p-4">
                    <h4 className="font-medium text-white mb-2">Demographics</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Age range and gender</li>
                      <li>• Location and language</li>
                      <li>• Income level</li>
                      <li>• Education and profession</li>
                    </ul>
                  </div>
                  <div className="border border-gray-800 p-4">
                    <h4 className="font-medium text-white mb-2">Behavior Patterns</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Preferred devices (mobile/desktop)</li>
                      <li>• Online shopping habits</li>
                      <li>• Social media usage</li>
                      <li>• Information consumption preferences</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="choosing-platform" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Choosing the Right Platform</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  The platform you choose will determine your website's functionality, ease of use, and future scalability.
                </p>

                <div className="space-y-6">
                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-4 font-medium text-white">WordPress (Recommended)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg mb-2 text-green-400">Pros:</h4>
                        <ul className="text-gray-400 space-y-1">
                          <li>• Highly customizable</li>
                          <li>• SEO-friendly</li>
                          <li>• Large community support</li>
                          <li>• Thousands of plugins</li>
                          <li>• Cost-effective</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg mb-2 text-red-400">Cons:</h4>
                        <ul className="text-gray-400 space-y-1">
                          <li>• Requires some technical knowledge</li>
                          <li>• Regular updates needed</li>
                          <li>• Security maintenance required</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-4 font-medium text-white">Website Builders (Squarespace, Wix)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg mb-2 text-green-400">Pros:</h4>
                        <ul className="text-gray-400 space-y-1">
                          <li>• Easy drag-and-drop interface</li>
                          <li>• Built-in hosting and security</li>
                          <li>• Professional templates</li>
                          <li>• No technical skills required</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg mb-2 text-red-400">Cons:</h4>
                        <ul className="text-gray-400 space-y-1">
                          <li>• Limited customization</li>
                          <li>• Monthly subscription costs</li>
                          <li>• Vendor lock-in</li>
                          <li>• Limited scalability</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-4 font-medium text-white">Custom Development</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg mb-2 text-green-400">Pros:</h4>
                        <ul className="text-gray-400 space-y-1">
                          <li>• Complete customization</li>
                          <li>• Optimal performance</li>
                          <li>• Unique functionality</li>
                          <li>• Full ownership</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg mb-2 text-red-400">Cons:</h4>
                        <ul className="text-gray-400 space-y-1">
                          <li>• Higher upfront cost</li>
                          <li>• Longer development time</li>
                          <li>• Requires technical expertise</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="domain-hosting" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Domain Name and Hosting</h2>
                
                <h3 className="text-xl mb-4 font-medium">Choosing Your Domain Name</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Your domain name is your online address and brand identity. Choose wisely as it's difficult to change later.
                </p>
                
                <div className="border border-gray-800 p-6 mb-6">
                  <h4 className="text-lg mb-3 font-medium text-white">Domain Name Best Practices:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• <strong className="text-white">Keep it short:</strong> Aim for 10-15 characters maximum</li>
                    <li>• <strong className="text-white">Make it memorable:</strong> Easy to spell and pronounce</li>
                    <li>• <strong className="text-white">Include keywords:</strong> If possible, include your main service or location</li>
                    <li>• <strong className="text-white">Choose .com:</strong> Most trusted and memorable extension</li>
                    <li>• <strong className="text-white">Avoid hyphens:</strong> They're easy to forget and look unprofessional</li>
                    <li>• <strong className="text-white">Check trademarks:</strong> Ensure you're not infringing on existing brands</li>
                  </ul>
                </div>

                <h3 className="text-xl mb-4 font-medium">Web Hosting Options</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-gray-800 p-4">
                    <h4 className="font-medium text-white mb-2">Shared Hosting</h4>
                    <p className="text-gray-400 text-sm mb-3">$3-10/month</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Budget-friendly</li>
                      <li>• Good for small sites</li>
                      <li>• Limited resources</li>
                      <li>• Suitable for beginners</li>
                    </ul>
                  </div>
                  <div className="border border-gray-800 p-4">
                    <h4 className="font-medium text-white mb-2">VPS Hosting</h4>
                    <p className="text-gray-400 text-sm mb-3">$20-80/month</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• More resources</li>
                      <li>• Better performance</li>
                      <li>• Scalable</li>
                      <li>• Requires technical knowledge</li>
                    </ul>
                  </div>
                  <div className="border border-gray-800 p-4">
                    <h4 className="font-medium text-white mb-2">Dedicated Hosting</h4>
                    <p className="text-gray-400 text-sm mb-3">$100-500/month</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Maximum performance</li>
                      <li>• Full server control</li>
                      <li>• Expensive</li>
                      <li>• For high-traffic sites</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="design-essentials" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Design Essentials</h2>
                
                <h3 className="text-xl mb-4 font-medium">Visual Design Principles</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg mb-3 font-medium text-white">Color Scheme</h4>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Choose 2-3 primary colors that reflect your brand</li>
                      <li>• Ensure good contrast for readability</li>
                      <li>• Use colors consistently across all pages</li>
                      <li>• Consider color psychology for your industry</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg mb-3 font-medium text-white">Typography</h4>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Choose 1-2 readable fonts maximum</li>
                      <li>• Use font hierarchy (headings, body text)</li>
                      <li>• Ensure text is large enough (16px minimum)</li>
                      <li>• Maintain consistent spacing</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl mb-4 font-medium">User Experience (UX) Guidelines</h3>
                <div className="border border-gray-800 p-6">
                  <ul className="text-gray-400 space-y-3">
                    <li>• <strong className="text-white">Clear Navigation:</strong> Make it easy to find information with intuitive menu structure</li>
                    <li>• <strong className="text-white">Fast Loading:</strong> Optimize images and code for quick page loads (under 3 seconds)</li>
                    <li>• <strong className="text-white">Call-to-Action Buttons:</strong> Use contrasting colors and clear text like "Get Quote" or "Contact Us"</li>
                    <li>• <strong className="text-white">White Space:</strong> Don't cram everything together; give content room to breathe</li>
                    <li>• <strong className="text-white">Consistent Layout:</strong> Maintain similar structure across all pages</li>
                  </ul>
                </div>
              </section>

              <section id="essential-pages" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Essential Pages</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Every small business website should include these fundamental pages to build trust and convert visitors.
                </p>

                <div className="space-y-6">
                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-3 font-medium text-white">Homepage</h3>
                    <p className="text-gray-400 mb-3">Your homepage is your digital storefront. Make a great first impression.</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Clear headline explaining what you do</li>
                      <li>• Your unique value proposition</li>
                      <li>• High-quality hero image or video</li>
                      <li>• Prominent contact information</li>
                      <li>• Navigation to other important pages</li>
                    </ul>
                  </div>

                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-3 font-medium text-white">About Us</h3>
                    <p className="text-gray-400 mb-3">Build trust by sharing your story, mission, and team.</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Company history and mission</li>
                      <li>• Team member photos and bios</li>
                      <li>• Your experience and qualifications</li>
                      <li>• Awards, certifications, or achievements</li>
                      <li>• Personal touch to connect with customers</li>
                    </ul>
                  </div>

                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-3 font-medium text-white">Services/Products</h3>
                    <p className="text-gray-400 mb-3">Clearly explain what you offer and how it benefits customers.</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Detailed service/product descriptions</li>
                      <li>• High-quality images or videos</li>
                      <li>• Pricing information (if appropriate)</li>
                      <li>• Benefits and features</li>
                      <li>• Case studies or examples</li>
                    </ul>
                  </div>

                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-3 font-medium text-white">Contact</h3>
                    <p className="text-gray-400 mb-3">Make it easy for customers to reach you.</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Contact form with relevant fields</li>
                      <li>• Phone number and email address</li>
                      <li>• Business address and map</li>
                      <li>• Business hours</li>
                      <li>• Social media links</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="seo-optimization" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">SEO Optimization</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Search Engine Optimization helps potential customers find your website when they search for your services.
                </p>

                <h3 className="text-xl mb-4 font-medium">On-Page SEO Basics</h3>
                <div className="border border-gray-800 p-6 mb-6">
                  <ul className="text-gray-400 space-y-3">
                    <li>• <strong className="text-white">Title Tags:</strong> Include your main keyword and location (under 60 characters)</li>
                    <li>• <strong className="text-white">Meta Descriptions:</strong> Write compelling summaries for search results (under 160 characters)</li>
                    <li>• <strong className="text-white">Header Tags:</strong> Use H1, H2, H3 tags to structure your content</li>
                    <li>• <strong className="text-white">Image Alt Text:</strong> Describe images for accessibility and SEO</li>
                    <li>• <strong className="text-white">URL Structure:</strong> Use clean, descriptive URLs with keywords</li>
                    <li>• <strong className="text-white">Internal Linking:</strong> Link related pages to improve navigation and SEO</li>
                  </ul>
                </div>

                <h3 className="text-xl mb-4 font-medium">Local SEO for Small Business</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-800 p-4">
                    <h4 className="font-medium text-white mb-2">Google Business Profile</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Complete all profile sections</li>
                      <li>• Add high-quality photos</li>
                      <li>• Collect customer reviews</li>
                      <li>• Post regular updates</li>
                    </ul>
                  </div>
                  <div className="border border-gray-800 p-4">
                    <h4 className="font-medium text-white mb-2">Local Citations</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• List on local directories</li>
                      <li>• Ensure NAP consistency</li>
                      <li>• Get industry-specific listings</li>
                      <li>• Monitor and manage reviews</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="mobile-responsiveness" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Mobile Responsiveness</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Over 60% of website traffic comes from mobile devices. Your site must work perfectly on all screen sizes.
                </p>

                <div className="border border-gray-800 p-6 mb-6">
                  <h3 className="text-xl mb-4 font-medium text-white">Mobile Optimization Checklist</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• ☐ Use responsive design that adapts to all screen sizes</li>
                    <li>• ☐ Ensure text is readable without zooming (16px minimum)</li>
                    <li>• ☐ Make buttons and links easy to tap (44px minimum)</li>
                    <li>• ☐ Optimize images for fast mobile loading</li>
                    <li>• ☐ Simplify navigation for mobile users</li>
                    <li>• ☐ Test contact forms on mobile devices</li>
                    <li>• ☐ Ensure fast loading speeds on mobile networks</li>
                  </ul>
                </div>

                <div className="border border-yellow-500/30 p-6 bg-yellow-500/5">
                  <h4 className="text-lg mb-3 font-medium text-yellow-400">Testing Your Mobile Site</h4>
                  <p className="text-gray-400 mb-3">Use these tools to test your website's mobile performance:</p>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Google Mobile-Friendly Test</li>
                    <li>• PageSpeed Insights</li>
                    <li>• Your smartphone and tablet</li>
                    <li>• Browser developer tools</li>
                  </ul>
                </div>
              </section>

              <section id="launch-maintenance" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Launch and Maintenance</h2>
                
                <h3 className="text-xl mb-4 font-medium">Pre-Launch Checklist</h3>
                <div className="border border-gray-800 p-6 mb-6">
                  <ul className="text-gray-400 space-y-2">
                    <li>• ☐ Test all links and contact forms</li>
                    <li>• ☐ Check spelling and grammar</li>
                    <li>• ☐ Verify contact information is correct</li>
                    <li>• ☐ Set up Google Analytics and Search Console</li>
                    <li>• ☐ Install security certificates (SSL)</li>
                    <li>• ☐ Create XML sitemap and submit to Google</li>
                    <li>• ☐ Test website speed and mobile responsiveness</li>
                    <li>• ☐ Set up regular backups</li>
                  </ul>
                </div>

                <h3 className="text-xl mb-4 font-medium">Ongoing Maintenance</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Your website needs regular maintenance to stay secure, fast, and effective.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-gray-800 p-4">
                    <h4 className="font-medium text-white mb-2">Weekly Tasks</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Update content</li>
                      <li>• Respond to inquiries</li>
                      <li>• Check for broken links</li>
                      <li>• Monitor website speed</li>
                    </ul>
                  </div>
                  <div className="border border-gray-800 p-4">
                    <h4 className="font-medium text-white mb-2">Monthly Tasks</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Update software and plugins</li>
                      <li>• Review analytics</li>
                      <li>• Check security reports</li>
                      <li>• Test contact forms</li>
                    </ul>
                  </div>
                  <div className="border border-gray-800 p-4">
                    <h4 className="font-medium text-white mb-2">Quarterly Tasks</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Content audit and refresh</li>
                      <li>• SEO review</li>
                      <li>• Performance optimization</li>
                      <li>• Backup verification</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-16 border border-gray-800 p-8">
                <h2 className="text-2xl mb-6 uppercase tracking-wider">Need Professional Help?</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Building a website can be time-consuming and technical. If you prefer to focus on running your business 
                  while professionals handle your website, we're here to help.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg mb-3 font-medium text-white">What We Offer:</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Custom website design and development</li>
                      <li>• Mobile-responsive and SEO-optimized sites</li>
                      <li>• E-commerce functionality</li>
                      <li>• Ongoing maintenance and support</li>
                      <li>• Digital marketing integration</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg mb-3 font-medium text-white">Why Choose Us:</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Experienced team of developers and designers</li>
                      <li>• Proven track record with small businesses</li>
                      <li>• Transparent pricing with no hidden fees</li>
                      <li>• Ongoing support and training</li>
                      <li>• Local business understanding</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    href={`/${resolvedParams.locale}/web-development-company`}
                    className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
                  >
                    Learn About Our Services
                  </Link>
                </div>
              </section>
            </article>

            {/* Related Articles */}
            <section className="mt-16 border-t border-gray-900 pt-12">
              <h2 className="text-2xl mb-8 uppercase tracking-wider">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href={`/${resolvedParams.locale}/blog/local-seo-checklist`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Local SEO Checklist</h3>
                  <p className="text-gray-400 text-sm">Complete guide to optimizing your website for local search</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/blog/how-to-implement-ai-automation`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">AI Automation Guide</h3>
                  <p className="text-gray-400 text-sm">Learn how to implement AI automation in your business</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/web-development-company`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Professional Web Development</h3>
                  <p className="text-gray-400 text-sm">Get a professionally designed website for your business</p>
                </Link>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-8 md:px-12 border-t border-gray-900">
          <div className="max-w-4xl mx-auto flex justify-between items-center text-sm text-gray-500">
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