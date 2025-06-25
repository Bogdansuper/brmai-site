import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts'); // Указываем путь к нашему src/i18n.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // It's good practice to explicitly set this
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  
  // 301 Redirects for SEO
  async redirects() {
    return [
      // Redirect old blog URLs without locale
      {
        source: '/blog/:path*',
        destination: '/en/blog/:path*',
        permanent: true,
      },
      // Redirect old services URLs without locale
      {
        source: '/services/:path*',
        destination: '/en/services/:path*',
        permanent: true,
      },
      // Redirect old privacy policy without locale
      {
        source: '/privacy-policy',
        destination: '/en/privacy-policy',
        permanent: true,
      },
      // Redirect common variations
      {
        source: '/index.html',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/en',
        permanent: true,
      },
      // Redirect old automation related URLs
      {
        source: '/automation',
        destination: '/en/services/ai-business-automation',
        permanent: true,
      },
      {
        source: '/ai-automation',
        destination: '/en/services/ai-business-automation',
        permanent: true,
      },
      {
        source: '/business-automation',
        destination: '/en/services/ai-business-automation',
        permanent: true,
      },
    ];
  },

  // Security Headers
  async headers() {
    return [
      // Headers for sitemap files
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate',
          },
        ],
      },
      {
        source: '/sitemap-:number.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate',
          },
        ],
      },
      // Static assets caching
      {
        source: '/:path*.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|otf|svg|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate',
          },
        ],
      },
      // General security headers
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com",
              "frame-src https://calendar.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; '),
          },
        ],
      },
    ];
  },

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