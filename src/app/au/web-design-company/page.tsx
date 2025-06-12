import { Metadata } from 'next';
import Link from 'next/link';
import { Layers, Zap, Palette, Users, Shield, BarChart2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Design Company Australia | Custom Website Design Services',
  description: 'Leading web design company in Australia. We create stunning, high-performance websites tailored to your business needs, from corporate sites to e-commerce platforms.',
  keywords: ['web design Australia', 'website design company', 'custom web design', 'e-commerce website Australia', 'web developers'],
  alternates: { canonical: 'https://mybrmai.com/au/web-design-company' },
};

const features = [
  {
    name: 'Custom Web Design AU',
    description: 'Bespoke web designs tailored to Australian audiences. We focus on creating a unique brand identity that resonates locally.',
    icon: Palette,
  },
  {
    name: 'E-commerce Solutions',
    description: 'Robust e-commerce platforms for Australian businesses, with local payment gateways and shipping integrations.',
    icon: Layers,
  },
  {
    name: 'High-Performance & SEO',
    description: 'Fast, responsive, and SEO-optimised websites built to rank well on Google Australia.',
    icon: Zap,
  },
  {
    name: 'Ongoing Support',
    description: 'Dedicated support for our Australian clients, ensuring your website runs smoothly.',
    icon: Users,
  },
  {
    name: 'Conversion-Focused Design',
    description: 'We design websites with a clear focus on converting your Australian visitors into customers.',
    icon: BarChart2,
  },
  {
    name: 'Secure & Reliable',
    description: 'Implementing top-tier security measures to protect your website and customer data.',
    icon: Shield,
  },
];

export default function WebDesignCompanyAuPage() {
  return (
    <div className="bg-gray-900 text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-cover bg-center pt-32 pb-16" style={{ backgroundImage: "url('/images/au-web-design-hero.jpg')" }}>
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-normal mb-4 uppercase tracking-wider">
              Web Design Company Australia
            </h1>
            <p className="mt-4 text-xl text-gray-300">Creating Digital Experiences That Drive Results</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl mb-12 uppercase tracking-wider text-center">Our Web Design Services</h2>
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
            <h2 className="text-3xl font-semibold mb-4">Ready for a Website That Stands Out?</h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">Let's build a powerful online presence for your Australian business. Contact us for a free consultation.</p>
            <Link
                href="mailto:brmai@mybrmai.com"
                className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
              >
                Get Started
              </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 