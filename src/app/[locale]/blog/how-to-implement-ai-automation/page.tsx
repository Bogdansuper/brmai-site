import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/blog/how-to-implement-ai-automation`;
  
  const getLocalizedContent = () => {
    switch(resolvedParams.locale) {
      case 'es':
        return {
          title: 'Cómo Implementar Automatización con IA en el Negocio | Guía 2024',
          description: 'Guía completa paso a paso sobre cómo implementar automatización con IA en su empresa. Descubre los beneficios y casos de estudio reales.',
          keywords: [
            'cómo implementar automatización con IA en el negocio',
            'beneficios de la IA en los negocios',
            'caso de estudio de automatización con IA'
          ]
        };
      case 'ca':
        return {
          title: 'Com Implementar Automatització amb IA al Negoci | Guia 2024',
          description: 'Guia completa pas a pas sobre com implementar automatització amb IA a la vostra empresa. Descobriu els beneficis i casos d\'estudi reals.',
          keywords: [
            'com implementar automatització amb IA al negoci',
            'beneficis de la IA als negocis',
            'cas d\'estudi d\'automatització amb IA'
          ]
        };
      case 'uk':
        return {
          title: 'Як Впровадити Автоматизацію з ШІ у Бізнесі | Посібник 2024',
          description: 'Повне покрокове керівництво про те, як впровадити автоматизацію з ШІ у вашому бізнесі. Дізнайтеся про переваги та реальні кейси.',
          keywords: [
            'як впровадити автоматизацію з ШІ у бізнесі',
            'переваги ШІ у бізнесі',
            'кейс автоматизації з ШІ'
          ]
        };
      case 'ru':
        return {
          title: 'Как Внедрить Автоматизацию с ИИ в Бизнесе | Руководство 2024',
          description: 'Полное пошаговое руководство о том, как внедрить автоматизацию с ИИ в вашем бизнесе. Узнайте о преимуществах и реальных кейсах.',
          keywords: [
            'как внедрить автоматизацию с ИИ в бизнесе',
            'преимущества ИИ в бизнесе',
            'кейс автоматизации с ИИ'
          ]
        };
      default:
        return {
          title: 'How to Implement AI Automation in Business: Complete Guide 2024',
          description: 'Learn how to implement AI automation in business with our comprehensive step-by-step guide. Discover benefits of AI in business and real case studies.',
          keywords: [
            'how to implement AI automation in business',
            'benefits of AI in business',
            'AI automation case study'
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
        'en': `${baseUrl}/en/blog/how-to-implement-ai-automation`,
        'uk': `${baseUrl}/uk/blog/how-to-implement-ai-automation`,
        'es': `${baseUrl}/es/blog/how-to-implement-ai-automation`,
        'ca': `${baseUrl}/ca/blog/how-to-implement-ai-automation`,
        'ru': `${baseUrl}/ru/blog/how-to-implement-ai-automation`,
        'x-default': `${baseUrl}/en/blog/how-to-implement-ai-automation`
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
          url: `${baseUrl}/how-to-implement-ai-automation.png`,
          width: 1200,
          height: 630,
          alt: 'How to Implement AI Automation in Business',
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      site: '@BRMAI_tech',
      creator: '@BRMAI_tech',
      images: [`${baseUrl}/how-to-implement-ai-automation.png`],
    },
  };
}

export default async function HowToImplementAIAutomationPage({ params }: Props) {
  const resolvedParams = await params;
  
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/blog/how-to-implement-ai-automation#article`,
        "headline": "How to Implement AI Automation in Business: Complete Guide 2024",
        "description": "Learn how to implement AI automation in business with our comprehensive step-by-step guide. Discover benefits of AI in business and real case studies.",
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
          "@id": `https://mybrmai.com/${resolvedParams.locale}/blog/how-to-implement-ai-automation`
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://mybrmai.com/how-to-implement-ai-automation.png",
          "width": 1200,
          "height": 630
        },
        "articleSection": "AI Automation",
        "keywords": ["how to implement AI automation in business", "benefits of AI in business", "AI automation case study"]
      },
      {
        "@type": "WebPage",
        "@id": `https://mybrmai.com/${resolvedParams.locale}/blog/how-to-implement-ai-automation#webpage`,
        "url": `https://mybrmai.com/${resolvedParams.locale}/blog/how-to-implement-ai-automation`,
        "name": "How to Implement AI Automation in Business",
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
              "name": "How to Implement AI Automation",
              "item": `https://mybrmai.com/${resolvedParams.locale}/blog/how-to-implement-ai-automation`
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="ai-implementation-guide-schema"
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
              <span>How to Implement AI Automation</span>
            </nav>

            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-normal mb-6 uppercase tracking-wider leading-tight">
                How to Implement AI Automation in Business: Complete Guide 2024
              </h1>
              <div className="flex items-center text-sm text-gray-500 mb-8">
                <span>Published on June 3, 2024</span>
                <span className="mx-2">•</span>
                <span>15 min read</span>
                <span className="mx-2">•</span>
                <span>AI Automation</span>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                Learn how to implement AI automation in business with our comprehensive step-by-step guide. 
                Discover the benefits of AI in business, real case studies, and actionable strategies to transform your operations.
              </p>
            </header>

            {/* Table of Contents */}
            <div className="border border-gray-800 p-6 mb-12">
              <h2 className="text-lg font-medium mb-4">Table of Contents</h2>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#understanding-ai-automation" className="hover:text-white">1. Understanding AI Automation</a></li>
                <li><a href="#benefits-of-ai" className="hover:text-white">2. Benefits of AI in Business</a></li>
                <li><a href="#implementation-steps" className="hover:text-white">3. Step-by-Step Implementation Guide</a></li>
                <li><a href="#case-study" className="hover:text-white">4. Real-World Case Study</a></li>
                <li><a href="#common-challenges" className="hover:text-white">5. Common Challenges and Solutions</a></li>
                <li><a href="#roi-measurement" className="hover:text-white">6. Measuring ROI and Success</a></li>
                <li><a href="#next-steps" className="hover:text-white">7. Next Steps</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              
              <section id="understanding-ai-automation" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Understanding AI Automation</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  AI automation combines artificial intelligence with traditional automation to create intelligent systems 
                  that can learn, adapt, and make decisions. Unlike simple automation that follows pre-programmed rules, 
                  AI automation can handle complex scenarios, understand context, and improve over time.
                </p>
                
                <div className="border border-gray-800 p-6 mb-8">
                  <h3 className="text-xl mb-4 font-medium">Key Components of AI Automation:</h3>
                  <ul className="text-gray-400 space-y-3">
                    <li>• <strong className="text-white">Machine Learning:</strong> Algorithms that learn from data and improve performance</li>
                    <li>• <strong className="text-white">Natural Language Processing:</strong> Understanding and processing human language</li>
                    <li>• <strong className="text-white">Computer Vision:</strong> Analyzing and interpreting visual information</li>
                    <li>• <strong className="text-white">Robotic Process Automation (RPA):</strong> Automating repetitive tasks</li>
                    <li>• <strong className="text-white">Predictive Analytics:</strong> Forecasting future outcomes based on historical data</li>
                  </ul>
                </div>
              </section>

              <section id="benefits-of-ai" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Benefits of AI in Business</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Implementing AI automation delivers measurable benefits across all business functions. 
                  Here are the key advantages that organizations typically experience:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-4 font-medium text-white">Operational Efficiency</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• 60-80% reduction in processing time</li>
                      <li>• 90% decrease in manual errors</li>
                      <li>• 24/7 operation capabilities</li>
                      <li>• Consistent quality output</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-4 font-medium text-white">Cost Savings</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• 30-50% reduction in operational costs</li>
                      <li>• Lower staffing requirements</li>
                      <li>• Reduced infrastructure needs</li>
                      <li>• Faster time to market</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-4 font-medium text-white">Enhanced Decision Making</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Real-time data insights</li>
                      <li>• Predictive analytics</li>
                      <li>• Risk assessment</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-4 font-medium text-white">Customer Experience</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Personalized interactions</li>
                      <li>• Faster response times</li>
                      <li>• 24/7 customer support</li>
                      <li>• Proactive service delivery</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="implementation-steps" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Step-by-Step Implementation Guide</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Follow this comprehensive checklist to successfully implement AI automation in your business:
                </p>

                <div className="space-y-8">
                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-xl mb-4 font-medium">Step 1: Assessment and Planning (2-4 weeks)</h3>
                    <div className="text-gray-400 space-y-3">
                      <p>☐ Conduct comprehensive business process audit</p>
                      <p>☐ Identify automation opportunities and pain points</p>
                      <p>☐ Assess current technology infrastructure</p>
                      <p>☐ Define clear objectives and success metrics</p>
                      <p>☐ Calculate potential ROI and budget allocation</p>
                      <p>☐ Identify stakeholders and form implementation team</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-xl mb-4 font-medium">Step 2: Strategy Development (1-2 weeks)</h3>
                    <div className="text-gray-400 space-y-3">
                      <p>☐ Prioritize automation initiatives based on impact and feasibility</p>
                      <p>☐ Create detailed implementation roadmap with timelines</p>
                      <p>☐ Select appropriate AI automation technologies and tools</p>
                      <p>☐ Design integration architecture with existing systems</p>
                      <p>☐ Develop change management and training plans</p>
                      <p>☐ Establish governance and risk management frameworks</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-xl mb-4 font-medium">Step 3: Pilot Implementation (4-8 weeks)</h3>
                    <div className="text-gray-400 space-y-3">
                      <p>☐ Start with low-risk, high-impact processes</p>
                      <p>☐ Develop and test AI automation solutions</p>
                      <p>☐ Integrate with existing systems and data sources</p>
                      <p>☐ Train initial user groups on new systems</p>
                      <p>☐ Monitor performance and gather feedback</p>
                      <p>☐ Refine and optimize based on pilot results</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-xl mb-4 font-medium">Step 4: Full Deployment (8-16 weeks)</h3>
                    <div className="text-gray-400 space-y-3">
                      <p>☐ Scale successful pilot solutions across the organization</p>
                      <p>☐ Implement comprehensive training programs</p>
                      <p>☐ Establish monitoring and maintenance procedures</p>
                      <p>☐ Deploy security measures and compliance protocols</p>
                      <p>☐ Set up performance dashboards and reporting</p>
                      <p>☐ Create documentation and standard operating procedures</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-xl mb-4 font-medium">Step 5: Optimization and Scaling (Ongoing)</h3>
                    <div className="text-gray-400 space-y-3">
                      <p>☐ Continuously monitor system performance and user adoption</p>
                      <p>☐ Analyze data to identify additional automation opportunities</p>
                      <p>☐ Update and improve AI models with new data</p>
                      <p>☐ Expand automation to additional business processes</p>
                      <p>☐ Measure and report on ROI and business impact</p>
                      <p>☐ Plan for future AI automation initiatives</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="case-study" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">AI Automation Case Study</h2>
                
                <div className="border border-gray-800 p-8 mb-8">
                  <h3 className="text-2xl mb-4 font-medium">TechCorp Manufacturing: 70% Efficiency Increase</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg mb-3 font-medium text-white">Challenge</h4>
                      <p className="text-gray-400 mb-4">
                        TechCorp, a mid-sized manufacturing company, struggled with manual quality control processes 
                        that were time-consuming, error-prone, and couldn't keep up with increasing production demands.
                      </p>
                      
                      <h4 className="text-lg mb-3 font-medium text-white">Solution Implemented</h4>
                      <ul className="text-gray-400 space-y-2">
                        <li>• AI-powered computer vision for quality inspection</li>
                        <li>• Predictive maintenance for equipment</li>
                        <li>• Automated inventory management</li>
                        <li>• Real-time production monitoring dashboard</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg mb-3 font-medium text-white">Results Achieved</h4>
                      <ul className="text-gray-400 space-y-3">
                        <li>• <strong className="text-white">70% increase</strong> in overall efficiency</li>
                        <li>• <strong className="text-white">95% reduction</strong> in quality control errors</li>
                        <li>• <strong className="text-white">$2.3M annual savings</strong> in operational costs</li>
                        <li>• <strong className="text-white">40% faster</strong> production cycle times</li>
                        <li>• <strong className="text-white">30% reduction</strong> in equipment downtime</li>
                      </ul>
                      
                      <h4 className="text-lg mb-3 mt-6 font-medium text-white">Implementation Timeline</h4>
                      <p className="text-gray-400">
                        Total implementation time: 6 months<br/>
                        ROI achieved: 8 months<br/>
                        Payback period: 14 months
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="common-challenges" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Common Challenges and Solutions</h2>
                
                <div className="space-y-6">
                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-3 font-medium text-white">Challenge: Data Quality and Integration</h3>
                    <p className="text-gray-400 mb-3">
                      Poor data quality and disconnected systems can undermine AI automation effectiveness.
                    </p>
                    <div className="text-gray-400">
                      <strong className="text-white">Solution:</strong> Implement data cleansing processes, establish data governance, 
                      and use integration platforms to connect disparate systems.
                    </div>
                  </div>

                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-3 font-medium text-white">Challenge: Employee Resistance</h3>
                    <p className="text-gray-400 mb-3">
                      Staff may resist change due to fear of job displacement or unfamiliarity with new technology.
                    </p>
                    <div className="text-gray-400">
                      <strong className="text-white">Solution:</strong> Provide comprehensive training, emphasize how AI enhances rather than replaces human work, 
                      and involve employees in the automation design process.
                    </div>
                  </div>

                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-3 font-medium text-white">Challenge: Technical Complexity</h3>
                    <p className="text-gray-400 mb-3">
                      AI automation can be technically complex, requiring specialized skills and infrastructure.
                    </p>
                    <div className="text-gray-400">
                      <strong className="text-white">Solution:</strong> Partner with experienced AI automation providers, 
                      start with simpler implementations, and gradually build internal capabilities.
                    </div>
                  </div>
                </div>
              </section>

              <section id="roi-measurement" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Measuring ROI and Success</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Track these key metrics to measure the success of your AI automation implementation:
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl mb-4 font-medium text-white">Quantitative Metrics</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Processing time reduction (%)</li>
                      <li>• Error rate decrease (%)</li>
                      <li>• Cost savings ($)</li>
                      <li>• Productivity increase (%)</li>
                      <li>• Customer satisfaction scores</li>
                      <li>• Employee efficiency gains</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl mb-4 font-medium text-white">Qualitative Benefits</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Improved decision-making quality</li>
                      <li>• Enhanced customer experience</li>
                      <li>• Better employee satisfaction</li>
                      <li>• Increased competitive advantage</li>
                      <li>• Improved compliance and governance</li>
                      <li>• Future-ready business capabilities</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Next Steps</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Ready to implement AI automation in your business? Here's how to get started:
                </p>

                <div className="border border-gray-800 p-8">
                  <h3 className="text-xl mb-4 font-medium text-white">Get Started Today</h3>
                  <ol className="text-gray-400 space-y-3">
                    <li>1. <strong className="text-white">Schedule a free consultation</strong> to assess your automation opportunities</li>
                    <li>2. <strong className="text-white">Receive a custom automation strategy</strong> tailored to your business needs</li>
                    <li>3. <strong className="text-white">Start with a pilot project</strong> to demonstrate ROI and build confidence</li>
                    <li>4. <strong className="text-white">Scale successful automations</strong> across your organization</li>
                  </ol>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link 
                      href={`/${resolvedParams.locale}#contact`}
                      className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm text-center"
                    >
                      Book a Free Consultation
                    </Link>
                    <Link 
                      href={`/${resolvedParams.locale}/ai-automation-services`}
                      className="px-6 py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm text-center"
                    >
                      Explore Our Services
                    </Link>
                  </div>
                </div>
              </section>
            </article>

            {/* Related Articles */}
            <section className="mt-16 border-t border-gray-900 pt-12">
              <h2 className="text-2xl mb-8 uppercase tracking-wider">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href={`/${resolvedParams.locale}/blog/ai-business-automation-benefits`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Benefits of AI Business Automation</h3>
                  <p className="text-gray-400 text-sm">Discover the top advantages of implementing AI automation in your business</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/blog/choosing-automation-software`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Choosing the Right Automation Software</h3>
                  <p className="text-gray-400 text-sm">A comprehensive guide to selecting the best automation tools for your needs</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/ai-automation-services`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Our AI Automation Services</h3>
                  <p className="text-gray-400 text-sm">Explore our comprehensive AI automation solutions and services</p>
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