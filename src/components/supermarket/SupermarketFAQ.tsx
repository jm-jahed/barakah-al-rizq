'use client';

import React, { useState } from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function SupermarketFAQ() {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      qEn: 'How fast is express delivery across Dubai and UAE?',
      qAr: 'ما هي سرعة التوصيل الفوري في دبي ومختلف إمارات الدولة؟',
      aEn: 'We dispatch all grocery orders via temperature-controlled chilled vans. For express delivery, orders arrive within 45 to 60 minutes across all major UAE residential and commercial zones.',
      aAr: 'يتم شحن كافة طلبات البقالة عبر سيارات مبردة ومجهزة بسلسلة تبريد حديثة. للتوصيل السريع، تصل الطلبات خلال 45 إلى 60 دقيقة في كافة المناطق السكنية والتجارية الرئيسية في الإمارات.',
    },
    {
      qEn: 'What is the minimum order for free delivery in AED?',
      qAr: 'ما هو الحد الأدنى للطلب للحصول على توصيل مجاني بالدرهم؟',
      aEn: 'Orders of AED 50.00 and above qualify for 100% FREE express delivery. Orders below AED 50 have a flat delivery fee of AED 10.00.',
      aAr: 'الطلبات بقيمة 50.00 درهماً فما فوق مؤهلة تلقائياً للتوصيل السريع المجاني بنسبة 100%. الطلبات الأقل من 50 درهماً تطبق عليها رسوم توصيل ثابتة بقيمة 10 دراهم فقط.',
    },
    {
      qEn: 'How are fresh meat, seafood, and dairy kept fresh during transit?',
      qAr: 'كيف تضمنون بقاء اللحوم والأسماك والألبان طازجة أثناء النقل؟',
      aEn: 'All chilled and frozen items are packed in insulated thermal coolers with medical-grade dry ice/ice packs inside refrigerated transit vehicles running at 2°C to 4°C.',
      aAr: 'تُحفظ كافة المنتجات المبردة والمجمدة داخل صناديق حرارية معزولة مع أكياس ثلج خاصة داخل سيارات توزيع مبردة بدرجة حرارة تتراوح بين 2 إلى 4 درجات مئوية.',
    },
    {
      qEn: 'What payment options are accepted?',
      qAr: 'ما هي وسائل وطرق الدفع المتاحة على المنصة؟',
      aEn: 'We support all major UAE credit/debit cards (Visa, Mastercard), Apple Pay, Google Pay, Tabby (split into 4 interest-free installments), and Cash/Card on Delivery.',
      aAr: 'نقبل بطاقات الائتمان والخصم المباشر (فيزا وماستركارد)، أبل باي، جوجل باي، تابي (تقسيط على 4 دفعات بدون فوائد)، بالإضافة إلى الدفع نقداً أو بالبطاقة عند الاستلام.',
    },
    {
      qEn: 'What is your freshness guarantee and refund policy?',
      qAr: 'ما هو ضمان الجودة الطازجة وسياسة الاسترجاع؟',
      aEn: 'If any produce or dairy item does not meet your expectations upon delivery, simply message our 24/7 WhatsApp support within 24 hours for an instant replacement or refund.',
      aAr: 'إذا لم تنل أي خضار أو لحوم أو ألبان رضاك التام عند الاستلام، ما عليك سوى مراسلة فريق الدعم عبر واتساب على مدار الساعة خلال 24 ساعة لاستبدالها أو استرجاع قيمتها فوراً.',
    },
  ];

  return (
    <section className="py-10 px-4 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isRtl ? 'إجابات مباشرة' : 'Help & Information'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight mb-1">
            {t('faqTitle')}
          </h2>
          <p className="text-xs text-zinc-500">
            {t('faqSubtitle')}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-start p-4 flex items-center justify-between gap-3 bg-zinc-50/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-white">
                    {isRtl ? faq.qAr : faq.qEn}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 bg-white dark:bg-zinc-950 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-zinc-800">
                    {isRtl ? faq.aAr : faq.aEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
