import React, { useEffect, useState, useRef } from "react";
import { Button } from "./Button";
import { Card, CardContent, CardHeader } from "./Card";
import { IconContainer } from "./IconContainer";
import { OQDBeraterSection } from "../OQDBeraterSection";
import { WeitereAngeboteSection } from "../WeitereAngeboteSection";
import { TopBeraterSection } from "../TopBeraterSection";
import {
  Wifi,
  Smartphone,
  Zap,
  CreditCard,
  Shield,
  CheckCircle,
  Users,
  Award,
  ArrowRight,
  Bot,
  Star,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

// Hero Section Component
const HeroSection: React.FC<{
  onNavigate: (page: string) => void;
  isVisible: boolean;
  scrollToSection: (
    ref: React.RefObject<HTMLDivElement>,
  ) => void;
  premiumOffersRef: React.RefObject<HTMLDivElement>;
  topBeraterRef: React.RefObject<HTMLDivElement>;
}> = ({
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
        className={`content-max-width text-center relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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

// Premium Offers Section Component
const PremiumOffersSection: React.FC<{
  onNavigate: (page: string) => void;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  scrollCarousel: (direction: "left" | "right") => void;
  premiumOffers: any[];
}> = ({
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

// Features Section (Warum Wir)
const FeaturesSection: React.FC<{
  benefitsRef: React.RefObject<HTMLDivElement>;
  benefitsVisible: boolean;
  benefits: any[];
}> = ({ benefitsRef, benefitsVisible, benefits }) => (
  <div className="w-full">
    <section
      ref={benefitsRef}
      className="section-spacing"
      style={{ backgroundColor: "#1A0E23" }}
    >
      <div className="content-max-width">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FF3F87 0%, #00D0C0 100%)",
              }}
            >
              Warum OhneQuatschDeals?
            </span>
          </h2>
          <p className="text-xl text-[#D8D8D8]/80 max-w-3xl mx-auto">
            Wir setzen auf Transparenz, ehrliche Beratung und
            faire Preise – ohne versteckte Kosten oder Tricks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;

            return (
              <Card
                key={index}
                className={`text-center transition-all duration-700 hover:scale-105 cursor-pointer ${
                  benefitsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: benefitsVisible
                    ? `${index * 0.2}s`
                    : "0s",
                  background: "rgba(26, 14, 35, 0.6)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(216, 216, 216, 0.1)",
                  borderRadius: "12px",
                  padding: "32px 24px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(0, 208, 192, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)";
                  e.currentTarget.style.transform =
                    "scale(1.05) translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(0, 0, 0, 0.2)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div>
                  {/* Large Icon in Gradient Circle */}
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-700 ${
                      benefitsVisible
                        ? "scale-100 rotate-0"
                        : "scale-75 rotate-12"
                    }`}
                    style={{
                      background:
                        benefit.iconVariant === "gradient"
                          ? "linear-gradient(135deg, #FF3F87 0%, #00D0C0 100%)"
                          : benefit.iconVariant === "turquoise"
                            ? "linear-gradient(135deg, #00D0C0 0%, #008B8B 100%)"
                            : benefit.iconVariant === "pink"
                              ? "linear-gradient(135deg, #FF3F87 0%, #A020F0 100%)"
                              : "linear-gradient(135deg, #FFD166 0%, #FFA500 100%)",
                      boxShadow:
                        benefit.iconVariant === "turquoise"
                          ? "0 0 20px rgba(0, 208, 192, 0.4)"
                          : benefit.iconVariant === "pink"
                            ? "0 0 20px rgba(255, 63, 135, 0.4)"
                            : "0 0 20px rgba(255, 209, 102, 0.4)",
                      transitionDelay: benefitsVisible
                        ? `${index * 0.2 + 0.1}s`
                        : "0s",
                    }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">
                    {benefit.title}
                  </h3>

                  <p className="text-[#D8D8D8]/80 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);

// Dashboard Section (CTA)
const DashboardSection: React.FC<{
  onNavigate: (page: string) => void;
}> = ({ onNavigate }) => (
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

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const premiumOffersRef = useRef<HTMLDivElement>(null);
  const topBeraterRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.target === benefitsRef.current &&
            entry.isIntersecting
          ) {
            setBenefitsVisible(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to sections
  const scrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement>,
  ) => {
    if (sectionRef.current) {
      const headerHeight = 80; // Account for fixed header
      const targetPosition =
        sectionRef.current.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  // Carousel functionality
  const scrollCarousel = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; // Approximate card width + gap
      const scrollAmount =
        direction === "left" ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Touch/swipe handling for mobile
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    const handleTouchStart = (e: TouchEvent) => {
      isDown = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isDown = false;
    };

    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    container.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    return () => {
      container.removeEventListener(
        "touchstart",
        handleTouchStart,
      );
      container.removeEventListener(
        "touchmove",
        handleTouchMove,
      );
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Premium offers data
  const premiumOffers = [
    {
      provider: "Vodafone",
      title: "Red Internet 1000 Cable",
      price: "29,99€",
      originalPrice: "59,99€",
      period: "/Monat",
      features: [
        "1000 Mbit/s Download",
        "50 Mbit/s Upload",
        "Telefon-Flat",
        "6 Monate kostenlos",
      ],
      badge: "TOP-ANGEBOT",
      savings: "50% sparen",
      category: "internet-tv",
      icon: Wifi,
    },
    {
      provider: "1&1",
      title: "DSL 250 Komplett-Paket",
      price: "19,99€",
      originalPrice: "39,99€",
      period: "/Monat",
      features: [
        "250 Mbit/s Download",
        "Telefon-Flat",
        "WLAN-Router inklusive",
        "Keine Grundgebühr",
      ],
      badge: "EMPFEHLUNG",
      savings: "20€ sparen",
      category: "internet-tv",
      icon: Wifi,
    },
    {
      provider: "Smava",
      title: "Sofortkredit Premium",
      price: "2,9%",
      originalPrice: "4,9%",
      period: "eff. Jahreszins",
      features: [
        "Bis 120.000€",
        "Sofortige Zusage",
        "Flexible Laufzeit",
        "Kostenlose Sondertilgung",
      ],
      badge: "TOP-ZINSEN",
      savings: "Niedrigzins",
      category: "kredite",
      icon: CreditCard,
    },
    {
      provider: "E.ON",
      title: "Strom & Gas Kombi",
      price: "24,99€",
      originalPrice: "34,99€",
      period: "/Monat Grundpreis",
      features: [
        "100% Ökostrom",
        "Klimaneutrales Gas",
        "12 Monate Preisgarantie",
        "150€ Bonus",
      ],
      badge: "ÖKO-TARIF",
      savings: "150€ Bonus",
      category: "strom-gas",
      icon: Zap,
    },
  ];

  // Benefits data
  const benefits = [
    {
      icon: Zap,
      title: "Schneller Service",
      description:
        "Blitzschnelle Bearbeitung Ihrer Anfragen - meist innerhalb weniger Stunden mit einer Antwort",
      iconVariant: "gradient" as const,
    },
    {
      icon: Award,
      title: "Beste Preise",
      description:
        "Exklusive Deals und Sonderkonditionen, die Sie nirgendwo anders finden werden",
      iconVariant: "turquoise" as const,
    },
    {
      icon: Shield,
      title: "Vertrauenswürdige Experten",
      description:
        "Zertifizierte Berater mit langjähriger Erfahrung und transparenter Arbeitsweise",
      iconVariant: "pink" as const,
    },
    {
      icon: Users,
      title: "24/7 Support",
      description:
        "Rund um die Uhr erreichbare Kundenbetreuung für all Ihre Fragen und Anliegen",
      iconVariant: "gold" as const,
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0E0F1A" }}
    >
      {/* Hero Section */}
      <HeroSection
        onNavigate={onNavigate}
        isVisible={isVisible}
        scrollToSection={scrollToSection}
        premiumOffersRef={premiumOffersRef}
        topBeraterRef={topBeraterRef}
      />

      {/* Premium Offers Section */}
      <div ref={premiumOffersRef}>
        <PremiumOffersSection
          onNavigate={onNavigate}
          scrollContainerRef={scrollContainerRef}
          scrollCarousel={scrollCarousel}
          premiumOffers={premiumOffers}
        />
      </div>

      {/* OQD-Berater Section */}
      <div className="w-full">
        <OQDBeraterSection onNavigate={onNavigate} />
      </div>

      {/* Weitere Angebote Section */}
      <div className="w-full">
        <WeitereAngeboteSection onNavigate={onNavigate} />
      </div>

      {/* Top-Berater Section */}
      <div ref={topBeraterRef} className="w-full">
        <TopBeraterSection onNavigate={onNavigate} />
      </div>

      {/* Features Section (Warum Wir) */}
      <FeaturesSection
        benefitsRef={benefitsRef}
        benefitsVisible={benefitsVisible}
        benefits={benefits}
      />

      {/* Dashboard Section (CTA) */}
      <DashboardSection onNavigate={onNavigate} />

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 1024px) {
          .scrollbar-hide {
            scroll-snap-type: x mandatory;
          }
          .scrollbar-hide > * {
            scroll-snap-align: start;
          }
        }
      `}</style>
    </div>
  );
};