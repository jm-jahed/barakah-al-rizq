"use client";

import React from "react";
import { PaymentStatus } from "@/types/dashboard";
import { CheckCircle2, Clock, AlertTriangle, AlertCircle, RefreshCw, XCircle } from "lucide-react";
import { useInvoiceLanguage } from "@/context/InvoiceLanguageContext";

interface StatusBadgeProps {
  status: PaymentStatus;
  overdueDays?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function StatusBadge({ status, overdueDays = 0, className = "", size = "md" }: StatusBadgeProps) {
  const { lang, t } = useInvoiceLanguage();

  const sizeClasses = {
    sm: "text-[10px] px-2 py-0.5 gap-1",
    md: "text-[11px] px-2.5 py-1 gap-1.5",
    lg: "text-xs px-3 py-1.5 gap-2 font-semibold",
  };

  const isAr = lang === "ar";

  switch (status) {
    case "PAID":
      return (
        <span className={`inline-flex items-center rounded-full font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 ${sizeClasses[size]} ${className}`}>
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
          <span>{isAr ? "مدفوعة" : "PAID"}</span>
        </span>
      );

    case "PARTIALLY PAID":
      return (
        <span className={`inline-flex items-center rounded-full font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30 ${sizeClasses[size]} ${className}`}>
          <RefreshCw className="w-3.5 h-3.5 shrink-0 text-amber-400" />
          <span>{isAr ? "دفعة جزئية" : "PARTIAL"}</span>
        </span>
      );

    case "OVERDUE":
      return (
        <span className={`inline-flex items-center rounded-full font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse ${sizeClasses[size]} ${className}`}>
          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-400" />
          <span>{isAr ? `متأخرة ${overdueDays > 0 ? `(${overdueDays}ي)` : ""}` : `OVERDUE ${overdueDays > 0 ? `(${overdueDays}d)` : ""}`}</span>
        </span>
      );

    case "DUE":
      return (
        <span className={`inline-flex items-center rounded-full font-bold bg-orange-500/15 text-orange-400 border border-orange-500/30 ${sizeClasses[size]} ${className}`}>
          <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-orange-400" />
          <span>{isAr ? "مستحقة اليوم" : "DUE TODAY"}</span>
        </span>
      );

    case "PENDING":
      return (
        <span className={`inline-flex items-center rounded-full font-bold bg-blue-500/15 text-blue-400 border border-blue-500/30 ${sizeClasses[size]} ${className}`}>
          <Clock className="w-3.5 h-3.5 shrink-0 text-blue-400" />
          <span>{isAr ? "قيد الانتظار" : "PENDING"}</span>
        </span>
      );

    case "CANCELLED":
      return (
        <span className={`inline-flex items-center rounded-full font-bold bg-slate-500/15 text-slate-400 border border-slate-500/30 ${sizeClasses[size]} ${className}`}>
          <XCircle className="w-3.5 h-3.5 shrink-0 text-slate-400" />
          <span>{isAr ? "ملغاة" : "CANCELLED"}</span>
        </span>
      );

    default:
      return null;
  }
}

export default StatusBadge;
