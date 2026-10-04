'use client';

import React from 'react';
import { LuxuryProperty } from '@/data/realEstateData';
import { X, Scale, Bed, Bath, Maximize2, MapPin, Trash2, ArrowUpRight, ShieldCheck, Check } from 'lucide-react';

interface RealEstateComparatorProps {
  properties: LuxuryProperty[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onSelectProperty: (prop: LuxuryProperty) => void;
  onBookViewing: (prop: LuxuryProperty) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const RealEstateComparator: React.FC<RealEstateComparatorProps> = ({
  properties,
  onClose,
  onRemove,
  onSelectProperty,
  onBookViewing,
  currency
}) => {
  const rates = {
    AED: 1,
    USD: 0.272,
    EUR: 0.252,
    GBP: 0.215
  };
  const currentRate = rates[currency];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-7xl max-h-[92vh] bg-zinc-950 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80">
          <div className="flex items-center gap-3">
            <Scale className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-serif font-bold text-white">
              Estate Comparator ({properties.length} / 4 Selected)
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table / Matrix */}
        <div className="flex-1 overflow-x-auto overflow-y-auto p-6">
          {properties.length === 0 ? (
            <div className="py-20 text-center">
              <Scale className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
              <div className="text-zinc-300 font-serif text-lg">No properties in comparison drawer</div>
              <p className="text-zinc-500 text-xs mt-1">
                Click the scale icon on any property card to compare side-by-side.
              </p>
            </div>
          ) : (
            <div className="min-w-[700px] grid grid-cols-4 gap-4">
              {properties.map((prop) => {
                const convertedPrice = Math.round(prop.priceAED * currentRate);
                return (
                  <div key={prop.id} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Image & Remove */}
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3">
                        <img src={prop.heroImage} alt={prop.title} className="w-full h-full object-cover" />
                        <button
                          onClick={() => onRemove(prop.id)}
                          className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/70 hover:bg-rose-600 text-white transition-colors"
                          title="Remove from comparison"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Title & Location */}
                      <div className="text-[10px] font-mono text-amber-400 flex items-center gap-1 mb-1">
                        <MapPin className="w-3 h-3" />
                        <span>{prop.communityName}</span>
                      </div>
                      <h3 className="text-sm font-serif font-bold text-white line-clamp-2 mb-3">
                        {prop.title}
                      </h3>

                      {/* Pricing */}
                      <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 mb-3">
                        <div className="text-[9px] font-mono text-zinc-500 uppercase">Guide Price</div>
                        <div className="text-base font-serif font-bold text-amber-400">
                          {currency} {convertedPrice.toLocaleString()}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400">
                          AED {prop.pricePerSqftAED.toLocaleString()}/sqft
                        </div>
                      </div>

                      {/* Specs Matrix */}
                      <div className="space-y-2 text-xs font-mono text-zinc-300">
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Typology:</span>
                          <span className="font-semibold text-white">{prop.type}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Bedrooms:</span>
                          <span className="text-white">{prop.bedrooms} Suites</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Bathrooms:</span>
                          <span className="text-white">{prop.bathrooms} Baths</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Built-up Area:</span>
                          <span className="text-white">{prop.builtUpAreaSqft.toLocaleString()} sqft</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Gross Yield:</span>
                          <span className="text-emerald-400 font-bold">{prop.rentalYieldPct}%</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Developer:</span>
                          <span className="text-white truncate max-w-[120px]">{prop.developer}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Golden Visa:</span>
                          <span className="text-emerald-400 font-semibold">Eligible (10-Yr)</span>
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="pt-2 space-y-2">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectProperty(prop);
                        }}
                        className="w-full py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono transition-colors"
                      >
                        Inspect Dossier
                      </button>
                      <button
                        onClick={() => {
                          onClose();
                          onBookViewing(prop);
                        }}
                        className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold uppercase tracking-wider text-[10px] font-mono transition-colors"
                      >
                        Book Viewing
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
