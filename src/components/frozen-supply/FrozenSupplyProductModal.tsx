'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Snowflake,
  ShieldCheck,
  Truck,
  Plus,
  Minus,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { FrozenProduct } from '@/data/frozenSupplyData';
import { useFrozenSupplyTheme } from '@/context/FrozenSupplyThemeContext';
import { useFrozenSupplyLanguage } from '@/context/FrozenSupplyLanguageContext';

interface FrozenSupplyProductModalProps {
  product: FrozenProduct | null;
  onClose: () => void;
  onAddToCart: (product: FrozenProduct, quantity: number) => void;
}

export const FrozenSupplyProductModal: React.FC<FrozenSupplyProductModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const { isDark } = useFrozenSupplyTheme();
  const { isRtl, t } = useFrozenSupplyLanguage();

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [quantity, setQuantity] = useState<number>(product?.moq || 5);
  const [activeTab, setActiveTab] = useState<'specs' | 'tiers' | 'handling'>('specs');
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);

  if (!product) return null;

  // Active Tier
  const activeTier = [...product.tierPricing]
    .reverse()
    .find(tier => quantity >= tier.minQuantity) || product.tierPricing[0];

  const currentPrice = activeTier ? activeTier.priceAED : product.priceAED;
  const totalAmountAED = currentPrice * quantity;
  const totalWeightKg = (product.weightKg * quantity).toFixed(1);
  const palletFraction = (quantity / 80).toFixed(2); // 80 cartons/pallet standard

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setIsAddedSuccess(true);
    setTimeout(() => {
      setIsAddedSuccess(false);
      onClose();
    }, 900);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Frozen Supply Co., I am inquiring about wholesale pricing for:\nProduct: ${product.name} (${product.sku})\nQuantity: ${quantity} Cartons (~${totalWeightKg} kg)\nEstimated Value: AED ${totalAmountAED}\nPlease provide official B2B commercial quote and delivery schedule.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        
        {/* Modal Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative w-full max-w-4xl border rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col font-sans ${
            isDark 
              ? 'bg-[#0A1120] border-cyan-900/50 text-white' 
              : 'bg-white border-slate-200 text-slate-900 shadow-slate-400/40'
          }`}
        >
          {/* Header Bar */}
          <div className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? 'bg-[#050B14] border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded border font-mono text-xs font-bold ${
                isDark 
                  ? 'bg-cyan-950 border-cyan-500/40 text-cyan-300' 
                  : 'bg-cyan-50 border-cyan-300 text-cyan-800'
              }`}>
                {product.sku}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                {product.category} • {product.subcategory}
              </span>
            </div>

            <button
              onClick={onClose}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                isDark 
                  ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Scroll Area */}
          <div className="p-6 overflow-y-auto space-y-8 flex-1">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Image Gallery (5 cols) */}
              <div className="md:col-span-5 space-y-3">
                <div className={`relative h-72 rounded-2xl overflow-hidden bg-slate-900 border ${
                  isDark ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <img
                    src={product.gallery[activeImageIdx] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                    <Snowflake className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{product.storageTemp}</span>
                  </div>
                </div>

                {/* Thumbnails */}
                {product.gallery.length > 1 && (
                  <div className="flex gap-2">
                    {product.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImageIdx(i)}
                        className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                          i === activeImageIdx 
                            ? 'border-cyan-500 scale-105' 
                            : isDark ? 'border-slate-800 opacity-60 hover:opacity-100' : 'border-slate-200 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Certifications Box */}
                <div className={`p-3.5 rounded-xl border space-y-1.5 font-mono text-xs ${
                  isDark ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {t('certificationsTitle')}:
                  </div>
                  {product.certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs">
                      <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content & Options (7 cols) */}
              <div className="md:col-span-7 space-y-5">
                
                <div>
                  <h2 className={`text-2xl font-bold tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {isRtl && product.nameAr ? product.nameAr : product.name}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                    Brand: <strong className={isDark ? 'text-slate-200' : 'text-slate-800'}>{product.brand}</strong> • Origin: <strong className="text-cyan-600 dark:text-cyan-300">{product.origin}</strong>
                  </p>
                </div>

                {/* Price Display */}
                <div className={`p-4 rounded-2xl border flex items-center justify-between font-mono ${
                  isDark
                    ? 'bg-gradient-to-r from-slate-900 to-cyan-950/40 border-cyan-500/20'
                    : 'bg-gradient-to-r from-slate-50 to-cyan-50/60 border-cyan-200'
                }`}>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">{t('cartonPrice')}</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400">
                        AED {currentPrice}
                      </span>
                      {product.originalPriceAED && (
                        <span className="text-sm line-through text-slate-400 dark:text-slate-600">
                          AED {product.originalPriceAED}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">{t('pricePerKg')}</span>
                    <span className={`text-sm font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      ~AED {product.pricePerKgAED} / kg
                    </span>
                  </div>
                </div>

                {/* Tabs */}
                <div className={`border-b flex gap-4 text-xs font-mono ${
                  isDark ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-2 border-b-2 font-bold transition-colors ${
                      activeTab === 'specs' 
                        ? 'border-cyan-500 text-cyan-600 dark:text-cyan-300' 
                        : 'border-transparent text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white'
                    }`}
                  >
                    {t('productSpecs')}
                  </button>
                  <button
                    onClick={() => setActiveTab('tiers')}
                    className={`pb-2 border-b-2 font-bold transition-colors ${
                      activeTab === 'tiers' 
                        ? 'border-cyan-500 text-cyan-600 dark:text-cyan-300' 
                        : 'border-transparent text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white'
                    }`}
                  >
                    {t('tierPricingTitle')}
                  </button>
                  <button
                    onClick={() => setActiveTab('handling')}
                    className={`pb-2 border-b-2 font-bold transition-colors ${
                      activeTab === 'handling' 
                        ? 'border-cyan-500 text-cyan-600 dark:text-cyan-300' 
                        : 'border-transparent text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white'
                    }`}
                  >
                    {t('coldChainSpecs')}
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'specs' && (
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {Object.entries(product.specifications).map(([k, v]) => (
                      <div key={k} className={`p-2 rounded border ${
                        isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase">{k}</span>
                        <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{v}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'tiers' && (
                  <div className="space-y-2 font-mono text-xs">
                    {product.tierPricing.map((tier, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border flex items-center justify-between transition-colors ${
                          quantity >= tier.minQuantity
                            ? isDark
                              ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300'
                              : 'bg-cyan-50 border-cyan-300 text-cyan-900'
                            : isDark
                              ? 'bg-slate-900 border-slate-800 text-slate-400'
                              : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        <div>
                          <span className={`font-bold block ${isDark ? 'text-white' : 'text-slate-900'}`}>{tier.label}</span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">Min: {tier.minQuantity} {t('cartons')}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-black text-cyan-600 dark:text-cyan-400">AED {tier.priceAED}</span>
                          {tier.discountPercent > 0 && (
                            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block font-bold">-{tier.discountPercent}% OFF</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'handling' && (
                  <div className={`space-y-3 text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <p>{isRtl && product.descriptionAr ? product.descriptionAr : product.description}</p>
                    <div className={`p-3 rounded-xl border space-y-1.5 ${
                      isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                        <Truck className="w-4 h-4" />
                        <span>Logistics & Delivery Guarantee:</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        Dispatched in sealed Euro-6 reefer vehicles at {product.storageTemp}. Temperature printout slip provided upon delivery to all Dubai, Abu Dhabi, and Northern Emirates locations.
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Quantity Stepper & Commercial Quote Footer */}
            <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono ${
              isDark 
                ? 'bg-[#050B14] border-cyan-500/30' 
                : 'bg-slate-50 border-slate-300'
            }`}>
              
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <span className="text-xs text-slate-500 dark:text-slate-400">{t('itemQty')}</span>
                <div className={`flex items-center border rounded-xl p-1 ${
                  isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-300'
                }`}>
                  <button
                    onClick={() => quantity > product.moq && setQuantity(quantity - 1)}
                    disabled={quantity <= product.moq}
                    className="w-8 h-8 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-black dark:hover:text-white disabled:opacity-30"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-bold text-cyan-600 dark:text-cyan-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-black dark:hover:text-white"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 hidden md:block">
                  <span>~{totalWeightKg} kg Gross</span> • <span>~{palletFraction} Pallet</span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <a
                  href={`https://wa.me/971508827400?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-3 rounded-xl border text-xs font-bold flex items-center gap-2 transition-colors ${
                    isDark
                      ? 'bg-emerald-950 hover:bg-emerald-900 border-emerald-500/40 text-emerald-300'
                      : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-800'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp RFP</span>
                </a>

                <button
                  onClick={handleAdd}
                  disabled={isAddedSuccess}
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20 hover:scale-105"
                >
                  {isAddedSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-slate-950" />
                      <span>{t('addedToQuote')}</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>{isRtl ? `إضافة ${quantity} كرتون` : `Add ${quantity} Cartons`} (AED {totalAmountAED.toLocaleString()})</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
