"use client";

import React, { useState, useMemo } from "react";
import {
  FileText,
  Search,
  Filter,
  ArrowUpDown,
  Plus,
  Eye,
  Edit,
  Copy,
  Printer,
  FileSpreadsheet,
  Trash2,
  CreditCard,
  Send,
  Download,
  AlertCircle,
  MoreVertical,
  CheckCircle,
  X,
  MessageSquare
} from "lucide-react";
import { ManagedInvoice, PaymentStatus } from "@/types/dashboard";
import { formatUAEAmount } from "@/utils/calculations";
import { StatusBadge } from "./StatusBadge";
import { parseDate } from "@/services/invoiceStorage";
import { useInvoiceLanguage } from "@/context/InvoiceLanguageContext";

interface InvoicesViewProps {
  invoices: ManagedInvoice[];
  initialFilter?: string;
  onNewInvoice: () => void;
  onViewInvoice: (invoice: ManagedInvoice) => void;
  onEditInvoice: (invoice: ManagedInvoice) => void;
  onDuplicateInvoice: (invoice: ManagedInvoice) => void;
  onDeleteInvoice: (invoiceId: string) => void;
  onRecordPayment: (invoice: ManagedInvoice) => void;
  onOpenReminder: (invoice: ManagedInvoice) => void;
}

type SortOption = "newest" | "oldest" | "highest_amount" | "lowest_amount" | "highest_due" | "overdue_first";

