'use client';

import React from 'react';
import { LuxuryProperty } from '@/data/realEstateData';
import { 
  Bed, 
  Bath, 
  Maximize2, 
  Bookmark, 
  Scale, 
  Eye, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';

interface RealEstatePropertyCardProps {
  property: LuxuryProperty;
  isSaved: boolean;
  isCompared: boolean;
  onToggleSave: (prop: LuxuryProperty) => void;
  onToggleCompare: (prop: LuxuryProperty) => void;
  onSelectProperty: (prop: LuxuryProperty) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const RealEstatePropertyCard: React.FC<RealEstatePropertyCardProps> = ({
  property,
  isSaved,
  isCompared,
  onToggleSave,
  onToggleCompare,
  onSelectProperty,
  currency
}) => {
  // Currency conversion rates
  const rates = {
    AED: 1,
    USD: 0.272,
    EUR: 0.252,
    GBP: 0.215
  };

  const currentRate = rates[currency];
  const convertedPrice = Math.round(property.priceAED * currentRate);
  const formattedPrice = convertedPrice.toLocaleString();

  return (
    <div className="group relative rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-black">
      {/* Top Media Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={property.heroImage}
          alt={property.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-300 font-semibold tracking-wider uppercase">
              {property.type}
            </span>
            {property.isExclusive && (
              <span className="px-2 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-[9px] font-mono text-amber-300 uppercase tracking-widest font-bold">
                Exclusive Reserve
              </span>
            )}
          </div>

          {/* Quick Action Icons: Save & Compare */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(property);
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
                onToggleSave(property);
              }}
              title={isSaved ? 'Remove from saved' : 'Save property'}
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

        {/* Status Pill on Bottom Image */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
            {property.status}
          </span>
          {property.goldenVisaEligible && (
            <span className="px-2 py-0.5 rounded-md bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-[9px] font-mono text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>Golden Visa</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Location & Developer */}
          <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono mb-1.5">
            <span className="flex items-center gap-1 text-amber-400/90">
              <MapPin className="w-3 h-3" />
              {property.communityName}, {property.emirate}
            </span>
            <span>{property.developer}</span>
          </div>

          {/* Property Title */}
          <h3 
            onClick={() => onSelectProperty(property)}
            className="text-lg font-serif font-bold text-white hover:text-amber-300 cursor-pointer transition-colors line-clamp-1 mb-2"
          >
            {property.title}
          </h3>

          {/* Specs Bar (Bedrooms, Bathrooms, SqFt) */}
          <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 text-[11px] font-mono text-zinc-300 mb-4">
            <div className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-amber-400" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-amber-400" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{property.builtUpAreaSqft.toLocaleString()} sqft</span>
            </div>
          </div>

          {/* Key Amenities preview */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {property.amenities.slice(0, 3).map((amenity, idx) => (
              <span 
                key={idx} 
                className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-700/50"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Footer */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase">
              Guide Price ({currency})
            </div>
            <div className="text-lg sm:text-xl font-serif font-bold text-white">
              {currency} {formattedPrice}
            </div>
            <div className="text-[10px] font-mono text-zinc-400">
              AED {property.pricePerSqftAED.toLocaleString()} / sqft
            </div>
          </div>

          <button
            onClick={() => onSelectProperty(property)}
            className="p-3 rounded-xl bg-zinc-800/80 hover:bg-amber-500 text-zinc-200 hover:text-zinc-950 border border-zinc-700 hover:border-amber-400 transition-all group/btn"
          >
            <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
