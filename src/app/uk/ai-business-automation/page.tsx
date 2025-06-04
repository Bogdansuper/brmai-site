import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Business Automation UK | AI Automation Solutions for British Businesses',
  description: 'Leading AI business automation UK solutions. Transform your British business with AI automation tools designed for the UK market.',
  keywords: ['AI business automation UK'],
  alternates: { canonical: 'https://mybrmai.com/uk/ai-business-automation' },
};

export default function AIBusinessAutomationUKPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900/50">
        <nav className="px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link href="/en" className="text-xl font-medium tracking-tight">BRM-AI</Link>
            <Link href="#contact" className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all text-sm">Get Quote</Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-24 px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <section className="mb-20">
            <h1 className="text-4xl md:text-6xl font-normal mb-8 uppercase tracking-wider">
              AI Business Automation UK
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
              Transform your British business with cutting-edge AI automation solutions. 
              From London to Edinburgh, we help UK businesses implement intelligent automation 
              that drives efficiency and growth across all sectors.
            </p>
            <Link href="#contact" className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm">
              Get Free Consultation
            </Link>
          </section>

          {/* Services */}
          <section className="mb-20">
            <h2 className="text-3xl mb-12 uppercase tracking-wider">AI Automation Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 p-8">
                <h3 className="text-xl mb-4 font-medium">HMRC-Compliant Financial Automation</h3>
                <p className="text-gray-400 mb-4">Automated bookkeeping, VAT submissions, and financial reporting that meets UK regulatory requirements.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Automated VAT calculations</li>
                  <li>• HMRC MTD compliance</li>
                  <li>• Real-time financial reporting</li>
                  <li>• GDPR-compliant data handling</li>
                </ul>
              </div>
              <div className="border border-gray-800 p-8">
                <h3 className="text-xl mb-4 font-medium">Customer Service Automation</h3>
                <p className="text-gray-400 mb-4">Intelligent chatbots and virtual assistants trained on British English and UK business practices.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• UK English language models</li>
                  <li>• Omnichannel support</li>
                  <li>• Local business hour automation</li>
                  <li>• Integration with UK CRM systems</li>
                </ul>
              </div>
              <div className="border border-gray-800 p-8">
                <h3 className="text-xl mb-4 font-medium">Supply Chain & Logistics AI</h3>
                <p className="text-gray-400 mb-4">Optimise your UK supply chain with AI-powered logistics and inventory management solutions.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Brexit-aware logistics planning</li>
                  <li>• UK courier integration</li>
                  <li>• Demand forecasting</li>
                  <li>• Multi-channel inventory sync</li>
                </ul>
              </div>
            </div>
          </section>

          {/* UK Pricing */}
          <section className="mb-20 border-t border-gray-900 pt-16">
            <h2 className="text-3xl mb-12 uppercase tracking-wider text-center">UK Pricing (GBP)</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 p-8 text-center">
                <h3 className="text-2xl mb-4 font-medium">Starter</h3>
                <div className="text-3xl mb-6 font-bold">from £2,499</div>
                <ul className="text-gray-400 space-y-3 mb-8 text-left">
                  <li>• Basic AI automation setup</li>
                  <li>• GDPR compliance included</li>
                  <li>• UK business hour support</li>
                  <li>• 3 months implementation</li>
                </ul>
                <Link href="#contact" className="block w-full py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm text-center">
                  Get Started
                </Link>
              </div>
              <div className="border border-white p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 text-sm font-medium">
                  POPULAR
                </div>
                <h3 className="text-2xl mb-4 font-medium">Professional</h3>
                <div className="text-3xl mb-6 font-bold">from £5,999</div>
                <ul className="text-gray-400 space-y-3 mb-8 text-left">
                  <li>• Advanced AI automation suite</li>
                  <li>• HMRC compliance automation</li>
                  <li>• Priority UK support</li>
                  <li>• 6 months implementation</li>
                  <li>• Custom integrations</li>
                </ul>
                <Link href="#contact" className="block w-full py-3 bg-white text-black hover:bg-gray-200 transition-all uppercase tracking-wider text-sm text-center">
                  Get Started
                </Link>
              </div>
              <div className="border border-gray-800 p-8 text-center">
                <h3 className="text-2xl mb-4 font-medium">Enterprise</h3>
                <div className="text-3xl mb-6 font-bold">from £15,999</div>
                <ul className="text-gray-400 space-y-3 mb-8 text-left">
                  <li>• Complete AI transformation</li>
                  <li>• Dedicated UK account manager</li>
                  <li>• 24/7 premium support</li>
                  <li>• Custom AI model development</li>
                  <li>• Multi-location support</li>
                </ul>
                <Link href="#contact" className="block w-full py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </section>

          {/* UK Client Stories */}
          <section className="mb-20">
            <h2 className="text-3xl mb-12 uppercase tracking-wider">UK Client Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 p-8">
                <p className="text-gray-400 mb-6 italic text-lg">
                  "BRM AI's automation solutions helped us streamline our Manchester operations whilst maintaining full HMRC compliance. Brilliant work!"
                </p>
                <div>
                  <div className="font-medium">James Fletcher</div>
                  <div className="text-gray-500">Managing Director, Fletcher Manufacturing Ltd, Manchester</div>
                </div>
              </div>
              <div className="border border-gray-800 p-8">
                <p className="text-gray-400 mb-6 italic text-lg">
                  "The AI customer service implementation exceeded our expectations. Our Edinburgh office saw a 200% improvement in response times."
                </p>
                <div>
                  <div className="font-medium">Fiona MacLeod</div>
                  <div className="text-gray-500">Operations Director, Scotia Services, Edinburgh</div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="text-center py-16 border border-gray-800">
            <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Automate Your UK Business?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get a free consultation with our UK AI automation specialists. We understand British business requirements and regulations.
            </p>
            <Link href="mailto:uk@mybrmai.com" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm">
              Get Free Consultation
            </Link>
          </section>
        </div>
      </main>

      <footer className="py-8 px-8 md:px-12 border-t border-gray-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BRM AI UK</p>
          <Link href="/en" className="hover:text-white transition-colors">Back to Home</Link>
        </div>
      </footer>
    </div>
  );
} 