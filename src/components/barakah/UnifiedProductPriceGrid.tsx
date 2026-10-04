'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, Clock, ShieldCheck, Anchor, Store, MessageCircle, 
  TrendingUp, TrendingDown, Minus
} from 'lucide-react';
import { ContainerPriceItem } from './ContainerWholesaleDashboard';
import { MarketPriceItem } from './MarketPriceDashboard';

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
        {/* Mobile: 2-column (grid-cols-2)                                            */}
        {/* Desktop / Web: 4-column (lg:grid-cols-4)                                 */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
          {filteredProducts.map((product) => {
            const hasContainerPrice = product.container.priceAED !== null && product.container.priceAED > 0;
            const hasMarketPrice = product.market.priceAED !== null && product.market.priceAED > 0;

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-emerald-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                {/* Upper Section: Image & Identifiers */}
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-4/3 w-full bg-emerald-950/10 overflow-hidden border-b border-emerald-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    
                    {/* Origin & Grade Floating Badges */}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none gap-1">
                      <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-mono font-bold uppercase truncate max-w-[65%]">
                        {product.origin}
                      </span>
                      <span className="px-1.5 py-0.5 rounded-md bg-emerald-600/90 text-white text-[9px] sm:text-[10px] font-mono font-bold shrink-0">
                        {product.grade}
                      </span>
                    </div>

                    {/* Category Label Overlay */}
                    <div className="absolute bottom-1.5 left-2">
                      <span className="px-1.5 py-0.5 rounded bg-white/90 text-[#063D24] text-[9px] font-mono font-bold tracking-wider uppercase shadow-xs">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Title & Details */}
                  <div className="p-2.5 sm:p-3.5 pb-2">
                    <div className="flex items-baseline justify-between gap-1 mb-0.5">
                      <h3 className="font-bold text-xs sm:text-sm lg:text-base text-[#063D24] line-clamp-1">
                        {product.name}
                      </h3>
                      {product.arabicName && (
                        <span className="font-arabic text-[11px] sm:text-xs text-emerald-800 font-semibold shrink-0">
                          {product.arabicName}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 font-mono truncate">
                      {product.market.packagingDetails || product.container.packagingDetails}
                    </p>
                  </div>

                  {/* ============================================================= */}
                  {/* TWO DISTINCT, VISUALLY BALANCED PRICE TILES                   */}
                  {/* ============================================================= */}
                  <div className="px-2 sm:px-3 space-y-2 pb-2">
                    
                    {/* 1. CONTAINER WHOLESALE TILE (Wholesale / Container Purchase Only) */}
                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 text-white border border-slate-800 relative overflow-hidden shadow-xs">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider">
                          <span>🔒 CONTAINER WHOLESALE</span>
                        </span>
                        <span className="text-[8px] sm:text-[9px] font-mono text-slate-400 truncate">
                          {product.container.packagingUnit}
                        </span>
                      </div>

                      {hasContainerPrice ? (
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xs sm:text-sm lg:text-base font-black text-white font-mono">
                              AED {product.container.priceAED!.toFixed(2)}
                            </span>
                            <span className="text-[9px] sm:text-[10px] text-slate-300 font-mono">
                              / {product.container.packagingUnit}
                            </span>
                          </div>

                          {/* Calculated Per-KG Price when Net Weight is valid */}
                          {product.container.calculatedPricePerKg !== null && product.container.calculatedPricePerKg > 0 ? (
                            <div className="text-[9px] sm:text-[10px] font-mono text-emerald-400 font-semibold mt-0.5">
                              AED {product.container.calculatedPricePerKg.toFixed(2)} / KG
                            </div>
                          ) : null}

                          <div className="text-[8px] sm:text-[9px] font-mono text-amber-300/80 flex items-center gap-1 mt-0.5">
                            <span>🔒 Wholesale / Container Purchase</span>
                          </div>
                          <div className="text-[8px] font-mono text-slate-400">
                            MOQ: {product.container.moq}
                          </div>
                        </div>
                      ) : (
                        <div className="py-0.5">
                          <span className="inline-block px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[9px] sm:text-[10px] font-mono font-bold tracking-tight">
                            PRICE ON REQUEST
                          </span>
                          <div className="text-[8px] sm:text-[9px] font-mono text-amber-300/80 mt-0.5">
                            🔒 Wholesale / Container Booking
                          </div>
                          <div className="text-[8px] sm:text-[9px] font-mono text-slate-400">
                            MOQ: {product.container.moq}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 2. DUBAI WHOLESALE / AL AWEER MARKET TILE */}
                    <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50 text-[#063D24] border border-emerald-200/90 relative overflow-hidden shadow-xs">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-bold text-emerald-900 uppercase tracking-wider">
                          <Store className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-700 shrink-0" />
                          <span>DUBAI WHOLESALE</span>
                        </span>
                        
                        {/* Trend indicator if valid */}
                        {product.market.trend && (
                          <span className="flex items-center text-[9px] font-mono font-bold">
                            {product.market.trend === 'UP' && <TrendingUp className="w-2.5 h-2.5 text-rose-600" />}
                            {product.market.trend === 'DOWN' && <TrendingDown className="w-2.5 h-2.5 text-emerald-700" />}
                            {product.market.trend === 'STABLE' && <Minus className="w-2.5 h-2.5 text-gray-500" />}
                          </span>
                        )}
                      </div>

                      {hasMarketPrice ? (
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xs sm:text-sm lg:text-base font-black text-emerald-950 font-mono">
                              AED {product.market.priceAED!.toFixed(2)}
                            </span>
                            <span className="text-[9px] sm:text-[10px] text-emerald-800 font-mono">
                              / {product.market.packagingUnit}
                            </span>
                          </div>

                          {/* Calculated Per-KG Price when Net Weight is valid */}
                          {product.market.calculatedPricePerKg !== null && product.market.calculatedPricePerKg > 0 ? (
                            <div className="text-[9px] sm:text-[10px] font-mono text-emerald-800 font-bold mt-0.5">
                              AED {product.market.calculatedPricePerKg.toFixed(2)} / KG
                            </div>
                          ) : null}

                          <div className="text-[8px] sm:text-[9px] font-mono text-emerald-700 mt-0.5">
                            Spot Minimum: {product.market.minPurchaseQty}
                          </div>
                        </div>
                      ) : (
                        <div className="py-0.5">
                          <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 text-[9px] sm:text-[10px] font-mono font-bold tracking-tight">
                            PRICE ON REQUEST
                          </span>
                          <div className="text-[8px] sm:text-[9px] font-mono text-emerald-700 mt-0.5">
                            Min: {product.market.minPurchaseQty}
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Card Footer: Last Updated & Quotation Action */}
                <div className="p-2 sm:p-3 pt-0">
                  <div className="pt-2 border-t border-emerald-100 flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-gray-500 mb-2">
                    <span className="truncate">
                      Updated: {product.market.lastUpdatedUAE !== 'Pending Entry' ? product.market.lastUpdatedUAE : product.container.lastUpdatedUAE}
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-emerald-100/70 text-emerald-900 font-semibold shrink-0">
                      UAE GST
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal(product.name, 'Container Wholesale Order')}
                      className="py-1.5 sm:py-2 px-1 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 hover:bg-slate-800 font-mono font-bold text-[9px] sm:text-[11px] transition-colors flex items-center justify-center gap-1 shadow-xs truncate"
                      title="Wholesale Customer Access / Approval Required to Order Container"
                    >
                      <span className="shrink-0">🔒</span>
                      <span className="truncate">Order Wholesale</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal(product.name, 'Dubai Market Spot')}
                      className="py-1.5 sm:py-2 px-1 rounded-xl bg-[#063D24] text-white hover:bg-emerald-900 font-mono font-bold text-[9px] sm:text-[11px] transition-colors flex items-center justify-center gap-1 shadow-xs truncate"
                      title="Inquire Dubai Market Spot Price"
                    >
                      <MessageCircle className="w-2.5 h-2.5 text-amber-300 shrink-0" />
                      <span className="truncate">Market Inquire</span>
                    </button>
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
