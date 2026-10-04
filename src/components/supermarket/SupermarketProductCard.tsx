'use client';

import React, { useState } from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { SupermarketProduct } from '../../data/supermarketData';
import {
  Heart,
  Plus,
  Minus,
  Star,
  Eye,
  Check,
  ShoppingBag
} from 'lucide-react';

interface ProductCardProps {
  product: SupermarketProduct;
  dense?: boolean;
}

export default function SupermarketProductCard({ product, dense = false }: ProductCardProps) {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const {
    cart,
    addToCart,
    updateQuantity,
    toggleWishlist,
    isInWishlist,
    setQuickViewProduct
  } = useSupermarketCart();

  const [isJustAdded, setIsJustAdded] = useState(false);

  // Check if item is already in cart
  const cartItem = cart.find((item) => item.product.id === product.id);
  const currentQuantity = cartItem ? cartItem.quantity : 0;
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setIsJustAdded(true);
    setTimeout(() => setIsJustAdded(false), 1200);
  };

  const handleIncrement = () => {
    updateQuantity(product.id, currentQuantity + 1);
  };

  const handleDecrement = () => {
    updateQuantity(product.id, currentQuantity - 1);
  };

  return (
    <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
      
      {/* Top Media & Badges */}
      <div className="relative mb-2.5">
        
        {/* Badges Strip */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1 items-start">
          {product.discountPercent > 0 && (
            <span className="bg-rose-600 text-white font-black text-[10px] sm:text-xs px-2 py-0.5 rounded-md shadow-sm">
              {product.discountPercent}% {t('off')}
            </span>
          )}
          {product.badge && product.discountPercent === 0 && (
            <span className="bg-emerald-600 text-white font-bold text-[10px] px-1.5 py-0.5 rounded-md shadow-sm">
              {product.badge}
            </span>
          )}
          {product.isUaeLocal && (
            <span className="bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-bold text-[9px] px-1.5 py-0.5 rounded border border-amber-300/40">
              🇦🇪 UAE
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(product.id)}
          aria-label="Toggle wishlist"
          className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-white/85 dark:bg-zinc-800/85 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-rose-500 transition-colors shadow-sm"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'fill-rose-500 text-rose-500' : ''
            }`}
          />
        </button>

        {/* Product Image with Quick View Trigger */}
        <div
          onClick={() => setQuickViewProduct(product)}
          className="relative aspect-square rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800/60 cursor-pointer flex items-center justify-center"
        >
          <img
            src={product.image}
            alt={isRtl ? product.nameAr : product.nameEn}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Quick View Hover Button (Desktop) */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity hidden md:flex">
            <span className="bg-white/95 dark:bg-zinc-900/95 text-zinc-900 dark:text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              {t('quickView')}
            </span>
          </div>
        </div>

      </div>

      {/* Product Information */}
      <div className="flex-1 flex flex-col justify-between">
        
        {/* Brand & Unit Size */}
        <div>
          <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mb-1">
            <span className="font-semibold text-emerald-700 dark:text-emerald-400 truncate max-w-[60%]">
              {product.brand}
            </span>
            <span className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-[10px]">
              {product.unit}
            </span>
          </div>

          {/* Product Name (Bilingual) */}
          <h4
            onClick={() => setQuickViewProduct(product)}
            className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 line-clamp-2 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors leading-snug mb-1"
          >
            {isRtl ? product.nameAr : product.nameEn}
          </h4>

          {/* Secondary Language Name */}
          <p className="text-[10px] text-zinc-400 line-clamp-1 mb-2">
            {isRtl ? product.nameEn : product.nameAr}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400 mb-2">
            <div className="flex items-center text-amber-500">
              <Star className="w-3 h-3 fill-amber-400" />
            </div>
            <span className="font-bold text-zinc-700 dark:text-zinc-300">{product.rating}</span>
            <span className="text-[10px]">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Pricing Block */}
        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
          
          <div className="flex items-baseline justify-between gap-1 mb-2">
            <div>
              <div className="text-base sm:text-lg font-black text-zinc-950 dark:text-white tracking-tight">
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mr-0.5">AED</span>
                {product.price.toFixed(2)}
              </div>
              {product.originalPrice > product.price && (
                <div className="text-[11px] text-zinc-400 line-through">
                  AED {product.originalPrice.toFixed(2)}
                </div>
              )}
            </div>

            {product.discountAmount > 0 && (
              <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                {t('save')} AED {product.discountAmount.toFixed(2)}
              </span>
            )}
          </div>

          {/* Stepper Quantity or Add to Cart Button */}
          {currentQuantity > 0 ? (
            <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300/60 dark:border-emerald-800 rounded-xl p-1">
              <button
                onClick={handleDecrement}
                aria-label="Decrease quantity"
                className="w-7 h-7 rounded-lg bg-white dark:bg-zinc-800 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold shadow-sm active:scale-90 transition-transform"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-black text-emerald-950 dark:text-emerald-200">
                {currentQuantity}
              </span>
              <button
                onClick={handleIncrement}
                aria-label="Increase quantity"
                className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold shadow-sm active:scale-90 transition-transform"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className={`w-full py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-sm ${
                isJustAdded
                  ? 'bg-teal-600 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {isJustAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{t('added')}</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>{t('addToCart')}</span>
                </>
              )}
            </button>
          )}

        </div>

      </div>

    </div>
  );
}
