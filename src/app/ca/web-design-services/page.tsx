import { Metadata } from 'next';
import Link from 'next/link';
import { Layers, Palette, Zap, Users, Shield, BarChart2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Design Services Canada | Professional Website Creation',
  description: 'Top-tier web design services in Canada. We build responsive, SEO-friendly, and visually stunning websites that convert visitors into customers.',
  keywords: ['web design Canada', 'website design services', 'Canadian web developers', 'responsive web design', 'e-commerce Canada'],
  alternates: { canonical: 'https://mybrmai.com/ca/web-design-services' },
};

const features = [
  {
    name: 'Custom Web Design for Canada',
    description: 'Bespoke web designs that resonate with Canadian audiences, from Toronto to Vancouver.',
    icon: Palette,
  },
  {
    name: 'Shopify & E-commerce',
    description: 'Expert e-commerce solutions for Canadian businesses, with local payment and shipping integrations.',
    icon: Layers,
  },
  {
    name: 'Bilingual Websites (EN/FR)',
    description: 'Professionally designed bilingual websites to serve both English and French-speaking customers in Canada.',
    icon: Users,
  },
  {
    name: 'High-Performance & SEO',
    description: 'Fast, mobile-friendly, and SEO-optimised websites built to rank on Google.ca.',
    icon: Zap,
  },
  {
    name: 'Conversion Rate Optimization',
    description: 'Designing websites with a clear focus on converting your Canadian traffic into paying customers.',
    icon: BarChart2,
  },
  {
    name: 'Secure & Reliable Hosting',
    description: 'Top-tier security and reliable Canadian hosting solutions to protect your site and data.',
    icon: Shield,
  },
];

export default function WebDesignServicesCaPage() {
  return (
    <div className="bg-gray-900 text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-cover bg-center pt-32 pb-16" style={{ backgroundImage: "url('/images/ca-web-design-hero.jpg')" }}>
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-normal mb-4 uppercase tracking-wider">
              Web Design Services Canada
            </h1>
            <p className="mt-4 text-xl text-gray-300">Professional & Affordable Web Design for Canadian Businesses</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl mb-12 uppercase tracking-wider text-center">Our Canadian Web Design Services</h2>
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
            <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Start Your Canadian Web Project?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get a free consultation and let's create a website that grows your business in Canada.
            </p>
            <Link href="mailto:brmai@mybrmai.com" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm">
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 