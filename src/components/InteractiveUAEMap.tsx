'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  ExternalLink, 
  ArrowRight, 
  Compass, 
  Globe, 
  Building2, 
  SlidersHorizontal, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  TrendingUp
} from 'lucide-react';
import { getAllProjects, ProjectItem } from '@/data/siteData';
import { Globe3D, TARGET_COUNTRIES, TargetCountry } from './Globe3D';
// 7 Sovereign Emirates of the UAE (Primary Base Headquarters)
interface EmirateNode {
  id: string;
  name: string;
  arabicName: string;
  tagline: string;
  keyDistricts: string[];
  primarySectors: string[];
  mapPos: { x: number; y: number };
  badgePos: { x: number; y: number };
}

const UAE_EMIRATES: EmirateNode[] = [
  {
    id: 'dubai',
    name: 'Dubai',
    arabicName: 'دبي',
    tagline: 'Global Commerce, FinTech, Luxury Real Estate & Tourism',
    keyDistricts: ['DIFC', 'Downtown Dubai', 'Palm Jumeirah', 'Dubai Marina', 'Business Bay', 'Al Quoz'],
    primarySectors: ['Real Estate & PropTech', 'FinTech & Payments', 'Haute Gastronomy', 'Luxury Automotive', 'Superyachts'],
    mapPos: { x: 575, y: 310 },
    badgePos: { x: 610, y: 290 }
  },
  {
    id: 'abu-dhabi',
    name: 'Abu Dhabi',
    arabicName: 'أبوظبي',
    tagline: 'Federal Capital, Sovereign Wealth, Clean Energy & Government',
    keyDistricts: ['Al Maryah Island (ADGM)', 'Masdar City', 'Saadiyat Island', 'Yas Island', 'Al Reem Island'],
    primarySectors: ['Institutional Finance', 'Clean Energy', 'Corporate Practice', 'Government Utility'],
    mapPos: { x: 380, y: 440 },
    badgePos: { x: 320, y: 420 }
  },
  {
    id: 'sharjah',
    name: 'Sharjah',
    arabicName: 'الشارقة',
    tagline: 'Cultural Capital, Education, Publishing & Industrial Hub',
    keyDistricts: ['University City', 'Al Majaz', 'SAIF Zone', 'Muwaileh'],
    primarySectors: ['Education & Academies', 'Creative Media', 'Industrial Logistics', 'Publishing'],
    mapPos: { x: 635, y: 275 },
    badgePos: { x: 675, y: 260 }
  },
  {
    id: 'ajman',
    name: 'Ajman',
    arabicName: 'عجمان',
    tagline: 'Coastal Manufacturing, Free Zone Trade & Hospitality',
    keyDistricts: ['Ajman Free Zone', 'Corniche', 'Al Jurf Industrial'],
    primarySectors: ['Manufacturing & Trade', 'Hospitality', 'Retail E-Commerce'],
    mapPos: { x: 655, y: 250 },
    badgePos: { x: 700, y: 235 }
  },
  {
    id: 'ras-al-khaimah',
    name: 'Ras Al Khaimah',
    arabicName: 'رأس الخيمة',
    tagline: 'Tourism, Adventure Hospitality & RAKEZ Manufacturing',
    keyDistricts: ['Al Marjan Island', 'Jebel Jais', 'RAKEZ Business Zone', 'Al Hamra'],
    primarySectors: ['Resort Hospitality', 'Adventure Tourism', 'Industrial Trade'],
    mapPos: { x: 690, y: 175 },
    badgePos: { x: 730, y: 165 }
  },
  {
    id: 'fujairah',
    name: 'Fujairah',
    arabicName: 'الفجيرة',
    tagline: 'Indian Ocean Maritime Bunkering, Logistics & Scenic Tourism',
    keyDistricts: ['Fujairah Port & FOIZ', 'Al Aqah Beach', 'City Center'],
    primarySectors: ['Maritime Logistics', 'Marine Services', 'Coastal Escapes'],
    mapPos: { x: 740, y: 245 },
    badgePos: { x: 780, y: 235 }
  },
  {
    id: 'umm-al-quwain',
    name: 'Umm Al Quwain',
    arabicName: 'أم القيوين',
    tagline: 'Eco-Tourism, Blue Economy, Free Trade & Mariculture',
    keyDistricts: ['UAQ Free Trade Zone', 'Al Sinniyah Island', 'Old Town Marina'],
    primarySectors: ['Free Zone Commerce', 'Eco-Tourism', 'Marine Trade'],
    mapPos: { x: 670, y: 220 },
    badgePos: { x: 715, y: 205 }
  }
];

