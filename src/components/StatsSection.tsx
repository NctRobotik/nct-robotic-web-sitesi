import React from 'react';
import { Smile, Globe, GraduationCap, Bot, ShieldCheck, Award } from 'lucide-react';
import { STATS_LIST } from '../data/nctData';

export const StatsSection: React.FC = () => {
  const getIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-brand-accent";
    switch (name) {
      case 'Smile': return <Smile className={iconClass} />;
      case 'Globe': return <Globe className={iconClass} />;
      case 'GraduationCap': return <GraduationCap className={iconClass} />;
      case 'Bot': return <Bot className={iconClass} />;
      case 'ShieldCheck': return <ShieldCheck className={iconClass} />;
      case 'Award': return <Award className={iconClass} />;
      default: return <Smile className={iconClass} />;
    }
  };

  return (
    <section className="bg-white py-12 lg:py-16 text-brand-primary border-y border-brand-neutral relative overflow-hidden" id="stats">
      {/* Subtle Ambient Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-32 bg-brand-accent/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 divide-y sm:divide-y-0 divide-brand-neutral">
          {STATS_LIST.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-4 transition-transform duration-200 hover:-translate-y-1 ${
                idx !== 0 ? 'pt-6 sm:pt-4' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-2xl bg-brand-light border border-brand-neutral flex items-center justify-center mb-3 shadow-sm">
                {getIcon(stat.iconName)}
              </div>
              <span className="text-3xl sm:text-4xl font-black text-brand-accent tracking-tight font-mono">
                {stat.value}
              </span>
              <span className="text-[#6B7280] text-xs sm:text-sm font-semibold mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
