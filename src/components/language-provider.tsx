"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type Lang, type Dict } from "@/lib/i18n";

type Ctx = { lang: Lang; t: Dict; setLang: (l: Lang) => void };

const LanguageContext = createContext<Ctx | null>(null);

/** Idioma padrão: PT. Só troca pra EN se NENHUM idioma preferido do usuário for
 *  português (a lista inteira de navigator.languages, não só o principal — um
 *  tablet BR com sistema em inglês ainda costuma listar pt). Escolha manual manda
 *  e fica no localStorage. Sem lib, sem rotas /en. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "pt" || saved === "en") {
      setLangState(saved);
      return;
    }
    const prefs = navigator.languages?.length ? navigator.languages : [navigator.language];
    const prefersPt = prefs.some((l) => l.toLowerCase().startsWith("pt"));
    setLangState(prefersPt ? "pt" : "en");
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
