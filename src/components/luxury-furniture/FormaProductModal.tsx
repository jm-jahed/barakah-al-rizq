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
  Check, 
  Crown, 
  Plus, 
  Minus,
  Maximize2,
  Feather
} from 'lucide-react';
import { FurnitureProduct, ALL_FURNITURE_PRODUCTS } from '@/data/furnitureData';

interface FormaProductModalProps {
  product: FurnitureProduct | null;
  onClose: () => void;
  onAddToCart: (product: FurnitureProduct, quantity?: number, selectedColor?: string, selectedMaterial?: string) => void;
  onBuyNow?: (product: FurnitureProduct, quantity: number) => void;
  onToggleWishlist: (product: FurnitureProduct) => void;
  isWishlisted: boolean;
  onSelectProduct: (product: FurnitureProduct) => void;
  relatedProducts?: FurnitureProduct[];
}

export const FormaProductModal: React.FC<FormaProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isWishlisted,
  onSelectProduct,
  relatedProducts
}) => {
  const effectiveRelated = (relatedProducts && relatedProducts.length > 0)
    ? relatedProducts
    : ALL_FURNITURE_PRODUCTS.filter(p => p.room === product?.room && p.id !== product?.id).slice(0, 4);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedMaterialIdx, setSelectedMaterialIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'story' | 'specs' | 'craft' | 'reviews' | 'delivery'>('story');
  const [isCopied, setIsCopied] = useState(false);
  const [userReview, setUserReview] = useState({ name: '', rating: 5, comment: '' });
  const [submittedReview, setSubmittedReview] = useState(false);
  const [localReviews, setLocalReviews] = useState([
    { name: 'Sultan Al-Dhaheri', city: 'Abu Dhabi (Saadiyat)', rating: 5, date: '4 days ago', comment: 'The travertine finish and proportion exceeded our architectural expectations. Delivered and assembled in our living salon seamlessly.' },
    { name: 'Elena Rostova', city: 'Dubai (Palm Jumeirah)', rating: 5, date: '2 weeks ago', comment: 'The tactile softness of the Italian bouclé combined with solid smoked oak base is pure quiet luxury.' }
  ]);

  if (!product) return null;

  const materialDelta = product.materialOptions && product.materialOptions[selectedMaterialIdx]
    ? product.materialOptions[selectedMaterialIdx].priceDelta
    : 0;
  const currentPrice = product.price + materialDelta;
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
        city: 'Verified UAE Client',
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
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-[#171513] border border-[#3A352F] rounded-3xl shadow-2xl shadow-black/90 overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2C2926] bg-[#12110F]/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-[#E6AF73] font-semibold uppercase tracking-widest">
              {product.room} • {product.category}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs text-[#A8A096] font-mono hidden sm:inline">
              REF: {product.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#C5BDB5] hover:text-white transition-all text-xs"
              title="Share Piece"
            >
              {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => onToggleWishlist(product)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#C5BDB5] hover:text-[#E6AF73] transition-all"
              title="Save Piece"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'text-[#E6AF73] fill-[#E6AF73]' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-rose-500/20 hover:text-rose-400 text-white transition-all"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scroll Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-10 custom-scrollbar">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Gallery (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square rounded-2xl bg-black/50 border border-[#2C2926] overflow-hidden flex items-center justify-center p-2 group">
                <img
                  src={product.images[activeImageIdx] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-[#E6AF73] text-black text-[11px] font-bold font-mono uppercase shadow-lg">
                    {product.badge}
                  </span>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIdx(i)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border p-1 shrink-0 bg-black/40 transition-all ${
                        activeImageIdx === i ? 'border-[#E6AF73] scale-105 shadow-md' : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Commercial Info & Options (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F2EB] leading-tight font-serif">
                  {product.name}
                </h2>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 text-[#E6AF73] text-xs font-mono font-bold">
                    <Star className="w-3.5 h-3.5 fill-[#E6AF73]" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-[#A8A096] text-xs">•</span>
                  <span className="text-xs text-[#A8A096]">{product.reviewCount} Verified UAE Inquiries</span>
                  <span className="text-[#A8A096] text-xs">•</span>
                  <span className="text-xs text-[#E6AF73] font-medium">● {product.availability}</span>
                </div>
              </div>

              {/* Price Strip */}
              <div className="p-4 rounded-2xl bg-black/40 border border-[#2C2926] space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-mono font-bold text-[#E6AF73]">
                    AED {currentPrice.toLocaleString()}
                  </span>
                  {product.originalPrice && product.originalPrice > currentPrice && (
                    <span className="text-sm font-mono text-[#A8A096] line-through">
                      AED {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {product.discount && product.discount > 0 && (
                    <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-xs font-mono font-bold">
                      Save {product.discount}%
                    </span>
                  )}
                </div>

                <div className="text-xs text-[#C5BDB5] flex items-center gap-2 pt-1 border-t border-white/5">
                  <span className="px-2 py-0.5 rounded bg-[#E6AF73]/15 text-[#E6AF73] font-mono font-semibold text-[10px]">
                    0% EMI
                  </span>
                  <span>or 4 split payments of <strong className="text-white font-mono">AED {tabbyInstallment.toLocaleString()}</strong> with Tabby / Tamara</span>
                </div>
              </div>

              {/* Color Finish Picker */}
              {product.colorOptions && product.colorOptions.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#A8A096]">
                    Finish: <strong className="text-white">{product.colorOptions[selectedColorIdx]?.name}</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    {product.colorOptions.map((col, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColorIdx(idx)}
                        className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 text-xs transition-all ${
                          selectedColorIdx === idx
                            ? 'bg-[#E6AF73]/15 border-[#E6AF73] text-white font-semibold'
                            : 'bg-white/[0.04] border-white/10 text-[#C5BDB5] hover:text-white'
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: col.hex }} />
                        <span>{col.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Material Tier Picker */}
              {product.materialOptions && product.materialOptions.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#A8A096]">Material Specification:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.materialOptions.map((mat, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedMaterialIdx(idx)}
                        className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                          selectedMaterialIdx === idx
                            ? 'bg-[#E6AF73]/15 border-[#E6AF73] text-[#E6AF73] font-semibold'
                            : 'bg-white/[0.04] border-white/10 text-[#C5BDB5] hover:text-white'
                        }`}
                      >
                        <div className="truncate">{mat.label}</div>
                        <div className="text-[10px] text-[#A8A096] font-mono mt-0.5">
                          {mat.priceDelta === 0 ? 'Standard' : `+AED ${mat.priceDelta.toLocaleString()}`}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & CTA */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center rounded-xl bg-black/50 border border-[#2C2926] p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-[#A8A096] hover:text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-mono font-bold text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 text-[#A8A096] hover:text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart(
                        product, 
                        quantity, 
                        product.colorOptions[selectedColorIdx]?.name, 
                        product.materialOptions?.[selectedMaterialIdx]?.label
                      );
                    }}
                    className="flex-1 py-3.5 rounded-xl bg-[#F3EFEA] text-[#121110] font-bold text-xs uppercase tracking-wider hover:bg-[#E6AF73] transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onBuyNow) {
                        onBuyNow(product, quantity);
                      } else {
                        onAddToCart(product, quantity);
                      }
                    }}
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#E6AF73] via-[#D89F60] to-[#C68D4C] text-black font-bold text-xs uppercase tracking-wider hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C68D4C]/20"
                  >
                    <Crown className="w-4 h-4" />
                    <span>Express Commission</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#A8A096] pt-2 border-t border-[#24221F]">
                  <span className="flex items-center gap-1.5 text-[#E6AF73] font-medium">
                    <Truck className="w-3.5 h-3.5" /> Complimentary UAE White-Glove Setup
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E6AF73]" /> 5-Year Structural Warranty
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Deep Tabs Section */}
          <div className="pt-6 border-t border-[#2C2926] space-y-6">
            
            <div className="flex items-center gap-2 border-b border-[#2C2926] pb-2 overflow-x-auto custom-scrollbar">
              {[
                { id: 'story', label: 'Design Story & Highlights' },
                { id: 'specs', label: 'Architectural Specifications' },
                { id: 'craft', label: 'Craftsmanship Notes' },
                { id: 'reviews', label: `UAE Client Reviews (${localReviews.length})` },
                { id: 'delivery', label: 'White-Glove Delivery Terms' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all shrink-0 ${
                    activeTab === tab.id
                      ? 'bg-[#E6AF73] text-black shadow'
                      : 'text-[#A8A096] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="bg-[#12110F] border border-[#2C2926] rounded-2xl p-6">
              
              {activeTab === 'story' && (
                <div className="space-y-4">
                  <p className="text-sm text-[#C5BDB5] leading-relaxed">
                    {product.longDescription}
                  </p>
                  <div className="pt-2 space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#E6AF73] font-bold">Key Architectural Elements:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#DCD6CE]">
                        📐 <strong>Dimensions:</strong> {product.dimensions}
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#DCD6CE]">
                        ✨ <strong>Surface Finish:</strong> {product.finish}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#E6AF73] font-bold">Technical Specifications:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                        <span className="text-[10px] font-mono text-[#A8A096] uppercase">{key}</span>
                        <span className="text-xs font-medium text-white mt-1">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'craft' && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#E6AF73] font-bold">Atelier Craftsmanship Notes:</h4>
                  <ul className="space-y-2 text-xs text-[#C5BDB5]">
                    {product.craftsmanshipNotes.map((note, i) => (
                      <li key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <Feather className="w-3.5 h-3.5 text-[#E6AF73] shrink-0" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    {localReviews.map((rev, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">{rev.name}</span>
                            <span className="text-[10px] text-[#A8A096] font-mono">({rev.city})</span>
                          </div>
                          <div className="flex items-center gap-1 text-[#E6AF73] text-xs">
                            {Array.from({ length: rev.rating }).map((_, r) => (
                              <Star key={r} className="w-3 h-3 fill-[#E6AF73]" />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-[#C5BDB5]">{rev.comment}</p>
                        <div className="text-[10px] text-[#A8A096] font-mono">{rev.date}</div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleReviewSubmit} className="p-4 rounded-xl bg-black/40 border border-[#2C2926] space-y-3">
                    <h5 className="text-xs font-mono uppercase text-[#E6AF73] font-bold">Write a Verified UAE Review</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Your Name (e.g. Mariam Al-Qasimi)"
                        value={userReview.name}
                        onChange={(e) => setUserReview({ ...userReview, name: e.target.value })}
                        className="bg-black/60 border border-[#2C2926] rounded-xl px-3 py-2 text-xs text-white"
                        required
                      />
                      <select
                        value={userReview.rating}
                        onChange={(e) => setUserReview({ ...userReview, rating: Number(e.target.value) })}
                        className="bg-black/60 border border-[#2C2926] rounded-xl px-3 py-2 text-xs text-white font-mono"
                      >
                        <option value={5}>★★★★★ (5/5 Exceptional)</option>
                        <option value={4}>★★★★☆ (4/5 Very Good)</option>
                      </select>
                    </div>
                    <textarea
                      placeholder="Describe the tactile feel and fit in your space..."
                      value={userReview.comment}
                      onChange={(e) => setUserReview({ ...userReview, comment: e.target.value })}
                      className="w-full bg-black/60 border border-[#2C2926] rounded-xl p-3 text-xs text-white h-20"
                      required
                    />
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-[#E6AF73] text-black font-semibold text-xs uppercase"
                    >
                      Publish Review
                    </button>
                    {submittedReview && (
                      <span className="text-xs text-emerald-400 ml-3">Review published successfully!</span>
                    )}
                  </form>
                </div>
              )}

              {activeTab === 'delivery' && (
                <div className="space-y-4 text-xs text-[#C5BDB5] leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                      <div className="flex items-center gap-2 text-[#E6AF73] font-bold">
                        <Truck className="w-4 h-4" /> White-Glove Room Placement
                      </div>
                      <p className="text-[#A8A096]">
                        Includes climate-controlled transport across all 7 UAE Emirates, unpacking, positioning in your specified room, complete assembly by senior cabinetmakers, and removal of all packaging materials.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                      <div className="flex items-center gap-2 text-[#E6AF73] font-bold">
                        <ShieldCheck className="w-4 h-4" /> 5-Year Structural Warranty
                      </div>
                      <p className="text-[#A8A096]">
                        Covers internal hardwood mortise-and-tenon frame integrity, stone structural stability, and spring suspensions. Includes complimentary annual timber waxing advisory.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Related Pieces */}
          {effectiveRelated.length > 0 && (
            <div className="pt-6 border-t border-[#2C2926] space-y-4">
              <h4 className="text-sm font-serif uppercase tracking-widest text-[#F5F2EB] font-bold">
                Coordinated Pieces in this Space
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {effectiveRelated.slice(0, 4).map(rel => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectProduct(rel);
                      setActiveImageIdx(0);
                    }}
                    className="p-3 rounded-2xl bg-[#12110F] border border-[#2C2926] hover:border-[#E6AF73]/40 cursor-pointer group transition-all"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden bg-black/40 mb-2">
                      <img src={rel.images[0]} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="text-[10px] font-mono text-[#A8A096] uppercase truncate">{rel.material}</div>
                    <div className="text-xs font-bold text-[#F5F2EB] group-hover:text-[#E6AF73] truncate font-serif">{rel.name}</div>
                    <div className="text-xs font-mono font-bold text-[#E6AF73] mt-1">AED {rel.price.toLocaleString()}</div>
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
