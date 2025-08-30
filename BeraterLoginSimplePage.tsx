import React, { useState, useEffect } from 'react';
import { Button } from './design-system/Button';
import { Card, CardContent } from './design-system/Card';
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowLeft
} from 'lucide-react';

interface BeraterLoginSimplePageProps {
  onNavigate: (page: string) => void;
}

export const BeraterLoginSimplePage: React.FC<BeraterLoginSimplePageProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to berater dashboard or home
      onNavigate('berater');
    }, 1500);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
      style={{ backgroundColor: '#0E0F1A' }}
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#00D0C0]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-[#FF3F87]/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#A020F0]/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Back Button */}
      <button
        onClick={() => onNavigate('home')}
        className="fixed top-24 left-6 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 md:top-28 md:left-8"
        style={{
          background: 'rgba(26, 14, 35, 0.6)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(216, 216, 216, 0.1)',
          color: '#00D0C0'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 208, 192, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Login Card */}
      <div className="w-full max-w-md">
        <Card
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            background: 'rgba(26, 14, 35, 0.6)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(216, 216, 216, 0.1)',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 208, 192, 0.1)'
          }}
        >
          <CardContent style={{ padding: '32px' }}>
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span 
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #FF3F87 0%, #00D0C0 100%)'
                  }}
                >
                  Berater-Login
                </span>
              </h1>
              <p className="text-[#D8D8D8]/70">
                Melden Sie sich in Ihrem Berater-Konto an.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Username/Email Field */}
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium text-[#D8D8D8]">
                  Benutzername / E-Mail
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D8D8D8]/50" />
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-[#D8D8D8] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D0C0]/50"
                    style={{
                      background: 'rgba(26, 14, 35, 0.5)',
                      border: '1px solid rgba(216, 216, 216, 0.1)',
                      backdropFilter: 'blur(8px)'
                    }}
                    placeholder="berater@ohnequatschdeals.de"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-[#D8D8D8]">
                  Passwort
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D8D8D8]/50" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 rounded-lg text-[#D8D8D8] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D0C0]/50"
                    style={{
                      background: 'rgba(26, 14, 35, 0.5)',
                      border: '1px solid rgba(216, 216, 216, 0.1)',
                      backdropFilter: 'blur(8px)'
                    }}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#D8D8D8]/50 hover:text-[#00D0C0] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                {/* Forgot Password Link */}
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => console.log('Forgot password')}
                    className="text-sm text-[#00D0C0] hover:text-[#FF3F87] transition-colors duration-300"
                  >
                    Passwort vergessen?
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full transition-all duration-300"
                disabled={isLoading}
                style={{
                  background: 'linear-gradient(135deg, #00D0C0 0%, #008B8B 100%)',
                  border: 'none',
                  boxShadow: '0 0 15px rgba(0, 208, 192, 0.3)'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 208, 192, 0.5)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 208, 192, 0.3)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Anmeldung läuft...
                  </div>
                ) : (
                  'Anmelden'
                )}
              </Button>
            </form>

            {/* Application Link */}
            <div className="mt-8 text-center">
              <p className="text-[#D8D8D8]/70">
                Noch kein Berater?{' '}
                <button
                  onClick={() => console.log('Navigate to application')}
                  className="text-[#00D0C0] hover:text-[#FF3F87] transition-colors duration-300 font-medium"
                >
                  Jetzt bewerben
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};