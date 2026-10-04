import React from 'react';
import { Award, Clock, Heart, Plus, Check, Zap, Flame, Crown, Users } from 'lucide-react';
import { FitnessProgram } from '@/data/fitnessCatalogData';

interface FitnessItemCardProps {
  program: FitnessProgram;
  onSelect: (program: FitnessProgram) => void;
  onBook: (program: FitnessProgram) => void;
  isCompared: boolean;
  onToggleCompare: (program: FitnessProgram) => void;
  isSaved: boolean;
  onToggleSave: (program: FitnessProgram) => void;
}

export const FitnessItemCard: React.FC<FitnessItemCardProps> = ({
  program,
  onSelect,
  onBook,
  isCompared,
  onToggleCompare,
  isSaved,
  onToggleSave
}) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-zinc-950/80 border border-yellow-900/20 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-yellow-950/30">
      
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-zinc-900 cursor-pointer" onClick={() => onSelect(program)}>
        <img
          src={program.heroImage}
          alt={program.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 backdrop-blur-md text-yellow-300 border border-yellow-500/30">
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
            {program.facilityZone}
          </span>

          <div className="flex items-center gap-1.5">
            {/* Compare Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(program);
              }}
              title={isCompared ? 'Remove from comparison' : 'Compare program'}
              className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                isCompared
                  ? 'bg-yellow-500 text-zinc-950 font-bold'
                  : 'bg-black/60 text-zinc-300 hover:text-white hover:bg-black/90'
              }`}
            >
              {isCompared ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
            </button>

            {/* Wishlist Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(program);
              }}
              title={isSaved ? 'Remove from saved' : 'Save program'}
              className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                isSaved
                  ? 'bg-red-500/90 text-white'
                  : 'bg-black/60 text-zinc-300 hover:text-red-400 hover:bg-black/90'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Bottom Intensity / Exclusive Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 text-[11px]">
          <span className="px-2 py-0.5 rounded font-mono font-medium bg-black/70 backdrop-blur-sm text-zinc-300 border border-zinc-700/50">
            {program.intensityLevel}
          </span>
          {program.isBlackTierExclusive && (
            <span className="px-2 py-0.5 rounded font-semibold bg-yellow-500/90 text-zinc-950 uppercase tracking-wider text-[10px]">
              Black-Tier Access
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-yellow-400/90 font-mono">
            <span>{program.disciplineId.replace(/-/g, ' ').toUpperCase()}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {program.durationMinutes} Mins
            </span>
          </div>

          <h3
            onClick={() => onSelect(program)}
            className="text-lg font-serif font-bold text-zinc-100 hover:text-yellow-300 cursor-pointer transition-colors line-clamp-1"
          >
            {program.title}
          </h3>

          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {program.shortDescription}
          </p>
        </div>

        {/* Specs Pill Matrix */}
        <div className="grid grid-cols-2 gap-2 py-2 border-y border-zinc-900 text-[11px] text-zinc-300">
          <div className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
            <span className="truncate">~{program.caloriesBurnEstimate} kcal Burn</span>
          </div>
          <div className="flex items-center gap-1.5 truncate">
            <Award className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
            <span className="truncate" title={program.masterCoach.name}>{program.masterCoach.name}</span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-400">Session Rate</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold font-serif text-yellow-200">
                AED {program.priceAED.toLocaleString()}
              </span>
              {program.originalPriceAED && (
                <span className="text-xs text-zinc-400 line-through">
                  AED {program.originalPriceAED.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelect(program)}
              className="px-3 py-2 text-xs font-semibold rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/60 transition-colors"
            >
              Details
            </button>
            <button
              onClick={() => onBook(program)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-zinc-950 font-sans shadow-md shadow-yellow-950/50 transition-all flex items-center gap-1.5 font-bold"
            >
              <Zap className="w-3.5 h-3.5" />
              Book Pass
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
