'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Clock } from 'lucide-react';
import { MarketPriceItem } from './MarketPriceDashboard';

interface LivePriceTickerProps {
  items: MarketPriceItem[];
  onSelectProduct?: (product: MarketPriceItem) => void;
  activeSession?: string;
  lastSyncUAE?: string;
}

export const LivePriceTicker: React.FC<LivePriceTickerProps> = ({ 
  items, 
  onSelectProduct,
  activeSession,
  lastSyncUAE
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // If items empty or small, guard
  const displayItems = items.length > 0 ? items : [];

  // Split items into 2 rows for the dual-line alternating flow
  const row1Base = displayItems.length > 4 
    ? displayItems.filter((_, idx) => idx % 2 === 0) 
    : displayItems;
  const row2Base = displayItems.length > 4 
    ? displayItems.filter((_, idx) => idx % 2 !== 0) 
    : (displayItems.length > 0 ? [...displayItems].reverse() : []);

  // Duplicate 4x for a perfectly smooth, seamless -50% loop
  const marqueeRow1 = [...row1Base, ...row1Base, ...row1Base, ...row1Base];
  const marqueeRow2 = [...row2Base, ...row2Base, ...row2Base, ...row2Base];

  const renderCard = (prod: MarketPriceItem, keyId: string) => {
    const isUp = prod.trend === 'UP';
    const isDown = prod.trend === 'DOWN';

    return (
      <div
        key={keyId}
        onClick={() => onSelectProduct && onSelectProduct(prod)}
        className="w-[170px] sm:w-[190px] md:w-[210px] shrink-0 p-2.5 sm:p-3 rounded-2xl bg-white border border-emerald-200/90 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer group font-sans flex flex-col justify-between"
      >
        <div>
          {/* Top Image & Category Tag */}
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 mb-2 border border-gray-100 shadow-inner">
            <img
              src={prod.image || 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop'}
              alt={prod.productName}
              loading="lazy"
              onError={(e) => {
                // Fallback if image fails to load
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop';
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-amber-300 font-mono text-[8px] font-bold">
              {prod.category}
            </div>
            <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-full font-mono text-[8px] font-bold shadow-xs bg-emerald-700/95 text-white">
              <span>{prod.freshnessLabel}</span>
            </div>
          </div>

          {/* Product Name & Arabic */}
          <span className="text-[9px] font-mono text-emerald-800 font-semibold block mb-0.5 truncate">
            {prod.productArabicName}
          </span>
          
          <h4 className="text-[11.5px] sm:text-xs font-bold text-[#063D24] truncate font-sans group-hover:text-amber-600 transition-colors">
            {prod.productName}
          </h4>
        </div>

        {/* Pricing & Change Indicator */}
        <div className="pt-2 border-t border-gray-100 mt-2">
          <div className="flex items-baseline justify-between gap-1">
            <div>
              {prod.priceAED !== null ? (
                <div className="flex items-baseline gap-1">
                  <span className="text-sm sm:text-base font-black text-[#063D24] font-mono leading-tight">
                    AED {prod.priceAED.toFixed(2)}
                  </span>
                  <span className="text-[8.5px] font-mono text-gray-500">/ {prod.packagingUnit}</span>
                </div>
              ) : (
                <span className="text-[10px] font-bold text-amber-700 font-mono block">
                  PRICE ON REQ
                </span>
              )}
            </div>

            {prod.trend ? (
              <span className={`inline-flex items-center gap-0.5 text-[8.5px] font-mono font-bold px-1.5 py-0.5 rounded-md shrink-0 ${
                isUp 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                  : isDown 
                    ? 'bg-red-50 text-red-700 border border-red-300'
                    : 'bg-gray-50 text-gray-700 border border-gray-300'
              }`}>
                {isUp ? <TrendingUp className="w-2.5 h-2.5" /> : isDown ? <TrendingDown className="w-2.5 h-2.5" /> : <Minus className="w-2.5 h-2.5" />}
                <span>{prod.changePercent !== null ? (isUp ? `+${prod.changePercent}%` : `${prod.changePercent}%`) : '0%'}</span>
              </span>
            ) : (
              <span className="text-[8.5px] font-mono text-slate-400">SPOT</span>
            )}
          </div>

          <div className="text-[8.5px] font-mono text-gray-500 mt-1.5 flex items-center justify-between">
            <span className="truncate max-w-[85px]">{prod.origin}</span>
            <span>{prod.lastUpdatedUAE.split(',')[0]}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-b from-[#F2F7F3] via-[#F8FAF8] to-[#F2F7F3] border-b border-emerald-100 text-[#111827] relative overflow-hidden font-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-600 animate-ping shrink-0" />
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#063D24] tracking-tight flex items-center gap-2.5">
              <span>● LIVE MARKET TICKER</span>
              <span className="text-[10px] font-mono text-emerald-900 font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 uppercase">
                {activeSession || 'AL AWEER'} SESSION FEED
              </span>
            </h3>
            <p className="text-xs text-gray-600 font-light mt-0.5">
              Daily wholesale spot quotations from Al Aweer Central Market, Ras Al Khor, Dubai • Hover to pause
            </p>
          </div>
        </div>

        <div className="text-xs font-mono text-emerald-900 bg-white px-3.5 py-1.5 rounded-xl border border-emerald-200 flex items-center gap-2 shadow-sm shrink-0">
          <Clock className="w-3.5 h-3.5 text-emerald-700" />
          <span>Verified: <strong>{lastSyncUAE || 'Today'}</strong></span>
        </div>
      </div>

      {/* 2-Line Moving Container */}
      <div 
        className="w-full overflow-hidden relative cursor-grab active:cursor-grabbing space-y-3 sm:space-y-3.5 py-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        aria-label="Live Market Price Ticker"
      >
        {/* Line 1: Moves Left to Right */}
        <motion.div
          className="flex gap-3 sm:gap-3.5 w-max"
          animate={{ x: (isPaused || shouldReduceMotion) ? undefined : ['-50%', '0%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 48,
              ease: 'linear',
            },
          }}
        >
          {marqueeRow1.map((prod, index) => renderCard(prod, `row1-${prod.id}-${index}`))}
        </motion.div>

        {/* Line 2: Moves Right to Left */}
        <motion.div
          className="flex gap-3 sm:gap-3.5 w-max"
          animate={{ x: (isPaused || shouldReduceMotion) ? undefined : ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 48,
              ease: 'linear',
            },
          }}
        >
          {marqueeRow2.map((prod, index) => renderCard(prod, `row2-${prod.id}-${index}`))}
        </motion.div>
      </div>
    </section>
  );
};