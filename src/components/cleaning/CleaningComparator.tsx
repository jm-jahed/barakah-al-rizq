'use client';

import React from 'react';
import { CleaningService } from '@/data/cleaningCatalogData';
import { X, Scale, Clock, Users, Maximize2, Trash2, ArrowUpRight, ShieldCheck, Check } from 'lucide-react';

interface CleaningComparatorProps {
  services: CleaningService[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onSelectService: (s: CleaningService) => void;
  onBookDispatch: (s: CleaningService) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const CleaningComparator: React.FC<CleaningComparatorProps> = ({
  services,
  onClose,
  onRemove,
  onSelectService,
  onBookDispatch,
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
        className="relative w-full max-w-7xl max-h-[92vh] bg-zinc-950 border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80">
          <div className="flex items-center gap-3">
            <Scale className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-serif font-bold text-white">
              Service Protocol Comparator ({services.length} / 4 Selected)
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
          {services.length === 0 ? (
            <div className="py-20 text-center">
              <Scale className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
              <div className="text-zinc-300 font-serif text-lg">No services in comparison drawer</div>
              <p className="text-zinc-500 text-xs mt-1">
                Click the scale icon on any service card to compare parameters side-by-side.
              </p>
            </div>
          ) : (
            <div className="min-w-[700px] grid grid-cols-4 gap-4">
              {services.map((s) => {
                const convertedPrice = Math.round(s.priceAED * currentRate);
                return (
                  <div key={s.id} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Image & Remove */}
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3">
                        <img src={s.heroImage} alt={s.title} className="w-full h-full object-cover" />
                        <button
                          onClick={() => onRemove(s.id)}
                          className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/70 hover:bg-rose-600 text-white transition-colors"
                          title="Remove from comparison"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[10px] font-mono text-emerald-400 mb-1">
                        {s.categoryName}
                      </div>
                      <h3 className="text-sm font-serif font-bold text-white line-clamp-2 mb-3">
                        {s.title}
                      </h3>

                      {/* Pricing */}
                      <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 mb-3">
                        <div className="text-[9px] font-mono text-zinc-500 uppercase">Package Rate</div>
                        <div className="text-base font-serif font-bold text-emerald-400">
                          {currency} {convertedPrice.toLocaleString()}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400">
                          Up to {s.sqftCoverage.toLocaleString()} sqft
                        </div>
                      </div>

                      {/* Specs Matrix */}
                      <div className="space-y-2 text-xs font-mono text-zinc-300">
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Typology:</span>
                          <span className="font-semibold text-white truncate max-w-[120px]">{s.propertyType}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Duration:</span>
                          <span className="text-white">{s.durationHours} Hours</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Crew Size:</span>
                          <span className="text-white">{s.crewSize} Staff</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Speed:</span>
                          <span className="text-emerald-400 font-bold truncate max-w-[120px]">{s.turnaroundSpeed}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Guarantee:</span>
                          <span className="text-emerald-400 font-semibold">100% Free Re-Clean</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 space-y-2">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectService(s);
                        }}
                        className="w-full py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono transition-colors"
                      >
                        Inspect Details
                      </button>
                      <button
                        onClick={() => {
                          onClose();
                          onBookDispatch(s);
                        }}
                        className="w-full py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold uppercase tracking-wider text-[10px] font-mono transition-colors"
                      >
                        Dispatch Crew
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
