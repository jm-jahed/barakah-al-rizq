'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';

export interface AltairLanguageContextType {
  language: Language;
  lang: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: (enText: string, arText: string) => string;
  formatPrice: (amount: number, period?: string) => string;
  formatNumber: (num: number | string) => string;
  formatPercent: (val: number) => string;
  toArabicDigits: (str: string | number) => string;
}

const AltairLanguageContext = createContext<AltairLanguageContextType | undefined>(undefined);

export const toArabicDigits = (val: string | number): string => {
  const str = String(val);
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return str.replace(/[0-9]/g, (d) => arabicDigits[parseInt(d, 10)]);
};

export const AltairLanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('altair_lang') as Language;
      if (saved === 'en' || saved === 'ar') {
        setLanguageState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('altair_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const isRtl = language === 'ar';

  const t = (enText: string, arText: string): string => {
    return language === 'ar' ? arText : enText;
  };

  const formatPrice = (amount: number, period?: string): string => {
    const formattedNum = amount.toLocaleString('en-US');
    if (language === 'ar') {
      const p = period === 'term' ? 'لكل فصل' : period === 'month' ? 'شهرياً' : 'سنوياً';
      return `${toArabicDigits(formattedNum)} د.إ / ${p}`;
    }
    const p = period === 'term' ? 'term' : period === 'month' ? 'month' : 'year';
    return `AED ${formattedNum} / ${p}`;
  };

  const formatNumber = (num: number | string): string => {
    if (language === 'ar') {
      return toArabicDigits(num);
    }
    return String(num);
  };

  const formatPercent = (val: number): string => {
    if (language === 'ar') {
      return `٪${toArabicDigits(val)}`;
    }
    return `${val}%`;
  };

  return (
    <AltairLanguageContext.Provider
      value={{
        language,
        lang: language,
        setLanguage,
        toggleLanguage,
        isRtl,
        t,
        formatPrice,
        formatNumber,
        formatPercent,
        toArabicDigits,
      }}
    >
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </AltairLanguageContext.Provider>
  );
};

export const useAltairLanguage = (): AltairLanguageContextType => {
  const context = useContext(AltairLanguageContext);
  if (!context) {
    throw new Error('useAltairLanguage must be used within an AltairLanguageProvider');
  }
  return context;
};
