// No "use client" here, this will be an Async Server Component
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import {getMessages} from 'next-intl/server';
import IntlClientProviderSetup from "./IntlClientProviderSetup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: Implement dynamic metadata generation based on locale
export const metadata: Metadata = {
  title: "BRM AI Business Automation", // Generic title, should be localized
  description: "AI-powered business automation solutions.", // Generic description
};

export default async function RootLayout({ // Make the function async
  children,
  params // Accept params as a whole object
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const locale = params.locale; // Extract locale from the params object
  // Fetch messages for the current locale on the server
  const messages = await getMessages({ locale }); // Pass locale explicitly
  const now = new Date(); // For consistent time across server and client if needed

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <IntlClientProviderSetup locale={locale} messages={messages} now={now}>
          {children}
        </IntlClientProviderSetup>
      </body>
    </html>
  );
}
