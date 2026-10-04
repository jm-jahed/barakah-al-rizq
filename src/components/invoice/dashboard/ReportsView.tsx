"use client";

import React, { useState, useMemo } from "react";
import {
  FileSpreadsheet,
  Printer,
  Calendar,
  Filter,
  BarChart3,
  DollarSign,
  Receipt,
  Users,
  ShieldCheck,
  AlertTriangle,
  Download,
  ArrowUpRight
} from "lucide-react";
import { Client, ManagedInvoice, Payment, ReceivablesSummary } from "@/types/dashboard";
import { formatUAEAmount } from "@/utils/calculations";
import { parseDate, isDemoMode } from "@/services/invoiceStorage";
import { useInvoiceLanguage } from "@/context/InvoiceLanguageContext";
import { StatusBadge } from "./StatusBadge";

interface ReportsViewProps {
  invoices: ManagedInvoice[];
  clients: Client[];
  payments: Payment[];
  receivables: ReceivablesSummary;
}

type ReportType =
  | "SALES"
  | "INVOICES"
  | "PAYMENTS"
  | "OUTSTANDING"
  | "OVERDUE"
  | "CLIENTS"
  | "VAT"
  | "RECEIVABLES"
  | "METHODS";

type DateRangeFilter = "TODAY" | "THIS_WEEK" | "THIS_MONTH" | "LAST_MONTH" | "THIS_YEAR" | "ALL_TIME";

