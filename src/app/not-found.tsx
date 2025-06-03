import Link from 'next/link';
import { headers } from 'next/headers';

export default async function NotFound() {
  // Try to determine the locale from the request headers or URL
  const headersList = await headers();
  const fullUrl = headersList.get('referer') || '';
  
  // Extract locale from URL path or default to 'en'
  const localeMatch = fullUrl.match(/\/([a-z]{2})\//);
  const locale = localeMatch ? localeMatch[1] : 'en';
  
  // Validate locale
  const supportedLocales = ['en', 'ru', 'es', 'ca', 'uk'];
  const validLocale = supportedLocales.includes(locale) ? locale : 'en';

  const getLocalizedContent = () => {
    switch(validLocale) {
      case 'es':
        return {
          title: 'Página No Encontrada',
          description: 'Lo sentimos, la página que buscas no pudo ser encontrada.',
          home: 'INICIO',
          services: 'SERVICIOS',
          blog: 'BLOG',
          contact: 'CONTACTO'
        };
      case 'ca':
        return {
          title: 'Pàgina No Trobada',
          description: 'Ho sentim, la pàgina que cerques no s\'ha pogut trobar.',
          home: 'INICI',
          services: 'SERVEIS',
          blog: 'BLOG',
          contact: 'CONTACTE'
        };
      case 'uk':
        return {
          title: 'Сторінка Не Знайдена',
          description: 'Вибачте, сторінку, яку ви шукаєте, не вдалося знайти.',
          home: 'ГОЛОВНА',
          services: 'ПОСЛУГИ',
          blog: 'БЛОГ',
          contact: 'КОНТАКТИ'
        };
      case 'ru':
        return {
          title: 'Страница Не Найдена',
          description: 'Извините, страница, которую вы ищете, не найдена.',
          home: 'ГЛАВНАЯ',
          services: 'УСЛУГИ',
          blog: 'БЛОГ',
          contact: 'КОНТАКТЫ'
        };
      default:
        return {
          title: 'Page Not Found',
          description: 'Sorry, the page you are looking for could not be found.',
          home: 'HOME',
          services: 'SERVICES',
          blog: 'BLOG',
          contact: 'CONTACT US'
        };
    }
  };

  const content = getLocalizedContent();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-8">
        <h1 className="text-6xl md:text-8xl font-normal mb-8 uppercase tracking-wider">404</h1>
        <h2 className="text-2xl md:text-3xl mb-4 font-medium">{content.title}</h2>
        <p className="text-gray-400 mb-8 text-lg leading-relaxed">{content.description}</p>
        
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 justify-center mb-12">
          <Link 
            href={`/${validLocale}`}
            className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors uppercase tracking-wider text-sm font-medium"
          >
            {content.home}
          </Link>
          <Link 
            href={`/${validLocale}/services/ai-business-automation`}
            className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm"
          >
            {content.services}
          </Link>
          <Link 
            href={`/${validLocale}/blog`}
            className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm"
          >
            {content.blog}
          </Link>
          <Link 
            href={`/${validLocale}#contact`}
            className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm"
          >
            {content.contact}
          </Link>
        </div>

        {/* Popular Pages Section */}
        <div className="border-t border-gray-800 pt-8">
          <h3 className="text-lg mb-6 uppercase tracking-wider">Popular Pages</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <Link 
              href={`/${validLocale}/blog/business-process-automation-guide`}
              className="block p-4 border border-gray-800 hover:border-gray-600 transition-colors text-left"
            >
              <div className="font-medium mb-2">Business Process Automation Guide</div>
              <div className="text-gray-500">Complete automation guide</div>
            </Link>
            <Link 
              href={`/${validLocale}/blog/ai-business-automation-benefits`}
              className="block p-4 border border-gray-800 hover:border-gray-600 transition-colors text-left"
            >
              <div className="font-medium mb-2">AI Automation Benefits</div>
              <div className="text-gray-500">Discover AI advantages</div>
            </Link>
            <Link 
              href={`/${validLocale}/privacy-policy`}
              className="block p-4 border border-gray-800 hover:border-gray-600 transition-colors text-left"
            >
              <div className="font-medium mb-2">Privacy Policy</div>
              <div className="text-gray-500">Data protection info</div>
            </Link>
          </div>
        </div>

        {/* SEO Content */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-left">
          <h3 className="text-lg mb-4 uppercase tracking-wider">About BRM AI</h3>
          <p className="text-gray-400 leading-relaxed">
            BRM AI specializes in business process automation using artificial intelligence. 
            We help companies streamline operations, reduce costs, and improve efficiency through 
            intelligent automation solutions. Explore our AI-powered services and discover how 
            we can transform your business processes.
          </p>
        </div>
      </div>
    </div>
  );
} 