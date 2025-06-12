import { Metadata } from 'next';
import Link from 'next/link';
import { Megaphone, TrendingUp, Users, Shield, BarChart2, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency London | Results-Driven Online Marketing',
  description: 'Leading digital marketing agency in London. We provide SEO, PPC, social media, and content marketing services to help your business grow.',
  keywords: ['digital marketing agency London', 'London SEO company', 'PPC agency London', 'online marketing UK', 'social media marketing London'],
  alternates: { canonical: 'https://mybrmai.com/london/digital-marketing-agency' },
};

const features = [
  {
    name: 'Targeted London SEO',
    description: 'Dominating search results for London-based queries through expert local and technical SEO.',
    icon: TrendingUp,
  },
  {
    name: 'PPC Campaigns for London',
    description: 'Highly targeted pay-per-click campaigns on Google and social media to reach your London audience.',
    icon: Megaphone,
  },
  {
    name: 'Social Media Management',
    description: 'Engaging with the London community and building your brand presence on relevant social platforms.',
    icon: Users,
  },
  {
    name: 'London-focused Content',
    description: 'Creating content that speaks directly to a London audience, establishing you as a local authority.',
    icon: MapPin,
  },
  {
    name: 'Analytics and Reporting',
    description: 'Transparent reporting so you can see the tangible results of your digital marketing spend in London.',
    icon: BarChart2,
  },
  {
    name: 'Reputation Management',
    description: 'Building and protecting your online reputation among London customers.',
    icon: Shield,
  },
];

export default function DigitalMarketingAgencyLondonPage() {
  return (
    <div className="bg-gray-900 text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-cover bg-center pt-32 pb-16" style={{ backgroundImage: "url('/images/london-marketing-hero.jpg')" }}>
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-normal mb-4 uppercase tracking-wider">
              Digital Marketing Agency London
            </h1>
            <p className="mt-4 text-xl text-gray-300">Driving Growth for Businesses in the Heart of London</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl mb-12 uppercase tracking-wider text-center">Our London Digital Marketing Services</h2>
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
            <h2 className="text-3xl mb-6 uppercase tracking-wider">Ready to Grow Your London Business?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get a free consultation and let's discuss how we can elevate your digital presence in London.
            </p>
            <Link href="mailto:brmai@mybrmai.com" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm">
              Request a Consultation
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 