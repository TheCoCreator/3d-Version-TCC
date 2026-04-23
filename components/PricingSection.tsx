
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onStartCheckout: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onStartCheckout }) => {
  return (
    <section id="pricing" className="w-full bg-amy-lightBlue py-40 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-amy-navy mb-8 tracking-tighter">
                Everything you need. <br/>Nothing you don’t.
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-xl mx-auto italic">
                One steady place to stand down, every week.
            </p>
        </div>

        <div className="bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(10,36,88,0.15)] overflow-hidden border border-slate-100 grid md:grid-cols-2 relative group">
            
            {/* Left: Value List */}
            <div className="p-16 md:p-24 space-y-12 bg-white relative">
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-amy-navy tracking-tight">Full Membership</h3>
                  <p className="text-slate-500 font-medium">Monthly access to the entire reset system.</p>
                </div>

                <ul className="space-y-6">
                    {[
                        "Weekly live session",
                        "Replay included",
                        "Anchor tools",
                        "Ongoing access"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-5 text-xl font-bold text-amy-navy group/li">
                            <div className="w-8 h-8 rounded-xl bg-amy-orange/10 text-amy-orange flex items-center justify-center shrink-0 group-hover/li:bg-amy-orange group-hover/li:text-white transition-colors">
                                <Check className="w-5 h-5" />
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right: The Commitment (CTA) */}
            <div className="p-16 md:p-24 bg-amy-navy text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amy-orange/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10 mb-12">
                    <span className="text-8xl font-black text-white tracking-tighter leading-none">$9</span>
                    <span className="text-2xl text-blue-200/50 font-light block mt-2">per month</span>
                </div>
                
                <div className="w-full relative z-10">
                  <a 
                      href="/join"
                      onClick={(e) => {
                          e.preventDefault();
                          onStartCheckout();
                      }}
                      className="w-full bg-amy-orange hover:bg-orange-600 text-white font-black py-8 px-8 rounded-3xl shadow-2xl transition-all transform hover:-translate-y-1 text-2xl uppercase tracking-widest active:scale-95 flex items-center justify-center gap-4 group/btn inline-block text-center"
                  >
                      Join the Calm Anchor
                      <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform inline-block ml-2" />
                  </a>
                  <p className="mt-8 text-blue-200/40 text-xs font-black uppercase tracking-[0.2em]">Cancel easily anytime.</p>
                </div>

                <div className="absolute bottom-10 right-10 opacity-20 group-hover:opacity-40 transition-opacity">
                  <p className="font-script text-7xl text-amy-gold rotate-[-5deg]">Join us.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
