'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2, Leaf, MessageCircle } from 'lucide-react';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';
import { FRESHAURA_BRAND } from '@/data/freshauraCatalogData';

export interface GroceryCartItem {
  id: string;
  name: string;
  priceAED: number;
  unit: string;
  quantity: number;
  image: string;
}

interface FreshauraCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: GroceryCartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  selectedCity: string;
}

export const FreshauraCart: React.FC<FreshauraCartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  selectedCity,
}) => {
  const { t, isRtl, formatPrice, formatNumber, toArabicDigits } = useFreshauraLanguage();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [deliverySlot, setDeliverySlot] = useState('10:00 AM – 12:00 PM');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'cod'>('card');
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
    (sum, item) => sum + item.priceAED * item.quantity,
    0
  );

  const deliveryFeeAED = subtotalAED >= 75 || subtotalAED === 0 ? 0 : 15;
  const totalAED = subtotalAED + deliveryFeeAED;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerName && customerPhone) {
      setIsOrderPlaced(true);
    }
  };

  const generateWhatsAppOrderUrl = () => {
    const itemsList = cartItems
      .map((item, idx) => `${idx + 1}. ${item.name} (${item.unit}) x ${item.quantity} = AED ${(item.priceAED * item.quantity).toFixed(2)}`)
      .join('%0A');

    const text = `*New Fresh Produce Order - FRESHAURA UAE*%0A%0A*Customer:* ${customerName || 'Direct Client'}%0A*Phone:* ${customerPhone}%0A*City:* ${selectedCity}%0A*Address:* ${customerAddress}%0A*Slot:* ${deliverySlot}%0A*Payment:* ${paymentMethod.toUpperCase()}%0A%0A*Items:*%0A${itemsList}%0A%0A*Subtotal:* AED ${subtotalAED.toFixed(2)}%0A*Delivery:* ${deliveryFeeAED === 0 ? 'FREE' : `AED ${deliveryFeeAED}`}%0A*Total:* AED ${totalAED.toFixed(2)}`;

    return `https://wa.me/971509988440?text=${text}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className={`fixed inset-0 z-50 overflow-hidden flex ${isRtl ? 'justify-start' : 'justify-end'}`}>
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-10"
        />

        {/* Slide-in Cart Drawer Sheet */}
        <motion.div
          initial={{ x: isRtl ? '-100%' : '100%' }}
          animate={{ x: 0 }}
          exit={{ x: isRtl ? '-100%' : '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className={`relative z-20 w-full sm:max-w-md bg-[#064E3B] ${isRtl ? 'border-r' : 'border-l'} border-emerald-700/40 h-dvh sm:h-full flex flex-col justify-between p-4 sm:p-6 shadow-2xl font-sans text-stone-100 overflow-hidden`}
        >
          {/* Fixed Header */}
          <div className="flex-shrink-0 flex items-center justify-between pb-4 border-b border-emerald-800">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#FBF9F5]">
                {isRtl ? 'سلة مشترياتك الطازجة' : 'Your Produce Bag'}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-[#042F2E] border border-emerald-700 text-stone-300 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
              aria-label="Close Cart Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items Scroll Container */}
          <div className="flex-1 overflow-y-auto overscroll-contain touch-pan-y py-4 space-y-4 font-mono text-xs">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <Leaf className="w-12 h-12 text-emerald-400 mx-auto opacity-40" />
                <span className="text-stone-300 block font-serif text-lg">
                  {isRtl ? 'سلة المشتريات فارغة حالياً' : 'Your produce bag is empty'}
                </span>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-emerald-400 text-black font-serif font-bold text-xs uppercase shadow-md active:scale-95"
                >
                  {isRtl ? 'استكشف أكثر من ٢٠٠ صنف طازج' : 'Explore 200+ Fresh Produce Items'}
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-[#042F2E] border border-emerald-700/30 flex gap-3 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl bg-black flex-shrink-0"
                  />

                  <div className="flex-1 space-y-1 min-w-0">
                    <h4 className="font-serif font-bold text-white text-xs truncate">{item.name}</h4>
                    <span className="text-[10px] text-stone-300 block">{item.unit}</span>

                    <div className="flex items-center justify-between pt-1">
                      <span className="font-serif font-bold text-emerald-300 text-sm">
                        {formatPrice(item.priceAED * item.quantity)}
                      </span>

                      <div className="flex items-center gap-1.5 bg-[#064E3B] px-2 py-1 rounded-lg border border-emerald-700/40">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="text-stone-300 hover:text-white p-1"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-white font-bold px-1">{formatNumber(item.quantity)}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-stone-300 hover:text-white p-1"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-stone-400 hover:text-rose-400 min-w-[36px] min-h-[36px] flex items-center justify-center"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Fixed Footer Summary & Checkout */}
          {cartItems.length > 0 && (
            <div className="flex-shrink-0 border-t border-emerald-800 pt-4 space-y-3 font-mono text-xs pb-safe">
              <div className="p-3 rounded-xl bg-[#042F2E] border border-emerald-500/30 text-emerald-300 text-[10px] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  {deliveryFeeAED === 0
                    ? isRtl ? `توصيل مبرد مجاني في ${selectedCity}` : `FREE Same-Day Cold Delivery in ${selectedCity}`
                    : isRtl
                    ? `أضف ${formatPrice(75 - subtotalAED)} إضافية للحصول على توصيل مجاني في ${selectedCity}`
                    : `Add AED ${(75 - subtotalAED).toFixed(2)} more for FREE delivery in ${selectedCity}`}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-stone-300 text-[11px]">
                  <span>{isRtl ? 'مجموع المنتجات:' : 'Produce Subtotal:'}</span>
                  <span>{formatPrice(subtotalAED)}</span>
                </div>
                <div className="flex justify-between text-stone-300 text-[11px]">
                  <span>{isRtl ? `رسوم التوصيل (${selectedCity}):` : `Delivery Fee (${selectedCity}):`}</span>
                  <span>{deliveryFeeAED === 0 ? (isRtl ? 'مجاني' : 'FREE') : formatPrice(deliveryFeeAED)}</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-emerald-800">
                  <span className="text-stone-300 uppercase text-[10px] font-bold">
                    {isRtl ? 'الإجمالي الكلي:' : 'TOTAL AMOUNT:'}
                  </span>
                  <span className="text-2xl font-serif font-bold text-white">
                    {formatPrice(totalAED)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckoutModalOpen(true)}
                className="w-full py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl active:scale-95"
              >
                <span>{isRtl ? 'متابعة الدفع وتأكيد الطلب' : 'Proceed to Checkout'}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}

          {/* Checkout Modal */}
          {isCheckoutModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
              <div className="bg-[#064E3B] border border-emerald-700/40 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative font-sans text-stone-100 max-h-[92vh] overflow-y-auto">
                <button
                  onClick={() => setIsCheckoutModalOpen(false)}
                  className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} p-2 rounded-xl bg-[#042F2E] border border-emerald-700 text-stone-300 min-w-[40px] min-h-[40px] flex items-center justify-center`}
                >
                  <X className="w-5 h-5" />
                </button>

                {isOrderPlaced ? (
                  <div className="text-center py-8 space-y-4 font-mono text-xs">
                    <div className="w-14 h-14 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <span className="text-emerald-300 font-bold uppercase block text-xs">
                      {isRtl ? 'تم تأكيد طلبك بنجاح' : 'ORDER CONFIRMED'}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {isRtl ? `شكراً لك، ${customerName}!` : `Thank you, ${customerName}!`}
                    </h3>
                    <p className="text-stone-200 font-sans text-xs">
                      {isRtl
                        ? `تم إرسال طلبك بقيمة ${formatPrice(totalAED)} إلى مركز التخزين المبرد في القوز لبدء التحضير والتوصيل إلى ${selectedCity}.`
                        : `Your produce order for ${formatPrice(totalAED)} has been dispatched to our Al Quoz Cold Storage Hub for delivery to ${selectedCity}.`}
                    </p>

                    <div className="pt-2 flex flex-col gap-2">
                      <a
                        href={generateWhatsAppOrderUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3.5 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-mono text-xs font-bold flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>{isRtl ? 'إرسال تفاصيل الفاتورة عبر واتساب' : 'Send Receipt to WhatsApp (+971 50)'}</span>
                      </a>

                      <button
                        onClick={() => {
                          onClearCart();
                          setIsCheckoutModalOpen(false);
                          onClose();
                        }}
                        className="w-full py-3 rounded-xl bg-emerald-400 text-black font-serif font-bold text-xs uppercase"
                      >
                        {isRtl ? 'تم — متابعة التسوق' : 'Done — Continue Shopping'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-1">
                      {isRtl ? 'إتمام طلب الحصاد الطازج' : 'FRESHAURA Grocery Checkout'}
                    </h3>
                    <p className="text-xs font-mono text-stone-300 mb-4">
                      {isRtl ? 'أدخل تفاصيل التوصيل واستلم طلبك مبرداً بدرجة ٤ مئوية' : 'Complete your fresh produce order details'}
                    </p>

                    <form onSubmit={handleCheckoutSubmit} className="space-y-3 font-mono text-xs">
                      <div>
                        <label className="text-stone-300 text-[10px] block mb-1">
                          {isRtl ? 'الاسم الكامل *' : 'FULL NAME *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder={isRtl ? 'سارة المنصوري' : 'Sarah Al-Mansoori'}
                          className="w-full p-3 rounded-xl bg-[#042F2E] border border-emerald-700 text-white focus:outline-none focus:border-emerald-400"
                        />
                      </div>

                      <div>
                        <label className="text-stone-300 text-[10px] block mb-1">
                          {isRtl ? 'رقم الهاتف / واتساب *' : 'PHONE / WHATSAPP *'}
                        </label>
                        <input
                          type="tel"
                          required
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="+971 50 123 4567"
                          className="w-full p-3 rounded-xl bg-[#042F2E] border border-emerald-700 text-white focus:outline-none focus:border-emerald-400"
                        />
                      </div>

                      <div>
                        <label className="text-stone-300 text-[10px] block mb-1">
                          {isRtl ? 'عنوان التوصيل والفيلا / الشقة *' : 'DELIVERY ADDRESS / VILLA *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={customerAddress}
                          onChange={(e) => setCustomerAddress(e.target.value)}
                          placeholder={isRtl ? 'فيلا ١٢، المرابع العربية، دبي' : 'Villa 12, Arabian Ranches, Dubai'}
                          className="w-full p-3 rounded-xl bg-[#042F2E] border border-emerald-700 text-white focus:outline-none focus:border-emerald-400"
                        />
                      </div>

                      <div>
                        <label className="text-stone-300 text-[10px] block mb-1">
                          {isRtl ? `موعد التوصيل المفضل (${selectedCity})` : `DELIVERY TIME SLOT (${selectedCity})`}
                        </label>
                        <select
                          value={deliverySlot}
                          onChange={(e) => setDeliverySlot(e.target.value)}
                          className="w-full p-3 rounded-xl bg-[#042F2E] border border-emerald-700 text-white font-bold text-emerald-300 focus:outline-none"
                        >
                          <option value="8:00 AM – 10:00 AM">{isRtl ? '٠٨:٠٠ ص – ١٠:٠٠ ص (فترة الصباح الباكر)' : '8:00 AM – 10:00 AM (Early Morning)'}</option>
                          <option value="10:00 AM – 12:00 PM">{isRtl ? '١٠:٠٠ ص – ١٢:٠٠ م (فترة قبل الظهر)' : '10:00 AM – 12:00 PM (Morning Slot)'}</option>
                          <option value="2:00 PM – 4:00 PM">{isRtl ? '٠٢:٠٠ م – ٠٤:٠٠ م (فترة بعد الظهر)' : '2:00 PM – 4:00 PM (Afternoon Slot)'}</option>
                          <option value="6:00 PM – 8:00 PM">{isRtl ? '٠٦:٠٠ م – ٠٨:٠٠ م (فترة المساء)' : '6:00 PM – 8:00 PM (Evening Slot)'}</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-stone-300 text-[10px] block mb-1">
                          {isRtl ? 'طريقة الدفع' : 'PAYMENT METHOD'}
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('card')}
                            className={`p-2.5 rounded-xl border text-[10px] font-bold ${
                              paymentMethod === 'card' ? 'bg-emerald-400 text-black border-emerald-400' : 'bg-[#042F2E] text-stone-300 border-emerald-700'
                            }`}
                          >
                            {isRtl ? 'بطاقة ائتمان' : 'Credit Card'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('apple')}
                            className={`p-2.5 rounded-xl border text-[10px] font-bold ${
                              paymentMethod === 'apple' ? 'bg-emerald-400 text-black border-emerald-400' : 'bg-[#042F2E] text-stone-300 border-emerald-700'
                            }`}
                          >
                            Apple Pay
                          </button>
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('cod')}
                            className={`p-2.5 rounded-xl border text-[10px] font-bold ${
                              paymentMethod === 'cod' ? 'bg-emerald-400 text-black border-emerald-400' : 'bg-[#042F2E] text-stone-300 border-emerald-700'
                            }`}
                          >
                            {isRtl ? 'الدفع عند الاستلام' : 'Cash on Delivery'}
                          </button>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-serif font-bold text-xs uppercase tracking-wider mt-2 transition-all shadow-xl"
                      >
                        {isRtl ? `تأكيد الطلب (${formatPrice(totalAED)})` : `Confirm Order (${formatPrice(totalAED)})`}
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
