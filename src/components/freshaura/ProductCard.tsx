'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingBag, Star, Plus, Minus, MapPin, Check } from 'lucide-react';
import { ProduceProduct } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

interface ProductCardProps {
  product: ProduceProduct;
  onQuickView: (p: ProduceProduct) => void;
  onAddToCart: (p: ProduceProduct, qty: number) => void;
  onToggleWishlist: (p: ProduceProduct) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const { t, isRtl, formatPrice, formatNumber } = useFreshauraLanguage();
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 1500);
  };

  const name = isRtl ? product.nameAr || product.nameEn : product.nameEn;
  const origin = isRtl ? product.originAr || product.originEn : product.originEn;
  const unit = isRtl ? product.unitAr || product.unitEn : product.unitEn;
  const desc = isRtl ? product.freshnessNotesAr || product.descAr : product.freshnessNotesEn || product.descEn;
  const badge = isRtl ? product.badgeAr || product.badgeEn : product.badgeEn;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-[#064E3B] rounded-2xl border border-emerald-700/50 overflow-hidden shadow-xl hover:border-emerald-400 transition-all flex flex-col justify-between group font-sans relative"
    >
      <div>
        {/* Fixed Aspect-Ratio Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#042F2E] cursor-pointer" onClick={() => onQuickView(product)}>
          <img
            src={product.image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-transparent to-transparent opacity-40" />

          {/* Badges Overlay */}
          <div className={`absolute top-2.5 ${isRtl ? 'right-2.5' : 'left-2.5'} flex flex-col gap-1 z-10 font-mono text-[9px]`}>
            {badge && (
              <span className="px-2 py-0.5 rounded-md bg-[#042F2E]/90 text-emerald-300 border border-emerald-500/40 font-bold uppercase backdrop-blur-md">
                {badge}
              </span>
            )}
            {product.isDailyDeal && (
              <span className="px-2 py-0.5 rounded-md bg-[#042F2E]/90 text-amber-300 border border-amber-500/40 font-bold uppercase backdrop-blur-md">
                {isRtl ? 'عرض خاص' : 'DEAL'}
              </span>
            )}
          </div>

          {/* Wishlist & Quick View Buttons */}
          <div className={`absolute top-2.5 ${isRtl ? 'left-2.5' : 'right-2.5'} flex items-center gap-1.5 z-10`}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="p-2 rounded-full bg-[#042F2E]/80 border border-emerald-700 text-stone-200 hover:text-emerald-300 backdrop-blur-md transition-all"
              title={t('quickView')}
            >
              <Eye className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleWishlist(product);
              }}
              className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                isWishlisted
                  ? 'bg-rose-950/80 border-rose-500/50 text-rose-400'
                  : 'bg-[#042F2E]/80 border-emerald-700 text-stone-200 hover:text-white'
              }`}
              title={t('saveWishlist')}
            >
              <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Visually Connected Product Card Info Area */}
        <div className="p-4 space-y-2.5">
          
          {/* Top Origin & Rating Header */}
          <div className="flex items-center justify-between font-mono text-[10px]">
            <span className="text-emerald-300 font-bold flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
              {origin}
            </span>
            <div className="flex items-center gap-1 text-amber-300">
              <Star className="w-3 h-3 fill-amber-300" />
              <span>{formatNumber(product.rating.toFixed(1))}</span>
            </div>
          </div>

          {/* Product Title & Weight/Unit */}
          <div>
            <h3
              onClick={() => onQuickView(product)}
              className="text-base sm:text-lg font-serif font-bold text-[#FBF9F5] hover:text-emerald-300 transition-colors cursor-pointer leading-snug line-clamp-1"
            >
              {name}
            </h3>
            <span className="inline-block mt-0.5 px-2 py-0.5 rounded bg-[#042F2E] border border-emerald-700/50 text-[10px] font-mono text-emerald-300 font-bold">
              {unit}
            </span>
          </div>

          {/* Short Product Description */}
          <p className="text-xs text-stone-300 font-sans line-clamp-2 leading-relaxed opacity-90 min-h-[32px]">
            {desc}
          </p>

          {/* Price AED Display */}
          <div className="flex items-baseline gap-2 font-mono pt-1">
            <span className="text-xl font-serif font-extrabold text-emerald-300">
              {formatPrice(product.priceAED)}
            </span>
            {product.originalPriceAED && (
              <span className="text-xs text-stone-400 line-through">
                {formatPrice(product.originalPriceAED)}
              </span>
            )}
          </div>

        </div>
      </div>

      {/* Visually Connected Bottom Quantity & Add to Cart Controls */}
      <div className="p-4 pt-0 font-mono">
        <div className="flex items-center gap-2 pt-2 border-t border-emerald-800/60">
          
          {/* Quantity Selector (- 1 +) */}
          <div className="flex items-center bg-[#042F2E] rounded-xl border border-emerald-700/60 p-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity((q) => Math.max(1, q - 1));
              }}
              className="w-6 h-6 flex items-center justify-center text-stone-300 hover:text-white rounded-lg hover:bg-emerald-800/40"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-6 text-center text-xs font-bold text-white">{formatNumber(quantity)}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity((q) => q + 1);
              }}
              className="w-6 h-6 flex items-center justify-center text-stone-300 hover:text-white rounded-lg hover:bg-emerald-800/40"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Add to Cart CTA Button */}
          <button
            onClick={handleAdd}
            className={`flex-1 py-2.5 px-3 rounded-xl font-serif text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 ${
              addedSuccess
                ? 'bg-emerald-500 text-black'
                : 'bg-emerald-400 hover:bg-emerald-300 text-black'
            }`}
          >
            {addedSuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>{t('added')}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>{t('addToCart')}</span>
              </>
            )}
          </button>

        </div>
      </div>
    </motion.div>
  );
};
