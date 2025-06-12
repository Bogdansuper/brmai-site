import { useTranslations } from 'next-intl';
import ServicePage from '@/components/ServicePage';

export default function AiBusinessAutomationPage() {
  const t = useTranslations('AIBusinessAutomation');

  const features = [
    { name: t('naturalLanguageTitle'), description: t('naturalLanguageDesc') },
    { name: t('computerVisionTitle'), description: t('computerVisionDesc') },
    { name: t('predictiveAnalyticsTitle'), description: t('predictiveAnalyticsDesc') },
    { name: t('intelligentWorkflowsTitle'), description: t('intelligentWorkflowsDesc') },
    { name: t('seamlessIntegrationTitle'), description: t('seamlessIntegrationDesc') },
    { name: t('realTimeMonitoringTitle'), description: t('realTimeMonitoringDesc') },
  ];

  return (
    <ServicePage
      locale="en"
      title={t('heroTitle')}
      subtitle={t('heroSubtitle')}
      featuresTitle={t('keyFeaturesTitle')}
      features={features}
      ctaTitle={t('useCasesTitle')}
      ctaSubtitle={t('useCasesDesc')}
      ctaButton={t('startJourney')}
      imageUrl="/images/ai-automation-hero.jpg"
    />
  );
} 