"use client";
import ServicePage from '@/components/ServicePage';

export default function AiBusinessAutomationUkPage() {
  const features = [
    {
      name: 'Business Process Analysis (UK)',
      description: 'We analyse your existing workflows to identify high-impact automation opportunities relevant to the UK market.',
    },
    {
      name: 'Custom AI Solutions',
      description: 'Developing and implementing bespoke AI and automation tools that integrate with your current systems.',
    },
    {
      name: 'AI-Powered Chatbots & RPA',
      description: 'Implementing intelligent chatbots for customer service and Robotic Process Automation for back-office tasks.',
    },
    {
      name: 'Workflow Automation',
      description: 'Streamlining your core business operations, from finance to HR, with intelligent automation.',
    },
    {
      name: 'UK-Based Team & Support',
      description: 'Our team of automation experts is based in the UK, providing local support and expertise.',
    },
    {
      name: 'Compliance & Security',
      description: 'Ensuring all our automation solutions are secure and compliant with UK regulations, including GDPR.',
    },
  ];

  return (
    <ServicePage
      locale="uk"
      title="AI Business Automation UK"
      subtitle="Intelligent Automation Solutions for UK Companies"
      featuresTitle="Our UK AI Automation Services"
      features={features}
      ctaTitle="Ready to Automate Your UK Business?"
      ctaSubtitle="Contact us today to discover how AI-powered automation can revolutionise your UK-based operations."
      ctaButton="Schedule a Free Consultation"
      imageUrl="/images/uk-ai-hero.jpg"
    />
  );
} 