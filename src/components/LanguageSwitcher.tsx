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
      className="bg-black/50 backdrop-blur text-sm text-gray-300 hover:text-white focus:outline-none p-2 rounded border border-gray-700 hover:border-gray-500 min-w-[120px] transition-colors cursor-pointer"
    >
      {locales.map((loc: string) => (
        <option key={loc} value={loc} className="bg-black text-gray-200">
          {getLocaleDisplayName(loc)}
        </option>
      ))}
    </select>
  );
}