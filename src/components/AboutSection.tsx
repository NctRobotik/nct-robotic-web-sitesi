import React from 'react';
import { Bot, ShieldCheck, Award, Cpu, Sparkles, MapPin, Building2, Globe } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-brand-neutral" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            HAKKIMIZDA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-primary tracking-tight">
            Geleceğin Robotik Teknolojilerini <span className="text-brand-accent">Yerli Mühendislik</span> ile Üretiyoruz
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed font-normal">
            NCT Robotik; 2018 yılından bu yana yapay zeka, otonom sistemler and eğitim robotiği alanında %100 yerli yazılım and donanım çözümleri geliştiren lider teknoloji şirketidir.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-[28px] bg-white border border-brand-neutral space-y-4 hover:border-brand-accent transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-brand-accent text-white flex items-center justify-center shadow-lg">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary">Ar-Ge & Yerli İnovasyon</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Teknopark Ar-Ge merkezimizde geliştirdiğimiz gömülü yapay zeka sistemleri and robotik donanımlarla uluslararası standartlarda üretim yapıyoruz.
            </p>
          </div>

          <div className="p-8 rounded-[28px] bg-white border border-brand-neutral space-y-4 hover:border-brand-accent transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-brand-primary text-brand-accent flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-6 h-6 text-brand-accent" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary">Çocuk Güvenliği and KVKK</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Çocukların verilerini %100 kapalı, güvenli and mahremiyete uygun sunucularda saklıyor; pedogojik açıdan onaylanmış yapay zeka modelleri sunuyoruz.
            </p>
          </div>

          <div className="p-8 rounded-[28px] bg-white border border-brand-neutral space-y-4 hover:border-brand-accent transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-brand-accent text-white flex items-center justify-center shadow-lg">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary">Çok Dilli Eğitim Vizyonu</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              49 farklı dil desteği and müfredat uyumlu içeriklerimizle Türkiye’den dünyaya uzanan bir teknoloji ekosistemi inşa ediyoruz.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
