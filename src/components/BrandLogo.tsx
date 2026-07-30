import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md', theme = 'dark' }) => {
  const scale = size === 'sm' ? 0.72 : size === 'lg' ? 1.27 : 1.0;
  
  return (
    <div className={`flex items-center gap-3 select-none group text-left ${className}`}>
      <img
        src="/favicon.png"
        alt="NCT Robotik"
        style={{
          height: `${44 * scale}px`,
          width: `${44 * scale}px`,
          objectFit: 'contain',
        }}
        className="group-hover:scale-105 transition-transform duration-200"
      />

      <div className="flex flex-col items-start leading-none">
        <span
          className={`uppercase ${theme === 'light' ? 'text-[#111827]' : 'text-white'} group-hover:text-brand-accent transition-colors`}
          style={{
            fontFamily: '"Michroma", sans-serif',
            fontSize: `${36 * scale}px`,
            fontWeight: 400,
            letterSpacing: '0.04em',
            lineHeight: 1,
            WebkitTextStroke: `${0.8 * scale}px currentColor`,
          }}
        >
          NCT
        </span>

        <span
          className="uppercase text-[#F47A20]"
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: `${12 * scale}px`,
            fontWeight: 500,
            letterSpacing: '0.55em',
            lineHeight: 1,
            marginTop: `${5 * scale}px`,
          }}
        >
          ROBOTİK
        </span>
      </div>
    </div>
  );
};
