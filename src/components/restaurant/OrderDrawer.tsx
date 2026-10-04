'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, MessageSquare, ArrowRight } from 'lucide-react';
import { MenuItem, RESTAURANT_BRAND_INFO } from '@/data/restaurantData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  // Lock body scroll when drawer is open
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

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);

  const handleWhatsAppOrder = () => {
    let orderText = `Hello ${RESTAURANT_BRAND_INFO.name},\nI would like to place a demo order selection:\n\n`;
    cartItems.forEach((c, idx) => {
      orderText += `${idx + 1}. ${c.item.name} x${c.quantity} — AED ${c.item.price * c.quantity}\n`;
    });
    orderText += `\nTotal Estimated: AED ${subtotal}\n\nPlease confirm availability and pickup/delivery options.`;

    const encoded = encodeURIComponent(orderText);
    window.open(`https://wa.me/971500000000?text=${encoded}`, '_blank');
  };

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
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative z-20 w-full sm:max-w-md bg-[#0C1017] border-l border-amber-500/30 h-dvh sm:h-full p-4 sm:p-6 flex flex-col justify-between shadow-2xl overflow-hidden font-sans"
        >
          {/* Fixed Header */}
          <div className="flex-shrink-0 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-serif">Order Selection</h3>
                <span className="text-[11px] text-amber-400 font-mono">Fine Dining Concierge</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
              aria-label="Close Order Selection"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items Scroll Container */}
          <div className="flex-1 overflow-y-auto overscroll-contain touch-pan-y py-4 space-y-3 font-mono text-xs">
            {cartItems.length === 0 ? (
              <div className="py-20 text-center text-gray-500 font-sans">
                <ShoppingBag className="w-12 h-12 text-gray-600 mx-auto mb-3 opacity-50" />
                <p className="text-sm font-semibold text-gray-400">Your selection is empty.</p>
                <p className="text-xs text-gray-500 mt-1">Browse our menu and add your preferred dishes.</p>
              </div>
            ) : (
              cartItems.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 font-sans"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white text-xs truncate">{item.name}</h4>
                    <span className="text-amber-400 text-xs font-mono font-bold">AED {item.price}</span>
                  </div>

                  <div className="flex items-center gap-2 font-mono">
                    <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-lg border border-white/10">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-white"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-white px-1">{quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-white"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-gray-500 hover:text-rose-400 min-w-[36px] min-h-[36px] flex items-center justify-center"
                      aria-label="Remove dish"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Fixed Footer Summary & Action */}
          <div className="flex-shrink-0 border-t border-white/10 pt-4 space-y-4 font-mono text-xs pb-safe">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 uppercase text-[11px]">TOTAL AMOUNT</span>
              <span className="text-2xl font-extrabold text-amber-400 font-serif">AED {subtotal}</span>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              disabled={cartItems.length === 0}
              className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Order via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
