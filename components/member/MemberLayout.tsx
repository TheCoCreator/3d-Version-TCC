
import React, { useState } from 'react';
import { LayoutDashboard, PlayCircle, Headphones, User, LogOut, Menu, X, Anchor } from 'lucide-react';

interface MemberLayoutProps {
  activeSection: string;
  onSectionChange: (section: "dashboard" | "replays" | "tools" | "account") => void;
  onLogout: () => void;
  children: React.ReactNode;
}

export const MemberLayout: React.FC<MemberLayoutProps> = ({ 
  activeSection, 
  onSectionChange, 
  onLogout, 
  children 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavItem = ({ section, icon: Icon, label }: { section: string, icon: any, label: string }) => {
    const isActive = activeSection === section;
    return (
      <button
        onClick={() => {
          onSectionChange(section as any);
          setMobileMenuOpen(false);
        }}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
          isActive 
            ? 'bg-teal-50 text-teal-800 font-semibold' 
            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
        }`}
      >
        <Icon className={`w-5 h-5 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
        {label}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center gap-2 font-bold text-slate-800">
          <Anchor className="w-5 h-5 text-teal-700" />
          <span>MEMBER AREA</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-600">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-10 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:h-screen sticky top-0
        ${mobileMenuOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col">
          {/* Logo Area (Desktop) */}
          <div className="hidden md:flex items-center gap-2 p-6 border-b border-slate-100">
            <Anchor className="w-6 h-6 text-teal-700" />
            <span className="font-bold text-slate-800 tracking-wide">THE CALM ANCHOR</span>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <div className="pt-4 md:pt-0">
              <NavItem section="dashboard" icon={LayoutDashboard} label="Dashboard" />
              <NavItem section="replays" icon={PlayCircle} label="Session Replays" />
              <NavItem section="tools" icon={Headphones} label="Weekly Tools" />
              <div className="my-4 border-t border-slate-100 mx-4"></div>
              <NavItem section="account" icon={User} label="My Account" />
            </div>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-slate-100">
            <button 
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Log out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto h-screen">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-0 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};
