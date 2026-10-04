import React, { useState } from 'react';
import { X, Heart, ShoppingBag, ShieldCheck, Sparkles, Phone, Ruler } from 'lucide-react';
import { FashionCatalogItem } from '@/data/fashionCatalogData';

interface FashionProductModalProps {
  item: FashionCatalogItem | null;
  onClose: () => void;
  onAddToCart: (item: FashionCatalogItem) => void;
  isSaved: boolean;
  onToggleSave: (item: FashionCatalogItem) => void;
  onBookFitting: () => void;
}

export const FashionProductModal: React.FC<FashionProductModalProps> = ({
  item,
  onClose,
  onAddToCart,
  isSaved,
  onToggleSave,
  onBookFitting
}) => {
  if (!item) return null;

  const [selectedSize, setSelectedSize] = useState<string>(item.availableSizes[0] || 'FR 36');

  const handleWhatsAppConsultation = () => {
    const text = encodeURIComponent(
      `Hello Élane Atelier Stylist Concierge! I am inquiring about "${item.title}" (AED ${item.priceAED.toLocaleString()}, Size: ${selectedSize}). Could you confirm private salon fitting availability in Dubai Design District (d3)?`
    );
    window.open(`https://wa.me/971508887766?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/70 my-auto text-zinc-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Visual Column */}
          <div className="md:col-span-6 relative aspect-[3/4] md:aspect-auto bg-zinc-900 overflow-hidden">
            <img
              src={item.heroImage}
              alt={item.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

            {/* Bottom In-Image Strip */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">Origin</span>
                <span className="text-xs font-mono font-bold text-white">{item.origin}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">Lead Time</span>
                <span className="text-xs font-mono font-bold text-amber-300">{item.leadTime}</span>
              </div>
            </div>
          </div>

          {/* Dossier Column */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Category & Price */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold">
                  {item.disciplineName}
                </span>
                <div className="text-right">
                  <span className="text-xl font-mono font-extrabold text-amber-400">
                    AED {item.priceAED.toLocaleString()}
                  </span>
                  {item.originalPriceAED && (
                    <span className="text-xs font-mono text-zinc-500 line-through block">
                      AED {item.originalPriceAED.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Material */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-white leading-snug">
                  {item.title}
                </h2>
                <p className="text-xs font-mono text-amber-300/90 mt-1">
                  {item.material} • {item.color}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-300 leading-relaxed">
                {item.description}
              </p>

              {/* Atelier Specs */}
              <div className="space-y-2 p-3.5 rounded-xl bg-[#120F0D] border border-zinc-800 text-xs font-mono">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-1.5">
                  <span className="text-zinc-400">Silhouette Fit:</span>
                  <span className="text-zinc-200">{item.fit}</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-1.5">
                  <span className="text-zinc-400">Garment Care:</span>
                  <span className="text-zinc-200">{item.care}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Delivery:</span>
                  <span className="text-emerald-400">Private Armored Courier (UAE)</span>
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    Select Size (Haute French Sizing)
                  </span>
                  <button 
                    onClick={onBookFitting}
                    className="text-[10px] font-mono text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <Ruler className="w-3 h-3" /> Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.availableSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                        selectedSize === size
                          ? 'bg-amber-500 text-black font-bold'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onAddToCart(item)}
                  className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Acquire for Wardrobe</span>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleSave(item)}
                  className={`p-3 rounded-xl border transition-colors cursor-pointer ${
                    isSaved
                      ? 'bg-amber-500 text-black border-amber-400'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:text-amber-400 hover:border-amber-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleWhatsAppConsultation}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Stylist Concierge</span>
                </button>

                <button
                  type="button"
                  onClick={onBookFitting}
                  className="py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-xs transition-colors cursor-pointer"
                >
                  Book Fitting
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
