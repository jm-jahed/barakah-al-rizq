'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlavorsBranch } from '@/data/flavorsData';
import { formatBDT, FlavorsProduct } from '@/data/flavorsCatalogData';
import { CartItem } from '@/app/projects/flavors/page';

interface FlavorsCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  selectedBranch: FlavorsBranch | null;
  onChangeBranch: () => void;
  onCheckout: (fulfillment: FulfillmentData) => void;
}

export interface FulfillmentData {
  method: 'delivery' | 'pickup';
  // Delivery fields
  name?: string;
  phone?: string;
  address?: string;
  area?: string;
  deliveryDate?: string;
  deliveryTime?: string;
  instructions?: string;
  // Pickup fields
  pickupDate?: string;
  pickupTime?: string;
}

const DHAKA_AREAS = ['Gulshan','Banani','Baridhara','Bashundhara','Uttara','Dhanmondi','Mohammadpur','Mirpur','Motijheel','Old Dhaka','Rampura','Badda','Malibagh','Shantinagar','Tejgaon','Mohakhali','Kafrul','Adabar','Shyamoli','Lalmatia','Narayanganj','Other'];
const TIME_SLOTS = ['9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM'];

function getNextDays(count: number): string[] {
  const days: string[] = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(); d.setDate(d.getDate() + i);
    days.push(d.toLocaleDateString('en-BD', { weekday: 'short', month: 'short', day: 'numeric' }));
  }
  return days;
}

