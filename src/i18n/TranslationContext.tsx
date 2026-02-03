"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";
import { translations, type Translation } from "./translations";

interface TranslationContextValue {
  locale: Locale;
  t: Translation;
}

const TranslationContext = createContext<TranslationContextValue | null>(null);

interface TranslationProviderProps {
  locale: Locale;
  children: ReactNode;
}

export function TranslationProvider({ locale, children }: TranslationProviderProps) {
  const value: TranslationContextValue = {
    locale,
    t: translations[locale],
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
