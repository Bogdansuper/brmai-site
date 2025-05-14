"use client";
import { useState } from "react";
import {useTranslations} from 'next-intl';
import {
  Globe,
  TrendingUp,
  Megaphone,
  Target,
  MapPin,
  Brain,
  Bot,
  Voicemail,
  DatabaseZap,
  Lightbulb,
  Settings2,
  ChevronDown,
  ChevronUp,
  type LucideIcon,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher.tsx";

interface Service {
  title: string;
  description?: string;
  subServices?: string[];
  icon: LucideIcon;
}

interface Client {
  name: string;
  logoUrl: string;
  websiteUrl: string;
  logoDarkUrl?: string;
}

export default function BRMHomePageClient() {
  const t = useTranslations('BRMHomePage');
  const tServices = useTranslations('Services');
  const tClients = useTranslations('Clients');
  const tHeader = useTranslations('Header');
  const tFooter = useTranslations('Footer');
  const tShared = useTranslations('Shared');

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
      ]
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
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white font-sans">
      {/* Header/Nav - Inspired by Vercel */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              {tHeader('logoText')}
            </a>
          </div>
          {/* Middle navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-400">
            <a href="#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">{tHeader('servicesLink')}</a>
          </nav>
          {/* LanguageSwitcher and Contact button on the right */}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700/80 rounded-md transition-colors"
            >
              {tHeader('contactLink')}
            </a>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 text-center bg-white dark:bg-gray-950">
        <div className="absolute inset-0 -z-10 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-radial from-blue-600/10 via-transparent to-transparent blur-3xl opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 text-gray-900 dark:text-white">
           {t('heroTitle')}
          </h1>
          <p className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12">
          {t('heroSubtitle')}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base sm:text-lg font-medium bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 rounded-lg shadow-sm transition-colors"
            >
              {tShared('contactUs')}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base sm:text-lg font-medium text-gray-700 bg-transparent hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/60 rounded-lg shadow-sm transition-colors border border-gray-300 dark:border-gray-700"
            >
              {tShared('ourServices')}
            </a>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">
             {t('servicesTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200/80 dark:border-gray-700/60 
                           transition-all duration-300 ease-in-out
                           hover:shadow-2xl hover:border-transparent dark:hover:bg-gray-700/60 hover:scale-[1.03]"
              >
                <div className="flex items-start space-x-4 mb-3">
                  <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">{service.title}</h3>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedServices[index] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-2">
                    {service.description && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {service.description}
                      </p>
                    )}
                    {service.subServices && (
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm pl-1">
                        {service.subServices.map((sub, i) => (
                          <li key={i}>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                {(service.description || service.subServices) && (
                  <button
                    onClick={() => toggleServiceExpansion(index)}
                    className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center group-hover:text-blue-500 dark:group-hover:text-blue-300"
                  >
                    {expandedServices[index] ? tServices('hideButton') : tServices('detailsButton')}
                    {expandedServices[index] ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 text-center bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-2xl sm:text-3xl font-semibold max-w-3xl mx-auto">
          {t('valueProposition')}
        </p>
        </div>
      </section>
      {/* Call to Action / Next Steps */}
      <section className="py-16 md:py-24 text-center bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {t('ctaTitle')}
        </h2>
        <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-10">
          {t('ctaSubtitle')}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3 text-base sm:text-lg font-medium bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 rounded-lg shadow-sm transition-colors"
        >
          {tShared('discussProject')}
        </a>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          {t('contactTitle')}
        </h2>
        <div className="text-center text-lg space-y-4">
          <p>
            📞 {tShared('phone')}: <a href="tel:+34637523323" className="text-blue-400 hover:text-blue-300 hover:underline">+34 637 523 323</a>
          </p>
          <p>
            🔗 {tShared('linkedIn')}: <a href="https://www.linkedin.com/in/bogdan-antonov-b48901206" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">
              www.linkedin.com/in/bogdan-antonov-b48901206
            </a>
          </p>
        </div>
        </div>
      </section>
      {/* Clients Section */}
      {clients.length > 0 && (
        <section id="clients" className="py-12 md:py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12"> {tClients('trustedBy')} </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
              {clients.map((client, index) => (
                <a
                  key={index}
                  href={client.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${client.name}`}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <img src={client.logoDarkUrl && document.documentElement.classList.contains('dark') ? client.logoDarkUrl : client.logoUrl} alt={client.name} className="h-10 md:h-12 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {tFooter('copyright', {year: new Date().getFullYear()})}
        </p>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
          {tFooter('hashtags')}
        </p>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <a href="en/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </p>
        </div>
      </footer>
    </div>
  );
} 