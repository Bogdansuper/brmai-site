import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts'); // Указываем путь к нашему i18n.ts

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({ // Оборачиваем конфигурацию здесь
  // Твоя существующая конфигурация Next.js здесь, если есть
  // Например: reactStrictMode: true,
});

export default withNextIntl(nextConfig);