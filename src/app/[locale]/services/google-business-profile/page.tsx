import { useTranslations } from 'next-intl';
import ServicePage from '@/components/ServicePage';

export default function GoogleBusinessProfilePage() {
  const t = useTranslations('Services');

  const features = [
    { name: "Profile Optimization", description: "We fully optimize your Google Business Profile, ensuring all information is accurate, complete, and appealing to potential customers." },
    { name: "Regular Posts & Updates", description: "Keeping your profile active with regular posts, offers, and updates to engage your audience and improve local SEO." },
    { name: "Review Management", description: "We help you generate more positive reviews and professionally manage all customer feedback to build trust and credibility." },
    { name: "Q&A Management", description: "Proactively managing the Questions & Answers section to provide helpful information and address customer concerns." },
    { name: "Local SEO Strategy", description: "Integrating your Google Business Profile with a broader local SEO strategy to dominate local search results." },
    { name: "Performance Reporting", description: "Monthly reports detailing your profile's performance, including views, clicks, and customer actions." },
  ];

  return (
    <ServicePage
      locale="en"
      title={t('googleBusiness_title')}
      subtitle={t('googleBusiness_desc')}
      featuresTitle="What We Do for Your Google Business Profile"
      features={features}
      ctaTitle="Ready to Dominate Local Search?"
      ctaSubtitle="Let us turn your Google Business Profile into a powerful customer acquisition tool."
      ctaButton="Optimize My Profile"
      imageUrl="/images/gbp-hero.jpg"
    />
  );
} 