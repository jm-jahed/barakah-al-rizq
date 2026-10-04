'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Cpu, Truck, Box, Activity, ShieldCheck, Layers, Radio } from 'lucide-react';

export const FrostvaultFloorDigitalTwin: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>('node-bay1');

  const nodes = [
    { id: 'node-dock1', name: 'Cold Ingress Dock 01', type: 'DOCK', status: 'Active (Truck Attached)', temp: '+2.1°C', x: '10%', y: '20%' },
    { id: 'node-dock2', name: 'Cold Ingress Dock 02', type: 'DOCK', status: 'Ready for Coupling', temp: '+2.0°C', x: '10%', y: '45%' },
    { id: 'node-dock3', name: 'Outbound Dispatch Dock 03', type: 'DOCK', status: 'Pre-Cooling Active', temp: '+1.8°C', x: '10%', y: '70%' },
    { id: 'node-bay1', name: 'Frozen High-Bay A1 (Racks 01–24)', type: 'RACK', status: 'AGV Shuttles Active', temp: '-24.8°C', x: '40%', y: '25%' },
    { id: 'node-bay2', name: 'Frozen High-Bay A2 (Racks 25–48)', type: 'RACK', status: 'Nominal Stacking', temp: '-25.0°C', x: '40%', y: '65%' },
    { id: 'node-chilled', name: 'Chilled Pharma Cleanroom B1', type: 'VAULT', status: 'Restricted Access Active', temp: '+2.3°C', x: '70%', y: '30%' },
    { id: 'node-control', name: 'Controlled Biological Room C1', type: 'VAULT', status: 'Laminar Airflow Optimal', temp: '+7.9°C', x: '70%', y: '70%' },
    { id: 'node-agv', name: 'AGV Automated Transit Corridor', type: 'CORRIDOR', status: '3 Shuttles in Motion', temp: 'Sub-Zero Transit', x: '55%', y: '48%' },
  ];

  const activeInfo = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <section className="py-24 bg-[#090e13] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1c2c] border border-[#1b3d5f] text-xs text-[#38bdf8] font-mono uppercase tracking-[0.25em] mb-4">
            <Radio className="w-3.5 h-3.5 text-[#38bdf8] animate-pulse" />
            <span>DIGITAL TWIN INFRASTRUCTURE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Digital Warehouse Floor Twin.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Interactive floor plan mapping racking aisles, automated guided vehicle (AGV) transit corridors, inflatable dock couplings, and multi-zone sensor nodes.
          </p>
        </div>

        {/* Floor Map Interactive Surface */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0a121c] border border-[#172d45] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 2D Digital Twin Map Canvas */}
            <div className="lg:col-span-8 relative min-h-[380px] sm:min-h-[440px] rounded-2xl bg-[#060b10] border border-[#122438] p-6 overflow-hidden flex items-center justify-center">
              {/* Floor Grid Lines */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
                  backgroundSize: '32px 32px'
                }}
              />

              {/* Floor Layout Blocks */}
              <div className="absolute inset-4 sm:inset-8 border border-dashed border-[#18314e] rounded-xl pointer-events-none">
                <div className="absolute top-2 left-2 text-[9px] font-mono text-[#64748b]">INBOUND / OUTBOUND COLD DOCKS</div>
                <div className="absolute top-2 left-1/3 text-[9px] font-mono text-[#64748b]">DEEP FROZEN AUTOMATED RACKS (ZONE A)</div>
                <div className="absolute top-2 right-4 text-[9px] font-mono text-[#64748b]">CHILLED & CONTROLLED VAULTS (ZONES B & C)</div>
              </div>

              {/* Clickable Nodes on Map */}
              {nodes.map((node) => {
                const isSelected = node.id === selectedNode;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    style={{ left: node.x, top: node.y }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-2 font-mono text-xs shadow-lg ${
                      isSelected
                        ? 'bg-[#0284c7] text-[#ffffff] border-[#38bdf8] scale-110 shadow-[0_0_25px_rgba(56,189,248,0.5)] z-20'
                        : 'bg-[#0b1826]/90 text-[#94a3b8] border-[#183452] hover:border-[#38bdf8] hover:text-[#f8fafc] z-10'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#ffffff] animate-ping' : 'bg-[#38bdf8]'}`} />
                    <span className="hidden sm:inline font-bold text-[11px]">{node.name.split(' (')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Telemetry Sidebar */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0c1724] border border-[#1c395c] space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#38bdf8] font-bold uppercase tracking-wider">
                  Node Telemetry Stream
                </span>
                <span className="px-2 py-0.5 rounded bg-[#08121c] text-[#4ade80] text-[10px]">
                  LIVE LINK
                </span>
              </div>

              <h4 className="text-xl font-bold text-[#f8fafc]">
                {activeInfo.name}
              </h4>

              <div className="p-4 rounded-xl bg-[#081018] border border-[#14263a] space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Element Type:</span>
                  <span className="text-[#38bdf8]">{activeInfo.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Real-Time Status:</span>
                  <span className="text-[#f8fafc]">{activeInfo.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Zone Temperature:</span>
                  <span className="text-[#4ade80] font-bold">{activeInfo.temp}</span>
                </div>
              </div>

              <p className="text-[11px] text-[#94a3b8] font-light leading-relaxed">
                Autonomous motion telemetry reports real-time pallet slotting, AGV coordinates, and thermal seal integrity for this sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
