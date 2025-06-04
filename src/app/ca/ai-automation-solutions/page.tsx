import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI Automation Solutions Canada | AI-Powered Business Automation',
  description: 'Leading AI automation solutions in Canada. AI-powered business automation and AI process automation Canada for improved efficiency and growth.',
  keywords: [
    'AI automation solutions Canada',
    'AI-powered business automation',
    'AI process automation Canada'
  ],
  alternates: {
    canonical: 'https://mybrmai.com/ca/ai-automation-solutions',
  },
  openGraph: {
    title: 'AI Automation Solutions Canada | AI-Powered Business Automation',
    description: 'Leading AI automation solutions in Canada. AI-powered business automation for improved efficiency and growth.',
    url: 'https://mybrmai.com/ca/ai-automation-solutions',
  },
};

export default function AIAutomationSolutionsCanadaPage() {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Automation Solutions Canada",
    "description": "AI-powered business automation solutions for Canadian businesses",
    "provider": {
      "@type": "Organization",
      "name": "BRM AI",
      "url": "https://mybrmai.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    }
  };

  return (
    <>
      <Script
        id="ai-automation-canada-schema"
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
              <Link href="/en" className="text-xl font-medium tracking-tight">
                BRM-AI
              </Link>
              <Link 
                href="#contact" 
                className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all text-sm"
              >
                Get Free Quote
              </Link>
            </div>
          </nav>
        </header>

        <main className="pt-32 pb-24 px-8 md:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <section className="mb-20">
              <h1 className="text-4xl md:text-6xl font-normal mb-8 uppercase tracking-wider">
                AI Automation Solutions Canada
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Transform your Canadian business with cutting-edge AI automation solutions. 
                From Toronto to Vancouver, we help businesses across Canada implement AI-powered 
                automation that drives efficiency and growth.
              </p>
              <Link 
                href="#contact"
                className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
              >
                Get Free Consultation
              </Link>
            </section>

            {/* Services Grid */}
            <section className="mb-20">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">AI Automation Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">AI-Powered Customer Service</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Intelligent chatbots and virtual assistants that provide 24/7 customer support in English and French.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Bilingual AI chat support</li>
                    <li>• Automated ticket routing</li>
                    <li>• Voice AI integration</li>
                    <li>• Canadian privacy compliance</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Automated Financial Processing</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Streamline invoicing, accounting, and financial reporting with AI that understands Canadian tax requirements.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• HST/GST calculation automation</li>
                    <li>• CRA-compliant reporting</li>
                    <li>• Automated expense categorization</li>
                    <li>• Multi-province tax handling</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl mb-4 font-medium">Supply Chain Optimization</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    AI-driven supply chain management optimized for Canadian logistics and cross-border operations.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Inventory prediction</li>
                    <li>• Cross-border shipping optimization</li>
                    <li>• Demand forecasting</li>
                    <li>• Supplier relationship automation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-20 border-t border-gray-900 pt-16">
              <h2 className="text-3xl mb-12 uppercase tracking-wider text-center">Canadian Pricing (CAD)</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-800 p-8 text-center">
                  <h3 className="text-2xl mb-4 font-medium">Starter</h3>
                  <div className="text-3xl mb-6 font-bold">$2,999 CAD</div>
                  <ul className="text-gray-400 space-y-3 mb-8 text-left">
                    <li>• Basic AI chatbot setup</li>
                    <li>• Email automation</li>
                    <li>• Simple reporting dashboard</li>
                    <li>• 3 months support</li>
                    <li>• PIPEDA compliance included</li>
                  </ul>
                  <Link 
                    href="#contact"
                    className="block w-full py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm text-center"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="border border-white p-8 text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 text-sm font-medium">
                    MOST POPULAR
                  </div>
                  <h3 className="text-2xl mb-4 font-medium">Professional</h3>
                  <div className="text-3xl mb-6 font-bold">$7,999 CAD</div>
                  <ul className="text-gray-400 space-y-3 mb-8 text-left">
                    <li>• Advanced AI automation suite</li>
                    <li>• Bilingual support (EN/FR)</li>
                    <li>• CRA-compliant financial automation</li>
                    <li>• Custom integrations</li>
                    <li>• 12 months support</li>
                    <li>• Priority Canadian support</li>
                  </ul>
                  <Link 
                    href="#contact"
                    className="block w-full py-3 bg-white text-black hover:bg-gray-200 transition-all uppercase tracking-wider text-sm text-center"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="border border-gray-800 p-8 text-center">
                  <h3 className="text-2xl mb-4 font-medium">Enterprise</h3>
                  <div className="text-3xl mb-6 font-bold">$19,999 CAD</div>
                  <ul className="text-gray-400 space-y-3 mb-8 text-left">
                    <li>• Complete AI transformation</li>
                    <li>• Multi-location support</li>
                    <li>• Advanced analytics & AI insights</li>
                    <li>• Dedicated Canadian account manager</li>
                    <li>• 24/7 priority support</li>
                    <li>• Custom AI model development</li>
                  </ul>
                  <Link 
                    href="#contact"
                    className="block w-full py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </section>

            {/* Canadian Success Stories */}
            <section className="mb-20">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Canadian Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-gray-800 p-8">
                  <p className="text-gray-400 mb-6 italic text-lg">
                    "BRM AI's automation solutions helped us streamline operations across our Toronto and Montreal offices. 
                    The bilingual support was crucial for our Quebec operations."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-medium">Marie Dubois</div>
                      <div className="text-gray-500">COO, Maple Tech Solutions, Montreal QC</div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-800 p-8">
                  <p className="text-gray-400 mb-6 italic text-lg">
                    "The HST automation alone saved us 15 hours per week. Their understanding of Canadian 
                    business requirements is outstanding."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-medium">James Robertson</div>
                      <div className="text-gray-500">CFO, Northern Logistics, Calgary AB</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Canadian Compliance */}
            <section className="mb-20 border-t border-gray-900 pt-16">
              <h2 className="text-3xl mb-12 uppercase tracking-wider">Canadian Compliance & Privacy</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl mb-6 font-medium">Privacy & Data Protection</h3>
                  <ul className="text-gray-400 space-y-3">
                    <li>• <strong className="text-white">PIPEDA Compliance:</strong> Full adherence to Personal Information Protection and Electronic Documents Act</li>
                    <li>• <strong className="text-white">Data Residency:</strong> Option to keep all data within Canadian borders</li>
                    <li>• <strong className="text-white">Provincial Laws:</strong> Compliance with provincial privacy legislation</li>
                    <li>• <strong className="text-white">Security Standards:</strong> Enhanced security protocols for Canadian businesses</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl mb-6 font-medium">Tax & Regulatory Compliance</h3>
                  <ul className="text-gray-400 space-y-3">
                    <li>• <strong className="text-white">CRA Integration:</strong> Direct integration with Canada Revenue Agency systems</li>
                    <li>• <strong className="text-white">Multi-Province Support:</strong> HST, GST, and PST handling for all provinces</li>
                    <li>• <strong className="text-white">Payroll Compliance:</strong> Canadian payroll tax automation</li>
                    <li>• <strong className="text-white">Regulatory Updates:</strong> Automatic updates for changing Canadian regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="text-center py-16 border border-gray-800">
              <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Automate Your Canadian Business?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Get a free consultation with our Canadian AI automation experts. 
                We understand the unique needs of Canadian businesses coast to coast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@mybrmai.com"
                  className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
                >
                  Get Free Consultation
                </a>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-8 md:px-12 border-t border-gray-900">
          <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} BRM AI Canada</p>
            <Link href="/en" className="hover:text-white transition-colors">
              Back to Home
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
} 