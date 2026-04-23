import React from 'react';
import { Play } from 'lucide-react';

// Mock data for replays
const REPLAYS = [
  {
    id: 1,
    title: "Releasing the 'Hyper-Vigilant' Watch",
    date: "Oct 25, 2023",
    duration: "48 min",
    desc: "How to signal safety to a brain that has been trained to scan for danger."
  },
  {
    id: 2,
    title: "Shoulders Down, Breath Deep",
    date: "Oct 18, 2023",
    duration: "52 min",
    desc: "Physical cues that bypass the thinking brain and create instant regulation."
  },
  {
    id: 3,
    title: "The Transition: Car to Home",
    date: "Oct 11, 2023",
    duration: "45 min",
    desc: "Creating a boundary between the shift you just finished and the life you're walking into."
  },
  {
    id: 4,
    title: "Quiet in the Chaos",
    date: "Oct 04, 2023",
    duration: "50 min",
    desc: "Finding a micro-moment of silence even when the monitors are beeping."
  }
];

export const ReplaysSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Session Replays</h2>
        <p className="text-slate-600">Watch past The 911 Calm Anchor sessions on your own time.</p>
      </header>

      {/* TODO: Replace this static list with real data from a backend or video host (e.g., Vimeo, Loom, Kajabi). */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REPLAYS.map((replay) => (
          <div key={replay.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            {/* Video Placeholder */}
            <div className="aspect-video bg-slate-100 flex items-center justify-center group cursor-pointer relative">
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 text-amy-orange ml-1" />
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-center mb-2 text-xs text-slate-500 font-medium uppercase tracking-wide">
                <span>{replay.date}</span>
                <span>{replay.duration}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                {replay.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {replay.desc}
              </p>
              <button className="text-amy-navy text-sm font-bold hover:text-amy-orange">
                Play Session &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};