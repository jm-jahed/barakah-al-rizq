'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Shield, Clock, MapPin, Users, Award, ArrowRight, CheckCircle2, Phone, Mail, MessageSquare, Building2, Sliders, X, Send, ShieldCheck, Luggage, Calendar, Compass, ArrowUpDown, DollarSign, Utensils, Car, FileText, ChevronRight } from 'lucide-react';

// Fleet Data for Function 2 (Comparison)
const FLEET_AIRCRAFT = [
  {
    id: 'g650er',
    name: 'Gulfstream G650ER',
    class: 'Ultra-Long-Range',
    seats: 16,
    range: '7,500 nm (13,890 km)',
    speed: 'Mach 0.90 (956 km/h)',
    cabinHeight: '1.96 m (6 ft 5 in)',
    cabinLength: '14.27 m',
    baggage: '195 cu ft',
    hourlyRate: 48000,
    rateFormatted: 'AED 48,000 / hr',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    description: 'The global benchmark for ultra-long-range executive travel. Connects Dubai non-stop to New York, Tokyo, or London in supreme quietness.',
    amenities: ['Private Stateroom Bedroom', 'Ka-band Ultra-Fast Satellite Wi-Fi', 'Full Galley Oven & Espresso', 'Dual Lavatories with Shower']
  },
  {
    id: 'global7500',
    name: 'Bombardier Global 7500',
    class: 'Flagship Ultra-Long-Range',
    seats: 19,
    range: '7,700 nm (14,260 km)',
    speed: 'Mach 0.925 (982 km/h)',
    cabinHeight: '1.88 m (6 ft 2 in)',
    cabinLength: '16.59 m',
    baggage: '195 cu ft',
    hourlyRate: 52000,
    rateFormatted: 'AED 52,000 / hr',
    image: 'https://images.unsplash.com/photo-1519074069444-1ba4eaa1674a?auto=format&fit=crop&w=800&q=80',
    description: 'Four true living spaces including a permanent master suite with full-size bed and Nuage zero-gravity ergonomic seating.',
    amenities: ['Master Suite with Permanent Bed', '4 Independent Living Zones', 'Soleil Circadian Lighting System', 'Convection & Steam Ovens']
  },
  {
    id: 'falcon8x',
    name: 'Dassault Falcon 8X',
    class: 'Tri-Jet Heavy Executive',
    seats: 14,
    range: '6,450 nm (11,945 km)',
    speed: 'Mach 0.90 (956 km/h)',
    cabinHeight: '1.88 m (6 ft 2 in)',
    cabinLength: '13.00 m',
    baggage: '140 cu ft',
    hourlyRate: 42000,
    rateFormatted: 'AED 42,000 / hr',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80',
    description: 'Unmatched airfield agility allowing operations at short-runway airports like London City and Aspen while burning 30% less fuel.',
    amenities: ['Tri-Jet Short Field Performance', 'Lowest Cabin Altitude (3,900 ft)', '30+ Custom Layout Configurations', 'HEPA Air Filtration']
  },
  {
    id: 'praetor600',
    name: 'Embraer Praetor 600',
    class: 'Super-Midsize Jet',
    seats: 10,
    range: '4,018 nm (7,441 km)',
    speed: 'Mach 0.83 (881 km/h)',
    cabinHeight: '1.83 m (6 ft 0 in)',
    cabinLength: '8.38 m',
    baggage: '155 cu ft',
    hourlyRate: 32000,
    rateFormatted: 'AED 32,000 / hr',
    image: 'https://images.unsplash.com/photo-1559687123-a551d8d9b92d?auto=format&fit=crop&w=800&q=80',
    description: 'Best-in-class super-midsize range capable of non-stop Dubai to London flights with full fly-by-wire turbulence reduction technology.',
    amenities: ['Full Fly-By-Wire Flight Controls', 'Active Turbulence Reduction', 'Flat-Floor Cabin Architecture', '6 Foot Stand-Up Room']
  }
];

