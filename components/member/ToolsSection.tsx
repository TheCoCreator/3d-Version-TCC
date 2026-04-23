
import React from 'react';
import { Headphones, FileText, Download } from 'lucide-react';

// Mock data for tools
const TOOLS = [
  {
    id: 1,
    title: "The 3-Point Grounding Check",
    tag: "On Shift",
    desc: "A quick physical scan to drop your shoulders and deepen breath in 30 seconds."
  },
  {
    id: 2,
    title: "Car Decompression Audio",
    tag: "Transition",
    desc: "Play this 4-minute track before you walk into your house to leave the shift behind."
  },
  {
    id: 3,
    title: "Sleep Readiness Guide",
    tag: "Before Bed",
    desc: "A PDF guide with 3 somatic movements to tell your body it's safe to sleep."
  },
  {
    id: 4,
    title: "Box Breathing Audio",
    tag: "High Stress",
    desc: "Guided audio for the classic regulation technique used by first responders."
  }
];

export const ToolsSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Weekly Calm Anchor Tools</h2>
        <p className="text-slate-600">Quick reference for the resets you’ve learned in session.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TOOLS.map((tool) => (
          <div key={tool.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-teal-200 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-teal-50 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {tool.tag}
              </div>
              <Headphones className="w-5 h-5 text-slate-300" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.title}</h3>
            <p className="text-slate-600 mb-6">{tool.desc}</p>
            
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-sm font-medium transition-colors">
                <Headphones className="w-4 h-4" />
                Open Audio
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-sm font-medium transition-colors">
                <FileText className="w-4 h-4" />
                See Notes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
