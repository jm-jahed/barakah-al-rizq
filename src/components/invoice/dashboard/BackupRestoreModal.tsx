"use client";

import React, { useState, useRef } from "react";
import { Download, Upload, CheckCircle2, AlertTriangle, X, FileText, ShieldAlert } from "lucide-react";
import { InvoiceStorageService } from "@/services/invoiceStorage";

interface BackupRestoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDataRestored: () => void;
}

export default function BackupRestoreModal({ isOpen, onClose, onDataRestored }: BackupRestoreModalProps) {
  const [activeTab, setActiveTab] = useState<"EXPORT" | "RESTORE">("EXPORT");
  const [isExporting, setIsExporting] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [parsedFile, setParsedFile] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleExportBackup = async () => {
    setIsExporting(true);
    setError(null);
    try {
      const blob = await InvoiceStorageService.exportBackupBlob();
      if (!blob) throw new Error("Could not generate backup file.");

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `nabta_erp_backup_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setSuccessMsg("Backup downloaded successfully!");
    } catch (err: any) {
      setError(err.message || "Failed to download backup.");
    } finally {
      setIsExporting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setSuccessMsg(null);
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const json = JSON.parse(text);

        // Pre-validate
        if (!json.clients || !json.invoices || !json.payments) {
          throw new Error("Invalid backup format: Must contain clients, invoices, and payments arrays.");
        }
        setParsedFile(json);
      } catch (err: any) {
        setError(`File error: ${err.message}`);
        setParsedFile(null);
      }
    };
    reader.readAsText(file);
  };

  const handleConfirmRestore = async () => {
    if (!parsedFile) return;
    setIsRestoring(true);
    setError(null);
    try {
      const res = await InvoiceStorageService.restoreBackupFromJSON(parsedFile);
      if (res.success) {
        setSuccessMsg(res.message || "Backup restored successfully!");
        setParsedFile(null);
        onDataRestored();
      } else {
        setError(res.error || "Restore validation failed. No data was changed.");
      }
    } catch (err: any) {
      setError(err.message || "Restore operation failed.");
    } finally {
      setIsRestoring(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            ERP Database Backup & Restore
          </h3>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 text-xs font-bold">
          <button
            onClick={() => { setActiveTab("EXPORT"); setError(null); setSuccessMsg(null); }}
            className={`flex-1 py-3 text-center transition cursor-pointer ${
              activeTab === "EXPORT"
                ? "text-emerald-600 border-b-2 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 font-black"
                : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            Export Backup (JSON)
          </button>
          <button
            onClick={() => { setActiveTab("RESTORE"); setError(null); setSuccessMsg(null); }}
            className={`flex-1 py-3 text-center transition cursor-pointer ${
              activeTab === "RESTORE"
                ? "text-emerald-600 border-b-2 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 font-black"
                : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            Restore Backup (JSON)
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl flex items-start gap-2 text-rose-700 dark:text-rose-400 text-xs">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-center gap-2 text-emerald-800 dark:text-emerald-300 text-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {activeTab === "EXPORT" ? (
            <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
              <p>
                Download a complete, offline JSON snapshot containing all commercial clients, invoices, line items, and payment ledgers.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-[11px] space-y-1">
                <div>• Format: JSON (Strict Schema)</div>
                <div>• Security: Pure data, no credentials included</div>
                <div>• Compatibility: Full cloud & local restore ready</div>
              </div>
              <button
                onClick={handleExportBackup}
                disabled={isExporting}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                <span>{isExporting ? "Exporting Backup..." : "Download Full Backup JSON"}</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
              <p>
                Upload an official <strong>.json</strong> backup file to restore records. The file will be strictly validated before any change is applied.
              </p>

              <input
                type="file"
                ref={fileInputRef}
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
              />

              {!parsedFile ? (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-8 border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 rounded-2xl flex flex-col items-center justify-center gap-2 text-slate-500 hover:text-emerald-600 transition cursor-pointer"
                >
                  <Upload className="w-6 h-6" />
                  <span className="font-bold">Select Backup JSON File</span>
                </button>
              ) : (
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                    <FileText className="w-4 h-4 text-emerald-500" />
                    <span>Validated Backup Preview:</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 font-mono text-center">
                    <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                      <span className="font-bold block">{parsedFile.clients?.length ?? 0}</span>
                      <span className="text-[10px] text-slate-400">Clients</span>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                      <span className="font-bold text-emerald-600 block">{parsedFile.invoices?.length ?? 0}</span>
                      <span className="text-[10px] text-slate-400">Invoices</span>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                      <span className="font-bold text-blue-600 block">{parsedFile.payments?.length ?? 0}</span>
                      <span className="text-[10px] text-slate-400">Payments</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 text-[11px] text-amber-600 dark:text-amber-400">
                    <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Restoring will safely upsert these records into your cloud database.</span>
                  </div>

                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => setParsedFile(null)}
                      className="flex-1 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold cursor-pointer"
                    >
                      Clear
                    </button>
                    <button
                      onClick={handleConfirmRestore}
                      disabled={isRestoring}
                      className="flex-2 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold cursor-pointer disabled:opacity-50"
                    >
                      {isRestoring ? "Restoring..." : "Confirm & Restore"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
