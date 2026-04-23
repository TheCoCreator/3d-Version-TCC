import React from 'react';
import { Calendar, PlayCircle, Headphones, ArrowRight } from 'lucide-react';

interface DashboardSectionProps {
  onNavigate: (section: "replays" | "tools") => void;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Header */}
      <header className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back to The 911 Calm Anchor</h1>
        <p className="text-slate-600">Your latest session, tools, and notes live here.</p>
      </header>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Next Live Session */}
        <div className="bg-amy-navy text-white p-6 rounded-xl shadow-md flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 mb-4 text-amy-gold uppercase text-xs font-bold tracking-wider">
              <Calendar className="w-4 h-4" />
              Next Live Session
            </div>
            <h3 className="text-xl font-bold mb-2">This Wednesday</h3>
            <p className="text-blue-100">8:00 PM Atlantic Time</p>
          </div>
          <button className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-semibold transition-colors text-center">
            Add to Calendar
          </button>
        </div>

        {/* Latest Replay */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 mb-4 text-slate-500 uppercase text-xs font-bold tracking-wider">
              <PlayCircle className="w-4 h-4" />
              Latest Replay
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Releasing the "Hyper-Vigilant" Watch</h3>
            <p className="text-slate-600 text-sm line-clamp-2">
              A session focused on telling your nervous system it doesn't need to scan the room right now.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('replays')}
            className="mt-6 w-full py-3 border border-slate-200 hover:border-amy-orange hover:text-amy-orange rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2"
          >
            Watch Replay <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Tool */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 mb-4 text-slate-500 uppercase text-xs font-bold tracking-wider">
              <Headphones className="w-4 h-4" />
              Featured Tool
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">The 3-Point Grounding Check</h3>
            <p className="text-slate-600 text-sm line-clamp-2">
              A 2-minute audio guide to use in the car before walking into your house.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('tools')}
            className="mt-6 w-full py-3 border border-slate-200 hover:border-amy-orange hover:text-amy-orange rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2"
          >
            Open Tool <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};