import React from 'react';

export const ValidationSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-amy-navy mb-8 tracking-tighter leading-none">
                You know the <span className="text-slate-300">weight.</span>
            </h2>
            <div className="w-24 h-1 bg-amy-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-10 text-xl md:text-2xl text-slate-500 leading-tight font-light">
                <p>The kind that follows you home after the shift is over.</p>
                <p>The kind that settles into your <span className="text-amy-navy font-bold">shoulders</span>, your <span className="text-amy-navy font-bold">jaw</span>, and your <span className="text-amy-navy font-bold">chest</span>.</p>
                <p>The kind that keeps your system on high alert even when you're supposed to be safe.</p>
            </div>

            <div className="bg-amy-lightBlue p-12 rounded-[3rem] border border-slate-100 shadow-sm relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-amy-orange text-white flex items-center justify-center rounded-2xl shadow-lg rotate-[-5deg]">
                    <span className="font-black text-2xl font-serif leading-none">!</span>
                </div>
                
                <p className="text-amy-navy font-black uppercase tracking-[0.2em] text-[10px] mb-6">The Rule of Survival</p>
                <h3 className="text-4xl font-black text-amy-navy mb-6 italic leading-none">Stay on.</h3>
                
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed border-l-2 border-amy-gold/50 pl-6">
                    <p>So rest stays light. Sleep never feels deep. Your body forgets how to truly soften.</p>
                    <p>Eventually, this tense version of you feels like the <span className="italic">only</span> version of you.</p>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200">
                    <p className="text-amy-orange font-script text-4xl transform -rotate-2">It isn't.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};