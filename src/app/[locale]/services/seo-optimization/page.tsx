import { useTranslations } from 'next-intl';
import ServicePage from '@/components/ServicePage';

export default function SeoOptimizationPage() {
  const t = useTranslations('Services');

  const features = [
    { name: "Technical SEO Audit", description: "We conduct a comprehensive audit of your website to identify and fix technical issues that hinder search engine rankings." },
    { name: "On-Page SEO", description: "Optimizing titles, meta descriptions, headers, and content to improve relevance and search engine visibility." },
    { name: "Keyword Research", description: "In-depth keyword analysis to target the most valuable search terms for your business." },
    { name: "Content Strategy", description: "Developing a content strategy that attracts your target audience and builds authority in your niche." },
    { name: "Link Building", description: "Acquiring high-quality backlinks to increase your website's authority and improve search rankings." },
    { name: "Local SEO", description: "Optimizing your online presence to attract more business from relevant local searches." },
  ];

  return (
    <ServicePage
      locale="en"
      title={t('seoOptimization_title')}
      subtitle={t('seoOptimization_desc')}
      featuresTitle="Our SEO Optimization Services"
      features={features}
      ctaTitle="Ready to Rank Higher?"
      ctaSubtitle="Let's create an SEO strategy that drives organic traffic and grows your business."
      ctaButton="Get an SEO Audit"
      imageUrl="/images/seo-hero.jpg"
    />
  );
} 