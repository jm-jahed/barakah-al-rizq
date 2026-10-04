'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Minus, CheckCircle2, ShoppingBag, Flame } from 'lucide-react';
import { CrispoProduct } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface ProductModalProps {
  product: CrispoProduct | null;
  onClose: () => void;
  onAddToCartWithAddons: (product: CrispoProduct, quantity: number, addons: { name: string; priceAED: number }[]) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCartWithAddons,
}) => {
  const { language, isRtl, t, formatPrice, translateProduct, toArabicDigits } = useCrispoLanguage();
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<{ name: string; priceAED: number }[]>([]);

  if (!product) return null;

  const localizedProduct = translateProduct(product);

  const availableAddons = [
    { name: isRtl ? 'صوص جبنة شيدر ذائبة' : 'Melted Cheddar Cheese Sauce', priceAED: 4 },
    { name: isRtl ? 'صلصة كريسبو السرية الحصرية' : 'Crispo Signature Secret Sauce Dip', priceAED: 2 },
    { name: isRtl ? 'ترقية إلى بطاطس مقلية بالجبن' : 'Upgrade to Loaded Cheese Fries', priceAED: 6 },
    { name: isRtl ? 'قطعة تندر دجاج مقرمشة إضافية' : 'Extra Crispy Tender Piece', priceAED: 8 },
  ];

  const toggleAddon = (addon: { name: string; priceAED: number }) => {
    if (selectedAddons.some((a) => a.name === addon.name)) {
      setSelectedAddons(selectedAddons.filter((a) => a.name !== addon.name));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const addonsTotal = selectedAddons.reduce((acc, curr) => acc + curr.priceAED, 0);
  const itemPrice = (product.priceAED + addonsTotal) * quantity;

  const handleAdd = () => {
    onAddToCartWithAddons(localizedProduct, quantity, selectedAddons);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#1A1715] border border-stone-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-stone-100 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} p-2 rounded-xl bg-[#12100E] border border-stone-800 text-stone-400 hover:text-white z-10 transition-colors`}
          aria-label={t('closeBtn')}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Media Image */}
        <div className="relative h-64 rounded-2xl overflow-hidden bg-[#12100E] mb-6">
          <img
            src={localizedProduct.image}
            alt={localizedProduct.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1715] via-transparent to-transparent" />

          <div className={`absolute bottom-4 ${isRtl ? 'right-4' : 'left-4'} flex items-center gap-2`}>
            {localizedProduct.isSpicy && (
              <span className="px-3 py-1 rounded-full bg-[#E63946] text-white font-mono text-[10px] font-black">
                {isRtl ? '🔥 حار ومقرمش' : '🔥 HOT & SPICY'}
              </span>
            )}
            <span className="px-3 py-1 rounded-full bg-[#12100E]/80 backdrop-blur-md text-[#FFC107] font-mono text-[10px] font-bold">
              {isRtl ? `${toArabicDigits(localizedProduct.calories)} سعرة حرارية` : `${localizedProduct.calories} calories`}
            </span>
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-black text-[#FAF6EE]">{localizedProduct.name}</h3>
            <span className="text-2xl font-black text-[#FFC107] font-mono">{formatPrice(localizedProduct.priceAED)}</span>
          </div>

          <p className="text-xs text-stone-300 leading-relaxed font-normal">
            {localizedProduct.description}
          </p>

          {/* Allergens & Ingredients */}
          <div className="p-4 rounded-xl bg-[#12100E] border border-stone-800 text-xs font-mono space-y-2">
            <div>
              <span className="text-[#FFC107] font-bold block mb-1">{t('ingredientsTitle')}:</span>
              <p className="text-stone-400 text-[11px] leading-relaxed">{localizedProduct.ingredients.join('، ')}</p>
            </div>
            {localizedProduct.allergens && localizedProduct.allergens.length > 0 && (
              <div>
                <span className="text-stone-400 font-bold block mb-1">{t('allergensTitle')}:</span>
                <span className="text-stone-300 text-[11px]">{localizedProduct.allergens.join('، ')}</span>
              </div>
            )}
          </div>
        </div>

        {/* Add-ons Selection */}
        <div className="mb-6">
          <label className="text-xs font-mono font-bold text-[#E63946] uppercase tracking-widest block mb-3">
            {isRtl ? 'تخصيص الوجبة والإضافات المميزة' : 'CUSTOMIZE YOUR ORDER & ADD-ONS'}
          </label>
          <div className="space-y-2 font-mono text-xs">
            {availableAddons.map((addon) => {
              const isSelected = selectedAddons.some((a) => a.name === addon.name);
              return (
                <div
                  key={addon.name}
                  onClick={() => toggleAddon(addon)}
                  className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                    isSelected ? 'bg-[#E63946]/15 border-[#E63946] text-white' : 'bg-[#12100E] border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-[#E63946]' : 'text-stone-700'}`} />
                    <span>{addon.name}</span>
                  </div>
                  <span className="text-[#FFC107] font-bold">+ {formatPrice(addon.priceAED)}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quantity Controls & Add to Cart Action */}
        <div className="pt-4 border-t border-stone-800 flex items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-3 bg-[#12100E] p-1.5 rounded-xl border border-stone-800">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm font-bold text-white px-2">
              {isRtl ? toArabicDigits(quantity) : quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#E63946] via-[#FF4757] to-[#FF3300] hover:from-[#d12e3b] text-white font-sans font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#E63946]/30 transition-all hover:opacity-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{isRtl ? `أضف إلى الطلب • ${formatPrice(itemPrice)}` : `Add to Order • ${formatPrice(itemPrice)}`}</span>
          </button>
        </div>

      </motion.div>
    </div>
  );
};

