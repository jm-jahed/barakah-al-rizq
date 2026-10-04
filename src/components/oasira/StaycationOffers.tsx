'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ArrowRight } from 'lucide-react';
import { OASIRA_STAYCATIONS, OasiraStaycationOffer } from '@/data/oasiraData';

interface StaycationOffersProps {
  onBookStaycation: (offer: OasiraStaycationOffer) => void;
}

export const StaycationOffers: React.FC<StaycationOffersProps> = ({ onBookStaycation }) => {
  return (
    <section id="staycations" className="py-24 bg-[#0A2920] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4B382]/10 border border-[#D4B382]/30">
              FEATURED UAE STAYCATIONS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF6EE] mt-4">
              Why fly when paradise is here?
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Curated weekend escape packages complete with daily breakfast, resort credits, and complimentary late checkout.
            </p>
          </div>
        </div>

        {/* 4 Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OASIRA_STAYCATIONS.map((offer) => (
            <motion.div
              key={offer.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0F382C] rounded-3xl border border-stone-800 p-6 shadow-xl hover:border-[#D4B382]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-[#0A2920]">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F382C] via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#D4B382] text-black shadow-md uppercase">
                    {offer.badge}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-stone-400 block uppercase mb-1">{offer.emirate} • {offer.nights} NIGHTS</span>
                <h3 className="text-xl font-serif font-bold text-[#FAF6EE] mb-3 leading-snug">{offer.title}</h3>

                <div className="space-y-1.5 font-mono text-xs text-stone-300 mb-6">
                  {offer.includes.map((inc) => (
                    <div key={inc} className="flex items-center gap-2">
                      <span className="text-[#D4B382]">✓</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between font-mono">
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">PACKAGE PRICE</span>
                  <span className="text-xl font-bold text-[#D4B382]">AED {offer.packagePriceAED}</span>
                </div>

                <button
                  onClick={() => onBookStaycation(offer)}
                  className="px-4 py-2.5 rounded-xl bg-[#D4B382] hover:bg-[#c2a170] text-black font-serif text-xs font-bold uppercase flex items-center gap-1 shadow-md"
                >
                  <span>Book Deal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
