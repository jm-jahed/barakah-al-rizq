'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  RestaurantLanguage,
  RESTAURANT_TRANSLATIONS,
  RESTAURANT_DISCIPLINES_AR,
  RESTAURANT_CATEGORIES_AR,
  RESTAURANT_DIETARY_AR,
  RESTAURANT_VENUES_AR,
  RESTAURANT_TIERS_AR,
  RESTAURANT_ADDONS_AR
} from '@/data/restaurantTranslations';
import { RestaurantDish } from '@/data/restaurantCatalogData';

export const toArabicDigits = (val: string | number): string => {
  if (val === undefined || val === null) return '';
  const str = String(val);
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return str.replace(/[0-9]/g, (w) => arabicDigits[+w]);
};

interface RestaurantLanguageContextType {
  language: RestaurantLanguage;
  isRtl: boolean;
  setLanguage: (lang: RestaurantLanguage) => void;
  toggleLanguage: () => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  formatPrice: (aed: number) => string;
  formatNumber: (val: number | string) => string;
  toArabicDigits: (val: string | number) => string;
  translateDish: (dish: RestaurantDish) => RestaurantDish;
  translateCategory: (catId: string) => string;
  translateDiscipline: (id: string) => { name: string; subtitle: string; highlight: string } | null;
  translateDietary: (tag: string) => string;
  translateVenue: (id: string) => { name: string; location: string; description: string };
  translateTier: (id: string) => { name: string; highlights: string };
  translateAddon: (id: string) => { name: string; description: string };
}

const DEFAULT_VENUES: Record<string, { name: string; location: string; description: string }> = {
  'difc-crystal-salon': {
    name: 'DIFC Royal Crystal Salon',
    location: 'Gate Village 08, DIFC Dubai',
    description: 'Private crystal-walled salon with dedicated kitchen pass, sommelier cellar, and discreet valet access.'
  },
  'palm-terrace-majlis': {
    name: 'Palm Jumeirah Sea Terrace Majlis',
    location: 'Crescent West, Palm Jumeirah',
    description: 'Waterfront terrace majlis overlooking Dubai Marina skyline with open wood-fired hearth and private lounge.'
  },
  'skyview-penthouse-salon': {
    name: 'Downtown Skyview Penthouse Salon',
    location: 'Opera District, Downtown Dubai',
    description: 'Elevated 54th-floor private dining sanctum with panoramic Burj Khalifa vistas and dedicated bar.'
  },
  'superyacht-charter-dining': {
    name: 'VIP Superyacht Charter Dining',
    location: 'Dubai Harbour Yacht Club',
    description: 'Turnkey culinary brigade and service aboard a 120ft luxury yacht navigating Dubai coastline.'
  }
};

const DEFAULT_TIERS: Record<string, { name: string; highlights: string }> = {
  '5-course': {
    name: '5-Course Heritage & French Signature',
    highlights: 'Includes Périgord Truffle Soup, Wagyu Ribeye & Damascus Rose Pavlova'
  },
  '8-course': {
    name: '8-Course Royal Degustation Journey',
    highlights: 'Includes Oscietra Caviar Tartlet, Oman Rock Lobster & A5 Kagoshima Wagyu'
  },
  '12-course': {
    name: '12-Course Sovereign Imperial Symphony',
    highlights: 'Complete multi-sensory chef table with Imperial Beluga, 24K Gold cuts & rare dessert atelier'
  }
};

const DEFAULT_ADDONS: Record<string, { name: string; description: string }> = {
  'caviar-upgrade': {
    name: 'Imperial Beluga Caviar (50g) Tableside Service',
    description: 'Served on ice-carved pedestal with mother-of-pearl spoons and blinis'
  },
  'gold-leaf-service': {
    name: '24K Pure Gold Leaf Main Course Finishing',
    description: 'Florence-certified edible gold foil sheets applied tableside'
  },
  'sommelier-pairings': {
    name: 'Sommelier Artisanal Infusion & Vintage Pairing',
    description: 'Rare vintage mocktails, barrel-aged date elixirs & botanical extracts'
  },
  'live-oud-lutenist': {
    name: 'Private Classical Oud Master & Lutenist',
    description: 'Unobtrusive live acoustic Khaleeji & Andalusian classical melodies'
  },
  'tableside-flambe': {
    name: 'Executive Chef Tableside Flambé & Torching',
    description: 'Personalized culinary presentation and storytelling by Master Chef'
  },
  'calligraphy-keepsakes': {
    name: 'Bespoke Hand-Inscribed Gold Calligraphy Menus',
    description: 'Customized luxury silk-bound keepsake menus for every guest'
  }
};

const RestaurantLanguageContext = createContext<RestaurantLanguageContextType | undefined>(undefined);

