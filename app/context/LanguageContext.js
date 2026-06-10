"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../../lib/translations";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  // On mount, check if there's a saved language
  useEffect(() => {
    const saved = localStorage.getItem("kw-language");
    if (saved && ["en", "hi", "gu"].includes(saved)) {
      setLang(saved);
    }
  }, []);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("kw-language", newLang);
    document.documentElement.lang = newLang;
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
