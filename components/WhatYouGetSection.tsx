import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, Video, Headphones, ShieldCheck, FileText } from 'lucide-react';

export const WhatYouGetSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: "Weekly 60-Minute Live Session",
      subtitle: "Every Wednesday @ 8pm AST",
      icon: Video,
      description: "Slip into a calm, guided space. We start with intention setting, move into a grounded process designed for first responders, and end with deep regulation. No cameras required—you can just listen."
    },
    {
      title: "Release Without Rehearsing",
      subtitle: "Science-backed release",
      icon: ShieldCheck,
      description: "This is a body-first release that doesn’t require replaying calls or running events through your head. The nervous system is guided to let go of what it’s been holding, so many people leave feeling lighter and more settled."
    },
    {
      title: "Full Replay Library Access",
      subtitle: "Never fall behind",
      icon: Headphones,
      description: "Shift work is unpredictable. If you miss a live session, the replay is waiting for you in the member portal. Watch it when you get home, before bed, or on your day off."
    },
    {
      title: "Weekly 'Pocket Tools'",
      subtitle: "For on-shift use",
      icon: FileText,
      description: "Each week you get a short, actionable tool (audio or PDF) to use in the car, in the station, or in the hallway between calls. Real relief in under 3 minutes."
    }
  ];

  return (
    <section className="w-full bg-amy-navy py-24 px-6 text-white relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Increased margin-bottom from mb-16 to mb-32 to create more space for the arrow */}
        <div className="text-center mb-32 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Inside 911 Reset Wednesdays, <br/> <span className="text-amy-gold">You'll Get:</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Everything you need to downshift your nervous system, delivered in a way that respects your schedule.
            </p>
            
            {/* Fancy Arrow & Script Text - Orange & Pointing Down */}
            <div className="absolute right-0 top-32 hidden lg:block">
                <p className="font-script text-2xl text-amy-orange mb-2 rotate-[-5deg]">Click to read more!</p>
                <svg width="50" height="60" viewBox="0 0 50 60" fill="none" className="text-amy-orange ml-10">
                    {/* Curved line pointing down and left */}
                    <path d="M40 0 C 45 20, 40 40, 10 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                    {/* Arrowhead */}
                    <path d="M10 55 L 22 50 M 10 55 L 18 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
            </div>
        </div>

        <div className="space-y-4">
            {features.map((feature, index) => {
                const isOpen = openIndex === index;
                const Icon = feature.icon;
                
                return (
                    <div 
                        key={index} 
                        className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-2xl scale-[1.02]' : 'shadow-md opacity-90'}`}
                    >
                        <button 
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                        >
                            <div className="flex items-center gap-6">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-amy-gold text-amy-navy' : 'bg-slate-100 text-slate-400'}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className={`text-xl md:text-2xl font-bold ${isOpen ? 'text-amy-navy' : 'text-slate-700'}`}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mt-1">
                                        {feature.subtitle}
                                    </p>
                                </div>
                            </div>
                            
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-amy-navy text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                                <ChevronDown className="w-6 h-6" />
                            </div>
                        </button>

                        <div className={`accordion-content ${isOpen ? 'open' : ''} bg-amy-lightBlue border-t border-slate-100`}>
                            <div className="p-8 pt-4">
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

      </div>
    </section>
  );
};