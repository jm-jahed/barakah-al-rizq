'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Truck, CheckCircle2, Clock, AlertTriangle, Search, Filter, MapPin, User, ArrowUpRight, Compass } from 'lucide-react';
import { MOCK_TRACKING_DATABASE, ShipmentRecord } from '@/data/logisticsData';

interface LiveDeliveryDashboardProps {
  onSelectShipment: (shipment: ShipmentRecord) => void;
}

export const LiveDeliveryDashboard: React.FC<LiveDeliveryDashboardProps> = ({ onSelectShipment }) => {
  const [filterTab, setFilterTab] = useState<'All' | 'In Transit' | 'Out for Delivery' | 'Delivered'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const shipmentList = Object.values(MOCK_TRACKING_DATABASE);

  const filteredShipments = shipmentList.filter((s) => {
    if (filterTab !== 'All' && s.status !== filterTab) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchId = s.trackingId.toLowerCase().includes(q);
      const matchSender = s.sender.toLowerCase().includes(q);
      const matchDest = s.destination.toLowerCase().includes(q);
      if (!matchId && !matchSender && !matchDest) return false;
    }
    return true;
  });

  return (
    <section id="dashboard" className="py-24 bg-[#070B14] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              REAL-TIME FLEET TELEMETRY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              Complete visibility. One platform.
            </h2>
            <p className="text-base text-gray-400 mt-2 max-w-xl">
              Inspect active fleet telemetry, driver location feeds, and shipment status milestones across all operational nodes.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              SYSTEM ONLINE — 4,500+ NODES
            </span>
          </div>
        </div>

        {/* Dashboard Top Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-2xl bg-[#0F172A] border border-blue-500/30 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase block mb-1">TOTAL SHIPMENTS</span>
              <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono">1,284</span>
              <span className="text-[10px] font-mono text-emerald-400 mt-1 block">↑ 12% vs yesterday</span>
            </div>
            <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400">
              <LayoutDashboard className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F172A] border border-blue-500/30 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase block mb-1">IN TRANSIT</span>
              <span className="text-2xl sm:text-4xl font-extrabold text-cyan-300 font-mono">438</span>
              <span className="text-[10px] font-mono text-cyan-400 mt-1 block">Live GPS Telemetry</span>
            </div>
            <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Truck className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F172A] border border-blue-500/30 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase block mb-1">DELIVERED TODAY</span>
              <span className="text-2xl sm:text-4xl font-extrabold text-emerald-400 font-mono">812</span>
              <span className="text-[10px] font-mono text-emerald-400 mt-1 block">100% POD Verified</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F172A] border border-blue-500/30 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase block mb-1">WEATHER DELAYS</span>
              <span className="text-2xl sm:text-4xl font-extrabold text-amber-400 font-mono">34</span>
              <span className="text-[10px] font-mono text-amber-400 mt-1 block">Rerouted via E311</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Dashboard Main Console Card */}
        <div className="bg-[#0F172A] rounded-3xl border border-blue-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden">
          
          {/* Controls Bar: Filters & Search */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-[#070B14] p-1.5 rounded-xl border border-white/10 w-full sm:w-auto overflow-x-auto">
              {(['All', 'In Transit', 'Out for Delivery', 'Delivered'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilterTab(tab)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all ${
                    filterTab === tab
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ID, sender, city..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#070B14] border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
              />
            </div>
          </div>

          {/* Interactive Shipments Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[11px] font-mono text-gray-400 uppercase tracking-wider bg-[#070B14]">
                  <th className="py-3.5 px-4 font-bold">TRACKING ID</th>
                  <th className="py-3.5 px-4 font-bold">ROUTE (ORIGIN → DEST)</th>
                  <th className="py-3.5 px-4 font-bold">TELEMETRY STATUS</th>
                  <th className="py-3.5 px-4 font-bold">ESTIMATED ETA</th>
                  <th className="py-3.5 px-4 font-bold">DRIVER / CARRIER</th>
                  <th className="py-3.5 px-4 font-bold text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs font-mono">
                {filteredShipments.map((s) => (
                  <tr key={s.trackingId} className="hover:bg-blue-500/5 transition-colors group">
                    <td className="py-4 px-4 font-bold text-cyan-300">
                      {s.trackingId}
                      <span className="text-[10px] text-gray-400 block font-normal">{s.packageType}</span>
                    </td>
                    <td className="py-4 px-4 text-gray-200">
                      <div className="flex items-center gap-1.5">
                        <span>{s.origin.split(',')[0]}</span>
                        <span className="text-cyan-400">→</span>
                        <span className="font-bold text-white">{s.destination.split(',')[0]}</span>
                      </div>
                      <span className="text-[10px] text-gray-400 block">{s.currentLocation}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          s.status === 'Delivered'
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : s.status === 'Out for Delivery'
                            ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                            : 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {s.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-white font-bold">{s.estimatedDelivery}</td>
                    <td className="py-4 px-4 text-gray-300">
                      <div>{s.carrier}</div>
                      {s.driverName && <span className="text-[10px] text-cyan-400 block">Driver: {s.driverName}</span>}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => onSelectShipment(s)}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-blue-600 hover:text-white border border-white/10 text-gray-300 font-bold transition-all text-[11px] inline-flex items-center gap-1"
                      >
                        <span>Inspect Telemetry</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
};
