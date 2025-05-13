import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'uk', 'es', 'ca', 'ru'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({locale}) => {
  console.log('[i18n.ts] getRequestConfig called. Received locale:', locale);

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale)) {
    console.error('[i18n.ts] Invalid or missing locale received:', locale, '- Calling notFound().');
    notFound();
    // TypeScript needs to know this path doesn't proceed to a normal return.
    // Throwing an error or returning a Promise that never resolves are options,
    // but since notFound() already throws, this should be fine for runtime.
    // For strict typing, an explicit throw might be needed if notFound() doesn't satisfy the linter.
  }

  try {
    console.log(`[i18n.ts] Attempting to load messages for locale: ${locale}`);
    const messages = (await import(`../messages/${locale}.json`)).default;
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
    // Similar to above, ensure type consistency if notFound() isn't enough for the linter.
  }
});