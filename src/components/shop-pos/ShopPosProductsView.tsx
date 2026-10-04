"use client";

import React, { useState } from "react";
import { Package, Plus, Search, Edit2, Trash2, Tag, Barcode, Filter, X, Check, Image as ImageIcon, Sparkles } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";
import { RetailProduct } from "@/types/shopPos";
import { ShopPosBarcodeLabelModal } from "./ShopPosBarcodeLabelModal";

export const ShopPosProductsView: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct, categories, formatPrice, lang } = useShopPos();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [selectedBarcodeProduct, setSelectedBarcodeProduct] = useState<RetailProduct | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [arabicName, setArabicName] = useState("");
  const [sku, setSku] = useState("");
  const [barcode, setBarcode] = useState("");
  const [categoryId, setCategoryId] = useState("groceries");
  const [brand, setBrand] = useState("");
  const [unit, setUnit] = useState("Piece");
  const [costPrice, setCostPrice] = useState("");
  const [price, setPrice] = useState("");
  const [wholesalePrice, setWholesalePrice] = useState("");
  const [stock, setStock] = useState("");
  const [minStock, setMinStock] = useState("10");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  // Optional Attribute Fields (Grocery expiry, Electronics serial/model, Clothing size/color)
  const [expiryDate, setExpiryDate] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCat = selectedCategory === "all" || p.categoryId === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      p.name.toLowerCase().includes(query) ||
      (p.arabicName && p.arabicName.toLowerCase().includes(query)) ||
      p.sku.toLowerCase().includes(query) ||
      p.barcode.includes(query) ||
      p.brand.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  const handleOpenEdit = (product: RetailProduct) => {
    setEditingProductId(product.id);
    setName(product.name);
    setArabicName(product.arabicName || "");
    setSku(product.sku);
    setBarcode(product.barcode);
    setCategoryId(product.categoryId || "beverages");
    setBrand(product.brand);
    setUnit(product.unit);
    setCostPrice(product.costPrice.toString());
    setPrice(product.price.toString());
    setWholesalePrice(product.wholesalePrice ? product.wholesalePrice.toString() : "");
    setStock(product.stock.toString());
    setMinStock(product.minStock.toString());
    setImage(product.image);
    setDescription(product.description || "");
    setExpiryDate(product.expiryDate || "");
    setBatchNumber(product.batchNumber || "");
    setSerialNumber(product.serialNumber || "");
    setColor(product.color || "");
    setSize(product.size || "");
    setIsAddDrawerOpen(true);
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numPrice = parseFloat(price) || 0;
    const numCost = parseFloat(costPrice) || 0;
    const numStock = parseInt(stock) || 0;
    const numMinStock = parseInt(minStock) || 5;

    const payload: Partial<RetailProduct> = {
      name,
      arabicName: arabicName || name,
      sku: sku || `SKU-${Math.floor(1000 + Math.random() * 9000)}`,
      barcode: barcode || `${Math.floor(629100000000 + Math.random() * 999999)}`,
      categoryId,
      categoryName: categories.find((c) => c.id === categoryId)?.name || "General",
      brand: brand || "Generic Brand",
      unit: unit || "Piece",
      costPrice: numCost,
      price: numPrice,
      wholesalePrice: wholesalePrice ? parseFloat(wholesalePrice) : undefined,
      stock: numStock,
      minStock: numMinStock,
      image: image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
      description,
      expiryDate: expiryDate || undefined,
      batchNumber: batchNumber || undefined,
      serialNumber: serialNumber || undefined,
      color: color || undefined,
      size: size || undefined,
      isAvailable: true,
    };

    if (editingProductId) {
      updateProduct(editingProductId, payload);
    } else {
      addProduct({
        id: `prod-${Date.now()}`,
        ...payload,
      } as RetailProduct);
    }

    setIsAddDrawerOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setArabicName("");
    setSku("");
    setBarcode("");
    setBrand("");
    setCostPrice("");
    setPrice("");
    setWholesalePrice("");
    setStock("");
    setImage("");
    setDescription("");
    setExpiryDate("");
    setBatchNumber("");
    setSerialNumber("");
    setModel("");
    setColor("");
    setSize("");
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#07090F] p-4 lg:p-6 overflow-y-auto custom-scrollbar">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-slate-100 flex items-center gap-2.5">
            <Package className="w-6 h-6 text-[#D4AF37]" />
            <span>{lang === "ar" ? "دليل المنتجات والكتالوج" : "Universal Products Catalog"}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {lang === "ar"
              ? "إدارة جميع أصناف التجزئة، الأسعار، الباركود، والخصائص الاختيارية"
              : "Manage products, barcodes, SKUs, wholesale prices, and industry optional attributes"}
          </p>
        </div>

        <button
          onClick={() => setIsAddDrawerOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 transition flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>{lang === "ar" ? "إضافة منتج جديد" : "Add New Retail Product"}</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-4 bg-[#0E121B] p-3 rounded-2xl border border-[#1C2333]">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-500 absolute start-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === "ar" ? "بحث بالاسم، SKU أو الباركود..." : "Search name, SKU, barcode or brand..."}
            className="w-full bg-[#141A26] border border-[#202738] rounded-xl ps-9 pe-4 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-[#D4AF37]"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-[#141A26] border border-[#202738] text-xs text-slate-200 rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37] w-full sm:w-56"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {lang === "ar" ? cat.arabicName : cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Data Table */}
      <div className="flex-1 bg-[#0E121B] border border-[#1C2333] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse text-xs">
            <thead>
              <tr className="bg-[#121724] border-b border-[#1C2333] text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 text-start">{lang === "ar" ? "المنتج" : "Product"}</th>
                <th className="py-3 px-4 text-start">{lang === "ar" ? "الرمز/الباركود" : "SKU & Barcode"}</th>
                <th className="py-3 px-4 text-start">{lang === "ar" ? "القسم والماركة" : "Category & Brand"}</th>
                <th className="py-3 px-4 text-end">{lang === "ar" ? "سعر التكلفة" : "Cost Price"}</th>
                <th className="py-3 px-4 text-end">{lang === "ar" ? "سعر البيع" : "Retail Price"}</th>
                <th className="py-3 px-4 text-center">{lang === "ar" ? "المخزون" : "Stock"}</th>
                <th className="py-3 px-4 text-center">{lang === "ar" ? "إجراءات" : "Actions"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#182030] text-slate-300">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-[#141A26] transition">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded-xl object-cover bg-black/40 flex-shrink-0"
                      />
                      <div>
                        <div className="font-bold text-slate-100">{product.name}</div>
                        {product.arabicName && <div className="text-[10px] text-slate-400">{product.arabicName}</div>}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-300">
                    <div className="font-bold text-slate-100">{product.sku}</div>
                    <div className="text-[10px] text-slate-400">{product.barcode}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-slate-200 font-medium">{product.categoryName || product.categoryId}</div>
                    <div className="text-[10px] text-[#D4AF37]">{product.brand}</div>
                  </td>
                  <td className="py-3 px-4 text-end font-mono text-slate-400">{formatPrice(product.costPrice)}</td>
                  <td className="py-3 px-4 text-end font-mono font-bold text-[#D4AF37]">{formatPrice(product.price)}</td>
                  <td className="py-3 px-4 text-center font-mono">
                    <span
                      className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${
                        product.stock <= 0
                          ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                          : product.stock <= product.minStock
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      }`}
                    >
                      {product.stock} {product.unit}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => handleOpenEdit(product)}
                        className="p-1.5 rounded-lg bg-[#182030] text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 border border-[#222B3D] transition cursor-pointer"
                        title="Edit Product Details"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border border-rose-500/20 transition cursor-pointer"
                        title="Delete Product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setSelectedBarcodeProduct(product)}
                        className="p-1.5 rounded-lg bg-[#182030] text-slate-200 hover:text-[#D4AF37] border border-[#222B3D] transition cursor-pointer"
                        title="Print Barcode Label Sheet"
                      >
                        <Barcode className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Drawer / Modal */}
      {isAddDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-2xl bg-[#0E121B] border border-[#222A3E] rounded-2xl shadow-2xl p-6 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1C2333]">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Package className="w-5 h-5 text-[#D4AF37]" />
                <span>{lang === "ar" ? "إضافة منتج جديد للكتالوج" : "Add New Product to Retail Catalog"}</span>
              </h3>
              <button onClick={() => setIsAddDrawerOpen(false)} className="text-slate-400 hover:text-white transition">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="flex-1 overflow-y-auto custom-scrollbar space-y-4 pe-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Product Name (English) *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Coca Cola 330ml Can"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Product Name (Arabic)</label>
                  <input
                    type="text"
                    value={arabicName}
                    onChange={(e) => setArabicName(e.target.value)}
                    placeholder="كوكاكولا علبة 330 مل"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">SKU Code</label>
                  <input
                    type="text"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                    placeholder="Auto or SKU-001"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Barcode String</label>
                  <input
                    type="text"
                    value={barcode}
                    onChange={(e) => setBarcode(e.target.value)}
                    placeholder="EAN-13 Barcode"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
                  <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  >
                    {categories.filter((c) => c.id !== "all").map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Brand Name</label>
                  <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Brand"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Cost Price (AED)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={costPrice}
                    onChange={(e) => setCostPrice(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Retail Price (AED) *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono font-bold rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Initial Stock</label>
                  <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    placeholder="100"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Unit Type</label>
                  <input
                    type="text"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    placeholder="Can / Bottle / Piece"
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Optional Attributes Box */}
              <div className="p-3.5 rounded-xl bg-[#121622] border border-[#1C2333] space-y-2.5">
                <span className="text-xs font-bold text-[#D4AF37]">
                  Optional Industry Attributes (Grocery / Electronics / Clothing)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  <input
                    type="date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="Expiry Date"
                    className="bg-[#182030] border border-[#242F46] text-xs text-slate-100 rounded-lg px-2.5 py-1.5 outline-none"
                  />
                  <input
                    type="text"
                    value={batchNumber}
                    onChange={(e) => setBatchNumber(e.target.value)}
                    placeholder="Batch #"
                    className="bg-[#182030] border border-[#242F46] text-xs text-slate-100 font-mono rounded-lg px-2.5 py-1.5 outline-none"
                  />
                  <input
                    type="text"
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                    placeholder="Serial #"
                    className="bg-[#182030] border border-[#242F46] text-xs text-slate-100 font-mono rounded-lg px-2.5 py-1.5 outline-none"
                  />
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="Color"
                    className="bg-[#182030] border border-[#242F46] text-xs text-slate-100 rounded-lg px-2.5 py-1.5 outline-none"
                  />
                  <input
                    type="text"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    placeholder="Size (S, M, L, XL)"
                    className="bg-[#182030] border border-[#242F46] text-xs text-slate-100 rounded-lg px-2.5 py-1.5 outline-none"
                  />
                  <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                    className="bg-[#182030] border border-[#242F46] text-xs text-slate-100 rounded-lg px-2.5 py-1.5 outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#1C2333]">
                <button
                  type="button"
                  onClick={() => setIsAddDrawerOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-md hover:brightness-110 transition"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Barcode Label Modal */}
      <ShopPosBarcodeLabelModal
        isOpen={!!selectedBarcodeProduct}
        product={selectedBarcodeProduct}
        onClose={() => setSelectedBarcodeProduct(null)}
      />
    </div>
  );
};
