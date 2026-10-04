'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, Clock, ShieldCheck, Anchor, Store, MessageCircle, 
  TrendingUp, TrendingDown, Minus, Lock, Package, ShoppingBag
} from 'lucide-react';
import { ContainerPriceItem } from './ContainerWholesaleDashboard';
import { MarketPriceItem } from './MarketPriceDashboard';
import { useWholesaleCart } from '@/context/WholesaleCartContext';

export interface UnifiedProductCardItem {
  id: string;
  name: string;
  arabicName: string;
  category: string;
  origin: string;
  grade: string;
  variety?: string;
  image: string;
  description: string;
  container: {
    priceAED: number | null;
    packagingUnit: string;
    packagingDetails: string;
    netWeightKg: number | null;
    calculatedPricePerKg: number | null;
    moq: string;
    containerAvailability: string;
    businessStatus: 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST';
    freshnessStatus: 'LIVE' | 'UPDATED' | 'STALE';
    isStale: boolean;
    freshnessLabel: string;
    lastUpdatedUAE: string;
    lastUpdatedISO: string | null;
    quotationNotes?: string;
  };
  market: {
    priceAED: number | null;
    previousPriceAED: number | null;
    changePercent: number | null;
    trend: 'UP' | 'DOWN' | 'STABLE' | null;
    packagingUnit: string;
    packagingDetails: string;
    netWeightKg: number | null;
    calculatedPricePerKg: number | null;
    minPurchaseQty: string;
    qualityGrade: string;
    marketSession: string | null;
    businessStatus: 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST';
    freshnessStatus: 'LIVE' | 'UPDATED' | 'STALE';
    isStale: boolean;
    freshnessLabel: string;
    lastUpdatedUAE: string;
    lastUpdatedISO: string | null;
  };
}

interface UnifiedProductPriceGridProps {
  containerPrices: ContainerPriceItem[];
  marketPrices: MarketPriceItem[];
  onOpenQuoteModal: (productName?: string, orderType?: string) => void;
  lastSyncUAE?: string;
  activeSession?: string;
}

