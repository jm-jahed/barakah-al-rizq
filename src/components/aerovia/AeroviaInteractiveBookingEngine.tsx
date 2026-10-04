'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Building2, Layers, Calendar, Users, Search, MapPin, ArrowRight, ArrowLeftRight, Filter, SlidersHorizontal, Clock, CheckCircle2, ShieldCheck, Luggage, ChevronDown, ChevronUp, Star, ExternalLink, CreditCard, QrCode, Download, Share2, RefreshCw, Info, X, Globe, Compass, Check } from 'lucide-react';
import { 
  FlightResult, 
  HotelProperty, 
  AirportLocation,
  AEROVIA_FLIGHTS, 
  AEROVIA_HOTELS, 
  AEROVIA_ORIGIN_AIRPORTS, 
  AEROVIA_DESTINATION_AIRPORTS 
} from '@/data/aeroviaData';

type EngineTab = 'flights' | 'hotels' | 'packages';
type BookingStep = 'search_results' | 'passenger_details' | 'summary_review' | 'confirmed';

export function AeroviaInteractiveBookingEngine() {
  // -------------------------------------------------------------
  // STATE: Search Parameters
  // -------------------------------------------------------------
  const [activeTab, setActiveTab] = useState<EngineTab>('flights');
  const [tripType, setTripType] = useState<'round' | 'oneway' | 'multicity'>('round');
  const [originAirport, setOriginAirport] = useState<AirportLocation>(AEROVIA_ORIGIN_AIRPORTS[0]); // Dubai DXB
  const [destinationAirport, setDestinationAirport] = useState<AirportLocation>(AEROVIA_DESTINATION_AIRPORTS[0]); // Tokyo HND
  const [departureDate, setDepartureDate] = useState('12 Nov 2026');
  const [returnDate, setReturnDate] = useState('17 Nov 2026');
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [cabinClassFilter, setCabinClassFilter] = useState<string>('All');
  
  // Dropdowns
  const [isOriginPickerOpen, setIsOriginPickerOpen] = useState(false);
  const [isDestPickerOpen, setIsDestPickerOpen] = useState(false);
  const [originQuery, setOriginQuery] = useState('');
  const [destQuery, setDestQuery] = useState('');

  // -------------------------------------------------------------
  // STATE: Selection & Multi-Step Booking Flow
  // -------------------------------------------------------------
  const [selectedFlight, setSelectedFlight] = useState<FlightResult | null>(AEROVIA_FLIGHTS[0]);
  const [selectedHotel, setSelectedHotel] = useState<HotelProperty | null>(AEROVIA_HOTELS[0]);
  const [expandedFlightId, setExpandedFlightId] = useState<string | null>(null);
  const [expandedHotelId, setExpandedHotelId] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<BookingStep>('search_results');

  // Passenger & Customization State
  const [passengerDetails, setPassengerDetails] = useState({
    title: 'Mr',
    firstName: 'Tariq',
    lastName: 'Al-Nuaimi',
    email: 'tariq.alnuaimi@emiratesgroup.ae',
    phone: '+971 50 849 2031',
    passportNumber: 'N98241038',
    nationality: 'United Arab Emirates',
    seatingPreference: 'Window Suite',
    mealPreference: 'Gourmet Halal Chef Tasting'
  });

  const [selectedAddons, setSelectedAddons] = useState<{
    chauffeur: boolean;
    loungeAccess: boolean;
    carbonOffset: boolean;
    travelInsurance: boolean;
  }>({
    chauffeur: true,
    loungeAccess: true,
    carbonOffset: true,
    travelInsurance: true
  });

  // -------------------------------------------------------------
  // STATE: Filtering & Sorting
  // -------------------------------------------------------------
  // Flight Filters
  const [flightSortBy, setFlightSortBy] = useState<'recommended' | 'price_low' | 'duration' | 'departure'>('recommended');
  const [flightStopsFilter, setFlightStopsFilter] = useState<'all' | 'direct' | '1stop'>('all');
  const [flightMaxPrice, setFlightMaxPrice] = useState<number>(26000);

  // Hotel Filters
  const [hotelSortBy, setHotelSortBy] = useState<'recommended' | 'price_low' | 'rating'>('recommended');
  const [hotelCategoryFilter, setHotelCategoryFilter] = useState<string>('all');
  const [hotelMaxPrice, setHotelMaxPrice] = useState<number>(10000);

  // -------------------------------------------------------------
  // FILTERED FLIGHTS (20+ ITEMS)
  // -------------------------------------------------------------
  const filteredFlights = useMemo(() => {
    return AEROVIA_FLIGHTS.filter((flight) => {
      // Cabin class filter
      if (cabinClassFilter !== 'All' && flight.cabinClass !== cabinClassFilter) return false;
      // Stops filter
      if (flightStopsFilter === 'direct' && flight.stops !== 0) return false;
      if (flightStopsFilter === '1stop' && flight.stops !== 1) return false;
      // Price filter
      if (flight.priceAED > flightMaxPrice) return false;
      return true;
    }).sort((a, b) => {
      if (flightSortBy === 'price_low') return a.priceAED - b.priceAED;
      if (flightSortBy === 'duration') return a.duration.localeCompare(b.duration);
      if (flightSortBy === 'departure') return a.departureTime.localeCompare(b.departureTime);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [cabinClassFilter, flightStopsFilter, flightMaxPrice, flightSortBy]);

  // -------------------------------------------------------------
  // FILTERED HOTELS (20+ ITEMS)
  // -------------------------------------------------------------
  const filteredHotels = useMemo(() => {
    return AEROVIA_HOTELS.filter((hotel) => {
      if (hotelCategoryFilter !== 'all' && hotel.propertyCategory !== hotelCategoryFilter) return false;
      if (hotel.pricePerNightAED > hotelMaxPrice) return false;
      return true;
    }).sort((a, b) => {
      if (hotelSortBy === 'price_low') return a.pricePerNightAED - b.pricePerNightAED;
      if (hotelSortBy === 'rating') return b.guestRating - a.guestRating;
      return (b.badge ? 1 : 0) - (a.badge ? 1 : 0);
    });
  }, [hotelCategoryFilter, hotelMaxPrice, hotelSortBy]);

  // -------------------------------------------------------------
  // TOTAL PRICING MATH IN AED
  // -------------------------------------------------------------
  const flightCostTotal = (selectedFlight ? selectedFlight.priceAED : 0) * travelersCount;
  const hotelCostTotal = selectedHotel ? selectedHotel.totalStayAED : 0;
  
  const addonsTotal = 
    (selectedAddons.chauffeur ? 450 : 0) +
    (selectedAddons.loungeAccess ? 350 * travelersCount : 0) +
    (selectedAddons.carbonOffset ? 120 : 0) +
    (selectedAddons.travelInsurance ? 280 * travelersCount : 0);

  const taxesAndGdsFees = Math.round((flightCostTotal + hotelCostTotal) * 0.05);

  const totalJourneyPriceAED = 
    (activeTab === 'flights' ? flightCostTotal : 
     activeTab === 'hotels' ? hotelCostTotal : 
     (flightCostTotal + hotelCostTotal)) + addonsTotal + taxesAndGdsFees;

  // Swap Airports
  const handleSwapAirports = () => {
    const foundDestAsOrigin = AEROVIA_ORIGIN_AIRPORTS.find(o => o.code === destinationAirport.code);
    const foundOriginAsDest = AEROVIA_DESTINATION_AIRPORTS.find(d => d.code === originAirport.code);
    if (foundDestAsOrigin) setOriginAirport(foundDestAsOrigin);
    if (foundOriginAsDest) setDestinationAirport(foundOriginAsDest);
  };

  return (
    <section id="booking-engine" className="relative py-24 bg-[#030712] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/3 w-[650px] h-[650px] bg-amber-950/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-blue-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/25 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            ORIGINAL MULTI-GDS BOOKING ENGINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Discover. Compare. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
              Compose & Reserve in AED.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A fully interactive digital travel command center. Query 20+ airline schedules, explore 20+ 5-star palace suites, and lock synchronized itineraries in real-time.
          </p>
        </div>

        {/* Multi-Step Journey Tracker */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
            {[
              { key: 'search_results', label: '1. Select Flights & Stays' },
              { key: 'passenger_details', label: '2. Guest & Passport' },
              { key: 'summary_review', label: '3. Journey Review' },
              { key: 'confirmed', label: '4. Confirmed PNR' }
            ].map((step, idx) => {
              const isActive = bookingStep === step.key;
              const isPassed = 
                (bookingStep === 'passenger_details' && idx === 0) ||
                (bookingStep === 'summary_review' && idx <= 1) ||
                (bookingStep === 'confirmed');

              return (
                <button
                  key={step.key}
                  onClick={() => {
                    if (isPassed || isActive) setBookingStep(step.key as BookingStep);
                  }}
                  className={`py-2.5 px-2 rounded-xl border transition-all text-[11px] font-bold ${
                    isActive
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md shadow-amber-500/10'
                      : isPassed
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 cursor-pointer'
                      : 'bg-slate-900/40 border-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  {step.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* STEP 1: SEARCH & 20+ RESULTS EXPERIENCE                    */}
        {/* ========================================================= */}
        {bookingStep === 'search_results' && (
          <div className="space-y-8">
            
            {/* Integrated Search Box Panel */}
            <div className="rounded-3xl bg-gradient-to-b from-[#0a121f] via-[#060c15] to-[#040810] border border-amber-500/35 p-6 sm:p-8 shadow-2xl relative">
              {/* Tab Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('flights')}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
                      activeTab === 'flights'
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C378] text-black shadow-md shadow-amber-500/20'
                        : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <Plane className="w-4 h-4" />
                    Flights ({filteredFlights.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('hotels')}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
                      activeTab === 'hotels'
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C378] text-black shadow-md shadow-amber-500/20'
                        : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    Hotels ({filteredHotels.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('packages')}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
                      activeTab === 'packages'
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C378] text-black shadow-md shadow-amber-500/20'
                        : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <Layers className="w-4 h-4" />
                    Flights + Hotels
                  </button>
                </div>

                {/* Sub Options */}
                {activeTab !== 'hotels' && (
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
                  </div>
                )}
              </div>

              {/* Four Core Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6 relative">
                
                {/* 1. Origin / Departure (20 Hubs) */}
                <div className="relative">
                  <div 
                    onClick={() => { setIsOriginPickerOpen(!isOriginPickerOpen); setIsDestPickerOpen(false); }}
                    className="p-3.5 rounded-2xl bg-[#050a12] border border-slate-800/90 hover:border-amber-500/40 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        Origin / Departure
                      </span>
                      <span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                        20 Hubs
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors">
                          {originAirport.code}
                        </span>
                        <span className="text-xs text-slate-300 truncate max-w-[120px]">
                          {originAirport.city}
                        </span>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Origin Dropdown: 20 Hubs */}
                  <AnimatePresence>
                    {isOriginPickerOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-0 mt-2 w-80 sm:w-96 max-h-80 overflow-hidden bg-[#0a111e] border border-amber-500/40 rounded-2xl shadow-2xl z-50 p-3 backdrop-blur-2xl"
                      >
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                          <span className="text-xs font-mono font-bold text-amber-400">
                            Origin Departure (20 Gateways)
                          </span>
                          <button onClick={() => setIsOriginPickerOpen(false)} className="text-slate-400 hover:text-white">
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <input
                          type="text"
                          placeholder="Search 20 origins (Dubai, London, Singapore)..."
                          value={originQuery}
                          onChange={(e) => setOriginQuery(e.target.value)}
                          className="w-full pl-3 pr-3 py-1.5 bg-[#050a12] border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 mb-2 font-mono"
                          autoFocus
                        />
                        <div className="overflow-y-auto max-h-52 space-y-1 scrollbar-thin scrollbar-thumb-amber-500/20 pr-1">
                          {AEROVIA_ORIGIN_AIRPORTS.filter(o => 
                            !originQuery || 
                            o.city.toLowerCase().includes(originQuery.toLowerCase()) || 
                            o.code.toLowerCase().includes(originQuery.toLowerCase()) ||
                            o.country.toLowerCase().includes(originQuery.toLowerCase())
                          ).map((airport) => (
                            <button
                              key={airport.id}
                              onClick={() => {
                                setOriginAirport(airport);
                                setIsOriginPickerOpen(false);
                                setOriginQuery('');
                              }}
                              className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                                originAirport.id === airport.id
                                  ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                                  : 'bg-slate-900/40 hover:bg-slate-800/80 text-slate-200'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-bold text-amber-400 bg-black/40 px-1.5 py-0.5 rounded border border-amber-500/20">
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

                {/* 2. Destination / Arrival (20 Hubs) */}
                <div className="relative">
                  <div 
                    onClick={() => { setIsDestPickerOpen(!isDestPickerOpen); setIsOriginPickerOpen(false); }}
                    className="p-3.5 rounded-2xl bg-[#050a12] border border-slate-800/90 hover:border-cyan-500/40 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                        <Globe className="w-3 h-3 text-cyan-400" />
                        Destination / Arrival
                      </span>
                      <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                        20 Dest
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                          {destinationAirport.code}
                        </span>
                        <span className="text-xs text-slate-300 truncate max-w-[120px]">
                          {destinationAirport.city}
                        </span>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Destination Dropdown: 20 Hubs */}
                  <AnimatePresence>
                    {isDestPickerOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-0 mt-2 w-80 sm:w-96 max-h-80 overflow-hidden bg-[#0a111e] border border-cyan-500/40 rounded-2xl shadow-2xl z-50 p-3 backdrop-blur-2xl"
                      >
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                          <span className="text-xs font-mono font-bold text-cyan-400">
                            Destination Arrival (20 Hubs)
                          </span>
                          <button onClick={() => setIsDestPickerOpen(false)} className="text-slate-400 hover:text-white">
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <input
                          type="text"
                          placeholder="Search 20 destinations (Tokyo, Paris, Maldives)..."
                          value={destQuery}
                          onChange={(e) => setDestQuery(e.target.value)}
                          className="w-full pl-3 pr-3 py-1.5 bg-[#050a12] border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 mb-2 font-mono"
                          autoFocus
                        />
                        <div className="overflow-y-auto max-h-52 space-y-1 scrollbar-thin scrollbar-thumb-cyan-500/20 pr-1">
                          {AEROVIA_DESTINATION_AIRPORTS.filter(d => 
                            !destQuery || 
                            d.city.toLowerCase().includes(destQuery.toLowerCase()) || 
                            d.code.toLowerCase().includes(destQuery.toLowerCase()) ||
                            d.country.toLowerCase().includes(destQuery.toLowerCase())
                          ).map((airport) => (
                            <button
                              key={airport.id}
                              onClick={() => {
                                setDestinationAirport(airport);
                                setIsDestPickerOpen(false);
                                setDestQuery('');
                              }}
                              className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                                destinationAirport.id === airport.id
                                  ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300'
                                  : 'bg-slate-900/40 hover:bg-slate-800/80 text-slate-200'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-bold text-cyan-400 bg-black/40 px-1.5 py-0.5 rounded border border-cyan-500/20">
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

                {/* 3. Departure & Return Dates */}
                <div className="p-3.5 rounded-2xl bg-[#050a12] border border-slate-800/90 focus-within:border-amber-500/50 transition-colors">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                    Dates (Depart — Return)
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

                {/* 4. Travelers & Cabin Class */}
                <div className="p-3.5 rounded-2xl bg-[#050a12] border border-slate-800/90 focus-within:border-amber-500/50 transition-colors">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                    Travelers & Cabin
                  </span>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-white font-mono">
                        {travelersCount} Adults
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setTravelersCount(Math.max(1, travelersCount - 1))}
                        className="w-6 h-6 rounded bg-slate-800 text-white text-xs flex items-center justify-center font-bold hover:bg-slate-700"
                      >
                        -
                      </button>
                      <button
                        onClick={() => setTravelersCount(travelersCount + 1)}
                        className="w-6 h-6 rounded bg-slate-800 text-white text-xs flex items-center justify-center font-bold hover:bg-slate-700"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Route Swap Strip */}
              <div className="flex items-center justify-between bg-black/40 border border-slate-800/70 rounded-xl px-4 py-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-amber-400 font-bold">{originAirport.city} ({originAirport.code})</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-cyan-400 font-bold">{destinationAirport.city} ({destinationAirport.code})</span>
                  <span className="text-slate-500 hidden sm:inline">• Direct Multi-GDS Telemetry</span>
                </div>
                <button
                  onClick={handleSwapAirports}
                  className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 rounded-lg border border-amber-500/20 transition-all cursor-pointer"
                >
                  <ArrowLeftRight className="w-3 h-3" />
                  <span>Swap Route</span>
                </button>
              </div>
            </div>

            {/* ======================================================= */}
            {/* 20+ FLIGHT RESULTS SECTION                              */}
            {/* ======================================================= */}
            {(activeTab === 'flights' || activeTab === 'packages') && (
              <div className="space-y-6">
                
                {/* Filter & Sorting Controls Toolbar */}
                <div className="p-4 rounded-2xl bg-[#060c16] border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                  
                  {/* Left Filters */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-slate-500 flex items-center gap-1 font-bold">
                      <Filter className="w-3.5 h-3.5 text-amber-400" />
                      Cabin:
                    </span>
                    {['All', 'First Class', 'Business Class', 'Premium Economy', 'Economy'].map((cabin) => (
                      <button
                        key={cabin}
                        onClick={() => setCabinClassFilter(cabin)}
                        className={`px-2.5 py-1 rounded-lg border transition-all ${
                          cabinClassFilter === cabin
                            ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {cabin}
                      </button>
                    ))}

                    <span className="text-slate-700">|</span>

                    <span className="text-slate-500 font-bold">Stops:</span>
                    {['all', 'direct', '1stop'].map((stop) => (
                      <button
                        key={stop}
                        onClick={() => setFlightStopsFilter(stop as any)}
                        className={`px-2.5 py-1 rounded-lg border uppercase ${
                          flightStopsFilter === stop
                            ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {stop}
                      </button>
                    ))}
                  </div>

                  {/* Right Sort Controls */}
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500 flex items-center gap-1">
                      <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                      Sort:
                    </span>
                    <select
                      value={flightSortBy}
                      onChange={(e) => setFlightSortBy(e.target.value as any)}
                      className="bg-slate-900 border border-slate-800 text-white rounded-lg px-2.5 py-1 font-mono text-xs focus:outline-none focus:border-amber-400"
                    >
                      <option value="recommended">Recommended (Flagship)</option>
                      <option value="price_low">Lowest Price First</option>
                      <option value="duration">Fastest Flight Time</option>
                      <option value="departure">Departure Time</option>
                    </select>

                    <span className="text-amber-400 font-bold">
                      {filteredFlights.length} Flights Available
                    </span>
                  </div>
                </div>

                {/* 20+ Flight Result Cards Grid */}
                <div className="space-y-4">
                  {filteredFlights.map((flight) => {
                    const isSelected = selectedFlight?.id === flight.id;
                    const isExpanded = expandedFlightId === flight.id;

                    return (
                      <div
                        key={flight.id}
                        className={`rounded-2xl border transition-all duration-300 p-5 sm:p-6 ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#0b172a] via-[#091220] to-[#0b172a] border-amber-500/80 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400/40'
                            : 'bg-[#060b14]/90 border-slate-800/90 hover:border-slate-700 hover:bg-[#08101d]'
                        }`}
                      >
                        {/* Top Card Bar: Airline & Status Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80 text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                              {flight.airlineCode}
                            </span>
                            <span className="font-bold text-white text-sm">{flight.airline}</span>
                            <span className="text-slate-400">({flight.flightNumber})</span>
                            <span className="text-slate-600">•</span>
                            <span className="text-slate-300">{flight.aircraft}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                              On-Time {flight.onTimeRating}
                            </span>
                            <span className="text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                              {flight.cabinClass}
                            </span>
                          </div>
                        </div>

                        {/* Mid Card Row: Flight Timeline & Pricing */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-5">
                          
                          {/* Departure Node */}
                          <div className="lg:col-span-3">
                            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono leading-none">
                              {flight.departureTime}
                            </div>
                            <div className="text-xs font-bold text-amber-400 font-mono mt-1">
                              {flight.originCode}
                            </div>
                            <div className="text-[11px] text-slate-400 truncate">
                              {flight.origin}
                            </div>
                          </div>

                          {/* Route Visualization */}
                          <div className="lg:col-span-5 flex flex-col items-center justify-center px-4">
                            <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400 mb-1">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-amber-400" />
                                {flight.duration}
                              </span>
                              <span className={`font-bold ${flight.stops === 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                                {flight.stops === 0 ? 'Non-Stop Direct' : '1 Stop Connection'}
                              </span>
                            </div>
                            
                            {/* Graphic Route Path */}
                            <div className="w-full relative flex items-center my-1">
                              <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                              <div className="w-full h-0.5 bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-400 mx-1" />
                              <Plane className="w-3.5 h-3.5 text-cyan-400 shrink-0 rotate-90" />
                              <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 via-amber-400 to-cyan-400 mx-1" />
                              <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                            </div>

                            <div className="text-[10px] font-mono text-slate-500">
                              {flight.stopDetails || 'Direct Sovereign Airspace Corridor'}
                            </div>
                          </div>

                          {/* Arrival Node */}
                          <div className="lg:col-span-2">
                            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono leading-none">
                              {flight.arrivalTime}
                            </div>
                            <div className="text-xs font-bold text-cyan-400 font-mono mt-1">
                              {flight.destinationCode}
                            </div>
                            <div className="text-[11px] text-slate-400 truncate">
                              {flight.destination}
                            </div>
                          </div>

                          {/* Price & Select CTA */}
                          <div className="lg:col-span-2 flex flex-col items-end justify-center border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-4">
                            <span className="text-[10px] font-mono text-slate-400">Total per Adult</span>
                            <div className="text-2xl font-extrabold text-amber-300 font-mono leading-tight">
                              AED {flight.priceAED.toLocaleString()}
                            </div>
                            <button
                              onClick={() => {
                                setSelectedFlight(flight);
                                if (activeTab === 'flights') setBookingStep('passenger_details');
                              }}
                              className={`w-full mt-2 py-2 px-3 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                                isSelected
                                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                                  : 'bg-slate-800 hover:bg-slate-700 text-white'
                              }`}
                            >
                              {isSelected ? <Check className="w-3.5 h-3.5" /> : null}
                              {isSelected ? 'Selected Flight' : 'Select Flight'}
                            </button>
                          </div>
                        </div>

                        {/* Expandable Flight Specs Drawer */}
                        <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono">
                          <div className="flex items-center gap-4 text-slate-400">
                            <span className="flex items-center gap-1">
                              <Luggage className="w-3.5 h-3.5 text-amber-400" />
                              {flight.baggage}
                            </span>
                            <span className="hidden sm:inline text-slate-600">•</span>
                            <span className="hidden sm:inline text-slate-400">
                              Carbon: {flight.carbonOffsetKg} kg CO₂
                            </span>
                          </div>

                          <button
                            onClick={() => setExpandedFlightId(isExpanded ? null : flight.id)}
                            className="text-amber-400 hover:text-amber-300 flex items-center gap-1"
                          >
                            <span>{isExpanded ? 'Hide Specs' : 'View Fare Specs & In-Flight Amenities'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        {/* Expanded Drawer Details */}
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono bg-black/40 p-4 rounded-xl"
                          >
                            <div>
                              <span className="text-amber-400 font-bold block mb-1">Cabin Features</span>
                              <p className="text-slate-300 text-[11px] leading-relaxed">
                                Fully lie-flat stateroom suite with motorized privacy door, 24" 4K HDR touchscreen, noise-canceling headphones, and wireless fast-charging dock.
                              </p>
                            </div>
                            <div>
                              <span className="text-amber-400 font-bold block mb-1">Fare Flexibility</span>
                              <p className="text-slate-300 text-[11px] leading-relaxed">
                                Complimentary flight changes up to 12 hours before departure. 100% refund voucher or 72-hour zero-risk rate lock.
                              </p>
                            </div>
                            <div>
                              <span className="text-amber-400 font-bold block mb-1">Culinary & Chauffeur</span>
                              <p className="text-slate-300 text-[11px] leading-relaxed">
                                Multi-course halal gourmet dining by executive culinary masters, premium mocktails, and Maybach chauffeur airport transfer in Dubai.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ======================================================= */}
            {/* 20+ HOTEL RESULTS SECTION                               */}
            {/* ======================================================= */}
            {(activeTab === 'hotels' || activeTab === 'packages') && (
              <div className="space-y-6 pt-6">
                
                {/* Hotel Header & Filter Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#060c16] border border-slate-800 text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-slate-500 font-bold flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-amber-400" />
                      Category:
                    </span>
                    {['all', 'Skyline Luxury', 'Heritage Palace', 'Private Overwater Villa', 'Ultra-Luxury Resort'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setHotelCategoryFilter(cat)}
                        className={`px-2.5 py-1 rounded-lg border transition-all ${
                          hotelCategoryFilter === cat
                            ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-slate-500">Sort:</span>
                    <select
                      value={hotelSortBy}
                      onChange={(e) => setHotelSortBy(e.target.value as any)}
                      className="bg-slate-900 border border-slate-800 text-white rounded-lg px-2.5 py-1 font-mono text-xs focus:outline-none focus:border-amber-400"
                    >
                      <option value="recommended">Featured Luxury</option>
                      <option value="rating">Highest Guest Rating</option>
                      <option value="price_low">Lowest Nightly Price</option>
                    </select>
                    <span className="text-amber-400 font-bold">
                      {filteredHotels.length} Stays Available
                    </span>
                  </div>
                </div>

                {/* 20+ Hotel Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredHotels.map((hotel) => {
                    const isSelected = selectedHotel?.id === hotel.id;

                    return (
                      <div
                        key={hotel.id}
                        className={`rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#091322] border-amber-500 shadow-xl shadow-amber-500/15 ring-1 ring-amber-400/40'
                            : 'bg-[#060b14] border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {/* Image Banner */}
                        <div className="relative h-48 w-full overflow-hidden">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-transparent to-transparent" />
                          
                          {hotel.badge && (
                            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500/90 text-black text-[9px] font-mono font-extrabold tracking-wider uppercase shadow-lg">
                              {hotel.badge}
                            </span>
                          )}

                          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/70 backdrop-blur-md text-amber-300 text-xs font-mono font-bold border border-amber-500/30">
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                            {hotel.guestRating}
                          </div>
                        </div>

                        {/* Body Details */}
                        <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider mb-1">
                              {hotel.destination} • {hotel.propertyCategory}
                            </div>
                            <h3 className="text-base font-bold text-white leading-snug">
                              {hotel.name}
                            </h3>
                            <p className="text-xs text-slate-400 font-mono mt-0.5">
                              {hotel.neighborhood}
                            </p>
                            <p className="text-[11px] text-slate-300 mt-2 line-clamp-2">
                              {hotel.description}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                            <div>
                              <span className="text-[10px] font-mono text-slate-500 block">From</span>
                              <div className="text-lg font-extrabold text-white font-mono text-amber-300">
                                AED {hotel.pricePerNightAED.toLocaleString()}
                                <span className="text-xs font-normal text-slate-400"> / night</span>
                              </div>
                            </div>

                            <button
                              onClick={() => {
                                setSelectedHotel(hotel);
                                setBookingStep('passenger_details');
                              }}
                              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                                isSelected
                                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                                  : 'bg-slate-800 hover:bg-slate-700 text-white'
                              }`}
                            >
                              {isSelected ? 'Selected Stay' : 'Select Stay'}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Continue Action */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#091524] via-[#050c16] to-[#091524] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase block mb-1">
                  Synchronized Journey Selection
                </span>
                <h4 className="text-base font-bold text-white">
                  {selectedFlight ? `${selectedFlight.airline} (${selectedFlight.originCode} → ${selectedFlight.destinationCode})` : 'Flight Selected'} 
                  {selectedHotel ? ` + ${selectedHotel.name}` : ''}
                </h4>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right font-mono">
                  <span className="text-[10px] text-slate-400 block">Estimated Total</span>
                  <div className="text-xl font-extrabold text-amber-300">
                    AED {totalJourneyPriceAED.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => setBookingStep('passenger_details')}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C378] hover:from-[#c5a028] hover:to-[#d4af37] text-black font-extrabold text-xs font-mono transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2"
                >
                  Continue to Passenger Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* STEP 2: PASSENGER & CUSTOMIZATION DETAILS                  */}
        {/* ========================================================= */}
        {bookingStep === 'passenger_details' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="rounded-3xl bg-gradient-to-b from-[#091322] to-[#040810] border border-amber-500/35 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Lead Passenger & Traveler Preferences</h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">Multi-GDS ticket serialization & passport verification</p>
                </div>
                <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  {travelersCount} Adult Travelers
                </span>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">First Name</label>
                  <input
                    type="text"
                    value={passengerDetails.firstName}
                    onChange={(e) => setPassengerDetails({ ...passengerDetails, firstName: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#050a12] border border-slate-800 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Last Name</label>
                  <input
                    type="text"
                    value={passengerDetails.lastName}
                    onChange={(e) => setPassengerDetails({ ...passengerDetails, lastName: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#050a12] border border-slate-800 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">UAE Phone (+971)</label>
                  <input
                    type="text"
                    value={passengerDetails.phone}
                    onChange={(e) => setPassengerDetails({ ...passengerDetails, phone: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#050a12] border border-slate-800 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Email Address (E-Ticket / PNR Delivery)</label>
                  <input
                    type="email"
                    value={passengerDetails.email}
                    onChange={(e) => setPassengerDetails({ ...passengerDetails, email: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#050a12] border border-slate-800 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Passport Number</label>
                  <input
                    type="text"
                    value={passengerDetails.passportNumber}
                    onChange={(e) => setPassengerDetails({ ...passengerDetails, passportNumber: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#050a12] border border-slate-800 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Bespoke Journey Add-Ons */}
              <div className="pt-6 border-t border-slate-800">
                <h4 className="text-sm font-bold text-white font-mono mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  VIP Concierge & Travel Add-Ons
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div
                    onClick={() => setSelectedAddons({ ...selectedAddons, chauffeur: !selectedAddons.chauffeur })}
                    className={`p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                      selectedAddons.chauffeur ? 'bg-amber-950/40 border-amber-500/60 text-amber-300' : 'bg-[#050a12] border-slate-800 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-white">Private Maybach Airport Transfer</div>
                      <div className="text-[10px] text-slate-400">Direct chauffeur from residence to DXB VIP lounge</div>
                    </div>
                    <span className="font-bold text-amber-400">+ AED 450</span>
                  </div>

                  <div
                    onClick={() => setSelectedAddons({ ...selectedAddons, loungeAccess: !selectedAddons.loungeAccess })}
                    className={`p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                      selectedAddons.loungeAccess ? 'bg-amber-950/40 border-amber-500/60 text-amber-300' : 'bg-[#050a12] border-slate-800 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-white">First Class Lounge & Spa Access</div>
                      <div className="text-[10px] text-slate-400">Complimentary 30-minute massage & champagne</div>
                    </div>
                    <span className="font-bold text-amber-400">+ AED 350 / pax</span>
                  </div>

                  <div
                    onClick={() => setSelectedAddons({ ...selectedAddons, travelInsurance: !selectedAddons.travelInsurance })}
                    className={`p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                      selectedAddons.travelInsurance ? 'bg-amber-950/40 border-amber-500/60 text-amber-300' : 'bg-[#050a12] border-slate-800 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-white">Comprehensive Travel Shield</div>
                      <div className="text-[10px] text-slate-400">Full medical, baggage & disruption coverage</div>
                    </div>
                    <span className="font-bold text-amber-400">+ AED 280 / pax</span>
                  </div>

                  <div
                    onClick={() => setSelectedAddons({ ...selectedAddons, carbonOffset: !selectedAddons.carbonOffset })}
                    className={`p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                      selectedAddons.carbonOffset ? 'bg-amber-950/40 border-amber-500/60 text-amber-300' : 'bg-[#050a12] border-slate-800 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-white">100% Certified Carbon Neutral Offset</div>
                      <div className="text-[10px] text-slate-400">Verified UAE mangrove restoration credit</div>
                    </div>
                    <span className="font-bold text-amber-400">+ AED 120</span>
                  </div>
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setBookingStep('search_results')}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
                >
                  ← Back to Selection
                </button>

                <button
                  onClick={() => setBookingStep('summary_review')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C378] text-black font-extrabold text-xs font-mono shadow-lg shadow-amber-500/25 flex items-center gap-2"
                >
                  Review Complete Itinerary <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STEP 3: SUMMARY & LIVE FARE BREAKDOWN                      */}
        {/* ========================================================= */}
        {bookingStep === 'summary_review' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="rounded-3xl bg-gradient-to-b from-[#091322] to-[#040810] border border-amber-500/35 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                    FINAL ITINERARY MANIFEST
                  </span>
                  <h3 className="text-2xl font-bold text-white">Review Before Lock & Confirmation</h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20">
                  72-Hour Rate Lock Active
                </span>
              </div>

              {/* Itinerary Recap Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                {selectedFlight && (
                  <div className="p-4 rounded-2xl bg-[#060c16] border border-slate-800">
                    <span className="text-amber-400 font-bold block mb-2">FLIGHT COMPONENT</span>
                    <div className="text-base font-bold text-white">{selectedFlight.airline} ({selectedFlight.flightNumber})</div>
                    <div className="text-slate-300 mt-1">{selectedFlight.originCode} → {selectedFlight.destinationCode} • {selectedFlight.cabinClass}</div>
                    <div className="text-slate-500 mt-1">{departureDate} • {selectedFlight.departureTime} departure</div>
                    <div className="text-amber-300 font-bold text-sm mt-3">AED {flightCostTotal.toLocaleString()} ({travelersCount} Travelers)</div>
                  </div>
                )}

                {selectedHotel && (
                  <div className="p-4 rounded-2xl bg-[#060c16] border border-slate-800">
                    <span className="text-cyan-400 font-bold block mb-2">LUXURY STAY COMPONENT</span>
                    <div className="text-base font-bold text-white">{selectedHotel.name}</div>
                    <div className="text-slate-300 mt-1">{selectedHotel.roomType}</div>
                    <div className="text-slate-500 mt-1">{selectedHotel.stayNights} Nights • {selectedHotel.destination}</div>
                    <div className="text-cyan-300 font-bold text-sm mt-3">AED {hotelCostTotal.toLocaleString()} Total Stay</div>
                  </div>
                )}
              </div>

              {/* Line Item Pricing Breakdown */}
              <div className="p-5 rounded-2xl bg-black/40 border border-slate-800/80 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Flight Transportation Base Fare ({travelersCount} Adults):</span>
                  <span className="text-white">AED {flightCostTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Hotel Stay & Sovereign Tourism Tax:</span>
                  <span className="text-white">AED {hotelCostTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>VIP Add-Ons & Chauffeur Services:</span>
                  <span className="text-white">AED {addonsTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Airport GDS Security & Aviation Fees (5%):</span>
                  <span className="text-white">AED {taxesAndGdsFees.toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-slate-700 flex justify-between items-baseline text-sm font-bold">
                  <span className="text-white">Total Journey Package:</span>
                  <span className="text-2xl text-amber-300 font-extrabold">
                    AED {totalJourneyPriceAED.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setBookingStep('passenger_details')}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
                >
                  ← Edit Details
                </button>

                <button
                  onClick={() => setBookingStep('confirmed')}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C378] text-black font-extrabold text-sm font-mono shadow-xl shadow-amber-500/30 flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Confirm & Generate Digital PNR Ticket
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STEP 4: CONFIRMED PNR TICKET & DIGITAL BOARDING PASS       */}
        {/* ========================================================= */}
        {bookingStep === 'confirmed' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="rounded-3xl bg-gradient-to-b from-[#0a1a2e] via-[#060e1a] to-[#040810] border border-amber-500/50 p-6 sm:p-10 shadow-2xl text-center space-y-6">
              
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500 text-amber-300 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                  OFFICIAL AEROVIA RESERVATION RECORD
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Journey Confirmed & Ticketed
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-mono mt-2">
                  PNR Reference: <strong className="text-amber-300 text-base">#AER-DXB-94821</strong> • E-Ticket: <strong className="text-white">176-884920193</strong>
                </p>
              </div>

              {/* Digital Boarding Pass Manifest Container */}
              <div className="p-6 rounded-2xl bg-[#040810] border border-amber-500/30 text-left font-mono space-y-4 shadow-inner">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-500 block">Lead Passenger</span>
                    <span className="text-white font-bold text-sm">{passengerDetails.firstName} {passengerDetails.lastName}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block">Total Paid in AED</span>
                    <span className="text-amber-300 font-bold text-sm">AED {totalJourneyPriceAED.toLocaleString()}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block">Flight</span>
                    <span className="text-white font-bold">{selectedFlight?.airlineCode} {selectedFlight?.flightNumber}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Route</span>
                    <span className="text-amber-400 font-bold">{selectedFlight?.originCode} → {selectedFlight?.destinationCode}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Departure</span>
                    <span className="text-white font-bold">{departureDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Cabin</span>
                    <span className="text-emerald-400 font-bold">{selectedFlight?.cabinClass}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2 border-t border-slate-800">
                  <div>
                    <span className="text-slate-500 block">Confirmed Hotel</span>
                    <span className="text-white font-bold">{selectedHotel?.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Room Specification</span>
                    <span className="text-cyan-400 font-bold">{selectedHotel?.roomType}</span>
                  </div>
                </div>

                {/* Simulated Barcode / QR Section */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-8 h-8 text-amber-400" />
                    <span>Scan at DXB Terminal 3 & Luxury Chauffeur Dispatch</span>
                  </div>
                  <span className="text-[10px] text-slate-600 font-mono">ENCRYPTED GDS SHA-256</span>
                </div>
              </div>

              {/* Post Booking Actions */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => alert(`Digital E-Ticket #AER-DXB-94821 dispatched to ${passengerDetails.email}`)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-black font-extrabold text-xs font-mono shadow-md hover:bg-amber-400 flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Digital Pass (PDF)
                </button>

                <button
                  onClick={() => {
                    setBookingStep('search_results');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white hover:bg-slate-800 text-xs font-mono flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Start Another Booking
                </button>
              </div>

              <p className="text-[10px] font-mono text-slate-500">
                AEROVIA Demonstration Travel Commerce Infrastructure • Zero Real Financial Transaction Charged
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
