"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  User,
  Pause,
  CreditCard,
  Tag,
  FileText,
  Receipt,
  Banknote,
  Store,
  ShoppingBag,
  Truck,
  ChevronDown
} from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";

interface Props {
  onOpenPayment: () => void;
  onOpenHoldSales: () => void;
}

interface QtyInputProps {
  productId: string;
  currentQty: number;
  maxStock?: number;
  onUpdateQty: (productId: string, newQty: number) => void;
}

const CartQuantityInput: React.FC<QtyInputProps> = ({
  productId,
  currentQty,
  maxStock,
  onUpdateQty,
}) => {
  const [val, setVal] = useState<string>(currentQty.toString());
  const [isFocused, setIsFocused] = useState<boolean>(false);

  React.useEffect(() => {
    if (!isFocused) {
      setVal(currentQty.toString());
    }
  }, [currentQty, isFocused]);

  const commitQty = (rawVal: string) => {
    let parsed = parseInt(rawVal, 10);
    if (isNaN(parsed) || parsed < 1) {
      parsed = 1;
    }
    if (typeof maxStock === "number" && maxStock > 0 && parsed > maxStock) {
      parsed = maxStock;
    }
    setVal(parsed.toString());
    onUpdateQty(productId, parsed);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (/^\d*$/.test(raw)) {
      setVal(raw);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    commitQty(val);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    } else if (e.key === "Escape") {
      setVal(currentQty.toString());
      e.currentTarget.blur();
    }
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      value={val}
      onFocus={(e) => {
        setIsFocused(true);
        e.target.select();
      }}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className="w-7 sm:w-8 h-6 text-center font-mono font-bold text-xs bg-[#141A28] text-white border border-[#273249] rounded-md focus:bg-[#0E1320] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 focus:outline-none transition-all cursor-text select-all"
    />
  );
};

