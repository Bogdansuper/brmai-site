import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-8 px-8 md:px-12 border-t border-gray-900 bg-black">
      <div className="max-w-6xl mx-auto w-full">
        {/* Секция 'Нам доверяют' */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-medium mb-4 text-white uppercase tracking-wider text-center md:text-left">Нам доверяют</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-8 items-center">
            <a href="https://natanplumbing.com" target="_blank" rel="noopener noreferrer" title="Natan Plumbing">
              <Image
                src="/trusted-logos/natanplumbing.webp"
                alt="Natan Plumbing Logo"
                width={120}
                height={48}
                style={{objectFit: 'contain'}}
              />
            </a>
            <a href="https://metodrive.com" target="_blank" rel="noopener noreferrer" title="Metodrive">
              <Image
                src="/trusted-logos/metodrive.webp"
                alt="Metodrive Logo"
                width={120}
                height={48}
                style={{objectFit: 'contain'}}
              />
            </a>
          </div>
        </div>
        {/* Основной футер */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <Link
            href="/booking"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-all text-sm tracking-wider text-center"
          >
            Забронировать консультацию
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="#services" className="text-gray-400 hover:text-white transition-colors">Услуги</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Блог</Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-900 pt-6">
          <p>© {new Date().getFullYear()} BRM AI</p>
          <p className="text-xs mt-2 md:mt-0">#ai #business #automation</p>
        </div>
      </div>
    </footer>
  );
} 