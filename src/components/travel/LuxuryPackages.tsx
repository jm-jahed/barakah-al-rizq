'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  Plane, 
  Calendar, 
  ArrowRight, 
  SlidersHorizontal, 
  Crown, 
  Heart,
  Eye,
  FileText
} from 'lucide-react';
import { LUXURY_PACKAGES_DATA, TravelPackage } from '@/data/travelData';

interface LuxuryPackagesProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onToggleCompare: (pkgId: string) => void;
  compareIds: string[];
  onOpenInquiry: (packageContext?: string) => void;
}

export const LuxuryPackages: React.FC<LuxuryPackagesProps> = ({
  onSelectPackage,
  onToggleCompare,
  compareIds,
  onOpenInquiry,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="packages" className="py-28 bg-[#090C12] relative overflow-hidden font-sans border-b border-white/10">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[450px] bg-amber-500/[0.03] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>ALL-INCLUSIVE SOVEREIGN ITINERARIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Signature Ultra-Luxe <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Travel Packages</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Complete turn-key journeys inclusive of Emirates First Class flights, private aviation, palatial residences, Michelin dining, and 24/7 dedicated butler service.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-amber-400 font-bold block">First Class Included</span>
            <span className="text-[11px] text-slate-500">Chauffeured DXB / AUH Departures</span>
          </div>
        </div>

        {/* 3 Flagship Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {LUXURY_PACKAGES_DATA.map((pkg, idx) => {
            const isComparing = compareIds.includes(pkg.id);

            return (
              <motion.article
                key={pkg.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.01 }}
                className="p-7 rounded-3xl bg-[#0D111A] border border-white/10 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group backdrop-blur-md"
              >
                {/* Top Accent Shimmer */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Photo Frame */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/5">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-black/40" />

                    <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-300 font-mono text-xs font-bold">
                        AED {pkg.priceFromAED.toLocaleString()}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-slate-300 font-mono text-[10px]">
                        {pkg.durationNights} Nights
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-slate-200 text-[10px] font-mono">
                      <Plane className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{pkg.flightClass}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                      {pkg.destination}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {pkg.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 font-mono">
                    <span className="text-slate-500">Best For:</span> {pkg.bestFor}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">
                      Key Inclusions:
                    </span>
                    <div className="space-y-1.5">
                      {pkg.included.slice(0, 4).map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectPackage(pkg)}
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Day-By-Day</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onToggleCompare(pkg.id)}
                      className={`p-3 rounded-xl border transition-colors cursor-pointer ${
                        isComparing
                          ? 'bg-amber-500/20 text-amber-300 border-amber-400'
                          : 'bg-white/[0.04] text-slate-400 hover:text-white border-white/10'
                      }`}
                      aria-label="Compare this package"
                      title="Compare Itinerary"
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenInquiry(`Package Booking: ${pkg.title} (AED ${pkg.priceFromAED.toLocaleString()})`)}
                    className="w-full py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white font-mono text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Instant Reservation Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
