import React from 'react';
import { Play, Cpu, ArrowRight, Sparkles, MapPin, ShieldCheck, Zap, Battery, Mic } from 'lucide-react';
import { NCT_VIDEOS } from '../data/videoData';
import { VideoItem } from '../types';

interface TechnologySectionProps {
  onOpenTechDetail: () => void;
  onPlayVideo: (video: VideoItem) => void;
  onViewAllVideos: () => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({
  onOpenTechDetail,
  onPlayVideo,
  onViewAllVideos,
}) => {
  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC]" id="technology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 rounded-[36px] overflow-hidden border border-brand-neutral shadow-sm bg-white">
          {/* Left Column: Light Tech Hardware Showcase (6 Cols) */}
          <div className="lg:col-span-6 bg-brand-light p-8 sm:p-10 lg:p-12 text-brand-primary rounded-[28px] border border-brand-neutral flex flex-col justify-between relative overflow-hidden shadow-sm">
            {/* Ambient Background Tech Glow (Very subtle) */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/2 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <h2 className="font-manrope text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight leading-[1.15]">
                Orbit Pix’in İçinde Ne Var?
              </h2>

              <p className="font-manrope text-sm sm:text-base leading-relaxed font-normal text-[#6B7280]">
                Orbit Pix’in donanım ve yazılım altyapısını, günlük kullanımda
                fark yaratan temel bileşenleriyle inceleyin.
              </p>

              {/* Exploded Cutaway Technical Image Showcase */}
              <div className="relative my-4 border border-brand-neutral bg-white rounded-[14px] overflow-hidden flex items-center justify-center p-2 shadow-xs">
                <img
                  src="/pix-ic-kismi.png"
                  alt="Orbit Pix Teknik Kesit ve İç Donanım Görseli"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-[10px]"
                />

                {/* Tech Badge Tag */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs text-brand-primary text-[10px] font-mono px-2.5 py-1 rounded-[6px] border border-brand-neutral shadow-sm">
                  100% Yerli Tasarım
                </div>
              </div>

              {/* 4 Technical Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-4 border-t border-brand-neutral">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <Mic className="w-4 h-4 text-brand-accent" />
                    <h4 className="font-bold text-sm">Sesli Etkileşim</h4>
                  </div>
                  <p className="text-[#6B7280] text-xs leading-relaxed font-normal pl-6">
                    Doğal konuşmalarla akıcı ve etkileşimli bir deneyim sunar.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <Cpu className="w-4 h-4 text-brand-accent" />
                    <h4 className="font-bold text-sm">
                      Yapay Zekâ İşlemcisi
                    </h4>
                  </div>
                  <p className="text-[#6B7280] text-xs leading-relaxed font-normal pl-6">
                    Sesli etkileşimleri hızlı ve akıcı biçimde işler.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <Battery className="w-4 h-4 text-brand-accent" />
                    <h4 className="font-bold text-sm">
                      Uzun Süreli Kullanım
                    </h4>
                  </div>
                  <p className="text-[#6B7280] text-xs leading-relaxed font-normal pl-6">
                    Günlük kullanım için geliştirilen batarya altyapısı.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <ShieldCheck className="w-4 h-4 text-brand-accent" />
                    <h4 className="font-bold text-sm">
                      NCT Yazılım Altyapısı
                    </h4>
                  </div>
                  <p className="text-[#6B7280] text-xs leading-relaxed font-normal pl-6">
                    Orbit Pix için geliştirilen güvenli ve kontrollü sistem.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Button: Donanımı İncele (Secondary Button style) */}
            <div className="pt-8 relative z-10">
              <button
                onClick={onOpenTechDetail}
                id="inspect-tech-btn"
                className="font-manrope w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 bg-white hover:bg-slate-50 text-[#111827] font-semibold text-sm rounded-[12px] border border-brand-neutral transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-xs"
              >
                <span>Donanımı İncele</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Real Users Video Showcase (6 Cols - Saf Beyaz Kart) */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    GERÇEK KULLANICILAR
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-brand-primary tracking-tight">
                    Orbit ile Öğrenen Çocuklar
                  </h2>
                </div>

                <button
                  onClick={onViewAllVideos}
                  id="view-all-videos-btn"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-[#D35A00] hover:underline"
                >
                  <span>Tüm Videoları Gör</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Scrollable Video List Container */}
              <div className="space-y-4 max-h-[540px] sm:max-h-[680px] lg:max-h-[760px] xl:max-h-[820px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-brand-surface">
                {NCT_VIDEOS.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => onPlayVideo(video)}
                    id={`video-card-${video.id}`}
                    className="group cursor-pointer p-3 sm:p-4 rounded-2xl bg-white border border-brand-neutral hover:border-brand-accent hover:bg-brand-light transition-all duration-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                  >
                    {/* Video element acting as preview */}
                    <div className="relative w-full sm:w-36 h-28 shrink-0 rounded-xl overflow-hidden bg-brand-primary/5 shadow-sm flex items-center justify-center">
                      <video
                        src={video.videoUrl}
                        preload="metadata"
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-brand-primary/30 group-hover:bg-brand-primary/20 transition-colors flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Video Metadata */}
                    <div className="flex flex-col justify-between flex-grow space-y-1">
                      <div>
                        <h4 className="font-bold text-brand-primary text-base group-hover:text-brand-accent transition-colors leading-snug">
                          {video.title}
                        </h4>
                        <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2 mt-1 font-normal">
                          {video.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-[#6B7280] font-semibold pt-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                        <span>{video.organization || 'NCT Robotik'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
