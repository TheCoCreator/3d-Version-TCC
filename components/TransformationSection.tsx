import React from 'react';
import { Star } from 'lucide-react';

export const TransformationSection: React.FC = () => {
  const outcomes = [
    "Going home without carrying the shift",
    "Responding without spiraling back into it",
    "Feeling tired without feeling emptied out",
    "Returning to a steadier baseline during the week"
  ];

  return (
    <section className="w-full bg-white py-32 px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amy-lightBlue/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amy-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Header Section */}
        <div className="text-center mb-24">
          <p className="text-amy-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">The Outcome</p>
          <h2 className="text-4xl md:text-6xl font-black text-amy-navy mb-8 tracking-tighter">
            What people notice over time
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-amy-gold"></div>
            <p className="text-xl md:text-2xl text-slate-500 font-light italic">Small shifts. Reliable relief.</p>
            <div className="h-px w-12 bg-amy-gold"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* List Column */}
          <div className="space-y-12">
            {outcomes.map((item, i) => (
              <div key={i} className="group flex items-start gap-8 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative mt-1">
                  <div className="w-3 h-3 bg-amy-orange rounded-full relative z-10 shadow-[0_0_10px_rgba(232,90,60,0.4)] transition-transform group-hover:scale-150"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-amy-orange/10 rounded-full animate-pulse"></div>
                </div>
                <p className="text-2xl md:text-3xl text-amy-navy font-bold leading-tight tracking-tight group-hover:text-amy-orange transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial Column */}
          <div className="relative">
            {/* Background "Fancy" Frame */}
            <div className="absolute inset-0 bg-amy-navy rounded-[2.5rem] rotate-2 scale-[1.02] opacity-5 -z-10"></div>
            
            <div className="bg-white p-12 md:p-16 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(10,36,88,0.12)] border border-slate-50 relative overflow-hidden group">
              {/* Star Rating */}
              <div className="flex gap-1.5 mb-10">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-6 h-6 fill-amy-gold text-amy-gold transition-transform group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>

              {/* Quote Body */}
              <blockquote className="relative">
                <span className="absolute -top-8 -left-10 text-9xl text-amy-gold/10 font-serif leading-none select-none">“</span>
                <p className="text-3xl md:text-4xl text-slate-700 italic font-serif leading-tight mb-12 relative z-10">
                  I didn’t realize how much I was holding until my body finally <span className="text-amy-navy font-bold not-italic underline decoration-amy-gold decoration-4 underline-offset-4">let go.</span>
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-amy-orange/40"></div>
                <p className="text-amy-navy font-black uppercase tracking-[0.2em] text-sm">— Member Feedback</p>
              </div>

              {/* Decorative script element */}
              <div className="absolute -bottom-4 -right-4 opacity-10 rotate-[-15deg]">
                <p className="font-script text-8xl text-amy-gold">Real Shift</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};