import React from 'react';
import { X, Zap, Clock, Flame, Award } from 'lucide-react';
import { FitnessProgram } from '@/data/fitnessCatalogData';

interface FitnessComparatorProps {
  programs: FitnessProgram[];
  onRemove: (programId: string) => void;
  onClear: () => void;
  onClose: () => void;
  onBook: (program: FitnessProgram) => void;
}

export const FitnessComparator: React.FC<FitnessComparatorProps> = ({
  programs,
  onRemove,
  onClear,
  onClose,
  onBook
}) => {
  if (programs.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-zinc-950 border border-yellow-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-950/70 my-auto text-zinc-100 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-yellow-400">
              Biomechanical Matrix
            </div>
            <h3 className="text-2xl font-serif font-bold text-zinc-100">
              Side-by-Side Protocol Comparison
            </h3>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={onClear}
              className="text-xs text-zinc-400 hover:text-red-400 font-mono underline"
            >
              Clear All ({programs.length})
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="mt-6 overflow-x-auto">
          <div className="min-w-[650px] grid grid-cols-4 gap-4">
            
            {/* Metric Labels */}
            <div className="space-y-6 pt-48 text-xs font-mono text-zinc-400">
              <div className="h-8 flex items-center border-b border-zinc-900">Discipline</div>
              <div className="h-8 flex items-center border-b border-zinc-900">Facility Zone</div>
              <div className="h-8 flex items-center border-b border-zinc-900">Rate (AED)</div>
              <div className="h-8 flex items-center border-b border-zinc-900">Duration</div>
              <div className="h-8 flex items-center border-b border-zinc-900">Caloric Output</div>
              <div className="h-8 flex items-center border-b border-zinc-900">Target Level</div>
              <div className="h-8 flex items-center border-b border-zinc-900">Master Coach</div>
              <div className="h-16 flex items-center border-b border-zinc-900">Core Equipment</div>
              <div className="h-12 flex items-center">Action</div>
            </div>

            {/* Program Columns */}
            {programs.map(p => (
              <div key={p.id} className="relative flex flex-col space-y-6 bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800">
                <button
                  onClick={() => onRemove(p.id)}
                  className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-black/70 hover:bg-red-500/80 text-zinc-300 hover:text-white transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>

                {/* Header Card */}
                <div className="h-44 flex flex-col justify-between">
                  <div className="relative h-24 w-full rounded-xl overflow-hidden bg-zinc-950">
                    <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-sm font-serif font-bold text-zinc-100 line-clamp-2 mt-2">
                    {p.title}
                  </h4>
                </div>

                <div className="h-8 flex items-center text-xs text-yellow-300 font-semibold border-b border-zinc-800 truncate">
                  {p.disciplineId.replace(/-/g, ' ').toUpperCase()}
                </div>

                <div className="h-8 flex items-center text-xs text-zinc-300 border-b border-zinc-800 truncate">
                  {p.facilityZone}
                </div>

                <div className="h-8 flex items-center text-sm font-bold font-serif text-yellow-300 border-b border-zinc-800">
                  AED {p.priceAED.toLocaleString()}
                </div>

                <div className="h-8 flex items-center text-xs text-zinc-300 border-b border-zinc-800 font-mono">
                  <Clock className="w-3.5 h-3.5 text-yellow-500 mr-1.5 inline" /> {p.durationMinutes} Mins
                </div>

                <div className="h-8 flex items-center text-xs text-zinc-300 border-b border-zinc-800 font-mono">
                  <Flame className="w-3.5 h-3.5 text-yellow-500 mr-1.5 inline" /> ~{p.caloriesBurnEstimate} kcal
                </div>

                <div className="h-8 flex items-center text-xs text-zinc-300 border-b border-zinc-800 truncate">
                  {p.intensityLevel}
                </div>

                <div className="h-8 flex items-center text-xs text-zinc-200 border-b border-zinc-800 truncate" title={p.masterCoach.name}>
                  {p.masterCoach.name}
                </div>

                <div className="h-16 flex items-center text-[11px] text-zinc-400 border-b border-zinc-800 leading-tight">
                  {p.equipmentUtilized.slice(0, 2).join(', ')}
                </div>

                <div className="h-12 flex items-center pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onBook(p);
                    }}
                    className="w-full py-2.5 rounded-xl text-xs font-bold bg-yellow-500 hover:bg-yellow-400 text-zinc-950 flex items-center justify-center gap-1.5 shadow-md shadow-yellow-950/40"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    Book Pass
                  </button>
                </div>
              </div>
            ))}

            {/* Empty Slots */}
            {Array.from({ length: Math.max(0, 3 - programs.length) }).map((_, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl border border-dashed border-zinc-800 text-center text-zinc-600">
                <Zap className="w-8 h-8 mb-2 opacity-40" />
                <span className="text-xs font-mono">Empty Slot</span>
                <span className="text-[10px] mt-1">Select protocol from catalog with (+) button to compare</span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};
