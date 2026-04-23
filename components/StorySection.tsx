
import React from 'react';
import { Quote } from 'lucide-react';

interface StorySectionProps {
  onStartCheckout?: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onStartCheckout }) => {
  const fallbackImage = 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800';

  return (
    <section className="w-full bg-amy-cream/30 py-40 px-6 border-t border-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          
          {/* Visual: Tim's Portrait */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-amy-gold/10 rounded-[4rem] rotate-[-3deg] -z-10"></div>
            <div className="aspect-[3/4] bg-white rounded-[3.5rem] shadow-2xl overflow-hidden relative border-[12px] border-white ring-1 ring-slate-100">
                <img 
                    src="portrait.png" 
                    alt="Tim Campbell"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // Prevent infinite loop if fallback fails
                      if (target.src !== fallbackImage) {
                          target.src = fallbackImage;
                      }
                    }}
                />
            </div>
            
            <div className="absolute -bottom-12 -right-12 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-50 max-w-xs">
              <Quote className="w-10 h-10 text-amy-orange mb-4 opacity-30" />
              <p className="text-xl font-serif italic text-amy-navy leading-snug">
                “You don't need to talk more. You need a space to stand down.”
              </p>
            </div>
          </div>

          {/* Copy: Authority & Empathy */}
          <div className="order-1 md:order-2 space-y-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-amy-navy tracking-tighter leading-none mb-6">
                Hi, I'm Tim.
              </h2>
            </div>

            <div className="space-y-10 text-xl md:text-2xl text-slate-600 leading-[1.7] font-light">
              <p className="text-amy-navy font-bold text-2xl md:text-4xl leading-tight">
                You don't have to hold <br/>yourself together here.
              </p>

              <div className="space-y-6">
                <p>Some spaces ask you to keep it together. <br className="hidden md:block" /> This one doesn't.</p>
                
                <p>When someone else is holding the structure, <br className="hidden md:block" /> your system knows what to do.</p>
                
                <p>
                    You follow the breath. <br/>
                    The shoulders release. <br/>
                    The noise drops on its own.
                </p>
                
                <p>
                    My role here is simple: <br className="hidden md:block" />
                    to stay steady enough that you don't have to.
                </p>
              </div>

              {/* ER Doctor Quote Card */}
              <div className="bg-amy-cream p-10 rounded-[2.5rem] border border-amy-gold/20 shadow-sm relative mt-12">
                <p className="italic font-serif text-amy-navy text-2xl leading-relaxed">
                    "You need to learn hypnosis. You’re already doing half of it. Patients respond differently when you're around." 
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 not-italic mt-6">— A local ER Doctor</p>
              </div>

              <div className="pt-6">
                <a 
                  href="/join"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onStartCheckout) {
                      onStartCheckout();
                    } else {
                      window.history.pushState(null, '', '/join');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                    }
                  }}
                  className="inline-flex items-center gap-3 text-amy-navy font-black uppercase tracking-[0.2em] text-xs hover:text-amy-orange transition-colors group"
                >
                  Join the Calm Anchor
                  <div className="h-px w-8 bg-amy-gold group-hover:w-12 transition-all"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
