'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/supermarketData';

type SupermarketLang = 'en' | 'ar';

interface SupermarketLanguageContextType {
  lang: SupermarketLang;
  setLang: (lang: SupermarketLang) => void;
  toggleLang: () => void;
  isRtl: boolean;
  t: (key: keyof typeof TRANSLATIONS['en'], params?: Record<string, string | number>) => string;
}

const SupermarketLanguageContext = createContext<SupermarketLanguageContextType | undefined>(undefined);

export function SupermarketLanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<SupermarketLang>('en');

  // Load persisted language or default to en
  useEffect(() => {
    try {
      const saved = localStorage.getItem('mirqab_supermarket_lang');
      if (saved === 'en' || saved === 'ar') {
        setLang(saved);
      }
    } catch {
      // Ignore in SSR
    }
  }, []);

  const handleSetLang = (newLang: SupermarketLang) => {
    setLang(newLang);
    try {
      localStorage.setItem('mirqab_supermarket_lang', newLang);
    } catch {
      // Ignore in SSR
    }
  };

  const toggleLang = () => {
    handleSetLang(lang === 'en' ? 'ar' : 'en');
  };

  const isRtl = lang === 'ar';

  const t = (key: keyof typeof TRANSLATIONS['en'], params?: Record<string, string | number>): string => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    let str = dict[key] || TRANSLATIONS.en[key] || String(key);
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        str = str.replace(`{${k}}`, String(v));
      });
    }
    return str;
  };

  return (
    <SupermarketLanguageContext.Provider value={{ lang, setLang: handleSetLang, toggleLang, isRtl, t }}>
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </SupermarketLanguageContext.Provider>
  );
}

export function useSupermarketLanguage() {
  const context = useContext(SupermarketLanguageContext);
  if (!context) {
    throw new Error('useSupermarketLanguage must be used within a SupermarketLanguageProvider');
  }
  return context;
}
