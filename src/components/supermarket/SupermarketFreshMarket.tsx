'use client';

import React, { useState } from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { SUPERMARKET_PRODUCTS } from '../../data/supermarketData';
import SupermarketProductCard from './SupermarketProductCard';
import { Leaf, Apple, Beef, Fish, Milk, Croissant, ArrowRight } from 'lucide-react';

interface FreshMarketProps {
  onViewCategory?: (slug: string) => void;
}

export default function SupermarketFreshMarket({ onViewCategory }: FreshMarketProps) {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const { setSelectedCategorySlug } = useSupermarketCart();

  const [activeTab, setActiveTab] = useState<'fruits-vegetables' | 'meat-poultry' | 'seafood' | 'dairy-eggs' | 'bakery'>('fruits-vegetables');

  const tabs = [
    { id: 'fruits-vegetables', en: 'Produce', ar: 'خضار وفواكه', icon: Apple },
    { id: 'meat-poultry', en: 'Butchery', ar: 'اللحوم والدواجن', icon: Beef },
    { id: 'seafood', en: 'Fish Market', ar: 'المأكولات البحرية', icon: Fish },
    { id: 'dairy-eggs', en: 'Dairy & Eggs', ar: 'الألبان والبيض', icon: Milk },
    { id: 'bakery', en: 'Bakery', ar: 'المخبوزات', icon: Croissant },
  ];

  const products = SUPERMARKET_PRODUCTS
    .filter((p) => p.categorySlug === activeTab)
    .slice(0, 8);

  const handleTabSelect = (slug: typeof activeTab) => {
    setActiveTab(slug);
  };

  return (
    <section className="py-10 px-4 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
              <Leaf className="w-3.5 h-3.5" />
              <span>{isRtl ? 'طازج يومياً من المزارع' : 'Daily Farm Fresh & Butchery'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
              {isRtl ? 'سوق الطازج المركزي — خضار، لحوم، أسماك، مخابز' : 'Fresh Market — Produce, Butchery & Bakery'}
            </h2>
          </div>

          {/* Fresh Aisle Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabSelect(tab.id as typeof activeTab)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20'
                      : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{isRtl ? tab.ar : tab.en}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dense Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {products.map((prod) => (
            <SupermarketProductCard key={prod.id} product={prod} />
          ))}
        </div>

        {/* View All in Category Link */}
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setSelectedCategorySlug(activeTab);
              if (onViewCategory) onViewCategory(activeTab);
            }}
            className="inline-flex items-center gap-2 text-xs font-black text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>
              {isRtl
                ? `عرض جميع منتجات ${tabs.find((t) => t.id === activeTab)?.ar}`
                : `View All ${tabs.find((t) => t.id === activeTab)?.en} Products`}
            </span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>
    </section>
  );
}
