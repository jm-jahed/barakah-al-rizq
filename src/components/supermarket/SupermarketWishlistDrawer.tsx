'use client';

import React from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { SUPERMARKET_PRODUCTS } from '../../data/supermarketData';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export default function SupermarketWishlistDrawer() {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    setIsCartOpen
  } = useSupermarketCart();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = SUPERMARKET_PRODUCTS.filter((p) =>
    wishlist.includes(p.id)
  );

  const handleMoveToCart = (product: typeof SUPERMARKET_PRODUCTS[0]) => {
    addToCart(product, 1);
    toggleWishlist(product.id);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-white dark:bg-zinc-950 h-full flex flex-col justify-between shadow-2xl border-s border-zinc-200 dark:border-zinc-800">
        
        {/* Header */}
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="font-extrabold text-base text-zinc-950 dark:text-white">
              {t('wishlist')} ({wishlist.length})
            </h3>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close wishlist"
            className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {wishlistedProducts.length > 0 ? (
            wishlistedProducts.map((prod) => (
              <div
                key={prod.id}
                className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800"
              >
                <img
                  src={prod.image}
                  alt={prod.nameEn}
                  className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                    {isRtl ? prod.nameAr : prod.nameEn}
                  </h4>
                  <div className="text-[11px] text-zinc-400">
                    {prod.unit} • AED {prod.price.toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleMoveToCart(prod)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 shadow"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{t('addToCart')}</span>
                  </button>
                  <button
                    onClick={() => toggleWishlist(prod.id)}
                    aria-label="Remove from wishlist"
                    className="text-zinc-400 hover:text-rose-500 p-1.5"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-3 text-zinc-400">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-extrabold text-sm text-zinc-900 dark:text-white mb-1">
                {isRtl ? 'قائمة المفضلة فارغة' : 'Your Wishlist is Empty'}
              </h4>
              <p className="text-xs text-zinc-500 mb-4 max-w-xs mx-auto">
                {isRtl
                  ? 'احفظ منتجاتك وباقاتك المفضلة للرجوع إليها وإضافتها للسلة بضغطة زر.'
                  : 'Save your favorite weekly items to quickly re-order them next time.'}
              </p>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="bg-emerald-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow"
              >
                {isRtl ? 'استكشف المنتجات' : 'Discover Items'}
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
