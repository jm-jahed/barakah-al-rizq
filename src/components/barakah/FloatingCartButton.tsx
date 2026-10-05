'use client';

import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useWholesaleCart } from '@/context/WholesaleCartContext';

export const FloatingCartButton: React.FC = () => {
  const { totalCtn, totalAED, openCart, totalItems } = useWholesaleCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        type="button"
        onClick={openCart}
        className="px-4 py-3 rounded-2xl bg-[#063D24] text-white hover:bg-emerald-950 shadow-2xl border-2 border-amber-400/80 font-mono flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 group"
        aria-label="Open Wholesale Cart"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5 text-amber-300" />
          <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-amber-400 text-slate-950 text-[9px] font-black flex items-center justify-center">
            {totalItems}
          </span>
        </div>

        <div className="text-left font-mono leading-tight">
          <div className="text-[10px] text-emerald-200 font-bold uppercase tracking-wider flex items-center gap-1">
            <span>WHOLESALE CART</span>
            <span className="text-amber-300">({totalCtn} CTN)</span>
          </div>
          <div className="text-sm font-black text-white">
            Dhs {totalAED.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
        </div>

        <div className="w-7 h-7 rounded-xl bg-white/10 group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center transition-colors">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </button>
    </div>
  );
};
