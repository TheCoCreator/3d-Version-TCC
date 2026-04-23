
import React from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CheckoutPageProps {
  onBack: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ 
    onBack,
}) => {
  
  return (
    <div className="min-h-screen flex flex-col bg-amy-lightBlue">
        <div className="flex-1 flex flex-col items-center py-12 px-6">
            <div className="max-w-6xl w-full">
                <button 
                onClick={onBack}
                type="button"
                className="flex items-center text-slate-400 hover:text-amy-navy transition-colors mb-8 font-medium group uppercase tracking-widest text-[10px] font-black"
                >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to overview
                </button>

                <header className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black text-amy-navy mb-4 font-sans tracking-tight">
                    Finish joining <span className="text-amy-orange italic font-serif font-normal">The Reset</span>
                </h1>
                <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
                    A steady Wednesday-night space for those who carry more than most understand.
                </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
                {/* Left Column: Details (md:col-span-7) */}
                <div className="space-y-12 md:col-span-7 order-2 md:order-1">
                    <section>
                    <h2 className="text-2xl font-black text-amy-navy mb-8 border-b border-slate-200 pb-4 uppercase tracking-wider">
                        What Happens When You Join
                    </h2>
                    <ul className="grid sm:grid-cols-2 gap-8">
                        {[
                        { label: "A place to stand down", desc: "Weekly 60-minute live resets." },
                        { label: "Release without rehashing", desc: "No explaining, no reliving." },
                        { label: "Support for the shift", desc: "Weekly pocket tools for real-life stress." },
                        { label: "Quiet consistency", desc: "A private community that understands." }
                        ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                            <div className="w-10 h-10 rounded-full bg-amy-orange/10 text-amy-orange flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-lg font-bold text-amy-navy block mb-1">{item.label}</span>
                                <span className="text-slate-500 text-sm leading-relaxed">{item.desc}</span>
                            </div>
                        </li>
                        ))}
                    </ul>
                    </section>

                    <section>
                    <h2 className="text-2xl font-black text-amy-navy mb-8 border-b border-slate-200 pb-4 uppercase tracking-wider">
                        Price & Guarantee
                    </h2>
                    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-amy">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                            <div>
                                <p className="text-amy-navy font-black uppercase tracking-[0.2em] text-[10px] mb-1">Membership Plan</p>
                                <p className="text-4xl font-black text-amy-navy">$9<span className="text-lg font-normal text-slate-400">/mo</span></p>
                            </div>
                            <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-green-100">
                                Cancel anytime
                            </div>
                        </div>
                        
                        <div className="bg-amy-cream p-8 rounded-3xl border border-amy-gold/30 relative overflow-hidden group">
                            <p className="text-amy-navy font-black uppercase tracking-widest text-[10px] mb-4 relative z-10">The 4× Value Experience</p>
                            <p className="text-slate-700 leading-relaxed text-lg italic font-serif relative z-10">
                            If after your first session you don’t notice a softer breath or lighter shoulders, your money is returned. I want this to feel like relief, not obligation.
                            </p>
                            <div className="absolute -bottom-6 -right-6 font-script text-8xl text-amy-gold/10 -rotate-6">Value</div>
                        </div>
                    </div>
                    </section>
                </div>

                {/* Right Column: Registration Card (md:col-span-5) */}
                <div className="md:col-span-5 order-1 md:order-2 sticky top-24">
                    <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-2xl border border-slate-50">
                    <div className="flex items-center gap-3 mb-10 text-amy-navy bg-amy-gold/10 p-5 rounded-3xl border border-amy-gold/20">
                        <ShieldCheck className="w-6 h-6 text-amy-orange" />
                        <span className="font-black uppercase tracking-widest text-xs">Secure Registration</span>
                    </div>
                    
                    <div className="space-y-8 text-center">
                        <p className="text-slate-600 font-light leading-relaxed">
                          Click the button below to open the secure checkout. <br/>
                          You'll be able to review your order before paying.
                        </p>

                        {/* EMBEDDED KIT CHECKOUT BUTTON - EXACT REPLACEMENT */}
                        <a 
                            className="convertkit-button" 
                            href="https://thecalmanchor.kit.com/products/the-calm-anchor" 
                            data-commerce 
                            style={{ 
                                display: 'inline-block', 
                                padding: '12px 24px', 
                                background: '#1a2b4c', 
                                color: 'white', 
                                borderRadius: '8px', 
                                textDecoration: 'none' 
                            }}
                        >
                            Secure My Spot
                        </a>

                        <div className="mt-8 pt-8 border-t border-slate-50 text-center">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Secured by Stripe</p>
                            <div className="flex justify-center gap-4 opacity-30 grayscale scale-75">
                                <div className="w-10 h-6 bg-slate-400 rounded"></div>
                                <div className="w-10 h-6 bg-slate-400 rounded"></div>
                                <div className="w-10 h-6 bg-slate-400 rounded"></div>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
        
        <footer className="w-full py-12 px-6 text-center text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black opacity-50">
            <div className="flex flex-col gap-4">
                <p>Tim Campbell — The Calm Anchor</p>
                <div className="flex justify-center gap-6">
                    <a href="/talkitout" className="hover:text-amy-navy transition-colors">Talk It Out</a>
                    <a href="/privacy" className="hover:text-amy-navy transition-colors">Privacy</a>
                    <a href="/terms" className="hover:text-amy-navy transition-colors">Terms</a>
                    <a href="/support" className="hover:text-amy-navy transition-colors">Support</a>
                </div>
            </div>
        </footer>
    </div>
  );
};
