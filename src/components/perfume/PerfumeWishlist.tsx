'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { PerfumeProduct } from '@/data/perfumeData';

interface PerfumeWishlistProps {
  isOpen: boolean;
  wishlist: PerfumeProduct[];
  onClose: () => void;
  onRemoveFromWishlist: (product: PerfumeProduct) => void;
  onAddToCart: (product: PerfumeProduct) => void;
}

export const PerfumeWishlist: React.FC<PerfumeWishlistProps> = ({
  isOpen,
  wishlist,
  onClose,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md flex justify-end">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md bg-[#0E131A] border-l border-amber-500/30 h-full flex flex-col justify-between shadow-2xl p-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2 text-rose-400">
              <Heart className="w-5 h-5 fill-rose-400" />
              <h3 className="text-lg font-bold text-white font-serif">Saved Wishlist ({wishlist.length})</h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Wishlist Items */}
          <div className="py-4 space-y-4 overflow-y-auto flex-1 pr-1">
            {wishlist.length > 0 ? (
              wishlist.map((product) => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-2xl bg-[#161D27] border border-white/10 flex items-center gap-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-20 rounded-xl object-cover bg-black border border-white/10 shrink-0"
                  />

                  <div className="flex-1 space-y-1">
                    <span className="text-[9px] font-mono text-amber-300 font-bold uppercase">{product.category}</span>
                    <h4 className="text-xs font-bold text-white font-serif line-clamp-1">{product.name}</h4>
                    <div className="text-xs font-mono font-bold text-amber-400">AED {product.price}</div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => {
                          onAddToCart(product);
                          onRemoveFromWishlist(product);
                        }}
                        className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-[10px] flex items-center gap-1"
                      >
                        <ShoppingBag className="w-3 h-3" /> Move to Bag
                      </button>

                      <button
                        onClick={() => onRemoveFromWishlist(product)}
                        className="text-gray-400 hover:text-rose-400 p-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
                <Heart className="w-10 h-10 text-rose-500/40" />
                <h4 className="text-base font-bold text-white font-serif">Wishlist is Empty</h4>
                <p className="text-xs text-gray-400 max-w-xs">Click the heart icon on any perfume card to save your favorite scents.</p>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 text-center">
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/15"
            >
              Close Wishlist
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
