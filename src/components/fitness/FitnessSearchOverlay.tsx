'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Dumbbell, Flame, Clock, ArrowRight, MapPin } from 'lucide-react';
import { FitnessProgram } from '@/data/fitnessCatalogData';

interface FitnessSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  protocols: FitnessProgram[];
  onSelectProgram: (program: FitnessProgram) => void;
}

export const FitnessSearchOverlay: React.FC<FitnessSearchOverlayProps> = ({
  isOpen,
  onClose,
  protocols,
  onSelectProgram
}) => {
  const [query, setQuery] = useState('');
  const [activeDiscipline, setActiveDiscipline] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setActiveDiscipline('all');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredProtocols = protocols.filter(p => {
    const matchesDisc = activeDiscipline === 'all' || p.disciplineId === activeDiscipline || p.disciplineName === activeDiscipline;
    const q = query.toLowerCase().trim();
    if (!q) return matchesDisc;

    return (
      matchesDisc &&
      (p.title.toLowerCase().includes(q) ||
        p.disciplineName.toLowerCase().includes(q) ||
        p.facilityZone.toLowerCase().includes(q) ||
        p.intensityLevel.toLowerCase().includes(q) ||
        p.masterCoach.name.toLowerCase().includes(q) ||
        p.equipmentUtilized.some((e: string) => e.toLowerCase().includes(q)) ||
        p.keyOutcomes.some((g: string) => g.toLowerCase().includes(q)))
    );
  }).slice(0, 16);

  const uniqueDisciplines = ['all', ...Array.from(new Set(protocols.map(p => p.disciplineName)))];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex items-start justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#12100F] border border-red-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
          >
            {/* Search Input Bar */}
            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center gap-3 bg-black/40">
              <Search className="w-6 h-6 text-red-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search 160 athletic protocols, biomechanics, cryo recovery, coaches..."
                className="w-full bg-transparent border-none text-white text-base sm:text-lg focus:outline-none placeholder-gray-500 font-mono"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-gray-400 hover:text-white rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 uppercase">
                <span>ESC</span>
              </div>
            </div>

            {/* Quick Discipline Filter Pills */}
            <div className="px-4 sm:px-6 py-3 border-b border-white/5 bg-white/[0.02] flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[10px] uppercase font-mono text-gray-500 tracking-wider shrink-0 mr-1">
                Discipline:
              </span>
              {uniqueDisciplines.map((disc) => (
                <button
                  key={disc}
                  onClick={() => setActiveDiscipline(disc)}
                  className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeDiscipline === disc
                      ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/30'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {disc === 'all' ? 'All (160)' : disc}
                </button>
              ))}
            </div>

            {/* Search Results Grid */}
            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
              {filteredProtocols.length === 0 ? (
                <div className="py-16 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white/5 mx-auto flex items-center justify-center text-gray-500">
                    <Search className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-mono text-white font-bold uppercase">No matching performance protocols</p>
                    <p className="text-xs text-gray-400">Try searching &quot;Olympic&quot;, &quot;Pilates&quot;, &quot;VO2 Max&quot;, &quot;Cryotherapy&quot; or &quot;Boxing&quot;.</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredProtocols.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        onSelectProgram(p);
                        onClose();
                      }}
                      className="group p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-red-500/40 transition-all cursor-pointer flex gap-3.5 items-center"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-black shrink-0 border border-white/10 relative">
                        <img
                          src={p.heroImage}
                          alt={p.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[9px] uppercase font-mono tracking-widest text-red-400 font-bold truncate">
                            {p.disciplineName}
                          </span>
                          <span className="text-gray-600 text-[9px]">•</span>
                          <span className="text-[9px] font-mono text-gray-400 truncate">
                            {p.facilityZone}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-red-400 transition-colors truncate">
                          {p.title}
                        </h4>
                        <div className="flex items-center justify-between mt-1 text-[10px] font-mono text-gray-400">
                          <span className="flex items-center gap-1">
                            <Flame className="w-3 h-3 text-orange-400" /> {p.caloriesBurnEstimate} kcal
                          </span>
                          <span className="text-red-400 font-bold">AED {p.priceAED.toLocaleString()}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Footer */}
            <div className="p-4 border-t border-white/10 bg-black/50 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400" /> DIFC & Palm Jumeirah Clubs
                </span>
                <span className="hidden sm:inline text-gray-600">|</span>
                <span className="hidden sm:inline">Statutory UAE Sports Council Approved</span>
              </div>
              <span className="text-red-400 font-bold">160 Protocols Available</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
