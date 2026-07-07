"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type Lang, type Dict } from "@/lib/i18n";

type Ctx = { lang: Lang; t: Dict; setLang: (l: Lang) => void };

const LanguageContext = createContext<Ctx | null>(null);

/** Detecta o idioma: brasileiro (navigator pt) vê PT; qualquer outro vê EN.
 *  Guarda a escolha manual no localStorage. Sem lib, sem rotas /en. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Server e primeiro paint: PT (evita hydration mismatch). O efeito ajusta no cliente.
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "pt" || saved === "en") {
      setLangState(saved);
      return;
    }
    const nav = navigator.language.toLowerCase();
    setLangState(nav.startsWith("pt") ? "pt" : "en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  function setLang(l: Lang) {
    localStorage.setItem("lang", l);
    setLangState(l);
  }

  return (
    <LanguageContext.Provider value={{ lang, t: dict[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n precisa do LanguageProvider");
  return ctx;
}
