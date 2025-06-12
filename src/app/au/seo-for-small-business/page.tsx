import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Zap, TrendingUp, Users, Shield, BarChart2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO for Small Business in Australia | Affordable Local SEO Services',
  description: 'Boost your local presence with our expert SEO services for small businesses in Australia. We help you rank higher in local search results and attract more customers.',
  keywords: ['local SEO Australia', 'small business SEO', 'local search ranking', 'SEO services Australia', 'affordable SEO'],
  alternates: { canonical: 'https://mybrmai.com/au/seo-for-small-business' },
};

const features = [
  {
    name: 'Local Keyword Targeting',
    description: 'We research and target keywords that your local customers in Australia are using to find services like yours.',
    icon: TrendingUp,
  },
  {
    name: 'Google Business Profile Optimisation',
    description: 'Complete optimisation of your GBP listing to rank higher on Google Maps and the local pack.',
    icon: CheckCircle,
  },
  {
    name: 'On-Page SEO for Local',
    description: 'We optimise your website\'s content and structure for local search, including city-specific pages.',
    icon: Zap,
  },
  {
    name: 'Australian Local Link Building',
    description: 'Building high-quality backlinks from reputable Australian websites and local directories.',
    icon: Users,
  },
  {
    name: 'Online Review Management',
    description: 'Strategies to encourage positive reviews and manage your online reputation across platforms.',
    icon: Shield,
  },
  {
    name: 'Performance Tracking',
    description: 'Transparent reporting on your local rankings, traffic, and lead generation.',
    icon: BarChart2,
  },
];

export default function SeoForSmallBusinessPage() {
  return (
    <div className="bg-gray-900 text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-cover bg-center pt-32 pb-16" style={{ backgroundImage: "url('/images/au-seo-hero.jpg')" }}>
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-normal mb-4 uppercase tracking-wider">
              SEO for Small Business in Australia
            </h1>
            <p className="mt-4 text-xl text-gray-300">Helping Australian Small Businesses Get Found on Google</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl mb-12 uppercase tracking-wider text-center">Our Local SEO Services for Australia</h2>
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
            <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Dominate Australian Local Search?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get a free SEO audit to uncover opportunities and see how we can help you grow.
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