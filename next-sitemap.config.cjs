/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mybrmai.com',
  generateRobotsTxt: true,
  exclude: ['/icon*', '/favicon*', '/_next/*', '/api/*'],
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  convertAlternateRefsToAbsolute: false,
  
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
    
    // Helper function to generate alternateRefs with absolute hrefs
    const generateAlternateRefs = (pathWithoutLocale) => { // e.g., '', '/blog', '/blog/slug'
      const refs = supportedLocales.map(altLocale => ({
        href: `${config.siteUrl}/${altLocale}${pathWithoutLocale}`, // Absolute href
        hreflang: altLocale,
      }));
      refs.push({
        href: `${config.siteUrl}/en${pathWithoutLocale}`, // x-default to English, absolute href
        hreflang: 'x-default',
      });
      return refs;
    };

    supportedLocales.forEach(locale => {
      const commonPathData = {
        lastmod: new Date().toISOString(),
      };

      // Homepage
      paths.push({
        loc: `/${locale}`,
        changefreq: 'weekly',
        priority: 1.0,
        ...commonPathData,
        alternateRefs: generateAlternateRefs(''),
      });
      
      // Blog main page
      paths.push({
        loc: `/${locale}/blog`,
        changefreq: 'weekly', 
        priority: 0.8,
        ...commonPathData,
        alternateRefs: generateAlternateRefs('/blog'),
      });

      // AI business automation service page
      paths.push({
        loc: `/${locale}/services/ai-business-automation`,
        changefreq: 'monthly',
        priority: 0.9,
        ...commonPathData,
        alternateRefs: generateAlternateRefs('/services/ai-business-automation'),
      });

      // Privacy policy
      paths.push({
        loc: `/${locale}/privacy-policy`,
        changefreq: 'yearly',
        priority: 0.3,
        ...commonPathData,
        alternateRefs: generateAlternateRefs('/privacy-policy'),
      });

      // Blog posts
      blogSlugs.forEach(slug => {
        paths.push({
          loc: `/${locale}/blog/${slug}`,
          changefreq: 'monthly',
          priority: 0.6,
          ...commonPathData,
          alternateRefs: generateAlternateRefs(`/blog/${slug}`),
        });
      });
    });
    
    return paths;
  },
}