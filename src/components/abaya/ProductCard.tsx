'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { AbayaProduct } from '@/data/abayaData';

interface ProductCardProps {
  product: AbayaProduct;
  onQuickView: (p: AbayaProduct) => void;
  onAddToCart: (p: AbayaProduct) => void;
  onToggleWishlist: (p: AbayaProduct) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-[#121212] rounded-3xl border border-stone-800 overflow-hidden shadow-xl hover:border-[#C5A059]/40 transition-all flex flex-col justify-between group font-sans relative"
    >
      <div>
        
        {/* Top Badges & Wishlist Button */}
        <div className="relative h-80 overflow-hidden bg-[#0A0A0A]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1 z-10 font-mono text-[9px]">
            {product.isNewArrival && (
              <span className="px-2.5 py-1 rounded-full bg-[#0A0A0A]/90 text-[#C5A059] border border-[#C5A059]/40 font-bold uppercase backdrop-blur-md">
                NEW IN
              </span>
            )}
            {product.isBestseller && (
              <span className="px-2.5 py-1 rounded-full bg-[#0A0A0A]/90 text-amber-300 border border-amber-500/40 font-bold uppercase backdrop-blur-md">
                BESTSELLER
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={() => onToggleWishlist(product)}
            className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md border transition-all z-10 ${
              isWishlisted
                ? 'bg-rose-950/80 border-rose-500/50 text-rose-400'
                : 'bg-[#0A0A0A]/80 border-stone-700 text-stone-300 hover:text-white'
            }`}
            aria-label="Toggle Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-400' : ''}`} />
          </button>

          {/* Hover Quick Actions */}
          <div className="absolute inset-x-4 bottom-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 font-mono text-xs">
            <button
              onClick={() => onQuickView(product)}
              className="flex-1 py-2.5 rounded-xl bg-[#0A0A0A]/90 hover:bg-[#0A0A0A] border border-stone-700 text-white font-bold flex items-center justify-center gap-1.5 backdrop-blur-md"
            >
              <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Quick View</span>
            </button>

            <button
              onClick={() => onAddToCart(product)}
              className="py-2.5 px-4 rounded-xl bg-[#C5A059] hover:bg-[#b38e47] text-black font-bold flex items-center justify-center gap-1.5 shadow-lg"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>

        </div>

        {/* Info */}
        <div className="p-5 space-y-2">
          <div className="flex items-center justify-between font-mono text-[10px] text-stone-400">
            <span className="text-[#C5A059] font-bold uppercase">{product.fabric}</span>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3 h-3 fill-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          </div>

          <h3
            onClick={() => onQuickView(product)}
            className="text-lg font-serif font-bold text-[#FAFAFA] hover:text-[#C5A059] transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-stone-400 font-light line-clamp-1">{product.category}</p>

          <div className="pt-2 flex items-baseline gap-2 font-mono">
            <span className="text-xl font-serif font-bold text-[#FAFAFA]">
              AED {product.priceAED.toLocaleString()}
            </span>
            {product.originalPriceAED && (
              <span className="text-xs text-stone-500 line-through">
                AED {product.originalPriceAED.toLocaleString()}
              </span>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
};