// Empty Leg Offers
const EMPTY_LEGS = [
  { route: 'Dubai (DWC) → London (FAB)', date: 'Sep 14, 2026', aircraft: 'Gulfstream G650ER', origPrice: 'AED 240,000', dealPrice: 'AED 115,000' },
  { route: 'Abu Dhabi (AZI) → Riyadh (RUH)', date: 'Sep 16, 2026', aircraft: 'Embraer Praetor 600', origPrice: 'AED 95,000', dealPrice: 'AED 48,000' },
  { route: 'Dubai (DWC) → Paris (LBG)', date: 'Sep 18, 2026', aircraft: 'Bombardier Global 7500', origPrice: 'AED 260,000', dealPrice: 'AED 130,000' },
  { route: 'Geneva (GVA) → Dubai (DWC)', date: 'Sep 21, 2026', aircraft: 'Dassault Falcon 8X', origPrice: 'AED 210,000', dealPrice: 'AED 105,000' },
];

export const VelocityShowcase: React.FC = () => {
  // ── ADVANCED FUNCTION 1: FLIGHT QUOTE ENGINE STATE ──
  const [depAirport, setDepAirport] = useState<string>('Dubai DWC');
  const [arrAirport, setArrAirport] = useState<string>('London FAB');
  const [travelDate, setTravelDate] = useState<string>('2026-09-15');
  const [paxCount, setPaxCount] = useState<number>(6);
  const [tripType, setTripType] = useState<'oneway' | 'roundtrip'>('oneway');
  const [selectedClass, setSelectedClass] = useState<string>('g650er');

  // ── ADVANCED FUNCTION 2: FLEET COMPARISON MATRIX STATE ──
  const [selectedFleetIds, setSelectedFleetIds] = useState<string[]>(['g650er', 'global7500']);

  // ── ADVANCED FUNCTION 3: JET CARD CALCULATOR STATE ──
  const [annualHours, setAnnualHours] = useState<number>(50);
  const [cardTier, setCardTier] = useState<'silver' | 'gold' | 'platinum' | 'sovereign'>('platinum');

  // ── ADVANCED FUNCTION 4: MULTI-STEP CHARTER BOOKING STATE ──
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [cateringPref, setCateringPref] = useState<string>('caviar-michelin');
  const [groundPref, setGroundPref] = useState<string>('rolls-royce');
  const [bName, setBName] = useState<string>('');
  const [bPhone, setBPhone] = useState<string>('');
  const [bEmail, setBEmail] = useState<string>('');
  const [bookingComplete, setBookingComplete] = useState<boolean>(false);

  // ── ADVANCED FUNCTION 5: CONTACT FORM STATE ──
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [cName, setCName] = useState<string>('');
  const [cEmail, setCEmail] = useState<string>('');
  const [cPhone, setCPhone] = useState<string>('');
  const [cCompany, setCCompany] = useState<string>('');
  const [cService, setCService] = useState<string>('on-demand-charter');
  const [cMessage, setCMessage] = useState<string>('');

  // Calculations for Function 1 (Flight Quote)
  const classObj = FLEET_AIRCRAFT.find(a => a.id === selectedClass) || FLEET_AIRCRAFT[0];
  const estFlightHours = depAirport.includes('London') || arrAirport.includes('London') || arrAirport.includes('Paris') ? 7.2 :
                         depAirport.includes('New York') || arrAirport.includes('New York') ? 13.5 :
                         depAirport.includes('Riyadh') || arrAirport.includes('Riyadh') ? 1.8 : 4.5;

  const totalQuoteAed = Math.round(estFlightHours * classObj.hourlyRate * (tripType === 'roundtrip' ? 1.85 : 1.0));

  // Calculations for Function 3 (Jet Card)
  const tierRateMap = { silver: 34000, gold: 42000, platinum: 48000, sovereign: 54000 };
  const baseRate = tierRateMap[cardTier];
  const annualCardInvestAed = Math.round(annualHours * baseRate);
  const annualSavingsAed = Math.round(annualCardInvestAed * 0.15); // 15% VIP Jet Card Discount

  const toggleFleetSelection = (id: string) => {
    if (selectedFleetIds.includes(id)) {
      if (selectedFleetIds.length > 1) {
        setSelectedFleetIds(selectedFleetIds.filter(i => i !== id));
      }
    } else {
      if (selectedFleetIds.length < 3) {
        setSelectedFleetIds([...selectedFleetIds, id]);
      }
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingComplete(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#070B12] text-gray-100 font-sans selection:bg-amber-400/30 selection:text-amber-200">
      
      {/* ── TOP NAV BAR ── */}
      <header className="sticky top-0 z-40 bg-[#070B12]/90 backdrop-blur-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-amber-600 to-yellow-700 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <div className="w-full h-full bg-[#070B12] rounded-[10px] flex items-center justify-center">
                <Plane className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-serif">
                VELOCITY <span className="text-amber-400">AVIATION</span>
              </span>
              <span className="block text-[10px] font-mono text-amber-400/80 tracking-widest uppercase">
                Al Maktoum Int'l Airport (DWC) • Dubai
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider text-gray-300">
            <a href="#quote-engine" className="hover:text-amber-400 transition-colors">FLIGHT QUOTE</a>
            <a href="#fleet-matrix" className="hover:text-amber-400 transition-colors">FLEET MATRIX</a>
            <a href="#jet-card" className="hover:text-amber-400 transition-colors">JET CARD</a>
            <a href="#empty-legs" className="hover:text-amber-400 transition-colors">EMPTY LEGS</a>
            <a href="#charter-flow" className="hover:text-amber-400 transition-colors">BOOK CHARTER</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">FBO CONTACT</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#charter-flow"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer flex items-center gap-2"
            >
              <Plane className="w-3.5 h-3.5" />
              <span>REQUEST JET CHARTER</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── CINEMATIC HERO ── */}
      <section className="relative py-24 lg:py-36 overflow-hidden border-b border-amber-500/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-amber-500/10 blur-[200px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>IS-BAO Stage 3 & ARGUS Platinum Certified FBO</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] font-serif">
                Unrivaled Executive <br />
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Private Jet Aviation.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
                Dubai’s flagship private aviation operator. Ultra-long-range Gulfstream & Bombardier aircraft, under 30-minute VIP FBO boarding, and bespoke global jet charters.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#quote-engine"
                  className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
                >
                  <span>CALCULATE FLIGHT QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#fleet-matrix"
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Plane className="w-4 h-4 text-amber-400" />
                  <span>COMPARE FLEET MATRIX</span>
                </a>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">14 Jets</span>
                  <span className="text-xs text-gray-400 font-mono">Managed Ultra Long Fleet</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">&lt; 30 Mins</span>
                  <span className="text-xs text-gray-400 font-mono">DWC VIP Terminal Boarding</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">4,800+</span>
                  <span className="text-xs text-gray-400 font-mono">Global Airports Accessible</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-amber-500/30 via-amber-600/10 to-transparent border border-amber-500/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80" 
                    alt="Gulfstream G650ER Executive Jet" 
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#070B12]/90 border border-amber-500/30 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                        <Plane className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-white uppercase">Dubai DWC Executive Airport</h4>
                        <p className="text-[11px] text-gray-400">Al Maktoum Int'l VIP Terminal Suite 4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ADVANCED FUNCTION 1: PRIVATE JET FLIGHT QUOTE ENGINE ── */}
      <section id="quote-engine" className="py-24 bg-[#0B111D] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 1: INSTANT FLIGHT ESTIMATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Private Jet Flight Quote Calculator
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Select your departure FBO, global destination, passenger count, and preferred aircraft class to compute instant estimated flight time and charter rates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 bg-[#111A2C] p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* Trip Type */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setTripType('oneway')}
                  className={`flex-1 py-2.5 rounded-xl font-mono text-xs font-bold uppercase transition-all cursor-pointer ${
                    tripType === 'oneway' ? 'bg-amber-400 text-black font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'bg-white/5 text-gray-400 border border-white/10'
                  }`}
                >
                  One-Way Charter
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('roundtrip')}
                  className={`flex-1 py-2.5 rounded-xl font-mono text-xs font-bold uppercase transition-all cursor-pointer ${
                    tripType === 'roundtrip' ? 'bg-amber-400 text-black font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'bg-white/5 text-gray-400 border border-white/10'
                  }`}
                >
                  Round-Trip Charter
                </button>
              </div>

              {/* Departure & Arrival */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">Departure FBO / City</label>
                  <select
                    value={depAirport}
                    onChange={(e) => setDepAirport(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                  >
                    <option value="Dubai DWC" className="bg-[#111A2C]">Dubai DWC (Al Maktoum Int'l)</option>
                    <option value="Abu Dhabi AZI" className="bg-[#111A2C]">Abu Dhabi AZI (Al Bateen Executive)</option>
                    <option value="Riyadh RUH" className="bg-[#111A2C]">Riyadh King Khalid (RUH)</option>
                    <option value="London FAB" className="bg-[#111A2C]">London Farnborough (FAB)</option>
                    <option value="Paris LBG" className="bg-[#111A2C]">Paris Le Bourget (LBG)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">Destination FBO / City</label>
                  <select
                    value={arrAirport}
                    onChange={(e) => setArrAirport(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                  >
                    <option value="London FAB" className="bg-[#111A2C]">London Farnborough (FAB)</option>
                    <option value="Paris LBG" className="bg-[#111A2C]">Paris Le Bourget (LBG)</option>
                    <option value="New York TEB" className="bg-[#111A2C]">New York Teterboro (TEB)</option>
                    <option value="Riyadh RUH" className="bg-[#111A2C]">Riyadh King Khalid (RUH)</option>
                    <option value="Zurich ZRH" className="bg-[#111A2C]">Zurich Airport (ZRH)</option>
                  </select>
                </div>
              </div>

              {/* Aircraft Class & Passenger Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">Preferred Aircraft</label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                  >
                    {FLEET_AIRCRAFT.map(a => (
                      <option key={a.id} value={a.id} className="bg-[#111A2C]">{a.name} ({a.rateFormatted})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-mono text-gray-300">Passengers</label>
                    <span className="text-xs font-mono font-bold text-amber-400">{paxCount} VIPs</span>
                  </div>
                  <input 
                    type="range"
                    min={1}
                    max={19}
                    value={paxCount}
                    onChange={(e) => setPaxCount(Number(e.target.value))}
                    className="w-full accent-amber-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

            </div>

            {/* Output Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#1F2C45] to-[#0B111D] p-8 rounded-3xl border border-amber-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest block">
                Estimated Non-Stop Flight Duration
              </span>

              <div className="text-5xl font-extrabold font-mono text-white tracking-tight">
                {estFlightHours} <span className="text-sm text-amber-400 font-sans font-bold">Hours</span>
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full font-mono text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                Route: {depAirport} → {arrAirport}
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="block text-[11px] font-mono text-gray-400 uppercase">Estimated All-Inclusive Charter Price</span>
                <span className="text-3xl font-extrabold text-white font-mono">AED {totalQuoteAed.toLocaleString()}</span>
              </div>

              <a
                href="#charter-flow"
                className="block w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer"
              >
                BOOK THIS FLIGHT DISPATCH
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 2: AIRCRAFT FLEET COMPARISON MATRIX ── */}
      <section id="fleet-matrix" className="py-24 bg-[#070B12] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Plane className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 2: FLEET SPEC COMPARISON MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Aircraft Fleet Comparison
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Compare executive cabin specifications, flight ranges, and hourly rates across our long-range fleet side-by-side.
            </p>
          </div>

          {/* Selector Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {FLEET_AIRCRAFT.map(a => (
              <button
                key={a.id}
                type="button"
                onClick={() => toggleFleetSelection(a.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                  selectedFleetIds.includes(a.id)
                    ? 'bg-amber-400 text-black border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:text-white'
                }`}
              >
                {selectedFleetIds.includes(a.id) ? '✓ ' : '+ '} {a.name}
              </button>
            ))}
          </div>

          {/* Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {FLEET_AIRCRAFT.filter(a => selectedFleetIds.includes(a.id)).map(air => (
              <div key={air.id} className="bg-[#111A2C] rounded-3xl border border-amber-500/30 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img src={air.image} alt={air.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 text-amber-400 font-mono text-[10px] font-bold">
                      {air.class}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white font-serif">{air.name}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">{air.description}</p>

                    <div className="space-y-2 pt-2 text-xs font-mono text-gray-300 border-t border-white/10">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Max Passenger Capacity:</span>
                        <span className="text-white font-bold">{air.seats} Passengers</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Max Non-Stop Range:</span>
                        <span className="text-amber-400 font-bold">{air.range}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Cruise Speed:</span>
                        <span className="text-white font-bold">{air.speed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Cabin Stand-Up Height:</span>
                        <span className="text-white font-bold">{air.cabinHeight}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Hourly Rate:</span>
                        <span className="text-amber-400 font-bold">{air.rateFormatted}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="#charter-flow"
                    className="block w-full py-3 rounded-xl bg-white/10 hover:bg-amber-400 hover:text-black text-white font-mono text-xs font-bold text-center transition-all"
                  >
                    REQUEST THIS AIRCRAFT →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 3: JET CARD MEMBERSHIP CALCULATOR ── */}
      <section id="jet-card" className="py-24 bg-[#0B111D] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 3: JET CARD MEMBERSHIP CALCULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Jet Card Membership Estimator
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Lock in guaranteed aircraft availability with fixed hourly rates, zero peak day surcharges, and complimentary helicopter airport transfers across the UAE.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#111A2C] p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-6">
                
                {/* Tier Selection */}
                <div>
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-3">Select Jet Card Tier</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'silver', label: 'Silver (Light Jet)' },
                      { id: 'gold', label: 'Gold (Midsize)' },
                      { id: 'platinum', label: 'Platinum (Heavy)' },
                      { id: 'sovereign', label: 'Sovereign (G650ER)' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setCardTier(t.id as any)}
                        className={`p-3 rounded-xl font-mono text-xs font-bold text-left transition-all cursor-pointer border ${
                          cardTier === t.id
                            ? 'bg-amber-400 text-black border-amber-400 font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                            : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Annual Flight Hours Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono font-bold text-gray-300 uppercase">Annual Flight Hours Lock</label>
                    <span className="text-sm font-mono font-extrabold text-amber-400">{annualHours} Hours / Year</span>
                  </div>
                  <input 
                    type="range"
                    min={25}
                    max={250}
                    step={25}
                    value={annualHours}
                    onChange={(e) => setAnnualHours(Number(e.target.value))}
                    className="w-full accent-amber-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                  />
                </div>

              </div>

              <div className="md:col-span-5 bg-gradient-to-b from-[#1F2C45] to-[#070B12] p-8 rounded-3xl border border-amber-500/30 text-center space-y-6">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest block">
                  Annual Jet Card Investment
                </span>

                <div className="text-4xl font-extrabold font-mono text-white tracking-tight">
                  AED {annualCardInvestAed.toLocaleString()}
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
                  Estimated VIP Member Savings: <strong>AED {annualSavingsAed.toLocaleString()} / Year</strong>
                </div>

                <a
                  href="#contact"
                  className="block w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer"
                >
                  APPLY FOR JET CARD MEMBERSHIP
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── EMPTY LEGS SECTION ── */}
      <section id="empty-legs" className="py-24 bg-[#070B12] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Discounted Empty-Leg Opportunities
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Save up to 50% on repositioning flights originating or terminating at Dubai DWC & Abu Dhabi AZI FBO terminals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {EMPTY_LEGS.map((leg, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#111A2C] border border-amber-500/30 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 font-bold">{leg.date}</span>
                  <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 font-mono text-[10px]">50% DISCOUNT</span>
                </div>
                <h3 className="text-lg font-bold text-white font-serif">{leg.route}</h3>
                <p className="text-xs font-mono text-gray-400">Aircraft: {leg.aircraft}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <span className="text-xs text-gray-500 line-through font-mono block">{leg.origPrice}</span>
                    <span className="text-lg font-bold text-white font-mono">{leg.dealPrice}</span>
                  </div>
                  <a href="#charter-flow" className="px-4 py-2 rounded-xl bg-amber-400 text-black font-mono text-xs font-bold uppercase hover:bg-amber-300 transition-all">
                    CLAIM LEG
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 4: MULTI-STEP CHARTER REQUEST BOOKING ── */}
      <section id="charter-flow" className="py-24 bg-[#0B111D] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Plane className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 4: MULTI-STEP CHARTER DISPATCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Dispatch Private Charter Request
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Complete the 3-step request flow to configure catering, ground transfers, and flight dispatch parameters with our 24/7 operations desk.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-[#111A2C] p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl relative">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 font-mono text-xs">
              <div className={`flex items-center gap-2 ${bookingStep >= 1 ? 'text-amber-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[10px]">1</span>
                <span>In-Flight Services</span>
              </div>
              <div className={`flex items-center gap-2 ${bookingStep >= 2 ? 'text-amber-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[10px]">2</span>
                <span>VIP Ground Transfer</span>
              </div>
              <div className={`flex items-center gap-2 ${bookingStep >= 3 ? 'text-amber-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[10px]">3</span>
                <span>Dispatch Contact</span>
              </div>
            </div>

            {bookingComplete ? (
              <div className="text-center py-12 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white font-serif">Flight Request Transmitted</h3>
                <p className="text-xs text-gray-300 font-mono leading-relaxed">
                  Thank you, <strong>{bName}</strong>. Our Flight Dispatch Duty Officer at Dubai DWC Airport will confirm slot clearance via <strong>{bPhone}</strong> within 15 minutes.
                </p>
                <button
                  onClick={() => {
                    setBookingComplete(false);
                    setBookingStep(1);
                  }}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-amber-400 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all"
                >
                  NEW FLIGHT REQUEST
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {/* STEP 1 */}
                {bookingStep === 1 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-amber-400 uppercase block">Step 1: Gourmet In-Flight Catering</label>
                    <div className="space-y-3">
                      {[
                        { id: 'caviar-michelin', name: 'Royal Caviar & Michelin-Star Dining', desc: 'Beluga caviar, vintage Dom Pérignon, and 5-course custom chef menu' },
                        { id: 'organic-wellness', name: 'Organic Cold-Pressed & Gourmet Wellness', desc: 'Plant-based organic cuisine with fresh detox juices' },
                        { id: 'emirati-heritage', name: 'Emirati Heritage Royal Tasting', desc: 'Traditional UAE royal cuisine prepared by master Emirati chefs' },
                      ].map((item) => (
                        <label 
                          key={item.id}
                          className={`flex flex-col p-4 rounded-xl border cursor-pointer transition-all ${
                            cateringPref === item.id
                              ? 'bg-amber-500/15 border-amber-400 text-white'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input 
                              type="radio" 
                              name="catPref"
                              checked={cateringPref === item.id}
                              onChange={() => setCateringPref(item.id)}
                              className="accent-amber-400"
                            />
                            <span className="text-xs font-mono font-bold">{item.name}</span>
                          </div>
                          <span className="text-[11px] text-gray-400 ml-6 mt-1 font-mono">{item.desc}</span>
                        </label>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setBookingStep(2)}
                      className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all mt-4"
                    >
                      NEXT STEP: VIP GROUND TRANSFER →
                    </button>
                  </div>
                )}

                {/* STEP 2 */}
                {bookingStep === 2 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-amber-400 uppercase block">Step 2: Airport VIP Chauffeur Transfer</label>
                    
                    <div className="space-y-3">
                      {[
                        { id: 'rolls-royce', name: 'Rolls-Royce Phantom VIII Chauffeur', desc: 'Direct tarmac transfer to aircraft steps' },
                        { id: 'maybach-guard', name: 'Mercedes-Maybach S680 VR10 Armored', desc: 'Armored VIP escort with security detachment' },
                        { id: 'air-taxi', name: 'AgustaWestland AW139 Helicopter Transfer', desc: 'Direct helipad transfer from Palm Jumeirah or DIFC' },
                      ].map((item) => (
                        <label 
                          key={item.id}
                          className={`flex flex-col p-4 rounded-xl border cursor-pointer transition-all ${
                            groundPref === item.id
                              ? 'bg-amber-500/15 border-amber-400 text-white'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input 
                              type="radio" 
                              name="grdPref"
                              checked={groundPref === item.id}
                              onChange={() => setGroundPref(item.id)}
                              className="accent-amber-400"
                            />
                            <span className="text-xs font-mono font-bold">{item.name}</span>
                          </div>
                          <span className="text-[11px] text-gray-400 ml-6 mt-1 font-mono">{item.desc}</span>
                        </label>
                      ))}
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
                        className="w-2/3 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold font-mono text-xs uppercase"
                      >
                        NEXT: DISPATCH CONTACT →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {bookingStep === 3 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-amber-400 uppercase block">Step 3: Contact & Flight Review</label>
                    
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Full Legal Name *</label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. H.E. Mohammed Al-Maktoum"
                        value={bName}
                        onChange={(e) => setBName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-gray-300 block mb-1">UAE Phone / WhatsApp *</label>
                        <input 
                          type="tel"
                          required
                          placeholder="+971 50 991 3344"
                          value={bPhone}
                          onChange={(e) => setBPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-gray-300 block mb-1">Corporate Email *</label>
                        <input 
                          type="email"
                          required
                          placeholder="mohammed@sovereign.ae"
                          value={bEmail}
                          onChange={(e) => setBEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                        />
                      </div>
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
                        className="w-2/3 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold font-mono text-xs uppercase shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                      >
                        TRANSMIT FLIGHT DISPATCH ✓
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}

          </div>

        </div>
      </section>

      {/* ── FULL REAL-WORLD AVIATION CONTACT ECOSYSTEM ── */}
      <section id="contact" className="py-24 bg-[#070B12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>24/7 AVIATION OPERATIONS CONTACT ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Flight Operations & FBO Desks
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Connect with our round-the-clock flight dispatch officers at Al Maktoum International Airport (Dubai) or Al Bateen Executive Airport (Abu Dhabi).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Locations */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Dubai HQ */}
              <div className="p-6 rounded-3xl bg-[#111A2C] border border-amber-500/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-serif">Dubai DWC Executive Terminal HQ</h3>
                    <p className="text-xs font-mono text-gray-400">Al Maktoum International Airport (DWC)</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs font-mono text-gray-300 border-t border-white/10 pt-3">
                  <p>Executive Jet Terminal, VIP Suite 4, Jebel Ali, Dubai, UAE</p>
                  <p>Phone: <a href="tel:+97148879900" className="text-amber-400 font-bold">+971 4 887 9900</a></p>
                  <p>WhatsApp Ops: <a href="https://wa.me/971509913344" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold">+971 50 991 3344</a></p>
                  <p>Email: <a href="mailto:ops@velocityaviation.ae" className="text-amber-400">ops@velocityaviation.ae</a></p>
                </div>
              </div>

              {/* Abu Dhabi Office */}
              <div className="p-6 rounded-3xl bg-[#111A2C] border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/5 text-gray-300 border border-white/10">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-serif">Abu Dhabi AZI Executive Desk</h3>
                    <p className="text-xs font-mono text-gray-400">Al Bateen Executive Airport (AZI)</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs font-mono text-gray-300 border-t border-white/10 pt-3">
                  <p>Private Terminal Building 2, Al Bateen, Abu Dhabi, UAE</p>
                  <p>Phone: <a href="tel:+97126998811" className="text-white font-bold">+971 2 699 8811</a></p>
                  <p>Hours: 24/7/365 Non-Stop Operations</p>
                </div>
              </div>

            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-[#111A2C] p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl relative">
              
              {contactSubmitted ? (
                <div className="text-center py-16 space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
                  <h3 className="text-3xl font-extrabold text-white font-serif">Flight Inquiry Transmitted</h3>
                  <p className="text-xs text-gray-300 font-mono max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{cName}</strong>. Our Senior Flight Dispatcher at DWC Airport will contact you within 15 minutes.
                  </p>
                  <button 
                    onClick={() => setContactSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-amber-400 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-serif">Flight Inquiry & Consultation Form</h3>
                    <p className="text-xs font-mono text-gray-400 mt-1">Direct transmission to Duty Flight Operations Officer.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Full Legal Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Sheikh Hamdan Al-Nahyan"
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
                        placeholder="hamdan@sovereign.ae"
                        value={cEmail}
                        onChange={(e) => setCEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">UAE Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+971 50 991 3344"
                        value={cPhone}
                        onChange={(e) => setCPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Company / Family Office</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Royal Flight Detachment"
                        value={cCompany}
                        onChange={(e) => setCCompany(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Aviation Service Required</label>
                    <select 
                      value={cService}
                      onChange={(e) => setCService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                    >
                      <option value="on-demand-charter" className="bg-[#111A2C]">On-Demand Executive Jet Charter</option>
                      <option value="jet-card-membership" className="bg-[#111A2C]">Jet Card Membership Application</option>
                      <option value="aircraft-management" className="bg-[#111A2C]">Aircraft Management & FBO Services</option>
                      <option value="empty-leg-deal" className="bg-[#111A2C]">Empty-Leg Flight Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Flight Details & Special Requirements</label>
                    <textarea 
                      rows={4}
                      placeholder="Specify flight itinerary, date, passenger count, preferred aircraft model, and catering preferences..."
                      value={cMessage}
                      onChange={(e) => setCMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT DISPATCH INQUIRY</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-20 bg-[#04070D] text-gray-400 text-xs font-mono border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Plane className="w-6 h-6 text-amber-400" />
              <span className="text-2xl font-extrabold text-white tracking-tight font-serif">
                VELOCITY <span className="text-amber-400">AVIATION</span> DUBAI
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              Executive Jet Terminal Suite 4 • Al Maktoum International Airport (DWC), Dubai, UAE
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 VELOCITY EXECUTIVE AVIATION FZ-LLC. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-6">
              <span className="text-amber-400">GCAA AOC PERMIT #80941</span>
              <span>IS-BAO STAGE 3 CERTIFIED</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default VelocityShowcase;
