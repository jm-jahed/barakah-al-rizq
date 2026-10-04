'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Volume2, Sun, ShieldCheck, ArrowRight, CheckCircle2, MapPin, Phone, Mail, Clock, MessageSquare, Building2, Sliders, X, Send, Award, SlidersHorizontal, Wifi, Tv, Layers } from 'lucide-react';

// Villa Packages Data
const AUTOMATION_SYSTEMS = [
  {
    id: 'knx-lighting',
    name: 'KNX Adaptive Architectural Lighting',
    category: 'Lighting & Shading',
    protocol: 'KNX / DALI-2 Protocol',
    investment: 'AED 120,000',
    description: 'Human-centric circadian lighting that adjusts color temperature (2700K-6500K) dynamically throughout the day with silent motorized Lutron shades.',
    features: ['Dynamic Circadian Rhythm Control', 'Invisible Flush In-Ceiling Fixtures', 'Zero-Noise Motorized Roller Shades', 'Custom Engraved Keypads'],
    badge: 'Flagship System'
  },
  {
    id: 'invisible-audio',
    name: 'Sonance Invisible Architectural Audio',
    category: 'Acoustics & Audio',
    protocol: 'AirPlay 2 / Dante Audio',
    investment: 'AED 185,000',
    description: 'Speakers plastered completely into drywall and ceilings, rendering them 100% invisible while delivering audiophile-grade 96kHz multi-room sound.',
    features: ['100% Concealed In-Wall Transducers', 'Dolby Atmos Spatial Calibration', 'Multi-Zone Independent Control', 'No Visible Grilles or Wires'],
    badge: 'Acoustic Innovation'
  },
  {
    id: 'private-cinema',
    name: 'Bespoke 4K Laser Private Cinema',
    category: 'Home Theater',
    protocol: 'StormAudio / Barco 4K',
    investment: 'AED 340,000',
    description: 'Reference 15.4.6 channel Dolby Atmos private cinema room with Barco 4K RGB laser projection, acoustic wall treatment, and motorized recliner seats.',
    features: ['15.4.6 Channel Dolby Atmos Rig', 'Micro-Perforated 4K Screen', 'Custom Fabric Acoustic Walls', 'Motorized Starry Sky Ceiling'],
    badge: 'Ultimate Luxury'
  },
  {
    id: 'villa-security',
    name: 'Biometric Access & Cyber-Secured Gateway',
    category: 'Access & Security',
    protocol: 'Encrypted Fiber Gateway',
    investment: 'AED 85,000',
    description: 'Face-recognition door entry, thermal perimeter cameras, and encrypted enterprise Wi-Fi 7 access points for total privacy.',
    features: ['3D Facial Recognition Entry', 'Thermal Perimeter Analytics', 'Sub-Millisecond Wi-Fi 7 Mesh', 'Air-Gapped Local Server Control'],
    badge: 'Complete Privacy'
  }
];

// Scene Simulator Data (Function 2)
const SCENE_PRESETS = [
  {
    id: 'cinema',
    name: 'Private Cinema Mode',
    temp: '2200K (Warm Ambient)',
    dimming: '5%',
    db: '105 dB SPL',
    speakers: '15 Active Speakers',
    bgClass: 'from-purple-900/40 via-[#0A0D14] to-[#0A0D14]'
  },
  {
    id: 'lounge',
    name: 'Midnight Lounge',
    temp: '2700K (Amber Glow)',
    dimming: '25%',
    db: '72 dB SPL',
    speakers: '8 Active Zones',
    bgClass: 'from-amber-900/40 via-[#0A0D14] to-[#0A0D14]'
  },
  {
    id: 'wellness',
    name: 'Sunrise Wellness',
    temp: '5500K (Bright Daylight)',
    dimming: '90%',
    db: '45 dB Natural Ambient',
    speakers: '4 Garden Zones',
    bgClass: 'from-cyan-900/40 via-[#0A0D14] to-[#0A0D14]'
  }
];

