'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { PetProduct } from '@/data/petCareData';

interface PetCartDrawerProps {
  isOpen: boolean;
  cart: PetProduct[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onOpenCheckout: () => void;
}

export const PetCartDrawer: React.FC<PetCartDrawerProps> = ({
  isOpen,
  cart,
  onClose,
  onRemove,
  onOpenCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = subtotal > 200 || cart.length === 0 ? 0 : 25;
  const total = subtotal + deliveryFee;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="w-full max-w-md bg-[#0C141D] border-l border-emerald-500/30 text-white h-full flex flex-col justify-between shadow-2xl p-6 sm:p-7 relative z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold font-sans">Prescription Cart</h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/30">
                {cart.length} items
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close cart"
              className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto py-4 space-y-3">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3 text-slate-400 font-mono text-xs">
                <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
                <p>Your veterinary pharmacy cart is empty.</p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/30 hover:bg-emerald-500/20"
                >
                  Browse Medical Diets & Supplements
                </button>
              </div>
            ) : (
              cart.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="p-3.5 rounded-2xl bg-[#090F16] border border-white/5 flex items-center justify-between gap-3 group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover border border-white/10 shrink-0"
                  />

                  <div className="flex-1 min-w-0 space-y-0.5">
                    <span className="text-[10px] font-mono text-emerald-400 block truncate">
                      {item.brand}
                    </span>
                    <h4 className="text-xs font-bold text-white truncate font-sans">
                      {item.name}
                    </h4>
                    <span className="text-xs font-mono font-bold text-emerald-300">
                      AED {item.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    aria-label="Remove item"
                    className="p-2 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Totals & Checkout */}
          {cart.length > 0 && (
            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal:</span>
                  <span className="text-white">AED {subtotal}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>UAE Express Cold Delivery:</span>
                  <span className="text-emerald-300">{deliveryFee === 0 ? 'FREE (Over AED 200)' : `AED ${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/5">
                  <span>Estimated Total:</span>
                  <span className="text-emerald-400 text-base">AED {total}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 hover:scale-102 transition-all cursor-pointer"
              >
                <span>Proceed to Express Checkout (AED {total})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PetCartDrawer;
