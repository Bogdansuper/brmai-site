import { useTranslations } from 'next-intl';
import ServicePage from '@/components/ServicePage';

export default function LeadAutomationPage() {
  const t = useTranslations('Services');

  const features = [
    { name: "Automated Lead Capture", description: "Capture leads from all your channels—website forms, social media, and email—into a single, unified system." },
    { name: "Intelligent Lead Nurturing", description: "Automatically send personalized follow-up emails and messages to nurture leads through your sales funnel." },
    { name: "Lead Scoring & Prioritization", description: "Use AI to score leads based on their engagement and demographics, so your sales team can focus on the hottest prospects." },
    { name: "Automatic Appointment Scheduling", description: "Allow qualified leads to book meetings directly into your sales team's calendar without any back-and-forth." },
    { name: "CRM Integration", description: "Seamlessly sync all lead data and communication history with your CRM for a complete view of your customer journey." },
    { name: "Real-time Notifications", description: "Instantly notify your sales team about new high-value leads and their activities." },
  ];

  return (
    <ServicePage
      locale="en"
      title={t('leadAutomation_title')}
      subtitle={t('leadAutomation_desc')}
      featuresTitle="How We Automate Your Lead Management"
      features={features}
      ctaTitle="Never Lose a Lead Again"
      ctaSubtitle="Let's implement a robust lead automation system to ensure every opportunity is captured and nurtured."
      ctaButton="Automate My Leads"
      imageUrl="/images/lead-automation-hero.jpg"
    />
  );
} 