
import React from 'react';
import { Star, ShieldCheck, Anchor } from 'lucide-react';

interface HeroSectionProps {
  onStartCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartCheckout }) => {
  const fallbackImage = 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800';

  return (
    <section className="w-full bg-amy-lightBlue pt-12 pb-20 md:pt-24 md:pb-40 px-6 lg:px-12 overflow-hidden relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Copy */}
        <div className="md:col-span-7 z-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-amy-gold/30 shadow-sm mb-10">
                <ShieldCheck className="w-4 h-4 text-amy-orange" />
                <span className="text-amy-navy font-black uppercase tracking-[0.15em] text-[10px]">A Quiet Space for Bodies That Stay On</span>
            </div>

            <div className="mb-8">
              <h1 className="text-6xl md:text-[6.5rem] font-black text-amy-navy leading-[0.85] mb-10 tracking-tighter">
                The 911 <br/>
                <span className="relative inline-block">
                  Calm Anchor
                  <div className="absolute -bottom-2 left-0 w-full h-4 bg-amy-gold/20 -rotate-1 -z-10"></div>
                </span>
              </h1>
            </div>
            
            <p className="text-2xl md:text-4xl text-slate-700 mb-12 leading-[1.1] font-light max-w-xl tracking-tight">
              A steady Wednesday-night reset <br/> 
              for people who <span className="font-serif italic text-amy-navy">carry too much.</span>
            </p>

            <p className="text-xl text-slate-700 mb-6 font-medium">
              Everything happens in one place now.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-16">
                <a 
                    href="/join"
                    onClick={(e) => {
                        e.preventDefault();
                        onStartCheckout();
                    }}
                    className="bg-amy-orange hover:bg-orange-600 text-white font-black py-6 px-14 rounded-2xl text-xl shadow-[0_20px_40px_-10px_rgba(232,90,60,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(232,90,60,0.5)] transition-all transform hover:-translate-y-1 uppercase tracking-widest active:scale-95 flex items-center gap-4 inline-block"
                >
                    Join the Calm Anchor
                </a>
            </div>

            {/* Micro-Social Proof */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="flex -space-x-3">
                    {["DB", "SK", "WM"].map((initials, i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 shadow-sm flex items-center justify-center text-[10px] font-bold text-slate-400">
                           {initials}
                        </div>
                    ))}
                </div>
                <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
                <div className="flex flex-col">
                    <div className="flex text-amy-gold gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                    </div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
                        "The anchor I didn't know I needed."
                    </p>
                </div>
            </div>
        </div>

        {/* Right Column: Visual Component (Tim's Portrait) */}
        <div className="md:col-span-5 relative">
            {/* The "Aura" - glowing background behind the portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-amy-gold/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            
            {/* The Portrait Container */}
            <div className="relative z-10 aspect-[4/5] md:aspect-[3/4] group">
                {/* Main Image Frame with a soft white ground */}
                <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl border-[10px] border-white ring-1 ring-slate-100 overflow-hidden transform rotate-1 transition-transform group-hover:rotate-0 duration-700">
                    <img 
                        src="portrait.png" 
                        alt="Tim Campbell - The Calm Anchor"
                        className="w-full h-full object-cover object-center transition-all duration-1000"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          // Prevent infinite loop if fallback fails
                          if (target.src !== fallbackImage) {
                              target.src = fallbackImage;
                          }
                        }}
                    />
                    {/* Soft gradient overlay to blend into the white frame */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                </div>
            </div>
            
            {/* Background elements for extra polish */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-amy-orange/10 rounded-full blur-2xl"></div>
        </div>

      </div>
    </section>
  );
};
