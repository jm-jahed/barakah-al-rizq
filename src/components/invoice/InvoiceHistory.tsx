"use client";

import React, { useState, useEffect } from "react";
import { Invoice } from "@/types/invoice";
import { Search, Copy, Trash2, ExternalLink, Calendar, User, DollarSign, X } from "lucide-react";
import { formatUAEAmount } from "@/utils/calculations";

interface InvoiceHistoryProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectInvoice: (invoice: Invoice) => void;
  onDuplicateInvoice: (invoice: Invoice) => void;
  currentInvoiceId: string;
}

export default function InvoiceHistory({
  isOpen,
  onClose,
  onSelectInvoice,
  onDuplicateInvoice,
  currentInvoiceId,
}: InvoiceHistoryProps) {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const loadInvoicesFromStorage = () => {
    try {
      const stored = localStorage.getItem("uae_invoices_history");
      if (stored) {
        setInvoices(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load invoices from localStorage", e);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadInvoicesFromStorage();
    }
  }, [isOpen]);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this invoice from history?")) return;

    const filtered = invoices.filter((inv) => inv.id !== id);
    setInvoices(filtered);
    localStorage.setItem("uae_invoices_history", JSON.stringify(filtered));
  };

  const filteredInvoices = invoices.filter((inv) => {
    const q = searchQuery.toLowerCase();
    return (
      inv.meta.invoiceNumber.toLowerCase().includes(q) ||
      inv.customer.name.toLowerCase().includes(q) ||
      inv.customer.trn.toLowerCase().includes(q) ||
      inv.customer.accountNumber.toLowerCase().includes(q)
    );
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Invoice History & Archives</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono">
                {invoices.length} Saved
              </span>
            </h2>
            <p className="text-xs text-slate-400">Search, load, duplicate or delete saved UAE Tax Invoices</p>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-slate-800 bg-slate-900/50">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Invoice #, Customer Name, Account # or TRN..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:border-emerald-500 outline-none"
            />
          </div>
        </div>

        {/* Invoice List */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          {filteredInvoices.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              {searchQuery ? "No matching invoices found." : "No saved invoices in history yet. Save your current invoice to see it here."}
            </div>
          ) : (
            filteredInvoices.map((inv) => {
              const isCurrent = inv.id === currentInvoiceId;
              return (
                <div
                  key={inv.id}
                  onClick={() => {
                    onSelectInvoice(inv);
                    onClose();
                  }}
                  className={`p-3 rounded-xl border transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isCurrent
                      ? "bg-emerald-950/30 border-emerald-500/50"
                      : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-white text-sm">
                        #{inv.meta.invoiceNumber || "N/A"}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-medium">
                          Active
                        </span>
                      )}
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {inv.meta.invoiceDate}
                      </span>
                    </div>

                    <div className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-500" />
                      <span>{inv.customer.name}</span>
                    </div>

                    <div className="text-[11px] text-slate-400 font-mono">
                      TRN: {inv.customer.trn || "N/A"} | Items: {inv.items.length}
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block">Grand Total</span>
                      <span className="font-mono font-bold text-emerald-400 text-sm">
                        {formatUAEAmount(inv.totals.grandTotal)} AED
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDuplicateInvoice(inv);
                          onClose();
                        }}
                        title="Duplicate Invoice"
                        className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-lg transition"
                      >
                        <Copy className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => handleDelete(inv.id, e)}
                        title="Delete Invoice"
                        className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