export const UnifiedProductPriceGrid: React.FC<UnifiedProductPriceGridProps> = ({
  containerPrices,
  marketPrices,
  onOpenQuoteModal,
  lastSyncUAE,
  activeSession,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedSession, setSelectedSession] = useState('ALL');
  const [liveDateStr, setLiveDateStr] = useState<string>('');
  const { addToCart } = useWholesaleCart();

  // Live UAE formatted date/time for active market session (LIVE ALWAYS)
  React.useEffect(() => {
    const updateLiveDate = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Dubai',
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(now) + ' GST';
        setLiveDateStr(formatted);
      } catch {
        // Fallback to empty if Intl fails
      }
    };

    updateLiveDate();
    const interval = setInterval(updateLiveDate, 30000); // Auto-refreshes to stay live always
    return () => clearInterval(interval);
  }, []);

  const categories = ['ALL', 'VEGETABLES', 'FRUITS', 'RICE & GRAINS', 'PULSES', 'SPICES', 'DRY FOOD'];
  const sessions = ['ALL', 'MORNING', 'MIDDAY', 'EVENING'];

  // Combine separate Container & Market price streams by productId strictly in frontend
  const unifiedProducts = useMemo<UnifiedProductCardItem[]>(() => {
    // Map container prices by productId
    const containerMap = new Map<string, ContainerPriceItem>();
    containerPrices.forEach((cp) => containerMap.set(cp.productId, cp));

    // Map market prices by productId
    const marketMap = new Map<string, MarketPriceItem>();
    marketPrices.forEach((mp) => marketMap.set(mp.productId, mp));

    // Collect all unique productIds
    const allProductIds = Array.from(new Set([...containerMap.keys(), ...marketMap.keys()]));

    return allProductIds.map((pId) => {
      const cp = containerMap.get(pId);
      const mp = marketMap.get(pId);

      const name = cp?.productName || mp?.productName || pId;
      const arabicName = cp?.productArabicName || mp?.productArabicName || '';
      const category = cp?.category || mp?.category || 'PRODUCE';
      const origin = cp?.origin || mp?.origin || 'UAE / Global';
      const grade = cp?.grade || mp?.grade || 'Grade A';
      const variety = cp?.variety || mp?.variety;
      const image = cp?.image || mp?.image || '/images/products/default.jpg';
      const description = cp?.description || mp?.description || '';

      return {
        id: pId,
        name,
        arabicName,
        category,
        origin,
        grade,
        variety,
        image,
        description,
        container: {
          priceAED: cp?.priceAED ?? null,
          packagingUnit: cp?.packagingUnit || 'CTN',
          packagingDetails: cp?.packagingDetails || 'Standard Container Packaging',
          netWeightKg: cp?.netWeightKg ?? null,
          calculatedPricePerKg: cp?.calculatedPricePerKg ?? null,
          moq: cp?.moq || '1 x 40ft Container',
          containerAvailability: cp?.containerAvailability || 'Direct Port Delivery',
          businessStatus: cp?.businessStatus || 'PRICE_ON_REQUEST',
          freshnessStatus: cp?.freshnessStatus || 'LIVE',
          isStale: cp?.isStale || false,
          freshnessLabel: cp?.freshnessLabel || 'Verified Rate',
          lastUpdatedUAE: cp?.lastUpdatedUAE || 'Pending Entry',
          lastUpdatedISO: cp?.lastUpdatedISO || null,
          quotationNotes: cp?.quotationNotes,
        },
        market: {
          priceAED: mp?.priceAED ?? null,
          previousPriceAED: mp?.previousPriceAED ?? null,
          changePercent: mp?.changePercent ?? null,
          trend: mp?.trend ?? null,
          packagingUnit: mp?.packagingUnit || 'BOX',
          packagingDetails: mp?.packagingDetails || 'Market Wholesale Packaging',
          netWeightKg: mp?.netWeightKg ?? null,
          calculatedPricePerKg: mp?.calculatedPricePerKg ?? null,
          minPurchaseQty: mp?.minPurchaseQty || '10 Boxes / Crates',
          qualityGrade: mp?.qualityGrade || grade,
          marketSession: mp?.marketSession || null,
          businessStatus: mp?.businessStatus || 'PRICE_ON_REQUEST',
          freshnessStatus: mp?.freshnessStatus || 'LIVE',
          isStale: mp?.isStale || false,
          freshnessLabel: mp?.freshnessLabel || 'Trading Floor Spot',
          lastUpdatedUAE: mp?.lastUpdatedUAE || 'Pending Entry',
          lastUpdatedISO: mp?.lastUpdatedISO || null,
        },
      };
    });
  }, [containerPrices, marketPrices]);

  // Filter products by search term, category, and market session
  const filteredProducts = useMemo(() => {
    return unifiedProducts.filter((item) => {
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !term ||
        item.name.toLowerCase().includes(term) ||
        item.arabicName.includes(term) ||
        item.origin.toLowerCase().includes(term) ||
        item.container.packagingDetails.toLowerCase().includes(term) ||
        item.market.packagingDetails.toLowerCase().includes(term);

      const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;
      const matchesSession = selectedSession === 'ALL' || item.market.marketSession === selectedSession;

      return matchesSearch && matchesCat && matchesSession;
    });
  }, [unifiedProducts, searchTerm, selectedCategory, selectedSession]);

  return (
    <section id="live-prices" className="py-14 sm:py-20 bg-[#F4F7F4] text-[#111827] relative font-sans border-b border-emerald-200/80">
      {/* Target anchors for deep links */}
      <span id="products" className="absolute -top-24" />
      <span id="container-prices" className="absolute -top-24" />
      <span id="market-prices" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#063D24] text-amber-300 font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm">
                <Store className="w-3.5 h-3.5 text-amber-400" />
                <span>OFFICIAL LIVE WHOLESALE PRICING</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-emerald-300 text-emerald-950 font-mono text-[11px] font-semibold shadow-xs">
                Container Importer + Al Aweer Spot Market Rates
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#063D24] tracking-tight">
              Unified Wholesale Produce Board
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base font-light leading-relaxed">
              Every verified commodity displays both <strong>Container / Importer Bulk Wholesale</strong> and <strong>Dubai Al Aweer Daily Spot Market</strong> pricing side-by-side. Updated daily under official UAE trading sessions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-2xl bg-white border border-emerald-200 text-xs font-mono text-[#063D24] shadow-sm space-y-0.5">
              <div className="flex items-center gap-2 text-emerald-900 font-bold">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>Active Session: {activeSession || 'MORNING'}</span>
              </div>
              <div className="text-[11px] text-gray-500">
                Verified Sync: <strong className="text-emerald-900">{lastSyncUAE || 'Today'}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Guidelines Notice */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50 border border-emerald-200 mb-6 sm:mb-8 flex items-start gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-emerald-950 font-mono">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-emerald-900">Commercial Wholesale Execution:</strong> Container rates reflect CIF/FOB Dubai Port bulk deliveries. Dubai Wholesale rates reflect floor transactions at Al Aweer Central Market, Ras Al Khor. When rates are pending entry, <strong>PRICE ON REQUEST</strong> is displayed. Contact the Barakah Sales Desk for official signed pro-forma invoices.
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white p-3.5 sm:p-5 rounded-3xl border border-emerald-200 mb-6 sm:mb-8 shadow-sm space-y-3.5">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search tomato, onion, potato, garlic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2.5 sm:py-3 px-3.5 sm:px-4 pl-9 sm:pl-10 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] text-xs font-medium focus:outline-none focus:border-emerald-600 placeholder:text-gray-400"
              />
              <Search className="w-4 h-4 text-emerald-700 absolute left-3 top-3 sm:top-3.5" />
            </div>

            {/* Category Filter Pills */}
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-1">
              <div className="flex items-center gap-1.5 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono font-bold whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#063D24] text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Session Filter Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-emerald-100">
            <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 mr-1">Trading Session:</span>
            {sessions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedSession(s)}
                className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold whitespace-nowrap transition-all ${
                  selectedSession === s
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {s}
              </button>
            ))}
            <span className="ml-auto text-[10px] sm:text-[11px] font-mono text-emerald-800 font-semibold hidden sm:inline">
              Showing {filteredProducts.length} verified produce lines
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* UNIFIED PRODUCT PRICE GRID                                               */}
        {/* Mobile: 1-column on very small, 2-column on sm, 4-column on lg/xl        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {filteredProducts.map((product) => {
            const hasContainerPrice = product.container.priceAED !== null && product.container.priceAED > 0;
            const hasMarketPrice = product.market.priceAED !== null && product.market.priceAED > 0;

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-slate-200/80 hover:border-emerald-500/40 shadow-[0_4px_24px_rgba(6,61,36,0.06)] hover:shadow-[0_16px_40px_rgba(6,61,36,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Upper Section: Image & Identifiers */}
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[4/3] w-full bg-slate-900/5 overflow-hidden border-b border-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Dark gradient overlay for badge legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

                    {/* Origin & Grade Floating Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-amber-200 text-[9.5px] font-mono font-bold uppercase truncate max-w-[65%] border border-white/10 shadow-xs">
                        {product.origin}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#063D24]/95 to-[#0A4D2E]/95 backdrop-blur-md text-emerald-100 text-[9.5px] font-mono font-black tracking-wider uppercase border border-emerald-400/40 shadow-xs shrink-0">
                        {product.grade}
                      </span>
                    </div>

                    {/* Category Label Overlay */}
                    <div className="absolute bottom-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#063D24] text-[9px] font-mono font-black tracking-widest uppercase shadow-sm border border-emerald-200/80">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Title & Details */}
                  <div className="p-4 pb-3">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="font-black text-[15px] sm:text-base text-slate-900 group-hover:text-[#063D24] transition-colors leading-tight line-clamp-1">
                        {product.name}
                      </h3>
                      {product.arabicName && (
                        <span className="font-arabic text-xs text-emerald-800 font-bold shrink-0" dir="rtl">
                          {product.arabicName}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                      <Package className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="truncate">
                        {product.market.packagingDetails || product.container.packagingDetails}
                      </span>
                    </div>
                  </div>

                  {/* ============================================================= */}
                  {/* TWO COHESIVE, ULTRA-PREMIUM WHOLESALE PROCUREMENT TILES       */}
                  {/* ============================================================= */}
                  <div className="px-3.5 sm:px-4 space-y-2.5 pb-3.5">
                    
                    {/* 1. CONTAINER WHOLESALE TILE */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#062417] via-[#093522] to-[#041B11] text-white border border-[#D4AF37]/35 shadow-[0_4px_16px_rgba(6,36,23,0.25)] relative overflow-hidden group/container">
                      {/* Subtle ambient luxury gold radial highlight */}
                      <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

                      <div className="flex items-center justify-between gap-1 mb-2 relative z-10">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[9px] font-mono font-black text-[#F8D879] uppercase tracking-wider">
                          <Lock className="w-3 h-3 text-[#F8D879]" />
                          <span>CONTAINER WHOLESALE</span>
                        </span>
                        <span className="text-[9.5px] font-mono text-emerald-200/90 font-medium">
                          Direct Importer FCL
                        </span>
                      </div>

                      {hasContainerPrice ? (
                        <div className="relative z-10">
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xs font-mono font-black text-[#F8D879] tracking-wider">
                              Dhs
                            </span>
                            <span className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                              {product.container.priceAED!.toFixed(2)}
                            </span>
                            <span className="text-[10px] text-emerald-200/70 font-mono">
                              / {product.container.packagingUnit}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10.5px] font-mono mt-1.5 pt-1.5 border-t border-emerald-700/40 text-emerald-200/90">
                            <span>MOQ: <strong className="text-white font-black">100 CTN</strong></span>
                            <span className="text-[9.5px] text-[#F8D879] italic font-semibold">Direct Container Pricing</span>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              addToCart({
                                productId: product.id,
                                productName: product.name,
                                productArabicName: product.arabicName,
                                orderType: 'CONTAINER',
                                packagingUnit: product.container.packagingUnit,
                                pricePerCtn: product.container.priceAED!,
                                quantityCtn: 100,
                                image: product.image,
                              })
                            }
                            className="w-full mt-2.5 h-10 rounded-xl bg-gradient-to-r from-[#E6BD56] via-[#F8DA84] to-[#D4AF37] hover:brightness-105 active:scale-[0.98] text-[#1A1300] font-mono font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-[0_2px_12px_rgba(212,175,55,0.3)] cursor-pointer"
                          >
                            <span>+ ADD CONTAINER (100 CTN)</span>
                          </button>
                        </div>
                      ) : (
                        <div className="py-1 relative z-10">
                          <span className="inline-block px-2 py-0.5 rounded-md bg-[#D4AF37]/20 text-[#F8D879] border border-[#D4AF37]/40 text-[10px] font-mono font-bold tracking-tight">
                            PRICE ON REQUEST
                          </span>
                          <div className="text-[9.5px] font-mono text-emerald-200/80 italic mt-1.5">
                            Direct Port Booking • MOQ: {product.container.moq}
                          </div>
                          <button
                            type="button"
                            onClick={() => onOpenQuoteModal(product.name, 'Container Wholesale')}
                            className="w-full mt-2.5 h-10 rounded-xl bg-black/40 hover:bg-black/60 text-[#F8D879] border border-[#D4AF37]/40 font-mono font-black text-[10.5px] uppercase tracking-wider transition-all flex items-center justify-center cursor-pointer"
                          >
                            Inquire Container Rate
                          </button>
                        </div>
                      )}
                    </div>

                    {/* 2. DUBAI WHOLESALE MARKET (SPOT) TILE */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#F5FAF7] via-white to-[#EEF8F2] text-[#063D24] border border-emerald-300/80 shadow-xs relative overflow-hidden group/market">
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-950/10 border border-emerald-900/20 text-[9px] font-mono font-black text-[#063D24] uppercase tracking-wider">
                          <Store className="w-3 h-3 text-emerald-700 shrink-0" />
                          <span>DUBAI WHOLESALE MARKET</span>
                        </span>
                        
                        {product.market.trend && (
                          <span className="flex items-center gap-0.5 text-[9.5px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-white border border-emerald-200 shadow-2xs">
                            {product.market.trend === 'UP' && (
                              <>
                                <TrendingUp className="w-2.5 h-2.5 text-rose-600" />
                                <span className="text-rose-600">UP</span>
                              </>
                            )}
                            {product.market.trend === 'DOWN' && (
                              <>
                                <TrendingDown className="w-2.5 h-2.5 text-emerald-700" />
                                <span className="text-emerald-700">DOWN</span>
                              </>
                            )}
                            {product.market.trend === 'STABLE' && (
                              <>
                                <Minus className="w-2.5 h-2.5 text-gray-500" />
                                <span className="text-gray-500">STABLE</span>
                              </>
                            )}
                          </span>
                        )}
                      </div>

                      {hasMarketPrice ? (
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xs font-mono font-black text-emerald-800 tracking-wider">
                              Dhs
                            </span>
                            <span className="text-xl sm:text-2xl font-black text-[#063D24] font-mono tracking-tight">
                              {product.market.priceAED!.toFixed(2)}
                            </span>
                            <span className="text-[10px] text-emerald-800/80 font-mono">
                              / {product.market.packagingUnit}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10.5px] font-mono mt-1.5 pt-1.5 border-t border-emerald-200/70 text-slate-600">
                            <span>MOQ: <strong className="text-emerald-950 font-black">10 CTN</strong></span>
                            <span className="text-[9.5px] text-emerald-800 italic font-semibold">Dubai Spot Pricing</span>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              addToCart({
                                productId: product.id,
                                productName: product.name,
                                productArabicName: product.arabicName,
                                orderType: 'DUBAI_WHOLESALE',
                                packagingUnit: product.market.packagingUnit,
                                pricePerCtn: product.market.priceAED!,
                                quantityCtn: 10,
                                image: product.image,
                              })
                            }
                            className="w-full mt-2.5 h-10 rounded-xl bg-gradient-to-r from-[#063D24] to-[#0A4D2E] hover:from-[#042A18] hover:to-[#083E26] active:scale-[0.98] text-white font-mono font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-[0_2px_10px_rgba(6,61,36,0.22)] cursor-pointer"
                          >
                            <span>+ ADD SPOT (10 CTN)</span>
                          </button>
                        </div>
                      ) : (
                        <div className="py-1">
                          <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-mono font-bold tracking-tight">
                            PRICE ON REQUEST
                          </span>
                          <div className="text-[9.5px] font-mono text-emerald-800 italic mt-1.5">
                            Al Aweer Spot Market • MOQ: {product.market.minPurchaseQty}
                          </div>
                          <button
                            type="button"
                            onClick={() => onOpenQuoteModal(product.name, 'Dubai Market Spot')}
                            className="w-full mt-2.5 h-10 rounded-xl bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-950 border border-emerald-300 font-mono font-black text-[10.5px] uppercase tracking-wider transition-all flex items-center justify-center cursor-pointer"
                          >
                            Inquire Spot Rate
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Card Footer: Live Trading Session */}
                <div className="p-3.5 sm:p-4 pt-0">
                  <div className="pt-2.5 border-t border-emerald-100/90 flex items-center justify-between text-[10px] font-mono">
                    <span className="inline-flex items-center gap-1.5 text-emerald-900 font-bold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                      </span>
                      <span>Live UAE Trading Session</span>
                    </span>
                    <span className="text-[9px] font-mono text-emerald-800/70 font-medium">
                      Store Pickup Only
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-emerald-200 p-8 shadow-xs">
            <Store className="w-10 h-10 text-emerald-700 mx-auto mb-3 opacity-60" />
            <h4 className="text-base font-bold text-[#063D24] mb-1">No Produce Lines Found</h4>
            <p className="text-xs text-gray-500 font-mono max-w-md mx-auto">
              No verified items matched &ldquo;{searchTerm}&rdquo; under category &ldquo;{selectedCategory}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('ALL');
                setSelectedSession('ALL');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-emerald-800 text-white font-mono text-xs font-bold hover:bg-emerald-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
