'use client';

import React from 'react';
import { Crown, ArrowRight, Eye, ShoppingBag, Heart } from 'lucide-react';
import { FurnitureProduct, ALL_FURNITURE_PRODUCTS } from '@/data/furnitureData';

interface FormaSignatureEditProps {
  onSelectProduct: (product: FurnitureProduct) => void;
  onAddToCart: (product: FurnitureProduct) => void;
  onToggleWishlist?: (product: FurnitureProduct) => void;
  isWishlisted?: (productId: string) => boolean;
  featuredProducts?: FurnitureProduct[];
}

export const FormaSignatureEdit: React.FC<FormaSignatureEditProps> = ({
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = () => false,
  featuredProducts = ALL_FURNITURE_PRODUCTS
}) => {
  const editItems = featuredProducts.slice(0, 6);

  return (
    <section id="signature" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#12110F] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2926] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6AF73]/10 border border-[#E6AF73]/20 text-[#E6AF73] text-xs font-mono tracking-widest uppercase mb-3">
              <Crown className="w-3.5 h-3.5" />
              <span>Editorial Spotlight</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F2EB] tracking-tight font-serif">
              The <span className="italic text-[#E6AF73]">Signature</span> Collection
            </h2>
            <p className="text-sm sm:text-base text-[#A8A096] mt-2 max-w-xl">
              Distinctive forms created for interiors with character. Oversized proportion, rare quarry stones, and unhurried Italian craftsmanship.
            </p>
          </div>

          <a
            href="#catalog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E6AF73] hover:text-[#D89F60] transition-colors group font-mono"
          >
            <span>Explore All 216+ Works</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Hero Card (7 columns) */}
          {editItems[0] && (
            <div className="md:col-span-7 rounded-3xl bg-[#1A1815] border border-[#332F2A] p-6 sm:p-10 flex flex-col justify-between shadow-2xl hover:border-[#E6AF73]/40 transition-all duration-500 group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#E6AF73]/15 border border-[#E6AF73]/30 text-[10px] font-mono text-[#E6AF73] font-bold uppercase">
                    Maison Signature Piece
                  </span>
                  <div className="text-xs font-mono text-[#A8A096] mt-2">{editItems[0].room} • {editItems[0].material}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F2EB] mt-1 font-serif group-hover:text-[#E6AF73] transition-colors">
                    {editItems[0].name}
                  </h3>
                </div>

                <button
                  onClick={() => onToggleWishlist && onToggleWishlist(editItems[0])}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:text-[#E6AF73] transition-all"
                  title="Save Piece"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted(editItems[0].id) ? 'text-[#E6AF73] fill-[#E6AF73]' : ''}`} />
                </button>
              </div>

              {/* Large Image Visual */}
              <div 
                onClick={() => onSelectProduct(editItems[0])}
                className="my-8 aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/5 cursor-pointer relative"
              >
                <img
                  src={editItems[0].images[0]}
                  alt={editItems[0].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <p className="text-xs sm:text-sm text-[#DCD6CE] line-clamp-2 max-w-lg">
                    {editItems[0].shortDescription}
                  </p>
                </div>
              </div>

              {/* Bottom Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#2C2926]">
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#A8A096]">Official UAE Price</div>
                  <div className="text-2xl font-bold font-mono text-[#E6AF73]">
                    AED {editItems[0].price.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectProduct(editItems[0])}
                    className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#E6AF73]" />
                    <span>View Detail</span>
                  </button>
                  <button
                    onClick={() => onAddToCart(editItems[0])}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#E6AF73] to-[#C68D4C] text-black text-xs font-bold tracking-wider uppercase transition-all shadow-lg hover:scale-[1.02] flex items-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Stacked Right Editorial Cards (5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-8">
            {editItems.slice(1, 3).map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-[#1A1815] border border-[#332F2A] p-6 flex flex-col justify-between shadow-xl hover:border-[#E6AF73]/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E6AF73]">
                      {item.room} • {item.material}
                    </span>
                    <h4 
                      onClick={() => onSelectProduct(item)}
                      className="text-lg font-bold text-[#F5F2EB] mt-1 group-hover:text-[#E6AF73] transition-colors cursor-pointer font-serif"
                    >
                      {item.name}
                    </h4>
                  </div>
                  <div className="text-right font-mono font-bold text-[#E6AF73] text-base">
                    AED {item.price.toLocaleString()}
                  </div>
                </div>

                <div 
                  onClick={() => onSelectProduct(item)}
                  className="my-4 aspect-[16/9] rounded-xl overflow-hidden bg-black/40 border border-white/5 cursor-pointer"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#2C2926]">
                  <span className="text-[11px] text-[#A8A096] font-mono">
                    ★ {item.rating} ({item.reviewCount} reviews)
                  </span>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="px-4 py-2 rounded-xl bg-[#E6AF73]/20 hover:bg-[#E6AF73]/30 border border-[#E6AF73]/40 text-[#E6AF73] text-xs font-semibold tracking-wide uppercase transition-all flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3 h-3" /> Quick Add
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
