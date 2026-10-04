'use client';

import React, { useState } from 'react';
import { ExoticVehicle } from '@/data/carRentalCatalogData';
import { 
  X, 
  Gauge, 
  Flame, 
  Car, 
  ShieldCheck, 
  Check, 
  Bookmark, 
  Scale, 
  Share2, 
  Zap, 
  Clock, 
  Star,
  CheckCircle2,
  Volume2
} from 'lucide-react';

interface ExoticVehicleModalProps {
  vehicle: ExoticVehicle | null;
  onClose: () => void;
  isSaved: boolean;
  isCompared: boolean;
  onToggleSave: (v: ExoticVehicle) => void;
  onToggleCompare: (v: ExoticVehicle) => void;
  onBookReserve: (v: ExoticVehicle) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const ExoticVehicleModal: React.FC<ExoticVehicleModalProps> = ({
  vehicle,
  onClose,
  isSaved,
  isCompared,
  onToggleSave,
  onToggleCompare,
  onBookReserve,
  currency
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'telemetry' | 'terms' | 'audio'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);
  const [isPlayingRev, setIsPlayingRev] = useState(false);

  if (!vehicle) return null;

  const rates = {
    AED: 1,
    USD: 0.272,
    EUR: 0.252,
    GBP: 0.215
  };
  const currentRate = rates[currency];
  const convertedPrice = Math.round(vehicle.dailyPriceAED * currentRate);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSimulateRev = () => {
    setIsPlayingRev(true);
    setTimeout(() => setIsPlayingRev(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-6xl max-h-[92vh] bg-zinc-950 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-900/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold uppercase">
              {vehicle.id}
            </span>
            <span className="text-zinc-400 text-xs font-mono hidden sm:inline">
              {vehicle.brand} • {vehicle.categoryName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Share */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all text-xs flex items-center gap-1.5"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            {/* Compare Toggle */}
            <button
              onClick={() => onToggleCompare(vehicle)}
              className={`p-2 rounded-xl border transition-all text-xs flex items-center gap-1.5 ${
                isCompared
                  ? 'bg-amber-500 text-zinc-950 border-amber-400 font-semibold'
                  : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:text-amber-400'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span className="hidden sm:inline">{isCompared ? 'Compared' : 'Compare'}</span>
            </button>

            {/* Save Toggle */}
            <button
              onClick={() => onToggleSave(vehicle)}
              className={`p-2 rounded-xl border transition-all text-xs flex items-center gap-1.5 ${
                isSaved
                  ? 'bg-amber-500 text-zinc-950 border-amber-400 font-semibold'
                  : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:text-amber-400'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8">
          {/* Main Showcase Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Active Image */}
            <div className="lg:col-span-8 space-y-3">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                <img
                  src={vehicle.gallery[activeImageIndex] || vehicle.heroImage}
                  alt={vehicle.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-black/20 pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                    Photo {activeImageIndex + 1} of {vehicle.gallery.length}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-rose-500/20 backdrop-blur-md border border-rose-500/40 text-rose-300 font-bold">
                    0-100: {vehicle.acceleration0100} • {vehicle.topSpeed}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {vehicle.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[16/10] rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-amber-500 ring-2 ring-amber-500/40'
                        : 'border-zinc-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Acquisition Summary Card */}
            <div className="lg:col-span-4 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                  <span>{vehicle.brand} Exclusive Fleet</span>
                  <span className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {vehicle.rating} ({vehicle.reviewsCount} rentals)
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 leading-snug">
                  {vehicle.title}
                </h1>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 mb-6">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    Daily Lease Rate
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-amber-400">
                    {currency} {convertedPrice.toLocaleString()} <span className="text-xs font-mono font-normal text-zinc-400">/ day</span>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mt-1 flex items-center justify-between">
                    <span>{vehicle.freeDailyKm} Free KM / Day</span>
                    <span className="text-emerald-400 font-semibold">0% Security Deposit</span>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-mono mb-6">
                  <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                    <Flame className="w-4 h-4 text-rose-400 mx-auto mb-1" />
                    <div className="text-white font-bold">{vehicle.horsepower} HP</div>
                    <div className="text-[10px] text-zinc-500">Power</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                    <Gauge className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                    <div className="text-white font-bold">{vehicle.acceleration0100}</div>
                    <div className="text-[10px] text-zinc-500">0-100 km/h</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                    <Car className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <div className="text-white font-bold">{vehicle.seats} Seats</div>
                    <div className="text-[10px] text-zinc-500">Cabin</div>
                  </div>
                </div>

                {/* Tarmac Pill */}
                <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>DXB VIP Terminal 3 & Palm Doorstep Delivery in 30 Mins</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => onBookReserve(vehicle)}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 hover:from-amber-400 hover:to-rose-400 text-zinc-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  Reserve Supercar for Instant Delivery
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-zinc-800 flex gap-4 text-xs font-mono uppercase tracking-wider">
            {[
              { id: 'overview', label: 'Supercar Overview & Features' },
              { id: 'telemetry', label: 'Powertrain & Track Telemetry' },
              { id: 'terms', label: 'Rental Agreement & Security' },
              { id: 'audio', label: 'V8/V12 Exhaust Acoustic Preview' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 border-b-2 font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'border-amber-400 text-amber-400'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-3">Vehicle Overview</h3>
                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                  {vehicle.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-4">Equipment & Interior Specs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {vehicle.features.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-3 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Telemetry */}
          {activeTab === 'telemetry' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px] uppercase">Engine Architecture</div>
                  <div className="text-white font-bold mt-1 truncate">{vehicle.engineType}</div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px] uppercase">Peak Horsepower</div>
                  <div className="text-rose-400 font-bold mt-1">{vehicle.horsepower} Brake HP</div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px] uppercase">Top Speed</div>
                  <div className="text-amber-400 font-bold mt-1">{vehicle.topSpeed}</div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px] uppercase">Transmission</div>
                  <div className="text-emerald-400 font-bold mt-1 truncate">{vehicle.transmission}</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Terms */}
          {activeTab === 'terms' && (
            <div className="space-y-4 animate-in fade-in duration-200 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                All rentals include 0% Security Deposit option via credit card hold or cryptocurrency. Fully covered by comprehensive RTA commercial limousine insurance.
              </div>

              {vehicle.rentalTerms.map((term, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3 text-zinc-300">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{term}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 4: Audio Simulation */}
          {activeTab === 'audio' && (
            <div className="p-8 rounded-3xl bg-zinc-950 border border-amber-500/30 flex flex-col items-center justify-center text-center space-y-4">
              <div className={`w-16 h-16 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto ${isPlayingRev ? 'animate-ping' : ''}`}>
                <Volume2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">
                Titanium Sport Exhaust Acoustic Rev Simulation
              </h3>
              <p className="text-xs text-zinc-400 max-w-md">
                Listen to the cold-start ignition rumble and active-valve throttle blip of the {vehicle.horsepower} HP {vehicle.brand} powerplant.
              </p>
              <button
                onClick={handleSimulateRev}
                className="px-6 py-3 rounded-xl bg-rose-500 hover:bg-rose-400 text-zinc-950 font-mono font-bold text-xs uppercase tracking-wider"
              >
                {isPlayingRev ? 'Simulating High-RPM Rev Sound...' : 'Play Exhaust Soundbite'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
