"use client";

import React, { useState } from "react";
import {
  UtensilsCrossed,
  Search,
  Plus,
  CheckCircle2,
  XCircle,
  Edit2,
  Trash2,
  Save,
  X,
  Package,
  AlertCircle,
  DollarSign,
  Tag,
  Flame,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import { Product, ProductCategory } from "../../types/restaurantPos";

export const MenuManagementView: React.FC = () => {
  const {
    products,
    categories,
    toggleProductStock,
    updateProduct,
    addProduct,
    deleteProduct,
    formatDhs,
    t,
    lang,
  } = useRestaurantPos();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New product form state
  const [newName, setNewName] = useState("");
  const [newArabicName, setNewArabicName] = useState("");
  const [newCategory, setNewCategory] = useState<string>("burgers");
  const [newPrice, setNewPrice] = useState("25");
  const [newCostPrice, setNewCostPrice] = useState("10");
  const [newSku, setNewSku] = useState(`PRD-${Math.floor(100 + Math.random() * 900)}`);
  const [newStock, setNewStock] = useState("60");
  const [newImage, setNewImage] = useState("https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80");
  const [newDescription, setNewDescription] = useState("");
  const [newArabicDescription, setNewArabicDescription] = useState("");

  const filteredProducts = products.filter((p) => {
    if (selectedCategory !== "all" && p.category !== selectedCategory) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      p.name.toLowerCase().includes(q) ||
      p.arabicName.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q)
    );
  });

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct(editingProduct);
      setEditingProduct(null);
    }
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    addProduct({
      sku: newSku,
      name: newName,
      arabicName: newArabicName || newName,
      category: newCategory,
      price: parseFloat(newPrice) || 0,
      costPrice: parseFloat(newCostPrice) || 0,
      vatPercent: 5,
      image: newImage,
      description: newDescription,
      arabicDescription: newArabicDescription,
      isAvailable: true,
      stock: parseInt(newStock) || 50,
      prepTimeMinutes: 12,
    });

    setIsAddModalOpen(false);
    setNewName("");
    setNewArabicName("");
    setNewDescription("");
    setNewArabicDescription("");
    setNewSku(`PRD-${Math.floor(100 + Math.random() * 900)}`);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-100 dark:bg-[#0B0D14] text-slate-900 dark:text-slate-100 min-h-0 h-full overflow-hidden">
      {/* Top Banner */}
      <div className="flex-shrink-0 px-4 sm:px-6 py-3 border-b border-slate-200 dark:border-[#1E2230] bg-white dark:bg-[#10121A] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-bold">
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              {lang === "ar" ? "إدارة قائمة الطعام والأصناف" : "Products & Menu Catalog"}
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#181B26] border border-slate-300 dark:border-[#2B3042] text-amber-800 dark:text-[#D4AF37] font-mono font-bold">
                {products.length} {lang === "ar" ? "طبق مسجل" : "Products"}
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {lang === "ar"
                ? "إضافة وتعديل وحذف الأطباق، التحكم بالمخزون، وتحديث الأسعار فورياً لشاشة الكاشير"
                : "Full catalog CRUD, inventory toggles, and instant price synchronization with POS"}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 text-black font-extrabold text-xs shadow-md shadow-[#D4AF37]/20 active:scale-95 transition"
        >
          <Plus className="w-4 h-4" />
          <span>{lang === "ar" ? "إضافة طبق جديد" : "Add New Product"}</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex-shrink-0 px-4 sm:px-6 py-2.5 bg-slate-50 dark:bg-[#0F1118] border-b border-slate-200 dark:border-[#1A1D28] flex flex-wrap items-center justify-between gap-3">
        <div className="relative max-w-sm w-full">
          <Search className="w-3.5 h-3.5 absolute start-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === "ar" ? "ابحث عن صنف بالاسم، الرمز..." : "Search items by name, SKU..."}
            className="w-full ps-8 pe-4 py-1.5 text-xs rounded-xl bg-white dark:bg-[#161924] border border-slate-300 dark:border-[#262B3B] text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#D4AF37] outline-none"
          />
        </div>

        {/* Categories scroll strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
              selectedCategory === "all"
                ? "bg-[#D4AF37] text-black font-black"
                : "bg-white dark:bg-[#161924] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#262B3B]"
            }`}
          >
            {lang === "ar" ? "الكل" : "All"}
          </button>
          {categories
            .filter((c) => c.slug !== "all")
            .map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug as ProductCategory)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  selectedCategory === cat.slug
                    ? "bg-[#D4AF37] text-black font-black"
                    : "bg-white dark:bg-[#161924] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#262B3B]"
                }`}
              >
                {lang === "ar" ? cat.arabicName : cat.name}
              </button>
            ))}
        </div>
      </div>

      {/* Catalog Table */}
      <div className="flex-1 p-3 sm:p-5 overflow-y-auto min-h-0 h-full">
        <div className="bg-white dark:bg-[#12141C] border border-slate-200 dark:border-[#222736] rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto max-h-[calc(100vh-220px)] overflow-y-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#161924] border-b border-[#222736] text-slate-400 font-bold uppercase tracking-wider text-[10px] sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3.5">Product & SKU</th>
                  <th className="px-4 py-3.5">Category</th>
                  <th className="px-4 py-3.5 font-mono">Price</th>
                  <th className="px-4 py-3.5 font-mono">Stock Units</th>
                  <th className="px-4 py-3.5 text-center">Availability</th>
                  <th className="px-4 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1D212E]">
                {filteredProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-[#161924] transition duration-150">
                    {/* Product Details */}
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-3">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-10 h-10 rounded-xl object-cover border border-[#2B3042]"
                        />
                        <div>
                          <div className="font-bold text-white text-xs sm:text-sm">
                            {p.name}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {p.sku} • {p.arabicName}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-4 py-2.5 capitalize font-medium text-slate-300">
                      {p.category}
                    </td>

                    {/* Price in Dhs */}
                    <td className="px-4 py-2.5 font-mono font-extrabold text-[#D4AF37]">
                      {formatDhs(p.price)}
                    </td>

                    {/* Stock */}
                    <td className="px-4 py-2.5 font-mono text-slate-300">
                      {p.stock} units
                    </td>

                    {/* Availability Toggle Status */}
                    <td className="px-4 py-2.5 text-center">
                      <button
                        onClick={() => toggleProductStock(p.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border transition ${
                          p.isAvailable
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                            : "bg-rose-500/10 text-rose-400 border-rose-500/30"
                        }`}
                      >
                        {p.isAvailable ? (
                          <>
                            <CheckCircle2 className="w-3 h-3" />
                            <span>{t.in_stock}</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3 h-3" />
                            <span>{t.out_of_stock}</span>
                          </>
                        )}
                      </button>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-2.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => setEditingProduct(p)}
                          className="p-1.5 rounded-lg bg-[#1A1D2A] text-slate-400 hover:text-[#D4AF37] hover:bg-[#252A3C] transition"
                          title="Edit Item"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => {
                            if (confirm(`Delete product "${p.name}"?`)) {
                              deleteProduct(p.id);
                            }
                          }}
                          className="p-1.5 rounded-lg bg-[#1A1D2A] text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 transition"
                          title="Delete Item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-50">
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="bg-[#12141C] border border-[#2A2F42] rounded-2xl max-w-lg w-full p-5 shadow-2xl text-slate-100 space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#202534]">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#D4AF37]" />
                <span>{lang === "ar" ? "إضافة صنف جديد للقائمة" : "Add New Menu Item"}</span>
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "اسم الصنف (بالإنجليزية)" : "Name (English)"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Truffle Beef Burger"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "اسم الصنف (بالعربية)" : "Name (Arabic)"}
                  </label>
                  <input
                    type="text"
                    required
                    dir="rtl"
                    placeholder="مثل: برجر اللحم بالكمأة"
                    value={newArabicName}
                    onChange={(e) => setNewArabicName(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "التصنيف" : "Category"}
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none"
                  >
                    {categories
                      .filter((c) => c.slug !== "all")
                      .map((c) => (
                        <option key={c.id} value={c.slug}>
                          {c.name} ({c.arabicName})
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "السعر (درهم)" : "Price (Dhs)"}
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    required
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-[#D4AF37] font-bold font-mono focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "المخزون الأولي" : "Stock Units"}
                  </label>
                  <input
                    type="number"
                    value={newStock}
                    onChange={(e) => setNewStock(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white font-mono focus:border-[#D4AF37] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-400 block mb-1">
                  {lang === "ar" ? "رابط الصورة (Image URL)" : "Image URL"}
                </label>
                <input
                  type="url"
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none font-mono text-[11px]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-400 block mb-1">
                  {lang === "ar" ? "الوصف (بالإنجليزية)" : "Description (English)"}
                </label>
                <input
                  type="text"
                  placeholder="Ingredients and serving details"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-400 block mb-1">
                  {lang === "ar" ? "الوصف (بالعربية)" : "Description (Arabic)"}
                </label>
                <input
                  type="text"
                  dir="rtl"
                  placeholder="المكونات وطريقة التقديم"
                  value={newArabicDescription}
                  onChange={(e) => setNewArabicDescription(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none text-right"
                />
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-[#1E2230]">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#D4AF37] hover:brightness-110 text-black font-extrabold shadow-md transition"
                >
                  {lang === "ar" ? "حفظ وإضافة الصنف" : "Save & Add Product"}
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

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-50">
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="bg-[#12141C] border border-[#2A2F42] rounded-2xl max-w-lg w-full p-5 shadow-2xl text-slate-100 space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#202534]">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Edit2 className="w-4 h-4 text-[#D4AF37]" />
                <span>{lang === "ar" ? "تعديل بيانات الصنف" : "Edit Menu Item"}</span>
              </h3>
              <button
                onClick={() => setEditingProduct(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "اسم الصنف (بالإنجليزية)" : "Name (English)"}
                  </label>
                  <input
                    type="text"
                    required
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "اسم الصنف (بالعربية)" : "Name (Arabic)"}
                  </label>
                  <input
                    type="text"
                    required
                    dir="rtl"
                    value={editingProduct.arabicName}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, arabicName: e.target.value })
                    }
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "التصنيف" : "Category"}
                  </label>
                  <select
                    value={editingProduct.category}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, category: e.target.value as ProductCategory })
                    }
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none"
                  >
                    {categories
                      .filter((c) => c.slug !== "all")
                      .map((c) => (
                        <option key={c.id} value={c.slug}>
                          {c.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "السعر (درهم)" : "Price (Dhs)"}
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    required
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-[#D4AF37] font-bold font-mono focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-400 block mb-1">
                    {lang === "ar" ? "المخزون الحالي" : "Stock Units"}
                  </label>
                  <input
                    type="number"
                    value={editingProduct.stock}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        stock: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white font-mono focus:border-[#D4AF37] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-400 block mb-1">
                  {lang === "ar" ? "رابط الصورة" : "Image URL"}
                </label>
                <input
                  type="url"
                  value={editingProduct.image}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, image: e.target.value })
                  }
                  className="w-full py-2 px-3 rounded-lg bg-[#181B26] border border-[#2B3042] text-white focus:border-[#D4AF37] outline-none font-mono text-[11px]"
                />
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-[#1E2230]">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#D4AF37] hover:brightness-110 text-black font-extrabold shadow-md transition flex items-center justify-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>{lang === "ar" ? "حفظ التعديلات" : "Save Changes"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
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
