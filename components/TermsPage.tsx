
import React from 'react';
import { Anchor, ArrowLeft, FileText, AlertCircle } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
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
                <FileText className="w-3 h-3" />
                Agreements
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-amy-navy tracking-tighter mb-6">
                Terms of Service.
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
                Clear boundaries create safe spaces. Here are the agreements that allow this work to happen.
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
                
                <h3>1. Educational Scope</h3>
                <div className="bg-amy-cream/50 p-6 rounded-xl border border-amy-gold/20 not-prose mb-8">
                    <div className="flex gap-3">
                        <AlertCircle className="w-5 h-5 text-amy-orange flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-amy-navy font-bold text-sm uppercase tracking-wider mb-2">Important Distinction</p>
                            <p className="text-slate-700 leading-relaxed">
                                This site provides educational tools for nervous system regulation. <strong>This is not medical advice, therapy, or emergency care.</strong>
                            </p>
                        </div>
                    </div>
                </div>
                <p>
                    By using this site, you acknowledge that you are responsible for your own well-being. If you are in crisis, please contact local emergency services immediately.
                </p>

                <hr className="border-slate-100 my-12" />

                <h3>2. Intellectual Property</h3>
                <p>
                    The audio tracks, guided sessions, and "pocket tools" are created by Tim Campbell.
                </p>
                <p>
                    <strong>You are welcome to:</strong> Use them for your personal regulation, as often as you like.
                </p>
                <p>
                    <strong>You may not:</strong> Share the download links, distribute the audio files to others, or resell the content. This work relies on integrity.
                </p>

                <hr className="border-slate-100 my-12" />

                <h3>3. Purchases & Refunds</h3>
                <p>
                    We believe in the value of this work.
                </p>
                <ul>
                    <li><strong>Memberships:</strong> Can be cancelled at any time via your account portal or by emailing support.</li>
                    <li><strong>Refunds:</strong> If a specific "Risk-Free Guarantee" is mentioned on the checkout page (like our 4× Value Promise), it applies exactly as written. Otherwise, refunds are handled respectfully on a case-by-case basis.</li>
                </ul>

                <hr className="border-slate-100 my-12" />

                <h3>4. Code of Conduct</h3>
                <p>
                    Our community is a quiet, respectful space. We reserve the right to remove access for anyone who disrupts the safety or privacy of the group.
                </p>

                <div className="mt-12">
                    <p className="text-sm text-slate-400">
                        Questions about these terms? Email <a href="mailto:support@timcampbellcalm.com">support@timcampbellcalm.com</a>.
                    </p>
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
