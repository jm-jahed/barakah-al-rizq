'use client';

import React, { useState } from 'react';
import { 
  Radio, 
  ThermometerSnowflake, 
  ShieldCheck 
} from 'lucide-react';
import { useReeferTheme } from './ReeferThemeContext';

interface SimulatedTrip {
  vehicleId: string;
  driverCode: string;
  origin: string;
  destination: string;
  currentLocation: string;
  eta: string;
  temperature: string;
  status: 'IN TRANSIT' | 'BORDER CLEARANCE' | 'ARRIVED DESTINATION' | 'LOADING';
  progressPercent: number;
  coordinates: string;
  lastPing: string;
}

export default function ReeferTrackedTransport() {
  const simulatedTrips: SimulatedTrip[] = [
    {
      vehicleId: 'TRUCK #AE-025',
      driverCode: 'DVR-884 (Saudi Border Certified)',
      origin: 'Dubai JAFZA Hub',
      destination: 'Riyadh Central Logistics, KSA',
      currentLocation: 'Saudi Border (Al Batha / Al Ghuwaifat)',
      eta: '08:42',
      temperature: '-10.8°C',
      status: 'IN TRANSIT',
      progressPercent: 64,
      coordinates: '24.1302° N, 51.6148° E',
      lastPing: '2 mins ago (Orbcomm Satellite)'
    },
    {
      vehicleId: 'TRUCK #AE-014',
      driverCode: 'DVR-612 (GCC Transit Visa)',
      origin: 'Al Aweer Fruit Market, Dubai',
      destination: 'Doha Wholesale Terminal, Qatar',
      currentLocation: 'Salwa Border Transit Crossing',
      eta: '11:15',
      temperature: '+3.2°C',
      status: 'BORDER CLEARANCE',
      progressPercent: 52,
      coordinates: '24.7330° N, 50.8120° E',
      lastPing: '1 min ago (Carrier Transicold Link)'
    },
    {
      vehicleId: 'TRUCK #AE-009',
      driverCode: 'DVR-491 (Oman Bilateral Permit)',
      origin: 'Al Aweer Central Depot, Dubai',
      destination: 'Muscat Mawaleh Cold Stores, Oman',
      currentLocation: 'Al Wajajah Border Terminal',
      eta: '04:30',
      temperature: '+4.0°C',
      status: 'IN TRANSIT',
      progressPercent: 78,
      coordinates: '24.8190° N, 56.1240° E',
      lastPing: 'Just now (Teltonika Telematics)'
    }
  ];

  const [activeTripIndex, setActiveTripIndex] = useState(0);
  const currentTrip = simulatedTrips[activeTripIndex];
  const { isDark } = useReeferTheme();

  return (
    <section id="tracking" className={`relative py-24 border-b overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#080C14] border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-mono font-bold shadow-xs ${
            isDark ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-white border-slate-200 text-amber-700'
          }`}>
            <Radio className="w-4 h-4 animate-pulse text-amber-500" />
            <span>CROSS-BORDER TELEMATICS & GPS CONSOLE</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            KNOW WHERE YOUR CARGO IS.
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#4B5563]'}`}>
            Every journey can be monitored with professional tracking visibility, giving customers greater confidence throughout the transportation process.
          </p>
        </div>

        {/* GPS Tracking Main Interface Box */}
        <div className={`rounded-3xl border shadow-xl overflow-hidden ${
          isDark ? 'bg-[#0F172A] border-slate-800' : 'bg-white border-slate-200'
        }`}>
          
          {/* Top Telematics Ribbon */}
          <div className={`border-b px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
            isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider ${
                isDark ? 'text-white' : 'text-[#111111]'
              }`}>
                ORBCOMM SATELLITE DISPATCH CONSOLE
              </span>
              <span className="hidden md:inline font-mono text-xs text-slate-400 font-semibold">
                (Representative Operational Telemetry UI)
              </span>
            </div>

            {/* Trip Selector Buttons */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs sm:text-sm font-mono text-slate-400 hidden lg:inline font-bold">SELECT ACTIVE UNIT:</span>
              {simulatedTrips.map((trip, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTripIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono border transition-all cursor-pointer font-bold ${
                    activeTripIndex === idx
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-2xs font-black'
                      : isDark
                        ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                        : 'bg-white text-[#374151] border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {trip.vehicleId}
                </button>
              ))}
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="p-6 sm:p-10 space-y-9">
            
            {/* Top Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              
              {/* 1. Vehicle ID */}
              <div className={`p-5 rounded-2xl border shadow-2xs space-y-1 ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
              }`}>
                <div className="text-xs sm:text-sm font-mono text-slate-400 uppercase font-bold">VEHICLE ID</div>
                <div className="text-xl sm:text-2xl font-mono font-black text-amber-500 mt-1">
                  {currentTrip.vehicleId}
                </div>
                <div className="text-xs font-mono text-slate-400 truncate font-semibold pt-0.5">
                  {currentTrip.driverCode}
                </div>
              </div>

              {/* 2. Current Location */}
              <div className={`p-5 rounded-2xl border shadow-2xs col-span-1 sm:col-span-2 lg:col-span-1 space-y-1 ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
              }`}>
                <div className="text-xs sm:text-sm font-mono text-slate-400 uppercase font-bold">LOCATION</div>
                <div className={`text-lg sm:text-xl font-mono font-bold mt-1 truncate ${
                  isDark ? 'text-white' : 'text-[#111111]'
                }`}>
                  {currentTrip.currentLocation}
                </div>
                <div className="text-xs font-mono text-sky-400 font-bold pt-0.5">
                  GPS: {currentTrip.coordinates}
                </div>
              </div>

              {/* 3. ETA */}
              <div className={`p-5 rounded-2xl border shadow-2xs space-y-1 ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
              }`}>
                <div className="text-xs sm:text-sm font-mono text-slate-400 uppercase font-bold">ETA</div>
                <div className="text-2xl sm:text-3xl font-mono font-black text-emerald-500 mt-1">
                  {currentTrip.eta}
                </div>
                <div className="text-xs font-mono text-emerald-500 font-bold pt-0.5">
                  ON SCHEDULE
                </div>
              </div>

              {/* 4. Temperature */}
              <div className={`p-5 rounded-2xl border shadow-2xs space-y-1 ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
              }`}>
                <div className="text-xs sm:text-sm font-mono text-slate-400 uppercase font-bold">TEMPERATURE</div>
                <div className="text-2xl sm:text-3xl font-mono font-black text-sky-500 mt-1">
                  {currentTrip.temperature}
                </div>
                <div className="text-xs font-mono text-emerald-500 font-bold flex items-center gap-1 pt-0.5">
                  <ThermometerSnowflake className="w-3.5 h-3.5" />
                  <span>STABLE SETPOINT</span>
                </div>
              </div>

              {/* 5. Trip Status */}
              <div className={`p-5 rounded-2xl border shadow-2xs col-span-1 sm:col-span-2 lg:col-span-1 space-y-1 ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
              }`}>
                <div className="text-xs sm:text-sm font-mono text-slate-400 uppercase font-bold">STATUS</div>
                <div className="text-lg sm:text-xl font-mono font-black text-amber-500 mt-1">
                  {currentTrip.status}
                </div>
                <div className="text-xs font-mono text-slate-400 font-medium pt-0.5">
                  PING: {currentTrip.lastPing}
                </div>
              </div>

            </div>

            {/* 3-Stage Progress: Dubai → Border → GCC Destination */}
            <div className={`p-6 sm:p-7 rounded-2xl border space-y-7 ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
            }`}>
              <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-slate-400 font-bold">
                <span className="uppercase">ROUTE MILESTONE PROGRESSION</span>
                <span className="text-sky-400 font-black">{currentTrip.progressPercent}% JOURNEY COMPLETED</span>
              </div>

              <div className="space-y-4">
                {/* Visual Bar with amber progress */}
                <div className={`w-full h-3.5 rounded-full overflow-hidden ${
                  isDark ? 'bg-slate-800' : 'bg-slate-200'
                }`}>
                  <div
                    className="bg-amber-500 h-full rounded-full transition-all duration-700 relative"
                    style={{ width: `${currentTrip.progressPercent}%` }}
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-3 bg-white animate-pulse" />
                  </div>
                </div>

                {/* 3 Milestones */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                  {/* Origin */}
                  <div className="text-left">
                    <div className={`text-xs sm:text-sm font-mono font-bold flex items-center gap-1.5 sm:gap-2 ${
                      isDark ? 'text-white' : 'text-[#111111]'
                    }`}>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>DUBAI (ORIGIN)</span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-1 font-medium truncate">{currentTrip.origin}</div>
                  </div>

                  {/* Border */}
                  <div className="text-center">
                    <div className="text-xs sm:text-sm font-mono font-bold text-amber-500 flex items-center justify-center gap-1.5 sm:gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
                      <span>BORDER (TRANSIT)</span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-1 font-medium truncate">{currentTrip.currentLocation}</div>
                  </div>

                  {/* Destination */}
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-mono font-bold text-sky-400 flex items-center justify-end gap-1.5 sm:gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shrink-0" />
                      <span>GCC DESTINATION</span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-1 font-medium truncate">{currentTrip.destination}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Note & Transparency Disclaimer */}
            <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl border text-sm font-mono ${
              isDark ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-[#F8FAFC] border-slate-200 text-[#374151]'
            }`}>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-medium">
                  Every booked client receives direct automated WhatsApp/SMS dispatch milestone updates and digital datalogger proof on delivery.
                </span>
              </div>
              <span className="text-slate-400 shrink-0 text-xs sm:text-sm font-bold">
                CARRIER TRANSICOLD • EN 12830 TELEMATICS
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
