"use client";
import ServicePage from '@/components/ServicePage';

export default function AiAutomationServicesPage() {
  const features = [
    { name: "Intelligent Document Processing", description: "Automate data extraction from invoices, contracts, and other documents with AI-powered accuracy." },
    { name: "AI-Powered Customer Support", description: "Deploy intelligent chatbots and voice assistants to provide 24/7 customer support and resolve queries instantly." },
    { name: "Predictive Analytics & Forecasting", description: "Leverage machine learning models to forecast sales, predict customer behavior, and make data-driven decisions." },
    { name: "Robotic Process Automation (RPA)", description: "Automate repetitive, rule-based tasks across applications to free up your employees for more strategic work." },
    { name: "Computer Vision for Quality Control", description: "Implement AI-powered visual inspection to automate quality control processes in manufacturing and logistics." },
    { name: "Personalized Marketing Automation", description: "Use AI to deliver personalized marketing messages and product recommendations to every customer." }
  ];

  return (
    <ServicePage
      locale="en"
      title="AI Automation Services"
      subtitle="Leverage the power of Artificial Intelligence to automate complex processes, gain insights from data, and drive business innovation."
      featuresTitle="Our AI Automation Capabilities"
      features={features}
      ctaTitle="Ready to Unlock Your AI Potential?"
      ctaSubtitle="Let's explore how our AI automation services can transform your business operations and create a competitive advantage."
      ctaButton="Book Your Free AI Strategy Call"
      imageUrl="/images/ai-services-hero.jpg"
    />
  );
} 