export const ShopPosOrderCart: React.FC<Props> = ({ onOpenPayment, onOpenHoldSales }) => {
  const {
    cartItems,
    updateCartItemQty,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    discountType,
    discountValue,
    discountAmount,
    vatAmount,
    grandTotal,
    setDiscount,
    selectedCustomer,
    setSelectedCustomer,
    customers,
    holdCurrentSale,
    formatPrice,
    currentOrderNumber,
    businessProfile,
    lang,
    isMobileCartOpen,
    products,
  } = useShopPos();

  const getProductStock = (productId: string) => {
    const p = products.find((prod) => prod.id === productId || (prod as any).productId === productId);
    return p && typeof p.stock === "number" ? p.stock : undefined;
  };

  const [fulfillmentMode, setFulfillmentMode] = useState<"instore" | "express" | "delivery">("instore");
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [discountValInput, setDiscountValInput] = useState<string>(discountValue.toString());
  const [editingQtyProductId, setEditingQtyProductId] = useState<string | null>(null);
  const [editingQtyVal, setEditingQtyVal] = useState<string>("");

  const totalUnits = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleApplyDiscountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(discountValInput) || 0;
    setDiscount(discountType, val);
    setIsDiscountOpen(false);
  };

  return (
    <aside
      className={`w-full lg:w-[490px] xl:w-[560px] 2xl:w-[600px] bg-[#07090F] border-s border-[#1B2130] flex flex-row min-h-0 flex-shrink-0 z-20 h-full transition-all duration-300 ${
        isMobileCartOpen ? "fixed inset-0 z-40 flex-col bg-[#07090F]" : "hidden lg:flex"
      }`}
    >
      {/* 3a. LEFT COLUMN: Order Items & Customer Bar */}
      <div className="flex-1 flex flex-col min-h-0 border-e border-[#1C2335] bg-[#0A0D14] h-full">
        {/* Top Header Bar: Order ID + Items Pill + Clear (Esc) */}
        <div className="p-2.5 sm:p-3 border-b border-[#1C2335] bg-[#0D111D] flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-1.5 font-mono">
            <span className="text-xs sm:text-sm font-black text-white tracking-tight">{currentOrderNumber}</span>
            <span className="px-2 py-0.5 rounded-full bg-[#1A180E] text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] sm:text-xs font-semibold">
              {totalUnits} Items
            </span>
          </div>

          <button
            onClick={clearCart}
            disabled={cartItems.length === 0}
            className="flex items-center gap-1 text-xs font-semibold text-rose-400 hover:text-rose-300 border border-rose-500/30 bg-rose-950/30 hover:bg-rose-900/50 px-2 py-0.5 rounded-lg transition disabled:opacity-40 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear (Esc)</span>
          </button>
        </div>

        {/* Fulfillment Mode Pill Buttons */}
        <div className="p-1.5 border-b border-[#1C2335] bg-[#0E1320] flex items-center gap-1 flex-shrink-0">
          <button
            onClick={() => setFulfillmentMode("instore")}
            className={`flex-1 py-1 px-1.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1 transition cursor-pointer ${
              fulfillmentMode === "instore"
                ? "bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B0871A] text-black shadow-md"
                : "bg-[#141A28] border border-[#232D42] text-slate-300 hover:border-[#D4AF37]/50"
            }`}
          >
            <Store className="w-3.5 h-3.5" />
            <span>In-Store</span>
          </button>

          <button
            onClick={() => setFulfillmentMode("express")}
            className={`flex-1 py-1 px-1.5 rounded-lg font-semibold text-xs flex items-center justify-center gap-1 transition cursor-pointer ${
              fulfillmentMode === "express"
                ? "bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B0871A] text-black font-bold shadow-md"
                : "bg-[#141A28] border border-[#232D42] text-slate-300 hover:border-[#D4AF37]/50"
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="truncate">Express</span>
          </button>

          <button
            onClick={() => setFulfillmentMode("delivery")}
            className={`flex-1 py-1 px-1.5 rounded-lg font-semibold text-xs flex items-center justify-center gap-1 transition cursor-pointer ${
              fulfillmentMode === "delivery"
                ? "bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B0871A] text-black font-bold shadow-md"
                : "bg-[#141A28] border border-[#232D42] text-slate-300 hover:border-[#D4AF37]/50"
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Delivery</span>
          </button>
        </div>

        {/* Customer Selection Row */}
        <div className="relative p-1.5 border-b border-[#1C2335] bg-[#0E1320] flex items-center justify-between gap-1.5 flex-shrink-0">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-xl bg-[#141A29] border border-[#232D42] flex-1 min-w-0">
            <User className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
            <span className="text-[11px] font-bold text-slate-200 truncate">
              {selectedCustomer ? selectedCustomer.name : "Walk-in Retail Customer"}
            </span>
          </div>

          <button
            onClick={() => setIsCustomerDropdownOpen((prev) => !prev)}
            className="px-2 py-1 rounded-lg bg-[#141A29] hover:bg-[#1C2538] border border-[#D4AF37]/50 text-[#D4AF37] hover:text-[#f0c848] text-[9px] font-black uppercase tracking-wider flex items-center gap-0.5 transition flex-shrink-0 shadow-sm cursor-pointer"
          >
            <span>SELECT CUSTOMER</span>
            <ChevronDown className="w-2.5 h-2.5" />
          </button>

          {/* Customer Dropdown */}
          {isCustomerDropdownOpen && (
            <div className="absolute top-11 start-1.5 end-1.5 bg-[#0E121B] border border-[#222A3E] rounded-xl shadow-2xl p-2 z-50 animate-in fade-in">
              <div className="text-[10px] font-bold text-slate-400 uppercase px-2 mb-1">
                Select Customer Account
              </div>
              <button
                onClick={() => {
                  setSelectedCustomer(null);
                  setIsCustomerDropdownOpen(false);
                }}
                className="w-full text-start p-1.5 rounded-lg text-xs font-bold text-[#D4AF37] hover:bg-[#182030] cursor-pointer"
              >
                Walk-in Retail Customer
              </button>
              <div className="my-1 border-t border-[#1C2333]" />
              <div className="max-h-48 overflow-y-auto custom-scrollbar space-y-1">
                {customers.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setSelectedCustomer(c);
                      setIsCustomerDropdownOpen(false);
                    }}
                    className="w-full text-start p-1.5 rounded-lg text-xs font-semibold text-slate-200 hover:bg-[#182030] hover:text-[#D4AF37] flex items-center justify-between cursor-pointer"
                  >
                    <span>{c.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{c.phone}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Section Header: ITEMS (X) & PRICE */}
        <div className="px-2.5 py-1.5 border-b border-[#1C2335] bg-[#0A0D14] flex items-center justify-between text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase flex-shrink-0">
          <span>ITEMS ({cartItems.length})</span>
          <span>PRICE</span>
        </div>

        {/* Cart Item Cards List matching screenshot layout */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2 min-h-0 bg-[#07090F]">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-4 text-center text-slate-500">
              <ShoppingCart className="w-8 h-8 stroke-[1.4] text-slate-600 mb-2" />
              <p className="text-xs font-bold text-slate-400">Cart is empty</p>
              <p className="text-[10px] text-slate-500 mt-1 max-w-xs">
                Tap any product card to add items.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.productId}
                className="p-2.5 rounded-xl bg-[#0E1320] border border-[#1C2436] hover:border-[#CEA731]/50 transition space-y-1.5 select-none shadow-md"
              >
                {/* Top Line: Name (up to 2 lines) + Total Price */}
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-extrabold text-white leading-snug line-clamp-2 break-words flex-1 min-w-0">
                    {lang === "ar" && item.arabicName ? item.arabicName : item.name}
                  </h4>
                  <div className="text-xs font-extrabold text-[#CEA731] font-mono whitespace-nowrap flex-shrink-0 pt-0.5">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>

                {/* Subtitle & Stepper Controls Row */}
                <div className="flex items-center justify-between gap-1 pt-0.5">
                  <span className="text-[10px] text-slate-400 font-mono truncate flex-1 min-w-0">
                    {formatPrice(item.price)} / {item.unit || "pack"}
                  </span>

                  {/* Stepper Controls: - [ Qty Input ] + 🗑 */}
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => updateCartItemQty(item.productId, -1)}
                      className="w-6 h-6 rounded-md bg-[#182032] border border-[#273249] hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 flex items-center justify-center font-bold text-xs active:scale-95 transition cursor-pointer"
                      title="Decrease quantity"
                    >
                      <Minus className="w-3 h-3 stroke-[3]" />
                    </button>

                    <CartQuantityInput
                      productId={item.productId}
                      currentQty={item.quantity}
                      maxStock={getProductStock(item.productId)}
                      onUpdateQty={(pid, newQty) => updateCartQuantity(pid, newQty)}
                    />

                    <button
                      onClick={() => {
                        const maxStock = getProductStock(item.productId);
                        if (typeof maxStock === "number" && item.quantity >= maxStock) return;
                        updateCartItemQty(item.productId, 1);
                      }}
                      className="w-6 h-6 rounded-md bg-[#182032] border border-[#273249] hover:bg-[#CEA731] text-slate-300 hover:text-black flex items-center justify-center font-bold text-xs active:scale-95 transition cursor-pointer"
                      title="Increase quantity"
                    >
                      <Plus className="w-3 h-3 stroke-[3]" />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.productId)}
                      className="w-6 h-6 rounded-md bg-red-950/40 border border-red-500/40 text-rose-400 flex items-center justify-center hover:bg-red-900/60 transition ms-0.5 cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Subtotal Row */}
        <div className="p-2.5 border-t border-[#1C2335] bg-[#0A0D14] flex items-center justify-between font-mono text-xs flex-shrink-0">
          <div>
            <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">SUBTOTAL</div>
            <div className="text-slate-400 text-[10px] mt-0.5">{totalUnits} Items</div>
          </div>
          <div className="text-base font-black text-[#D4AF37]">{formatPrice(subtotal)}</div>
        </div>
      </div>

      {/* 3b. RIGHT COLUMN: BILL SETTLEMENT & PAYMENT COLUMN */}
      <div className="w-[250px] xl:w-[270px] bg-[#090C14] border-s border-[#1B2130] flex flex-col justify-between flex-shrink-0 select-none h-full">
        {/* Header: Receipt Icon + BILL SETTLEMENT & PAYMENT + ACTIVE badge */}
        <div className="px-2.5 py-2.5 border-b border-[#1B2130] bg-[#0D111D] flex items-center justify-between gap-1 flex-shrink-0">
          <div className="flex items-center gap-1.5 min-w-0 flex-1">
            <div className="w-6 h-6 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#CEA731] flex-shrink-0">
              <Receipt className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0 flex-1 flex flex-col justify-center">
              <h3 className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white leading-tight mb-0.5">
                BILL SETTLEMENT & PAYMENT
              </h3>
              <p className="text-[8px] text-slate-400 font-mono leading-none mt-0.5">Tax Compliant POS</p>
            </div>
          </div>

          <span className="px-1.5 py-0.5 rounded bg-amber-950/40 text-[#CEA731] border border-[#CEA731]/40 text-[9px] font-mono font-bold tracking-wider flex-shrink-0">
            ACTIVE
          </span>
        </div>

        {/* Middle Summary Cards & Total Hero Card */}
        <div className="p-2.5 space-y-4 min-h-0 flex flex-col justify-start flex-1 overflow-y-auto custom-scrollbar">
          {/* CURRENT BILL Box (Increased height & larger text size) */}
          <div className="bg-[#0E1320] border border-[#1C2436] rounded-xl p-3.5 space-y-3 shadow-md flex-shrink-0">
            <div className="text-xs sm:text-sm font-mono text-slate-300 uppercase tracking-wider font-extrabold pb-1.5 border-b border-[#182032] flex items-center justify-between">
              <span className="text-white font-black">CURRENT BILL</span>
              <span className="text-[#D4AF37] font-mono font-bold truncate ms-1">{currentOrderNumber}</span>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between items-center gap-1 text-xs sm:text-sm font-mono">
              <span className="text-slate-300 font-semibold whitespace-nowrap">
                Subtotal ({totalUnits} Items)
              </span>
              <span className="font-extrabold text-white text-xs sm:text-sm whitespace-nowrap">
                {formatPrice(subtotal)}
              </span>
            </div>

            {/* Discount line */}
            <div className="flex justify-between items-center gap-1 text-xs sm:text-sm">
              <button
                type="button"
                onClick={() => setIsDiscountOpen((prev) => !prev)}
                className="text-[#D4AF37] hover:underline flex items-center gap-1.5 font-bold cursor-pointer whitespace-nowrap"
              >
                <Tag className="w-3.5 h-3.5" />
                <span>
                  {discountValue > 0
                    ? `Discount (${discountValue}${discountType === "percent" ? "%" : ""})`
                    : `+ Apply Discount`}
                </span>
              </button>
              {discountAmount > 0 && (
                <span className="font-mono text-rose-400 font-extrabold text-xs sm:text-sm whitespace-nowrap">
                  -{formatPrice(discountAmount)}
                </span>
              )}
            </div>

            {/* Discount Form Drawer */}
            {isDiscountOpen && (
              <form onSubmit={handleApplyDiscountSubmit} className="p-2 rounded-lg bg-[#141A29] border border-[#232D42] space-y-1.5">
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setDiscount("percent", discountValue || 10)}
                    className={`flex-1 py-1 rounded font-extrabold text-[10px] cursor-pointer ${discountType === "percent" ? "bg-[#D4AF37] text-black" : "bg-[#1C2538] text-slate-300"}`}
                  >
                    %
                  </button>
                  <button
                    type="button"
                    onClick={() => setDiscount("fixed", discountValue || 15)}
                    className={`flex-1 py-1 rounded font-extrabold text-[10px] cursor-pointer ${discountType === "fixed" ? "bg-[#D4AF37] text-black" : "bg-[#1C2538] text-slate-300"}`}
                  >
                    Fixed
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  {[5, 10, 15, 20].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setDiscount(discountType, val)}
                      className="flex-1 py-1 rounded bg-[#1B2335] hover:bg-[#D4AF37] hover:text-[#000] text-slate-200 font-mono font-bold text-[10px] border border-[#263148] cursor-pointer"
                    >
                      {val}%
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setDiscount(discountType, 0);
                      setIsDiscountOpen(false);
                    }}
                    className="px-1.5 py-1 rounded bg-rose-500/15 text-rose-400 font-bold text-[10px] cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </form>
            )}

            {/* VAT (5%) */}
            <div className="flex justify-between items-center gap-1 text-xs sm:text-sm font-mono">
              <span className="text-slate-300 font-semibold whitespace-nowrap">
                VAT (5%)
              </span>
              <span className="font-extrabold text-white text-xs sm:text-sm whitespace-nowrap">
                {formatPrice(vatAmount)}
              </span>
            </div>
          </div>

          {/* NET PAYABLE TOTAL Hero Card (Increased height & padding) */}
          <div className="mt-4 rounded-2xl p-4 sm:p-5 min-h-[105px] sm:min-h-[115px] bg-[#0A0F1D] border-2 border-[#D4AF37] shadow-[0_0_22px_rgba(212,175,55,0.22)] flex flex-col justify-between flex-shrink-0">
            <div className="flex items-center justify-between gap-1 mb-2">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white whitespace-nowrap">
                NET PAYABLE TOTAL
              </span>
            </div>

            <div className="py-1 text-right">
              <span className="text-3xl sm:text-4xl font-black text-[#D4AF37] font-mono tracking-tight whitespace-nowrap drop-shadow-[0_2px_14px_rgba(212,175,55,0.5)]">
                {formatPrice(grandTotal)}
              </span>
            </div>
          </div>

          {/* SELECT PAYMENT METHOD & HOLD SECTION (MOVED UP DIRECTLY UNDER NET PAYABLE TOTAL) */}
          <div className="mt-2 pt-2 border-t border-[#1B2130] bg-[#0C101A] rounded-xl p-2 space-y-1.5 flex-shrink-0">
            <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold px-0.5">
              SELECT PAYMENT METHOD
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {/* CASH BUTTON */}
              <button
                onClick={onOpenPayment}
                disabled={cartItems.length === 0}
                className="py-2.5 px-1 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B0871A] hover:brightness-110 active:scale-95 text-black font-black text-xs shadow-lg shadow-[#D4AF37]/20 disabled:opacity-40 transition flex items-center justify-center gap-1 cursor-pointer"
              >
                <Banknote className="w-3.5 h-3.5 stroke-[2.4]" />
                <span>Cash</span>
              </button>

              {/* CARD BUTTON */}
              <button
                onClick={onOpenPayment}
                disabled={cartItems.length === 0}
                className="py-2.5 px-1 rounded-xl bg-[#0E1422] hover:bg-[#151D2F] active:scale-95 text-white font-bold text-xs border border-[#243047] hover:border-[#D4AF37] disabled:opacity-40 transition flex items-center justify-center gap-1 cursor-pointer shadow-md"
              >
                <CreditCard className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Card</span>
              </button>
            </div>

            {/* HOLD SALE BUTTON */}
            <button
              onClick={() => {
                if (cartItems.length > 0) {
                  holdCurrentSale();
                } else {
                  onOpenHoldSales();
                }
              }}
              className="w-full py-2 px-1.5 rounded-xl bg-[#141A28] hover:bg-[#1C2538] active:scale-95 text-amber-400 hover:text-amber-300 font-bold text-xs border border-[#2B354C] hover:border-amber-400/60 transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Pause className="w-3.5 h-3.5 text-amber-400" />
              <span>Hold Sale (F6)</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
