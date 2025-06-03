import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

// Blog posts data with translations and internal links
const blogPosts = {
  'business-process-automation-guide': {
    en: {
      title: 'Complete Guide to Business Process Automation in 2024',
      content: `
        <h2>What is Business Process Automation?</h2>
        <p>Business process automation (BPA) revolutionizes how companies operate by using technology to execute recurring tasks or processes in a business where manual effort can be replaced. At BRM AI, we specialize in implementing <a href="/services/ai-business-automation">AI business automation</a> solutions that transform traditional workflows into intelligent, self-managing systems.</p>
        
        <h2>Key Benefits of Business Automation</h2>
        <p>Organizations implementing business automation experience significant improvements in efficiency, cost reduction, and accuracy. Our <a href="/#services">comprehensive automation services</a> help businesses achieve:</p>
        <ul>
          <li>Reduced operational costs by up to 40%</li>
          <li>Improved accuracy and reduced human error</li>
          <li>Enhanced employee productivity and satisfaction</li>
          <li>Faster response times and better customer service</li>
          <li>Scalable processes that grow with your business</li>
        </ul>
        
        <h2>Business Process Automation Software Solutions</h2>
        <p>Modern business process automation software combines artificial intelligence with traditional automation to create intelligent workflows. These solutions can:</p>
        <ul>
          <li>Learn from historical data to optimize processes</li>
          <li>Make real-time decisions based on predefined rules</li>
          <li>Integrate seamlessly with existing business systems</li>
          <li>Provide detailed analytics and reporting capabilities</li>
        </ul>
        
        <h2>AI for Business Automation: The Future is Now</h2>
        <p>Artificial intelligence takes business process automation to unprecedented levels. AI business automation can handle complex decision-making, natural language processing, and predictive analytics. <a href="/#contact">Contact our experts</a> to learn how AI can transform your specific business processes.</p>
        
        <h2>Implementation Best Practices</h2>
        <p>Successful business automation requires careful planning and execution. Key steps include:</p>
        <ol>
          <li>Process mapping and analysis</li>
          <li>Technology selection and customization</li>
          <li>Employee training and change management</li>
          <li>Gradual rollout and continuous optimization</li>
        </ol>
        
        <p>Ready to start your automation journey? Our team at BRM AI provides end-to-end business process automation consulting and implementation services.</p>
      `,
      excerpt: 'Learn how business process automation can transform your operations, reduce costs, and improve efficiency with AI-powered solutions.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Automation'
    },
    ru: {
      title: 'Полное Руководство по Автоматизации Бизнес-Процессов в 2024',
      content: `
        <h2>Что такое Автоматизация Бизнес-Процессов?</h2>
        <p>Автоматизация бизнес-процессов (BPA) революционизирует работу компаний, используя технологии для выполнения повторяющихся задач или процессов, где ручной труд может быть заменен. В BRM AI мы специализируемся на внедрении решений <a href="/services/ai-business-automation">ИИ автоматизации бизнеса</a>, которые трансформируют традиционные рабочие процессы в интеллектуальные, самоуправляемые системы.</p>
        
        <h2>Ключевые Преимущества Автоматизации Бизнеса</h2>
        <p>Организации, внедряющие автоматизацию бизнеса, испытывают значительные улучшения в эффективности, снижении затрат и точности. Наши <a href="/#services">комплексные услуги автоматизации</a> помогают бизнесу достичь:</p>
        <ul>
          <li>Снижение операционных расходов до 40%</li>
          <li>Повышение точности и уменьшение человеческих ошибок</li>
          <li>Улучшение продуктивности и удовлетворенности сотрудников</li>
          <li>Более быстрое время отклика и лучшее обслуживание клиентов</li>
          <li>Масштабируемые процессы, растущие вместе с бизнесом</li>
        </ul>
        
        <h2>Решения Программного Обеспечения для Автоматизации Бизнес-Процессов</h2>
        <p>Современное программное обеспечение для автоматизации бизнес-процессов сочетает искусственный интеллект с традиционной автоматизацией для создания интеллектуальных рабочих процессов.</p>
        
        <h2>ИИ для Автоматизации Бизнеса: Будущее Уже Здесь</h2>
        <p>Искусственный интеллект выводит автоматизацию бизнес-процессов на беспрецедентный уровень. <a href="/#contact">Свяжитесь с нашими экспертами</a>, чтобы узнать, как ИИ может трансформировать ваши конкретные бизнес-процессы.</p>
      `,
      excerpt: 'Узнайте, как автоматизация бизнес-процессов может трансформировать ваши операции, снизить затраты и повысить эффективность с помощью ИИ-решений.',
      date: '2024-01-15',
      readTime: '8 мин чтения',
      category: 'Автоматизация'
    }
  },
  'ai-business-automation-benefits': {
    en: {
      title: 'Top 10 Benefits of AI Business Automation for SMEs',
      content: `
        <h2>Why Small and Medium Enterprises Need AI Business Automation</h2>
        <p>Small and medium enterprises (SMEs) face unique challenges in today's competitive landscape. AI business automation provides powerful solutions that level the playing field. Our <a href="/services/ai-business-automation">AI automation services</a> are specifically designed to help SMEs harness the power of artificial intelligence.</p>
        
        <h2>Top 10 Benefits of AI for Business Automation</h2>
        <ol>
          <li><strong>Cost Reduction:</strong> Automate labor-intensive processes and reduce operational expenses</li>
          <li><strong>Improved Accuracy:</strong> Eliminate human errors in data processing and decision-making</li>
          <li><strong>24/7 Operations:</strong> Enable round-the-clock business operations without human supervision</li>
          <li><strong>Scalability:</strong> Easily scale operations up or down based on business needs</li>
          <li><strong>Enhanced Customer Experience:</strong> Provide faster, more personalized customer service</li>
          <li><strong>Data-Driven Insights:</strong> Generate actionable insights from business data</li>
          <li><strong>Competitive Advantage:</strong> Stay ahead of competitors with advanced technology</li>
          <li><strong>Employee Satisfaction:</strong> Free staff from repetitive tasks for more strategic work</li>
          <li><strong>Risk Reduction:</strong> Minimize compliance risks and operational errors</li>
          <li><strong>Faster Time-to-Market:</strong> Accelerate product development and service delivery</li>
        </ol>
        
        <h2>Artificial Intelligence Business Process Examples</h2>
        <p>Real-world applications of AI business automation include:</p>
        <ul>
          <li>Automated invoice processing and accounts payable</li>
          <li>Intelligent customer support chatbots</li>
          <li>Predictive maintenance scheduling</li>
          <li>Automated quality control in manufacturing</li>
          <li>Dynamic pricing optimization</li>
        </ul>
        
        <p>Ready to transform your business with AI automation? <a href="/#contact">Contact us today</a> to discuss your specific needs and explore our <a href="/#services">comprehensive automation solutions</a>.</p>
      `,
      excerpt: 'Discover how small and medium enterprises can leverage artificial intelligence for business process management and automation.',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'AI'
    },
    ru: {
      title: 'Топ 10 Преимуществ ИИ Автоматизации Бизнеса для МСП',
      content: `
        <h2>Почему Малым и Средним Предприятиям Нужна ИИ Автоматизация Бизнеса</h2>
        <p>Малые и средние предприятия (МСП) сталкиваются с уникальными вызовами в сегодняшнем конкурентном ландшафте. ИИ автоматизация бизнеса предоставляет мощные решения, которые выравнивают игровое поле. Наши <a href="/services/ai-business-automation">услуги ИИ автоматизации</a> специально разработаны, чтобы помочь МСП использовать силу искусственного интеллекта.</p>
        
        <h2>Топ 10 Преимуществ ИИ для Автоматизации Бизнеса</h2>
        <ol>
          <li><strong>Снижение Затрат:</strong> Автоматизация трудоемких процессов и снижение операционных расходов</li>
          <li><strong>Улучшенная Точность:</strong> Устранение человеческих ошибок в обработке данных</li>
          <li><strong>Круглосуточные Операции:</strong> Работа 24/7 без человеческого надзора</li>
          <li><strong>Масштабируемость:</strong> Легкое масштабирование операций</li>
          <li><strong>Улучшенный Клиентский Опыт:</strong> Более быстрое и персонализированное обслуживание</li>
        </ol>
        
        <p>Готовы трансформировать свой бизнес с помощью ИИ автоматизации? <a href="/#contact">Свяжитесь с нами сегодня</a>, чтобы обсудить ваши конкретные потребности.</p>
      `,
      excerpt: 'Узнайте, как малые и средние предприятия могут использовать искусственный интеллект для управления и автоматизации бизнес-процессов.',
      date: '2024-01-10',
      readTime: '6 мин чтения',
      category: 'ИИ'
    }
  },
  'choosing-automation-software': {
    en: {
      title: 'How to Choose the Right Business Process Automation Software',
      content: `
        <h2>Essential Criteria for Business Process Automation Software Selection</h2>
        <p>Choosing the right business process automation software is crucial for successful digital transformation. At BRM AI, we help businesses navigate this complex decision with our expertise in <a href="/services/ai-business-automation">AI-powered automation solutions</a>.</p>
        
        <h2>Key Features to Look For</h2>
        <p>When evaluating business process automation software, consider these essential features:</p>
        <ul>
          <li><strong>Integration Capabilities:</strong> Seamless connection with existing systems</li>
          <li><strong>Scalability:</strong> Ability to grow with your business needs</li>
          <li><strong>User-Friendly Interface:</strong> Easy adoption across your organization</li>
          <li><strong>AI and Machine Learning:</strong> Advanced automation capabilities</li>
          <li><strong>Security and Compliance:</strong> Enterprise-grade data protection</li>
          <li><strong>Analytics and Reporting:</strong> Comprehensive performance insights</li>
        </ul>
        
        <h2>Business Process Management vs Automation Software</h2>
        <p>Understanding the difference between BPM and automation software helps make informed decisions:</p>
        <ul>
          <li>BPM focuses on designing and optimizing processes</li>
          <li>Automation software executes and manages automated workflows</li>
          <li>Modern solutions combine both for comprehensive process management</li>
        </ul>
        
        <h2>Implementation Best Practices</h2>
        <p>Successful automation software implementation requires:</p>
        <ol>
          <li>Thorough process analysis and mapping</li>
          <li>Stakeholder engagement and buy-in</li>
          <li>Phased rollout approach</li>
          <li>Continuous monitoring and optimization</li>
        </ol>
        
        <p>Need guidance in selecting the right automation software? Our team provides comprehensive consulting services to help you make the best choice for your business. <a href="/#contact">Get in touch with our automation experts</a> or explore our <a href="/#services">full range of automation services</a>.</p>
      `,
      excerpt: 'A comprehensive guide to selecting business process automation software that aligns with your company\'s needs and goals.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Software'
    },
    ru: {
      title: 'Как Выбрать Правильное Программное Обеспечение для Автоматизации Бизнес-Процессов',
      content: `
        <h2>Основные Критерии для Выбора ПО Автоматизации Бизнес-Процессов</h2>
        <p>Выбор правильного программного обеспечения для автоматизации бизнес-процессов имеет решающее значение для успешной цифровой трансформации. В BRM AI мы помогаем бизнесу навигировать в этом сложном решении с нашей экспертизой в <a href="/services/ai-business-automation">ИИ-решениях автоматизации</a>.</p>
        
        <h2>Ключевые Функции, На Которые Стоит Обратить Внимание</h2>
        <p>При оценке программного обеспечения для автоматизации бизнес-процессов учитывайте эти важные функции:</p>
        <ul>
          <li><strong>Возможности Интеграции:</strong> Бесшовное подключение к существующим системам</li>
          <li><strong>Масштабируемость:</strong> Способность расти вместе с потребностями бизнеса</li>
          <li><strong>Удобный Интерфейс:</strong> Легкое внедрение в организации</li>
          <li><strong>ИИ и Машинное Обучение:</strong> Продвинутые возможности автоматизации</li>
        </ul>
        
        <p>Нужна помощь в выборе правильного программного обеспечения для автоматизации? <a href="/#contact">Свяжитесь с нашими экспертами по автоматизации</a>.</p>
      `,
      excerpt: 'Комплексное руководство по выбору программного обеспечения для автоматизации бизнес-процессов, которое соответствует потребностям и целям вашей компании.',
      date: '2024-01-05',
      readTime: '10 мин чтения',
      category: 'ПО'
    }
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];
  if (!post) return { title: 'Post Not Found' };
  
  const postData = post[resolvedParams.locale as keyof typeof post] || post.en;
  const baseUrl = "https://mybrmai.com";
  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/blog/${resolvedParams.slug}`;
  
  return {
    title: `${postData.title} | BRM AI Blog`,
    description: postData.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      url: canonicalUrl,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }
  
  const postData = post[resolvedParams.locale as keyof typeof post] || post.en;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Blog' });
  const tPost = await getTranslations({ locale: resolvedParams.locale, namespace: 'BlogPost' });
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
              {tPost('contactUs')}
            </Link>
          </div>
        </nav>
      </header>

      {/* Article Content */}
      <main className="pt-32 pb-24 px-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href={`/${resolvedParams.locale}`} className="hover:text-white">{tPost('home')}</Link>
            <span className="mx-2">→</span>
            <Link href={`/${resolvedParams.locale}/blog`} className="hover:text-white">{tPost('blog')}</Link>
            <span className="mx-2">→</span>
            <span>{postData.title}</span>
          </nav>
          
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
              <span>{postData.category}</span>
              <span>•</span>
              <span>{postData.date}</span>
              <span>•</span>
              <span>{postData.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-normal mb-6 leading-tight">
              {postData.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {postData.excerpt}
            </p>
          </header>
          
          {/* Article Content */}
          <article 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />
          
          {/* CTA Section */}
          <section className="mt-16 p-8 border border-gray-800">
            <h3 className="text-2xl mb-4">{tPost('ctaTitle')}</h3>
            <p className="text-gray-400 mb-6">
              {tPost('ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={`/${resolvedParams.locale}#contact`}
                className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-center font-medium"
              >
                {tPost('getFreeConsultation')}
              </Link>
              <Link 
                href={`/${resolvedParams.locale}/services/ai-business-automation`}
                className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors text-center"
              >
                {tPost('viewServices')}
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-12 border-t border-gray-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BRM AI</p>
          <Link href={`/${resolvedParams.locale}/blog`} className="hover:text-white transition-colors">
            {tShared('backToBlog')}
          </Link>
        </div>
      </footer>
    </div>
  );
} 