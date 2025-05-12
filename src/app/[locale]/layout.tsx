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
  params: paramsPromise // Переименуем для ясности, это промис
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>; // Явно типизируем params как Promise
}>) {
  const params = await paramsPromise; // Дожидаемся разрешения промиса
  const locale = params.locale;   // Теперь извлекаем locale из разрешенного объекта
  // Fetch messages for the current locale on the server
  const messages = await getMessages({ locale });
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
