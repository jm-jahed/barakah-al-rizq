import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Building2, Layers, Calendar, Users, Search, MapPin, ArrowRight, ShieldCheck, Compass, CheckCircle2, Globe, ArrowLeftRight, ChevronDown, X } from 'lucide-react';
import { 
  AEROVIA_METADATA, 
  AEROVIA_ORIGIN_AIRPORTS, 
  AEROVIA_DESTINATION_AIRPORTS,
  AirportLocation
} from '@/data/aeroviaData';

interface AeroviaHeroProps {
  onExploreJourneys?: () => void;
  onSearchFlights?: () => void;
  onSearchHotels?: () => void;
  onBuildJourney?: () => void;
}

export function AeroviaHero({
  onExploreJourneys,
  onSearchFlights,
  onSearchHotels,
  onBuildJourney
}: AeroviaHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [searchTab, setSearchTab] = useState<'flights' | 'hotels' | 'packages'>('flights');
  const [tripType, setTripType] = useState<'round' | 'oneway' | 'multicity'>('round');
  
  // Selected origin and destination
  const [selectedOrigin, setSelectedOrigin] = useState<AirportLocation>(AEROVIA_ORIGIN_AIRPORTS[0]); // Dubai DXB
  const [selectedDestination, setSelectedDestination] = useState<AirportLocation>(AEROVIA_DESTINATION_AIRPORTS[0]); // Tokyo HND
  
  // Dropdown states
  const [isOriginOpen, setIsOriginOpen] = useState(false);
  const [isDestOpen, setIsDestOpen] = useState(false);
  const [originSearch, setOriginSearch] = useState('');
  const [destSearch, setDestSearch] = useState('');

  const [departureDate, setDepartureDate] = useState('12 Nov 2026');
  const [returnDate, setReturnDate] = useState('17 Nov 2026');
  const [travelers, setTravelers] = useState('2 Adults, Business');

  // Filtered 20 origins & destinations
  const filteredOrigins = AEROVIA_ORIGIN_AIRPORTS.filter(o => 
    !originSearch ||
    o.city.toLowerCase().includes(originSearch.toLowerCase()) ||
    o.code.toLowerCase().includes(originSearch.toLowerCase()) ||
    o.country.toLowerCase().includes(originSearch.toLowerCase()) ||
    o.airportName.toLowerCase().includes(originSearch.toLowerCase())
  );

  const filteredDestinations = AEROVIA_DESTINATION_AIRPORTS.filter(d => 
    !destSearch ||
    d.city.toLowerCase().includes(destSearch.toLowerCase()) ||
    d.code.toLowerCase().includes(destSearch.toLowerCase()) ||
    d.country.toLowerCase().includes(destSearch.toLowerCase()) ||
    d.airportName.toLowerCase().includes(destSearch.toLowerCase())
  );

  // Swap function
  const handleSwapAirports = () => {
    // If destination has a matching origin code, or vice-versa
    const foundDestAsOrigin = AEROVIA_ORIGIN_AIRPORTS.find(o => o.code === selectedDestination.code);
    const foundOriginAsDest = AEROVIA_DESTINATION_AIRPORTS.find(d => d.code === selectedOrigin.code);

    if (foundDestAsOrigin) setSelectedOrigin(foundDestAsOrigin);
    if (foundOriginAsDest) setSelectedDestination(foundOriginAsDest);
  };

  // Animated canvas rendering global flight arcs and golden node pulses
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Global Flight Route Hubs
    const hubs = [
      { name: 'Dubai', x: width * 0.48, y: height * 0.46, isMain: true },
      { name: 'Tokyo', x: width * 0.78, y: height * 0.38, isMain: false },
      { name: 'Paris', x: width * 0.35, y: height * 0.32, isMain: false },
      { name: 'Singapore', x: width * 0.68, y: height * 0.58, isMain: false },
      { name: 'New York', x: width * 0.18, y: height * 0.36, isMain: false },
      { name: 'Maldives', x: width * 0.54, y: height * 0.62, isMain: false }
    ];

    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle atmospheric grid
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      t += 0.008;

      // Draw Arcs between Dubai and all other hubs
      const dxb = hubs[0];
      hubs.slice(1).forEach((dest, i) => {
        const midX = (dxb.x + dest.x) / 2;
        const midY = Math.min(dxb.y, dest.y) - 60 - i * 15;

        // Curve path
        ctx.beginPath();
        ctx.moveTo(dxb.x, dxb.y);
        ctx.quadraticCurveTo(midX, midY, dest.x, dest.y);
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.18)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Moving Golden Flight Packet
        const progress = (t + i * 0.22) % 1;
        const px = (1 - progress) * (1 - progress) * dxb.x + 2 * (1 - progress) * progress * midX + progress * progress * dest.x;
        const py = (1 - progress) * (1 - progress) * dxb.y + 2 * (1 - progress) * progress * midY + progress * progress * dest.y;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#E5C378';
        ctx.shadowColor = '#D4AF37';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Hub Points
      hubs.forEach((hub) => {
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, hub.isMain ? 4.5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = hub.isMain ? '#E5C378' : '#38bdf8';
        ctx.fill();

        if (hub.isMain) {
          ctx.beginPath();
          ctx.arc(hub.x, hub.y, 8 + Math.sin(t * 3) * 3, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(229, 195, 120, 0.4)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      }
    }, { threshold: 0.05 });

    observer.observe(canvas);
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center bg-[#03060c] border-b border-amber-950/40 text-slate-100 overflow-hidden pt-24 pb-20">
      {/* Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45 z-0"
      />

      {/* Atmospheric luxury glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-amber-950/15 rounded-full blur-[170px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-950/20 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/25 text-amber-300 text-xs font-mono tracking-widest uppercase mb-6 shadow-[0_0_25px_rgba(212,175,55,0.15)]"
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            {AEROVIA_METADATA.eyebrow}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
          >
            Go Further. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
              Stay Better.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-6"
          >
            {AEROVIA_METADATA.heroDescription}
          </motion.p>
        </div>

        {/* Integrated Hero Search Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#0a111e]/95 via-[#060b13]/95 to-[#04080e]/95 border border-amber-500/30 backdrop-blur-xl shadow-2xl p-6 sm:p-8 relative"
        >
          {/* Top Search Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setSearchTab('flights'); setIsOriginOpen(false); setIsDestOpen(false); }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
                  searchTab === 'flights'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C378] text-black shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Plane className="w-4 h-4" />
                Flights
              </button>
              <button
                onClick={() => { setSearchTab('hotels'); setIsOriginOpen(false); setIsDestOpen(false); }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
                  searchTab === 'hotels'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C378] text-black shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Building2 className="w-4 h-4" />
                Hotels
              </button>
              <button
                onClick={() => { setSearchTab('packages'); setIsOriginOpen(false); setIsDestOpen(false); }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
                  searchTab === 'packages'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C378] text-black shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Layers className="w-4 h-4" />
                Flights + Hotels
              </button>
            </div>

            {/* Flight Trip Type Sub-options */}
            {searchTab === 'flights' && (
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <button
                  onClick={() => setTripType('round')}
                  className={`hover:text-white transition-colors ${tripType === 'round' ? 'text-amber-300 font-bold underline' : ''}`}
                >
                  Round Trip
                </button>
                <span>•</span>
                <button
                  onClick={() => setTripType('oneway')}
                  className={`hover:text-white transition-colors ${tripType === 'oneway' ? 'text-amber-300 font-bold underline' : ''}`}
                >
                  One Way
                </button>
                <span>•</span>
                <button
                  onClick={() => setTripType('multicity')}
                  className={`hover:text-white transition-colors ${tripType === 'multicity' ? 'text-amber-300 font-bold underline' : ''}`}
                >
                  Multi-City
                </button>
              </div>
            )}
          </div>

          {/* Search Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6 relative">
            
            {/* 1. Origin Departure Field (20 Origins) */}
            <div className="relative">
              <div 
                onClick={() => { setIsOriginOpen(!isOriginOpen); setIsDestOpen(false); }}
                className="p-3.5 rounded-2xl bg-[#050a12] border border-slate-800/90 hover:border-amber-500/40 focus-within:border-amber-500/60 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {searchTab === 'hotels' ? 'City / Area' : 'Origin Departure'}
                  </span>
                  <span className="text-[9px] font-mono text-amber-400/80 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                    20 Hubs
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      {selectedOrigin.code}
                    </span>
                    <span className="text-xs text-slate-300 truncate max-w-[120px]">
                      {selectedOrigin.city}
                    </span>
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOriginOpen ? 'rotate-180 text-amber-400' : ''}`} />
                </div>
              </div>

              {/* Origin Dropdown Popover: 20 Origin Airports */}
              <AnimatePresence>
                {isOriginOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    className="absolute top-full left-0 mt-2 w-80 sm:w-96 max-h-80 overflow-hidden bg-[#0a111e] border border-amber-500/40 rounded-2xl shadow-2xl z-50 p-3 backdrop-blur-2xl"
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                      <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        Select Origin (20 Global Gateways)
                      </span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setIsOriginOpen(false); }}
                        className="text-slate-400 hover:text-white p-1"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="relative mb-2">
                      <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="text"
                        placeholder="Search 20 origins (e.g. Dubai, DXB, London)..."
                        value={originSearch}
                        onChange={(e) => setOriginSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 bg-[#050a12] border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                        autoFocus
                      />
                    </div>

                    <div className="overflow-y-auto max-h-52 space-y-1 pr-1 scrollbar-thin scrollbar-thumb-amber-500/20">
                      {filteredOrigins.map((airport) => (
                        <button
                          key={airport.id}
                          onClick={() => {
                            setSelectedOrigin(airport);
                            setIsOriginOpen(false);
                            setOriginSearch('');
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                            selectedOrigin.id === airport.id
                              ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                              : 'bg-slate-900/40 hover:bg-slate-800/80 text-slate-200 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-extrabold text-amber-400 bg-black/40 px-1.5 py-0.5 rounded border border-amber-500/20">
                              {airport.code}
                            </span>
                            <div>
                              <div className="font-bold text-white leading-tight">{airport.city}</div>
                              <div className="text-[10px] text-slate-400 leading-tight">{airport.airportName} • {airport.country}</div>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono text-slate-400 bg-slate-800/60 px-1.5 py-0.5 rounded shrink-0">
                            {airport.region}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Destination Arrival Field (20 Destinations) */}
            <div className="relative">
              <div 
                onClick={() => { setIsDestOpen(!isDestOpen); setIsOriginOpen(false); }}
                className="p-3.5 rounded-2xl bg-[#050a12] border border-slate-800/90 hover:border-cyan-500/40 focus-within:border-cyan-500/60 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                    <Globe className="w-3 h-3 text-cyan-400" />
                    {searchTab === 'hotels' ? 'Destination Stays' : 'Destination Arrival'}
                  </span>
                  <span className="text-[9px] font-mono text-cyan-400/80 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                    20 Dest.
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                      {selectedDestination.code}
                    </span>
                    <span className="text-xs text-slate-300 truncate max-w-[120px]">
                      {selectedDestination.city}
                    </span>
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isDestOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </div>
              </div>

              {/* Destination Dropdown Popover: 20 Destination Airports */}
              <AnimatePresence>
                {isDestOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    className="absolute top-full left-0 mt-2 w-80 sm:w-96 max-h-80 overflow-hidden bg-[#0a111e] border border-cyan-500/40 rounded-2xl shadow-2xl z-50 p-3 backdrop-blur-2xl"
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                      <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5" />
                        Select Destination (20 Curated Hubs)
                      </span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setIsDestOpen(false); }}
                        className="text-slate-400 hover:text-white p-1"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="relative mb-2">
                      <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="text"
                        placeholder="Search 20 destinations (e.g. Tokyo, Paris, Maldives)..."
                        value={destSearch}
                        onChange={(e) => setDestSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 bg-[#050a12] border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
                        autoFocus
                      />
                    </div>

                    <div className="overflow-y-auto max-h-52 space-y-1 pr-1 scrollbar-thin scrollbar-thumb-cyan-500/20">
                      {filteredDestinations.map((airport) => (
                        <button
                          key={airport.id}
                          onClick={() => {
                            setSelectedDestination(airport);
                            setIsDestOpen(false);
                            setDestSearch('');
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                            selectedDestination.id === airport.id
                              ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300'
                              : 'bg-slate-900/40 hover:bg-slate-800/80 text-slate-200 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-extrabold text-cyan-400 bg-black/40 px-1.5 py-0.5 rounded border border-cyan-500/20">
                              {airport.code}
                            </span>
                            <div>
                              <div className="font-bold text-white leading-tight">{airport.city}</div>
                              <div className="text-[10px] text-slate-400 leading-tight">{airport.airportName} • {airport.country}</div>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono text-slate-400 bg-slate-800/60 px-1.5 py-0.5 rounded shrink-0">
                            {airport.region}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Departure / Check-In Date */}
            <div className="p-3.5 rounded-2xl bg-[#050a12] border border-slate-800/90 focus-within:border-amber-500/50 transition-colors">
              <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                {searchTab === 'hotels' ? 'Check-In — Check-Out' : 'Dates (Depart — Return)'}
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <input
                  type="text"
                  value={`${departureDate} — ${returnDate}`}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-white focus:outline-none font-mono"
                />
              </div>
            </div>

            {/* 4. Travelers & Cabin / Guests */}
            <div className="p-3.5 rounded-2xl bg-[#050a12] border border-slate-800/90 focus-within:border-amber-500/50 transition-colors">
              <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                {searchTab === 'hotels' ? 'Guests & Rooms' : 'Travelers & Cabin'}
              </span>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                <input
                  type="text"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-white focus:outline-none font-mono"
                />
              </div>
            </div>
          </div>

          {/* Quick Route Strip */}
          <div className="flex items-center justify-between bg-black/40 border border-slate-800/70 rounded-xl px-4 py-2 mb-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-amber-400 font-bold">{selectedOrigin.city} ({selectedOrigin.code})</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-cyan-400 font-bold">{selectedDestination.city} ({selectedDestination.code})</span>
              <span className="text-slate-500 hidden sm:inline">• Direct Emirates & Partner GDS</span>
            </div>
            <button
              onClick={handleSwapAirports}
              className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 rounded-lg border border-amber-500/20 transition-all cursor-pointer"
            >
              <ArrowLeftRight className="w-3 h-3" />
              <span>Swap Route</span>
            </button>
          </div>

          {/* Bottom Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>20 Origins × 20 Destinations in AED • Zero Booking Fees • 72h Fare Lock</span>
            </div>

            <button
              onClick={() => {
                if (searchTab === 'flights') onSearchFlights?.();
                else if (searchTab === 'hotels') onSearchHotels?.();
                else onBuildJourney?.();
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C378] hover:from-[#c5a028] hover:to-[#d4af37] text-black font-extrabold text-sm transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 font-mono"
            >
              <Search className="w-4 h-4 text-black" />
              {searchTab === 'flights' ? 'Search Flights' : searchTab === 'hotels' ? 'Find Stays' : 'Build My Journey'}
              <ArrowRight className="w-4 h-4 text-black ml-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

