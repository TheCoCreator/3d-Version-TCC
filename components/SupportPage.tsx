
import React from 'react';
import { Anchor, ArrowLeft, Mail, HelpCircle, AlertCircle } from 'lucide-react';

interface SupportPageProps {
  onBack: () => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amy-gold/30 flex flex-col">
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/60">
        <div className="flex items-center gap-2 text-amy-navy font-bold tracking-tight cursor-pointer group" onClick={onBack}>
          <div className="w-8 h-8 bg-amy-navy text-white flex items-center justify-center rounded-lg rotate-[-3deg] group-hover:rotate-0 transition-transform shadow-md">
             <Anchor className="w-5 h-5" />
          </div>
          <span className="font-sans font-black text-lg tracking-tighter uppercase hidden sm:block">Tim Campbell</span>
        </div>
        <button onClick={onBack} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-amy-navy flex items-center gap-2 transition-colors group">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back
        </button>
      </nav>

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-[2rem] shadow-sm border border-slate-100 mb-8 rotate-[-3deg]">
                <HelpCircle className="w-8 h-8 text-amy-orange" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-amy-navy tracking-tighter mb-6">
                Here to help.
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-xl mx-auto">
                Technology isn't always calm, but we can fix it. <br/>
                What do you need?
            </p>
        </div>

        {/* Contact Hero */}
        <div className="bg-amy-navy text-white rounded-[2.5rem] p-10 md:p-14 text-center shadow-xl relative overflow-hidden mb-16 group">
            <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4">Send us an email</h2>
                <a href="mailto:support@timcampbellcalm.com" className="text-3xl md:text-5xl font-black tracking-tight hover:text-amy-gold transition-colors decoration-amy-gold/30 underline decoration-2 underline-offset-8">
                    support@timcampbellcalm.com
                </a>
                <p className="text-blue-200/60 mt-6 text-sm uppercase tracking-widest font-bold">
                    We typically reply within 24 hours.
                </p>
            </div>
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amy-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <Mail className="absolute bottom-10 left-10 w-24 h-24 text-white/5 rotate-12" />
        </div>

        {/* Common Issues Grid */}
        <div className="grid md:grid-cols-2 gap-6">
            
            <SupportItem 
                title="Where is my email?"
                desc="Check your Promotions or Spam folders. Search your inbox for 'Tim Campbell'. If it's still missing, email us."
            />
            
            <SupportItem 
                title="Link not working?"
                desc="Try opening it in a different browser or device. If that fails, send us a screenshot and we'll send a fresh link."
            />
            
            <SupportItem 
                title="Typos at checkout?"
                desc="It happens. Just email us with the correct address and your name, and we'll update your account instantly."
            />
            
            <SupportItem 
                title="Refunds & Cancellations"
                desc="We honor our guarantees. Email us with 'Refund' or 'Cancel' in the subject line for a quick response."
            />

        </div>

      </main>

      <footer className="py-12 text-center text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black opacity-50 border-t border-slate-100">
        Tim Campbell — The Calm Anchor
      </footer>
    </div>
  );
};

const SupportItem = ({ title, desc }: { title: string, desc: string }) => (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-amy-navy font-bold text-lg mb-3 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amy-gold"></div>
            {title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-sm">
            {desc}
        </p>
    </div>
);
