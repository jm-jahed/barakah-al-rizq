'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';

export interface CodeforgeLanguageContextType {
  language: Language;
  lang: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: (enText: string, arText: string) => string;
  formatPrice: (amount: number) => string;
  formatNumber: (num: number | string) => string;
  formatPercent: (val: number) => string;
  toArabicDigits: (str: string | number) => string;
}

const CodeforgeLanguageContext = createContext<CodeforgeLanguageContextType | undefined>(undefined);

export const toArabicDigits = (val: string | number): string => {
  const str = String(val);
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return str.replace(/[0-9]/g, (d) => arabicDigits[parseInt(d, 10)]);
};

export const CodeforgeLanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('codeforge_lang') as Language;
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
      localStorage.setItem('codeforge_lang', lang);
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

  const formatPrice = (amount: number): string => {
    if (language === 'ar') {
      return `${toArabicDigits(amount.toLocaleString('en-US'))} د.إ`;
    }
    return `AED ${amount.toLocaleString('en-US')}`;
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
    <CodeforgeLanguageContext.Provider
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
    </CodeforgeLanguageContext.Provider>
  );
};

export const useCodeforgeLanguage = (): CodeforgeLanguageContextType => {
  const context = useContext(CodeforgeLanguageContext);
  if (!context) {
    throw new Error('useCodeforgeLanguage must be used within a CodeforgeLanguageProvider');
  }
  return context;
};
