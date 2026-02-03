export const locales = ["ko", "en", "zh", "ja", "hi", "fr", "pt", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

export const localeNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  zh: "中文",
  ja: "日本語",
  hi: "हिन्दी",
  fr: "Français",
  pt: "Português",
  de: "Deutsch",
};

export const localeFlags: Record<Locale, string> = {
  ko: "🇰🇷",
  en: "🇺🇸",
  zh: "🇨🇳",
  ja: "🇯🇵",
  hi: "🇮🇳",
  fr: "🇫🇷",
  pt: "🇧🇷",
  de: "🇩🇪",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPath(pathname: string): Locale | null {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  if (firstSegment && isValidLocale(firstSegment)) {
    return firstSegment;
  }
  return null;
}

export function getBrowserLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith("ko")) return "ko";
  if (browserLang.startsWith("zh")) return "zh";
  if (browserLang.startsWith("ja")) return "ja";
  if (browserLang.startsWith("hi")) return "hi";
  if (browserLang.startsWith("fr")) return "fr";
  if (browserLang.startsWith("pt")) return "pt";
  if (browserLang.startsWith("de")) return "de";
  if (browserLang.startsWith("en")) return "en";

  return defaultLocale;
}
