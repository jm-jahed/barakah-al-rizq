'use client';

import React from 'react';
import { useShopPos } from '@/context/ShopPosContext';
import { PlayCircle, Trash2, X, Clock, User, AlertCircle } from 'lucide-react';

interface ShopPosHoldSalesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShopPosHoldSalesModal: React.FC<ShopPosHoldSalesModalProps> = ({ isOpen, onClose }) => {
  const { heldSales, resumeHeldSale, cancelHeldSale, formatCurrency, t } = useShopPos();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0D14]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#10121A] border border-[#1F2433] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-4 border-b border-[#1F2433] bg-[#0E1017] flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-[#F7FAFC] flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              <span>{t('resumeSale')} / Parked Sales</span>
            </h3>
            <p className="text-xs text-[#718096]">
              {heldSales.length} {heldSales.length === 1 ? 'sale' : 'sales'} currently on hold
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#718096] hover:text-[#F7FAFC] hover:bg-[#1A1D2B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Held Sales */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5 custom-scrollbar">
          {heldSales.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center text-[#718096]">
              <AlertCircle className="w-10 h-10 text-amber-400/50 mb-2" />
              <h4 className="text-sm font-bold text-[#E2E8F0]">No Parked Sales</h4>
              <p className="text-xs max-w-xs text-[#718096] mt-1">
                You can park a cart anytime by clicking the &ldquo;Hold Sale&rdquo; button during checkout.
              </p>
            </div>
          ) : (
            heldSales.map((sale) => (
              <div
                key={sale.id}
                className="bg-[#151824] border border-[#1F2433] rounded-xl p-3 flex items-center justify-between gap-3 hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#F7FAFC] font-mono">
                      #{sale.id.slice(-6).toUpperCase()}
                    </span>
                    <span className="text-[10px] text-[#718096] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {sale.createdAt || (sale.timestamp ? new Date(sale.timestamp).toLocaleTimeString('en-AE', { hour: '2-digit', minute: '2-digit' }) : 'Recently')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#A0AEC0]">
                    <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{sale.customer ? sale.customer.name : 'Walk-in Customer'}</span>
                    <span>•</span>
                    <span className="font-mono text-[#CBD5E0]">
                      {sale.items.reduce((sum, i) => sum + i.quantity, 0)} items
                    </span>
                  </div>

                  <div className="text-xs font-mono font-bold text-[#D4AF37]">
                    {formatCurrency(sale.grandTotal)}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      resumeHeldSale(sale.id);
                      onClose();
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#c99f2e] text-[#0B0D14] text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <PlayCircle className="w-3.5 h-3.5" />
                    <span>Resume</span>
                  </button>

                  <button
                    onClick={() => cancelHeldSale(sale.id)}
                    className="p-1.5 rounded-lg bg-[#1A1D2B] hover:bg-red-500/20 text-[#718096] hover:text-red-400 border border-[#1F2433] transition-colors"
                    title="Delete Hold"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-[#1F2433] bg-[#0E1017] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1A1D2B] text-xs font-semibold text-[#A0AEC0] hover:text-[#F7FAFC] transition-colors"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};
