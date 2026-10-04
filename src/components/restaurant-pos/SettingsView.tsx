"use client";

import React, { useState } from "react";
import {
  SlidersHorizontal,
  Store,
  Receipt,
  Percent,
  Globe,
  Users,
  RotateCcw,
  Save,
  CheckCircle2,
  Shield,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";

type SettingsTab = "restaurant" | "tax" | "receipt" | "language" | "system";

export const SettingsView: React.FC = () => {
  const {
    businessProfile,
    updateBusinessProfile,
    lang,
    setLanguage,
    theme,
    toggleTheme,
    resetDemoData,
    formatDhs,
    t,
  } = useRestaurantPos();

  const [activeTab, setActiveTab] = useState<SettingsTab>("restaurant");

  // Form states
  const [name, setName] = useState(businessProfile.name);
  const [arabicName, setArabicName] = useState(businessProfile.arabicName);
  const [tagline, setTagline] = useState(businessProfile.tagline);
  const [arabicTagline, setArabicTagline] = useState(businessProfile.arabicTagline);
  const [branchName, setBranchName] = useState(businessProfile.branchName);
  const [trn, setTrn] = useState(businessProfile.trn);
  const [phone, setPhone] = useState(businessProfile.phone);
  const [whatsapp, setWhatsapp] = useState(businessProfile.whatsapp);
  const [email, setEmail] = useState(businessProfile.email);
  const [address, setAddress] = useState(businessProfile.address);
  const [city, setCity] = useState(businessProfile.city);
  const [emirate, setEmirate] = useState(businessProfile.emirate);
  const [vatPercent, setVatPercent] = useState(businessProfile.defaultVatPercent.toString());
  const [deliveryFee, setDeliveryFee] = useState(businessProfile.defaultDeliveryFee.toString());
  const [receiptFooterEn, setReceiptFooterEn] = useState(businessProfile.receiptFooterEn);
  const [receiptFooterAr, setReceiptFooterAr] = useState(businessProfile.receiptFooterAr);

  const handleSaveAll = (e: React.FormEvent) => {
    e.preventDefault();
    updateBusinessProfile({
      name,
      arabicName,
      tagline,
      arabicTagline,
      branchName,
      trn,
      phone,
      whatsapp,
      email,
      address,
      city,
      emirate,
      defaultVatPercent: parseFloat(vatPercent) || 5,
      defaultDeliveryFee: parseFloat(deliveryFee) || 15,
      receiptFooterEn,
      receiptFooterAr,
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-100 dark:bg-[#0B0D14] text-slate-900 dark:text-slate-100 min-h-0 h-full overflow-hidden">
      {/* Top Header */}
      <div className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 dark:border-[#1E2230] bg-white dark:bg-[#10121A] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-bold">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              {lang === "ar" ? "إعدادات المنشأة والضريبة ونقطة البيع" : "System & UAE Business Settings"}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {lang === "ar"
                ? "تخصيص بيانات المطعم، الرقم الضريبي (TRN)، إعدادات الفاتورة الحرارية، واللغة"
                : "Restaurant profile, UAE FTA Tax Registration, thermal receipt parameters, and language"}
            </p>
          </div>
        </div>

        <button
          onClick={handleSaveAll}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 text-black font-extrabold text-xs shadow-md shadow-[#D4AF37]/20 active:scale-95 transition"
        >
          <Save className="w-4 h-4" />
          <span>{lang === "ar" ? "حفظ كافة التغييرات" : "Save All Settings"}</span>
        </button>
      </div>

      {/* Tabs Subheader */}
      <div className="flex-shrink-0 px-4 sm:px-6 py-2 bg-slate-50 dark:bg-[#0F1118] border-b border-slate-200 dark:border-[#1A1D28] flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
        {[
          { id: "restaurant", label: lang === "ar" ? "بيانات المطعم" : "Restaurant Profile", icon: <Store className="w-3.5 h-3.5" /> },
          { id: "tax", label: lang === "ar" ? "الضريبة والتسعير (VAT)" : "Tax & VAT 5%", icon: <Percent className="w-3.5 h-3.5" /> },
          { id: "receipt", label: lang === "ar" ? "الفاتورة الحرارية" : "Thermal Receipt", icon: <Receipt className="w-3.5 h-3.5" /> },
          { id: "language", label: lang === "ar" ? "اللغة والمظهر" : "Language & Theme", icon: <Globe className="w-3.5 h-3.5" /> },
          { id: "system", label: lang === "ar" ? "النظام والبيانات" : "System & Data", icon: <RotateCcw className="w-3.5 h-3.5" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as SettingsTab)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-bold transition-all shrink-0 ${
              activeTab === tab.id
                ? "bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/15 font-black"
                : "bg-white dark:bg-[#141722] border border-slate-200 dark:border-[#222736] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Settings Form Body */}
      <div className="flex-1 p-3 sm:p-6 overflow-y-auto min-h-0 h-full">
        <form onSubmit={handleSaveAll} className="max-w-3xl space-y-6">
          {/* TAB 1: RESTAURANT PROFILE */}
          {activeTab === "restaurant" && (
            <div className="bg-white dark:bg-[#12141C] border border-slate-200 dark:border-[#222736] rounded-2xl p-5 space-y-4 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-[#202534]">
                <Store className="w-4 h-4 text-amber-600 dark:text-[#D4AF37]" />
                <span>{lang === "ar" ? "الهوية التجارية للمطعم" : "Restaurant Brand Details"}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-1">
                    {lang === "ar" ? "اسم المطعم (بالإنجليزية)" : "Restaurant Brand Name (English)"}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-1">
                    {lang === "ar" ? "اسم المطعم (بالعربية)" : "Restaurant Brand Name (Arabic)"}
                  </label>
                  <input
                    type="text"
                    required
                    dir="rtl"
                    value={arabicName}
                    onChange={(e) => setArabicName(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none text-right"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-1">
                    {lang === "ar" ? "اسم الفرع" : "Branch Name"}
                  </label>
                  <input
                    type="text"
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-1">
                    {lang === "ar" ? "البريد الإلكتروني للطلبات" : "Email Address"}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-1">
                    {lang === "ar" ? "رقم الهاتف (+971)" : "Phone Number"}
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-1">
                    {lang === "ar" ? "رقم الواتساب للطلبات" : "WhatsApp Number"}
                  </label>
                  <input
                    type="text"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none font-mono"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-1">
                    {lang === "ar" ? "عنوان الفرع بالتفصيل" : "Full Address & Location"}
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TAX & VAT */}
          {activeTab === "tax" && (
            <div className="bg-white dark:bg-[#12141C] border border-slate-200 dark:border-[#222736] rounded-2xl p-5 space-y-4 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-[#202534]">
                <Percent className="w-4 h-4 text-amber-600 dark:text-[#D4AF37]" />
                <span>{lang === "ar" ? "ضريبة القيمة المضافة والعملة (UAE VAT)" : "Tax & VAT Configuration"}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-1">
                    {lang === "ar" ? "الرقم الضريبي المعتمد (TRN)" : "UAE Tax Registration Number (TRN)"}
                  </label>
                  <input
                    type="text"
                    required
                    value={trn}
                    onChange={(e) => setTrn(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-amber-700 dark:text-[#D4AF37] focus:border-[#D4AF37] outline-none font-mono font-bold"
                  />
                  <p className="text-[10px] text-slate-500 mt-1">15-digit FTA UAE Tax Registration Number</p>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-1">
                    {lang === "ar" ? "نسبة ضريبة القيمة المضافة (%)" : "VAT Percentage Rate (%)"}
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    required
                    value={vatPercent}
                    onChange={(e) => setVatPercent(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none font-mono font-bold"
                  />
                  <p className="text-[10px] text-slate-500 mt-1">Default UAE VAT rate is 5%</p>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-1">
                    {lang === "ar" ? "رسوم التوصيل الافتراضية (درهم)" : "Default Delivery Fee (Dhs)"}
                  </label>
                  <input
                    type="number"
                    step="1"
                    value={deliveryFee}
                    onChange={(e) => setDeliveryFee(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-1">
                    {lang === "ar" ? "رمز العملة الإماراتي" : "Currency Code & Symbol"}
                  </label>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-amber-700 dark:text-[#D4AF37] font-bold font-mono">
                    AED / Dhs (د.إ)
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: RECEIPT SETTINGS */}
          {activeTab === "receipt" && (
            <div className="bg-white dark:bg-[#12141C] border border-slate-200 dark:border-[#222736] rounded-2xl p-5 space-y-4 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-[#202534]">
                <Receipt className="w-4 h-4 text-amber-600 dark:text-[#D4AF37]" />
                <span>{lang === "ar" ? "تخصيص الفاتورة الحرارية (80mm)" : "Thermal Receipt Parameters"}</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-1">
                    {lang === "ar" ? "تذييل الفاتورة بالإنجليزية (Receipt Footer EN)" : "Receipt Footer (English)"}
                  </label>
                  <textarea
                    rows={2}
                    value={receiptFooterEn}
                    onChange={(e) => setReceiptFooterEn(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-1">
                    {lang === "ar" ? "تذييل الفاتورة بالعربية (Receipt Footer AR)" : "Receipt Footer (Arabic)"}
                  </label>
                  <textarea
                    rows={2}
                    dir="rtl"
                    value={receiptFooterAr}
                    onChange={(e) => setReceiptFooterAr(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none text-right"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#181B26] border border-slate-200 dark:border-[#2B3042]">
                    <span className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5">Printer Width</span>
                    <span className="text-xs text-amber-700 dark:text-[#D4AF37] font-mono">Standard 80mm Roll</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#181B26] border border-slate-200 dark:border-[#2B3042]">
                    <span className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5">Tax QR Code</span>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono">FTA Compliant QR Included</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: LANGUAGE & THEME */}
          {activeTab === "language" && (
            <div className="bg-white dark:bg-[#12141C] border border-slate-200 dark:border-[#222736] rounded-2xl p-5 space-y-4 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-[#202534]">
                <Globe className="w-4 h-4 text-amber-600 dark:text-[#D4AF37]" />
                <span>{lang === "ar" ? "إعدادات اللغة والاتجاه والمظهر" : "Language, RTL & Display"}</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-2">
                    {lang === "ar" ? "لغة واجهة النظام" : "Interface Language"}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setLanguage("en")}
                      className={`p-3 rounded-xl border text-center font-bold transition ${
                        lang === "en"
                          ? "bg-amber-500/10 border-amber-500 text-slate-900 dark:text-white shadow-sm font-black"
                          : "bg-slate-50 dark:bg-[#181B26] border-slate-200 dark:border-[#2B3042] text-slate-600 dark:text-slate-400 hover:border-amber-500"
                      }`}
                    >
                      English (LTR)
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage("ar")}
                      className={`p-3 rounded-xl border text-center font-bold transition ${
                        lang === "ar"
                          ? "bg-amber-500/10 border-amber-500 text-slate-900 dark:text-white shadow-sm font-black"
                          : "bg-slate-50 dark:bg-[#181B26] border-slate-200 dark:border-[#2B3042] text-slate-600 dark:text-slate-400 hover:border-amber-500"
                      }`}
                    >
                      العربية (RTL)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-400 block mb-2">
                    {lang === "ar" ? "المظهر البصري" : "Visual Theme"}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={toggleTheme}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-center font-black text-amber-700 dark:text-[#D4AF37]"
                    >
                      {theme === "dark" ? "🌙 Dark Charcoal + Gold" : "☀️ Luxe Light Mode"} ({theme.toUpperCase()})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: SYSTEM & DATA RESET */}
          {activeTab === "system" && (
            <div className="bg-white dark:bg-[#12141C] border border-slate-200 dark:border-[#222736] rounded-2xl p-5 space-y-4 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-[#202534]">
                <RotateCcw className="w-4 h-4 text-amber-600 dark:text-[#D4AF37]" />
                <span>{lang === "ar" ? "إعادة ضبط البيانات التجريبية" : "Demo Data Management"}</span>
              </h3>

              <div className="space-y-3 text-xs">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {lang === "ar"
                    ? "إعادة ضبط كافة البيانات (قائمة الطعام، التصنيفات، الطاولات، التذاكر، وسجل الطلبات) إلى الحالة الأولية للتطوير والعرض."
                    : "Restore all categories, 30+ products, 16 tables, staff accounts and order audit trail back to default baseline demo data."}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    if (confirm(lang === "ar" ? "هل ترغب بإعادة ضبط كافة البيانات؟" : "Reset all data to pristine demo defaults?")) {
                      resetDemoData();
                    }
                  }}
                  className="py-2.5 px-4 rounded-xl bg-rose-100 dark:bg-rose-950/40 hover:bg-rose-200 dark:hover:bg-rose-900/60 border border-rose-300 dark:border-rose-800/60 text-rose-800 dark:text-rose-300 font-bold transition flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{lang === "ar" ? "إعادة ضبط البيانات الافتراضية" : "Restore Clean Demo Data"}</span>
                </button>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-slate-200 dark:border-[#1E2230] flex items-center justify-end">
            <button
              type="submit"
              className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 text-black font-extrabold text-xs shadow-md shadow-[#D4AF37]/20 transition"
            >
              {lang === "ar" ? "حفظ كافة الإعدادات" : "Save Settings"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
