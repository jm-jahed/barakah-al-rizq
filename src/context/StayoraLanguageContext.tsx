'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { STAYORA_TRANSLATIONS, StayoraLanguage } from '@/data/stayoraTranslations';

export function toArabicDigits(str: string | number): string {
  const easternArabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(str).replace(/[0-9]/g, (w) => easternArabicDigits[+w]);
}

interface StayoraLanguageContextType {
  language: StayoraLanguage;
  setLanguage: (lang: StayoraLanguage) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: (key: string, fallback?: string) => string;
  toArabicDigits: (val: string | number) => string;
  formatNumber: (val: number | string) => string;
  formatPrice: (val: number | string) => string;
  formatPercent: (val: number | string) => string;
}

const StayoraLanguageContext = createContext<StayoraLanguageContextType | undefined>(undefined);

export function StayoraLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<StayoraLanguage>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('stayora_lang') as StayoraLanguage;
      if (saved === 'en' || saved === 'ar') {
        setLanguageState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: StayoraLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('stayora_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'ar' : 'en';
    setLanguage(next);
  };

  const isRtl = language === 'ar';

  const t = (key: string, fallback?: string): string => {
    const entry = STAYORA_TRANSLATIONS[key];
    if (entry && entry[language]) {
      return entry[language];
    }
    return fallback || key;
  };

  const formatNumber = (val: number | string): string => {
    const formatted = typeof val === 'number' ? val.toLocaleString('en-US') : String(val);
    if (language === 'ar') {
      return toArabicDigits(formatted);
    }
    return formatted;
  };

  const formatPrice = (val: number | string): string => {
    const num = typeof val === 'number' ? val : parseFloat(val);
    const formatted = isNaN(num) ? String(val) : num.toLocaleString('en-US');
    if (language === 'ar') {
      return `${toArabicDigits(formatted)} د.إ`;
    }
    return `AED ${formatted}`;
  };

  const formatPercent = (val: number | string): string => {
    if (language === 'ar') {
      return `٪${toArabicDigits(val)}`;
    }
    return `${val}%`;
  };

  return (
    <StayoraLanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isRtl,
        t,
        toArabicDigits,
        formatNumber,
        formatPrice,
        formatPercent,
      }}
    >
      <div dir={isRtl ? 'rtl' : 'ltr'} className={`min-h-screen ${isRtl ? 'font-arabic' : 'font-sans'}`}>
        {children}
      </div>
    </StayoraLanguageContext.Provider>
  );
}

export function useStayoraLanguage() {
  const context = useContext(StayoraLanguageContext);
  if (!context) {
    throw new Error('useStayoraLanguage must be used within a StayoraLanguageProvider');
  }
  return context;
}
