'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

export interface FramehausLanguageContextType {
  language: Language;
  lang: Language; // convenient alias
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  toArabicDigits: (num: number | string) => string;
  formatPrice: (amount: number) => string;
  formatNumber: (num: number) => string;
  formatPercent: (num: number) => string;
}

const FramehausLanguageContext = createContext<FramehausLanguageContextType | undefined>(undefined);

export const FramehausLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('framehaus_lang') as Language;
    if (saved === 'ar' || saved === 'en') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('framehaus_lang', lang);
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'ar' : 'en';
    setLanguage(next);
  };

  const isRtl = language === 'ar';

  const toArabicDigits = (num: number | string): string => {
    if (language !== 'ar') return String(num);
    const idMap: { [key: string]: string } = {
      '0': '٠', '1': '١', '2': '٢', '3': '٣', '4': '٤',
      '5': '٥', '6': '٦', '7': '٧', '8': '٨', '9': '٩'
    };
    return String(num).replace(/[0-9]/g, (w) => idMap[w] || w);
  };

  const formatPrice = (amount: number): string => {
    if (language === 'ar') {
      return `${toArabicDigits(amount.toLocaleString('en-US'))} درهم`;
    }
    return `AED ${amount.toLocaleString('en-US')}`;
  };

  const formatNumber = (num: number): string => {
    if (language === 'ar') {
      return toArabicDigits(num.toLocaleString('en-US'));
    }
    return num.toLocaleString('en-US');
  };

  const formatPercent = (num: number): string => {
    if (language === 'ar') {
      return `%${toArabicDigits(num)}`;
    }
    return `${num}%`;
  };

  return (
    <FramehausLanguageContext.Provider
      value={{
        language,
        lang: language,
        setLanguage,
        toggleLanguage,
        isRtl,
        toArabicDigits,
        formatPrice,
        formatNumber,
        formatPercent,
      }}
    >
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </FramehausLanguageContext.Provider>
  );
};

export const useFramehausLanguage = (): FramehausLanguageContextType => {
  const context = useContext(FramehausLanguageContext);
  if (!context) {
    throw new Error('useFramehausLanguage must be used within a FramehausLanguageProvider');
  }
  return context;
};
