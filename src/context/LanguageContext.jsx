import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "es");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    // opcional: cambia el lang del documento (para accesibilidad/SEO)
    document.documentElement.lang = lang === "es" ? "es-MX" : "en";
  }, [lang]);

  const t = useMemo(() => translations[lang], [lang]);

  const changeLanguage = (newLang) => setLang(newLang);
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));

  const value = useMemo(
    () => ({ lang, t, changeLanguage, toggleLang }),
    [lang, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}