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
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: t('seoTitle'),
      description: t('seoDescription'),
      url: canonicalUrl,
    },
  };
}

const blogPosts = [
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