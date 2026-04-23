import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-40 px-6 relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-slate-100 via-slate-100 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block relative mb-16">
          <div className="absolute inset-0 bg-amy-orange/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="w-24 h-24 bg-amy-navy text-white rounded-[2rem] flex items-center justify-center relative z-10 shadow-2xl rotate-[-5deg]">
              <Shield className="w-12 h-12" />
          </div>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black text-amy-navy mb-12 tracking-tighter leading-none">
            The 4× <br/><span className="text-amy-orange">Value</span> Experience
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-10">
          <p className="text-2xl md:text-3xl text-slate-700 font-light leading-snug">
            You will receive <span className="font-bold text-amy-navy underline decoration-amy-gold decoration-4 underline-offset-4">4× the value</span>
            <ArrowRight className="inline w-8 h-8 text-amy-orange mx-2 animate-pulse" style={{ animationIterationCount: 4 }} />
            a softer breath, lighter shoulders, and a moment of genuine ease.
          </p>

          <div className="bg-amy-cream p-12 rounded-[3rem] border-2 border-amy-gold/30 shadow-sm relative overflow-hidden group">
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium relative z-10">
                If you don't feel that level of return after your first session, your money is returned. Simple. Respectful. Honest.
              </p>
              <div className="flex items-center justify-center gap-5 relative z-10">
                <div className="h-px w-10 bg-amy-gold"></div>
                <p className="font-script text-4xl text-amy-orange rotate-[-2deg]">Tim says, "Thats the anchor"</p>
                <div className="h-px w-10 bg-amy-gold"></div>
              </div>
              
              {/* Subtle background script */}
              <p className="absolute -bottom-10 -right-10 font-script text-[12rem] text-amy-gold/5 pointer-events-none select-none">Trust</p>
          </div>
        </div>
      </div>
    </section>
  );
};