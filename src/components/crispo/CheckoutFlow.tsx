'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, CreditCard, DollarSign, Smartphone, Truck, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { CartItem, CRISPO_BRAND } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface CheckoutFlowProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderConfirmedClearCart: () => void;
}

export const CheckoutFlow: React.FC<CheckoutFlowProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderConfirmedClearCart,
}) => {
  const { language, isRtl, t, formatPrice } = useCrispoLanguage();
  const [orderType, setOrderType] = useState<'Delivery' | 'Pickup'>('Delivery');
  const [paymentMethod, setPaymentMethod] = useState<'Card' | 'Cash' | 'ApplePay'>('Card');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState(
    language === 'ar' ? 'الخليج التجاري، أبراج إكزيكتيف B، شقة 1408' : 'Business Bay, Executive Towers B, Apt 1408'
  );
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0) || 79;
  const deliveryFee = orderType === 'Delivery' ? CRISPO_BRAND.deliveryFeeAED : 0;
  const tax = Math.round(subtotal * 0.05 * 100) / 100;
  const total = subtotal + deliveryFee + tax;

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
    onOrderConfirmedClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#1A1715] border border-stone-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-stone-100 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} p-2 rounded-xl bg-[#12100E] border border-stone-800 text-stone-400 hover:text-white transition-colors`}
          aria-label={t('closeBtn')}
        >
          <X className="w-5 h-5" />
        </button>

        {isConfirmed ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-black italic text-white">
              {language === 'ar' ? 'تم تأكيد طلبك بنجاح!' : 'ORDER CONFIRMED!'}
            </h3>
            
            <p className="text-xs font-mono text-stone-300 leading-relaxed max-w-sm mx-auto">
              {language === 'ar' ? (
                <>شكراً لك {customerName || 'عميلنا العزيز'}! تم إرسال الطلب <strong className="text-[#FFC107]">#CRP-48291</strong> إلى المطبخ وبدأ قليه وتحضيره طازجاً.</>
              ) : (
                <>Thank you {customerName || 'Valued Craver'}! Order <strong className="text-[#FFC107]">#CRP-48291</strong> has been dispatched to the kitchen.</>
              )}
            </p>

            <div className="p-4 rounded-2xl bg-[#12100E] border border-stone-800 font-mono text-xs space-y-2 text-start">
              <div className="flex justify-between">
                <span className="text-stone-400">{language === 'ar' ? 'نوع الطلب:' : 'Order Mode:'}</span>
                <span className="text-white font-bold">
                  {orderType === 'Delivery' ? (language === 'ar' ? 'توصيل للمنزل' : 'Delivery') : (language === 'ar' ? 'استلام من الفرع' : 'Pickup')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">{language === 'ar' ? 'الوقت المتوقع للوصول:' : 'Estimated Arrival:'}</span>
                <span className="text-[#FFC107] font-bold">{language === 'ar' ? '٢٨ دقيقة' : '28 Minutes'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">{language === 'ar' ? 'المبلغ الإجمالي:' : 'Total Charged:'}</span>
                <span className="text-white font-bold">{formatPrice(total)}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E63946] to-[#FF4757] text-white font-black text-xs uppercase shadow-lg shadow-[#E63946]/30 hover:opacity-95 transition-opacity"
            >
              {language === 'ar' ? 'تتبع مسار السائق مباشرة' : 'Track Order Live'}
            </button>
          </div>
        ) : (
          <div>
            <span className="text-xs font-mono font-bold text-[#FFC107] uppercase tracking-widest block mb-1">
              {language === 'ar' ? 'إتمام الطلب السريع' : 'EXPRESS CHECKOUT'}
            </span>
            <h3 className="text-2xl font-black italic text-[#FAF6EE] mb-6">
              {t('checkoutTitle')}
            </h3>

            <form onSubmit={handleConfirmOrder} className="space-y-4 text-xs">
              
              {/* Order Mode */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-[#12100E] border border-stone-800 font-mono">
                <button
                  type="button"
                  onClick={() => setOrderType('Delivery')}
                  className={`py-2 rounded-lg font-bold transition-all ${orderType === 'Delivery' ? 'bg-[#E63946] text-white' : 'text-stone-400 hover:text-white'}`}
                >
                  {language === 'ar' ? '🚗 توصيل (٧ د.إ)' : '🚗 Delivery (AED 7)'}
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('Pickup')}
                  className={`py-2 rounded-lg font-bold transition-all ${orderType === 'Pickup' ? 'bg-[#E63946] text-white' : 'text-stone-400 hover:text-white'}`}
                >
                  {language === 'ar' ? '🏃 استلام (مجاني)' : '🏃 Pickup (Free)'}
                </button>
              </div>

              {/* Customer Info */}
              <div>
                <label className="text-stone-400 font-mono text-[10px] uppercase block mb-1">
                  {t('fullName')}
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={language === 'ar' ? 'مثال: سلطان العامري' : 'e.g. Sultan Al-Amri'}
                  className="w-full p-3 rounded-xl bg-[#12100E] border border-stone-800 text-white font-mono text-xs focus:outline-none focus:border-[#E63946]"
                />
              </div>

              <div>
                <label className="text-stone-400 font-mono text-[10px] uppercase block mb-1">
                  {t('phoneNumber')}
                </label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="+971 50 000 0000"
                  dir="ltr"
                  className={`w-full p-3 rounded-xl bg-[#12100E] border border-stone-800 text-white font-mono text-xs focus:outline-none focus:border-[#E63946] ${isRtl ? 'text-right' : 'text-left'}`}
                />
              </div>

              {orderType === 'Delivery' && (
                <div>
                  <label className="text-stone-400 font-mono text-[10px] uppercase block mb-1">
                    {t('deliveryAddress')}
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={language === 'ar' ? 'المنطقة، الشارع، رقم المبنى/الفيلا والشقة' : 'Area, Street, Building/Villa and Flat No.'}
                    className="w-full p-3 rounded-xl bg-[#12100E] border border-stone-800 text-white font-mono text-xs focus:outline-none focus:border-[#E63946]"
                  />
                </div>
              )}

              {/* Payment Methods */}
              <div>
                <label className="text-stone-400 font-mono text-[10px] uppercase block mb-2">
                  {t('paymentMethod')}
                </label>
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('Card')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                      paymentMethod === 'Card' ? 'bg-[#E63946]/20 border-[#E63946] text-white font-bold' : 'bg-[#12100E] border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#FFC107]" />
                    <span>{language === 'ar' ? 'بطاقة' : 'Card'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('Cash')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                      paymentMethod === 'Cash' ? 'bg-[#E63946]/20 border-[#E63946] text-white font-bold' : 'bg-[#12100E] border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <DollarSign className="w-4 h-4 text-[#FFC107]" />
                    <span>{language === 'ar' ? 'نقداً' : 'Cash'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('ApplePay')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                      paymentMethod === 'ApplePay' ? 'bg-[#E63946]/20 border-[#E63946] text-white font-bold' : 'bg-[#12100E] border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 text-[#FFC107]" />
                    <span>{language === 'ar' ? 'أبل باي' : 'Apple Pay'}</span>
                  </button>
                </div>
              </div>

              {/* Summary */}
              <div className="p-4 rounded-xl bg-[#12100E] border border-stone-800 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-stone-400">
                  <span>{t('subtotal')}:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                {orderType === 'Delivery' && (
                  <div className="flex justify-between text-stone-400">
                    <span>{t('deliveryFee')}:</span>
                    <span>{formatPrice(deliveryFee)}</span>
                  </div>
                )}
                <div className="flex justify-between text-stone-400">
                  <span>{t('vat5')}:</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-[#FAF6EE] font-bold text-sm pt-2 border-t border-stone-800">
                  <span>{t('totalAmount')}:</span>
                  <span className="text-[#FFC107]">{formatPrice(total)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E63946] via-[#FF4757] to-[#FF3300] text-white font-sans font-black text-xs uppercase tracking-wider shadow-xl mt-2 hover:opacity-95 transition-opacity"
              >
                {language === 'ar' ? `تأكيد ودفع ${formatPrice(total)}` : `Confirm & Pay ${formatPrice(total)}`}
              </button>

            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};

