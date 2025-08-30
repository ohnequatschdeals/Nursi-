import React from 'react';
import { AIConsultantHeroSection } from './AIConsultantHeroSection';
import { AIConsultantBlock } from './AIConsultantBlock';

interface AIConsultantDemoProps {
  onNavigate: (page: string) => void;
}

export const AIConsultantDemo: React.FC<AIConsultantDemoProps> = ({ onNavigate }) => {
  const handleStartConsultation = () => {
    // Hier könnte später der Chat geöffnet oder zu einer Chat-Seite navigiert werden
    console.log('Beratung gestartet!');
    // Beispiel: onNavigate('chat');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0E0F1A' }}>
      {/* Neue Hero-Sektion */}
      <AIConsultantHeroSection onStartConsultation={handleStartConsultation} />
      
      {/* Bestehender Chat-Bereich (optional als zweite Sektion) */}
      <div className="pt-0">
        <AIConsultantBlock />
      </div>
    </div>
  );
};