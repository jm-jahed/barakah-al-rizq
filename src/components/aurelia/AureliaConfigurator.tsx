'use client';

import React, { useState } from 'react';
import { LayoutGrid, Sparkles, Check, ArrowRight, ShieldCheck, Download, MessageSquare } from 'lucide-react';
import { AURELIA_BRAND } from '@/data/aureliaData';

interface AureliaConfiguratorProps {
  onOpenViewing: () => void;
}

export const AureliaConfigurator: React.FC<AureliaConfiguratorProps> = ({ onOpenViewing }) => {
  const [archStyle, setArchStyle] = useState<string>('Contemporary Minimalist');
  const [bedrooms, setBedrooms] = useState<number>(6);
  const [hasCinema, setHasCinema] = useState<boolean>(true);
  const [hasCellar, setHasCellar] = useState<boolean>(true);
  const [hasHammam, setHasHammam] = useState<boolean>(true);
  const [hasShowroom, setHasShowroom] = useState<boolean>(true);
  const [hasBowling, setHasBowling] = useState<boolean>(false);

  // Valuation Calculation
  const baseValue = bedrooms * 18500000;
  const cinemaValue = hasCinema ? 4500000 : 0;
  const cellarValue = hasCellar ? 3800000 : 0;
  const hammamValue = hasHammam ? 5200000 : 0;
  const showroomValue = hasShowroom ? 9500000 : 0;
  const bowlingValue = hasBowling ? 4200000 : 0;

  const totalConfigValueAed = baseValue + cinemaValue + cellarValue + hammamValue + showroomValue + bowlingValue;

  return (
    <section id="configurator" className="py-24 bg-[#090C0E] border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-500/10 border border-stone-500/30 text-stone-300 text-xs font-mono">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>BESPOKE ARCHITECTURAL CONFIGURATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Custom Mansion Specification Engine
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            Design your tailor-made private estate proposal with custom master stateroom counts, subterranean automotive showrooms, and royal majlis suites.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-[#13191D] p-6 sm:p-10 rounded-3xl border border-stone-700 shadow-2xl space-y-8">
          
          {/* Top Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Architectural Style */}
            <div>
              <label className="text-xs font-mono font-bold text-stone-300 uppercase block mb-2">
                1. Architectural Aesthetic Style
              </label>
              <select
                value={archStyle}
                onChange={(e) => setArchStyle(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl bg-[#090C0E] border border-stone-600 text-white font-mono text-xs outline-none focus:border-stone-300 cursor-pointer"
              >
                <option value="Contemporary Minimalist" className="bg-[#13191D]">Contemporary Minimalist (Glass & Navona Travertine)</option>
                <option value="Modern Mediterranean" className="bg-[#13191D]">Modern Mediterranean (Moleanos Limestone & Arches)</option>
                <option value="Sculptural Neo-Arabic" className="bg-[#13191D]">Sculptural Neo-Arabic (Bronze Mashrabiya Screens)</option>
                <option value="Organic Biomimetic" className="bg-[#13191D]">Organic Biomimetic (Curved Concrete & Smoked Oak)</option>
              </select>
            </div>

            {/* Bedroom Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono font-bold text-stone-300 uppercase">
                  2. Master Bedroom Suites:
                </label>
                <span className="text-sm font-mono font-extrabold text-white">
                  {bedrooms} Master Suites
                </span>
              </div>
              <input
                type="range"
                min={4}
                max={10}
                value={bedrooms}
                onChange={(e) => setBedrooms(Number(e.target.value))}
                className="w-full accent-stone-300 bg-white/10 h-2.5 rounded-lg cursor-pointer mt-2"
              />
            </div>

          </div>

          {/* Signature Lifestyle Amenities Matrix */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold text-stone-300 uppercase block">
              3. Signature Lifestyle Spaces & Entertainment
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: 'Private Dolby Atmos Cinema', cost: '+AED 4.5M', active: hasCinema, toggle: () => setHasCinema(!hasCinema) },
                { name: '600-Bottle Sommelier Wine Vault', cost: '+AED 3.8M', active: hasCellar, toggle: () => setHasCellar(!hasCellar) },
                { name: 'Moroccan Marble Hammam & Spa', cost: '+AED 5.2M', active: hasHammam, toggle: () => setHasHammam(!hasHammam) },
                { name: 'Subterranean 8-Car Showroom', cost: '+AED 9.5M', active: hasShowroom, toggle: () => setHasShowroom(!hasShowroom) },
                { name: 'Private 2-Lane Bowling Lounge', cost: '+AED 4.2M', active: hasBowling, toggle: () => setHasBowling(!hasBowling) },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={item.toggle}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    item.active
                      ? 'bg-stone-500/15 border-stone-300 text-white'
                      : 'bg-[#090C0E] border-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${item.active ? 'bg-stone-200 text-black border-white' : 'border-white/20'}`}>
                      {item.active && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span className="text-xs font-mono font-bold">{item.name}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-300">{item.cost}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Output Card */}
          <div className="p-6 rounded-2xl bg-[#090C0E] border border-stone-600 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase block">
                Configured Turnkey Valuation ({archStyle})
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400 mt-1">
                AED {totalConfigValueAed.toLocaleString()}
              </div>
              <p className="text-xs font-mono text-stone-300 mt-1">
                Includes {bedrooms} Suites, Architect Fees, Engineering & Turnkey Handover
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenViewing}
              className="px-8 py-4 rounded-xl bg-stone-200 hover:bg-white text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(214,211,209,0.3)] cursor-pointer flex items-center gap-2 shrink-0"
            >
              <span>SUBMIT BESPOKE BLUEPRINT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
