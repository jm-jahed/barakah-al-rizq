'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ShieldCheck, PhoneCall } from 'lucide-react';
import { RESTAURANT_BRAND_INFO } from '@/data/restaurantData';

export const RestaurantLocation: React.FC = () => {
  return (
    <section className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              LOCATION & VALET PARKING
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif leading-tight">
              DIFC Gate Village.
            </h2>

            <p className="text-base text-gray-300 leading-relaxed font-serif italic">
              "Located on the Podium Level of Building 03 in Dubai International Financial Centre."
            </p>

            <div className="space-y-3 font-mono text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Address:</strong>
                  <span>{RESTAURANT_BRAND_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Operating Hours:</strong>
                  <p>Lunch: {RESTAURANT_BRAND_INFO.hours.lunch}</p>
                  <p>Dinner: {RESTAURANT_BRAND_INFO.hours.dinner}</p>
                  <p className="text-amber-300">Weekend: {RESTAURANT_BRAND_INFO.hours.weekend}</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#10141C] border border-white/10 text-xs font-mono text-gray-300 space-y-1">
              <span className="text-emerald-400 font-bold block">COMPLIMENTARY VALET PARKING:</span>
              <p>Valet service available at Building 03 entrance for all dining guests.</p>
            </div>

            <div className="text-[10px] font-mono text-amber-400/80">
              Sample Location — Concept Project Build #12
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-4 rounded-3xl bg-[#10141C] border border-amber-500/30 overflow-hidden shadow-2xl relative">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-black border border-white/10 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                  alt="DIFC Location Map Placeholder"
                  className="w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl bg-black/90 backdrop-blur-md border border-amber-400 text-center shadow-2xl">
                  <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-1" />
                  <span className="text-xs font-bold text-white font-serif block">AL-MAJLIS DIFC</span>
                  <span className="text-[10px] font-mono text-amber-300">Gate Village Building 03</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
