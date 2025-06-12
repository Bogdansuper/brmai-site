"use client"
import ServicePage from '@/components/ServicePage';

export default function SeoOptimizationPage() {

  const features = [
    {
      name: 'Comprehensive SEO Audit',
      description: 'We conduct a deep dive into your website\'s technical SEO, on-page content, and backlink profile to identify critical issues and opportunities.',
    },
    {
      name: 'Keyword Research & Strategy',
      description: 'We identify high-value keywords your target audience is searching for and develop a content strategy to capture that traffic.',
    },
    {
      name: 'On-Page & Technical SEO',
      description: 'From meta tags to site speed, we optimize every element of your site to meet search engine best practices.',
    },
    {
      name: 'Quality Link Building',
      description: 'We acquire high-authority backlinks from relevant websites to build your domain authority and improve rankings.',
    },
    {
      name: 'Local SEO Optimization',
      description: 'We optimize your Google Business Profile and local citations to dominate local search results.',
    },
    {
      name: 'Transparent Reporting',
      description: 'You get detailed monthly reports on your keyword rankings, traffic, and key performance indicators.',
    },
  ];

  return (
    <ServicePage
      locale="en"
      title="SEO Optimization"
      subtitle="Climb the Ranks, Drive Organic Traffic, and Grow Your Business"
      featuresTitle="Our SEO Services"
      features={features}
      ctaTitle="Ready to Dominate Search Results?"
      ctaSubtitle="Get a free SEO audit to uncover opportunities and see how we can help you grow."
      ctaButton="Get Your Free Audit"
      imageUrl="/images/seo-hero.jpg"
    />
  );
}