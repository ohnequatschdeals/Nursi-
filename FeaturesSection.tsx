import React from 'react';
import { Card } from '../design-system/Card';

interface Benefit {
  icon: any;
  title: string;
  description: string;
  iconVariant: "gradient" | "turquoise" | "pink" | "gold";
}

interface FeaturesSectionProps {
  benefitsRef: React.RefObject<HTMLDivElement>;
  benefitsVisible: boolean;
  benefits: Benefit[];
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  benefitsRef,
  benefitsVisible,
  benefits,
}) => (
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