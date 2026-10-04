"use client";

import React, { useState } from "react";
import { SlidersHorizontal, Store, X, Save } from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";

export const PosSettingsModal: React.FC = () => {
  const {
    isSettingsModalOpen,
    setIsSettingsModalOpen,
    businessProfile,
    updateBusinessProfile,
    t,
    lang,
  } = useRestaurantPos();

  const [name, setName] = useState(businessProfile.name);
  const [arabicName, setArabicName] = useState(businessProfile.arabicName);
  const [branchName, setBranchName] = useState(businessProfile.branchName);
  const [trn, setTrn] = useState(businessProfile.trn);
  const [phone, setPhone] = useState(businessProfile.phone);
  const [address, setAddress] = useState(businessProfile.address);
  const [vatPercent, setVatPercent] = useState(businessProfile.defaultVatPercent.toString());
  const [receiptFooterEn, setReceiptFooterEn] = useState(businessProfile.receiptFooterEn);
  const [receiptFooterAr, setReceiptFooterAr] = useState(businessProfile.receiptFooterAr);

  if (!isSettingsModalOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateBusinessProfile({
      name,
      arabicName,
      branchName,
      trn,
      phone,
      address,
      defaultVatPercent: parseFloat(vatPercent) || 5,
      receiptFooterEn,
      receiptFooterAr,
    });
    setIsSettingsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in-50">
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="bg-[#12141C] text-slate-100 border border-[#262B3B] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {t.nav_settings}
              </h3>
              <p className="text-xs text-slate-500">Business, Branch & UAE Tax Profile</p>
            </div>
          </div>
          <button
            onClick={() => setIsSettingsModalOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-5 space-y-3.5 overflow-y-auto flex-1 text-xs">
          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300">Restaurant Name (English)</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300">Restaurant Name (Arabic)</label>
            <input
              type="text"
              required
              value={arabicName}
              onChange={(e) => setArabicName(e.target.value)}
              className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-right"
              dir="rtl"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300">Branch Name</label>
              <input
                type="text"
                required
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300">UAE TRN Number</label>
              <input
                type="text"
                required
                value={trn}
                onChange={(e) => setTrn(e.target.value)}
                className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300">Phone</label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300">VAT Rate (%)</label>
              <input
                type="number"
                step="0.5"
                required
                value={vatPercent}
                onChange={(e) => setVatPercent(e.target.value)}
                className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300">Address / Location</label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300">Receipt Footer (English)</label>
            <input
              type="text"
              value={receiptFooterEn}
              onChange={(e) => setReceiptFooterEn(e.target.value)}
              className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300">Receipt Footer (Arabic)</label>
            <input
              type="text"
              value={receiptFooterAr}
              onChange={(e) => setReceiptFooterAr(e.target.value)}
              className="w-full mt-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-right"
              dir="rtl"
            />
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsSettingsModalOpen(false)}
              className="px-4 py-2 rounded-lg font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100"
            >
              {t.cancel}
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{t.save}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
