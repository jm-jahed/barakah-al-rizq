'use client';

import React, { useState } from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart, SupermarketOrder } from '../../context/SupermarketCartContext';
import { UAE_ZONES } from '../../data/supermarketData';
import {
  X,
  CheckCircle2,
  Truck,
  CreditCard,
  Clock,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  ShoppingBag
} from 'lucide-react';

export default function SupermarketCheckoutModal() {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const {
    cart,
    isCheckoutOpen,
    setIsCheckoutOpen,
    itemCount,
    subtotal,
    deliveryFee,
    discountSavings,
    promoDiscount,
    finalTotal,
    placeCurrentOrder
  } = useSupermarketCart();

  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Form State
  const [fullName, setFullName] = useState('Sultan Al Mansoori');
  const [phone, setPhone] = useState('+971 50 892 4110');
  const [emirate, setEmirate] = useState(UAE_ZONES[0].nameEn);
  const [street, setStreet] = useState('Villa 14, Al Safa 2, Jumeirah');
  const [slot, setSlot] = useState<'express' | 'morning' | 'evening'>('express');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'applepay' | 'cod' | 'tabby'>('card');
  const [confirmedOrder, setConfirmedOrder] = useState<SupermarketOrder | null>(null);

  if (!isCheckoutOpen) return null;

  const handleNext = () => {
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) setStep(4);
    else if (step === 4) {
      // Place order
      const order = placeCurrentOrder({
        fullName,
        phone,
        emirate,
        street,
        slot: slot === 'express' ? 'Express 60-min' : slot === 'morning' ? 'Morning 9-12' : 'Evening 5-9',
        paymentMethod: paymentMethod === 'card' ? 'Credit Card' : paymentMethod === 'applepay' ? 'Apple Pay' : paymentMethod === 'cod' ? 'Cash on Delivery' : 'Tabby'
      });
      setConfirmedOrder(order);
      setStep(5);
    }
  };

  const handleBack = () => {
    if (step > 1 && step <= 4) setStep((s) => (s - 1) as typeof step);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep(1);
    setConfirmedOrder(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/70 dark:bg-zinc-950/70">
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-zinc-950 dark:text-white">
              {step === 5 ? (isRtl ? 'تم تأكيد طلبك' : 'Order Placed') : t('checkoutTitle')}
            </h3>
            {step <= 4 && (
              <p className="text-xs text-zinc-400">
                {isRtl ? `الخطوة ${step} من 4` : `Step ${step} of 4`}
              </p>
            )}
          </div>

          <button
            onClick={handleClose}
            aria-label="Close checkout"
            className="p-2 rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-Step Body */}
        <div className="p-5 sm:p-6">
          
          {/* STEP 1: UAE Delivery Address */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>{t('step1')}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 block mb-1">
                    {t('fullName')}
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2.5 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 block mb-1">
                    {t('phone')}
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2.5 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 block mb-1">
                  {t('emirate')}
                </label>
                <select
                  value={emirate}
                  onChange={(e) => setEmirate(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2.5 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500"
                >
                  {UAE_ZONES.map((z) => (
                    <option key={z.id} value={isRtl ? z.nameAr : z.nameEn}>
                      {isRtl ? z.nameAr : z.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 block mb-1">
                  {t('street')}
                </label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2.5 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          )}

          {/* STEP 2: Delivery Slot */}
          {step === 2 && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>{t('step2')}</span>
              </h4>

              <div
                onClick={() => setSlot('express')}
                className={`p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                  slot === 'express'
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-200'
                    : 'bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700'
                }`}
              >
                <div>
                  <div className="text-xs font-black">{t('timeSlotExpress')}</div>
                  <div className="text-[11px] text-zinc-500">
                    {isRtl ? 'سيارات مجهزة بالتبريد تنطلق فوراً إليك' : 'Immediate chilled temperature-controlled dispatch'}
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${slot === 'express' ? 'border-emerald-600 bg-emerald-600' : 'border-zinc-400'}`}>
                  {slot === 'express' && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>

              <div
                onClick={() => setSlot('morning')}
                className={`p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                  slot === 'morning'
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-200'
                    : 'bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700'
                }`}
              >
                <div>
                  <div className="text-xs font-black">{t('timeSlotMorning')}</div>
                  <div className="text-[11px] text-zinc-500">
                    {isRtl ? 'مثالي لاستلام بقالة الإفطار ومستلزمات الغداء' : 'Perfect for morning kitchen preparation'}
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${slot === 'morning' ? 'border-emerald-600 bg-emerald-600' : 'border-zinc-400'}`}>
                  {slot === 'morning' && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>

              <div
                onClick={() => setSlot('evening')}
                className={`p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                  slot === 'evening'
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-200'
                    : 'bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700'
                }`}
              >
                <div>
                  <div className="text-xs font-black">{t('timeSlotEvening')}</div>
                  <div className="text-[11px] text-zinc-500">
                    {isRtl ? 'توصيل مريح بعد انتهاء ساعات العمل' : 'Convenient delivery after office hours'}
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${slot === 'evening' ? 'border-emerald-600 bg-emerald-600' : 'border-zinc-400'}`}>
                  {slot === 'evening' && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Payment Method */}
          {step === 3 && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-emerald-600" />
                <span>{t('step3')}</span>
              </h4>

              {[
                { id: 'card', label: t('payCard'), note: isRtl ? 'حماية مشفرة 256-bit آمنة' : 'Encrypted & 3D-Secure 2.0 verified' },
                { id: 'applepay', label: t('payApplePay'), note: isRtl ? 'دفع سريع بلمسة واحدة' : 'Instant 1-touch biometric pay' },
                { id: 'cod', label: t('payCod'), note: isRtl ? 'ادفع للسائق نقداً أو بالبطاقة عند الاستلام' : 'Pay via Cash or Card on Doorstep' },
                { id: 'tabby', label: t('payTabby'), note: isRtl ? `4 دفعات بقيمة AED ${(finalTotal / 4).toFixed(2)} شهرياً بدون فوائد` : `4 monthly installments of AED ${(finalTotal / 4).toFixed(2)}` },
              ].map((p) => (
                <div
                  key={p.id}
                  onClick={() => setPaymentMethod(p.id as typeof paymentMethod)}
                  className={`p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                    paymentMethod === p.id
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500'
                      : 'bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-white">{p.label}</div>
                    <div className="text-[11px] text-zinc-500">{p.note}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === p.id ? 'border-emerald-600 bg-emerald-600' : 'border-zinc-400'}`}>
                    {paymentMethod === p.id && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 4: Order Review & Confirmation */}
          {step === 4 && (
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t('step4')}</span>
              </h4>

              {/* Delivery info summary */}
              <div className="bg-zinc-50 dark:bg-zinc-800/70 p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-700 text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-zinc-500">{t('fullName')}:</span>
                  <span className="font-bold text-zinc-900 dark:text-white">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">{t('phone')}:</span>
                  <span className="font-bold text-zinc-900 dark:text-white">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">{t('street')}:</span>
                  <span className="font-bold text-zinc-900 dark:text-white">{street}, {emirate}</span>
                </div>
              </div>

              {/* Items summary */}
              <div className="bg-zinc-50 dark:bg-zinc-800/70 p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-700 max-h-32 overflow-y-auto space-y-2">
                {cart.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between text-xs">
                    <span className="text-zinc-700 dark:text-zinc-300 truncate max-w-[70%]">
                      {quantity}x {isRtl ? product.nameAr : product.nameEn}
                    </span>
                    <span className="font-bold text-zinc-900 dark:text-white">
                      AED {(product.price * quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Cost Summary */}
              <div className="space-y-1 text-xs pt-2 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between text-zinc-500">
                  <span>{t('subtotal')}:</span>
                  <span className="font-bold text-zinc-900 dark:text-white">AED {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-500">
                  <span>{t('deliveryFee')}:</span>
                  <span className="font-bold text-emerald-600">{deliveryFee === 0 ? t('free') : `AED ${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-base font-black text-zinc-950 dark:text-white pt-1">
                  <span>{t('total')}:</span>
                  <span className="text-emerald-600 dark:text-emerald-400">AED {finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Order Confirmed Success Screen */}
          {step === 5 && confirmedOrder && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-zinc-950 dark:text-white">
                {t('orderConfirmed')}
              </h3>
              <p className="text-xs text-zinc-500 max-w-md mx-auto leading-relaxed">
                {t('orderPlacedText')}
              </p>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 max-w-sm mx-auto text-xs text-start space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-500">{t('orderNumber')}</span>
                  <span className="font-mono font-black text-emerald-600">{confirmedOrder.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">{t('estimatedTime')}</span>
                  <span className="font-bold text-zinc-900 dark:text-white">45-60 Mins (Express Chilled)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">{t('total')}</span>
                  <span className="font-black text-emerald-600">AED {confirmedOrder.total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl shadow transition-all"
              >
                {isRtl ? 'العودة للتسوق' : 'Continue Shopping'}
              </button>
            </div>
          )}

          {/* Navigation Controls */}
          {step <= 4 && (
            <div className="flex items-center justify-between pt-6 border-t border-zinc-200 dark:border-zinc-800 mt-4">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white py-2 px-3 rounded-xl"
                >
                  <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  <span>{isRtl ? 'رجوع' : 'Back'}</span>
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={handleNext}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black px-6 py-3 rounded-xl shadow-lg transition-all active:scale-95"
              >
                <span>{step === 4 ? t('placeOrder') : (isRtl ? 'التالي' : 'Next Step')}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
