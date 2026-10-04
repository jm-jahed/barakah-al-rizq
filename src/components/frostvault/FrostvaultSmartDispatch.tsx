'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle2, Clock, Thermometer, ShieldCheck, ArrowRight } from 'lucide-react';

export const FrostvaultSmartDispatch: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'STAGED' | 'IN_TRANSIT' | 'COMPLETED'>('STAGED');

  const dispatchOrders = [
    {
      id: 'DISP-8801',
      client: 'Emirates Healthcare Supply',
      product: 'NovaVax Pediatric Vaccine Ampoules (5 Pallets)',
      tempCondition: '+3.0°C Core Verified',
      dock: 'Cold Outbound Dock 03',
      reeferVehicle: 'Reefer Truck #DXB-9021',
      status: 'Dispatch Ready',
      eta: '18 Min to Departure',
      step: 'Ready for Seal'
    },
    {
      id: 'DISP-8802',
      client: 'Luxury Hospitality Butchery',
      product: 'PrimeCuts Angus Tenderloin (9 Pallets)',
      tempCondition: '-22.4°C Core Verified',
      dock: 'Frozen Bay 01',
      reeferVehicle: 'Heavy Reefer #AUH-4410',
      status: 'Loading in Progress',
      eta: '45 Min to Departure',
      step: 'Pallet 7 of 9 Loaded'
    },
    {
      id: 'DISP-8803',
      client: 'Gulf Gourmet Distribution',
      product: 'PureVale Organic Greek Yogurt (12 Pallets)',
      tempCondition: '+3.1°C Core Verified',
      dock: 'Cold Outbound Dock 04',
      reeferVehicle: 'Reefer Truck #DXB-1188',
      status: 'Staged in Airlock',
      eta: '60 Min to Departure',
      step: 'Quality Check Complete'
    }
  ];

  return (
    <section className="py-24 bg-[#070b0e] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
              OUTBOUND COLD DISTRIBUTION
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc]">
              Smart Dispatch Staging.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#94a3b8] font-light max-w-md mt-4 md:mt-0">
            Real-time outbound coordination verifying core product temperatures, dock airlock sealing, and calibrated reefer transport telematics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dispatchOrders.map((order, idx) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-[#0a121c] border border-[#162e48] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#38bdf8]">{order.id}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0284c7]/20 border border-[#0284c7]/40 text-[10px] font-mono font-bold text-[#38bdf8]">
                    {order.status}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#64748b] mb-1">
                  {order.client}
                </div>
                <h3 className="text-base font-bold text-[#f8fafc] mb-4">
                  {order.product}
                </h3>

                <div className="space-y-2 p-3.5 rounded-xl bg-[#081018] border border-[#14263a] font-mono text-xs mb-4">
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Core Temp:</span>
                    <strong className="text-[#4ade80]">{order.tempCondition}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Dock Bay:</span>
                    <span className="text-[#cbd5e1]">{order.dock}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Vehicle:</span>
                    <span className="text-[#cbd5e1]">{order.reeferVehicle}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#13253a] flex items-center justify-between text-xs font-mono">
                <span className="text-[#f59e0b] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {order.eta}
                </span>
                <span className="text-[#38bdf8] font-bold">{order.step}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
