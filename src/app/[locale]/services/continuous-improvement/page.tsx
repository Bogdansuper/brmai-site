import { useTranslations } from 'next-intl';
import ServicePage from '@/components/ServicePage';

export default function ContinuousImprovementPage() {
  const t = useTranslations('Services');

  const features = [
    { name: "Analysis of Current Processes", description: "We conduct a thorough analysis of your existing workflows to identify bottlenecks and areas for improvement." },
    { name: "Implementation of Monitoring Systems", description: "We set up advanced monitoring tools to track key performance indicators (KPIs) in real-time." },
    { name: "Data-Driven Recommendations", description: "Based on data analysis, we provide actionable recommendations to optimize your business processes." },
    { name: "A/B Testing and Experimentation", description: "We run controlled experiments to test new strategies and identify the most effective solutions for your business." },
    { name: "Regular Performance Reviews", description: "We schedule regular reviews to discuss performance, iterate on solutions, and ensure continuous growth." },
    { name: "Employee Training and Empowerment", description: "We provide training to your team, empowering them to embrace new processes and contribute to a culture of continuous improvement." },
  ];

  return (
    <ServicePage
      locale="en"
      title={t('continuousImprovement_title')}
      subtitle={t('continuousImprovement_desc')}
      featuresTitle="Key Aspects of Continuous Improvement"
      features={features}
      ctaTitle="Ready to Optimize Your Business?"
      ctaSubtitle="Let's build a culture of continuous improvement together."
      ctaButton="Start Optimizing"
      imageUrl="/images/continuous-improvement-hero.jpg"
    />
  );
} 