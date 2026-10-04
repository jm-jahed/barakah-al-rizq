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
  const marqueeItems = [...displayItems, ...displayItems, ...displayItems];

  return (
    <section className="py-10 bg-gradient-to-b from-[#F2F7F3] via-[#F8FAF8] to-[#F2F7F3] border-b border-emerald-100 text-[#111827] relative overflow-hidden font-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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

      {/* Auto-Scroll Marquee Container */}
      <div 
        className="w-full overflow-hidden relative cursor-grab active:cursor-grabbing py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        aria-label="Live Market Price Ticker"
      >
        <motion.div
          className="flex gap-4 sm:gap-5 w-max"
          animate={{ x: (isPaused || shouldReduceMotion) ? undefined : ['0%', '-33.333%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 55,
              ease: 'linear',
            },
          }}
        >
          {marqueeItems.map((prod, index) => {
            const isUp = prod.trend === 'UP';
            const isDown = prod.trend === 'DOWN';

            return (
              <div
                key={`${prod.id}-${index}`}
                onClick={() => onSelectProduct && onSelectProduct(prod)}
                className="w-[210px] sm:w-[240px] md:w-[260px] shrink-0 p-4 rounded-3xl bg-white border border-emerald-200 shadow-md hover:border-emerald-400 transition-all hover:scale-[1.03] group font-sans flex flex-col justify-between"
              >
                <div>
                  {/* Top Image & Category Tag */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black mb-3 border border-gray-100 shadow-inner">
                    <img
                      src={prod.image}
                      alt={prod.productName}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-amber-300 font-mono text-[9px] font-bold">
                      {prod.category}
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full font-mono text-[9px] font-bold shadow-sm bg-emerald-700 text-white">
                      <span>{prod.freshnessLabel}</span>
                    </div>
                  </div>

                  {/* Product Name & Arabic */}
                  <span className="text-[10px] font-mono text-emerald-800 font-semibold block mb-0.5 truncate">
                    {prod.productArabicName}
                  </span>
                  
                  <h4 className="text-xs font-bold text-[#063D24] truncate font-sans group-hover:text-amber-600 transition-colors">
                    {prod.productName}
                  </h4>
                </div>

                {/* Pricing & Change Indicator */}
                <div className="pt-3 border-t border-gray-100 mt-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      {prod.priceAED !== null ? (
                        <>
                          <span className="text-base sm:text-lg font-black text-[#063D24] font-mono block leading-tight">
                            AED {prod.priceAED.toFixed(2)}
                          </span>
                          <span className="text-[9px] font-mono text-gray-500 block">/ {prod.packagingUnit}</span>
                        </>
                      ) : (
                        <span className="text-xs font-bold text-amber-700 font-mono block">
                          PRICE ON REQUEST
                        </span>
                      )}
                    </div>

                    {prod.trend ? (
                      <span className={`inline-flex items-center gap-0.5 text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg ${
                        isUp 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                          : isDown 
                            ? 'bg-red-50 text-red-700 border border-red-300'
                            : 'bg-gray-50 text-gray-700 border border-gray-300'
                      }`}>
                        {isUp ? <TrendingUp className="w-3 h-3" /> : isDown ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
                        <span>{prod.changePercent !== null ? (isUp ? `+${prod.changePercent}%` : `${prod.changePercent}%`) : '0%'}</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-400">SPOT</span>
                    )}
                  </div>

                  <div className="text-[9px] font-mono text-gray-500 mt-2 flex items-center justify-between">
                    <span className="truncate max-w-[100px]">{prod.origin}</span>
                    <span>{prod.lastUpdatedUAE.split(',')[0]}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};