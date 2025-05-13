"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { locales, defaultLocale } from "../i18n.ts"; // Обновленный путь к i18n.ts из папки src
import { ChangeEvent } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    
    let newPath = pathname;

    if (pathname.startsWith(`/${currentLocale}/`)) {
      newPath = `/${newLocale}${pathname.substring(currentLocale.length + 1)}`;
    } else if (pathname === `/${currentLocale}`) {
      newPath = `/${newLocale}`;
    } else {
      if (pathname === "/") {
        newPath = `/${newLocale}`;
      } else {
        newPath = `/${newLocale}${pathname}`;
      }
    }
    
    if (newLocale === defaultLocale && newPath === `/${defaultLocale}`) {
        newPath = "/";
    }

    router.replace(newPath, { scroll: false });
  };

  const getLocaleDisplayName = (locale: string) => {
    switch (locale) {
      case "en": return "English";
      case "ru": return "Русский";
      case "uk": return "Українська";
      case "es": return "Español";
      case "ca": return "Català";
      default: return locale.toUpperCase();
    }
  };

  return (
    <select
      value={currentLocale}
      onChange={handleChange}
      className="bg-transparent text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none p-1 rounded border border-gray-300 dark:border-gray-700"
    >
      {locales.map((loc: string) => (
        <option key={loc} value={loc} className="text-gray-900 dark:text-black">
          {getLocaleDisplayName(loc)}
        </option>
      ))}
    </select>
  );
}