'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { FRESHAURA_TRANSLATIONS, FreshauraLanguage } from '@/data/freshauraTranslations';

export function toArabicDigits(str: string | number): string {
  const easternArabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(str).replace(/[0-9]/g, (w) => easternArabicDigits[+w]);
}

interface FreshauraLanguageContextType {
  language: FreshauraLanguage;
  setLanguage: (lang: FreshauraLanguage) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: (key: string, fallback?: string) => string;
  toArabicDigits: (val: string | number) => string;
  formatNumber: (val: number | string) => string;
  formatPrice: (val: number | string) => string;
  formatWeight: (val: number | string, unit?: string) => string;
  formatPercent: (val: number | string) => string;
}

const FreshauraLanguageContext = createContext<FreshauraLanguageContextType | undefined>(undefined);

export function FreshauraLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<FreshauraLanguage>('en');

  // Sync initial language or persist
  useEffect(() => {
    try {
      const saved = localStorage.getItem('freshaura_lang') as FreshauraLanguage;
      if (saved === 'en' || saved === 'ar') {
        setLanguageState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: FreshauraLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('freshaura_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const isRtl = language === 'ar';

  const t = (key: string, fallback?: string): string => {
    const entry = FRESHAURA_TRANSLATIONS[key];
    if (entry && entry[language]) {
      return entry[language];
    }
    return fallback || key;
  };

  const formatNumber = (val: number | string): string => {
    if (language === 'ar') {
      return toArabicDigits(val);
    }
    return String(val);
  };

  const formatPrice = (val: number | string): string => {
    const num = typeof val === 'number' ? val.toFixed(2) : parseFloat(val).toFixed(2);
    if (language === 'ar') {
      return `${toArabicDigits(num)} د.إ`;
    }
    return `AED ${num}`;
  };

  const formatWeight = (val: number | string, unit: string = 'kg'): string => {
    if (language === 'ar') {
      const arabicUnit = unit === 'kg' ? 'كجم' : unit === 'g' ? 'جرام' : unit === 'pcs' ? 'قطعة' : unit === 'box' ? 'صندوق' : unit;
      return `${toArabicDigits(val)} ${arabicUnit}`;
    }
    return `${val} ${unit}`;
  };

  const formatPercent = (val: number | string): string => {
    if (language === 'ar') {
      return `٪${toArabicDigits(val)}`;
    }
    return `${val}%`;
  };

  return (
    <FreshauraLanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isRtl,
        t,
        toArabicDigits,
        formatNumber,
        formatPrice,
        formatWeight,
        formatPercent,
      }}
    >
      <div dir={isRtl ? 'rtl' : 'ltr'} className={`min-h-screen ${isRtl ? 'font-arabic' : 'font-sans'}`}>
        {children}
      </div>
    </FreshauraLanguageContext.Provider>
  );
}

export function useFreshauraLanguage() {
  const context = useContext(FreshauraLanguageContext);
  if (!context) {
    throw new Error('useFreshauraLanguage must be used within a FreshauraLanguageProvider');
  }
  return context;
}
