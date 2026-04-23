import React, { useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export const JoinPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-amy-lightBlue flex flex-col items-center justify-center py-12 px-6 font-sans selection:bg-amy-orange/20">
      <div className="max-w-5xl w-full">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-amy-navy mb-6 tracking-tighter">
            Join the Calm Anchor
          </h1>
          <p className="text-2xl text-slate-500 font-light italic">
            You already know if this is for you.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(10,36,88,0.15)] overflow-hidden border border-slate-100 grid md:grid-cols-5 relative">
          
          {/* Left Column: Details */}
          <div className="p-12 md:p-16 space-y-12 md:col-span-3 bg-white">
            
            {/* OFFER IDENTITY */}
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-amy-navy tracking-tight">The 911 Calm Anchor</h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                A steady Wednesday-night reset<br/>
                for people who carry too much.
              </p>
              <p className="text-amy-orange font-bold uppercase tracking-widest text-sm pt-2">
                Live each week. Replay included.
              </p>
            </div>

            {/* WHAT HAPPENS */}
            <div className="space-y-4 pt-8 border-t border-slate-100">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-slate-700 font-medium text-lg">You show up.</p>
                  <p className="text-slate-700 font-medium text-lg">You listen.</p>
                  <p className="text-slate-700 font-medium text-lg">Your system does what it already knows how to do.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-500 font-medium text-lg">No explaining.</p>
                  <p className="text-slate-500 font-medium text-lg">No rehashing.</p>
                  <p className="text-slate-500 font-medium text-lg">No pressure to perform.</p>
                </div>
              </div>
            </div>

            {/* WHAT YOU GET */}
            <div className="space-y-6 pt-8 border-t border-slate-100">
              <ul className="space-y-4">
                {[
                  "Weekly live session (Wednesdays @ 8PM Atlantic)",
                  "Replay available anytime",
                  "Anchor tools for between moments",
                  "Ongoing access"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-bold text-amy-navy group/li">
                    <div className="w-8 h-8 rounded-xl bg-amy-orange/10 text-amy-orange flex items-center justify-center shrink-0 group-hover/li:bg-amy-orange group-hover/li:text-white transition-colors">
                      <Check className="w-5 h-5" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 font-medium italic pt-2">
                Everything in one place.
              </p>
            </div>

            {/* WHO THIS IS FOR */}
            <div className="pt-8 border-t border-slate-100 space-y-4">
              <p className="text-xl text-slate-600 font-serif italic leading-relaxed">
                "If your body is still 'on' when your shift ends…<br/>
                If you carry it home without meaning to…
              </p>
              <p className="text-xl text-amy-navy font-black tracking-tight">
                You’ll understand this."
              </p>
            </div>

          </div>

          {/* Right Column: CTA */}
          <div className="p-12 md:p-16 bg-amy-navy text-white flex flex-col items-center justify-center text-center relative overflow-hidden md:col-span-2">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amy-orange/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            
            {/* PRICE + EXPECTATION */}
            <div className="relative z-10 mb-12 space-y-4 w-full">
              <div>
                <span className="text-7xl font-black text-white tracking-tighter leading-none">$9</span>
                <span className="text-xl text-blue-200/50 font-light block mt-2">/ month</span>
              </div>
              <p className="text-blue-200/40 text-sm font-black uppercase tracking-[0.2em] pt-2">Cancel anytime.</p>
              
              <div className="pt-8 space-y-6 text-left">
                <p className="text-blue-100 font-medium leading-relaxed">
                  This gives you full access to the weekly sessions, replays, and tools.
                </p>
                <p className="text-white font-bold text-lg">
                  Most people notice the shift in the first session.
                </p>
              </div>
            </div>
            
            {/* PRIMARY CTA */}
            <div className="w-full relative z-10 mt-auto">
              <a 
                href="https://www.skool.com/the-calm-anchor-circle-1174/about"
                className="w-full bg-amy-orange hover:bg-orange-600 text-white font-black py-6 px-6 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1 text-xl uppercase tracking-widest active:scale-95 flex items-center justify-center gap-4 group/btn inline-block text-center"
              >
                Enter the Space
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform inline-block ml-2" />
              </a>
              
              {/* MICRO REASSURANCE */}
              <p className="mt-6 text-blue-200/60 text-sm font-medium">
                You’ll be taken directly inside.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
