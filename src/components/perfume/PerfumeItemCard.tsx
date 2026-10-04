import React from 'react';
import Image from 'next/image';
import { Award, Clock, Heart, Plus, Check, ShoppingBag, Crown, Zap } from 'lucide-react';
import { PerfumeItem } from '@/data/perfumeCatalogData';

interface PerfumeItemCardProps {
  perfume: PerfumeItem;
  onSelect: (perfume: PerfumeItem) => void;
  onAddToCart: (perfume: PerfumeItem) => void;
  isCompared: boolean;
  onToggleCompare: (perfume: PerfumeItem) => void;
  isSaved: boolean;
  onToggleSave: (perfume: PerfumeItem) => void;
}

export const PerfumeItemCard: React.FC<PerfumeItemCardProps> = ({
  perfume,
  onSelect,
  onAddToCart,
  isCompared,
  onToggleCompare,
  isSaved,
  onToggleSave
}) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-zinc-950/80 border border-amber-900/20 hover:border-amber-500/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-950/30">
      
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-zinc-900 cursor-pointer" onClick={() => onSelect(perfume)}>
        <img
          src={perfume.heroImage}
          alt={perfume.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 backdrop-blur-md text-amber-300 border border-amber-500/30">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            {perfume.concentration}
          </span>

          <div className="flex items-center gap-1.5">
            {/* Compare Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(perfume);
              }}
              title={isCompared ? 'Remove from comparison' : 'Compare scent'}
              className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                isCompared
                  ? 'bg-amber-500 text-zinc-950 font-bold'
                  : 'bg-black/60 text-zinc-300 hover:text-white hover:bg-black/90'
              }`}
            >
              {isCompared ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
            </button>

            {/* Wishlist Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(perfume);
              }}
              title={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
              className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                isSaved
                  ? 'bg-red-500/90 text-white'
                  : 'bg-black/60 text-zinc-300 hover:text-red-400 hover:bg-black/90'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Bottom Volume & Limited Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 text-[11px]">
          <span className="px-2 py-0.5 rounded font-mono font-medium bg-black/70 backdrop-blur-sm text-zinc-300 border border-zinc-700/50">
            {perfume.bottleVolume}
          </span>
          {perfume.isLimitedEdition && (
            <span className="px-2 py-0.5 rounded font-semibold bg-amber-500/90 text-zinc-950 uppercase tracking-wider text-[10px]">
              Limited Royal Harvest
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-amber-400/90 font-mono">
            <span>{perfume.scentFamily.toUpperCase()}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {perfume.longevityHours}h Longevity
            </span>
          </div>

          <h3
            onClick={() => onSelect(perfume)}
            className="text-lg font-serif font-bold text-zinc-100 hover:text-amber-300 cursor-pointer transition-colors line-clamp-1"
          >
            {perfume.title}
          </h3>

          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {perfume.scentProfile}
          </p>
        </div>

        {/* Notes Preview Pill Matrix */}
        <div className="py-2 border-y border-zinc-900 text-[11px] text-zinc-400 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-zinc-500 font-mono">Sillage:</span>
            <span className="text-zinc-300 font-semibold">{perfume.sillage}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-500 font-mono">Master Nose:</span>
            <span className="text-zinc-300 truncate max-w-[150px]">{perfume.masterPerfumer.name}</span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-500">Retail Price</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold font-serif text-amber-200">
                AED {perfume.priceAED.toLocaleString()}
              </span>
              {perfume.originalPriceAED && (
                <span className="text-xs text-zinc-500 line-through">
                  AED {perfume.originalPriceAED.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelect(perfume)}
              className="px-3 py-2 text-xs font-semibold rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/60 transition-colors"
            >
              Details
            </button>
            <button
              onClick={() => onAddToCart(perfume)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-sans shadow-md shadow-amber-950/50 transition-all flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Acquire
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
