"use client";

import React, { useState } from "react";
import { Barcode, Printer, X, Tag } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";
import { RetailProduct } from "@/types/shopPos";

interface Props {
  isOpen: boolean;
  product: RetailProduct | null;
  onClose: () => void;
}

export const ShopPosBarcodeLabelModal: React.FC<Props> = ({ isOpen, product, onClose }) => {
  const { businessProfile, formatPrice, lang } = useShopPos();
  const [printCount, setPrintCount] = useState<number>(4);

  if (!isOpen || !product) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-xl bg-[#0E121B] border border-[#222A3E] rounded-2xl shadow-2xl p-6 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1C2333]">
          <div className="flex items-center gap-2.5">
            <Barcode className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="text-base font-bold text-slate-100">
              {lang === "ar" ? "طباعة ملصقات الباركود للمنتج" : "Product Barcode Label Sheet Generator"}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-4 mb-4 bg-[#141A26] p-3 rounded-xl border border-[#202738]">
          <div className="text-xs text-slate-300 font-semibold">
            Product: <span className="text-[#D4AF37]">{product.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-400">Copies:</label>
            <input
              type="number"
              min="1"
              max="24"
              value={printCount}
              onChange={(e) => setPrintCount(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 bg-[#1A2234] border border-[#26324A] text-xs text-slate-100 font-bold text-center rounded-lg py-1 outline-none"
            />
          </div>
        </div>

        {/* Printable Sheet View */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 bg-white text-black rounded-xl mb-4 border border-slate-300">
          <div className="grid grid-cols-2 gap-3 print:grid-cols-2">
            {Array.from({ length: printCount }).map((_, idx) => (
              <div
                key={idx}
                className="border-2 border-dashed border-slate-800 p-2.5 rounded text-center flex flex-col items-center justify-between bg-white select-none"
              >
                <div className="text-[10px] font-bold uppercase tracking-tight truncate max-w-full text-slate-900">
                  {businessProfile.name}
                </div>
                <div className="text-[11px] font-extrabold text-slate-900 line-clamp-1 leading-tight my-0.5">
                  {product.name}
                </div>

                {/* Simulated Barcode Visualization Lines */}
                <div className="w-full my-1 flex flex-col items-center">
                  <div className="h-8 w-11/12 bg-black flex items-center justify-between px-1">
                    {Array.from({ length: 28 }).map((_, bIdx) => (
                      <div
                        key={bIdx}
                        className={`h-full ${bIdx % 3 === 0 ? "w-1 bg-white" : bIdx % 5 === 0 ? "w-0.5 bg-white" : "w-0.5 bg-black"}`}
                      />
                    ))}
                  </div>
                  <div className="text-[10px] font-mono font-bold tracking-widest text-slate-900 mt-0.5">
                    {product.barcode}
                  </div>
                </div>

                <div className="w-full flex items-center justify-between text-[10px] font-mono border-t border-slate-300 pt-1 text-slate-800">
                  <span>SKU: {product.sku}</span>
                  <span className="font-extrabold text-black">{formatPrice(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-md hover:brightness-110 transition flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Print Label Sheet</span>
          </button>
        </div>
      </div>
    </div>
  );
};
