"use client";

import React, { useState } from "react";
import {
  ChefHat,
  Clock,
  CheckCircle2,
  Play,
  Check,
  RefreshCw,
  UtensilsCrossed,
  Filter,
  Sparkles,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import { KOTTicket, KOTStatus } from "../../types/restaurantPos";

export const KitchenDisplayView: React.FC = () => {
  const { kotTickets, updateKOTStatus, t, lang } = useRestaurantPos();

  const [activeFilter, setActiveFilter] = useState<KOTStatus | "all">("all");

  const filteredTickets = kotTickets.filter((ticket) => {
    if (activeFilter === "all") return true;
    return ticket.status === activeFilter;
  });

  const getStatusBadge = (status: KOTStatus) => {
    switch (status) {
      case "new":
        return {
          label: lang === "ar" ? "جديد" : "NEW",
          color: "bg-rose-500/20 text-rose-400 border-rose-500/40 animate-pulse",
          cardBorder: "border-rose-500/40",
          buttonColor: "bg-[#D4AF37] text-black",
          nextStatus: "preparing" as KOTStatus,
          nextLabel: lang === "ar" ? "بدء التحضير" : "Start Preparing",
        };
      case "preparing":
        return {
          label: lang === "ar" ? "قيد التحضير" : "PREPARING",
          color: "bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/40",
          cardBorder: "border-[#D4AF37]/40",
          buttonColor: "bg-emerald-500 text-white",
          nextStatus: "ready" as KOTStatus,
          nextLabel: lang === "ar" ? "جاهز للتقديم" : "Mark Ready",
        };
      case "ready":
        return {
          label: lang === "ar" ? "جاهز للتقديم" : "READY",
          color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
          cardBorder: "border-emerald-500/40",
          buttonColor: "bg-[#1E2436] hover:bg-slate-700 text-white",
          nextStatus: "completed" as KOTStatus,
          nextLabel: lang === "ar" ? "اكتمال الطلب" : "Mark Completed",
        };
      case "completed":
      case "served":
        return {
          label: lang === "ar" ? "مكتمل" : "COMPLETED",
          color: "bg-slate-700/40 text-slate-400 border-slate-700",
          cardBorder: "border-slate-800",
          buttonColor: "bg-slate-800 text-slate-500",
          nextStatus: "completed" as KOTStatus,
          nextLabel: lang === "ar" ? "مكتمل" : "Completed",
        };
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-100 dark:bg-[#0B0D14] text-slate-900 dark:text-slate-100 min-h-0 h-full overflow-hidden">
      {/* KDS Header Banner */}
      <div className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 dark:border-[#1E2230] bg-white dark:bg-[#10121A] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-bold">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              {lang === "ar" ? "شاشة المطبخ الذكية (KDS)" : "Kitchen Display System (KDS)"}
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-amber-800 dark:text-[#D4AF37] font-mono font-bold">
                {kotTickets.filter((k) => k.status !== "completed" && k.status !== "served").length} {lang === "ar" ? "تذكرة نشطة" : "Active Tickets"}
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {lang === "ar"
                ? "إدارة مسار وتجهيز الوجبات في الوقت الفعلي: جديد ← قيد التحضير ← جاهز ← مكتمل"
                : "Live operational kitchen line: NEW → PREPARING → READY → COMPLETED"}
            </p>
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
          {(["all", "new", "preparing", "ready", "completed"] as const).map((status) => {
            const count =
              status === "all"
                ? kotTickets.length
                : kotTickets.filter((k) => (status === "completed" ? k.status === "completed" || k.status === "served" : k.status === status)).length;

            return (
              <button
                key={status}
                onClick={() => setActiveFilter(status)}
                className={`px-3 py-1.5 rounded-xl font-bold uppercase transition flex items-center gap-1.5 ${
                  activeFilter === status
                    ? "bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/15 font-black"
                    : "bg-white dark:bg-[#141722] border border-slate-200 dark:border-[#222736] text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span>
                  {status === "all"
                    ? lang === "ar"
                      ? "كافة التذاكر"
                      : "ALL TICKETS"
                    : status === "completed"
                    ? lang === "ar"
                      ? "مكتمل"
                      : "COMPLETED"
                    : getStatusBadge(status as KOTStatus).label}
                </span>
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/10 dark:bg-black/40 font-mono font-bold">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tickets Lane Grid */}
      <div className="flex-1 p-3 sm:p-5 overflow-y-auto min-h-0 h-full">
        {filteredTickets.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-12 text-slate-500">
            <ChefHat className="w-14 h-14 stroke-[1.2] mb-3 text-slate-700" />
            <h4 className="text-base font-bold text-slate-300">
              {lang === "ar" ? "تم إنجاز كافة تذاكر المطبخ بنجاح" : "All Kitchen Tickets Cleared"}
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              {lang === "ar"
                ? "أي طلبات جديدة يتم إرسالها من نقطة البيع ستظهر هنا فوراً."
                : "New orders sent from POS billing will arrive on this screen instantly."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTickets.map((ticket) => {
              const badge = getStatusBadge(ticket.status);
              const isFinished = ticket.status === "completed" || ticket.status === "served";

              return (
                <div
                  key={ticket.id}
                  className={`flex flex-col justify-between bg-[#12141C] border-2 ${badge.cardBorder} rounded-2xl overflow-hidden shadow-xl transition-all`}
                >
                  {/* Ticket Header */}
                  <div className="p-3.5 bg-[#161924] border-b border-[#202534] flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-black font-mono text-white">
                          {ticket.orderNumber}
                        </span>
                        {ticket.tableNumber && (
                          <span className="px-2 py-0.5 rounded-md bg-[#D4AF37] text-black font-black text-xs font-mono">
                            {lang === "ar" ? "طاولة" : "TABLE"} {ticket.tableNumber.replace(/\D/g, "") || ticket.tableNumber}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                        <span className="capitalize font-bold text-[#D4AF37]">
                          {ticket.orderType.replace("_", " ")}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {ticket.createdAt}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase border ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                  </div>

                  {/* Ticket Items List */}
                  <div className="p-4 flex-1 divide-y divide-[#1D212E] space-y-2 text-xs">
                    {ticket.items.map((item, idx) => (
                      <div key={idx} className="pt-2 first:pt-0 flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <span className="font-bold text-white text-sm block">
                            {lang === "ar" ? item.arabicName : item.name}
                          </span>
                          <span className="text-[11px] text-slate-400 block">
                            {lang === "ar" ? item.name : item.arabicName}
                          </span>
                          {item.notes && (
                            <span className="inline-block mt-0.5 px-2 py-0.5 rounded bg-amber-950/50 border border-amber-800/60 text-amber-300 font-medium text-[10px]">
                              Note: {item.notes}
                            </span>
                          )}
                        </div>
                        <div className="w-8 h-8 rounded-xl bg-[#1C202C] border border-[#2B3042] text-[#D4AF37] flex items-center justify-center font-black font-mono text-sm">
                          ×{item.quantity}
                        </div>
                      </div>
                    ))}

                    {ticket.specialInstructions && (
                      <div className="pt-2 mt-2 border-t border-dashed border-[#222736]">
                        <span className="text-[10px] text-rose-400 font-bold block uppercase tracking-wide">
                          Special Instructions:
                        </span>
                        <p className="text-[11px] text-rose-300 italic mt-0.5">
                          {ticket.specialInstructions}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Footer & Action Button */}
                  <div className="p-3 bg-[#161924] border-t border-[#202534] flex items-center justify-between gap-2">
                    <span className="text-[10px] text-slate-500 truncate">
                      Server: {ticket.serverName}
                    </span>

                    {!isFinished && (
                      <button
                        onClick={() => updateKOTStatus(ticket.id, badge.nextStatus)}
                        className={`py-2 px-3.5 rounded-xl font-extrabold text-xs transition active:scale-95 shadow-md flex items-center gap-1.5 ${badge.buttonColor}`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>{badge.nextLabel}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
