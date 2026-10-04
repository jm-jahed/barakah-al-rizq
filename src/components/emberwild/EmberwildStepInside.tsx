'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Eye, Info, Flame, Moon, Compass, Coffee, Bath } from 'lucide-react';

interface Hotspot {
  id: string;
  name: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
  specs: string;
}

export const EmberwildStepInside: React.FC = () => {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('hotspot-sleep');

  const hotspots: Hotspot[] = [
    {
      id: 'hotspot-sleep',
      name: 'Sleeping Area',
      x: 35,
      y: 42,
      title: 'King Featherbed & Linen Canopy',
      description: 'Handcrafted solid cedar bedframe with natural organic cotton linens, hypoallergenic goose down topper, and reading lanterns.',
      specs: 'King Size 200x200cm · Temperature Regulated'
    },
    {
      id: 'hotspot-star',
      name: 'Stargazing Window',
      x: 48,
      y: 22,
      title: 'Panoramic Oculum Ceiling',
      description: 'Ultra-low iron acoustic laminated glass angled at 45 degrees directly towards true celestial north for night constellation viewing.',
      specs: 'Acoustic Glass · 99.4% UV Rejection'
    },
    {
      id: 'hotspot-fire',
      name: 'Cast-Iron Fireplace',
      x: 62,
      y: 55,
      title: 'Sealed Combustion Hearth',
      description: 'Danish cast-iron wood burning stove that provides radiant dry heat and soothing crackling ambience during cool desert nights.',
      specs: 'Low-Emission · Sustainably Harvested Wood'
    },
    {
      id: 'hotspot-bath',
      name: 'Ensuite Bathroom',
      x: 20,
      y: 50,
      title: 'Freestanding Copper Soaking Tub',
      description: 'Hand-hammered natural copper tub with rainwater rainhead shower and organic botanical soaps crafted from mountain lavender.',
      specs: 'Solar Heated Thermal Water · Greywater Recycled'
    },
    {
      id: 'hotspot-kitchen',
      name: 'Mini Kitchen & Brew Bar',
      x: 28,
      y: 68,
      title: 'Artisan Chemex & Provisions Bar',
      description: 'Equipped with temperature-controlled kettle, single-origin whole bean roasts, burr grinder, local dates, and mountain honey.',
      specs: 'Off-Grid Inverter Powered · Artisanal Pantry'
    },
    {
      id: 'hotspot-deck',
      name: 'Outdoor Deck',
      x: 75,
      y: 65,
      title: 'Cantilevered Teak Viewing Terrace',
      description: 'Floating outdoor deck perched directly over the canyon edge with sunken daybeds and sunset conversation chairs.',
      specs: 'FSC-Certified Teak · 45m² Private Footprint'
    },
    {
      id: 'hotspot-firepit',
      name: 'Sunken Firepit',
      x: 85,
      y: 80,
      title: 'Granite Ember Gathering Circle',
      description: 'Deep stone fire bowl surrounded by cushioned bench seating for midnight s’mores and acoustic conversation.',
      specs: 'Built-in Spark Arrestor · Fire Safety Certified'
    },
    {
      id: 'hotspot-view',
      name: 'Private View',
      x: 88,
      y: 30,
      title: '360° Unobstructed Horizon',
      description: 'Zero visual intrusions. Oriented to guarantee full horizon vistas without sightlines of neighboring retreats or city light glow.',
      specs: 'Protected 200m Wilderness Buffer Zone'
    }
  ];

  const activeHotspot = hotspots.find(h => h.id === activeHotspotId) || hotspots[0];

  return (
    <section className="py-24 bg-[#0a0d0a] text-stone-100 border-t border-stone-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>IMMERSIVE RETREAT ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-100">
            Step <span className="font-serif italic text-amber-400">Inside.</span>
          </h2>
          <p className="text-stone-400 text-sm mt-3 leading-relaxed">
            Explore the anatomy of an EMBERWILD geodesic dome retreat. Click or tap any interactive hotspot to inspect interior craftsmanship and off-grid technology.
          </p>
        </div>

        {/* Interactive Showroom Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-900/60 rounded-3xl border border-stone-800/80 p-6 sm:p-10">
          {/* Visual Canvas with Hotspots */}
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-3xl overflow-hidden bg-stone-950 border border-stone-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1600&q=80"
              alt="Dome Cross-Section Interior"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/20" />

            {/* Hotspots Pin Overlay */}
            {hotspots.map((spot) => {
              const isActive = activeHotspotId === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspotId(spot.id)}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group z-20 flex items-center justify-center`}
                  aria-label={spot.name}
                >
                  <span className={`absolute w-10 h-10 rounded-full animate-ping opacity-75 ${
                    isActive ? 'bg-amber-400' : 'bg-stone-400/40 group-hover:bg-amber-400/40'
                  }`} />
                  <span className={`relative w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold shadow-xl transition-all ${
                    isActive 
                      ? 'bg-amber-500 text-stone-950 scale-125 ring-4 ring-amber-400/30' 
                      : 'bg-stone-950/90 text-amber-300 border border-amber-500/50 hover:bg-amber-500 hover:text-stone-950'
                  }`}>
                    +
                  </span>

                  {/* Tooltip Label */}
                  <span className="hidden md:block absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md bg-stone-950/90 text-[10px] font-mono text-stone-200 border border-stone-800 pointer-events-none">
                    {spot.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Inspector Panel */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHotspot.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-3xl bg-stone-950 border border-stone-800 space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                    HOTSPOT PROFILE // 0{hotspots.findIndex(h => h.id === activeHotspot.id) + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div>
                  <h3 className="text-xl font-light text-stone-100">{activeHotspot.title}</h3>
                  <div className="text-xs font-mono text-stone-500 mt-1">{activeHotspot.name}</div>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  {activeHotspot.description}
                </p>

                <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800/80">
                  <div className="text-[10px] font-mono uppercase text-stone-500 mb-1">
                    Technical Specifications:
                  </div>
                  <div className="text-xs text-amber-300 font-mono">
                    {activeHotspot.specs}
                  </div>
                </div>

                {/* Hotspot Switcher Buttons */}
                <div className="pt-2 border-t border-stone-800/80">
                  <div className="text-[10px] font-mono text-stone-500 uppercase mb-2">Jump to Hotspot:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {hotspots.map((spot) => (
                      <button
                        key={spot.id}
                        onClick={() => setActiveHotspotId(spot.id)}
                        className={`text-[10px] px-2.5 py-1 rounded-lg font-mono transition-all ${
                          activeHotspotId === spot.id
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'bg-stone-900 text-stone-400 hover:text-white'
                        }`}
                      >
                        {spot.name}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
