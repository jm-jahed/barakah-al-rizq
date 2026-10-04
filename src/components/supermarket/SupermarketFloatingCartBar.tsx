'use client';

import React from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { ShoppingBag, ArrowRight, Truck, Sparkles } from 'lucide-react';

export default function SupermarketFloatingCartBar() {
  const { isRtl, t } = useSupermarketLanguage();
  const {
    itemCount,
    subtotal,
    finalTotal,
    amountNeededForFreeDelivery,
    isCartOpen,
    setIsCartOpen,
    lastAddedItem
  } = useSupermarketCart();

  // Hide when cart is empty or when full cart drawer is already open
  if (itemCount === 0 || isCartOpen) return null;

  return (
    <div 
      className={`fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:left-auto z-40 max-w-lg animate-in slide-in-from-bottom duration-300 ${
        isRtl ? 'sm:right-auto sm:left-6 font-arabic' : 'font-sans'
      }`}
    >
      <div 
        onClick={() => setIsCartOpen(true)}
        className="bg-zinc-950/95 dark:bg-emerald-950/95 text-white p-3 sm:p-3.5 rounded-2xl border border-emerald-500/50 shadow-[0_15px_40px_rgba(0,0,0,0.4),0_0_25px_rgba(16,185,129,0.25)] backdrop-blur-md flex items-center justify-between gap-3 cursor-pointer hover:border-emerald-400 hover:scale-[1.02] active:scale-98 transition-all group"
      >
        {/* Left Icon & Item Count */}
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-xl bg-emerald-600 group-hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 transition-colors flex-shrink-0">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-zinc-950 text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-zinc-950 animate-pulse">
              {itemCount}
            </span>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black tracking-tight text-white">
                {itemCount} {isRtl ? 'أصناف في السلة' : itemCount === 1 ? 'Item in Basket' : 'Items in Basket'}
              </span>
              {lastAddedItem && (
                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-300 bg-emerald-900/60 px-1.5 py-0.2 rounded-full border border-emerald-400/30">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>{isRtl ? '+تم التحديث' : '+Updated'}</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-[11px] text-zinc-300">
              <span className="font-mono font-bold text-emerald-400">
                AED {subtotal.toFixed(2)}
              </span>
              <span className="text-zinc-500">•</span>
              <span className="truncate flex items-center gap-1 text-[10px] text-zinc-300">
                <Truck className="w-3 h-3 text-emerald-400" />
                {amountNeededForFreeDelivery === 0
                  ? (isRtl ? 'توصيل مجاني متاح' : 'Free Delivery Unlocked')
                  : (isRtl 
                      ? `باقي ${amountNeededForFreeDelivery.toFixed(0)} د.إ للمجاني` 
                      : `Add AED ${amountNeededForFreeDelivery.toFixed(0)} for Free Delivery`)}
              </span>
            </div>
          </div>
        </div>

        {/* Right CTA Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsCartOpen(true);
          }}
          className="bg-emerald-600 group-hover:bg-emerald-500 text-white font-black text-xs px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-md flex items-center gap-1.5 transition-colors flex-shrink-0"
        >
          <span>{isRtl ? 'عرض السلة' : 'View Basket'}</span>
          <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
}
