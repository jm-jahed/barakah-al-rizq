'use client';

import React, { useState } from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import {
  X,
  User,
  Package,
  MapPin,
  Settings,
  Clock,
  CheckCircle2,
  Truck,
  LogOut,
  ChevronRight
} from 'lucide-react';

export default function SupermarketAccountModal() {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const { isAccountOpen, setIsAccountOpen, orders } = useSupermarketCart();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses'>('orders');

  if (!isAccountOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/70 dark:bg-zinc-950/70">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm">
              AM
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-zinc-950 dark:text-white">
                {isRtl ? 'حساب المتسوق — سوق المرقاب' : 'Shopper Account — Al Mirqab'}
              </h3>
              <p className="text-[11px] text-zinc-400">
                Sultan Al Mansoori (+971 50 892 4110)
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAccountOpen(false)}
            aria-label="Close account modal"
            className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 px-4 bg-zinc-50/40 dark:bg-zinc-900/40">
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'orders'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>{isRtl ? 'سجل الطلبات' : 'Order History'} ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'addresses'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>{isRtl ? 'عناوين التوصيل' : 'Saved Addresses'}</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'profile'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            <span>{isRtl ? 'الملف الشخصي' : 'Profile Settings'}</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 max-h-[400px] overflow-y-auto">
          
          {/* ORDERS TAB */}
          {activeTab === 'orders' && (
            <div className="space-y-3">
              {orders.length > 0 ? (
                orders.map((ord) => (
                  <div
                    key={ord.id}
                    className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-mono font-bold text-xs text-emerald-600">{ord.id}</span>
                        <span className="text-[11px] text-zinc-400 mx-2">• {ord.date}</span>
                      </div>
                      <span className="text-[10px] font-black bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Truck className="w-3 h-3" />
                        {ord.status}
                      </span>
                    </div>

                    <div className="text-xs text-zinc-600 dark:text-zinc-300">
                      {ord.items.length} {isRtl ? 'منتجات بقالة' : 'grocery items'} • {ord.slot}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-zinc-700 text-xs">
                      <span className="text-zinc-500">{ord.address}</span>
                      <span className="font-black text-zinc-950 dark:text-white">AED {ord.total.toFixed(2)}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <Package className="w-10 h-10 text-zinc-400 mx-auto mb-2" />
                  <p className="text-xs text-zinc-500">
                    {isRtl ? 'لا توجد طلبات سابقة حتى الآن' : 'No previous orders yet.'}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ADDRESSES TAB */}
          {activeTab === 'addresses' && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/80 border border-emerald-500/50 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-600">
                    {isRtl ? 'العنوان الافتراضي (المنزل)' : 'Default Address (Home)'}
                  </span>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5 rounded font-bold">
                    Primary
                  </span>
                </div>
                <p className="text-xs font-bold text-zinc-900 dark:text-white">
                  Villa 14, Al Safa 2, Jumeirah, Dubai
                </p>
                <p className="text-[11px] text-zinc-400">+971 50 892 4110</p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 space-y-1">
                <span className="text-xs font-black text-zinc-700 dark:text-zinc-300">
                  {isRtl ? 'العمل / المكتب' : 'Office'}
                </span>
                <p className="text-xs font-bold text-zinc-900 dark:text-white">
                  Tower 2, Level 18, Dubai Media City
                </p>
                <p className="text-[11px] text-zinc-400">+971 4 450 9988</p>
              </div>
            </div>
          )}

          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-zinc-700 dark:text-zinc-300">{t('fullName')}</label>
                <input
                  type="text"
                  defaultValue="Sultan Al Mansoori"
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-zinc-900 dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-zinc-700 dark:text-zinc-300">{t('phone')}</label>
                <input
                  type="text"
                  defaultValue="+971 50 892 4110"
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-zinc-900 dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-zinc-700 dark:text-zinc-300">Email</label>
                <input
                  type="email"
                  defaultValue="sultan.almansoori@mirqab-demo.ae"
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-zinc-900 dark:text-white"
                />
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
