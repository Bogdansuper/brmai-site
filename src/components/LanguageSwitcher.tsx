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
    
    // pathname is the current full path from URL, e.g. /en/about or /about
    let newPath = pathname;

    // Check if the current pathname starts with the current locale prefix (e.g., /en/foo)
    // Or if the pathname IS the current locale root (e.g., /en)
    if (pathname.startsWith(`/${currentLocale}/`)) {
      // Path has current locale prefix and segments after, e.g. /en/about -> replace /en with /es -> /es/about
      newPath = `/${newLocale}${pathname.substring(currentLocale.length + 1)}`;
    } else if (pathname === `/${currentLocale}`) {
      // Path IS the current locale root, e.g. /en -> replace with /es
      newPath = `/${newLocale}`;
    } else {
      // Path does not have current locale prefix.
      // This means it's either the site root "/" (for defaultLocale) or a path like "/about" (for defaultLocale).
      if (pathname === "/") {
        newPath = `/${newLocale}`; // If at site root "/", new path is /es
      } else {
        newPath = `/${newLocale}${pathname}`; // If at "/about", new path is /es/about
      }
    }
    
    // If, after construction, the new path for the default locale is just /<defaultLocale> (e.g. /en),
    // and localePrefix is 'as-needed', we should navigate to "/".
    // The middleware will typically handle redirecting /en to / if localePrefix is 'as-needed'.
    // So, if newPath becomes exactly /<defaultLocale>, we can simplify it to "/".
    if (newLocale === defaultLocale && newPath === `/${defaultLocale}`) {
        newPath = "/";
    }

    router.replace(newPath, { scroll: false });
  };

  // Определяем, какой язык отображать в URL
  // 'as-needed' означает, что для defaultLocale префикс не добавляется
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