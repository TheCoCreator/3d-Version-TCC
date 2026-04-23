
import React, { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';

interface MemberLoginGateProps {
  onAuthenticated: () => void;
}

export const MemberLoginGate: React.FC<MemberLoginGateProps> = ({ 
  onAuthenticated,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace this demo login with real auth (e.g., Supabase / Firebase + Stripe webhooks).
    // For now, any input allows entry.
    onAuthenticated();
  };

  return (
    <div className="min-h-screen bg-amy-lightBlue flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl border border-slate-100">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 bg-amy-gold/20 text-amy-navy rounded-full flex items-center justify-center mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-amy-navy mb-2">Member Login</h1>
            <p className="text-slate-600 text-lg">
              Access your Calm Anchor replays and tools.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amy-gold focus:border-amy-gold outline-none transition-all text-lg"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amy-gold focus:border-amy-gold outline-none transition-all text-lg"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amy-navy hover:bg-slate-800 text-white font-bold py-5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-lg active:scale-[0.98]"
            >
              Log in to Member Area
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-10 italic">
            Authorized members only. Please check your confirmation email for credentials.
          </p>
        </div>
      </div>

      <footer className="w-full py-12 px-6 text-center text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black opacity-50">
        <div className="flex flex-col gap-4">
            <p>Tim Campbell — The Calm Anchor</p>
            <div className="flex justify-center gap-6">
                <a href="/privacy" className="hover:text-amy-navy transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-amy-navy transition-colors">Terms</a>
                <a href="/support" className="hover:text-amy-navy transition-colors">Support</a>
            </div>
        </div>
      </footer>
    </div>
  );
};
