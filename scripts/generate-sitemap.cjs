const fs = require('fs');
const path = require('path');

const siteUrl = 'https://mybrmai.com';
const supportedLocales = ['en', 'ru', 'es', 'ca', 'uk'];
const blogSlugs = [
  'business-process-automation-guide',
  'ai-business-automation-benefits',
  'choosing-automation-software'
];

function generateAlternateRefs(pathWithoutLocale) {
  const refs = supportedLocales.map(locale => 
    `<xhtml:link rel="alternate" hreflang="${locale}" href="${siteUrl}/${locale}${pathWithoutLocale}"/>`
  ).join('');
  
  const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en${pathWithoutLocale}"/>`;
  
  return refs + xDefault;
}

function generateSitemapEntry(locale, pathWithoutLocale, changefreq, priority) {
  const url = `${siteUrl}/${locale}${pathWithoutLocale}`;
  const lastmod = new Date().toISOString();
  const alternateRefs = generateAlternateRefs(pathWithoutLocale);
  
  return `<url><loc>${url}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority>${alternateRefs}</url>`;
}

function generateSitemap() {
  let urls = [];

  // Generate URLs for all locales
  supportedLocales.forEach(locale => {
    // Homepage
    urls.push(generateSitemapEntry(locale, '', 'weekly', '1.0'));
    
    // Blog main page
    urls.push(generateSitemapEntry(locale, '/blog', 'weekly', '0.8'));
    
    // AI business automation service page
    urls.push(generateSitemapEntry(locale, '/services/ai-business-automation', 'monthly', '0.9'));
    
    // Privacy policy
    urls.push(generateSitemapEntry(locale, '/privacy-policy', 'yearly', '0.3'));
    
    // Blog posts
    blogSlugs.forEach(slug => {
      urls.push(generateSitemapEntry(locale, `/blog/${slug}`, 'monthly', '0.6'));
    });
  });

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls.join('\n')}
</urlset>`;

  return sitemapContent;
}

function generateSitemapIndex() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<sitemap><loc>${siteUrl}/sitemap-0.xml</loc></sitemap>
</sitemapindex>`;
}

function generateRobotsTxt() {
  return `# *
User-agent: *
Allow: /

# Host
Host: ${siteUrl}

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml
`;
}

// Create public directory if it doesn't exist
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate and write sitemap files
const sitemap = generateSitemap();
const sitemapIndex = generateSitemapIndex();
const robotsTxt = generateRobotsTxt();

fs.writeFileSync(path.join(publicDir, 'sitemap-0.xml'), sitemap);
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapIndex);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

console.log('✅ Custom sitemap generated successfully!');
console.log('📁 Files created:');
console.log('   - public/sitemap.xml');
console.log('   - public/sitemap-0.xml');
console.log('   - public/robots.txt'); 