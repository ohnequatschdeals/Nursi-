import React from 'react';
import { Button } from '../design-system/Button';
import { Shield, Users, Award, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
  isVisible: boolean;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  premiumOffersRef: React.RefObject<HTMLDivElement>;
  topBeraterRef: React.RefObject<HTMLDivElement>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  isVisible,
  scrollToSection,
  premiumOffersRef,
  topBeraterRef,
}) => (
  <div className="w-full min-h-screen">
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0E0F1A 0%, #1A0E23 30%, rgba(255, 63, 135, 0.08) 70%, rgba(0, 208, 192, 0.12) 100%)",
        }}
      />

      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF3F87]/10 rounded-full blur-2xl animate-pulse" />
      <div
        className="absolute top-40 right-16 w-24 h-24 bg-[#00D0C0]/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-20 w-40 h-40 bg-[#A020F0]/8 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-32 w-28 h-28 bg-[#00D0C0]/8 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      <div
        className={`content-max-width text-center relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="gradient-text block">
            Digital. Persönlich.
          </span>
          <span className="gradient-text block">
            Ohne Quatsch.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-16 max-w-4xl mx-auto leading-relaxed text-[#D8D8D8]/90">
          Ehrliche Beratung für Internet, Mobilfunk, Strom, Gas
          & Kredite – ohne versteckte Kosten.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Button
            size="xl"
            onClick={() => scrollToSection(premiumOffersRef)}
            className="min-w-[280px]"
          >
            Angebote entdecken
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>

          <Button
            variant="secondary"
            size="xl"
            onClick={() => scrollToSection(topBeraterRef)}
            className="min-w-[280px]"
          >
            Berater finden
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-[#D8D8D8]/70">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#00D0C0]" />
            <span>100% transparent</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#FF3F87]" />
            <span>5000+ zufriedene Kunden</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#FFD166]" />
            <span>Bestpreis-Garantie</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);