'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palmtree, Sun, ShieldCheck, MapPin, Users, ArrowRight, CheckCircle2, Phone, Mail, MessageSquare, Building2, Sliders, X, Send, Utensils, Calendar, Award, Compass, Heart, Wine, Waves, ChevronRight, Shield, Plane } from 'lucide-react';

// Villa Fleet Data (Function 2)
const RESORT_VILLAS = [
  {
    id: 'overwater-pavilion',
    name: 'Solaria Overwater Pavilion',
    bedrooms: 1,
    guests: 2,
    size: '350 sq m (3,767 sq ft)',
    pool: '12m Private Infinity Pool',
    nightlyRate: 18500,
    rateFormatted: 'AED 18,500 / night',
    butler: true,
    beachAccess: 'Direct Lagoon Glass Steps',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    description: 'Suspended over turquoise lagoon waters with a glass-bottom floor salon, outdoor rain shower, sun deck catamarans, and 24/7 island butler.',
    features: ['Overwater Glass Floor Living Room', '12m Saltwater Infinity Pool', 'Sub-Aquatic Horizon View Bedroom', 'Direct Coral Snorkeling Access']
  },
  {
    id: 'oceanfront-residence',
    name: 'Oceanfront Master Residence',
    bedrooms: 2,
    guests: 4,
    size: '520 sq m (5,597 sq ft)',
    pool: '18m Sunset Edge Pool',
    nightlyRate: 28000,
    rateFormatted: 'AED 28,000 / night',
    butler: true,
    beachAccess: 'Private Powder-White Sand Beach',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    description: 'Surrounded by lush tropical palms and private coral reefs with a dual-tier infinity pool, private teppanyaki outdoor kitchen, and sunset terrace.',
    features: ['Dual-Level Sunset Deck', 'Personal Chef & Outdoor Kitchen', 'Open-Air Stone Bathing Pavilion', 'Private Island Buggy Access']
  },
  {
    id: 'royal-lagoon-sanctuary',
    name: 'Royal Lagoon Sanctuary',
    bedrooms: 3,
    guests: 6,
    size: '850 sq m (9,149 sq ft)',
    pool: '25m Olympic Lap Infinity Pool',
    nightlyRate: 45000,
    rateFormatted: 'AED 45,000 / night',
    butler: true,
    beachAccess: 'Private Lagoon & Boat Dock',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    description: 'The pinnacle of private island living with its own dedicated yacht berth, private spa treatment pavilion, 24/7 chef and 2 personal island concierges.',
    features: ['Private Yacht Dock & Helipad Landing', 'Private In-Villa Spa Pavilion', 'Dedicated Michelin Master Chef', 'Submarine Excursion Dock']
  },
  {
    id: 'beachfront-sunset-estate',
    name: 'Beachfront Sunset Estate',
    bedrooms: 4,
    guests: 8,
    size: '1,200 sq m (12,916 sq ft)',
    pool: '2x Private Lagoon Pools',
    nightlyRate: 65000,
    rateFormatted: 'AED 65,000 / night',
    butler: true,
    beachAccess: '300m Private Secluded Coastline',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    description: 'An expansive private compound occupying the western tip of Solaria Island. Features 300 meters of private beachfront, outdoor cinema, and wine cellar.',
    features: ['300m Secluded Beach Cove', '500-Bottle Royal Wine Cellar', 'Outdoor Stars Cinema', '24/7 Security & Butler Team']
  }
];

// Experience Catalog (Function 3)
const RESORT_EXPERIENCES = [
  { id: 'sandbank-dinner', name: 'Private Sandbank Candlelight Chef Dinner', price: 8500, desc: 'Isolated sandbank dining under the stars with 6-course lobster & caviar menu' },
  { id: 'sunset-yacht', name: 'Private Yacht Sunset & Dolphin Cruise', price: 12000, desc: '3-hour sunset cruise on M/Y Solaria Tender with vintage Dom Pérignon' },
  { id: 'coral-dive', name: 'Submarine Reef Dive & Coral Restoration', price: 6500, desc: 'Guided deep-sea dive with resident marine biologist and personal coral adoption tag' },
  { id: 'ayurvedic-spa', name: 'Overwater Ayurvedic 4-Hand Spa Ritual', price: 4200, desc: '2.5 hour holistic wellness journey in the glass-floor overwater spa pavilion' }
];

