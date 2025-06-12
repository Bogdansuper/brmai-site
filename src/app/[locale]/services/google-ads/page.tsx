import { useTranslations } from 'next-intl';
import ServicePage from '@/components/ServicePage';

export default function GoogleAdsPage() {
  const t = useTranslations('Services');

  const features = [
    { name: "Keyword Research & Strategy", description: "We identify high-intent keywords to target users actively searching for your products or services." },
    { name: "Ad Copywriting & A/B Testing", description: "Crafting compelling ad copy and continuously testing variations to maximize click-through and conversion rates." },
    { name: "Landing Page Optimization", description: "Ensuring your landing pages are optimized for conversions, providing a seamless user experience from ad click to conversion." },
    { name: "Campaign Management & Optimization", description: "Daily monitoring and optimization of your campaigns to improve performance and reduce wasted ad spend." },
    { name: "Performance Tracking & Reporting", description: "Transparent reporting on key metrics, providing clear insights into campaign performance and ROI." },
    { name: "Remarketing Campaigns", description: "Re-engaging users who have previously interacted with your website to bring them back and convert." },
  ];

  return (
    <ServicePage
      locale="en"
      title={t('googleAds_title')}
      subtitle={t('googleAds_desc')}
      featuresTitle="Our Google Ads Services"
      features={features}
      ctaTitle="Ready to Get More Leads with Google Ads?"
      ctaSubtitle="Let our experts manage your campaigns and deliver measurable results."
      ctaButton="Get a Free Ads Consultation"
      imageUrl="/images/google-ads-hero.jpg"
    />
  );
} 