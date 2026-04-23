
import React, { useEffect, useState } from 'react';
import { X, Shield, FileText, HelpCircle, Mail, Link as LinkIcon, Check, ArrowRight, Lock, AlertCircle, Anchor } from 'lucide-react';

export type LegalType = 'privacy' | 'terms' | 'support' | null;

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (type) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [type]);

  if (!type) return null;

  const handleCopyLink = () => {
    const url = `${window.location.origin}/${type}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <div className="space-y-12 animate-fade-in">
             {/* Privacy Content */}
            <div className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-amy-navy prose-headings:tracking-tight
                prose-p:leading-relaxed prose-p:text-slate-600
                prose-li:text-slate-600
                prose-strong:text-amy-navy prose-strong:font-black">
                
                <p className="text-xl font-light text-slate-500 leading-relaxed">
                    We treat your inbox like a quiet space. Here is exactly how we handle your information, kept simple and clear.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-12">
                     <div className="bg-amy-lightBlue/30 p-6 rounded-2xl border border-amy-gold/10">
                        <h3 className="flex items-center gap-2 text-amy-navy !mt-0 !mb-4">
                           <div className="w-8 h-8 rounded-full bg-amy-navy/10 flex items-center justify-center text-amy-navy"><Shield className="w-4 h-4" /></div>
                           What we collect
                        </h3>
                        <p className="text-sm !mb-0">
                           Basic contact info (Name, Email) to deliver links. Usage data (opens/clicks) to see what's helpful. Secure payment tokens via Stripe (we never see your card).
                        </p>
                     </div>
                     <div className="bg-amy-lightBlue/30 p-6 rounded-2xl border border-amy-gold/10">
                        <h3 className="flex items-center gap-2 text-amy-navy !mt-0 !mb-4">
                           <div className="w-8 h-8 rounded-full bg-amy-navy/10 flex items-center justify-center text-amy-navy"><Lock className="w-4 h-4" /></div>
                           Who sees it
                        </h3>
                        <p className="text-sm !mb-0">
                           <strong>We do not sell data.</strong> We only share with infrastructure: Kit (emails), Stripe (payments), and Fathom (privacy-focused analytics).
                        </p>
                     </div>
                </div>

                <h3>How we use it</h3>
                <p>
                    We use your information to fulfill the promise we made when you signed up: delivering audio tracks, live session links, and replay access.
                </p>

                <h3>Your Control</h3>
                <p>
                    This is your space. You can unsubscribe from our emails at any time via the link at the bottom of every message.
                </p>

                <div className="bg-amy-navy text-white p-8 rounded-2xl mt-12 not-prose border border-white/10 shadow-xl relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                             <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                                Privacy Questions?
                            </h4>
                            <p className="text-blue-200/80 text-sm">
                                Email us directly if you need clarity.
                            </p>
                        </div>
                        <a href="mailto:support@timcampbellcalm.com" className="px-6 py-3 bg-white text-amy-navy font-bold rounded-full text-xs uppercase tracking-widest hover:bg-amy-gold transition-colors">
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-12 animate-fade-in">
             <div className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-amy-navy prose-headings:tracking-tight
                prose-p:leading-relaxed prose-p:text-slate-600
                prose-strong:text-amy-navy prose-strong:font-black">

                <p className="text-xl font-light text-slate-500 leading-relaxed">
                    Clear boundaries create safe spaces. Here are the agreements that allow this work to happen.
                </p>

                <div className="my-12 p-6 bg-yellow-50 border-l-4 border-amy-orange rounded-r-xl not-prose">
                    <div className="flex gap-4">
                        <AlertCircle className="w-6 h-6 text-amy-orange flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amy-navy text-sm uppercase tracking-wide mb-2">Not Medical Advice</h4>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                This site provides educational tools for regulation. This is not therapy or emergency care. You are responsible for your own well-being.
                            </p>
                        </div>
                    </div>
                </div>

                <h3>Intellectual Property</h3>
                <p>
                    The audio tracks and tools are created by Tim Campbell. You are welcome to use them for personal regulation. You may not resell or distribute the files.
                </p>

                <h3>Purchases & Refunds</h3>
                <ul className="marker:text-amy-gold">
                    <li><strong>Memberships:</strong> Cancel anytime via your account or email.</li>
                    <li><strong>Refunds:</strong> We honor our "Risk-Free" guarantees exactly as written.</li>
                </ul>

                <h3>Code of Conduct</h3>
                <p>
                    Our community is a quiet, respectful space. We reserve the right to remove access for anyone who disrupts the safety of the group.
                </p>
            </div>
          </div>
        );
      case 'support':
        return (
           <div className="space-y-10 animate-fade-in">
                <div className="bg-amy-navy text-white rounded-[2rem] p-10 text-center shadow-lg relative overflow-hidden group">
                    <div className="relative z-10">
                        <h2 className="text-xl font-bold mb-4 opacity-80">Tech support or questions?</h2>
                        <a href="mailto:support@timcampbellcalm.com" className="text-3xl md:text-4xl font-black tracking-tight hover:text-amy-gold transition-colors decoration-amy-gold/30 underline decoration-2 underline-offset-8">
                            support@timcampbellcalm.com
                        </a>
                        <p className="text-blue-200/60 mt-6 text-xs uppercase tracking-widest font-bold">
                            Typical reply time: &lt; 24 hours
                        </p>
                    </div>
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amy-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                    <Mail className="absolute bottom-[-20px] left-[-20px] w-32 h-32 text-white/5 rotate-12" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { t: "Where is my email?", d: "Check Promotions or Spam. Search 'Tim Campbell'." },
                        { t: "Link not working?", d: "Try a different browser. If it fails, email us for a fresh link." },
                        { t: "Typos at checkout?", d: "Just email us your correct address and name." },
                        { t: "Cancellations", d: "Email 'Cancel' in the subject line for a quick response." }
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-amy-gold/30 transition-colors">
                            <h3 className="font-bold text-amy-navy text-sm mb-2">{item.t}</h3>
                            <p className="text-slate-500 text-sm leading-snug">{item.d}</p>
                        </div>
                    ))}
                </div>
           </div>
        );
    }
  };

  const getHeader = () => {
      switch(type) {
          case 'privacy': return { title: 'Privacy Policy', icon: Shield, subtitle: 'Your Data & Trust' };
          case 'terms': return { title: 'Terms of Service', icon: FileText, subtitle: 'Agreements' };
          case 'support': return { title: 'Support Center', icon: HelpCircle, subtitle: 'Here to help' };
          default: return { title: '', icon: HelpCircle, subtitle: '' };
      }
  };

  const header = getHeader();
  const Icon = header.icon;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className={`
        bg-white w-full max-w-3xl max-h-[85vh] rounded-[2.5rem] shadow-2xl relative flex flex-col overflow-hidden transform transition-all duration-500
        ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}
      `}>
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white/80 backdrop-blur sticky top-0 z-20">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amy-lightBlue rounded-2xl flex items-center justify-center text-amy-navy">
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{header.subtitle}</p>
                    <h2 className="text-2xl font-black text-amy-navy leading-none">{header.title}</h2>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button 
                    onClick={handleCopyLink}
                    className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-amy-navy text-xs font-bold uppercase tracking-wider transition-all"
                    title="Copy link to this page"
                >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
                    {copied ? "Copied" : "Copy Link"}
                </button>
                <button 
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-amy-orange hover:text-white flex items-center justify-center transition-colors group"
                >
                    <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                </button>
            </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
            {renderContent()}
            
            {/* Footer inside modal */}
            <div className="mt-16 pt-10 border-t border-slate-100 text-center">
                <div className="flex items-center justify-center gap-2 text-slate-300 font-black uppercase tracking-[0.2em] text-[10px]">
                    <Anchor className="w-4 h-4" />
                    The Calm Anchor
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
