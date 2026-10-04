'use client';

import React from 'react';
import { CleaningService } from '@/data/cleaningCatalogData';
import { 
  Clock, 
  Users, 
  Maximize2, 
  Bookmark, 
  Scale, 
  ShieldCheck, 
  Star, 
  ArrowUpRight, 
  Car,
  CheckCircle2
} from 'lucide-react';

interface CleaningServiceCardProps {
  service: CleaningService;
  isSaved: boolean;
  isCompared: boolean;
  onToggleSave: (s: CleaningService) => void;
  onToggleCompare: (s: CleaningService) => void;
  onSelectService: (s: CleaningService) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const CleaningServiceCard: React.FC<CleaningServiceCardProps> = ({
  service,
  isSaved,
  isCompared,
  onToggleSave,
  onToggleCompare,
  onSelectService,
  currency
}) => {
  const rates = {
    AED: 1,
    USD: 0.272,
    EUR: 0.252,
    GBP: 0.215
  };

  const currentRate = rates[currency];
  const convertedPrice = Math.round(service.priceAED * currentRate);
  const formattedPrice = convertedPrice.toLocaleString();

  return (
    <div className="group relative rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-black">
      {/* Top Media Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-300 font-semibold tracking-wider uppercase">
              {service.propertyType}
            </span>
            {service.isPopular && (
              <span className="px-2 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-[9px] font-mono text-emerald-300 uppercase tracking-widest font-bold">
                Most Requested
              </span>
            )}
          </div>

          {/* Quick Action Icons: Save & Compare */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(service);
              }}
              title={isCompared ? 'Remove from comparison' : 'Add to compare'}
              className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                isCompared
                  ? 'bg-emerald-500 text-zinc-950 border-emerald-400'
                  : 'bg-zinc-950/70 text-zinc-300 border-zinc-700 hover:text-emerald-400 hover:border-emerald-500/50'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(service);
              }}
              title={isSaved ? 'Remove from saved' : 'Save service'}
              className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                isSaved
                  ? 'bg-emerald-500 text-zinc-950 border-emerald-400'
                  : 'bg-zinc-950/70 text-zinc-300 border-zinc-700 hover:text-emerald-400 hover:border-emerald-500/50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Status / Speed Pill on Bottom Image */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 flex items-center gap-1">
            <Clock className="w-3 h-3 text-emerald-400" />
            <span>{service.turnaroundSpeed}</span>
          </span>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono mb-1.5">
            <span className="text-emerald-400/90 truncate max-w-[160px]">
              {service.categoryName}
            </span>
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-3 h-3 fill-current" />
              {service.rating} ({service.reviewsCount})
            </span>
          </div>

          {/* Service Title */}
          <h3 
            onClick={() => onSelectService(service)}
            className="text-lg font-serif font-bold text-white hover:text-emerald-300 cursor-pointer transition-colors line-clamp-1 mb-2"
          >
            {service.title}
          </h3>

          {/* Specs Bar (Duration, Crew Size, Sqft Coverage) */}
          <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 text-[11px] font-mono text-zinc-300 mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{service.durationHours} Hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>{service.crewSize} Staff</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{service.sqftCoverage.toLocaleString()} sqft</span>
            </div>
          </div>

          {/* Equipment Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {service.equipment.slice(0, 2).map((eq, idx) => (
              <span 
                key={idx} 
                className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 truncate max-w-[140px]"
              >
                {eq}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Footer */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase">
              All-Inclusive Rate ({currency})
            </div>
            <div className="text-lg sm:text-xl font-serif font-bold text-white">
              {currency} {formattedPrice}
            </div>
            <div className="text-[10px] font-mono text-emerald-400">
              AED 0% Hidden Fees • 100% Guaranteed
            </div>
          </div>

          <button
            onClick={() => onSelectService(service)}
            className="p-3 rounded-xl bg-zinc-800/80 hover:bg-emerald-500 text-zinc-200 hover:text-zinc-950 border border-zinc-700 hover:border-emerald-400 transition-all group/btn"
          >
            <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
