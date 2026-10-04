'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Phone, Dumbbell, Flame, Clock, Heart, ShieldCheck } from 'lucide-react';
import { FitnessProgram } from '@/data/fitnessCatalogData';

interface SavedProgramsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedPrograms: FitnessProgram[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onSelectProgram: (program: FitnessProgram) => void;
  onBookAssessment: (program?: FitnessProgram) => void;
}

export const SavedProgramsDrawer: React.FC<SavedProgramsDrawerProps> = ({
  isOpen,
  onClose,
  savedPrograms,
  onRemove,
  onClear,
  onSelectProgram,
  onBookAssessment
}) => {
  const totalMonthlyEst = savedPrograms.reduce((acc, p) => acc + p.priceAED, 0);

  const handleWhatsAppConsult = () => {
    const protocolNames = savedPrograms.map(p => `• ${p.title} (AED ${p.priceAED.toLocaleString()})`).join('%0A');
    const msg = `Hi KINETIC ATHLETICA DUBAI! I have curated ${savedPrograms.length} training protocols in my athletic shortlist:%0A%0A${protocolNames}%0A%0AEstimated Total: AED ${totalMonthlyEst.toLocaleString()}%0A%0APlease arrange a private performance consultation & biometric baseline testing at DIFC Club.`;
    window.open(`https://wa.me/971509922000?text=${msg}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-[#0F0E0D] border-l border-white/10 shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                    <Heart className="w-5 h-5 fill-red-500/20" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black tracking-wider uppercase text-white font-mono flex items-center gap-2">
                      Athletic Shortlist
                      <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-bold">
                        {savedPrograms.length}
                      </span>
                    </h2>
                    <p className="text-[11px] text-gray-400 font-mono uppercase tracking-widest">
                      Saved Kinetic Protocols
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-white/5">
                {savedPrograms.length === 0 ? (
                  <div className="py-20 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-600">
                      <Dumbbell className="w-8 h-8 text-gray-500" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
                        No Saved Protocols
                      </h3>
                      <p className="text-xs text-gray-400 max-w-xs mx-auto">
                        Explore our 160 athletic performance protocols and tap the heart icon to save your preferred programs.
                      </p>
                    </div>
                  </div>
                ) : (
                  savedPrograms.map((program) => (
                    <div key={program.id} className="pt-4 first:pt-0 flex gap-4 group">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-black/60 shrink-0 border border-white/10 relative">
                        <img
                          src={program.heroImage}
                          alt={program.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[9px] uppercase font-mono tracking-widest text-red-400 font-bold truncate">
                              {program.disciplineName}
                            </span>
                            <button
                              onClick={() => onRemove(program.id)}
                              className="text-gray-500 hover:text-red-400 p-1 transition-colors"
                              title="Remove from shortlist"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <h4
                            onClick={() => {
                              onSelectProgram(program);
                              onClose();
                            }}
                            className="text-xs font-bold text-white uppercase tracking-wider hover:text-red-400 transition-colors cursor-pointer line-clamp-1"
                          >
                            {program.title}
                          </h4>
                          <div className="flex items-center gap-3 text-[10px] text-gray-400 font-mono mt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-red-400" /> {program.durationMinutes} min
                            </span>
                            <span className="flex items-center gap-1">
                              <Flame className="w-3 h-3 text-orange-400" /> {program.caloriesBurnEstimate} kcal
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5">
                          <span className="text-xs font-mono font-black text-red-400">
                            AED {program.priceAED.toLocaleString()}
                          </span>
                          <button
                            onClick={() => {
                              onSelectProgram(program);
                              onClose();
                            }}
                            className="text-[10px] font-mono text-gray-300 hover:text-white underline underline-offset-2"
                          >
                            View Specs
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Actions */}
              {savedPrograms.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-black/60 space-y-4">
                  <div className="space-y-1.5 font-mono">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Curated Protocols:</span>
                      <span className="text-white font-bold">{savedPrograms.length}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300 font-bold uppercase tracking-wider">Combined Total:</span>
                      <span className="text-base font-black text-red-400">AED {totalMonthlyEst.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <button
                      onClick={handleWhatsAppConsult}
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      Inquire via WhatsApp Concierge
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onBookAssessment();
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 transition-all"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      Book VIP Baseline Assessment
                    </button>

                    <button
                      onClick={onClear}
                      className="w-full py-2 text-center text-[10px] font-mono text-gray-500 hover:text-red-400 uppercase tracking-widest transition-colors"
                    >
                      Clear All Saved Protocols
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
