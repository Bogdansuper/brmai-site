import { useTranslations } from 'next-intl';
import ServicePage from '@/components/ServicePage';

export default function DigitalMarketingPage() {
  const t = useTranslations('DigitalMarketing');

  const features = [
    { name: t('features.0.name'), description: t('features.0.description') },
    { name: t('features.1.name'), description: t('features.1.description') },
    { name: t('features.2.name'), description: t('features.2.description') },
    { name: t('features.3.name'), description: t('features.3.description') },
    { name: t('features.4.name'), description: t('features.4.description') },
    { name: t('features.5.name'), description: t('features.5.description') },
  ];

  return (
    <ServicePage
      locale="en"
      title={t('title')}
      subtitle={t('subtitle')}
      featuresTitle={t('featuresTitle')}
      features={features}
      ctaTitle={t('ctaTitle')}
      ctaSubtitle={t('ctaSubtitle')}
      ctaButton={t('ctaButton')}
      imageUrl="/images/digital-marketing-hero.jpg"
    />
  );
}