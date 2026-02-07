"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { Locale, Messages } from "@/types/i18n";
import en from "@/locales/en.json";
import pl from "@/locales/pl.json";

const messages: Record<Locale, Messages> = { en: en as Messages, pl: pl as Messages };

const STORAGE_KEY = "locale";
const DEFAULT_LOCALE: Locale = "en";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  messages: Messages;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getNestedValue(obj: unknown, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return path;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : path;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "pl" || stored === "en") {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  }, []);

  const t = useCallback(
    (key: string): string => getNestedValue(messages[locale], key),
    [locale],
  );

  const value: LocaleContextValue = {
    locale,
    setLocale,
    t,
    messages: messages[locale],
  };

  // Prevent hydration mismatch by rendering default locale until mounted
  if (!mounted) {
    const defaultValue: LocaleContextValue = {
      locale: DEFAULT_LOCALE,
      setLocale,
      t: (key: string) => getNestedValue(messages[DEFAULT_LOCALE], key),
      messages: messages[DEFAULT_LOCALE],
    };
    return (
      <LocaleContext.Provider value={defaultValue}>
        {children}
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LocaleProvider");
  }
  return context;
}
