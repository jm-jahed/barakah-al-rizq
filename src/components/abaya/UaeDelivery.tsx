'use client';

import React from 'react';
import { Truck, Clock, ShieldCheck, MapPin, Crown } from 'lucide-react';
import { ABAYA_BRAND } from '@/data/abayaData';

export const UaeDelivery: React.FC = () => {
  const routes = [
    { title: 'SAME-DAY EXPRESS', city: 'Dubai & Abu Dhabi', time: 'Orders before 1:00 PM', badge: 'Same-Day' },
    { title: '24-HOUR COURIER', city: 'Sharjah & Ajman', time: 'Next Morning Delivery', badge: '24h Express' },
    { title: 'PROMPT DELIVERY', city: 'Al Ain & Ras Al Khaimah', time: '1–2 Business Days', badge: 'All UAE' },
    { title: 'EAST COAST ROUTE', city: 'Fujairah & Umm Al Quwain', time: '1–2 Business Days', badge: 'Doorstep' },
  ];

  return (
    <section id="delivery" className="py-20 bg-[#121212] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#0A0A0A] border border-[#C5A059]/30">
            EMIRATES WIDE EXPRESS DELIVERY NETWORK
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#FAFAFA] mt-4">
            UAE Doorstep Delivery.
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-light mt-2">
            Complimentary luxury garment box packaging, matching Sheila hijabs, and 7-day home exchanges across all 7 Emirates.
          </p>
        </div>

        {/* 4 Delivery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          {routes.map((r) => (
            <div
              key={r.city}
              className="bg-[#0A0A0A] rounded-2xl border border-stone-800 p-6 flex flex-col justify-between space-y-4 hover:border-[#C5A059]/40 transition-all"
            >
              <div className="space-y-2">
                <span className="text-[10px] text-[#C5A059] font-bold px-2.5 py-1 rounded-md bg-[#121212] border border-[#C5A059]/30 inline-block">
                  {r.badge}
                </span>
                <h3 className="text-lg font-serif font-bold text-white">{r.city}</h3>
                <span className="text-stone-400 text-xs block">{r.time}</span>
              </div>

              <div className="pt-3 border-t border-stone-800 text-[10px] text-emerald-400 font-bold flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                <span>Complimentary Delivery</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
