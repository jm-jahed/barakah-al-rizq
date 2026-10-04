'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SKYVAULT_TRANSLATIONS, SkyvaultLanguage } from '@/data/skyvaultTranslations';

interface SkyvaultLanguageContextType {
  language: SkyvaultLanguage;
  lang: SkyvaultLanguage;
  setLanguage: (lang: SkyvaultLanguage) => void;
  isRtl: boolean;
  t: (key: string) => string;
  toArabicDigits: (num: string | number) => string;
  formatPrice: (amountAED: number) => string;
  formatUSD: (amountUSD: number) => string;
  formatNumber: (num: number) => string;
  formatPercent: (percent: number) => string;
}

const SkyvaultLanguageContext = createContext<SkyvaultLanguageContextType | undefined>(undefined);

export const SkyvaultLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<SkyvaultLanguage>('en');

  useEffect(() => {
    const saved = localStorage.getItem('skyvault_language') as SkyvaultLanguage;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: SkyvaultLanguage) => {
    setLanguage(lang);
    localStorage.setItem('skyvault_language', lang);
  };

  const isRtl = language === 'ar';

  const t = (key: string): string => {
    const entry = SKYVAULT_TRANSLATIONS[key];
    if (!entry) return key;
    return language === 'ar' ? entry.ar : entry.en;
  };

  const toArabicDigits = (val: string | number): string => {
    if (val === undefined || val === null) return '';
    const str = val.toString();
    if (language !== 'ar') return str;
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return str.replace(/[0-9]/g, (w) => arabicNumbers[parseInt(w, 10)]);
  };

  const formatPrice = (amountAED: number): string => {
    const formattedEn = new Intl.NumberFormat('en-AE').format(amountAED);
    if (language === 'ar') {
      return `${toArabicDigits(formattedEn)} د.إ`;
    }
    return `AED ${formattedEn}`;
  };

  const formatUSD = (amountUSD: number): string => {
    const formattedEn = new Intl.NumberFormat('en-US').format(amountUSD);
    if (language === 'ar') {
      return `$${toArabicDigits(formattedEn)}`;
    }
    return `$${formattedEn}`;
  };

  const formatNumber = (num: number): string => {
    const formattedEn = new Intl.NumberFormat('en-AE').format(num);
    return language === 'ar' ? toArabicDigits(formattedEn) : formattedEn;
  };

  const formatPercent = (percent: number): string => {
    return language === 'ar' ? `%${toArabicDigits(percent)}` : `${percent}%`;
  };

  return (
    <SkyvaultLanguageContext.Provider
      value={{
        language,
        lang: language,
        setLanguage: handleSetLanguage,
        isRtl,
        t,
        toArabicDigits,
        formatPrice,
        formatUSD,
        formatNumber,
        formatPercent,
      }}
    >
      {children}
    </SkyvaultLanguageContext.Provider>
  );
};

export const useSkyvaultLanguage = () => {
  const context = useContext(SkyvaultLanguageContext);
  if (!context) {
    throw new Error('useSkyvaultLanguage must be used within a SkyvaultLanguageProvider');
  }
  return context;
};
