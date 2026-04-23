import React, { useEffect } from 'react';
import { Anchor } from 'lucide-react';

interface TalkItOutPageProps {
  onBackToHome: () => void;
}

export const TalkItOutPage: React.FC<TalkItOutPageProps> = ({ onBackToHome }) => {
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
          Email to book
        </a>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-8 pt-[120px] pb-20 relative overflow-hidden">
        {/* Radial gradient background accent */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-radial-gradient from-amy-gold/10 to-transparent pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(240,194,123,0.12) 0%, transparent 70%)' }}></div>
        
        <div className="max-w-[760px] mx-auto w-full relative z-10">
          <p className="text-[11px] tracking-[0.25em] uppercase text-amy-gold mb-7 font-normal hero-fade-in opacity-0 translate-y-6 transition-all duration-700">
            Private 1:1 Sessions — Talk It Out with Tim
          </p>
          <h1 className="text-[42px] md:text-[6vw] lg:text-[72px] font-light text-amy-cream mb-8 leading-[1.15] max-w-[780px] hero-fade-in opacity-0 translate-y-6 transition-all duration-700">
            For the ones who hold it<br />
            together all shift.<br />
            <em className="font-script text-amy-cream/70 not-italic text-[1.1em]">And can't switch off after.</em>
          </h1>
          <p className="text-[18px] text-amy-cream/60 max-w-[480px] leading-[1.7] mb-[52px] font-light hero-fade-in opacity-0 translate-y-6 transition-all duration-700">
            A private session that helps your body let go of what it's still holding —
            without needing to explain everything first.
          </p>
          <div className="hero-fade-in opacity-0 translate-y-6 transition-all duration-700">
            <a href="#book" className="inline-block font-sans text-[12px] font-normal tracking-[0.2em] uppercase py-[18px] px-[44px] border border-amy-gold text-amy-cream hover:bg-amy-gold hover:text-amy-navy transition-all duration-400 relative overflow-hidden group">
              <span className="relative z-10">Email me to book</span>
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
            You're home. Shift is done.
            <br /><br />
            But your body <em className="font-script text-amy-cream not-italic text-[1.1em]">doesn't know that yet.</em>
            <br /><br />
            You're still scanning, still carrying it —
            the ones you couldn't help, the decisions you had to make,
            the weight of holding everyone else together.
            <br /><br />
            You've tried switching off. It's not that simple.
          </p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="py-[100px] border-t border-amy-gold/20">
        <div className="max-w-[760px] mx-auto px-8">
          <span className="text-[11px] tracking-[0.25em] uppercase text-amy-gold mb-5 block fade-in-section opacity-0 translate-y-6 transition-all duration-700">What this is</span>
          <h2 className="text-[32px] md:text-[4vw] lg:text-[52px] font-light text-amy-cream mb-10 max-w-[560px] leading-[1.15] fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            Not therapy.<br />Not coaching.<br />Something closer.
          </h2>
          <p className="text-[17px] text-amy-cream/60 max-w-[520px] mb-8 font-light fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            This is a guided 1:1 session using awareness, conversation, and
            body-based attention to help your nervous system do what it's been
            trying to do — reset.
          </p>
          <p className="text-[17px] text-amy-cream/60 max-w-[520px] mb-8 font-light fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-100">
            We work with what's already happening in you. Not around it.
            You don't need to prepare anything, explain your whole history,
            or know what you need.
          </p>
          <p className="font-script text-[20px] text-amy-cream/70 italic fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-150">
            "We use your words — not scripts or advice."
          </p>
        </div>

        {/* THE 3 STEPS */}
        <div className="max-w-[1020px] mx-auto px-8 mt-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-amy-gold/20 border border-amy-gold/20 fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            <div className="px-9 py-12 bg-amy-navy relative">
              <span className="font-serif text-[11px] tracking-[0.2em] text-amy-gold/70 mb-5 block">Step 01</span>
              <h3 className="font-serif text-[26px] font-normal text-amy-cream mb-4 leading-[1.2]">A free 15-min call</h3>
              <p className="text-[15px] text-amy-cream/60 leading-[1.7] font-light mb-5">
                We talk about what's happening. I listen. You don't need to have it figured out.
                If it feels like a fit, we go deeper.
              </p>
              <span className="inline-block mt-5 text-[11px] tracking-[0.15em] uppercase text-amy-gold border border-amy-gold/30 px-3 py-1">Free — no obligation</span>
            </div>
            <div className="px-9 py-12 bg-amy-navy relative">
              <span className="font-serif text-[11px] tracking-[0.2em] text-amy-gold/70 mb-5 block">Step 02</span>
              <h3 className="font-serif text-[26px] font-normal text-amy-cream mb-4 leading-[1.2]">A 45-min session</h3>
              <p className="text-[15px] text-amy-cream/60 leading-[1.7] font-light mb-5">
                We work with what's actually there. You'll notice something
                shift before the session ends. I'll show you how this works.
              </p>
              <span className="inline-block mt-5 text-[11px] tracking-[0.15em] uppercase text-amy-gold border border-amy-gold/30 px-3 py-1">Free — see the work</span>
            </div>
            <div className="px-9 py-12 bg-amy-navy relative">
              <span className="font-serif text-[11px] tracking-[0.2em] text-amy-gold/70 mb-5 block">Step 03</span>
              <h3 className="font-serif text-[26px] font-normal text-amy-cream mb-4 leading-[1.2]">You decide</h3>
              <p className="text-[15px] text-amy-cream/60 leading-[1.7] font-light mb-5">
                If it resonates, we talk about what continued work looks like.
                No pressure. You'll already have felt something change.
              </p>
              <span className="inline-block mt-5 text-[11px] tracking-[0.15em] uppercase text-amy-gold border border-amy-gold/30 px-3 py-1">Your choice entirely</span>
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
                We find where it shows up in you. Not the story about it —
                the actual sensation, the weight, the place it lives.
              </p>
            </div>
            <div>
              <div className="font-serif text-[48px] font-light text-amy-gold/40 leading-none mb-2">02</div>
              <h3 className="font-serif text-[22px] font-normal text-amy-cream mb-2.5">Explore</h3>
              <p className="text-[15px] text-amy-cream/60 leading-[1.7]">
                We stay with it. Not to fix it or push it away —
                to let your system show us what it needs.
              </p>
            </div>
            <div>
              <div className="font-serif text-[48px] font-light text-amy-gold/40 leading-none mb-2">03</div>
              <h3 className="font-serif text-[22px] font-normal text-amy-cream mb-2.5">Shift</h3>
              <p className="text-[15px] text-amy-cream/60 leading-[1.7]">
                Something moves. It always does.
                You'll feel it — not just think it.
              </p>
            </div>
            <div>
              <div className="font-serif text-[48px] font-light text-amy-gold/40 leading-none mb-2">04</div>
              <h3 className="font-serif text-[22px] font-normal text-amy-cream mb-2.5">Anchor</h3>
              <p className="text-[15px] text-amy-cream/60 leading-[1.7]">
                We make the change real — something you can return to,
                not just a good feeling that fades by morning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-[100px] border-t border-amy-gold/20">
        <div className="max-w-[760px] mx-auto px-8">
          <span className="text-[11px] tracking-[0.25em] uppercase text-amy-gold mb-12 block fade-in-section opacity-0 translate-y-6 transition-all duration-700">What people notice</span>

          <div className="border-l-2 border-amy-gold/30 pl-8 py-1 mb-14 fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            <blockquote className="font-serif text-[20px] md:text-[2.5vw] lg:text-[28px] font-light italic text-amy-cream/70 leading-[1.55] mb-4">
              "I didn't realise how tense I was until I wasn't anymore.
              I walked in thinking I just needed to vent.
              Something actually changed."
            </blockquote>
            <cite className="text-[12px] tracking-[0.15em] uppercase text-amy-cream/60 not-italic">— Healthcare worker, Halifax</cite>
          </div>

          <div className="border-l-2 border-amy-gold/30 pl-8 py-1 mb-14 fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-100">
            <blockquote className="font-serif text-[20px] md:text-[2.5vw] lg:text-[28px] font-light italic text-amy-cream/70 leading-[1.55] mb-4">
              "Tim doesn't try to fix you. He just stays with you until
              something loosens. I didn't expect that to work as fast as it did."
            </blockquote>
            <cite className="text-[12px] tracking-[0.15em] uppercase text-amy-cream/60 not-italic">— Registered nurse, 12 years in emergency care</cite>
          </div>

          <div className="border-l-2 border-amy-gold/30 pl-8 py-1 fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-200">
            <blockquote className="font-serif text-[20px] md:text-[2.5vw] lg:text-[28px] font-light italic text-amy-cream/70 leading-[1.55] mb-4">
              "I've done therapy. I've done coaching. This is different.
              It's quieter. And the quiet does something."
            </blockquote>
            <cite className="text-[12px] tracking-[0.15em] uppercase text-amy-cream/60 not-italic">— ICU nurse</cite>
          </div>
        </div>
      </section>

      {/* FOR YOU */}
      <section className="py-[100px] border-t border-amy-gold/20">
        <div className="max-w-[760px] mx-auto px-8">
          <span className="text-[11px] tracking-[0.25em] uppercase text-amy-gold mb-5 block fade-in-section opacity-0 translate-y-6 transition-all duration-700">Who this is for</span>
          <h2 className="text-[32px] md:text-[4vw] lg:text-[52px] font-light text-amy-cream mb-12 leading-[1.15] fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            You might be the right person<br />if any of this lands.
          </h2>

          <ul className="mt-12 fade-in-section opacity-0 translate-y-6 transition-all duration-700">
            <li className="flex items-start gap-5 py-6 border-t border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">You're a nurse or healthcare worker who carries the weight of your work home with you — even when you're trying not to.</p>
            </li>
            <li className="flex items-start gap-5 py-6 border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">You're not in crisis. You're just tired in a way that sleep doesn't fix.</p>
            </li>
            <li className="flex items-start gap-5 py-6 border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">You've tried talking about it. You've tried not talking about it. Neither one quite reaches where it lives.</p>
            </li>
            <li className="flex items-start gap-5 py-6 border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">You hold it together for everyone else. You're looking for somewhere to finally put it down.</p>
            </li>
            <li className="flex items-start gap-5 py-6 border-b border-amy-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amy-gold shrink-0 mt-2.5"></div>
              <p className="text-[17px] text-amy-cream/70 font-light">You're curious whether this kind of thing could actually work for someone like you.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-[120px] px-8 bg-slate-850 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-radial-gradient from-amy-gold/10 to-transparent pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(240,194,123,0.08) 0%, transparent 70%)' }}></div>
        
        <div className="max-w-[580px] mx-auto relative z-10">
          <p className="text-[11px] tracking-[0.25em] uppercase text-amy-gold mb-6 fade-in-section opacity-0 translate-y-6 transition-all duration-700">If you're curious</p>
          <h2 className="text-[36px] md:text-[5vw] lg:text-[64px] font-light text-amy-cream mb-5 leading-[1.2] fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-100">
            The first call<br />costs nothing.
          </h2>
          <p className="text-[16px] text-amy-cream/60 max-w-[380px] mx-auto mb-[52px] fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-200">
            15 minutes. No prep required. We talk about what's happening,
            and you'll know by the end whether this feels right.
          </p>
          <a href="mailto:hello@timcampbellcalm.com?subject=Booking%20a%20Talk%20It%20Out%20Session" className="inline-block font-sans text-[12px] font-normal tracking-[0.2em] uppercase py-[18px] px-[44px] border border-amy-gold text-amy-cream hover:bg-amy-gold hover:text-amy-navy transition-all duration-400 relative overflow-hidden group fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-300">
            <span className="relative z-10">Email me to book</span>
            <div className="absolute inset-0 bg-amy-gold scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100 z-0"></div>
          </a>
          <p className="mt-6 text-[13px] text-amy-gold/60 tracking-[0.05em] fade-in-section opacity-0 translate-y-6 transition-all duration-700 delay-400">
            No pressure. No pitch. Just a conversation.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-[60px] px-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-amy-gold/20 bg-amy-navy">
        <div className="font-serif text-[14px] text-amy-cream/60 text-center md:text-left">
          <strong className="block text-[16px] font-medium text-amy-cream/70 mb-1">Talk It Out with Tim</strong>
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
