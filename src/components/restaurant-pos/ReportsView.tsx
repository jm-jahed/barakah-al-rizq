"use client";

import React, { useState, useMemo } from "react";
import {
  BarChart3,
  Calendar,
  Download,
  Printer,
  FileSpreadsheet,
  TrendingUp,
  CreditCard,
  Banknote,
  Receipt,
  PieChart,
  Percent,
  UtensilsCrossed,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import * as XLSX from "xlsx";

type ReportPeriod = "today" | "yesterday" | "week" | "month" | "all";
type ReportTab = "summary" | "products" | "categories" | "vat" | "payments" | "order_types";

export const ReportsView: React.FC = () => {
  const { orders, products, categories, formatDhs, t, lang } = useRestaurantPos();

  const [selectedPeriod, setSelectedPeriod] = useState<ReportPeriod>("today");
  const [activeTab, setActiveTab] = useState<ReportTab>("summary");

  // Filter orders based on period
  const filteredOrders = useMemo(() => {
    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];

    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    const weekAgo = new Date(now);
    weekAgo.setDate(weekAgo.getDate() - 7);

    const monthAgo = new Date(now);
    monthAgo.setDate(monthAgo.getDate() - 30);

    return orders.filter((order) => {
      if (order.orderStatus === "voided" || order.orderStatus === "cancelled") return false;

      const orderDate = order.createdAt.split(" ")[0] || order.createdAt;

      if (selectedPeriod === "today") {
        return orderDate === todayStr || order.orderStatus === "paid";
      }
      if (selectedPeriod === "yesterday") {
        return orderDate === yesterdayStr;
      }
      if (selectedPeriod === "week") {
        return new Date(orderDate) >= weekAgo;
      }
      if (selectedPeriod === "month") {
        return new Date(orderDate) >= monthAgo;
      }
      return true;
    });
  }, [orders, selectedPeriod]);

  // Aggregate Core Metrics
  const metrics = useMemo(() => {
    const totalSales = filteredOrders.reduce((sum, o) => sum + o.grandTotal, 0);
    const totalTaxable = filteredOrders.reduce((sum, o) => sum + o.taxableAmount, 0);
    const totalVat = filteredOrders.reduce((sum, o) => sum + o.vatAmount, 0);
    const totalDiscount = filteredOrders.reduce((sum, o) => sum + o.discountAmount, 0);
    const count = filteredOrders.length;
    const avgSpend = count > 0 ? totalSales / count : 0;

    let cashSales = 0;
    let cardSales = 0;
    let applePaySales = 0;
    let otherSales = 0;

    let dineInSales = 0;
    let takeawaySales = 0;
    let deliverySales = 0;
    let dineInCount = 0;
    let takeawayCount = 0;
    let deliveryCount = 0;

    filteredOrders.forEach((o) => {
      if (o.paymentMethod === "cash") cashSales += o.grandTotal;
      else if (o.paymentMethod === "card") cardSales += o.grandTotal;
      else if (o.paymentMethod === "apple_pay") applePaySales += o.grandTotal;
      else otherSales += o.grandTotal;

      if (o.orderType === "dine_in") {
        dineInSales += o.grandTotal;
        dineInCount++;
      } else if (o.orderType === "takeaway") {
        takeawaySales += o.grandTotal;
        takeawayCount++;
      } else if (o.orderType === "delivery") {
        deliverySales += o.grandTotal;
        deliveryCount++;
      }
    });

    return {
      totalSales: Math.round(totalSales * 100) / 100,
      totalTaxable: Math.round(totalTaxable * 100) / 100,
      totalVat: Math.round(totalVat * 100) / 100,
      totalDiscount: Math.round(totalDiscount * 100) / 100,
      orderCount: count,
      avgSpend: Math.round(avgSpend * 100) / 100,
      cashSales: Math.round(cashSales * 100) / 100,
      cardSales: Math.round(cardSales * 100) / 100,
      applePaySales: Math.round(applePaySales * 100) / 100,
      otherSales: Math.round(otherSales * 100) / 100,
      dineInSales: Math.round(dineInSales * 100) / 100,
      takeawaySales: Math.round(takeawaySales * 100) / 100,
      deliverySales: Math.round(deliverySales * 100) / 100,
      dineInCount,
      takeawayCount,
      deliveryCount,
    };
  }, [filteredOrders]);

  // Product Sales Aggregate
  const productAggregates = useMemo(() => {
    const map = new Map<string, { name: string; arabicName: string; category: string; qty: number; revenue: number }>();

    filteredOrders.forEach((o) => {
      o.items.forEach((item) => {
        const existing = map.get(item.productId) || {
          name: item.name,
          arabicName: item.arabicName,
          category: item.category,
          qty: 0,
          revenue: 0,
        };
        existing.qty += item.quantity;
        existing.revenue += item.lineTotal;
        map.set(item.productId, existing);
      });
    });

    return Array.from(map.values()).sort((a, b) => b.revenue - a.revenue);
  }, [filteredOrders]);

  // Category Sales Aggregate
  const categoryAggregates = useMemo(() => {
    const map = new Map<string, { slug: string; name: string; arabicName: string; count: number; revenue: number }>();

    filteredOrders.forEach((o) => {
      o.items.forEach((item) => {
        const cat = categories.find((c) => c.slug === item.category);
        const name = cat ? cat.name : item.category;
        const arabicName = cat ? cat.arabicName : item.category;

        const existing = map.get(item.category) || {
          slug: item.category,
          name,
          arabicName,
          count: 0,
          revenue: 0,
        };
        existing.count += item.quantity;
        existing.revenue += item.lineTotal;
        map.set(item.category, existing);
      });
    });

    return Array.from(map.values()).sort((a, b) => b.revenue - a.revenue);
  }, [filteredOrders, categories]);

  // Export to CSV
  const handleExportCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Order Number,Receipt Number,Date,Order Type,Payment Method,Subtotal (Dhs),Discount (Dhs),VAT 5% (Dhs),Grand Total (Dhs),Cashier\n";

    filteredOrders.forEach((o) => {
      csvContent += `"${o.orderNumber}","${o.receiptNumber}","${o.createdAt}","${o.orderType}","${o.paymentMethod}",${o.subtotal},${o.discountAmount},${o.vatAmount},${o.grandTotal},"${o.cashierName}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Restaurant_POS_Report_${selectedPeriod}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export to Excel (XLSX)
  const handleExportExcel = () => {
    const ordersData = filteredOrders.map((o) => ({
      "Order #": o.orderNumber,
      "Receipt #": o.receiptNumber,
      Date: o.createdAt,
      Type: o.orderType.toUpperCase(),
      Payment: o.paymentMethod.toUpperCase(),
      "Subtotal (Dhs)": o.subtotal,
      "Discount (Dhs)": o.discountAmount,
      "VAT 5% (Dhs)": o.vatAmount,
      "Grand Total (Dhs)": o.grandTotal,
      Cashier: o.cashierName,
    }));

    const productsData = productAggregates.map((p) => ({
      Product: p.name,
      Category: p.category,
      "Units Sold": p.qty,
      "Revenue (Dhs)": p.revenue,
    }));

    const wb = XLSX.utils.book_new();
    const wsOrders = XLSX.utils.json_to_sheet(ordersData);
    const wsProducts = XLSX.utils.json_to_sheet(productsData);

    XLSX.utils.book_append_sheet(wb, wsOrders, "Orders Ledger");
    XLSX.utils.book_append_sheet(wb, wsProducts, "Product Sales");
    XLSX.writeFile(wb, `Restaurant_POS_Audit_${selectedPeriod}.xlsx`);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-100 dark:bg-[#0B0D14] text-slate-900 dark:text-slate-100 min-h-0 h-full overflow-hidden">
      {/* Top Banner */}
      <div className="flex-shrink-0 px-3 sm:px-6 py-2.5 sm:py-3 border-b border-slate-200 dark:border-[#1E2230] bg-white dark:bg-[#10121A] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-bold">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              {lang === "ar" ? "تقارير المبيعات والبيانات المالية" : "Sales & Financial Reports"}
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-amber-800 dark:text-[#D4AF37] font-mono font-bold">
                {filteredOrders.length} {lang === "ar" ? "عملية مدققة" : "Audited Orders"}
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {lang === "ar"
                ? "مبيعات يومية، أسبوعية، وشهرية، تفاصيل الأصناف، ضريبة القيمة المضافة، وتصدير Excel/CSV"
                : "Daily, weekly & monthly metrics, item breakdown, 5% UAE VAT ledger, and one-click Excel export"}
            </p>
          </div>
        </div>

        {/* Date Filter & Export Buttons */}
        <div className="flex items-center gap-2 flex-wrap text-xs">
          {/* Period selector pills */}
          <div className="flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-[#161924] border border-slate-300 dark:border-[#252A3C] overflow-x-auto no-scrollbar">
            {(["today", "yesterday", "week", "month", "all"] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1.5 rounded-lg font-bold capitalize transition-all shrink-0 ${
                  selectedPeriod === period
                    ? "bg-[#D4AF37] text-black shadow-sm font-black"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {period === "today"
                  ? lang === "ar"
                    ? "اليوم"
                    : "Today"
                  : period === "yesterday"
                  ? lang === "ar"
                    ? "أمس"
                    : "Yesterday"
                  : period === "week"
                  ? lang === "ar"
                    ? "هذا الأسبوع"
                    : "This Week"
                  : period === "month"
                  ? lang === "ar"
                    ? "هذا الشهر"
                    : "This Month"
                  : lang === "ar"
                  ? "الكل"
                  : "All Time"}
              </button>
            ))}
          </div>

          {/* Export CSV button */}
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#1A1D2A] hover:bg-slate-200 dark:hover:bg-[#252A3C] border border-slate-300 dark:border-[#2B3042] text-slate-800 dark:text-slate-200 font-bold transition"
            title="Download CSV"
          >
            <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>CSV</span>
          </button>

          {/* Export Excel button */}
          <button
            onClick={handleExportExcel}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/40 hover:bg-emerald-200 dark:hover:bg-emerald-900/60 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300 font-bold transition shadow-sm"
            title="Download Excel Workbook"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Excel (.xlsx)</span>
          </button>

          {/* Print button */}
          <button
            onClick={() => window.print()}
            className="p-1.5 rounded-xl bg-slate-100 dark:bg-[#1A1D2A] hover:bg-slate-200 dark:hover:bg-[#252A3C] border border-slate-300 dark:border-[#2B3042] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
            title="Print Report"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Primary KPI Cards */}
      <div className="flex-shrink-0 px-3 sm:px-6 py-2.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 border-b border-slate-200 dark:border-[#1A1D28] bg-slate-50 dark:bg-[#0E1017]">
        {/* Total Gross Sales */}
        <div className="p-3.5 rounded-xl bg-[#13151F] border border-[#222736] shadow-sm">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold uppercase">
            <span>{lang === "ar" ? "إجمالي المبيعات" : "Total Sales"}</span>
            <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <div className="text-lg sm:text-xl font-black text-white font-mono mt-1.5">
            {formatDhs(metrics.totalSales)}
          </div>
          <div className="text-[10px] text-emerald-400 font-semibold mt-1">
            {metrics.orderCount} {lang === "ar" ? "طلب مسجل" : "orders billed"}
          </div>
        </div>

        {/* Taxable Amount */}
        <div className="p-3.5 rounded-xl bg-[#13151F] border border-[#222736] shadow-sm">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold uppercase">
            <span>{lang === "ar" ? "المبلغ الخاضع للضريبة" : "Taxable Net"}</span>
            <Receipt className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-lg sm:text-xl font-black text-white font-mono mt-1.5">
            {formatDhs(metrics.totalTaxable)}
          </div>
          <div className="text-[10px] text-slate-400 mt-1 font-mono">
            Subtotal - Discounts
          </div>
        </div>

        {/* VAT 5% Collected */}
        <div className="p-3.5 rounded-xl bg-[#13151F] border border-[#222736] shadow-sm">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold uppercase">
            <span>{lang === "ar" ? "ضريبة القيمة المضافة 5%" : "VAT 5%"}</span>
            <Percent className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-lg sm:text-xl font-black text-[#D4AF37] font-mono mt-1.5">
            {formatDhs(metrics.totalVat)}
          </div>
          <div className="text-[10px] text-slate-400 mt-1 font-mono">
            FTA Standard 5%
          </div>
        </div>

        {/* Average Spend */}
        <div className="p-3.5 rounded-xl bg-[#13151F] border border-[#222736] shadow-sm">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold uppercase">
            <span>{lang === "ar" ? "متوسط الطلب" : "Avg Order"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="text-lg sm:text-xl font-black text-white font-mono mt-1.5">
            {formatDhs(metrics.avgSpend)}
          </div>
          <div className="text-[10px] text-slate-400 mt-1">
            {lang === "ar" ? "لكل ضيف / فاتورة" : "per guest invoice"}
          </div>
        </div>

        {/* Card & Apple Pay Sales */}
        <div className="p-3.5 rounded-xl bg-[#13151F] border border-[#222736] shadow-sm">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold uppercase">
            <span>{lang === "ar" ? "بطاقة وأبل باي" : "Card / Digital"}</span>
            <CreditCard className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-lg sm:text-xl font-black text-white font-mono mt-1.5">
            {formatDhs(metrics.cardSales + metrics.applePaySales)}
          </div>
          <div className="text-[10px] text-slate-400 mt-1 font-mono">
            {Math.round(((metrics.cardSales + metrics.applePaySales) / (metrics.totalSales || 1)) * 100)}% of total
          </div>
        </div>

        {/* Cash Sales */}
        <div className="p-3.5 rounded-xl bg-[#13151F] border border-[#222736] shadow-sm">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold uppercase">
            <span>{lang === "ar" ? "نقداً في الدرج" : "Cash in Drawer"}</span>
            <Banknote className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-lg sm:text-xl font-black text-white font-mono mt-1.5">
            {formatDhs(metrics.cashSales)}
          </div>
          <div className="text-[10px] text-slate-400 mt-1 font-mono">
            {Math.round((metrics.cashSales / (metrics.totalSales || 1)) * 100)}% of total
          </div>
        </div>
      </div>

      {/* Secondary Report Navigation Tabs */}
      <div className="flex-shrink-0 px-3 sm:px-6 py-1.5 bg-slate-50 dark:bg-[#0F1118] border-b border-slate-200 dark:border-[#1A1D28] flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
        {[
          { id: "summary", label: lang === "ar" ? "الملخص المالي الشامل" : "Executive Summary" },
          { id: "products", label: lang === "ar" ? "مبيعات الأصناف والوجبات" : "Product Sales" },
          { id: "categories", label: lang === "ar" ? "تحليل التصنيفات" : "Category Breakdown" },
          { id: "vat", label: lang === "ar" ? "سجل ضريبة القيمة المضافة" : "VAT & Tax Ledger" },
          { id: "payments", label: lang === "ar" ? "وسائل وطرق الدفع" : "Payment Reconciliation" },
          { id: "order_types", label: lang === "ar" ? "توزيع القنوات (محلي/سفري/توصيل)" : "Channel Distribution" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as ReportTab)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 ${
              activeTab === tab.id
                ? "bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/15 font-black"
                : "bg-white dark:bg-[#141722] border border-slate-200 dark:border-[#222736] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-amber-500 dark:hover:border-[#333A4E]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Tab Content */}
      <div className="flex-1 p-3 sm:p-5 overflow-y-auto min-h-0 h-full space-y-6 pb-16">
        {/* TAB 1: EXECUTIVE SUMMARY */}
        {activeTab === "summary" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Channel Distribution Summary Card */}
              <div className="p-5 rounded-2xl bg-[#12141C] border border-[#222736] space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <UtensilsCrossed className="w-4 h-4 text-[#D4AF37]" />
                  <span>{lang === "ar" ? "توزيع الإيرادات حسب قناة الطلب" : "Revenue by Order Channel"}</span>
                </h4>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between font-bold mb-1">
                      <span className="text-slate-300">
                        {lang === "ar" ? "صالة وتناول محلي (Dine-In)" : "Dine-In Restaurant"}
                      </span>
                      <span className="font-mono text-[#D4AF37]">{formatDhs(metrics.dineInSales)}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#1F2433] overflow-hidden">
                      <div
                        className="h-full bg-[#D4AF37] rounded-full"
                        style={{
                          width: `${(metrics.dineInSales / (metrics.totalSales || 1)) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">
                      {metrics.dineInCount} {lang === "ar" ? "طاولة تم خدمتها" : "tables served"}
                    </span>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold mb-1">
                      <span className="text-slate-300">
                        {lang === "ar" ? "استلام خارجي وسفري (Takeaway)" : "Takeaway Counter"}
                      </span>
                      <span className="font-mono text-blue-400">{formatDhs(metrics.takeawaySales)}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#1F2433] overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{
                          width: `${(metrics.takeawaySales / (metrics.totalSales || 1)) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">
                      {metrics.takeawayCount} {lang === "ar" ? "طلب خارجي" : "counter orders"}
                    </span>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold mb-1">
                      <span className="text-slate-300">
                        {lang === "ar" ? "توصيل للمنازل (Delivery)" : "Home Delivery"}
                      </span>
                      <span className="font-mono text-emerald-400">{formatDhs(metrics.deliverySales)}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#1F2433] overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{
                          width: `${(metrics.deliverySales / (metrics.totalSales || 1)) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">
                      {metrics.deliveryCount} {lang === "ar" ? "رحلة توصيل" : "trips completed"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Reconciliation Summary Card */}
              <div className="p-5 rounded-2xl bg-[#12141C] border border-[#222736] space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                  <span>{lang === "ar" ? "تسوية وسائل السداد والدفع" : "Settlement Methods"}</span>
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#161924] border border-[#262B3B] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Banknote className="w-4 h-4 text-emerald-400" />
                      <span className="font-bold text-slate-200">
                        {lang === "ar" ? "نقداً (Cash)" : "Cash (AED)"}
                      </span>
                    </div>
                    <div className="font-mono font-extrabold text-[#D4AF37]">
                      {formatDhs(metrics.cashSales)}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#161924] border border-[#262B3B] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <CreditCard className="w-4 h-4 text-blue-400" />
                      <span className="font-bold text-slate-200">
                        {lang === "ar" ? "بطاقة مصرفية (POS Terminal)" : "Card Terminals"}
                      </span>
                    </div>
                    <div className="font-mono font-extrabold text-[#D4AF37]">
                      {formatDhs(metrics.cardSales)}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#161924] border border-[#262B3B] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="font-bold text-slate-200">
                        {lang === "ar" ? "أبل باي ودفع لاتلامسي" : "Apple Pay / Contactless"}
                      </span>
                    </div>
                    <div className="font-mono font-extrabold text-[#D4AF37]">
                      {formatDhs(metrics.applePaySales)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCT SALES BREAKDOWN */}
        {activeTab === "products" && (
          <div className="bg-[#12141C] border border-[#222736] rounded-2xl overflow-hidden shadow-xl">
            <div className="p-4 bg-[#161924] border-b border-[#222736] flex items-center justify-between">
              <h4 className="text-sm font-bold text-white">
                {lang === "ar" ? "مبيعات الأصناف والوجبات بالتفصيل" : "Itemized Product Sales Ledger"}
              </h4>
              <span className="text-xs text-[#D4AF37] font-mono font-bold">
                {productAggregates.length} items recorded
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#181B26] text-slate-400 uppercase tracking-wider text-[10px] border-b border-[#222736]">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">{lang === "ar" ? "الصنف" : "Product"}</th>
                    <th className="px-4 py-3">{lang === "ar" ? "التصنيف" : "Category"}</th>
                    <th className="px-4 py-3 text-center">{lang === "ar" ? "الكمية المباعة" : "Qty Sold"}</th>
                    <th className="px-4 py-3 text-right">{lang === "ar" ? "إجمالي الإيراد" : "Total Revenue"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1D212E]">
                  {productAggregates.map((item, i) => (
                    <tr key={i} className="hover:bg-[#161924] transition">
                      <td className="px-4 py-2.5 font-mono text-slate-500">{i + 1}</td>
                      <td className="px-4 py-2.5 font-bold text-white">
                        <div>{item.name}</div>
                        <div className="text-[10px] text-slate-400 font-normal">{item.arabicName}</div>
                      </td>
                      <td className="px-4 py-2.5 capitalize font-medium text-slate-300">
                        {item.category}
                      </td>
                      <td className="px-4 py-2.5 text-center font-mono font-bold text-white">
                        {item.qty}
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono font-extrabold text-[#D4AF37]">
                        {formatDhs(item.revenue)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: CATEGORY SALES BREAKDOWN */}
        {activeTab === "categories" && (
          <div className="bg-[#12141C] border border-[#222736] rounded-2xl overflow-hidden shadow-xl">
            <div className="p-4 bg-[#161924] border-b border-[#222736]">
              <h4 className="text-sm font-bold text-white">
                {lang === "ar" ? "أداء وإيرادات التصنيفات" : "Category Performance"}
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#181B26] text-slate-400 uppercase tracking-wider text-[10px] border-b border-[#222736]">
                  <tr>
                    <th className="px-4 py-3">{lang === "ar" ? "التصنيف" : "Category"}</th>
                    <th className="px-4 py-3 text-center">{lang === "ar" ? "إجمالي الأطباق المباعة" : "Items Sold"}</th>
                    <th className="px-4 py-3 text-right">{lang === "ar" ? "الإيراد المحقق" : "Revenue"}</th>
                    <th className="px-4 py-3 text-right">{lang === "ar" ? "النسبة من الإجمالي" : "% Share"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1D212E]">
                  {categoryAggregates.map((cat, i) => {
                    const share = Math.round((cat.revenue / (metrics.totalSales || 1)) * 100);
                    return (
                      <tr key={i} className="hover:bg-[#161924] transition">
                        <td className="px-4 py-3 font-bold text-white">
                          <span>{cat.name}</span>
                          <span className="text-slate-400 text-[10px] block">{cat.arabicName}</span>
                        </td>
                        <td className="px-4 py-3 text-center font-mono font-bold text-slate-200">
                          {cat.count}
                        </td>
                        <td className="px-4 py-3 text-right font-mono font-extrabold text-[#D4AF37]">
                          {formatDhs(cat.revenue)}
                        </td>
                        <td className="px-4 py-3 text-right font-mono font-bold text-emerald-400">
                          {share}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: VAT 5% LEDGER */}
        {activeTab === "vat" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#161924] border border-[#2B3042] flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">
                  {lang === "ar" ? "تقرير ضريبة القيمة المضافة المعتمد لدولة الإمارات" : "Federal Tax Authority (FTA) 5% VAT Statement"}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Tax Registration Number (TRN): 100482937400003
                </p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Total VAT 5%</span>
                <span className="text-lg font-black text-[#D4AF37] font-mono">
                  {formatDhs(metrics.totalVat)}
                </span>
              </div>
            </div>

            <div className="bg-[#12141C] border border-[#222736] rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#181B26] text-slate-400 uppercase tracking-wider text-[10px] border-b border-[#222736]">
                    <tr>
                      <th className="px-4 py-3">{lang === "ar" ? "رقم الفاتورة" : "Receipt #"}</th>
                      <th className="px-4 py-3">{lang === "ar" ? "التاريخ والوقت" : "Date & Time"}</th>
                      <th className="px-4 py-3 text-right">{lang === "ar" ? "المبلغ الأساسي" : "Taxable (Dhs)"}</th>
                      <th className="px-4 py-3 text-right">{lang === "ar" ? "ضريبة 5%" : "VAT 5% (Dhs)"}</th>
                      <th className="px-4 py-3 text-right">{lang === "ar" ? "الإجمالي النهائي" : "Total (Dhs)"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1D212E]">
                    {filteredOrders.map((o) => (
                      <tr key={o.id} className="hover:bg-[#161924] transition">
                        <td className="px-4 py-2.5 font-mono font-bold text-white">{o.receiptNumber}</td>
                        <td className="px-4 py-2.5 text-slate-400 font-mono text-[11px]">{o.createdAt}</td>
                        <td className="px-4 py-2.5 text-right font-mono text-slate-200">{formatDhs(o.taxableAmount)}</td>
                        <td className="px-4 py-2.5 text-right font-mono font-bold text-amber-400">{formatDhs(o.vatAmount)}</td>
                        <td className="px-4 py-2.5 text-right font-mono font-black text-[#D4AF37]">{formatDhs(o.grandTotal)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5 & 6: PAYMENTS & ORDER TYPES */}
        {(activeTab === "payments" || activeTab === "order_types") && (
          <div className="bg-[#12141C] border border-[#222736] rounded-2xl p-6 space-y-4">
            <h4 className="text-sm font-bold text-white">
              {activeTab === "payments"
                ? lang === "ar"
                  ? "سجل تسوية المدفوعات بالتفصيل"
                  : "Payment Audit Breakdown"
                : lang === "ar"
                ? "سجل قنوات وتوزيع الطلبات"
                : "Order Channels Breakdown"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#161924] border border-[#282E40]">
                <div className="text-xs text-slate-400 uppercase font-semibold">Cash Volume</div>
                <div className="text-xl font-black text-[#D4AF37] font-mono mt-1">
                  {formatDhs(metrics.cashSales)}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#161924] border border-[#282E40]">
                <div className="text-xs text-slate-400 uppercase font-semibold">Card & Digital Volume</div>
                <div className="text-xl font-black text-blue-400 font-mono mt-1">
                  {formatDhs(metrics.cardSales + metrics.applePaySales)}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#161924] border border-[#282E40]">
                <div className="text-xs text-slate-400 uppercase font-semibold">Total Audited Orders</div>
                <div className="text-xl font-black text-white font-mono mt-1">
                  {metrics.orderCount}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