// 20 Distinct Sanctuary Services (Global Service Requirement Audit)
const SANCTUARY_SERVICES_20 = [
  { id: 'serv-1', title: 'Private Seaplane Charter & Terminal Lounge', cat: 'Arrival & Transfer', desc: 'Direct 25-minute Twin Otter seaplane flight from Male VIP Terminal to Solaria Water Pontoon.' },
  { id: 'serv-2', title: '24/7 Personal Island Butler Service', cat: 'Hospitality', desc: 'Dedicated certified royal butler providing unpacking, unpacking, and 24/7 concierge assistance.' },
  { id: 'serv-3', title: 'SUB-AQUA 5-Meter Underwater Restaurant', cat: 'Gastronomy', desc: 'Fine dining 5 meters below sea level surrounded by live coral reefs and marine life.' },
  { id: 'serv-4', title: 'Isolated Sandbank Chef Candlelight Dining', cat: 'Gastronomy', desc: 'Private 6-course lobster & caviar banquet set on a secluded ocean sandbank.' },
  { id: 'serv-5', title: 'Glass-Floor Overwater Ayurvedic Spa Rituals', cat: 'Wellness & Spa', desc: 'Signature 4-hand Abhyanga oil massage in an overwater glass-floor treatment suite.' },
  { id: 'serv-6', title: 'Marine Biology Submarine & Coral Restoration', cat: 'Eco-Adventure', desc: 'Guided submarine reef exploration with personal coral tagging and adoption certificate.' },
  { id: 'serv-7', title: 'Private Superyacht Sunset & Dolphin Cruise', cat: 'Maritime', desc: '3-hour sunset navigation on M/Y Solaria Tender accompanied by wild spinner dolphins.' },
  { id: 'serv-8', title: 'In-Villa Personal Teppanyaki & Robata Master', cat: 'Gastronomy', desc: 'Private chef preparing fresh catch and Wagyu beef on your villa outdoor deck.' },
  { id: 'serv-9', title: 'Bio-Hacking Outdoor Fitness & Yoga Studio', cat: 'Wellness & Spa', desc: 'Infrared sauna, cold plunge, and private sunrise yoga sessions led by master gurus.' },
  { id: 'serv-10', title: 'Junior Marine Biologist & Eco Kids Club', cat: 'Family Concierge', desc: 'Interactive turtle conservation, snorkeling lessons, and island treasure hunts.' },
  { id: 'serv-11', title: 'Full Private Island Sanctuary Buyout (12 Villas)', cat: 'Private Events', desc: 'Exclusive access to the entire 100-acre Solaria Atoll for up to 30 private guests.' },
  { id: 'serv-12', title: 'Overwater Sunrise Meditation & Sound Baths', cat: 'Wellness & Spa', desc: 'Tibetan singing bowl sound therapy conducted above crystal lagoon waters.' },
  { id: 'serv-13', title: '500-Bottle Royal Cellar Sommelier Masterclass', cat: 'Gastronomy', desc: 'Guided wine tasting of rare vintages paired with artisanal cheeses in the cellar.' },
  { id: 'serv-14', title: 'Offshore Big-Game Marlin & Tuna Sport Fishing', cat: 'Eco-Adventure', desc: 'Deep-sea angling aboard our custom 45ft Riviera sportfisher with expert guides.' },
  { id: 'serv-15', title: 'Open-Air Beachfront Starlight Private Cinema', cat: 'Entertainment', desc: 'Private movie screening on the beach with plush lounge beds and gourmet snacks.' },
  { id: 'serv-16', title: 'VIP Helipad & Superyacht Yacht Berth Docking', cat: 'Arrival & Transfer', desc: 'Direct helipad touchdown and deep-water mooring for mega-yachts up to 200ft.' },
  { id: 'serv-17', title: 'Professional Aerial Drone & Portrait Session', cat: 'Concierge', desc: 'Private photographer and 4K drone cinematography capturing your island stay.' },
  { id: 'serv-18', title: 'Seabob, E-Foil Fliteboard & Water Sports Hub', cat: 'Eco-Adventure', desc: 'Unlimited access to Seabob F5S jet scooters, hydrofoils, and jet skis.' },
  { id: 'serv-19', title: 'Bespoke Multi-Day Island Itinerary Curation', cat: 'Concierge', desc: 'Custom daily schedule designed around wellness, diving, and private dining.' },
  { id: 'serv-20', title: '24/7 On-Site Physician & Emergency Air Evac', cat: 'Health & Safety', desc: 'Round-the-clock medical care with immediate air ambulance dispatch coverage.' }
];

