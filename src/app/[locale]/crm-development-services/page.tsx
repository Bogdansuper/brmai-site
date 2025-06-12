"use client";
import ServicePage from '@/components/ServicePage';

export default function CrmDevelopmentServicesPage() {
  const features = [
    { name: "Custom Workflow Automation", description: "Automate your unique sales, marketing, and service workflows to improve efficiency and reduce manual work." },
    { name: "360-Degree Customer View", description: "Get a complete picture of every customer interaction, from initial contact to post-sale support, all in one place." },
    { name: "Advanced Sales Analytics", description: "Track pipeline metrics, forecast sales, and identify your most valuable customers with powerful, custom-built dashboards." },
    { name: "Integration With Your Tools", description: "Seamlessly connect your CRM with email, accounting software, marketing platforms, and other essential business tools." },
    { name: "Mobile-First Design", description: "Access your CRM and manage customer relationships on the go with a fully responsive design that works on any device." },
    { name: "Enhanced Data Security", description: "Protect your sensitive customer data with a secure, custom-built CRM that meets industry-specific compliance standards." }
  ];

  return (
    <ServicePage
      locale="en"
      title="Custom CRM Development"
      subtitle="A CRM built from the ground up to match your unique business processes and accelerate growth."
      featuresTitle="Features of Our Custom CRM Solutions"
      features={features}
      ctaTitle="Ready to Build Your Perfect CRM?"
      ctaSubtitle="Let's discuss your requirements and build a CRM that empowers your team and delights your customers."
      ctaButton="Book a Free CRM Consultation"
      imageUrl="/images/crm-development-hero.jpg"
    />
  );
} 