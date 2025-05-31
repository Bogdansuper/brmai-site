import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Script from 'next/script';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${params.locale}/services/ai-business-automation`;
  
  return {
    title: 'AI Business Automation Services | Business Process Automation with AI | BRM AI',
    description: 'Transform your business with AI-powered automation. Our business process automation software uses artificial intelligence to streamline operations, reduce costs, and increase efficiency.',
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
      title: 'AI Business Automation Services | BRM AI',
      description: 'Transform your business with AI-powered automation solutions',
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default async function AIBusinessAutomationPage({ params }: Props) {
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
              <Link href={`/${params.locale}`} className="text-xl font-medium tracking-tight">
                BRM-AI
              </Link>
              <div className="flex items-center gap-6">
                <Link href={`/${params.locale}#services`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  ALL SERVICES
                </Link>
                <Link href={`/${params.locale}#contact`} className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all text-sm">
                  GET STARTED
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-8 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-8 uppercase tracking-tight">
              AI BUSINESS AUTOMATION
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl">
              Transform your business processes with artificial intelligence. Reduce operational costs by up to 70% 
              while improving efficiency and accuracy through intelligent automation.
            </p>
            <Link 
              href={`/${params.locale}#contact`}
              className="inline-block px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all text-sm tracking-wider"
            >
              START YOUR AUTOMATION JOURNEY →
            </Link>
          </div>
        </section>

        {/* What is AI Business Automation */}
        <section className="py-16 px-8 md:px-12 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal mb-8 uppercase tracking-wider">
              WHAT IS AI BUSINESS AUTOMATION?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  AI business automation combines artificial intelligence with business process automation to create 
                  intelligent systems that not only execute tasks but also learn, adapt, and make decisions. Unlike 
                  traditional automation, AI-powered solutions can handle complex, unstructured data and processes 
                  that previously required human intelligence.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Our business process automation with AI goes beyond simple rule-based automation. We implement 
                  machine learning algorithms, natural language processing, and computer vision to create truly 
                  intelligent automation solutions that evolve with your business.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl mb-3 uppercase">INTELLIGENT DECISION MAKING</h3>
                  <p className="text-gray-400">AI analyzes patterns and makes complex decisions based on historical data and real-time inputs.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3 uppercase">CONTINUOUS LEARNING</h3>
                  <p className="text-gray-400">Systems improve over time, adapting to new scenarios and optimizing processes automatically.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3 uppercase">SCALABLE SOLUTIONS</h3>
                  <p className="text-gray-400">Handle increasing workloads without proportional increases in resources or costs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 px-8 md:px-12 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal mb-16 uppercase tracking-wider text-center">
              KEY FEATURES OF OUR AI AUTOMATION
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <div className="text-3xl mb-4">🧠</div>
                <h3 className="text-xl mb-4 uppercase">NATURAL LANGUAGE PROCESSING</h3>
                <p className="text-gray-400">
                  Process and understand human language in documents, emails, and conversations. Automate 
                  customer service, document analysis, and communication workflows.
                </p>
              </div>
              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <div className="text-3xl mb-4">👁️</div>
                <h3 className="text-xl mb-4 uppercase">COMPUTER VISION</h3>
                <p className="text-gray-400">
                  Extract information from images and videos. Automate quality control, document processing, 
                  and visual inspection tasks with unprecedented accuracy.
                </p>
              </div>
              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl mb-4 uppercase">PREDICTIVE ANALYTICS</h3>
                <p className="text-gray-400">
                  Forecast future trends and behaviors. Optimize inventory, predict maintenance needs, and 
                  make data-driven decisions automatically.
                </p>
              </div>
              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl mb-4 uppercase">INTELLIGENT WORKFLOWS</h3>
                <p className="text-gray-400">
                  Create self-optimizing workflows that adapt to changing conditions. Route tasks intelligently 
                  and handle exceptions without human intervention.
                </p>
              </div>
              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="text-xl mb-4 uppercase">SEAMLESS INTEGRATION</h3>
                <p className="text-gray-400">
                  Connect with existing systems and databases. Our AI automation works with your current 
                  infrastructure, enhancing rather than replacing.
                </p>
              </div>
              <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl mb-4 uppercase">REAL-TIME MONITORING</h3>
                <p className="text-gray-400">
                  Track performance, identify bottlenecks, and receive intelligent recommendations for 
                  continuous improvement of your automated processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-8 md:px-12 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal mb-16 uppercase tracking-wider">
              BUSINESS AUTOMATION USE CASES
            </h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl mb-6 uppercase">FINANCE & ACCOUNTING</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Automated invoice processing and approval workflows</li>
                  <li>• Intelligent expense categorization and reporting</li>
                  <li>• Real-time fraud detection and prevention</li>
                  <li>• Automated financial reconciliation and auditing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl mb-6 uppercase">CUSTOMER SERVICE</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• AI-powered chatbots for 24/7 customer support</li>
                  <li>• Intelligent ticket routing and prioritization</li>
                  <li>• Automated response generation for common queries</li>
                  <li>• Sentiment analysis and customer satisfaction tracking</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl mb-6 uppercase">HUMAN RESOURCES</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Resume screening and candidate matching</li>
                  <li>• Automated onboarding and training processes</li>
                  <li>• Intelligent scheduling and leave management</li>
                  <li>• Performance analysis and feedback automation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl mb-6 uppercase">SUPPLY CHAIN & LOGISTICS</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Demand forecasting and inventory optimization</li>
                  <li>• Automated order processing and fulfillment</li>
                  <li>• Route optimization and delivery scheduling</li>
                  <li>• Predictive maintenance for equipment and vehicles</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-16 px-8 md:px-12 bg-gray-950">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-16 uppercase tracking-wider">
              PROVEN RETURN ON INVESTMENT
            </h2>
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="text-5xl font-bold mb-2">70%</div>
                <p className="text-gray-400">Reduction in operational costs</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">85%</div>
                <p className="text-gray-400">Faster process completion</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">95%</div>
                <p className="text-gray-400">Accuracy improvement</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">3x</div>
                <p className="text-gray-400">Productivity increase</p>
              </div>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI business automation solutions deliver measurable results. Most clients see positive ROI 
              within 6 months and full payback within 12-18 months of implementation.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 md:px-12 border-t border-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-8 uppercase tracking-wider">
              READY TO AUTOMATE YOUR BUSINESS?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Let's discuss how AI business automation can transform your operations. 
              Get a free consultation and custom automation roadmap for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/${params.locale}#contact`}
                className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all text-sm tracking-wider text-center"
              >
                GET FREE CONSULTATION →
              </Link>
              <Link 
                href={`/${params.locale}/blog`}
                className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-all text-sm tracking-wider text-center"
              >
                LEARN MORE IN OUR BLOG
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-8 md:px-12 border-t border-gray-900">
          <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} BRM AI - Business Process Automation</p>
            <div className="flex gap-6">
              <Link href={`/${params.locale}`} className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href={`/${params.locale}#services`} className="hover:text-white transition-colors">
                All Services
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 