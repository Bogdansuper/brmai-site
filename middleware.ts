import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n';

export default createMiddleware({
  // Список всех поддерживаемых локалей
  locales: locales,

  // Используется, если никакая локаль не совпадает
  defaultLocale: defaultLocale,
  localePrefix: 'as-needed' // 'as-needed', 'always', 'never'
});

export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|favicon.ico|images|assets).*)']
};