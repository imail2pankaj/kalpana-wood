"use client";

import { createContext, useContext } from "react";
import { translations } from "../../lib/translations";

export const LanguageContext = createContext();

export function LanguageProvider({ children, lang }) {
  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