// Mapping real projects from siteData to primary UAE Emirates based on actual client records
const EMIRATE_PROJECT_MAP: Record<string, string[]> = {
  'dubai': [
    'real-estate-lead-platform',
    'fintech-payments',
    'corporate-law-firm',
    'artificial-intelligence',
    'car-rental',
    'restaurant-cafe',
    'superyacht-charter',
    'perfume-fragrance',
    'business-center-serviced-offices',
    'holiday-home-management',
    'car-detailing-ceramic-coating'
  ],
  'abu-dhabi': [
    'luxury-real-estate-development',
    'accounting-tax-consultancy',
    'clean-energy-hydrogen',
    'institutional-crypto-vault',
    'corporate-law-firm',
    'fintech-payments'
  ],
  'sharjah': [
    'training-education-institute',
    'coding-tech-academy',
    'private-school',
    'photography-creative-studio',
    'printing-company'
  ],
  'ajman': [
    'foodstuff-trading',
    'cold-storage-warehousing',
    'logistics-delivery',
    'auto-service-repair'
  ],
  'ras-al-khaimah': [
    'glamping-camping',
    'resort-holiday-booking',
    'desert-tourism',
    'desert-safari-adventure'
  ],
  'fujairah': [
    'water-supply',
    'logistics-delivery',
    'flight-hotel-booking'
  ],
  'umm-al-quwain': [
    'cleaning-company',
    'home-maintenance',
    'fresh-fruits-vegetables'
  ]
};

const REGIONS = [
  'All',
  'GCC & Middle East',
  'Europe',
  'North America',
  'Asia Pacific',
  'Latin America',
  'Africa'
] as const;

interface InteractiveUAEMapProps {
  onOpenOrderModal?: (plan?: string) => void;
}

