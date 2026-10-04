'use client';

import React from 'react';
import { ExoticVehicle } from '@/data/carRentalCatalogData';
import { 
  Gauge, 
  Zap, 
  Bookmark, 
  Scale, 
  ShieldCheck, 
  Star, 
  ArrowUpRight, 
  Car,
  CheckCircle2,
  Flame
} from 'lucide-react';

interface ExoticVehicleCardProps {
  vehicle: ExoticVehicle;
  isSaved: boolean;
  isCompared: boolean;
  onToggleSave: (v: ExoticVehicle) => void;
  onToggleCompare: (v: ExoticVehicle) => void;
  onSelectVehicle: (v: ExoticVehicle) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const ExoticVehicleCard: React.FC<ExoticVehicleCardProps> = ({
  vehicle,
  isSaved,
  isCompared,
  onToggleSave,
  onToggleCompare,
  onSelectVehicle,
  currency
}) => {
  const rates = {
    AED: 1,
    USD: 0.272,
    EUR: 0.252,
    GBP: 0.215
  };

  const currentRate = rates[currency];
  const convertedPrice = Math.round(vehicle.dailyPriceAED * currentRate);
  const formattedPrice = convertedPrice.toLocaleString();

  return (
    <div className="group relative rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-black">
      {/* Top Media Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={vehicle.heroImage}
          alt={vehicle.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-300 font-semibold tracking-wider uppercase">
              {vehicle.brand}
            </span>
            {vehicle.isExclusiveReserve && (
              <span className="px-2 py-1 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-500/40 text-[9px] font-mono text-rose-300 uppercase tracking-widest font-bold">
                Exclusive Reserve
              </span>
            )}
          </div>

          {/* Quick Action Icons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(vehicle);
              }}
              title={isCompared ? 'Remove from comparison' : 'Add to compare'}
              className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                isCompared
                  ? 'bg-amber-500 text-zinc-950 border-amber-400'
                  : 'bg-zinc-950/70 text-zinc-300 border-zinc-700 hover:text-amber-400 hover:border-amber-500/50'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(vehicle);
              }}
              title={isSaved ? 'Remove from saved' : 'Save vehicle'}
              className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                isSaved
                  ? 'bg-amber-500 text-zinc-950 border-amber-400'
                  : 'bg-zinc-950/70 text-zinc-300 border-zinc-700 hover:text-amber-400 hover:border-amber-500/50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Telemetry Pill on Bottom Image */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-rose-400 font-bold flex items-center gap-1">
            <Gauge className="w-3 h-3" />
            <span>0-100: {vehicle.acceleration0100}</span>
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-[9px] font-mono text-emerald-400">
            0% Deposit
          </span>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Rating */}
          <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono mb-1.5">
            <span className="text-amber-400/90 truncate max-w-[160px]">
              {vehicle.categoryName}
            </span>
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-3 h-3 fill-current" />
              {vehicle.rating} ({vehicle.reviewsCount})
            </span>
          </div>

          {/* Vehicle Title */}
          <h3 
            onClick={() => onSelectVehicle(vehicle)}
            className="text-lg font-serif font-bold text-white hover:text-amber-300 cursor-pointer transition-colors line-clamp-1 mb-2"
          >
            {vehicle.title}
          </h3>

          {/* Specs Bar (Horsepower, Top Speed, Transmission) */}
          <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 text-[11px] font-mono text-zinc-300 mb-4">
            <div className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-rose-400" />
              <span>{vehicle.horsepower} HP</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-amber-400" />
              <span>{vehicle.topSpeed}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-emerald-400" />
              <span>{vehicle.seats} Seats</span>
            </div>
          </div>

          {/* Features preview */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {vehicle.features.slice(0, 2).map((feat, idx) => (
              <span 
                key={idx} 
                className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 truncate max-w-[140px]"
              >
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Footer */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase">
              Daily Lease ({currency})
            </div>
            <div className="text-lg sm:text-xl font-serif font-bold text-white">
              {currency} {formattedPrice} <span className="text-xs font-mono font-normal text-zinc-400">/ day</span>
            </div>
            <div className="text-[10px] font-mono text-emerald-400">
              {vehicle.freeDailyKm} KM / Day Included • 0% Deposit
            </div>
          </div>

          <button
            onClick={() => onSelectVehicle(vehicle)}
            className="p-3 rounded-xl bg-zinc-800/80 hover:bg-amber-500 text-zinc-200 hover:text-zinc-950 border border-zinc-700 hover:border-amber-400 transition-all group/btn"
          >
            <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
