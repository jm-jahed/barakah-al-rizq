'use client';

import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Check, Star, Crown } from 'lucide-react';
import { FurnitureProduct } from '@/data/furnitureData';

interface FormaProductCardProps {
  product: FurnitureProduct;
  onSelectProduct: (product: FurnitureProduct) => void;
  onAddToCart: (product: FurnitureProduct) => void;
  onToggleWishlist: (product: FurnitureProduct) => void;
  isWishlisted: boolean;
}

export const FormaProductCard: React.FC<FormaProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="group relative rounded-2xl bg-[#171513] border border-[#2F2B26] hover:border-[#E6AF73]/50 p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 cursor-pointer overflow-hidden"
    >
      {/* Top Indicators */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {product.badge ? (
              <span className="px-2 py-0.5 rounded-md bg-[#E6AF73]/15 border border-[#E6AF73]/30 text-[10px] font-mono text-[#E6AF73] font-semibold uppercase">
                {product.badge}
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-[#A8A096] uppercase">
                {product.room}
              </span>
            )}

            {product.discount && product.discount > 0 && (
              <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-mono font-bold">
                -{product.discount}%
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`p-1.5 rounded-lg transition-all ${
              isWishlisted 
                ? 'bg-[#E6AF73]/20 text-[#E6AF73]' 
                : 'text-[#A8A096] hover:text-[#E6AF73] hover:bg-white/5'
            }`}
            title="Save Piece"
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-[#E6AF73]' : ''}`} />
          </button>
        </div>

        {/* Product Visual */}
        <div className="relative aspect-square rounded-xl overflow-hidden bg-black/40 border border-white/5 mb-3.5 flex items-center justify-center p-2">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
          />

          {/* Quick View Hover Button */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectProduct(product);
              }}
              className="px-4 py-2 rounded-xl bg-[#F3EFEA] text-black text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#E6AF73] transition-all flex items-center gap-1.5 scale-95 group-hover:scale-100"
            >
              <Eye className="w-3.5 h-3.5" /> Quick View
            </button>
          </div>
        </div>

        {/* Title & Material */}
        <div className="space-y-1">
          <div className="text-[10px] font-mono text-[#A8A096] uppercase tracking-wider">
            {product.material}
          </div>
          <h4 className="text-sm font-bold text-[#F5F2EB] group-hover:text-[#E6AF73] transition-colors line-clamp-1 font-serif">
            {product.name}
          </h4>
          <p className="text-[11px] text-[#A8A096] line-clamp-2 leading-tight font-light">
            {product.shortDescription}
          </p>
        </div>

        {/* Swatches */}
        {product.colorOptions && product.colorOptions.length > 0 && (
          <div className="flex items-center gap-1.5 pt-2">
            {product.colorOptions.slice(0, 4).map((col, idx) => (
              <span
                key={idx}
                title={col.name}
                className={`w-3 h-3 rounded-full border ${
                  activeColorIdx === idx ? 'border-[#E6AF73] scale-110' : 'border-white/20'
                }`}
                style={{ backgroundColor: col.hex }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-3.5 mt-3.5 border-t border-[#24221F] space-y-2.5">
        <div className="flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1 text-[#E6AF73] font-mono font-medium">
            <Star className="w-3 h-3 fill-[#E6AF73] text-[#E6AF73]" />
            <span>{product.rating}</span>
            <span className="text-[#A8A096] text-[10px]">({product.reviewCount})</span>
          </div>

          <div className="text-right">
            <span className="font-mono font-bold text-[#E6AF73] text-sm">
              AED {product.price.toLocaleString()}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[10px] font-mono text-[#A8A096] line-through ml-1.5">
                {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={handleQuickAdd}
          className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
            addedAnimation
              ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
              : 'bg-white/[0.05] hover:bg-[#E6AF73] hover:text-black text-white border border-white/10 hover:border-[#E6AF73]'
          }`}
        >
          {addedAnimation ? (
            <>
              <Check className="w-3.5 h-3.5" /> Added to Bag
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
