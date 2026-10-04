'use client';

import React from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function SupermarketReviews() {
  const { lang, isRtl, t } = useSupermarketLanguage();

  const reviews = [
    {
      name: 'Fatima Al Kaabi',
      nameAr: 'فاطمة الكعبي',
      location: 'Dubai Marina & JBR',
      locationAr: 'دبي مارينا وجي بي آر',
      rating: 5,
      commentEn: 'The greenhouse tomatoes and cucumbers arrived completely crisp and cool. Delivery took only 48 minutes to our apartment in Dubai Marina.',
      commentAr: 'الخضار واللحوم وصلت طازجة ومبردة تماماً وكأنني تسوقت بنفسي من المزرعة. التوصيل استغرق 48 دقيقة فقط إلى شقتنا في مارينا دبي.',
    },
    {
      name: 'Tariq Al Zaabi',
      nameAr: 'طارق الزعابي',
      location: 'Abu Dhabi — Al Reem Island',
      locationAr: 'أبوظبي — جزيرة الريم',
      rating: 5,
      commentEn: 'The weekly family basket saved us around 30 Dirhams compared to local high-street supermarkets. Fantastic bilingual website that feels super fast.',
      commentAr: 'سلة التوفير الأسبوعية وفرت لنا أكثر من 30 درهماً مقارنة بأسعار المحلات التجارية العادية. الموقع سريع جداً والترجمة العربية ممتازة.',
    },
    {
      name: 'Sarah & Rashid',
      nameAr: 'سارة وراشد المهيري',
      location: 'Sharjah — Al Majaz',
      locationAr: 'الشارقة — المجاز',
      rating: 5,
      commentEn: 'Exceptional butchery and fresh local seafood. Everything was cleaned, sealed and packed in iced insulated boxes. 10/10 service.',
      commentAr: 'قسم الملحمة والأسماك ممتاز جداً ونظيف. وصلت الطلبات في صناديق معزولة بالثلج للحفاظ على الجودة. خدمة راقية تستحق 10 من 10.',
    },
  ];

  return (
    <section className="py-10 px-4 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight mb-1">
            {t('reviewsTitle')}
          </h2>
          <p className="text-xs text-zinc-500">
            {t('reviewsSubtitle')}
          </p>
        </div>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                  &ldquo;{isRtl ? rev.commentAr : rev.commentEn}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-zinc-900 dark:text-white">
                    {isRtl ? rev.nameAr : rev.name}
                  </h4>
                  <p className="text-[10px] text-zinc-400">
                    {isRtl ? rev.locationAr : rev.location}
                  </p>
                </div>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
