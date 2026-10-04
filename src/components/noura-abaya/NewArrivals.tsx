'use client';

import React from 'react';
import { NOURA_PRODUCTS, NouraProduct } from '@/data/nouraAbayaData';
import { ProductCard } from './ProductCard';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

interface NewArrivalsProps {
  onQuickView: (p: NouraProduct) => void;
  onOpenDetail: (p: NouraProduct) => void;
  onAddToCart: (p: NouraProduct) => void;
  onToggleWishlist: (p: NouraProduct) => void;
  wishlistIds: string[];
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  onQuickView,
  onOpenDetail,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
}) => {
  const { isRtl, t } = useNouraLanguage();
  const newArrivals = NOURA_PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4);

  return (
    <section className="py-24 bg-[#0A0A0A] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.15em] px-3 py-1 rounded-full bg-[#121212] border border-[#C5A059]/30">
              {isRtl ? 'إبداعات جديدة من أتيليه دبي' : 'FRESH FROM OUR DUBAI ATELIER'}
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4">
              {t('newArrivalsTitle')}
            </h2>
            <p className="text-base text-stone-300 font-normal mt-2 max-w-xl">
              {t('newArrivalsSubtitle')}
            </p>
          </div>
        </div>

        {/* 4 Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onOpenDetail={onOpenDetail}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.includes(product.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
