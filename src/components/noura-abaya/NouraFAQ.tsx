'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

export const NouraFAQ: React.FC = () => {
  const { t, isRtl } = useNouraLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = isRtl
    ? [
        {
          question: 'ما هي سرعة توصيل الطلبات في مختلف إمارات الدولة؟',
          answer: 'نوفر خدمة التوصيل السريع في نفس اليوم داخل دبي والشارقة للطلبات المسجلة قبل الساعة 2:00 ظهراً. بينما يتم التوصيل إلى أبوظبي، عجمان، العين، رأس الخيمة، الفجيرة، وأم القيوين خلال 24 ساعة بعناية تامة.'
        },
        {
          question: 'هل تشمل كل عباية طرحة (شيلة) متطابقة مجاناً؟',
          answer: 'نعم بالتأكيد! تأتي كل عباية من دار نورة مصحوبة بطرحة فاخرة متطابقة تماماً من قماش الشيفون الكوري الفاخر أو النيدو الياباني مع حواف مطابقة للون وتطريز العباية مجاناً.'
        },
        {
          question: 'هل يمكنني طلب تعديل خاص على الطول أو المقاسات؟',
          answer: 'نعم بكل سرور. يمكنكِ تحديد الطول المناسب لكِ بدقة (من 50 إلى 62 بوصة) وإضافة أي ملاحظات للتفصيل مباشرة أثناء الطلب أو عبر استوديو التفصيل المخصص، أو حجز موعد خاص في أتيليه دبي.'
        },
        {
          question: 'ما هي خيارات وطرق الدفع المتاحة داخل الإمارات؟',
          answer: 'نقبل جميع البطاقات الائتمانية والبنكية الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، أبل باي (Apple Pay)، تقسيط تابي على 4 دفعات ميسرة بدون أي فوائد، بالإضافة إلى خيار الدفع نقداً عند الاستلام.'
        },
        {
          question: 'ما هي سياسة الاستبدال والاسترجاع؟',
          answer: 'نضمن لكِ تجربة تسوق راقية ومريحة مع خدمة الاستبدال المنزلي السهل خلال 7 أيام في كافة إمارات الدولة السبع، حيث يقوم مندوبنا باستلام القطعة مباشرة من باب منزلك.'
        }
      ]
    : [
        {
          question: 'How fast is delivery across the UAE Emirates?',
          answer: 'We offer Same-Day Express Delivery across Dubai & Sharjah for orders placed before 2:00 PM. Deliveries to Abu Dhabi, Ajman, RAK, Fujairah, and Umm Al Quwain arrive within 24 hours.'
        },
        {
          question: 'Is a matching Sheila (headscarf) included with each abaya?',
          answer: 'Yes! Every NOURA ABAYA includes a complimentary, color-matched luxury Sheila crafted from matching chiffon or Nida fabric with coordinated edge piping.'
        },
        {
          question: 'Can I request custom length adjustments or bespoke measurements?',
          answer: 'Yes. You can customize your exact length (50" to 62") directly via our online Bespoke Studio or book a private fitting consultation at our Dubai Design District (d3) Atelier.'
        },
        {
          question: 'What payment options are available?',
          answer: 'We accept all major credit/debit cards (Visa, MasterCard, Amex), Apple Pay, Tabby (split into 4 interest-free payments), and Cash on Delivery (COD) across the UAE.'
        },
        {
          question: 'What is your exchange and return policy in the UAE?',
          answer: 'We offer hassle-free 7-day doorstep exchanges across all 7 Emirates. Our courier will pick up the item directly from your home or office.'
        }
      ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0A0A0A] relative border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#121212] border border-[#C5A059]/30">
            {isRtl ? 'خدمة العملاء والأسئلة الشائعة' : 'BOUTIQUE CLIENT CARE FAQ'}
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4">
            {t('faqSectionTitle')}
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            {t('faqSectionSubtitle')}
          </p>
        </div>

        <div className="space-y-4 font-sans">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.question}
                className="bg-[#121212] rounded-2xl border border-stone-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left rtl:text-right flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#FAFAFA] hover:text-[#C5A059] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C5A059] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-stone-300 font-light leading-relaxed border-t border-stone-800 pt-4 font-sans text-left rtl:text-right"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
