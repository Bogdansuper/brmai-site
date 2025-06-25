"use client";
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

interface Feature {
  name: string;
  description: string;
}

interface ServicePageProps {
  locale: string;
  title: string;
  subtitle: string;
  featuresTitle: string;
  features: Feature[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  imageUrl: string;
}

const ServicePage: React.FC<ServicePageProps> = ({
  locale,
  title,
  subtitle,
  featuresTitle,
  features,
  ctaTitle,
  ctaSubtitle,
  ctaButton,
  imageUrl,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="bg-[#0a0a0a] text-[#ededed] font-sans">
      <main>
        {/* Hero Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative min-h-screen flex items-center justify-center text-center px-6"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${imageUrl})`, opacity: 0.15 }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
          <div className="relative z-20">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-light tracking-tighter mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-400 font-light"
            >
              {subtitle}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href={`/${locale}/booking`}
                className="mt-10 inline-block px-8 py-3 border border-gray-600 hover:bg-white hover:text-black transition-colors duration-300 text-base font-normal"
              >
                {ctaButton}
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="py-20 md:py-32 bg-[#0a0a0a]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter">
                {featuresTitle}
              </h2>
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-transparent border border-gray-800 p-8"
                >
                  <h3 className="text-xl font-normal tracking-tight mb-3">{feature.name}</h3>
                  <p className="text-gray-400 text-base font-light leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0a0a0a] py-20 md:py-28">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">
              {ctaTitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light">
              {ctaSubtitle}
            </p>
            <Link
              href="mailto:brmai@mybrmai.com"
              className="px-10 py-4 border border-gray-600 hover:bg-white hover:text-black transition-colors duration-300 text-base"
            >
              {ctaButton}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicePage; 