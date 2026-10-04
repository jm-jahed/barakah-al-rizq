import React from 'react';
import { ShieldCheck, Award, Phone, Mail } from 'lucide-react';
import { AlSultanLogo } from './AlSultanLogo';
import { useRestaurantLanguage } from '@/context/RestaurantLanguageContext';

export const RestaurantFooter: React.FC = () => {
  const { t, isRtl, toArabicDigits } = useRestaurantLanguage();

  return (
    <footer id="locations" className="bg-zinc-950 border-t border-amber-900/30 text-zinc-400 font-sans text-xs">
      
      {/* Upper Salon Locations Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* DIFC Salon */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="flex items-center justify-between text-zinc-200">
              <h4 className="font-serif font-bold text-sm text-amber-200">{t('footer_difc_title')}</h4>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">{t('open_daily')}</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              {t('footer_difc_address')}
            </p>
            <div className="text-[11px] text-zinc-500 font-mono space-y-1">
              <div>{t('footer_difc_lunch')}</div>
              <div>{t('footer_difc_dinner')}</div>
              <div>{t('footer_difc_valet')}</div>
            </div>
          </div>

          {/* Palm Jumeirah Salon */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="flex items-center justify-between text-zinc-200">
              <h4 className="font-serif font-bold text-sm text-amber-200">{t('footer_palm_title')}</h4>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">{t('open_daily')}</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              {t('footer_palm_address')}
            </p>
            <div className="text-[11px] text-zinc-500 font-mono space-y-1">
              <div>{t('footer_palm_sunset')}</div>
              <div>{t('footer_palm_degustation')}</div>
              <div>{t('footer_palm_docking')}</div>
            </div>
          </div>

          {/* Downtown Salon */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="flex items-center justify-between text-zinc-200">
              <h4 className="font-serif font-bold text-sm text-amber-200">{t('footer_downtown_title')}</h4>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60">{t('by_reservation')}</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              {t('footer_downtown_address')}
            </p>
            <div className="text-[11px] text-zinc-500 font-mono space-y-1">
              <div>{t('footer_downtown_omakase')}</div>
              <div>{t('footer_downtown_majlis')}</div>
              <div>{t('footer_downtown_skyline')}</div>
            </div>
          </div>

        </div>
      </div>

      {/* Middle Links & Compliance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <AlSultanLogo size="md" />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mt-3">
              {t('footer_brand_desc')}
            </p>
            
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono text-xs">{isRtl ? '٩٧١ ٤ ٨٨٨ ٧٧٧٧+ / ٩٧١ ٥٠ ٨٨٨ ٩٩٩٩+' : '+971 4 888 7777 / +971 50 888 9999'}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono text-xs">concierge@alsultan-dubai.ae</span>
              </div>
            </div>
          </div>

          {/* Column 2: 8 Disciplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-zinc-200">
              {t('footer_disciplines_title')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#menu-catalog" className="hover:text-amber-300">{isRtl ? 'التراث الإماراتي الملكي' : 'Royal Emirati Heritage'}</a></li>
              <li><a href="#menu-catalog" className="hover:text-amber-300">{isRtl ? 'فنون الطهي الفرنسي الراقي' : 'French Haute Cuisine'}</a></li>
              <li><a href="#menu-catalog" className="hover:text-amber-300">{isRtl ? 'أوماكاسي واغيو A5 الياباني' : 'Japanese A5 Wagyu Omakase'}</a></li>
              <li><a href="#menu-catalog" className="hover:text-amber-300">{isRtl ? 'مأكولات البحر الأبيض المتوسط' : 'Mediterranean Shellfish Bar'}</a></li>
              <li><a href="#menu-catalog" className="hover:text-amber-300">{isRtl ? 'كافيار بيلوغا الملكي الإمبراطوري' : 'Royal Beluga Caviar Flights'}</a></li>
              <li><a href="#menu-catalog" className="hover:text-amber-300">{isRtl ? 'شرائح لحم معتقة ٤٥ يوماً' : '45-Day Dry-Aged Steaks'}</a></li>
              <li><a href="#menu-catalog" className="hover:text-amber-300">{isRtl ? 'مقهى الزعفران الفاخر عيار ٢٤' : '24K Saffron Haute Café'}</a></li>
            </ul>
          </div>

          {/* Column 3: Private Experiences */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-zinc-200">
              {t('footer_private_title')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#private-dining-estimator" className="hover:text-amber-300">{isRtl ? 'حاسبة الولائم والمجالس الخاصة' : 'Private Banqueting Simulator'}</a></li>
              <li><a href="#private-dining-estimator" className="hover:text-amber-300">{isRtl ? 'حجز صالون الكريستال بمركز دبي المالي' : 'DIFC Crystal Salon Booking'}</a></li>
              <li><a href="#private-dining-estimator" className="hover:text-amber-300">{isRtl ? 'مجلس شرفة نخلة جميرا البحرية' : 'Palm Sea Terrace Majlis'}</a></li>
              <li><a href="#private-dining-estimator" className="hover:text-amber-300">{isRtl ? 'ضيافة اليخوت الفارهة لكبار الشخصيات' : 'VIP Superyacht Catering'}</a></li>
              <li><a href="#private-dining-estimator" className="hover:text-amber-300">{isRtl ? 'طاقم الشيف التنفيذي المنزلي' : 'Executive Chef At-Home Brigade'}</a></li>
              <li><a href="#private-dining-estimator" className="hover:text-amber-300">{isRtl ? 'البروتوكول الدبلوماسي والملكي' : 'Diplomatic & Royal Protocol'}</a></li>
            </ul>
          </div>

          {/* Column 4: Compliance & Licensure */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-zinc-200">
              {t('footer_permits_title')}
            </h4>
            <div className="space-y-2 text-[11px] text-zinc-400">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{t('permit_dm')}</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{t('permit_esma')}</span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{t('permit_det')}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900 bg-zinc-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div>
            © {isRtl ? toArabicDigits(new Date().getFullYear()) : new Date().getFullYear()} {t('footer_copyright')}
          </div>
          <div className="flex items-center gap-4">
            <span>{t('footer_currency_notice')}</span>
            <span>•</span>
            <a href="https://webstudioae.com" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">
              {t('footer_flagship')}
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

