import { useTranslations } from 'next-intl';
import ServicePage from '@/components/ServicePage';

export default function CustomCrmSystemPage() {
  const t = useTranslations('Services');

  const features = [
    { name: "Tailored to Your Workflow", description: "We build a CRM that maps directly to your unique sales and operational processes, not the other way around." },
    { name: "Seamless Integrations", description: "Connect your CRM with other tools you use, like email, calendars, and marketing automation platforms, for a unified workflow." },
    { name: "Advanced Reporting & Analytics", description: "Get deep insights into your sales pipeline and customer behavior with custom dashboards and reports." },
    { name: "Scalable Architecture", description: "Our custom CRMs are built to grow with your business, supporting more users and data as your company expands." },
    { name: "Full Data Ownership & Security", description: "Maintain complete control over your customer data with a secure, privately hosted CRM solution." },
    { name: "Dedicated Support & Training", description: "We provide comprehensive training for your team and ongoing support to ensure you get the most out of your CRM." },
  ];

  return (
    <ServicePage
      locale="en"
      title={t('customCrm_title')}
      subtitle={t('customCrm_desc')}
      featuresTitle="Features of Our Custom CRM Systems"
      features={features}
      ctaTitle="Ready for a CRM That Works for You?"
      ctaSubtitle="Stop adapting to off-the-shelf software. Let's build a CRM that's perfectly aligned with your business."
      ctaButton="Get a Custom CRM Quote"
      imageUrl="/images/custom-crm-hero.jpg"
    />
  );
} 