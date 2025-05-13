import { getTranslations, setRequestLocale } from 'next-intl/server';

// Define a type for the section structure if needed, or use 'any' for simplicity here
type PrivacySection = {
  heading: string;
  paragraph1: string;
  // Add more paragraphs if your structure supports it, e.g., paragraph2?: string;
};

// Consolidated Props type for both page component and generateMetadata
type Props = {
  params: { locale: string };
};

export async function generateMetadata({params}: Props) { // Use consolidated Props
  const locale = params.locale; // Access locale directly
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'PrivacyPolicy'});
  return {
    title: t('title')
  };
}

export default async function PrivacyPolicyPage({params }: Props) { // Use consolidated Props
  const locale = params.locale; // Access locale directly
  
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'PrivacyPolicy' });

  const sections: Array<{key: string, content: PrivacySection}> = [
    { key: 'introduction', content: { heading: t('introduction.heading'), paragraph1: t('introduction.paragraph1') } },
    { key: 'informationWeCollect', content: { heading: t('informationWeCollect.heading'), paragraph1: t('informationWeCollect.paragraph1') } },
    { key: 'howWeUseInformation', content: { heading: t('howWeUseInformation.heading'), paragraph1: t('howWeUseInformation.paragraph1') } },
    { key: 'dataSharing', content: { heading: t('dataSharing.heading'), paragraph1: t('dataSharing.paragraph1') } },
    { key: 'yourRights', content: { heading: t('yourRights.heading'), paragraph1: t('yourRights.paragraph1') } },
    { key: 'contactUs', content: { heading: t('contactUs.heading'), paragraph1: t('contactUs.paragraph1') } }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">{t('title')}</h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        {sections.map((section) => (
            <section key={section.key}>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{section.content.heading}</h2>
              <p className="leading-relaxed">{section.content.paragraph1}</p>
            </section>
        ))}
        <section className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            {t('lastUpdated', {date: new Date().toLocaleDateString()})}
          </p>
        </section>
      </div>
    </div>
  );
} 