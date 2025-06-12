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
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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

  const recipientEmail = 'brmai@mybrmai.com';

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
      link: "/services/website-creation"
    },
    {
      title: tServices("seoOptimization_title"),
      description: tServices("seoOptimization_desc"),
      icon: TrendingUp,
      link: "/services/seo-optimization"
    },
    {
      title: tServices("digitalMarketing_title"),
      description: tServices("digitalMarketing_desc"),
      icon: Megaphone,
      link: "/services/digital-marketing"
    },
    {
      title: tServices("googleAds_title"),
      description: tServices("googleAds_desc"),
      icon: Target,
      link: "/services/google-ads"
    },
    {
      title: tServices("googleBusiness_title"),
      description: tServices("googleBusiness_desc"),
      icon: MapPin,
      link: "/services/google-business-profile"
    },
    {
      title: tServices("aiAutomation_title"),
      description: tServices("aiAutomation_desc"),
      icon: Brain,
      link: "/services/ai-business-automation"
    },
    {
      title: tServices("leadAutomation_title"),
      description: tServices("leadAutomation_desc"),
      icon: DatabaseZap,
      link: "/services/lead-automation"
    },
    {
      title: tServices("continuousImprovement_title"),
      description: tServices("continuousImprovement_desc"),
      icon: Lightbulb,
      link: "/services/continuous-improvement"
    },
    {
      title: tServices("customCrm_title"),
      description: tServices("customCrm_desc"),
      icon: Settings2,
      link: "/services/custom-crm-system"
    },
  ];

  const AboutSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    });

    // Animate left block from center-ish to left
    const xLeft = useTransform(scrollYProgress, [0.1, 0.5], ["50%", "0%"]);
    const scaleLeft = useTransform(scrollYProgress, [0.1, 0.5], [0.9, 1]);
    
    // Animate right block from off-screen to its position
    const xRight = useTransform(scrollYProgress, [0.1, 0.5], ["100%", "0%"]);
    const opacityRight = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

    return (
      <section 
        id="about" 
        className="relative bg-white text-black py-24 md:py-32 h-[120vh] overflow-visible" // Inverted colors and kept animation height
        ref={sectionRef}
      >
        <div className="sticky top-1/4 container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-center">
            <motion.div 
              className="md:col-span-1"
              style={{ x: xLeft, scale: scaleLeft }}
            >
              <h2 className="text-5xl md:text-6xl font-normal tracking-wider mb-6">
                {tAbout('title')}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {tAbout('paragraph1')}
              </p>
            </motion.div>
            <motion.div 
              className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
              style={{ x: xRight, opacity: opacityRight }}
            >
              <div className="bg-black text-white p-8">
                <h3 className="text-3xl font-normal mb-4 tracking-wider">{tAbout('missionTitle')}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{tAbout('missionText')}</p>
                <p className="text-gray-400 text-base leading-relaxed mt-2">{tAbout('missionText_extra')}</p>
              </div>
              <div className="bg-black text-white p-8">
                <h3 className="text-3xl font-normal mb-4 tracking-wider">{tAbout('approachTitle')}</h3>
                <ul className="text-gray-400 text-base space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">•</span>
                    {tAbout('approach1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">•</span>
                    {tAbout('approach2')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">•</span>
                    {tAbout('approach3')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">•</span>
                    {tAbout('approach4')}
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

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
    <div className="min-h-screen bg-black text-white">
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

      {/* Main Content Sections */}
      <main>
        {/* About Section */}
        <AboutSection />

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

        {/* Services Section - New Layout */}
        <section id="services" className="py-24 px-8 md:px-12 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-normal mb-4 uppercase tracking-wider">{t('servicesTitle')}</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">{t('servicesDescription')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link href={service.link || '#'} key={index}>
                  <div
                    id={`service-${index}`}
                    className="group relative border border-gray-800 p-8 hover:border-white transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <service.icon className="h-10 w-10 mb-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      <h3 className="text-xl font-medium mb-3 uppercase tracking-wide">{service.title}</h3>
                      <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 text-sm text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {t('learnMore')}
                      </div>
                    </div>
                  </div>
                </Link>
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
                  → <Link href="/services/ai-business-automation" className="text-white hover:text-gray-300 underline">{tFAQ('learnMoreAI')}</Link>
                </p>
              </div>
              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-xl mb-4">{tFAQ('question2')}</h3>
                <p className="text-gray-400">
                  {tFAQ('answer2')}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  → <Link href="/blog" className="text-white hover:text-gray-300 underline">{tFAQ('readGuides')}</Link>
                </p>
              </div>
              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-xl mb-4">{tFAQ('question3')}</h3>
                <p className="text-gray-400">
                  {tFAQ('answer3')}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  → <Link href="#services" className="text-white hover:text-gray-300 underline">{tFAQ('exploreServices')}</Link>
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
                  → <Link href="#contact" className="text-white hover:text-gray-300 underline">{tFAQ('contactExperts')}</Link>
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
                  <Link
                    href="/booking"
                    className="block mt-8 px-6 py-3 border border-white hover:bg-white hover:text-black transition-all text-sm tracking-wider text-center"
                  >
                    {tContact('bookConsultation')}
                  </Link>
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
      </main>

      {/* Footer - Minimal */}
      <footer className="py-8 px-8 md:px-12 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <Link
              href="/booking"
              className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-all text-sm tracking-wider text-center"
            >
              {tContact('bookConsultation')}
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="#services" className="text-gray-400 hover:text-white transition-colors">{t('viewServices')}</Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">{tNav('blog')}</Link>
              <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">{t('contactTitle')}</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-900 pt-6">
            <p>© {new Date().getFullYear()} BRM AI</p>
            <p className="text-xs mt-2 md:mt-0">{tFooter('hashtags')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 