
import React from 'react';
import { Anchor, ArrowLeft, Shield, Lock } from 'lucide-react';

interface PrivacyPageProps {
  onBack: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
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
        <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-amy-navy/5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-amy-navy mb-6">
                <Shield className="w-3 h-3" />
                Your Data & Trust
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-amy-navy tracking-tighter mb-6">
                Privacy Policy.
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
                We treat your inbox like a quiet space. Here is exactly how we handle your information, kept simple and clear.
            </p>
            <p className="text-sm text-slate-400 mt-4 font-medium uppercase tracking-widest">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden p-8 md:p-16">
            <div className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-amy-navy prose-headings:tracking-tight
                prose-p:leading-relaxed prose-p:text-slate-600
                prose-a:text-amy-navy prose-a:font-bold prose-a:no-underline hover:prose-a:text-amy-orange hover:prose-a:underline
                prose-li:text-slate-600
                prose-strong:text-amy-navy prose-strong:font-black">
                
                <h3>1. What we collect</h3>
                <p>
                    We only collect what is necessary to deliver the calm. When you sign up for a resource or join a session, we collect:
                </p>
                <ul>
                    <li><strong>Your contact information</strong> (Name and email) so we can send you access links.</li>
                    <li><strong>Usage data</strong> (like whether you opened an email) to help us understand which resources are actually helpful.</li>
                </ul>
                <p>
                    If you purchase a membership, payment processing is handled securely by <strong>Stripe</strong>. We never see or store your full credit card number.
                </p>

                <hr className="border-slate-100 my-12" />

                <h3>2. How we use it</h3>
                <p>
                    We use your information to fulfill the promise we made when you signed up:
                </p>
                <ul>
                    <li>To deliver the 10-minute audio, live session links, or replay access.</li>
                    <li>To send weekly resets and gentle reminders (if you opted in).</li>
                    <li>To improve the technical performance of the site.</li>
                </ul>

                <hr className="border-slate-100 my-12" />

                <h3>3. Who sees it</h3>
                <p>
                    <strong>We do not sell your data.</strong> Ever.
                </p>
                <p>
                    We share data only with the trusted infrastructure that keeps this site running:
                </p>
                <ul>
                    <li><strong>Kit (formerly ConvertKit):</strong> To send emails.</li>
                    <li><strong>Stripe:</strong> To process secure payments.</li>
                    <li><strong>Fathom/Google Analytics:</strong> To see broad traffic patterns (anonymized where possible).</li>
                </ul>

                <hr className="border-slate-100 my-12" />

                <h3>4. Your Control</h3>
                <p>
                    This is your space. You can unsubscribe from our emails at any time via the link at the bottom of every message. 
                    If you want your data completely deleted from our records, just ask.
                </p>

                <div className="bg-amy-lightBlue p-8 rounded-2xl mt-12 not-prose border border-amy-gold/10">
                    <h4 className="text-amy-navy font-bold mb-2 flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Privacy Questions?
                    </h4>
                    <p className="text-slate-600 mb-4">
                        If anything here is unclear, or you need help with your data, email us directly.
                    </p>
                    <a href="mailto:support@timcampbellcalm.com" className="text-amy-orange font-bold text-sm uppercase tracking-widest hover:underline">
                        support@timcampbellcalm.com
                    </a>
                </div>

            </div>
        </div>
      </main>

      <footer className="py-12 text-center text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black opacity-50 border-t border-slate-100">
        Tim Campbell — The Calm Anchor
      </footer>
    </div>
  );
};
