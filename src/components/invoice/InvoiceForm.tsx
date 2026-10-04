"use client";

import React, { useState } from "react";
import { Invoice, InvoiceItem } from "@/types/invoice";
import { calculateInvoiceTotals } from "@/utils/calculations";
import { Plus, Trash2, RotateCcw, Save, Printer, FileDown, Table, Building2, User, FileText, ShoppingCart, Sparkles } from "lucide-react";
import { DatePickerInput } from "@/components/invoice/DatePickerInput";
import { useInvoiceLanguage } from "@/context/InvoiceLanguageContext";

interface InvoiceFormProps {
  invoice: Invoice;
  onChange: (updated: Invoice) => void;
  onSave: () => void;
  onPrint: () => void;
  onExportPDF: () => void;
  onExportExcel?: () => void;
  onResetSample: () => void;
}

export default function InvoiceForm({
  invoice,
  onChange,
  onSave,
  onPrint,
  onExportPDF,
  onResetSample,
}: InvoiceFormProps) {
  const { lang, isRtl, t } = useInvoiceLanguage();
  const [activeTab, setActiveTab] = useState<"items" | "customer" | "company" | "meta">("items");

  // Helper to update company
  const updateCompany = (field: keyof typeof invoice.company, value: string) => {
    const updated = {
      ...invoice,
      company: {
        ...invoice.company,
        [field]: value,
      },
    };
    onChange(updated);
  };

  // Helper to update customer
  const updateCustomer = (field: keyof typeof invoice.customer, value: string) => {
    const updated = {
      ...invoice,
      customer: {
        ...invoice.customer,
        [field]: value,
      },
    };
    onChange(updated);
  };

  // Helper to update meta
  const updateMeta = (field: keyof typeof invoice.meta, value: string) => {
    const updated = {
      ...invoice,
      meta: {
        ...invoice.meta,
        [field]: value,
      },
    };
    onChange(updated);
  };

  // Helper to update item
  const updateItem = (index: number, field: keyof InvoiceItem, value: any) => {
    const updatedItems = [...invoice.items];
    const targetItem = { ...updatedItems[index], [field]: value };

    // Recalculate line total if qty or price changed
    const qty = Number(targetItem.quantity) || 0;
    const price = Number(targetItem.unitPrice) || 0;
    targetItem.lineTotal = qty * price;

    updatedItems[index] = targetItem;

    const newTotals = calculateInvoiceTotals(updatedItems, invoice.totals.discount);
    onChange({
      ...invoice,
      items: updatedItems,
      totals: newTotals,
      updatedAt: new Date().toISOString(),
    });
  };

  // Add Item Row
  const addItem = () => {
    const nextItemNumber = invoice.items.length + 1;
    const newItem: InvoiceItem = {
      id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      itemNumber: nextItemNumber,
      itemCode: `10000${nextItemNumber + 3}`,
      description: "Potato Cubes",
      unit: "وحدة",
      quantity: 50,
      vatPercent: 5,
      unitPrice: 4.0,
      lineTotal: 200.0,
    };

    const updatedItems = [...invoice.items, newItem];
    const newTotals = calculateInvoiceTotals(updatedItems, invoice.totals.discount);

    onChange({
      ...invoice,
      items: updatedItems,
      totals: newTotals,
      updatedAt: new Date().toISOString(),
    });
  };

  // Remove Item Row
  const removeItem = (index: number) => {
    if (invoice.items.length <= 1) {
      alert("An invoice must contain at least 1 item row.");
      return;
    }
    const updatedItems = invoice.items
      .filter((_, i) => i !== index)
      .map((item, i) => ({ ...item, itemNumber: i + 1 }));

    const newTotals = calculateInvoiceTotals(updatedItems, invoice.totals.discount);
    onChange({
      ...invoice,
      items: updatedItems,
      totals: newTotals,
      updatedAt: new Date().toISOString(),
    });
  };

  // Update Discount
  const handleDiscountChange = (discountVal: number) => {
    const newTotals = calculateInvoiceTotals(invoice.items, discountVal);
    onChange({
      ...invoice,
      totals: newTotals,
      updatedAt: new Date().toISOString(),
    });
  };

  // Update Amount in words manually if needed
  const handleTafqeetChange = (text: string) => {
    onChange({
      ...invoice,
      totals: {
        ...invoice.totals,
        amountInWordsArabic: text,
      },
      updatedAt: new Date().toISOString(),
    });
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 backdrop-blur-xl rounded-2xl shadow-xl flex flex-col h-full overflow-hidden">
      {/* Top Bar with Primary Actions */}
      <div className="p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-950/60">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-white text-base">
              {lang === "ar" ? "محرر الفاتورة" : "Invoice Editor"}
            </h2>
            <p className="text-xs text-slate-400">
              {lang === "ar" ? `فاتورة ضريبية رقم #${invoice.meta.invoiceNumber || "8206"}` : `Tax Invoice #${invoice.meta.invoiceNumber || "8206"}`}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center flex-wrap gap-2">
          <button
            onClick={onResetSample}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition"
            title={lang === "ar" ? "إعادة الضبط للفاتورة المرجعية" : "Reset to Master Reference Scanned Invoice"}
          >
            <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === "ar" ? "نموذج مرجعي" : "Master Sample"}</span>
          </button>

          <button
            onClick={onSave}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{t("saveInvoice")}</span>
          </button>

          <button
            onClick={onPrint}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-blue-400" />
            <span>{t("print")}</span>
          </button>

          <button
            onClick={onExportPDF}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600/90 hover:bg-rose-500 text-white text-xs font-semibold transition cursor-pointer shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>{lang === "ar" ? "تنزيل PDF" : "PDF"}</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-800 bg-slate-900/50 px-3 pt-2 gap-1 overflow-x-auto text-xs font-medium">
        <button
          onClick={() => setActiveTab("meta")}
          className={`flex items-center gap-1.5 px-3 py-2 border-b-2 transition whitespace-nowrap cursor-pointer ${
            activeTab === "meta"
              ? "border-emerald-500 text-emerald-400 font-semibold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>{t("metaTab")}</span>
        </button>

        <button
          onClick={() => setActiveTab("items")}
          className={`flex items-center gap-1.5 px-3 py-2 border-b-2 transition whitespace-nowrap cursor-pointer ${
            activeTab === "items"
              ? "border-emerald-500 text-emerald-400 font-semibold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{t("itemsTab")} ({invoice.items.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("customer")}
          className={`flex items-center gap-1.5 px-3 py-2 border-b-2 transition whitespace-nowrap cursor-pointer ${
            activeTab === "customer"
              ? "border-emerald-500 text-emerald-400 font-semibold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <User className="w-4 h-4" />
          <span>{t("customerTab")}</span>
        </button>

        <button
          onClick={() => setActiveTab("company")}
          className={`flex items-center gap-1.5 px-3 py-2 border-b-2 transition whitespace-nowrap cursor-pointer ${
            activeTab === "company"
              ? "border-emerald-500 text-emerald-400 font-semibold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>{t("companyTab")}</span>
        </button>
      </div>

      {/* Tab Content Body */}
      <div className="p-4 flex-1 overflow-y-auto space-y-4">
        {/* ========================================================================= */}
        {/* TAB 1: PRODUCT ITEMS                                                     */}
        {/* ========================================================================= */}
        {activeTab === "items" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                Live product rows matching the 8-column UAE Tax Invoice table.
              </span>
              <button
                onClick={addItem}
                type="button"
                className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-sm transition"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Add Item Row</span>
              </button>
            </div>

            <div className="space-y-3">
              {invoice.items.map((item, index) => (
                <div
                  key={item.id || index}
                  className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 relative group hover:border-slate-700 transition"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 text-xs">
                    {/* Item No & Code */}
                    <div className="md:col-span-1">
                      <label className="text-[10px] text-slate-400 block mb-1">الرقم</label>
                      <input
                        type="number"
                        value={item.itemNumber}
                        onChange={(e) => updateItem(index, "itemNumber", parseInt(e.target.value) || index + 1)}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono text-center"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-[10px] text-slate-400 block mb-1">رمز المادة</label>
                      <input
                        type="text"
                        value={item.itemCode}
                        onChange={(e) => updateItem(index, "itemCode", e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono"
                        placeholder="100004"
                      />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-4">
                      <label className="text-[10px] text-slate-400 block mb-1">البيان (Description)</label>
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => updateItem(index, "description", e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white"
                        placeholder="Potato Cubes"
                      />
                    </div>

                    {/* Unit */}
                    <div className="md:col-span-1">
                      <label className="text-[10px] text-slate-400 block mb-1">الوحدة</label>
                      <input
                        type="text"
                        value={item.unit}
                        onChange={(e) => updateItem(index, "unit", e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-center"
                        placeholder="وحدة"
                      />
                    </div>

                    {/* Qty */}
                    <div className="md:col-span-1">
                      <label className="text-[10px] text-slate-400 block mb-1">الكمية</label>
                      <input
                        type="number"
                        step="any"
                        value={item.quantity}
                        onChange={(e) => updateItem(index, "quantity", parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono text-center font-bold"
                      />
                    </div>

                    {/* VAT % */}
                    <div className="md:col-span-1">
                      <label className="text-[10px] text-slate-400 block mb-1">ضريبة %</label>
                      <input
                        type="number"
                        value={item.vatPercent}
                        onChange={(e) => updateItem(index, "vatPercent", parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono text-center"
                      />
                    </div>

                    {/* Unit Price */}
                    <div className="md:col-span-1">
                      <label className="text-[10px] text-slate-400 block mb-1">السعر</label>
                      <input
                        type="number"
                        step="0.001"
                        value={item.unitPrice}
                        onChange={(e) => updateItem(index, "unitPrice", parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono text-center"
                      />
                    </div>

                    {/* Line Total & Remove */}
                    <div className="md:col-span-1 flex items-center justify-between gap-1">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">الإجمالي</label>
                        <span className="font-mono text-emerald-400 font-bold block pt-1">
                          {item.lineTotal.toFixed(3)}
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(index)}
                        type="button"
                        className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded transition mt-4"
                        title="Delete Row"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Discount & Calculations Summary Card */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 mt-4">
              <h3 className="text-xs font-semibold text-slate-300 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{lang === "ar" ? "الحسابات المالية (بالدرهم د.إ)" : "Financial Computations (UAE Dhs)"}</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">{lang === "ar" ? "الخصم (د.إ)" : "Discount (Dhs)"}</label>
                  <input
                    type="number"
                    step="0.01"
                    value={invoice.totals.discount}
                    onChange={(e) => handleDiscountChange(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono"
                  />
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">{lang === "ar" ? "المجموع الفرعي" : "Subtotal"}</span>
                  <span className="text-slate-200 font-mono font-bold text-sm">
                    {invoice.totals.subtotal.toFixed(3)} {lang === "ar" ? "د.إ" : "Dhs"}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">{lang === "ar" ? "الضريبة 5%" : "VAT 5%"}</span>
                  <span className="text-amber-400 font-mono font-bold text-sm">
                    {invoice.totals.vatAmount.toFixed(3)} {lang === "ar" ? "د.إ" : "Dhs"}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-emerald-400 font-bold block mb-1">{lang === "ar" ? "المجموع الكلي" : "Grand Total"}</span>
                  <span className="text-emerald-400 font-mono font-black text-sm">
                    {invoice.totals.grandTotal.toFixed(3)} {lang === "ar" ? "د.إ" : "Dhs"}
                  </span>
                </div>
              </div>

              {/* Arabic Tafqeet in Words Textbox */}
              <div className="mt-4 pt-3 border-t border-slate-800">
                <label className="text-[10px] text-slate-400 block mb-1">
                  {lang === "ar" ? "المبلغ بالحروف (التفقيط العربي)" : "Amount in Words (Arabic Tafqeet)"}
                </label>
                <input
                  type="text"
                  value={invoice.totals.amountInWordsArabic}
                  onChange={(e) => handleTafqeetChange(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white font-bold text-right"
                  dir="rtl"
                />
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: CUSTOMER & TRN                                                    */}
        {/* ========================================================================= */}
        {activeTab === "customer" && (
          <div className="space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs">
            <h3 className="font-semibold text-white text-sm">Customer & Tax Registration</h3>
            
            <div className="space-y-3">
              <div>
                <label className="text-slate-300 font-medium block mb-1">اسم العميل / Customer Name</label>
                <input
                  type="text"
                  value={invoice.customer.name}
                  onChange={(e) => updateCustomer("name", e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-medium uppercase"
                  placeholder="XENDER FOR TRADING L.L.C .المحترمين"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-medium block mb-1">رقم الحساب / Account Number</label>
                  <input
                    type="text"
                    value={invoice.customer.accountNumber}
                    onChange={(e) => updateCustomer("accountNumber", e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono font-bold"
                    placeholder="429"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-medium block mb-1">الرقم الضريبي للعميل / Customer TRN</label>
                  <input
                    type="text"
                    value={invoice.customer.trn}
                    onChange={(e) => updateCustomer("trn", e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono font-bold"
                    placeholder="DUBAI 100584661100003"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: INVOICE META & NOTES                                              */}
        {/* ========================================================================= */}
        {activeTab === "meta" && (
          <div className="space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs">
            <h3 className="font-semibold text-white text-sm">Invoice Identification & Notes</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-slate-300 font-medium block mb-1">الرقم / Invoice Number</label>
                <input
                  type="text"
                  value={invoice.meta.invoiceNumber}
                  onChange={(e) => updateMeta("invoiceNumber", e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono font-bold"
                  placeholder="8206"
                />
              </div>

              <div>
                <label className="text-slate-300 font-medium block mb-1">التاريخ / Invoice Date (DD-MM-YYYY)</label>
                <DatePickerInput
                  value={invoice.meta.invoiceDate}
                  onChange={(newDate) => updateMeta("invoiceDate", newDate)}
                  className="!bg-slate-900 !border-slate-700 !text-white !font-bold"
                />
              </div>
            </div>

            <div>
              <label className="text-slate-300 font-medium block mb-1">ملاحظات / Notes (Printed on Ruled Lines)</label>
              <textarea
                value={invoice.meta.notes}
                onChange={(e) => updateMeta("notes", e.target.value)}
                rows={3}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white"
                placeholder="Enter notes or leave blank for ruled empty lines..."
              />
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: COMPANY PROFILE & CONTACTS                                        */}
        {/* ========================================================================= */}
        {activeTab === "company" && (
          <div className="space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs">
            <h3 className="font-semibold text-white text-sm">Issuer Company Information</h3>

            <div className="space-y-3">
              <div>
                <label className="text-slate-300 font-medium block mb-1">اسم الشركة بالعربي</label>
                <input
                  type="text"
                  value={invoice.company.arabicName}
                  onChange={(e) => updateCompany("arabicName", e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-serif text-right font-bold"
                  dir="rtl"
                />
              </div>

              <div>
                <label className="text-slate-300 font-medium block mb-1">Company Name (English)</label>
                <input
                  type="text"
                  value={invoice.company.englishName}
                  onChange={(e) => updateCompany("englishName", e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-bold uppercase"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-medium block mb-1">Company TRN</label>
                  <input
                    type="text"
                    value={invoice.company.trn}
                    onChange={(e) => updateCompany("trn", e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono font-bold"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-medium block mb-1">Email</label>
                  <input
                    type="email"
                    value={invoice.company.email}
                    onChange={(e) => updateCompany("email", e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-medium block mb-1">Mobile (Left / English format)</label>
                  <input
                    type="text"
                    value={invoice.company.mobile}
                    onChange={(e) => updateCompany("mobile", e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-medium block mb-1">Mobile (Right / Arabic format)</label>
                  <input
                    type="text"
                    value={invoice.company.mobileArabic}
                    onChange={(e) => updateCompany("mobileArabic", e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-right font-bold"
                    dir="rtl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-medium block mb-1">Address Line 1 (Arabic)</label>
                  <input
                    type="text"
                    value={invoice.company.addressArabic1}
                    onChange={(e) => updateCompany("addressArabic1", e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-right"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-medium block mb-1">Address Line 2 (Arabic)</label>
                  <input
                    type="text"
                    value={invoice.company.addressArabic2}
                    onChange={(e) => updateCompany("addressArabic2", e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-right"
                    dir="rtl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
