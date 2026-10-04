"use client";

import React, { useState } from "react";
import { ManagedInvoice, Client } from "@/types/dashboard";
import { formatUAEAmount } from "@/utils/calculations";
import { MessageSquare, Mail, Copy, Check, X, BellRing, Phone, Building } from "lucide-react";
import { isDemoMode } from "@/services/invoiceStorage";

interface PaymentReminderModalProps {
  isOpen?: boolean;
  invoice: ManagedInvoice | null;
  client?: Client;
  onClose: () => void;
}

export function PaymentReminderModal({ isOpen = true, invoice, client, onClose }: PaymentReminderModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !invoice) return null;

  const isDemo = isDemoMode();
  const companyName = isDemo ? "EMIRATES COMMERCIAL ENTERPRISE L.L.C" : "NABTA VEGETABLES AND FRUITS TRADING L.L.C";
  const trn = isDemo ? "100482910400003" : "104798388500003";
  const clientName = client?.name || invoice.customer.name || "Valued Client";
  const overdueNote = invoice.overdueDays > 0 ? ` (${invoice.overdueDays} days overdue)` : "";
  const dueDate = invoice.dueDate || "Due Immediately";
  const outstandingAmount = formatUAEAmount(invoice.dueAmount);

  const cleanMobile = (client?.mobile || "").replace(/\D/g, "");
  const email = client?.email || "";

  const reminderMessage = `Dear ${clientName},

This is a friendly reminder regarding Tax Invoice #${invoice.meta.invoiceNumber}.

• Invoice Total: AED ${formatUAEAmount(invoice.totals.grandTotal)}
• Paid to Date: AED ${formatUAEAmount(invoice.paidAmount)}
• Outstanding Due: AED ${outstandingAmount}${overdueNote}
• Due Date: ${dueDate}

Please arrange payment to our corporate bank account at your earliest convenience:
Bank: Emirates NBD / ADCB / FAB
Beneficiary: ${companyName}
TRN: ${trn}

Kindly share the transfer receipt or clearance confirmation once processed.

Thank you for your business.

${companyName}
Dubai & Abu Dhabi, UAE`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(reminderMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(reminderMessage);
    window.open(`https://wa.me/${cleanMobile}?text=${encoded}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Payment Reminder: Tax Invoice #${invoice.meta.invoiceNumber} - ${companyName}`);
    const body = encodeURIComponent(reminderMessage);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 select-none animate-fadeIn">
      <div className="w-full max-w-lg bg-white dark:bg-[#0C101A] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <BellRing className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white">
                Payment Reminder
              </h2>
              <p className="text-xs text-slate-500">
                Generate 1-Click WhatsApp & Email Notice
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Invoice Summary Card */}
        <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Invoice:</span>
            <span className="font-mono font-bold text-slate-900 dark:text-white">
              #{invoice.meta.invoiceNumber}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Client:</span>
            <span className="font-bold text-slate-900 dark:text-white truncate max-w-[220px]">
              {clientName}
            </span>
          </div>
          <div className="flex items-center justify-between font-mono">
            <span className="text-slate-500">Outstanding Due:</span>
            <span className="font-black text-rose-600 dark:text-rose-400 text-sm">
              AED {outstandingAmount}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Due Date:</span>
            <span className="font-mono text-slate-700 dark:text-slate-300">
              {dueDate} {invoice.overdueDays > 0 && <span className="text-rose-500 font-bold">({invoice.overdueDays}d overdue)</span>}
            </span>
          </div>
        </div>

        {/* Generated Message Preview */}
        <div className="mt-4">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Auto-Generated Message Preview:
          </label>
          <div className="p-3 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono whitespace-pre-line text-slate-700 dark:text-slate-300 max-h-48 overflow-y-auto leading-relaxed">
            {reminderMessage}
          </div>
        </div>

        {/* 1-Click Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-5">
          {/* WhatsApp */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>

          {/* Email */}
          <button
            type="button"
            onClick={handleEmail}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/20 transition cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </button>

          {/* Copy Message */}
          <button
            type="button"
            onClick={handleCopyMessage}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Copied!" : "Copy Text"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentReminderModal;
