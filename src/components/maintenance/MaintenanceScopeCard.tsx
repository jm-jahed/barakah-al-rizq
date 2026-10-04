'use strict';
import React from 'react';
import { MaintenanceScope } from '@/data/maintenanceCatalogData';
import { Clock, Heart, SlidersHorizontal, ArrowRight, ShieldCheck, Crown, Check, Truck, MapPin, Wrench } from 'lucide-react';

interface MaintenanceScopeCardProps {
  scope: MaintenanceScope;
  isSaved: boolean;
  isCompared: boolean;
  onToggleSave: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onSelect: (scope: MaintenanceScope) => void;
  onBook: (scope: MaintenanceScope) => void;
}

export const MaintenanceScopeCard: React.FC<MaintenanceScopeCardProps> = ({
  scope,
  isSaved,
  isCompared,
  onToggleSave,
  onToggleCompare,
  onSelect,
  onBook
}) => {
  return (
    <div className="group relative bg-neutral-900/70 hover:bg-neutral-900/90 border border-neutral-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1">
      {/* Top Media & Badges */}
      <div className="relative h-56 w-full overflow-hidden bg-neutral-950">
        <img
          src={scope.heroImage}
          alt={scope.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

        {/* Location Pill */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500 text-neutral-950 font-bold text-[10px] tracking-wider uppercase shadow-md">
            <MapPin className="w-3 h-3" />
            {scope.communityTarget.split(' ')[0]}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(scope.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-neutral-950/70 hover:bg-neutral-950 backdrop-blur-md border border-neutral-700 hover:border-rose-500/50 text-neutral-300 hover:text-rose-400 transition-all duration-200"
          title={isSaved ? 'Remove from saved' : 'Save scope'}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Response SLA & Duration Banner */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-emerald-500/30 text-[11px] font-semibold text-emerald-400">
            <Truck className="w-3.5 h-3.5" />
            {scope.responseTime}
          </span>

          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-700/60 text-[11px] font-medium text-neutral-300">
            <Clock className="w-3 h-3 text-emerald-400" />
            {scope.durationHours}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <p className="text-[11px] uppercase tracking-widest text-emerald-400/90 font-semibold mb-1">
            {scope.categoryName}
          </p>

          {/* Title */}
          <h3
            onClick={() => onSelect(scope)}
            className="text-base font-serif font-medium text-white hover:text-emerald-300 transition-colors cursor-pointer line-clamp-2 mb-2 leading-snug"
          >
            {scope.title}
          </h3>

          {/* Standards Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {scope.certifiedStandards.slice(0, 2).map((std, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-neutral-800/80 border border-neutral-700/60 text-[10px] text-neutral-300 truncate max-w-[170px]"
              >
                {std}
              </span>
            ))}
          </div>

          {/* Deliverables Highlights */}
          <div className="space-y-1 mb-4">
            {scope.deliverables.slice(0, 2).map((d, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-neutral-400">
                <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Footer Actions */}
        <div className="pt-4 border-t border-neutral-800/90 flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 block font-medium">
                Fixed UAE Rate
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-serif font-bold text-emerald-400">
                  AED {scope.priceAED.toLocaleString()}
                </span>
                {scope.originalPriceAED && (
                  <span className="text-xs text-neutral-500 line-through">
                    AED {scope.originalPriceAED.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Compare Toggle */}
            <button
              onClick={() => onToggleCompare(scope.id)}
              className={`text-[11px] flex items-center gap-1 px-2.5 py-1 rounded-md border transition-all ${
                isCompared
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                  : 'bg-neutral-800 border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-600'
              }`}
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>{isCompared ? 'Compared' : 'Compare'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelect(scope)}
              className="py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-medium transition-all text-center border border-neutral-700 hover:border-neutral-600"
            >
              Protocol
            </button>
            <button
              onClick={() => onBook(scope)}
              className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 text-xs font-bold transition-all text-center uppercase tracking-wider shadow-md hover:shadow-emerald-500/20 flex items-center justify-center gap-1"
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Dispatch Van</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
