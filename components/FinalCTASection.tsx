import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCTASectionProps {
  onStartCheckout: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onStartCheckout }) => {
  return (
    <section className="w-full bg-amy-navy text-white py-40 px-6 text-center relative overflow-hidden">
      {/* Cinematic visuals */}
      <div className="absolute inset-0 bg-gradient-to-b from-amy-navy via-amy-navy to-slate-900"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        <h2 className="text-5xl md:text-8xl font-black mb-16 leading-[0.9] tracking-tighter">
            Imagine a few <br/>weeks from <span className="text-amy-gold italic font-serif">now…</span>
        </h2>
        
        <div className="space-y-12 text-2xl md:text-4xl text-blue-100/60 mb-24 font-light tracking-tight leading-tight">
            <p>You walk through your front door.</p>
            <p>Your shoulders <span className="text-white font-bold">finally</span> drop.</p>
            <p>Your jaw softens without effort.</p>
            <div className="inline-block border-y border-white/10 py-8 px-4">
              <p className="text-amy-gold font-black italic">You’re still doing meaningful work. <br className="hidden md:block"/> You’re just not losing yourself in it.</p>
            </div>
        </div>

        <div className="flex flex-col items-center gap-10">
            <a 
                href="/join"
                onClick={(e) => {
                    e.preventDefault();
                    onStartCheckout();
                }}
                className="bg-amy-gold hover:bg-white text-amy-navy font-black py-8 px-20 rounded-[2rem] text-3xl shadow-[0_30px_60px_-15px_rgba(240,194,123,0.3)] hover:shadow-[0_40px_80px_-20px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-2 uppercase tracking-widest flex items-center justify-center gap-4 active:scale-95 inline-block text-center"
            >
                I'M READY
                <ArrowUpRight className="w-8 h-8 inline-block ml-2" />
            </a>
            
            <div className="space-y-4">
                <p className="text-blue-200/40 text-sm font-black uppercase tracking-[0.2em]">P.S. You don’t have to be ready.</p>
                <p className="text-amy-orange font-script text-5xl transform -rotate-2">You just have to show up.</p>
            </div>
        </div>
      </div>
      
      {/* Deep shadows/vignette */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amy-orange/10 rounded-full blur-[100px]"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-amy-gold/10 rounded-full blur-[100px]"></div>
    </section>
  );
};