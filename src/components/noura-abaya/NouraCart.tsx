'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, MessageCircle, Tag, Sparkles } from 'lucide-react';
import { NouraProduct, NOURA_BRAND } from '@/data/nouraAbayaData';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

export interface NouraCartItem {
  id: string;
  product: NouraProduct;
  size: string;
  color: string;
  quantity: number;
}

interface NouraCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: NouraCartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const NouraCart: React.FC<NouraCartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const { t, isRtl, formatPrice, translateProductName, translateColorName } = useNouraLanguage();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [emirate, setEmirate] = useState(isRtl ? 'دبي' : 'Dubai');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'tabby' | 'apple' | 'cod'>('card');
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscountAed, setAppliedDiscountAed] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const subtotalAED = cartItems.reduce(
    (sum, item) => sum + item.product.priceAED * item.quantity,
    0
  );

  const isFreeShipping = subtotalAED >= NOURA_BRAND.freeDeliveryThreshold || subtotalAED === 0;
  const deliveryFeeAED = isFreeShipping ? 0 : 25;
  const totalAED = Math.max(0, subtotalAED + deliveryFeeAED - appliedDiscountAed);

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'EID10') {
      const disc = Math.round(subtotalAED * 0.1);
      setAppliedDiscountAed(disc);
      setPromoMessage(isRtl ? `تم تطبيق خصم العيد 10% (-${formatPrice(disc)})` : `10% Eid Discount Applied (-${formatPrice(disc)})`);
    } else if (code === 'WELCOME100') {
      const disc = Math.min(100, subtotalAED);
      setAppliedDiscountAed(disc);
      setPromoMessage(isRtl ? `تم تطبيق قسيمة الترحيب الفاخرة (-${formatPrice(disc)})` : `Welcome Luxury Voucher Applied (-${formatPrice(disc)})`);
    } else if (code === 'RAMADAN2026') {
      const disc = 75;
      setAppliedDiscountAed(disc);
      setPromoMessage(isRtl ? `تم تطبيق خصم رمضان كريم (-${formatPrice(75)} + هدية شيلة)` : `Ramadan Kareem Privilege Applied (-${formatPrice(75)} + Free Gift)`);
    } else {
      setAppliedDiscountAed(0);
      setPromoMessage(isRtl ? 'كود الخصم غير صالح. جربي EID10 أو WELCOME100' : 'Invalid promo code. Try EID10 or WELCOME100');
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerName && customerPhone) {
      setIsOrderPlaced(true);
    }
  };

  const whatsappOrderMessage = encodeURIComponent(
    isRtl
      ? `مرحباً أتيليه نورة عباية دبي،\n\nأود تأكيد طلب العبايات التالية:\n` +
        cartItems.map(item => `- ${translateProductName(item.product.name)} (المقاس: ${item.size}، اللون: ${translateColorName(item.color)}، الكمية: ${item.quantity}) — ${formatPrice(item.product.priceAED * item.quantity)}`).join('\n') +
        `\n\nالإجمالي الفرعي: ${formatPrice(subtotalAED)}\nالتوصيل: ${isFreeShipping ? 'مجاني' : formatPrice(deliveryFeeAED)} (${emirate})\nالخصم: ${formatPrice(appliedDiscountAed)}\nالمبلغ الإجمالي: ${formatPrice(totalAED)}\n\nيرجى تأكيد تجهيز الطلب والتوصيل.`
      : `Hello NOURA ABAYA Atelier Concierge,\n\nI would like to place an order for the following items:\n` +
        cartItems.map(item => `- ${item.product.name} (Size: ${item.size}, Color: ${item.color}, Qty: ${item.quantity}) — ${formatPrice(item.product.priceAED * item.quantity)}`).join('\n') +
        `\n\nSubtotal: ${formatPrice(subtotalAED)}\nDelivery: ${isFreeShipping ? 'FREE' : formatPrice(deliveryFeeAED)} (${emirate})\nDiscount: ${formatPrice(appliedDiscountAed)}\nTotal Amount: ${formatPrice(totalAED)}\n\nPlease confirm order processing.`
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-10"
        />

        {/* Slide-in Cart Sheet / Drawer */}
        <motion.div
          initial={{ x: isRtl ? '-100%' : '100%' }}
          animate={{ x: 0 }}
          exit={{ x: isRtl ? '-100%' : '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className={`relative z-20 w-full sm:max-w-md bg-[#121212] ${isRtl ? 'border-r' : 'border-l'} border-stone-800 h-dvh sm:h-full flex flex-col justify-between p-4 sm:p-6 shadow-2xl font-sans text-stone-100 overflow-hidden`}
        >
          {/* Cart Header */}
          <div className="flex-shrink-0 flex items-center justify-between border-b border-stone-800 pb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#FAFAFA]">{t('cartTitle')}</h3>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-stone-400 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          {cartItems.length > 0 && (
            <div className="pt-3 pb-1">
              <div className="p-3 rounded-xl bg-[#0A0A0A] border border-stone-800 font-mono text-xs space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-stone-400">{isRtl ? 'التوصيل الفاخر في الإمارات:' : 'UAE Express Delivery:'}</span>
                  <span className={isFreeShipping ? 'text-emerald-400 font-bold' : 'text-[#C5A059] font-bold'}>
                    {isFreeShipping
                      ? (isRtl ? 'مؤهل للتوصيل المجاني' : 'FREE QUALIFIED')
                      : (isRtl ? `متبقي ${formatPrice(350 - subtotalAED)} للحصول على شحن مجاني` : `${formatPrice(350 - subtotalAED)} away from FREE`)}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-stone-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#C5A059] to-emerald-400 transition-all duration-500"
                    style={{ width: `${Math.min(100, (subtotalAED / 350) * 100)}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Cart Items Scroll Container */}
          <div className="flex-1 overflow-y-auto overscroll-contain touch-pan-y py-3 space-y-3 font-mono text-xs">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <ShoppingBag className="w-12 h-12 text-[#C5A059] mx-auto opacity-40" />
                <span className="text-stone-300 block font-serif text-lg">{t('cartEmpty')}</span>
                <p className="text-stone-400 text-xs font-sans max-w-xs mx-auto">{t('cartEmptyDesc')}</p>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-[#C5A059] text-black font-serif font-bold text-xs uppercase active:scale-95"
                >
                  {t('cartContinueShopping')}
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-[#0A0A0A] border border-stone-800 flex gap-3 items-center"
                >
                  <img
                    src={item.product.image}
                    alt={translateProductName(item.product.name)}
                    className="w-16 h-20 object-cover rounded-xl bg-black flex-shrink-0"
                  />

                  <div className="flex-1 space-y-1 min-w-0">
                    <h4 className="font-serif font-bold text-white text-xs truncate">
                      {translateProductName(item.product.name)}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] text-stone-400">
                      <span>{t('selectSize')} <strong className="text-[#C5A059]">{item.size}</strong></span>
                      <span>•</span>
                      <span className="truncate">{translateColorName(item.color)}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="font-serif font-bold text-white text-sm">
                        {formatPrice(item.product.priceAED * item.quantity)}
                      </span>

                      <div className="flex items-center gap-1.5 bg-[#121212] px-2 py-1 rounded-lg border border-stone-800">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="text-stone-400 hover:text-white p-1"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-white font-bold px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-stone-400 hover:text-white p-1"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-stone-500 hover:text-rose-400 min-w-[36px] min-h-[36px] flex items-center justify-center"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Promo Code Input */}
          {cartItems.length > 0 && (
            <div className="pt-2 border-t border-stone-800/80 font-mono text-xs">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder={isRtl ? 'كود الخصم (EID10 / WELCOME100)' : 'Promo Code (EID10 / WELCOME100)'}
                  className="flex-1 p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white text-xs uppercase focus:outline-none focus:border-[#C5A059]"
                />
                <button
                  onClick={handleApplyPromo}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#C5A059] font-bold text-xs"
                >
                  {isRtl ? 'تطبيق' : 'Apply'}
                </button>
              </div>
              {promoMessage && (
                <span className={`text-[10px] block mt-1 ${appliedDiscountAed > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {promoMessage}
                </span>
              )}
            </div>
          )}

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="flex-shrink-0 border-t border-stone-800 pt-3 space-y-3 font-mono text-xs pb-safe">
              <div className="space-y-1">
                <div className="flex justify-between text-stone-400 text-[11px]">
                  <span>{t('cartSubtotal')}</span>
                  <span>{formatPrice(subtotalAED)}</span>
                </div>
                {appliedDiscountAed > 0 && (
                  <div className="flex justify-between text-emerald-400 text-[11px]">
                    <span>{isRtl ? 'خصم الكود الترويجي:' : 'VIP Promo Discount:'}</span>
                    <span>-{formatPrice(appliedDiscountAed)}</span>
                  </div>
                )}
                <div className="flex justify-between text-stone-400 text-[11px]">
                  <span>{t('cartDelivery')} ({emirate})</span>
                  <span>{isFreeShipping ? (isRtl ? 'مجاني' : 'FREE') : formatPrice(deliveryFeeAED)}</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-stone-800">
                  <span className="text-stone-400 uppercase text-[10px]">{t('cartTotal')}</span>
                  <span className="text-2xl font-serif font-bold text-[#FAFAFA]">
                    {formatPrice(totalAED)}
                  </span>
                </div>
                
                {/* Tabby Split Notice */}
                <div className="pt-1 text-[10px] text-amber-300/80 bg-amber-950/20 p-2 rounded-lg border border-amber-500/20">
                  <span>{t('cartTabbyNotice')}: <strong>{formatPrice(Math.round(totalAED / 4))}</strong> / {isRtl ? 'شهرياً' : 'month'}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={`https://wa.me/971508889900?text=${whatsappOrderMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 flex items-center justify-center transition-all"
                  title={isRtl ? 'الطلب عبر واتساب' : 'Order via WhatsApp'}
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </a>

                <button
                  onClick={() => setIsCheckoutModalOpen(true)}
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#8C6D2D] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all"
                >
                  <span>{t('cartCheckoutBtn')}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {/* Checkout Modal */}
          {isCheckoutModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
              <div className="bg-[#121212] border border-stone-700 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative font-sans text-stone-100 max-h-[92vh] overflow-y-auto">
                <button
                  onClick={() => setIsCheckoutModalOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-[#0A0A0A] border border-stone-800 text-stone-400 min-w-[40px] min-h-[40px] flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>

                {isOrderPlaced ? (
                  <div className="text-center py-8 space-y-4 font-mono text-xs">
                    <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center mx-auto border border-[#C5A059]/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <span className="text-[#C5A059] font-bold uppercase block text-xs">
                      {isRtl ? 'تم تأكيد طلبك بنجاح' : 'ORDER CONFIRMED'}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {isRtl ? `شكراً لكِ، ${customerName}!` : `Thank you, ${customerName}!`}
                    </h3>
                    <p className="text-stone-300 font-sans text-xs">
                      {isRtl
                        ? `تم إرسال طلبك بقيمة ${formatPrice(totalAED)} إلى أتيليه التفصيل في وسط مدينة دبي لتجهيزه للتوصيل السريع إلى ${emirate}.`
                        : `Your couture order for ${formatPrice(totalAED)} has been dispatched to our Downtown Dubai tailoring atelier for express delivery to ${emirate}.`}
                    </p>
                    <button
                      onClick={() => {
                        onClearCart();
                        setIsCheckoutModalOpen(false);
                        onClose();
                      }}
                      className="w-full py-3 rounded-xl bg-[#C5A059] text-black font-serif font-bold text-xs uppercase"
                    >
                      {isRtl ? 'تم — متابعة التسوق' : 'Done — Continue Shopping'}
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-1">
                      {isRtl ? 'إتمام الطلب والدفع السريع' : 'AED Express Checkout'}
                    </h3>
                    <p className="text-xs font-mono text-stone-400 mb-4">
                      {isRtl ? 'أدخلي بيانات التوصيل لإكمال طلب العبايات الفاخرة' : 'Complete your luxury abaya order below'}
                    </p>

                    <form onSubmit={handleCheckoutSubmit} className="space-y-3 font-mono text-xs">
                      <div>
                        <label className="text-stone-400 text-[10px] block mb-1 uppercase font-bold">
                          {isRtl ? 'الاسم الكامل *' : 'FULL NAME *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder={isRtl ? 'الشيخة فاطمة آل مكتوم' : 'Sheikha Fatima Al-Maktoum'}
                          className="w-full p-3 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>

                      <div>
                        <label className="text-stone-400 text-[10px] block mb-1 uppercase font-bold">
                          {isRtl ? 'رقم الهاتف / واتساب *' : 'PHONE / WHATSAPP *'}
                        </label>
                        <input
                          type="tel"
                          required
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="+971 50 123 4567"
                          dir="ltr"
                          className="w-full p-3 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>

                      <div>
                        <label className="text-stone-400 text-[10px] block mb-1 uppercase font-bold">
                          {isRtl ? 'عنوان التوصيل' : 'DELIVERY ADDRESS'}
                        </label>
                        <input
                          type="text"
                          value={customerAddress}
                          onChange={(e) => setCustomerAddress(e.target.value)}
                          placeholder={isRtl ? 'الفيلا / الشقة، الشارع، المنطقة' : 'Villa / Apartment, Street, Community'}
                          className="w-full p-3 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>

                      <div>
                        <label className="text-stone-400 text-[10px] block mb-1 uppercase font-bold">
                          {isRtl ? 'إمارة التوصيل' : 'DELIVERY EMIRATE'}
                        </label>
                        <select
                          value={emirate}
                          onChange={(e) => setEmirate(e.target.value)}
                          className="w-full p-3 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white font-bold text-[#C5A059]"
                        >
                          <option value="Dubai">{isRtl ? 'دبي (توصيل في نفس اليوم)' : 'Dubai (Same-Day Express)'}</option>
                          <option value="Abu Dhabi">{isRtl ? 'أبوظبي (توصيل في نفس اليوم)' : 'Abu Dhabi (Same-Day Express)'}</option>
                          <option value="Sharjah">{isRtl ? 'الشارقة (توصيل خلال 24 ساعة)' : 'Sharjah (24-Hour Express)'}</option>
                          <option value="Ajman">{isRtl ? 'عجمان (توصيل خلال 24 ساعة)' : 'Ajman (24-Hour Express)'}</option>
                          <option value="Al Ain">{isRtl ? 'العين (توصيل خلال 24 ساعة)' : 'Al Ain (24-Hour Express)'}</option>
                          <option value="Ras Al Khaimah">{isRtl ? 'رأس الخيمة' : 'Ras Al Khaimah'}</option>
                          <option value="Fujairah">{isRtl ? 'الفجيرة' : 'Fujairah'}</option>
                          <option value="Umm Al Quwain">{isRtl ? 'أم القيوين' : 'Umm Al Quwain'}</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-stone-400 text-[10px] block mb-1 uppercase font-bold">
                          {isRtl ? 'طريقة الدفع' : 'PAYMENT METHOD'}
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('card')}
                            className={`p-2.5 rounded-xl border text-[10px] font-bold ${
                              paymentMethod === 'card' ? 'bg-[#C5A059] text-black border-[#C5A059]' : 'bg-[#0A0A0A] text-stone-300 border-stone-800'
                            }`}
                          >
                            {isRtl ? 'بطاقة بنكية / فيزا' : 'Credit Card (AED)'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('tabby')}
                            className={`p-2.5 rounded-xl border text-[10px] font-bold ${
                              paymentMethod === 'tabby' ? 'bg-[#C5A059] text-black border-[#C5A059]' : 'bg-[#0A0A0A] text-stone-300 border-stone-800'
                            }`}
                          >
                            {isRtl ? 'تابي (4 دفعات)' : 'Tabby (4 Payments)'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('apple')}
                            className={`p-2.5 rounded-xl border text-[10px] font-bold ${
                              paymentMethod === 'apple' ? 'bg-[#C5A059] text-black border-[#C5A059]' : 'bg-[#0A0A0A] text-stone-300 border-stone-800'
                            }`}
                          >
                            Apple Pay
                          </button>
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('cod')}
                            className={`p-2.5 rounded-xl border text-[10px] font-bold ${
                              paymentMethod === 'cod' ? 'bg-[#C5A059] text-black border-[#C5A059]' : 'bg-[#0A0A0A] text-stone-300 border-stone-800'
                            }`}
                          >
                            {isRtl ? 'الدفع عند الاستلام' : 'Cash on Delivery'}
                          </button>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#8C6D2D] text-black font-serif font-bold text-xs uppercase tracking-wider mt-2"
                      >
                        {isRtl ? `تأكيد وإتمام الطلب (${formatPrice(totalAED)})` : `Confirm & Complete Order (${formatPrice(totalAED)})`}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
