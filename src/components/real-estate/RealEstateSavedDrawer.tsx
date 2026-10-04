'use client';

import React from 'react';
import { LuxuryProperty } from '@/data/realEstateData';
import { X, Bookmark, Trash2, ArrowUpRight, Calendar, Download, FileText } from 'lucide-react';

interface RealEstateSavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProperties: LuxuryProperty[];
  onRemove: (id: string) => void;
  onSelectProperty: (prop: LuxuryProperty) => void;
  onBookViewing: (prop: LuxuryProperty) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const RealEstateSavedDrawer: React.FC<RealEstateSavedDrawerProps> = ({
  isOpen,
  onClose,
  savedProperties,
  onRemove,
  onSelectProperty,
  onBookViewing,
  currency
}) => {
  if (!isOpen) return null;

  const rates = {
    AED: 1,
    USD: 0.272,
    EUR: 0.252,
    GBP: 0.215
  };
  const currentRate = rates[currency];

  const totalPortfolioAED = savedProperties.reduce((acc, p) => acc + p.priceAED, 0);
  const convertedTotal = Math.round(totalPortfolioAED * currentRate);
  const avgYield = savedProperties.length > 0 
    ? (savedProperties.reduce((acc, p) => acc + p.rentalYieldPct, 0) / savedProperties.length).toFixed(1)
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-zinc-950 border-l border-amber-500/30 h-full flex flex-col justify-between overflow-y-auto shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl font-serif font-bold text-white">
              Saved Portfolio ({savedProperties.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portfolio Valuation Header */}
        {savedProperties.length > 0 && (
          <div className="my-4 p-4 rounded-2xl bg-zinc-900/70 border border-amber-500/20 grid grid-cols-2 gap-3 font-mono">
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">Cumulative Value</div>
              <div className="text-lg font-serif font-bold text-amber-400">
                {currency} {convertedTotal.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">Average Yield</div>
              <div className="text-lg font-serif font-bold text-emerald-400">
                {avgYield}% Gross
              </div>
            </div>
          </div>
        )}

        {/* List of Saved Properties */}
        <div className="flex-1 overflow-y-auto space-y-3 my-2">
          {savedProperties.length === 0 ? (
            <div className="py-24 text-center">
              <Bookmark className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
              <div className="text-zinc-300 font-serif text-lg">Your portfolio is currently empty</div>
              <p className="text-zinc-500 text-xs mt-1">
                Bookmark exclusive villas and penthouses to curate a personalized acquisition dossier.
              </p>
            </div>
          ) : (
            savedProperties.map((prop) => {
              const convertedPrice = Math.round(prop.priceAED * currentRate);
              return (
                <div
                  key={prop.id}
                  className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between gap-3 group"
                >
                  <img
                    src={prop.heroImage}
                    alt={prop.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 cursor-pointer"
                    onClick={() => {
                      onClose();
                      onSelectProperty(prop);
                    }}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono text-amber-400 truncate">
                      {prop.communityName}
                    </div>
                    <h3 
                      onClick={() => {
                        onClose();
                        onSelectProperty(prop);
                      }}
                      className="text-xs font-serif font-bold text-white truncate cursor-pointer hover:text-amber-300"
                    >
                      {prop.title}
                    </h3>
                    <div className="text-xs font-mono font-bold text-white mt-0.5">
                      {currency} {convertedPrice.toLocaleString()}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
                      {prop.bedrooms} Beds • {prop.builtUpAreaSqft.toLocaleString()} sqft
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 items-end">
                    <button
                      onClick={() => onRemove(prop.id)}
                      className="p-1.5 rounded-lg text-zinc-500 hover:text-rose-400 hover:bg-zinc-800 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onBookViewing(prop);
                      }}
                      className="p-1.5 rounded-lg bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors text-[10px] font-mono font-bold"
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Actions */}
        {savedProperties.length > 0 && (
          <div className="border-t border-zinc-800 pt-4 space-y-3">
            <button
              onClick={() => {
                onClose();
                onBookViewing(savedProperties[0]);
              }}
              className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold uppercase tracking-wider text-xs font-mono"
            >
              Book Collective Portfolio Tour
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
