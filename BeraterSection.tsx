import React from 'react';
import { OQDBeraterSection } from '../OQDBeraterSection';
import { TopBeraterSection } from '../TopBeraterSection';

interface BeraterSectionProps {
  onNavigate: (page: string) => void;
  topBeraterRef: React.RefObject<HTMLDivElement>;
}

export const BeraterSection: React.FC<BeraterSectionProps> = ({
  onNavigate,
  topBeraterRef,
}) => (
  <>
    {/* OQD-Berater Section */}
    <div className="w-full">
      <OQDBeraterSection onNavigate={onNavigate} />
    </div>

    {/* Top-Berater Section */}
    <div ref={topBeraterRef} className="w-full">
      <TopBeraterSection onNavigate={onNavigate} />
    </div>
  </>
);