export const InteractiveUAEMap: React.FC<InteractiveUAEMapProps> = ({ onOpenOrderModal }) => {
  const [activeTab, setActiveTab] = useState<'uae-base' | 'global-reach'>('uae-base');
  const [viewType, setViewType] = useState<'3d-globe' | 'territory-map'>('3d-globe');
  const [selectedEmirateId, setSelectedEmirateId] = useState<string>('dubai');
  const [selectedCountryId, setSelectedCountryId] = useState<string>('uae');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const allProjects = useMemo(() => getAllProjects(), []);

  const activeEmirate = UAE_EMIRATES.find((e) => e.id === selectedEmirateId) || UAE_EMIRATES[0];
  const activeCountry = TARGET_COUNTRIES.find((c) => c.id === selectedCountryId) || TARGET_COUNTRIES[0];

  // Matched real UAE projects
  const matchedProjects = useMemo(() => {
    const projectIds = EMIRATE_PROJECT_MAP[activeEmirate.id] || [];
    return projectIds
      .map((id) => allProjects.find((p) => p.id === id || p.slug === id))
      .filter(Boolean) as ProjectItem[];
  }, [activeEmirate.id, allProjects]);

  const filteredCountries = useMemo(() => {
    if (selectedRegion === 'All') {
      return TARGET_COUNTRIES.filter((c) => c.id !== 'uae');
    }
    return TARGET_COUNTRIES.filter((c) => c.region === selectedRegion && c.id !== 'uae');
  }, [selectedRegion]);

  return (
    <section id="uae-market-map" className="py-24 relative bg-[#07090E] border-t border-white/5 overflow-hidden font-sans">
      {/* Ambient gold glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Sovereign Positioning */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Territorial Hub & 3D Global Command Center</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              UAE Base <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">· Global Reach</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Built in the UAE. Engineered for Global Scale. WebStudio AE operates from our sovereign UAE digital engineering headquarters, architecting high-performance platforms serving regional leaders across all 7 Emirates and 50+ international target markets.
            </p>
          </div>

          {/* Telemetry Counter Deck */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="px-3.5 py-2 rounded-xl bg-black/60 border border-white/10 text-right">
              <span className="block text-[9px] font-mono text-slate-400 uppercase">BASE</span>
              <span className="text-xs font-bold font-mono text-amber-400">UAE (7 Emirates)</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-black/60 border border-white/10 text-right">
              <span className="block text-[9px] font-mono text-slate-400 uppercase">GLOBAL REACH</span>
              <span className="text-xs font-bold font-mono text-emerald-400">50+ GLOBAL MARKETS</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-black/60 border border-white/10 text-right hidden sm:block">
              <span className="block text-[9px] font-mono text-slate-400 uppercase">DELIVERY MODE</span>
              <span className="text-xs font-bold font-mono text-white">Global Edge</span>
            </div>
          </div>
        </div>

        {/* Narrative Flow Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
              01 BASE
            </span>
            <div>
              <div className="text-xs font-bold text-white">UAE Sovereign Base</div>
              <div className="text-[11px] text-slate-400">Headquarters, local compliance & 84 live platforms</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
              02 REGION
            </span>
            <div>
              <div className="text-xs font-bold text-white">GCC Regional Reach</div>
              <div className="text-[11px] text-slate-400">Saudi Arabia, Qatar, Bahrain, Kuwait cross-border reach</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
              03 GLOBAL
            </span>
            <div>
              <div className="text-xs font-bold text-white">Global Delivery</div>
              <div className="text-[11px] text-slate-400">UK, Europe, APAC, US multi-currency & edge architecture</div>
            </div>
          </div>
        </div>

        {/* Secondary Command Switcher & Region Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveTab('uae-base');
                setSelectedCountryId('uae');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                activeTab === 'uae-base'
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                  : 'bg-white/[0.03] text-slate-400 border-white/10 hover:text-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>UAE Base (7 Emirates)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('global-reach')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                activeTab === 'global-reach'
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                  : 'bg-white/[0.03] text-slate-400 border-white/10 hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Global Reach (50+ Target Markets)</span>
            </button>
          </div>

          {/* Region Filter Carousel */}
          {activeTab === 'global-reach' && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto">
              {REGIONS.map((reg) => {
                const isSelected = selectedRegion === reg;
                return (
                  <button
                    key={reg}
                    type="button"
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono whitespace-nowrap transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-amber-500/20 text-amber-300 border-amber-400/40 font-bold'
                        : 'bg-white/[0.02] text-slate-400 border-white/5 hover:text-white'
                    }`}
                  >
                    {reg}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Map & Territory Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3D Globe / 2D Territory Map (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0B0E17] border border-white/10 p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col justify-between min-h-[500px]">
            
            {/* Map Top Status Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-3 gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                  {viewType === '3d-globe'
                    ? `3D Earth • Selected: ${activeCountry.flag} ${activeCountry.name}`
                    : activeTab === 'uae-base'
                    ? `UAE Territory: ${activeEmirate.name} (${activeEmirate.arabicName})`
                    : `Target Service Market: ${activeCountry.flag} ${activeCountry.name}`}
                </span>
              </div>

              {/* Viewport Dimension Mode Switcher */}
              <div className="inline-flex p-0.5 rounded-lg bg-black/60 border border-white/10 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setViewType('3d-globe')}
                  data-cursor-text="VIEW"
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    viewType === '3d-globe'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  3D Earth Globe
                </button>
                <button
                  type="button"
                  onClick={() => setViewType('territory-map')}
                  data-cursor-text="VIEW"
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    viewType === 'territory-map'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  2D Territory Map
                </button>
              </div>
            </div>

            {/* Content Display */}
            {viewType === '3d-globe' ? (
              <div className="relative aspect-[16/10] w-full flex items-center justify-center py-1 overflow-hidden">
                <Globe3D 
                  selectedCountryId={selectedCountryId}
                  activeRegion={selectedRegion}
                  onSelectCountry={(country) => {
                    setSelectedCountryId(country.id);
                    if (country.id === 'uae') {
                      setActiveTab('uae-base');
                    } else {
                      setActiveTab('global-reach');
                    }
                  }}
                />
              </div>
            ) : (
              <div className="relative aspect-[16/10] w-full flex items-center justify-center py-2">
                <svg 
                  viewBox="0 0 1000 650" 
                  className="w-full h-full select-none"
                  style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.7))' }}
                >
                  <defs>
                    <pattern id="mapGrid2" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    </pattern>
                    <linearGradient id="activeGoldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                    <linearGradient id="landGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#171C28" />
                      <stop offset="100%" stopColor="#0F131D" />
                    </linearGradient>
                  </defs>

                  <rect width="1000" height="650" fill="url(#mapGrid2)" />

                  <text x="360" y="240" fill="rgba(255,255,255,0.12)" fontSize="18" fontFamily="monospace" letterSpacing="6">
                    ARABIAN GULF
                  </text>
                  <text x="820" y="210" fill="rgba(255,255,255,0.12)" fontSize="16" fontFamily="monospace" letterSpacing="4">
                    GULF OF OMAN
                  </text>

                  <path
                    d="M 120 460 
                       C 190 470, 240 460, 290 440 
                       C 350 420, 420 380, 480 340 
                       C 520 310, 560 280, 600 250 
                       C 630 230, 660 190, 680 140 
                       C 700 90, 720 70, 740 60
                       C 760 120, 770 180, 760 240
                       C 750 300, 730 380, 700 440
                       C 650 510, 540 560, 420 570
                       C 300 580, 180 540, 120 460 Z"
                    fill="url(#landGrad2)"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                  />

                  {UAE_EMIRATES.map((em) => {
                    const isSelected = em.id === selectedEmirateId;
                    const count = (EMIRATE_PROJECT_MAP[em.id] || []).length;

                    return (
                      <g 
                        key={em.id} 
                        className="cursor-pointer transition-all duration-300"
                        onClick={() => setSelectedEmirateId(em.id)}
                      >
                        {isSelected && (
                          <circle
                            cx={em.mapPos.x}
                            cy={em.mapPos.y}
                            r="28"
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="1.5"
                            opacity="0.4"
                            className="animate-ping"
                          />
                        )}
                        <circle
                          cx={em.mapPos.x}
                          cy={em.mapPos.y}
                          r={isSelected ? '18' : '12'}
                          fill={isSelected ? 'url(#activeGoldGrad2)' : 'rgba(255,255,255,0.06)'}
                          stroke={isSelected ? '#fef08a' : 'rgba(255,255,255,0.2)'}
                          strokeWidth={isSelected ? '3' : '1.5'}
                        />
                        <circle
                          cx={em.mapPos.x}
                          cy={em.mapPos.y}
                          r={isSelected ? '5' : '3'}
                          fill={isSelected ? '#07090E' : '#f59e0b'}
                        />
                        <g transform={`translate(${em.badgePos.x}, ${em.badgePos.y})`}>
                          <rect
                            x="-8"
                            y="-16"
                            width={em.name.length * 8 + 48}
                            height="26"
                            rx="6"
                            fill={isSelected ? 'rgba(245, 158, 11, 0.95)' : 'rgba(10, 14, 22, 0.85)'}
                            stroke={isSelected ? '#fef08a' : 'rgba(255, 255, 255, 0.15)'}
                            strokeWidth="1"
                          />
                          <text
                            x="0"
                            y="2"
                            fill={isSelected ? '#07090E' : '#ffffff'}
                            fontSize="11"
                            fontWeight={isSelected ? 'bold' : 'normal'}
                            fontFamily="monospace"
                          >
                            {em.name} ({count})
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </svg>
              </div>
            )}

            {/* Map Bottom Legend */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-3">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" /> UAE Sovereign Origin (Base)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full border border-amber-400/70" /> Global Target Delivery Market
                </span>
              </div>
              <span>Drag to rotate • Scroll to zoom • Click node to select</span>
            </div>
          </div>

          {/* Right Column: Telemetry & Detail Deck (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {viewType === 'territory-map' && activeTab === 'uae-base' ? (
              /* Emirate Detail Card (2D Territory Map Mode) */
              <div className="p-6 rounded-3xl bg-[#0B0E17] border border-amber-500/25 space-y-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-amber-400/60 relative overflow-hidden group">
                <div className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)]" />

                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold block mb-1">
                      UAE SOVEREIGN EMIRATE
                    </span>
                    <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                      <span>{activeEmirate.name}</span>
                      <span className="text-sm font-sans font-normal text-amber-400/80">
                        {activeEmirate.arabicName}
                      </span>
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">PROJECTS</span>
                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {matchedProjects.length} LIVE
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeEmirate.tagline}
                </p>

                {/* Key Districts */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Key Economic Districts:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeEmirate.keyDistricts.map((district) => (
                      <span key={district} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/10">
                        {district}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Sectors */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Dominant Industry Sectors:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeEmirate.primarySectors.map((sec) => (
                      <span key={sec} className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Matched Live Projects */}
                {matchedProjects.length > 0 && (
                  <div className="space-y-2.5 pt-2 border-t border-white/10">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Featured UAE Platforms:</span>
                    <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
                      {matchedProjects.slice(0, 4).map((p) => (
                        <Link
                          key={p.id}
                          href={`/work/${p.slug}`}
                          className="flex items-center justify-between p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all text-xs group/link"
                        >
                          <span className="font-medium text-slate-200 group-hover/link:text-amber-400 transition-colors truncate">
                            {p.title}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-amber-400 transition-colors shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Global Target Market Profile Card (Exact Match with Screenshot) */
              <div className="p-6 rounded-3xl bg-[#0B0E17] border border-amber-500/25 space-y-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-amber-400/60 relative overflow-hidden group">
                <div className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)]" />

                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold block mb-1">
                      {activeCountry.status === 'Primary Base' ? 'PRIMARY BASE HEADQUARTERS' : 'MARKET WE SERVE'}
                    </span>
                    <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                      <span>{activeCountry.name}</span>
                      <span className="text-xs font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                        {activeCountry.code}
                      </span>
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">CLASSIFICATION</span>
                    <span className={`text-xs font-bold font-mono px-2.5 py-1 rounded ${
                      activeCountry.status === 'Primary Base' 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}>
                      {activeCountry.region}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeCountry.scope}
                </p>

                {/* Data Specifications */}
                <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs font-mono">
                  <div className="flex justify-between items-center py-1 border-b border-white/5">
                    <span className="text-slate-400">Currency Capability:</span>
                    <span className="text-amber-300 font-bold">{activeCountry.currency}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/5">
                    <span className="text-slate-400">Edge Infrastructure:</span>
                    <span className="text-emerald-400 font-bold">{activeCountry.edgeRouting}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-400">Engineering Origin:</span>
                    <span className="text-white">WebStudio AE Dubai & Abu Dhabi</span>
                  </div>
                </div>
              </div>
            )}

            {/* Action Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent border border-amber-500/25 hover:border-amber-400/50 hover:shadow-[0_10px_25px_rgba(245,158,11,0.15)] transition-all duration-300 flex items-center justify-between gap-4 shadow-lg">
              <div>
                <div className="text-xs font-bold text-white">
                  {activeCountry.status === 'Primary Base' 
                    ? 'Deploying a Platform in the UAE?' 
                    : `Deploying from UAE into ${activeCountry.name}?`}
                </div>
                <div className="text-[11px] text-slate-400">
                  Digital platforms engineered for businesses across borders.
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenOrderModal?.(`Deployment Target: ${activeCountry.name}`)}
                data-cursor-text="START"
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-md shadow-amber-500/20"
              >
                <span>Consult</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
