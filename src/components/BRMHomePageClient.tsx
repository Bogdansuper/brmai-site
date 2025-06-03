"use client";
import React from 'react';
import { useState, useRef, useEffect } from "react";
import {useTranslations} from 'next-intl';
import {
  Globe,
  TrendingUp,
  Megaphone,
  Target,
  MapPin,
  Brain,
  DatabaseZap,
  Lightbulb,
  Settings2,
  type LucideIcon,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher.tsx";
import Link from "next/link";
import MercuryLiquidEffect from './MercuryLiquidEffect';

interface Service {
  title: string;
  description?: string;
  subServices?: string[];
  icon: LucideIcon;
  link?: string;
}

interface Client {
  name: string;
  logoUrl: string;
  websiteUrl: string;
  logoDarkUrl?: string;
}

export default function BRMHomePageClient() {
  console.log('[TEST] BRMHomePageClient rendering');

  const t = useTranslations('BRMHomePage');
  const tServices = useTranslations('Services');
  const tClients = useTranslations('Clients');
  const tHeader = useTranslations('Header');
  const tFooter = useTranslations('Footer');
  const tShared = useTranslations('Shared');
  const tAbout = useTranslations('AboutUs');
  const tWhyChoose = useTranslations('WhyChooseUs');
  const tFAQ = useTranslations('FAQ');
  const tContact = useTranslations('Contact');
  const tNav = useTranslations('Navigation');

  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for scroll animations
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // Refs for sections
  const servicesRef = useRef<HTMLDivElement>(null);
  const serviceItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contactRef = useRef<HTMLDivElement>(null);

  const recipientEmail = 'bogdanantonov92@gmail.com';

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `New Consultation Request from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const services: Service[] = [
    {
      title: tServices("websiteCreation_title"),
      description: tServices("websiteCreation_desc"),
      icon: Globe,
    },
    {
      title: tServices("seoOptimization_title"),
      description: tServices("seoOptimization_desc"),
      icon: TrendingUp,
    },
    {
      title: tServices("digitalMarketing_title"),
      description: tServices("digitalMarketing_desc"),
      icon: Megaphone,
    },
    {
      title: tServices("googleAds_title"),
      description: tServices("googleAds_desc"),
      icon: Target,
    },
    {
      title: tServices("googleBusiness_title"),
      description: tServices("googleBusiness_desc"),
      icon: MapPin,
    },
    {
      title: tServices("aiAutomation_title"),
      icon: Brain,
      subServices: [
        tServices("aiAutomation_subService1"),
        tServices("aiAutomation_subService2")
      ],
      link: "/services/ai-business-automation"
    },
    {
      title: tServices("leadAutomation_title"),
      description: tServices("leadAutomation_desc"),
      icon: DatabaseZap,
    },
    {
      title: tServices("continuousImprovement_title"),
      description: tServices("continuousImprovement_desc"),
      icon: Lightbulb,
    },
    {
      title: tServices("customCrm_title"),
      description: tServices("customCrm_desc"),
      icon: Settings2,
    },
  ];

  // Set up Intersection Observer for scroll animations
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      // Clean up existing observer
      if (observer) {
        observer.disconnect();
      }

      // Check if we're on desktop
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        // On mobile, make all sections visible immediately
        const allSectionIds = ['services', 'contact'];
        services.forEach((_, index) => {
          allSectionIds.push(`service-${index}`);
        });
        setVisibleSections(new Set(allSectionIds));
        return;
      }

      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      }, observerOptions);

      // Observe service items
      serviceItemsRef.current.forEach((item) => {
        if (item && observer) observer.observe(item);
      });

      // Observe main sections
      if (servicesRef.current && observer) observer.observe(servicesRef.current);
      if (contactRef.current && observer) observer.observe(contactRef.current);
    };

    // Initial setup
    setupObserver();

    // Handle window resize
    const handleResize = () => {
      setupObserver();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [services.length]); // Add services.length as dependency

  const clients: Client[] = [
    {
      name: "Natan Plumbing",
      logoUrl: "/natan.png",
      websiteUrl: "https://natanplumbing-rep9.vercel.app",
    },
    {
      name: "Metodrive",
      logoUrl: "/metodrive.png",
      websiteUrl: "https://metodrive.com",
    },
  ];
  const [expandedServices, setExpandedServices] = useState<{ [key: number]: boolean }>({});

  const toggleServiceExpansion = (index: number) => {
    setExpandedServices(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Fixed Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900/50">
        <nav className="px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Logo and Navigation */}
            <div className="flex items-center gap-12">
              {/* Logo */}
              <div className="text-xl font-medium tracking-tight">
                BRM-AI
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8 text-sm">
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">{tNav('aboutUs')}</a>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">{tNav('faq')}</a>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">{tNav('blog')}</Link>
              </div>
            </div>

            {/* Right Side - Auth Links */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#login" className="text-gray-400 hover:text-white transition-colors">{tNav('login')}</a>
              <a href="#signup" className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all">
                {tNav('signUp')}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-gray-900">
            <div className="px-6 py-4 space-y-4">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">{tNav('aboutUs')}</a>
              <a href="#faq" className="block text-gray-400 hover:text-white transition-colors">{tNav('faq')}</a>
              <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">{tNav('blog')}</Link>
              <div className="pt-4 space-y-4 border-t border-gray-900">
                <a href="#login" className="block text-gray-400 hover:text-white transition-colors">{tNav('login')}</a>
                <a href="#signup" className="block text-center px-4 py-2 border border-white hover:bg-white hover:text-black transition-all">
                  {tNav('signUp')}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Canvas - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Canvas Background - Mercury liquid effect - contained within hero */}
        <div className="absolute inset-0 z-0" style={{ height: '100vh', overflow: 'hidden' }}>
          <MercuryLiquidEffect />
        </div>

        {/* Content Overlay - ensure it's above canvas but below header */}
        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-12 lg:px-24 pointer-events-none">
          {/* Main Content - Shifted down and left like Vercel */}
          <div className="max-w-5xl mt-24 pointer-events-auto">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-normal mb-8 tracking-tight leading-none">
              {t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl">
              {t('heroSubtitle')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all text-sm tracking-wider text-center"
              >
                {t('getStarted')}
              </a>
              <a
                href="#services"
                className="inline-block px-8 py-4 border border-white hover:bg-white hover:text-black transition-all text-sm tracking-wider text-center"
              >
                {t('viewServices')}
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Language Switcher */}
        <div className="absolute bottom-8 left-8 md:left-12 lg:left-24 z-20 pointer-events-auto">
          <LanguageSwitcher />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-8 md:px-12 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-8 uppercase tracking-wider">
            {tAbout('title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {tAbout('paragraph1')} Our team specializes in <Link href="/services/ai-business-automation" className="text-white hover:text-gray-300 underline">AI business automation</Link> solutions that transform traditional workflows into intelligent, self-managing systems.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {tAbout('paragraph2')} Whether you need <Link href="#services" className="text-white hover:text-gray-300 underline">business process automation</Link> or comprehensive digital transformation, our expertise ensures successful implementation and measurable results.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4 uppercase tracking-wide">{tAbout('missionTitle')}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {tAbout('missionText')} We believe that <Link href="/blog" className="text-white hover:text-gray-300 underline">staying informed about automation trends</Link> is crucial for business success in the digital age.
              </p>
              <h3 className="text-xl mb-4 uppercase tracking-wide">{tAbout('approachTitle')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• {tAbout('approach1')}</li>
                <li>• {tAbout('approach2')}</li>
                <li>• {tAbout('approach3')}</li>
                <li>• {tAbout('approach4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-8 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 uppercase tracking-wider text-center">
            {tWhyChoose('title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-thin text-gray-500 mb-6">01</div>
              <h3 className="text-xl mb-4 uppercase tracking-wide">{tWhyChoose('provenResultsTitle')}</h3>
              <p className="text-gray-400">
                {tWhyChoose('provenResultsText')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-thin text-gray-500 mb-6">02</div>
              <h3 className="text-xl mb-4 uppercase tracking-wide">{tWhyChoose('aiExpertiseTitle')}</h3>
              <p className="text-gray-400">
                {tWhyChoose('aiExpertiseText')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-thin text-gray-500 mb-6">03</div>
              <h3 className="text-xl mb-4 uppercase tracking-wide">{tWhyChoose('customSolutionsTitle')}</h3>
              <p className="text-gray-400">
                {tWhyChoose('customSolutionsText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Minimalist */}
      <section 
        id="services" 
        ref={servicesRef}
        className={`py-24 px-8 md:px-12 bg-black border-t border-gray-900 transition-all duration-1000 ${
          visibleSections.has('services') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-normal mb-8 uppercase tracking-wider transition-all duration-700 transform ${
            visibleSections.has('services') ? 'translate-y-0' : 'translate-y-8'
          }`}>
            {t('servicesTitle')}
          </h2>
          <p className="text-gray-400 mb-16 max-w-3xl">
            {t('servicesDescription')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                ref={el => { serviceItemsRef.current[index] = el; }}
                className={`border border-gray-800 p-6 hover:border-gray-600 transition-all duration-700 transform ${
                  typeof window !== 'undefined' && window.innerWidth >= 768
                    ? visibleSections.has(`service-${index}`)
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-12 opacity-0'
                    : ''
                }`}
                style={{
                  transitionDelay: typeof window !== 'undefined' && window.innerWidth >= 768 
                    ? `${index * 100}ms` 
                    : '0ms'
                }}
              >
                <service.icon className="h-8 w-8 mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2 uppercase tracking-wide">{service.title}</h3>
                {service.description && (
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                )}
                {service.subServices && (
                  <ul className="mt-3 space-y-1">
                    {service.subServices.map((sub, i) => (
                      <li key={i} className="text-sm text-gray-500">• {sub}</li>
                    ))}
                  </ul>
                )}
                {service.link && (
                  <Link 
                    href={service.link}
                    className="inline-block mt-4 text-sm uppercase tracking-wider hover:text-gray-300 transition-colors"
                  >
                    {t('learnMore')}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-8 md:px-12 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 uppercase tracking-wider text-center">
            {tFAQ('title')}
          </h2>
          <div className="space-y-8">
            <div className="border-b border-gray-800 pb-6">
              <h3 className="text-xl mb-4">{tFAQ('question1')}</h3>
              <p className="text-gray-400">
                {tFAQ('answer1')}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                → Learn more about our <Link href="/services/ai-business-automation" className="text-white hover:text-gray-300 underline">AI automation services</Link>
              </p>
            </div>
            <div className="border-b border-gray-800 pb-6">
              <h3 className="text-xl mb-4">{tFAQ('question2')}</h3>
              <p className="text-gray-400">
                {tFAQ('answer2')}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                → Read implementation guides in our <Link href="/blog" className="text-white hover:text-gray-300 underline">automation blog</Link>
              </p>
            </div>
            <div className="border-b border-gray-800 pb-6">
              <h3 className="text-xl mb-4">{tFAQ('question3')}</h3>
              <p className="text-gray-400">
                {tFAQ('answer3')}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                → Explore our <Link href="#services" className="text-white hover:text-gray-300 underline">complete service portfolio</Link>
              </p>
            </div>
            <div className="border-b border-gray-800 pb-6">
              <h3 className="text-xl mb-4">{tFAQ('question4')}</h3>
              <p className="text-gray-400">
                {tFAQ('answer4')}
              </p>
            </div>
            <div className="border-b border-gray-800 pb-6">
              <h3 className="text-xl mb-4">{tFAQ('question5')}</h3>
              <p className="text-gray-400">
                {tFAQ('answer5')}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                → <Link href="#contact" className="text-white hover:text-gray-300 underline">Contact our experts</Link> for a free consultation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Minimalist */}
      <section 
        id="contact" 
        ref={contactRef}
        className={`py-24 px-8 md:px-12 bg-black border-t border-gray-900 transition-all duration-1000 ${
          visibleSections.has('contact') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-normal mb-16 uppercase tracking-wider transition-all duration-700 transform ${
            visibleSections.has('contact') ? 'translate-y-0' : 'translate-y-8'
          }`}>
            {t('contactTitle')}
          </h2>
          
          <div className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 transform ${
            visibleSections.has('contact') ? 'translate-y-0' : 'translate-y-12'
          }`}>
            {/* Direct Contact */}
            <div className="transition-all duration-700" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-xl mb-8 uppercase tracking-wide">{tContact('directContactTitle')}</h3>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/34637523323"
                  className="block text-gray-400 hover:text-white transition-colors"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  → WhatsApp
                </a>
                <a 
                  href="https://www.linkedin.com/in/bogdan-antonov-b48901206"
                  className="block text-gray-400 hover:text-white transition-colors"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  → LinkedIn
                </a>
              </div>
            </div>
            
            {/* Form */}
            <div className="transition-all duration-700" style={{ transitionDelay: '400ms' }}>
              <h3 className="text-xl mb-8 uppercase tracking-wide">{tContact('sendMessageTitle')}</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <input 
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-800 pb-2 focus:border-white outline-none transition-colors"
                  placeholder={tContact('namePlaceholder')}
                />
                <input 
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-800 pb-2 focus:border-white outline-none transition-colors"
                  placeholder={tContact('emailPlaceholder')}
                />
                <textarea 
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-800 pb-2 focus:border-white outline-none transition-colors resize-none"
                  placeholder={tContact('messagePlaceholder')}
                />
                <button 
                  type="submit"
                  className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-wider"
                >
                  {tContact('sendButton')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-8 px-8 md:px-12 border-t border-gray-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BRM AI</p>
          <p className="text-xs">{tFooter('hashtags')}</p>
        </div>
      </footer>
    </div>
  );
} 