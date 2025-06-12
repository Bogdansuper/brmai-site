import { Metadata } from 'next';
import Link from 'next/link';
import { Settings2, Users, Scaling, Zap, Shield, BarChart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom CRM Software Development UK | Tailored CRM Solutions',
  description: 'Bespoke CRM software development services in the UK. We build custom CRM systems that streamline your sales, marketing, and customer service processes.',
  keywords: ['custom CRM UK', 'CRM software development', 'bespoke CRM solutions', 'CRM systems UK', 'CRM developers'],
  alternates: { canonical: 'https://mybrmai.com/uk/crm-software-development' },
};

const features = [
  {
    name: 'Bespoke CRM for UK Business',
    description: 'We build CRM systems tailored to the specific needs and regulations of the UK market.',
    icon: Settings2,
  },
  {
    name: 'Sales & Client Management',
    description: 'A unified platform to manage your UK sales pipeline, customer interactions, and data.',
    icon: Users,
  },
  {
    name: 'Scalable Architecture',
    description: 'Our CRM solutions are built to scale with your business as you grow in the UK market.',
    icon: Scaling,
  },
  {
    name: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline your business processes to improve efficiency.',
    icon: Zap,
  },
  {
    name: 'Secure & Compliant',
    description: 'Ensuring your CRM is secure and compliant with UK data protection regulations like GDPR.',
    icon: Shield,
  },
  {
    name: 'Advanced Reporting',
    description: 'Get detailed analytics and reports to make data-driven decisions for your UK operations.',
    icon: BarChart,
  },
];

export default function CrmSoftwareDevelopmentPage() {
  return (
    <div className="bg-gray-900 text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-cover bg-center pt-32 pb-16" style={{ backgroundImage: "url('/images/uk-crm-hero.jpg')" }}>
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-normal mb-4 uppercase tracking-wider">
              CRM Software Development UK
            </h1>
            <p className="mt-4 text-xl text-gray-300">Bespoke CRM Solutions for UK Businesses</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl mb-12 uppercase tracking-wider text-center">Our UK CRM Development Services</h2>
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
            <h2 className="text-3xl mb-6 uppercase tracking-wider">Get a Free CRM Consultation</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get a free consultation to discuss your CRM needs and discover how we can help your UK business.
            </p>
            <Link href="mailto:brmai@mybrmai.com" className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm">
              Request a Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 