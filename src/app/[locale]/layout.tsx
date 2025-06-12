// /Users/bogdan/brm-ai-site/src/app/[locale]/layout.tsx
// No "use client" here, this will be an Async Server Component
import type { Metadata } from "next";
import { getMessages } from 'next-intl/server';
import IntlClientProviderSetup from "./IntlClientProviderSetup.tsx";

// Metadata is correctly defined here and will be applied by Next.js
export const metadata: Metadata = {
  title: "BRM AI Business Automation", 
  description: "AI-powered business automation solutions.", 
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages({ locale });

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
