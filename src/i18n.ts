import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'uk', 'es', 'ca', 'ru'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({locale}) => {
  console.log('[i18n.ts] getRequestConfig called. Received locale:', locale);

  // If locale is undefined, use the default locale
  const resolvedLocale = locale || defaultLocale;
  
  // Validate that the resolved locale is valid
  if (!locales.includes(resolvedLocale)) {
    console.error('[i18n.ts] Invalid locale received:', locale, '- Using default locale:', defaultLocale);
    // Use default locale instead of calling notFound() immediately
    const fallbackLocale = defaultLocale;
    try {
      const messages = (await import(`../messages/${fallbackLocale}.json`)).default;
      return {
        locale: fallbackLocale,
        messages: messages,
      };
    } catch (error) {
      console.error(`[i18n.ts] Error loading default locale messages:`, error);
      notFound();
    }
  }

  try {
    console.log(`[i18n.ts] Attempting to load messages for locale: ${resolvedLocale}`);
    const messages = (await import(`../messages/${resolvedLocale}.json`)).default;
    console.log(`[i18n.ts] Successfully loaded messages for ${resolvedLocale}.`);
    return {
      locale: resolvedLocale,
      messages: messages,
    };
  } catch (error) {
    console.error(`[i18n.ts] Error loading messages for locale ${resolvedLocale}:`, error);
    // Try to fall back to default locale
    try {
      const messages = (await import(`../messages/${defaultLocale}.json`)).default;
      return {
        locale: defaultLocale,
        messages: messages,
      };
    } catch (fallbackError) {
      console.error(`[i18n.ts] Error loading default locale messages:`, fallbackError);
      notFound();
    }
  }
});