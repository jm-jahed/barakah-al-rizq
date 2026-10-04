"use client";

import React, { useState } from "react";
import {
  Clock,
  Search,
  Printer,
  Download,
} from "lucide-react";
import { ReceivablesSummary, Client, ManagedInvoice } from "@/types/dashboard";
import { formatUAEAmount } from "@/utils/calculations";
import { DatePickerInput } from "@/components/invoice/DatePickerInput";
import { exportAgingMatrixToPDF } from "@/utils/pdfExport";
import { isDemoMode } from "@/services/invoiceStorage";
import { useInvoiceLanguage } from "@/context/InvoiceLanguageContext";

interface ReceivablesViewProps {
  receivables: ReceivablesSummary;
  clients: Client[];
  invoices: ManagedInvoice[];
  onSelectClient: (client: Client) => void;
  onOpenStatement: (client: Client) => void;
  onOpenReminder: (invoice: ManagedInvoice) => void;
}

export const ReceivablesView: React.FC<ReceivablesViewProps> = ({
  receivables,
  clients,
  invoices,
  onSelectClient,
  onOpenStatement,
  onOpenReminder,
}) => {
  const { lang, isRtl, t } = useInvoiceLanguage();
  const currencySymbol = lang === "ar" ? "د.إ" : "Dhs";
  const [searchTerm, setSearchTerm] = useState("");
  const [asOfDate, setAsOfDate] = useState("16-09-2026");
  const [isExporting, setIsExporting] = useState(false);

  const handleDownloadPDF = () => {
    setIsExporting(true);
    try {
      exportAgingMatrixToPDF(receivables, asOfDate || "16-09-2026", invoices);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setIsExporting(false);
    }
  };

  const filteredBuckets = receivables.buckets.filter((b) => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return b.clientName.toLowerCase().includes(q) || (b.accountNumber || "").toLowerCase().includes(q);
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 1. Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
            <span>{lang === "ar" ? "جدول أعمار الذمم والديون المستحقة" : "Accounts Receivable (A/R) Aging Matrix"}</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            {lang === "ar" ? "تحليل حقيقي لأعمار الذمم والديون بناءً على تواريخ استحقاق الفواتير والمدفوعات" : "Real-time aging analysis calculated from exact invoice due dates and payments"}
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap self-start sm:self-auto">
          {/* Download PDF Button */}
          <button
            onClick={handleDownloadPDF}
            disabled={isExporting}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-md shadow-emerald-600/20 transition-all cursor-pointer disabled:opacity-50"
            title={lang === "ar" ? "تحميل كشف أعمار الذمم PDF" : "Download Official Aging Matrix PDF"}
          >
            <Download className="w-4 h-4" />
            <span>{isExporting ? (lang === "ar" ? "جاري التوليد..." : "Generating PDF...") : (lang === "ar" ? "تحميل PDF" : "Download PDF")}</span>
          </button>

          {/* Print Button */}
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-emerald-600" />
            <span>{lang === "ar" ? "طباعة الجدول" : "Print Matrix"}</span>
          </button>
        </div>
      </div>

      {/* 2. Custom Required Date & Search Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={lang === "ar" ? "تصفية حسب اسم العميل أو رقم الحساب..." : "Filter aging by client name or account..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white"
          />
        </div>

        {/* Custom Required Date */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">
              {lang === "ar" ? "بتاريخ الاستحقاق (تاريخ مطلوب *):" : "As Of Date (Required Date *):"}
            </span>
            <div className="w-40">
              <DatePickerInput
                value={asOfDate}
                onChange={(d) => setAsOfDate(d)}
                placeholder="DD-MM-YYYY"
                required
              />
            </div>
          </div>
          <span className="hidden sm:inline-block px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] font-mono font-bold rounded-lg border border-emerald-200 dark:border-emerald-800">
            {lang === "ar" ? `الجدول الحالي: ${asOfDate}` : `Current Matrix: ${asOfDate}`}
          </span>
        </div>
      </div>

      {/* 3. Printable & Exportable Canvas Container */}
      <div id="aging-matrix-report-canvas" className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
        {/* Printable Official Report Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">
                {isDemoMode() ? (lang === "ar" ? "مؤسسة الإمارات التجارية متعددة الأنشطة ذ.م.م" : "EMIRATES MULTI-INDUSTRY COMMERCIAL ENTERPRISE L.L.C") : "شركة نبتة لتجارة الخضار والفواكه ذ.م.م – ش.ش.واحدة"}
              </h2>
              <p className="text-xs text-slate-500 font-mono">
                {isDemoMode() ? "الرقم الضريبي: 100482910400003 • السجل التجاري بالإمارات" : "الرقم الضريبي: 104798388500003 • أبوظبي ودبي، الإمارات العربية المتحدة"}
              </p>
            </div>
            <div className="sm:text-right">
              <span className="text-xs font-bold text-emerald-600 block">
                {lang === "ar" ? "جدول أعمار الذمم والديون المستحقة" : "Accounts Receivable (A/R) Aging Matrix"}
              </span>
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                {lang === "ar" ? `تاريخ التقرير: ${asOfDate}` : `Required As-Of Date: ${asOfDate}`}
              </span>
            </div>
          </div>
        </div>

      {/* 4. Accounts Receivable Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-sm">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            {lang === "ar" ? "إجمالي الرصيد القائم" : "Total Outstanding Balance"}
          </span>
          <span className="text-xl sm:text-2xl font-black font-mono text-rose-400 mt-1 block">
            {currencySymbol} {formatUAEAmount(receivables.totalReceivable)}
          </span>
          <span className="text-[11px] text-slate-400 mt-0.5 block">
            {lang === "ar" ? "عبر جميع حسابات العملاء التجارية النشطة" : "Across all active commercial client accounts"}
          </span>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-950/40 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800 shadow-sm">
          <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block">
            {lang === "ar" ? "الذمم الحالية" : "Current Receivables"}
          </span>
          <span className="text-xl sm:text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400 mt-1 block">
            {currencySymbol} {formatUAEAmount(receivables.totalReceivable)}
          </span>
          <span className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-0.5 block">
            {lang === "ar" ? "الحسابات التجارية ضمن فترة الائتمان المتفق عليها" : "Commercial accounts within agreed credit terms"}
          </span>
        </div>
      </div>

      {/* 5. Receivables Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold uppercase tracking-wider">
                <th className="py-3.5 pl-4">{lang === "ar" ? "رقم الحساب #" : "Account #"}</th>
                <th className="py-3.5">{lang === "ar" ? "العميل التجاري" : "Commercial Client"}</th>
                <th className="py-3.5 text-center">{lang === "ar" ? "شروط الائتمان" : "Credit Terms"}</th>
                <th className="py-3.5 text-right">{lang === "ar" ? `الحالية (${currencySymbol})` : `Current (${currencySymbol})`}</th>
                <th className="py-3.5 text-right font-black">{lang === "ar" ? `إجمالي المستحق (${currencySymbol})` : `Total Due (${currencySymbol})`}</th>
                <th className="py-3.5 text-right pr-4">{lang === "ar" ? "كشف الحساب" : "Statement"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
              {filteredBuckets.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    <Clock className="w-10 h-10 mx-auto mb-2 text-slate-300 dark:text-slate-700" />
                    <p className="font-semibold text-slate-600 dark:text-slate-400 text-sm">
                      {lang === "ar" ? "لم يتم العثور على سجلات ذمم مدينة." : "No receivable records found."}
                    </p>
                  </td>
                </tr>
              ) : (
                filteredBuckets.map((bucket) => {
                  const clientObj = clients.find((c) => c.id === bucket.clientId || c.name === bucket.clientName);
                  const isCustom = bucket.paymentTerms?.toLowerCase() === "custom" || clientObj?.paymentTerms?.toLowerCase() === "custom";
                  const currentAmount = isCustom ? bucket.totalDue : (bucket.current !== undefined && bucket.current > 0 ? bucket.current : (bucket.within7Days !== undefined ? bucket.within7Days : bucket.totalDue));

                  return (
                    <tr key={bucket.clientId} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                      {/* Account # */}
                      <td className="py-3.5 pl-4 font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">
                        #{bucket.accountNumber || "—"}
                      </td>

                      {/* Client Name */}
                      <td className="py-3.5 font-bold text-slate-900 dark:text-white max-w-[260px] truncate">
                        {clientObj ? (
                          <button
                            onClick={() => onSelectClient(clientObj)}
                            className="hover:text-emerald-600 hover:underline cursor-pointer text-left"
                          >
                            {bucket.clientName}
                          </button>
                        ) : (
                          bucket.clientName
                        )}
                      </td>

                      {/* Credit Terms */}
                      <td className="py-3.5 text-center whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800">
                          {clientObj?.paymentTerms || bucket.paymentTerms || (lang === "ar" ? "مخصص" : "Custom")}
                        </span>
                      </td>

                      {/* Current */}
                      <td className="py-3.5 text-right font-mono whitespace-nowrap">
                        {currentAmount > 0 ? (
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            {formatUAEAmount(currentAmount)}
                          </span>
                        ) : (
                          <span className="text-slate-300 dark:text-slate-700">—</span>
                        )}
                      </td>

                      {/* Total Due */}
                      <td className="py-3.5 text-right font-mono font-black text-slate-900 dark:text-white whitespace-nowrap text-sm">
                        {bucket.totalDue > 0 ? (
                          <span className="text-rose-600 dark:text-rose-400">
                            {currencySymbol} {formatUAEAmount(bucket.totalDue)}
                          </span>
                        ) : (
                          <span className="text-slate-400">0.000</span>
                        )}
                      </td>

                      {/* Statement Action */}
                      <td className="py-3.5 text-right pr-4 whitespace-nowrap">
                        {clientObj && (
                          <button
                            onClick={() => onOpenStatement(clientObj)}
                            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                          >
                            <span>{lang === "ar" ? "كشف الحساب" : "Audit Ledger"}</span>
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Total Matrix Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold">
          <span className="text-slate-500 uppercase tracking-wider">{lang === "ar" ? "إجمالي الذمم التجارية والديون المستحقة" : "Commercial Accounts Receivable Totals"}</span>
          <div className="flex flex-wrap items-center gap-6 font-mono">
            <span>
              {lang === "ar" ? "الذمم الحالية:" : "Current Receivables:"} <strong className="text-emerald-600">{currencySymbol} {formatUAEAmount(receivables.totalReceivable)}</strong>
            </span>
            <span className="text-sm border-l pl-4 border-slate-300 dark:border-slate-700">
              {lang === "ar" ? "إجمالي المستحق:" : "Total Due:"} <strong className="text-rose-600 font-black">{currencySymbol} {formatUAEAmount(receivables.totalReceivable)}</strong>
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
