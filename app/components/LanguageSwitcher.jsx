"use client";

import { useLang } from "../context/LanguageContext";

export default function LanguageSwitcher({ isMobile = false }) {
  const { lang, setLang } = useLang();

  const options = [
    { code: "en", label: "EN" },
    { code: "hi", label: "हि" },
    { code: "gu", label: "ગુ" },
  ];

  return (
    <div
      className={`flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-sm ${
        isMobile ? "w-full justify-center" : ""
      }`}
    >
      {options.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`px-3 py-1.5 rounded-full text-xs font-inter font-semibold transition-all duration-200 ${
            lang === code
              ? "bg-[#c97d20] text-white shadow-md"
              : "text-white/60 hover:text-white hover:bg-white/10"
          } ${isMobile ? "flex-1 py-2" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
