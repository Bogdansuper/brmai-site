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
    additionalSitemaps: [
      'https://mybrmai.com/sitemap.xml',
    ],
  },

  transform: async (config, path) => {
    const supportedLocales = ['en', 'ru', 'es', 'ca', 'uk'];
    
    // Skip root path - it redirects to /en
    if (path === '/') {
      return null;
    }

    // Generate priority based on path
    let priority = 0.7;
    if (path.includes('/blog/')) {
      priority = 0.6;
    } else if (path.includes('/services/')) {
      priority = 0.8;
    } else if (path.match(/^\/(en|ru|es|ca|uk)$/)) {
      priority = 1.0; // Homepage versions
    }

    // Generate hreflang alternates
    const alternateRefs = [];
    const pathMatch = path.match(/^\/(en|ru|es|ca|uk)(\/.*)?$/);
    
    if (pathMatch) {
      const currentLocale = pathMatch[1];
      const pathWithoutLocale = pathMatch[2] || '';
      
      supportedLocales.forEach(locale => {
        alternateRefs.push({
          href: `${config.siteUrl}/${locale}${pathWithoutLocale}`,
          hreflang: locale,
        });
      });

      // Add x-default to English version
      alternateRefs.push({
        href: `${config.siteUrl}/en${pathWithoutLocale}`,
        hreflang: 'x-default',
      });
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
      alternateRefs: alternateRefs.length > 0 ? alternateRefs : undefined,
    };
  },
}