export const ReportsView: React.FC<ReportsViewProps> = ({
  invoices,
  clients,
  payments,
  receivables,
}) => {
  const { lang, isRtl, t } = useInvoiceLanguage();
  const currencySymbol = lang === "ar" ? "د.إ" : "Dhs";
  const [reportType, setReportType] = useState<ReportType>("SALES");
  const [dateFilter, setDateFilter] = useState<DateRangeFilter>("ALL_TIME");

  // Date filtering logic
  const isWithinDateRange = (dateStr: string) => {
    if (dateFilter === "ALL_TIME") return true;
    const d = parseDate(dateStr);
    const now = new Date();

    if (dateFilter === "TODAY") {
      return (
        d.getDate() === now.getDate() &&
        d.getMonth() === now.getMonth() &&
        d.getFullYear() === now.getFullYear()
      );
    }
    if (dateFilter === "THIS_WEEK") {
      const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
      return d >= startOfWeek;
    }
    if (dateFilter === "THIS_MONTH") {
      return d.getMonth() === new Date().getMonth() && d.getFullYear() === new Date().getFullYear();
    }
    if (dateFilter === "LAST_MONTH") {
      const prevMonth = new Date().getMonth() - 1;
      return d.getMonth() === (prevMonth < 0 ? 11 : prevMonth);
    }
    if (dateFilter === "THIS_YEAR") {
      return d.getFullYear() === new Date().getFullYear();
    }
    return true;
  };

  const filteredInvoices = useMemo(() => {
    return invoices.filter((i) => isWithinDateRange(i.meta.invoiceDate));
  }, [invoices, dateFilter]);

  const filteredPayments = useMemo(() => {
    return payments.filter((p) => isWithinDateRange(p.paymentDate));
  }, [payments, dateFilter]);

  // Aggregate stats
  const totalSales = filteredInvoices.reduce((a, b) => a + b.totals.grandTotal, 0);
  const totalNetSales = filteredInvoices.reduce((a, b) => a + b.totals.subtotal, 0);
  const totalVAT = filteredInvoices.reduce((a, b) => a + b.totals.vatAmount, 0);
  const totalCollected = filteredPayments.reduce((a, b) => a + b.amount, 0);
  const totalOutstanding = filteredInvoices.reduce((a, b) => a + b.dueAmount, 0);
  const overdueInvoices = filteredInvoices.filter((i) => i.status === "OVERDUE");
  const totalOverdue = overdueInvoices.reduce((a, b) => a + b.dueAmount, 0);

  // Method breakdown
  const methodMap: Record<string, { count: number; total: number }> = {};
  filteredPayments.forEach((p) => {
    if (!methodMap[p.paymentMethod]) {
      methodMap[p.paymentMethod] = { count: 0, total: 0 };
    }
    methodMap[p.paymentMethod].count += 1;
    methodMap[p.paymentMethod].total += p.amount;
  });

  const handlePrint = () => {
    window.print();
  };

  const reportTabs = [
    { id: "SALES", label: lang === "ar" ? "المبيعات والإيرادات" : "Sales & Revenue", icon: BarChart3 },
    { id: "INVOICES", label: lang === "ar" ? "سجل الفواتير" : "Invoice Register", icon: DollarSign },
    { id: "PAYMENTS", label: lang === "ar" ? "سندات المقبوضات" : "Payment Receipts", icon: Receipt },
    { id: "OUTSTANDING", label: lang === "ar" ? "المبالغ المستحقة" : "Outstanding Dues", icon: AlertTriangle },
    { id: "OVERDUE", label: lang === "ar" ? "الذمم المتأخرة" : "Overdue Receivables", icon: AlertTriangle },
    { id: "CLIENTS", label: lang === "ar" ? "أرصدة العملاء" : "Client Balances", icon: Users },
    { id: "VAT", label: lang === "ar" ? "تقرير ضريبة القيمة المضافة 5%" : "UAE FTA VAT 5% Report", icon: ShieldCheck },
    { id: "METHODS", label: lang === "ar" ? "قنوات الدفع" : "Payment Channels", icon: Receipt },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 1. Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
            <span>{lang === "ar" ? "التقارير المالية والضريبية" : "Financial & Tax Reports"}</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            {lang === "ar" ? "سجلات محاسبية رسمية، ملخصات المبيعات، وإقرارات ضريبة القيمة المضافة 5% المعتمدة في الإمارات" : "Official accounting reports, sales summaries, and UAE FTA 5% VAT audit declarations"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>{lang === "ar" ? "طباعة التقرير (A4 / PDF)" : "Print Report (A4 / PDF)"}</span>
          </button>
        </div>
      </div>

      {/* 2. Report Type Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {reportTabs.map((tab) => {
          const isActive = reportType === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setReportType(tab.id as ReportType)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 shadow-sm"
                  : "bg-white dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Date Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-500" /> {lang === "ar" ? "الفترة الزمنية:" : "Date Period:"}
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: "ALL_TIME", label: lang === "ar" ? "كل الأوقات" : "All Time" },
              { id: "TODAY", label: lang === "ar" ? "اليوم" : "Today" },
              { id: "THIS_WEEK", label: lang === "ar" ? "هذا الأسبوع" : "This Week" },
              { id: "THIS_MONTH", label: lang === "ar" ? "هذا الشهر" : "This Month" },
              { id: "LAST_MONTH", label: lang === "ar" ? "الشهر الماضي" : "Last Month" },
              { id: "THIS_YEAR", label: lang === "ar" ? "هذه السنة" : "This Year" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setDateFilter(f.id as DateRangeFilter)}
                className={`px-2.5 py-1 text-xs rounded-lg font-semibold transition-colors cursor-pointer ${
                  dateFilter === f.id
                    ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs text-slate-500 font-mono">
          {lang === "ar" ? `تاريخ التقرير: ${new Date().toLocaleDateString("ar-AE")}` : `Report Generated: ${new Date().toLocaleDateString("en-GB")}`}
        </div>
      </div>

      {/* 4. Report Financial Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-[11px] font-bold text-slate-400 uppercase">{lang === "ar" ? "إجمالي الفواتير (شامل الضريبة)" : "Gross Invoiced (Inc VAT)"}</span>
          <div className="text-xl font-black font-mono text-slate-900 dark:text-white mt-1">
            {currencySymbol} {formatUAEAmount(totalSales)}
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-[11px] font-bold text-slate-400 uppercase">{lang === "ar" ? "التوريدات الخاضعة للضريبة" : "Net Taxable Supplies"}</span>
          <div className="text-xl font-black font-mono text-slate-900 dark:text-white mt-1">
            {currencySymbol} {formatUAEAmount(totalNetSales)}
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30">
          <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">{lang === "ar" ? "ضريبة المخرجات 5%" : "UAE VAT 5% Output Tax"}</span>
          <div className="text-xl font-black font-mono text-emerald-600 dark:text-emerald-400 mt-1">
            {currencySymbol} {formatUAEAmount(totalVAT)}
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-[11px] font-bold text-slate-400 uppercase">{lang === "ar" ? "التحصيلات المسددة" : "Settled Collections"}</span>
          <div className="text-xl font-black font-mono text-teal-600 dark:text-teal-400 mt-1">
            {currencySymbol} {formatUAEAmount(totalCollected)}
          </div>
        </div>
      </div>

      {/* 5. Report Table Container */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        {/* VAT Report Specific View */}
        {reportType === "VAT" && (
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-emerald-50/50 dark:bg-emerald-950/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>{lang === "ar" ? "جدول الإقرار الضريبي الرسمي للهيئة الاتحادية للضرائب (VAT 201)" : "Federal Tax Authority (FTA) Official VAT 201 Return Schedule"}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === "ar" ? "التوريدات الخاضعة للنسبة الأساسية 5% في دولة الإمارات العربية المتحدة" : "Standard rated 5% supplies delivered in the United Arab Emirates"}
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
                {lang === "ar" ? "معتمد 5% - الهيئة الاتحادية للضرائب" : "FTA UAE 5% Verified"}
              </span>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          {reportType === "VAT" ? (
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold uppercase">
                  <th className="py-3.5 pl-4">{lang === "ar" ? "رقم الفاتورة #" : "Invoice #"}</th>
                  <th className="py-3.5">{lang === "ar" ? "التاريخ" : "Date"}</th>
                  <th className="py-3.5">{lang === "ar" ? "اسم العميل الرسمية" : "Customer Legal Name"}</th>
                  <th className="py-3.5">{lang === "ar" ? "الرقم الضريبي" : "Customer TRN"}</th>
                  <th className="py-3.5 text-right">{lang === "ar" ? `المبلغ الخاضع للضريبة (${currencySymbol})` : `Taxable Supply (${currencySymbol})`}</th>
                  <th className="py-3.5 text-center">{lang === "ar" ? "نسبة الضريبة" : "VAT Rate"}</th>
                  <th className="py-3.5 text-right">{lang === "ar" ? `ضريبة المخرجات 5% (${currencySymbol})` : `Output VAT 5% (${currencySymbol})`}</th>
                  <th className="py-3.5 text-right pr-4">{lang === "ar" ? `الإجمالي شامل الضريبة (${currencySymbol})` : `Gross Total (${currencySymbol})`}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
                {filteredInvoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40">
                    <td className="py-3.5 pl-4 font-mono font-bold text-slate-900 dark:text-white">#{inv.meta.invoiceNumber}</td>
                    <td className="py-3.5 font-mono text-slate-500">{inv.meta.invoiceDate}</td>
                    <td className="py-3.5 font-bold text-slate-900 dark:text-white">{inv.customer.name}</td>
                    <td className="py-3.5 font-mono text-slate-600 dark:text-slate-400">{inv.customer.trn || (lang === "ar" ? "غير مسجل ضريبياً" : "Unregistered")}</td>
                    <td className="py-3.5 text-right font-mono">{formatUAEAmount(inv.totals.subtotal)}</td>
                    <td className="py-3.5 text-center font-bold text-emerald-600">5%</td>
                    <td className="py-3.5 text-right font-mono font-bold text-emerald-600">{formatUAEAmount(inv.totals.vatAmount)}</td>
                    <td className="py-3.5 text-right pr-4 font-mono font-black">{formatUAEAmount(inv.totals.grandTotal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : reportType === "PAYMENTS" ? (
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold uppercase">
                  <th className="py-3.5 pl-4">{lang === "ar" ? "رقم السند #" : "Receipt #"}</th>
                  <th className="py-3.5">{lang === "ar" ? "التاريخ" : "Date"}</th>
                  <th className="py-3.5">{lang === "ar" ? "رقم الفاتورة #" : "Invoice #"}</th>
                  <th className="py-3.5">{lang === "ar" ? "العميل" : "Client"}</th>
                  <th className="py-3.5">{lang === "ar" ? "طريقة الدفع" : "Method"}</th>
                  <th className="py-3.5">{lang === "ar" ? "المرجع" : "Reference"}</th>
                  <th className="py-3.5 text-right pr-4">{lang === "ar" ? `المبلغ (${currencySymbol})` : `Amount (${currencySymbol})`}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
                {filteredPayments.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40">
                    <td className="py-3.5 pl-4 font-mono font-bold">#{p.paymentNumber || p.id.slice(-4)}</td>
                    <td className="py-3.5 font-mono text-slate-500">{p.paymentDate}</td>
                    <td className="py-3.5 font-mono text-emerald-600 font-bold">#{p.invoiceNumber}</td>
                    <td className="py-3.5 font-bold">{p.clientName}</td>
                    <td className="py-3.5">{p.paymentMethod}</td>
                    <td className="py-3.5 font-mono text-slate-500">{p.referenceNumber || "—"}</td>
                    <td className="py-3.5 text-right pr-4 font-mono font-black text-emerald-600">{currencySymbol} {formatUAEAmount(p.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : reportType === "METHODS" ? (
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold uppercase">
                  <th className="py-3.5 pl-4">{lang === "ar" ? "طريقة الدفع" : "Payment Method"}</th>
                  <th className="py-3.5 text-center">{lang === "ar" ? "عدد المعاملات" : "Transactions Count"}</th>
                  <th className="py-3.5 text-right">{lang === "ar" ? `إجمالي المحصل (${currencySymbol})` : `Total Settled (${currencySymbol})`}</th>
                  <th className="py-3.5 text-right pr-4">{lang === "ar" ? "النسبة (%)" : "Share (%)"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
                {Object.entries(methodMap).map(([m, data]) => (
                  <tr key={m} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40">
                    <td className="py-3.5 pl-4 font-bold text-slate-900 dark:text-white">{m}</td>
                    <td className="py-3.5 text-center font-mono">{data.count}</td>
                    <td className="py-3.5 text-right font-mono font-bold text-emerald-600">{currencySymbol} {formatUAEAmount(data.total)}</td>
                    <td className="py-3.5 text-right pr-4 font-mono font-bold">
                      {totalCollected > 0 ? Math.round((data.total / totalCollected) * 100) : 0}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold uppercase">
                  <th className="py-3.5 pl-4">{lang === "ar" ? "رقم الفاتورة #" : "Invoice #"}</th>
                  <th className="py-3.5">{lang === "ar" ? "التاريخ" : "Date"}</th>
                  <th className="py-3.5">{lang === "ar" ? "العميل" : "Client"}</th>
                  <th className="py-3.5 text-right">{lang === "ar" ? "المجموع الفرعي" : "Subtotal"}</th>
                  <th className="py-3.5 text-right">{lang === "ar" ? "الضريبة 5%" : "VAT 5%"}</th>
                  <th className="py-3.5 text-right">{lang === "ar" ? `الإجمالي النهائي (${currencySymbol})` : `Grand Total (${currencySymbol})`}</th>
                  <th className="py-3.5 text-right">{lang === "ar" ? "المدفوع" : "Paid"}</th>
                  <th className="py-3.5 text-right">{lang === "ar" ? "المتبقي" : "Due"}</th>
                  <th className="py-3.5 text-center pr-4">{lang === "ar" ? "الحالة" : "Status"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
                {filteredInvoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40">
                    <td className="py-3.5 pl-4 font-mono font-bold text-slate-900 dark:text-white">#{inv.meta.invoiceNumber}</td>
                    <td className="py-3.5 font-mono text-slate-500">{inv.meta.invoiceDate}</td>
                    <td className="py-3.5 font-bold">{inv.customer.name}</td>
                    <td className="py-3.5 text-right font-mono">{formatUAEAmount(inv.totals.subtotal)}</td>
                    <td className="py-3.5 text-right font-mono">{formatUAEAmount(inv.totals.vatAmount)}</td>
                    <td className="py-3.5 text-right font-mono font-black text-slate-900 dark:text-white">{formatUAEAmount(inv.totals.grandTotal)}</td>
                    <td className="py-3.5 text-right font-mono text-emerald-600">{formatUAEAmount(inv.paidAmount)}</td>
                    <td className="py-3.5 text-right font-mono font-bold text-amber-600">{formatUAEAmount(inv.dueAmount)}</td>
                    <td className="py-3.5 text-center pr-4 font-bold text-[11px]">
                      <StatusBadge status={inv.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

