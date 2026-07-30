import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';

interface FinalCtaSectionProps {
  onDiscoverOrbitPix: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onDiscoverOrbitPix }) => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Rounded CTA Banner */}
        <div className="relative rounded-[36px] bg-brand-primary border border-brand-neutral p-8 sm:p-12 overflow-hidden shadow-2xl">
          
          {/* Peeking Robot Image */}
          <img
            src="/aradan-bakan.png"
            alt="Orbit Pix"
            className="absolute left-[-95px] top-1/2 -translate-y-1/2 h-[145%] w-auto object-contain object-center z-20 pointer-events-none hidden sm:block"
          />

          {/* Subtle Accent Glow Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left & Middle Group */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left sm:ml-[250px] ml-0">

              {/* Text Copy */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 text-brand-accent font-bold text-xs uppercase tracking-wider">
                  <Bot className="w-4 h-4" />
                  YAPAY ZEKA EĞİTİM ARKADAŞI
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-brand-light tracking-tight">
                  Hazır Mısınız?
                </h2>
                <p className="text-brand-light/80 text-base sm:text-lg font-normal max-w-md">
                  Çocuğunuzun yeni eğitim arkadaşı ile tanışın.
                </p>
              </div>

            </div>

            {/* Right Side CTA Button */}
            <div className="shrink-0">
              <button
                onClick={onDiscoverOrbitPix}
                id="cta-discover-orbit-pix-btn"
                className="group flex items-center gap-3 px-8 py-4 bg-brand-accent hover:bg-[#D35A00] text-white font-extrabold text-base rounded-full shadow-2xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Orbit Pix’i Keşfet</span>
                <div className="w-8 h-8 rounded-full bg-white text-brand-accent flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
