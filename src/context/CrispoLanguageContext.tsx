'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  CrispoLanguage,
  CRISPO_TRANSLATIONS,
  CRISPO_PRODUCTS_AR,
  CRISPO_COMBOS_AR,
  CRISPO_OFFERS_AR,
  CRISPO_LOCATIONS_AR,
} from '@/data/crispoTranslations';
import { CrispoProduct, CrispoCombo, CrispoOffer, CrispoLocation } from '@/data/crispoData';

export const toArabicDigits = (val: string | number): string => {
  if (val === undefined || val === null) return '';
  const str = String(val);
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return str.replace(/[0-9]/g, (w) => arabicDigits[+w]);
};

interface CrispoLanguageContextType {
  language: CrispoLanguage;
  isRtl: boolean;
  setLanguage: (lang: CrispoLanguage) => void;
  toggleLanguage: () => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  formatPrice: (aed: number) => string;
  formatNumber: (val: number | string) => string;
  toArabicDigits: (val: string | number) => string;
  translateCategory: (category: string) => string;
  translateProduct: (product: CrispoProduct) => CrispoProduct;
  translateCombo: (combo: CrispoCombo) => CrispoCombo;
  translateOffer: (offer: CrispoOffer) => CrispoOffer;
  translateLocation: (location: CrispoLocation) => CrispoLocation;
}

const CrispoLanguageContext = createContext<CrispoLanguageContextType | undefined>(undefined);

export const CrispoLanguageProvider: React.FC<{ children: ReactNode; defaultLanguage?: CrispoLanguage }> = ({
  children,
  defaultLanguage = 'en',
}) => {
  const [language, setLanguageState] = useState<CrispoLanguage>(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('crispo_lang') as CrispoLanguage;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: CrispoLanguage) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('crispo_lang', lang);
    }
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'ar' : 'en';
    setLanguage(next);
  };

  const isRtl = language === 'ar';

  // Translation lookup helper
  const t = (key: string, params?: Record<string, string | number>): string => {
    const entry = CRISPO_TRANSLATIONS[key];
    let text = entry ? (entry[language] || entry.en || key) : key;

    if (params) {
      Object.entries(params).forEach(([paramKey, paramVal]) => {
        const valStr = isRtl && typeof paramVal === 'number' ? toArabicDigits(paramVal) : String(paramVal);
        text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), valStr);
      });
    }

    return text;
  };

  const formatPrice = (aed: number): string => {
    const formatted = aed % 1 === 0 ? aed.toString() : aed.toFixed(2);
    return isRtl ? `${toArabicDigits(formatted)} د.إ` : `AED ${formatted}`;
  };

  const formatNumber = (val: number | string): string => {
    return isRtl ? toArabicDigits(val) : String(val);
  };

  const translateCategory = (category: string): string => {
    if (!isRtl) return category;
    switch (category) {
      case 'All': return 'كافة الأصناف';
      case 'Chicken': return 'الدجاج المقرمش';
      case 'Burgers': return 'البرجر الفاخر';
      case 'Wings': return 'الأجنحة الحارة';
      case 'Tenders': return 'الستربس والتندرز';
      case 'Buckets': return 'البوكسات العائلية';
      case 'Combos': return 'وجبات الكومبو';
      case 'Sides': return 'المقبلات والبطاطس';
      case 'Desserts': return 'الحلويات';
      case 'Drinks': return 'المشروبات';
      default: return category;
    }
  };

  const translateProduct = (product: CrispoProduct): CrispoProduct => {
    if (!isRtl) return product;
    const arData = CRISPO_PRODUCTS_AR[product.id];
    if (!arData) return product;

    return {
      ...product,
      name: arData.name,
      description: arData.description,
      category: product.category, // Keep internal enum key
      ingredients: arData.ingredients || product.ingredients,
    };
  };

  const translateCombo = (combo: CrispoCombo): CrispoCombo => {
    if (!isRtl) return combo;
    const arData = CRISPO_COMBOS_AR[combo.id];
    if (!arData) return combo;

    return {
      ...combo,
      name: arData.name,
      includes: arData.includes || combo.includes,
      badge: arData.badge || combo.badge,
    };
  };

  const translateOffer = (offer: CrispoOffer): CrispoOffer => {
    if (!isRtl) return offer;
    const arData = CRISPO_OFFERS_AR[offer.id];
    if (!arData) return offer;

    return {
      ...offer,
      title: arData.title,
      tagline: arData.tagline,
      discount: arData.discount,
      validity: arData.validity,
    };
  };

  const translateLocation = (location: CrispoLocation): CrispoLocation => {
    if (!isRtl) return location;
    const arData = CRISPO_LOCATIONS_AR[location.id];
    if (!arData) return location;

    return {
      ...location,
      name: arData.name,
      address: arData.address,
      distanceKm: arData.distanceKm,
      deliveryTimeMins: arData.deliveryTimeMins,
      closingTime: arData.closingTime,
    };
  };

  return (
    <CrispoLanguageContext.Provider
      value={{
        language,
        isRtl,
        setLanguage,
        toggleLanguage,
        t,
        formatPrice,
        formatNumber,
        toArabicDigits,
        translateCategory,
        translateProduct,
        translateCombo,
        translateOffer,
        translateLocation,
      }}
    >
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </CrispoLanguageContext.Provider>
  );
};

export const useCrispoLanguage = () => {
  const context = useContext(CrispoLanguageContext);
  if (!context) {
    throw new Error('useCrispoLanguage must be used within a CrispoLanguageProvider');
  }
  return context;
};

