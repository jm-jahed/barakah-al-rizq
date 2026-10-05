'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Store,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Clock,
  Building,
  User,
  Phone,
  Mail,
  FileText,
  MessageCircle,
} from 'lucide-react';
import { useWholesaleCart } from '@/context/WholesaleCartContext';

export const WholesaleCartDrawer: React.FC = () => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalCtn,
    totalAED,
    isValidMOQ,
    moqErrors,
    isCartOpen,
    closeCart,
    checkoutStep,
    setCheckoutStep,
    lastPlacedOrder,
    setLastPlacedOrder,
  } = useWholesaleCart();

  // Checkout form state
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pickupDate, setPickupDate] = useState(() => {
    // Default to tomorrow in YYYY-MM-DD
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState('24 Hours (Open 24/7 Store & Warehouse Pickup)');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!customerName.trim() || !phone.trim() || !email.trim()) {
      setSubmitError('Please complete all required customer details (Name, Phone, Email).');
      return;
    }

    if (!isValidMOQ) {
      setSubmitError('Cannot submit order: Some items do not meet the minimum order quantity (MOQ).');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/foodstuff/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName,
          companyName,
          phone,
          email,
          pickupDate,
          pickupTime,
          notes,
          items: items.map((it) => ({
            productId: it.productId,
            productName: it.productName,
            productArabicName: it.productArabicName,
            orderType: it.orderType,
            packagingUnit: it.packagingUnit,
            pricePerCtn: it.pricePerCtn,
            quantityCtn: it.quantityCtn,
            lineTotalAED: it.pricePerCtn * it.quantityCtn,
            image: it.image,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit order');
      }

      setLastPlacedOrder(data.order);
      setCheckoutStep('SUCCESS');
      clearCart();
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong while placing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isCartOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCart}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="w-screen max-w-md sm:max-w-xl bg-white text-[#111827] shadow-2xl flex flex-col justify-between"
          >
            {/* ========================================================= */}
            {/* DRAWER HEADER                                            */}
            {/* ========================================================= */}
            <div className="p-4 sm:p-5 border-b border-emerald-100 bg-[#063D24] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-bold">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base sm:text-lg font-black tracking-tight text-white uppercase font-mono">
                      Wholesale Order Cart
                    </h2>
                    {totalItems > 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-mono font-extrabold">
                        {totalCtn} CTN
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-emerald-200/90 font-mono">
                    Barakah Al Rizq Foodstuff Trading L.L.C • Dubai, UAE
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeCart}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                title="Close Cart"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* MANDATORY STORE PICKUP BANNER */}
            <div className="bg-amber-50 border-b border-amber-200/80 px-4 py-2.5 flex items-start gap-2 text-[#78350F]">
              <Store className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-tight font-sans">
                <strong className="font-bold text-amber-900 uppercase font-mono tracking-wide">
                  📍 Store Pickup Only
                </strong>{' '}
                — Orders are prepared for collection from our store &amp; warehouse in{' '}
                <strong>Al Aweer Central Fruit &amp; Vegetable Market, Ras Al Khor, Dubai</strong>. No delivery
                service is available.
              </div>
            </div>

            {/* ========================================================= */}
            {/* DRAWER BODY                                              */}
            {/* ========================================================= */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {/* ------------------------------------------------------- */}
              {/* STEP 1: CART ITEMS VIEW                                 */}
              {/* ------------------------------------------------------- */}
              {checkoutStep === 'CART' && (
                <>
                  {items.length === 0 ? (
                    <div className="text-center py-16 px-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                        <ShoppingBag className="w-8 h-8 opacity-75" />
                      </div>
                      <h3 className="text-lg font-bold text-[#063D24] mb-1">Your Wholesale Cart is Empty</h3>
                      <p className="text-xs text-gray-500 font-mono max-w-xs mx-auto mb-6">
                        Browse our produce catalog and add Container Wholesale or Dubai Wholesale lots to begin.
                      </p>
                      <button
                        type="button"
                        onClick={closeCart}
                        className="px-5 py-2.5 rounded-xl bg-[#063D24] text-white hover:bg-emerald-900 font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                      >
                        Explore Produce Rates
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {/* MOQ Warning Banner if any items violate */}
                      {moqErrors.length > 0 && (
                        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs space-y-1">
                          <div className="flex items-center gap-1.5 font-bold">
                            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                            <span>Minimum Order Quantity (MOQ) Requirement</span>
                          </div>
                          <ul className="list-disc pl-5 text-[11px] text-rose-800 space-y-0.5">
                            {moqErrors.map((err) => (
                              <li key={err.itemId}>{err.message}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Items List */}
                      {items.map((item) => {
                        const lineTotal = item.pricePerCtn * item.quantityCtn;
                        const isUnderMOQ = item.quantityCtn < item.moq;
                        const isContainer = item.orderType === 'CONTAINER';

                        return (
                          <div
                            key={item.id}
                            className={`p-3.5 rounded-2xl border transition-all ${
                              isUnderMOQ
                                ? 'bg-rose-50/50 border-rose-300'
                                : 'bg-[#F9FAF9] border-emerald-200 hover:border-emerald-300'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <div className="flex items-start gap-2.5">
                                {item.image && (
                                  <img
                                    src={item.image}
                                    alt={item.productName}
                                    className="w-12 h-12 rounded-xl object-cover border border-emerald-100 shrink-0 bg-slate-900"
                                  />
                                )}
                                <div>
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    <span
                                      className={`px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider ${
                                        isContainer
                                          ? 'bg-slate-900 text-amber-300'
                                          : 'bg-emerald-100 text-emerald-900'
                                      }`}
                                    >
                                      {isContainer ? '🔒 Container Wholesale' : '🏪 Dubai Wholesale'}
                                    </span>
                                    <span className="text-[9px] font-mono text-gray-500 font-semibold">
                                      MOQ: {item.moq} CTN
                                    </span>
                                  </div>
                                  <h4 className="text-xs sm:text-sm font-bold text-[#063D24] mt-0.5">
                                    {item.productName}
                                  </h4>
                                  {item.productArabicName && (
                                    <span className="font-arabic text-[10px] text-emerald-800">
                                      {item.productArabicName}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                                className="text-gray-400 hover:text-rose-600 transition-colors p-1"
                                title="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Quantity & Pricing Controls */}
                            <div className="pt-2 border-t border-emerald-100/80 flex items-center justify-between gap-2 flex-wrap">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-mono font-semibold text-gray-600">
                                  Dhs {item.pricePerCtn.toFixed(2)} / CTN
                                </span>
                              </div>

                              <div className="flex items-center gap-1.5 bg-white border border-emerald-200 rounded-xl p-1 shadow-xs">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      item.id,
                                      Math.max(
                                        0,
                                        item.quantityCtn - (isContainer ? 50 : 10)
                                      )
                                    )
                                  }
                                  className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
                                  title={`Decrease by ${isContainer ? 50 : 10} CTN`}
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>

                                <input
                                  type="number"
                                  value={item.quantityCtn}
                                  onChange={(e) =>
                                    updateQuantity(item.id, parseInt(e.target.value, 10) || 0)
                                  }
                                  min={1}
                                  className="w-16 text-center font-mono font-bold text-xs text-[#063D24] focus:outline-none bg-transparent"
                                />
                                <span className="text-[10px] font-mono text-gray-500 pr-1">CTN</span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      item.id,
                                      item.quantityCtn + (isContainer ? 50 : 10)
                                    )
                                  }
                                  className="w-7 h-7 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white flex items-center justify-center transition-colors"
                                  title={`Increase by ${isContainer ? 50 : 10} CTN`}
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <div className="text-right">
                                <span className="text-xs font-mono text-gray-500 block text-[9px]">
                                  Line Total
                                </span>
                                <span className="text-xs sm:text-sm font-black font-mono text-[#063D24]">
                                  Dhs {lineTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </span>
                              </div>
                            </div>

                            {/* Under MOQ warning */}
                            {isUnderMOQ && (
                              <div className="mt-2 text-[10px] font-mono text-rose-600 font-semibold flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3 shrink-0" />
                                <span>Below MOQ: Add {item.moq - item.quantityCtn} more CTN to meet minimum requirement.</span>
                              </div>
                            )}
                          </div>
                        );
                      })}

                      <div className="flex justify-end pt-1">
                        <button
                          type="button"
                          onClick={clearCart}
                          className="text-[11px] font-mono text-gray-500 hover:text-rose-600 transition-colors underline"
                        >
                          Clear Cart
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* ------------------------------------------------------- */}
              {/* STEP 2: CHECKOUT & PICKUP DETAILS FORM                  */}
              {/* ------------------------------------------------------- */}
              {checkoutStep === 'CHECKOUT' && (
                <form id="wholesale-order-form" onSubmit={handleSubmitOrder} className="space-y-4">
                  {/* Sticky compact order summary */}
                  <div className="p-3.5 rounded-2xl bg-[#F4F7F4] border border-emerald-200">
                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-emerald-200 text-xs">
                      <span className="font-bold text-[#063D24] uppercase font-mono tracking-wider">
                        Order Summary ({totalItems} lines)
                      </span>
                      <button
                        type="button"
                        onClick={() => setCheckoutStep('CART')}
                        className="text-emerald-700 hover:underline text-[10px] font-mono font-bold flex items-center gap-1"
                      >
                        <ArrowLeft className="w-3 h-3" /> Edit Cart
                      </button>
                    </div>

                    <div className="max-h-36 overflow-y-auto divide-y divide-emerald-100 text-xs font-mono pr-1">
                      {items.map((it) => (
                        <div key={it.id} className="py-1.5 flex items-center justify-between">
                          <div className="truncate max-w-[200px]">
                            <span className="font-bold text-[#063D24] block truncate">{it.productName}</span>
                            <span className="text-[10px] text-gray-500">
                              {it.quantityCtn} CTN × Dhs {it.pricePerCtn.toFixed(2)} ({it.orderType === 'CONTAINER' ? 'Container' : 'Dubai Spot'})
                            </span>
                          </div>
                          <span className="font-bold text-slate-900 shrink-0">
                            Dhs {(it.quantityCtn * it.pricePerCtn).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-emerald-200 mt-2 flex items-baseline justify-between font-mono">
                      <div>
                        <span className="text-[10px] text-gray-500 block uppercase">Total Quantity</span>
                        <strong className="text-xs text-slate-800">{totalCtn} CTN</strong>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-gray-500 block uppercase">Total Amount</span>
                        <strong className="text-base text-[#063D24] font-black">
                          Dhs {totalAED.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </strong>
                      </div>
                    </div>
                  </div>

                  {submitError && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Customer Information */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono font-bold text-[#063D24] uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Buyer &amp; Company Information</span>
                    </h3>

                    <div>
                      <label className="block text-[11px] font-mono text-gray-700 font-semibold mb-1">
                        Buyer Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Tariq Al Mansoori"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none bg-white font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-gray-700 font-semibold mb-1">
                        Company / Trade License Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Al Mansoori Foodstuff Trading L.L.C"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none bg-white font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-gray-700 font-semibold mb-1">
                          Phone / WhatsApp <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+971 50 123 4567"
                          className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none bg-white font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-gray-700 font-semibold mb-1">
                          Email Address <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="procurement@company.ae"
                          className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none bg-white font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Store Pickup Details */}
                  <div className="space-y-3 pt-2 border-t border-emerald-100">
                    <h3 className="text-xs font-mono font-bold text-[#063D24] uppercase tracking-wider flex items-center gap-1.5">
                      <Store className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Pickup Schedule &amp; Terms</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-gray-700 font-semibold mb-1">
                          Preferred Pickup Date <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={pickupDate}
                          onChange={(e) => setPickupDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none bg-white font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-gray-700 font-semibold mb-1">
                          Preferred Trading Window
                        </label>
                        <select
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none bg-white font-mono text-xs font-semibold text-emerald-950"
                        >
                          <option value="24 Hours (Open 24/7 Store & Warehouse Pickup)">24 Hours (Open 24/7 Store &amp; Warehouse Pickup)</option>
                          <option value="Morning Session (07:00 - 11:00)">Morning Session (07:00 - 11:00)</option>
                          <option value="Midday Session (12:00 - 16:00)">Midday Session (12:00 - 16:00)</option>
                          <option value="Evening Inbound (17:00 - 20:00)">Evening Inbound (17:00 - 20:00)</option>
                          <option value="Night Inbound (21:00 - 06:00)">Night Inbound (21:00 - 06:00)</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                      <div className="font-bold text-[#063D24] flex items-center gap-1 font-mono">
                        <Store className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Pickup Location</span>
                      </div>
                      <p className="text-[11px] text-gray-600">
                        Barakah Al Rizq Store &amp; Cold Storage, Al Aweer Central Fruit &amp; Vegetable Market, Ras Al Khor, Dubai, UAE.
                      </p>
                      <p className="text-[10px] text-gray-500 italic">
                        Container orders will receive a direct Port / Warehouse dispatch gate pass upon confirmation.
                      </p>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-gray-700 font-semibold mb-1">
                        Vehicle Plate / Gate Pass Notes / Instructions
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. 3-Ton Reefer Truck collecting, Driver Contact +971 55..."
                        className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none bg-white font-sans"
                      />
                    </div>
                  </div>
                </form>
              )}

              {/* ------------------------------------------------------- */}
              {/* STEP 3: ORDER SUCCESS CONFIRMATION                      */}
              {/* ------------------------------------------------------- */}
              {checkoutStep === 'SUCCESS' && lastPlacedOrder && (
                <div className="text-center py-6 px-2 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto border-2 border-emerald-300">
                    <CheckCircle2 className="w-10 h-10 text-emerald-700" />
                  </div>

                  <div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-mono text-xs font-bold uppercase tracking-wider inline-block mb-1.5">
                      Order Registered (Status: {lastPlacedOrder.status})
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#063D24] tracking-tight">
                      Order #{lastPlacedOrder.id}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
                      Thank you, <strong>{lastPlacedOrder.customerName}</strong>. Your wholesale pickup order has been recorded in our system.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-emerald-200 text-left font-mono text-xs space-y-2.5">
                    <div className="flex justify-between pb-2 border-b border-emerald-200">
                      <span className="text-gray-500">Total Lot Volume:</span>
                      <strong className="text-gray-900">{lastPlacedOrder.totalCtn} CTN</strong>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-emerald-200">
                      <span className="text-gray-500">Total Estimated:</span>
                      <strong className="text-[#063D24] text-sm font-black">
                        Dhs {lastPlacedOrder.totalAED.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </strong>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-emerald-200">
                      <span className="text-gray-500">Pickup Date:</span>
                      <strong className="text-gray-900">
                        {lastPlacedOrder.pickupDate} ({lastPlacedOrder.pickupTime})
                      </strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block text-[10px] mb-0.5">Pickup Location:</span>
                      <strong className="text-emerald-900 text-[11px] block leading-tight">
                        {lastPlacedOrder.pickupLocation}
                      </strong>
                    </div>
                  </div>

                  {/* WhatsApp Direct Confirmation Button */}
                  <a
                    href={`https://wa.me/971503735786?text=${encodeURIComponent(
                      `Hello Barakah Al Rizq Foodstuff Trading,\n\nI have placed Wholesale Pickup Order #${lastPlacedOrder.id}.\nCustomer: ${lastPlacedOrder.customerName}${lastPlacedOrder.companyName ? ` (${lastPlacedOrder.companyName})` : ''}\nPhone: ${lastPlacedOrder.phone}\nTotal Volume: ${lastPlacedOrder.totalCtn} CTN\nTotal: Dhs ${lastPlacedOrder.totalAED.toFixed(2)}\nPickup Date: ${lastPlacedOrder.pickupDate}\nPickup Location: Store Pickup (Al Aweer)\n\nPlease confirm availability and staging.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BE5C] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm Order on WhatsApp (+971 50 373 5786)</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setCheckoutStep('CART');
                      closeCart();
                    }}
                    className="w-full py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-mono text-xs font-bold transition-colors"
                  >
                    Close &amp; Back to Catalog
                  </button>
                </div>
              )}
            </div>

            {/* ========================================================= */}
            {/* DRAWER FOOTER                                            */}
            {/* ========================================================= */}
            {items.length > 0 && checkoutStep !== 'SUCCESS' && (
              <div className="p-4 sm:p-5 border-t border-emerald-100 bg-[#F9FAF9] space-y-3">
                {/* Cart Step Footer */}
                {checkoutStep === 'CART' && (
                  <>
                    <div className="flex items-baseline justify-between font-mono">
                      <div>
                        <span className="text-[10px] text-gray-500 block uppercase font-bold">Total Cartons</span>
                        <span className="text-sm font-extrabold text-slate-800">{totalCtn} CTN</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-gray-500 block uppercase font-bold">Total Amount</span>
                        <span className="text-xl sm:text-2xl font-black text-[#063D24]">
                          Dhs {totalAED.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={!isValidMOQ}
                      onClick={() => setCheckoutStep('CHECKOUT')}
                      className={`w-full py-3 px-4 rounded-xl font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all ${
                        isValidMOQ
                          ? 'bg-[#063D24] text-white hover:bg-emerald-900 hover:scale-[1.01]'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <span>PROCEED TO ORDER</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {!isValidMOQ && (
                      <p className="text-[10px] text-rose-600 font-mono text-center">
                        ⚠️ Please adjust quantities to meet Container (min 100 CTN) and Dubai Wholesale (min 10 CTN) MOQs.
                      </p>
                    )}
                  </>
                )}

                {/* Checkout Step Footer */}
                {checkoutStep === 'CHECKOUT' && (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep('CART')}
                      className="w-1/3 py-3 px-3 rounded-xl border border-gray-300 hover:bg-gray-100 text-gray-700 font-mono font-bold text-xs uppercase transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      form="wholesale-order-form"
                      disabled={isSubmitting}
                      className="w-2/3 py-3 px-4 rounded-xl bg-[#063D24] text-white hover:bg-emerald-900 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Processing Order...</span>
                      ) : (
                        <>
                          <span>SUBMIT PICKUP ORDER</span>
                          <CheckCircle2 className="w-4 h-4 text-amber-300" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
