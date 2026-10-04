'use client';

import React from 'react';
import { Calendar, Package, Compass, CheckCircle } from 'lucide-react';

export const HowItWorksProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Book',
      description: 'Schedule your shipment online or via API in seconds with transparent instant rates.',
      icon: <Calendar className="w-6 h-6 text-cyan-400" />,
      detail: 'Auto-label generation & pickup slotting'
    },
    {
      step: '02',
      title: 'Pickup',
      description: 'Our uniformed courier or freight team collects your cargo directly from your facility.',
      icon: <Package className="w-6 h-6 text-blue-400" />,
      detail: 'Instant barcode scan & weight verification'
    },
    {
      step: '03',
      title: 'Move',
      description: 'Monitor real-time GPS telemetry, temperature sensors, and milestone updates 24/7.',
      icon: <Compass className="w-6 h-6 text-cyan-400" />,
      detail: 'Live automated sender & receiver SMS updates'
    },
    {
      step: '04',
      title: 'Deliver',
      description: 'Guaranteed safe doorstep delivery with photo & digital signature proof of delivery.',
      icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
      detail: 'Zero-friction COD & instant POD record'
    }
  ];

  return (
    <section className="py-24 bg-[#0B1120] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
            STREAMLINED WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
            From pickup to doorstep.
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-2">
            Four transparent steps engineered to eliminate shipping friction and guarantee SLA compliance.
          </p>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="bg-[#0F172A] rounded-3xl border border-blue-500/20 p-8 relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black font-mono text-gray-600 group-hover:text-cyan-400 transition-colors">
                  {item.step}
                </span>
                <div className="p-3 rounded-2xl bg-[#070B14] border border-blue-500/30">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-cyan-300">
                ✓ {item.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
