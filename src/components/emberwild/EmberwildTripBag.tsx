'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ArrowRight, ShoppingBag, Flame, ShieldCheck } from 'lucide-react';
import { EmberwildStay, ExperienceAddon } from '@/data/emberwildData';

export interface TripBagItem {
  id: string;
  type: 'stay' | 'experience';
  title: string;
  subtitle: string;
  priceAED: number;
  image?: string;
  details?: string;
}

interface EmberwildTripBagProps {
  isOpen: boolean;
  onClose: () => void;
  items: TripBagItem[];
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
}

export const EmberwildTripBag: React.FC<EmberwildTripBagProps> = ({
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
          {/* Backdrop with click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-stone-950 border-l border-stone-800 text-stone-100 flex flex-col justify-between shadow-2xl relative"
            >
              {/* Header */}
              <div className="p-6 border-b border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-stone-100">Your Trip Bag</h3>
                    <p className="text-xs text-stone-400 font-mono">
                      {items.length} {items.length === 1 ? 'item' : 'items'} in escape plan
                    </p>
                  </div>
                </div>

                {/* Highly Accessible Close Button */}
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Close Trip Bag"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="p-6 overflow-y-auto flex-1 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-stone-900 flex items-center justify-center mx-auto text-stone-500 border border-stone-800">
                      <Flame className="w-8 h-8 text-stone-600" />
                    </div>
                    <div className="text-stone-300 text-base font-light">Your trip bag is empty.</div>
                    <p className="text-xs text-stone-500 max-w-xs mx-auto">
                      Explore our 24 UAE wilderness stays and curated experiences to start building your custom journey.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-xl bg-amber-500 text-stone-950 text-xs font-medium"
                    >
                      Explore Wilderness Stays
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
                      className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-14 h-14 rounded-xl object-cover shrink-0 border border-stone-800"
                          />
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-stone-100 line-clamp-1">{item.title}</span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-stone-950 text-amber-400 border border-stone-800 uppercase">
                              {item.type}
                            </span>
                          </div>
                          <div className="text-[11px] text-stone-400 mt-0.5">{item.subtitle}</div>
                          <div className="text-xs font-mono font-medium text-amber-400 mt-1">
                            AED {item.priceAED.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-stone-500 hover:text-rose-400 transition-colors"
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
                <div className="p-6 border-t border-stone-800 bg-stone-950 space-y-4">
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span>Estimated Subtotal (Demo)</span>
                    <span className="text-lg font-mono font-medium text-amber-400">
                      AED {subtotalAED.toLocaleString()}
                    </span>
                  </div>

                  <p className="text-[10px] text-stone-500 font-mono text-center">
                    DEMO BOOKING BAG · NO PAYMENT COLLECTED
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={onClose}
                      className="w-1/3 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs transition-colors"
                    >
                      Close Bag
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onProceedToCheckout();
                      }}
                      className="w-2/3 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-xl shadow-amber-950/40"
                    >
                      <span>Proceed to Booking</span>
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
