'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { CartItem, CRISPO_BRAND } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
}) => {
  const { t, isRtl, formatPrice, translateProduct } = useCrispoLanguage();

  // Lock body scroll when cart is open on mobile
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

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const deliveryFee = subtotal > 0 ? CRISPO_BRAND.deliveryFeeAED : 0;
  const tax = Math.round(subtotal * CRISPO_BRAND.taxRate * 100) / 100;
  const total = subtotal + deliveryFee + tax;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
        {/* Backdrop overlay */}
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
          className={`relative z-20 bg-[#1A1715] w-full sm:max-w-md h-dvh sm:h-full shadow-2xl flex flex-col justify-between p-4 sm:p-6 ${
            isRtl ? 'border-r' : 'border-l'
          } border-stone-800 text-stone-100 font-sans overflow-hidden`}
        >
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between pb-4 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#FFC107]" />
              <h3 className="text-lg sm:text-xl font-black italic text-[#FAF6EE] font-sans">
                {t('cartTitle')}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-[#12100E] border border-stone-800 text-stone-400 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items Scroll List */}
          <div className="flex-1 overflow-y-auto overscroll-contain touch-pan-y py-4 sm:py-6 space-y-4 font-mono text-xs">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 text-stone-500 space-y-3 font-sans">
                <ShoppingBag className="w-12 h-12 text-stone-700 mx-auto" />
                <p className="text-sm font-bold text-stone-300">{t('cartEmpty')}</p>
                <p className="text-xs text-stone-400 font-mono">{t('cartEmptyDesc')}</p>
              </div>
            ) : (
              cartItems.map((item) => {
                const product = translateProduct(item.product);

                return (
                  <div
                    key={item.product.id}
                    className="p-4 rounded-2xl bg-[#12100E] border border-stone-800 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-bold text-white text-sm font-sans">{product.name}</h4>
                        <span className="text-[#FFC107] font-bold">
                          {formatPrice(item.product.priceAED)}
                        </span>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-2 rounded-lg text-stone-400 hover:text-[#E63946] min-w-[36px] min-h-[36px] flex items-center justify-center"
                        aria-label="Remove product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {item.selectedAddons && item.selectedAddons.length > 0 && (
                      <div className="text-[10px] text-stone-400 space-y-0.5 pt-1 border-t border-stone-800/60">
                        {item.selectedAddons.map((ad) => (
                          <div key={ad.name} className="flex justify-between">
                            <span>+ {ad.name}</span>
                            <span>{formatPrice(ad.priceAED)}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1.5 bg-[#1A1715] px-2 py-1 rounded-lg border border-stone-800">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="text-stone-300 hover:text-white p-1"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-bold text-white px-2">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="text-stone-300 hover:text-white p-1"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-bold text-white text-sm">
                        {formatPrice(item.totalPrice)}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Summary & Checkout Action */}
          {cartItems.length > 0 && (
            <div className="flex-shrink-0 pt-4 border-t border-stone-800 space-y-3 font-mono text-xs pb-safe">
              <div className="space-y-1 text-stone-400">
                <div className="flex justify-between">
                  <span>{t('subtotal')}:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('deliveryFee')}:</span>
                  <span>{deliveryFee === 0 ? (isRtl ? 'مجاني' : 'FREE') : formatPrice(deliveryFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('vat5')}:</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-white font-bold text-sm pt-1 border-t border-stone-800">
                  <span>{t('totalAmount')}:</span>
                  <span className="text-[#FFC107]">{formatPrice(Math.round(total))}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#E63946] via-[#FF4757] to-[#FF3300] hover:from-[#d12e3b] text-white font-sans font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#E63946]/30 active:scale-95 transition-all"
              >
                <span>{t('proceedToCheckout')}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
