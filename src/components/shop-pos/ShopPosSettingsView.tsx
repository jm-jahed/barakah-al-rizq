"use client";

import React, { useState } from "react";
import { Settings, Store, Printer, Barcode, Globe, DollarSign, Shield, Save, CheckCircle, RefreshCw } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";

export const ShopPosSettingsView: React.FC = () => {
  const {
    businessProfile,
    updateBusinessProfile,
    printerConfig,
    setPrinterConfig,
    printerStatus,
    checkPrinterStatus,
    runTestPrint,
    lastPrintResult,
    activeCurrency,
    setCurrency,
    currencies,
    lang,
    setLanguage,
  } = useShopPos();

  // Store Profile Form State
  const [storeName, setStoreName] = useState(businessProfile.name);
  const [branchName, setBranchName] = useState(businessProfile.branchName);
  const [trn, setTrn] = useState(businessProfile.trn);
  const [address, setAddress] = useState(businessProfile.address);
  const [phone, setPhone] = useState(businessProfile.phone);
  const [email, setEmail] = useState(businessProfile.email);
  const [footerNote, setFooterNote] = useState(businessProfile.receiptFooterNote || "");
  const [saveSuccessMsg, setSaveSuccessMsg] = useState("");

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateBusinessProfile({
      name: storeName,
      branchName,
      trn,
      address,
      phone,
      email,
      receiptFooterNote: footerNote,
    });
    setSaveSuccessMsg("Store profile branding & white-label settings updated successfully!");
    setTimeout(() => setSaveSuccessMsg(""), 3500);
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#07090F] p-4 lg:p-6 overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-slate-100 flex items-center gap-2.5">
            <Settings className="w-6 h-6 text-[#D4AF37]" />
            <span>{lang === "ar" ? "إعدادات النظام والعلامة التجارية" : "White-Label & System Configuration"}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {lang === "ar"
              ? "تخصيص اسم المتجر، الرقم الضريبي، العملة، اللغة، وإعدادات طابعة الإيصالات"
              : "Customize store white-label branding, TRN tax ID, printer bridge, currency, and language"}
          </p>
        </div>
      </div>

      {saveSuccessMsg && (
        <div className="p-3.5 mb-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* White-Label Store Branding */}
        <form onSubmit={handleSaveProfile} className="p-5 rounded-2xl bg-[#0E121B] border border-[#1C2333] space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
            <Store className="w-4 h-4 text-[#D4AF37]" />
            <span>Store White-Label Profile</span>
          </h3>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Brand Name / Software Title</label>
            <input
              type="text"
              required
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              placeholder="e.g. RETAIL POS or AL NOOR SUPERMARKET"
              className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-bold rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Branch / Store Name</label>
            <input
              type="text"
              required
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              placeholder="ABC GENERAL STORE — Dubai Flagship"
              className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">TRN Tax Number (15 digits)</label>
              <input
                type="text"
                required
                value={trn}
                onChange={(e) => setTrn(e.target.value)}
                className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Physical Store Address</label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Receipt Footer Policy Note</label>
            <textarea
              rows={2}
              value={footerNote}
              onChange={(e) => setFooterNote(e.target.value)}
              className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-md hover:brightness-110 transition flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Store Branding</span>
          </button>
        </form>

        {/* Hardware & Regional Settings */}
        <div className="space-y-6">
          {/* Printer Setup */}
          <div className="p-5 rounded-2xl bg-[#0E121B] border border-[#1C2333] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <Printer className="w-4 h-4 text-[#D4AF37]" />
                <span>Receipt Printer Architecture</span>
              </h3>
              <button
                onClick={checkPrinterStatus}
                className="text-[11px] text-[#D4AF37] font-semibold hover:underline flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Check Status</span>
              </button>
            </div>

            <div className="p-3 rounded-xl bg-[#141A26] border border-[#202738] text-xs flex items-center justify-between font-mono">
              <span className="text-slate-400">Connection Status:</span>
              <span className={`font-bold flex items-center gap-1.5 ${printerStatus.isConnected ? "text-emerald-400" : "text-rose-400"}`}>
                <span className={`w-2 h-2 rounded-full ${printerStatus.isConnected ? "bg-emerald-400 animate-pulse" : "bg-rose-500"}`} />
                <span>{printerStatus.message}</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Printing Mode</label>
                <select
                  value={printerConfig.mode}
                  onChange={(e) => setPrinterConfig((prev) => ({ ...prev, mode: e.target.value as any }))}
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none"
                >
                  <option value="bridge">Local Print Bridge (Port 8088 / ESC/POS)</option>
                  <option value="browser">Native Browser Print</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Receipt Paper Width</label>
                <select
                  value={printerConfig.paperSize}
                  onChange={(e) => setPrinterConfig((prev) => ({ ...prev, paperSize: e.target.value as any, paperWidth: e.target.value as any }))}
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none"
                >
                  <option value="80mm">Thermal 80mm</option>
                  <option value="58mm">Thermal 58mm</option>
                </select>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1C2333] flex items-center justify-between">
              <button
                type="button"
                onClick={() => runTestPrint()}
                className="px-4 py-2 rounded-xl bg-[#1C2538] hover:bg-[#25324C] border border-[#2B3956] text-xs font-bold text-slate-200 transition flex items-center gap-2"
              >
                <Printer className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Run Hardware Test Print</span>
              </button>

              {lastPrintResult && (
                <span className={`text-xs font-mono font-bold ${lastPrintResult.success ? "text-emerald-400" : "text-rose-400"}`}>
                  {lastPrintResult.success ? "✓ Test Receipt Sent!" : `✕ ${lastPrintResult.error || "Print Failed"}`}
                </span>
              )}
            </div>
          </div>

          {/* Regional Currency & Language */}
          <div className="p-5 rounded-2xl bg-[#0E121B] border border-[#1C2333] space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span>Currency & Localization</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Active Currency</label>
                <select
                  value={activeCurrency}
                  onChange={(e) => setCurrency(e.target.value as any)}
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none"
                >
                  {currencies.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code} - {c.name} ({c.symbol})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Application Language</label>
                <select
                  value={lang}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none"
                >
                  <option value="en">English (LTR)</option>
                  <option value="ar">العربية (Arabic RTL)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
