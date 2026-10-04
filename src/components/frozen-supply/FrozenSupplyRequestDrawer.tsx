'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Truck,
  Building2,
  MessageCircle,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import { SupplyRequestItem, FROZEN_BRAND } from '@/data/frozenSupplyData';
import { useFrozenSupplyTheme } from '@/context/FrozenSupplyThemeContext';
import { useFrozenSupplyLanguage } from '@/context/FrozenSupplyLanguageContext';

interface FrozenSupplyRequestDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: SupplyRequestItem[];
  onUpdateQuantity: (productId: string, newQty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const FrozenSupplyRequestDrawer: React.FC<FrozenSupplyRequestDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const { isDark } = useFrozenSupplyTheme();
  const { isRtl, t } = useFrozenSupplyLanguage();

  const [emirate, setEmirate] = useState('Dubai');
  const [businessType, setBusinessType] = useState('Hotel & Fine Dining (HORECA)');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRequestId, setSubmittedRequestId] = useState('');

  if (!isOpen) return null;

  // Total Calculations
  const rawSubtotal = cartItems.reduce((sum, item) => {
    return sum + item.selectedTierPrice * item.quantity;
  }, 0);

  const totalGrossWeightKg = cartItems.reduce((sum, item) => {
    return sum + item.product.weightKg * item.quantity;
  }, 0);

  const totalCartonCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const estimatedPallets = (totalCartonCount / 80).toFixed(1); // standard 80 cartons/pallet

  // Tiered volume bonus
  const volumeDiscountPercent = totalCartonCount >= 50 ? 6 : totalCartonCount >= 25 ? 3 : 0;
  const volumeDiscountAED = Math.round((rawSubtotal * volumeDiscountPercent) / 100);
  const finalTotalAED = rawSubtotal - volumeDiscountAED;

  // Free delivery threshold progress
  const freeThreshold = FROZEN_BRAND.freeDeliveryThresholdAed;
  const freeDeliveryProgress = Math.min(100, Math.round((finalTotalAED / freeThreshold) * 100));

  const handleSubmitRequest = (channel: 'whatsapp' | 'email') => {
    const reqId = `FS-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRequestId(reqId);

    const itemsSummary = cartItems
      .map((item, idx) => `${idx + 1}. ${item.product.name} (${item.product.sku}) — ${item.quantity} Cartons @ AED ${item.selectedTierPrice}/ctn = AED ${(item.selectedTierPrice * item.quantity).toLocaleString()}`)
      .join('\n');

    const message = `*FROZEN SUPPLY CO. — B2B COMMERCIAL QUOTE REQUEST*
*Request ID:* ${reqId}
*Business Entity:* ${companyName || 'Corporate Client'} (${businessType})
*Contact Person:* ${contactName || 'Procurement Manager'}
*Contact Phone:* ${phone || '+971 50 XXXXXXX'}
*Delivery Location:* ${emirate}, UAE
*Estimated Delivery Window:* ${deliveryDate || 'Next Scheduled Run'}

*ORDERED COMMERCIAL ITEMS:*
${itemsSummary}

---------------------------
*Total Cartons:* ${totalCartonCount} Cartons
*Total Gross Weight:* ~${totalGrossWeightKg.toFixed(1)} kg (~${estimatedPallets} Pallets)
*Total Quotation Value:* AED ${finalTotalAED.toLocaleString()}
*Special Notes:* ${notes || 'Standard -18°C temperature dock delivery'}

Please review stock allocation and provide official pro-forma invoice with reefer schedule.`;

    if (channel === 'whatsapp') {
      window.open(`https://wa.me/971508827400?text=${encodeURIComponent(message)}`, '_blank');
    }

    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Drawer Panel */}
        <div className={`fixed inset-y-0 ${isRtl ? 'left-0 pr-10' : 'right-0 pl-10'} max-w-full flex`}>
          <motion.div
            initial={{ x: isRtl ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`w-screen max-w-2xl border-l shadow-2xl flex flex-col font-sans ${
              isDark 
                ? 'bg-[#080E1A] border-cyan-900/50 text-white' 
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            {/* Header */}
            <div className={`px-6 py-5 border-b flex items-center justify-between ${
              isDark ? 'bg-[#050B14] border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                  isDark 
                    ? 'bg-cyan-950 border-cyan-500/40 text-cyan-400' 
                    : 'bg-cyan-100 border-cyan-300 text-cyan-700'
                }`}>
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {t('drawerTitle')}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {cartItems.length} {isRtl ? 'أصناف' : 'Product Line(s)'} • {totalCartonCount} {t('cartons')}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {cartItems.length > 0 && (
                  <button
                    onClick={onClearCart}
                    className="text-xs font-mono text-rose-500 hover:text-rose-600 underline"
                  >
                    {isRtl ? 'تفريغ الكل' : 'Clear All'}
                  </button>
                )}
                <button
                  onClick={onClose}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Body */}
            {isSubmitted ? (
              <div className="p-8 text-center space-y-6 flex-1 flex flex-col justify-center items-center font-mono">
                <div className="w-16 h-16 rounded-2xl bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider block">
                    {isRtl ? 'تم إرسال طلب التوريد بنجاح' : 'Supply RFP Successfully Generated'}
                  </span>
                  <h3 className={`text-2xl font-bold font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Request ID: {submittedRequestId}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md font-sans">
                    {isRtl 
                      ? 'تم استلام بيان طلب التوريد في مركز دبي للعمليات اللوجستية. سيقوم مسؤول التوريد بتأكيد حجز الشحنة وجدول التوصيل خلال 15 دقيقة.'
                      : 'Our cold-chain logistics desk at Dubai Industrial City has received your quotation manifest. A dedicated procurement officer will confirm lot reservations and delivery slots within 15 minutes.'}
                  </p>
                </div>

                <div className={`p-4 rounded-xl border text-left w-full space-y-2 text-xs ${
                  isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex justify-between text-slate-500 dark:text-slate-300">
                    <span>Target Destination:</span>
                    <strong className={isDark ? 'text-white' : 'text-slate-900'}>{emirate}, UAE</strong>
                  </div>
                  <div className="flex justify-between text-slate-500 dark:text-slate-300">
                    <span>Total Estimated Payload:</span>
                    <strong className="text-cyan-600 dark:text-cyan-300">~{totalGrossWeightKg.toFixed(1)} kg ({estimatedPallets} Pallets)</strong>
                  </div>
                  <div className={`flex justify-between text-slate-500 dark:text-slate-300 border-t pt-2 ${
                    isDark ? 'border-slate-800' : 'border-slate-200'
                  }`}>
                    <span>Commercial Value:</span>
                    <strong className="text-emerald-600 dark:text-emerald-400 font-bold">AED {finalTotalAED.toLocaleString()}</strong>
                  </div>
                </div>

                <div className="flex gap-3 w-full">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      onClearCart();
                      onClose();
                    }}
                    className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-bold text-xs"
                  >
                    {isRtl ? 'تم • العودة للكتالوج' : 'Done & Return to Catalog'}
                  </button>
                </div>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="p-10 text-center space-y-4 flex-1 flex flex-col justify-center items-center font-mono">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  isDark ? 'bg-slate-900 text-slate-600' : 'bg-slate-100 text-slate-400'
                }`}>
                  <ShoppingCart className="w-7 h-7" />
                </div>
                <h4 className={`text-base font-bold font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {t('emptyDrawer')}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm font-sans">
                  {t('emptyDrawerDesc')}
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-bold text-xs"
                >
                  {t('heroExploreCatalog')}
                </button>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {/* Free Delivery Meter */}
                <div className={`p-4 rounded-2xl border space-y-2 font-mono text-xs ${
                  isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      Free UAE Reefer Delivery Threshold
                    </span>
                    <span className="font-bold text-cyan-600 dark:text-cyan-300">
                      {finalTotalAED >= freeThreshold
                        ? '✓ UNLOCKED (FREE DELIVERY)'
                        : `AED ${(freeThreshold - finalTotalAED).toLocaleString()} Away`}
                    </span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${
                    isDark ? 'bg-slate-800' : 'bg-slate-200'
                  }`}>
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
                      style={{ width: `${freeDeliveryProgress}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 block">
                    Orders over AED {freeThreshold.toLocaleString()} qualify for complimentary cold-chain dispatch across all 7 Emirates.
                  </span>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold block">
                    {isRtl ? `المنتجات المحددة (${cartItems.length}):` : `Selected Product Lines (${cartItems.length}):`}
                  </span>

                  {cartItems.map((item) => {
                    const itemTotal = item.selectedTierPrice * item.quantity;
                    const itemWeight = (item.product.weightKg * item.quantity).toFixed(1);

                    return (
                      <div
                        key={item.product.id}
                        className={`p-4 rounded-2xl border flex gap-4 items-center justify-between font-mono text-xs ${
                          isDark ? 'bg-[#0A1120] border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'
                        }`}
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-950 flex-shrink-0">
                          <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold block">{item.product.sku}</span>
                          <h4 className={`text-xs font-bold font-sans truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {isRtl && item.product.nameAr ? item.product.nameAr : item.product.name}
                          </h4>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">
                            AED {item.selectedTierPrice} / ctn • {itemWeight} kg net
                          </span>
                        </div>

                        <div className="flex items-center gap-3 flex-shrink-0">
                          {/* Stepper */}
                          <div className={`flex items-center border rounded-lg p-0.5 ${
                            isDark ? 'bg-[#050B14] border-slate-700' : 'bg-white border-slate-300'
                          }`}>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              disabled={item.quantity <= item.product.moq}
                              className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-black dark:hover:text-white disabled:opacity-30"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-bold text-cyan-600 dark:text-cyan-300 text-xs">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-black dark:hover:text-white"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-right w-20">
                            <span className="text-xs font-black text-cyan-600 dark:text-cyan-400 block">
                              AED {itemTotal.toLocaleString()}
                            </span>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="w-7 h-7 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-rose-100 dark:hover:bg-rose-950 text-slate-500 hover:text-rose-600 flex items-center justify-center"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Logistics & Business Details Form */}
                <div className={`p-5 rounded-2xl border space-y-4 font-mono text-xs ${
                  isDark ? 'bg-[#050B14] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    <span>{t('deliveryDetails')}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] text-slate-500 dark:text-slate-400 block mb-1">{t('businessName')}</label>
                      <input
                        type="text"
                        placeholder="e.g. Grand Azure Hotel & Suites"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className={`w-full border rounded-xl px-3 py-2 focus:outline-none text-xs ${
                          isDark ? 'bg-slate-900 border-slate-700 text-white focus:border-cyan-400' : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-500 dark:text-slate-400 block mb-1">Commercial Sector</label>
                      <select
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className={`w-full border rounded-xl px-3 py-2 focus:outline-none text-xs ${
                          isDark ? 'bg-slate-900 border-slate-700 text-white focus:border-cyan-400' : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500'
                        }`}
                      >
                        <option>Hotel & Fine Dining (HORECA)</option>
                        <option>Supermarket & Hypermarket Retail</option>
                        <option>Airline / Industrial Catering</option>
                        <option>Restaurant Chain / Central Kitchen</option>
                        <option>Ship Chandler & Marine Supply</option>
                        <option>Wholesale Food Distributor</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-500 dark:text-slate-400 block mb-1">{t('contactPerson')}</label>
                      <input
                        type="text"
                        placeholder="e.g. Tariq Al Mansoori"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className={`w-full border rounded-xl px-3 py-2 focus:outline-none text-xs ${
                          isDark ? 'bg-slate-900 border-slate-700 text-white focus:border-cyan-400' : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-500 dark:text-slate-400 block mb-1">{t('phoneLabel')}</label>
                      <input
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full border rounded-xl px-3 py-2 focus:outline-none text-xs ${
                          isDark ? 'bg-slate-900 border-slate-700 text-white focus:border-cyan-400' : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-500 dark:text-slate-400 block mb-1">{t('emirateLabel')}</label>
                      <select
                        value={emirate}
                        onChange={(e) => setEmirate(e.target.value)}
                        className={`w-full border rounded-xl px-3 py-2 focus:outline-none text-xs ${
                          isDark ? 'bg-slate-900 border-slate-700 text-white focus:border-cyan-400' : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500'
                        }`}
                      >
                        <option>Dubai (Next-Day Morning Run)</option>
                        <option>Abu Dhabi & Al Ain (48h Schedule)</option>
                        <option>Sharjah & Ajman (Daily Run)</option>
                        <option>Ras Al Khaimah (RAK)</option>
                        <option>Fujairah (East Coast Hub)</option>
                        <option>Umm Al Quwain</option>
                        <option>JAFZA Freezone Cross-Border Export (GCC)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-500 dark:text-slate-400 block mb-1">{t('deliverySlotLabel')}</label>
                      <input
                        type="text"
                        placeholder="e.g. Tomorrow 08:00 AM"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        className={`w-full border rounded-xl px-3 py-2 focus:outline-none text-xs ${
                          isDark ? 'bg-slate-900 border-slate-700 text-white focus:border-cyan-400' : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Summary & Price Breakdown */}
                <div className={`p-5 rounded-2xl border space-y-2 font-mono text-xs ${
                  isDark ? 'bg-[#0A1120] border-cyan-900/40' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>{t('subtotalAed')}</span>
                    <span className={isDark ? 'text-white' : 'text-slate-900'}>AED {rawSubtotal.toLocaleString()}</span>
                  </div>

                  {volumeDiscountPercent > 0 && (
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                      <span>Volume Discount ({volumeDiscountPercent}% on {totalCartonCount}+ ctns):</span>
                      <span>-AED {volumeDiscountAED.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>{t('estWeight')}</span>
                    <span className="text-cyan-600 dark:text-cyan-300">~{totalGrossWeightKg.toFixed(1)} kg (~{estimatedPallets} Pallets)</span>
                  </div>

                  <div className="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>{t('deliveryFee')}</span>
                    <span className={finalTotalAED >= freeThreshold ? 'text-emerald-600 dark:text-emerald-400 font-bold' : isDark ? 'text-slate-300' : 'text-slate-700'}>
                      {finalTotalAED >= freeThreshold ? (isRtl ? 'مجاناً (تم بلوغ الحد)' : 'FREE COMPLIMENTARY') : 'AED 250 (Standard)'}
                    </span>
                  </div>

                  <div className={`pt-3 border-t flex justify-between items-baseline ${
                    isDark ? 'border-slate-800' : 'border-slate-200'
                  }`}>
                    <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t('estimatedTotal')}</span>
                    <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400">
                      AED {finalTotalAED.toLocaleString()}
                    </span>
                  </div>
                </div>

              </div>
            )}

            {/* Footer Action Bar */}
            {!isSubmitted && cartItems.length > 0 && (
              <div className={`p-6 border-t space-y-3 font-mono ${
                isDark ? 'bg-[#050B14] border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => handleSubmitRequest('whatsapp')}
                    className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isRtl ? 'طلب فوري عبر واتساب' : 'Send WhatsApp RFP (Instant)'}</span>
                  </button>

                  <button
                    onClick={() => handleSubmitRequest('email')}
                    className="py-3.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>{t('submitRfqBtn')}</span>
                  </button>
                </div>
                <p className="text-[10px] text-slate-500 text-center font-mono">
                  {t('footerDisclaimer')}
                </p>
              </div>
            )}

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
