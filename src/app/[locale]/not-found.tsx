import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');
  
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-gray-400">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-500 mb-12">
          {t('description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all text-sm tracking-wider text-center"
          >
            {t('home')} →
          </Link>
          <Link 
            href="/#services"
            className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-all text-sm tracking-wider text-center"
          >
            {t('services')}
          </Link>
          <Link 
            href="/#contact"
            className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-all text-sm tracking-wider text-center"
          >
            {t('contact')}
          </Link>
        </div>
      </div>
    </div>
  );
} 