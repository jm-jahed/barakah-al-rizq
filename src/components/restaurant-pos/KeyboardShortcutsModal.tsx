"use client";

import React from "react";
import { Keyboard, X } from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";

export const KeyboardShortcutsModal: React.FC = () => {
  const { isShortcutsModalOpen, setIsShortcutsModalOpen, t, lang } = useRestaurantPos();

  if (!isShortcutsModalOpen) return null;

  const shortcuts = [
    {
      key: "/",
      desc: lang === "ar" ? "التركيز الفوري على حقل البحث في القائمة" : "Focus Product Search instantly",
    },
    {
      key: "F2",
      desc: lang === "ar" ? "بدء فاتورة جديدة وتفريغ السلة" : "Start a New Bill / Reset Cart",
    },
    {
      key: "F4",
      desc: lang === "ar" ? "فتح نافذة الدفع وتسوية الحساب" : "Open Payment Modal & Tender",
    },
    {
      key: "F8",
      desc: lang === "ar" ? "طباعة الفاتورة الضريبية والإيصال الحراري" : "Print Official Thermal Receipt",
    },
    {
      key: "Esc",
      desc: lang === "ar" ? "إغلاق أي نافذة أو حوار منبثق" : "Close any open modal or dialog",
    },
    {
      key: "+ / -",
      desc: lang === "ar" ? "زيادة أو تقليل كمية الصنف في الفاتورة" : "Adjust item quantity in bill",
    },
    {
      key: "Enter",
      desc: lang === "ar" ? "تأكيد الدفع أو حفظ الإجراء" : "Confirm payment or save changes",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in-50">
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="bg-white dark:bg-[#12141C] text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-[#262B3B] rounded-2xl max-w-md w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl p-4 sm:p-5 space-y-3"
      >
        <div className="flex-shrink-0 flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold">
              <Keyboard className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {t.keyboard_shortcuts}
            </h3>
          </div>
          <button
            onClick={() => setIsShortcutsModalOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="flex-shrink-0 text-xs text-slate-500 dark:text-slate-400">
          Designed for commercial touch terminals and high-speed cashier keyboards:
        </p>

        <div className="flex-1 overflow-y-auto min-h-0 divide-y divide-slate-100 dark:divide-slate-800 text-xs pe-1">
          {shortcuts.map((s, idx) => (
            <div key={idx} className="py-2.5 flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300 font-medium me-2">{s.desc}</span>
              <kbd className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono font-bold text-amber-700 dark:text-amber-400 text-xs shadow-xs shrink-0">
                {s.key}
              </kbd>
            </div>
          ))}
        </div>

        <div className="flex-shrink-0 pt-2 flex justify-end border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setIsShortcutsModalOpen(false)}
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 active:scale-95 transition"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
