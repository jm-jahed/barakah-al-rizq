'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Heart, 
  Trash2, 
  ArrowRight, 
  MapPin, 
  Plane, 
  Eye,
  FileDown
} from 'lucide-react';
import { DESTINATIONS_DATA, Destination } from '@/data/travelData';

interface TravelWishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onRemoveWishlist: (id: string) => void;
  onSelectDestination: (dest: Destination) => void;
  onOpenInquiry: (context?: string) => void;
}

export const TravelWishlistDrawer: React.FC<TravelWishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveWishlist,
  onSelectDestination,
  onOpenInquiry,
}) => {
  if (!isOpen) return null;

  const wishlistedDestinations = DESTINATIONS_DATA.filter((d) => wishlistIds.includes(d.id));

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
            className="w-screen max-w-md bg-[#0C1018] border-l border-white/10 shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#111724]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400">
                  <Heart className="w-5 h-5 fill-rose-500" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Saved Sanctuaries</h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {wishlistedDestinations.length} Favorites Saved
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                aria-label="Close Wishlist"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              {wishlistedDestinations.length === 0 ? (
                <div className="py-20 text-center space-y-3 font-mono">
                  <Heart className="w-12 h-12 text-slate-600 mx-auto" />
                  <p className="text-slate-400 text-sm">Your luxury wishlist is empty.</p>
                  <p className="text-xs text-slate-500">Click the heart icon on any sanctuary to save it for later.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {wishlistedDestinations.map((dest) => (
                    <div
                      key={dest.id}
                      className="p-4 rounded-2xl bg-[#0F141E] border border-white/10 flex items-center justify-between gap-3 relative group"
                    >
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-16 h-16 rounded-xl object-cover border border-white/10 shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">{dest.name}</h4>
                        <span className="text-[10px] font-mono text-slate-400 block truncate">{dest.country}</span>
                        <div className="text-xs font-mono font-bold text-amber-300 mt-1">From AED {dest.priceFromAED.toLocaleString()}</div>
                      </div>

                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => onRemoveWishlist(dest.id)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onSelectDestination(dest);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold hover:bg-amber-500/30"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {wishlistedDestinations.length > 0 && (
              <div className="p-6 bg-[#090C12] border-t border-white/10 space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenInquiry(`Wishlist Consultation: ${wishlistedDestinations.map(d => d.name).join(', ')}`);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
                >
                  <span>Inquire All Saved Sanctuaries</span>
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
