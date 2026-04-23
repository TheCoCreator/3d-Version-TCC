
import React, { useState, useEffect } from 'react';
import { HeroSection } from './HeroSection';
import { ValidationSection } from './ValidationSection';
import { StorySection } from './StorySection';
import { OfferSection } from './OfferSection';
import { TransformationSection } from './TransformationSection';
import { GuaranteeSection } from './GuaranteeSection';
import { PricingSection } from './PricingSection';
import { FinalCTASection } from './FinalCTASection';
import { FAQSection } from './FAQSection';
import { Anchor } from 'lucide-react';

interface LandingPageProps {
  onStartCheckout: () => void;
  onBackToHome: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ 
  onStartCheckout, 
  onBackToHome,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Option 3: Pulse and background become more prominent as user scrolls deep
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full bg-white selection:bg-amy-gold/30">
      {/* Navigation - Strategic Placement */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-white sticky top-0 z-50 border-b border-slate-50 backdrop-blur-md bg-white/90">
        {/* Left: Identity */}
        <div className="flex items-center gap-2 text-amy-navy font-bold tracking-tight cursor-pointer group flex-1" onClick={onBackToHome}>
          <div className="w-10 h-10 bg-amy-navy text-white flex items-center justify-center rounded-xl rotate-[-3deg] group-hover:rotate-0 transition-transform shadow-lg shadow-amy-navy/20">
             <Anchor className="w-6 h-6" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-sans font-black text-xl tracking-tighter uppercase">TIM CAMPBELL</span>
            <span className="text-[10px] text-amy-orange font-bold uppercase tracking-widest">The Calm Anchor</span>
          </div>
        </div>

        {/* Center: Dynamic Free Reset Link - Points to Kit Squeeze Page */}
        <div className="hidden lg:flex flex-col items-center flex-1">
          <a 
            href="https://thecalmanchor.kit.com/calm"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-700 group py-2 px-6 rounded-full ${
              scrolled 
                ? 'bg-amy-gold/15 text-amy-navy shadow-sm border border-amy-gold/20 scale-105' 
                : 'text-slate-500 hover:text-amy-navy'
            }`}
          >
            <div className="relative flex items-center justify-center">
              <div className="w-2 h-2 bg-amy-orange rounded-full relative z-10 shadow-[0_0_8px_rgba(232,90,60,0.4)]"></div>
              {/* Calm Breathing Pulse (Halo) */}
              <div className="absolute inset-0 w-2 h-2 bg-amy-orange rounded-full animate-calm-pulse opacity-50"></div>
            </div>
            <span className={`${!scrolled ? 'border-b border-amy-gold/50' : ''} group-hover:border-amy-navy transition-colors`}>
              {scrolled ? 'Need a 10-Minute Reset?' : 'Free 10-Minute Reset'}
            </span>
          </a>
        </div>

        {/* Right: CTA - 'Join the Calm Anchor' */}
        <div className="flex items-center justify-end gap-8 flex-1">
            <a 
                href="/join"
                onClick={(e) => {
                    e.preventDefault();
                    onStartCheckout();
                }}
                className="bg-amy-orange hover:bg-orange-600 text-white text-xs font-black py-3 px-8 rounded-full shadow-amy hover:shadow-xl transition-all uppercase tracking-widest active:scale-95 whitespace-nowrap inline-block"
            >
                Join the Calm Anchor
            </a>
        </div>
      </nav>

      <main>
        {/* Step 1: The Hook - Big Promise */}
        <HeroSection onStartCheckout={onStartCheckout} />
        
        {/* Step 2: The Agitation - Validate the current pain (The Weight) */}
        <ValidationSection />
        
        {/* Step 3: The Mechanism - What happens inside (The Reset) */}
        <OfferSection />
        
        {/* Step 4: The Authority - Who is Tim? */}
        <StorySection onStartCheckout={onStartCheckout} />
        
        {/* Step 5: Social Proof & Outcomes */}
        <TransformationSection />
        
        {/* Step 6: The Offer - Clear Pricing & What You Get */}
        <PricingSection onStartCheckout={onStartCheckout} />

        {/* Step 7: Risk Reversal - The Guarantee */}
        <GuaranteeSection />
        
        {/* Step 8: Objection Handling & Future Pacing */}
        <FAQSection /> 
        
        {/* Step 9: Final Close */}
        <FinalCTASection onStartCheckout={onStartCheckout} />
      </main>

      <footer id="site-footer" className="w-full py-20 bg-amy-navy text-blue-100/40 text-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3 grayscale opacity-50 cursor-pointer" onClick={onBackToHome}>
                <Anchor className="w-5 h-5" />
                <span className="font-bold tracking-widest uppercase text-xs">The Calm Anchor</span>
            </div>
            <p className="font-medium">&copy; {new Date().getFullYear()} Tim Campbell. For those who stay steady.</p>
            <div className="flex gap-6 font-bold uppercase tracking-widest text-[10px]">
                <a href="/talkitout" className="hover:text-white transition-colors">Talk It Out</a>
                <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                <a href="/support" className="hover:text-white transition-colors">Support</a>
            </div>
        </div>
      </footer>
    </div>
  );
};
