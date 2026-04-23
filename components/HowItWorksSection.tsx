
import React from 'react';
import { ArrowDown } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="w-full bg-amy-cream py-24 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <h2 className="text-sm md:text-base font-bold text-slate-800 uppercase tracking-[0.2em] mb-6">
            Here’s How It Works
        </h2>
        
        <ArrowDown className="w-10 h-10 text-slate-800 mb-20" strokeWidth={1.5} />

        {/* Steps Container */}
        <div className="space-y-24 w-full">
            
            {/* Step 01 */}
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-slate-800 flex items-center justify-center text-xl font-bold text-slate-800 bg-transparent mb-8">
                    01
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-amy-navy mb-6 font-serif">
                    Join the Weekly Calm Anchor
                </h3>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                    Save your seat for the Wednesday night reset and step into a space designed to help your system soften and settle.
                </p>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-slate-800 flex items-center justify-center text-xl font-bold text-slate-800 bg-transparent mb-8">
                    02
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-amy-navy mb-6 font-serif">
                    Show Up or Watch the Replay
                </h3>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                    Come live for the guided session, or press play later when you need calm the most. Either way, your body gets a moment to stand down.
                </p>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-slate-800 flex items-center justify-center text-xl font-bold text-slate-800 bg-transparent mb-8">
                    03
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-amy-navy mb-6 font-serif">
                    Feel the Shift
                </h3>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                    Move through the rest of your week feeling steadier, clearer, and a little more at ease. Small changes add up. Your system notices.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};
