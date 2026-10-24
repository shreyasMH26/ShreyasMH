import React, { useState } from 'react';
import MacOSDock, { DockApp } from './mac-os-dock';

// Sample app data with actual macOS-style icons
const sampleApps: DockApp[] = [
  { 
    id: 'finder', 
    name: 'Finder', 
    icon: '/icons/dock/finder.svg' 
  },
  { 
    id: 'terminal', 
    name: 'Terminal', 
    icon: '/icons/dock/terminal.svg' 
  },
  { 
    id: 'notes', 
    name: 'Notes', 
    icon: '/icons/dock/notes.svg' 
  },
  { 
    id: 'music', 
    name: 'Music', 
    icon: '/icons/dock/music.svg' 
  },
  { 
    id: 'mail', 
    name: 'Mail', 
    icon: '/icons/dock/mail.svg' 
  },
  { 
    id: 'safari', 
    name: 'Safari', 
    icon: '/icons/dock/safari.svg' 
  },
  { 
    id: 'resume', 
    name: 'Preview', 
    icon: '/icons/dock/resume.svg' 
  },
  { 
    id: 'xtich', 
    name: 'XTICH', 
    icon: '/icons/dock/xtich.svg' 
  },
];

const DockDemo: React.FC = () => {
  const [openApps, setOpenApps] = useState<string[]>(['finder', 'safari']);

  const handleAppClick = (appId: string) => {
    console.log('App clicked:', appId);
    
    // Toggle app in openApps array
    setOpenApps(prev => 
      prev.includes(appId) 
        ? prev.filter(id => id !== appId)
        : [...prev, appId]
    );
  };

  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #051A24 0%, #0D212C 100%)'
    }}>
      {/* The Dock Component */}
      <MacOSDock
        apps={sampleApps}
        onAppClick={handleAppClick}
        openApps={openApps}
      />
    </div>
  );
};

export default DockDemo;
