"use client";

import React from "react";
import { ClientStatement } from "@/types/dashboard";
import { formatUAEAmount } from "@/utils/calculations";
import { X, Printer, Download, FileSpreadsheet, Building2, Calendar, FileText } from "lucide-react";
import { isDemoMode } from "@/services/invoiceStorage";
import { useInvoiceLanguage } from "@/context/InvoiceLanguageContext";

interface ClientStatementModalProps {
  isOpen?: boolean;
  statement: ClientStatement | null;
  onClose: () => void;
}

export function ClientStatementModal({ isOpen = true, statement, onClose }: ClientStatementModalProps) {
  const { lang, isRtl, t } = useInvoiceLanguage();
  const currencySymbol = lang === "ar" ? "د.إ" : "Dhs";

  if (!isOpen || !statement) return null;

  const { client, entries, openingBalance, closingBalance, totalInvoiced, totalPaid, generatedAt } = statement;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 select-none animate-fadeIn">
      <div className="w-full max-w-4xl bg-white dark:bg-[#0C101A] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[94vh] flex flex-col">
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
              {lang === "ar" ? "كشف حساب رسمي معتمد" : "Official Statement of Account"}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline font-mono">
              {lang === "ar" ? `تاريخ الإصدار: ${generatedAt}` : `Generated: ${generatedAt}`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === "ar" ? "طباعة كشف الحساب (A4 / PDF)" : "Print Statement (A4 / PDF)"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Statement Scrollable Viewport */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6 text-slate-900 dark:text-slate-100">
          {/* Statement Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                {client.englishName || client.name}
              </h2>
              {client.arabicName && (
                <div className="text-emerald-600 dark:text-emerald-400 font-arabic text-base mt-0.5" dir="rtl">
                  {client.arabicName}
                </div>
              )}
              <div className="text-xs text-slate-500 space-y-0.5 mt-2">
                <p>{lang === "ar" ? "رقم الحساب:" : "Account Number:"} <strong className="font-mono text-slate-800 dark:text-slate-200">#{client.accountNumber}</strong> ({client.clientCode})</p>
                <p>{lang === "ar" ? "الرقم الضريبي:" : "TRN:"} <strong className="font-mono text-slate-800 dark:text-slate-200">{client.trn || (lang === "ar" ? "غير مسجل" : "N/A")}</strong></p>
                <p>{lang === "ar" ? "مسؤول التواصل:" : "Contact:"} {client.contactPerson} • {client.mobile}</p>
                <p>{lang === "ar" ? "العنوان:" : "Address:"} {client.address}, {client.city}, UAE</p>
              </div>
            </div>

            <div className="text-left sm:text-right text-xs">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                {isDemoMode() ? (lang === "ar" ? "نظام الإمارات لإدارة الفواتير والذمم التجارية" : "EMIRATES COMMERCIAL TRADING & BILLING ERP") : "شركة نبتة لتجارة الخضار والفواكه ذ.م.م"}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-[11px] font-mono">
                {isDemoMode() ? "الرقم الضريبي: 100482910400003 • السجل التجاري بالإمارات" : "TRN: 104798388500003"}
              </p>
            </div>
          </div>

          {/* Balance Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{lang === "ar" ? "الرصيد الافتتاحي" : "Opening Balance"}</span>
              <span className="font-mono font-bold text-slate-800 dark:text-slate-200 text-sm mt-1 block">
                {currencySymbol} {formatUAEAmount(openingBalance)}
              </span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{lang === "ar" ? "إجمالي الفواتير (مدين)" : "Total Invoiced (Debit)"}</span>
              <span className="font-mono font-bold text-slate-800 dark:text-slate-200 text-sm mt-1 block">
                {currencySymbol} {formatUAEAmount(totalInvoiced)}
              </span>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-900/40">
              <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">{lang === "ar" ? "إجمالي المقبوضات (دائن)" : "Total Paid (Credit)"}</span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm mt-1 block">
                {currencySymbol} {formatUAEAmount(totalPaid)}
              </span>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900/40">
              <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">{lang === "ar" ? "الرصيد النهائي المستحق" : "Closing Balance Due"}</span>
              <span className="font-mono font-black text-amber-600 dark:text-amber-400 text-base mt-1 block">
                {currencySymbol} {formatUAEAmount(closingBalance)}
              </span>
            </div>
          </div>

          {/* 5-Column Audit Ledger Table */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-3 pl-4">{lang === "ar" ? "التاريخ" : "Date"}</th>
                  <th className="py-3">{lang === "ar" ? "المرجع" : "Reference"}</th>
                  <th className="py-3">{lang === "ar" ? "البيان / الوصف" : "Description"}</th>
                  <th className="py-3 text-right">{lang === "ar" ? `مدين (${currencySymbol})` : `Debit (${currencySymbol})`}</th>
                  <th className="py-3 text-right">{lang === "ar" ? `دائن (${currencySymbol})` : `Credit (${currencySymbol})`}</th>
                  <th className="py-3 text-right pr-4">{lang === "ar" ? `الرصيد (${currencySymbol})` : `Balance (${currencySymbol})`}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
                {entries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-400">
                      {lang === "ar" ? "لا توجد معاملات مسجلة في هذه الفترة." : "No transaction records in this period."}
                    </td>
                  </tr>
                ) : (
                  entries.map((e) => (
                    <tr key={e.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                      <td className="py-3 pl-4 font-mono text-slate-600 dark:text-slate-400 whitespace-nowrap">{e.date}</td>
                      <td className="py-3 font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">{e.reference}</td>
                      <td className="py-3 max-w-[280px] truncate text-slate-700 dark:text-slate-300">{e.description}</td>
                      <td className="py-3 text-right font-mono text-slate-900 dark:text-white whitespace-nowrap">
                        {e.debit > 0 ? formatUAEAmount(e.debit) : "—"}
                      </td>
                      <td className="py-3 text-right font-mono text-emerald-600 dark:text-emerald-400 font-semibold whitespace-nowrap">
                        {e.credit > 0 ? formatUAEAmount(e.credit) : "—"}
                      </td>
                      <td className="py-3 text-right pr-4 font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">
                        {formatUAEAmount(e.balance)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>{isDemoMode() ? (lang === "ar" ? "كشف حساب إلكتروني رسمي معتمد • نظام الفواتير بالمنشآت الإماراتية" : "Official electronic accounting statement • UAE Multi-Industry ERP") : (lang === "ar" ? "كشف حساب إلكتروني رسمي من شركة نبتة" : "Official electronic accounting statement generated by Nabta ERP")}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white dark:bg-slate-800 font-bold rounded-xl cursor-pointer"
          >
            {lang === "ar" ? "إغلاق كشف الحساب" : "Close Statement"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientStatementModal;
