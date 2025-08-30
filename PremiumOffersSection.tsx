import React from 'react';
import { Button } from '../design-system/Button';
import { Card, CardContent } from '../design-system/Card';
import { IconContainer } from '../design-system/IconContainer';
import { CheckCircle, ArrowRight, ChevronLeft, ChevronRight, Wifi, CreditCard, Zap } from 'lucide-react';

interface PremiumOffer {
  provider: string;
  title: string;
  price: string;
  originalPrice: string;
  period: string;
  features: string[];
  badge: string;
  savings: string;
  category: string;
  icon: any;
}

interface PremiumOffersSectionProps {
  onNavigate: (page: string) => void;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  scrollCarousel: (direction: "left" | "right") => void;
  premiumOffers: PremiumOffer[];
}

export const PremiumOffersSection: React.FC<PremiumOffersSectionProps> = ({
  onNavigate,
  scrollContainerRef,
  scrollCarousel,
  premiumOffers,
}) => (
  <div className="w-full">
    <section
      className="section-spacing"
      style={{ backgroundColor: "#1A0E23" }}
    >
      <div className="content-max-width">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">
              Premium-Angebote
            </span>
          </h2>
          <p className="text-xl text-[#D8D8D8]/80 max-w-3xl mx-auto">
            Exklusive Deals mit den besten Konditionen – nur bei
            uns verfügbar.
          </p>
        </div>

        {/* Desktop Grid (lg screens and up) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {premiumOffers.map((offer, index) => {
            const IconComponent = offer.icon;

            return (
              <Card
                key={index}
                variant="glass"
                glow="auto"
                className={`group cursor-pointer hover-scale fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => onNavigate(offer.category)}
              >
                <CardContent className="p-0">
                  {/* Header with badge and icon */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-gradient-to-r from-[#FF3F87] to-[#A020F0] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {offer.badge}
                      </div>
                      <IconContainer variant="pink" size="sm">
                        <IconComponent className="w-5 h-5" />
                      </IconContainer>
                    </div>

                    <div className="text-[#D8D8D8]/70 text-sm mb-2">
                      {offer.provider}
                    </div>
                    <h3 className="text-white text-xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                      {offer.title}
                    </h3>
                  </div>

                  {/* Price section */}
                  <div className="px-6 pb-4">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-3xl font-bold gradient-text">
                        {offer.price}
                      </span>
                      <span className="text-[#D8D8D8]/50 line-through text-lg">
                        {offer.originalPrice}
                      </span>
                    </div>
                    <div className="text-[#D8D8D8]/70">
                      {offer.period}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="px-6 pb-4">
                    <div className="space-y-2">
                      {offer.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-[#00D0C0] shrink-0" />
                          <span className="text-[#D8D8D8]/80 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 pb-6">
                    <div className="text-[#FF3F87] font-bold text-sm mb-4">
                      {offer.savings}
                    </div>
                    <Button
                      size="sm"
                      className="w-full group-hover:scale-105"
                    >
                      Zum Angebot
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile/Tablet Carousel (md screens and below) */}
        <div className="lg:hidden relative">
          {/* Navigation buttons */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => scrollCarousel("left")}
              className="p-3 rounded-full bg-[#1A0E23]/80 border border-[#FF3F87]/30 text-[#FF3F87] hover:bg-[#FF3F87]/20 transition-all duration-300 hover:scale-110"
              aria-label="Previous offers"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="p-3 rounded-full bg-[#1A0E23]/80 border border-[#FF3F87]/30 text-[#FF3F87] hover:bg-[#FF3F87]/20 transition-all duration-300 hover:scale-110"
              aria-label="Next offers"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {premiumOffers.map((offer, index) => {
              const IconComponent = offer.icon;

              return (
                <Card
                  key={index}
                  variant="glass"
                  glow="auto"
                  className="group cursor-pointer hover-scale fade-in-up flex-shrink-0 w-80 md:w-72"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    scrollSnapAlign: "start",
                  }}
                  onClick={() => onNavigate(offer.category)}
                >
                  <CardContent className="p-0">
                    {/* Header with badge and icon */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-gradient-to-r from-[#FF3F87] to-[#A020F0] text-white text-xs font-bold px-3 py-1 rounded-full">
                          {offer.badge}
                        </div>
                        <IconContainer variant="pink" size="sm">
                          <IconComponent className="w-5 h-5" />
                        </IconContainer>
                      </div>

                      <div className="text-[#D8D8D8]/70 text-sm mb-2">
                        {offer.provider}
                      </div>
                      <h3 className="text-white text-xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                        {offer.title}
                      </h3>
                    </div>

                    {/* Price section */}
                    <div className="px-6 pb-4">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-3xl font-bold gradient-text">
                          {offer.price}
                        </span>
                        <span className="text-[#D8D8D8]/50 line-through text-lg">
                          {offer.originalPrice}
                        </span>
                      </div>
                      <div className="text-[#D8D8D8]/70">
                        {offer.period}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="px-6 pb-4">
                      <div className="space-y-2">
                        {offer.features
                          .slice(0, 3)
                          .map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="h-4 w-4 text-[#00D0C0] shrink-0" />
                              <span className="text-[#D8D8D8]/80 text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 pb-6">
                      <div className="text-[#FF3F87] font-bold text-sm mb-4">
                        {offer.savings}
                      </div>
                      <Button
                        size="sm"
                        className="w-full group-hover:scale-105"
                      >
                        Zum Angebot
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  </div>
);