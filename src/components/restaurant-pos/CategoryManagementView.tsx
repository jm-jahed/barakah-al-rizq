"use client";

import React, { useState } from "react";
import {
  Layers,
  Plus,
  ArrowUp,
  ArrowDown,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  X,
  Save,
  Sparkles,
  UtensilsCrossed,
  Flame,
  Pizza,
  Wheat,
  Beef,
  Coffee,
  IceCream,
  Wine,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import { Category } from "../../types/restaurantPos";

export const CategoryManagementView: React.FC = () => {
  const {
    categories,
    addCategory,
    updateCategory,
    deleteCategory,
    reorderCategory,
    toggleCategoryStatus,
    products,
    t,
    lang,
  } = useRestaurantPos();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [arabicName, setArabicName] = useState("");
  const [slug, setSlug] = useState("");
  const [icon, setIcon] = useState("UtensilsCrossed");

  const getProductCount = (categorySlug: string) => {
    if (categorySlug === "all") return products.length;
    return products.filter((p) => p.category === categorySlug).length;
  };

  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addCategory({
      name,
      arabicName: arabicName || name,
      slug: slug.trim().toLowerCase().replace(/\s+/g, "_") || name.toLowerCase().replace(/\s+/g, "_"),
      icon,
      displayOrder: categories.length + 1,
      isActive: true,
    });

    setIsAddModalOpen(false);
    setName("");
    setArabicName("");
    setSlug("");
  };

  const handleUpdateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCategory) return;
    updateCategory(editingCategory);
    setEditingCategory(null);
  };

  const renderIconPreview = (iconName: string) => {
    switch (iconName) {
      case "Flame":
        return <Flame className="w-4 h-4" />;
      case "Pizza":
        return <Pizza className="w-4 h-4" />;
      case "Wheat":
        return <Wheat className="w-4 h-4" />;
      case "Beef":
        return <Beef className="w-4 h-4" />;
      case "Coffee":
        return <Coffee className="w-4 h-4" />;
      case "IceCream":
        return <IceCream className="w-4 h-4" />;
      case "Wine":
        return <Wine className="w-4 h-4" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4" />;
      default:
        return <UtensilsCrossed className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0D14] text-slate-100 min-h-0 overflow-hidden">
      {/* Top Banner */}
      <div className="px-3 sm:px-6 py-2.5 sm:py-3 border-b border-[#1E2230] bg-[#10121A] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-bold">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2">
              {lang === "ar" ? "إدارة تصنيفات قائمة الطعام" : "Category Management"}
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#181B26] border border-[#2B3042] text-[#D4AF37] font-mono font-bold">
                {categories.length} {lang === "ar" ? "تصنيف" : "Categories"}
              </span>
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
              {lang === "ar"
                ? "إضافة وتعديل وترتيب تصنيفات المأكولات والمشروبات، وتظهر فورياً في شاشة الفوترة"
                : "Add, reorder, toggle, and manage categories — automatically synced with POS billing screen"}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 text-black font-extrabold text-xs shadow-md shadow-[#D4AF37]/20 active:scale-95 transition"
        >
          <Plus className="w-4 h-4" />
          <span>{lang === "ar" ? "إضافة تصنيف جديد" : "Add New Category"}</span>
        </button>
      </div>

      {/* Categories Table / List */}
      <div className="flex-1 p-3 sm:p-4 overflow-y-auto min-h-0">
        <div className="bg-[#12141C] border border-[#222736] rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto max-h-[calc(100vh-170px)] overflow-y-auto">
            <table className="w-full text-start text-xs">
              <thead className="bg-[#161924] border-b border-[#222736] text-slate-400 font-bold uppercase tracking-wider text-[10px] sticky top-0 z-10">
                <tr>
                  <th className="px-3 py-2 text-center w-12">#</th>
                  <th className="px-3 py-2 text-start">{lang === "ar" ? "التصنيف" : "Category (EN / AR)"}</th>
                  <th className="px-3 py-2 text-start">{lang === "ar" ? "المعرف (Slug)" : "Slug"}</th>
                  <th className="px-3 py-2 text-start">{lang === "ar" ? "الأصناف المرتبطة" : "Active Items"}</th>
                  <th className="px-3 py-2 text-center">{lang === "ar" ? "الترتيب" : "Reorder"}</th>
                  <th className="px-3 py-2 text-center">{lang === "ar" ? "الحالة" : "Status"}</th>
                  <th className="px-3 py-2 text-end">{lang === "ar" ? "الإجراءات" : "Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1D212E]">
                {categories.map((cat, index) => {
                  const productCount = getProductCount(cat.slug);

                  return (
                    <tr
                      key={cat.id}
                      className="hover:bg-[#161924] transition duration-150"
                    >
                      {/* Display Order */}
                      <td className="px-3 py-1.5 text-center font-mono font-bold text-slate-400">
                        {cat.displayOrder || index + 1}
                      </td>

                      {/* Name & Icon */}
                      <td className="px-3 py-1.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#1D212E] border border-[#2A3042] text-[#D4AF37] flex items-center justify-center shrink-0">
                            {renderIconPreview(cat.icon)}
                          </div>
                          <div>
                            <div className="font-bold text-white text-xs leading-tight">
                              {cat.name}
                            </div>
                            <div className="text-[10px] text-slate-400 leading-tight">
                              {cat.arabicName}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Slug */}
                      <td className="px-3 py-1.5 font-mono text-[10px] text-slate-400">
                        <span className="px-1.5 py-0.5 rounded bg-[#181B26] border border-[#252A3B]">
                          {cat.slug}
                        </span>
                      </td>

                      {/* Items Count */}
                      <td className="px-3 py-1.5 font-mono font-bold text-slate-300">
                        <span className="text-[#D4AF37]">{productCount}</span> {lang === "ar" ? "طبق" : "items"}
                      </td>

                      {/* Reorder Buttons */}
                      <td className="px-3 py-1.5 text-center">
                        <div className="inline-flex items-center gap-1">
                          <button
                            disabled={index === 0}
                            onClick={() => reorderCategory(cat.id, "up")}
                            className="p-1 rounded bg-[#1C202E] text-slate-400 hover:text-white disabled:opacity-30 transition"
                            title="Move Up"
                          >
                            <ArrowUp className="w-3 h-3" />
                          </button>
                          <button
                            disabled={index === categories.length - 1}
                            onClick={() => reorderCategory(cat.id, "down")}
                            className="p-1 rounded bg-[#1C202E] text-slate-400 hover:text-white disabled:opacity-30 transition"
                            title="Move Down"
                          >
                            <ArrowDown className="w-3 h-3" />
                          </button>
                        </div>
                      </td>

                      {/* Status Toggle */}
                      <td className="px-3 py-1.5 text-center">
                        <button
                          onClick={() => toggleCategoryStatus(cat.id)}
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border transition ${
                            cat.isActive
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                              : "bg-slate-700/30 text-slate-400 border-slate-700"
                          }`}
                        >
                          {cat.isActive ? (
                            <>
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              <span>{lang === "ar" ? "نشط" : "Active"}</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3 h-3 text-slate-400" />
                              <span>{lang === "ar" ? "معطل" : "Disabled"}</span>
                            </>
                          )}
                        </button>
                      </td>

                      {/* Actions */}
                      <td className="px-3 py-1.5 text-end">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => setEditingCategory(cat)}
                            className="p-1 rounded-lg bg-[#1A1D2A] text-slate-300 hover:text-white hover:bg-[#252A3C] transition"
                            title="Edit Category"
                          >
                            <Edit2 className="w-3 h-3" />
                          </button>
                          {cat.slug !== "all" && (
                            <button
                              onClick={() => deleteCategory(cat.id)}
                              className="p-1 rounded-lg bg-[#1A1D2A] text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 transition"
                              title="Delete Category"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Category Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-50">
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="bg-[#12141C] border border-[#2A2F42] rounded-2xl max-w-md w-full p-5 shadow-2xl text-slate-100 space-y-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#202534]">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#D4AF37]" />
                <span>{lang === "ar" ? "إضافة تصنيف جديد" : "Add New Category"}</span>
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateCategory} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-slate-400 block mb-1">
                  {lang === "ar" ? "اسم التصنيف (بالإنجليزية)" : "Category Name (English)"}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Seafood & Fish"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-400 block mb-1">
                  {lang === "ar" ? "اسم التصنيف (بالعربية)" : "Category Name (Arabic)"}
                </label>
                <input
                  type="text"
                  required
                  dir="rtl"
                  placeholder="مثل: المأكولات البحرية والأسماك"
                  value={arabicName}
                  onChange={(e) => setArabicName(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none text-right"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "رمز المعرف (Slug)" : "Category Slug"}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. seafood"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "أيقونة العرض" : "Category Icon"}
                  </label>
                  <select
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none"
                  >
                    <option value="UtensilsCrossed">Utensils</option>
                    <option value="Flame">Flame / Grill</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Wheat">Wheat / Pasta</option>
                    <option value="Beef">Beef / Meat</option>
                    <option value="Coffee">Coffee / Tea</option>
                    <option value="Wine">Beverages</option>
                    <option value="IceCream">Dessert</option>
                    <option value="Sparkles">Special / All</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#D4AF37] hover:brightness-110 text-black font-extrabold shadow-md transition"
                >
                  {lang === "ar" ? "حفظ وإضافة التصنيف" : "Save & Add Category"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="py-2.5 px-4 rounded-xl bg-[#1A1D2A] text-slate-300 hover:text-white transition"
                >
                  {lang === "ar" ? "إلغاء" : "Cancel"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Category Modal */}
      {editingCategory && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-50">
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="bg-[#12141C] border border-[#2A2F42] rounded-2xl max-w-md w-full p-5 shadow-2xl text-slate-100 space-y-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#202534]">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Edit2 className="w-4 h-4 text-[#D4AF37]" />
                <span>{lang === "ar" ? "تعديل بيانات التصنيف" : "Edit Category"}</span>
              </h3>
              <button
                onClick={() => setEditingCategory(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleUpdateCategory} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-slate-400 block mb-1">
                  {lang === "ar" ? "اسم التصنيف (بالإنجليزية)" : "Category Name (English)"}
                </label>
                <input
                  type="text"
                  required
                  value={editingCategory.name}
                  onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                  className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-400 block mb-1">
                  {lang === "ar" ? "اسم التصنيف (بالعربية)" : "Category Name (Arabic)"}
                </label>
                <input
                  type="text"
                  required
                  dir="rtl"
                  value={editingCategory.arabicName}
                  onChange={(e) =>
                    setEditingCategory({ ...editingCategory, arabicName: e.target.value })
                  }
                  className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none text-right"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "رمز المعرف (Slug)" : "Category Slug"}
                  </label>
                  <input
                    type="text"
                    disabled={editingCategory.slug === "all"}
                    value={editingCategory.slug}
                    onChange={(e) =>
                      setEditingCategory({ ...editingCategory, slug: e.target.value })
                    }
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none font-mono disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "أيقونة العرض" : "Category Icon"}
                  </label>
                  <select
                    value={editingCategory.icon}
                    onChange={(e) =>
                      setEditingCategory({ ...editingCategory, icon: e.target.value })
                    }
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none"
                  >
                    <option value="UtensilsCrossed">Utensils</option>
                    <option value="Flame">Flame / Grill</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Wheat">Wheat / Pasta</option>
                    <option value="Beef">Beef / Meat</option>
                    <option value="Coffee">Coffee / Tea</option>
                    <option value="Wine">Beverages</option>
                    <option value="IceCream">Dessert</option>
                    <option value="Sparkles">Special / All</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#D4AF37] hover:brightness-110 text-black font-extrabold shadow-md transition flex items-center justify-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>{lang === "ar" ? "حفظ التعديلات" : "Save Changes"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setEditingCategory(null)}
                  className="py-2.5 px-4 rounded-xl bg-[#1A1D2A] text-slate-300 hover:text-white transition"
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
