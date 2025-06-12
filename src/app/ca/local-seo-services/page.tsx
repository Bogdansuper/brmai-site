import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Zap, TrendingUp, Users, Shield, BarChart2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Local SEO Services Canada | Rank Higher in Your Area',
  description: 'Dominate local search results in Canada with our expert local SEO services. We help businesses attract more local customers and increase foot traffic.',
  keywords: ['local SEO Canada', 'Canadian SEO services', 'local search marketing', 'Google Maps SEO', 'local business SEO'],
  alternates: { canonical: 'https://mybrmai.com/ca/local-seo-services' },
};

const features = [
  {
    name: 'Canada-focused Keyword Research',
    description: 'We target keywords that your Canadian customers are using to find local businesses like yours.',
    icon: TrendingUp,
  },
  {
    name: 'Google Business Profile (GBP) Management',
    description: 'Optimising your GBP for Canadian cities and provinces to dominate the local map pack.',
    icon: CheckCircle,
  },
  {
    name: 'Bilingual SEO (EN/FR)',
    description: 'Offering SEO services for both English and French to reach a wider Canadian audience.',
    icon: Users,
  },
  {
    name: 'Canadian Citation Building',
    description: 'Building high-quality local citations from reputable Canadian directories like Yellow Pages Canada.',
    icon: Zap,
  },
  {
    name: 'Reputation Management',
    description: 'Monitoring and managing your online reputation on Canadian review sites.',
    icon: Shield,
  },
  {
    name: 'Performance Reporting',
    description: 'Transparent reporting on your local Canadian search rankings, traffic, and leads.',
    icon: BarChart2,
  },
];

export default function LocalSeoServicesCaPage() {
  return (
    <div className="bg-gray-900 text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-cover bg-center pt-32 pb-16" style={{ backgroundImage: "url('/images/ca-local-seo-hero.jpg')" }}>
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-normal mb-4 uppercase tracking-wider">
              Local SEO Services Canada
            </h1>
            <p className="mt-4 text-xl text-gray-300">Get Found by More Local Customers in Canada</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl mb-12 uppercase tracking-wider text-center">Our Canadian Local SEO Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-900 p-6">
                  <feature.icon className="w-10 h-10 mb-4 text-green-400" />
                  <h3 className="text-xl mb-3 font-medium">{feature.name}</h3>
                  <p className="text-gray-400 text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Dominate Canadian Local Search?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get a free local SEO audit and see how we can boost your visibility in your Canadian service area.
            </p>
            <Link href="mailto:brmai@mybrmai.com" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm">
              Get Your Free Audit
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 