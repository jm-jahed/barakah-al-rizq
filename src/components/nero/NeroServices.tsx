'use client';

import React from 'react';
import { Anchor, Compass, ShieldCheck, Award, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import { MARINE_SERVICES, NERO_BRAND } from '@/data/neroData';

interface NeroServicesProps {
  onOpenBooking: () => void;
}

export const NeroServices: React.FC<NeroServicesProps> = ({ onOpenBooking }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Anchor':
        return <Anchor className="w-6 h-6 text-cyan-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-400" />;
      default:
        return <Anchor className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-24 bg-[#050C18] border-b border-cyan-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>SOVEREIGN MARITIME DIVISIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Full-Spectrum Superyacht Services
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            From bespoke charter hospitality and F1 Grand Prix VIP trackside berths to multi-million dollar shipyard acquisitions and turnkey vessel management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {MARINE_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-8 rounded-3xl bg-[#091322] border border-cyan-500/20 hover:border-cyan-500/50 transition-all space-y-6 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#040914] border border-white/10 group-hover:scale-110 transition-transform">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 font-mono text-[11px] font-bold">
                    {srv.metrics}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-serif text-white">{srv.title}</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">{srv.subtitle}</p>
                </div>

                <p className="text-xs font-sans text-gray-300 leading-relaxed">
                  {srv.description}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-white/5">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>INQUIRE WITH MARINA DESK</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
