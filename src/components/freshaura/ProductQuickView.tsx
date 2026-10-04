'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Star, CheckCircle2, MessageCircle, Truck, Leaf, MapPin, Thermometer } from 'lucide-react';
import { ProduceProduct, FRESHAURA_BRAND } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

interface ProductQuickViewProps {
  product: ProduceProduct | null;
  onClose: () => void;
  onAddToCart: (p: ProduceProduct, qty: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (p: ProduceProduct) => void;
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  const { t, isRtl, formatPrice, formatNumber } = useFreshauraLanguage();
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) return null;

  const name = isRtl ? product.nameAr || product.nameEn : product.nameEn;
  const origin = isRtl ? product.originAr || product.originEn : product.originEn;
  const unit = isRtl ? product.unitAr || product.unitEn : product.unitEn;
  const desc = isRtl ? product.descAr || product.descEn : product.descEn;
  const notes = isRtl ? product.freshnessNotesAr || product.freshnessNotesEn : product.freshnessNotesEn;
  const nutrition = isRtl ? product.nutritionalHighlightsAr || product.nutritionalHighlightsEn : product.nutritionalHighlightsEn;
  const badge = isRtl ? product.badgeAr || product.badgeEn : product.badgeEn;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#064E3B] border border-emerald-600/40 rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative font-sans text-stone-100 max-h-[92vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} p-2.5 rounded-xl bg-[#042F2E] border border-emerald-700 text-stone-300 hover:text-white z-10`}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Image & Badges */}
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#042F2E] border border-emerald-700/40">
              <img src={product.image} alt={name} className="w-full h-full object-cover" />
              {badge && (
                <span className={`absolute top-3 ${isRtl ? 'right-3' : 'left-3'} px-3 py-1 rounded-full bg-[#042F2E]/90 text-emerald-300 border border-emerald-500/40 font-mono text-[10px] font-bold uppercase backdrop-blur-md`}>
                  {badge}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-emerald-300 mb-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    {t('harvestOrigin')} {origin}
                  </span>
                  <div className="flex items-center gap-1 text-amber-300">
                    <Star className="w-4 h-4 fill-amber-300" />
                    <span>{formatNumber(product.rating.toFixed(1))} ({formatNumber(product.reviewsCount)})</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#FBF9F5]">{name}</h3>
                <span className="text-xs font-mono text-stone-300 block mt-1">
                  {isRtl ? `الكمية / العبوة: ${unit}` : `Pack Size / Unit: ${unit}`}
                </span>

                <div className="flex items-baseline gap-3 font-mono mt-2">
                  <span className="text-3xl font-serif font-bold text-emerald-300">
                    {formatPrice(product.priceAED)}
                  </span>
                  {product.originalPriceAED && (
                    <span className="text-sm text-stone-400 line-through">
                      {formatPrice(product.originalPriceAED)}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
                {desc}
              </p>

              {/* Storage & Freshness */}
              <div className="p-3.5 rounded-xl bg-[#042F2E] border border-emerald-600/40 space-y-1 font-mono text-xs">
                <div className="flex items-center gap-1.5 text-emerald-300 font-bold text-[10px] uppercase">
                  <Thermometer className="w-3.5 h-3.5" />
                  <span>{t('storageTemp')} {product.storageTemp}</span>
                </div>
                <p className="text-stone-300 text-[11px] leading-relaxed">{notes}</p>
              </div>

              {/* Nutrition Highlights if present */}
              {nutrition && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-700/30 text-[11px] text-stone-300">
                  <span className="font-bold text-emerald-400 block mb-0.5">{t('nutritionalHighlights')}</span>
                  <span>{nutrition}</span>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 font-mono text-xs pt-1">
                <span className="text-stone-300 uppercase text-[10px] font-bold">
                  {isRtl ? 'الكمية المطلوبة:' : 'QUANTITY:'}
                </span>
                <div className="flex items-center gap-3 bg-[#042F2E] px-3 py-1.5 rounded-xl border border-emerald-600/40">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-stone-300 font-bold hover:text-white px-1"
                  >
                    -
                  </button>
                  <span className="text-white font-bold text-sm w-4 text-center">{formatNumber(quantity)}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-stone-300 font-bold hover:text-white px-1"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 font-mono text-xs">
                <button
                  onClick={() => {
                    onAddToCart(product, quantity);
                    onClose();
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t('addToCart')} ({formatPrice(product.priceAED * quantity)})</span>
                </button>

                <a
                  href={FRESHAURA_BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3.5 px-4 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t('orderViaWhatsAppDirect')}</span>
                </a>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
