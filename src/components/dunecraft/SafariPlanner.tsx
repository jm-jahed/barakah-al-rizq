'use client';

import React, { useState } from 'react';
import { ArrowRight, Compass, Users, Clock, Sun } from 'lucide-react';
import { DUNECRAFT_BRAND } from '@/data/dunecraftData';

interface SafariPlannerProps {
  onOpenBookingModal: (expId?: string) => void;
}

export const SafariPlanner: React.FC<SafariPlannerProps> = ({ onOpenBookingModal }) => {
  const [safariType, setSafariType] = useState('sunset'); // sunset, vip, overnight, quad, corporate
  const [guestCount, setGuestCount] = useState(4);
  const [pickupCity, setPickupCity] = useState('Dubai');

  // Estimate safari recommendation
  const calculatePlan = () => {
    let recommendedPackage = "Red Dune Sunset Safari & Bedouin Camp";
    let pricePerPersonAED = 320;
    let totalAED = guestCount * 320;
    let inclusions = "4x4 Pickup & Drop-off, Dune Bashing, Camel Ride & BBQ Buffet";

    if (safariType === 'vip') {
      recommendedPackage = "Private VIP Royal Desert Safari";
      pricePerPersonAED = 1450;
      totalAED = guestCount * 1450;
      inclusions = "Private 4x4, VIP Pavilion, 5-Course Table Service & Falconry";
    } else if (safariType === 'overnight') {
      recommendedPackage = "Overnight Glamping & Stargazing Safari";
      pricePerPersonAED = 750;
      totalAED = guestCount * 750;
      inclusions = "AC Bedouin Tent, Campfire Oud, Stargazing & Sunrise Breakfast";
    } else if (safariType === 'quad') {
      recommendedPackage = "Extreme Dune Quad Biking & Sandboarding";
      pricePerPersonAED = 450;
      totalAED = guestCount * 450;
      inclusions = "60-Min Yamaha Quad Self-Drive, Safety Gear & Sandboarding";
    } else if (safariType === 'corporate') {
      recommendedPackage = "Corporate Private Camp Buyout";
      pricePerPersonAED = 650;
      totalAED = guestCount * 650;
      inclusions = "Full Private Camp, Team Dune Rally, Stage AV & Gala Dining";
    }

    return { recommendedPackage, pricePerPersonAED, totalAED, inclusions };
  };

  const plan = calculatePlan();

  return (
    <section id="planner" className="py-24 bg-[#2A1405] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            INTERACTIVE DESERT SAFARI PLANNER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
            Plan Your Desert Adventure
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light">
            Select your preferred safari style, guest count, and pickup city to calculate instant pricing and inclusions.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#1C0D02] border border-amber-500/30 shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-amber-400 font-mono uppercase tracking-wider border-b border-white/10 pb-3">
              1. SAFARI PARAMETERS
            </h3>

            {/* Safari Type Buttons */}
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-2 uppercase">Select Experience Style</label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'sunset', label: '🌅 Sunset Red Dune Safari' },
                  { id: 'vip', label: '👑 Private Royal VIP Safari' },
                  { id: 'overnight', label: '⛺ Overnight Glamping Camping' },
                  { id: 'quad', label: '🚜 Extreme Dune Quad Biking' },
                  { id: 'corporate', label: '👔 Corporate Event Buyout' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSafariType(item.id)}
                    className={`p-3 rounded-xl font-bold text-xs text-left transition-all font-mono leading-tight ${
                      safariType === item.id
                        ? 'bg-amber-500 text-black shadow-lg shadow-orange-950/50'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-gray-300 uppercase">Guest Count:</span>
                <span className="text-amber-400 font-extrabold text-sm">{guestCount} Guests</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Pickup City Selector */}
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-2 uppercase">Pickup Location</label>
              <div className="grid grid-cols-2 gap-3">
                {['Dubai', 'Abu Dhabi'].map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setPickupCity(city)}
                    className={`p-3 rounded-xl font-bold text-xs font-mono text-center transition-all ${
                      pickupCity === city
                        ? 'bg-amber-500 text-black shadow-md'
                        : 'bg-white/5 text-gray-300 border border-white/10'
                    }`}
                  >
                    {city} Hotel / Residence Pickup
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-[#2A1405] p-6 sm:p-8 rounded-2xl border border-amber-500/30 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-4">
                CALCULATED PACKAGE
              </span>

              <div className="mb-4">
                <span className="text-xs text-gray-400 font-mono block">RECOMMENDED EXPERIENCE</span>
                <div className="text-xl font-black text-white font-sans mt-1">
                  {plan.recommendedPackage}
                </div>
              </div>

              <div className="mb-6">
                <span className="text-xs text-gray-400 font-mono block">TOTAL ESTIMATED PRICE</span>
                <div className="text-2xl font-black text-amber-400 font-mono mt-0.5">
                  AED {plan.totalAED.toLocaleString()}
                </div>
                <span className="text-[10px] text-gray-400 font-mono">
                  (AED {plan.pricePerPersonAED} x {guestCount} guests)
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#1C0D02] border border-white/10 mb-6 space-y-2">
                <span className="text-[10px] font-mono text-gray-400 block uppercase">PACKAGE INCLUSIONS</span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {plan.inclusions}
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenBookingModal()}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold text-xs tracking-wider uppercase font-mono shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <span>CONFIRM RESERVATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};