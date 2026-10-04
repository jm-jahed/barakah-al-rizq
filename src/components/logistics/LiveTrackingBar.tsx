'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, MapPin, Truck, CheckCircle2, Clock, ShieldCheck, User, Phone, ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';
import { MOCK_TRACKING_DATABASE, ShipmentRecord } from '@/data/logisticsData';

interface LiveTrackingBarProps {
  initialCode?: string;
}

export const LiveTrackingBar: React.FC<LiveTrackingBarProps> = ({ initialCode = 'VLX-2048-7391' }) => {
  const [trackingIdInput, setTrackingIdInput] = useState(initialCode);
  const [activeResult, setActiveResult] = useState<ShipmentRecord | null>(
    MOCK_TRACKING_DATABASE['VLX-2048-7391']
  );
  const [isSearching, setIsSearching] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    const cleaned = trackingIdInput.trim().toUpperCase();

    if (!cleaned) {
      setErrorMsg('Please enter a valid tracking number (e.g. VLX-2048-7391).');
      return;
    }

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      if (MOCK_TRACKING_DATABASE[cleaned]) {
        setActiveResult(MOCK_TRACKING_DATABASE[cleaned]);
      } else {
        // Fallback default mock generator if code is custom
        setActiveResult({
          trackingId: cleaned,
          sender: 'Velox Regional Hub, Dubai',
          recipient: 'Enterprise Client Dispatch, Abu Dhabi',
          origin: 'Dubai Logistics Hub, UAE',
          destination: 'Abu Dhabi Business Hub, UAE',
          currentLocation: 'Dubai-Abu Dhabi E11 Highway Transit Node',
          status: 'In Transit',
          statusStep: 2,
          estimatedDelivery: 'Today, 19:15 GST',
          weight: '6.4 kg',
          packageType: 'Priority Commercial Package',
          carrier: 'Velox Fleet Express Unit',
          lastUpdated: 'Just now',
          driverName: 'Fahad Hassan',
          driverPhone: '+971 50 119 2831',
          timeline: [
            { title: 'Package Picked Up', location: 'Dubai Logistics Hub', timestamp: 'Today, 09:00 AM', completed: true },
            { title: 'In Transit via E11', location: 'Transit Node 3', timestamp: 'Today, 01:30 PM', completed: true },
            { title: 'Arrived at Local Sorting', location: 'Abu Dhabi Distribution Center', timestamp: 'Estimated 05:00 PM', completed: false },
            { title: 'Out for Delivery', location: 'Abu Dhabi Express Route', timestamp: 'Estimated 06:15 PM', completed: false },
            { title: 'Delivered', location: 'Destination Address', timestamp: 'Estimated 07:15 PM', completed: false },
          ]
        });
      }
    }, 600);
  };

  const handlePresetSelect = (code: string) => {
    setTrackingIdInput(code);
    setActiveResult(MOCK_TRACKING_DATABASE[code] || null);
    setErrorMsg(null);
  };

  return (
    <section id="tracking" className="py-16 bg-[#0B1120] relative border-y border-blue-500/20 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Header & Input */}
        <div className="bg-[#0F172A] rounded-3xl border border-blue-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase mb-2">
                <Compass className="w-3.5 h-3.5 text-blue-400 animate-spin-slow" />
                <span>LIVE TELEMETRY SEARCH</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Track Your Shipment.
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Enter your tracking ID for instant real-time GPS telemetry, milestone updates, and driver contact info.
              </p>
            </div>

            {/* Quick Demo Preset Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-gray-400 font-mono">TRY DEMO CODE:</span>
              {['VLX-2048-7391', 'VLX-1982-4410', 'VLX-1847-9021', 'VLX-3310-9942'].map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => handlePresetSelect(code)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all border ${
                    trackingIdInput === code
                      ? 'bg-blue-600 border-blue-400 text-white'
                      : 'bg-white/5 border-white/10 text-blue-300 hover:bg-white/10'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>

          {/* Tracking Search Input Form */}
          <form onSubmit={handleTrackSubmit} className="relative mb-6">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={trackingIdInput}
                  onChange={(e) => setTrackingIdInput(e.target.value)}
                  placeholder="Enter tracking number (e.g. VLX-2048-7391)"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#070B14] border border-blue-500/30 text-white font-mono text-sm sm:text-base focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-gray-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSearching}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-blue-600/30 whitespace-nowrap"
              >
                {isSearching ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>Locating Cargo...</span>
                  </>
                ) : (
                  <>
                    <span>Track Shipment</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {errorMsg && (
              <p className="text-xs text-red-400 font-mono mt-2 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errorMsg}</span>
              </p>
            )}
          </form>

          {/* Active Result Card Display */}
          <AnimatePresence mode="wait">
            {activeResult && (
              <motion.div
                key={activeResult.trackingId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="mt-8 pt-8 border-t border-blue-500/20 bg-[#070B14]/80 p-6 sm:p-8 rounded-2xl border border-blue-500/30"
              >
                
                {/* Result Header & Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl font-black font-mono text-white">
                        {activeResult.trackingId}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wider ${
                          activeResult.status === 'Delivered'
                            ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-400'
                            : activeResult.status === 'Out for Delivery'
                            ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300'
                            : 'bg-blue-500/15 border border-blue-500/40 text-blue-300'
                        }`}
                      >
                        {activeResult.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 font-mono mt-1">
                      Carrier: {activeResult.carrier} • Last Telemetry Ping: {activeResult.lastUpdated}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[10px] font-mono text-gray-400 uppercase block">ESTIMATED DELIVERY</span>
                    <span className="text-base sm:text-lg font-bold text-cyan-300 font-mono">
                      {activeResult.estimatedDelivery}
                    </span>
                  </div>
                </div>

                {/* Progress Steps Timeline Bar */}
                <div className="mb-8">
                  <div className="grid grid-cols-5 gap-2 relative">
                    {/* Background Progress Bar */}
                    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-gray-800 z-0 rounded-full" />
                    <div
                      className="absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 z-0 rounded-full transition-all duration-700"
                      style={{ width: `${((activeResult.statusStep - 1) / 4) * 100}%` }}
                    />

                    {['Picked Up', 'In Transit', 'Sorting', 'Out for Delivery', 'Delivered'].map((stepLabel, idx) => {
                      const isDone = idx + 1 <= activeResult.statusStep;
                      const isCurrent = idx + 1 === activeResult.statusStep;

                      return (
                        <div key={stepLabel} className="relative z-10 flex flex-col items-center text-center">
                          <div
                            className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                              isCurrent
                                ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/50 ring-4 ring-cyan-500/20'
                                : isDone
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-800 text-gray-500 border border-gray-700'
                            }`}
                          >
                            {isDone ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                          </div>
                          <span className={`text-[10px] sm:text-xs font-medium mt-2 hidden sm:block ${isCurrent ? 'text-cyan-300 font-bold' : isDone ? 'text-gray-300' : 'text-gray-600'}`}>
                            {stepLabel}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Details Grid: Origin / Destination / Driver */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs font-mono">
                  
                  {/* Origin */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-gray-400 uppercase text-[10px] block mb-1">ORIGIN</span>
                    <span className="text-white font-bold text-sm block">{activeResult.origin}</span>
                    <span className="text-gray-400 text-[11px] mt-1 block">Sender: {activeResult.sender}</span>
                  </div>

                  {/* Current Location */}
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                    <span className="text-blue-400 uppercase text-[10px] block mb-1">CURRENT LOCATION</span>
                    <span className="text-cyan-300 font-bold text-sm block flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {activeResult.currentLocation}
                    </span>
                    <span className="text-gray-300 text-[11px] mt-1 block">Weight: {activeResult.weight} ({activeResult.packageType})</span>
                  </div>

                  {/* Destination & Driver */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="text-gray-400 uppercase text-[10px] block mb-1">DESTINATION</span>
                      <span className="text-white font-bold text-sm block">{activeResult.destination}</span>
                    </div>

                    {activeResult.driverName && (
                      <div className="pt-2 border-t border-white/10 mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="text-gray-200">{activeResult.driverName}</span>
                        </div>
                        <a
                          href={`tel:${activeResult.driverPhone}`}
                          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[11px] font-bold"
                        >
                          <Phone className="w-3 h-3" />
                          Call Driver
                        </a>
                      </div>
                    )}
                  </div>

                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
