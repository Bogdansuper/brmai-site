import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts'); // Указываем путь к нашему src/i18n.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // It's good practice to explicitly set this
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader']
    });
    return config;
  },
};

export default withNextIntl(nextConfig); // Оборачиваем конфигурацию здесь