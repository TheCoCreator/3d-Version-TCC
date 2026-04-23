import React from 'react';
import { CreditCard, User, ExternalLink } from 'lucide-react';

export const AccountSection: React.FC = () => {
  return (
    <div className="max-w-2xl space-y-8 animate-fade-in">
      <header>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Account & Subscription</h2>
        <p className="text-slate-600">Manage your details and billing.</p>
      </header>

      {/* User Details Placeholder */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <User className="w-5 h-5 text-amy-orange" />
          Your Details
        </h3>
        
        {/* TODO: Replace hard-coded user details with real user data from your auth provider. */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Email Address</label>
            <input 
              type="text" 
              value="member@example.com" 
              disabled 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Name</label>
            <input 
              type="text" 
              value="Demo Member" 
              disabled 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-700"
            />
          </div>
        </div>
      </section>

      {/* Subscription Status */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-amy-orange" />
          Subscription Status
        </h3>

        <div className="bg-green-50 text-green-800 px-4 py-3 rounded-lg text-sm font-medium mb-6 inline-block">
          ● Active Subscription (Demo)
        </div>

        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          You are subscribed to **The 911 Calm Anchor** Full Access plan.
        </p>

        {/* TODO: Wire this to a real Stripe customer portal link. */}
        <button 
          onClick={() => alert("In a real app, this would open the Stripe Customer Portal.")}
          className="flex items-center gap-2 text-amy-navy font-bold hover:text-amy-orange transition-colors"
        >
          Manage billing via Stripe <ExternalLink className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};