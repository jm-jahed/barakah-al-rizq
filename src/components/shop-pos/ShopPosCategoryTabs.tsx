'use client';

import React from 'react';
import { useShopPos } from '@/context/ShopPosContext';
import { RETAIL_CATEGORIES } from '@/types/shopPos';

export const ShopPosCategoryTabs: React.FC = () => {
  const { selectedCategory, setSelectedCategory, products, t } = useShopPos();

  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return products.length;
    return products.filter((p) => p.category === catId).length;
  };

  return (
    <div className="lg:hidden flex items-center gap-1.5 p-2 bg-[#10121A] border-b border-[#1F2433] overflow-x-auto scrollbar-none select-none">
      {RETAIL_CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        const count = getCategoryCount(cat.id);

        return (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
              isSelected
                ? 'bg-[#D4AF37] text-[#0B0D14] shadow-md font-bold'
                : 'bg-[#1A1D2B] text-[#A0AEC0] hover:text-[#E2E8F0] border border-[#1F2433]'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{t(cat.nameKey as any)}</span>
            <span
              className={`text-[10px] font-mono px-1 rounded-full ${
                isSelected ? 'bg-[#0B0D14]/20 text-[#0B0D14]' : 'bg-[#10121A] text-[#718096]'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
