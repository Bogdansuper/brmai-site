"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { locales, defaultLocale } from "../i18n.ts";
import { ChangeEvent } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    
    // Не делаем ничего если выбран тот же язык
    if (newLocale === currentLocale) {
      return;
    }
    
    let newPath = "";
    
    // Определяем базовый путь без локали
    let basePath = "";
    
    // Теперь все языки имеют префиксы, включая английский
    if (pathname.startsWith(`/${currentLocale}/`)) {
      basePath = pathname.substring(`/${currentLocale}`.length);
    } else if (pathname === `/${currentLocale}`) {
      basePath = "/";
    } else {
      // Fallback: если путь не содержит локаль, считаем что это главная страница
      basePath = "/";
    }
    
    // Формируем новый путь (всегда с префиксом локали)
    newPath = basePath === "/" ? `/${newLocale}` : `/${newLocale}${basePath}`;

    console.log(`[LanguageSwitcher] Switching from ${currentLocale} to ${newLocale}`);
    console.log(`[LanguageSwitcher] Current pathname: ${pathname}`);
    console.log(`[LanguageSwitcher] Base path: ${basePath}`);
    console.log(`[LanguageSwitcher] New path: ${newPath}`);

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