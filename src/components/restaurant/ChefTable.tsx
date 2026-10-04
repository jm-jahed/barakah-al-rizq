'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, CheckCircle2, Calendar } from 'lucide-react';

interface ChefTableProps {
  onOpenReservation: () => void;
}

export const ChefTable: React.FC<ChefTableProps> = ({ onOpenReservation }) => {
  const courses = [
    { num: "01", title: "Truffle Chickpea Amuse-Bouche", detail: "Crispy chickpea sphere with black truffle essence." },
    { num: "02", title: "Flame-Roasted Eggplant Moutabal", detail: "Smoked aubergine whipped with tahini & pomegranate arils." },
    { num: "03", title: "Charred Tiger Prawn with Harissa", detail: "Jumbo Gulf prawn with spicy North African harissa butter." },
    { num: "04", title: "24K Gold Wagyu Kebabs", detail: "M9+ Australian Wagyu charred over oak coals with gold dust." },
    { num: "05", title: "Smoked Lamb Shank Mandi", detail: "Slow-roasted milk-fed lamb shank over cardamom rice." },
    { num: "06", title: "Signature Pistachio Kunafa", detail: "Golden kataifi pastry with rose gelato & orange syrup." },
    { num: "07", title: "Traditional Cardamom Dallah", detail: "Arabian coffee brewed with cardamom, served with Medjool dates." }
  ];

  return (
    <section className="py-24 bg-[#0A0D14] border-b border-amber-500/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            OPEN-KITCHEN TASTING EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mt-4 mb-4">
            7-Course Chef's Tasting Menu.
          </h2>
          <p className="text-base text-gray-400">
            An intimate open-kitchen culinary journey crafted by Executive Chef Omar Rahman.
          </p>
        </div>

        <div className="rounded-3xl bg-[#10141C] border border-amber-500/30 p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase">TASTING MENU PRICING</span>
              <div className="text-3xl font-extrabold text-white font-serif">
                AED 295 <span className="text-xs font-mono text-gray-400 font-normal">/ Per Guest</span>
              </div>
            </div>

            <button
              onClick={onOpenReservation}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg"
            >
              Reserve Chef's Table →
            </button>
          </div>

          {/* 7 Courses List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {courses.map((c) => (
              <div
                key={c.num}
                className="p-4 rounded-2xl bg-[#161D27] border border-white/10 flex items-start gap-3"
              >
                <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {c.num}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">{c.title}</h4>
                  <p className="text-xs text-gray-400 leading-normal font-sans mt-0.5">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-xs font-mono text-amber-400/80 pt-2">
            Sample Pricing — Concept Tasting Menu #12
          </div>
        </div>
      </div>
    </section>
  );
};
