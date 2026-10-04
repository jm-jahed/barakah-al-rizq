"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { InvoiceLanguage, INVOICE_TRANSLATIONS, TranslationKey } from "@/data/invoiceTranslations";

interface InvoiceLanguageContextType {
  lang: InvoiceLanguage;
  setLang: (lang: InvoiceLanguage) => void;
  toggleLang: () => void;
  isRtl: boolean;
  t: (key: TranslationKey, fallback?: string) => string;
}

const InvoiceLanguageContext = createContext<InvoiceLanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  isRtl: false,
  t: (key: TranslationKey, fallback?: string) => fallback || key,
});

export function InvoiceLanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<InvoiceLanguage>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("nabta_invoice_lang") as InvoiceLanguage;
      if (saved === "ar" || saved === "en") {
        setLangState(saved);
        document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = saved;
      } else {
        setLangState("ar");
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
      }
    } catch {
      // Ignore in SSR
    }
  }, []);

  const setLang = (newLang: InvoiceLanguage) => {
    setLangState(newLang);
    try {
      localStorage.setItem("nabta_invoice_lang", newLang);
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = newLang;
    } catch {
      // Ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  const isRtl = lang === "ar";

  const t = (key: TranslationKey, fallback?: string): string => {
    const dict = INVOICE_TRANSLATIONS[lang] || INVOICE_TRANSLATIONS.en;
    return (dict as any)[key] || (INVOICE_TRANSLATIONS.en as any)[key] || fallback || key;
  };

  return (
    <InvoiceLanguageContext.Provider value={{ lang, setLang, toggleLang, isRtl, t }}>
      <div dir={isRtl ? "rtl" : "ltr"} className={isRtl ? "font-sans rtl" : "font-sans ltr"}>
        {children}
      </div>
    </InvoiceLanguageContext.Provider>
  );
}

export function useInvoiceLanguage() {
  return useContext(InvoiceLanguageContext);
}
