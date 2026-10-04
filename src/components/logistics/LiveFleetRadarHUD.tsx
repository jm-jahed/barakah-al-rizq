'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Radar,
  Truck,
  MapPin,
  Activity,
  Zap,
  Battery,
  ShieldCheck,
  Navigation,
  RefreshCw,
  Eye,
  ArrowRight
} from 'lucide-react';
import { MOCK_LIVE_VEHICLES } from '@/data/logisticsData';

interface LiveFleetRadarHUDProps {
  onOpenTrackingModal: () => void;
}

export const LiveFleetRadarHUD: React.FC<LiveFleetRadarHUDProps> = ({
  onOpenTrackingModal
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState(MOCK_LIVE_VEHICLES[0]);
  const [isScanning, setIsScanning] = useState(false);

  const handleTriggerScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 1200);
  };

  return (
    <section id="radar" className="py-20 bg-[#060911] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>SATELLITE TELEMETRY COMMAND • UAE & GCC CORRIDORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Live Fleet Radar &{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400">
                IoT Telematics HUD
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleTriggerScan}
              className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white font-mono flex items-center gap-2 transition-all hover:border-cyan-500"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${isScanning ? 'animate-spin' : ''}`} />
              <span>Ping Satellite (1.2s)</span>
            </button>

            <button
              onClick={onOpenTrackingModal}
              className="px-4 py-2.5 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 text-xs font-bold transition-colors"
            >
              Search by Consignment ID
            </button>
          </div>
        </div>

        {/* Master Telemetry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Simulated Radar Map Canvas & Active Pins */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-950 border border-slate-800 p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Animated Radar Sweep Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-cyan-500/20 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-cyan-500/10 rounded-full pointer-events-none" />
            
            {/* Radar Coordinates Header */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 border-b border-slate-800/80 pb-3">
              <span className="text-cyan-400 font-bold">RADAR LAT 25.2048° N, LON 55.2708° E (DUBAI)</span>
              <span className="text-emerald-400">STATUS: ALL NODES ONLINE</span>
            </div>

            {/* Interactive Vehicle Nodes on Radar */}
            <div className="my-10 relative h-64 sm:h-80 flex items-center justify-center">
              {MOCK_LIVE_VEHICLES.map((veh, idx) => {
                const isSelected = selectedVehicle.id === veh.id;
                // Distribute nodes visually
                const positions = [
                  { top: '25%', left: '30%' },
                  { top: '65%', left: '55%' },
                  { top: '80%', left: '80%' },
                  { top: '35%', left: '70%' },
                  { top: '50%', left: '20%' },
                ];
                const pos = positions[idx % positions.length];

                return (
                  <button
                    key={veh.id}
                    onClick={() => setSelectedVehicle(veh)}
                    style={{ top: pos.top, left: pos.left }}
                    className={`absolute p-2 rounded-xl transition-all flex items-center gap-2 group z-20 ${
                      isSelected
                        ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50 scale-110 ring-4 ring-cyan-500/30'
                        : 'bg-slate-900/90 text-cyan-400 border border-slate-700 hover:border-cyan-400'
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <span className="text-[10px] font-mono font-bold hidden sm:inline">
                      {veh.id}
                    </span>
                  </button>
                );
              })}

              {/* Center Tower Beacon */}
              <div className="w-4 h-4 rounded-full bg-cyan-400 animate-ping absolute" />
              <div className="w-3 h-3 rounded-full bg-white absolute shadow-md shadow-cyan-400" />
            </div>

            {/* Bottom Radar Footnote */}
            <div className="text-xs font-mono text-slate-500 flex items-center justify-between z-10 border-t border-slate-800/80 pt-3">
              <span>ACTIVE FLEET: 1,450+ VEHICLES</span>
              <span className="text-slate-400">CLICK ANY NODE TO INSPECT TELEMETRY</span>
            </div>

          </div>

          {/* Right Column: Selected Node Live Inspector */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-slate-900 to-[#0A0E1A] border border-cyan-500/40 p-6 flex flex-col justify-between shadow-2xl">
            <div className="space-y-5">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">INSPECTING VEHICLE NODE</span>
                  <h3 className="text-xl font-black text-white font-mono flex items-center gap-2 mt-0.5">
                    <span>{selectedVehicle.id}</span>
                    <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      {selectedVehicle.status}
                    </span>
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">ASSET CLASS</span>
                  <span className="text-xs font-bold text-cyan-300">{selectedVehicle.type}</span>
                </div>
              </div>

              {/* Telemetry Metrics Quad */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] text-slate-500 block uppercase">CURRENT SPEED</span>
                  <span className="text-lg font-bold text-cyan-300 mt-1 block">
                    {selectedVehicle.speed}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] text-slate-500 block uppercase">CARGO TEMP</span>
                  <span className="text-lg font-bold text-emerald-400 mt-1 block">
                    {selectedVehicle.temp}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] text-slate-500 block uppercase">BATTERY / FUEL</span>
                  <span className="text-lg font-bold text-amber-400 mt-1 block">
                    {selectedVehicle.battery}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] text-slate-500 block uppercase">DESTINATION ETA</span>
                  <span className="text-lg font-bold text-white mt-1 block">
                    {selectedVehicle.eta}
                  </span>
                </div>
              </div>

              {/* Route & Driver Info */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Active Corridor:</span>
                  <span className="font-semibold text-white">{selectedVehicle.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Target Terminal:</span>
                  <span className="font-semibold text-cyan-300">{selectedVehicle.destination}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Assigned Captain:</span>
                  <span className="font-semibold text-slate-200">{selectedVehicle.driver}</span>
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-slate-800 mt-4">
              <button
                onClick={onOpenTrackingModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/30 transition-all"
              >
                <span>Track Customer Consignment Live</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
