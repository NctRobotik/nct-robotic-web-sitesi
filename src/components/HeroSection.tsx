import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Play
} from 'lucide-react';

interface HeroSectionProps {
  onDiscoverOrbitPix: () => void;
  onWatchVideo: () => void;
  onSelectFeature?: (featureId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDiscoverOrbitPix,
  onWatchVideo,
}) => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 1,
      bg: "/hero-pix-orbit6.png",
      eyebrow: "Orbit Pix",
      title: (
        <>
          Çocuğunuzun
          <br />
          Akıllı Eğitim
          <br />
          <span className="text-brand-accent">Arkadaşı.</span>
        </>
      ),
      desc: "Orbit Pix; öğrencinizle konuşur, sorularını yanıtlar, konu tekrarları yapar ve İngilizce konuşma pratiğiyle her gün öğrenme sürecine aktif olarak eşlik eder.",
      primaryBtnText: "Orbit Pix'i İncele",
      onPrimaryClick: onDiscoverOrbitPix,
      showSecondaryBtn: true,
      onSecondaryClick: onWatchVideo
    },
    {
      id: 2,
      bg: "/orbit-s-hero.webp",
      eyebrow: "Orbit-S",
      title: (
        <>
          Orbit-S ile
          <br />
          Geleceği Kodluyoruz
        </>
      ),
      desc: "Orbit-S, okul öncesi, ilköğretim ve ortaöğretimin sonuna kadar çocukların öğrenme yolculuğuna eğlenceli, etkileşimli ve öğretici bir arkadaş olur. Branş derslerinde ders modu sayesinde öğretmenlere asistanlık yapar. Kodlama, algoritmik düşünme ve STEM etkinliklerini oyunlaştırarak öğrenmeyi keşfe dönüştürür.",
      primaryBtnText: "Orbit-S'i Keşfet",
      onPrimaryClick: () => navigate('/products/orbit-s'),
      showSecondaryBtn: false,
      darkText: true,
      bgStyle: { backgroundColor: '#ffffff' }
    },
    {
      id: 3,
      bg: "/pix-hero-ogrenme.webp",
      eyebrow: "NCT Öğrenme Modeli",
      title: (
        <>
          Her Çocuk
          <br />
          Farklı Öğrenir.
        </>
      ),
      desc: "NCT Öğrenme Modeli, öğrencinin öğrenme biçimini analiz eder, güçlü yönlerini keşfeder ve anlatım yöntemini kişiselleştirerek daha verimli bir öğrenme deneyimi sunar.",
      primaryBtnText: "Öğrenme Modelini İncele",
      onPrimaryClick: () => navigate('/ogrenme-modeli'),
      showSecondaryBtn: false
    }
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, slides.length]);

  return (
    <section
      className="relative w-full h-[760px] lg:h-[820px] bg-slate-950 overflow-hidden select-none"
      id="home"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, idx) => {
          const isActive = idx === activeSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col justify-between pt-16 lg:pt-20 pb-16 ${
                isActive
                  ? 'opacity-100 translate-x-0 pointer-events-auto z-10'
                  : 'opacity-0 -translate-x-4 pointer-events-none z-0'
              }`}
              style={{
                backgroundImage: slide.bg ? `url('${slide.bg}')` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                ...(slide.bgStyle || {})
              }}
            >
              {/* Subtle black overlay (10% - only for non-darkText slides) */}
              {!slide.darkText && (
                <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
              )}

              {/* Slide Content */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
                  {/* Main Headline & Actions */}
                  <div className={`lg:col-span-8 flex flex-col items-start space-y-6 lg:-translate-y-24 transition-all duration-700 delay-100 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {/* Eyebrow */}
                    <span className="font-manrope text-sm font-semibold tracking-[0.18em] uppercase text-brand-accent">
                      {slide.eyebrow}
                    </span>

                    {/* Title */}
                    <h1 className={`font-manrope text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-[-0.03em] max-w-3xl ${
                      slide.darkText ? 'text-[#111827]' : 'text-brand-light'
                    }`}>
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className={`font-manrope text-lg leading-8 max-w-[620px] ${
                      slide.darkText ? 'text-[#4B5563]' : 'text-brand-light/75'
                    }`}>
                      {slide.desc}
                    </p>

                    {/* Call To Action Buttons */}
                    <div className="flex flex-wrap items-center gap-6 pt-2">
                      <button
                        onClick={slide.onPrimaryClick}
                        className="font-manrope group flex items-center justify-center gap-2 h-14 px-8 bg-brand-accent hover:bg-[#D35A00] text-white font-semibold text-sm sm:text-base rounded-[14px] border border-transparent transition-all duration-250 cursor-pointer shadow-sm hover:shadow active:scale-[0.98]"
                      >
                        <span>{slide.primaryBtnText}</span>
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-all duration-250" />
                      </button>

                      {slide.showSecondaryBtn && (
                        <button
                          onClick={slide.onSecondaryClick}
                          className="font-manrope group flex items-center justify-center gap-2 h-14 px-7 bg-transparent hover:bg-white/10 text-brand-light hover:text-brand-accent font-semibold text-sm sm:text-base rounded-[14px] border border-brand-light/30 hover:border-brand-accent transition-all duration-250 cursor-pointer active:scale-[0.98]"
                        >
                          <Play className="w-3.5 h-3.5 fill-brand-accent text-brand-accent shrink-0 group-hover:scale-105 transition-transform duration-250" />
                          <span>Nasıl Çalışır?</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-30 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeSlide 
                ? 'w-7 bg-brand-accent' 
                : slides[activeSlide].darkText
                  ? 'w-2.5 bg-slate-300 hover:bg-slate-400' 
                  : 'w-2.5 bg-brand-light/40 hover:bg-brand-light/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
