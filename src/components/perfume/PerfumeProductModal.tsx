import React, { useState } from 'react';
import Image from 'next/image';
import { X, Crown, Clock, Sparkle, Heart, Plus, Check, ShoppingBag, Droplets, Award, ShieldCheck } from 'lucide-react';
import { PerfumeItem } from '@/data/perfumeCatalogData';

interface PerfumeProductModalProps {
  perfume: PerfumeItem | null;
  onClose: () => void;
  onAddToCart: (perfume: PerfumeItem) => void;
  isSaved: boolean;
  onToggleSave: (perfume: PerfumeItem) => void;
  isCompared: boolean;
  onToggleCompare: (perfume: PerfumeItem) => void;
}

export const PerfumeProductModal: React.FC<PerfumeProductModalProps> = ({
  perfume,
  onClose,
  onAddToCart,
  isSaved,
  onToggleSave,
  isCompared,
  onToggleCompare
}) => {
  if (!perfume) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/60 my-auto text-zinc-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-zinc-300 hover:text-white backdrop-blur-md border border-zinc-700/50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          
          {/* Left Column: Media & Gallery */}
          <div className="p-6 sm:p-8 bg-zinc-900/50 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800">
            <div>
              {/* Main Image */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-zinc-950 mb-4 border border-zinc-800">
                <img
                  src={perfume.gallery[activeImageIndex] || perfume.heroImage}
                  alt={perfume.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                    {perfume.concentration}
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {perfume.gallery && perfume.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {perfume.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative h-16 rounded-xl overflow-hidden cursor-pointer border transition-all ${
                        activeImageIndex === idx
                          ? 'border-amber-500 ring-2 ring-amber-500/40'
                          : 'border-zinc-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Master Nose Bio Box */}
            <div className="mt-6 p-4 rounded-xl bg-zinc-950/80 border border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-serif font-bold text-zinc-100">
                    {perfume.masterPerfumer.name}
                  </div>
                  <div className="text-[11px] text-amber-400 font-mono">
                    {perfume.masterPerfumer.title}
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    {perfume.masterPerfumer.accolades}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Olfactory Architecture & Purchase */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            
            <div className="space-y-5">
              {/* Family & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-mono tracking-widest text-amber-400">
                  {perfume.categoryName}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Rating: <span className="text-amber-300 font-bold">{perfume.rating} / 5.0</span> ({perfume.reviewsCount} collector reviews)
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-100 leading-tight">
                {perfume.title}
              </h2>

              {/* Price Row */}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-amber-300">
                  AED {perfume.priceAED.toLocaleString()}
                </span>
                {perfume.originalPriceAED && (
                  <span className="text-sm font-mono text-zinc-400 line-through">
                    AED {perfume.originalPriceAED.toLocaleString()}
                  </span>
                )}
                <span className="text-xs text-zinc-400 ml-2 font-mono">
                  (Includes UAE VAT & Engraving)
                </span>
              </div>

              {/* Specs Meter Box */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
                <div>
                  <span className="text-zinc-500 text-[10px]">Volume</span>
                  <div className="font-mono text-zinc-200 mt-0.5">{perfume.bottleVolume}</div>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px]">Skin Longevity</span>
                  <div className="font-mono text-zinc-200 mt-0.5">{perfume.longevityHours} Hours</div>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px]">Sillage Projection</span>
                  <div className="font-mono text-amber-300 truncate mt-0.5">{perfume.sillage}</div>
                </div>
              </div>

              {/* Olfactory Pyramid (Top, Heart, Base) */}
              <div className="space-y-2 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
                <div className="font-mono uppercase text-amber-400 text-[10px] tracking-wider font-bold">
                  Olfactory Pyramid
                </div>
                <div className="grid grid-cols-3 gap-2 text-[11px]">
                  <div>
                    <span className="text-zinc-500 block text-[10px]">Top Notes</span>
                    <span className="text-zinc-200">{perfume.pyramid.topNotes.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">Heart Notes</span>
                    <span className="text-zinc-200">{perfume.pyramid.heartNotes.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">Base Notes</span>
                    <span className="text-amber-200 font-semibold">{perfume.pyramid.baseNotes.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Layering Recommendation */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-1">
                  Master Scent Layering Protocol
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {perfume.layeringRecommendation}
                </p>
              </div>

              {/* Packaging Specs */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-1.5">
                  Presentation & Packaging
                </h4>
                <ul className="space-y-1 text-xs text-zinc-400">
                  {perfume.packagingSpecs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-400">•</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => onToggleCompare(perfume)}
                  className={`flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-colors flex items-center justify-center gap-1.5 ${
                    isCompared
                      ? 'bg-amber-500 text-zinc-950 border-amber-500'
                      : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white'
                  }`}
                >
                  {isCompared ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  <span>{isCompared ? 'Compared' : 'Compare'}</span>
                </button>

                <button
                  onClick={() => onToggleSave(perfume)}
                  className={`flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-colors flex items-center justify-center gap-1.5 ${
                    isSaved
                      ? 'bg-red-500 text-white border-red-500'
                      : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-red-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                  <span>{isSaved ? 'Saved' : 'Wishlist'}</span>
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onAddToCart(perfume);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 shadow-lg shadow-amber-950/60 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Acquire This Flacon</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
