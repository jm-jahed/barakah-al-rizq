import React, { useState } from 'react';
import { X, Award, Clock, Flame, Zap, ShieldCheck, Heart, Plus, Check } from 'lucide-react';
import { FitnessProgram } from '@/data/fitnessCatalogData';

interface FitnessProgramModalProps {
  program: FitnessProgram | null;
  onClose: () => void;
  onBook: (program: FitnessProgram) => void;
  isSaved: boolean;
  onToggleSave: (program: FitnessProgram) => void;
  isCompared: boolean;
  onToggleCompare: (program: FitnessProgram) => void;
}

export const FitnessProgramModal: React.FC<FitnessProgramModalProps> = ({
  program,
  onClose,
  onBook,
  isSaved,
  onToggleSave,
  isCompared,
  onToggleCompare
}) => {
  if (!program) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-yellow-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-950/60 my-auto text-zinc-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-zinc-300 hover:text-white backdrop-blur-md border border-zinc-700/50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          
          {/* Left Column: Media */}
          <div className="p-6 sm:p-8 bg-zinc-900/50 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800">
            <div>
              {/* Main Image */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-zinc-950 mb-4 border border-zinc-800">
                <img
                  src={program.gallery[activeImageIndex] || program.heroImage}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/80 text-yellow-300 border border-yellow-500/30 backdrop-blur-md">
                    {program.facilityZone}
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {program.gallery && program.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {program.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative h-16 rounded-xl overflow-hidden cursor-pointer border transition-all ${
                        activeImageIndex === idx
                          ? 'border-yellow-500 ring-2 ring-yellow-500/40'
                          : 'border-zinc-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Coach Bio Box */}
            <div className="mt-6 p-4 rounded-xl bg-zinc-950/80 border border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <div className="text-xs font-serif font-bold text-zinc-100">
                    {program.masterCoach.name}
                  </div>
                  <div className="text-[11px] text-yellow-400 font-mono">
                    {program.masterCoach.title}
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    {program.masterCoach.credentials}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Protocol Specs & Booking */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            
            <div className="space-y-5">
              {/* Discipline & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-mono tracking-widest text-yellow-400">
                  {program.disciplineName}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Rating: <span className="text-yellow-300 font-bold">{program.rating} / 5.0</span> ({program.reviewsCount} reviews)
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-100 leading-tight">
                {program.title}
              </h2>

              {/* Price Row */}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-yellow-300">
                  AED {program.priceAED.toLocaleString()}
                </span>
                {program.originalPriceAED && (
                  <span className="text-sm font-mono text-zinc-400 line-through">
                    AED {program.originalPriceAED.toLocaleString()}
                  </span>
                )}
                <span className="text-xs text-zinc-400 ml-2 font-mono">
                  (Exclusive of 5% VAT)
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
                <div>
                  <span className="text-zinc-500 text-[10px]">Session Length</span>
                  <div className="font-mono text-zinc-200 mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-yellow-500" /> {program.durationMinutes} Mins
                  </div>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px]">Energy Output</span>
                  <div className="font-mono text-zinc-200 mt-0.5 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-yellow-500" /> ~{program.caloriesBurnEstimate} kcal
                  </div>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px]">Target Level</span>
                  <div className="font-mono text-yellow-300 truncate mt-0.5">{program.intensityLevel}</div>
                </div>
              </div>

              {/* Key Outcomes */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">
                  Key Physiological Outcomes
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {program.keyOutcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-500 text-sm leading-none">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Equipment Utilized */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">
                  Elite Equipment & Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {program.equipmentUtilized.map((eq, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-[11px] bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              {/* Session Protocol Structure */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-1.5">
                  Periodized Session Breakdown
                </h4>
                <ul className="space-y-1 text-xs text-zinc-400 font-mono">
                  {program.sessionProtocol.map((step, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-yellow-400 font-bold">[{i + 1}]</span>
                      <span className="font-sans text-zinc-300">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => onToggleCompare(program)}
                  className={`flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-colors flex items-center justify-center gap-1.5 ${
                    isCompared
                      ? 'bg-yellow-500 text-zinc-950 border-yellow-500'
                      : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white'
                  }`}
                >
                  {isCompared ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  <span>{isCompared ? 'Compared' : 'Compare'}</span>
                </button>

                <button
                  onClick={() => onToggleSave(program)}
                  className={`flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-colors flex items-center justify-center gap-1.5 ${
                    isSaved
                      ? 'bg-red-500 text-white border-red-500'
                      : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-red-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                  <span>{isSaved ? 'Saved' : 'Save'}</span>
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onBook(program);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-zinc-950 shadow-lg shadow-yellow-950/60 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                <span>Book This Protocol Pass</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
