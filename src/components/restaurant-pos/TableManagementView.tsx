"use client";

import React, { useState } from "react";
import {
  LayoutGrid,
  Users,
  Clock,
  UtensilsCrossed,
  ArrowRightLeft,
  CheckCircle,
  AlertCircle,
  Plus,
  CreditCard,
  ChefHat,
  X,
  Sparkles,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import { Table, TableZone, TableStatus } from "../../types/restaurantPos";

export const TableManagementView: React.FC = () => {
  const {
    tables,
    openTableOrder,
    updateTableStatus,
    transferTable,
    closeTableBill,
    selectedTable,
    setActiveView,
    formatDhs,
    t,
    lang,
  } = useRestaurantPos();

  const [zoneFilter, setZoneFilter] = useState<TableZone | "all">("all");
  const [statusFilter, setStatusFilter] = useState<TableStatus | "all">("all");
  const [activeTableDetail, setActiveTableDetail] = useState<Table | null>(null);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [targetTableId, setTargetTableId] = useState<string>("");

  const filteredTables = tables.filter((tbl) => {
    if (zoneFilter !== "all" && tbl.zone !== zoneFilter) return false;
    if (statusFilter !== "all" && tbl.status !== statusFilter) return false;
    return true;
  });

  const getStatusBadge = (status: TableStatus) => {
    switch (status) {
      case "available":
        return {
          label: lang === "ar" ? "متاحة" : "Available",
          color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
          dot: "bg-emerald-400",
        };
      case "occupied":
        return {
          label: lang === "ar" ? "مشغولة" : "Occupied",
          color: "bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/40",
          dot: "bg-[#D4AF37] animate-pulse",
        };
      case "reserved":
        return {
          label: lang === "ar" ? "محجوزة" : "Reserved",
          color: "bg-blue-500/15 text-blue-400 border-blue-500/30",
          dot: "bg-blue-400",
        };
      case "billed":
        return {
          label: lang === "ar" ? "جاهزة للدفع" : "Billed",
          color: "bg-purple-500/15 text-purple-300 border-purple-500/30",
          dot: "bg-purple-400",
        };
    }
  };

  const getZoneLabel = (zone: TableZone) => {
    switch (zone) {
      case "indoor":
        return lang === "ar" ? "الصالة الداخلية" : "Indoor Dining";
      case "terrace":
        return lang === "ar" ? "التراس الخارجي" : "Outdoor Terrace";
      case "vip_majlis":
        return lang === "ar" ? "مجلس كبار الشخصيات" : "VIP Majlis";
      case "family":
        return lang === "ar" ? "قسم العائلات" : "Family Zone";
    }
  };

  const handleCardClick = (table: Table) => {
    if (table.status === "occupied" || table.status === "billed") {
      openTableOrder(table);
      setActiveView("pos");
    } else {
      setActiveTableDetail(table);
    }
  };

  const handleOpenForBilling = (table: Table) => {
    openTableOrder(table);
    setActiveTableDetail(null);
    setActiveView("pos");
  };

  const handleTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTableDetail && targetTableId) {
      transferTable(activeTableDetail.id, targetTableId);
      setIsTransferModalOpen(false);
      setActiveTableDetail(null);
      setTargetTableId("");
    }
  };

  const availableTargetTables = tables.filter(
    (t) => t.status === "available" && t.id !== activeTableDetail?.id
  );

  return (
    <div className="flex-1 flex flex-col bg-slate-100 dark:bg-[#0B0D14] text-slate-900 dark:text-slate-100 min-h-0 h-full overflow-hidden">
      {/* Top Banner */}
      <div className="flex-shrink-0 px-3 sm:px-6 py-2.5 sm:py-3 border-b border-slate-200 dark:border-[#1E2230] bg-white dark:bg-[#10121A] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-bold">
              <LayoutGrid className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                {lang === "ar" ? "مخطط الصالة وإدارة الطاولات" : "Restaurant Floor & Table Management"}
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-amber-800 dark:text-[#D4AF37] font-mono font-bold">
                  {tables.filter((t) => t.status === "occupied").length} / {tables.length} {lang === "ar" ? "مشغولة" : "Occupied"}
                </span>
              </h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 hidden sm:block">
                {lang === "ar"
                  ? "مراقبة الطاولات في الوقت الفعلي، فتح الطلبات، النقل، وإصدار الفواتير الفورية"
                  : "Real-time table occupancy, quick order retrieval, table transfers, and checkout"}
              </p>
            </div>
          </div>
        </div>

        {/* Legend / Quick Stats */}
        <div className="flex items-center gap-1.5 flex-wrap text-xs">
          {(["available", "occupied", "reserved", "billed"] as const).map((status) => {
            const count = tables.filter((t) => t.status === status).length;
            const badge = getStatusBadge(status);
            return (
              <button
                key={status}
                onClick={() => setStatusFilter(statusFilter === status ? "all" : status)}
                className={`px-2.5 py-1 rounded-xl border flex items-center gap-1.5 transition-all shrink-0 ${
                  statusFilter === status
                    ? "bg-slate-200 dark:bg-[#1C202C] border-[#D4AF37] text-slate-900 dark:text-white font-bold"
                    : `${badge.color} hover:bg-slate-100 dark:hover:bg-[#161924]`
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${badge.dot}`} />
                <span className="font-semibold text-[11px]">{badge.label}</span>
                <span className="px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-black/40 font-mono text-[10px]">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Zone Tabs Bar */}
      <div className="flex-shrink-0 px-3 sm:px-6 py-1.5 bg-slate-50 dark:bg-[#0F1118] border-b border-slate-200 dark:border-[#1A1D28] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {(["all", "indoor", "terrace", "vip_majlis", "family"] as const).map((zone) => (
          <button
            key={zone}
            onClick={() => setZoneFilter(zone)}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all shrink-0 ${
              zoneFilter === zone
                ? "bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-black"
                : "bg-white dark:bg-[#161924] border border-slate-200 dark:border-[#232736] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-amber-500 dark:hover:border-[#333A4E]"
            }`}
          >
            {zone === "all" ? (lang === "ar" ? "كافة الأقسام" : "All Zones") : getZoneLabel(zone)}
          </button>
        ))}
      </div>

      {/* Tables Grid */}
      <div className="flex-1 p-3 sm:p-4 overflow-y-auto min-h-0 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-3.5 pb-8">
          {filteredTables.map((table) => {
            const badge = getStatusBadge(table.status);
            const isSelected = selectedTable?.id === table.id;

            return (
              <div
                key={table.id}
                onClick={() => handleCardClick(table)}
                className={`group relative rounded-2xl p-3 sm:p-3.5 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-amber-500/10 dark:bg-[#181C28] border-amber-500 dark:border-[#D4AF37] shadow-lg shadow-amber-500/15 ring-2 ring-amber-500/50"
                    : table.status === "occupied"
                    ? "bg-amber-50 dark:bg-[#141722] border-amber-400/60 dark:border-[#D4AF37]/40 hover:border-amber-500 dark:hover:border-[#D4AF37] shadow-md"
                    : table.status === "billed"
                    ? "bg-purple-50 dark:bg-[#161424] border-purple-400 dark:border-purple-500/40 hover:border-purple-500 shadow-md"
                    : "bg-white dark:bg-[#12141C] border-slate-200 dark:border-[#222736] hover:border-amber-500 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-[#161822] shadow-sm"
                }`}
              >
                {/* Header: Table Number & Status Dot */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                      {table.zone.replace("_", " ")}
                    </span>
                    <h3 className="text-base font-black text-slate-900 dark:text-white font-mono tracking-tight mt-0.5">
                      {lang === "ar" ? "طاولة" : "TABLE"} {table.number.replace(/\D/g, "") || table.number}
                    </h3>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold border ${badge.color}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                    <span>{badge.label}</span>
                  </span>
                </div>

                {/* Capacity & Seated details */}
                <div className="my-2 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Users className="w-3.5 h-3.5 text-slate-500" />
                    <span>{table.capacity} {lang === "ar" ? "مقاعد" : "Seats"}</span>
                  </div>

                  {table.status === "occupied" && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{table.seatedAt || (lang === "ar" ? "جالسين مؤخراً" : "Seated recently")}</span>
                    </div>
                  )}
                </div>

                {/* Footer: Order total or Quick Open */}
                <div className="pt-2 border-t border-[#1F2433] flex items-center justify-between">
                  {table.status === "occupied" || table.status === "billed" ? (
                    <div>
                      <span className="text-[9px] text-slate-400 block font-medium">
                        {table.currentOrderId || "Bill Total"}
                      </span>
                      <span className="text-xs font-black text-[#D4AF37] font-mono">
                        {formatDhs(table.activeOrderTotal || 0)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-[10px] font-medium text-emerald-400">
                      {lang === "ar" ? "جاهزة للضيوف" : "Ready for Guests"}
                    </span>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTableDetail(table);
                    }}
                    className="p-1 rounded-lg bg-[#1D212F] hover:bg-[#2A3044] text-slate-300 hover:text-white transition text-xs"
                    title="Manage Table"
                  >
                    ⚙
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Table Actions Drawer / Modal */}
      {activeTableDetail && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-50">
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="bg-[#12141C] border border-[#262B3B] rounded-2xl max-w-md w-full overflow-hidden shadow-2xl flex flex-col text-slate-100"
          >
            {/* Header */}
            <div className="p-4 border-b border-[#202534] flex items-center justify-between bg-[#161924]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-bold font-mono">
                  {activeTableDetail.number}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    TABLE {activeTableDetail.number.replace(/\D/g, "")} • {activeTableDetail.label}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {getZoneLabel(activeTableDetail.zone)} • {activeTableDetail.capacity} {lang === "ar" ? "مقاعد" : "seats"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveTableDetail(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body: Status details and Action buttons */}
            <div className="p-5 space-y-4 text-xs">
              {/* Status Switcher Bar */}
              <div>
                <label className="font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  {lang === "ar" ? "حالة الطاولة الحالية" : "Current Table Status"}
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {(["available", "occupied", "reserved", "billed"] as const).map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => {
                        updateTableStatus(activeTableDetail.id, st);
                        setActiveTableDetail({ ...activeTableDetail, status: st });
                      }}
                      className={`py-1.5 px-2 rounded-lg font-bold capitalize transition border text-center ${
                        activeTableDetail.status === st
                          ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                          : "bg-[#181B26] border-[#2A2F40] text-slate-300 hover:border-slate-500"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-[#1F2433]">
                <button
                  type="button"
                  onClick={() => handleOpenForBilling(activeTableDetail)}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 text-black font-extrabold flex items-center justify-center gap-2 shadow-md shadow-[#D4AF37]/20 transition"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>
                    {activeTableDetail.status === "occupied"
                      ? lang === "ar"
                        ? "فتح الفاتورة ومتابعة الطلب"
                        : "Open Active Bill in POS"
                      : lang === "ar"
                      ? "بدء طلب جديد لهذه الطاولة"
                      : "Start New Order on Table"}
                  </span>
                </button>

                {activeTableDetail.status === "occupied" && (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsTransferModalOpen(true)}
                      className="w-full py-2 px-4 rounded-xl bg-[#1A1D2A] hover:bg-[#24293B] border border-[#2A2F42] text-white font-bold flex items-center justify-center gap-2 transition"
                    >
                      <ArrowRightLeft className="w-4 h-4 text-[#D4AF37]" />
                      <span>{lang === "ar" ? "نقل الطلب إلى طاولة أخرى" : "Transfer Table"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        closeTableBill(activeTableDetail.id);
                        setActiveTableDetail(null);
                      }}
                      className="w-full py-2 px-4 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/60 text-rose-300 font-bold flex items-center justify-center gap-2 transition"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>{lang === "ar" ? "إغلاق وتحرير الطاولة" : "Settle & Release Table"}</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transfer Table Sub-Modal */}
      {isTransferModalOpen && activeTableDetail && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="bg-[#12141C] border border-[#2A2F42] rounded-2xl max-w-sm w-full p-5 shadow-2xl text-slate-100 space-y-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#202534]">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4 text-[#D4AF37]" />
                <span>{lang === "ar" ? "نقل الطلب من طاولة إلى أخرى" : "Transfer Table Order"}</span>
              </h3>
              <button
                onClick={() => setIsTransferModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleTransferSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="text-slate-400 block mb-1 font-semibold">
                  {lang === "ar" ? "الطاولة الحالية (المشغولة)" : "Current Occupied Table"}
                </label>
                <div className="p-2.5 rounded-lg bg-[#181B26] border border-[#2B3042] text-[#D4AF37] font-bold font-mono">
                  TABLE {activeTableDetail.number} • {getZoneLabel(activeTableDetail.zone)}
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1 font-semibold">
                  {lang === "ar" ? "اختر الطاولة الجديدة (المتاحة)" : "Select Destination Table (Available)"}
                </label>
                {availableTargetTables.length === 0 ? (
                  <p className="text-rose-400 text-xs">
                    {lang === "ar" ? "لا توجد طاولات متاحة حالياً للنقل إليها." : "No available tables to transfer to."}
                  </p>
                ) : (
                  <select
                    required
                    value={targetTableId}
                    onChange={(e) => setTargetTableId(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none font-mono"
                  >
                    <option value="">{lang === "ar" ? "-- اختر طاولة متاحة --" : "-- Select Available Table --"}</option>
                    {availableTargetTables.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.number} ({t.label} - {t.capacity}p - {t.zone})
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="submit"
                  disabled={!targetTableId}
                  className="flex-1 py-2 rounded-xl bg-[#D4AF37] disabled:opacity-50 text-black font-extrabold hover:brightness-110 transition"
                >
                  {lang === "ar" ? "تأكيد النقل" : "Confirm Transfer"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsTransferModalOpen(false)}
                  className="py-2 px-4 rounded-xl bg-[#1A1D2A] text-slate-300 hover:text-white transition"
                >
                  {lang === "ar" ? "إلغاء" : "Cancel"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
