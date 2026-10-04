"use client";

import React, { useState } from "react";
import {
  Trash2,
  Plus,
  Minus,
  MessageSquare,
  Percent,
  ChefHat,
  CreditCard,
  User,
  Users,
  UtensilsCrossed,
  ShoppingBag,
  Bike,
  X,
  Sparkles,
  AlertCircle,
  Tag,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";

export const OrderCart: React.FC = () => {
  const {
    currentOrderNumber,
    orderType,
    selectedTable,
    guestCount,
    setGuestCount,
    selectedCustomer,
    setSelectedCustomer,
    customers,
    deliveryAddress,
    setDeliveryAddress,
    deliveryPhone,
    setDeliveryPhone,
    orderNotes,
    setOrderNotes,
    cartItems,
    updateQuantity,
    removeFromCart,
    setItemNotes,
    clearCart,
    subtotal,
    discountType,
    discountValue,
    setDiscount,
    discountAmount,
    taxableAmount,
    vatAmount,
    serviceCharge,
    deliveryFee,
    grandTotal,
    sendToKitchen,
    setIsPaymentModalOpen,
    setIsTableModalOpen,
    setIsMobileCartOpen,
    formatDhs,
    t,
    lang,
  } = useRestaurantPos();

  const [activeNoteItemId, setActiveNoteItemId] = useState<string | null>(null);
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [showDiscountPicker, setShowDiscountPicker] = useState(false);
  const [customDiscountVal, setCustomDiscountVal] = useState<string>(discountValue ? discountValue.toString() : "");

  const cartListRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll cart items list to bottom when a new item is added
  React.useEffect(() => {
    if (cartListRef.current) {
      cartListRef.current.scrollTo({
        top: cartListRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartItems.length]);

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="h-full flex flex-col bg-white dark:bg-[#10121A] border-l border-slate-200 dark:border-[#1E2230] shadow-2xl select-none min-h-0 text-slate-900 dark:text-slate-100">
      {/* Bill Header */}
      <div className="p-2.5 border-b border-slate-200 dark:border-[#1E2230] bg-slate-50 dark:bg-[#141622] flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white font-mono tracking-tight">
              {currentOrderNumber}
            </span>

            <span className="px-1.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-[#D4AF37]/15 text-amber-700 dark:text-[#D4AF37] border border-[#D4AF37]/30">
              {orderType === "dine_in" ? t.dine_in : orderType === "takeaway" ? t.takeaway : t.delivery}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="text-[11px] text-rose-400 hover:text-rose-300 px-1.5 py-0.5 rounded hover:bg-rose-950/40 transition flex items-center gap-1 font-semibold"
                title={t.clear_order}
              >
                <Trash2 className="w-3 h-3" />
                <span className="hidden sm:inline">{t.clear_order}</span>
              </button>
            )}

            {/* Mobile close cart drawer button */}
            <button
              onClick={() => setIsMobileCartOpen(false)}
              className="lg:hidden p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Order Details Substrip: Table & Guests (Dine-in) or Delivery Details */}
        <div className="mt-1.5 pt-1.5 border-t border-slate-200 dark:border-[#1F2434] flex items-center justify-between text-xs">
          {orderType === "dine_in" ? (
            <>
              <button
                onClick={() => setIsTableModalOpen(true)}
                className="flex items-center gap-1 font-bold text-amber-700 dark:text-[#D4AF37] hover:underline text-[11px]"
              >
                <UtensilsCrossed className="w-3 h-3" />
                <span>
                  {selectedTable ? `TABLE ${selectedTable.number.replace(/\D/g, "") || selectedTable.number} (${selectedTable.zone})` : t.select_table}
                </span>
              </button>

              {/* Guest Count Stepper */}
              <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#1A1D2A] border border-slate-200 dark:border-[#282E3F] px-1.5 py-0.5 rounded-lg text-[10px]">
                <Users className="w-2.5 h-2.5 text-slate-500 dark:text-slate-400" />
                <span className="font-medium">{t.guest}:</span>
                <button
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  className="w-3.5 h-3.5 rounded bg-slate-200 dark:bg-[#24293A] text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold hover:bg-[#D4AF37] hover:text-black transition"
                >
                  -
                </button>
                <span className="font-bold text-slate-900 dark:text-white px-0.5">{guestCount}</span>
                <button
                  onClick={() => setGuestCount(guestCount + 1)}
                  className="w-3.5 h-3.5 rounded bg-slate-200 dark:bg-[#24293A] text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold hover:bg-[#D4AF37] hover:text-black transition"
                >
                  +
                </button>
              </div>
            </>
          ) : orderType === "delivery" ? (
            <div className="w-full flex items-center gap-1.5">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder={lang === "ar" ? "الهاتف (+971)" : "Phone (+971)"}
                  value={deliveryPhone}
                  onChange={(e) => setDeliveryPhone(e.target.value)}
                  className="w-full px-2 py-1 text-[11px] rounded-lg border border-slate-300 dark:border-[#262B3B] bg-slate-50 dark:bg-[#161924] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none font-mono"
                />
              </div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder={lang === "ar" ? "العنوان بالتفصيل" : "Address / Villa"}
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full px-2 py-1 text-[11px] rounded-lg border border-slate-300 dark:border-[#262B3B] bg-slate-50 dark:bg-[#161924] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none"
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-[11px]">
              <ShoppingBag className="w-3 h-3 text-amber-700 dark:text-[#D4AF37]" />
              <span>{lang === "ar" ? "استلام مباشر من الكاونتر (سفري)" : "Takeaway Counter Pickup"}</span>
            </div>
          )}
        </div>

        {/* Customer Quick Selector */}
        <div className="mt-1.5 relative">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowCustomerDropdown(!showCustomerDropdown)}
              className="flex items-center gap-1 text-[10px] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <User className="w-3 h-3 text-amber-700 dark:text-[#D4AF37]" />
              <span className="font-semibold text-slate-800 dark:text-slate-300">
                {selectedCustomer ? `${selectedCustomer.name} (${selectedCustomer.phone})` : t.walk_in}
              </span>
              <span className="text-amber-700 dark:text-[#D4AF37] underline ms-1">
                {lang === "ar" ? "تغيير" : "Change"}
              </span>
            </button>
          </div>

          {showCustomerDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 z-30 bg-white dark:bg-[#161924] border border-slate-200 dark:border-[#2B3042] rounded-xl shadow-2xl p-1.5 max-h-48 overflow-y-auto">
              <button
                onClick={() => {
                  setSelectedCustomer(null);
                  setShowCustomerDropdown(false);
                }}
                className="w-full text-left px-2 py-1 text-[11px] font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-[#202534] text-slate-800 dark:text-slate-200"
              >
                {t.walk_in}
              </button>
              {customers.slice(0, 10).map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCustomer(c);
                    if (orderType === "delivery") {
                      if (c.address) setDeliveryAddress(c.address);
                      if (c.phone) setDeliveryPhone(c.phone);
                    }
                    setShowCustomerDropdown(false);
                  }}
                  className="w-full text-left px-2 py-1 text-[11px] rounded-lg hover:bg-slate-100 dark:hover:bg-[#202534] flex items-center justify-between transition"
                >
                  <span className="font-medium text-slate-900 dark:text-white">{c.name}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">{c.phone}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Cart Items List with guaranteed min-height and shrink-0 cards */}
      <div
        ref={cartListRef}
        className="flex-1 overflow-y-auto min-h-[160px] p-2 space-y-2 scrollbar-thin"
      >
        {cartItems.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500">
            <UtensilsCrossed className="w-10 h-10 text-slate-400 dark:text-slate-700 mb-2 stroke-[1.2]" />
            <p className="text-xs font-bold text-slate-800 dark:text-slate-300">
              {t.empty_cart_title}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-500 mt-0.5 max-w-[200px] leading-relaxed">
              {t.empty_cart_sub}
            </p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#141724] border border-slate-200 dark:border-[#202534] flex flex-col gap-1.5 shrink-0 shadow-sm transition hover:border-amber-500/40 dark:hover:border-[#D4AF37]/40"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white leading-tight truncate">
                    {lang === "ar" ? item.arabicName : item.name}
                  </h5>
                  <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                    <span className="font-mono text-amber-700 dark:text-[#D4AF37] font-semibold">{formatDhs(item.price)}</span>
                    <span>×</span>
                    <span className="font-bold text-slate-900 dark:text-white font-mono">{item.quantity}</span>
                  </div>
                </div>

                {/* Line Total in Dhs */}
                <div className={lang === "ar" ? "text-left shrink-0" : "text-right shrink-0"}>
                  <div className="text-xs font-black text-amber-700 dark:text-[#D4AF37] font-mono">
                    {formatDhs(item.lineTotal)}
                  </div>
                </div>
              </div>

              {/* Action Strip: Quantity Stepper & Cooking Note Trigger */}
              <div className="flex items-center justify-between pt-1 border-t border-slate-200 dark:border-[#1C202E]">
                <button
                  onClick={() =>
                    setActiveNoteItemId(activeNoteItemId === item.id ? null : item.id)
                  }
                  className={`text-[10px] flex items-center gap-1 px-1.5 py-0.5 rounded transition ${
                    item.notes
                      ? "text-amber-700 dark:text-[#D4AF37] bg-amber-500/15 font-semibold"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <MessageSquare className="w-3 h-3" />
                  <span className="truncate max-w-[110px]">{item.notes ? item.notes : t.item_note_placeholder}</span>
                </button>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-6 h-6 rounded-lg bg-slate-200 dark:bg-[#1B1E2B] hover:bg-rose-100 dark:hover:bg-rose-950/60 hover:text-rose-600 dark:hover:text-rose-400 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold transition text-xs border border-slate-300 dark:border-[#262B3B]"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-6 text-center font-mono font-bold text-xs text-slate-900 dark:text-white">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-6 h-6 rounded-lg bg-slate-200 dark:bg-[#1B1E2B] hover:bg-emerald-100 dark:hover:bg-emerald-950/60 hover:text-emerald-700 dark:hover:text-emerald-400 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold transition text-xs border border-slate-300 dark:border-[#262B3B]"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-6 h-6 rounded-lg bg-slate-200 dark:bg-[#1B1E2B] hover:bg-rose-100 dark:hover:bg-rose-950/60 text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 flex items-center justify-center transition text-xs ms-0.5 border border-slate-300 dark:border-[#262B3B]"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Expandable Kitchen Note Input */}
              {activeNoteItemId === item.id && (
                <div className="pt-1 flex items-center gap-1">
                  <input
                    type="text"
                    defaultValue={item.notes || ""}
                    placeholder="e.g. Medium well, extra spicy, no onion..."
                    onBlur={(e) => setItemNotes(item.id, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setItemNotes(item.id, (e.target as HTMLInputElement).value);
                        setActiveNoteItemId(null);
                      }
                    }}
                    autoFocus
                    className="flex-1 px-2 py-1 text-[11px] rounded-lg border border-slate-300 dark:border-[#2A2F42] bg-white dark:bg-[#161824] text-slate-900 dark:text-white focus:border-[#D4AF37] outline-none"
                  />
                  <button
                    onClick={() => setActiveNoteItemId(null)}
                    className="px-2 py-1 text-[11px] rounded-lg bg-slate-200 dark:bg-[#222736] text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-bold"
                  >
                    OK
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Bill Financial Calculations & Action Strip */}
      <div className="p-2.5 bg-slate-100 dark:bg-[#12141C] border-t border-slate-200 dark:border-[#1E2230] space-y-1.5 flex-shrink-0 text-[11px]">
        {/* Subtotal */}
        <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
          <span>{t.subtotal}</span>
          <span className="font-mono text-slate-900 dark:text-slate-200 font-bold">{formatDhs(subtotal)}</span>
        </div>

        {/* Discount Trigger / Display */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setShowDiscountPicker(!showDiscountPicker)}
            className="flex items-center gap-1 text-[11px] font-bold text-amber-700 dark:text-[#D4AF37] hover:underline"
          >
            <Tag className="w-3 h-3" />
            <span>
              {discountAmount > 0
                ? `${t.discount} (${discountType === "percent" ? `${discountValue}%` : formatDhs(discountValue)})`
                : `+ ${t.add_discount}`}
            </span>
          </button>
          <span className="font-mono font-bold text-rose-600 dark:text-rose-400">
            {discountAmount > 0 ? `-${formatDhs(discountAmount)}` : "Dhs 0.00"}
          </span>
        </div>

        {/* Expandable Discount Picker */}
        {showDiscountPicker && (
          <div className="p-2 rounded-xl bg-white dark:bg-[#161924] border border-slate-200 dark:border-[#262B3B] space-y-1.5">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setDiscount("percent", discountValue || 10)}
                className={`flex-1 py-1 rounded-lg font-bold text-[10px] transition ${
                  discountType === "percent"
                    ? "bg-[#D4AF37] text-black"
                    : "bg-slate-100 dark:bg-[#1F2434] text-slate-700 dark:text-slate-300"
                }`}
              >
                % Percent
              </button>
              <button
                type="button"
                onClick={() => setDiscount("fixed", discountValue || 15)}
                className={`flex-1 py-1 rounded-lg font-bold text-[10px] transition ${
                  discountType === "fixed"
                    ? "bg-[#D4AF37] text-black"
                    : "bg-slate-100 dark:bg-[#1F2434] text-slate-700 dark:text-slate-300"
                }`}
              >
                Fixed Dhs
              </button>
            </div>

            <div className="flex items-center gap-1">
              {[5, 10, 15, 20].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setDiscount(discountType, val)}
                  className="flex-1 py-0.5 rounded bg-slate-200 dark:bg-[#222736] hover:bg-[#D4AF37] hover:text-black text-slate-800 dark:text-slate-200 font-mono font-bold text-[10px] transition"
                >
                  {val}{discountType === "percent" ? "%" : ""}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setDiscount(discountType, 0)}
                className="px-1.5 py-0.5 rounded bg-rose-100 dark:bg-[#222736] text-rose-600 dark:text-rose-400 font-bold text-[10px]"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* VAT 5% (UAE Tax) */}
        <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
          <span>{t.vat_5}</span>
          <span className="font-mono text-slate-900 dark:text-slate-200 font-bold">{formatDhs(vatAmount)}</span>
        </div>

        {/* Delivery Fee if applicable */}
        {orderType === "delivery" && (
          <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
            <span>{t.delivery_fee}</span>
            <span className="font-mono text-slate-900 dark:text-slate-200 font-bold">{formatDhs(deliveryFee)}</span>
          </div>
        )}

        {/* Grand Total */}
        <div className="pt-1.5 border-t border-slate-200 dark:border-[#1F2433] flex justify-between items-center">
          <span className="text-xs font-black text-slate-900 dark:text-white">{t.grand_total}</span>
          <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-mono tracking-tight">
            {formatDhs(grandTotal)}
          </span>
        </div>

        {/* Paid & Balance (Matching Poster) */}
        <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-0.5">
          <span>{lang === "ar" ? "المدفوع:" : "Paid:"} <span className="font-bold text-slate-700 dark:text-slate-300">Dhs 0.00</span></span>
          <span className="text-slate-700 dark:text-slate-300">{lang === "ar" ? "المتبقي:" : "Balance:"} <span className="font-black text-amber-700 dark:text-[#D4AF37] text-xs font-mono">{formatDhs(grandTotal)}</span></span>
        </div>

        {/* Payment Buttons matching Poster: [💵 Cash] and [💳 Card] */}
        <div className="grid grid-cols-2 gap-1.5 pt-0.5">
          <button
            onClick={() => setIsPaymentModalOpen(true)}
            disabled={cartItems.length === 0}
            className="py-2 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 active:scale-95 text-black font-black text-xs shadow-md shadow-[#D4AF37]/25 disabled:opacity-40 transition flex items-center justify-center gap-1.5"
          >
            <CreditCard className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{t.pay_cash || (lang === "ar" ? "نقداً" : "Cash")}</span>
          </button>

          <button
            onClick={() => setIsPaymentModalOpen(true)}
            disabled={cartItems.length === 0}
            className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-[#171A26] hover:bg-slate-200 dark:hover:bg-[#222738] active:scale-95 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-bold text-xs border border-slate-300 dark:border-[#2B3144] disabled:opacity-40 transition flex items-center justify-center gap-1.5"
          >
            <CreditCard className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span>{t.pay_card || (lang === "ar" ? "بطاقة" : "Card")}</span>
          </button>
        </div>

        {/* Send to Kitchen Action */}
        <div className="pt-1">
          <button
            onClick={sendToKitchen}
            disabled={cartItems.length === 0}
            className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500/10 via-[#D4AF37]/15 to-amber-500/10 hover:from-amber-500/20 hover:to-amber-500/20 active:scale-[0.98] text-amber-900 dark:text-[#F4E0A5] hover:text-amber-950 dark:hover:text-white text-xs font-black border border-[#D4AF37]/40 shadow-sm shadow-[#D4AF37]/10 disabled:opacity-40 transition-all flex items-center justify-center gap-1.5"
            title="Send KOT to Kitchen Display"
          >
            <ChefHat className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-extrabold tracking-wide">{t.send_to_kitchen}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
