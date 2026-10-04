'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Activity, ShieldCheck, ArrowRight, CheckCircle2, MapPin, Phone, Mail, Clock, MessageSquare, Building2, Sliders, X, Search, Filter, Send, Award, Stethoscope, Radio, Feather, ChevronRight, Heart } from 'lucide-react';

// Falcon Species & Genetic Catalog Data
const FALCON_SPECIES = [
  {
    id: 'pure-gyrfalcon',
    name: 'Pure Arctic White Gyrfalcon',
    origin: 'Camden High-Latitude Hatchery / Kamchatka Lineage',
    wingspan: '125 - 135 cm',
    topSpeed: '380 km/h (Dive)',
    value: 280000,
    valueFormatted: 'AED 280,000',
    description: 'The pinnacle of royal falconry. Impeccable pure white plumage, ultra-dense pectoral musculature, and unmatched stoop velocities.',
    features: ['100% DNA DNA-Barcoded Pedigree', 'CITES Passport Included', 'Desert Heat Acclimatized', 'High-Altitude GPS Ring Fitted'],
    badge: 'Royal Apex',
    image: 'https://images.unsplash.com/photo-1555543451-8408f654b9f2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gyr-peregrine',
    name: 'Gyr-Peregrine Super-Hybrid',
    origin: 'Al Marmoom Heritage Genetics Lab',
    wingspan: '115 - 125 cm',
    topSpeed: '395 km/h (Peak Stoop)',
    value: 195000,
    valueFormatted: 'AED 195,000',
    description: 'Combines the massive muscular frame of the Gyrfalcon with the lightning agility and killer instinct of the Peregrine.',
    features: ['Presidential Cup Race Winner Line', 'Micro-Surgical Health Audit', 'Custom Leather Hood & Jesses', '6-Month Avian Vet Support'],
    badge: 'Championship Line',
    image: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'black-saker',
    name: 'Desert Black Saker Falcon',
    origin: 'Al Ain Heritage Falcon Reserve',
    wingspan: '120 - 130 cm',
    topSpeed: '340 km/h',
    value: 145000,
    valueFormatted: 'AED 145,000',
    description: 'Renowned for exceptional endurance in desert cross-winds and high ambient heat during traditional UAE hunting expeditions.',
    features: ['Extreme Heat Tolerance (50°C+)', 'Desert Prey Specialist', 'Fully Manned & Handled', 'Complete Avian Passport'],
    badge: 'Desert Specialist',
    image: 'https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?auto=format&fit=crop&w=800&q=80'
  }
];

// Live Telemetry Profiles (Advanced Function 2)
const TELEMETRY_PROFILES = [
  {
    ringId: 'UAE-ROYAL-F904',
    name: 'Sovereign Pride',
    species: 'Pure White Gyrfalcon',
    altitude: '480 meters',
    speed: '362 km/h',
    heartRate: '340 BPM',
    gps: '24.8392° N, 55.2719° E (Al Marmoom)',
    battery: '94% Solar Ring',
    status: 'High-Altitude Soaring'
  },
  {
    ringId: 'UAE-CHAMP-G201',
    name: 'Desert Storm',
    species: 'Gyr-Peregrine Hybrid',
    altitude: '120 meters',
    speed: '280 km/h',
    heartRate: '410 BPM',
    gps: '24.8450° N, 55.2801° E (Dune Sector 4)',
    battery: '88% Solar Ring',
    status: 'Active Lure Pursuit'
  },
  {
    ringId: 'UAE-HERITAGE-S09',
    name: 'Al-Buraq',
    species: 'Black Saker Falcon',
    altitude: '65 meters',
    speed: '145 km/h',
    heartRate: '290 BPM',
    gps: '24.8211° N, 55.2530° E (Oasis Perimeter)',
    battery: '98% Solar Ring',
    status: 'Gliding Return'
  }
];

// Vet Services
const VET_SERVICES = [
  { id: 'cites', name: 'CITES Passport & Microchip Registration', price: 'AED 3,500' },
  { id: 'endoscopy', name: 'Full Air-Sac Endoscopic Examination', price: 'AED 4,800' },
  { id: 'feather-imp', name: 'Feather Repair & Imping Restoration', price: 'AED 6,200' },
  { id: 'pre-season', name: 'Pre-Season Conditioning & Blood Panel', price: 'AED 5,500' }
];

