'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AZURE_TRANSLATIONS, AzureLanguage } from '@/data/azureTranslations';

interface AzureLanguageContextType {
  language: AzureLanguage;
  setLanguage: (lang: AzureLanguage) => void;
  isRtl: boolean;
  t: (key: string) => string;
  toArabicDigits: (num: string | number) => string;
  formatPrice: (amount: number) => string;
  formatNumber: (num: number) => string;
  formatPercent: (percent: number) => string;
}

const AzureLanguageContext = createContext<AzureLanguageContextType | undefined>(undefined);

export const AzureLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<AzureLanguage>('en');

  useEffect(() => {
    const saved = localStorage.getItem('azure_language') as AzureLanguage;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: AzureLanguage) => {
    setLanguage(lang);
    localStorage.setItem('azure_language', lang);
  };

  const isRtl = language === 'ar';

  const t = (key: string): string => {
    const entry = AZURE_TRANSLATIONS[key];
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

  const formatPrice = (amount: number): string => {
    const formattedEn = new Intl.NumberFormat('en-AE').format(amount);
    if (language === 'ar') {
      return `${toArabicDigits(formattedEn)} د.إ`;
    }
    return `AED ${formattedEn}`;
  };

  const formatNumber = (num: number): string => {
    const formattedEn = new Intl.NumberFormat('en-AE').format(num);
    return language === 'ar' ? toArabicDigits(formattedEn) : formattedEn;
  };

  const formatPercent = (percent: number): string => {
    return language === 'ar' ? `%${toArabicDigits(percent)}` : `${percent}%`;
  };

  return (
    <AzureLanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        isRtl,
        t,
        toArabicDigits,
        formatPrice,
        formatNumber,
        formatPercent,
      }}
    >
      {children}
    </AzureLanguageContext.Provider>
  );
};

export const useAzureLanguage = () => {
  const context = useContext(AzureLanguageContext);
  if (!context) {
    throw new Error('useAzureLanguage must be used within an AzureLanguageProvider');
  }
  return context;
};
