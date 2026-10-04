'use client';

import React from 'react';
import { ExoticVehicle } from '@/data/carRentalCatalogData';
import { X, Scale, Gauge, Flame, Car, Trash2, ArrowUpRight, ShieldCheck, Check, Zap } from 'lucide-react';

interface ExoticVehicleComparatorProps {
  vehicles: ExoticVehicle[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onSelectVehicle: (v: ExoticVehicle) => void;
  onBookReserve: (v: ExoticVehicle) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const ExoticVehicleComparator: React.FC<ExoticVehicleComparatorProps> = ({
  vehicles,
  onClose,
  onRemove,
  onSelectVehicle,
  onBookReserve,
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
              Supercar Telemetry Comparator ({vehicles.length} / 4 Selected)
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
          {vehicles.length === 0 ? (
            <div className="py-20 text-center">
              <Scale className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
              <div className="text-zinc-300 font-serif text-lg">No vehicles in comparison drawer</div>
              <p className="text-zinc-500 text-xs mt-1">
                Click the scale icon on any supercar card to compare specifications side-by-side.
              </p>
            </div>
          ) : (
            <div className="min-w-[700px] grid grid-cols-4 gap-4">
              {vehicles.map((v) => {
                const convertedPrice = Math.round(v.dailyPriceAED * currentRate);
                return (
                  <div key={v.id} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Image & Remove */}
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3">
                        <img src={v.heroImage} alt={v.title} className="w-full h-full object-cover" />
                        <button
                          onClick={() => onRemove(v.id)}
                          className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/70 hover:bg-rose-600 text-white transition-colors"
                          title="Remove from comparison"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[10px] font-mono text-amber-400 mb-1">
                        {v.brand}
                      </div>
                      <h3 className="text-sm font-serif font-bold text-white line-clamp-2 mb-3">
                        {v.title}
                      </h3>

                      {/* Pricing */}
                      <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 mb-3">
                        <div className="text-[9px] font-mono text-zinc-500 uppercase">Daily Lease</div>
                        <div className="text-base font-serif font-bold text-amber-400">
                          {currency} {convertedPrice.toLocaleString()}/day
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400">
                          {v.freeDailyKm} Free KM / Day
                        </div>
                      </div>

                      {/* Specs Matrix */}
                      <div className="space-y-2 text-xs font-mono text-zinc-300">
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Power:</span>
                          <span className="text-rose-400 font-bold">{v.horsepower} HP</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">0-100 km/h:</span>
                          <span className="text-white font-bold">{v.acceleration0100}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Top Speed:</span>
                          <span className="text-amber-400 font-bold">{v.topSpeed}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Deposit:</span>
                          <span className="text-emerald-400 font-semibold">0% Required</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800">
                          <span className="text-zinc-500">Seats:</span>
                          <span className="text-white">{v.seats} Seats</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 space-y-2">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectVehicle(v);
                        }}
                        className="w-full py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono transition-colors"
                      >
                        Inspect Dossier
                      </button>
                      <button
                        onClick={() => {
                          onClose();
                          onBookReserve(v);
                        }}
                        className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold uppercase tracking-wider text-[10px] font-mono transition-colors"
                      >
                        Reserve Now
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
