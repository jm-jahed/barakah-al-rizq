import React, { useState } from 'react';
import { X, Crown, ShieldCheck, Heart, SlidersHorizontal, ArrowRight, Award } from 'lucide-react';
import { JewelryItem } from '@/data/jewelryCatalogData';

interface JewelryProductModalProps {
  item: JewelryItem | null;
  onClose: () => void;
  onAddToCart: (item: JewelryItem) => void;
  isSaved: boolean;
  onToggleSave: (item: JewelryItem) => void;
  isCompared: boolean;
  onToggleCompare: (item: JewelryItem) => void;
}

export const JewelryProductModal: React.FC<JewelryProductModalProps> = ({
  item,
  onClose,
  onAddToCart,
  isSaved,
  onToggleSave,
  isCompared,
  onToggleCompare
}) => {
  if (!item) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/70 my-auto text-zinc-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-zinc-300 hover:text-white backdrop-blur-md border border-zinc-700/50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          
          {/* Left Column: Visual Showcase */}
          <div className="p-6 sm:p-8 bg-zinc-900/40 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800">
            <div>
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-black mb-4 border border-zinc-800">
                <img
                  src={item.gallery[activeImageIndex] || item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                    {item.gemstone} • {item.caratWeight}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {item.gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {item.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        activeImageIndex === idx ? 'border-amber-500 scale-95' : 'border-zinc-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-400 space-y-1">
              <div className="flex items-center justify-between">
                <span>Certification Dossier:</span>
                <span className="text-amber-400 font-bold">{item.certificationLab}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Boutique Salon:</span>
                <span className="text-zinc-200">{item.boutiqueZone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Acquisition */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                  {item.disciplineName}
                </span>
                <h3 className="text-2xl font-serif font-bold text-zinc-100">
                  {item.title}
                </h3>
              </div>

              {/* Pricing Box */}
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase">Sovereign Acquisition Rate</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-mono font-bold text-amber-300">
                      AED {item.priceAED.toLocaleString()}
                    </span>
                    {item.originalPriceAED && (
                      <span className="text-sm font-mono text-zinc-500 line-through">
                        AED {item.originalPriceAED.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Vault Ready
                </span>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <span className="text-zinc-500 block text-[10px]">Precious Metal</span>
                  <span className="text-zinc-200 font-bold">{item.material}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <span className="text-zinc-500 block text-[10px]">Total Gem Weight</span>
                  <span className="text-zinc-200 font-bold">{item.caratWeight}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <span className="text-zinc-500 block text-[10px]">Dimensions</span>
                  <span className="text-zinc-200 font-bold">{item.dimensions}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <span className="text-zinc-500 block text-[10px]">Gold Weight</span>
                  <span className="text-zinc-200 font-bold">{item.weightGrams}</span>
                </div>
              </div>

              {/* Description & Craftsmanship */}
              <div className="space-y-2 text-xs text-zinc-300 leading-relaxed">
                <p>{item.description}</p>
                <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-200/90 text-[11px]">
                  <strong>Atelier Craftsmanship:</strong> {item.craftsmanship}
                </div>
              </div>

              {/* Armored Shipping Notice */}
              <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Armored courier delivery across Dubai &amp; Abu Dhabi within 24h</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-3">
              <button
                onClick={() => {
                  onAddToCart(item);
                  onClose();
                }}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-zinc-950 font-black font-mono text-xs uppercase tracking-widest transition-all shadow-xl shadow-amber-950/50"
              >
                Acquire Creation
              </button>

              <button
                onClick={() => onToggleSave(item)}
                aria-label="Toggle Wishlist"
                className={`p-3.5 rounded-xl border transition-all ${
                  isSaved
                    ? 'bg-amber-500 text-zinc-950 border-amber-400'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={() => onToggleCompare(item)}
                aria-label="Toggle Compare"
                className={`p-3.5 rounded-xl border transition-all ${
                  isCompared
                    ? 'bg-amber-500 text-zinc-950 border-amber-400'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
