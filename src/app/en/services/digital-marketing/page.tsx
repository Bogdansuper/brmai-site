"use client"
import ServicePage from '@/components/ServicePage';

export default function DigitalMarketingPage() {

  const features = [
    {
      name: 'Retail Brand: 400% ROI on Ad Spend',
      description: 'A national retail brand wanted to increase online sales. Our integrated digital marketing strategy, combining PPC, social media advertising, and email marketing, resulted in a 400% return on investment and a 60% increase in customer lifetime value.',
    },
    {
      name: 'Key Results',
      description: '• 2.5x increase in website conversion rate\n• 1.2M new users acquired via paid channels\n• Top-performing campaigns on Facebook & Google',
    },
  ];

  return (
    <ServicePage
      locale="en"
      title="Digital Marketing"
      subtitle="Driving Growth Through Integrated Digital Strategies"
      featuresTitle="Digital Marketing Case Study"
      features={features}
      ctaTitle="Ready to Elevate Your Digital Presence?"
      ctaSubtitle="Contact us for a free consultation and let's discuss how we can elevate your digital presence."
      ctaButton="Request a Consultation"
      imageUrl="/images/digital-marketing-hero.jpg"
    />
  );
} 