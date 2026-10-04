"use client";

import React, { useState } from "react";
import {
  LayoutGrid,
  X,
  Users,
  Clock,
  UtensilsCrossed,
  Check,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import { Table, TableZone, TableStatus } from "../../types/restaurantPos";

export const TableManagementModal: React.FC = () => {
  const {
    isTableModalOpen,
    setIsTableModalOpen,
    tables,
    openTableOrder,
    updateTableStatus,
    selectedTable,
    t,
    lang,
  } = useRestaurantPos();

  const [zoneFilter, setZoneFilter] = useState<TableZone | "all">("all");
  const [statusFilter, setStatusFilter] = useState<TableStatus | "all">("all");

  if (!isTableModalOpen) return null;

  const filteredTables = tables.filter((tbl) => {
    if (zoneFilter !== "all" && tbl.zone !== zoneFilter) return false;
    if (statusFilter !== "all" && tbl.status !== statusFilter) return false;
    return true;
  });

  const getStatusBadge = (status: TableStatus) => {
    switch (status) {
      case "available":
        return {
          label: t.available,
          color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800",
          dot: "bg-emerald-500",
        };
      case "occupied":
        return {
          label: t.occupied,
          color: "bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300 dark:border-amber-800",
          dot: "bg-amber-500 animate-pulse",
        };
      case "reserved":
        return {
          label: t.reserved,
          color: "bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border-blue-300 dark:border-blue-800",
          dot: "bg-blue-500",
        };
      case "billed":
        return {
          label: t.billed,
          color: "bg-purple-100 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300 border-purple-300 dark:border-purple-800",
          dot: "bg-purple-500",
        };
    }
  };

  const getZoneLabel = (zone: TableZone) => {
    switch (zone) {
      case "indoor":
        return t.zone_indoor;
      case "terrace":
        return t.zone_terrace;
      case "vip_majlis":
        return t.zone_vip;
      case "family":
        return t.zone_family;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in-50">
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="bg-white dark:bg-[#12141C] text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-[#262B3B] rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="flex-shrink-0 p-4 border-b border-slate-200 dark:border-[#202534] flex items-center justify-between bg-slate-50 dark:bg-[#161924]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold">
              <LayoutGrid className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {t.table_management}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === "ar"
                  ? "16 طاولة موزعة على الصالة والتراس ومجلس كبار الشخصيات وقسم العائلات"
                  : "16 Tables across Indoor, Terrace, VIP Majlis & Family dining"}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsTableModalOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Strip: Zones & Statuses */}
        <div className="flex-shrink-0 px-4 py-2.5 bg-slate-100 dark:bg-[#0F1118] border-b border-slate-200 dark:border-[#1A1D28] flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Zone filter tabs */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {(["all", "indoor", "terrace", "vip_majlis", "family"] as const).map((zone) => (
              <button
                key={zone}
                onClick={() => setZoneFilter(zone)}
                className={`px-3 py-1 rounded-lg font-semibold transition ${
                  zoneFilter === zone
                    ? "bg-[#D4AF37] text-black font-bold shadow-sm"
                    : "bg-white dark:bg-[#161924] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#232736]"
                }`}
              >
                {zone === "all" ? t.all_tables : getZoneLabel(zone)}
              </button>
            ))}
          </div>

          {/* Status filter buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {(["all", "available", "occupied", "reserved", "billed"] as const).map((status) => {
              if (status === "all") {
                return (
                  <button
                    key={status}
                    onClick={() => setStatusFilter("all")}
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                      statusFilter === "all"
                        ? "bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-white border-slate-400"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 border-transparent"
                    }`}
                  >
                    All Statuses ({tables.length})
                  </button>
                );
              }
              const count = tables.filter((t) => t.status === status).length;
              const badge = getStatusBadge(status as TableStatus);
              return (
                <button
                  key={status}
                  onClick={() => setStatusFilter(statusFilter === status ? "all" : status)}
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold border flex items-center gap-1 transition ${
                    statusFilter === status ? "ring-2 ring-amber-500" : ""
                  } ${badge.color}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                  <span>
                    {badge.label} ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tables Grid */}
        <div className="flex-1 p-4 overflow-y-auto min-h-0 h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredTables.map((table) => {
              const badge = getStatusBadge(table.status);
              const isCurrent = selectedTable?.id === table.id;

              return (
                <div
                  key={table.id}
                  onClick={() => openTableOrder(table)}
                  className={`group relative p-3.5 rounded-xl border flex flex-col justify-between transition cursor-pointer active:scale-95 ${
                    isCurrent
                      ? "ring-2 ring-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-400"
                      : "bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-amber-400 hover:shadow-md"
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-base font-black text-slate-900 dark:text-white font-mono">
                          {table.number}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {lang === "ar" ? table.arabicLabel : table.label}
                        </div>
                      </div>

                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${badge.color}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                        <span>{badge.label}</span>
                      </span>
                    </div>

                    {/* Zone & Capacity */}
                    <div className="mt-2.5 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <span className="flex items-center gap-1 font-medium">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        {table.capacity} {t.seats}
                      </span>
                      <span>•</span>
                      <span className="text-[11px] text-slate-400">
                        {getZoneLabel(table.zone)}
                      </span>
                    </div>
                  </div>

                  {/* Active Order Total & Time if Occupied */}
                  {table.status === "occupied" && (
                    <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-mono font-bold">
                      <span className="text-amber-600 dark:text-amber-400">
                        AED {table.activeOrderTotal?.toFixed(2) || "0.00"}
                      </span>
                      {table.seatedAt && (
                        <span className="text-[10px] text-slate-400 font-sans flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {table.seatedAt}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Quick Select Hover Prompt */}
                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                    <span>{t.open_table_order}</span>
                    <span className="font-mono">{lang === "ar" ? "←" : "→"}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex justify-end">
          <button
            onClick={() => setIsTableModalOpen(false)}
            className="px-4 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
