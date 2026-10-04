'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ROADFORGE_TRANSLATIONS, RoadforgeLanguage } from '@/data/roadforgeTranslations';

interface RoadforgeLanguageContextType {
  language: RoadforgeLanguage;
  setLanguage: (lang: RoadforgeLanguage) => void;
  isRtl: boolean;
  t: (key: string) => string;
  toArabicDigits: (num: string | number) => string;
  formatPrice: (amount: number) => string;
  formatNumber: (num: number) => string;
  formatPercent: (percent: number) => string;
}

const RoadforgeLanguageContext = createContext<RoadforgeLanguageContextType | undefined>(undefined);

export const RoadforgeLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<RoadforgeLanguage>('en');

  useEffect(() => {
    const saved = localStorage.getItem('roadforge_language') as RoadforgeLanguage;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: RoadforgeLanguage) => {
    setLanguage(lang);
    localStorage.setItem('roadforge_language', lang);
  };

  const isRtl = language === 'ar';

  const t = (key: string): string => {
    const entry = ROADFORGE_TRANSLATIONS[key];
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
    <RoadforgeLanguageContext.Provider
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
    </RoadforgeLanguageContext.Provider>
  );
};

export const useRoadforgeLanguage = () => {
  const context = useContext(RoadforgeLanguageContext);
  if (!context) {
    throw new Error('useRoadforgeLanguage must be used within a RoadforgeLanguageProvider');
  }
  return context;
};
