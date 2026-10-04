'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Search, CheckCircle2, Clock, Truck, ShieldCheck, Printer, FileText } from 'lucide-react';
import { PRESSORA_DEMO_ORDERS } from '@/data/pressoraData';

export const PressoraOrderTracker: React.FC = () => {
  const [activeTracking, setActiveTracking] = useState<string>('TRK-DXB-88019');

  const trackingStages = [
    { title: 'Order Received', desc: 'Job file registered in production queue' },
    { title: 'Artwork Review', desc: 'Prepress automated preflight & color separation' },
    { title: 'Prepress CTP', desc: 'Thermal CTP aluminum plates laser exposed' },
    { title: 'Printing Run', desc: 'Heidelberg 4-color press impression run' },
    { title: 'Finishing & Foil', desc: 'Velvet lamination, spot UV, or foil stamping' },
    { title: 'Quality Check', desc: 'Spectrophotometer Delta-E & guillotine cut' },
    { title: 'Packed in Shield', desc: 'Shrink-wrapped in moisture-barrier cartons' },
    { title: 'Out for Courier', desc: 'Handed to express temperature-controlled courier' },
    { title: 'Delivered', desc: 'Signed on delivery at client destination' },
  ];

  const currentOrder =
    PRESSORA_DEMO_ORDERS.find((o) => o.trackingNumber === activeTracking) ||
    PRESSORA_DEMO_ORDERS[0];

  return (
    <section className="py-24 bg-[#080b0f] text-[#f8fafc] px-4 sm:px-6 lg:px-8 border-t border-[#1a2536]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
            TRANSPARENT PRODUCTION TRACKING
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Your Print, in Motion.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Track your job through nine discrete production milestones from automated prepress file ripping to courier dispatch.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-[#0d131e] border border-[#1b2d42] shadow-2xl space-y-8 font-mono">
          {/* Order Header Summary */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#18293e]">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#38bdf8]">
                <Package className="w-4 h-4" />
                <span>TRACKING: {currentOrder.trackingNumber}</span>
              </div>
              <h3 className="text-xl font-bold font-sans text-[#f8fafc] mt-1">
                {currentOrder.product}
              </h3>
              <p className="text-xs text-[#64748b]">
                Client: {currentOrder.client} · {currentOrder.configSummary}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#091018] border border-[#152538] text-right">
              <span className="text-[10px] text-[#64748b] uppercase">Current Machine State</span>
              <div className="text-sm font-bold text-[#4ade80]">{currentOrder.stage}</div>
              <div className="text-[10px] text-[#38bdf8] mt-0.5">Est: {currentOrder.estDelivery}</div>
            </div>
          </div>

          {/* 9-Stage Progress Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {trackingStages.map((stage, idx) => {
              const isPast = idx <= 3;
              const isCurrent = idx === 4;

              return (
                <div
                  key={stage.title}
                  className={`p-3.5 rounded-xl border flex flex-col justify-between min-h-[110px] text-left transition-all ${
                    isCurrent
                      ? 'bg-[#122238] border-[#38bdf8] text-[#f8fafc] shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                      : isPast
                      ? 'bg-[#0a111a] border-[#152a40] text-[#cbd5e1]'
                      : 'bg-[#070b10] border-[#121f2f] text-[#475569]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold">0{idx + 1}</span>
                    {isPast ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4ade80]" />
                    ) : isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-[#334155]" />
                    )}
                  </div>

                  <div>
                    <div className="text-[11px] font-bold mt-2 font-sans">{stage.title}</div>
                    <div className="text-[9px] text-[#64748b] leading-tight mt-0.5">{stage.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
