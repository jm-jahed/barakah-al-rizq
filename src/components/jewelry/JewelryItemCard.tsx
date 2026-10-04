import React from 'react';
import { Heart, SlidersHorizontal, Eye, ShieldCheck, Crown } from 'lucide-react';
import { JewelryItem } from '@/data/jewelryCatalogData';

interface JewelryItemCardProps {
  item: JewelryItem;
  onSelect: (item: JewelryItem) => void;
  onAddToCart: (item: JewelryItem) => void;
  isCompared: boolean;
  onToggleCompare: (item: JewelryItem) => void;
  isSaved: boolean;
  onToggleSave: (item: JewelryItem) => void;
}

export const JewelryItemCard: React.FC<JewelryItemCardProps> = ({
  item,
  onSelect,
  onAddToCart,
  isCompared,
  onToggleCompare,
  isSaved,
  onToggleSave
}) => {
  return (
    <div className="group relative rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-amber-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-950/40">
      <div>
        {/* Visual Showcase Box */}
        <div className="relative h-64 w-full overflow-hidden bg-black cursor-pointer" onClick={() => onSelect(item)}>
          <img
            src={item.heroImage}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
              {item.gemstone} • {item.caratWeight}
            </span>
            {item.isVaultExclusive && (
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center gap-1">
                <Crown className="w-2.5 h-2.5" /> Vault Parure
              </span>
            )}
          </div>

          {/* Action Overlay Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(item);
              }}
              aria-label="Save to Wishlist"
              className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                isSaved
                  ? 'bg-amber-500 text-zinc-950 border-amber-400'
                  : 'bg-black/60 text-zinc-300 border-zinc-700 hover:bg-black hover:text-white'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(item);
              }}
              aria-label="Compare Specifications"
              className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                isCompared
                  ? 'bg-amber-500 text-zinc-950 border-amber-400'
                  : 'bg-black/60 text-zinc-300 border-zinc-700 hover:bg-black hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-zinc-300">
            <span className="bg-black/70 px-2 py-0.5 rounded border border-white/10">
              {item.material}
            </span>
            <span className="text-amber-400/90 font-semibold">
              {item.certificationLab}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1.5">
            <span className="uppercase tracking-wider text-amber-400/80">{item.category}</span>
            <span>{item.boutiqueZone}</span>
          </div>

          <h4
            onClick={() => onSelect(item)}
            className="text-sm font-serif font-bold text-zinc-100 group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-1"
          >
            {item.title}
          </h4>

          <p className="mt-1 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Pricing & Footer Actions */}
      <div className="p-5 pt-0">
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-zinc-500 block">UAE Sovereign Price</span>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-mono font-bold text-amber-300">
                AED {item.priceAED.toLocaleString()}
              </span>
              {item.originalPriceAED && (
                <span className="text-xs font-mono text-zinc-500 line-through">
                  AED {item.originalPriceAED.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => onAddToCart(item)}
            className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-950/40"
          >
            Acquire
          </button>
        </div>
      </div>
    </div>
  );
};