export const InvoicesView: React.FC<InvoicesViewProps> = ({
  invoices,
  initialFilter = "ALL",
  onNewInvoice,
  onViewInvoice,
  onEditInvoice,
  onDuplicateInvoice,
  onDeleteInvoice,
  onRecordPayment,
  onOpenReminder,
}) => {
  const { lang, isRtl, t } = useInvoiceLanguage();
  const currencySymbol = lang === "ar" ? "د.إ" : "Dhs";
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>(initialFilter);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Filter tabs list
  const filterTabs = [
    { label: lang === "ar" ? "جميع الفواتير" : "All Invoices", value: "ALL", count: invoices.length },
    { label: lang === "ar" ? "مستحقة ومتأخرة" : "Due & Overdue", value: "DUE_OVERDUE", count: invoices.filter((i) => i.status === "DUE" || i.status === "OVERDUE" || i.status === "PENDING" || (i.dueAmount || 0) > 0).length },
    { label: t("statusDue"), value: "DUE", count: invoices.filter((i) => i.status === "DUE").length },
    { label: t("statusOverdue"), value: "OVERDUE", count: invoices.filter((i) => i.status === "OVERDUE").length },
    { label: t("statusPaid"), value: "PAID", count: invoices.filter((i) => i.status === "PAID").length },
    { label: t("statusPartiallyPaid"), value: "PARTIALLY PAID", count: invoices.filter((i) => i.status === "PARTIALLY PAID").length },
    { label: t("statusPending"), value: "PENDING", count: invoices.filter((i) => i.status === "PENDING").length },
    { label: lang === "ar" ? "ملغاة" : "Cancelled", value: "CANCELLED", count: invoices.filter((i) => i.status === "CANCELLED").length },
  ];

  // Filter & search & sort logic
  const filteredInvoices = useMemo(() => {
    return invoices
      .filter((inv) => {
        // Status filter
        if (statusFilter === "DUE_OVERDUE") {
          if (inv.status !== "DUE" && inv.status !== "OVERDUE" && inv.status !== "PENDING" && (inv.dueAmount || 0) <= 0) {
            return false;
          }
        } else if (statusFilter !== "ALL" && inv.status !== statusFilter) {
          return false;
        }

        // Search term matching: Invoice Number, Client name, Client TRN
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase();
          const matchNum = inv.meta.invoiceNumber.toLowerCase().includes(q);
          const matchClient = inv.customer.name.toLowerCase().includes(q);
          const matchTrn = (inv.customer.trn || "").toLowerCase().includes(q);
          if (!matchNum && !matchClient && !matchTrn) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "newest") {
          return parseDate(b.meta.invoiceDate).getTime() - parseDate(a.meta.invoiceDate).getTime();
        }
        if (sortBy === "oldest") {
          return parseDate(a.meta.invoiceDate).getTime() - parseDate(b.meta.invoiceDate).getTime();
        }
        if (sortBy === "highest_amount") {
          return b.totals.grandTotal - a.totals.grandTotal;
        }
        if (sortBy === "lowest_amount") {
          return a.totals.grandTotal - b.totals.grandTotal;
        }
        if (sortBy === "highest_due") {
          return b.dueAmount - a.dueAmount;
        }
        if (sortBy === "overdue_first") {
          if (a.status === "OVERDUE" && b.status !== "OVERDUE") return -1;
          if (b.status === "OVERDUE" && a.status !== "OVERDUE") return 1;
          return b.overdueDays - a.overdueDays;
        }
        return 0;
      });
  }, [invoices, statusFilter, searchTerm, sortBy]);

  const handleConfirmDelete = (id: string) => {
    onDeleteInvoice(id);
    setDeleteConfirmId(null);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 1. Header & Primary Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
            <span>{t("invoicesTitle")}</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            {lang === "ar" ? "تصفح، بحث، تصفية، طباعة ومتابعة تسوية جميع الفواتير الضريبية المعتمدة" : "Browse, search, filter, print, and track settlements for all FTA compliant invoices"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onNewInvoice}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+{t("createInvoice")}</span>
          </button>
        </div>
      </div>

      {/* 2. Status Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {filterTabs.map((tab) => {
          const isActive = statusFilter === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setStatusFilter(tab.value)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${isActive
                  ? "bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 shadow-sm"
                  : "bg-white dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${isActive
                    ? "bg-white/20 text-white dark:text-slate-950 dark:bg-slate-900/20"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300"
                  }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Search Bar, Sorter & Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={lang === "ar" ? "بحث برقم الفاتورة، العميل، الرقم الضريبي..." : "Search invoice #, client, TRN..."}
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

        {/* Sorter Dropdown */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <ArrowUpDown className="w-4 h-4 text-slate-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl px-3 py-2 focus:outline-hidden cursor-pointer"
          >
            <option value="newest">{lang === "ar" ? "الأحدث أولاً" : "Newest First"}</option>
            <option value="oldest">{lang === "ar" ? "الأقدم أولاً" : "Oldest First"}</option>
            <option value="highest_amount">{lang === "ar" ? "الأعلى مبلغا" : "Highest Amount"}</option>
            <option value="lowest_amount">{lang === "ar" ? "الأقل مبلغا" : "Lowest Amount"}</option>
            <option value="highest_due">{lang === "ar" ? "الأعلى مستحقاً" : "Highest Due"}</option>
            <option value="overdue_first">{lang === "ar" ? "المتأخرات أولاً" : "Overdue First"}</option>
          </select>
        </div>
      </div>

      {/* 4. Invoices Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold uppercase tracking-wider">
                <th className="py-3.5 pl-4">{t("invoiceNumber")}</th>
                <th className="py-3.5">{t("client")}</th>
                <th className="py-3.5">{t("date")}</th>
                <th className="py-3.5">{t("dueDate")}</th>
                <th className="py-3.5 text-right font-mono text-slate-400 hidden 2xl:table-cell">{lang === "ar" ? "الضريبة 5%" : "VAT 5%"}</th>
                <th className="py-3.5 text-right pr-4 font-black">{t("amount")}</th>
                <th className="py-3.5 text-right">{t("paid")}</th>
                <th className="py-3.5 text-right">{t("balanceDue")}</th>
                <th className="py-3.5 text-center">{t("status")}</th>
                <th className="py-3.5 text-right pr-4">{t("actions")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
              {filteredInvoices.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-slate-400">
                    <FileText className="w-10 h-10 mx-auto mb-2 text-slate-300 dark:text-slate-700" />
                    <p className="font-semibold text-slate-600 dark:text-slate-400 text-sm">
                      {lang === "ar" ? "لم يتم العثور على فواتير تطابق معايير البحث." : "No invoices found matching current criteria."}
                    </p>
                  </td>
                </tr>
              ) : (
                filteredInvoices.map((inv) => {
                  const isDeletePrompt = deleteConfirmId === inv.id;

                  return (
                    <tr
                      key={inv.id}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors group"
                    >
                      {/* Invoice # */}
                      <td className="py-3 pl-4 font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">
                        <button
                          onClick={() => onViewInvoice(inv)}
                          className="hover:text-emerald-600 hover:underline cursor-pointer text-left"
                        >
                          #{inv.meta.invoiceNumber}
                        </button>
                      </td>

                      {/* Client */}
                      <td className="py-3 font-bold text-slate-900 dark:text-white max-w-[200px] truncate">
                        <span>{inv.customer.name}</span>
                        {inv.customer.trn && (
                          <span className="block text-[10px] font-mono text-slate-400 font-normal">
                            TRN: {inv.customer.trn}
                          </span>
                        )}
                      </td>

                      {/* Date */}
                      <td className="py-3 font-mono text-slate-500 whitespace-nowrap text-xs">
                        {inv.meta.invoiceDate}
                      </td>

                      {/* Due Date */}
                      <td className="py-3 font-mono text-slate-500 whitespace-nowrap text-xs">
                        {inv.dueDate}
                      </td>

                      {/* VAT 5% (Hidden on smaller screens) */}
                      <td className="py-3 px-2.5 text-right font-mono text-slate-600 dark:text-slate-400 whitespace-nowrap text-xs hidden 2xl:table-cell">
                        {formatUAEAmount(inv.totals.vatAmount)}
                      </td>

                      {/* Grand Total */}
                      <td className="py-3 px-3 text-right font-mono font-black text-slate-900 dark:text-white whitespace-nowrap text-xs sm:text-sm">
                        <span className="text-[10px] font-normal text-slate-400 mr-1">{currencySymbol}</span>
                        {formatUAEAmount(inv.totals.grandTotal)}
                      </td>

                      {/* Paid */}
                      <td className="py-3 px-2.5 text-right font-mono text-emerald-600 dark:text-emerald-400 font-semibold whitespace-nowrap text-xs">
                        {inv.paidAmount > 0 ? formatUAEAmount(inv.paidAmount) : "0.000"}
                      </td>

                      {/* Due */}
                      <td className="py-3 px-2.5 text-right font-mono whitespace-nowrap text-xs">
                        {inv.dueAmount > 0 ? (
                          <span className={inv.status === "OVERDUE" ? "text-rose-600 font-bold" : "text-amber-600 font-bold"}>
                            {formatUAEAmount(inv.dueAmount)}
                          </span>
                        ) : (
                          <span className="text-slate-400">0.000</span>
                        )}
                      </td>

                      {/* Status */}
                      <td className="py-3 px-2.5 text-center whitespace-nowrap">
                        <StatusBadge status={inv.status} overdueDays={inv.overdueDays} size="sm" />
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        {isDeletePrompt ? (
                          <div className="flex items-center justify-end gap-1.5 bg-rose-50 dark:bg-rose-950/80 p-1 rounded-lg border border-rose-300">
                            <span className="text-[10px] text-rose-600 font-bold">{lang === "ar" ? "حذف؟" : "Delete?"}</span>
                            <button
                              onClick={() => handleConfirmDelete(inv.id)}
                              className="px-2 py-0.5 bg-rose-600 text-white rounded text-[10px] font-bold cursor-pointer"
                            >
                              {lang === "ar" ? "نعم" : "Yes"}
                            </button>
                            <button
                              onClick={() => setDeleteConfirmId(null)}
                              className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded text-[10px] cursor-pointer"
                            >
                              {lang === "ar" ? "لا" : "No"}
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-end gap-1">
                            {/* View 1:1 Scan Modal */}
                            <button
                              onClick={() => onViewInvoice(inv)}
                              title={lang === "ar" ? "عرض معاينة الفاتورة" : "View 1:1 Scan Reference Invoice"}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                            >
                              <Eye className="w-4 h-4" />
                            </button>

                            {/* Record Payment */}
                            {inv.dueAmount > 0 && (
                              <button
                                onClick={() => onRecordPayment(inv)}
                                title={lang === "ar" ? "تسجيل دفعة جديدة" : "Record Settlement Payment"}
                                className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 transition-colors cursor-pointer"
                              >
                                <CreditCard className="w-4 h-4" />
                              </button>
                            )}

                            {/* Payment Reminder */}
                            {inv.dueAmount > 0 && (
                              <button
                                onClick={() => onOpenReminder(inv)}
                                title={lang === "ar" ? "إرسال تذكير عبر واتساب" : "Send WhatsApp / Email Reminder"}
                                className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/60 transition-colors cursor-pointer"
                              >
                                <Send className="w-4 h-4" />
                              </button>
                            )}

                            {/* Send to WhatsApp (PDF) */}
                            <button
                              onClick={() => onViewInvoice(inv)}
                              title={lang === "ar" ? "إرسال PDF عبر واتساب" : "Send PDF via WhatsApp"}
                              className="p-1.5 rounded-lg text-emerald-600 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 transition-colors cursor-pointer"
                            >
                              <MessageSquare className="w-4 h-4" />
                            </button>

                            {/* Edit in Generator */}
                            <button
                              onClick={() => onEditInvoice(inv)}
                              title={lang === "ar" ? "تعديل الفاتورة" : "Edit in Generator"}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                            >
                              <Edit className="w-4 h-4" />
                            </button>

                            {/* Duplicate */}
                            <button
                              onClick={() => onDuplicateInvoice(inv)}
                              title={lang === "ar" ? "تكرار الفاتورة" : "Duplicate Invoice"}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/60 transition-colors cursor-pointer"
                            >
                              <Copy className="w-4 h-4" />
                            </button>

                            {/* Delete */}
                            <button
                              onClick={() => setDeleteConfirmId(inv.id)}
                              title={lang === "ar" ? "حذف الفاتورة" : "Delete Invoice"}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/60 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Summary */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <span>
            {lang === "ar" ? (
              <>
                عرض <strong className="text-slate-900 dark:text-white font-mono">{filteredInvoices.length}</strong> من إجمالي{" "}
                <strong className="text-slate-900 dark:text-white font-mono">{invoices.length}</strong> فاتورة
              </>
            ) : (
              <>
                Showing <strong className="text-slate-900 dark:text-white font-mono">{filteredInvoices.length}</strong> of{" "}
                <strong className="text-slate-900 dark:text-white font-mono">{invoices.length}</strong> total invoices
              </>
            )}
          </span>
          <div className="flex items-center gap-4 font-mono">
            <span>
              {lang === "ar" ? "إجمالي القيمة:" : "Total Value:"} <strong className="text-slate-900 dark:text-white">{currencySymbol} {formatUAEAmount(filteredInvoices.reduce((a, b) => a + b.totals.grandTotal, 0))}</strong>
            </span>
            <span>
              {lang === "ar" ? "إجمالي المستحق:" : "Total Due:"} <strong className="text-amber-600 dark:text-amber-400">{currencySymbol} {formatUAEAmount(filteredInvoices.reduce((a, b) => a + b.dueAmount, 0))}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