export const FlavorsCartDrawer: React.FC<FlavorsCartDrawerProps> = ({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, selectedBranch, onChangeBranch, onCheckout }) => {
  const [step, setStep] = useState<'cart' | 'fulfillment' | 'confirm'>('cart');
  const [method, setMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [form, setForm] = useState<FulfillmentData>({ method: 'delivery' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const subtotal = cartItems.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const deliveryFee = method === 'delivery' ? (selectedBranch?.deliveryFee ?? 100) : 0;
  const total = subtotal + deliveryFee;
  const days = getNextDays(7);

  const setField = (key: keyof FulfillmentData, val: string) => {
    setForm(f => ({ ...f, [key]: val }));
    setErrors(e => { const n = {...e}; delete n[key]; return n; });
  };

  const validateDelivery = () => {
    const e: Record<string, string> = {};
    if (!form.name?.trim()) e.name = 'Name is required';
    if (!form.phone?.trim()) e.phone = 'Phone is required';
    if (!form.address?.trim()) e.address = 'Delivery address is required';
    if (!form.area) e.area = 'Please select an area';
    if (!form.deliveryDate) e.deliveryDate = 'Please select a delivery date';
    if (!form.deliveryTime) e.deliveryTime = 'Please select a delivery time';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validatePickup = () => {
    const e: Record<string, string> = {};
    if (!form.pickupDate) e.pickupDate = 'Please select a pickup date';
    if (!form.pickupTime) e.pickupTime = 'Please select a pickup time';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleProceed = () => {
    const valid = method === 'delivery' ? validateDelivery() : validatePickup();
    if (valid) { setStep('confirm'); }
  };

  const handlePlaceOrder = () => {
    onCheckout({ ...form, method });
    setStep('cart');
    onClose();
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%', padding: '10px 14px', background: '#1a2e1f', border: `1px solid ${errors[field] ? '#e05a7c' : 'rgba(255,255,255,0.1)'}`, borderRadius: '10px', color: '#ffffff', fontSize: '14px', outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box', colorScheme: 'dark',
  });

  const labelStyle: React.CSSProperties = { fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginBottom: '6px', display: 'block', fontWeight: 500, letterSpacing: '0.3px' };
  const errStyle: React.CSSProperties = { fontSize: '11px', color: '#e05a7c', marginTop: '4px' };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 1500 }} onClick={onClose} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%', maxWidth: '480px', background: '#0f1f14', borderLeft: '1px solid rgba(245,197,24,0.15)', zIndex: 1600, display: 'flex', flexDirection: 'column', fontFamily: 'Inter, system-ui, sans-serif', overflowY: 'auto' }}
          >
            {/* Header */}
            <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff' }}>
                  {step === 'cart' && `Cart (${cartItems.reduce((s, i) => s + i.quantity, 0)} items)`}
                  {step === 'fulfillment' && 'Delivery & Pickup'}
                  {step === 'confirm' && 'Order Summary'}
                </div>
                {step !== 'cart' && (
                  <button onClick={() => setStep(step === 'confirm' ? 'fulfillment' : 'cart')} style={{ fontSize: '12px', color: '#f5c518', background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginTop: '2px' }}>← Back</button>
                )}
              </div>
              <button onClick={onClose} style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: 'none', color: '#ffffff', cursor: 'pointer', fontSize: '16px' }}>✕</button>
            </div>

            {/* Branch strip */}
            {selectedBranch && (
              <div style={{ background: 'rgba(245,197,24,0.06)', borderBottom: '1px solid rgba(245,197,24,0.1)', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                <div>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.5px' }}>SELECTED BRANCH</span>
                  <div style={{ fontSize: '13px', color: '#f5c518', fontWeight: 600, marginTop: '1px' }}>📍 {selectedBranch.name}</div>
                </div>
                <button onClick={onChangeBranch} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '5px 10px', cursor: 'pointer' }}>Change</button>
              </div>
            )}

            {/* ─── STEP 1: CART ─── */}
            {step === 'cart' && (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
                  {cartItems.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '60px 20px', color: 'rgba(255,255,255,0.4)' }}>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>🛒</div>
                      <div style={{ fontSize: '16px', marginBottom: '8px' }}>Your cart is empty</div>
                      <div style={{ fontSize: '13px' }}>Add items from the menu to get started</div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {cartItems.map(item => (
                        <div key={item.product.id} style={{ display: 'flex', gap: '12px', padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', alignItems: 'center' }}>
                          <img src={item.product.images[0]} alt={item.product.name} style={{ width: '56px', height: '56px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.product.name}</div>
                            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>{item.product.weight}</div>
                            {item.note && <div style={{ fontSize: '11px', color: 'rgba(245,197,24,0.6)', marginTop: '3px', fontStyle: 'italic' }}>📝 {item.note}</div>}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0', background: 'rgba(255,255,255,0.06)', borderRadius: '8px', overflow: 'hidden' }}>
                                <button onClick={() => onUpdateQty(item.product.id, -1)} style={{ width: '28px', height: '28px', background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', fontSize: '14px' }}>−</button>
                                <span style={{ width: '28px', textAlign: 'center', fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>{item.quantity}</span>
                                <button onClick={() => onUpdateQty(item.product.id, 1)} style={{ width: '28px', height: '28px', background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', fontSize: '14px' }}>+</button>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '14px', fontWeight: 700, color: '#f5c518' }}>{formatBDT(item.product.price * item.quantity)}</span>
                                <button onClick={() => onRemoveItem(item.product.id)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: '14px' }}>🗑</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {cartItems.length > 0 && (
                  <div style={{ padding: '16px 20px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Subtotal</span>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>{formatBDT(subtotal)}</span>
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>Delivery fee calculated at checkout</div>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setStep('fulfillment')} style={{ width: '100%', padding: '15px', background: 'linear-gradient(135deg, #f5c518, #e6a800)', border: 'none', borderRadius: '12px', color: '#0a1f12', fontSize: '15px', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.3px' }}>
                      PROCEED TO CHECKOUT
                    </motion.button>
                  </div>
                )}
              </div>
            )}

            {/* ─── STEP 2: FULFILLMENT ─── */}
            {step === 'fulfillment' && (
              <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
                {/* Method toggle */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Fulfillment Method</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {(['delivery', 'pickup'] as const).map(m => (
                      <button key={m} onClick={() => { setMethod(m); setErrors({}); }} style={{ padding: '16px 12px', background: method === m ? 'rgba(245,197,24,0.1)' : 'rgba(255,255,255,0.04)', border: `2px solid ${method === m ? '#f5c518' : 'rgba(255,255,255,0.08)'}`, borderRadius: '12px', cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s' }}>
                        <div style={{ fontSize: '22px', marginBottom: '6px' }}>{m === 'delivery' ? '🚚' : '🏪'}</div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: method === m ? '#f5c518' : '#ffffff' }}>{m === 'delivery' ? 'Delivery' : 'Pick Up'}</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>{m === 'delivery' ? `৳${selectedBranch?.deliveryFee ?? 100} fee` : 'Free'}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Delivery form */}
                {method === 'delivery' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ background: 'rgba(76,175,125,0.06)', border: '1px solid rgba(76,175,125,0.15)', borderRadius: '10px', padding: '10px 14px', fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
                      🚚 Delivering from <strong style={{ color: '#f5c518' }}>{selectedBranch?.name}</strong> to your address.
                      Estimated: <strong style={{ color: '#ffffff' }}>{selectedBranch?.estimatedDelivery}</strong>
                    </div>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input type="text" placeholder="Your full name" value={form.name ?? ''} onChange={e => setField('name', e.target.value)} style={inputStyle('name')} />
                      {errors.name && <div style={errStyle}>{errors.name}</div>}
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number *</label>
                      <input type="tel" placeholder="+880 1700-000000" value={form.phone ?? ''} onChange={e => setField('phone', e.target.value)} style={inputStyle('phone')} />
                      {errors.phone && <div style={errStyle}>{errors.phone}</div>}
                    </div>
                    <div>
                      <label style={labelStyle}>Delivery Address *</label>
                      <textarea placeholder="House number, road, floor..." value={form.address ?? ''} onChange={e => setField('address', e.target.value)} rows={2} style={{ ...inputStyle('address'), resize: 'vertical' }} />
                      {errors.address && <div style={errStyle}>{errors.address}</div>}
                    </div>
                    <div>
                      <label style={labelStyle}>Area *</label>
                      <select value={form.area ?? ''} onChange={e => setField('area', e.target.value)} style={inputStyle('area')}>
                        <option value="">Select area</option>
                        {DHAKA_AREAS.map(a => <option key={a} value={a}>{a}</option>)}
                      </select>
                      {errors.area && <div style={errStyle}>{errors.area}</div>}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div>
                        <label style={labelStyle}>Delivery Date *</label>
                        <select value={form.deliveryDate ?? ''} onChange={e => setField('deliveryDate', e.target.value)} style={inputStyle('deliveryDate')}>
                          <option value="">Select date</option>
                          {days.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                        {errors.deliveryDate && <div style={errStyle}>{errors.deliveryDate}</div>}
                      </div>
                      <div>
                        <label style={labelStyle}>Delivery Time *</label>
                        <select value={form.deliveryTime ?? ''} onChange={e => setField('deliveryTime', e.target.value)} style={inputStyle('deliveryTime')}>
                          <option value="">Select time</option>
                          {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        {errors.deliveryTime && <div style={errStyle}>{errors.deliveryTime}</div>}
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Delivery Instructions (optional)</label>
                      <textarea placeholder="e.g. Ring bell 3 times, leave at gate..." value={form.instructions ?? ''} onChange={e => setField('instructions', e.target.value)} rows={2} style={{ ...inputStyle('instructions'), resize: 'vertical' }} />
                    </div>
                  </div>
                )}

                {/* Pickup form */}
                {method === 'pickup' && selectedBranch && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {/* Branch info card */}
                    <div style={{ background: 'rgba(245,197,24,0.05)', border: '1px solid rgba(245,197,24,0.15)', borderRadius: '12px', padding: '16px' }}>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#f5c518', marginBottom: '8px' }}>📍 {selectedBranch.name}</div>
                      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{selectedBranch.address}</div>
                      <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>🕒 Weekdays: {selectedBranch.hours.weekdays}</div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>🕒 Weekends: {selectedBranch.hours.weekends}</div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>📞 {selectedBranch.phone}</div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>⏱ Prep time: ~30–60 min after order confirmation</div>
                      </div>
                    </div>
                    <div style={{ background: 'rgba(76,175,125,0.06)', border: '1px solid rgba(76,175,125,0.12)', borderRadius: '10px', padding: '10px 14px', fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
                      🏪 Your order will be prepared at this FLAVORS branch and will be ready for collection.
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div>
                        <label style={labelStyle}>Pickup Date *</label>
                        <select value={form.pickupDate ?? ''} onChange={e => setField('pickupDate', e.target.value)} style={inputStyle('pickupDate')}>
                          <option value="">Select date</option>
                          {days.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                        {errors.pickupDate && <div style={errStyle}>{errors.pickupDate}</div>}
                      </div>
                      <div>
                        <label style={labelStyle}>Pickup Time *</label>
                        <select value={form.pickupTime ?? ''} onChange={e => setField('pickupTime', e.target.value)} style={inputStyle('pickupTime')}>
                          <option value="">Select time</option>
                          {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        {errors.pickupTime && <div style={errStyle}>{errors.pickupTime}</div>}
                      </div>
                    </div>
                  </div>
                )}

                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleProceed} style={{ width: '100%', marginTop: '24px', padding: '15px', background: 'linear-gradient(135deg, #f5c518, #e6a800)', border: 'none', borderRadius: '12px', color: '#0a1f12', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>
                  REVIEW ORDER →
                </motion.button>
              </div>
            )}

            {/* ─── STEP 3: CONFIRM ─── */}
            {step === 'confirm' && (
              <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
                {/* Branch + Method summary */}
                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px', marginBottom: '16px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                    FLAVORS — {selectedBranch?.shortName} Branch
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ padding: '5px 12px', background: method === 'delivery' ? 'rgba(76,175,125,0.12)' : 'rgba(245,197,24,0.1)', border: `1px solid ${method === 'delivery' ? 'rgba(76,175,125,0.25)' : 'rgba(245,197,24,0.25)'}`, borderRadius: '20px', fontSize: '12px', fontWeight: 600, color: method === 'delivery' ? '#4caf7d' : '#f5c518' }}>
                      {method === 'delivery' ? '🚚 Delivery' : '🏪 Pick Up From Store'}
                    </span>
                  </div>

                  {method === 'delivery' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>
                      <div><strong style={{ color: '#ffffff' }}>Name:</strong> {form.name}</div>
                      <div><strong style={{ color: '#ffffff' }}>Phone:</strong> {form.phone}</div>
                      <div><strong style={{ color: '#ffffff' }}>Address:</strong> {form.address}, {form.area}</div>
                      <div><strong style={{ color: '#ffffff' }}>Delivery:</strong> {form.deliveryDate} · {form.deliveryTime}</div>
                      {form.instructions && <div><strong style={{ color: '#ffffff' }}>Instructions:</strong> {form.instructions}</div>}
                    </div>
                  )}

                  {method === 'pickup' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>
                      <div><strong style={{ color: '#ffffff' }}>Branch:</strong> {selectedBranch?.name}</div>
                      <div><strong style={{ color: '#ffffff' }}>Address:</strong> {selectedBranch?.address}</div>
                      <div><strong style={{ color: '#ffffff' }}>Pickup:</strong> {form.pickupDate} · {form.pickupTime}</div>
                    </div>
                  )}
                </div>

                {/* Items */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', padding: '14px', marginBottom: '16px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Order Items</div>
                  {cartItems.map(item => (
                    <div key={item.product.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <div>
                        <span style={{ fontSize: '13px', color: '#ffffff' }}>{item.product.name}</span>
                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginLeft: '6px' }}>× {item.quantity}</span>
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#f5c518' }}>{formatBDT(item.product.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                {/* Price summary */}
                <div style={{ background: 'rgba(245,197,24,0.05)', border: '1px solid rgba(245,197,24,0.12)', borderRadius: '14px', padding: '16px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                    <span>Subtotal</span><span style={{ fontWeight: 600, color: '#ffffff' }}>{formatBDT(subtotal)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                    <span>{method === 'delivery' ? 'Delivery Fee' : 'Pickup Fee'}</span>
                    <span style={{ fontWeight: 600, color: method === 'pickup' ? '#4caf7d' : '#ffffff' }}>{method === 'pickup' ? 'Free ৳0' : formatBDT(deliveryFee)}</span>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(245,197,24,0.15)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 800 }}>
                    <span style={{ color: '#ffffff' }}>Total</span>
                    <span style={{ color: '#f5c518' }}>{formatBDT(total)}</span>
                  </div>
                  <div style={{ marginTop: '6px', fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>Currency: BDT / ৳ Bangladeshi Taka</div>
                </div>

                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handlePlaceOrder} style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg, #f5c518, #e6a800)', border: 'none', borderRadius: '12px', color: '#0a1f12', fontSize: '16px', fontWeight: 800, cursor: 'pointer', letterSpacing: '0.3px' }}>
                  PLACE ORDER · {formatBDT(total)}
                </motion.button>
                <div style={{ marginTop: '12px', textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
                  Our team will confirm your order via WhatsApp/phone call
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
