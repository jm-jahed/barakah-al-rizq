import React from 'react';
import Image from 'next/image';
import { X, Trash2, Heart, ShoppingBag, MessageSquare, ArrowRight } from 'lucide-react';
import { PerfumeItem } from '@/data/perfumeCatalogData';

interface PerfumeWishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedPerfumes: PerfumeItem[];
  onRemove: (perfumeId: string) => void;
  onClear: () => void;
  onAddToCart: (perfume: PerfumeItem) => void;
}

export const PerfumeWishlistDrawer: React.FC<PerfumeWishlistDrawerProps> = ({
  isOpen,
  onClose,
  savedPerfumes,
  onRemove,
  onClear,
  onAddToCart
}) => {
  if (!isOpen) return null;

  const totalWishlistAED = savedPerfumes.reduce((acc, p) => acc + p.priceAED, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-amber-500/40 text-zinc-100 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500 fill-current" />
                <h3 className="text-lg font-serif font-bold text-zinc-100">
                  Scent Wishlist ({savedPerfumes.length})
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {savedPerfumes.length > 0 && (
                  <button
                    onClick={onClear}
                    className="text-xs text-zinc-500 hover:text-red-400 font-mono underline mr-2"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* List */}
            {savedPerfumes.length > 0 ? (
              <div className="mt-6 space-y-4">
                {savedPerfumes.map(p => (
                  <div key={p.id} className="relative flex items-center gap-3 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/80">
                    <div className="relative h-16 w-16 rounded-lg overflow-hidden shrink-0 bg-zinc-950">
                      <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-serif font-bold text-zinc-100 truncate">
                        {p.title}
                      </h4>
                      <div className="text-[10px] text-zinc-400 truncate">{p.scentFamily}</div>
                      <div className="text-xs font-bold font-serif text-amber-300 mt-1">
                        AED {p.priceAED.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onAddToCart(p)}
                        className="p-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors"
                        title="Add to cart"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onRemove(p.id)}
                        className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-zinc-800 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-20 text-center text-zinc-500 space-y-3">
                <Heart className="w-12 h-12 mx-auto text-zinc-700 stroke-1" />
                <div className="text-sm font-serif text-zinc-400">Your wishlist is empty</div>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                  Click the heart icon on any of our 160 royal extraits to save them to your personal fragrance portfolio.
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {savedPerfumes.length > 0 && (
            <div className="pt-6 border-t border-zinc-900 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-zinc-400 uppercase font-mono">Wishlist Portfolio Value</span>
                <span className="text-2xl font-serif font-bold text-amber-300">
                  AED {totalWishlistAED.toLocaleString()}
                </span>
              </div>

              <div className="space-y-2">
                <a
                  href={`https://wa.me/971508889999?text=Hello%20Oud%20Royale%20Concierge,%20I%20am%20interested%20in%20acquiring%20my%20saved%20fragrances:%20${encodeURIComponent(savedPerfumes.map(p => p.title).join(', '))}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-950/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Wishlist to Concierge</span>
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
