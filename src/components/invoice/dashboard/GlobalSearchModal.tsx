"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  X,
  FileText,
  Users,
  CreditCard,
  Building2,
  Calendar,
  ArrowRight,
  Receipt
} from "lucide-react";
import { Client, ManagedInvoice, Payment } from "@/types/dashboard";
import { formatUAEAmount } from "@/utils/calculations";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  invoices: ManagedInvoice[];
  clients: Client[];
  payments: Payment[];
  onSelectInvoice: (invoice: ManagedInvoice) => void;
  onSelectClient: (client: Client) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  invoices,
  clients,
  payments,
  onSelectInvoice,
  onSelectClient,
}) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Matched Invoices
  const matchedInvoices = q
    ? invoices
        .filter(
          (i) =>
            i.meta.invoiceNumber.toLowerCase().includes(q) ||
            i.customer.name.toLowerCase().includes(q) ||
            (i.customer.trn || "").toLowerCase().includes(q) ||
            i.items.some((it) => it.description.toLowerCase().includes(q))
        )
        .slice(0, 5)
    : [];

  // Matched Clients
  const matchedClients = q
    ? clients
        .filter(
          (c) =>
            c.name.toLowerCase().includes(q) ||
            (c.companyName || "").toLowerCase().includes(q) ||
            (c.arabicName || "").includes(q) ||
            (c.trn || "").toLowerCase().includes(q) ||
            (c.accountNumber || "").toLowerCase().includes(q) ||
            (c.mobile || "").toLowerCase().includes(q)
        )
        .slice(0, 5)
    : [];

  // Matched Payments
  const matchedPayments = q
    ? payments
        .filter(
          (p) =>
            (p.paymentNumber || "").toLowerCase().includes(q) ||
            p.invoiceNumber.toLowerCase().includes(q) ||
            p.clientName.toLowerCase().includes(q) ||
            (p.referenceNumber || "").toLowerCase().includes(q)
        )
        .slice(0, 5)
    : [];

  const hasResults = matchedInvoices.length > 0 || matchedClients.length > 0 || matchedPayments.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Search Input Box */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-slate-50 dark:bg-slate-800/60">
          <Search className="w-5 h-5 text-emerald-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search across all invoices, clients, payments, TRNs, amounts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-900 dark:text-white focus:outline-hidden placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-bold text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md">
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query.trim() ? (
            <div className="text-center py-8 text-xs text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 text-slate-300 dark:text-slate-700" />
              <p>Type an invoice number (e.g. #9305), client name, TRN, or payment reference...</p>
            </div>
          ) : !hasResults ? (
            <div className="text-center py-8 text-xs text-slate-400">
              No matching records found for &quot;<strong className="text-slate-600 dark:text-slate-300">{query}</strong>&quot;.
            </div>
          ) : (
            <>
              {/* 1. Invoices */}
              {matchedInvoices.length > 0 && (
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 px-2">
                    <FileText className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Invoices ({matchedInvoices.length})</span>
                  </div>
                  {matchedInvoices.map((inv) => (
                    <div
                      key={inv.id}
                      onClick={() => {
                        onSelectInvoice(inv);
                        onClose();
                      }}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-transparent hover:border-emerald-500/30 transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-black text-xs text-slate-900 dark:text-white">
                            #{inv.meta.invoiceNumber}
                          </span>
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                            {inv.customer.name}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                            {inv.status}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          Date: {inv.meta.invoiceDate} • TRN: {inv.customer.trn || "N/A"}
                        </div>
                      </div>
                      <div className="text-right flex items-center gap-3">
                        <div>
                          <div className="font-mono font-bold text-xs text-slate-900 dark:text-white">
                            AED {formatUAEAmount(inv.totals.grandTotal)}
                          </div>
                          {inv.dueAmount > 0 && (
                            <div className="text-[10px] font-mono text-rose-500 font-semibold">
                              Due: AED {formatUAEAmount(inv.dueAmount)}
                            </div>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 2. Clients */}
              {matchedClients.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 px-2">
                    <Users className="w-3.5 h-3.5 text-blue-500" />
                    <span>Client Accounts ({matchedClients.length})</span>
                  </div>
                  {matchedClients.map((client) => (
                    <div
                      key={client.id}
                      onClick={() => {
                        onSelectClient(client);
                        onClose();
                      }}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-transparent hover:border-blue-500/30 transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-xs text-blue-600 dark:text-blue-400">
                            ACC #{client.accountNumber}
                          </span>
                          <span className="text-xs font-bold text-slate-900 dark:text-white">
                            {client.name}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          {client.mobile} • TRN: {client.trn || "None"}
                        </div>
                      </div>
                      <div className="text-right flex items-center gap-3">
                        <div>
                          <div className="font-mono font-bold text-xs text-slate-900 dark:text-white">
                            AED {formatUAEAmount(client.totalInvoiced)}
                          </div>
                          {client.totalDue > 0 ? (
                            <div className="text-[10px] font-mono text-amber-500 font-semibold">
                              Due: AED {formatUAEAmount(client.totalDue)}
                            </div>
                          ) : (
                            <div className="text-[10px] text-emerald-500">Settled</div>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 3. Payments */}
              {matchedPayments.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 px-2">
                    <Receipt className="w-3.5 h-3.5 text-teal-500" />
                    <span>Payment Receipts ({matchedPayments.length})</span>
                  </div>
                  {matchedPayments.map((pay) => (
                    <div
                      key={pay.id}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-transparent flex items-center justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-xs text-teal-600 dark:text-teal-400">
                            {pay.paymentNumber || `REC-${pay.id.slice(-4)}`}
                          </span>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            Inv #{pay.invoiceNumber} • {pay.clientName}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          {pay.paymentDate} • Method: {pay.paymentMethod} {pay.referenceNumber ? `[${pay.referenceNumber}]` : ""}
                        </div>
                      </div>
                      <div className="font-mono font-black text-xs text-emerald-600 dark:text-emerald-400">
                        AED {formatUAEAmount(pay.amount)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-medium">
          <span>Global Search Engine</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold hover:bg-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
