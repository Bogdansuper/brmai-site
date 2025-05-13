import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/i18n.ts';

export default createMiddleware({
  // Список всех поддерживаемых локалей
  locales: locales,

  // Используется, если никакая локаль не совпадает
  defaultLocale: defaultLocale,
  localePrefix: 'always' // Changed from 'as-needed' to 'always'
});

export const config = {
  matcher: '/(.*)' // Extremely broad matcher for debugging
};