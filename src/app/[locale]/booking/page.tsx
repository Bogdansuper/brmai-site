'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function BookingPage() {
  const t = useTranslations('Booking');
  const tNav = useTranslations('Navigation');

  return (
    <div className="min-h-screen bg-gray-50 text-black font-mono">
      {/* Simple Header */}
      <header className="border-b border-gray-200 bg-white">
        <nav className="px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-medium tracking-tight text-black hover:text-gray-700 transition-colors">
              BRM-AI
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/#services" className="text-gray-600 hover:text-black transition-colors">
                {tNav('services')}
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-black transition-colors">
                {tNav('blog')}
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-normal mb-4 uppercase tracking-wider text-black">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            {t('subtitle')}
          </p>

          {/* Google Calendar Embed */}
          <div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2rB-VdqLE4lDJD-l57aCtVBR4oo2rX1znU76kE6Zau1bwi8xFKzRpPvxCjOoA1EqwW030o5Ut8?gv=true" 
              style={{ border: 0 }} 
              width="100%" 
              height="600" 
              frameBorder="0"
            />
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl mb-4 uppercase tracking-wide text-black">{t('whatToExpectTitle')}</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• {t('expectation1')}</li>
                <li>• {t('expectation2')}</li>
                <li>• {t('expectation3')}</li>
                <li>• {t('expectation4')}</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl mb-4 uppercase tracking-wide text-black">{t('preparationTitle')}</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• {t('preparation1')}</li>
                <li>• {t('preparation2')}</li>
                <li>• {t('preparation3')}</li>
              </ul>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-16">
            <Link 
              href="/" 
              className="inline-block px-6 py-3 border border-gray-300 hover:bg-gray-100 transition-colors text-sm tracking-wider"
            >
              ← {t('backToHome')}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 