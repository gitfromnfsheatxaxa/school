"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LANG,
  isLang,
  type Lang,
  localeOf,
  STORAGE_KEY,
} from "./config";
import { dictionaries, type Dictionary } from "./dictionaries";

type Vars = Record<string, string | number>;

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Translate a dot-path key, with optional {{var}} interpolation. */
  t: (path: string, vars?: Vars) => string;
  /** The full active dictionary — use for typed arrays (features, plans…). */
  dict: Dictionary;
  locale: string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function resolve(dict: Dictionary, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (node, key) =>
        node && typeof node === "object"
          ? (node as Record<string, unknown>)[key]
          : undefined,
      dict
    );
}

function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template;
  return template.replace(/\{\{(\w+)\}\}/g, (_, k: string) =>
    k in vars ? String(vars[k]) : `{{${k}}}`
  );
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Hydrate the saved language after mount (avoids SSR mismatch).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isLang(saved) && saved !== lang) setLangState(saved);
    } catch {
      /* localStorage unavailable — keep default */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep <html lang> in sync for a11y / SEO.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    const dict = dictionaries[lang];
    const t = (path: string, vars?: Vars) => {
      const found = resolve(dict, path);
      if (typeof found === "string") return interpolate(found, vars);
      // Fallback to default language, then to the key itself.
      const fallback = resolve(dictionaries[DEFAULT_LANG], path);
      if (typeof fallback === "string") return interpolate(fallback, vars);
      return path;
    };
    return { lang, setLang, t, dict, locale: localeOf(lang) };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx)
    throw new Error("useTranslation must be used within an <I18nProvider>");
  return ctx;
}