export const AuraShowcase: React.FC = () => {
  // ── ADVANCED FUNCTION 1: SMART VILLA ESTIMATOR STATE ──
  const [villaType, setVillaType] = useState<'palm' | 'emirates' | 'penthouse' | 'mansion'>('palm');
  const [sqftArea, setSqftArea] = useState<number>(10000);
  const [includeAudio, setIncludeAudio] = useState<boolean>(true);
  const [includeCinema, setIncludeCinema] = useState<boolean>(false);

  // ── ADVANCED FUNCTION 2: ROOM AUDIO & LIGHTING SIMULATOR ──
  const [activeSceneId, setActiveSceneId] = useState<string>('lounge');

  // ── ADVANCED FUNCTION 3: SHOWROOM EXPERIENCE BOOKING FLOW ──
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [selectedRoom, setSelectedRoom] = useState<string>('cinema-room');
  const [bookingDate, setBookingDate] = useState<string>('2026-09-12');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [villaLocation, setVillaLocation] = useState<string>('Palm Jumeirah');
  const [bookingComplete, setBookingComplete] = useState<boolean>(false);

  // ── ADVANCED FUNCTION 4: CONTACT FORM STATE ──
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const villaMultiplier = {
    palm: 38,
    emirates: 42,
    penthouse: 35,
    mansion: 48,
  }[villaType];

  const calculateEstimate = () => {
    let base = sqftArea * villaMultiplier;
    if (includeAudio) base += 185000;
    if (includeCinema) base += 340000;
    return Math.round(base);
  };

  const estTotal = calculateEstimate();
  const activeScene = SCENE_PRESETS.find(s => s.id === activeSceneId) || SCENE_PRESETS[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingComplete(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-gray-100 font-sans selection:bg-purple-500/30 selection:text-purple-300">
      
      {/* ── TOP NAV BAR ── */}
      <header className="sticky top-0 z-40 bg-[#07090E]/90 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-500 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <div className="w-full h-full bg-[#07090E] rounded-[10px] flex items-center justify-center">
                <Home className="w-5 h-5 text-purple-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                AURA <span className="text-purple-400">SMART HOMES</span>
              </span>
              <span className="block text-[10px] font-mono text-purple-400/80 tracking-widest uppercase">
                Dubai Design District (d3) • Suite 302
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-gray-300">
            <a href="#estimator" className="hover:text-purple-400 transition-colors">VILLA ESTIMATOR</a>
            <a href="#simulator" className="hover:text-purple-400 transition-colors">SCENE SIMULATOR</a>
            <a href="#systems" className="hover:text-purple-400 transition-colors">KNX SYSTEMS</a>
            <a href="#showroom" className="hover:text-purple-400 transition-colors">D3 SHOWROOM BOOKING</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">ATELIER CONTACT</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#showroom"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer flex items-center gap-2"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>BOOK D3 SHOWROOM</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-purple-500/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[180px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>100% Certified KNX & Dolby Atmos Partner • UAE</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Architectural Lighting <br />
                <span className="bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-400 bg-clip-text text-transparent">
                  & Invisible Sound.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
                Dubai’s premier smart home atelier for Emirates Hills and Palm Jumeirah waterfront estates specializing in KNX adaptive lighting, zero-grille invisible wall speakers, and 4K laser cinemas.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#estimator"
                  className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
                >
                  <span>CALCULATE VILLA AUTOMATION</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#simulator"
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-4 h-4 text-purple-400" />
                  <span>TEST ROOM SCENE SIMULATOR</span>
                </a>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">180+</span>
                  <span className="text-xs text-gray-400 font-mono">Luxury Villas Automated</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">0 Grilles</span>
                  <span className="text-xs text-gray-400 font-mono">100% Concealed Speakers</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">AED 45M+</span>
                  <span className="text-xs text-gray-400 font-mono">Installed Systems</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-purple-500/30 to-indigo-500/10 border border-purple-500/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                    alt="Aura Smart Villa" 
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#07090E]/90 border border-purple-500/30 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                        <Home className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-white uppercase">Dubai Design District (d3)</h4>
                        <p className="text-[11px] text-gray-400">Building 4, Suite 302 Private Showroom</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ADVANCED FUNCTION 1: SMART VILLA ESTIMATOR ── */}
      <section id="estimator" className="py-24 bg-[#0A0E17] border-b border-purple-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 1: VILLA AUTOMATION ESTIMATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
              Smart Villa System Calculator
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Select your property archetype, built-up square footage, and acoustic packages to estimate hardware and commissioning fees in AED.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Options Panel */}
            <div className="lg:col-span-7 bg-[#101726] p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* Select Villa Type */}
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-3">Property Location Archetype</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'palm', label: 'Palm Jumeirah Villa' },
                    { id: 'emirates', label: 'Emirates Hills Estate' },
                    { id: 'penthouse', label: 'DIFC Luxury Penthouse' },
                    { id: 'mansion', label: 'Meydan Grand Mansion' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setVillaType(item.id as any)}
                      className={`p-3.5 rounded-xl font-mono text-xs font-bold uppercase text-left transition-all cursor-pointer border ${
                        villaType === item.id
                          ? 'bg-purple-600 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                          : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">Built-Up Area (Sq. Ft.)</label>
                  <span className="text-sm font-mono font-extrabold text-purple-400">{sqftArea.toLocaleString()} Sq. Ft.</span>
                </div>
                <input 
                  type="range" 
                  min={5000} 
                  max={30000} 
                  step={1000}
                  value={sqftArea} 
                  onChange={(e) => setSqftArea(Number(e.target.value))}
                  className="w-full accent-purple-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                  <span className="text-xs font-mono font-bold text-gray-300 uppercase">Sonance Invisible In-Wall Speakers (+AED 185k)</span>
                  <input 
                    type="checkbox" 
                    checked={includeAudio}
                    onChange={(e) => setIncludeAudio(e.target.checked)}
                    className="w-4 h-4 accent-purple-500 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                  <span className="text-xs font-mono font-bold text-gray-300 uppercase">15.4.6 Dolby Atmos 4K Private Cinema (+AED 340k)</span>
                  <input 
                    type="checkbox" 
                    checked={includeCinema}
                    onChange={(e) => setIncludeCinema(e.target.checked)}
                    className="w-4 h-4 accent-purple-500 cursor-pointer"
                  />
                </label>
              </div>

            </div>

            {/* Calculated Output Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#1E1632] to-[#0A0E17] p-8 rounded-3xl border border-purple-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest block">
                Turnkey KNX System Estimate
              </span>

              <div className="text-5xl font-extrabold font-mono text-white tracking-tight">
                AED {estTotal.toLocaleString()}
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full font-mono text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30">
                100% Certified KNX / Lutron / Crestron Integration
              </div>

              <a
                href="#showroom"
                className="block w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer"
              >
                BOOK SHOWROOM DEMO FOR YOUR VILLA
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 2: ROOM SCENE SIMULATOR ── */}
      <section id="simulator" className="py-24 bg-[#07090E] border-b border-purple-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 2: INTERACTIVE SCENE SIMULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
              Test Room Ambient Scenes
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Select lighting & sound presets to preview real-time color temperatures, dimming percentages, and acoustic SPL levels.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#101726] p-8 rounded-3xl border border-purple-500/30 shadow-2xl">
            
            {/* Scene Selector Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {SCENE_PRESETS.map((sc) => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => setActiveSceneId(sc.id)}
                  className={`p-4 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                    activeSceneId === sc.id
                      ? 'bg-purple-600 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:text-white'
                  }`}
                >
                  {sc.name}
                </button>
              ))}
            </div>

            {/* Dynamic Visual Simulation Box */}
            <div className={`p-8 rounded-2xl bg-gradient-to-b ${activeScene.bgClass} border border-white/10 transition-all duration-500 text-center space-y-6`}>
              <h3 className="text-2xl font-bold text-white font-sans">{activeScene.name}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block">Color Temp</span>
                  <span className="text-lg font-mono font-bold text-purple-300">{activeScene.temp}</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block">Light Dimming</span>
                  <span className="text-lg font-mono font-bold text-purple-300">{activeScene.dimming}</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block">Acoustic Level</span>
                  <span className="text-lg font-mono font-bold text-purple-300">{activeScene.db}</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block">Speaker Setup</span>
                  <span className="text-lg font-mono font-bold text-purple-300">{activeScene.speakers}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 3: MULTI-STEP SHOWROOM BOOKING FLOW ── */}
      <section id="showroom" className="py-24 bg-[#0A0E17] border-b border-purple-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 3: D3 SHOWROOM EXPERIENCE FLOW</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
              Book Private d3 Showroom Experience
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Experience invisible speakers, 4K Dolby Atmos cinema, and KNX lighting scenes at our private Dubai Design District showroom.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-[#101726] p-8 sm:p-10 rounded-3xl border border-purple-500/30 shadow-2xl relative">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 font-mono text-xs">
              <div className={`flex items-center gap-2 ${bookingStep >= 1 ? 'text-purple-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[10px]">1</span>
                <span>Experience Room</span>
              </div>
              <div className={`flex items-center gap-2 ${bookingStep >= 2 ? 'text-purple-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[10px]">2</span>
                <span>Date & Location</span>
              </div>
              <div className={`flex items-center gap-2 ${bookingStep >= 3 ? 'text-purple-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[10px]">3</span>
                <span>Client Info</span>
              </div>
            </div>

            {bookingComplete ? (
              <div className="text-center py-12 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-purple-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white font-sans">d3 Showroom Reservation Confirmed</h3>
                <p className="text-xs text-gray-300 font-mono leading-relaxed">
                  Private VIP Pass sent to <strong>{clientPhone}</strong>. Valet parking reserved at Dubai Design District Building 4, Suite 302.
                </p>
                <button
                  onClick={() => {
                    setBookingComplete(false);
                    setBookingStep(1);
                  }}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-purple-500 hover:text-white font-mono text-xs font-bold uppercase transition-all"
                >
                  NEW SHOWROOM BOOKING
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {/* STEP 1 */}
                {bookingStep === 1 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-purple-400 uppercase block">Step 1: Select Experience Suite</label>
                    <div className="space-y-3">
                      {[
                        { id: 'cinema-room', name: '4K Dolby Atmos Private Cinema' },
                        { id: 'invisible-audio-suite', name: 'Sonance Invisible Audio Gallery' },
                        { id: 'knx-lighting-suite', name: 'KNX Adaptive Lighting Experience' },
                      ].map((item) => (
                        <label 
                          key={item.id}
                          className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                            selectedRoom === item.id
                              ? 'bg-purple-500/15 border-purple-400 text-white'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input 
                              type="radio" 
                              name="expRoom"
                              checked={selectedRoom === item.id}
                              onChange={() => setSelectedRoom(item.id)}
                              className="accent-purple-400"
                            />
                            <span className="text-xs font-mono font-bold">{item.name}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setBookingStep(2)}
                      className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold font-mono text-xs uppercase tracking-wider transition-all mt-4"
                    >
                      NEXT STEP: DATE & VILLA →
                    </button>
                  </div>
                )}

                {/* STEP 2 */}
                {bookingStep === 2 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-purple-400 uppercase block">Step 2: Date & Villa Community</label>
                    
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Preferred Date</label>
                      <input 
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Property Community Location</label>
                      <select 
                        value={villaLocation}
                        onChange={(e) => setVillaLocation(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                      >
                        <option value="Palm Jumeirah" className="bg-[#101726]">Palm Jumeirah</option>
                        <option value="Emirates Hills" className="bg-[#101726]">Emirates Hills</option>
                        <option value="Dubai Hills" className="bg-[#101726]">Dubai Hills Estate</option>
                        <option value="Meydan" className="bg-[#101726]">Meydan Mansions</option>
                      </select>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => setBookingStep(1)}
                        className="w-1/3 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
                      >
                        ← BACK
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingStep(3)}
                        className="w-2/3 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold font-mono text-xs uppercase"
                      >
                        NEXT: CLIENT DETAILS →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {bookingStep === 3 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-purple-400 uppercase block">Step 3: Client Details</label>
                    
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Full Legal Name *</label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Sultan Al-Nuaimi"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">UAE Phone / WhatsApp *</label>
                      <input 
                        type="tel"
                        required
                        placeholder="+971 50 677 4422"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                      />
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="w-1/3 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
                      >
                        ← BACK
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold font-mono text-xs uppercase shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                      >
                        CONFIRM VIP SHOWROOM PASS ✓
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}

          </div>

        </div>
      </section>

      {/* ── FULL REAL-WORLD CONTACT EXPERIENCE SECTION ── */}
      <section id="contact" className="py-24 bg-[#07090E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>FULL CONTACT EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
              Connect With Aura Atelier
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Direct connection to our Dubai Design District (d3) architectural team and KNX system designers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="p-8 rounded-3xl bg-[#101726] border border-purple-500/30 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">Dubai Design District (d3) HQ</h3>
                    <p className="text-xs font-mono text-gray-400">Building 4, Suite 302, Dubai, UAE</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-mono text-gray-300 border-t border-white/10 pt-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>d3 Building 4, Suite 302, Design District, Dubai, UAE</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                    <a href="tel:+97143886611" className="hover:text-purple-400 transition-colors">+971 4 388 6611 (d3 Concierge)</a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a href="https://wa.me/971506774422" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">+971 50 677 4422 (WhatsApp Atelier)</a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                    <a href="mailto:concierge@aurasmart.ae" className="hover:text-purple-400 transition-colors">concierge@aurasmart.ae</a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>Monday – Saturday: 9:00 AM – 8:00 PM GST</span>
                  </div>
                </div>

                {/* Direct Action CTAs */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a 
                    href="tel:+97143886611"
                    className="py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold font-mono text-xs text-center transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL DESK</span>
                  </a>
                  <a 
                    href="https://wa.me/971506774422" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 hover:text-black text-emerald-400 font-bold font-mono text-xs text-center border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WHATSAPP</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-[#101726] p-8 sm:p-10 rounded-3xl border border-purple-500/30 shadow-2xl relative">
              
              {formSubmitted ? (
                <div className="text-center py-16 space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-purple-400 mx-auto animate-bounce" />
                  <h3 className="text-3xl font-extrabold text-white font-sans">Architectural Inquiry Logged</h3>
                  <p className="text-xs text-gray-300 font-mono max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. Our Lead KNX Engineer at d3 Building 4 will contact you within 2 hours.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-purple-500 hover:text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-sans">Villa Automation Inquiry Form</h3>
                    <p className="text-xs font-mono text-gray-400 mt-1">Direct request for villa architectural lighting & acoustic design.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Full Legal Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Mansoor Al-Ketbi"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-purple-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="mansoor@alketbi.ae"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-purple-400 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Phone Number (UAE/Intl) *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+971 50 677 4422"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-purple-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Villa Community / Developer</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Emirates Hills / Emaar"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-purple-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Project Scope & Architectural Details</label>
                    <textarea 
                      rows={4}
                      placeholder="Specify villa built-up area (sq ft), target handover date, and required automation features..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-purple-400 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT VILLA INQUIRY</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-20 bg-[#04060A] text-gray-400 text-xs font-mono border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Home className="w-6 h-6 text-purple-400" />
              <span className="text-2xl font-extrabold text-white tracking-tight font-mono">
                AURA <span className="text-purple-400">SMART HOMES</span>
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              Building 4, Suite 302 • Dubai Design District (d3), Dubai, UAE
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 AURA ARCHITECTURAL AUTOMATION LLC. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-6">
              <span className="text-purple-400">KNX CERTIFIED PARTNER #90841</span>
              <span>DOLBY ATMOS AUDIOPHILE ATELIER</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default AuraShowcase;
