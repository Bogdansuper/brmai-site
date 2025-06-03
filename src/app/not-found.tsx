import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-normal mb-8 uppercase tracking-wider">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">Sorry, the page you are looking for could not be found.</p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/"
            className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors"
          >
            HOME
          </Link>
          <Link 
            href="/#services"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors"
          >
            SERVICES
          </Link>
          <Link 
            href="/#contact"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
} 