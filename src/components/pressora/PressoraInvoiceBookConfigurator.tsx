'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Layers, Hash, Check, ShoppingCart, ArrowRight } from 'lucide-react';
import { InvoiceBookConfig } from '@/data/pressoraData';

interface PressoraInvoiceBookConfiguratorProps {
  onAddToCart: (item: {
    productName: string;
    configSummary: string;
    quantity: number;
    priceAED: number;
  }) => void;
}

export const PressoraInvoiceBookConfigurator: React.FC<PressoraInvoiceBookConfiguratorProps> = ({
  onAddToCart,
}) => {
  const [format, setFormat] = useState<InvoiceBookConfig['format']>('Triplicate (3-Part)');
  const [size, setSize] = useState<InvoiceBookConfig['size']>('A4 Size');
  const [bookCount, setBookCount] = useState<InvoiceBookConfig['bookCount']>(10);
  const [copiesPerBook, setCopiesPerBook] = useState<InvoiceBookConfig['copiesPerBook']>(50);
  const [sequentialNumbering, setSequentialNumbering] = useState<boolean>(true);
  const [startNumber, setStartNumber] = useState<string>('001001');
  const [coverType, setCoverType] = useState<InvoiceBookConfig['coverType']>('Hardboard Wrap');
  const [binding, setBinding] = useState<InvoiceBookConfig['binding']>('Perforated Stitched');
  const [companyName, setCompanyName] = useState<string>('EMIRATES GENERAL TRADING LLC');

  // Dynamic price calculation
  const baseBookPrice = format.includes('Triplicate') ? 45 : format.includes('Duplicate') ? 32 : 58;
  const sizeMultiplier = size === 'A4 Size' ? 1.0 : size === 'A5 Size' ? 0.75 : 0.65;
  const coverExtra = coverType === 'Hardboard Wrap' ? 8 : 0;
  const numberingExtra = sequentialNumbering ? 5 : 0;

  const totalAED = Math.round((baseBookPrice * sizeMultiplier + coverExtra + numberingExtra) * bookCount);

  const handleAdd = () => {
    onAddToCart({
      productName: `NCR Invoice Books (${bookCount} Books)`,
      configSummary: `${format} • ${size} • ${copiesPerBook} sets/bk • ${binding} • ${coverType}`,
      quantity: bookCount,
      priceAED: totalAED,
    });
  };

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-[#0c131d] border border-[#1a2b40] shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Invoice Sheet Simulation Preview */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-[#38bdf8] font-bold">
              NCR Carbonless Sheet Stack
            </span>
            <span className="text-[11px] font-mono text-[#4ade80]">
              {format.split(' (')[0]} Color Sequence Active
            </span>
          </div>

          {/* Invoice Book Visual Simulation */}
          <div className="p-6 rounded-2xl bg-[#070b10] border border-[#16293f] relative overflow-hidden min-h-[300px] flex flex-col justify-between shadow-inner">
            {/* Top Sheet (White Original) */}
            <div className="p-5 rounded-xl bg-[#ffffff] text-[#0a0f18] shadow-lg font-mono text-[10px] space-y-2 relative">
              <div className="flex justify-between items-start border-b border-gray-200 pb-2">
                <div>
                  <div className="font-bold text-xs uppercase text-[#0f172a]">{companyName || 'YOUR COMPANY NAME'}</div>
                  <div className="text-[8px] text-gray-500">TAX INVOICE / OFFICIAL RECEIPT</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-[#dc2626] font-bold">
                    NO. {sequentialNumbering ? startNumber : 'NON-NUMBERED'}
                  </div>
                  <div className="text-[8px] text-gray-400">PAGE 1 OF {format.includes('Triplicate') ? '3' : '2'} (ORIGINAL)</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[8px] text-gray-600">
                <div>Bill To: Client Entity LLC</div>
                <div>Date: 06-09-2026</div>
              </div>

              {/* Mock lines */}
              <div className="space-y-1 pt-1 border-t border-gray-100">
                <div className="flex justify-between text-[8px] bg-gray-50 p-1 font-semibold">
                  <span>Item Description</span>
                  <span>Amount (AED)</span>
                </div>
                <div className="flex justify-between text-[8px] px-1 text-gray-700">
                  <span>Professional Commercial Services</span>
                  <span>4,500.00</span>
                </div>
                <div className="flex justify-between text-[8px] px-1 text-gray-700">
                  <span>Standard UAE 5% VAT</span>
                  <span>225.00</span>
                </div>
              </div>

              <div className="flex justify-between border-t border-gray-200 pt-1 text-[9px] font-bold">
                <span>Total Payable (AED)</span>
                <span>4,725.00</span>
              </div>
            </div>

            {/* Stack Indicator for Duplicate/Triplicate */}
            <div className="pt-3 flex items-center justify-between text-[10px] font-mono text-[#64748b]">
              <span>Sheet 1: White (Original)</span>
              <span>Sheet 2: Yellow (Accounts)</span>
              {format.includes('Triplicate') && <span>Sheet 3: Pink (Customer)</span>}
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase font-mono text-[#64748b] mb-1 block">Company Imprint Heading</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Your Business Trading Name"
              className="w-full p-2.5 rounded-xl bg-[#09101a] border border-[#16293f] text-[#cbd5e1] font-mono text-xs focus:outline-none focus:border-[#38bdf8]"
            />
          </div>
        </div>

        {/* Right Column: Invoice Book Options */}
        <div className="lg:col-span-7 space-y-6 font-mono text-xs">
          {/* Format Copies */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
              01 · Copy Structure (NCR Layers)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {['Duplicate (2-Part)', 'Triplicate (3-Part)', 'Quadruplicate (4-Part)'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFormat(f as any)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    format === f
                      ? 'bg-[#122236] border-[#38bdf8] text-[#f8fafc] font-bold shadow-md'
                      : 'bg-[#09101a] border-[#16293f] text-[#64748b] hover:text-[#cbd5e1]'
                  }`}
                >
                  <div className="font-bold text-[11px]">{f.split(' (')[0]}</div>
                  <div className="text-[10px] text-[#64748b]">{f.split('(')[1]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Book Size & Sets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
                02 · Paper Size
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['A4 Size', 'A5 Size'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s as any)}
                    className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                      size === s
                        ? 'bg-[#122236] border-[#38bdf8] text-[#38bdf8] font-bold'
                        : 'bg-[#09101a] border-[#16293f] text-[#64748b] hover:text-[#cbd5e1]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
                03 · Sets per Book
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[50, 100].map((c) => (
                  <button
                    key={c}
                    onClick={() => setCopiesPerBook(c as any)}
                    className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                      copiesPerBook === c
                        ? 'bg-[#122236] border-[#38bdf8] text-[#38bdf8] font-bold'
                        : 'bg-[#09101a] border-[#16293f] text-[#64748b] hover:text-[#cbd5e1]'
                    }`}
                  >
                    {c} Sets / Book
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Numbering & Binding */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
                04 · Sequential Red Numbering
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={startNumber}
                  onChange={(e) => setStartNumber(e.target.value)}
                  placeholder="Start Number (e.g. 001001)"
                  className="w-full p-2.5 rounded-xl bg-[#09101a] border border-[#16293f] text-[#cbd5e1] font-mono text-xs focus:outline-none focus:border-[#38bdf8]"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
                05 · Protective Cover Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Hardboard Wrap', 'Soft Card Cover'].map((cov) => (
                  <button
                    key={cov}
                    onClick={() => setCoverType(cov as any)}
                    className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                      coverType === cov
                        ? 'bg-[#122236] border-[#38bdf8] text-[#38bdf8] font-bold'
                        : 'bg-[#09101a] border-[#16293f] text-[#64748b] hover:text-[#cbd5e1]'
                    }`}
                  >
                    {cov}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quantity of Books */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
              06 · Total Books Required
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {[5, 10, 20, 50, 100].map((b) => (
                <button
                  key={b}
                  onClick={() => setBookCount(b as any)}
                  className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                    bookCount === b
                      ? 'bg-[#0284c7] border-[#38bdf8] text-[#ffffff] font-bold shadow-md'
                      : 'bg-[#09101a] border-[#16293f] text-[#64748b] hover:text-[#cbd5e1]'
                  }`}
                >
                  {b} Books
                </button>
              ))}
            </div>
          </div>

          {/* Price Summary & Add to Cart */}
          <div className="p-5 rounded-2xl bg-[#08101a] border border-[#14263a] flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
            <div>
              <div className="text-[10px] uppercase text-[#64748b]">Total Calculated Investment</div>
              <div className="text-3xl font-bold font-mono text-[#38bdf8]">
                AED {totalAED.toLocaleString()}
                <span className="text-xs text-[#64748b] font-normal font-sans"> (AED {(totalAED / bookCount).toFixed(0)}/book)</span>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#2563eb] hover:from-[#0369a1] hover:to-[#1d4ed8] text-[#ffffff] text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add Invoice Books to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
