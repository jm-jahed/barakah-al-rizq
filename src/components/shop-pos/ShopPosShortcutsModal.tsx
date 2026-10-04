'use client';

import React from 'react';
import { useShopPos } from '@/context/ShopPosContext';
import { Keyboard, X } from 'lucide-react';

interface ShopPosShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShopPosShortcutsModal: React.FC<ShopPosShortcutsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useShopPos();

  if (!isOpen) return null;

  const shortcuts = [
    { key: 'F1', label: 'Help & Shortcuts Cheatsheet' },
    { key: 'F2', label: 'New Clean Sale (Clear Cart)' },
    { key: 'F3 or /', label: 'Quick Product Search & Barcode Scan' },
    { key: 'F4', label: 'Hold / Park Current Sale' },
    { key: 'F8 or Enter', label: 'Open Checkout & Payment Modal' },
    { key: 'ESC', label: 'Close Active Modal / Drawer' },
    { key: '+ / -', label: 'Adjust Item Quantity in Cart' },
    { key: 'Del', label: 'Remove Selected Line Item' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0D14]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#10121A] border border-[#1F2433] rounded-2xl shadow-2xl p-5 select-none">
        <div className="flex items-center justify-between pb-3 border-b border-[#1F2433]">
          <div className="flex items-center gap-2">
            <Keyboard className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="text-sm font-bold text-[#F7FAFC]">Keyboard POS Shortcuts</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#718096] hover:text-[#F7FAFC] hover:bg-[#1A1D2B]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-3 space-y-2">
          {shortcuts.map((s, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2 rounded-lg bg-[#151824] border border-[#1F2433]"
            >
              <span className="text-xs text-[#CBD5E0]">{s.label}</span>
              <kbd className="px-2 py-1 rounded bg-[#1A1D2B] border border-[#1F2433] text-[11px] font-mono font-bold text-[#D4AF37] shadow-sm">
                {s.key}
              </kbd>
            </div>
          ))}
        </div>

        <div className="pt-2 text-center text-[11px] text-[#718096]">
          Designed for high-speed retail checkout & hardware barcode scanners
        </div>
      </div>
    </div>
  );
};
