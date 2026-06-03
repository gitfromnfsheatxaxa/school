/**
 * Single source of truth for supported languages.
 * Import from here everywhere — never re-list languages ad hoc.
 */
export const LANGS = [
  { code: "ru", label: "Русский", short: "RU", locale: "ru-RU", flag: "🇷🇺" },
  { code: "uz", label: "Oʻzbekcha", short: "UZ", locale: "uz-UZ", flag: "🇺🇿" },
  { code: "en", label: "English", short: "EN", locale: "en-US", flag: "🇬🇧" },
] as const;

export type Lang = (typeof LANGS)[number]["code"];

export const DEFAULT_LANG: Lang = "ru";

export const STORAGE_KEY = "neuroschool.lang";

export const LANG_CODES = LANGS.map((l) => l.code) as Lang[];

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && LANG_CODES.includes(value as Lang);
}

export function localeOf(lang: Lang): string {
  return LANGS.find((l) => l.code === lang)?.locale ?? "ru-RU";
}
