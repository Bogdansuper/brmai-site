/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mybrmai.com',
  generateRobotsTxt: true,
  exclude: ['/icon*', '/favicon*', '/_next/*', '/api/*'],
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },

  additionalPaths: async (config) => {
    const supportedLocales = ['en', 'ru', 'es', 'ca', 'uk'];
    const blogSlugs = [
      'business-process-automation-guide',
      'ai-business-automation-benefits', 
      'choosing-automation-software'
    ];
    
    const paths = [];
    
    // Helper function to generate hreflang alternates
    const generateAlternateRefs = (pathWithoutLocale) => {
      const refs = [];
      supportedLocales.forEach(locale => {
        refs.push({
          href: `https://mybrmai.com/${locale}${pathWithoutLocale}`,
          hreflang: locale,
        });
      });
      refs.push({
        href: `https://mybrmai.com/en${pathWithoutLocale}`,
        hreflang: 'x-default',
      });
      return refs;
    };
    
    // Add all locale-based pages
    supportedLocales.forEach(locale => {
      // Homepage
      paths.push({
        loc: `/${locale}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 1.0,
        alternateRefs: generateAlternateRefs(''),
      });
      
      // Blog main page
      paths.push({
        loc: `/${locale}/blog`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
        alternateRefs: generateAlternateRefs('/blog'),
      });

      // AI business automation service page
      paths.push({
        loc: `/${locale}/services/ai-business-automation`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9,
        alternateRefs: generateAlternateRefs('/services/ai-business-automation'),
      });

      // Privacy policy
      paths.push({
        loc: `/${locale}/privacy-policy`,
        lastmod: new Date().toISOString(),
        changefreq: 'yearly',
        priority: 0.3,
        alternateRefs: generateAlternateRefs('/privacy-policy'),
      });

      // Blog posts
      blogSlugs.forEach(slug => {
        paths.push({
          loc: `/${locale}/blog/${slug}`,
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.6,
          alternateRefs: generateAlternateRefs(`/blog/${slug}`),
        });
      });
    });
    
    return paths;
  },
}