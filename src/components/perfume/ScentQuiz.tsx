'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2, ArrowRight, Droplets, ShoppingBag } from 'lucide-react';
import { PERFUME_PRODUCTS, PerfumeProduct } from '@/data/perfumeData';

interface ScentQuizProps {
  onSelectProduct: (product: PerfumeProduct) => void;
  onAddToCart: (product: PerfumeProduct) => void;
}

export const ScentQuiz: React.FC<ScentQuizProps> = ({ onSelectProduct, onAddToCart }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizResult, setQuizResult] = useState<any | null>(null);

  const questions = [
    {
      q: "01. What morning aura inspires you?",
      options: ["Fresh Sea Breeze & Citrus", "Warm Spiced Arabic Coffee", "Blooming Garden Roses", "Deep Resinous Incense"]
    },
    {
      q: "02. What tactile texture feels most luxurious?",
      options: ["Heavy Velvet & Silk", "Crisp Clean Linen", "Soft Cashmere Wool", "Hand-Burnished Leather"]
    },
    {
      q: "03. Where do you feel most serene?",
      options: ["Royal Desert Campfire", "Mediterranean Yacht Deck", "Grasse Flower Field", "Alpine Pine Cabin"]
    },
    {
      q: "04. What daily beverage ritual speaks to you?",
      options: ["Dark Espresso & Cardamom", "Sparkling Vintage Champagne", "Fresh Mint Green Tea", "Warm Cinnamon Latte"]
    },
    {
      q: "05. How should your aura be perceived?",
      options: ["Mysterious & Royal", "Fresh & Luminous", "Warm & Inviting", "Bold & Executive"]
    },
    {
      q: "06. Which season dominates your mood?",
      options: ["Crisp Autumn", "Deep Winter", "Blooming Spring", "Golden Summer"]
    }
  ];

  const handleOptionSelect = (opt: string) => {
    const nextAnswers = [...answers, opt];
    setAnswers(nextAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate result
      const matched = PERFUME_PRODUCTS.find((p) => p.id === 'midnight-oud') || PERFUME_PRODUCTS[0];
      setQuizResult({
        profileTitle: "The Royal Oud Connoisseur",
        profileDesc: "You appreciate deep resinous warmth, rare woods, and opulent Middle Eastern craftsmanship.",
        matchedProduct: matched
      });
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setQuizResult(null);
  };

  return (
    <section id="quiz" className="py-24 bg-[#0A0D12] border-b border-amber-500/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#10141C] border border-amber-500/30 p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                OLFACTORY PERSONALITY DISCOVERY
              </span>
              <h2 className="text-2xl font-bold text-white font-serif">Scent Personality Quiz</h2>
            </div>

            {!quizResult && (
              <span className="text-xs font-mono text-amber-300 font-bold">
                Step 0{currentStep + 1} of 0{questions.length}
              </span>
            )}
          </div>

          {!quizResult ? (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white font-serif">
                {questions[currentStep].q}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {questions[currentStep].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionSelect(opt)}
                    className="p-4 rounded-2xl bg-[#161D27] border border-white/10 hover:border-amber-400 text-left text-xs font-bold text-white hover:text-amber-300 transition-all flex items-center justify-between group shadow-lg"
                  >
                    <span>{opt}</span>
                    <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                ))}
              </div>

              {/* Progress bar */}
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-[#161D27] border border-amber-500/40 text-center space-y-4 shadow-xl"
            >
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold block">
                YOUR OLFACTORY PROFILE MATCH
              </span>

              <h3 className="text-2xl font-extrabold text-white font-serif">{quizResult.profileTitle}</h3>
              <p className="text-xs text-gray-300 max-w-md mx-auto">{quizResult.profileDesc}</p>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 max-w-md mx-auto flex items-center gap-4 text-left">
                <img
                  src={quizResult.matchedProduct.image}
                  alt={quizResult.matchedProduct.name}
                  className="w-16 h-20 rounded-lg object-cover bg-black"
                />
                <div>
                  <span className="text-[10px] font-mono text-amber-300 block font-bold">RECOMMENDED SCENT</span>
                  <h4 className="text-base font-bold text-white font-serif">{quizResult.matchedProduct.name}</h4>
                  <div className="text-xs font-bold text-amber-400 font-mono mt-0.5">AED {quizResult.matchedProduct.price}</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetQuiz}
                  className="px-4 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/15"
                >
                  Retake Quiz
                </button>

                <button
                  onClick={() => onAddToCart(quizResult.matchedProduct)}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> Add Match to Bag
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
