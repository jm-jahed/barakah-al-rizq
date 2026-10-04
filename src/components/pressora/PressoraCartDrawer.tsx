'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Copy } from 'lucide-react';

export interface CartItem {
  id: string;
  productName: string;
  configSummary: string;
  quantity: number;
  priceAED: number;
}

interface PressoraCartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onProceedCheckout: () => void;
}

export const PressoraCartDrawer: React.FC<PressoraCartDrawerProps> = ({
  isOpen,
  items,
  onClose,
  onRemoveItem,
  onUpdateQuantity,
  onProceedCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.priceAED, 0);
  const delivery = items.length > 0 ? 20 : 0;
  const total = subtotal + delivery;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-md h-full bg-[#0c131d] border-l border-[#1a2b40] text-[#f8fafc] flex flex-col justify-between shadow-2xl p-6 sm:p-8"
        >
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#182a3e]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#38bdf8]" />
                <h3 className="text-lg font-bold font-sans">Print Production Cart</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#121c2a] text-[#64748b] hover:text-[#f8fafc] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="py-6 space-y-4 max-h-[55vh] overflow-y-auto font-mono text-xs pr-1">
              {items.length === 0 ? (
                <div className="py-16 text-center text-[#64748b] space-y-2">
                  <ShoppingBag className="w-10 h-10 mx-auto text-[#2a3c54]" />
                  <p>Your production cart is empty.</p>
                  <p className="text-[10px]">Select a product from the studio to configure.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#091018] border border-[#16273c] space-y-2"
                  >
                    <div className="flex justify-between items-start">
                      <div className="font-bold text-[#f8fafc] text-sm font-sans">{item.productName}</div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#64748b] hover:text-[#ef4444] transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[10px] text-[#64748b] leading-tight">
                      {item.configSummary}
                    </div>

                    <div className="pt-2 border-t border-[#132233] flex items-center justify-between">
                      <div className="text-[#38bdf8] font-bold">
                        AED {item.priceAED.toLocaleString()}
                      </div>
                      <span className="text-[10px] text-[#64748b]">Qty: {item.quantity}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer & Checkout */}
          <div className="pt-4 border-t border-[#182a3e] space-y-4 font-mono text-xs">
            <div className="space-y-1.5">
              <div className="flex justify-between text-[#94a3b8]">
                <span>Production Subtotal</span>
                <span className="text-[#f8fafc]">AED {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#94a3b8]">
                <span>UAE Courier Logistics</span>
                <span className="text-[#f8fafc]">AED {delivery}</span>
              </div>
              <div className="flex justify-between text-base font-bold pt-2 border-t border-[#142334]">
                <span>Total Investment</span>
                <span className="text-[#38bdf8]">AED {total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => {
                if (items.length > 0) {
                  onClose();
                  onProceedCheckout();
                }
              }}
              disabled={items.length === 0}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#2563eb] hover:from-[#0369a1] hover:to-[#1d4ed8] disabled:opacity-40 text-[#ffffff] text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Proceed to Production Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-[10px] text-[#64748b] text-center flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Simulated demo checkout. No sensitive card data required.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
