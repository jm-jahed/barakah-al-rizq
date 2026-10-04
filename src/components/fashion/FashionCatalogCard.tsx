import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ShoppingBag, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { FashionCatalogItem } from '@/data/fashionCatalogData';

interface FashionCatalogCardProps {
  item: FashionCatalogItem;
  onSelect: (item: FashionCatalogItem) => void;
  onAddToCart: (item: FashionCatalogItem) => void;
  isSaved: boolean;
  onToggleSave: (item: FashionCatalogItem) => void;
}

export const FashionCatalogCard: React.FC<FashionCatalogCardProps> = ({
  item,
  onSelect,
  onAddToCart,
  isSaved,
  onToggleSave
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      className="group relative bg-[#120F0D] rounded-2xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-950/40"
    >
      {/* Visual Frame */}
      <div 
        onClick={() => onSelect(item)}
        className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 cursor-pointer"
      >
        <img
          src={item.heroImage}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-300 font-bold">
            {item.disciplineName.split('&')[0].trim()}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(item);
            }}
            className={`pointer-events-auto w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all cursor-pointer ${
              isSaved
                ? 'bg-amber-500 text-black border-amber-400'
                : 'bg-black/60 text-zinc-300 border-zinc-700 hover:text-amber-400 hover:border-amber-400'
            }`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Color Badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>{item.color}</span>
        </div>

        {/* Price AED Badge */}
        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-amber-500 text-black font-mono font-extrabold text-sm shadow-lg">
          AED {item.priceAED.toLocaleString()}
        </div>
      </div>

      {/* Body Dossier */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span className="text-amber-400/90 font-semibold">{item.origin.split(',')[0]}</span>
            <span>{item.leadTime}</span>
          </div>

          <h3
            onClick={() => onSelect(item)}
            className="text-base font-serif font-bold text-white group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-1"
          >
            {item.title}
          </h3>

          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
            {item.material} • {item.fit}
          </p>

          {/* Size Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.availableSizes.slice(0, 3).map((s, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[9px] font-mono text-zinc-300"
              >
                {s}
              </span>
            ))}
            {item.availableSizes.length > 3 && (
              <span className="px-1.5 py-0.5 text-[9px] font-mono text-zinc-500">
                +{item.availableSizes.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSelect(item)}
            className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-mono font-semibold border border-zinc-700 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span>Look</span>
          </button>

          <button
            type="button"
            onClick={() => onAddToCart(item)}
            className="flex-1 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-black font-mono font-bold text-xs border border-amber-500/40 hover:border-amber-400 flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Acquire Piece</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
