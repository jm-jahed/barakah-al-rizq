'use client';

import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShoppingBag, 
  Heart, 
  Share2, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  Crown, 
  Layers, 
  Cpu, 
  Zap, 
  MessageSquare, 
  Plus, 
  Minus,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { GadgetProduct } from '@/data/consumerElectronicsData';

interface AetheraProductModalProps {
  product: GadgetProduct | null;
  onClose: () => void;
  onAddToCart: (product: GadgetProduct, quantity: number, selectedVariant?: string, selectedStorage?: string) => void;
  onBuyNow: (product: GadgetProduct, quantity: number) => void;
  onToggleWishlist: (product: GadgetProduct) => void;
  isWishlisted: boolean;
  onSelectProduct: (product: GadgetProduct) => void;
  relatedProducts: GadgetProduct[];
}

export const AetheraProductModal: React.FC<AetheraProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isWishlisted,
  onSelectProduct,
  relatedProducts
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedStorageIdx, setSelectedStorageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'box' | 'reviews' | 'delivery'>('overview');
  const [isCopied, setIsCopied] = useState(false);
  const [userReview, setUserReview] = useState({ name: '', rating: 5, comment: '' });
  const [submittedReview, setSubmittedReview] = useState(false);
  const [localReviews, setLocalReviews] = useState([
    { name: 'Rashid Al-Maktoum', city: 'Dubai (Downtown)', rating: 5, date: '3 days ago', comment: 'Exceptional build quality. Delivered to my residence in Downtown Dubai in less than 3 hours with white-glove packaging.' },
    { name: 'Mariam Al-Nuaimi', city: 'Abu Dhabi (Saadiyat)', rating: 5, date: '1 week ago', comment: 'The tactile precision and materials exceed expectations. Flawless 2-year warranty card included in the box.' }
  ]);

  if (!product) return null;

  // Calculate final price based on selected storage
  const storageDelta = product.storageVariants && product.storageVariants[selectedStorageIdx]
    ? product.storageVariants[selectedStorageIdx].priceDelta
    : 0;
  const currentPrice = product.price + storageDelta;
  const tabbyInstallment = Math.round(currentPrice / 4);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userReview.name || !userReview.comment) return;
    setLocalReviews([
      {
        name: userReview.name,
        city: 'Verified UAE Customer',
        rating: userReview.rating,
        date: 'Just now',
        comment: userReview.comment
      },
      ...localReviews
    ]);
    setSubmittedReview(true);
    setUserReview({ name: '', rating: 5, comment: '' });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200">
      
      {/* Background click dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#0E1015] border border-white/15 rounded-3xl shadow-2xl shadow-black/90 overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Sticky Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0C10]/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-amber-400 font-semibold uppercase tracking-widest">
              {product.brand} • {product.category}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs text-white/50 font-mono hidden sm:inline">
              SKU: {product.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all text-xs flex items-center gap-1"
              title="Share Link"
            >
              {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => onToggleWishlist(product)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-rose-500 transition-all"
              title="Save to Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'text-rose-500 fill-rose-500' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-rose-500/20 hover:text-rose-400 text-white transition-all"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-10 custom-scrollbar">
          
          {/* Top Section: Gallery & Key Commercial Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Gallery (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square rounded-2xl bg-black/60 border border-white/10 overflow-hidden flex items-center justify-center p-6 group">
                <img
                  src={product.images[activeImageIdx] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-amber-400 text-black text-[11px] font-bold font-mono uppercase shadow-lg">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnail strip */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIdx(i)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border p-1 shrink-0 bg-black/40 transition-all ${
                        activeImageIdx === i ? 'border-amber-400 scale-105 shadow-md' : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Commercial Info & Variants (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {product.name}
                </h2>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-mono font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-white/30 text-xs">•</span>
                  <span className="text-xs text-white/50">{product.reviewCount} Verified UAE Reviews</span>
                  <span className="text-white/30 text-xs">•</span>
                  <span className="text-xs text-emerald-400 font-medium">● {product.availability}</span>
                </div>
              </div>

              {/* Price & Installments */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-mono font-bold text-amber-300">
                    AED {currentPrice.toLocaleString()}
                  </span>
                  {product.originalPrice && product.originalPrice > currentPrice && (
                    <span className="text-sm font-mono text-white/30 line-through">
                      AED {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {product.discount && product.discount > 0 && (
                    <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-xs font-mono font-bold">
                      Save {product.discount}%
                    </span>
                  )}
                </div>

                {/* Tabby / Tamara 0% Installment badge */}
                <div className="text-xs text-white/70 flex items-center gap-2 pt-1 border-t border-white/5">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono font-semibold text-[10px]">
                    0% EMI
                  </span>
                  <span>or 4 interest-free payments of <strong className="text-white font-mono">AED {tabbyInstallment.toLocaleString()}</strong> with Tabby / Tamara</span>
                </div>
              </div>

              {/* Color Swatch Picker */}
              {product.colorVariants && product.colorVariants.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-mono text-white/60">
                    Finish: <strong className="text-white">{product.colorVariants[selectedColorIdx]?.name}</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    {product.colorVariants.map((col, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColorIdx(idx)}
                        className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 text-xs transition-all ${
                          selectedColorIdx === idx
                            ? 'bg-amber-400/15 border-amber-400 text-white font-semibold'
                            : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: col.hex }} />
                        <span>{col.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Storage / Tier Picker */}
              {product.storageVariants && product.storageVariants.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-mono text-white/60">Specification Tier:</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {product.storageVariants.map((st, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedStorageIdx(idx)}
                        className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                          selectedStorageIdx === idx
                            ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-semibold'
                            : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
                        }`}
                      >
                        <div className="truncate">{st.label}</div>
                        <div className="text-[10px] text-white/40 font-mono mt-0.5">
                          {st.priceDelta === 0 ? 'Standard' : `+AED ${st.priceDelta.toLocaleString()}`}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & CTA Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  {/* Quantity Counter */}
                  <div className="flex items-center rounded-xl bg-white/5 border border-white/10 p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-white/60 hover:text-white transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-mono font-bold text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 text-white/60 hover:text-white transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => {
                      onAddToCart(
                        product, 
                        quantity, 
                        product.colorVariants[selectedColorIdx]?.name, 
                        product.storageVariants?.[selectedStorageIdx]?.label
                      );
                    }}
                    className="flex-1 py-3.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>

                  {/* Instant Buy Now */}
                  <button
                    onClick={() => {
                      onBuyNow(product, quantity);
                    }}
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold text-xs uppercase tracking-wider hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Express Buy Now</span>
                  </button>
                </div>

                {/* UAE Delivery Badge Strip */}
                <div className="flex items-center justify-between text-[11px] text-white/60 pt-2 border-t border-white/5">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <Truck className="w-3.5 h-3.5" /> Same-Day Dubai & Abu Dhabi VIP
                  </span>
                  <span className="flex items-center gap-1.5 text-white/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> 2-Yr UAE VIP Warranty
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Deep Tabs Section */}
          <div className="pt-6 border-t border-white/10 space-y-6">
            
            {/* Tab Buttons */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-2 overflow-x-auto custom-scrollbar">
              {[
                { id: 'overview', label: 'Overview & Highlights' },
                { id: 'specs', label: 'Technical Specifications' },
                { id: 'box', label: "What's In The Box" },
                { id: 'reviews', label: `UAE Reviews (${localReviews.length})` },
                { id: 'delivery', label: 'VIP Delivery & Warranty' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all shrink-0 ${
                    activeTab === tab.id
                      ? 'bg-amber-400 text-black shadow'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="bg-[#0A0B0E] border border-white/10 rounded-2xl p-6">
              
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <p className="text-sm text-white/80 leading-relaxed">
                    {product.longDescription}
                  </p>
                  <div className="pt-4 space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">Key Engineering Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.keyFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-white/75 bg-white/5 p-3 rounded-xl border border-white/5">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">Architectural Specifications:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                        <span className="text-[10px] font-mono text-white/40 uppercase">{key}</span>
                        <span className="text-xs font-medium text-white mt-1">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'box' && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">Included in Luxury Presentation Box:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
                    {product.whatsInTheBox.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                        <Crown className="w-3.5 h-3.5 text-amber-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  {/* Reviews List */}
                  <div className="space-y-3">
                    {localReviews.map((rev, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">{rev.name}</span>
                            <span className="text-[10px] text-white/40 font-mono">({rev.city})</span>
                          </div>
                          <div className="flex items-center gap-1 text-amber-400 text-xs">
                            {Array.from({ length: rev.rating }).map((_, r) => (
                              <Star key={r} className="w-3 h-3 fill-amber-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-white/70">{rev.comment}</p>
                        <div className="text-[10px] text-white/30 font-mono">{rev.date}</div>
                      </div>
                    ))}
                  </div>

                  {/* Add Review Form */}
                  <form onSubmit={handleReviewSubmit} className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                    <h5 className="text-xs font-mono uppercase text-amber-300 font-bold">Write a Verified UAE Review</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Your Name (e.g. Tariq Al-Hashimi)"
                        value={userReview.name}
                        onChange={(e) => setUserReview({ ...userReview, name: e.target.value })}
                        className="bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                        required
                      />
                      <select
                        value={userReview.rating}
                        onChange={(e) => setUserReview({ ...userReview, rating: Number(e.target.value) })}
                        className="bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-mono"
                      >
                        <option value={5}>★★★★★ (5/5 Exceptional)</option>
                        <option value={4}>★★★★☆ (4/5 Very Good)</option>
                        <option value={3}>★★★☆☆ (3/5 Good)</option>
                      </select>
                    </div>
                    <textarea
                      placeholder="Share your experience with this luxury gadget..."
                      value={userReview.comment}
                      onChange={(e) => setUserReview({ ...userReview, comment: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-xs text-white h-20"
                      required
                    />
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-amber-400 text-black font-semibold text-xs uppercase"
                    >
                      Post Review
                    </button>
                    {submittedReview && (
                      <span className="text-xs text-emerald-400 ml-3">Review submitted successfully!</span>
                    )}
                  </form>
                </div>
              )}

              {activeTab === 'delivery' && (
                <div className="space-y-4 text-xs text-white/80 leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                      <div className="flex items-center gap-2 text-amber-300 font-bold">
                        <Truck className="w-4 h-4" /> UAE White-Glove VIP Courier
                      </div>
                      <p className="text-white/60">
                        Complimentary same-day delivery across Dubai, Abu Dhabi, Sharjah, Ajman, and Ras Al Khaimah on orders over AED 500. Orders placed before 4:00 PM dispatched within 90 minutes.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold">
                        <ShieldCheck className="w-4 h-4" /> 2-Year Official UAE Warranty
                      </div>
                      <p className="text-white/60">
                        Includes direct 1-to-1 immediate replacement service within UAE territory. Complimentary courier pickup from your home or office for any technical service.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Related Gadgets */}
          {relatedProducts.length > 0 && (
            <div className="pt-6 border-t border-white/10 space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-widest text-white font-bold">
                Complementary Flagship Instruments
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {relatedProducts.slice(0, 4).map(rel => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectProduct(rel);
                      setActiveImageIdx(0);
                    }}
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 cursor-pointer group transition-all"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden bg-black/40 mb-2 p-2">
                      <img src={rel.images[0]} alt={rel.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="text-[10px] font-mono text-white/40 uppercase truncate">{rel.brand}</div>
                    <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors truncate">{rel.name}</div>
                    <div className="text-xs font-mono font-bold text-amber-400 mt-1">AED {rel.price.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
