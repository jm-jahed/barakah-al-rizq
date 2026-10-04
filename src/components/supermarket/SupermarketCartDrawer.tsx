'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Tag,
  Check,
  Sparkles,
  Truck,
  ArrowLeft
} from 'lucide-react';

export default function SupermarketCartDrawer() {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    lastAddedItem,
    clearLastAddedItem,
    itemCount,
    subtotal,
    deliveryFee,
    discountSavings,
    promoDiscount,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    finalTotal,
    freeDeliveryThreshold,
    amountNeededForFreeDelivery,
    setIsCheckoutOpen
  } = useSupermarketCart();

  const [inputCode, setInputCode] = useState('');
  const [promoError, setPromoError] = useState(false);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to newly added item when cart opens
  useEffect(() => {
    if (isCartOpen && lastAddedItem && itemsContainerRef.current) {
      const addedEl = itemsContainerRef.current.querySelector(`[data-product-id="${lastAddedItem.id}"]`);
      if (addedEl) {
        addedEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [isCartOpen, lastAddedItem]);

  if (!isCartOpen) return null;

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const success = applyPromoCode(inputCode);
    if (!success) {
      setPromoError(true);
      setTimeout(() => setPromoError(false), 2500);
    } else {
      setInputCode('');
    }
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const deliveryProgressPercent = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-md bg-white dark:bg-zinc-950 h-full flex flex-col justify-between shadow-2xl border-s border-zinc-200 dark:border-zinc-800 animate-in slide-in-from-right duration-300 ${
          isRtl ? 'font-arabic slide-in-from-left' : 'font-sans'
        }`}
      >
        
        {/* Top Header */}
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-zinc-950 dark:text-white leading-tight">
                {t('cart')} ({itemCount})
              </h3>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                {isRtl ? 'سلة التسوق المباشرة' : 'Live Supermarket Basket'}
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-200/70 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-bold transition-all"
          >
            <span>{isRtl ? 'إغلاق' : 'Close'}</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Live Feedback Banner for Recently Added Item */}
        {lastAddedItem && (
          <div className="bg-emerald-600 text-white px-4 py-2.5 flex items-center justify-between shadow-inner animate-in slide-in-from-top duration-200">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-5 h-5 rounded-full bg-white text-emerald-700 flex items-center justify-center text-xs font-black flex-shrink-0">
                ✓
              </span>
              <p className="text-xs font-bold truncate">
                <span className="text-emerald-100">{isRtl ? 'تمت الإضافة:' : 'Added:'}</span>{' '}
                {isRtl ? lastAddedItem.nameAr : lastAddedItem.nameEn} (+{lastAddedItem.quantity})
              </p>
            </div>
            <button
              onClick={clearLastAddedItem}
              className="text-emerald-200 hover:text-white text-xs p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Free Delivery Progress Bar */}
        <div className="bg-emerald-50 dark:bg-emerald-950/60 px-4 py-3 border-b border-emerald-100 dark:border-emerald-900/40">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-900 dark:text-emerald-200 mb-1.5">
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>
                {amountNeededForFreeDelivery === 0
                  ? (isRtl ? '🎉 مبروك! حصلت على توصيل سريع مجاني' : '🎉 You unlocked FREE Express Delivery!')
                  : (isRtl 
                      ? `أضف بقيمة ${amountNeededForFreeDelivery.toFixed(2)} د.إ للتوصيل المجاني`
                      : `Add AED ${amountNeededForFreeDelivery.toFixed(2)} more for FREE Delivery`)}
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-white dark:bg-emerald-900/80 px-2 py-0.5 rounded-full border border-emerald-300/40">
              AED {subtotal.toFixed(2)} / {freeDeliveryThreshold}
            </span>
          </div>
          <div className="w-full h-2 bg-emerald-200/60 dark:bg-emerald-900 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                amountNeededForFreeDelivery === 0 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-400 animate-pulse' 
                  : 'bg-emerald-600'
              }`}
              style={{ width: `${deliveryProgressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List or Empty State */}
        <div ref={itemsContainerRef} className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-800">
          {cart.length > 0 ? (
            cart.map(({ product, quantity }) => {
              const isRecentlyAdded = lastAddedItem?.id === product.id;

              return (
                <div
                  key={product.id}
                  data-product-id={product.id}
                  className={`relative flex items-center justify-between gap-3 p-3 rounded-2xl transition-all duration-300 ${
                    isRecentlyAdded
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/50 border-2 border-emerald-500 shadow-md shadow-emerald-500/10'
                      : 'bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300'
                  }`}
                >
                  {/* Just Added Tag */}
                  {isRecentlyAdded && (
                    <span className="absolute -top-2.5 right-3 bg-emerald-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>{isRtl ? 'مضاف حديثاً' : 'Updated'}</span>
                    </span>
                  )}

                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.nameEn}
                    className="w-14 h-14 rounded-xl object-cover flex-shrink-0 bg-white dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                      {isRtl ? product.nameAr : product.nameEn}
                    </h4>
                    <div className="text-[11px] text-zinc-400 font-medium">
                      {product.unit} • <span className="font-semibold text-zinc-700 dark:text-zinc-300">AED {product.price.toFixed(2)}</span>
                    </div>
                    <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 mt-0.5">
                      AED {(product.price * quantity).toFixed(2)}
                    </div>
                  </div>

                  {/* Stepper Quantity Controls */}
                  <div className="flex items-center gap-1 bg-white dark:bg-zinc-800 p-1 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      aria-label="Decrease item quantity"
                      className="w-7 h-7 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-200 flex items-center justify-center font-bold text-xs active:scale-90 transition-transform"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center text-xs font-black text-zinc-900 dark:text-white">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      aria-label="Increase item quantity"
                      className="w-7 h-7 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-sm active:scale-90 transition-transform"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(product.id)}
                    aria-label="Remove item"
                    className="text-zinc-400 hover:text-rose-500 p-1.5 transition-colors rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-3 text-zinc-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-extrabold text-sm text-zinc-900 dark:text-white mb-1">
                {t('cartEmpty')}
              </h4>
              <p className="text-xs text-zinc-500 mb-4 max-w-xs mx-auto">
                {t('cartEmptyDesc')}
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow transition-all active:scale-95"
              >
                {isRtl ? 'تصفح 2,530+ منتج الآن' : 'Browse 2,530+ Groceries'}
              </button>
            </div>
          )}
        </div>

        {/* Footer: Promo Code & Summary & Checkout Actions */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-900/90 backdrop-blur-sm space-y-3">
            
            {/* Promo Code Form */}
            {!appliedPromo ? (
              <form onSubmit={handleApplyCode} className="flex gap-2">
                <input
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  placeholder={t('promoPlaceholder')}
                  className="flex-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-xs font-semibold text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 uppercase"
                />
                <button
                  type="submit"
                  className="bg-zinc-900 dark:bg-zinc-800 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors shadow-sm"
                >
                  {t('apply')}
                </button>
              </form>
            ) : (
              <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 p-2.5 rounded-xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-bold">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{t('promoApplied')}</span>
                </div>
                <button
                  onClick={removePromoCode}
                  className="text-rose-600 hover:underline font-bold text-[11px]"
                >
                  {isRtl ? 'إلغاء' : 'Remove'}
                </button>
              </div>
            )}

            {promoError && (
              <p className="text-[11px] text-rose-500 font-bold">
                {isRtl ? 'كود غير صالح. جرب كود MIRQAB10' : 'Invalid code. Try MIRQAB10 for 10% off.'}
              </p>
            )}

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>{t('subtotal')}</span>
                <span className="font-bold text-zinc-900 dark:text-white">AED {subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>{t('deliveryFee')}</span>
                <span className="font-bold">
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-600 uppercase font-black">{t('free')}</span>
                  ) : (
                    `AED ${deliveryFee.toFixed(2)}`
                  )}
                </span>
              </div>

              {discountSavings > 0 && (
                <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-bold">
                  <span>{t('discount')}</span>
                  <span>- AED {discountSavings.toFixed(2)}</span>
                </div>
              )}

              {appliedPromo && (
                <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-bold">
                  <span>{isRtl ? 'خصم الكوبون (10%)' : 'Coupon Discount (10%)'}</span>
                  <span>- AED {promoDiscount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-sm font-black text-zinc-950 dark:text-white pt-2 border-t border-zinc-200 dark:border-zinc-800">
                <span>{t('total')}</span>
                <span className="text-base text-emerald-600 dark:text-emerald-400">
                  AED {finalTotal.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Buttons: Continue Shopping & Checkout */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleProceedCheckout}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>{t('checkout')} • AED {finalTotal.toFixed(2)}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-2.5 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-bold text-xs rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center gap-1.5 transition-all"
              >
                <ArrowLeft className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                <span>{isRtl ? 'متابعة التسوق (2,530+ صنف)' : 'Continue Shopping (2,530+ Items)'}</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

