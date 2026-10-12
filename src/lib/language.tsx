import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (es: string, en: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function initialLang(): Lang {
  if (typeof window === "undefined") return "es";
  try {
    const stored = window.localStorage.getItem("pf-lang") as Lang | null;
    if (stored === "es" || stored === "en") return stored;
  } catch {}
  return (window.navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { window.localStorage.setItem("pf-lang", l); } catch {}
  };

  const t = (es: string, en: string) => (lang === "es" ? es : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
