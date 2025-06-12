import type { Metadata } from "next";
import { GeistSans, GeistMono } from 'geist/font';
import "./globals.css"; // Убедись, что globals.css находится в src/app/

export const metadata: Metadata = {
  title: "BRM AI Business Automation", // Общий заголовок для сайта
  description: "Решения по автоматизации бизнеса с помощью AI от BRM AI.", // Общее описание
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
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}