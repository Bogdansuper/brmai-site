import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Design Services Canada | Business Website Developer Canada',
  description: 'Professional web design services for small business Canada. Expert business website developers serving Ontario, BC, Quebec, and all Canadian provinces.',
  keywords: [
    'web design services for small business Canada',
    'business website developer Canada'
  ],
  alternates: {
    canonical: 'https://mybrmai.com/ca/web-design-services',
  },
};

export default function WebDesignServicesCanadaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900/50">
        <nav className="px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link href="/en" className="text-xl font-medium tracking-tight">BRM-AI</Link>
            <Link href="#contact" className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all text-sm">
              Get Quote
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-24 px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <section className="mb-20">
            <h1 className="text-4xl md:text-6xl font-normal mb-8 uppercase tracking-wider">
              Web Design Services Canada
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
              Professional web design services for small business Canada. We serve all provinces 
              from coast to coast with bilingual support and Canadian-focused design solutions.
            </p>
            <Link href="#contact" className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm">
              Get Free Quote
            </Link>
          </section>

          {/* Province Selector */}
          <section className="mb-20">
            <h2 className="text-3xl mb-12 uppercase tracking-wider">Serving All Canadian Provinces</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {['Ontario (ON)', 'British Columbia (BC)', 'Quebec (QC)', 'Alberta (AB)', 'Saskatchewan (SK)', 'Manitoba (MB)', 'Nova Scotia (NS)', 'New Brunswick (NB)', 'Newfoundland (NL)', 'Prince Edward Island (PEI)', 'Yukon (YT)', 'Northwest Territories (NT)'].map((province) => (
                <div key={province} className="border border-gray-800 p-4 text-center hover:border-gray-600 transition-colors">
                  <span className="text-gray-400">{province}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Canadian Portfolio */}
          <section className="mb-20 border-t border-gray-900 pt-16">
            <h2 className="text-3xl mb-12 uppercase tracking-wider">Canadian Portfolio</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 p-6">
                <h3 className="text-xl mb-3 font-medium">Maple Leaf Restaurant Chain</h3>
                <p className="text-gray-400 mb-4">Multi-location restaurant website with bilingual menus and online ordering</p>
                <span className="text-sm text-gray-500">Toronto, ON • Montreal, QC</span>
              </div>
              <div className="border border-gray-800 p-6">
                <h3 className="text-xl mb-3 font-medium">Northern Outdoors Co.</h3>
                <p className="text-gray-400 mb-4">E-commerce site for outdoor gear with winter shipping across Canada</p>
                <span className="text-sm text-gray-500">Vancouver, BC</span>
              </div>
              <div className="border border-gray-800 p-6">
                <h3 className="text-xl mb-3 font-medium">Prairie Financial Services</h3>
                <p className="text-gray-400 mb-4">Professional services website with secure client portal</p>
                <span className="text-sm text-gray-500">Calgary, AB</span>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-20">
            <h2 className="text-3xl mb-12 uppercase tracking-wider text-center">Canadian Pricing (CAD)</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 p-8 text-center">
                <h3 className="text-2xl mb-4 font-medium">Basic Website</h3>
                <div className="text-3xl mb-6 font-bold">$3,999 CAD</div>
                <ul className="text-gray-400 space-y-3 mb-8 text-left">
                  <li>• 5-page responsive website</li>
                  <li>• Canadian hosting included</li>
                  <li>• Bilingual support (EN/FR)</li>
                  <li>• Mobile optimization</li>
                  <li>• 6 months support</li>
                </ul>
                <Link href="#contact" className="block w-full py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm text-center">
                  Get Started
                </Link>
              </div>
              
              <div className="border border-white p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 text-sm font-medium">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl mb-4 font-medium">Business Website</h3>
                <div className="text-3xl mb-6 font-bold">$7,999 CAD</div>
                <ul className="text-gray-400 space-y-3 mb-8 text-left">
                  <li>• 15-page custom design</li>
                  <li>• E-commerce functionality</li>
                  <li>• Canadian payment processing</li>
                  <li>• HST/GST compliance</li>
                  <li>• 12 months support</li>
                  <li>• SEO optimization</li>
                </ul>
                <Link href="#contact" className="block w-full py-3 bg-white text-black hover:bg-gray-200 transition-all uppercase tracking-wider text-sm text-center">
                  Get Started
                </Link>
              </div>

              <div className="border border-gray-800 p-8 text-center">
                <h3 className="text-2xl mb-4 font-medium">Enterprise</h3>
                <div className="text-3xl mb-6 font-bold">$15,999 CAD</div>
                <ul className="text-gray-400 space-y-3 mb-8 text-left">
                  <li>• Custom web application</li>
                  <li>• Multi-location support</li>
                  <li>• Advanced integrations</li>
                  <li>• Priority Canadian support</li>
                  <li>• Dedicated project manager</li>
                  <li>• 24 months support</li>
                </ul>
                <Link href="#contact" className="block w-full py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="text-center py-16 border border-gray-800">
            <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Start Your Canadian Web Project?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get a free consultation with our Canadian web design experts.
            </p>
            <Link href="mailto:contact@mybrmai.com" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm">
              Get Free Consultation
            </Link>
          </section>
        </div>
      </main>

      <footer className="py-8 px-8 md:px-12 border-t border-gray-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BRM AI Canada</p>
          <Link href="/en" className="hover:text-white transition-colors">Back to Home</Link>
        </div>
      </footer>
    </div>
  );
} 