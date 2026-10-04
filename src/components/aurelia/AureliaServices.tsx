'use client';

import React, { useState } from 'react';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { AURELIA_SERVICES_DATA, AureliaService } from '@/data/aureliaData';

interface AureliaServicesProps {
  onOpenViewing: () => void;
}

export const AureliaServices: React.FC<AureliaServicesProps> = ({ onOpenViewing }) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = ['all', 'Acquisition', 'Development', 'Architecture', 'Interiors', 'Engineering', 'Security & Wellness', 'Advisory & Legal'];

  const filteredServices = AURELIA_SERVICES_DATA.filter((s) => {
    if (selectedCat !== 'all' && s.category !== selectedCat) return false;
    return true;
  });

  return (
    <section id="services-20" className="py-24 bg-[#0C1013] border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-500/10 border border-stone-500/30 text-stone-300 text-xs font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>20 SOVEREIGN PROPERTY DISCIPLINES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Full-Spectrum Development Services
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            From rare waterfront land acquisition and architectural masterplanning to subterranean hypercar showroom engineering and DLD escrow governance.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                selectedCat === cat
                  ? 'bg-stone-200 text-black border-white shadow-[0_0_12px_rgba(214,211,209,0.3)]'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All 20 Services' : cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className="p-6 rounded-3xl bg-[#13191D] border border-stone-800 hover:border-stone-500/60 transition-all space-y-4 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider">
                    {srv.category}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-stone-300">
                    {srv.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-base font-bold font-serif text-white group-hover:text-stone-200">
                  {srv.title}
                </h3>

                <p className="text-xs font-sans text-gray-400 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-stone-300">
                <span>{srv.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            onClick={onOpenViewing}
            className="px-8 py-4 rounded-xl bg-stone-200 hover:bg-white text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
          >
            <span>CONSULT PRIVATE CLIENT ADVISOR</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
