import React from 'react';
import { WeitereAngeboteSection } from '../WeitereAngeboteSection';

interface AngeboteSectionProps {
  onNavigate: (page: string) => void;
}

export const AngeboteSection: React.FC<AngeboteSectionProps> = ({
  onNavigate,
}) => (
  <div className="w-full">
    <WeitereAngeboteSection onNavigate={onNavigate} />
  </div>
);