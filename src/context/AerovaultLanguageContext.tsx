'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AEROVAULT_TRANSLATIONS, AerovaultLanguage } from '@/data/aerovaultTranslations';

interface AerovaultLanguageContextType {
  language: AerovaultLanguage;
  lang: AerovaultLanguage;
  setLanguage: (lang: AerovaultLanguage) => void;
  isRtl: boolean;
  t: (key: string) => string;
  toArabicDigits: (num: string | number) => string;
  formatPrice: (amountAED: number) => string;
  formatUSD: (amountUSD: number) => string;
  formatNumber: (num: number) => string;
  formatPercent: (percent: number) => string;
}

const AerovaultLanguageContext = createContext<AerovaultLanguageContextType | undefined>(undefined);

export const AerovaultLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<AerovaultLanguage>('en');

  useEffect(() => {
    const saved = localStorage.getItem('aerovault_language') as AerovaultLanguage;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: AerovaultLanguage) => {
    setLanguage(lang);
    localStorage.setItem('aerovault_language', lang);
  };

  const isRtl = language === 'ar';

  const t = (key: string): string => {
    const entry = AEROVAULT_TRANSLATIONS[key];
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
    <AerovaultLanguageContext.Provider
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
    </AerovaultLanguageContext.Provider>
  );
};

export const useAerovaultLanguage = () => {
  const context = useContext(AerovaultLanguageContext);
  if (!context) {
    throw new Error('useAerovaultLanguage must be used within an AerovaultLanguageProvider');
  }
  return context;
};
