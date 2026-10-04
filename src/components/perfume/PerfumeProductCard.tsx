'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { PerfumeProduct } from '@/data/perfumeData';

interface PerfumeProductCardProps {
  product: PerfumeProduct;
  isWishlisted: boolean;
  onToggleWishlist: (product: PerfumeProduct) => void;
  onAddToCart: (product: PerfumeProduct) => void;
  onQuickView: (product: PerfumeProduct) => void;
}

export const PerfumeProductCard: React.FC<PerfumeProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-[#10141C] border border-amber-500/20 hover:border-amber-400/50 transition-all p-5 flex flex-col justify-between shadow-2xl group relative overflow-hidden"
    >
      {/* Top Image Frame */}
      <div>
        <div className="relative h-64 rounded-2xl overflow-hidden mb-4 bg-black">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10141C] via-transparent to-transparent opacity-60" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.isNewArrival && (
              <span className="px-2.5 py-0.5 rounded bg-emerald-500 text-black font-mono font-bold text-[9px] uppercase tracking-wider shadow">
                NEW RELEASE
              </span>
            )}
            {product.isBestseller && (
              <span className="px-2.5 py-0.5 rounded bg-amber-400 text-black font-mono font-bold text-[9px] uppercase tracking-wider shadow">
                BESTSELLER
              </span>
            )}
          </div>

          {/* Wishlist Heart */}
          <button
            onClick={() => onToggleWishlist(product)}
            className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all ${
              isWishlisted
                ? 'bg-rose-500 text-white shadow-lg'
                : 'bg-black/60 text-gray-300 hover:text-rose-400'
            }`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
          </button>

          {/* Quick View Floating Button */}
          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-black/85 backdrop-blur-md text-amber-300 border border-amber-500/40 text-xs font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-xl"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        </div>

        {/* Product Meta */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
            <span>{product.category} • {product.concentration}</span>
            <span className="text-amber-400 font-bold">{product.sizes[0]}</span>
          </div>

          <h3
            onClick={() => onQuickView(product)}
            className="text-lg font-bold text-white font-serif group-hover:text-amber-300 transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
            {product.tagline}
          </p>

          <div className="text-xs font-mono text-gray-400 pt-2 border-t border-white/10 mt-2">
            <span className="text-gray-500">Key Notes: </span>
            <span className="text-gray-300">{product.topNotes.slice(0, 2).join(', ')}, {product.baseNotes[0]}</span>
          </div>
        </div>
      </div>

      {/* Footer Price & Add to Cart */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-4">
        <div>
          <span className="text-[10px] font-mono text-gray-400 block">RETAIL PRICE</span>
          <div className="text-lg font-extrabold text-amber-400 font-mono">
            AED {product.price}
          </div>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
        >
          <ShoppingBag className="w-3.5 h-3.5" /> Add to Bag
        </button>
      </div>
    </motion.div>
  );
};
