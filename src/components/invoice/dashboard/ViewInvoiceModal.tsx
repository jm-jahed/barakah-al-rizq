"use client";

import React, { useState } from "react";
import {
  X,
  Printer,
  Download,
  CreditCard,
  Send,
  Edit,
  FileText,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
  MessageSquare,
  RefreshCw,
} from "lucide-react";
import { ManagedInvoice } from "@/types/dashboard";
import InvoicePreview from "../InvoicePreview";
import { StatusBadge } from "./StatusBadge";
import { exportInvoiceToPDF, shareInvoiceViaWhatsApp } from "@/utils/pdfExport";

interface ViewInvoiceModalProps {
  isOpen: boolean;
  invoice: ManagedInvoice | null;
  onClose: () => void;
  onEdit: (invoice: ManagedInvoice) => void;
  onRecordPayment: (invoice: ManagedInvoice) => void;
  onSendReminder: (invoice: ManagedInvoice) => void;
}

export const ViewInvoiceModal: React.FC<ViewInvoiceModalProps> = ({
  isOpen,
  invoice,
  onClose,
  onEdit,
  onRecordPayment,
  onSendReminder,
}) => {
  const [scale, setScale] = useState(0.92);
  const [downloadStatus, setDownloadStatus] = useState<string | null>(null);
  const [whatsAppStatus, setWhatsAppStatus] = useState<string | null>(null);
  const [fallbackToast, setFallbackToast] = useState<string | null>(null);

  if (!isOpen || !invoice) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    if (downloadStatus) return;
    setDownloadStatus("Generating PDF...");
    try {
      await exportInvoiceToPDF(
        "modal-invoice-preview-container",
        `Tax_Invoice_${invoice.meta.invoiceNumber}.pdf`,
        (status) => setDownloadStatus(status)
      );
      setTimeout(() => setDownloadStatus(null), 2500);
    } catch {
      setDownloadStatus("Unable to generate PDF. Please try again.");
      setTimeout(() => setDownloadStatus(null), 3000);
    }
  };

  const handleWhatsAppShare = async () => {
    if (whatsAppStatus) return;
    setWhatsAppStatus("Preparing PDF...");
    try {
      const res = await shareInvoiceViaWhatsApp(
        invoice,
        "modal-invoice-preview-container",
        undefined,
        (status) => setWhatsAppStatus(status)
      );
      if (res?.fallbackNotice) {
        setFallbackToast(res.fallbackNotice);
        setTimeout(() => setFallbackToast(null), 5000);
      }
      setTimeout(() => setWhatsAppStatus(null), 2500);
    } catch {
      setWhatsAppStatus("Unable to generate PDF. Please try again.");
      setTimeout(() => setWhatsAppStatus(null), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Fallback notification for WhatsApp download */}
        {fallbackToast && (
          <div className="bg-emerald-950 border-b border-emerald-800 px-6 py-2.5 text-xs font-semibold text-emerald-300 text-center animate-fadeIn">
            {fallbackToast}
          </div>
        )}

        {/* 1. Header Toolbar */}
        <div className="p-4 sm:px-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-mono font-bold text-white text-base">
                  Tax Invoice #{invoice.meta.invoiceNumber}
                </h2>
                <StatusBadge status={invoice.status} overdueDays={invoice.overdueDays} size="sm" />
              </div>
              <p className="text-xs text-slate-400">
                {invoice.customer.name} • {invoice.meta.invoiceDate}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Zoom controls */}
            <div className="flex items-center gap-1 bg-slate-800/80 rounded-xl p-1 border border-slate-700/50">
              <button
                onClick={() => setScale((s) => Math.max(0.35, s - 0.05))}
                className="p-1 text-slate-400 hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-slate-300 text-[11px] w-9 text-center">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={() => setScale((s) => Math.min(1.3, s + 0.05))}
                className="p-1 text-slate-400 hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && window.innerWidth < 850) {
                    const fitScale = Math.min(0.92, Math.max(0.36, (window.innerWidth - 32) / 800));
                    setScale(fitScale);
                  } else {
                    setScale(0.92);
                  }
                }}
                className="px-1.5 py-0.5 text-[10px] font-bold bg-slate-700 hover:bg-emerald-600 text-slate-200 hover:text-white rounded transition-colors"
                title="Fit Screen"
              >
                Fit
              </button>
            </div>

            {/* Send WhatsApp (PDF) */}
            <button
              onClick={handleWhatsAppShare}
              disabled={Boolean(whatsAppStatus)}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm disabled:opacity-75"
              title="Send Tax Invoice PDF to WhatsApp"
            >
              {whatsAppStatus ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>{whatsAppStatus}</span>
                </>
              ) : (
                <>
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp PDF</span>
                </>
              )}
            </button>

            {/* Download PDF */}
            <button
              onClick={handleDownloadPDF}
              disabled={Boolean(downloadStatus)}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm disabled:opacity-75"
              title="Download valid PDF file"
            >
              {downloadStatus ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>{downloadStatus}</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            {/* Print */}
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print A4</span>
            </button>

            {/* Record Payment */}
            {invoice.dueAmount > 0 && (
              <button
                onClick={() => {
                  onClose();
                  onRecordPayment(invoice);
                }}
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Pay Due</span>
              </button>
            )}

            {/* Send Reminder */}
            {invoice.dueAmount > 0 && (
              <button
                onClick={() => {
                  onClose();
                  onSendReminder(invoice);
                }}
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Reminder</span>
              </button>
            )}

            {/* Edit */}
            <button
              onClick={() => {
                onClose();
                onEdit(invoice);
              }}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold rounded-xl border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Edit Invoice in Generator"
            >
              <Edit className="w-3.5 h-3.5" />
              <span>Edit</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile swipe hint */}
        <div className="sm:hidden w-full text-center text-[11px] font-semibold text-slate-400 bg-slate-900/60 py-1 flex items-center justify-center gap-1.5 border-b border-slate-800 shrink-0">
          <span>⟵</span>
          <span>Swipe left or right to view full invoice</span>
          <span>⟶</span>
        </div>

        {/* 2. Scrollable Canvas Viewport */}
        <div className="flex-1 overflow-x-auto overflow-y-auto p-2 sm:p-6 bg-slate-950/80 overscroll-x-contain">
          <InvoicePreview
            invoice={invoice}
            previewScale={scale}
            containerId="modal-invoice-preview-container"
          />
        </div>
      </div>
    </div>
  );
};
