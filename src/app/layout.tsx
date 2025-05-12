import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Убедись, что globals.css находится в src/app/

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRM AI Business Automation", // Общий заголовок для сайта
  description: "Решения по автоматизации бизнеса с помощью AI от BRM AI.", // Общее описание
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Здесь можно указать язык по умолчанию для страниц, не покрытых [locale]
    // Например, если поисковый робот зайдет на / до редиректа
    <html lang="ru"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}