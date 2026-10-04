import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Heart, ArrowRight, ShieldCheck, Gem } from 'lucide-react';
import { JewelryItem } from '@/data/jewelryCatalogData';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: JewelryItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onSelectItem: (item: JewelryItem) => void;
  onAddToCart: (item: JewelryItem) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  savedItems,
  onRemove,
  onClear,
  onSelectItem,
  onAddToCart
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-amber-500/40 text-zinc-100 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-amber-400 fill-amber-400" />
                <h3 className="text-lg font-serif font-bold text-white">
                  Sovereign Wishlist ({savedItems.length})
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List of saved items */}
            <div className="mt-6 space-y-4 divide-y divide-zinc-900">
              {savedItems.length === 0 ? (
                <div className="py-20 text-center text-zinc-500 font-mono text-xs space-y-3">
                  <Gem className="w-10 h-10 mx-auto opacity-30 text-amber-400" />
                  <p>No sovereign creations saved to your curation yet.</p>
                  <button
                    onClick={onClose}
                    className="text-amber-400 underline uppercase tracking-widest text-[11px]"
                  >
                    Explore 160 Sovereign Creations
                  </button>
                </div>
              ) : (
                savedItems.map(item => (
                  <div key={item.id} className="pt-4 flex gap-4 group">
                    <div
                      onClick={() => {
                        onSelectItem(item);
                        onClose();
                      }}
                      className="w-20 h-20 rounded-xl overflow-hidden bg-black shrink-0 border border-zinc-800 cursor-pointer"
                    >
                      <img src={item.heroImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4
                            onClick={() => {
                              onSelectItem(item);
                              onClose();
                            }}
                            className="text-xs font-serif font-bold text-white hover:text-amber-300 transition-colors cursor-pointer truncate"
                          >
                            {item.title}
                          </h4>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="text-zinc-600 hover:text-red-400 p-1 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">
                          {item.material} • {item.caratWeight}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono pt-2">
                        <span className="text-amber-300 font-bold">
                          AED {item.priceAED.toLocaleString()}
                        </span>
                        <button
                          onClick={() => {
                            onAddToCart(item);
                            onRemove(item.id);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-[10px] uppercase tracking-wider transition-all"
                        >
                          Move to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {savedItems.length > 0 && (
            <div className="pt-6 border-t border-zinc-800 space-y-3">
              <button
                onClick={() => {
                  savedItems.forEach(item => onAddToCart(item));
                  onClear();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-amber-950/50 transition-all"
              >
                <span>Add All to Acquisition Bag</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onClear}
                className="w-full text-center text-[11px] font-mono text-zinc-500 hover:text-red-400 transition-colors py-1"
              >
                Clear Entire Wishlist
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
