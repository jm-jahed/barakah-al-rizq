"use client";

import React, { useState } from "react";
import {
  Users,
  FileText,
  DollarSign,
  CheckCircle2,
  Clock,
  AlertTriangle,
  PieChart as PieChartIcon,
  TrendingUp,
  Plus,
  CreditCard,
  ArrowUpRight,
  ShieldAlert,
  Send,
  Eye,
  Calendar,
  Layers,
  BarChart3,
  ExternalLink,
  ChevronRight,
  FileSpreadsheet
} from "lucide-react";
import { Client, ManagedInvoice, Payment, DashboardStats, ReceivablesSummary } from "@/types/dashboard";
import { formatUAEAmount } from "@/utils/calculations";
import { StatusBadge } from "./StatusBadge";
import { parseDate, isDemoMode } from "@/services/invoiceStorage";
import { useInvoiceLanguage } from "@/context/InvoiceLanguageContext";

interface DashboardOverviewProps {
  stats: DashboardStats;
  invoices: ManagedInvoice[];
  clients: Client[];
  payments: Payment[];
  receivables: ReceivablesSummary;
  onNavigate: (view: "dashboard" | "clients" | "invoices" | "payments" | "receivables" | "reports" | "generator", filter?: string) => void;
  onNewInvoice: () => void;
  onNewClient: () => void;
  onRecordPayment: (invoice?: ManagedInvoice) => void;
  onOpenReminder: (invoice: ManagedInvoice) => void;
  onViewInvoice: (invoice: ManagedInvoice) => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  stats,
  invoices,
  clients,
  payments,
  receivables,
  onNavigate,
  onNewInvoice,
  onNewClient,
  onRecordPayment,
  onOpenReminder,
  onViewInvoice,
}) => {
  const { lang, isRtl, t } = useInvoiceLanguage();
  const currencySymbol = lang === "ar" ? "د.إ" : "Dhs";
  const [timeRange, setTimeRange] = useState<"all" | "this_month" | "last_month">("all");

  // Urgent overdue & due invoices
  const overdueInvoices = invoices.filter((inv) => inv.status === "OVERDUE");
  const dueInvoices = invoices.filter((inv) => inv.status === "DUE" || inv.status === "PENDING");
  const allDueAndOverdue = invoices.filter(
    (inv) => inv.status === "DUE" || inv.status === "OVERDUE" || inv.status === "PENDING" || (inv.dueAmount || 0) > 0
  );
  const recentInvoices = [...invoices]
    .sort((a, b) => parseDate(b.meta.invoiceDate).getTime() - parseDate(a.meta.invoiceDate).getTime())
    .slice(0, 6);

  // Calculate payment method distribution
  const methodMap: Record<string, number> = {};
  payments.forEach((p) => {
    methodMap[p.paymentMethod] = (methodMap[p.paymentMethod] || 0) + p.amount;
  });
  const totalPaymentVol = Object.values(methodMap).reduce((a, b) => a + b, 0) || 1;

  // Top clients by invoiced volume
  const topClients = [...clients]
    .sort((a, b) => b.totalInvoiced - a.totalInvoiced)
    .slice(0, 5);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Top Executive Welcome & Quick Action Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-gradient from-emerald-500/10 to-transparent pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              {lang === "ar" ? "نظام الفواتير المعتمد للهيئة الاتحادية للضرائب في الإمارات" : "UAE Live FTA Accounting System"}
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              <span>{lang === "ar" ? "نظرة عامة على الفواتير والذمم" : "Financial & Billing Overview"}</span>
            </h1>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              {isDemoMode()
                ? (lang === "ar" ? "لوحة تحكم تنفيذية لإدارة الفواتير الضريبية، التسويات الجزئية، أعمار الذمم المدينة، وحسابات العملاء في دولة الإمارات." : "Real-time enterprise dashboard managing multi-industry tax invoices, partial settlements, receivables aging, and commercial ledgers across the UAE.")
                : (lang === "ar" ? "لوحة تحكم تنفيذية لإدارة الفواتير الضريبية والذمم المدينة وحسابات عملاء شركة نبتة لتجارة الخضار والفواكه." : "Real-time enterprise dashboard managing tax invoices, partial settlements, receivables aging, and client ledgers for Nabta Vegetables & Fruits Trading L.L.C.")}
            </p>
          </div>

          {/* Quick Action Buttons Group */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onNewInvoice}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>+{t("newInvoice")}</span>
            </button>
            <button
              onClick={onNewClient}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-100 font-semibold text-sm rounded-xl border border-slate-700 hover:border-slate-500 transition-all cursor-pointer"
            >
              <Users className="w-4 h-4 text-emerald-400" />
              <span>+{t("newClient")}</span>
            </button>
            <button
              onClick={() => onRecordPayment()}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-950/70 hover:bg-emerald-900/90 text-emerald-300 font-semibold text-sm rounded-xl border border-emerald-500/30 transition-all cursor-pointer"
            >
              <CreditCard className="w-4 h-4" />
              <span>{t("recordPayment")}</span>
            </button>
          </div>
        </div>

        {/* Quick Filter Shortcuts */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
          <span className="text-slate-400 font-semibold">{t("quickViews")}</span>
          <button
            onClick={() => onNavigate("invoices", "PENDING")}
            className="px-3 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 transition-colors cursor-pointer font-semibold"
          >
            {lang === "ar" ? `الفواتير المعلقة (${allDueAndOverdue.length})` : `View Pending (${allDueAndOverdue.length})`}
          </button>
          <button
            onClick={() => onNavigate("clients")}
            className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition-colors cursor-pointer"
          >
            {lang === "ar" ? `عرض العملاء (${stats.totalClients})` : `View Clients (${stats.totalClients})`}
          </button>
          <button
            onClick={() => onNavigate("reports")}
            className="px-3 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 transition-colors cursor-pointer flex items-center gap-1"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            {t("tabReports")}
          </button>
        </div>
      </div>

      {/* 2. Real-Time KPI Stats Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>{t("financialPerformance")}</span>
          </h2>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700">
            {lang === "ar" ? "العملة: درهم (د.إ)" : "Currency: Dhs (درهم)"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4">
          {/* 1. Total Clients */}
          <div
            onClick={() => onNavigate("clients")}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 hover:border-emerald-500/50 hover:shadow-lg transition-all cursor-pointer group min-w-0 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider truncate">
                {t("activeClients")}
              </span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white font-mono">
              {stats.totalClients}
            </div>
            <div className="mt-2 text-xs text-slate-500 flex items-center justify-between gap-1">
              <span className="truncate">{lang === "ar" ? "الحسابات التجارية" : "Commercial Accounts"}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </div>

          {/* 2. Total Invoices */}
          <div
            onClick={() => onNavigate("invoices")}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 hover:border-emerald-500/50 hover:shadow-lg transition-all cursor-pointer group min-w-0 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider truncate">
                {t("invoicesGenerated")}
              </span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white font-mono">
              {stats.totalInvoices}
            </div>
            <div className="mt-2 text-xs text-slate-500 flex items-center justify-between gap-1">
              <span className="truncate">{lang === "ar" ? "فواتير ضريبية صادرة" : "Tax Invoices Generated"}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </div>

          {/* 3. Total Sales Value */}
          <div
            onClick={() => onNavigate("reports")}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 hover:border-emerald-500/50 hover:shadow-lg transition-all cursor-pointer group min-w-0 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider truncate">
                {t("totalRevenue")}
              </span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5 flex-nowrap min-w-0" title={`${currencySymbol} ${formatUAEAmount(stats.totalSales)}`}>
              <span className="text-[11px] font-bold text-emerald-600/70 dark:text-emerald-400/70 uppercase shrink-0 font-sans">{currencySymbol}</span>
              <span className="text-base sm:text-lg xl:text-[17px] 2xl:text-xl font-black text-emerald-600 dark:text-emerald-400 font-mono tracking-tight whitespace-nowrap truncate">
                {formatUAEAmount(stats.totalSales)}
              </span>
            </div>
            <div className="mt-2 text-xs text-slate-500 flex items-center justify-between gap-1">
              <span className="truncate">{lang === "ar" ? "شامل ضريبة القيمة المضافة" : "Gross Invoiced (Inc. VAT)"}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </div>

          {/* 4. Total Paid */}
          <div
            onClick={() => onNavigate("payments")}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 hover:border-emerald-500/50 hover:shadow-lg transition-all cursor-pointer group min-w-0 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider truncate">
                {t("totalCollected")}
              </span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5 flex-nowrap min-w-0" title={`${currencySymbol} ${formatUAEAmount(stats.totalPaid)}`}>
              <span className="text-[11px] font-bold text-teal-600/70 dark:text-teal-400/70 uppercase shrink-0 font-sans">{currencySymbol}</span>
              <span className="text-base sm:text-lg xl:text-[17px] 2xl:text-xl font-black text-teal-600 dark:text-teal-400 font-mono tracking-tight whitespace-nowrap truncate">
                {formatUAEAmount(stats.totalPaid)}
              </span>
            </div>
            <div className="mt-2 text-xs text-slate-500 flex items-center justify-between gap-1">
              <span className="truncate">{lang === "ar" ? "الإيراد المحصل" : "Collected Revenue"} ({stats.totalSales > 0 ? Math.round((stats.totalPaid / stats.totalSales) * 100) : 0}%)</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </div>

          {/* 5. Total Due */}
          <div
            onClick={() => onNavigate("receivables")}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 hover:border-amber-500/50 hover:shadow-lg transition-all cursor-pointer group min-w-0 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider truncate">
                {t("totalOutstanding")}
              </span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5 flex-nowrap min-w-0" title={`${currencySymbol} ${formatUAEAmount(stats.totalDue)}`}>
              <span className="text-[11px] font-bold text-amber-600/70 dark:text-amber-400/70 uppercase shrink-0 font-sans">{currencySymbol}</span>
              <span className="text-base sm:text-lg xl:text-[17px] 2xl:text-xl font-black text-amber-600 dark:text-amber-400 font-mono tracking-tight whitespace-nowrap truncate">
                {formatUAEAmount(stats.totalDue)}
              </span>
            </div>
            <div className="mt-2 text-xs text-slate-500 flex items-center justify-between gap-1">
              <span className="truncate">Outstanding Balance</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Interactive Real-Data Financial Charts & Aging Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart 1: Revenue & Collections Progress (2 cols) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-500" />
                <span>Accounts Receivable & Aging Distribution</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Total outstanding receivables across all wholesale commercial ledgers
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block" /> Paid & Collected
              </span>
              <span className="flex items-center gap-1.5 text-rose-500">
                <span className="w-3 h-3 rounded-sm bg-rose-500 inline-block" /> Total Outstanding Due
              </span>
            </div>
          </div>

          {/* Aging Visual Bar */}
          <div className="space-y-4">
            <div className="h-6 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex shadow-inner">
              <div
                style={{ width: `${stats.totalSales > 0 ? (stats.totalPaid / stats.totalSales) * 100 : 0}%` }}
                className="bg-emerald-500 h-full transition-all duration-500 hover:opacity-90"
                title={`Paid: ${currencySymbol} ${formatUAEAmount(stats.totalPaid)}`}
              />
              <div
                style={{
                  width: `${
                    stats.totalSales > 0
                      ? (receivables.totalReceivable / stats.totalSales) * 100
                      : 0
                  }%`,
                }}
                className="bg-rose-500 h-full transition-all duration-500 hover:opacity-90"
                title={`Total Due: ${currencySymbol} ${formatUAEAmount(receivables.totalReceivable)}`}
              />
            </div>

            {/* Outstanding Due Summary Card */}
            <div className="pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">{t("overdueAmount")}</span>
                  <span className="text-xs text-slate-400 mt-0.5 block">{lang === "ar" ? "عبر جميع الحسابات التجارية" : "Across all wholesale ledgers"}</span>
                </div>
                <div className="sm:text-right">
                  <span className="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400 font-mono block">
                    {currencySymbol} {formatUAEAmount(receivables.totalReceivable)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => onNavigate("receivables")}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>{lang === "ar" ? "فتح جدول أعمار الذمم المدينة الكامل" : "Open Full Accounts Receivable Aging Matrix"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Chart 2: Payment Methods Breakdown (1 col) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <PieChartIcon className="w-5 h-5 text-emerald-500" />
                <span>{t("paymentsTitle")}</span>
              </h3>
              <span className="text-xs text-slate-500 font-mono">{payments.length} {lang === "ar" ? "عمليات دفع" : "Payments"}</span>
            </div>
            <p className="text-xs text-slate-500 mb-5">
              {lang === "ar" ? "قنوات السداد المستخدمة في المعاملات المسجلة" : "Settlement channels used across recorded transactions"}
            </p>

            {/* Methods List */}
            <div className="space-y-3">
              {Object.entries(methodMap).length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-400">
                  {lang === "ar" ? "لم يتم تسجيل أي عمليات دفع بعد." : "No payment records logged yet."}
                </div>
              ) : (
                Object.entries(methodMap).map(([method, amt]) => {
                  const pct = Math.round((amt / totalPaymentVol) * 100);
                  return (
                    <div key={method} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-700 dark:text-slate-300">{method}</span>
                        <span className="text-slate-900 dark:text-white font-mono">
                          {currencySymbol} {formatUAEAmount(amt)} <span className="text-slate-400 font-normal">({pct}%)</span>
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${pct}%` }}
                          className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="pt-5 border-t border-slate-100 dark:border-slate-800 mt-6 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">{lang === "ar" ? "إجمالي التحصيل:" : "Total Settlement:"}</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">
              {currencySymbol} {formatUAEAmount(stats.totalPaid)}
            </span>
          </div>
        </div>
      </div>

      {/* 5. Recent Invoices Table & Top Clients */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Invoices (2 cols) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-500" />
                <span>{t("recentInvoices")}</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {lang === "ar" ? "أحدث الفواتير الضريبية المصدرة" : "Latest tax invoices issued across all accounts"}
              </p>
            </div>
            <button
              onClick={() => onNavigate("invoices")}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>{t("viewAll")} ({stats.totalInvoices})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
                  <th className="pb-3 pl-2">{t("invoiceNumber")}</th>
                  <th className="pb-3">{t("client")}</th>
                  <th className="pb-3">{t("date")}</th>
                  <th className="pb-3 text-right">{t("amount")}</th>
                  <th className="pb-3 text-right">{t("balanceDue")} ({currencySymbol})</th>
                  <th className="pb-3 text-center">{t("status")}</th>
                  <th className="pb-3 text-right pr-2">{t("actions")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
                {recentInvoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 pl-2 font-mono font-bold text-slate-900 dark:text-white">
                      #{inv.meta.invoiceNumber}
                    </td>
                    <td className="py-3.5 max-w-[160px] truncate text-slate-800 dark:text-slate-200 font-semibold" title={inv.customer.name}>
                      {inv.customer.name}
                    </td>
                    <td className="py-3.5 text-slate-500 font-mono">
                      {inv.meta.invoiceDate}
                    </td>
                    <td className="py-3.5 text-right font-mono font-bold text-slate-900 dark:text-white">
                      {formatUAEAmount(inv.totals.grandTotal)}
                    </td>
                    <td className="py-3.5 text-right font-mono text-slate-600 dark:text-slate-400">
                      {inv.dueAmount > 0 ? (
                        <span className={inv.status === "OVERDUE" ? "text-rose-600 font-bold" : "text-amber-600 font-bold"}>
                          {formatUAEAmount(inv.dueAmount)}
                        </span>
                      ) : (
                        <span className="text-emerald-500 font-semibold">0.000</span>
                      )}
                    </td>
                    <td className="py-3.5 text-center">
                      <StatusBadge status={inv.status} overdueDays={inv.overdueDays} size="sm" />
                    </td>
                    <td className="py-3.5 text-right pr-2">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => onViewInvoice(inv)}
                          title="View 1:1 Scan Invoice"
                          className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {inv.dueAmount > 0 && (
                          <button
                            onClick={() => onRecordPayment(inv)}
                            title="Record Payment"
                            className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          >
                            <CreditCard className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Clients by Revenue (1 col) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-500" />
                <span>{lang === "ar" ? "أهم الحسابات" : "Top Accounts"}</span>
              </h3>
              <button
                onClick={() => onNavigate("clients")}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                {lang === "ar" ? `الكل (${clients.length})` : `All (${clients.length})`}
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              {lang === "ar" ? "كبار العملاء التجاريين من حيث حجم المبيعات" : "Highest volume commercial clients"}
            </p>

            <div className="space-y-3">
              {topClients.map((client, idx) => (
                <div
                  key={client.id}
                  onClick={() => onNavigate("clients")}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-100/70 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black flex items-center justify-center font-mono">
                        {idx + 1}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        {client.name}
                      </h4>
                    </div>
                    <span className="text-xs font-black text-slate-900 dark:text-white font-mono shrink-0 ml-2">
                      {currencySymbol} {formatUAEAmount(client.totalInvoiced)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1.5 pl-7">
                    <span>{client.totalInvoices} {lang === "ar" ? "فواتير" : "Invoices"}</span>
                    {client.totalDue > 0 ? (
                      <span className="text-amber-600 dark:text-amber-400 font-semibold font-mono">
                        {lang === "ar" ? `المستحق: ${currencySymbol} ${formatUAEAmount(client.totalDue)}` : `Due: ${currencySymbol} ${formatUAEAmount(client.totalDue)}`}
                      </span>
                    ) : (
                      <span className="text-emerald-500 font-semibold">{lang === "ar" ? "مسدد بالكامل" : "Settled"}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={onNewClient}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4 text-emerald-500" />
              <span>{lang === "ar" ? "تسجيل عميل جديد" : "Register New Client"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
