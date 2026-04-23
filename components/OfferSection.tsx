import React from 'react';
import { Video, ShieldCheck, Headphones, Users, Zap } from 'lucide-react';

export const OfferSection: React.FC = () => {
  return (
    <section className="w-full bg-amy-navy py-40 px-6 text-white overflow-hidden relative">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-32">
            <div className="inline-flex items-center gap-2 bg-amy-gold/10 px-5 py-2 rounded-full border border-amy-gold/20 mb-8">
                <Zap className="w-4 h-4 text-amy-gold" />
                <span className="text-amy-gold font-black uppercase tracking-[0.2em] text-[10px]">The Solution</span>
            </div>
            <h2 className="text-5xl md:text-[5rem] font-black mb-10 tracking-tighter leading-[0.9]">
                The Reset you’ve <br/><span className="text-amy-gold italic font-serif">actually</span> needed.
            </h2>
            <p className="text-2xl text-blue-100/70 font-light max-w-2xl mx-auto leading-relaxed">
                This isn’t a course. This isn’t homework. <br className="hidden md:block" />
                It’s a weekly rhythmic standing-down for your system.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <OfferCard 
                icon={Video}
                title="Weekly Live Reset"
                subtitle="Wednesdays @ 8pm Atlantic"
                desc="60 minutes of guided nervous-system regulation. No pressure, camera optional, just a guided path back to your baseline."
            />
            <OfferCard 
                icon={ShieldCheck}
                title="Release Without Rehearsing"
                subtitle="No Explaining Required"
                desc="We don't talk about the calls. We don't rehash the events. We work with the body directly so it can let go safely."
            />
            <OfferCard 
                icon={Headphones}
                title="Replay included"
                subtitle="On-Demand Peace"
                desc="Shift work is unpredictable. Access the full library of past resets whenever you need to downshift, 24/7."
            />
            <OfferCard 
                icon={Users}
                title="The Anchor Tools"
                subtitle="Built for the car & station"
                desc="Short, practical resets you can use in under 3 minutes, between moments, after a hard call, or before you walk in the door."
            />
        </div>

        <div className="mt-32 text-center">
            <p className="font-script text-5xl text-amy-gold mb-2 rotate-[-1deg]">No re-telling.</p>
            <p className="text-blue-200/30 uppercase tracking-[0.3em] font-black text-xs">Just letting go.</p>
        </div>
      </div>
    </section>
  );
};

const OfferCard = ({ icon: Icon, title, subtitle, desc }: any) => (
    <div className="group bg-white/5 border border-white/10 p-12 rounded-[3.5rem] hover:bg-white/10 transition-all hover:border-amy-gold/30 hover:shadow-2xl hover:shadow-amy-navy/50 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amy-gold/5 rounded-full blur-3xl group-hover:bg-amy-gold/10 transition-colors"></div>
        
        <div className="w-16 h-16 rounded-2xl bg-amy-gold/20 text-amy-gold flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform">
            <Icon className="w-8 h-8" />
        </div>
        
        <h3 className="text-3xl font-black mb-3 tracking-tighter">{title}</h3>
        <p className="text-amy-gold text-[10px] font-black uppercase tracking-[0.25em] mb-8">{subtitle}</p>
        <p className="text-blue-100/60 leading-relaxed text-lg font-light">{desc}</p>
    </div>
);