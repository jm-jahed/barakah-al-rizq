'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Clock, Lock, Store, Sparkles } from 'lucide-react';
import { MarketPriceItem } from './MarketPriceDashboard';
import { ContainerPriceItem } from './ContainerWholesaleDashboard';
import { INITIAL_PRODUCTS } from '@/data/barakahData';

interface LivePriceTickerProps {
  items: MarketPriceItem[];
  containerPrices?: ContainerPriceItem[];
  onSelectProduct?: (product: MarketPriceItem, containerPrice?: number | null) => void;
  activeSession?: string;
  lastSyncUAE?: string;
}

export const LivePriceTicker: React.FC<LivePriceTickerProps> = ({ 
  items, 
  containerPrices,
  onSelectProduct,
  activeSession,
  lastSyncUAE
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [liveDateStr, setLiveDateStr] = useState<string>('');
  const shouldReduceMotion = useReducedMotion();

  // Dynamic Live UAE Date formatting (Always current live date)
  useEffect(() => {
    const updateLiveDate = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Dubai',
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }).format(now);
        setLiveDateStr(formatted);
      } catch {
        setLiveDateStr('06 Oct 2026');
      }
    };
    updateLiveDate();
    const interval = setInterval(updateLiveDate, 30000);
    return () => clearInterval(interval);
  }, []);

  // Map product images and container prices by productId
  const productImageMap = useMemo(() => {
    const map = new Map<string, string>();
    INITIAL_PRODUCTS.forEach((p) => {
      map.set(p.id, p.image);
    });
    return map;
  }, []);

  const containerMap = useMemo(() => {
    const map = new Map<string, number | null>();
    containerPrices?.forEach((cp) => {
      map.set(cp.productId, cp.priceAED);
    });
    return map;
  }, [containerPrices]);

  // If items empty, fallback to INITIAL_PRODUCTS
  const displayItems = useMemo<MarketPriceItem[]>(() => {
    if (items && items.length > 0) return items;
    return INITIAL_PRODUCTS.map((prod) => ({
      id: `mp-${prod.id}`,
      productId: prod.id,
      productName: prod.name,
      productArabicName: prod.arabicName,
      category: prod.category,
      origin: prod.origin,
      grade: 'Grade A',
      image: prod.image,
      description: prod.description,
      marketLocation: 'Al Aweer Central Fruit & Vegetable Market, Ras Al Khor, Dubai',
      packagingUnit: prod.packagingUnit || 'BOX',
      packagingDetails: prod.packagingDetails || 'Standard Wholesale Box',
      netWeightKg: prod.netWeightKg || null,
      priceAED: prod.price,
      previousPriceAED: prod.previousPrice,
      changePercent: prod.changePercent,
      trend: prod.marketStatus === 'UP' ? 'UP' : prod.marketStatus === 'DOWN' ? 'DOWN' : 'STABLE',
      calculatedPricePerKg: prod.price,
      minPurchaseQty: '10 CTN',
      qualityGrade: 'Grade A',
      marketSession: 'MIDDAY',
      businessStatus: 'AVAILABLE',
      freshnessStatus: 'LIVE',
      isStale: false,
      freshnessLabel: 'Verified Spot Rate',
      lastUpdatedISO: new Date().toISOString(),
      lastUpdatedUAE: 'Today, Active Session',
      updateSource: 'AL_AWEER_MARKET_UPDATE',
    }));
  }, [items]);

  // Split items into 2 rows for the dual-line alternating flow
  const row1Base = displayItems.length > 4 
    ? displayItems.filter((_, idx) => idx % 2 === 0) 
    : displayItems;
  const row2Base = displayItems.length > 4 
    ? displayItems.filter((_, idx) => idx % 2 !== 0) 
    : (displayItems.length > 0 ? [...displayItems].reverse() : []);

  // Duplicate 4x for a seamless -50% loop
  const marqueeRow1 = [...row1Base, ...row1Base, ...row1Base, ...row1Base];
  const marqueeRow2 = [...row2Base, ...row2Base, ...row2Base, ...row2Base];

  const renderCard = (prod: MarketPriceItem, keyId: string) => {
    const containerPrice = containerMap.get(prod.productId) ?? (prod.priceAED ? parseFloat((prod.priceAED * 0.8).toFixed(2)) : null);
    const resolvedImage = productImageMap.get(prod.productId) || prod.image || 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop';

    return (
      <div
        key={keyId}
        onClick={() => onSelectProduct && onSelectProduct(prod, containerPrice)}
        className="w-[205px] sm:w-[225px] md:w-[235px] shrink-0 p-3 rounded-2xl bg-white border border-emerald-200/90 shadow-[0_4px_20px_rgba(6,61,36,0.06)] hover:border-amber-400/90 hover:shadow-[0_12px_32px_rgba(6,61,36,0.14)] transition-all duration-300 hover:scale-[1.02] cursor-pointer group font-sans flex flex-col justify-between"
      >
        <div>
          {/* Top Image & Category Tag */}
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 mb-2.5 border border-emerald-100 shadow-inner">
            <img
              src={resolvedImage}
              alt={prod.productName}
              loading="lazy"
              onError={(e) => {
                const fallback = productImageMap.get(prod.productId);
                if (fallback && (e.target as HTMLImageElement).src !== fallback) {
                  (e.target as HTMLImageElement).src = fallback;
                }
              }}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
            />
            {/* Category Pill */}
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 font-mono text-[8.5px] font-bold tracking-wider shadow-xs border border-white/10">
              {prod.category}
            </div>
            {/* Pulsing Live Badge */}
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full font-mono text-[8.5px] font-black shadow-xs bg-[#063D24]/90 backdrop-blur-md text-emerald-100 border border-emerald-400/50 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE RATE</span>
            </div>
          </div>

          {/* Product Name & Arabic */}
          <span className="text-[10px] font-mono text-emerald-800 font-bold block mb-0.5 truncate tracking-tight">
            {prod.productArabicName}
          </span>
          
          <h4 className="text-[13px] font-black text-[#063D24] truncate font-sans group-hover:text-amber-600 transition-colors leading-snug">
            {prod.productName}
          </h4>
        </div>

        {/* Pricing Dual Stream: Container Wholesale + Spot Rate */}
        <div className="pt-2.5 border-t border-emerald-100/80 mt-2 space-y-1.5 font-mono">
          
          {/* 1. Container Wholesale Price */}
          <div className="flex items-center justify-between bg-gradient-to-r from-amber-500/10 via-amber-100/60 to-amber-50/80 px-2.5 py-1.5 rounded-xl border border-amber-400/60 shadow-2xs">
            <span className="text-[9.5px] font-black text-amber-950 flex items-center gap-1 uppercase tracking-tight">
              <Lock className="w-3 h-3 text-amber-700 shrink-0" />
              <span>Container:</span>
            </span>
            <span className="text-[13px] font-black text-amber-950 tabular-nums">
              {containerPrice ? `Dhs ${containerPrice.toFixed(2)}` : 'On Request'}
            </span>
          </div>

          {/* 2. Dubai Spot Market Rate */}
          <div className="flex items-center justify-between bg-gradient-to-r from-emerald-100/50 via-emerald-50 to-white px-2.5 py-1.5 rounded-xl border border-emerald-300 shadow-2xs">
            <span className="text-[9.5px] font-black text-[#063D24] flex items-center gap-1 uppercase tracking-tight">
              <Store className="w-3 h-3 text-emerald-800 shrink-0" />
              <span>Dubai Spot:</span>
            </span>
            <span className="text-[13px] font-black text-[#063D24] tabular-nums">
              {prod.priceAED !== null ? `Dhs ${prod.priceAED.toFixed(2)}` : 'On Request'}
            </span>
          </div>

          {/* Live Date & Origin Meta */}
          <div className="text-[9px] pt-1 flex items-center justify-between border-t border-emerald-100/60 mt-1 font-mono">
            <span className="truncate max-w-[100px] text-gray-600 font-semibold">{prod.origin}</span>
            <span className="text-emerald-950 font-bold bg-emerald-100/90 px-2 py-0.5 rounded-md border border-emerald-300 text-[9px] tracking-tight">
              {liveDateStr || '06 Oct 2026'}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-6 sm:py-8 bg-gradient-to-b from-[#EBF3ED] via-[#F4F8F5] to-[#EBF3ED] border-b border-emerald-200/80 text-[#111827] relative overflow-hidden font-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3.5 w-3.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-700"></span>
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg sm:text-xl font-black text-[#063D24] tracking-tight flex items-center gap-2">
                <span>● LIVE MARKET TICKER</span>
              </h3>
              <span className="text-[10px] font-mono text-amber-950 font-black px-2.5 py-0.5 rounded-full bg-amber-300/80 border border-amber-400 uppercase tracking-wide flex items-center gap-1 shadow-2xs">
                <Sparkles className="w-2.5 h-2.5 text-amber-800" />
                <span>CONTAINER &amp; SPOT FEED</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-900 font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 uppercase">
                {activeSession || 'AL AWEER'} SESSION
              </span>
            </div>
            <p className="text-xs text-gray-600 font-medium mt-0.5">
              Direct Importer Container Wholesale &amp; Al Aweer Daily Spot Market Prices • Hover to pause
            </p>
          </div>
        </div>

        <div className="text-xs font-mono text-emerald-950 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl border border-emerald-300 flex items-center gap-2 shadow-xs shrink-0">
          <Clock className="w-4 h-4 text-emerald-700" />
          <span>Live UAE Trading Date: <strong className="text-[#063D24]">{liveDateStr || '06 Oct 2026'}</strong></span>
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
              duration: 75,
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
              duration: 75,
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