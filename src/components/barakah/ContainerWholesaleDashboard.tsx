'use client';

import React, { useState } from 'react';
import { 
  Globe, Shield, Clock, Search, MessageCircle, 
  Anchor, FileText
} from 'lucide-react';

export interface ContainerPriceItem {
  id: string;
  productId: string;
  productName: string;
  productArabicName: string;
  category: string;
  origin: string;
  grade: string;
  variety?: string;
  size?: string;
  image: string;
  description: string;
  importerSupplierName: string;
  packagingUnit: string;
  packagingDetails: string;
  netWeightKg: number | null;
  priceAED: number | null;
  calculatedPricePerKg: number | null;
  moq: string;
  containerAvailability: string;
  portOfArrival: string;
  businessStatus: 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST';
  freshnessStatus: 'LIVE' | 'UPDATED' | 'STALE';
  isStale: boolean;
  freshnessLabel: string;
  lastUpdatedISO: string | null;
  lastUpdatedUAE: string;
  updateSession: string | null;
  updateSource: string | null;
  quotationNotes?: string;
}

interface ContainerWholesaleDashboardProps {
  items: ContainerPriceItem[];
  onOpenQuoteModal: (productName?: string, orderType?: string) => void;
  lastSyncUAE?: string;
  activeSession?: string;
}

export const ContainerWholesaleDashboard: React.FC<ContainerWholesaleDashboardProps> = ({
  items,
  onOpenQuoteModal,
  lastSyncUAE,
  activeSession,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedPackaging, setSelectedPackaging] = useState('ALL');

  const categories = ['ALL', 'VEGETABLES', 'FRUITS', 'RICE & GRAINS', 'PULSES', 'SPICES', 'DRY FOOD'];
  const packagingUnits = ['ALL', 'BOX', 'CTN', 'BAG', 'TON'];

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.productArabicName.includes(searchTerm) ||
      item.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.packagingDetails.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesPkg = selectedPackaging === 'ALL' || item.packagingUnit === selectedPackaging;

    return matchesSearch && matchesCat && matchesPkg;
  });

  return (
    <section id="container-prices" className="py-16 sm:py-20 bg-slate-900 text-white relative font-sans border-b border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm">
                <Anchor className="w-3.5 h-3.5 text-emerald-400" />
                <span>SECTION A: CONTAINER &amp; IMPORTER WHOLESALE</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[11px]">
                Target: Importers, Wholesalers &amp; GCC Re-Exporters
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Container Wholesale Rate Sheets
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Direct import container quotations and palletized bulk supply from Jebel Ali Port and Al Aweer Staging Cold Stores. All rates reflect verified supplier rate sheets.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-mono text-slate-200 shadow-sm space-y-0.5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>Active Trading Session: {activeSession || 'MORNING'}</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Last Verified Sync: <strong className="text-white">{lastSyncUAE || 'Today'}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Disclaimer Notice */}
        <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 mb-8 flex items-start gap-3 text-xs text-slate-300 font-mono">
          <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-300">Commercial Wholesale Notice:</strong> Container quotations are compiled from authorized importer dispatches. Rates are quoted in AED per packaging unit (and per KG when net weight is known). Binding purchase contracts are issued upon container booking through the Barakah Sales Desk.
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-slate-800/90 p-4 sm:p-5 rounded-2xl border border-slate-700 mb-8 space-y-4 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search container commodity, origin..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2.5 px-4 pl-10 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs font-medium focus:outline-none focus:border-emerald-500 placeholder:text-slate-400"
              />
              <Search className="w-4 h-4 text-emerald-400 absolute left-3 top-3" />
            </div>

            {/* Category Pills */}
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-1">
              <div className="flex items-center gap-1.5 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Packaging Unit Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-slate-700/60">
            <span className="text-[11px] font-mono text-slate-400 mr-1">Packaging:</span>
            {packagingUnits.map((pkg) => (
              <button
                key={pkg}
                type="button"
                onClick={() => setSelectedPackaging(pkg)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold whitespace-nowrap transition-all ${
                  selectedPackaging === pkg
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {pkg}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-5 hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-md group"
            >
              <div>
                {/* Image and Top Metadata */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-900 border border-slate-700">
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-emerald-300 font-mono text-[10px] font-bold uppercase">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5">
                    <span className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase shadow-sm ${
                      item.businessStatus === 'AVAILABLE' && !item.isStale
                        ? 'bg-emerald-600 text-white'
                        : item.isStale
                        ? 'bg-amber-600 text-white'
                        : item.businessStatus === 'OUT_OF_STOCK'
                        ? 'bg-rose-700 text-white'
                        : 'bg-slate-800 text-amber-300 border border-amber-500/40'
                    }`}>
                      {item.freshnessLabel}
                    </span>
                  </div>
                </div>

                {/* Title & Origin */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-amber-400 font-bold">
                      {item.productArabicName}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {item.grade}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans group-hover:text-emerald-300 transition-colors">
                    {item.productName}
                  </h3>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Origin: <strong className="text-white">{item.origin}</strong></span>
                  </div>
                </div>

                {/* Packaging & Pricing Specs Box */}
                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-700/80 space-y-2.5 mb-4">
                  
                  {/* Packaging Specification */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Packaging:</span>
                    <span className="text-white font-bold">{item.packagingDetails}</span>
                  </div>

                  {/* Wholesale Price */}
                  <div className="flex items-baseline justify-between border-t border-slate-800 pt-2 font-mono">
                    <span className="text-slate-400 text-xs">Container Rate:</span>
                    <div className="text-right">
                      {item.priceAED !== null ? (
                        <div>
                          <span className="text-lg font-black text-emerald-400">
                            Dhs {item.priceAED.toFixed(2)}
                          </span>
                          <span className="text-xs text-slate-400 ml-1">
                            / {item.packagingUnit}
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm font-bold text-amber-400">
                          PRICE ON REQUEST
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Calculated Per KG when Net Weight is Known */}
                  {item.calculatedPricePerKg !== null && (
                    <div className="flex items-center justify-between text-[11px] font-mono border-t border-slate-800/80 pt-1.5 text-slate-300">
                      <span className="text-slate-400">Calculated Per KG:</span>
                      <span className="text-slate-200 font-semibold">
                        Dhs {item.calculatedPricePerKg.toFixed(2)} / KG
                      </span>
                    </div>
                  )}

                  {/* MOQ & Availability */}
                  <div className="border-t border-slate-800 pt-2 space-y-1 text-[11px] font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">MOQ:</span>
                      <span className="text-white font-medium">{item.moq}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Availability:</span>
                      <span className="text-emerald-300 text-right truncate max-w-[160px]">
                        {item.containerAvailability}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Metadata & Source Tag */}
                <div className="text-[11px] font-mono text-slate-400 space-y-1 mb-4">
                  <div className="flex items-center justify-between">
                    <span>Quotation Date:</span>
                    <span className="text-slate-300">{item.lastUpdatedUAE}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>Source:</span>
                    <span className="truncate max-w-[180px]">
                      {item.updateSource ? item.updateSource.replace(/_/g, ' ') : 'Verified Import Desk'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-700/60 font-mono">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(item.productName, 'Container Wholesale')}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request Quote</span>
                </button>

                <a
                  href={`https://wa.me/971569448850?text=${encodeURIComponent(
                    `Hello Barakah Al Rizq, I am inquiring about Container Wholesale Pricing for ${item.productName} (${item.packagingDetails}). Please provide confirmation and ETA.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-700 border border-slate-700 text-emerald-400 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
