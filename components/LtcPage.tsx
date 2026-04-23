import React, { useEffect } from 'react';
import { Anchor } from 'lucide-react';

interface LtcPageProps {
  onBackToHome: () => void;
}

export const LtcPage: React.FC<LtcPageProps> = ({ onBackToHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-6');
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
    
    // Hero elements fire immediately
    document.querySelectorAll('.hero-fade-in').forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-6');
      }, 150 + i * 120);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-amy-navy text-amy-cream font-sans selection:bg-amy-gold/30">
      {/* Grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.035]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: '256px 256px' }}>
      </div>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10 py-5 flex justify-between items-center bg-gradient-to-b from-amy-navy/95 to-transparent">
        <div className="flex items-center gap-2 text-amy-cream font-bold tracking-tight cursor-pointer group" onClick={onBackToHome}>
          <div className="w-8 h-8 bg-amy-cream text-amy-navy flex items-center justify-center rounded-lg rotate-[-3deg] group-hover:rotate-0 transition-transform shadow-md">
             <Anchor className="w-4 h-4" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-sans font-black text-lg tracking-tighter uppercase">Tim Campbell</span>
            <span className="text-[10px] text-amy-gold font-bold uppercase tracking-widest hidden sm:block">The Calm Anchor</span>
          </div>
        </div>
        <a href="#book" className="text-xs tracking-[0.15em] uppercase text-amy-cream/60 border-b border-amy-gold/30 pb-0.5 hover:text-amy-cream hover:border-amy-gold transition-all">
          Request a session
        </a>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-8 pt-[120px] pb-20 relative overflow-hidden">
        {/* Radial gradient background accent */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-radial-gradient from-amy-gold/10 to-transparent pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(240,194,123,0.12) 0%, transparent 70%)' }}></div>
        
        <div className="max-w-[760px] mx-auto w-full relative z-10">
          <p className="text-[11px] tracking-[0.25em] uppercase text-amy-gold mb-7 font-normal hero-fade-in opacity-0 translate-y-6 transition-all duration-700">
            Free 30-Minute Staff Experience — Leave the Shift at the Shift
          </p>
          <h1 className="text-[42px] md:text-[6vw] lg:text-[72px] font-light text-amy-cream mb-8 leading-[1.15] max-w-[780px] hero-fade-in opacity-0 translate-y-6 transition-all duration-700">
            For the staff who hold it<br />
            together all shift.<br />
            <em className="font-script text-amy-cream/70 not-italic text-[1.1em]">And still carry it home after.</em>
          </h1>
          <p className="text-[18px] text-amy-cream/60 max-w-[480px] leading-[1.7] mb-[52px] font-light hero-fade-in opacity-0 translate-y-6 transition-all duration-700">
            A free 30-minute experience for long-term care teams that helps the body begin to let go of what it’s still holding — without asking staff to explain everything first.
          </p>
          <div className="hero-fade-in opacity-0 translate-y-6 transition-all duration-700">
            <a href="#book" className="inline-block font-sans text-[12px] font-normal tracking-[0.2em] uppercase py-[18px] px-[44px] border border-amy-gold text-amy-cream hover:bg-amy-gold hover:text-amy-navy transition-all duration-400 relative overflow-hidden group">
              <span className="relative z-10">Request a free staff session</span>
              <div className="absolute inset-0 bg-amy-gold scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100 z-0"></div>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-amy-gold/50 to-transparent animate-pulse" style={{ animation: 'scrollPulse 2.5s ease-in-out infinite' }}></div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-amy-cream/50">Scroll</span>
        </div>
      </section>

      {/* THE MOMENT */}
      <section className="py-[100px] bg-amy-navy border-t border-amy-gold/20">
        <div className="max-w-[760px] mx-auto px-8">
          <p className="text-[24px] md:text-[3.5vw] lg:text-[38px] font-light leading-[1.55] text-amy-cream/70 text-center max-w-[680px] mx-auto fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            Shift ends.
            <br /><br />
            But that does not always mean it leaves.
            <br /><br />
            In long-term care, staff carry more than tasks. They carry people.
            Pressure. Loss. Responsibility.
            <br /><br />
            The quiet weight that builds over time.
            <br /><br />
            They finish the shift and go home. But the body may still be scanning.
            Still braced. Still holding the day.
            <br /><br />
            This free 30-minute experience was built for that.
            <br /><br />
            Not to add more. To offer a way to begin setting some of it down.
          </p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="py-[100px] border-t border-amy-gold/20">
        <div className="max-w-[760px] mx-auto px-8">
          <span className="text-[11px] tracking-[0.25em] uppercase text-amy-gold mb-5 block fade-in-section opacity-0 translate-y-6 transition-all duration-700">What this is</span>
          <h2 className="text-[32px] md:text-[4vw] lg:text-[52px] font-light text-amy-cream mb-10 max-w-[560px] leading-[1.15] fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            Not a lecture.<br />Not therapy.<br />Not another wellness task.
          </h2>
          <p className="text-[17px] text-amy-cream/60 max-w-[520px] mb-8 font-light fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            Something simpler. This is a guided 30-minute staff experience that helps the nervous system begin to reset.
          </p>
          <p className="text-[17px] text-amy-cream/60 max-w-[520px] mb-8 font-light fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-100">
            The core of the session is an 18-minute Somatic Intention Setting experience. Staff do not need to prepare. They do not need to share personal details. They do not need to explain the whole story.
          </p>
          <p className="font-script text-[20px] text-amy-cream/70 italic fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-150">
            "We work with what is already happening in the body. Not around it."
          </p>
        </div>

        {/* THE 3 STEPS */}
        <div className="max-w-[1020px] mx-auto px-8 mt-[80px]">
          <span className="text-[11px] tracking-[0.25em] uppercase text-amy-gold mb-8 block text-center fade-in-section opacity-0 translate-y-6 transition-all duration-700">What staff will receive</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-amy-gold/20 border border-amy-gold/20 fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            <div className="px-9 py-12 bg-amy-navy relative">
              <span className="font-serif text-[11px] tracking-[0.2em] text-amy-gold/70 mb-5 block">Step 01</span>
              <h3 className="font-serif text-[26px] font-normal text-amy-cream mb-4 leading-[1.2]">A simple 30-minute guided experience</h3>
              <p className="text-[15px] text-amy-cream/60 leading-[1.7] font-light mb-5">
                A calm, structured session designed for long-term care staff. No prep. No pressure. No one has to speak.
              </p>
            </div>
            <div className="px-9 py-12 bg-amy-navy relative">
              <span className="font-serif text-[11px] tracking-[0.2em] text-amy-gold/70 mb-5 block">Step 02</span>
              <h3 className="font-serif text-[26px] font-normal text-amy-cream mb-4 leading-[1.2]">An 18-minute Somatic Intention Setting experience</h3>
              <p className="text-[15px] text-amy-cream/60 leading-[1.7] font-light mb-5">
                This is the heart of the session. It helps staff notice what the body is still holding from the shift and begin to settle it without needing to talk through everything first.
              </p>
            </div>
            <div className="px-9 py-12 bg-amy-navy relative">
              <span className="font-serif text-[11px] tracking-[0.2em] text-amy-gold/70 mb-5 block">Step 03</span>
              <h3 className="font-serif text-[26px] font-normal text-amy-cream mb-4 leading-[1.2]">Free take-home support</h3>
              <p className="text-[15px] text-amy-cream/60 leading-[1.7] font-light mb-5">
                After the session, staff can choose to receive a free 10-minute Leave the Shift at the Shift hypnosis session and the free Invisible Calm Anchor PDF.
              </p>
              <span className="inline-block mt-5 text-[11px] tracking-[0.15em] uppercase text-amy-gold border border-amy-gold/30 px-3 py-1">In exchange for their email</span>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="py-[100px] border-t border-amy-gold/20">
        <div className="max-w-[760px] mx-auto px-8">
          <span className="text-[11px] tracking-[0.25em] uppercase text-amy-gold mb-5 block fade-in-section opacity-0 translate-y-6 transition-all duration-700">The method</span>
          <h2 className="text-[32px] md:text-[4vw] lg:text-[52px] font-light text-amy-cream mb-10 max-w-[400px] leading-[1.15] fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            Four things happen.<br />In this order.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20 mt-16 fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            <div>
              <div className="font-serif text-[48px] font-light text-amy-gold/40 leading-none mb-2">01</div>
              <h3 className="font-serif text-[22px] font-normal text-amy-cream mb-2.5">Notice</h3>
              <p className="text-[15px] text-amy-cream/60 leading-[1.7]">
                We begin by noticing what is still there. Not the story about the day. The actual weight of it. The held breath. The tension. The place it lives.
              </p>
            </div>
            <div>
              <div className="font-serif text-[48px] font-light text-amy-gold/40 leading-none mb-2">02</div>
              <h3 className="font-serif text-[22px] font-normal text-amy-cream mb-2.5">Stay</h3>
              <p className="text-[15px] text-amy-cream/60 leading-[1.7]">
                We do not rush past it. We do not force release. We stay with what is there long enough for the system to stop pushing and start settling.
              </p>
            </div>
            <div>
              <div className="font-serif text-[48px] font-light text-amy-gold/40 leading-none mb-2">03</div>
              <h3 className="font-serif text-[22px] font-normal text-amy-cream mb-2.5">Shift</h3>
              <p className="text-[15px] text-amy-cream/60 leading-[1.7]">
                Something begins to move. Not because staff are trying hard. Because the nervous system finally has a moment to do what it has been trying to do.
              </p>
            </div>
            <div>
              <div className="font-serif text-[48px] font-light text-amy-gold/40 leading-none mb-2">04</div>
              <h3 className="font-serif text-[22px] font-normal text-amy-cream mb-2.5">Anchor</h3>
              <p className="text-[15px] text-amy-cream/60 leading-[1.7]">
                We leave them with something real. Not just a nice experience in the moment. Something steady they can return to later. Anchor first, then choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS WORKS */}
      <section className="py-[100px] border-t border-amy-gold/20">
        <div className="max-w-[760px] mx-auto px-8">
          <span className="text-[11px] tracking-[0.25em] uppercase text-amy-gold mb-5 block fade-in-section opacity-0 translate-y-6 transition-all duration-700">Why this works in care settings</span>
          <h2 className="text-[32px] md:text-[4vw] lg:text-[52px] font-light text-amy-cream mb-12 leading-[1.15] fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            Staff do not always need more advice.
          </h2>
          <p className="text-[17px] text-amy-cream/60 max-w-[520px] mb-8 font-light fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            They need a moment where the body can stop carrying so much all at once. This works well in care settings because:
          </p>

          <ul className="mt-12 fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            <li className="flex items-start gap-5 py-6 border-t border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">It is short</p>
            </li>
            <li className="flex items-start gap-5 py-6 border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">It is gentle</p>
            </li>
            <li className="flex items-start gap-5 py-6 border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">It is practical</p>
            </li>
            <li className="flex items-start gap-5 py-6 border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">It does not require public sharing</p>
            </li>
            <li className="flex items-start gap-5 py-6 border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">It does not ask exhausted people to do more emotional labour</p>
            </li>
          </ul>
          
          <p className="font-script text-[24px] text-amy-cream/70 italic mt-12 fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-150">
            "It meets people where they are."
          </p>
        </div>
      </section>

      {/* ABOUT TIM */}
      <section className="py-[100px] border-t border-amy-gold/20 bg-slate-850">
        <div className="max-w-[760px] mx-auto px-8">
          <span className="text-[11px] tracking-[0.25em] uppercase text-amy-gold mb-5 block fade-in-section opacity-0 translate-y-6 transition-all duration-700">About Tim</span>
          <h2 className="text-[32px] md:text-[4vw] lg:text-[52px] font-light text-amy-cream mb-10 max-w-[560px] leading-[1.15] fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            Tim Campbell<br />The Calm Anchor
          </h2>
          <p className="text-[17px] text-amy-cream/60 max-w-[520px] mb-8 font-light fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            I offer calm-focused sessions and tools for people who spend their days holding a lot. I also work in healthcare, which is a big part of why this matters so much to me.
          </p>
          <p className="text-[17px] text-amy-cream/60 max-w-[520px] mb-8 font-light fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-100">
            This work came from seeing how often staff leave work physically done, but still carrying the shift in the body.
          </p>
          <p className="text-[17px] text-amy-cream/60 max-w-[520px] mb-8 font-light fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-150">
            The focus is simple:
          </p>
          <p className="font-script text-[24px] text-amy-cream/70 italic fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-200">
            "Help people leave the shift at the shift."
          </p>
        </div>
      </section>

      {/* FOR YOU */}
      <section className="py-[100px] border-t border-amy-gold/20">
        <div className="max-w-[760px] mx-auto px-8">
          <span className="text-[11px] tracking-[0.25em] uppercase text-amy-gold mb-5 block fade-in-section opacity-0 translate-y-6 transition-all duration-700">Who this is for</span>
          <h2 className="text-[32px] md:text-[4vw] lg:text-[52px] font-light text-amy-cream mb-12 leading-[1.15] fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            This free staff experience may be a fit if your team includes people who:
          </h2>

          <ul className="mt-12 fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            <li className="flex items-start gap-5 py-6 border-t border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">Hold it together all shift and crash later</p>
            </li>
            <li className="flex items-start gap-5 py-6 border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">Go home still carrying the day</p>
            </li>
            <li className="flex items-start gap-5 py-6 border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">Struggle to switch off after work</p>
            </li>
            <li className="flex items-start gap-5 py-6 border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">Need something practical, calm, and easy to receive</p>
            </li>
            <li className="flex items-start gap-5 py-6 border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">Would benefit from support that does not ask them to perform wellness</p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-[120px] px-8 bg-slate-850 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-radial-gradient from-amy-gold/10 to-transparent pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(240,194,123,0.08) 0%, transparent 70%)' }}></div>
        
        <div className="max-w-[580px] mx-auto relative z-10">
          <p className="text-[11px] tracking-[0.25em] uppercase text-amy-gold mb-6 fade-in-section opacity-0 translate-y-6 transition-all duration-700">The free staff session</p>
          <h2 className="text-[36px] md:text-[5vw] lg:text-[64px] font-light text-amy-cream mb-5 leading-[1.2] fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-100">
            The first staff experience<br />costs nothing.
          </h2>
          <p className="text-[16px] text-amy-cream/60 max-w-[380px] mx-auto mb-[52px] fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-200">
            30 minutes. No prep required. Simple to offer. Low pressure. If it feels like a fit, we can talk after about what ongoing support could look like. If not, your staff still leave with something useful.
          </p>
          <a href="https://calendly.com/timcampbellcalm" target="_blank" rel="noopener noreferrer" className="inline-block font-sans text-[12px] font-normal tracking-[0.2em] uppercase py-[18px] px-[44px] border border-amy-gold text-amy-cream hover:bg-amy-gold hover:text-amy-navy transition-all duration-400 relative overflow-hidden group fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-300">
            <span className="relative z-10">Request a free staff session</span>
            <div className="absolute inset-0 bg-amy-gold scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100 z-0"></div>
          </a>
          <p className="mt-6 text-[13px] text-amy-gold/60 tracking-[0.05em] fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-400">
            No pressure. Just a simple conversation.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-[60px] px-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-amy-gold/20 bg-amy-navy">
        <div className="font-serif text-[14px] text-amy-cream/60 text-center md:text-left">
          <strong className="block text-[16px] font-medium text-amy-cream/70 mb-1">The Calm Anchor</strong>
          Part of the <button onClick={onBackToHome} className="text-amy-cream/60 hover:text-amy-cream transition-colors">Tim Campbell Calm</button> family
        </div>
        <div className="text-[12px] text-amy-gold/60 text-center md:text-right">
          <button onClick={onBackToHome} className="text-amy-cream/60 hover:text-amy-cream transition-colors tracking-[0.05em]">timcampbellcalm.com</button>
        </div>
      </footer>
      
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.1); }
        }
      `}</style>
    </div>
  );
};
