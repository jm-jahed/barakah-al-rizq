'use client';

import React, { useState } from 'react';
import { 
  MessageSquare, 
  X, 
  FileCheck2, 
  CreditCard, 
  Briefcase, 
  Building, 
  Globe2, 
  HelpCircle,
  ArrowUpRight
} from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface FloatingWhatsAppConciergeProps {
  lang: Language;
}

export default function FloatingWhatsAppConcierge({ lang }: FloatingWhatsAppConciergeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isAr = lang === 'ar';

  const topics = [
    {
      id: 'visa',
      labelEn: 'Visa & Residency Inquiry',
      labelAr: 'استفسار عن التأشيرات والإقامة',
      msg: 'Hello Sanad, I need help with UAE Visa / Residency application.'
    },
    {
      id: 'eid',
      labelEn: 'Emirates ID Typing & Biometrics',
      labelAr: 'تجديد / إصدار الهوية الإماراتية والبصمة',
      msg: 'Hello Sanad, I need assistance with Emirates ID typing and biometric booking.'
    },
    {
      id: 'tasheel',
      labelEn: 'Labour Permit / Tasheel',
      labelAr: 'تصاريح العمل وعقود تسهيل',
      msg: 'Hello Sanad, I have an inquiry regarding MOHRE / Tasheel labour permits.'
    },
    {
      id: 'pro',
      labelEn: 'Corporate Business / PRO',
      labelAr: 'خدمات الشركات والعلاقات العامة',
      msg: 'Hello Sanad, I would like to discuss corporate PRO services for my company.'
    },
    {
      id: 'translation',
      labelEn: 'Legal Translation & MOFA',
      labelAr: 'ترجمة قانونية وتصديقات الخارجية',
      msg: 'Hello Sanad, I need legal translation and MOFA attestation for my documents.'
    }
  ];

  const handleOpenChat = (msg: string) => {
    window.open(`https://wa.me/971507719900?text=${encodeURIComponent(msg)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 flex flex-col items-end rtl:items-start space-y-3">
      
      {/* Expanded Quick Options Menu */}
      {isOpen && (
        <div className="w-80 rounded-3xl bg-[#072617] border border-amber-500/30 p-5 shadow-2xl shadow-emerald-950/50 backdrop-blur-xl animate-fadeIn space-y-3">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-xs text-white">
                {isAr ? 'المساعد الفوري عبر واتساب' : 'WhatsApp Concierge Desk'}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-400">
            {isAr ? 'اختر نوع المعاملة لفتح محادثة مباشرة مع مستشارينا:' : 'Select your transaction to initiate direct priority WhatsApp messaging:'}
          </p>

          <div className="space-y-1.5">
            {topics.map((t) => (
              <button
                key={t.id}
                onClick={() => handleOpenChat(t.msg)}
                className="w-full p-2.5 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 hover:border-emerald-500/30 border border-slate-800/80 text-left rtl:text-right flex items-center justify-between text-xs font-medium text-slate-200 hover:text-emerald-300 transition-all cursor-pointer group"
              >
                <span>{isAr ? t.labelAr : t.labelEn}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-500 text-center font-mono">
            {isAr ? 'متاح 24/7 للرد السريع' : 'Available 24/7 for Express Inquiries'}
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 font-black text-xs shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Open WhatsApp Concierge"
      >
        <MessageSquare className="w-5 h-5 text-slate-950" />
        <span className="hidden sm:inline font-mono uppercase tracking-wider">
          {isAr ? 'مساعدة واتساب الفورية' : 'Chat on WhatsApp'}
        </span>
      </button>

    </div>
  );
}
