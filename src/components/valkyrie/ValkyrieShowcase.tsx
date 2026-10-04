'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge, Flame, ShieldAlert, Activity, Wrench, ShieldCheck, ArrowRight, CheckCircle2, Sliders, X, Phone, Award, Trophy, Cpu, ChevronRight } from 'lucide-react';

// Hypercar Packages Data
const HYPERCAR_PACKAGES = [
  {
    id: 'full-carbon-aero',
    name: 'Bespoke Dry Carbon Fiber Aero Suite',
    category: 'Aerodynamics & Weight Reduction',
    hpGain: '+45 Downforce (kg at 250km/h)',
    price: 185000,
    priceFormatted: 'AED 185,000',
    description: 'Pre-preg autoclave 3K carbon fiber front splitter, active rear wing, diffuser, and vented bonnet custom-molded in Dubai Autodrome facility.',
    features: ['35kg Net Weight Savings', 'Wind Tunnel Validated', 'Custom Matte/Gloss Tinted Carbon', 'UV Shield Ceramic Clearcoat'],
    badge: 'Aero Flagship'
  },
  {
    id: 'twin-turbo-billet',
    name: 'Stage 3 Billet Twin-Turbo Power Pack',
    category: 'Powertrain & Engine Tuning',
    hpGain: '+350 Horsepower Increase',
    price: 240000,
    priceFormatted: 'AED 240,000',
    description: 'Dual ball-bearing billet turbochargers, upgraded intercoolers, ECU remapping, and high-flow fuel delivery engineered for UAE high ambient heat.',
    features: ['1,400+ HP Peak Capability', 'Dual Dyno Calibration', 'UAE Heat Exchanger Upgrade', 'Meth-Injection Compatible'],
    badge: 'Power Pinnacle'
  },
  {
    id: 'inconel-exhaust',
    name: 'Full Titanium / Inconel F1 Exhaust',
    category: 'Exhaust & Acoustics',
    hpGain: '+25 HP & High-F1 Sound',
    price: 75000,
    priceFormatted: 'AED 75,000',
    description: 'Hand-welded Inconel 625 superalloy exhaust system with active valvetronic remote sound control and thermal ceramic wrapping.',
    features: ['Formula 1 Acoustic Note', 'Active Valve Controller', '18kg Weight Reduction', '2,000°F Heat Resistance'],
    badge: 'Signature Sound'
  },
  {
    id: 'autodrome-track-setup',
    name: 'Autodrome VIP Track Package',
    category: 'Suspension & Telemetry',
    hpGain: 'Optimal Cornering G-Force',
    price: 110000,
    priceFormatted: 'AED 110,000',
    description: '3-way adjustable Öhlins dampers, carbon-ceramic brake cooling ducts, and live telemetry sensor suite for Dubai Autodrome lap times.',
    features: ['Öhlins TTX Custom Valving', 'Live Telemetry Data Logger', 'Corner Weight Balancing', 'Private Track Test Slot'],
    badge: 'Track Master'
  }
];

