'use client';

import React, { useState } from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import {
  X,
  Plus,
  Minus,
  Star,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  ShoppingBag,
  Check
} from 'lucide-react';

export default function SupermarketProductModal() {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsCartOpen
  } = useSupermarketCart();

  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWishlisted = isInWishlist(product.id);

  const handleAdd = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setQuickViewProduct(null);
      setIsCartOpen(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 overflow-y-auto max-h-[85vh]">
          
          {/* Left Media Column */}
          <div className="space-y-3">
            <div className="relative aspect-[4/3] sm:aspect-square max-h-52 sm:max-h-none rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
              <img
                src={product.image}
                alt={product.nameEn}
                className="w-full h-full object-cover"
              />
              {product.discountPercent > 0 && (
                <span className="absolute top-3 left-3 bg-rose-600 text-white font-black text-xs px-2.5 py-1 rounded-lg">
                  {product.discountPercent}% {t('off')}
                </span>
              )}
            </div>

            {/* Origin & Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-2 text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
              <div className="flex-1 bg-zinc-50 dark:bg-zinc-800/60 p-2.5 rounded-xl flex items-center gap-2 border border-zinc-200 dark:border-zinc-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="min-w-0 leading-tight">{t('origin')}: <strong className="text-zinc-900 dark:text-white">{product.origin}</strong></span>
              </div>
              <div className="flex-1 bg-zinc-50 dark:bg-zinc-800/60 p-2.5 rounded-xl flex items-center gap-2 border border-zinc-200 dark:border-zinc-800">
                <Truck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="min-w-0 leading-tight">{isRtl ? 'توصيل مبرد 60 دقيقة' : '60-min Chilled Van'}</span>
              </div>
            </div>
          </div>

          {/* Right Product Details Column */}
          <div className="flex flex-col justify-between space-y-4">
            
            <div>
              {/* Category & Brand */}
              <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold mb-1">
                <span>{isRtl ? product.categoryAr : product.category}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">{product.brand}</span>
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-extrabold text-zinc-950 dark:text-white leading-tight mb-1">
                {isRtl ? product.nameAr : product.nameEn}
              </h2>
              <p className="text-xs text-zinc-400 mb-2">
                {isRtl ? product.nameEn : product.nameAr}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 mb-3">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span className="font-bold text-zinc-900 dark:text-white">{product.rating}</span>
                <span>({product.reviewsCount} {isRtl ? 'تقييم موثق' : 'verified reviews'})</span>
              </div>

              {/* Price & Savings */}
              <div className="bg-emerald-50/60 dark:bg-emerald-950/40 p-3 rounded-2xl border border-emerald-200/60 dark:border-emerald-900/40 mb-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-emerald-900 dark:text-emerald-200">
                    AED {product.price.toFixed(2)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-xs text-zinc-400 line-through">
                      AED {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                {product.discountAmount > 0 && (
                  <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mt-0.5">
                    {t('save')} AED {product.discountAmount.toFixed(2)} ({product.discountPercent}% {t('off')})
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-3">
                {isRtl ? product.descAr : product.descEn}
              </p>

              {/* Unit Info */}
              <div className="text-xs text-zinc-500 mb-4">
                <span>{t('unitSize')}: </span>
                <span className="font-bold text-zinc-800 dark:text-zinc-200">{product.unit}</span>
              </div>
            </div>

            {/* Stepper Quantity & Add to Cart Controls */}
            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-xl p-1 border border-zinc-200 dark:border-zinc-700">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white flex items-center justify-center font-bold"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-black text-zinc-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white flex items-center justify-center font-bold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  aria-label="Toggle wishlist"
                  className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:text-rose-500 transition-colors"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`w-full py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 ${
                  isAdded
                    ? 'bg-teal-600 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{t('added')}</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>
                      {t('addToCart')} • AED {(product.price * quantity).toFixed(2)}
                    </span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
