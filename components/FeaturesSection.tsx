
import React from 'react';
import { CheckCircle2, Video, Headphones, ShieldCheck, User } from 'lucide-react';

interface FeaturesSectionProps {
  onStartCheckout: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onStartCheckout }) => {
  return (
    <section className="w-full bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* --- NEW SECTION: The Guide (Tim's Story/Authority) --- */}
        <div className="mb-24 flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-teal-700 font-bold uppercase tracking-wider text-sm mb-4">
                    <User className="w-4 h-4" />
                    Meet Your Guide
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Hi, I'm Tim.
                </h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                    <p>
                        I'm the calm one people look toward when things get chaotic. Not flashy. Not dramatic. Just a grounded presence.
                    </p>
                    <p>
                        I don't fix people. I support people. My work is built around simple, science-backed nervous system resets and gentle awareness shifts.
                    </p>
                    <p>
                        I've spent years working in high-pressure environments—from <span className="font-semibold text-slate-800">Rural ER departments</span> to working as a <span className="font-semibold text-slate-800">Scuba Instructor</span> where panic must stay low.
                    </p>
                    <p className="italic text-slate-500 border-l-2 border-slate-300 pl-4">
                        "You should learn hypnosis. You're already doing half of it. Patients respond differently when you're around." — A local ER Doctor
                    </p>
                </div>
            </div>
            {/* Placeholder for Tim's Photo - Using a calm placeholder per LH guide "Smile/Eye Contact" */}
            <div className="w-full md:w-1/3 aspect-[3/4] bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400">
                [Tim's Photo Here]
            </div>
        </div>
        
        {/* Connection Statement */}
        <div className="text-center mb-24 py-12 px-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Calm isn’t restored in isolation.
            </h3>
            <p className="text-xl text-teal-700 font-medium mb-8">
                It deepens in connection.
            </p>
            <button 
                onClick={onStartCheckout}
                className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-colors font-semibold"
            >
                JOIN THE RESET
            </button>
        </div>
        
        {/* What Changes Section (Future Pacing) */}
        <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
            Here’s What Changes When You Stop Doing This Alone
            </h2>
            
            <ul className="space-y-6">
            {[
                { title: "Your body starts to settle again", desc: "You receive a guided Calm Anchor session each week. Your body shifts from wired to grounded." },
                { title: "You stop trying to “come down” by yourself", desc: "Replay access means the reset is always waiting when you need it." },
                { title: "You build a rhythm of steadiness", desc: "One new Calm Anchor tool each week. Real-world tools for on shift, in the car, or before bed." },
                { title: "A circle of people who get the weight", desc: "Support without needing to explain the job." }
            ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                    <span className="font-bold text-slate-900">{item.title}</span> — <span className="text-slate-600">{item.desc}</span>
                </div>
                </li>
            ))}
            </ul>
        </div>

        {/* How It Works (Consolidated Logic Flow) */}
        <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 border-b border-slate-200 pb-4">How It Works</h2>
            
            <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center font-bold text-xl border-2 border-teal-200">
                            1
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                            Join live when it fits
                            <Video className="w-5 h-5 text-teal-500" />
                        </h3>
                        <p className="text-slate-600 text-lg">
                            Wednesdays at 9pm AST, or watch the replay anytime. <br/>
                            Both create real shifts.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center font-bold text-xl border-2 border-teal-200">
                            2
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                            Receive the Calm Anchor session
                            <Headphones className="w-5 h-5 text-teal-500" />
                        </h3>
                        <p className="text-slate-600 text-lg">
                            A guided process that helps your nervous system downshift out of high alert.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center font-bold text-xl border-2 border-teal-200">
                            3
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                            Use your weekly Calm Anchor
                            <ShieldCheck className="w-5 h-5 text-teal-500" />
                        </h3>
                        <p className="text-slate-600 text-lg mb-4">
                            Simple, discreet tools you can use between calls, after hard moments, or before bed.
                        </p>
                        <p className="text-slate-500 italic bg-white border border-slate-200 p-4 rounded inline-block">
                            "You don’t have to come every week to feel the benefits. This isn’t homework — it’s a reset you can rely on."
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};