export const RestaurantLanguageProvider: React.FC<{ children: ReactNode; defaultLanguage?: RestaurantLanguage }> = ({
  children,
  defaultLanguage = 'en'
}) => {
  const [language, setLanguageState] = useState<RestaurantLanguage>(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('alsultan_lang') as RestaurantLanguage;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: RestaurantLanguage) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('alsultan_lang', lang);
    }
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'ar' : 'en';
    setLanguage(next);
  };

  const isRtl = language === 'ar';

  const t = (key: string, params?: Record<string, string | number>): string => {
    const entry = RESTAURANT_TRANSLATIONS[key];
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
    const formatted = aed.toLocaleString();
    return isRtl ? `${toArabicDigits(formatted)} د.إ` : `AED ${formatted}`;
  };

  const formatNumber = (val: number | string): string => {
    return isRtl ? toArabicDigits(val) : String(val);
  };

  const translateCategory = (catId: string): string => {
    if (!isRtl) return catId;
    return RESTAURANT_CATEGORIES_AR[catId] || catId;
  };

  const translateDiscipline = (id: string) => {
    if (!isRtl) return null;
    return RESTAURANT_DISCIPLINES_AR[id] || null;
  };

  const translateDietary = (tag: string): string => {
    if (!isRtl) return tag;
    return RESTAURANT_DIETARY_AR[tag] || tag;
  };

  const translateVenue = (id: string) => {
    if (isRtl && RESTAURANT_VENUES_AR[id]) {
      return RESTAURANT_VENUES_AR[id];
    }
    return DEFAULT_VENUES[id] || { name: id, location: '', description: '' };
  };

  const translateTier = (id: string) => {
    if (isRtl && RESTAURANT_TIERS_AR[id]) {
      return RESTAURANT_TIERS_AR[id];
    }
    return DEFAULT_TIERS[id] || { name: id, highlights: '' };
  };

  const translateAddon = (id: string) => {
    if (isRtl && RESTAURANT_ADDONS_AR[id]) {
      return RESTAURANT_ADDONS_AR[id];
    }
    return DEFAULT_ADDONS[id] || { name: id, description: '' };
  };

  const translateDish = (dish: RestaurantDish): RestaurantDish => {
    if (!isRtl) return dish;

    const catNameAr = RESTAURANT_CATEGORIES_AR[dish.categoryId] || dish.categoryName;
    const dietaryAr = dish.dietaryTags.map(tag => RESTAURANT_DIETARY_AR[tag] || tag);

    // Contextual Arabic terms mapping for ingredients & notes
    const translateIngredient = (ing: string): string => {
      if (ing.includes('Negin saffron')) return 'خيوط زعفران نيغين الإيراني الصافي الفاخر';
      if (ing.includes('gold leaf')) return 'رقائق الذهب عيار ٢٤ قيراط الصالحة للأكل (معتمدة من فلورنسا)';
      if (ing.includes('truffle') || ing.includes('Truffle')) return 'ترفل بيريغورد الأسود الطازج مع زيت الزيتون البكر';
      if (ing.includes('Wagyu') || ing.includes('wagyu')) return 'لحم واغيو كاجوشيما A5 الياباني المعتمد';
      if (ing.includes('Caviar') || ing.includes('caviar')) return 'كافيار بيلوغا قزوين الإمبراطوري الفاخر';
      if (ing.includes('Lobster') || ing.includes('lobster')) return 'كركند صخور بحر عمان الطازج';
      if (ing.includes('butter')) return 'زبدة نقية من الأبقار التي تتغذى على الأعشاب الطبيعية';
      if (ing.includes('salt')) return 'بلورات ملح مالدون الصخري المدخن مع زعتر الجبال البري';
      return ing;
    };

    const translateTastingNote = (note: string): string => {
      if (note.startsWith('First Impression')) return 'الانطباع الأول: عبير فوّاح من الزعفران النادر، الترفل الطازج، والنكهات العطرية المكرملة.';
      if (note.startsWith('Mid-Palate')) return 'وسط المذاق: ملمس حريري مخملي مع عمق طهوي استثنائي وتوازن مثالي للأومامي والنكهات الطبيعية.';
      if (note.startsWith('Finish')) return 'الخاتمة: نهاية طويلة ومترفة تمتد بلمسات من زهر الحمضيات والدخان الخشبي الهادئ.';
      return note;
    };

    const translateProtocol = (proto: string): string => {
      if (proto.includes('Rosenthal')) return 'يُقدم على أواني الخزف العظمي روزنتال الفاخرة مع أدوات مائدة فضية مدموغة يدوياً من كريستوفل';
      if (proto.includes('Tableside')) return 'تقديم مباشر أمام الطاولة مع دخان الأعشاب العطرية أو تقنيات الإشعال باللهب الناري';
      if (proto.includes('Sommelier')) return 'إرشادات مخصصة من خبير الضيافة حول تتابع الروائح وتنقية حاسة التذوق بين الأطباق';
      return proto;
    };

    return {
      ...dish,
      categoryName: catNameAr,
      dietaryTags: dietaryAr,
      ingredients: dish.ingredients.map(translateIngredient),
      tastingNotes: dish.tastingNotes.map(translateTastingNote),
      tableServiceProtocol: dish.tableServiceProtocol.map(translateProtocol),
    };
  };

  return (
    <RestaurantLanguageContext.Provider
      value={{
        language,
        isRtl,
        setLanguage,
        toggleLanguage,
        t,
        formatPrice,
        formatNumber,
        toArabicDigits,
        translateDish,
        translateCategory,
        translateDiscipline,
        translateDietary,
        translateVenue,
        translateTier,
        translateAddon
      }}
    >
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </RestaurantLanguageContext.Provider>
  );
};

export const useRestaurantLanguage = () => {
  const context = useContext(RestaurantLanguageContext);
  if (!context) {
    throw new Error('useRestaurantLanguage must be used within a RestaurantLanguageProvider');
  }
  return context;
};
