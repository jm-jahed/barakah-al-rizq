'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, Compass, Anchor, Sparkles, ChevronRight, Check } from 'lucide-react';
import { YachtVessel } from '@/data/neroData';

interface NeroDeckTourModalProps {
  yacht: YachtVessel | null;
  isOpen: boolean;
  onClose: () => void;
  onBookVessel: (yachtId: string) => void;
}

export const NeroDeckTourModal: React.FC<NeroDeckTourModalProps> = ({
  yacht,
  isOpen,
  onClose,
  onBookVessel
}) => {
  const [activeArea, setActiveArea] = useState<'sunDeck' | 'salon' | 'masterCabin' | 'beachClub'>('sunDeck');

  if (!isOpen || !yacht) return null;

  const areaDetails = {
    sunDeck: {
      name: 'Sun Deck & Helideck Lounge',
      desc: 'Featuring 8-person heated glass Jacuzzi, panoramic sun loungers, teppanyaki wet bar, and certified helicopter touch-and-go facility.',
      image: yacht.images.sunDeck,
      hotspots: ['8-Person Glass Jacuzzi', 'Teppanyaki Teak Bar', 'Outdoor Cinema 4K Screen', 'Helipad Viewing Lounge']
    },
    salon: {
      name: 'Main Salon & Formal Atelier',
      desc: 'Designed with custom Italian Minotti furniture, floor-to-ceiling glass panoramic windows, and formal banquet dining for 14 guests.',
      image: yacht.images.salon,
      hotspots: ['Formal Dining Banquet', 'Bang & Olufsen Marine Sound', 'Wine Cellar Cabinet', 'Cocktail Bar']
    },
    masterCabin: {
      name: 'Full-Beam Duplex Master Stateroom',
      desc: 'Private owner sanctuary with private balcony, king-sized bespoke cashmere bed, his-and-hers Italian marble bathrooms, and dedicated office study.',
      image: yacht.images.masterCabin,
      hotspots: ['Private Fold-Out Balcony', 'Calacatta Gold Marble Bath', 'Walk-in Dressing Room', 'Private Safe & Office']
    },
    beachClub: {
      name: 'Lower Beach Club & Water Sports Dock',
      desc: 'Hydraulic fold-down teak sea terraces, Finnish sauna, cold plunge, and immediate access to Seabobs, eFoils, and Williams tenders.',
      image: yacht.images.beachClub,
      hotspots: ['Hydraulic Swim Platform', 'Hamam Spa & Sauna', 'Water Toy Garage', 'Daybed Lounge']
    }
  };

  const currentArea = areaDetails[activeArea];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#091322] border border-cyan-500/40 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#040914]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Eye className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-white">{yacht.name} — 360° Virtual Deck Explorer</h3>
                <p className="text-xs font-mono text-cyan-300">{yacht.lengthFeet} FT • {yacht.builder} • Berth A-14 Dubai</p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Area Switcher Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'sunDeck', label: '1. Sun Deck & Jacuzzi' },
                { id: 'salon', label: '2. Main Salon & Dining' },
                { id: 'masterCabin', label: '3. Master Stateroom' },
                { id: 'beachClub', label: '4. Lower Beach Club' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveArea(tab.id as any)}
                  className={`py-3 px-4 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border text-left ${
                    activeArea === tab.id
                      ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Main Interactive Deck View */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-black">
              <img
                src={currentArea.image}
                alt={currentArea.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091322] via-transparent to-black/30" />

              {/* Live Overlay Banner */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-black/80 text-cyan-300 border border-cyan-500/40 font-mono text-xs font-bold backdrop-blur-md">
                  VIRTUAL TOUR AREA: {currentArea.name.toUpperCase()}
                </span>
              </div>

              {/* Bottom Info Card */}
              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-[#040914]/90 border border-cyan-500/30 backdrop-blur-md space-y-3">
                <h4 className="text-lg font-bold font-serif text-white">{currentArea.name}</h4>
                <p className="text-xs font-mono text-gray-300 leading-relaxed">{currentArea.desc}</p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {currentArea.hotspots.map((spot, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] flex items-center gap-1.5"
                    >
                      <Check className="w-3 h-3 text-cyan-400" />
                      <span>{spot}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-white/10 bg-[#040914] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-gray-400">
              Weekly Charter: <span className="text-cyan-400 font-bold">AED {yacht.weeklyRateAed.toLocaleString()}</span> (Includes {yacht.crew} Crew)
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer"
              >
                CLOSE TOUR
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookVessel(yacht.id);
                }}
                className="w-1/2 sm:w-auto px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
              >
                RESERVE THIS VESSEL →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
