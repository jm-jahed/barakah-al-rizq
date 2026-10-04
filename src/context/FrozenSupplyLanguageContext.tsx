'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { FROZEN_TRANSLATIONS, Language } from '../data/frozenSupplyTranslations';

interface FrozenSupplyLanguageContextType {
  lang: Language;
  language: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: (key: string) => string;
}

const FrozenSupplyLanguageContext = createContext<FrozenSupplyLanguageContextType | undefined>(undefined);

export function FrozenSupplyLanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('frozen_supply_lang') as Language | null;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem('frozen_supply_lang', lang);
    } catch {
      // Ignore
    }
  }, [lang, mounted]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const isRtl = lang === 'ar';

  const t = (key: string): string => {
    const entry = FROZEN_TRANSLATIONS[key];
    if (!entry) return key;
    return entry[lang] || entry.en || key;
  };

  return (
    <FrozenSupplyLanguageContext.Provider
      value={{
        lang,
        language: lang,
        setLang,
        toggleLang,
        toggleLanguage: toggleLang,
        isRtl,
        t
      }}
    >
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </FrozenSupplyLanguageContext.Provider>
  );
}

export function useFrozenSupplyLanguage() {
  const context = useContext(FrozenSupplyLanguageContext);
  if (!context) {
    throw new Error('useFrozenSupplyLanguage must be used within a FrozenSupplyLanguageProvider');
  }
  return context;
}
