'use client';

import React, { useState } from 'react';
import { 
  Heart, 
  ShoppingBag, 
  Eye, 
  Check, 
  Star, 
  SlidersHorizontal,
  Crown
} from 'lucide-react';
import { GadgetProduct } from '@/data/consumerElectronicsData';

interface AetheraProductCardProps {
  product: GadgetProduct;
  onSelectProduct: (product: GadgetProduct) => void;
  onAddToCart: (product: GadgetProduct) => void;
  onToggleWishlist: (product: GadgetProduct) => void;
  isWishlisted: boolean;
  onToggleCompare?: (product: GadgetProduct) => void;
  isCompared?: boolean;
}

export const AetheraProductCard: React.FC<AetheraProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onToggleCompare,
  isCompared = false
}) => {
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelectProduct(product)}
      className="group relative rounded-2xl bg-[#0F1014] border border-white/10 hover:border-amber-400/40 p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/80 cursor-pointer overflow-hidden"
    >
      {/* Top Indicators & Actions */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          {/* Badge / Category */}
          <div className="flex flex-wrap items-center gap-1.5">
            {product.badge ? (
              <span className="px-2 py-0.5 rounded-md bg-amber-400/15 border border-amber-400/30 text-[10px] font-mono text-amber-300 font-semibold uppercase">
                {product.badge}
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 uppercase">
                {product.category}
              </span>
            )}

            {product.discount && product.discount > 0 && (
              <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-mono font-bold">
                -{product.discount}%
              </span>
            )}
          </div>

          {/* Wishlist & Compare Icons */}
          <div className="flex items-center gap-1">
            {onToggleCompare && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleCompare(product);
                }}
                className={`p-1.5 rounded-lg transition-all ${
                  isCompared 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' 
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
                title="Compare Specs"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleWishlist(product);
              }}
              className={`p-1.5 rounded-lg transition-all ${
                isWishlisted 
                  ? 'bg-rose-500/20 text-rose-500' 
                  : 'text-white/40 hover:text-rose-400 hover:bg-white/5'
              }`}
              title="Save to Wishlist"
            >
              <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Product Visual Container */}
        <div className="relative aspect-square rounded-xl overflow-hidden bg-black/50 border border-white/5 mb-3.5 flex items-center justify-center p-3">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
          />

          {/* Quick View Hover Button */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectProduct(product);
              }}
              className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-amber-300 transition-all flex items-center gap-1.5 scale-95 group-hover:scale-100"
            >
              <Eye className="w-3.5 h-3.5" /> Quick View
            </button>
          </div>
        </div>

        {/* Brand & Title */}
        <div className="space-y-1">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
            {product.brand}
          </div>
          <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
            {product.name}
          </h4>
          <p className="text-[11px] text-white/55 line-clamp-2 leading-tight">
            {product.shortDescription}
          </p>
        </div>

        {/* Color Swatches (if available) */}
        {product.colorVariants && product.colorVariants.length > 0 && (
          <div className="flex items-center gap-1.5 pt-2">
            {product.colorVariants.slice(0, 4).map((col, idx) => (
              <span
                key={idx}
                title={col.name}
                className={`w-3 h-3 rounded-full border ${
                  activeColorIdx === idx ? 'border-amber-400 scale-110' : 'border-white/20'
                }`}
                style={{ backgroundColor: col.hex }}
              />
            ))}
            {product.colorVariants.length > 4 && (
              <span className="text-[9px] text-white/40 font-mono">+{product.colorVariants.length - 4}</span>
            )}
          </div>
        )}
      </div>

      {/* Card Footer: Rating, Price, Add to Cart */}
      <div className="pt-3.5 mt-3.5 border-t border-white/5 space-y-2.5">
        
        <div className="flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1 text-amber-400 font-mono font-medium">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-white/30 text-[10px]">({product.reviewCount})</span>
          </div>

          <div className="text-right">
            <span className="font-mono font-bold text-amber-300 text-sm">
              AED {product.price.toLocaleString()}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[10px] font-mono text-white/30 line-through ml-1.5">
                {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
            addedAnimation
              ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
              : 'bg-white/10 hover:bg-amber-400 hover:text-black text-white border border-white/10 hover:border-amber-400'
          }`}
        >
          {addedAnimation ? (
            <>
              <Check className="w-3.5 h-3.5" /> Added to Bag!
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" /> Add to Bag
            </>
          )}
        </button>

      </div>
    </div>
  );
};
