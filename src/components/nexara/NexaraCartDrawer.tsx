'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ArrowRight, ShoppingBag, Gamepad2, ShieldCheck } from 'lucide-react';
import { NexaraStoreItem } from '@/data/nexaraData';

interface NexaraCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: NexaraStoreItem[];
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
}

export const NexaraCartDrawer: React.FC<NexaraCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const subtotalAED = items.reduce((sum, item) => sum + item.priceAED, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop with click-to-close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full sm:w-screen max-w-md bg-slate-950 border-l border-slate-800 text-slate-100 flex flex-col justify-between shadow-2xl relative"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-cyan-400">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase font-mono">Loadout Cart</h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {items.length} {items.length === 1 ? 'item' : 'items'} in inventory checkout
                    </p>
                  </div>
                </div>

                {/* Highly Accessible Close Button */}
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Close Loadout Cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="p-6 overflow-y-auto flex-1 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mx-auto text-slate-600 border border-slate-800">
                      <Gamepad2 className="w-8 h-8 text-slate-600" />
                    </div>
                    <div className="text-slate-300 text-base font-bold font-mono">YOUR LOADOUT CART IS EMPTY</div>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      Explore the NEXARA Market for cosmetic weapon finishes, mythic frames, and Battle Pass upgrades.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-xs"
                    >
                      Browse Digital Market
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-800"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white line-clamp-1">{item.name}</span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-cyan-400 border border-slate-800">
                              {item.rarity}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{item.game}</div>
                          <div className="text-xs font-mono font-bold text-amber-400 mt-1">
                            AED {item.priceAED}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-slate-500 hover:text-rose-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-slate-800 bg-slate-950 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Subtotal (Demo AED)</span>
                    <span className="text-lg font-mono font-bold text-amber-400">
                      AED {subtotalAED}
                    </span>
                  </div>

                  <p className="text-[10px] text-slate-500 font-mono text-center">
                    DEMO DIGITAL CART · NO REAL PAYMENT REQUIRED
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={onClose}
                      className="w-1/3 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs transition-colors"
                    >
                      Close
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onProceedToCheckout();
                      }}
                      className="w-2/3 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xl shadow-violet-950/40"
                    >
                      <span>Proceed to Unlock</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
