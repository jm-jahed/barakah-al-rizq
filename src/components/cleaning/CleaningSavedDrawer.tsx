'use client';

import React from 'react';
import { CleaningService } from '@/data/cleaningCatalogData';
import { X, Bookmark, Trash2, ArrowUpRight, Car, Download } from 'lucide-react';

interface CleaningSavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedServices: CleaningService[];
  onRemove: (id: string) => void;
  onSelectService: (s: CleaningService) => void;
  onBookDispatch: (s: CleaningService) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const CleaningSavedDrawer: React.FC<CleaningSavedDrawerProps> = ({
  isOpen,
  onClose,
  savedServices,
  onRemove,
  onSelectService,
  onBookDispatch,
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

  const totalCostAED = savedServices.reduce((acc, s) => acc + s.priceAED, 0);
  const convertedTotal = Math.round(totalCostAED * currentRate);
  const totalDuration = savedServices.reduce((acc, s) => acc + s.durationHours, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-zinc-950 border-l border-emerald-500/30 h-full flex flex-col justify-between overflow-y-auto shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-serif font-bold text-white">
              Saved Services ({savedServices.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Valuation Header */}
        {savedServices.length > 0 && (
          <div className="my-4 p-4 rounded-2xl bg-zinc-900/70 border border-emerald-500/20 grid grid-cols-2 gap-3 font-mono">
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">Combined Estimate</div>
              <div className="text-lg font-serif font-bold text-emerald-400">
                {currency} {convertedTotal.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">Total Execution Time</div>
              <div className="text-lg font-serif font-bold text-white">
                ~{totalDuration} Hours
              </div>
            </div>
          </div>
        )}

        {/* List of Saved Services */}
        <div className="flex-1 overflow-y-auto space-y-3 my-2">
          {savedServices.length === 0 ? (
            <div className="py-24 text-center">
              <Bookmark className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
              <div className="text-zinc-300 font-serif text-lg">No services saved yet</div>
              <p className="text-zinc-500 text-xs mt-1">
                Bookmark cleaning protocols to build a combined custom estimate.
              </p>
            </div>
          ) : (
            savedServices.map((service) => {
              const convertedPrice = Math.round(service.priceAED * currentRate);
              return (
                <div
                  key={service.id}
                  className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between gap-3 group"
                >
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 cursor-pointer"
                    onClick={() => {
                      onClose();
                      onSelectService(service);
                    }}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono text-emerald-400 truncate">
                      {service.categoryName}
                    </div>
                    <h3 
                      onClick={() => {
                        onClose();
                        onSelectService(service);
                      }}
                      className="text-xs font-serif font-bold text-white truncate cursor-pointer hover:text-emerald-300"
                    >
                      {service.title}
                    </h3>
                    <div className="text-xs font-mono font-bold text-white mt-0.5">
                      {currency} {convertedPrice.toLocaleString()}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
                      {service.durationHours} Hours • {service.crewSize} Staff
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 items-end">
                    <button
                      onClick={() => onRemove(service.id)}
                      className="p-1.5 rounded-lg text-zinc-500 hover:text-rose-400 hover:bg-zinc-800 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onBookDispatch(service);
                      }}
                      className="p-1.5 rounded-lg bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors text-[10px] font-mono font-bold"
                    >
                      Book
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {savedServices.length > 0 && (
          <div className="border-t border-zinc-800 pt-4 space-y-3">
            <button
              onClick={() => {
                onClose();
                onBookDispatch(savedServices[0]);
              }}
              className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold uppercase tracking-wider text-xs font-mono flex items-center justify-center gap-2"
            >
              <Car className="w-4 h-4" />
              <span>Dispatch Collective Fleet Order</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
