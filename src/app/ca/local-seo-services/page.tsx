import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Local SEO Services Canada | SEO Tips for Small Business Canada',
  description: 'Professional local SEO services Canada. Expert SEO tips for small business Canada with proven results across all provinces.',
  keywords: ['local SEO services Canada', 'SEO tips for small business Canada'],
  alternates: { canonical: 'https://mybrmai.com/ca/local-seo-services' },
};

export default function LocalSEOServicesCanadaPage() {
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
              Local SEO Services Canada
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
              Dominate local search across Canada with our expert local SEO services. 
              From Google My Business optimization to Canadian directory listings, we help businesses rank higher in local search results.
            </p>
            <Link href="#contact" className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm">
              Get Free SEO Audit
            </Link>
          </section>

          {/* Services */}
          <section className="mb-20">
            <h2 className="text-3xl mb-12 uppercase tracking-wider">Our Canadian SEO Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 p-8">
                <h3 className="text-xl mb-4 font-medium">Google My Business Optimization</h3>
                <p className="text-gray-400 mb-4">Complete optimization of your Google Business Profile for maximum local visibility across Canadian cities.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Profile setup & verification</li>
                  <li>• Bilingual optimization (EN/FR)</li>
                  <li>• Canadian-specific categories</li>
                  <li>• Review management</li>
                </ul>
              </div>
              <div className="border border-gray-800 p-8">
                <h3 className="text-xl mb-4 font-medium">Canadian Directory Listings</h3>
                <p className="text-gray-400 mb-4">Build consistent citations across major Canadian directories and local business listings.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Yellow Pages Canada</li>
                  <li>• Canada411 listings</li>
                  <li>• Provincial directories</li>
                  <li>• Industry-specific listings</li>
                </ul>
              </div>
              <div className="border border-gray-800 p-8">
                <h3 className="text-xl mb-4 font-medium">Local Content & Keywords</h3>
                <p className="text-gray-400 mb-4">Target Canadian customers with locally-optimized content and city-specific keyword strategies.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Canadian keyword research</li>
                  <li>• Local content creation</li>
                  <li>• City-specific landing pages</li>
                  <li>• Canadian spelling optimization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Canadian Case Study */}
          <section className="mb-20 border-t border-gray-900 pt-16">
            <h2 className="text-3xl mb-12 uppercase tracking-wider">Canadian SEO Success Story</h2>
            <div className="border border-gray-800 p-8">
              <h3 className="text-2xl mb-6 font-medium">Halifax Dental Clinic: 400% Increase in Local Traffic</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg mb-4 font-medium text-white">Challenge</h4>
                  <p className="text-gray-400 mb-6">
                    A dental clinic in Halifax was struggling to attract local patients and rank for 
                    competitive dental keywords in the Maritime provinces.
                  </p>
                  <h4 className="text-lg mb-4 font-medium text-white">Our Strategy</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Optimized Google My Business for Halifax area</li>
                    <li>• Created content targeting Maritime dental keywords</li>
                    <li>• Built citations across Canadian dental directories</li>
                    <li>• Implemented local schema markup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg mb-4 font-medium text-white">Results in 8 Months</h4>
                  <ul className="text-gray-400 space-y-3">
                    <li>• <strong className="text-white">400% increase</strong> in local organic traffic</li>
                    <li>• <strong className="text-white">#1 ranking</strong> for "dentist Halifax"</li>
                    <li>• <strong className="text-white">250% more</strong> appointment bookings</li>
                    <li>• <strong className="text-white">85% improvement</strong> in Google My Business views</li>
                  </ul>
                  <div className="mt-6 p-4 border border-gray-700">
                    <p className="text-gray-400 italic">
                      "BRM AI's local SEO expertise helped us become the top-ranked dental clinic in Halifax. 
                      Our patient base has grown significantly."
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="font-medium">Dr. Sarah MacLeod</div>
                      <div className="text-gray-500">Halifax Dental Care, NS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-20">
            <h2 className="text-3xl mb-12 uppercase tracking-wider text-center">Canadian SEO Pricing (CAD)</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-800 p-8 text-center">
                <h3 className="text-2xl mb-4 font-medium">Local Starter</h3>
                <div className="text-3xl mb-6 font-bold">$799 CAD<span className="text-lg font-normal">/month</span></div>
                <ul className="text-gray-400 space-y-3 mb-8 text-left">
                  <li>• Google My Business optimization</li>
                  <li>• 20 Canadian citations</li>
                  <li>• Monthly reporting</li>
                  <li>• Review monitoring</li>
                </ul>
                <Link href="#contact" className="block w-full py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm text-center">
                  Get Started
                </Link>
              </div>
              <div className="border border-white p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 text-sm font-medium">
                  POPULAR
                </div>
                <h3 className="text-2xl mb-4 font-medium">Local Pro</h3>
                <div className="text-3xl mb-6 font-bold">$1,299 CAD<span className="text-lg font-normal">/month</span></div>
                <ul className="text-gray-400 space-y-3 mb-8 text-left">
                  <li>• Everything in Starter</li>
                  <li>• 50 Canadian citations</li>
                  <li>• Local content creation</li>
                  <li>• Bilingual optimization</li>
                  <li>• Review response management</li>
                </ul>
                <Link href="#contact" className="block w-full py-3 bg-white text-black hover:bg-gray-200 transition-all uppercase tracking-wider text-sm text-center">
                  Get Started
                </Link>
              </div>
              <div className="border border-gray-800 p-8 text-center">
                <h3 className="text-2xl mb-4 font-medium">Enterprise</h3>
                <div className="text-3xl mb-6 font-bold">$2,499 CAD<span className="text-lg font-normal">/month</span></div>
                <ul className="text-gray-400 space-y-3 mb-8 text-left">
                  <li>• Everything in Pro</li>
                  <li>• Multi-location optimization</li>
                  <li>• Advanced analytics</li>
                  <li>• Dedicated account manager</li>
                  <li>• Priority support</li>
                </ul>
                <Link href="#contact" className="block w-full py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="contact" className="text-center py-16 border border-gray-800">
            <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Dominate Canadian Local Search?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get a free local SEO audit and see how we can improve your Canadian search rankings.
            </p>
            <Link href="mailto:contact@mybrmai.com" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm">
              Get Free SEO Audit
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