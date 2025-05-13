import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Commented out
import "./globals.css"; // Убедись, что globals.css находится в src/app/

// const geistSans = Geist({ // Commented out
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({ // Commented out
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
      <body
        className={`antialiased`} // Simplified className
      >
        {children}
      </body>
    </html>
  );
}