// Master Engineers
const ENGINEERS = [
  {
    name: 'Marcus Von Berg',
    role: 'Head of Aerodynamics & Carbon Design',
    credentials: 'Ex-Porsche Motorsport Engineer • 14 Yrs Experience',
    bio: 'Pioneered lightweight composite bodywork for Le Mans prototypes before establishing Valkyrie’s Dubai Autodrome composite facility.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Tariq Al-Hashemi',
    role: 'Chief Powertrain & ECU Calibration Director',
    credentials: 'MSc Mechanical Engineering • MoEC Certified Master',
    bio: 'Specialist in high-horsepower forced induction calibration optimized for Middle Eastern extreme temperatures and fuel grades.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Lucian Rossi',
    role: 'Master Chassis & Suspension Specialist',
    credentials: 'Former Ferrari Challenge Chief Tech • Monza Specialist',
    bio: 'Expert in race geometry, corner-weighting, and electronic differential tuning for mid-engine hypercars.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  }
];

export const ValkyrieShowcase: React.FC = () => {
  // Configurator state
  const [selectedVehicle, setSelectedVehicle] = useState<'bugatti' | 'ferrari' | 'porsche' | 'lamborghini'>('ferrari');
  const [stagePower, setStagePower] = useState<number>(2); // 1, 2, 3
  const [includeCarbon, setIncludeCarbon] = useState<boolean>(true);
  const [includeExhaust, setIncludeExhaust] = useState<boolean>(true);

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedPkg, setSelectedPkg] = useState<string>('full-carbon-aero');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Base specs based on vehicle
  const vehicleSpecs = {
    bugatti: { name: 'Bugatti Chiron / Tourbillon', baseHp: 1500, basePrice: 320000 },
    ferrari: { name: 'Ferrari SF90 Stradale / 296 GTB', baseHp: 1000, basePrice: 195000 },
    porsche: { name: 'Porsche 911 GT3 RS / GT2 RS', baseHp: 525, basePrice: 145000 },
    lamborghini: { name: 'Lamborghini Revuelto / SVJ', baseHp: 1015, basePrice: 210000 },
  };

  const currentVehicle = vehicleSpecs[selectedVehicle];

  // Calculate dynamic build power & price
  const calculateTune = () => {
    let hpAdded = stagePower * 120;
    let price = currentVehicle.basePrice + (stagePower * 45000);
    if (includeCarbon) {
      hpAdded += 30;
      price += 185000;
    }
    if (includeExhaust) {
      hpAdded += 25;
      price += 75000;
    }
    return {
      totalHp: currentVehicle.baseHp + hpAdded,
      totalPrice: price,
      hpAdded
    };
  };

  const tuneResult = calculateTune();
  const activePkgObj = HYPERCAR_PACKAGES.find(p => p.id === selectedPkg) || HYPERCAR_PACKAGES[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsBookingOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-gray-100 font-sans selection:bg-red-500/30 selection:text-red-300">
      
      {/* ── TOP NAV BAR ── */}
      <header className="sticky top-0 z-40 bg-[#070709]/90 backdrop-blur-xl border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              <div className="w-full h-full bg-[#070709] rounded-[10px] flex items-center justify-center">
                <Gauge className="w-5 h-5 text-red-500 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                VALKYRIE <span className="text-red-500">HYPERCARS</span>
              </span>
              <span className="block text-[10px] font-mono text-red-400/80 tracking-widest uppercase">
                Dubai Autodrome Motorsport City • UAE
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-gray-300">
            <a href="#configurator" className="hover:text-red-400 transition-colors">POWER CONFIGURATOR</a>
            <a href="#packages" className="hover:text-red-400 transition-colors">PERFORMANCE PACKS</a>
            <a href="#engineers" className="hover:text-red-400 transition-colors">RACE ENGINEERS</a>
            <a href="#facility" className="hover:text-red-400 transition-colors">AUTODROME LAB</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] cursor-pointer flex items-center gap-2"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>BOOK AUTODROME SLOT</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-red-500/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[180px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>Dubai Autodrome Motorsport Facility</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Engineering <br />
                <span className="bg-gradient-to-r from-red-400 via-amber-300 to-red-600 bg-clip-text text-transparent">
                  Unrivaled Hypercars.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
                Middle East’s premiere Motorsport-grade coachbuilder specializing in autoclave dry carbon bodywork, twin-turbo calibration, and high-temperature track endurance.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(239,68,68,0.5)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
                >
                  <span>REQUEST AUTODROME DYNO SLOT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#configurator"
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Sliders className="w-4 h-4 text-red-400" />
                  <span>3D TUNING CALCULATOR</span>
                </a>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">1,400+ HP</span>
                  <span className="text-xs text-gray-400 font-mono">Max Calibrated Output</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">1.9 Sec</span>
                  <span className="text-xs text-gray-400 font-mono">0-100 km/h Launch</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">AED 65M+</span>
                  <span className="text-xs text-gray-400 font-mono">Hypercar Builds</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-red-600/30 to-amber-500/10 border border-red-500/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80" 
                    alt="Valkyrie Hypercar Studio" 
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#070709]/90 border border-red-500/30 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                        <Gauge className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-white uppercase">Dubai Autodrome Suite 12</h4>
                        <p className="text-[11px] text-gray-400">All-Wheel Dyno & Autoclave Composite Bay</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── POWER & TUNING CALCULATOR ── */}
      <section id="configurator" className="py-24 bg-[#0B0B0E] border-b border-red-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>LIVE POWER TELEMETRY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Interactive Hypercar Configurator
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Configure your vehicle platform, tuning stage, carbon fiber aero, and exhaust spec to project horsepower gains and build cost.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Options Panel */}
            <div className="lg:col-span-7 bg-[#101014] p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* Select Platform */}
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-3">Select Base Hypercar Platform</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['ferrari', 'bugatti', 'porsche', 'lamborghini'] as const).map((platform) => (
                    <button
                      key={platform}
                      type="button"
                      onClick={() => setSelectedVehicle(platform)}
                      className={`p-3.5 rounded-xl font-mono text-xs font-bold uppercase text-left transition-all cursor-pointer border ${
                        selectedVehicle === platform
                          ? 'bg-red-600 text-white border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                          : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                      }`}
                    >
                      {vehicleSpecs[platform].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tuning Stage */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">ECU & Turbo Tuning Level</label>
                  <span className="text-sm font-mono font-extrabold text-red-400">Stage {stagePower} (+{stagePower * 120} HP)</span>
                </div>
                <input 
                  type="range" 
                  min={1} 
                  max={3} 
                  value={stagePower} 
                  onChange={(e) => setStagePower(Number(e.target.value))}
                  className="w-full accent-red-500 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Carbon & Exhaust Toggles */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                  <span className="text-xs font-mono font-bold text-gray-300 uppercase">Dry Carbon Aero Package (+30 HP Aero)</span>
                  <input 
                    type="checkbox" 
                    checked={includeCarbon}
                    onChange={(e) => setIncludeCarbon(e.target.checked)}
                    className="w-4 h-4 accent-red-500 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                  <span className="text-xs font-mono font-bold text-gray-300 uppercase">Titanium F1 Valvetronic Exhaust (+25 HP)</span>
                  <input 
                    type="checkbox" 
                    checked={includeExhaust}
                    onChange={(e) => setIncludeExhaust(e.target.checked)}
                    className="w-4 h-4 accent-red-500 cursor-pointer"
                  />
                </label>
              </div>

            </div>

            {/* Calculated Output Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#181112] to-[#0B0B0E] p-8 rounded-3xl border border-red-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-widest block">
                Projected Output & Build Fee
              </span>

              <div className="text-6xl font-extrabold font-mono text-white tracking-tight">
                {tuneResult.totalHp} <span className="text-sm text-red-400 font-sans font-bold">HP</span>
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full font-mono text-xs font-bold bg-red-500/10 text-red-400 border border-red-500/30">
                +{tuneResult.hpAdded} HP Above Factory Stock
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="block text-[11px] font-mono text-gray-400 uppercase">Estimated Build Quote</span>
                <span className="text-3xl font-extrabold text-white font-mono">AED {tuneResult.totalPrice.toLocaleString()}</span>
              </div>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] cursor-pointer"
              >
                BOOK DYNO TEST & QUOTE
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ── PERFORMANCE PACKAGES ── */}
      <section id="packages" className="py-24 bg-[#070709] border-b border-red-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono mb-3">
                <Wrench className="w-3.5 h-3.5" />
                <span>AUTODROME COACHBUILDING</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Motorsport Packages
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Every component is designed, tested, and dyno-calibrated at our 10,000 sq. ft. facility inside Dubai Autodrome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {HYPERCAR_PACKAGES.map((pkg) => (
              <div 
                key={pkg.id}
                className="p-8 rounded-3xl bg-[#111116] border border-red-500/20 hover:border-red-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 text-[11px] font-mono font-bold">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-mono text-amber-400 font-bold">{pkg.hpGain}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white group-hover:text-red-400 transition-colors mb-3">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 uppercase">Package Price</span>
                    <span className="text-2xl font-extrabold text-white font-mono">{pkg.priceFormatted}</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPkg(pkg.id);
                      setIsBookingOpen(true);
                    }}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-red-600 hover:text-white text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>RESERVE BUILD</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── RACE ENGINEERS ── */}
      <section id="engineers" className="py-24 bg-[#0B0B0E] border-b border-red-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>FORMULA & GT3 VETERANS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Master Race Engineers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENGINEERS.map((eng, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#111116] border border-white/10 hover:border-red-500/40 transition-all text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-2 border-red-500/30 p-1">
                  <img src={eng.avatar} alt={eng.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-lg font-bold text-white font-sans mb-1">{eng.name}</h3>
                <span className="text-xs font-mono text-red-400 block mb-2">{eng.role}</span>
                <span className="text-[11px] font-mono text-gray-400 block mb-4 bg-white/5 py-1 px-3 rounded-full">{eng.credentials}</span>
                <p className="text-xs text-gray-300 leading-relaxed">{eng.bio}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-20 bg-[#040406] text-gray-400 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Gauge className="w-6 h-6 text-red-500" />
              <span className="text-2xl font-extrabold text-white tracking-tight font-sans">
                VALKYRIE <span className="text-red-500">HYPERCARS</span>
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              Suite 12, Motorsport City • Dubai Autodrome, Motor City, Dubai, UAE
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 VALKYRIE HYPERCAR PERFORMANCE FZ-LLC. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-6">
              <span className="text-red-400">TEL: +971 4 399 8877</span>
              <span>AUTODROME FACILITY #5903</span>
            </div>
          </div>

        </div>
      </footer>

      {/* ── BOOKING MODAL ── */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#111116] border border-red-500/30 p-8 rounded-3xl max-w-lg w-full relative shadow-2xl"
            >
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-red-500 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-white font-sans">Autodrome Slot Reserved</h3>
                  <p className="text-xs text-gray-300 font-mono">
                    Our Master Engineer will call you within 1 hour to schedule your dyno assessment & track slot.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-mono text-red-400 uppercase font-bold block mb-1">Dubai Autodrome Booking</span>
                    <h3 className="text-xl font-bold text-white font-sans">Reserve Build Assessment</h3>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Select Package</label>
                    <select 
                      value={selectedPkg}
                      onChange={(e) => setSelectedPkg(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-red-500 outline-none"
                    >
                      {HYPERCAR_PACKAGES.map(p => (
                        <option key={p.id} value={p.id} className="bg-[#111116]">
                          {p.name} ({p.priceFormatted})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Owner Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sultan Al-Qassimi"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-red-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">UAE Contact / WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+971 50 111 2233"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-red-500 outline-none"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-[11px] text-gray-300 font-mono flex items-center justify-between">
                    <span>Package Estimate:</span>
                    <strong className="text-red-400 text-sm">{activePkgObj.priceFormatted}</strong>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] cursor-pointer"
                  >
                    CONFIRM AUTODROME APPOINTMENT
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ValkyrieShowcase;
