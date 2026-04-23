
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface HomePageProps {
  onJoinReset: () => void;
}

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] } }
};

const StaggerGroup = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className={className}>
    {children}
  </motion.div>
);

const StaggerChild = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div variants={staggerItem} className={className}>
    {children}
  </motion.div>
);

const DrawLine = () => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
    className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent origin-center"
  />
);

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-serif text-xl md:text-2xl text-foreground pr-8">{question}</span>
        <span className="text-muted-foreground transition-transform duration-300 flex-shrink-0">
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground text-lg font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const HomePage: React.FC<HomePageProps> = ({ onJoinReset }) => {
  const [scrolled, setScrolled] = useState(false);
  
  // Smooth scroll interactions for the background video
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 1500], [0, 200]);
  const videoOpacity = useTransform(scrollY, [0, 800], [0.5, 0.15]);
  const videoScale = useTransform(scrollY, [0, 1000], [1, 1.05]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* BACKGROUND INTERACTIVE VIDEO LAYER */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-background">
        <motion.div 
          style={{ y: videoY, opacity: videoOpacity, scale: videoScale }}
          className="absolute inset-0 w-full h-full origin-center"
        >
          <video 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover mix-blend-screen"
          />
        </motion.div>
        {/* Calming gradient overlay to ensure text is perfectly legible always */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/95 pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col w-full min-h-screen selection:bg-primary/20">
        {/* HEADER */}
        <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out px-4 py-4 md:px-8 ${scrolled ? 'py-4' : 'py-6'}`}>
          <div className={`max-w-6xl mx-auto flex justify-between items-center bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full px-6 py-3 transition-all duration-500 ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}>
            <div className="font-serif text-lg md:text-xl tracking-wide text-foreground">
              The Calm Anchor
            </div>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <button className="hover:text-foreground transition-colors">Home</button>
              <button className="hover:text-foreground transition-colors">Wednesday Reset</button>
              <button className="hover:text-foreground transition-colors">Replays</button>
              <button className="hover:text-foreground transition-colors">Free Reset</button>
            </nav>

            <button 
              onClick={onJoinReset}
              className="bg-white/[0.05] hover:bg-white/[0.1] text-foreground border border-white/[0.1] hover:border-white/[0.2] text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Join the Wednesday Reset
            </button>
          </div>
        </header>

        <main className="pb-32">
          {/* HERO SECTION */}
          <section className="relative pt-40 md:pt-52 pb-24 px-6 flex flex-col items-center text-center">
            
            <div className="max-w-3xl mx-auto space-y-12">
              <FadeIn>
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md text-xs tracking-widest uppercase text-muted-foreground mb-8">
                  For nurses who clock out but can't stand down
                </div>
                
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground font-light tracking-tight leading-[1.1] mb-6">
                  Your body is still at work. <br /> Let's bring it home.
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground font-light mb-16 max-w-2xl mx-auto leading-relaxed">
                  A quiet space for nurses, caregivers, and anyone who carries the shift with them.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} className="space-y-3 text-lg md:text-xl text-primary font-light tracking-wide mb-16">
                <p>No talking.</p>
                <p>No processing.</p>
                <p>No pressure to explain anything.</p>
                <p>Just a moment where your system can finally stand down.</p>
                <p className="text-sm text-muted-foreground pt-4 uppercase tracking-widest">Everything happens in one place now.</p>
              </FadeIn>

              <FadeIn delay={0.4} className="flex flex-col items-center gap-6">
                <button 
                  onClick={onJoinReset}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg md:text-xl font-medium px-8 py-4 rounded-full transition-all duration-300 min-w-[300px] shadow-lg shadow-primary/10"
                >
                  Join the Wednesday Reset — 8 PM
                </button>
                
                <button className="text-muted-foreground hover:text-foreground font-medium text-sm md:text-base border-b border-muted hover:border-foreground pb-1 transition-all duration-300">
                  Start with the Free 10-Minute Reset
                </button>
                
                <p className="text-sm text-muted-foreground/70 tracking-wide font-light">
                  No camera required. Replay included. Come as you are.
                </p>
              </FadeIn>
            </div>
          </section>

          {/* SECTION 2 — RECOGNITION */}
          <section className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
              <FadeIn className="text-center mb-20 max-w-2xl mx-auto">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Sound familiar?</h3>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light mb-6">You know how to care for everyone else.</h2>
                <p className="text-xl text-muted-foreground font-light">Your body just never got the memo that the shift is over.</p>
              </FadeIn>

              <StaggerGroup className="grid md:grid-cols-3 gap-6">
                <StaggerChild className="bg-white/[0.03] p-8 md:p-10 rounded-3xl border border-white/[0.08] backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <h4 className="font-serif text-2xl text-foreground mb-4 font-light">Your body stayed on the floor.</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    You clocked out. Your nervous system kept going. Still scanning, still bracing, still waiting for the next thing. Even on your day off.
                  </p>
                </StaggerChild>
                
                <StaggerChild className="bg-white/[0.03] p-8 md:p-10 rounded-3xl border border-white/[0.08] backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <h4 className="font-serif text-2xl text-foreground mb-4 font-light">You know every strategy. Your body ignored them all.</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Deep breathing. Journaling. That meditation app you opened twice. You understand calm in your head. Your nervous system has been waiting for something it can actually feel.
                  </p>
                </StaggerChild>

                <StaggerChild className="bg-white/[0.03] p-8 md:p-10 rounded-3xl border border-white/[0.08] backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <h4 className="font-serif text-2xl text-foreground mb-4 font-light">Talking named it. Your body is still carrying it.</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    You've processed the shift. You've named the burnout. And somehow the weight is still there in your shoulders on the drive home. The body needs a different kind of signal.
                  </p>
                </StaggerChild>
              </StaggerGroup>
              
              <FadeIn delay={0.4} className="mt-16 text-center">
                <button 
                  onClick={onJoinReset}
                  className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-foreground px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  This is for you
                </button>
              </FadeIn>
            </div>
          </section>

          {/* SECTION 3 — WHAT THE MAIN OFFER IS */}
          <section className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
              <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">A steady way to stand down</h3>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light mb-6">One hour. One signal. This is the 911 Calm Anchor.</h2>
                <p className="text-xl text-muted-foreground font-light mb-12">A weekly space where your system stands down.</p>
                <div className="space-y-2 text-lg text-primary/80 font-light tracking-wide">
                  <p>Live each Wednesday.</p>
                  <p>Replay included.</p>
                  <p>You don't have to talk.</p>
                  <p>You don't have to explain anything.</p>
                  <p>You just arrive.</p>
                </div>
              </FadeIn>

              <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                <StaggerChild className="p-8 border border-white/[0.08] rounded-3xl bg-white/[0.02] backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <div className="text-4xl font-serif text-muted mb-6 font-light">1</div>
                  <h4 className="text-lg font-medium text-foreground mb-3">Show up</h4>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    Wednesdays at 8 PM AST, or the replay when your schedule allows. Camera off or on. Silent if you want. Just arrive as you are.
                  </p>
                </StaggerChild>
                
                <StaggerChild className="p-8 border border-white/[0.08] rounded-3xl bg-white/[0.02] backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <div className="text-4xl font-serif text-muted mb-6 font-light">2</div>
                  <h4 className="text-lg font-medium text-foreground mb-3">Settle in</h4>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    Tim holds a steady, safe space online. You listen as your body tracks the calm instead of the chaos.
                  </p>
                </StaggerChild>

                <StaggerChild className="p-8 border border-white/[0.08] rounded-3xl bg-white/[0.02] backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <div className="text-4xl font-serif text-muted mb-6 font-light">3</div>
                  <h4 className="text-lg font-medium text-foreground mb-3">Your body gets the signal</h4>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    Muscles soften. Breath slows. That low-grade alarm that ran all shift starts to quiet.
                  </p>
                </StaggerChild>

                <StaggerChild className="p-8 border border-white/[0.08] rounded-3xl bg-white/[0.02] backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <div className="text-4xl font-serif text-muted mb-6 font-light">4</div>
                  <h4 className="text-lg font-medium text-foreground mb-3">Come back</h4>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    Once a week. That's the rhythm. Over time your baseline shifts. You carry the calm into the shift instead of leaving it behind in the parking lot.
                  </p>
                </StaggerChild>
              </StaggerGroup>

              <FadeIn delay={0.5} className="mt-16 text-center">
                <button 
                  onClick={onJoinReset}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
                >
                  Join the Wednesday Session
                </button>
              </FadeIn>
            </div>
          </section>

          {/* SECTION 4 — THREE WAYS IN */}
          <section className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
              <FadeIn className="mb-16">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">What we offer</h3>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light">Three ways in. All of them steady.</h2>
              </FadeIn>

              <StaggerGroup className="grid lg:grid-cols-3 gap-6">
                <StaggerChild className="flex flex-col bg-white/[0.03] backdrop-blur-md p-10 rounded-3xl border border-white/[0.08] transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <h4 className="font-serif text-3xl text-foreground mb-6 font-light">The Weekly Group Session</h4>
                  <p className="text-muted-foreground font-light leading-relaxed mb-10 flex-grow">
                    Live on Zoom, Wednesdays at 8 PM AST. One hour. Body-first. A quiet group space where your nervous system can stand down.
                  </p>
                  <button className="bg-transparent border border-muted hover:border-foreground text-foreground px-6 py-3 rounded-full transition-all duration-300 self-start text-sm">
                    Join Live
                  </button>
                </StaggerChild>
                
                <StaggerChild className="flex flex-col bg-white/[0.03] backdrop-blur-md p-10 rounded-3xl border border-white/[0.08] transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <h4 className="font-serif text-3xl text-foreground mb-6 font-light">The Replay Library</h4>
                  <p className="text-muted-foreground font-light leading-relaxed mb-10 flex-grow">
                    Every past session, on demand. After a hard shift. Before bed. Whenever your body needs a signal to slow down.
                  </p>
                  <button className="bg-transparent border border-muted hover:border-foreground text-foreground px-6 py-3 rounded-full transition-all duration-300 self-start text-sm">
                    Browse Replays
                  </button>
                </StaggerChild>
                
                <StaggerChild className="flex flex-col bg-white/[0.03] backdrop-blur-md p-10 rounded-3xl border border-white/[0.08] transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <h4 className="font-serif text-3xl text-foreground mb-6 font-light">Free 10-Minute Reset</h4>
                  <p className="text-muted-foreground font-light leading-relaxed mb-10 flex-grow">
                    Want to feel it before you commit? Start here. A short guided reset that gives your body a gentle downshift.
                  </p>
                  <button className="bg-transparent border border-muted hover:border-foreground text-foreground px-6 py-3 rounded-full transition-all duration-300 self-start text-sm">
                    Start Free Reset
                  </button>
                </StaggerChild>
              </StaggerGroup>
            </div>
          </section>

          {/* SECTION 5 — WHY PEOPLE COME BACK */}
          <section className="py-24 md:py-32 px-6 overflow-hidden relative">
            <DrawLine />
            
            <div className="max-w-4xl mx-auto space-y-6">
              <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">What makes us different</h3>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light mb-8">Why people come back, week after week.</h2>
                
                <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
                  <p>This isn't built on theory.</p>
                  <p>Tim has been in the room.</p>
                  <p>Hospitals. High-pressure moments. Real situations where there's no time to think.</p>
                  <p className="text-primary tracking-wide pt-4">Just something your body already understands.</p>
                </div>
              </FadeIn>

              <StaggerGroup className="grid md:grid-cols-2 gap-6 pt-12">
                <StaggerChild className="bg-white/[0.03] p-8 md:p-10 rounded-3xl border border-white/[0.08] backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <h4 className="font-serif text-2xl text-foreground mb-4 font-light">Your body leads. Your mind follows.</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    This is breath, attention, and body cues. Built to reach the part of you that strategies never quite touch. You feel the shift while it's happening.
                  </p>
                </StaggerChild>

                <StaggerChild className="bg-white/[0.03] p-8 md:p-10 rounded-3xl border border-white/[0.08] backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <h4 className="font-serif text-2xl text-foreground mb-4 font-light">Tim has been in the room.</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    The kind of room where steady is the whole job. That's where this comes from. Years in it. Shaped by it.
                  </p>
                </StaggerChild>

                <StaggerChild className="bg-white/[0.03] p-8 md:p-10 rounded-3xl border border-white/[0.08] backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <h4 className="font-serif text-2xl text-foreground mb-4 font-light">The group does something solo work can't.</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    When a room full of people settles at once, you settle faster. This is how nervous systems work. They regulate in the presence of other regulated nervous systems. Most people go deeper here than they ever have on their own.
                  </p>
                </StaggerChild>

                <StaggerChild className="bg-white/[0.03] p-8 md:p-10 rounded-3xl border border-white/[0.08] backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/[0.15]">
                  <h4 className="font-serif text-2xl text-foreground mb-4 font-light">You leave with tools you can use anywhere.</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Simple, hypnosis-based cues that are invisible in public. Between patients, at the nursing station, in the parking lot before you walk in. They're yours. They go with you.
                  </p>
                </StaggerChild>
              </StaggerGroup>

              <FadeIn delay={0.5} className="pt-16 flex justify-center">
                <button 
                  onClick={onJoinReset}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full transition-all duration-300 font-medium shadow-lg"
                >
                  Join the Wednesday Sessions
                </button>
              </FadeIn>
            </div>
          </section>

          {/* SECTION 6 — QUIET CALL TO ACTION */}
          <section className="py-24 md:py-32 px-6">
            <div className="max-w-5xl mx-auto">
              <FadeIn className="bg-white/[0.02] backdrop-blur-lg border border-white/[0.1] rounded-[3rem] p-12 md:p-24 text-center shadow-2xl">
                <h2 className="font-serif text-5xl md:text-6xl text-foreground font-light mb-8 leading-tight">
                  One quiet hour. <br/> Your body finally gets to rest.
                </h2>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 text-muted-foreground font-light text-lg">
                  <span>No camera required.</span>
                  <span className="hidden md:inline text-white/20">•</span>
                  <span>Replay included.</span>
                  <span className="hidden md:inline text-white/20">•</span>
                  <span>Come as you are.</span>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <button 
                    onClick={onJoinReset}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full transition-all duration-300 font-medium w-full sm:w-auto shadow-lg shadow-primary/10"
                  >
                    Enter the Space
                  </button>
                  <button className="bg-transparent border border-white/[0.2] hover:border-foreground text-foreground px-8 py-4 rounded-full transition-all duration-300 font-medium w-full sm:w-auto">
                    Start with the Free Reset
                  </button>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* SECTION 7 — FAQ */}
          <section className="py-24 md:py-32 px-6 relative">
            <DrawLine />
            <div className="max-w-3xl mx-auto">
              <FadeIn className="text-center mb-16">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Your questions answered</h3>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light">Common Questions About Working With Us</h2>
              </FadeIn>

              <FadeIn delay={0.2} className="border-t border-border/20">
                <AccordionItem 
                  question="Do I have to talk or share anything?" 
                  answer="Camera off, voice off. Come as silent as you want. You just listen. That's enough for the session to work." 
                />
                <AccordionItem 
                  question="What actually happens during a session?" 
                  answer="Tim guides you through a body-first nervous system reset using hypnosis-based language, breath, and attention. Closer to teaching your body a new signal." 
                />
                <AccordionItem 
                  question="What if I can't make it live?" 
                  answer="Every session comes with a replay. Some people find they go even deeper watching in a quiet moment on their own. The shift happens either way." 
                />
                <AccordionItem 
                  question="Is this therapy, coaching, or hypnosis?" 
                  answer="It's group hypnosis. There's no diagnosis, no homework, no conversation required. Tim holds a steady space and guides your nervous system toward calm. What happens in the body does the rest." 
                />
                <AccordionItem 
                  question="I'm skeptical. Will this actually work for me?" 
                  answer="Skepticism is welcome here. Your nervous system responds to the signal regardless of what your thinking mind does with it. Start with the free 10-minute reset and notice what happens in your body. That's the only proof that matters." 
                />
                <AccordionItem 
                  question="How much effort does this take?" 
                  answer="Show up. That's it. Tired, in scrubs, straight from your shift. That's exactly who this is for. You've already done enough today. This hour is yours." 
                />
                <AccordionItem 
                  question="What makes group sessions different from doing this on my own?" 
                  answer="Nervous systems regulate faster in the presence of other regulated nervous systems. When a room settles together, you settle with it. Deeper and quicker than solo work allows." 
                />
              </FadeIn>
            </div>
          </section>

          {/* SECTION 8 — CONTACT */}
          <section className="py-24 md:py-32 px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 justify-between">
              <FadeIn className="md:w-1/2">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">A question before you join?</h3>
                <h2 className="font-serif text-4xl text-foreground font-light mb-6">Ask About The Calm Anchor</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  Send it. Ask about the Wednesday sessions, the replay library, or what to expect in your first session. Tim reads every message and replies within two business days.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.2} className="md:w-1/2 flex flex-col justify-center gap-6 text-lg font-light">
                <a href="mailto:hello@timcampbellcalm.com" className="text-primary hover:text-foreground transition-colors self-start pb-1 border-b border-primary/30 hover:border-foreground">hello@timcampbellcalm.com</a>
                <a href="tel:9026089319" className="text-foreground">(902) 608-9319</a>
                <div className="text-muted-foreground">Wed: 7:45 PM – 9 PM</div>
              </FadeIn>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="w-full py-12 px-6 relative border-t border-white/[0.08] bg-background/50 backdrop-blur-md">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-light text-muted-foreground">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              <button className="hover:text-foreground transition-colors">Free 10-Minute Reset</button>
              <button className="hover:text-foreground transition-colors">The 911 Calm Anchor</button>
              <button className="hover:text-foreground transition-colors">Calm Anchor Replays</button>
              <button className="hover:text-foreground transition-colors">About</button>
              <button className="hover:text-foreground transition-colors">Contact</button>
              <button className="hover:text-foreground transition-colors">Privacy Policy</button>
              <button className="hover:text-foreground transition-colors">Terms of Service</button>
            </div>
            <div className="text-muted-foreground/50 whitespace-nowrap text-xs">
              © 2026 The Calm Anchor. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

