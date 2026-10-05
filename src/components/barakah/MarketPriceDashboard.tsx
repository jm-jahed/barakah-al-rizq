'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, TrendingDown, Minus, Search, Clock, 
  ArrowRight, ShieldCheck, Store, MessageCircle
} from 'lucide-react';

export interface MarketPriceItem {
  id: string;
  productId: string;
  productName: string;
  productArabicName: string;
  category: string;
  origin: string;
  grade: string;
  variety?: string;
  image: string;
  description: string;
  marketLocation: string;
  packagingUnit: string;
  packagingDetails: string;
  netWeightKg: number | null;
  priceAED: number | null;
  previousPriceAED: number | null;
  changePercent: number | null;
  trend: 'UP' | 'DOWN' | 'STABLE' | null;
  calculatedPricePerKg: number | null;
  minPurchaseQty: string;
  qualityGrade: string;
  marketSession: string | null;
  businessStatus: 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST';
  freshnessStatus: 'LIVE' | 'UPDATED' | 'STALE';
  isStale: boolean;
  freshnessLabel: string;
  lastUpdatedISO: string | null;
  lastUpdatedUAE: string;
  updateSource: string | null;
}

interface MarketPriceDashboardProps {
  items: MarketPriceItem[];
  onSelectProduct?: (product: MarketPriceItem) => void;
  onOpenQuoteModal: (productName?: string, orderType?: string) => void;
  lastSyncUAE?: string;
  activeSession?: string;
}

