"use client";

import React, { useState, useMemo } from "react";
import {
  CreditCard,
  Search,
  Plus,
  Filter,
  FileSpreadsheet,
  Trash2,
  AlertTriangle,
  Receipt,
  Building,
  Calendar,
  DollarSign,
  X
} from "lucide-react";
import { Payment, PaymentMethod } from "@/types/dashboard";
import { formatUAEAmount } from "@/utils/calculations";
import { parseDate } from "@/services/invoiceStorage";
import { useInvoiceLanguage } from "@/context/InvoiceLanguageContext";

interface PaymentsViewProps {
  payments: Payment[];
  onNewPayment: () => void;
  onDeletePayment: (paymentId: string) => void;
}

export const PaymentsView: React.FC<PaymentsViewProps> = ({
  payments,
  onNewPayment,
  onDeletePayment,
}) => {
  const { lang, isRtl, t } = useInvoiceLanguage();
  const currencySymbol = lang === "ar" ? "د.إ" : "Dhs";
  const [searchTerm, setSearchTerm] = useState("");
  const [methodFilter, setMethodFilter] = useState<string>("ALL");
  const [deleteConfirmPayment, setDeleteConfirmPayment] = useState<Payment | null>(null);

  const paymentMethods: (PaymentMethod | "ALL")[] = [
    "ALL",
    "Cash",
    "Bank Transfer",
    "Card",
    "Cheque",
    "Online",
    "Other",
  ];

  const getMethodLabel = (m: string) => {
    if (lang !== "ar") return m === "ALL" ? "All Methods" : m;
    switch (m) {
      case "ALL": return "جميع الطرق";
      case "Cash": return "نقداً";
      case "Bank Transfer": return "تحويل بنكي";
      case "Card": return "بطاقة بنكية";
      case "Cheque": return "شيك مصرفي";
      case "Online": return "دفع إلكتروني";
      default: return "أخرى";
    }
  };

  // Filtered Payments (Ensure latest payment is on top)
  const filteredPayments = useMemo(() => {
    return payments
      .filter((p) => {
        if (methodFilter !== "ALL" && p.paymentMethod !== methodFilter) {
          return false;
        }
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase();
          const matchId = (p.paymentNumber || p.id).toLowerCase().includes(q);
          const matchInv = (p.invoiceNumber || "").toLowerCase().includes(q);
          const matchClient = (p.clientName || "").toLowerCase().includes(q);
          const matchRef = (p.referenceNumber || "").toLowerCase().includes(q);
          const matchBank = (p.bankAccount || "").toLowerCase().includes(q);
          if (!matchId && !matchInv && !matchClient && !matchRef && !matchBank) return false;
        }
        return true;
      })
      .sort((a, b) => {
        const timeDiff = parseDate(b.paymentDate).getTime() - parseDate(a.paymentDate).getTime();
        if (timeDiff !== 0) return timeDiff;
        return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
      });
  }, [payments, methodFilter, searchTerm]);

  // Total collected in current view
  const totalFilteredAmount = filteredPayments.reduce((sum, p) => sum + p.amount, 0);

  const handleConfirmDelete = () => {
    if (deleteConfirmPayment) {
      onDeletePayment(deleteConfirmPayment.id);
      setDeleteConfirmPayment(null);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 1. Header & Primary Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
            <span>{lang === "ar" ? "سجل التحصيلات وسندات القبض" : "Payment Collections Ledger"}</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            {lang === "ar" ? "متابعة التحويلات البنكية، الشيكات، البطاقات، والتحصيلات النقدية للفواتير الضريبية" : "Track bank transfers, cheques, cards, and cash partial settlements against tax invoices"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onNewPayment}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+{lang === "ar" ? "تسجيل دفعة جديدة" : "Record Payment"}</span>
          </button>
        </div>
      </div>

      {/* 2. Filter Tabs (Payment Methods) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {paymentMethods.map((m) => {
          const count = m === "ALL" ? payments.length : payments.filter((p) => p.paymentMethod === m).length;
          const isActive = methodFilter === m;
          return (
            <button
              key={m}
              onClick={() => setMethodFilter(m)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 shadow-sm"
                  : "bg-white dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              }`}
            >
              <span>{getMethodLabel(m)}</span>
              <span
                className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                  isActive
                    ? "bg-white/20 text-white dark:text-slate-950 dark:bg-slate-900/20"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Search & Control Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={lang === "ar" ? "بحث برقم السند، رقم الفاتورة، العميل، المرجع..." : "Search payment #, invoice #, client, reference, bank..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="text-xs text-slate-500 font-semibold flex items-center gap-2">
          <span>{lang === "ar" ? "إجمالي المحصل:" : "Collected Total:"}</span>
          <span className="font-mono font-black text-emerald-600 dark:text-emerald-400 text-sm">
            {currencySymbol} {formatUAEAmount(totalFilteredAmount)}
          </span>
        </div>
      </div>

      {/* 4. Payments Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold uppercase tracking-wider">
                <th className="py-3 px-3 text-left whitespace-nowrap">{lang === "ar" ? "رقم السند #" : "Receipt #"}</th>
                <th className="py-3 px-2.5 text-left whitespace-nowrap">{lang === "ar" ? "التاريخ" : "Date"}</th>
                <th className="py-3 px-2.5 text-left whitespace-nowrap">{lang === "ar" ? "رقم الفاتورة #" : "Invoice #"}</th>
                <th className="py-3 px-3 text-left min-w-[140px] max-w-[200px]">{lang === "ar" ? "حساب العميل" : "Client Account"}</th>
                <th className="py-3 px-2.5 text-left whitespace-nowrap">{lang === "ar" ? "طريقة الدفع" : "Method"}</th>
                <th className="py-3 px-2.5 text-left whitespace-nowrap hidden sm:table-cell">{lang === "ar" ? "المرجع / البنك" : "Reference / Bank"}</th>
                <th className="py-3 px-3 text-right whitespace-nowrap">{lang === "ar" ? `المبلغ (${currencySymbol})` : `Amount (${currencySymbol})`}</th>
                <th className="py-3 px-3 text-left hidden 2xl:table-cell">{lang === "ar" ? "ملاحظات" : "Notes"}</th>
                <th className="py-3 px-2.5 text-right w-12 whitespace-nowrap">{lang === "ar" ? "الإجراء" : "Action"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
              {filteredPayments.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 px-4 text-center text-slate-400">
                    <Receipt className="w-10 h-10 mx-auto mb-2 text-slate-300 dark:text-slate-700" />
                    <p className="font-semibold text-slate-600 dark:text-slate-400 text-sm">
                      {lang === "ar" ? "لم يتم العثور على سجلات تحصيل." : "No payment records found."}
                    </p>
                  </td>
                </tr>
              ) : (
                filteredPayments.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors group">
                    {/* Receipt # */}
                    <td className="py-3 px-3 font-mono font-black text-slate-900 dark:text-white whitespace-nowrap text-xs">
                      {p.paymentNumber || `REC-${p.id.slice(-4)}`}
                    </td>

                    {/* Date */}
                    <td className="py-3 px-2.5 font-mono text-slate-500 whitespace-nowrap text-[11px]">
                      {p.paymentDate}
                    </td>

                    {/* Invoice # */}
                    <td className="py-3 px-2.5 font-mono font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap text-xs">
                      #{p.invoiceNumber}
                    </td>

                    {/* Client Name */}
                    <td className="py-3 px-3 max-w-[180px] font-bold text-slate-800 dark:text-slate-200 truncate text-xs" title={p.clientName}>
                      {p.clientName}
                    </td>

                    {/* Method */}
                    <td className="py-3 px-2.5 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded-md text-[10.5px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {getMethodLabel(p.paymentMethod)}
                      </span>
                    </td>

                    {/* Reference / Bank */}
                    <td className="py-3 px-2.5 whitespace-nowrap hidden sm:table-cell">
                      <div className="font-mono text-[11px] text-slate-700 dark:text-slate-300">
                        {p.referenceNumber || "—"}
                      </div>
                      {p.bankAccount && (
                        <div className="text-[10px] text-slate-400 truncate max-w-[120px]">
                          {p.bankAccount}
                        </div>
                      )}
                    </td>

                    {/* Amount */}
                    <td className="py-3 px-3 text-right font-mono font-black text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm whitespace-nowrap">
                      <span className="text-[10px] font-semibold text-slate-400 mr-1">{currencySymbol}</span>
                      {formatUAEAmount(p.amount)}
                    </td>

                    {/* Notes (Visible on wide screens) */}
                    <td className="py-3 px-3 text-slate-500 max-w-[150px] truncate text-xs hidden 2xl:table-cell" title={p.notes || ""}>
                      {p.notes || "—"}
                    </td>

                    {/* Action */}
                    <td className="py-3 px-2.5 text-right whitespace-nowrap w-12">
                      <button
                        onClick={() => setDeleteConfirmPayment(p)}
                        title={lang === "ar" ? "حذف الدفعة" : "Delete Payment (Reverses balance)"}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/60 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <span>
            {lang === "ar" ? "إجمالي المعاملات:" : "Total Transactions:"} <strong className="text-slate-900 dark:text-white font-mono">{filteredPayments.length}</strong>
          </span>
          <span className="font-mono">
            {lang === "ar" ? "إجمالي التحصيلات المسددة:" : "Total Settled Collections:"}{" "}
            <strong className="text-emerald-600 dark:text-emerald-400 font-bold">
              {currencySymbol} {formatUAEAmount(totalFilteredAmount)}
            </strong>
          </span>
        </div>
      </div>

      {/* 5. Delete Safety Confirmation Modal */}
      {deleteConfirmPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-rose-300 dark:border-rose-900/60 rounded-3xl w-full max-w-md p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/20">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {lang === "ar" ? "تأكيد حذف سند الدفع" : "Confirm Payment Deletion"}
                </h3>
                <p className="text-xs text-rose-600 dark:text-rose-400 font-semibold">
                  {lang === "ar" ? "تنبيه: سيؤدي الحذف إلى إلغاء تسوية المبلغ" : "Financial Balance Reversal Warning"}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-xs text-slate-700 dark:text-slate-300 space-y-2">
              <p>
                {lang === "ar" ? `حذف هذه الدفعة بمبلغ ` : `Deleting this payment of `}
                <strong className="font-mono text-slate-900 dark:text-white font-bold">
                  {currencySymbol} {formatUAEAmount(deleteConfirmPayment.amount)}
                </strong>{" "}
                {lang === "ar" ? `سيؤدي تلقائياً إلى:` : `will automatically:`}
              </p>
              <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
                <li>{lang === "ar" ? `زيادة الرصيد المستحق للفاتورة رقم #${deleteConfirmPayment.invoiceNumber}` : `Increase the unpaid due balance on Invoice #${deleteConfirmPayment.invoiceNumber}`}</li>
                <li>{lang === "ar" ? `إعادة حالة الفاتورة إلى مستحقة أو متأخرة` : `Recalculate invoice status back to DUE, PARTIAL, or OVERDUE`}</li>
                <li>{lang === "ar" ? `تحديث كشف حساب العميل ${deleteConfirmPayment.clientName}` : `Update ${deleteConfirmPayment.clientName}'s statement and balance ledger`}</li>
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirmPayment(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
              >
                {lang === "ar" ? "إلغاء" : "Cancel"}
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/20 transition-all cursor-pointer"
              >
                {lang === "ar" ? "نعم، تأكيد الحذف" : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
