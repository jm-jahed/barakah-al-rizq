'use client';

import React from 'react';
import { ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface MobileOrderBarProps {
  cartCount: number;
  totalPriceAED: number;
  onOpenCart: () => void;
}

export const MobileOrderBar: React.FC<MobileOrderBarProps> = ({
  cartCount,
  totalPriceAED,
  onOpenCart,
}) => {
  const { isRtl, formatPrice, toArabicDigits } = useCrispoLanguage();

  if (cartCount === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      <button
        onClick={onOpenCart}
        className="w-full p-4 rounded-2xl bg-gradient-to-r from-[#E63946] via-[#FF4757] to-[#FF3300] text-white font-sans font-black text-xs uppercase tracking-wider flex items-center justify-between shadow-2xl shadow-[#E63946]/50 border border-white/20 active:scale-98"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-black/40 flex items-center justify-center font-mono font-bold text-white text-xs">
            {isRtl ? toArabicDigits(cartCount) : cartCount}
          </div>
          <span>{isRtl ? 'عرض سلة الطلبات' : 'View Cart Items'}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-black text-[#FFC107]">{formatPrice(totalPriceAED)}</span>
          {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </div>
      </button>
    </div>
  );
};