export const MarketPriceDashboard: React.FC<MarketPriceDashboardProps> = ({ 
  items, 
  onSelectProduct, 
  onOpenQuoteModal,
  lastSyncUAE,
  activeSession,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedSession, setSelectedSession] = useState('ALL');

  const categories = ['ALL', 'VEGETABLES', 'FRUITS', 'RICE & GRAINS', 'PULSES', 'SPICES', 'DRY FOOD'];
  const sessions = ['ALL', 'MORNING', 'MIDDAY', 'EVENING'];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.productName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.productArabicName.includes(searchTerm) ||
                          item.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.packagingDetails.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesSession = selectedSession === 'ALL' || item.marketSession === selectedSession;
    return matchesSearch && matchesCat && matchesSession;
  });

  return (
    <section id="market-prices" className="py-16 sm:py-24 bg-[#F8FAF8] text-[#111827] relative font-sans border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#063D24] font-mono text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
                <Store className="w-3.5 h-3.5 text-emerald-800" />
                <span>SECTION B: DUBAI MARKET WHOLESALE SPOT PRICES</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-900 font-mono text-[11px] font-semibold">
                Al Aweer Central Fruit &amp; Vegetable Market
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063D24] tracking-tight">
              Dubai Wholesale Produce Feed
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              Physical daily spot transactions and supermarket wholesale supplies originating directly from Al Aweer Central Market, Ras Al Khor, Dubai. Updated across morning, midday, and evening market sessions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-2xl bg-white border border-emerald-200 text-xs font-mono text-[#063D24] shadow-sm space-y-0.5">
              <div className="flex items-center gap-2 text-emerald-800 font-bold">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>Active Market Window: {activeSession || 'MORNING'}</span>
              </div>
              <div className="text-[11px] text-gray-500">
                Verified Update: <strong className="text-emerald-900">{lastSyncUAE || 'Today'}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Market Notice Banner */}
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 mb-8 flex items-start gap-3 text-xs text-emerald-950 font-mono">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <strong className="text-emerald-900">Al Aweer Spot Market Guidelines:</strong> Prices reflect wholesale transactions at Ras Al Khor trading floors. Spot rates are based on official packaging specifications (boxes, cartons, mesh bags). Minimum purchases apply per line. Contact our Al Aweer Sales Desk for daily lock-in rates.
          </div>
        </div>

        {/* Filters & Search Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-emerald-200 mb-8 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search tomato, potato, onion, carrot, ginger..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pl-10 rounded-xl bg-gray-50 border border-gray-200 text-[#111827] text-xs font-medium focus:outline-none focus:border-emerald-600 placeholder:text-gray-400"
              />
              <Search className="w-4 h-4 text-emerald-700 absolute left-3 top-3.5" />
            </div>

            {/* Category Filter Pills */}
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-1">
              <div className="flex items-center gap-1.5 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#063D24] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Session Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-emerald-100">
            <span className="text-[11px] font-mono text-gray-500 mr-1">Market Session:</span>
            {sessions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedSession(s)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold whitespace-nowrap transition-all ${
                  selectedSession === s
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Wholesale Produce Table */}
        <div className="bg-white rounded-3xl border border-emerald-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans text-gray-800">
              <thead className="bg-[#F2F7F2] text-[#063D24] font-mono text-[11px] uppercase tracking-wider border-b border-emerald-200">
                <tr>
                  <th className="py-4 px-5">Produce Spec</th>
                  <th className="py-4 px-4">Origin</th>
                  <th className="py-4 px-4">Packaging Unit</th>
                  <th className="py-4 px-4 font-bold">Wholesale Price</th>
                  <th className="py-4 px-4">Calculated Per KG</th>
                  <th className="py-4 px-4">Session / Trend</th>
                  <th className="py-4 px-4">Min Purchase</th>
                  <th className="py-4 px-4">Last Verified (UAE)</th>
                  <th className="py-4 px-5 text-right">Lock Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100/70 font-mono">
                {filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-gray-500 font-mono text-xs">
                      No produce items match your current filter. Please adjust search criteria.
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item) => (
                    <tr 
                      key={item.id} 
                      className="hover:bg-emerald-50/50 transition-colors group cursor-pointer"
                      onClick={() => onSelectProduct && onSelectProduct(item)}
                    >
                      {/* Product Spec */}
                      <td className="py-4 px-5 font-sans">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.productName}
                            className="w-11 h-11 rounded-xl object-cover border border-emerald-200 shrink-0 group-hover:scale-105 transition-transform"
                          />
                          <div>
                            <div className="font-bold text-[#063D24] text-sm group-hover:text-emerald-800">
                              {item.productName}
                            </div>
                            <div className="text-[11px] text-amber-700 font-mono font-medium">
                              {item.productArabicName}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Origin */}
                      <td className="py-4 px-4 font-mono text-gray-600 text-xs">
                        {item.origin}
                      </td>

                      {/* Packaging Unit */}
                      <td className="py-4 px-4">
                        <span className="px-2.5 py-1 rounded-lg bg-gray-100 border border-gray-200 text-gray-800 text-[11px] font-bold">
                          {item.packagingDetails}
                        </span>
                      </td>

                      {/* Wholesale Price */}
                      <td className="py-4 px-4 font-bold text-sm">
                        {item.priceAED !== null ? (
                          <div className="text-[#063D24]">
                            <span>Dhs {item.priceAED.toFixed(2)}</span>
                            <span className="text-[10px] text-gray-500 font-normal ml-1">
                              / {item.packagingUnit}
                            </span>
                          </div>
                        ) : (
                          <span className="text-amber-700 text-xs font-bold">
                            PRICE ON REQUEST
                          </span>
                        )}
                      </td>

                      {/* Calculated Per KG */}
                      <td className="py-4 px-4 text-xs font-semibold text-gray-700">
                        {item.calculatedPricePerKg !== null ? (
                          <span>Dhs {item.calculatedPricePerKg.toFixed(2)} / KG</span>
                        ) : (
                          <span className="text-gray-400 font-normal">—</span>
                        )}
                      </td>

                      {/* Trend & Session */}
                      <td className="py-4 px-4">
                        <div className="space-y-0.5">
                          <div className="text-[10px] text-emerald-800 font-bold uppercase">
                            {item.marketSession || 'DAILY SPOT'}
                          </div>
                          <div>
                            {item.trend === 'UP' && (
                              <span className="text-emerald-700 font-bold text-xs flex items-center gap-1">
                                <TrendingUp className="w-3.5 h-3.5" />
                                <span>+{item.changePercent}%</span>
                              </span>
                            )}
                            {item.trend === 'DOWN' && (
                              <span className="text-rose-600 font-bold text-xs flex items-center gap-1">
                                <TrendingDown className="w-3.5 h-3.5" />
                                <span>{item.changePercent}%</span>
                              </span>
                            )}
                            {item.trend === 'STABLE' && (
                              <span className="text-gray-500 text-xs flex items-center gap-1">
                                <Minus className="w-3.5 h-3.5" />
                                <span>0.0%</span>
                              </span>
                            )}
                            {!item.trend && <span className="text-gray-400">—</span>}
                          </div>
                        </div>
                      </td>

                      {/* Min Purchase Qty */}
                      <td className="py-4 px-4 text-xs text-gray-600">
                        {item.minPurchaseQty}
                      </td>

                      {/* Last Verified */}
                      <td className="py-4 px-4 text-[11px] text-gray-500 whitespace-nowrap">
                        <div>{item.lastUpdatedUAE}</div>
                        <div className="text-[10px] text-gray-400">
                          {item.updateSource ? item.updateSource.replace(/_/g, ' ') : 'Al Aweer Spot Desk'}
                        </div>
                      </td>

                      {/* Action */}
                      <td className="py-4 px-5 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => onOpenQuoteModal(item.productName, 'Al Aweer Market Wholesale')}
                            className="px-3 py-1.5 rounded-xl bg-[#063D24] text-white hover:bg-emerald-800 font-bold text-xs transition-colors flex items-center gap-1 shadow-sm whitespace-nowrap"
                          >
                            <span>Lock Rate</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                          
                          <a
                            href={`https://wa.me/971569448850?text=${encodeURIComponent(
                              `Hello Barakah Al Rizq, I would like to lock wholesale rate for ${item.productName} (${item.packagingDetails}) at Al Aweer Market today.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-xl bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors"
                            title="Quick WhatsApp Inquiry"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#F2F7F2] border-t border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-gray-600">
            <div>
              Al Aweer Produce Desk: <strong>+971 56 944 8850</strong> • Ras Al Khor, Dubai
            </div>
            <div>
              Showing {filteredItems.length} active market spot lines
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};