import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'uk', 'es', 'ca', 'ru'];
export const defaultLocale = 'ru';

export default getRequestConfig(async (config) => { // Changed from ({locale}) to (config)
  const locale = config.locale; // Extract locale from the config object
  console.log('[i18n.ts] getRequestConfig called. Received locale:', locale);

  
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale)) {
    console.error('[i18n.ts] Invalid or missing locale received:', locale, '- Calling notFound().');
    notFound();
  }

  try {
    console.log(`[i18n.ts] Attempting to load messages for locale: ${locale}`);
    const messages = (await import(`./messages/${locale}.json`)).default;
    console.log(`[i18n.ts] Successfully loaded messages for ${locale}.`);
    return {
      locale: locale, // Явно возвращаем locale
      messages: messages,
    };
  } catch (error) {
    console.error(`[i18n.ts] Error loading messages for locale ${locale}:`, error);
    // Optionally, re-throw or call notFound() if message loading is critical
    // For now, let's call notFound() to maintain previous behavior on error
    notFound();
  }
});