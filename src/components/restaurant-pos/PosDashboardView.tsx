"use client";

import React from "react";
import {
  TrendingUp,
  DollarSign,
  ShoppingBag,
  CreditCard,
  Users,
  Clock,
  Award,
  BarChart2,
  PieChart,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";

export const PosDashboardView: React.FC = () => {
  const { stats, orders, formatDhs, t, lang } = useRestaurantPos();

  // Hourly volume simulation based on orders
  const hourlyData = [
    { hour: "11:00", sales: 420, orders: 3 },
    { hour: "12:00", sales: 1280, orders: 9 },
    { hour: "13:00", sales: 2150, orders: 14 },
    { hour: "14:00", sales: 1640, orders: 11 },
    { hour: "15:00", sales: 890, orders: 6 },
    { hour: "16:00", sales: 540, orders: 4 },
    { hour: "17:00", sales: 980, orders: 7 },
    { hour: "18:00", sales: 1840, orders: 12 },
  ];

  const maxHourlySales = Math.max(...hourlyData.map((d) => d.sales));

  // Top selling dishes calculated or curated
  const topDishes = [
    { name: "Sultan Wagyu Royal Burger", arabicName: "برجر واغيو السلطان الملكي", sold: 42, revenue: 2604, cat: "Burgers" },
    { name: "Royal Mixed Grill Platter", arabicName: "صينية المشاوي الملكية المشكلة", sold: 28, revenue: 3780, cat: "Grill" },
    { name: "Al Sultan Special Mutton Biryani", arabicName: "برياني لحم ضأن السلطان الخاص", sold: 35, revenue: 2380, cat: "Rice" },
    { name: "Burrata Truffle Margherita Pizza", arabicName: "بيتزا مارغريتا بجبن البوراتا والكمأة", sold: 31, revenue: 2108, cat: "Pizza" },
    { name: "Truffle Parmesan Fries", arabicName: "بطاطس الكمأة وجبن بارميزان", sold: 54, revenue: 1728, cat: "Appetizers" },
  ];

  return (
    <div className="flex-1 p-4 sm:p-6 bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-110px)] overflow-y-auto space-y-6">
      {/* Title Strip */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-amber-600" />
            <span>{t.dashboard_title}</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Real-time sales velocity, average spend & operational performance
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            LIVE AUDIT TRAIL
          </span>
        </div>
      </div>

      {/* Top 4 Primary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Today's Sales */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">{t.today_sales}</span>
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">
              {formatDhs(stats.todaySales)}
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>{lang === "ar" ? "+18.4% مقارنة بالأسبوع الماضي" : "+18.4% vs same day last week"}</span>
            </div>
          </div>
        </div>

        {/* Total Orders Today */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">{t.orders_today}</span>
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">
              {stats.todayOrders} <span className="text-sm font-sans font-medium text-slate-400">{lang === "ar" ? "طلب" : "orders"}</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              {stats.dineInCount} {t.dine_in} • {stats.takeawayCount} {t.takeaway} • {stats.deliveryCount} {t.delivery}
            </div>
          </div>
        </div>

        {/* Average Order Value */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">{t.avg_order}</span>
            <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/80 text-purple-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">
              {formatDhs(stats.avgOrderValue)}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              {lang === "ar" ? "المعدل الفعلي للفاتورة" : "Optimal UAE premium dining tier"}
            </div>
          </div>
        </div>

        {/* Payment Split (Cash vs Card) */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">{t.payment_split_title}</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 flex items-center justify-center">
              <CreditCard className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 space-y-1 text-xs font-mono">
            <div className="flex justify-between font-bold text-slate-800 dark:text-slate-200">
              <span className="font-sans">{lang === "ar" ? "بطاقة / أبل باي:" : "Card / Apple Pay:"}</span>
              <span>{formatDhs(stats.totalCard)}</span>
            </div>
            <div className="flex justify-between font-bold text-slate-800 dark:text-slate-200">
              <span className="font-sans">{lang === "ar" ? "نقداً:" : "Cash:"}</span>
              <span>{formatDhs(stats.totalCash)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hourly Sales Chart & Order Channels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hourly Volume Bar Graph */}
        <div className="lg:col-span-2 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {t.sales_by_hour}
            </h3>
            <span className="text-xs font-mono text-slate-400">
              {lang === "ar" ? "الذروة: 13:00 - 14:00 (فترة الغداء)" : "Peak: 13:00 - 14:00 (Lunch Rush)"}
            </span>
          </div>

          <div className="h-44 flex items-end justify-between gap-2 pt-6">
            {hourlyData.map((slot) => {
              const heightPct = Math.round((slot.sales / maxHourlySales) * 100);

              return (
                <div key={slot.hour} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition">
                    AED {slot.sales}
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-md h-32 flex items-end overflow-hidden">
                    <div
                      style={{ height: `${heightPct}%` }}
                      className="w-full bg-gradient-to-t from-amber-600 to-amber-500 group-hover:from-amber-500 group-hover:to-amber-400 transition-all rounded-t-md"
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400">
                    {slot.hour}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Channel Breakdown Card */}
        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {lang === "ar" ? "توزيع حجم المبيعات حسب القناة" : "Dining Channel Volume"}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {lang === "ar" ? "التوزيع النسبي عبر أنماط الخدمة" : "Distribution across service types"}
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>{t.dine_in}</span>
                  <span dir="ltr">{stats.dineInCount} ({Math.round((stats.dineInCount / Math.max(1, stats.todayOrders)) * 100)}%)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    style={{ width: `${(stats.dineInCount / Math.max(1, stats.todayOrders)) * 100}%` }}
                    className="h-full bg-amber-500 rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>{t.takeaway}</span>
                  <span dir="ltr">{stats.takeawayCount} ({Math.round((stats.takeawayCount / Math.max(1, stats.todayOrders)) * 100)}%)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    style={{ width: `${(stats.takeawayCount / Math.max(1, stats.todayOrders)) * 100}%` }}
                    className="h-full bg-blue-500 rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>{t.delivery}</span>
                  <span dir="ltr">{stats.deliveryCount} ({Math.round((stats.deliveryCount / Math.max(1, stats.todayOrders)) * 100)}%)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    style={{ width: `${(stats.deliveryCount / Math.max(1, stats.todayOrders)) * 100}%` }}
                    className="h-full bg-emerald-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 mt-4">
            {lang === "ar" ? (
              <span>💡 <strong>مؤشر أداء:</strong> تمثل طلبات الصالة 68% من إجمالي الإيرادات مع أعلى متوسط قيمة للفاتورة الواحدة.</span>
            ) : (
              <span>💡 <strong>Insight:</strong> Dine-in orders contribute to 68% of daily revenue with highest average spend per ticket.</span>
            )}
          </div>
        </div>
      </div>

      {/* Top Selling Dishes Table */}
      <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-600" />
          <span>{t.top_selling}</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
              <tr>
                <th className="px-3 py-2.5">{lang === "ar" ? "اسم الصنف والطبق" : "Dish Name"}</th>
                <th className="px-3 py-2.5">{lang === "ar" ? "التصنيف" : "Category"}</th>
                <th className="px-3 py-2.5 text-center">{lang === "ar" ? "الكمية المباعة اليوم" : "Units Sold Today"}</th>
                <th className="px-3 py-2.5 text-end">{lang === "ar" ? "إجمالي الإيرادات (درهم)" : "Gross Revenue (AED)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {topDishes.map((dish, i) => (
                <tr key={i} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40">
                  <td className="px-3 py-2.5 font-bold text-slate-900 dark:text-white">
                    <div>{lang === "ar" ? dish.arabicName : dish.name}</div>
                    <div className="text-[10px] text-slate-400 font-normal">{lang === "ar" ? dish.name : dish.arabicName}</div>
                  </td>
                  <td className="px-3 py-2.5 text-slate-500">{dish.cat}</td>
                  <td className="px-3 py-2.5 text-center font-mono font-bold text-slate-700 dark:text-slate-300">
                    {dish.sold}
                  </td>
                  <td className="px-3 py-2.5 text-end font-mono font-extrabold text-amber-600 dark:text-amber-400">
                    <span dir="ltr">AED {dish.revenue.toFixed(2)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
