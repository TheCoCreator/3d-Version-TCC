import React from 'react';

export const FAQSection: React.FC = () => {
  return (
    <section className="w-full bg-amy-cream py-32 px-6 relative overflow-hidden">
      {/* Decorative flourishes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-amy-gold/50"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-16">
            {/* Rhythmic Statements */}
            <div className="space-y-10">
                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <p className="text-2xl md:text-4xl text-slate-500 font-light tracking-tight">
                        Yes — <span className="text-amy-navy font-extrabold">things soften</span> <br className="md:hidden" /> sooner than expected.
                    </p>
                </div>

                <div className="w-1.5 h-1.5 bg-amy-gold rounded-full mx-auto opacity-50"></div>

                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <p className="text-2xl md:text-4xl text-slate-500 font-light tracking-tight">
                        Yes — <span className="text-amy-navy font-extrabold">the noise</span> <br className="md:hidden" /> quiets down.
                    </p>
                </div>

                <div className="w-1.5 h-1.5 bg-amy-gold rounded-full mx-auto opacity-50"></div>

                <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <p className="text-2xl md:text-4xl text-slate-500 font-light tracking-tight">
                        Yes — <span className="text-amy-navy font-extrabold">the body</span> <br className="md:hidden" /> lets go.
                    </p>
                </div>
            </div>

            {/* Summation Statement */}
            <div className="pt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="inline-block relative">
                    <h3 className="text-3xl md:text-5xl text-amy-navy font-black italic tracking-tighter leading-none relative z-10">
                        The difference carries forward.
                    </h3>
                    <div className="absolute -bottom-2 left-0 w-full h-4 bg-amy-gold/20 -rotate-1 -z-0"></div>
                </div>
                <p className="font-script text-3xl text-amy-orange mt-8 rotate-[-2deg]">It’s time to stop doing this alone.</p>
            </div>
        </div>
      </div>

      {/* Background visual anchors */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amy-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-amy-navy/5 rounded-full blur-3xl"></div>
    </section>
  );
};