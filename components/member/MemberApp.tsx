
import React, { useState } from 'react';
import { MemberLayout } from './MemberLayout';
import { DashboardSection } from './DashboardSection';
import { ReplaysSection } from './ReplaysSection';
import { ToolsSection } from './ToolsSection';
import { AccountSection } from './AccountSection';

interface MemberAppProps {
  onLogout: () => void;
}

type MemberSection = "dashboard" | "replays" | "tools" | "account";

export const MemberApp: React.FC<MemberAppProps> = ({ onLogout }) => {
  const [section, setSection] = useState<MemberSection>("dashboard");

  const renderSection = () => {
    switch (section) {
      case 'dashboard':
        return <DashboardSection onNavigate={(s) => setSection(s)} />;
      case 'replays':
        return <ReplaysSection />;
      case 'tools':
        return <ToolsSection />;
      case 'account':
        return <AccountSection />;
      default:
        return <DashboardSection onNavigate={(s) => setSection(s)} />;
    }
  };

  return (
    <MemberLayout 
      activeSection={section} 
      onSectionChange={setSection} 
      onLogout={onLogout}
    >
      {renderSection()}
    </MemberLayout>
  );
};
