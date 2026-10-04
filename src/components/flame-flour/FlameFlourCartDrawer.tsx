'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  category: string;
  priceAED: number;
  quantity: number;
  image?: string;
  details?: string;
}

interface FlameFlourCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedCheckout: () => void;
}

export const FlameFlourCartDrawer: React.FC<FlameFlourCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedCheckout
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.priceAED * item.quantity, 0);
  const deliveryFee = subtotal >= 250 || subtotal === 0 ? 0 : 25;
  const total = subtotal + deliveryFee;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop (clicking closes drawer) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-md bg-[#120f0d] border-l border-amber-950/60 shadow-2xl flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-stone-850 flex items-center justify-between bg-stone-950/40">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-800/40 text-amber-400">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-stone-100">Bakery Basket</h3>
                  <p className="text-xs font-mono text-stone-400">
                    {items.length} {items.length === 1 ? 'Batch Item' : 'Batch Items'}
                  </p>
                </div>
              </div>

              {/* Explicit Close Button with high touch area */}
              <button
                type="button"
                onClick={onClose}
                className="p-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-750 transition-colors"
                aria-label="Close cart drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16 text-stone-400 space-y-3">
                  <div className="text-4xl">🥖</div>
                  <p className="text-base font-serif text-stone-300">Your bakery basket is empty.</p>
                  <p className="text-xs text-stone-400 max-w-xs mx-auto font-light">
                    Add warm levain loaves, viennoiserie, or build a custom box to get started.
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-stone-900/60 border border-stone-850 flex items-center justify-between gap-3 shadow-md"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 rounded-xl object-cover border border-stone-800 shrink-0"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-xl bg-amber-950/40 border border-amber-900/40 flex items-center justify-center text-xl shrink-0">
                          📦
                        </div>
                      )}
                      <div className="overflow-hidden">
                        <div className="text-[10px] font-mono text-amber-400 uppercase">{item.category}</div>
                        <h4 className="text-sm font-serif text-stone-100 truncate">{item.name}</h4>
                        {item.details && (
                          <div className="text-[10px] text-stone-400 truncate mt-0.5">{item.details}</div>
                        )}
                        <div className="text-xs font-mono font-bold text-amber-400 mt-1">
                          AED {item.priceAED * item.quantity}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-400 hover:text-rose-400 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2 bg-stone-950 p-1 rounded-lg border border-stone-800">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 hover:text-white text-stone-400"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs font-bold text-stone-100 min-w-[14px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 hover:text-white text-stone-400"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-stone-850 bg-stone-950/80 space-y-4">
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-stone-400">
                    <span>Items Subtotal:</span>
                    <span className="text-stone-200">AED {subtotal}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Morning Courier Delivery:</span>
                    <span className={deliveryFee === 0 ? 'text-emerald-400' : 'text-stone-200'}>
                      {deliveryFee === 0 ? 'FREE (Orders 250+)' : `AED ${deliveryFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-stone-100 pt-2 border-t border-stone-800">
                    <span className="font-serif">Estimated Total:</span>
                    <span className="text-amber-400 font-serif text-lg">AED {total}</span>
                  </div>
                </div>

                <button
                  onClick={onProceedCheckout}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-950/60 transition-all active:scale-[0.98]"
                >
                  <span>Proceed to Pickup & Dispatch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-stone-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span>Secure UAE Bakery Order Flow · Demo State</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
