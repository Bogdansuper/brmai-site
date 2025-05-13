import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts'); // Указываем путь к нашему src/i18n.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Твоя существующая конфигурация Next.js здесь, если есть
  // Например: reactStrictMode: true,
};

export default withNextIntl(nextConfig); // Оборачиваем конфигурацию здесь