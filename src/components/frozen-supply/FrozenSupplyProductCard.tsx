'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Snowflake,
  ShieldCheck,
  Plus,
  Minus,
  Eye,
  Layers,
  Check
} from 'lucide-react';
import { FrozenProduct } from '@/data/frozenSupplyData';
import { useFrozenSupplyTheme } from '@/context/FrozenSupplyThemeContext';
import { useFrozenSupplyLanguage } from '@/context/FrozenSupplyLanguageContext';

interface FrozenSupplyProductCardProps {
  product: FrozenProduct;
  onQuickView: (product: FrozenProduct) => void;
  onAddToCart: (product: FrozenProduct, quantity: number) => void;
  onToggleCompare: (product: FrozenProduct) => void;
  isCompared: boolean;
  isInCart: boolean;
}

export const FrozenSupplyProductCard: React.FC<FrozenSupplyProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  onToggleCompare,
  isCompared,
  isInCart
}) => {
  const { isDark } = useFrozenSupplyTheme();
  const { isRtl, t } = useFrozenSupplyLanguage();

  const [quantity, setQuantity] = useState<number>(product.moq);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > product.moq) {
      setQuantity(prev => prev - 1);
    }
  };

  // Find applicable tier price
  const activeTier = [...product.tierPricing]
    .reverse()
    .find(tier => quantity >= tier.minQuantity) || product.tierPricing[0];

  const currentPricePerCarton = activeTier ? activeTier.priceAED : product.priceAED;
  const currentTotalAED = currentPricePerCarton * quantity;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className={`rounded-2xl border overflow-hidden shadow-lg transition-all flex flex-col justify-between relative group ${
        isDark
          ? 'bg-[#0A1120] border-slate-800 hover:border-cyan-500/50 hover:shadow-cyan-500/10'
          : 'bg-white border-slate-200 hover:border-cyan-400 hover:shadow-slate-300/60'
      }`}
    >
      {/* Top Image Section */}
      <div className="relative h-52 overflow-hidden bg-slate-900 cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-t from-[#0A1120] via-transparent to-black/40' 
            : 'bg-gradient-to-t from-white/90 via-transparent to-black/30'
        }`} />

        {/* Temperature Badge */}
        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyan-500/30 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow">
          <Snowflake className="w-3 h-3 text-cyan-400" />
          <span>{product.storageTemp}</span>
        </div>

        {/* Origin & Halal Badge */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700 text-[10px] font-mono text-slate-200 flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>{product.origin}</span>
        </div>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="px-4 py-2 rounded-xl bg-slate-900/95 hover:bg-cyan-500 text-white hover:text-black border border-cyan-500/40 font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-xl"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t('quickView')}</span>
          </button>
        </div>

        {/* Bestseller/Promo Badge */}
        {product.isBestseller && (
          <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-amber-500/90 text-black text-[10px] font-mono font-black uppercase tracking-wider">
            {isRtl ? 'الأكثر مبيعاً' : 'High-Volume Bestseller'}
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
        
        <div>
          {/* SKU & Category */}
          <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 dark:text-slate-400">
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">{product.sku}</span>
            <span>{product.category}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            className={`text-sm font-bold transition-colors line-clamp-2 mt-1 cursor-pointer ${
              isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-600'
            }`}
          >
            {isRtl && product.nameAr ? product.nameAr : product.name}
          </h3>

          {/* Pack Size & Weight */}
          <div className={`mt-2 text-xs font-mono px-2.5 py-1.5 rounded-lg border flex items-center justify-between ${
            isDark
              ? 'text-slate-300 bg-slate-900/80 border-slate-800'
              : 'text-slate-700 bg-slate-100 border-slate-200'
          }`}>
            <span>Pack: {product.packSize.split('(')[0]}</span>
            <span className="text-slate-500 dark:text-slate-400">{product.weightKg} kg Net</span>
          </div>

          {/* Pricing Row */}
          <div className="mt-3 flex items-baseline justify-between font-mono">
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400">{t('cartonPrice')}:</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-black text-cyan-600 dark:text-cyan-400">
                  AED {currentPricePerCarton}
                </span>
                {product.originalPriceAED && (
                  <span className="text-xs line-through text-slate-400 dark:text-slate-600">
                    AED {product.originalPriceAED}
                  </span>
                )}
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{t('pricePerKg')}</span>
              <span className={`text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                ~AED {product.pricePerKgAED}/kg
              </span>
            </div>
          </div>

          {/* Tier discount indicator */}
          {activeTier && activeTier.discountPercent > 0 && (
            <div className="mt-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              ✓ {activeTier.label} (-{activeTier.discountPercent}%) {isRtl ? 'تم التطبيق' : 'Applied'}
            </div>
          )}
        </div>

        {/* Quantity Controls & Add-to-Request Button */}
        <div className={`space-y-2.5 pt-3 border-t font-mono ${
          isDark ? 'border-slate-800/80' : 'border-slate-200'
        }`}>
          
          {/* Stepper */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 dark:text-slate-400 text-[11px]">{t('moqBadge')} {product.moq}:</span>
            
            <div className={`flex items-center border rounded-lg p-0.5 ${
              isDark ? 'bg-[#050B14] border-slate-700' : 'bg-slate-100 border-slate-300'
            }`}>
              <button
                onClick={handleDecrement}
                disabled={quantity <= product.moq}
                className="w-6 h-6 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-black dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-8 text-center text-xs font-bold text-cyan-600 dark:text-cyan-300">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="w-6 h-6 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-black dark:hover:text-white"
                aria-label="Increase quantity"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-4 gap-2">
            
            {/* Compare Toggle */}
            <button
              onClick={() => onToggleCompare(product)}
              className={`col-span-1 py-2.5 rounded-xl border flex items-center justify-center transition-colors text-xs ${
                isCompared
                  ? isDark
                    ? 'bg-cyan-950 border-cyan-500 text-cyan-300'
                    : 'bg-cyan-100 border-cyan-500 text-cyan-800'
                  : isDark
                    ? 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
                    : 'bg-slate-100 border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900'
              }`}
              title={isCompared ? 'Remove from compare' : 'Add to compare'}
            >
              <Layers className="w-4 h-4" />
            </button>

            {/* Add to Request Button */}
            <button
              onClick={() => onAddToCart(product, quantity)}
              className={`col-span-3 py-2.5 px-3 rounded-xl font-sans font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md ${
                isInCart
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{isRtl ? `في الطلب (${quantity})` : `In Request (${quantity})`}</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isRtl ? `إضافة ${quantity} كرتون` : `Add ${quantity} Cartons`}</span>
                </>
              )}
            </button>

          </div>

          <div className="text-[10px] text-slate-500 dark:text-slate-400 text-center">
            Subtotal: <strong className={isDark ? 'text-slate-300' : 'text-slate-700'}>AED {currentTotalAED.toLocaleString()}</strong> ({quantity * product.weightKg} kg gross)
          </div>

        </div>

      </div>
    </motion.div>
  );
};
