'use client';

import React from 'react';
import { Crown, ArrowRight, ShoppingBag, Eye, Heart, Shield } from 'lucide-react';
import { GadgetProduct } from '@/data/consumerElectronicsData';

interface AetheraFeaturedEditProps {
  onSelectProduct: (product: GadgetProduct) => void;
  onAddToCart: (product: GadgetProduct) => void;
  onToggleWishlist: (product: GadgetProduct) => void;
  isWishlisted: (productId: string) => boolean;
  featuredProducts: GadgetProduct[];
}

export const AetheraFeaturedEdit: React.FC<AetheraFeaturedEditProps> = ({
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  featuredProducts
}) => {
  // Take 6 curated flagship products
  const editItems = featuredProducts.slice(0, 6);

  return (
    <section id="edit" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090A0C] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
              <Crown className="w-3.5 h-3.5" />
              <span>Curated Atelier Selections</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-sans">
              The <span className="font-serif italic text-amber-300">Edit</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 mt-2 max-w-xl">
              Technology worth experiencing. Hand-selected flagship hardware representing uncompromised materials, acoustics, and computational supremacy.
            </p>
          </div>

          <a
            href="#catalog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors group"
          >
            <span>Explore All 210+ Gadgets</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Giant Master Feature (7 columns) */}
          {editItems[0] && (
            <div className="md:col-span-7 group relative rounded-3xl bg-gradient-to-b from-[#13141A] to-[#0A0B0E] border border-white/10 p-6 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-amber-400/40 transition-all duration-500">
              <div className="flex items-start justify-between gap-4 z-10">
                <div>
                  <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[11px] font-mono text-amber-300 font-semibold uppercase">
                    Editorial Spotlight
                  </span>
                  <div className="text-xs font-mono text-white/50 mt-2">{editItems[0].brand}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                    {editItems[0].name}
                  </h3>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(editItems[0]);
                  }}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:text-rose-500 hover:bg-white/10 transition-all"
                  title="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted(editItems[0].id) ? 'text-rose-500 fill-rose-500' : ''}`} />
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
                  <p className="text-xs sm:text-sm text-white/80 line-clamp-2 max-w-lg">
                    {editItems[0].shortDescription}
                  </p>
                </div>
              </div>

              {/* Bottom Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 z-10">
                <div>
                  <div className="text-[10px] text-white/40 uppercase font-mono">UAE Price</div>
                  <div className="text-2xl font-bold font-mono text-amber-300">
                    AED {editItems[0].price.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectProduct(editItems[0])}
                    className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>View Detail</span>
                  </button>
                  <button
                    onClick={() => onAddToCart(editItems[0])}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-amber-500/20 hover:scale-[1.02] flex items-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Stacked Editorial Right (5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-8">
            {editItems.slice(1, 3).map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-[#111217] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-xl hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                      {item.brand} • {item.category}
                    </span>
                    <h4 
                      onClick={() => onSelectProduct(item)}
                      className="text-lg font-bold text-white mt-1 group-hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      {item.name}
                    </h4>
                  </div>
                  <div className="text-right font-mono font-bold text-amber-300 text-base">
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

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-[11px] text-white/50 font-mono">
                    ★ {item.rating} ({item.reviewCount} reviews)
                  </span>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="px-4 py-2 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/40 text-amber-300 text-xs font-semibold tracking-wide uppercase transition-all flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3 h-3" /> Quick Add
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Triple Secondary Editorial Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editItems.slice(3, 6).map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-[#111217] border border-white/10 p-6 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-white/50 uppercase">{item.brand}</span>
                  <span className="text-xs font-mono font-bold text-amber-300">AED {item.price.toLocaleString()}</span>
                </div>
                <div 
                  onClick={() => onSelectProduct(item)}
                  className="aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5 cursor-pointer mb-4"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 
                  onClick={() => onSelectProduct(item)}
                  className="text-base font-bold text-white group-hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {item.name}
                </h4>
                <p className="text-xs text-white/60 line-clamp-2 mt-1">
                  {item.shortDescription}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onSelectProduct(item)}
                  className="text-xs text-white/70 hover:text-white font-medium flex items-center gap-1"
                >
                  Details →
                </button>
                <button
                  onClick={() => onAddToCart(item)}
                  className="px-3.5 py-2 rounded-xl bg-amber-400 text-black text-xs font-bold uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center gap-1"
                >
                  <ShoppingBag className="w-3 h-3" /> Add
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
