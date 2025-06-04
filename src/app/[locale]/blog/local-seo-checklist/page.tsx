import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/blog/local-seo-checklist`;
  
  return {
    title: 'Local SEO Checklist 2025: How to Do SEO for Small Business',
    description: 'Complete local SEO checklist for small businesses. Learn how to optimize Google Business Profile, improve local rankings, and attract nearby customers.',
    keywords: [
      'how to do SEO for small business',
      'local SEO checklist 2025',
      'optimize Google Business Profile'
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en/blog/local-seo-checklist`,
        'uk': `${baseUrl}/uk/blog/local-seo-checklist`,
        'es': `${baseUrl}/es/blog/local-seo-checklist`,
        'ca': `${baseUrl}/ca/blog/local-seo-checklist`,
        'ru': `${baseUrl}/ru/blog/local-seo-checklist`,
        'x-default': `${baseUrl}/en/blog/local-seo-checklist`
      },
    },
  };
}

export default async function LocalSEOChecklistPage({ params }: Props) {
  const resolvedParams = await params;
  
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Local SEO Checklist 2025: How to Do SEO for Small Business",
    "description": "Complete local SEO checklist for small businesses. Learn how to optimize Google Business Profile, improve local rankings, and attract nearby customers.",
    "author": {
      "@type": "Organization",
      "name": "BRM AI"
    },
    "datePublished": "2024-06-03",
    "keywords": ["how to do SEO for small business", "local SEO checklist 2025", "optimize Google Business Profile"]
  };

  return (
    <>
      <Script
        id="local-seo-checklist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaOrgData),
        }}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900/50">
          <nav className="px-6 md:px-12 py-4">
            <div className="flex items-center justify-between">
              <Link href={`/${resolvedParams.locale}`} className="text-xl font-medium tracking-tight">
                BRM-AI
              </Link>
              <Link 
                href={`/${resolvedParams.locale}#contact`} 
                className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all text-sm"
              >
                Book a Free Consultation
              </Link>
            </div>
          </nav>
        </header>

        <main className="pt-32 pb-24 px-8 md:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm text-gray-500">
              <Link href={`/${resolvedParams.locale}`} className="hover:text-white">Home</Link>
              <span className="mx-2">→</span>
              <Link href={`/${resolvedParams.locale}/blog`} className="hover:text-white">Blog</Link>
              <span className="mx-2">→</span>
              <span>Local SEO Checklist</span>
            </nav>

            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-normal mb-6 uppercase tracking-wider leading-tight">
                Local SEO Checklist 2025: How to Do SEO for Small Business
              </h1>
              <div className="flex items-center text-sm text-gray-500 mb-8">
                <span>Published on June 3, 2024</span>
                <span className="mx-2">•</span>
                <span>10 min read</span>
                <span className="mx-2">•</span>
                <span>Local SEO</span>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                Master local SEO with this comprehensive checklist. Learn how to optimize your Google Business Profile, 
                improve local search rankings, and attract customers in your area.
              </p>
            </header>

            <article className="prose prose-invert max-w-none">
              
              <section className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Google Business Profile Optimization</h2>
                
                <div className="border border-gray-800 p-6 mb-6">
                  <h3 className="text-xl mb-4 font-medium text-white">Essential Setup Checklist</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• ☐ Claim and verify your Google Business Profile</li>
                    <li>• ☐ Complete all business information fields (100% completion)</li>
                    <li>• ☐ Add accurate business name, address, phone number (NAP)</li>
                    <li>• ☐ Select the most specific business categories</li>
                    <li>• ☐ Write compelling business description with keywords</li>
                    <li>• ☐ Add business hours including holidays</li>
                    <li>• ☐ Upload high-quality cover photo (1024x575px)</li>
                    <li>• ☐ Add logo and additional photos (minimum 10)</li>
                    <li>• ☐ Include interior, exterior, team, and product photos</li>
                    <li>• ☐ Add services/products with descriptions</li>
                  </ul>
                </div>

                <h3 className="text-xl mb-4 font-medium">Advanced Google Business Profile Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-800 p-4">
                    <h4 className="font-medium text-white mb-2">Regular Updates</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• ☐ Post weekly Google Business updates</li>
                      <li>• ☐ Share events and promotions</li>
                      <li>• ☐ Add new photos monthly</li>
                      <li>• ☐ Respond to Q&A section</li>
                    </ul>
                  </div>
                  <div className="border border-gray-800 p-4">
                    <h4 className="font-medium text-white mb-2">Review Management</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• ☐ Respond to all reviews within 24 hours</li>
                      <li>• ☐ Encourage satisfied customers to leave reviews</li>
                      <li>• ☐ Address negative reviews professionally</li>
                      <li>• ☐ Include keywords in review responses</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">On-Page Local SEO</h2>
                
                <div className="border border-gray-800 p-6 mb-6">
                  <h3 className="text-xl mb-4 font-medium text-white">Title Tags and Meta Descriptions</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• ☐ Include primary keyword + location in title tags</li>
                    <li>• ☐ Keep titles under 60 characters</li>
                    <li>• ☐ Write unique titles for each page</li>
                    <li>• ☐ Add location-specific meta descriptions</li>
                    <li>• ☐ Include call-to-action in descriptions</li>
                    <li>• ☐ Optimize homepage for "[service] + [city]"</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-6 mb-6">
                  <h3 className="text-xl mb-4 font-medium text-white">Content Optimization</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• ☐ Create location-specific landing pages</li>
                    <li>• ☐ Include NAP on every page (footer/header)</li>
                    <li>• ☐ Add local keywords naturally in content</li>
                    <li>• ☐ Create "Areas We Serve" page</li>
                    <li>• ☐ Include local landmarks and neighborhoods</li>
                    <li>• ☐ Add schema markup (LocalBusiness)</li>
                    <li>• ☐ Optimize images with local alt text</li>
                  </ul>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Local Citations and Directories</h2>
                
                <div className="border border-gray-800 p-6 mb-6">
                  <h3 className="text-xl mb-4 font-medium text-white">Major Directory Listings</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• ☐ Yelp business listing (complete profile)</li>
                    <li>• ☐ Apple Maps / Apple Business Connect</li>
                    <li>• ☐ Bing Places for Business</li>
                    <li>• ☐ Yahoo Local Listings</li>
                    <li>• ☐ Facebook Business Page</li>
                    <li>• ☐ Better Business Bureau (if applicable)</li>
                    <li>• ☐ Chamber of Commerce listing</li>
                  </ul>
                </div>

                <div className="border border-yellow-500/30 p-6 bg-yellow-500/5 mb-6">
                  <h4 className="text-lg mb-3 font-medium text-yellow-400">NAP Consistency Check</h4>
                  <p className="text-gray-400 mb-3">Ensure your Name, Address, Phone number are identical across all platforms:</p>
                  <ul className="text-gray-400 space-y-1">
                    <li>• ☐ Exact same business name format</li>
                    <li>• ☐ Consistent address formatting</li>
                    <li>• ☐ Same phone number everywhere</li>
                    <li>• ☐ Consistent website URL</li>
                  </ul>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Local Link Building</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-4 font-medium text-white">Local Partnership Opportunities</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• ☐ Sponsor local events</li>
                      <li>• ☐ Partner with other local businesses</li>
                      <li>• ☐ Join local business associations</li>
                      <li>• ☐ Guest post on local blogs</li>
                      <li>• ☐ Collaborate with local influencers</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-4 font-medium text-white">Community Involvement</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• ☐ Participate in community events</li>
                      <li>• ☐ Support local charities</li>
                      <li>• ☐ Host local workshops/seminars</li>
                      <li>• ☐ Get featured in local news</li>
                      <li>• ☐ Create local resource pages</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Technical Local SEO</h2>
                
                <div className="border border-gray-800 p-6 mb-6">
                  <h3 className="text-xl mb-4 font-medium text-white">Website Performance</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• ☐ Ensure mobile-friendly design (responsive)</li>
                    <li>• ☐ Optimize page loading speed (under 3 seconds)</li>
                    <li>• ☐ Install SSL certificate (HTTPS)</li>
                    <li>• ☐ Create XML sitemap</li>
                    <li>• ☐ Set up Google Search Console</li>
                    <li>• ☐ Install Google Analytics</li>
                    <li>• ☐ Fix broken links and 404 errors</li>
                  </ul>
                </div>

                <div className="border border-gray-800 p-6">
                  <h3 className="text-xl mb-4 font-medium text-white">Local Schema Markup</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• ☐ Add LocalBusiness schema</li>
                    <li>• ☐ Include NAP in schema markup</li>
                    <li>• ☐ Add business hours schema</li>
                    <li>• ☐ Include price range information</li>
                    <li>• ☐ Add review schema markup</li>
                    <li>• ☐ Test schema with Google's Rich Results Tool</li>
                  </ul>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Content Marketing for Local SEO</h2>
                
                <div className="border border-gray-800 p-6 mb-6">
                  <h3 className="text-xl mb-4 font-medium text-white">Local Content Ideas</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• ☐ Write about local events and news</li>
                    <li>• ☐ Create location-specific service pages</li>
                    <li>• ☐ Feature local customer success stories</li>
                    <li>• ☐ Write guides for local area</li>
                    <li>• ☐ Create "Best of [City]" content</li>
                    <li>• ☐ Share local industry insights</li>
                    <li>• ☐ Highlight local team members</li>
                  </ul>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl mb-6 uppercase tracking-wider">Monitoring and Analytics</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-4 font-medium text-white">Track These Metrics</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• ☐ Local search rankings</li>
                      <li>• ☐ Google Business Profile views</li>
                      <li>• ☐ Website traffic from local searches</li>
                      <li>• ☐ Phone calls from Google</li>
                      <li>• ☐ Direction requests</li>
                      <li>• ☐ Review quantity and ratings</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-800 p-6">
                    <h3 className="text-xl mb-4 font-medium text-white">Monthly Tasks</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• ☐ Review analytics reports</li>
                      <li>• ☐ Update business information</li>
                      <li>• ☐ Check for new review opportunities</li>
                      <li>• ☐ Audit local citations</li>
                      <li>• ☐ Update Google Business posts</li>
                      <li>• ☐ Monitor competitor activities</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-16 border border-gray-800 p-8">
                <h2 className="text-2xl mb-6 uppercase tracking-wider">Free Local SEO Checklist PDF</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Download our comprehensive local SEO checklist PDF to keep track of your progress 
                  and ensure you don't miss any important optimization steps.
                </p>
                <div className="bg-gray-900 p-6 rounded border">
                  <h3 className="text-lg mb-3 font-medium text-white">What's Included:</h3>
                  <ul className="text-gray-400 space-y-2 mb-6">
                    <li>• Complete 50-point local SEO checklist</li>
                    <li>• Google Business Profile optimization guide</li>
                    <li>• Local citation tracking sheet</li>
                    <li>• Monthly SEO task calendar</li>
                    <li>• Local keyword research template</li>
                  </ul>
                  <Link 
                    href={`/${resolvedParams.locale}#contact`}
                    className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm"
                  >
                    Download Free PDF
                  </Link>
                </div>
              </section>

              <section className="mb-16 border border-gray-800 p-8">
                <h2 className="text-2xl mb-6 uppercase tracking-wider">Need Professional Local SEO Help?</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Local SEO can be time-consuming and complex. If you want guaranteed results without the hassle, 
                  our local SEO experts can handle everything for you.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg mb-3 font-medium text-white">Our Local SEO Services:</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Complete Google Business Profile optimization</li>
                      <li>• Local citation building and management</li>
                      <li>• Review management and response</li>
                      <li>• Local keyword research and optimization</li>
                      <li>• Monthly reporting and analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg mb-3 font-medium text-white">Why Choose Our Services:</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Proven track record with local businesses</li>
                      <li>• Transparent pricing with no contracts</li>
                      <li>• Dedicated account manager</li>
                      <li>• 90-day money-back guarantee</li>
                      <li>• Local market expertise</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    href={`/${resolvedParams.locale}/local-seo-services`}
                    className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm mr-4"
                  >
                    View Our Local SEO Packages
                  </Link>
                  <Link 
                    href={`/${resolvedParams.locale}#contact`}
                    className="px-6 py-3 border border-gray-600 hover:border-white transition-all uppercase tracking-wider text-sm"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </section>
            </article>

            {/* Related Articles */}
            <section className="mt-16 border-t border-gray-900 pt-12">
              <h2 className="text-2xl mb-8 uppercase tracking-wider">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href={`/${resolvedParams.locale}/blog/build-small-business-website`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">How to Build a Business Website</h3>
                  <p className="text-gray-400 text-sm">Complete guide to creating an effective small business website</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/blog/how-to-implement-ai-automation`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">AI Automation Guide</h3>
                  <p className="text-gray-400 text-sm">Learn how to implement AI automation in your business</p>
                </Link>
                <Link 
                  href={`/${resolvedParams.locale}/local-seo-services`}
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <h3 className="text-lg mb-2 font-medium">Professional Local SEO</h3>
                  <p className="text-gray-400 text-sm">Get expert local SEO services for your business</p>
                </Link>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-8 md:px-12 border-t border-gray-900">
          <div className="max-w-4xl mx-auto flex justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} BRM AI</p>
            <Link href={`/${resolvedParams.locale}`} className="hover:text-white transition-colors">
              Back to Home
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
} 