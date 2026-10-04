'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  NOURA_TRANSLATIONS,
  NouraLanguage,
  ARABIC_CATEGORY_NAMES,
  ARABIC_COLLECTION_NAMES,
  ARABIC_FABRIC_NAMES,
  ARABIC_OCCASION_NAMES,
  ARABIC_FIT_NAMES,
  translateProductName,
  translateProductOverview,
  translateColorName
} from '../data/nouraAbayaTranslations';

interface NouraLanguageContextType {
  language: NouraLanguage;
  setLanguage: (lang: NouraLanguage) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: (key: string, replacements?: Record<string, string | number>) => string;
  translateCategory: (category: string) => string;
  translateCollection: (collection: string) => string;
  translateFabric: (fabric: string) => string;
  translateOccasion: (occasion: string) => string;
  translateFit: (fit: string) => string;
  translateProductName: (name: string) => string;
  translateProductOverview: (overview: string) => string;
  translateColorName: (color: string) => string;
  formatPrice: (priceAED: number) => string;
}

const NouraLanguageContext = createContext<NouraLanguageContextType | undefined>(undefined);

export function NouraLanguageProvider({ children }: { children: React.ReactNode }) {
  // DEFAULT MODE = ARABIC ('ar') as explicitly required
  const [language, setLanguage] = useState<NouraLanguage>('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('noura_abaya_lang') as NouraLanguage | null;
    if (saved && (saved === 'ar' || saved === 'en')) {
      setLanguage(saved);
    } else {
      // Default to Arabic
      setLanguage('ar');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem('noura_abaya_lang', language);
    } catch {
      // Ignore storage errors
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const isRtl = language === 'ar';

  const t = (key: string, replacements?: Record<string, string | number>): string => {
    const entry = NOURA_TRANSLATIONS[key];
    let text = entry ? entry[language] || entry.ar || key : key;

    if (replacements) {
      Object.entries(replacements).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }

    return text;
  };

  const translateCat = (cat: string): string => {
    if (language === 'en') return cat;
    return ARABIC_CATEGORY_NAMES[cat] || cat;
  };

  const translateCol = (col: string): string => {
    if (language === 'en') return col;
    return ARABIC_COLLECTION_NAMES[col] || col;
  };

  const translateFab = (fabric: string): string => {
    if (language === 'en') return fabric;
    return ARABIC_FABRIC_NAMES[fabric] || fabric;
  };

  const translateOcc = (occ: string): string => {
    if (language === 'en') return occ;
    return ARABIC_OCCASION_NAMES[occ] || occ;
  };

  const translateFt = (fit: string): string => {
    if (language === 'en') return fit;
    return ARABIC_FIT_NAMES[fit] || fit;
  };

  const translateProdName = (name: string): string => {
    if (language === 'en') return name;
    return translateProductName(name);
  };

  const translateProdOverview = (overview: string): string => {
    if (language === 'en') return overview;
    return translateProductOverview(overview);
  };

  const translateColName = (color: string): string => {
    if (language === 'en') return color;
    return translateColorName(color);
  };

  const formatPrice = (priceAED: number): string => {
    if (language === 'ar') {
      return `${priceAED.toLocaleString()} د.إ`;
    }
    return `AED ${priceAED.toLocaleString()}`;
  };

  return (
    <NouraLanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isRtl,
        t,
        translateCategory: translateCat,
        translateCollection: translateCol,
        translateFabric: translateFab,
        translateOccasion: translateOcc,
        translateFit: translateFt,
        translateProductName: translateProdName,
        translateProductOverview: translateProdOverview,
        translateColorName: translateColName,
        formatPrice
      }}
    >
      <div dir={isRtl ? 'rtl' : 'ltr'} className={`w-full ${isRtl ? 'font-arabic' : 'font-sans'}`}>
        {children}
      </div>
    </NouraLanguageContext.Provider>
  );
}

export function useNouraLanguage() {
  const context = useContext(NouraLanguageContext);
  if (!context) {
    throw new Error('useNouraLanguage must be used within a NouraLanguageProvider');
  }
  return context;
}
