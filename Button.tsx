import React from 'react';
import { cn } from '../ui/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', glow = true, children, ...props }, ref) => {
    const baseClasses = `
      relative inline-flex items-center justify-center
      font-medium rounded-2xl border-0 outline-none
      transition-all duration-300 ease-out
      hover:scale-105 active:scale-95
      focus:ring-2 focus:ring-opacity-50
      disabled:opacity-50 disabled:pointer-events-none
      disabled:transform-none
    `;

    const variants = {
      primary: `
        bg-gradient-to-r from-[#FF3F87] to-[#A020F0]
        text-white font-semibold
        hover:from-[#FF3F87]/90 hover:to-[#A020F0]/90
        focus:ring-[#FF3F87]/50
        ${glow ? 'shadow-[0_0_20px_rgba(255,63,135,0.3)] hover:shadow-[0_0_30px_rgba(255,63,135,0.4)]' : ''}
      `,
      secondary: `
        bg-transparent border-2 border-[#00D0C0]
        text-[#00D0C0] font-semibold
        hover:bg-[#00D0C0] hover:text-[#0E0F1A]
        focus:ring-[#00D0C0]/50
        ${glow ? 'shadow-[0_0_20px_rgba(0,208,192,0.3)] hover:shadow-[0_0_30px_rgba(0,208,192,0.4)]' : ''}
      `,
      tertiary: `
        bg-transparent
        text-[#D8D8D8] font-medium
        hover:text-[#FF3F87]
        focus:ring-[#FF3F87]/50
      `,
      outline: `
        bg-transparent border border-[#D8D8D8]/20
        text-[#D8D8D8] font-medium
        hover:border-[#FF3F87] hover:text-[#FF3F87]
        focus:ring-[#FF3F87]/50
        backdrop-blur-sm
      `
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm min-h-[36px]',
      md: 'px-6 py-3 text-base min-h-[44px]',
      lg: 'px-8 py-4 text-lg min-h-[52px]',
      xl: 'px-12 py-6 text-xl min-h-[60px]'
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
        
        {/* Glow effect overlay */}
        {glow && variant === 'primary' && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF3F87]/20 to-[#A020F0]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        )}
        
        {glow && variant === 'secondary' && (
          <div className="absolute inset-0 rounded-2xl bg-[#00D0C0]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';