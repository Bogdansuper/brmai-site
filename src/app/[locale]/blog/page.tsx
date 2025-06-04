import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Blog' });
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/blog`;
  
  return {
    title: t('seoTitle'),
    description: t('seoDescription'),
    authors: [{ name: 'BRM AI', url: 'https://mybrmai.com' }],
    creator: 'BRM AI',
    publisher: 'BRM AI',
    
    keywords: [
      'business process automation blog',
      'ai automation insights',
      'business automation guides',
      'process automation articles',
      'ai business automation tips',
      'automation case studies'
    ],
    
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en/blog`,
        'uk': `${baseUrl}/uk/blog`,
        'es': `${baseUrl}/es/blog`,
        'ca': `${baseUrl}/ca/blog`,
        'ru': `${baseUrl}/ru/blog`,
        'x-default': `${baseUrl}/en/blog`
      },
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    openGraph: {
      title: t('seoTitle'),
      description: t('seoDescription'),
      url: canonicalUrl,
      type: 'website',
      siteName: 'BRM AI - Business Process Automation',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: t('seoTitle'),
      description: t('seoDescription'),
      site: '@BRMAI_tech',
      creator: '@BRMAI_tech',
    },
    
    other: {
      'revisit-after': '3 days',
      'rating': 'general',
      'distribution': 'global',
    },
  };
}

const blogPosts = [
  {
    id: 'how-to-implement-ai-automation',
    title: 'How to Implement AI Automation in Business: Complete Guide 2024',
    excerpt: 'Learn how to implement AI automation in business with our comprehensive step-by-step guide. Discover benefits of AI in business and real case studies.',
    date: '2024-06-03',
    readTime: '15 min read',
    category: 'Implementation',
    keywords: ['how to implement AI automation in business', 'benefits of AI in business', 'AI automation case study']
  },
  {
    id: 'build-small-business-website',
    title: 'How to Build a Small Business Website: Complete Guide 2024',
    excerpt: 'Building a small business website doesn\'t have to be complicated or expensive. This comprehensive guide walks you through every step.',
    date: '2024-06-03',
    readTime: '12 min read',
    category: 'Web Development',
    keywords: ['how to build a small business website', 'small business website design', 'affordable website for small business']
  },
  {
    id: 'local-seo-checklist',
    title: 'Local SEO Checklist 2025: How to Do SEO for Small Business',
    excerpt: 'Complete local SEO checklist for small businesses. Learn how to optimize Google Business Profile, improve local rankings, and attract nearby customers.',
    date: '2024-06-03',
    readTime: '10 min read',
    category: 'Local SEO',
    keywords: ['how to do SEO for small business', 'local SEO checklist 2025', 'optimize Google Business Profile']
  },
  {
    id: 'business-process-automation-guide',
    title: 'Complete Guide to Business Process Automation in 2024',
    excerpt: 'Learn how business process automation can transform your operations, reduce costs, and improve efficiency with AI-powered solutions.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Automation',
    keywords: ['business process automation', 'business automation', 'process automation software']
  },
  {
    id: 'ai-business-automation-benefits',
    title: 'Top 10 Benefits of AI Business Automation for SMEs',
    excerpt: 'Discover how small and medium enterprises can leverage artificial intelligence for business process management and automation.',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'AI',
    keywords: ['ai business automation', 'ai for business automation', 'artificial intelligence business process']
  },
  {
    id: 'choosing-automation-software',
    title: 'How to Choose the Right Business Process Automation Software',
    excerpt: 'A comprehensive guide to selecting business process automation software that aligns with your company\'s needs and goals.',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Software',
    keywords: ['business process automation software', 'automation software', 'bpm software']
  }
];

