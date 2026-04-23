import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Mail, User } from 'lucide-react';

interface LeadCapturePageProps {
  onCancel: () => void;
  onComplete: (data: { name: string; email: string }) => void;
}

export const LeadCapturePage: React.FC<LeadCapturePageProps> = ({ onCancel, onComplete }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      onComplete({ name, email });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-amy-lightBlue py-12 px-6">
      <div className="max-w-2xl w-full">
        <button 
          onClick={onCancel}
          className="flex items-center text-slate-400 hover:text-amy-navy transition-colors mb-12 font-black uppercase tracking-widest text-[10px] group"
        >
          <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to overview
        </button>

        <div className="bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-white">
          {/* Progress Bar */}
          <div className="h-2 w-full bg-slate-100">
            <div className="h-full bg-amy-gold w-1/2"></div>
          </div>

          <div className="p-10 md:p-16">
            <header className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amy-gold/10 px-4 py-2 rounded-full mb-6">
                <ShieldCheck className="w-4 h-4 text-amy-orange" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amy-navy">Step 1 of 2: Reserve your spot</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-amy-navy mb-4 tracking-tighter">
                Where should we send <br/><span className="text-amy-orange italic font-serif">your access?</span>
              </h1>
              <p className="text-lg text-slate-500 font-light">
                Enter your details to continue to the secure payment page.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="relative group">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-amy-gold transition-colors" />
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-5 pl-14 pr-6 text-lg font-medium text-amy-navy focus:bg-white focus:border-amy-gold outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-amy-gold transition-colors" />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-5 pl-14 pr-6 text-lg font-medium text-amy-navy focus:bg-white focus:border-amy-gold outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-amy-navy hover:bg-slate-800 text-white font-black py-7 rounded-2xl text-xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-4 uppercase tracking-widest active:scale-[0.98]"
              >
                CONTINUE TO CHECKOUT
                <ArrowRight className="w-6 h-6" />
              </button>
            </form>

            <div className="mt-12 pt-10 border-t border-slate-50 text-center">
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto">
                By continuing, you agree to receive session reminders and tools from Tim Campbell. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Reassurance Footer */}
        <div className="mt-10 text-center flex flex-col md:flex-row items-center justify-center gap-8 opacity-40">
           <div className="flex items-center gap-2">
             <ShieldCheck className="w-4 h-4" />
             <span className="text-[10px] font-black uppercase tracking-widest">SSL SECURE</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
             <span className="text-[10px] font-black uppercase tracking-widest">PRIVATE CONNECTION</span>
           </div>
        </div>
      </div>
    </div>
  );
};