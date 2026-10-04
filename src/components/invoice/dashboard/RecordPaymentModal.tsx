"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ManagedInvoice, Payment, PaymentMethod, Client } from "@/types/dashboard";
import { formatUAEAmount } from "@/utils/calculations";
import { InvoiceStorage } from "@/services/invoiceStorage";
import { CreditCard, DollarSign, X, Check, Building, Calendar, FileText, AlertCircle, ArrowRight, Layers, CheckSquare, Square, Sparkles, RefreshCw } from "lucide-react";
import { DatePickerInput } from "@/components/invoice/DatePickerInput";

interface RecordPaymentModalProps {
  isOpen?: boolean;
  selectedInvoice?: ManagedInvoice;
  initialInvoice?: ManagedInvoice;
  invoices?: ManagedInvoice[];
  clients?: Client[];
  onClose: () => void;
  onSavePayment?: (payment: Omit<Payment, "id" | "createdAt">) => void;
  onPaymentRecorded?: (payment: Payment) => void;
  onRefresh?: () => void;
}

type PaymentMode = "BULK" | "SINGLE";

export function RecordPaymentModal({
  isOpen = true,
  selectedInvoice,
  initialInvoice,
  invoices = [],
  clients = [],
  onClose,
  onSavePayment,
  onPaymentRecorded,
  onRefresh,
}: RecordPaymentModalProps) {
  const activeInvoice = selectedInvoice || initialInvoice;

  const [mode, setMode] = useState<PaymentMode>(activeInvoice ? "SINGLE" : "BULK");
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string>(activeInvoice?.id || "");
  const [selectedClientId, setSelectedClientId] = useState<string>(
    activeInvoice?.customer.id || clients[0]?.id || "cli-8206"
  );
  const [selectedInvoiceIds, setSelectedInvoiceIds] = useState<string[]>([]);
  const [amount, setAmount] = useState<string>("");
  const [paymentDate, setPaymentDate] = useState<string>(
    new Date().toLocaleDateString("en-GB").replace(/\//g, "-")
  );
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Bank Transfer");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [bankAccount, setBankAccount] = useState("Emirates NBD Corporate AED");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter due invoices for the selected client or all due invoices
  const clientDueInvoices = useMemo(() => {
    return invoices.filter((i) => {
      const matchClient =
        !selectedClientId ||
        i.customer.id === selectedClientId ||
        i.customer.name.trim().toLowerCase() ===
          (clients.find((c) => c.id === selectedClientId)?.name || "").trim().toLowerCase();
      return matchClient && i.dueAmount > 0;
    });
  }, [invoices, selectedClientId, clients]);

  const totalClientDue = useMemo(() => {
    return clientDueInvoices.reduce((sum, inv) => sum + inv.dueAmount, 0);
  }, [clientDueInvoices]);

  useEffect(() => {
    if (activeInvoice) {
      setMode("SINGLE");
      setSelectedInvoiceId(activeInvoice.id);
      setSelectedClientId(activeInvoice.customer.id || "cli-8206");
      setAmount(String(activeInvoice.dueAmount > 0 ? activeInvoice.dueAmount : activeInvoice.totals.grandTotal));
    } else {
      setMode("BULK");
      // Do NOT auto mark all invoices - let user mark them manually
      setSelectedInvoiceIds([]);
      setAmount("");
    }
  }, [activeInvoice, isOpen]);

  // Live allocation preview calculated with all hooks declared at top
  const numericAmount = parseFloat(amount) || 0;
  const allocationPreview = useMemo(() => {
    if (numericAmount <= 0) return [];
    let rem = numericAmount;
    const targetInvs =
      selectedInvoiceIds.length > 0
        ? clientDueInvoices.filter((i) => selectedInvoiceIds.includes(i.id))
        : clientDueInvoices;

    return targetInvs.map((inv) => {
      const allocated = Math.min(rem, inv.dueAmount);
      rem -= allocated;
      const newDue = Math.max(0, inv.dueAmount - allocated);
      return {
        ...inv,
        allocated,
        newDue,
        willBePaid: newDue === 0,
      };
    });
  }, [numericAmount, selectedInvoiceIds, clientDueInvoices]);

  if (!isOpen) return null;

  const currentSingleInv = invoices.find((i) => i.id === selectedInvoiceId) || activeInvoice;
  const activeClientObj = clients.find((c) => c.id === selectedClientId) || clients[0];

  const handleSelectAllInvoices = () => {
    const allIds = clientDueInvoices.map((i) => i.id);
    setSelectedInvoiceIds(allIds);
    const sum = clientDueInvoices.reduce((acc, i) => acc + i.dueAmount, 0);
    setAmount(String(sum));
  };

  const handleDeselectAllInvoices = () => {
    setSelectedInvoiceIds([]);
    setAmount("");
  };

  const handleToggleInvoiceCheckbox = (invId: string) => {
    let nextIds: string[];
    if (selectedInvoiceIds.includes(invId)) {
      nextIds = selectedInvoiceIds.filter((id) => id !== invId);
    } else {
      nextIds = [...selectedInvoiceIds, invId];
    }
    setSelectedInvoiceIds(nextIds);
    const selectedSum = clientDueInvoices
      .filter((i) => nextIds.includes(i.id))
      .reduce((acc, i) => acc + i.dueAmount, 0);
    setAmount(selectedSum > 0 ? String(selectedSum) : "");
  };

  const handleSetExactAmount = (val: number) => {
    setAmount(String(val));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const paymentAmount = parseFloat(amount);
    if (isNaN(paymentAmount) || paymentAmount <= 0) {
      setError("Please enter a valid payment amount greater than 0.");
      return;
    }

    const clientName =
      activeClientObj?.name ||
      currentSingleInv?.customer.name ||
      "XENDER FOR TRADING L.L.C";
    const clientId =
      activeClientObj?.id ||
      currentSingleInv?.customer.id ||
      "cli-8206";

    if (mode === "BULK") {
      if (selectedInvoiceIds.length === 0) {
        setError("Please check at least one invoice checkbox to record payment.");
        return;
      }
      setIsSubmitting(true);
      try {
        await InvoiceStorage.addBulkPayment({
          clientId,
          clientName,
          amount: paymentAmount,
          paymentDate,
          paymentMethod,
          referenceNumber: referenceNumber.trim() || undefined,
          bankAccount: bankAccount.trim() || undefined,
          notes: notes.trim() || undefined,
          invoiceIds: selectedInvoiceIds,
        });

        if (onRefresh) onRefresh();
        onClose();
      } catch (err: any) {
        setError(err.message || "Failed to record payment");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Single invoice settlement
      if (!currentSingleInv) {
        setError("Please select a target invoice.");
        return;
      }

      setIsSubmitting(true);
      try {
        const payload = {
          paymentNumber: `REC-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
          invoiceId: currentSingleInv.id,
          invoiceNumber: currentSingleInv.meta.invoiceNumber,
          clientId,
          clientName,
          amount: paymentAmount,
          paymentDate,
          paymentMethod,
          referenceNumber: referenceNumber.trim() || undefined,
          bankAccount: bankAccount.trim() || undefined,
          notes: notes.trim() || undefined,
        };

        if (onSavePayment) {
          await onSavePayment(payload);
        } else {
          await InvoiceStorage.addPayment(payload);
        }

        if (onRefresh) onRefresh();
        onClose();
      } catch (err: any) {
        setError(err.message || "Failed to record payment");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="w-full max-w-2xl bg-white dark:bg-[#0C101A] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white">
                Record Payment (تسجيل دفعة / سند قبض)
              </h2>
              <p className="text-xs text-slate-500">
                Custom Paid Amounts, Bulk Multi-Bill Settlements & Client Receipts
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="grid grid-cols-2 gap-2 mt-4 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setMode("BULK")}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mode === "BULK"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/40"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Bulk Bills / Custom Settlement (سداد جماعي)</span>
          </button>
          <button
            type="button"
            onClick={() => setMode("SINGLE")}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mode === "SINGLE"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/40"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Single Invoice (فاتورة محددة)</span>
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mt-4 p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 flex items-center gap-2.5 text-rose-700 dark:text-rose-200 text-xs animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
          {/* ========================================================================= */}
          {/* BULK BILLS MODE                                                           */}
          {/* ========================================================================= */}
          {mode === "BULK" && (
            <div className="space-y-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block text-sm">
                    {activeClientObj?.name || "XENDER FOR TRADING L.L.C"}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Total Active Due Balance:{" "}
                    <strong className="text-amber-600 font-bold">
                      AED {formatUAEAmount(totalClientDue)}
                    </strong>
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleSelectAllInvoices}
                    className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 text-[10px] cursor-pointer"
                  >
                    Select All ({clientDueInvoices.length})
                  </button>
                  <button
                    type="button"
                    onClick={handleDeselectAllInvoices}
                    className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 hover:bg-slate-100 text-[10px] cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Unpaid Invoices Checklist */}
              {clientDueInvoices.length === 0 ? (
                <div className="p-4 text-center text-slate-400 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                  All invoices for this client are currently settled (0 Due).
                </div>
              ) : (
                <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1 bg-white dark:bg-slate-950 p-2 rounded-xl border border-slate-200 dark:border-slate-800">
                  {clientDueInvoices.map((inv) => {
                    const isChecked = selectedInvoiceIds.includes(inv.id);
                    return (
                      <div
                        key={inv.id}
                        onClick={() => handleToggleInvoiceCheckbox(inv.id)}
                        className={`flex items-center justify-between p-2 rounded-lg border transition cursor-pointer select-none ${
                          isChecked
                            ? "bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800"
                            : "bg-slate-50/50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800/80 hover:bg-slate-100"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                          <span className="font-mono font-bold text-slate-900 dark:text-white">
                            #{inv.meta.invoiceNumber}
                          </span>
                          <span className="text-[11px] text-slate-500 font-mono">
                            ({inv.meta.invoiceDate})
                          </span>
                          <span className="text-[11px] text-slate-600 dark:text-slate-400">
                            {inv.meta.notes || "Delivery"}
                          </span>
                        </div>
                        <div className="text-right font-mono">
                          <span className="text-[10px] text-slate-400 block">Due</span>
                          <span className="font-bold text-amber-600 dark:text-amber-400">
                            AED {formatUAEAmount(inv.dueAmount)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* SINGLE INVOICE MODE                                                       */}
          {/* ========================================================================= */}
          {mode === "SINGLE" && (
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Select Invoice to Settle *
              </label>
              <select
                value={selectedInvoiceId}
                onChange={(e) => {
                  setSelectedInvoiceId(e.target.value);
                  const target = invoices.find((i) => i.id === e.target.value);
                  if (target) {
                    setAmount(String(target.dueAmount > 0 ? target.dueAmount : target.totals.grandTotal));
                  }
                }}
                className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500 font-medium"
              >
                {invoices.map((inv) => (
                  <option key={inv.id} value={inv.id}>
                    #{inv.meta.invoiceNumber} - {inv.customer.name} (Date: {inv.meta.invoiceDate} • Due: AED {formatUAEAmount(inv.dueAmount)})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Payment Amount & Quick Custom Shortcuts */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">
                Payment Amount (AED) — Custom or Bulk *
              </label>
              <div className="flex items-center gap-1.5 flex-wrap">
                {mode === "BULK" && totalClientDue > 0 && (
                  <button
                    type="button"
                    onClick={() => handleSetExactAmount(totalClientDue)}
                    className="px-2 py-0.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-lg text-[10px] font-bold cursor-pointer"
                  >
                    Full Balance (AED {formatUAEAmount(totalClientDue)})
                  </button>
                )}
                {/* Popular sample bulk payment amounts for Xender deliveries */}
                <button
                  type="button"
                  onClick={() => handleSetExactAmount(2520)}
                  className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-[10px] font-bold cursor-pointer"
                >
                  2,520 AED (5 Days)
                </button>
                <button
                  type="button"
                  onClick={() => handleSetExactAmount(4032)}
                  className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-[10px] font-bold cursor-pointer"
                >
                  4,032 AED (8 Days)
                </button>
                <button
                  type="button"
                  onClick={() => handleSetExactAmount(504)}
                  className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-[10px] font-bold cursor-pointer"
                >
                  504 AED (1 Day)
                </button>
              </div>
            </div>

            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold font-mono">
                AED
              </span>
              <input
                type="number"
                step="0.001"
                required
                placeholder="0.000 (Enter any custom paid amount)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-14 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border-2 border-emerald-500/60 rounded-xl font-mono text-lg font-black text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500 shadow-inner"
              />
            </div>
          </div>

          {/* Allocation Breakdown Preview */}
          {mode === "BULK" && numericAmount > 0 && allocationPreview.length > 0 && (
            <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-300 dark:border-emerald-700/80 rounded-2xl space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-black text-xs">
                <Sparkles className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                <span>Live Payment Allocation Preview (Auto-Settles Invoices):</span>
              </div>
              <div className="space-y-1.5 max-h-40 overflow-y-auto font-mono text-xs pr-1 divide-y divide-emerald-200/60 dark:divide-emerald-900/60">
                {allocationPreview.map((item, idx) => (
                  <div key={item.id} className="pt-1.5 first:pt-0 flex items-center justify-between gap-2 text-slate-800 dark:text-slate-200">
                    <span className="font-bold text-slate-900 dark:text-slate-100 shrink-0">
                      {idx + 1}. #{item.meta.invoiceNumber} ({item.meta.invoiceDate}):
                    </span>
                    <span className="text-right">
                      Allocating <strong className="text-emerald-800 dark:text-emerald-300 font-black">AED {formatUAEAmount(item.allocated)}</strong>
                      <span className={item.willBePaid ? "text-emerald-700 dark:text-emerald-400 font-bold ml-1" : "text-amber-700 dark:text-amber-400 font-bold ml-1"}>
                        {item.willBePaid ? "(Settles 100% Paid)" : `(Remaining: AED ${formatUAEAmount(item.newDue)})`}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Payment Method & Interactive Date Picker */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Payment Method *
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500 font-semibold cursor-pointer"
              >
                <option value="Bank Transfer">Bank Transfer (تحويل بنكي)</option>
                <option value="Cash">Cash (نقدي)</option>
                <option value="Cheque">Cheque (شيك)</option>
                <option value="Card">Card (بطاقة)</option>
                <option value="Online">Online / Wire</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Payment Date (DD-MM-YYYY) *
              </label>
              <DatePickerInput
                value={paymentDate}
                onChange={(newDate) => setPaymentDate(newDate)}
                required
              />
            </div>
          </div>

          {/* Reference Number & Bank Ledger */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Reference / Cheque #
              </label>
              <input
                type="text"
                placeholder="e.g. TXN-AUG30-2520"
                value={referenceNumber}
                onChange={(e) => setReferenceNumber(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-mono text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Bank / Cash Ledger
              </label>
              <input
                type="text"
                placeholder="e.g. Emirates NBD Corporate"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Internal Remarks / Receipt Notes */}
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Internal Remarks / Receipt Notes
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Settlement for 25 Aug to 30 Aug deliveries (5 deliveries @ 504 AED)..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold shadow-lg shadow-emerald-950/40 flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Recording Payment...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Record & Settle Payment (AED {formatUAEAmount(numericAmount)})</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecordPaymentModal;
