import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { useTranslations } from 'next-intl';
import { Layers, Zap, Palette, Users, Shield, BarChart2 } from 'lucide-react';
import ServicePage from '@/components/ServicePage';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/services/website-creation`;
  
  const content = {
    title: 'Website Creation Services | Custom Web Design & Development',
    description: 'Professional website creation services. We offer custom web design, e-commerce solutions, and mobile-responsive websites that drive business growth.',
    keywords: [
      'website creation services',
      'custom web design',
      'web development company',
      'e-commerce website development',
      'responsive web design'
    ]
  };
  
  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en/services/website-creation`,
        'uk': `${baseUrl}/uk/services/website-creation`,
        'es': `${baseUrl}/es/services/website-creation`,
        'ca': `${baseUrl}/ca/services/website-creation`,
        'ru': `${baseUrl}/ru/services/website-creation`,
        'x-default': `${baseUrl}/en/services/website-creation`
      },
    },
    // ... (other metadata remains the same) ...
  };
}

export default function WebsiteCreationPage() {
  const t = useTranslations('WebsiteCreation');

  const features = [
    { name: t('customDesignTitle'), description: t('customDesignDesc') },
    { name: t('seoOptimizedTitle'), description: t('seoOptimizedDesc') },
    { name: t('fastPerformanceTitle'), description: t('fastPerformanceDesc') },
    { name: t('contentManagementTitle'), description: t('contentManagementDesc') },
    { name: t('secureScalableTitle'), description: t('secureScalableDesc') },
    { name: t('analyticsIntegrationTitle'), description: t('analyticsIntegrationDesc') },
  ];

  return (
    <ServicePage
      locale="en"
      title={t('heroTitle')}
      subtitle={t('heroSubtitle')}
      featuresTitle={t('keyFeaturesTitle')}
      features={features}
      ctaTitle={t('ourProcessTitle')}
      ctaSubtitle={t('ourProcessDesc')}
      ctaButton={t('startProject')}
      imageUrl="/images/website-creation-hero.jpg"
    />
  );
} 