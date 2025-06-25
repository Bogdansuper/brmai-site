import type { Metadata } from "next";
import { GeistSans, GeistMono } from 'geist/font';
import { Analytics } from '@vercel/analytics/react';
import StructuredData, { organizationSchema } from '@/components/StructuredData';
import "./globals.css"; // Убедись, что globals.css находится в src/app/

export const metadata: Metadata = {
  title: {
    default: "BRM AI - AI Business Automation Solutions",
    template: "%s | BRM AI"
  },
  description: "Transform your business with AI-powered automation. Custom CRM systems, lead automation, SEO optimization, and digital marketing services.",
  keywords: ["AI automation", "business automation", "CRM development", "digital marketing", "SEO services", "web development"],
  authors: [{ name: "BRM AI" }],
  creator: "BRM AI",
  publisher: "BRM AI",
  metadataBase: new URL('https://brm-ai.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'es': '/es',
      'ru': '/ru',
      'uk': '/uk',
      'ca': '/ca',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brm-ai.com',
    siteName: 'BRM AI',
    title: 'BRM AI - AI Business Automation Solutions',
    description: 'Transform your business with AI-powered automation. Custom CRM systems, lead automation, SEO optimization, and digital marketing services.',
    images: [
      {
        url: '/og-image.png', // We'll need to create this
        width: 1200,
        height: 630,
        alt: 'BRM AI - AI Business Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRM AI - AI Business Automation Solutions',
    description: 'Transform your business with AI-powered automation. Custom CRM systems, lead automation, SEO optimization, and digital marketing services.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google527b478e67d08bfe', // Based on the file in public/
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Убери лишний пробел если есть
}>) {
  return (
    // Здесь можно указать язык по умолчанию для страниц, не покрытых [locale]
    // Например, если поисковый робот зайдет на / до редиректа
    <html lang="en"> 
      <head>
        <StructuredData data={organizationSchema} />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}