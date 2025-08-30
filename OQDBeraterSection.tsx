import React, { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';
import exampleImage from 'figma:asset/13360f059c4886011e49eaee81fbcadbf3cd0a21.png';

interface OQDBeraterSectionProps {
  onNavigate?: (page: string) => void;
}

export const OQDBeraterSection: React.FC<OQDBeraterSectionProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const chatMessages = [
    {
      id: 1,
      type: 'assistant' as const,
      message: 'Hallo! Ich bin Ihr persönlicher OQD-Berater. Wie kann ich Ihnen heute helfen?',
      timestamp: '10:30'
    },
    {
      id: 2,
      type: 'user' as const,
      message: 'Ich suche einen neuen Internetvertrag mit mindestens 100 Mbit/s.',
      timestamp: '10:31'
    },
    {
      id: 3,
      type: 'assistant' as const,
      message: 'Perfekt! Ich habe mehrere Angebote für Sie gefunden. Vodafone bietet aktuell 1000 Mbit/s für nur 29,99€ - das wäre meine Top-Empfehlung.',
      timestamp: '10:32'
    },
    {
      id: 4,
      type: 'user' as const,
      message: 'Das klingt interessant! Können Sie mir mehr Details dazu geben?',
      timestamp: '10:33'
    }
  ];

  return (
    <section 
      className="section-spacing relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(26,14,35,0.6) 0%, rgba(14,15,26,0.8) 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF3F87]/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-[#00D0C0]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="content-max-width">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 gradient-text">
            OQD-Berater
          </h2>
          <p className="text-lg text-[#D8D8D8]/80 max-w-3xl mx-auto">
            Erleben Sie die Zukunft der Beratung – Ihr persönlicher KI-Avatar kommt bald!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Avatar */}
          <div className={`order-1 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              {/* Hologram Avatar */}
              <div className="relative flex justify-center mb-8">
                <div className="relative">
                  {/* Glow Effect Container */}
                  <div 
                    className="absolute inset-0 rounded-2xl float-animation"
                    style={{
                      background: 'linear-gradient(45deg, rgba(255, 63, 135, 0.3) 0%, rgba(0, 208, 192, 0.3) 100%)',
                      filter: 'blur(20px)',
                      transform: 'scale(1.1)'
                    }}
                  />
                  
                  {/* Avatar Image */}
                  <div className="relative z-10">
                    <img
                      src={exampleImage}
                      alt="OQD Beraterin"
                      className="w-80 h-80 md:w-96 md:h-96 object-cover object-top rounded-2xl float-animation"
                      style={{
                        background: 'rgba(26, 14, 35, 0.3)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(216, 216, 216, 0.1)',
                        boxShadow: '0 0 30px rgba(255, 63, 135, 0.4), 0 0 50px rgba(0, 208, 192, 0.3)'
                      }}
                    />
                  </div>
                  
                  {/* Holographic Effects */}
                  <div 
                    className="absolute top-1/4 -left-4 w-1 h-24 bg-gradient-to-b from-transparent via-[#00D0C0] to-transparent opacity-60 animate-pulse"
                    style={{ animationDelay: '0.5s' }}
                  />
                  <div 
                    className="absolute top-1/3 -right-4 w-1 h-32 bg-gradient-to-b from-transparent via-[#FF3F87] to-transparent opacity-60 animate-pulse"
                    style={{ animationDelay: '1.5s' }}
                  />
                  <div 
                    className="absolute bottom-1/4 -left-6 w-1 h-20 bg-gradient-to-b from-transparent via-[#FFD166] to-transparent opacity-60 animate-pulse"
                    style={{ animationDelay: '2.5s' }}
                  />
                </div>
              </div>

              {/* Coming Soon Banner */}
              <div 
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.4s' }}
              >
                <div 
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: 'rgba(26, 14, 35, 0.3)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(216, 216, 216, 0.1)',
                    boxShadow: '0 0 20px rgba(0, 208, 192, 0.2)'
                  }}
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-2xl">🚀</span>
                    <Mic 
                      className="w-6 h-6"
                      style={{ color: '#00D0C0' }}
                    />
                  </div>
                  <p className="text-[#D8D8D8] font-medium leading-relaxed">
                    <span className="font-semibold text-[#00D0C0]">Demnächst verfügbar:</span><br />
                    Dein persönlicher sprechender Avatar – live Beratung wie von Mensch zu Mensch
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Chat Window */}
          <div className={`order-2 lg:order-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
            <div 
              className="p-6 md:p-8 rounded-2xl h-full"
              style={{
                background: 'rgba(26, 14, 35, 0.3)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(216, 216, 216, 0.1)',
                minHeight: '500px'
              }}
            >
              {/* Chat Header */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#D8D8D8]/10">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #00D0C0 0%, #008B8B 100%)',
                    boxShadow: '0 0 15px rgba(0, 208, 192, 0.3)'
                  }}
                >
                  <span className="text-white font-bold text-lg">OQD</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">OQD-Berater</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00D0C0] rounded-full animate-pulse" />
                    <span className="text-[#D8D8D8]/70 text-sm">Online</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-6">
                {chatMessages.map((message, index) => (
                  <div 
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} transition-all duration-500`}
                    style={{ 
                      animationDelay: `${0.6 + index * 0.2}s`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    <div 
                      className={`max-w-[85%] p-4 rounded-2xl ${
                        message.type === 'user' 
                          ? 'rounded-br-md' 
                          : 'rounded-bl-md'
                      }`}
                      style={{
                        background: message.type === 'user' 
                          ? 'linear-gradient(135deg, #FF3F87 0%, #A020F0 100%)'
                          : 'rgba(0, 208, 192, 0.2)',
                        border: message.type === 'user' 
                          ? 'none'
                          : '1px solid rgba(0, 208, 192, 0.3)',
                        boxShadow: message.type === 'user'
                          ? '0 0 15px rgba(255, 63, 135, 0.3)'
                          : '0 0 15px rgba(0, 208, 192, 0.2)'
                      }}
                    >
                      <p className="text-white text-sm leading-relaxed">
                        {message.message}
                      </p>
                      <div className="flex justify-end mt-2">
                        <span 
                          className="text-xs opacity-70"
                          style={{ 
                            color: message.type === 'user' ? 'rgba(255,255,255,0.8)' : '#D8D8D8'
                          }}
                        >
                          {message.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input (Disabled) */}
              <div 
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{
                  background: 'rgba(216, 216, 216, 0.05)',
                  border: '1px solid rgba(216, 216, 216, 0.1)'
                }}
              >
                <input
                  type="text"
                  placeholder="Chat wird demnächst verfügbar sein..."
                  disabled
                  className="flex-1 bg-transparent border-none outline-none text-[#D8D8D8]/50 placeholder-[#D8D8D8]/30"
                />
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, #00D0C0 0%, #008B8B 100%)'
                  }}
                >
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};