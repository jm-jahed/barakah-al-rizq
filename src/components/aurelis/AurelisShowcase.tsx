'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, ShieldCheck, MapPin, Clock, Calendar, CheckCircle2, ArrowRight, Phone, Mail, Sliders, Star, X, Send, Droplets, Shield, Wrench, Award, ChevronRight, Truck, Layers, Users, Check, ShoppingBag, RefreshCw, Activity, Building, Menu } from 'lucide-react';
import { 
  VEHICLES, 
  SERVICES, 
  PACKAGES, 
  ADDONS, 
  TESTIMONIALS, 
  LOCATIONS, 
  PROCESS_STEPS, 
  MEMBERSHIPS,
  AurelisService,
  VehicleCategory
} from '@/data/aurelisData';

export const AurelisShowcase: React.FC = () => {
  // State
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('suv');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('premium-wash');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['carpet-steam']);

  // Modals & Drawers
  const [activeServiceDrawer, setActiveServiceDrawer] = useState<AurelisService | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Before / After Slider State
  const [sliderPos, setSliderPos] = useState<number>(50);

  // Booking Flow State (7 Steps)
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [bLocationType, setBLocationType] = useState<'studio' | 'home' | 'office' | 'hotel'>('studio');
  const [bStudioCity, setBStudioCity] = useState<string>('Dubai Studio HQ (Al Quoz 3)');
  const [bDate, setBDate] = useState<string>('2026-09-03');
  const [bTime, setBTime] = useState<string>('08:30 PM');
  const [bName, setBName] = useState<string>('');
  const [bPhone, setBPhone] = useState<string>('');
  const [bEmail, setBEmail] = useState<string>('');
  const [bPlate, setBPlate] = useState<string>('');
  const [bNotes, setBNotes] = useState<string>('');
  const [bookingComplete, setBookingComplete] = useState<boolean>(false);

  // B2B Fleet Modal State
  const [fleetModalOpen, setFleetModalOpen] = useState<boolean>(false);
  const [fleetSubmitted, setFleetSubmitted] = useState<boolean>(false);

  // Active Vehicle & Service Objects
  const activeVehicle = VEHICLES.find(v => v.id === selectedVehicleId) || VEHICLES[1];
  const activeService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[1];

  // Dynamic Price Calculations
  const basePrice = activeService.basePrice;
  const adjustedServicePrice = Math.round(basePrice * activeVehicle.multiplier);
  
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = ADDONS.find(a => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);

  const grandTotal = adjustedServicePrice + addonsTotal;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingComplete(true);
  };

  return (
    <div className="min-h-screen bg-[#07090C] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* ── TOP NAVIGATION ── */}
      <header className="sticky top-0 z-40 bg-[#07090C]/90 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-900 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <div className="w-full h-full bg-[#07090C] rounded-[10px] flex items-center justify-center">
                <Car className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-serif">
                AURELIS <span className="text-cyan-400">AUTO CARE</span>
              </span>
              <span className="block text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">
                Your Car. Immaculate. • Dubai & Abu Dhabi
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider text-slate-300">
            <a href="#services" className="hover:text-cyan-400 transition-colors">SERVICES</a>
            <a href="#packages" className="hover:text-cyan-400 transition-colors">PACKAGES</a>
            <a href="#pricing-calc" className="hover:text-cyan-400 transition-colors">PRICE CALCULATOR</a>
            <a href="#before-after" className="hover:text-cyan-400 transition-colors">BEFORE & AFTER</a>
            <a href="#mobile-care" className="hover:text-cyan-400 transition-colors">MOBILE CARE</a>
            <a href="#membership" className="hover:text-cyan-400 transition-colors">AURELIS CLUB</a>
            <a href="#locations" className="hover:text-cyan-400 transition-colors">STUDIOS</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-400 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 text-black font-mono text-[9px] font-bold flex items-center justify-center">
                1
              </span>
            </button>

            <a
              href="#booking-flow"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 hover:from-cyan-300 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] items-center gap-2"
            >
              <Droplets className="w-3.5 h-3.5" />
              <span>BOOK NOW</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0D1117] border-b border-cyan-500/20 p-4 space-y-3 font-mono text-xs">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">SERVICES</a>
            <a href="#packages" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">PACKAGES</a>
            <a href="#pricing-calc" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">PRICE CALCULATOR</a>
            <a href="#before-after" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">BEFORE & AFTER</a>
            <a href="#mobile-care" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">MOBILE CARE</a>
            <a href="#membership" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">AURELIS CLUB</a>
            <a href="#booking-flow" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 text-center bg-cyan-400 text-black font-bold rounded-xl">BOOK APPOINTMENT NOW</a>
          </div>
        )}
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 lg:py-36 overflow-hidden border-b border-cyan-500/15 bg-gradient-to-b from-[#07090C] via-[#0B0F14] to-[#07090C]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-cyan-500/10 blur-[200px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Mobile & Studio Service • UAE Premier Detailing</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] font-serif">
                YOUR CAR. <br />
                <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  IMMACULATE.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl font-sans">
                Premium car care, detailing, 9H ceramic coating, and paint protection film engineered for vehicles that deserve more. Delivered at our Dubai & Abu Dhabi studios or direct to your doorstep.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#booking-flow"
                  className="px-8 py-4 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
                >
                  <span>BOOK A SERVICE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#services"
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Car className="w-4 h-4 text-cyan-400" />
                  <span>EXPLORE SERVICES</span>
                </a>
              </div>

              {/* LIVE SERVICE STATUS COMPONENT */}
              <div className="p-4 rounded-2xl bg-[#0D1117] border border-cyan-500/30 max-w-xl flex items-center justify-between gap-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <div>
                    <span className="text-xs font-mono font-bold text-white uppercase block">STUDIO STATUS: OPEN</span>
                    <span className="text-[11px] text-slate-400 font-mono">Next Available Slot: Today · 8:30 PM (Al Quoz 3)</span>
                  </div>
                </div>

                <div className="text-right font-mono text-xs hidden sm:block">
                  <span className="text-cyan-400 font-bold block">6 Bays Active</span>
                  <span className="text-slate-400 text-[10px]">Mobile Van Dispatched</span>
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-cyan-500/30 via-blue-600/10 to-transparent border border-cyan-500/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80" 
                    alt="Aurelis Studio Supercar Detailing" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#07090C]/90 border border-cyan-500/30 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                        <Wrench className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-white uppercase">Al Quoz 3 Studio • Dubai</h4>
                        <p className="text-[11px] text-slate-400 font-mono">Climate-Controlled Cleanrooms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── VEHICLE SELECTION ENGINE ── */}
      <section className="py-12 bg-[#0A0D12] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase block">SELECT YOUR VEHICLE TYPE</span>
              <h3 className="text-lg font-bold text-white font-serif">Pricing dynamically adjusts based on vehicle dimension & complexity</h3>
            </div>
            <span className="text-xs font-mono text-slate-400">Active Selection: <strong className="text-cyan-400 uppercase">{activeVehicle.name} ({activeVehicle.multiplier}x Rate)</strong></span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {VEHICLES.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVehicleId(v.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                  selectedVehicleId === v.id
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl">{v.icon}</span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    selectedVehicleId === v.id ? 'bg-cyan-400 text-black' : 'bg-white/10 text-slate-400'
                  }`}>
                    {v.multiplier}x
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-mono">{v.name}</h4>
                  <p className="text-[10px] font-mono text-slate-400 truncate">{v.example}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPREHENSIVE SERVICES CATALOG (9 SERVICES) ── */}
      <section id="services" className="py-24 bg-[#07090C] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>COMPREHENSIVE AUTOMOTIVE SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Studio & Mobile Service Catalog
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-sans">
              From maintenance washes to multi-stage paint correction and self-healing PPF wraps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {SERVICES.map((serv) => {
              const currentPrice = Math.round(serv.basePrice * activeVehicle.multiplier);
              return (
                <div 
                  key={serv.id}
                  className="bg-[#0D1117] rounded-3xl border border-cyan-500/20 overflow-hidden flex flex-col justify-between hover:border-cyan-400 transition-all hover:scale-[1.02]"
                >
                  <div>
                    <div className="h-48 overflow-hidden relative">
                      <img src={serv.image} alt={serv.title} className="w-full h-full object-cover" />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 text-cyan-400 font-mono text-[10px] font-bold">
                        {serv.category}
                      </div>
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-mono text-[10px] font-bold backdrop-blur-md">
                        {serv.duration}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-white font-serif">{serv.title}</h3>
                        <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed">{serv.description}</p>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-white/10">
                        {serv.included.map((inc, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex items-center justify-between border-t border-white/10">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Rate ({activeVehicle.name})</span>
                      <span className="text-xl font-extrabold text-cyan-400 font-mono">AED {currentPrice}</span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveServiceDrawer(serv)}
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold"
                      >
                        SPECS
                      </button>
                      <a
                        href="#booking-flow"
                        onClick={() => setSelectedServiceId(serv.id)}
                        className="px-4 py-2.5 rounded-xl bg-cyan-400 text-black font-mono text-xs font-bold uppercase hover:bg-cyan-300 transition-all flex items-center gap-1"
                      >
                        <span>BOOK</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SERVICE DETAIL DRAWER MODAL */}
      <AnimatePresence>
        {activeServiceDrawer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0D1117] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 max-w-xl w-full relative space-y-6 shadow-2xl"
            >
              <button 
                onClick={() => setActiveServiceDrawer(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <img src={activeServiceDrawer.image} alt={activeServiceDrawer.title} className="w-20 h-20 rounded-2xl object-cover border border-cyan-500/30" />
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase">{activeServiceDrawer.category} • {activeServiceDrawer.duration}</span>
                  <h3 className="text-2xl font-bold text-white font-serif">{activeServiceDrawer.title}</h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">{activeServiceDrawer.description}</p>

              <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                <span className="text-xs font-mono font-bold text-white uppercase block">Included Services & Warranty:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeServiceDrawer.included.map((inc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Rate for {activeVehicle.name}</span>
                  <span className="text-2xl font-extrabold text-cyan-400 font-mono">AED {Math.round(activeServiceDrawer.basePrice * activeVehicle.multiplier)}</span>
                </div>
                <a
                  href="#booking-flow"
                  onClick={() => {
                    setSelectedServiceId(activeServiceDrawer.id);
                    setActiveServiceDrawer(null);
                  }}
                  className="px-6 py-3.5 rounded-xl bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase hover:bg-cyan-300 transition-all"
                >
                  PROCEED TO BOOKING →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── SERVICE PACKAGES ── */}
      <section id="packages" className="py-24 bg-[#0A0D12] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>SERVICE PACKAGES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Curated Detailing Tiers
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-sans">
              All-inclusive package tiers designed for routine upkeep or full showroom ceramic defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {PACKAGES.map((pkg, i) => {
              const pkgPrice = Math.round(pkg.price * activeVehicle.multiplier);
              return (
                <div 
                  key={i}
                  className={`p-6 rounded-3xl border flex flex-col justify-between space-y-6 relative transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-b from-[#14232F] to-[#0D1117] border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)] scale-[1.03]'
                      : 'bg-[#0D1117] border-white/10 hover:border-cyan-500/40'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-400 text-black font-mono text-[10px] font-extrabold uppercase">
                      MOST POPULAR
                    </span>
                  )}

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold text-white font-serif">{pkg.name}</h3>
                      <span className="text-xs font-mono text-slate-400">{pkg.duration}</span>
                    </div>

                    <div className="py-2 border-y border-white/10">
                      <span className="text-3xl font-extrabold text-cyan-400 font-mono">AED {pkgPrice}+</span>
                      <span className="text-xs text-slate-400 font-mono ml-2">/ {activeVehicle.name}</span>
                    </div>

                    <p className="text-[11px] font-mono text-slate-400 italic">{pkg.vehicleSuitability}</p>

                    <ul className="space-y-2.5 text-xs font-mono text-slate-300">
                      {pkg.features.map((feat, f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#booking-flow"
                    className={`block w-full py-3.5 rounded-xl font-mono text-xs font-bold text-center uppercase transition-all ${
                      pkg.popular
                        ? 'bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                        : 'bg-white/10 text-white hover:bg-cyan-400 hover:text-black'
                    }`}
                  >
                    SELECT {pkg.name}
                  </a>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── DYNAMIC PRICING CALCULATOR ── */}
      <section id="pricing-calc" className="py-24 bg-[#07090C] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>DYNAMIC PRICING CALCULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Instant Custom Quote Engine
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-sans">
              Base Service + Vehicle Category Modifier + Add-ons = Turnkey AED Total.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            <div className="lg:col-span-7 bg-[#0D1117] p-8 rounded-3xl border border-white/10 space-y-6">
              
              <div>
                <label className="text-xs font-mono font-bold text-slate-300 uppercase block mb-2">Primary Service</label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                >
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id} className="bg-[#0D1117]">{s.title} (Base AED {s.basePrice})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-300 uppercase block mb-3">Optional Add-On Treatments</label>
                <div className="space-y-3">
                  {ADDONS.map(addon => (
                    <label key={addon.id} className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:border-cyan-500/30 transition-all">
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox"
                          checked={selectedAddons.includes(addon.id)}
                          onChange={() => toggleAddon(addon.id)}
                          className="w-4 h-4 accent-cyan-400 cursor-pointer"
                        />
                        <div>
                          <span className="text-xs font-mono text-slate-200 font-bold block">{addon.name}</span>
                          <span className="text-[10px] font-mono text-slate-400">{addon.description}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-cyan-400 font-bold">+AED {addon.price}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 bg-gradient-to-b from-[#132532] to-[#07090C] p-8 rounded-3xl border border-cyan-500/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest block">
                Calculated Turnkey Investment
              </span>

              <div className="text-5xl font-extrabold font-mono text-white tracking-tight">
                AED {grandTotal}
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full font-mono text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {activeVehicle.name} • {activeService.title}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-1 text-xs font-mono text-slate-400 text-left">
                <div className="flex justify-between">
                  <span>Base Service Rate:</span>
                  <span className="text-white font-bold">AED {adjustedServicePrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Add-ons ({selectedAddons.length}):</span>
                  <span className="text-white font-bold">AED {addonsTotal}</span>
                </div>
              </div>

              <a
                href="#booking-flow"
                className="block w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
              >
                PROCEED TO BOOKING →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── BEFORE / AFTER INTERACTIVE SLIDER ── */}
      <section id="before-after" className="py-24 bg-[#0A0D12] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>BEFORE & AFTER TRANSFORMATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Paint Correction & Ceramic Sheen
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-sans">
              Drag the interactive slider below to reveal paint swirl removal and hydrophobic gloss depth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl select-none">
              
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80" 
                alt="After Paint Correction Sheen" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-cyan-400 text-black font-mono text-xs font-extrabold shadow-lg z-10">
                AFTER: 9H CERAMIC GLOSS
              </div>

              <div 
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80" 
                  alt="Before Swirled Paintwork" 
                  className="absolute inset-0 w-full h-full object-cover filter contrast-75 brightness-75"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-black/80 border border-white/20 text-white font-mono text-xs font-extrabold z-10">
                  BEFORE: SWIRLS & OXIDATION
                </div>
              </div>

              <div 
                className="absolute inset-y-0 w-1 bg-cyan-400 shadow-[0_0_15px_#06b6d4] cursor-ew-resize z-20 flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-cyan-400 text-black border-2 border-white flex items-center justify-center shadow-lg text-xs font-bold">
                  ↔
                </div>
              </div>

              <input 
                type="range"
                min={0}
                max={100}
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
              />
            </div>
            
            <p className="text-center text-xs font-mono text-slate-400 mt-4">
              ← Drag slider left or right to inspect paint gloss transition →
            </p>
          </div>

        </div>
      </section>

      {/* ── MOBILE CAR WASH PROMOTIONAL SECTION ── */}
      <section id="mobile-care" className="py-24 bg-[#07090C] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0D151E] via-[#0A0E13] to-[#0D151E] p-8 sm:p-12 rounded-3xl border border-cyan-500/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                <Truck className="w-3.5 h-3.5" />
                <span>MOBILE CAR CARE FLEET</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
                WE COME TO YOU.
              </h2>

              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Enjoy studio-grade detailing at your villa, residential tower, office, or hotel. Our custom vans are equipped with de-ionized softened water, silent power generators, and climate-controlled toolkits.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-cyan-400 font-bold block">🏠 HOME & VILLA</span>
                  <span>Direct to your driveway</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-cyan-400 font-bold block">🏢 OFFICE PARK</span>
                  <span>Washed while you work</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-cyan-400 font-bold block">🏨 HOTEL VALET</span>
                  <span>VIP guest concierge</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-cyan-400 font-bold block">🚙 FLEET CARE</span>
                  <span>Corporate packages</span>
                </div>
              </div>

              <a
                href="#booking-flow"
                onClick={() => setBLocationType('home')}
                className="inline-flex px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold font-mono text-xs uppercase"
              >
                DISPATCH MOBILE VAN NOW →
              </a>
            </div>

            <div className="lg:col-span-5">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80" 
                alt="Aurelis Mobile Van Care" 
                className="w-full h-80 object-cover rounded-2xl border border-cyan-500/30"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE (6 STEPS) ── */}
      <section className="py-24 bg-[#0A0D12] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>THE AURELIS METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Our 6-Step Detailing Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="bg-[#0D1117] p-5 rounded-2xl border border-white/10 space-y-3 relative">
                <span className="text-2xl font-mono font-extrabold text-cyan-400">{step.num}</span>
                <h3 className="text-sm font-bold text-white font-mono">{step.title}</h3>
                <p className="text-[11px] font-sans text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── AURELIS CLUB MEMBERSHIP ── */}
      <section id="membership" className="py-24 bg-[#07090C] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>MONTHLY SUBSCRIPTION PLANS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              AURELIS CLUB Memberships
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-sans">
              Keep your vehicle in pristine condition all month with automated washes, priority slots, and detailing perks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {MEMBERSHIPS.map((mem, m) => (
              <div 
                key={m}
                className={`p-8 rounded-3xl border flex flex-col justify-between space-y-6 relative ${
                  mem.popular
                    ? 'bg-gradient-to-b from-[#14232F] to-[#0D1117] border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)] scale-[1.03]'
                    : 'bg-[#0D1117] border-white/10 hover:border-cyan-500/40'
                }`}
              >
                {mem.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-400 text-black font-mono text-[10px] font-extrabold uppercase">
                    MOST POPULAR
                  </span>
                )}

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white font-serif">{mem.name}</h3>
                  <div className="py-2 border-y border-white/10">
                    <span className="text-4xl font-extrabold text-cyan-400 font-mono">AED {mem.price}</span>
                    <span className="text-xs text-slate-400 font-mono"> / month</span>
                  </div>
                  <span className="text-xs font-mono text-cyan-300 font-bold block">{mem.washes}</span>
                  <ul className="space-y-2 text-xs font-mono text-slate-300">
                    {mem.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#booking-flow"
                  className="block w-full py-3.5 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black font-mono text-xs font-bold text-center uppercase transition-all"
                >
                  JOIN {mem.name}
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── B2B FLEET SERVICES ── */}
      <section className="py-24 bg-[#0A0D12] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-6">
          <Building className="w-12 h-12 text-cyan-400 mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
            B2B & Commercial Fleet Detailing
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
            Tailored maintenance contracts for corporate executive fleets, luxury hotel chauffeurs, exotic rental companies, and dealership handovers across Dubai and Abu Dhabi.
          </p>
          <button
            onClick={() => setFleetModalOpen(true)}
            className="px-8 py-4 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold font-mono text-xs uppercase shadow-lg"
          >
            REQUEST FLEET SERVICE PROPOSAL
          </button>
        </div>
      </section>

      {/* B2B FLEET MODAL */}
      <AnimatePresence>
        {fleetModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0D1117] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 max-w-md w-full relative space-y-4 shadow-2xl"
            >
              <button 
                onClick={() => setFleetModalOpen(null as any)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-white font-serif">Request Fleet Proposal</h3>
              
              {fleetSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto" />
                  <p className="text-xs font-mono text-slate-300">Thank you. Our B2B Corporate Fleet Manager will reach out within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setFleetSubmitted(true); }} className="space-y-3 font-mono text-xs">
                  <input type="text" required placeholder="Company Name" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none" />
                  <input type="email" required placeholder="Corporate Email" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none" />
                  <input type="tel" required placeholder="UAE Contact Phone" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none" />
                  <select className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none">
                    <option className="bg-[#0D1117]">5 – 15 Vehicles</option>
                    <option className="bg-[#0D1117]">15 – 50 Vehicles</option>
                    <option className="bg-[#0D1117]">50+ Fleet Vehicles</option>
                  </select>
                  <button type="submit" className="w-full py-3 rounded-xl bg-cyan-400 text-black font-bold uppercase">SUBMIT REQUEST</button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── 7-STEP BOOKING FLOW ── */}
      <section id="booking-flow" className="py-24 bg-[#07090C] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>ONLINE APPOINTMENT DISPATCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Book Studio or Mobile Care
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-sans">
              Complete the appointment dispatch flow to confirm location, time slot, and vehicle details.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-[#0D1117] p-8 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative">
            
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 font-mono text-xs">
              <div className={`flex items-center gap-2 ${bookingStep >= 1 ? 'text-cyan-400 font-bold' : 'text-slate-500'}`}>
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[10px]">1</span>
                <span>Service & Vehicle</span>
              </div>
              <div className={`flex items-center gap-2 ${bookingStep >= 2 ? 'text-cyan-400 font-bold' : 'text-slate-500'}`}>
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[10px]">2</span>
                <span>Location & Date</span>
              </div>
              <div className={`flex items-center gap-2 ${bookingStep >= 3 ? 'text-cyan-400 font-bold' : 'text-slate-500'}`}>
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[10px]">3</span>
                <span>Details & Confirm</span>
              </div>
            </div>

            {bookingComplete ? (
              <div className="text-center py-12 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white font-serif">Booking Confirmed</h3>
                <p className="text-xs text-slate-300 font-mono leading-relaxed">
                  Thank you, <strong>{bName}</strong>. Your appointment for your <strong>{activeVehicle.name} ({bPlate || 'UAE Plate'})</strong> is set for <strong>{bDate} at {bTime}</strong>. Confirmation reference sent via WhatsApp to <strong>{bPhone}</strong>.
                </p>
                <button
                  onClick={() => {
                    setBookingComplete(false);
                    setBookingStep(1);
                  }}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all"
                >
                  BOOK ANOTHER VEHICLE
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {bookingStep === 1 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-cyan-400 uppercase block">Step 1: Vehicle & Service Selection</label>
                    
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Vehicle Category</label>
                      <select 
                        value={selectedVehicleId}
                        onChange={(e) => setSelectedVehicleId(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                      >
                        {VEHICLES.map(v => (
                          <option key={v.id} value={v.id} className="bg-[#0D1117]">{v.name} ({v.multiplier}x Rate)</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Primary Service</label>
                      <select 
                        value={selectedServiceId}
                        onChange={(e) => setSelectedServiceId(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                      >
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.id} className="bg-[#0D1117]">{s.title} - AED {Math.round(s.basePrice * activeVehicle.multiplier)}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => setBookingStep(2)}
                      className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all mt-4"
                    >
                      NEXT STEP: LOCATION & DATE →
                    </button>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-cyan-400 uppercase block">Step 2: Service Location & Date</label>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setBLocationType('studio')}
                        className={`p-3 rounded-xl font-mono text-xs font-bold border transition-all ${
                          bLocationType === 'studio' ? 'bg-cyan-400 text-black border-cyan-300' : 'bg-white/5 text-slate-400 border-white/10'
                        }`}
                      >
                        🏢 STUDIO APPOINTMENT
                      </button>
                      <button
                        type="button"
                        onClick={() => setBLocationType('home')}
                        className={`p-3 rounded-xl font-mono text-xs font-bold border transition-all ${
                          bLocationType !== 'studio' ? 'bg-cyan-400 text-black border-cyan-300' : 'bg-white/5 text-slate-400 border-white/10'
                        }`}
                      >
                        🚚 MOBILE CAR CARE
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-slate-300 block mb-1">Preferred Date</label>
                        <input 
                          type="date"
                          value={bDate}
                          onChange={(e) => setBDate(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-slate-300 block mb-1">Preferred Time Slot</label>
                        <select 
                          value={bTime}
                          onChange={(e) => setBTime(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                        >
                          <option value="09:00 AM" className="bg-[#0D1117]">09:00 AM</option>
                          <option value="11:30 AM" className="bg-[#0D1117]">11:30 AM</option>
                          <option value="02:00 PM" className="bg-[#0D1117]">02:00 PM</option>
                          <option value="05:30 PM" className="bg-[#0D1117]">05:30 PM</option>
                          <option value="08:30 PM" className="bg-[#0D1117]">08:30 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => setBookingStep(1)}
                        className="w-1/3 py-4 rounded-xl bg-white/10 text-white font-mono text-xs uppercase"
                      >
                        ← BACK
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingStep(3)}
                        className="w-2/3 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold font-mono text-xs uppercase"
                      >
                        NEXT: DETAILS & CONFIRM →
                      </button>
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-cyan-400 uppercase block">Step 3: Customer Info & Vehicle Plate</label>
                    
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Full Name *</label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Tariq Al-Hassan"
                        value={bName}
                        onChange={(e) => setBName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-slate-300 block mb-1">UAE Phone / WhatsApp *</label>
                        <input 
                          type="tel"
                          required
                          placeholder="+971 50 449 8811"
                          value={bPhone}
                          onChange={(e) => setBPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-300 block mb-1">Vehicle Plate Number</label>
                        <input 
                          type="text"
                          placeholder="e.g. Dubai L 59012"
                          value={bPlate}
                          onChange={(e) => setBPlate(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 text-xs font-mono text-slate-300">
                      <div className="flex justify-between">
                        <span>Total Estimated Cost:</span>
                        <span className="text-cyan-400 font-bold">AED {grandTotal}</span>
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>Payment Terms:</span>
                        <span>Pay at Studio / Mobile Delivery</span>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="w-1/3 py-4 rounded-xl bg-white/10 text-white font-mono text-xs uppercase"
                      >
                        ← BACK
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold font-mono text-xs uppercase shadow-[0_0_20px_rgba(6,182,212,0.4)]"
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

      {/* ── CUSTOMER REVIEWS CAROUSEL ── */}
      <section className="py-24 bg-[#0A0D12] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Star className="w-3.5 h-3.5 fill-cyan-400" />
              <span>CLIENT TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Trusted by UAE Exotic Owners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-[#0D1117] p-6 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex gap-1 text-cyan-400">
                    {[...Array(t.rating)].map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-cyan-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 font-sans italic leading-relaxed">"{t.review}"</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">{t.name}</h4>
                  <span className="text-[11px] font-mono text-cyan-400">{t.vehicle} • {t.service}</span>
                  <span className="text-[10px] font-mono text-slate-400 block">{t.location}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── LOCATIONS SECTION ── */}
      <section id="locations" className="py-24 bg-[#07090C] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>UAE STUDIOS NETWORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Studios & Mobile Fleet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {LOCATIONS.map((loc, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#0D1117] border border-cyan-500/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-serif">{loc.name}</h3>
                    <p className="text-xs font-mono text-slate-400">{loc.address}</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs font-mono text-slate-300 border-t border-white/10 pt-3">
                  <p>Phone: <a href={`tel:${loc.phone}`} className="text-cyan-400 font-bold">{loc.phone}</a></p>
                  <p>WhatsApp: <a href={`https://wa.me/${loc.whatsapp.replace(/[^0-9]/g,'')}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold">{loc.whatsapp}</a></p>
                  <p>Hours: {loc.hours}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICE CART / BASKET DRAWER */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="w-full max-w-md bg-[#0D1117] border-l border-cyan-500/30 h-full p-6 space-y-6 flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white font-serif">Service Summary Basket</h3>
                  </div>
                  <button onClick={() => setIsCartOpen(false)} className="p-2 text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-cyan-400 font-bold">{activeService.title}</span>
                      <span className="text-white font-bold">AED {adjustedServicePrice}</span>
                    </div>
                    <p className="text-[11px] font-mono text-slate-400">Vehicle: {activeVehicle.name} ({activeVehicle.multiplier}x Rate)</p>
                  </div>

                  {selectedAddons.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-slate-300 font-bold block">Selected Add-ons ({selectedAddons.length})</span>
                      {selectedAddons.map(id => {
                        const addon = ADDONS.find(a => a.id === id);
                        if (!addon) return null;
                        return (
                          <div key={id} className="flex justify-between items-center text-xs font-mono text-slate-300 p-2 rounded-lg bg-white/5">
                            <span>{addon.name}</span>
                            <span className="text-cyan-400">+AED {addon.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-4">
                <div className="flex justify-between items-center font-mono">
                  <span className="text-slate-300 text-xs">Total AED:</span>
                  <span className="text-2xl font-extrabold text-cyan-400">AED {grandTotal}</span>
                </div>
                <a
                  href="#booking-flow"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold font-mono text-xs text-center uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  PROCEED TO BOOKING →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── FOOTER ── */}
      <footer className="py-20 bg-[#050709] text-slate-400 text-xs font-mono border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Car className="w-6 h-6 text-cyan-400" />
              <span className="text-2xl font-extrabold text-white tracking-tight font-serif">
                AURELIS <span className="text-cyan-400">AUTO CARE</span>
              </span>
            </div>
            <p className="text-slate-400 text-center md:text-right">
              Al Quoz Industrial 3 • Dubai • Al Reem Island • Abu Dhabi, UAE
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 AURELIS AUTOMOTIVE CARE LLC. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-6">
              <span className="text-cyan-400">CERTIFIED DETAIL STUDIO</span>
              <span>XPEL AUTHORIZED PPF INSTALLER</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default AurelisShowcase;
