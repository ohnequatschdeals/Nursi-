import React from 'react';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { Star, MessageCircle } from 'lucide-react';

interface DashboardSectionProps {
  onNavigate: (page: string) => void;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({
  onNavigate,
}) => (
  <div className="w-full">
    <section className="section-spacing">
      <div className="content-max-width">
        <Card
          variant="elevated"
          glow="auto"
          padding="xl"
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">
                Bereit für ehrliche Beratung?
              </span>
            </h2>

            <p className="text-xl text-[#D8D8D8]/80 mb-10 leading-relaxed">
              Entdecke unsere Top-Angebote oder lass dich
              persönlich von unseren Experten beraten.
              Kostenlos, unverbindlich und ohne versteckte
              Kosten.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                onClick={() => onNavigate("angebote")}
              >
                <Star className="mr-2 h-5 w-5" />
                Angebote entdecken
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => onNavigate("berater")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Persönlich beraten lassen
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  </div>
);