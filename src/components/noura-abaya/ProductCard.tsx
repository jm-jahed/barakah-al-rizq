'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { NouraProduct, getDiverseAbayaImage } from '@/data/nouraAbayaData';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

interface ProductCardProps {
  product: NouraProduct;
  onQuickView: (p: NouraProduct) => void;
  onOpenDetail: (p: NouraProduct) => void;
  onAddToCart: (p: NouraProduct) => void;
  onToggleWishlist: (p: NouraProduct) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onOpenDetail,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const { isRtl, t, translateProductName, translateProductOverview, translateCollection, formatPrice } = useNouraLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const displayImage = isHovered 
    ? getDiverseAbayaImage(product.id, 2) 
    : getDiverseAbayaImage(product.id, 0);

  const getBadgeText = (badge?: string) => {
    if (!badge) return '';
    if (!isRtl) return badge;
    if (badge === 'BESTSELLER') return 'الأكثر طلباً';
    if (badge === 'NEW' || badge === 'NEW ARRIVAL') return 'وصل حديثاً';
    if (badge === 'LIMITED') return 'إصدار محدود';
    if (badge === 'EXCLUSIVE') return 'حصري';
    if (badge === 'RAMADAN EDIT') return 'تشكيلة رمضان';
    if (badge === 'EID EDITION') return 'إصدار العيد';
    return badge;
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#121212] rounded-3xl border border-stone-800 overflow-hidden shadow-xl hover:border-[#C5A059] transition-all flex flex-col justify-between group font-sans relative"
    >
      <div>
        
        {/* Product Image Container */}
        <div className="relative h-80 overflow-hidden bg-[#0A0A0A] cursor-pointer" onClick={() => onOpenDetail(product)}>
          <img
            src={displayImage}
            alt={translateProductName(product.name)}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />

          {/* Badges */}
          <div className="absolute top-3 left-3 rtl:right-3 rtl:left-auto flex flex-col gap-1 z-10 font-mono text-[9px]">
            {product.badge && (
              <span className="px-2.5 py-1 rounded-full bg-[#0A0A0A]/90 text-[#C5A059] border border-[#C5A059]/40 font-bold uppercase backdrop-blur-md">
                {getBadgeText(product.badge)}
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`absolute top-3 right-3 rtl:left-3 rtl:right-auto p-2.5 rounded-full backdrop-blur-md border transition-all z-10 ${
              isWishlisted
                ? 'bg-rose-950/80 border-rose-500/50 text-rose-400'
                : 'bg-[#0A0A0A]/80 border-stone-700 text-stone-300 hover:text-white'
            }`}
            aria-label="Toggle Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-400' : ''}`} />
          </button>

          {/* Hover Quick Action Overlay */}
          <div className="absolute inset-x-4 bottom-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 font-mono text-xs">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="flex-1 py-2.5 rounded-xl bg-[#0A0A0A]/90 hover:bg-[#0A0A0A] border border-stone-700 text-white font-bold flex items-center justify-center gap-1.5 backdrop-blur-md"
            >
              <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{t('quickView')}</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#8C6D2D] text-black font-bold flex items-center justify-center gap-1.5 shadow-lg"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{isRtl ? 'إضافة' : 'Add'}</span>
            </button>
          </div>

        </div>

        {/* Product Card Text Details */}
        <div className="p-5 space-y-2">
          <div className="flex items-center justify-between font-mono text-[10px] text-stone-400">
            <span className="text-[#C5A059] font-bold">{translateCollection(product.collection)}</span>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3 h-3 fill-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          </div>

          <h3
            onClick={() => onOpenDetail(product)}
            className="text-base font-serif font-bold text-[#FAFAFA] hover:text-[#C5A059] transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {translateProductName(product.name)}
          </h3>

          <p className="text-xs text-stone-400 font-normal line-clamp-1 leading-relaxed">
            {translateProductOverview(product.overview)}
          </p>

          {/* Color swatches & Pricing */}
          <div className="pt-2 flex items-center justify-between font-mono">
            <div className="flex items-center gap-1.5">
              {product.colorOptions.map((c) => (
                <span
                  key={c.name}
                  title={c.name}
                  className="w-2.5 h-2.5 rounded-full border border-stone-700"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-base font-serif font-bold text-[#FAFAFA]">
                {formatPrice(product.priceAED)}
              </span>
              {product.originalPriceAED && (
                <span className="text-xs text-stone-500 line-through">
                  {formatPrice(product.originalPriceAED)}
                </span>
              )}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
