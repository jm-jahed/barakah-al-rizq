'use client';

import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { GadgetProduct } from '@/data/consumerElectronicsData';

interface AetheraWishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: GadgetProduct[];
  onRemoveWishlist: (productId: string) => void;
  onMoveToCart: (product: GadgetProduct) => void;
  onMoveAllToCart: () => void;
  onSelectProduct: (product: GadgetProduct) => void;
}

export const AetheraWishlistDrawer: React.FC<AetheraWishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveWishlist,
  onMoveToCart,
  onMoveAllToCart,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0D0E12] border-l border-white/10 shadow-2xl shadow-black flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-white/10 bg-[#090A0C] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <h3 className="text-base font-bold text-white font-mono tracking-wide">
                Saved Wishlist ({wishlistProducts.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3 custom-scrollbar">
            {wishlistProducts.length > 0 ? (
              wishlistProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="p-3.5 rounded-2xl bg-[#121419] border border-white/5 flex gap-3.5 items-center group relative hover:border-white/15 transition-all"
                >
                  <div
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                    className="w-16 h-16 rounded-xl bg-black/60 border border-white/10 p-1.5 shrink-0 cursor-pointer overflow-hidden"
                  >
                    <img src={prod.images[0]} alt="" className="w-full h-full object-contain" />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="text-[10px] font-mono text-white/40 uppercase truncate">{prod.brand}</div>
                    <h4
                      onClick={() => {
                        onSelectProduct(prod);
                        onClose();
                      }}
                      className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors truncate cursor-pointer"
                    >
                      {prod.name}
                    </h4>
                    <div className="text-xs font-mono font-bold text-amber-300">
                      AED {prod.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      onClick={() => onRemoveWishlist(prod.id)}
                      className="text-white/30 hover:text-rose-400 p-1"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        onMoveToCart(prod);
                        onRemoveWishlist(prod.id);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-amber-400 text-black text-[10px] font-bold uppercase hover:bg-amber-300 transition-all flex items-center gap-1"
                    >
                      <ShoppingBag className="w-3 h-3" /> Move to Bag
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 space-y-3">
                <Heart className="w-12 h-12 text-white/20 mx-auto" />
                <h4 className="text-sm font-bold text-white">No saved gadgets yet</h4>
                <p className="text-xs text-white/50 max-w-xs mx-auto">
                  Click the heart icon on any gadget in the collection to bookmark it for later review.
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#090A0C]">
              <button
                onClick={onMoveAllToCart}
                className="w-full py-3.5 rounded-2xl bg-amber-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Move All to Bag ({wishlistProducts.length})</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