export const FalconryShowcase: React.FC = () => {
  // ── ADVANCED FUNCTION 1: SPEC CONFIGURATOR STATE ──
  const [selectedSpecies, setSelectedSpecies] = useState<'pure-gyrfalcon' | 'gyr-peregrine' | 'black-saker'>('pure-gyrfalcon');
  const [wingspanBonus, setWingspanBonus] = useState<number>(130);
  const [isTitaniumGps, setIsTitaniumGps] = useState<boolean>(true);

  // ── ADVANCED FUNCTION 2: LIVE TELEMETRY PROFILE SELECTOR ──
  const [activeTelemetryIdx, setActiveTelemetryIdx] = useState<number>(0);

  // ── ADVANCED FUNCTION 3: MULTI-STEP VET BOOKING FLOW ──
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [selectedVetService, setSelectedVetService] = useState<string>('cites');
  const [bookingDate, setBookingDate] = useState<string>('2026-09-10');
  const [falconRingId, setFalconRingId] = useState<string>('');
  const [ownerName, setOwnerName] = useState<string>('');
  const [ownerPhone, setOwnerPhone] = useState<string>('');
  const [bookingComplete, setBookingComplete] = useState<boolean>(false);

  // ── ADVANCED FUNCTION 4: CONTACT FORM STATE ──
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [cName, setCName] = useState<string>('');
  const [cEmail, setCEmail] = useState<string>('');
  const [cPhone, setCPhone] = useState<string>('');
  const [cMessage, setCMessage] = useState<string>('');

  // Calculate dynamic configurator specs
  const activeSpecObj = FALCON_SPECIES.find(s => s.id === selectedSpecies) || FALCON_SPECIES[0];
  const calculatedSpeed = Math.round(340 + (wingspanBonus - 120) * 2.5);
  const calculatedVal = activeSpecObj.value + (wingspanBonus - 120) * 1500 + (isTitaniumGps ? 15000 : 0);

  const activeTelemetry = TELEMETRY_PROFILES[activeTelemetryIdx];

  const handleVetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingComplete(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0704] text-gray-100 font-sans selection:bg-amber-500/30 selection:text-amber-300">
      
      {/* ── TOP NAV BAR ── */}
      <header className="sticky top-0 z-40 bg-[#0A0704]/90 backdrop-blur-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-700 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <div className="w-full h-full bg-[#0A0704] rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-serif">
                ROYAL <span className="text-amber-400">FALCONRY</span>
              </span>
              <span className="block text-[10px] font-mono text-amber-400/80 tracking-widest uppercase">
                Al Marmoom Desert Reserve • Dubai
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-gray-300">
            <a href="#configurator" className="hover:text-amber-400 transition-colors">GENETIC SPECS</a>
            <a href="#telemetry" className="hover:text-amber-400 transition-colors">LIVE GPS TELEMETRY</a>
            <a href="#catalog" className="hover:text-amber-400 transition-colors">ROYAL CATALOG</a>
            <a href="#vet-flow" className="hover:text-amber-400 transition-colors">VET APPOINTMENTS</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">RESERVE CONTACT</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#vet-flow"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer flex items-center gap-2"
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>AVIAN CLINIC BOOKING</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-amber-500/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[180px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>UAE Ministry of Climate Change & CITES Registered</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-serif">
                Sovereign Heritage, <br />
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Avian Excellence.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
                Dubai’s world-renowned royal sanctuary for pure Gyrfalcon pedigree breeding, solar-powered GPS telemetry tracking, and micro-surgical avian healthcare.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#catalog"
                  className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
                >
                  <span>EXPLORE CHAMPION LINEAGE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#telemetry"
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>LIVE GPS TELEMETRY</span>
                </a>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">395 km/h</span>
                  <span className="text-xs text-gray-400 font-mono">Peak Dive Speed</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">100%</span>
                  <span className="text-xs text-gray-400 font-mono">DNA Barcoded Pedigree</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">AED 280k</span>
                  <span className="text-xs text-gray-400 font-mono">Top Champion Value</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-amber-500/30 to-amber-700/10 border border-amber-500/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1555543451-8408f654b9f2?auto=format&fit=crop&w=800&q=80" 
                    alt="Royal Falconry Sanctuary" 
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0704] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0A0704]/90 border border-amber-500/30 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                        <Feather className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-white uppercase">Al Marmoom Desert Gate 2</h4>
                        <p className="text-[11px] text-gray-400">Royal Breeding Facility & Hospital</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ADVANCED FUNCTION 1: INTERACTIVE FALCON GENETIC & SPEC CONFIGURATOR ── */}
      <section id="configurator" className="py-24 bg-[#0F0C08] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 1: GENETIC & FLIGHT ESTIMATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Royal Falcon Spec Configurator
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Customize species lineage, wingspan ratio, and solar GPS telemetry specs to project flight velocities and appraisal value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Options */}
            <div className="lg:col-span-7 bg-[#17130E] p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* Select Species */}
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-3">Select Falcon Lineage</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {FALCON_SPECIES.map((sp) => (
                    <button
                      key={sp.id}
                      type="button"
                      onClick={() => setSelectedSpecies(sp.id as any)}
                      className={`p-3.5 rounded-xl font-mono text-xs font-bold uppercase text-left transition-all cursor-pointer border ${
                        selectedSpecies === sp.id
                          ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                          : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                      }`}
                    >
                      {sp.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wingspan Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">Target Wingspan Parameter</label>
                  <span className="text-sm font-mono font-extrabold text-amber-400">{wingspanBonus} cm</span>
                </div>
                <input 
                  type="range" 
                  min={110} 
                  max={140} 
                  value={wingspanBonus} 
                  onChange={(e) => setWingspanBonus(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Titanium GPS Ring Checkbox */}
              <div className="pt-2">
                <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                  <div>
                    <span className="text-xs font-mono font-bold text-white uppercase block">Solar Titanium GPS Telemetry Ring</span>
                    <span className="text-[11px] text-gray-400 font-mono">Real-time speed, altitude & heart-rate satellite tracking</span>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={isTitaniumGps}
                    onChange={(e) => setIsTitaniumGps(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 cursor-pointer"
                  />
                </label>
              </div>

            </div>

            {/* Configurator Output Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#1F1912] to-[#0F0C08] p-8 rounded-3xl border border-amber-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest block">
                Estimated Peak Stoop Speed
              </span>

              <div className="text-5xl font-extrabold font-mono text-white tracking-tight">
                {calculatedSpeed} <span className="text-sm text-amber-400 font-sans font-bold">km/h</span>
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full font-mono text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                100% CITES Passport & Microchip Registered
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="block text-[11px] font-mono text-gray-400 uppercase">Appraisal Pedigree Value</span>
                <span className="text-3xl font-extrabold text-white font-mono">AED {calculatedVal.toLocaleString()}</span>
              </div>

              <a
                href="#contact"
                className="block w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer"
              >
                RESERVE HATCHERY PEDIGREE
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 2: LIVE GPS TELEMETRY DASHBOARD ── */}
      <section id="telemetry" className="py-24 bg-[#0A0704] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>ADVANCED FUNCTION 2: REAL-TIME SATELLITE DASHBOARD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Desert Flight Telemetry
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Select an active flight profile to inspect live satellite altitude, stoop speed, biometric heart-rate, and GPS location over Al Marmoom Desert Reserve.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-[#14100B] p-8 rounded-3xl border border-amber-500/30 shadow-2xl">
            
            {/* Profile Selector Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {TELEMETRY_PROFILES.map((prof, idx) => (
                <button
                  key={prof.ringId}
                  type="button"
                  onClick={() => setActiveTelemetryIdx(idx)}
                  className={`px-5 py-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                    activeTelemetryIdx === idx
                      ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:text-white'
                  }`}
                >
                  {prof.name} ({prof.ringId})
                </button>
              ))}
            </div>

            {/* Dashboard Visualizer Box */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-[#0A0704] border border-white/10 text-center">
              
              <div className="p-4 rounded-xl bg-white/5 space-y-1">
                <span className="text-[10px] font-mono text-gray-400 uppercase block">Flight Altitude</span>
                <span className="text-2xl font-extrabold text-white font-mono block">{activeTelemetry.altitude}</span>
                <span className="text-[10px] text-amber-400 font-mono">Radar Altitude Sensor</span>
              </div>

              <div className="p-4 rounded-xl bg-white/5 space-y-1">
                <span className="text-[10px] font-mono text-gray-400 uppercase block">Airspeed Velocity</span>
                <span className="text-2xl font-extrabold text-amber-400 font-mono block">{activeTelemetry.speed}</span>
                <span className="text-[10px] text-amber-400 font-mono">Pitot Pitot-Static Sensor</span>
              </div>

              <div className="p-4 rounded-xl bg-white/5 space-y-1">
                <span className="text-[10px] font-mono text-gray-400 uppercase block">Biometric Heart-Rate</span>
                <span className="text-2xl font-extrabold text-emerald-400 font-mono block">{activeTelemetry.heartRate}</span>
                <span className="text-[10px] text-emerald-400 font-mono">Wireless Chest ECG</span>
              </div>

              <div className="p-4 rounded-xl bg-white/5 space-y-1">
                <span className="text-[10px] font-mono text-gray-400 uppercase block">Telemetry Ring Battery</span>
                <span className="text-2xl font-extrabold text-white font-mono block">{activeTelemetry.battery}</span>
                <span className="text-[10px] text-gray-400 font-mono">Status: {activeTelemetry.status}</span>
              </div>

            </div>

            {/* GPS Coordinates Bar */}
            <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-amber-300">
                <MapPin className="w-4 h-4 text-amber-400 animate-bounce" />
                <span>GPS Coordinates: <strong>{activeTelemetry.gps}</strong></span>
              </div>
              <span className="text-gray-400 text-[11px]">Frequency: 433 MHz Telemetry Link</span>
            </div>

          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 3: MULTI-STEP AVIAN VET APPOINTMENT FLOW ── */}
      <section id="vet-flow" className="py-24 bg-[#0F0C08] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 3: MULTI-STEP CLINIC RESERVATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Royal Avian Hospital Booking
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Complete the 3-step appointment flow to schedule specialized avian endoscopy, feather imping, or CITES passport issuance.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-[#17130E] p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl relative">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 font-mono text-xs">
              <div className={`flex items-center gap-2 ${bookingStep >= 1 ? 'text-amber-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[10px]">1</span>
                <span>Service</span>
              </div>
              <div className={`flex items-center gap-2 ${bookingStep >= 2 ? 'text-amber-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[10px]">2</span>
                <span>Date & Falcon ID</span>
              </div>
              <div className={`flex items-center gap-2 ${bookingStep >= 3 ? 'text-amber-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[10px]">3</span>
                <span>Owner Info</span>
              </div>
            </div>

            {bookingComplete ? (
              <div className="text-center py-12 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white font-serif">Avian Hospital Appointment Confirmed</h3>
                <p className="text-xs text-gray-300 font-mono leading-relaxed">
                  Confirmation sent to <strong>{ownerPhone}</strong>. Please bring Falcon Ring ID <strong>{falconRingId || 'N/A'}</strong> to Al Marmoom Avian Clinic Gate 2.
                </p>
                <button
                  onClick={() => {
                    setBookingComplete(false);
                    setBookingStep(1);
                  }}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all"
                >
                  NEW RESERVATION
                </button>
              </div>
            ) : (
              <form onSubmit={handleVetSubmit} className="space-y-6">
                
                {/* STEP 1 */}
                {bookingStep === 1 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-amber-400 uppercase block">Step 1: Select Avian Medical Service</label>
                    <div className="space-y-3">
                      {VET_SERVICES.map((serv) => (
                        <label 
                          key={serv.id}
                          className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                            selectedVetService === serv.id
                              ? 'bg-amber-500/15 border-amber-400 text-white'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input 
                              type="radio" 
                              name="vetServ"
                              checked={selectedVetService === serv.id}
                              onChange={() => setSelectedVetService(serv.id)}
                              className="accent-amber-400"
                            />
                            <span className="text-xs font-mono font-bold">{serv.name}</span>
                          </div>
                          <span className="text-xs font-mono font-extrabold text-amber-400">{serv.price}</span>
                        </label>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setBookingStep(2)}
                      className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all mt-4"
                    >
                      NEXT STEP: DATE & RING ID →
                    </button>
                  </div>
                )}

                {/* STEP 2 */}
                {bookingStep === 2 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-amber-400 uppercase block">Step 2: Date & Falcon Ring ID</label>
                    
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Preferred Appointment Date</label>
                      <input 
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Falcon Ring ID / Leg Band Tag</label>
                      <input 
                        type="text"
                        placeholder="e.g. UAE-FALCON-904"
                        value={falconRingId}
                        onChange={(e) => setFalconRingId(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                      />
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
                        className="w-2/3 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase"
                      >
                        NEXT: OWNER DETAILS →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {bookingStep === 3 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-amber-400 uppercase block">Step 3: Owner & Contact Information</label>
                    
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Owner Full Name *</label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. H.H. Sheikh Hamdan Al-Maktoum"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">UAE Phone / WhatsApp *</label>
                      <input 
                        type="tel"
                        required
                        placeholder="+971 50 499 2233"
                        value={ownerPhone}
                        onChange={(e) => setOwnerPhone(e.target.value)}
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
                        className="w-2/3 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                      >
                        CONFIRM APPOINTMENT ✓
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
      <section id="contact" className="py-24 bg-[#0A0704] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>FULL REAL-WORLD CONTACT EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Royal Sanctuary Desk & Directions
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Visit our Al Marmoom Desert Reserve sanctuary or connect with our avian breeding concierge desk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="p-8 rounded-3xl bg-[#14100B] border border-amber-500/30 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif">Al Marmoom Desert Sanctuary</h3>
                    <p className="text-xs font-mono text-gray-400">Falconry Oasis Gate 2, Dubai, UAE</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-mono text-gray-300 border-t border-white/10 pt-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Royal Breeding Facility, Al Marmoom Conservation Reserve, Dubai</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <a href="tel:+97148327700" className="hover:text-amber-400 transition-colors">+971 4 832 7700 (Royal Desk)</a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a href="https://wa.me/971504992233" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">+971 50 499 2233 (WhatsApp Concierge)</a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <a href="mailto:royal@falconry.ae" className="hover:text-amber-400 transition-colors">royal@falconry.ae</a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>Saturday – Thursday: 6:30 AM – 7:00 PM GST</span>
                  </div>
                </div>

                {/* Direct Action CTAs */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a 
                    href="tel:+97148327700"
                    className="py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold font-mono text-xs text-center transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL DESK</span>
                  </a>
                  <a 
                    href="https://wa.me/971504992233" 
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

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-[#14100B] p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl relative">
              
              {contactSubmitted ? (
                <div className="text-center py-16 space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
                  <h3 className="text-3xl font-extrabold text-white font-serif">Inquiry Logged</h3>
                  <p className="text-xs text-gray-300 font-mono max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{cName}</strong>. Our Royal Avian Concierge at Al Marmoom Sanctuary will contact you within 2 hours.
                  </p>
                  <button 
                    onClick={() => setContactSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-serif">Royal Sanctuary Inquiry Form</h3>
                    <p className="text-xs font-mono text-gray-400 mt-1">Direct message to Al Marmoom Falcon Breeding & Health Desk.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Full Legal Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Sheikh Rashid Al-Nuaimi"
                        value={cName}
                        onChange={(e) => setCName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="rashid@royal.ae"
                        value={cEmail}
                        onChange={(e) => setCEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">UAE Phone / WhatsApp *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+971 50 499 2233"
                      value={cPhone}
                      onChange={(e) => setCPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Inquiry Details</label>
                    <textarea 
                      rows={4}
                      placeholder="Specify preferred falcon lineage, CITES passport requirements, or private desert visit request..."
                      value={cMessage}
                      onChange={(e) => setCMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND ROYAL INQUIRY</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-20 bg-[#050302] text-gray-400 text-xs font-mono border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Compass className="w-6 h-6 text-amber-400" />
              <span className="text-2xl font-extrabold text-white tracking-tight font-serif">
                ROYAL <span className="text-amber-400">FALCONRY</span> DUBAI
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              Falconry Oasis Gate 2 • Al Marmoom Desert Conservation Reserve, Dubai, UAE
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 ROYAL FALCONRY HERITAGE SANCTUARY LLC. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-6">
              <span className="text-amber-400">CITES FACILITY PERMIT #94821</span>
              <span>MOCCAE APPROVED</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default FalconryShowcase;