export const SolariaShowcase: React.FC = () => {
  // ── ADVANCED FUNCTION 1: VILLA STAY COST CALCULATOR STATE ──
  const [selectedVillaId, setSelectedVillaId] = useState<string>('overwater-pavilion');
  const [stayNights, setStayNights] = useState<number>(5);
  const [adults, setAdults] = useState<number>(2);
  const [mealPlan, setMealPlan] = useState<'half-board' | 'royal-all-inclusive'>('royal-all-inclusive');
  const [includeButler, setIncludeButler] = useState<boolean>(true);
  const [includeSeaplane, setIncludeSeaplane] = useState<boolean>(true);

  // ── ADVANCED FUNCTION 2: VILLA COMPARISON MATRIX STATE ──
  const [selectedVillaIds, setSelectedVillaIds] = useState<string[]>(['overwater-pavilion', 'oceanfront-residence']);

  // ── ADVANCED FUNCTION 3: BESPOKE EXPERIENCE BUILDER STATE ──
  const [selectedExpIds, setSelectedExpIds] = useState<string[]>(['sandbank-dinner', 'sunset-yacht']);

  // ── ADVANCED FUNCTION 4: MULTI-STEP RESERVATION FLOW STATE ──
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [diningPref, setDiningPref] = useState<string>('underwater-restaurant');
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
  const [cService, setCService] = useState<string>('private-island-stay');
  const [cMessage, setCMessage] = useState<string>('');

  // Calculations for Function 1 (Stay Calculator)
  const villaObj = RESORT_VILLAS.find(v => v.id === selectedVillaId) || RESORT_VILLAS[0];
  const baseStayCost = villaObj.nightlyRate * stayNights;
  const mealCost = mealPlan === 'royal-all-inclusive' ? stayNights * 2500 * adults : stayNights * 1200 * adults;
  const butlerCost = includeButler ? stayNights * 3500 : 0;
  const seaplaneCost = includeSeaplane ? 18000 : 0;
  const totalStayCostAed = Math.round(baseStayCost + mealCost + butlerCost + seaplaneCost);

  // Calculations for Function 3 (Experience Builder)
  const totalExpValue = selectedExpIds.reduce((acc, id) => {
    const item = RESORT_EXPERIENCES.find(e => e.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const toggleVillaSelection = (id: string) => {
    if (selectedVillaIds.includes(id)) {
      if (selectedVillaIds.length > 1) {
        setSelectedVillaIds(selectedVillaIds.filter(i => i !== id));
      }
    } else {
      if (selectedVillaIds.length < 3) {
        setSelectedVillaIds([...selectedVillaIds, id]);
      }
    }
  };

  const toggleExpSelection = (id: string) => {
    if (selectedExpIds.includes(id)) {
      setSelectedExpIds(selectedExpIds.filter(i => i !== id));
    } else {
      setSelectedExpIds([...selectedExpIds, id]);
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
    <div className="min-h-screen bg-[#070E0B] text-gray-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* ── TOP NAV BAR ── */}
      <header className="sticky top-0 z-40 bg-[#070E0B]/90 backdrop-blur-xl border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 via-teal-600 to-emerald-900 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <div className="w-full h-full bg-[#070E0B] rounded-[10px] flex items-center justify-center">
                <Palmtree className="w-5 h-5 text-emerald-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-serif">
                SOLARIA <span className="text-emerald-400">PRIVATE ISLAND</span>
              </span>
              <span className="block text-[10px] font-mono text-emerald-400/80 tracking-widest uppercase">
                Solaria Atoll • Maldives & Dubai Concierge
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider text-gray-300">
            <a href="#stay-calc" className="hover:text-emerald-400 transition-colors">STAY ESTIMATOR</a>
            <a href="#villa-matrix" className="hover:text-emerald-400 transition-colors">VILLA MATRIX</a>
            <a href="#experiences" className="hover:text-emerald-400 transition-colors">EXPERIENCE BUILDER</a>
            <a href="#booking-flow" className="hover:text-emerald-400 transition-colors">RESERVE SANCTUARY</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">VIP CONCIERGE</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#booking-flow"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 hover:from-emerald-300 hover:to-teal-400 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer flex items-center gap-2"
            >
              <Palmtree className="w-3.5 h-3.5" />
              <span>RESERVE PRIVATE VILLA</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 lg:py-36 overflow-hidden border-b border-emerald-500/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-emerald-500/10 blur-[200px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Condé Nast Traveler #1 World Private Island Resort</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] font-serif">
                Barefoot Elegance, <br />
                <span className="bg-gradient-to-r from-emerald-200 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                  Private Island Royalty.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
                An ultra-exclusive private island sanctuary in the Solaria Atoll. Featuring 12 overwater infinity pool villas, 24/7 dedicated personal island butler service, and private seaplane transfers.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#stay-calc"
                  className="px-8 py-4 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
                >
                  <span>CALCULATE PRIVATE STAY</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#villa-matrix"
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Palmtree className="w-4 h-4 text-emerald-400" />
                  <span>COMPARE VILLA RESIDENCES</span>
                </a>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">12 Villas</span>
                  <span className="text-xs text-gray-400 font-mono">Ultra-Exclusive Residences</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">100% Private</span>
                  <span className="text-xs text-gray-400 font-mono">Overwater Infinity Pools</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">24/7 Butler</span>
                  <span className="text-xs text-gray-400 font-mono">Dedicated Personal Concierge</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-emerald-500/30 via-teal-600/10 to-transparent border border-emerald-500/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" 
                    alt="Solaria Overwater Pavilion" 
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070E0B] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#070E0B]/90 border border-emerald-500/30 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <Palmtree className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-white uppercase">Solaria Atoll Private Sanctuary</h4>
                        <p className="text-[11px] text-gray-400">Private Seaplane Terminal & Helipad</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ADVANCED FUNCTION 1: VILLA & STAY COST CALCULATOR ── */}
      <section id="stay-calc" className="py-24 bg-[#0A1410] border-b border-emerald-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 1: RESORT STAY CALCULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Private Villa Stay Cost Estimator
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Select your villa residence, length of stay, dining plan, and private seaplane transfers to project total stay pricing in AED.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 bg-[#101F1A] p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* Villa Selection */}
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-2">Select Villa Residence</label>
                <select
                  value={selectedVillaId}
                  onChange={(e) => setSelectedVillaId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                >
                  {RESORT_VILLAS.map(v => (
                    <option key={v.id} value={v.id} className="bg-[#101F1A]">{v.name} ({v.rateFormatted})</option>
                  ))}
                </select>
              </div>

              {/* Length of Stay Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">Length of Stay</label>
                  <span className="text-sm font-mono font-extrabold text-emerald-400">{stayNights} Nights</span>
                </div>
                <input 
                  type="range"
                  min={3}
                  max={14}
                  value={stayNights}
                  onChange={(e) => setStayNights(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Guests Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">Adult Guests</label>
                  <span className="text-sm font-mono font-extrabold text-white">{adults} Guests</span>
                </div>
                <input 
                  type="range"
                  min={1}
                  max={villaObj.guests}
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Add-on Toggles */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                  <span className="text-xs font-mono font-bold text-gray-300 uppercase">24/7 Dedicated Private Island Butler (+AED 3.5k/night)</span>
                  <input 
                    type="checkbox"
                    checked={includeButler}
                    onChange={(e) => setIncludeButler(e.target.checked)}
                    className="w-4 h-4 accent-emerald-400 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                  <span className="text-xs font-mono font-bold text-gray-300 uppercase">Round-Trip Private Seaplane Charter (+AED 18k)</span>
                  <input 
                    type="checkbox"
                    checked={includeSeaplane}
                    onChange={(e) => setIncludeSeaplane(e.target.checked)}
                    className="w-4 h-4 accent-emerald-400 cursor-pointer"
                  />
                </label>
              </div>

            </div>

            {/* Output Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#183129] to-[#070E0B] p-8 rounded-3xl border border-emerald-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block">
                Estimated All-Inclusive Sanctuary Stay Total
              </span>

              <div className="text-5xl font-extrabold font-mono text-white tracking-tight">
                AED {totalStayCostAed.toLocaleString()}
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full font-mono text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Villa: {villaObj.name} ({stayNights} Nights)
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="block text-[11px] font-mono text-gray-400 uppercase">Includes Taxes, Island Fees & Marine Conservation</span>
                <span className="text-2xl font-extrabold text-white font-mono">Guaranteed Overwater View</span>
              </div>

              <a
                href="#booking-flow"
                className="block w-full py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
              >
                REQUEST SANCTUARY RESERVATION
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 2: INTERACTIVE VILLA COMPARISON MATRIX ── */}
      <section id="villa-matrix" className="py-24 bg-[#070E0B] border-b border-emerald-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <Palmtree className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 2: VILLA COMPARISON MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Resort Villa Comparison
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Compare overwater and beachfront residence sizes, private pool lengths, guest capacities, and starting nightly rates.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {RESORT_VILLAS.map(v => (
              <button
                key={v.id}
                type="button"
                onClick={() => toggleVillaSelection(v.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                  selectedVillaIds.includes(v.id)
                    ? 'bg-emerald-400 text-black border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:text-white'
                }`}
              >
                {selectedVillaIds.includes(v.id) ? '✓ ' : '+ '} {v.name}
              </button>
            ))}
          </div>

          {/* Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {RESORT_VILLAS.filter(v => selectedVillaIds.includes(v.id)).map(villa => (
              <div key={villa.id} className="bg-[#101F1A] rounded-3xl border border-emerald-500/30 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img src={villa.image} alt={villa.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 text-emerald-400 font-mono text-[10px] font-bold">
                      {villa.bedrooms} Bedroom ({villa.guests} Guests)
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white font-serif">{villa.name}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">{villa.description}</p>

                    <div className="space-y-2 pt-2 text-xs font-mono text-gray-300 border-t border-white/10">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Built-Up Area:</span>
                        <span className="text-white font-bold">{villa.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Private Pool Spec:</span>
                        <span className="text-emerald-400 font-bold">{villa.pool}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Beach/Lagoon Access:</span>
                        <span className="text-white font-bold">{villa.beachAccess}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">24/7 Island Butler:</span>
                        <span className="text-emerald-400 font-bold">{villa.butler ? 'Included' : 'On Request'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Starting Nightly Rate:</span>
                        <span className="text-emerald-400 font-bold">{villa.rateFormatted}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="#booking-flow"
                    className="block w-full py-3 rounded-xl bg-white/10 hover:bg-emerald-400 hover:text-black text-white font-mono text-xs font-bold text-center transition-all"
                  >
                    RESERVE THIS VILLA →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 3: BESPOKE EXPERIENCE BUILDER ── */}
      <section id="experiences" className="py-24 bg-[#0A1410] border-b border-emerald-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 3: BESPOKE EXPERIENCE BUILDER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Curate Your Island Experience
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Select private sandbank dinners, sunset yacht excursions, submarine reef dives, and overwater Ayurvedic spa rituals to build your bespoke itinerary.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#101F1A] p-8 sm:p-10 rounded-3xl border border-emerald-500/30 shadow-2xl">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {RESORT_EXPERIENCES.map((exp) => (
                <label
                  key={exp.id}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                    selectedExpIds.includes(exp.id)
                      ? 'bg-emerald-500/15 border-emerald-400 text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox"
                        checked={selectedExpIds.includes(exp.id)}
                        onChange={() => toggleExpSelection(exp.id)}
                        className="accent-emerald-400 w-4 h-4 cursor-pointer"
                      />
                      <span className="text-xs font-mono font-bold">{exp.name}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">AED {exp.price.toLocaleString()}</span>
                  </div>
                  <p className="text-[11px] font-mono text-gray-400 ml-7">{exp.desc}</p>
                </label>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#070E0B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <span className="text-xs font-mono text-gray-400 block uppercase">Curated Bespoke Experience Package Value</span>
                <span className="text-2xl font-extrabold text-emerald-400 font-mono">AED {totalExpValue.toLocaleString()}</span>
              </div>
              <a
                href="#booking-flow"
                className="px-6 py-3 rounded-xl bg-emerald-400 text-black font-mono text-xs font-bold uppercase hover:bg-emerald-300 transition-all"
              >
                ADD TO VILLA RESERVATION →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── 20 SANCTUARY SERVICES DIRECTORY ── */}
      <section id="services-20" className="py-24 bg-[#070E0B] border-b border-emerald-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SANCTUARY SERVICES DIRECTORY — 20 BESPOKE OFFERINGS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Full Island Service Directory
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Explore all 20 dedicated luxury services available exclusively for Solaria Private Island guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {SANCTUARY_SERVICES_20.map((serv) => (
              <div key={serv.id} className="p-6 rounded-2xl bg-[#101F1A] border border-emerald-500/30 flex flex-col justify-between space-y-4 hover:border-emerald-400 transition-all">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">{serv.cat}</span>
                  <h3 className="text-base font-bold text-white font-serif">{serv.title}</h3>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">{serv.desc}</p>
                </div>
                <a
                  href="#booking-flow"
                  className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold hover:text-emerald-300 transition-colors pt-2 border-t border-white/10"
                >
                  <span>REQUEST SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 4: MULTI-STEP RESERVATION FLOW ── */}
      <section id="booking-flow" className="py-24 bg-[#070E0B] border-b border-emerald-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <Palmtree className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 4: MULTI-STEP ISLAND RESERVATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Reserve Private Island Sanctuary
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Complete the 3-step concierge reservation flow to request your stay dates, culinary preferences, and private seaplane transfers.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-[#101F1A] p-8 sm:p-10 rounded-3xl border border-emerald-500/30 shadow-2xl relative">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 font-mono text-xs">
              <div className={`flex items-center gap-2 ${bookingStep >= 1 ? 'text-emerald-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[10px]">1</span>
                <span>Culinary Selection</span>
              </div>
              <div className={`flex items-center gap-2 ${bookingStep >= 2 ? 'text-emerald-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[10px]">2</span>
                <span>Seaplane Transfer</span>
              </div>
              <div className={`flex items-center gap-2 ${bookingStep >= 3 ? 'text-emerald-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[10px]">3</span>
                <span>Guest Details</span>
              </div>
            </div>

            {bookingComplete ? (
              <div className="text-center py-12 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white font-serif">Sanctuary Reservation Transmitted</h3>
                <p className="text-xs text-gray-300 font-mono leading-relaxed">
                  Thank you, <strong>{bName}</strong>. Our Private Island Concierge Desk in Dubai & Male will contact you via <strong>{bPhone}</strong> within 15 minutes.
                </p>
                <button
                  onClick={() => {
                    setBookingComplete(false);
                    setBookingStep(1);
                  }}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-emerald-400 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all"
                >
                  NEW RESERVATION INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {/* STEP 1 */}
                {bookingStep === 1 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-emerald-400 uppercase block">Step 1: Culinary Venue Preference</label>
                    <div className="space-y-3">
                      {[
                        { id: 'underwater-restaurant', name: 'SUB-AQUA 5m Underwater Restaurant', desc: 'Dine 5 meters below the coral reef with panoramic glass marine viewing' },
                        { id: 'treehouse-dining', name: 'Canopy Treehouse Organic Gastronomy', desc: 'Elevated jungle canopy dining with organic farm-to-table chef menus' },
                        { id: 'private-villa-chef', name: 'Dedicated In-Villa Master Chef', desc: 'Custom daily meals prepared in your villa outdoor teppanyaki kitchen' },
                      ].map((item) => (
                        <label 
                          key={item.id}
                          className={`flex flex-col p-4 rounded-xl border cursor-pointer transition-all ${
                            diningPref === item.id
                              ? 'bg-emerald-500/15 border-emerald-400 text-white'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input 
                              type="radio" 
                              name="dinPref"
                              checked={diningPref === item.id}
                              onChange={() => setDiningPref(item.id)}
                              className="accent-emerald-400"
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
                      className="w-full py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all mt-4"
                    >
                      NEXT STEP: SEAPLANE TRANSFER →
                    </button>
                  </div>
                )}

                {/* STEP 2 */}
                {bookingStep === 2 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-emerald-400 uppercase block">Step 2: Island Arrival Experience</label>
                    
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                      <div className="flex items-center gap-3 text-xs font-mono font-bold text-white">
                        <Plane className="w-4 h-4 text-emerald-400" />
                        <span>Private Twin Otter Seaplane Charter from Male VIP Terminal</span>
                      </div>
                      <p className="text-[11px] font-mono text-gray-400 leading-relaxed">
                        Direct 25-minute scenic flight over atoll reefs landing directly at Solaria Island Water Airport Pontoon.
                      </p>
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
                        className="w-2/3 py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold font-mono text-xs uppercase"
                      >
                        NEXT: GUEST DETAILS →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {bookingStep === 3 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-emerald-400 uppercase block">Step 3: Primary Guest Contact</label>
                    
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Full Legal Name *</label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Lady Charlotte Montagu"
                        value={bName}
                        onChange={(e) => setBName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-gray-300 block mb-1">Phone / WhatsApp *</label>
                        <input 
                          type="tel"
                          required
                          placeholder="+971 50 771 9955"
                          value={bPhone}
                          onChange={(e) => setBPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-gray-300 block mb-1">Email Address *</label>
                        <input 
                          type="email"
                          required
                          placeholder="charlotte@montagu.com"
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
                        className="w-2/3 py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold font-mono text-xs uppercase shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                      >
                        TRANSMIT SANCTUARY RESERVATION ✓
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}

          </div>

        </div>
      </section>

      {/* ── FULL REAL-WORLD CONCIERGE ECOSYSTEM ── */}
      <section id="contact" className="py-24 bg-[#070E0B] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>24/7 LUXURY CONCIERGE & RESERVATIONS HUB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Resort Desks & Concierge Offices
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Connect with our Dubai VIP travel concierge headquarters or direct private island sanctuary desk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Locations */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Dubai Office */}
              <div className="p-6 rounded-3xl bg-[#101F1A] border border-emerald-500/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-serif">Dubai VIP Concierge HQ</h3>
                    <p className="text-xs font-mono text-gray-400">DIFC Gate Precinct 4, Level 8, Dubai</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs font-mono text-gray-300 border-t border-white/10 pt-3">
                  <p>DIFC Gate Precinct Building 4, Level 8, Dubai, UAE</p>
                  <p>Concierge Phone: <a href="tel:+97144298833" className="text-emerald-400 font-bold">+971 4 429 8833</a></p>
                  <p>WhatsApp Concierge: <a href="https://wa.me/971507719955" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold">+971 50 771 9955</a></p>
                  <p>Email: <a href="mailto:reserves@solariaisland.com" className="text-emerald-400">reserves@solariaisland.com</a></p>
                </div>
              </div>

              {/* Private Island Resort */}
              <div className="p-6 rounded-3xl bg-[#101F1A] border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/5 text-gray-300 border border-white/10">
                    <Palmtree className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-serif">Solaria Atoll Private Island</h3>
                    <p className="text-xs font-mono text-gray-400">Maldives / Indian Ocean</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs font-mono text-gray-300 border-t border-white/10 pt-3">
                  <p>Solaria Island Atoll Sector 4, Republic of Maldives</p>
                  <p>Direct Desk: <a href="tel:+9606889900" className="text-white font-bold">+960 688 9900</a></p>
                  <p>Hours: 24/7/365 Personal Island Butler Service</p>
                </div>
              </div>

            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-[#101F1A] p-8 sm:p-10 rounded-3xl border border-emerald-500/30 shadow-2xl relative">
              
              {contactSubmitted ? (
                <div className="text-center py-16 space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                  <h3 className="text-3xl font-extrabold text-white font-serif">Sanctuary Inquiry Received</h3>
                  <p className="text-xs text-gray-300 font-mono max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{cName}</strong>. Our Lead Island Concierge in DIFC Dubai will contact you within 15 minutes.
                  </p>
                  <button 
                    onClick={() => setContactSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-emerald-400 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-serif">Private Island Inquiry Form</h3>
                    <p className="text-xs font-mono text-gray-400 mt-1">Direct transmission to Solaria Island Reservations Team.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Full Legal Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Lord Alistair Grosvenor"
                        value={cName}
                        onChange={(e) => setCName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-emerald-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="alistair@grosvenor.co.uk"
                        value={cEmail}
                        onChange={(e) => setCEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-emerald-400 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+971 50 771 9955"
                        value={cPhone}
                        onChange={(e) => setCPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-emerald-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Family Office / Organization</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Grosvenor Family Trust"
                        value={cCompany}
                        onChange={(e) => setCCompany(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-emerald-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Inquiry Type</label>
                    <select 
                      value={cService}
                      onChange={(e) => setCService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-emerald-400 outline-none"
                    >
                      <option value="private-island-stay" className="bg-[#101F1A]">Overwater Villa Residence Booking</option>
                      <option value="full-island-buyout" className="bg-[#101F1A]">Full Private Island Buyout (12 Villas)</option>
                      <option value="private-wedding-event" className="bg-[#101F1A]">Private Island Wedding & Celebration</option>
                      <option value="seaplane-concierge" className="bg-[#101F1A]">Private Jet & Seaplane Concierge</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Stay Dates & Special Requirements</label>
                    <textarea 
                      rows={4}
                      placeholder="Specify preferred arrival dates, guest count, dietary requirements, and bespoke experiences..."
                      value={cMessage}
                      onChange={(e) => setCMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-emerald-400 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT SANCTUARY INQUIRY</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-20 bg-[#040806] text-gray-400 text-xs font-mono border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Palmtree className="w-6 h-6 text-emerald-400" />
              <span className="text-2xl font-extrabold text-white tracking-tight font-serif">
                SOLARIA <span className="text-emerald-400">PRIVATE ISLAND</span>
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              Solaria Atoll • Maldives & Gate Precinct 4, Level 8, DIFC, Dubai, UAE
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 SOLARIA LUXURY RESORTS FZ-LLC. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-6">
              <span className="text-emerald-400">CONDÉ NAST TRAVELER #1 WORLD RESORT</span>
              <span>FORBES 5-STAR VERIFIED</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default SolariaShowcase;
