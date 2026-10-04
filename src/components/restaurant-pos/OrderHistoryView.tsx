"use client";

import React, { useState, useMemo } from "react";
import {
  Receipt,
  Search,
  Printer,
  Ban,
  Filter,
  Eye,
  CheckCircle,
  AlertTriangle,
  Clock,
  Calendar,
  CreditCard,
  Banknote,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import { Order, OrderType, PaymentMethod } from "../../types/restaurantPos";

export const OrderHistoryView: React.FC = () => {
  const {
    orders,
    setActiveReceiptOrder,
    setIsReceiptModalOpen,
    voidOrder,
    formatDhs,
    t,
    lang,
  } = useRestaurantPos();

  const [searchQuery, setSearchQuery] = useState("");
  const [filterPeriod, setFilterPeriod] = useState<"today" | "yesterday" | "week" | "all">("today");
  const [filterType, setFilterType] = useState<OrderType | "all">("all");
  const [filterPayment, setFilterPayment] = useState<PaymentMethod | "all">("all");

  const [selectedOrderDetails, setSelectedOrderDetails] = useState<Order | null>(null);
  const [orderToVoid, setOrderToVoid] = useState<Order | null>(null);
  const [voidReason, setVoidReason] = useState("Guest requested refund / cashier mistake");

  const filteredOrders = useMemo(() => {
    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];

    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    const weekAgo = new Date(now);
    weekAgo.setDate(weekAgo.getDate() - 7);

    return orders.filter((order) => {
      // Period filter
      const orderDate = order.createdAt.split(" ")[0] || order.createdAt;
      if (filterPeriod === "today" && orderDate !== todayStr && order.orderStatus !== "paid") return false;
      if (filterPeriod === "yesterday" && orderDate !== yesterdayStr) return false;
      if (filterPeriod === "week" && new Date(orderDate) < weekAgo) return false;

      // Order Type filter
      if (filterType !== "all" && order.orderType !== filterType) return false;

      // Payment Method filter
      if (filterPayment !== "all" && order.paymentMethod !== filterPayment) return false;

      // Search Query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        order.orderNumber.toLowerCase().includes(q) ||
        order.receiptNumber.toLowerCase().includes(q) ||
        (order.customer?.name && order.customer.name.toLowerCase().includes(q)) ||
        (order.tableNumber && order.tableNumber.toLowerCase().includes(q)) ||
        order.paymentMethod.toLowerCase().includes(q)
      );
    });
  }, [orders, filterPeriod, filterType, filterPayment, searchQuery]);

  const handleOpenReceipt = (order: Order) => {
    setActiveReceiptOrder(order);
    setIsReceiptModalOpen(true);
  };

  const handleConfirmVoid = () => {
    if (orderToVoid) {
      voidOrder(orderToVoid.id, voidReason);
      setOrderToVoid(null);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-100 dark:bg-[#0B0D14] text-slate-900 dark:text-slate-100 min-h-0 h-full overflow-hidden">
      {/* Top Banner */}
      <div className="flex-shrink-0 px-3 sm:px-6 py-3 sm:py-4 border-b border-slate-200 dark:border-[#1E2230] bg-white dark:bg-[#10121A] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-bold">
            <Receipt className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              {lang === "ar" ? "سجل وإدارة الفواتير والعمليات" : "Orders & Invoices Ledger"}
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-amber-800 dark:text-[#D4AF37] font-mono font-bold">
                {filteredOrders.length} {lang === "ar" ? "فاتورة" : "records"}
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {lang === "ar"
                ? "تدقيق الفواتير الصادرة، إعادة طباعة الإيصالات، وتفاصيل الحسابات"
                : "Audited billing ledger, thermal receipt reprints, line item details, and void controls"}
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative max-w-xs w-full">
          <Search className="w-3.5 h-3.5 absolute start-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.search_orders}
            className="w-full ps-8 pe-4 py-1.5 text-xs rounded-xl bg-white dark:bg-[#161924] border border-slate-300 dark:border-[#262B3B] text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#D4AF37] outline-none"
          />
        </div>
      </div>

      {/* Multi-Filter Bar: Period, Order Type, Payment Method */}
      <div className="flex-shrink-0 px-3 sm:px-6 py-2.5 bg-slate-50 dark:bg-[#0F1118] border-b border-slate-200 dark:border-[#1A1D28] flex items-center gap-3 overflow-x-auto no-scrollbar text-xs">
        {/* Period Pills */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] uppercase font-bold text-slate-500 me-1">
            {lang === "ar" ? "الفترة:" : "Period:"}
          </span>
          {(["today", "yesterday", "week", "all"] as const).map((period) => (
            <button
              key={period}
              onClick={() => setFilterPeriod(period)}
              className={`px-3 py-1 rounded-lg font-bold transition capitalize shrink-0 ${
                filterPeriod === period
                  ? "bg-[#D4AF37] text-black shadow-sm font-black"
                  : "bg-white dark:bg-[#161924] text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-[#222736] hover:text-slate-900 dark:hover:text-white"
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
                  ? "الأسبوع"
                  : "Week"
                : lang === "ar"
                ? "الكل"
                : "All"}
            </button>
          ))}
        </div>

        {/* Order Type Pills */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] uppercase font-bold text-slate-500 me-1">
            {lang === "ar" ? "القناة:" : "Channel:"}
          </span>
          {(["all", "dine_in", "takeaway", "delivery"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-2.5 py-1 rounded-lg font-semibold transition shrink-0 ${
                filterType === type
                  ? "bg-amber-500/10 dark:bg-[#252A3C] border border-amber-500 dark:border-[#D4AF37] text-amber-800 dark:text-[#D4AF37] font-bold"
                  : "bg-white dark:bg-[#161924] text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-[#222736] hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {type === "all"
                ? lang === "ar"
                  ? "جميع القنوات"
                  : "All Channels"
                : type === "dine_in"
                ? t.dine_in
                : type === "takeaway"
                ? t.takeaway
                : t.delivery}
            </button>
          ))}
        </div>

        {/* Payment Method Filter */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] uppercase font-bold text-slate-500 me-1">
            {lang === "ar" ? "طريقة الدفع:" : "Payment:"}
          </span>
          {(["all", "cash", "card"] as const).map((method) => (
            <button
              key={method}
              onClick={() => setFilterPayment(method)}
              className={`px-2.5 py-1 rounded-lg font-semibold transition uppercase shrink-0 ${
                filterPayment === method
                  ? "bg-amber-500/10 dark:bg-[#252A3C] border border-amber-500 dark:border-[#D4AF37] text-amber-800 dark:text-[#D4AF37] font-bold"
                  : "bg-white dark:bg-[#161924] text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-[#222736] hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {method === "all"
                ? lang === "ar"
                  ? "الكل"
                  : "ALL"
                : method === "cash"
                ? t.pay_cash
                : t.pay_card}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Ledger Table */}
      <div className="flex-1 p-3 sm:p-5 overflow-y-auto min-h-0 h-full">
        <div className="bg-white dark:bg-[#12141C] border border-slate-200 dark:border-[#222736] rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto max-h-[calc(100vh-220px)] overflow-y-auto">
            <table className="w-full text-start text-xs">
              <thead className="bg-[#161924] border-b border-[#222736] text-slate-400 font-bold uppercase tracking-wider text-[10px] sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3.5 text-start">{lang === "ar" ? "رقم الطلب / الفاتورة" : "Order / Receipt #"}</th>
                  <th className="px-4 py-3.5 text-start">{lang === "ar" ? "التاريخ والوقت" : "Date & Time"}</th>
                  <th className="px-4 py-3.5 text-start">{lang === "ar" ? "القناة / الطاولة" : "Channel / Table"}</th>
                  <th className="px-4 py-3.5 text-start">{lang === "ar" ? "الأصناف" : "Items"}</th>
                  <th className="px-4 py-3.5 text-start">{lang === "ar" ? "وسيلة الدفع" : "Payment"}</th>
                  <th className="px-4 py-3.5 text-end">{lang === "ar" ? "المجموع الكلي" : "Grand Total"}</th>
                  <th className="px-4 py-3.5 text-center">{lang === "ar" ? "الحالة" : "Status"}</th>
                  <th className="px-4 py-3.5 text-end">{lang === "ar" ? "الإجراءات" : "Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1D212E]">
                {filteredOrders.map((order) => {
                  const isVoided = order.orderStatus === "voided";

                  return (
                    <tr
                      key={order.id}
                      className="hover:bg-[#161924] transition duration-150"
                    >
                      {/* Order & Receipt Numbers */}
                      <td className="px-4 py-3">
                        <div className="font-mono font-bold text-white">
                          {order.orderNumber}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {order.receiptNumber}
                        </div>
                      </td>

                      {/* Date & Time */}
                      <td className="px-4 py-3 font-mono text-slate-300">
                        {order.createdAt}
                      </td>

                      {/* Channel & Table */}
                      <td className="px-4 py-3">
                        <span className="font-bold text-slate-200 block uppercase">
                          {order.orderType.replace("_", " ")}
                        </span>
                        {order.tableNumber && (
                          <span className="text-[11px] text-[#D4AF37] font-mono font-semibold">
                            TABLE {order.tableNumber.replace(/\D/g, "") || order.tableNumber}
                          </span>
                        )}
                        {order.customer && (
                          <span className="text-[11px] text-slate-400 block truncate max-w-[120px]">
                            {order.customer.name}
                          </span>
                        )}
                      </td>

                      {/* Items Count */}
                      <td className="px-4 py-3 font-mono text-slate-300">
                        {order.items?.length || 0} items
                      </td>

                      {/* Payment Method */}
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 rounded-md bg-[#181B26] border border-[#2B3042] text-[11px] font-bold text-slate-300 uppercase font-mono">
                          {order.paymentMethod}
                        </span>
                      </td>

                      {/* Grand Total in Dhs */}
                      <td className="px-4 py-3 text-right font-mono font-extrabold text-[#D4AF37] text-sm">
                        {formatDhs(order.grandTotal)}
                      </td>

                      {/* Status */}
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${
                            isVoided
                              ? "bg-rose-500/10 text-rose-400 border-rose-500/30"
                              : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          }`}
                        >
                          {order.orderStatus}
                        </span>
                      </td>

                      {/* Actions: View Details, Reprint, Void */}
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setSelectedOrderDetails(order)}
                            className="p-1.5 rounded-lg bg-[#1A1D2A] text-slate-300 hover:text-white hover:bg-[#252A3C] transition"
                            title="View Full Order Breakdown"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => handleOpenReceipt(order)}
                            className="p-1.5 rounded-lg bg-[#1A1D2A] text-slate-300 hover:text-[#D4AF37] hover:bg-[#252A3C] transition"
                            title="Reprint Receipt"
                          >
                            <Printer className="w-3.5 h-3.5" />
                          </button>

                          {!isVoided && (
                            <button
                              onClick={() => setOrderToVoid(order)}
                              className="p-1.5 rounded-lg bg-[#1A1D2A] text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 transition"
                              title="Void Order"
                            >
                              <Ban className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Full Order Details Drawer / Modal */}
      {selectedOrderDetails && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-50">
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="bg-[#12141C] border border-[#262B3B] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl flex flex-col text-slate-100 max-h-[85vh]"
          >
            <div className="p-4 border-b border-[#202534] flex items-center justify-between bg-[#161924]">
              <div>
                <h3 className="text-sm font-bold text-white font-mono">
                  {selectedOrderDetails.orderNumber} • {selectedOrderDetails.receiptNumber}
                </h3>
                <p className="text-xs text-slate-400">
                  {selectedOrderDetails.createdAt} • Cashier: {selectedOrderDetails.cashierName}
                </p>
              </div>
              <button
                onClick={() => setSelectedOrderDetails(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4 overflow-y-auto flex-1 text-xs">
              {/* Items breakdown */}
              <div className="space-y-2 divide-y divide-[#1D212E]">
                <span className="font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Line Items ({selectedOrderDetails.items.length})
                </span>
                {selectedOrderDetails.items.map((it, idx) => (
                  <div key={idx} className="pt-2 first:pt-0 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white text-sm">{it.name}</div>
                      <div className="text-[11px] text-slate-400">{it.arabicName}</div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        {it.quantity} × {formatDhs(it.price)}
                      </div>
                    </div>
                    <div className="font-mono font-bold text-[#D4AF37]">
                      {formatDhs(it.lineTotal)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Financial summary */}
              <div className="p-3.5 rounded-xl bg-[#161924] border border-[#232838] space-y-1.5 font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal:</span>
                  <span>{formatDhs(selectedOrderDetails.subtotal)}</span>
                </div>
                {selectedOrderDetails.discountAmount > 0 && (
                  <div className="flex justify-between text-rose-400">
                    <span>Discount:</span>
                    <span>-{formatDhs(selectedOrderDetails.discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-400">
                  <span>VAT 5%:</span>
                  <span>{formatDhs(selectedOrderDetails.vatAmount)}</span>
                </div>
                <div className="pt-2 border-t border-[#262B3B] flex justify-between text-sm font-black text-white">
                  <span>Grand Total:</span>
                  <span className="text-[#D4AF37]">{formatDhs(selectedOrderDetails.grandTotal)}</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 border-t border-[#202534] bg-[#161924] flex justify-end gap-2">
              <button
                onClick={() => {
                  setSelectedOrderDetails(null);
                  handleOpenReceipt(selectedOrderDetails);
                }}
                className="px-4 py-2 rounded-xl bg-[#D4AF37] text-black font-extrabold text-xs"
              >
                Open Thermal Receipt
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Void Order Confirmation Modal */}
      {orderToVoid && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#12141C] border border-[#2B3042] rounded-2xl max-w-sm w-full p-5 shadow-2xl text-slate-100 space-y-4">
            <div className="flex items-center gap-2 text-rose-400">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-sm font-bold">Void Order {orderToVoid.orderNumber}?</h3>
            </div>
            <p className="text-xs text-slate-400">
              This action will cancel the invoice and record an audit trail entry.
            </p>
            <input
              type="text"
              value={voidReason}
              onChange={(e) => setVoidReason(e.target.value)}
              placeholder="Reason for voiding"
              className="w-full py-2 px-3 rounded-lg bg-[#161924] border border-[#2B3042] text-white text-xs outline-none"
            />
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleConfirmVoid}
                className="flex-1 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition"
              >
                Confirm Void
              </button>
              <button
                onClick={() => setOrderToVoid(null)}
                className="py-2 px-4 rounded-xl bg-[#1A1D2A] text-slate-300 text-xs hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
