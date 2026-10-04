'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  Heart, 
  ArrowRight, 
  ExternalLink,
  Layers,
  Crown
} from 'lucide-react';
import Image from 'next/image';
import { FurnitureProduct } from '@/data/furnitureData';

interface FormaWishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: FurnitureProduct[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: FurnitureProduct) => void;
  onAddAllToCart: () => void;
  onQuickView: (product: FurnitureProduct) => void;
}

export const FormaWishlistDrawer: React.FC<FormaWishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveFromWishlist,
  onAddToCart,
  onAddAllToCart,
  onQuickView
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0F0D0C]/80 backdrop-blur-md"
          />

          {/* Drawer Container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md md:max-w-lg bg-[#141210] border-l border-stone-800/80 text-[#F5F2EB] flex flex-col shadow-2xl shadow-black/80"
            >
              {/* Header */}
              <div className="p-6 border-b border-stone-800/80 flex items-center justify-between bg-[#191613]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-300">
                    <Heart className="w-5 h-5 fill-rose-500/30 text-rose-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-serif font-light tracking-wide text-white">
                      Curated Wishlist & Moodboard
                    </h2>
                    <p className="text-xs text-stone-400">
                      {wishlist.length} {wishlist.length === 1 ? 'saved design work' : 'saved design works'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800/60 transition-colors"
                  aria-label="Close wishlist"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-stone-800/40">
                {wishlist.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                    <div className="w-20 h-20 rounded-full bg-stone-900/80 border border-stone-800 flex items-center justify-center text-stone-600">
                      <Heart className="w-10 h-10 stroke-[1.2]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-serif text-white font-light">Your wishlist is empty</h3>
                      <p className="text-sm text-stone-400 max-w-xs">
                        Save monolithic coffee tables, sculptural curved sofas, and artisanal timber pieces to plan your villa interior.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="mt-4 px-6 py-2.5 bg-[#9E7A52] hover:bg-[#8A6740] text-white text-xs uppercase tracking-widest font-sans font-medium rounded-sm transition-colors shadow-lg"
                    >
                      Browse All 200+ Works
                    </button>
                  </div>
                ) : (
                  wishlist.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="pt-4 first:pt-0 flex gap-4 items-center"
                    >
                      {/* Product Thumbnail */}
                      <div 
                        onClick={() => onQuickView(product)}
                        className="relative w-20 h-20 rounded-sm bg-stone-900 border border-stone-800 overflow-hidden flex-shrink-0 cursor-pointer group"
                      >
                        <Image
                          src={product.images[0] || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80'}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="80px"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-[#C9A97A] font-medium">
                              {product.room} • {product.collection}
                            </span>
                            <h4 
                              onClick={() => onQuickView(product)}
                              className="text-sm font-serif font-light text-white truncate hover:text-[#C9A97A] cursor-pointer transition-colors"
                            >
                              {product.name}
                            </h4>
                          </div>
                          <button
                            onClick={() => onRemoveFromWishlist(product.id)}
                            className="text-stone-500 hover:text-rose-400 p-1 transition-colors"
                            aria-label="Remove from wishlist"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-[11px] text-stone-400 truncate mt-0.5">
                          {product.material}
                        </div>

                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-sm font-medium font-sans text-[#F5F2EB]">
                            AED {product.price.toLocaleString()}
                          </span>

                          <button
                            onClick={() => onAddToCart(product)}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#9E7A52]/20 hover:bg-[#9E7A52] text-[#E0C6A5] hover:text-white border border-[#9E7A52]/40 rounded-sm text-xs font-medium transition-all"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add to Bag</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Wishlist Footer */}
              {wishlist.length > 0 && (
                <div className="p-6 bg-[#171412] border-t border-stone-800/80 space-y-3">
                  <button
                    onClick={onAddAllToCart}
                    className="w-full py-3.5 bg-gradient-to-r from-[#9E7A52] to-[#B89265] hover:from-[#8C6943] hover:to-[#A37E52] text-white text-xs font-sans uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#9E7A52]/20"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Transfer All {wishlist.length} Items to Cart</span>
                  </button>
                  <p className="text-center text-[11px] text-stone-400">
                    Saved items remain in your browser session and can be shared with your interior architect.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
