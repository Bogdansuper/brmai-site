// /Users/bogdan/brm-ai-site/src/app/[locale]/layout.tsx
// No "use client" here, this will be an Async Server Component
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import {getMessages} from 'next-intl/server';
import IntlClientProviderSetup from "./IntlClientProviderSetup.tsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata is correctly defined here and will be applied by Next.js
export const metadata: Metadata = {
  title: "BRM AI Business Automation", 
  description: "AI-powered business automation solutions.", 
};

export default async function RootLayout({ 
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string}; 
}>) {
  const locale = params.locale;   
  const messages = await getMessages({ locale });

  // This layout should not render <html> or <body> tags.
  // Next.js will handle setting the lang attribute on the <html> tag based on this layout's locale.
  // The font classNames should ideally be applied to the <body> tag in a higher-level root layout (e.g., src/app/layout.tsx if it exists and is truly global)
  // or Next.js might handle it if this is the definitive root for the locale.
  // For now, we remove <html> and <body> and apply font classes to a wrapper div if necessary,
  // but ideally, fonts are on <body> handled by a true root layout.
  // Returning the provider directly is the cleanest if font classes are handled at a higher level.

  return (
    <IntlClientProviderSetup locale={locale} messages={messages}>
      {/* It is assumed that the font variables ${geistSans.variable} ${geistMono.variable} are applied to the <body> tag by Next.js or a higher-order layout. */}
      {/* If not, and they must be applied here, wrap children in a div with these classes. */}
      {/* For example: <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</div> */}
      {/* However, the standard is for these to be on the body tag. */}
      {children}
    </IntlClientProviderSetup>
  );
}