export default async function BlogPage({ params }: Props) {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Blog' });
  const tShared = await getTranslations({ locale: resolvedParams.locale, namespace: 'Shared' });
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900/50">
        <nav className="px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link href={`/${resolvedParams.locale}`} className="text-xl font-medium tracking-tight">
              BRM-AI
            </Link>
            <Link href={`/${resolvedParams.locale}#contact`} className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all text-sm">
              {tShared('contactUsButton')}
            </Link>
          </div>
        </nav>
      </header>

      {/* Blog Content */}
      <main className="pt-32 pb-24 px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href={`/${resolvedParams.locale}`} className="hover:text-white">
              {tShared('home')}
            </Link>
            <span className="mx-2">→</span>
            <span>{t('title')}</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-normal mb-8 uppercase tracking-wider">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl">
            {t('subtitle')}
          </p>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="border border-gray-800 p-6 hover:border-gray-600 transition-colors">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl mb-3 font-medium">
                  <Link 
                    href={`/${resolvedParams.locale}/blog/${post.id}`}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/${resolvedParams.locale}/blog/${post.id}`}
                  className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors"
                >
                  {t('readMore')}
                </Link>
              </article>
            ))}
          </div>

          {/* Internal Links Section */}
          <section className="mt-16 p-8 border border-gray-800">
            <h2 className="text-2xl mb-6 uppercase tracking-wider">All Our Services & Resources</h2>
            
            {/* US Services */}
            <div className="mb-8">
              <h3 className="text-xl mb-4 font-medium text-white">🇺🇸 United States Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link 
                  href={`/${resolvedParams.locale}/ai-automation-services`}
                  className="block p-3 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">AI Automation Services</h4>
                  <p className="text-gray-400 text-sm">Complete AI business automation solutions</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/web-development-company`}
                  className="block p-3 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">Web Development Company</h4>
                  <p className="text-gray-400 text-sm">Professional website development services</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/crm-development-services`}
                  className="block p-3 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">CRM Development Services</h4>
                  <p className="text-gray-400 text-sm">Custom CRM software development</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/digital-marketing-agency-usa`}
                  className="block p-3 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">Digital Marketing Agency USA</h4>
                  <p className="text-gray-400 text-sm">Expert digital marketing services</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/local-seo-services`}
                  className="block p-3 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">Local SEO Services</h4>
                  <p className="text-gray-400 text-sm">Professional local SEO optimization</p>
                </Link>
              </div>
            </div>

            {/* Canada Services */}
            <div className="mb-8">
              <h3 className="text-xl mb-4 font-medium text-white">🇨🇦 Canada Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link 
                  href="/ca/ai-automation-solutions"
                  className="block p-3 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">AI Automation Solutions Canada</h4>
                  <p className="text-gray-400 text-sm">CAD pricing, bilingual support, PIPEDA compliance</p>
                </Link>
                <Link 
                  href="/ca/web-design-services"
                  className="block p-3 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">Web Design Services Canada</h4>
                  <p className="text-gray-400 text-sm">All provinces, Canadian hosting, bilingual</p>
                </Link>
                <Link 
                  href="/ca/local-seo-services"
                  className="block p-3 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">Local SEO Services Canada</h4>
                  <p className="text-gray-400 text-sm">Canadian directories, Google My Business</p>
                </Link>
              </div>
            </div>

            {/* UK Services */}
            <div className="mb-8">
              <h3 className="text-xl mb-4 font-medium text-white">🇬🇧 United Kingdom Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link 
                  href="/uk/ai-business-automation"
                  className="block p-3 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">AI Business Automation UK</h4>
                  <p className="text-gray-400 text-sm">GBP pricing, HMRC compliance, GDPR ready</p>
                </Link>
                <div className="block p-3 border border-gray-600 opacity-60">
                  <h4 className="font-medium mb-1">CRM Software Development UK</h4>
                  <p className="text-gray-400 text-sm">Coming soon - UK-specific CRM solutions</p>
                </div>
                <div className="block p-3 border border-gray-600 opacity-60">
                  <h4 className="font-medium mb-1">London Digital Marketing Agency</h4>
                  <p className="text-gray-400 text-sm">Coming soon - London-focused marketing</p>
                </div>
              </div>
            </div>

            {/* Australia Services */}
            <div className="mb-8">
              <h3 className="text-xl mb-4 font-medium text-white">🇦🇺 Australia Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="block p-3 border border-gray-600 opacity-60">
                  <h4 className="font-medium mb-1">Web Design Company Australia</h4>
                  <p className="text-gray-400 text-sm">Coming soon - AUD pricing, Australian hosting</p>
                </div>
                <div className="block p-3 border border-gray-600 opacity-60">
                  <h4 className="font-medium mb-1">SEO for Small Business Australia</h4>
                  <p className="text-gray-400 text-sm">Coming soon - Australian local SEO</p>
                </div>
              </div>
            </div>

            {/* Blog Articles */}
            <div className="mb-8">
              <h3 className="text-xl mb-4 font-medium text-white">📝 Expert Guides & Articles</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link 
                  href={`/${resolvedParams.locale}/blog/how-to-implement-ai-automation`}
                  className="block p-3 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">How to Implement AI Automation</h4>
                  <p className="text-gray-400 text-sm">2000+ words comprehensive guide</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/blog/build-small-business-website`}
                  className="block p-3 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">How to Build a Small Business Website</h4>
                  <p className="text-gray-400 text-sm">1800+ words complete guide</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/blog/local-seo-checklist`}
                  className="block p-3 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">Local SEO Checklist 2025</h4>
                  <p className="text-gray-400 text-sm">1500+ words with free PDF download</p>
                </Link>
              </div>
            </div>

            {/* General Services */}
            <div>
              <h3 className="text-xl mb-4 font-medium text-white">🔧 Additional Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link 
                  href={`/${resolvedParams.locale}/services/ai-business-automation`}
                  className="block p-3 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <h4 className="font-medium mb-1">AI Business Automation</h4>
                  <p className="text-gray-400 text-sm">Comprehensive automation solutions</p>
                </Link>
              </div>
            </div>
          </section>

          {/* SEO Content Section */}
          <section className="mt-24 border-t border-gray-900 pt-16">
            <h2 className="text-2xl mb-8 uppercase tracking-wider">
              {t('whyAutomationMatters')}
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t('automationDescription1')}
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t('automationDescription2')}
              </p>
              <h3 className="text-xl mt-8 mb-4">{t('keyAreasTitle')}</h3>
              <ul className="space-y-2 text-gray-400 mb-6">
                {(t.raw('automationAreas') as string[]).map((area: string, index: number) => (
                  <li key={index}>• {area}</li>
                ))}
              </ul>
              <p className="text-gray-400 leading-relaxed">
                {t('automationDescription3')}
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-12 border-t border-gray-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BRM AI</p>
          <Link href={`/${resolvedParams.locale}`} className="hover:text-white transition-colors">
            {t('backToHome')}
          </Link>
        </div>
      </footer>
    </div>
  );
} 