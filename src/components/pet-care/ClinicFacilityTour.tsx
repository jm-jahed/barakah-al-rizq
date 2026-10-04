'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scan, 
  ShieldCheck, 
  Waves, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  Activity,
  ArrowRight
} from 'lucide-react';

const SUITES = [
  {
    id: 'ct-scan',
    title: 'Siemens 128-Slice High-Speed Diagnostic CT Suite',
    category: 'Advanced Radiographic Staging',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    description: 'Ultra-fast sub-millimeter internal imaging allowing comprehensive orthopedic, oncological, and neurological scans in under 90 seconds, significantly reducing sedation duration.',
    specs: [
      { label: 'Slice Resolution', value: '128-Slice 0.3mm Voxels' },
      { label: 'Sedation Time', value: 'Ultra-Low (< 2 min)' },
      { label: 'Radiology Turnaround', value: 'Same-Day Formal Report' },
      { label: 'Scope', value: 'Brain, Spine, Thorax, Joints' }
    ]
  },
  {
    id: 'surgery',
    title: 'Dual Positive-Pressure Sterile Surgical Operating Theaters',
    category: 'Orthopedic & Laparoscopy Suite',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    description: 'HEPA ISO-5 filtered surgical suites with laminar airflow, advanced sevoflurane anesthesia workstations, continuous multiparameter capnography, and live HD arthroscopy monitors.',
    specs: [
      { label: 'Air Filtration', value: 'Positive-Pressure HEPA ISO-5' },
      { label: 'Anesthetic Tech', value: 'Precision Sevoflurane + Syringe CRI' },
      { label: 'Surgical Workflows', value: 'TPLO, Fracture Plating, Laparoscopy' },
      { label: 'Sterility Guarantee', value: '100% Autoclaved Pack Isolation' }
    ]
  },
  {
    id: 'hydro',
    title: 'Canine Heated Aquatic Hydrotherapy & Laser Rehab Pool',
    category: 'Physical Medicine & Joint Recovery',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop',
    description: 'Temperature-regulated 32°C hydrotherapy pool with variable underwater resistance jets, buoyancy harnesses, and Class-IV deep tissue regenerative laser therapy.',
    specs: [
      { label: 'Water Temp', value: 'Regulated 32°C Sanity Pool' },
      { label: 'Rehab Equipment', value: 'Underwater Treadmill & Jets' },
      { label: 'Laser Tech', value: 'Class-IV Deep Tissue Regenerative' },
      { label: 'Supervision', value: '1-on-1 Certified Vet Physio' }
    ]
  },
  {
    id: 'feline',
    title: 'Sound-Isolated Fear-Free Feline-Only Ward & ICU',
    category: 'Cat-Friendly Gold Standard',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200&auto=format&fit=crop',
    description: 'Complete acoustic separation from canine wards, continuous Feliway pheromone diffusion, multi-level privacy hiding cubbies, and warm dimmed circadian lighting.',
    specs: [
      { label: 'Certification', value: 'ISFM Cat Friendly Gold Status' },
      { label: 'Acoustic Barrier', value: '100% Canine Noise Soundproof' },
      { label: 'Pheromone Level', value: 'Continuous Feliway Diffusion' },
      { label: 'Enrichment', value: 'Aquarium & Window Bird Views' }
    ]
  }
];

export const ClinicFacilityTour: React.FC<any> = () => {
  const [activeSuiteId, setActiveSuiteId] = useState(SUITES[0].id);

  const activeSuite = SUITES.find((s) => s.id === activeSuiteId) || SUITES[0];

  return (
    <section id="facility" className="py-24 sm:py-32 bg-[#080D13] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
            <Scan className="w-3.5 h-3.5" />
            <span>FACILITY ARCHITECTURE & SURGICAL SUITES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Hospital Infrastructure & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Advanced Clinical Theaters.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Explore our state-of-the-art diagnostic imaging suites, positive-pressure surgical theaters, and specialized rehabilitation facilities in Dubai and Abu Dhabi.
          </p>
        </div>

        {/* Suite Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {SUITES.map((suite) => {
            const isSelected = activeSuiteId === suite.id;
            return (
              <button
                key={suite.id}
                type="button"
                onClick={() => setActiveSuiteId(suite.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold shadow-xl shadow-emerald-500/10'
                    : 'bg-[#0E1720] border-white/10 text-slate-300 hover:border-white/20'
                }`}
              >
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block font-bold">
                  {suite.category}
                </span>
                <span className="text-xs font-bold font-sans line-clamp-2">
                  {suite.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Suite Showcase Deck */}
        <div className="rounded-3xl bg-[#0E1620] border border-emerald-500/30 overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Left */}
            <div className="lg:col-span-6 relative h-[350px] sm:h-[450px]">
              <img
                src={activeSuite.image}
                alt={activeSuite.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0E1620] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1620] via-transparent to-transparent lg:hidden" />
            </div>

            {/* Content Right */}
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">
                  {activeSuite.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-sans">
                  {activeSuite.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {activeSuite.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs font-mono">
                {activeSuite.specs.map((spec, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-0.5">
                    <span className="text-[10px] text-slate-400 block">{spec.label}</span>
                    <span className="text-emerald-300 font-bold block truncate">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#hero"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold text-xs uppercase font-mono flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
                >
                  <span>Book Facility Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ClinicFacilityTour;
