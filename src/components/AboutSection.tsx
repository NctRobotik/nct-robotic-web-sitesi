import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bot, ShieldCheck, Award, Cpu, Sparkles, MapPin, Building2, Globe } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { i18n } = useTranslation();
  const isEnglish = (i18n.resolvedLanguage || i18n.language || 'tr').startsWith('en');

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-brand-neutral" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            {isEnglish ? "ABOUT US" : "HAKKIMIZDA"}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-primary tracking-tight">
            {isEnglish ? (<>Building the Robotics Technologies of Tomorrow with <span className="text-brand-accent">Local Engineering</span></>) : (<>Geleceğin Robotik Teknolojilerini <span className="text-brand-accent">Yerli Mühendislik</span> ile Üretiyoruz</>)}
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed font-normal">
            {isEnglish ? "Since 2018, NCT Robotik has been developing 100% locally developed software and hardware solutions in artificial intelligence, autonomous systems, and educational robotics as a leading technology company." : "NCT Robotik; 2018 yılından bu yana yapay zekâ, otonom sistemler ve eğitim robotiği alanında %100 yerli yazılım ve donanım çözümleri geliştiren lider teknoloji şirketidir."}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-[28px] bg-white border border-brand-neutral space-y-4 hover:border-brand-accent transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-brand-accent text-white flex items-center justify-center shadow-lg">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary">{isEnglish ? "R&D & Local Innovation" : "Ar-Ge ve Yerli İnovasyon"}</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              {isEnglish ? "We develop embedded AI systems and robotic hardware at our technopark R&D center, producing solutions in line with international standards." : "Teknopark Ar-Ge merkezimizde geliştirdiğimiz gömülü yapay zekâ sistemleri ve robotik donanımlarla uluslararası standartlarda üretim yapıyoruz."}
            </p>
          </div>

          <div className="p-8 rounded-[28px] bg-white border border-brand-neutral space-y-4 hover:border-brand-accent transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-brand-primary text-brand-accent flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-6 h-6 text-brand-accent" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary">{isEnglish ? "Child Safety & KVKK" : "Çocuk Güvenliği ve KVKK"}</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              {isEnglish ? "We store children’s data on fully closed, secure, privacy-conscious servers and provide pedagogically approved AI models." : "Çocukların verilerini %100 kapalı, güvenli ve mahremiyete uygun sunucularda saklıyor; pedagojik açıdan onaylanmış yapay zekâ modelleri sunuyoruz."}
            </p>
          </div>

          <div className="p-8 rounded-[28px] bg-white border border-brand-neutral space-y-4 hover:border-brand-accent transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-brand-accent text-white flex items-center justify-center shadow-lg">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary">{isEnglish ? "Multilingual Education Vision" : "Çok Dilli Eğitim Vizyonu"}</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              {isEnglish ? "With support for 49 languages and curriculum-aligned content, we are building a technology ecosystem that reaches from Türkiye to the world." : "49 farklı dil desteği ve müfredat uyumlu içeriklerimizle Türkiye’den dünyaya uzanan bir teknoloji ekosistemi inşa ediyoruz."}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
