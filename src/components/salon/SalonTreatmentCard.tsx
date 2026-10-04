'use strict';
import React from 'react';
import { SalonTreatment } from '@/data/salonData';
import { Clock, Heart, SlidersHorizontal, ArrowRight, ShieldCheck, Crown, Check } from 'lucide-react';

interface SalonTreatmentCardProps {
  treatment: SalonTreatment;
  isSaved: boolean;
  isCompared: boolean;
  onToggleSave: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onSelect: (treatment: SalonTreatment) => void;
  onBook: (treatment: SalonTreatment) => void;
}

export const SalonTreatmentCard: React.FC<SalonTreatmentCardProps> = ({
  treatment,
  isSaved,
  isCompared,
  onToggleSave,
  onToggleCompare,
  onSelect,
  onBook
}) => {
  return (
    <div className="group relative bg-neutral-900/70 hover:bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1">
      {/* Top Image & Overlays */}
      <div className="relative h-56 w-full overflow-hidden bg-neutral-950">
        <img
          src={treatment.heroImage}
          alt={treatment.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
          {treatment.isOrganicCertified && (
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-neutral-950 font-bold text-[10px] tracking-wider uppercase shadow-md">
              Bio Certified
            </span>
          )}
          {treatment.isVipSuiteEligible && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-950/80 backdrop-blur-md border border-amber-500/40 text-[10px] text-amber-300 font-medium">
              <Crown className="w-3 h-3 text-amber-400" />
              VIP Suite
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(treatment.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-neutral-950/70 hover:bg-neutral-950 backdrop-blur-md border border-neutral-700 hover:border-rose-500/50 text-neutral-300 hover:text-rose-400 transition-all duration-200"
          title={isSaved ? 'Remove from saved' : 'Save treatment'}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Brand Tag Pill at Bottom of Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-700/60 text-[11px] font-medium text-neutral-300 truncate max-w-[200px]">
            {treatment.brandProduct}
          </span>

          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-700/60 text-[11px] font-medium text-neutral-300">
            <Clock className="w-3 h-3 text-amber-400" />
            {treatment.durationMinutes}m
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Subtitle */}
          <p className="text-[11px] uppercase tracking-widest text-amber-400/90 font-semibold mb-1">
            {treatment.categoryName}
          </p>

          {/* Title */}
          <h3
            onClick={() => onSelect(treatment)}
            className="text-lg font-serif font-medium text-white hover:text-amber-300 transition-colors cursor-pointer line-clamp-1 mb-2"
          >
            {treatment.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 mb-4">
            {treatment.description}
          </p>

          {/* Key Benefits Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {treatment.includedSteps.slice(0, 2).map((b: string, idx: number) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-neutral-800/80 border border-neutral-700/50 text-[10px] text-neutral-300"
              >
                <Check className="w-2.5 h-2.5 text-emerald-400" />
                <span className="truncate max-w-[130px]">{b}</span>
              </span>
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
                <span className="text-xl font-serif font-bold text-amber-400">
                  AED {treatment.priceAED.toLocaleString()}
                </span>
                {treatment.originalPriceAED && (
                  <span className="text-xs text-neutral-500 line-through">
                    AED {treatment.originalPriceAED.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Compare Toggle */}
            <button
              onClick={() => onToggleCompare(treatment.id)}
              className={`text-[11px] flex items-center gap-1 px-2.5 py-1 rounded-md border transition-all ${
                isCompared
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                  : 'bg-neutral-800 border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-600'
              }`}
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>{isCompared ? 'Compared' : 'Compare'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelect(treatment)}
              className="py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-medium transition-all text-center border border-neutral-700 hover:border-neutral-600"
            >
              Details
            </button>
            <button
              onClick={() => onBook(treatment)}
              className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 text-xs font-bold transition-all text-center uppercase tracking-wider shadow-md hover:shadow-amber-500/20"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
