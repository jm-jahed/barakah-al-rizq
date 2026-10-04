'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Thermometer, ShieldAlert, Cpu, Box, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

export const FrostvaultOperationsCenter: React.FC = () => {
  const kpis = [
    {
      label: 'Facility Mean Temp',
      value: '+2.4°C',
      sub: 'All Zones Calibrated (±0.2°C)',
      icon: Thermometer,
      tone: 'text-[#38bdf8]',
      badge: 'STABLE'
    },
    {
      label: 'Warehouse Occupancy',
      value: '78%',
      sub: '16,081 / 25,000 Pallets',
      icon: Layers,
      tone: 'text-[#f8fafc]',
      badge: 'OPTIMAL'
    },
    {
      label: 'Active Storage Zones',
      value: '12',
      sub: '4 Master Chambers + 8 Buffer Vaults',
      icon: Box,
      tone: 'text-[#f8fafc]',
      badge: 'ONLINE'
    },
    {
      label: 'Inventory Units',
      value: '24,680',
      sub: 'SKU Lots Tracked in WMS',
      icon: TrendingUp,
      tone: 'text-[#38bdf8]',
      badge: 'ACTIVE'
    },
    {
      label: 'Sensors Online',
      value: '98 / 100',
      sub: '98% Mesh Coverage Active',
      icon: Cpu,
      tone: 'text-[#4ade80]',
      badge: '98% PING'
    },
    {
      label: 'Active System Alerts',
      value: '02',
      sub: '1 Acknowledged · 1 In Action',
      icon: ShieldAlert,
      tone: 'text-[#f59e0b]',
      badge: 'ATTENTION'
    },
  ];

  return (
    <section className="py-24 bg-[#090e13] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1c2b] border border-[#1b3b5c] text-xs text-[#38bdf8] font-mono uppercase tracking-widest mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>LIVE OPERATIONS SIMULATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f8fafc]">
              Cold Chain Operations Center.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-[#64748b] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
            <span>Telemetry Pipeline: <strong className="text-[#cbd5e1] font-normal">Real-Time WebSocket Link Active</strong></span>
          </div>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#0c1622] border border-[#182f48] hover:border-[#38bdf8]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#08111a] text-[#38bdf8] border border-[#15273b]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#08121c] border border-[#18304a] text-[#94a3b8]">
                    {kpi.badge}
                  </span>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#64748b]">
                    {kpi.label}
                  </div>
                  <div className={`text-3xl sm:text-4xl font-mono font-bold mt-1 ${kpi.tone}`}>
                    {kpi.value}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#14263b] text-xs font-mono text-[#94a3b8]">
                  {kpi.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
