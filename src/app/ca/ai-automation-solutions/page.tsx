import { Metadata } from 'next';
import Link from 'next/link';
import { BrainCircuit, Zap, Bot, Repeat, Users, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Automation Solutions Canada | Business Process Automation',
  description: 'AI-driven automation solutions for Canadian businesses. We streamline your operations, enhance efficiency, and drive growth with custom AI and automation.',
  keywords: ['AI automation Canada', 'business process automation', 'AI solutions Canada', 'workflow automation', 'Canadian AI company'],
  alternates: { canonical: 'https://mybrmai.com/ca/ai-automation-solutions' },
};

const features = [
  {
    name: 'Process Analysis for Canadian Businesses',
    description: 'We identify key automation opportunities within your operations, considering Canadian market specifics.',
    icon: BrainCircuit,
  },
  {
    name: 'Custom AI & Automation Solutions',
    description: 'Developing bespoke AI tools and automation workflows that integrate with your existing software stack.',
    icon: Zap,
  },
  {
    name: 'Bilingual AI Chatbots (EN/FR)',
    description: 'Intelligent, bilingual chatbots to handle customer inquiries in both English and French.',
    icon: Bot,
  },
  {
    name: 'Workflow Automation',
    description: 'Automating core business processes from HR to finance, tailored for Canadian compliance.',
    icon: Repeat,
  },
  {
    name: 'Canadian-Based Team',
    description: 'Our team of AI experts is based in Canada, providing local insights and support.',
    icon: Users,
  },
  {
    name: 'PIPEDA-Compliant Solutions',
    description: 'Ensuring all automation solutions are secure and compliant with Canadian privacy laws like PIPEDA.',
    icon: Shield,
  },
];

export default function AiAutomationSolutionsCaPage() {
  return (
    <div className="bg-gray-900 text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-cover bg-center pt-32 pb-16" style={{ backgroundImage: "url('/images/ca-ai-hero.jpg')" }}>
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-normal mb-4 uppercase tracking-wider">
              AI Automation Solutions Canada
            </h1>
            <p className="mt-4 text-xl text-gray-300">Intelligent Automation for Canadian Businesses</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl mb-12 uppercase tracking-wider text-center">Our Canadian AI Automation Services</h2>
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
            <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">Contact us today to discover how AI-powered automation can revolutionize your Canadian operations.</p>
            <Link
                href="mailto:brmai@mybrmai.com"
                className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
              >
                Schedule a Free Consultation
              </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 