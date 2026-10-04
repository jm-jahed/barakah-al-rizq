'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  SlidersHorizontal, 
  Plane, 
  CheckCircle2, 
  ArrowRight, 
  Trash2,
  Crown
} from 'lucide-react';
import { LUXURY_PACKAGES_DATA, TravelPackage } from '@/data/travelData';

interface TripComparisonDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  compareIds: string[];
  onRemoveCompare: (id: string) => void;
  onSelectPackage: (pkg: TravelPackage) => void;
  onOpenInquiry: (context?: string) => void;
}

export const TripComparisonDrawer: React.FC<TripComparisonDrawerProps> = ({
  isOpen,
  onClose,
  compareIds,
  onRemoveCompare,
  onSelectPackage,
  onOpenInquiry,
}) => {
  if (!isOpen) return null;

  const comparedPackages = LUXURY_PACKAGES_DATA.filter((p) => compareIds.includes(p.id));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden font-sans">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="w-screen max-w-2xl bg-[#0C1018] border-l border-white/10 shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between bg-[#111724]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Compare Luxury Packages</h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {comparedPackages.length} Itineraries Selected
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                aria-label="Close Compare Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex-1 overflow-y-auto space-y-6">
              {comparedPackages.length === 0 ? (
                <div className="py-20 text-center space-y-3 font-mono">
                  <SlidersHorizontal className="w-12 h-12 text-slate-600 mx-auto" />
                  <p className="text-slate-400 text-sm">No packages added for comparison.</p>
                  <p className="text-xs text-slate-500">Click the sliders icon on any package to compare side-by-side.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {comparedPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="p-5 rounded-2xl bg-[#0F141E] border border-white/10 space-y-4 relative"
                    >
                      <button
                        type="button"
                        onClick={() => onRemoveCompare(pkg.id)}
                        className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400"
                        title="Remove from comparison"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="flex items-start gap-4">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-20 h-20 rounded-xl object-cover border border-white/10 shrink-0"
                        />
                        <div className="space-y-1 pr-8">
                          <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">{pkg.destination}</span>
                          <h4 className="text-sm font-bold text-white leading-snug">{pkg.title}</h4>
                          <div className="text-sm font-mono font-black text-amber-300">AED {pkg.priceFromAED.toLocaleString()}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-white/5 text-slate-300">
                        <div><span className="text-slate-500">Duration:</span> {pkg.durationNights} Nights</div>
                        <div><span className="text-slate-500">Flight:</span> {pkg.flightClass.split(' ')[0]} {pkg.flightClass.split(' ')[1]}</div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onSelectPackage(pkg);
                        }}
                        className="w-full py-2 rounded-xl bg-white/5 hover:bg-amber-500/15 border border-white/10 text-xs font-mono font-bold text-amber-300 flex items-center justify-center gap-1.5"
                      >
                        <span>View Full Itinerary</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {comparedPackages.length > 0 && (
              <div className="p-6 bg-[#090C12] border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenInquiry(`Comparison Consultation for: ${comparedPackages.map(p => p.title).join(' vs ')}`);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
                >
                  <span>Request Comparative Quote in AED</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
