import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  Cpu, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Rocket, 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  Lightbulb, 
  ArrowRight, 
  Bot, 
  History, 
  Target, 
  Compass, 
  Stethoscope, 
  ConciergeBell, 
  Factory, 
  BookOpen
} from 'lucide-react';

interface AboutPageProps {
  onNavigateProducts: () => void;
  onOpenContact: () => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateProducts,
  onOpenContact,
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-brand-primary min-h-screen font-sans selection:bg-brand-accent selection:text-white pt-6">
      
      {/* ==========================================
          1. HERO SECTION
         ========================================== */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-brand-primary">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Text Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-neutral text-brand-primary text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-brand-accent" />
                <span>{t('about.hero.badge')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {t('about.hero.title')}
              </h1>

              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
                {t('about.hero.description')}
              </p>

              <div className="pt-4">
                <button
                  onClick={onNavigateProducts}
                  className="group flex items-center gap-2 h-11 px-6 bg-brand-accent hover:bg-[#994800] text-white font-semibold text-sm rounded-[12px] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
                >
                  <span>{t('about.hero.exploreBtn')}</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Hero Visual Composite */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-[16px] overflow-hidden border border-white/5 bg-white/5 p-2">
                <img
                  src="/hero-pix-orbit.jpeg"
                  alt={t('about.hero.imageAlt')}
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          2. ŞİRKET HİKÂYESİ (COMPANY STORY)
         ========================================== */}
      <section className="py-20 bg-[#F8FAFC] border-y border-brand-neutral relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <History className="w-3.5 h-3.5 text-brand-accent" />
              {t('about.story.badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight">
              {t('about.story.titlePart1')} <span className="text-brand-accent">{t('about.story.titlePart2')}</span>
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
              {t('about.story.description')}
            </p>
          </div>

          {/* Row of 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-[16px] bg-white border border-brand-neutral hover:border-white/10 transition-all duration-200 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-[10px] bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center font-bold text-lg font-mono">
                {t('about.story.card1.badge')}
              </div>
              <h3 className="text-lg font-bold text-brand-primary">{t('about.story.card1.title')}</h3>
              <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                {t('about.story.card1.desc')}
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-[16px] bg-white border border-brand-neutral hover:border-white/10 transition-all duration-200 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-[10px] bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center font-bold text-lg">
                {t('about.story.card2.badge')}
              </div>
              <h3 className="text-lg font-bold text-brand-primary">{t('about.story.card2.title')}</h3>
              <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                {t('about.story.card2.desc')}
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-[16px] bg-white border border-brand-neutral hover:border-white/10 transition-all duration-200 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-[10px] bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center font-bold text-lg">
                {t('about.story.card3.badge')}
              </div>
              <h3 className="text-lg font-bold text-brand-primary">{t('about.story.card3.title')}</h3>
              <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                {t('about.story.card3.desc')}
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-[16px] bg-white border border-brand-neutral hover:border-white/10 transition-all duration-200 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-[10px] bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center font-bold text-lg">
                {t('about.story.card4.badge')}
              </div>
              <h3 className="text-lg font-bold text-brand-primary">{t('about.story.card4.title')}</h3>
              <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                {t('about.story.card4.desc')}
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          3. KURUCUMUZ (PROF. DR. İSMAİL OVALI)
         ========================================== */}
      <section className="py-24 bg-[#F8FAFC] border-y border-brand-neutral relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="p-8 sm:p-12 lg:p-16 rounded-[36px] bg-white border border-brand-neutral shadow-sm relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
              
              {/* LEFT SIDE: Portrait & Profile */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-full max-w-[280px] rounded-[24px] overflow-hidden border border-brand-neutral bg-slate-50 p-2 shadow-xs shadow-md">
                  <img
                    src="/iovali.png"
                    alt={t('about.founder.imageAlt')}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-brand-primary">{t('about.founder.name')}</h3>
                  <div className="space-y-1 text-[#6B7280] text-xs sm:text-sm font-medium">
                    <p>{t('about.founder.role1')}</p>
                    <p>{t('about.founder.role2')}</p>
                    <p>{t('about.founder.role3')}</p>
                    <p className="text-[#6B7280] text-xs mt-1.5 font-normal">{t('about.founder.role4')}</p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Message, Institutional Rows & Quote */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-neutral text-brand-primary text-xs font-bold uppercase tracking-wider">
                  <Users className="w-4 h-4 text-brand-accent" />
                  {t('about.founder.badge')}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary leading-tight">
                  {t('about.founder.title')}
                </h2>

                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
                  {t('about.founder.description')}
                </p>

                {/* Institutional Information Rows */}
                <div className="space-y-6 pt-6 border-t border-brand-neutral">
                  
                  {/* First Row */}
                  <div className="flex items-center gap-6 sm:gap-8 py-2">
                    {/* Logo Area with subtle light neutral plate */}
                    <div 
                      className="w-[100px] sm:w-[140px] shrink-0 flex items-center justify-center rounded-[10px]"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.94)',
                        padding: '12px 18px'
                      }}
                    >
                      <img
                        src="/mucit_atolyesi.png"
                        alt={t('about.founder.partner1Alt')}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    {/* Vertical Divider */}
                    <div className="self-stretch w-[1px] bg-brand-neutral shrink-0" />
                    {/* Text Area */}
                    <div className="space-y-1 py-1">
                      <h4 className="text-base font-bold text-brand-primary leading-snug">{t('about.founder.partner1Title')}</h4>
                      <p className="text-[#6B7280] text-xs sm:text-sm font-normal leading-relaxed">
                        {t('about.founder.partner1Desc')}
                      </p>
                    </div>
                  </div>

                  {/* Horizontal Divider */}
                  <div className="h-[1px] bg-brand-neutral w-full" />

                  {/* Second Row */}
                  <div className="flex items-center gap-6 sm:gap-8 py-2">
                    {/* Logo Area */}
                    <div className="w-[100px] sm:w-[140px] shrink-0 flex items-center justify-start">
                      <img
                        src="/polo_logo.png"
                        alt={t('about.founder.partner2Alt')}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    {/* Vertical Divider */}
                    <div className="self-stretch w-[1px] bg-brand-neutral shrink-0" />
                    {/* Text Area */}
                    <div className="space-y-1 py-1">
                      <h4 className="text-base font-bold text-brand-primary leading-snug">{t('about.founder.partner2Title')}</h4>
                      <p className="text-[#6B7280] text-xs sm:text-sm font-normal leading-relaxed">
                        {t('about.founder.partner2Desc')}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Quote Panel */}
                <div className="p-6 rounded-[16px] bg-brand-light border border-brand-neutral border-l-2 border-l-brand-accent text-[#6B7280] text-sm sm:text-base italic leading-relaxed space-y-2.5">
                  <p className="relative z-10 font-normal">
                    {t('about.founder.quote')}
                  </p>
                  <span className="block font-bold text-xs text-brand-accent not-italic text-right pt-1">
                    {t('about.founder.quoteAuthor')}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          4. DEĞERLERİMİZ (CORE VALUES GRID)
         ========================================== */}
      <section className="py-24 bg-[#F8FAFC] border-t border-brand-neutral relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              {t('about.values.badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight">
              {t('about.values.title')}
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
              {t('about.values.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-7 rounded-[24px] bg-white border border-brand-neutral hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-200 space-y-4 group shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary transition-colors group-hover:text-brand-accent">{t('about.values.card1.title')}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('about.values.card1.desc')}
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-[24px] bg-white border border-brand-neutral hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-200 space-y-4 group shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary transition-colors group-hover:text-brand-accent">{t('about.values.card2.title')}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('about.values.card2.desc')}
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-[24px] bg-white border border-brand-neutral hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-200 space-y-4 group shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary transition-colors group-hover:text-brand-accent">{t('about.values.card3.title')}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('about.values.card3.desc')}
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-[24px] bg-white border border-brand-neutral hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-200 space-y-4 group shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary transition-colors group-hover:text-brand-accent">{t('about.values.card4.title')}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('about.values.card4.desc')}
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-7 rounded-[24px] bg-white border border-brand-neutral hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-200 space-y-4 group shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary transition-colors group-hover:text-brand-accent">{t('about.values.card5.title')}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('about.values.card5.desc')}
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-7 rounded-[24px] bg-white border border-brand-neutral hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-200 space-y-4 group shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary transition-colors group-hover:text-brand-accent">{t('about.values.card6.title')}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('about.values.card6.desc')}
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          5. SAYILARLA NCT ROBOTİK (STATS GRID)
         ========================================== */}
      <section className="py-20 bg-white border-y border-brand-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-neutral text-brand-primary text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-brand-accent" />
              {t('about.stats.badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary">{t('about.stats.title')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Stat 1 */}
            <div className="p-8 rounded-[16px] bg-white border border-brand-neutral shadow-sm text-center space-y-3 hover:border-white/10 transition-all duration-300">
              <span className="block text-4xl sm:text-5xl font-extrabold text-brand-accent tracking-tight">{t('about.stats.stat1.value')}</span>
              <span className="block text-xs sm:text-sm font-semibold text-[#6B7280] uppercase tracking-wider">{t('about.stats.stat1.label')}</span>
            </div>

            {/* Stat 2 */}
            <div className="p-8 rounded-[16px] bg-white border border-brand-neutral shadow-sm text-center space-y-3 hover:border-white/10 transition-all duration-300 flex flex-col justify-center">
              <span className="block text-lg sm:text-xl font-bold text-brand-primary tracking-tight leading-snug">{t('about.stats.stat2.value')}</span>
              <span className="block text-xs sm:text-sm font-semibold text-[#6B7280] uppercase tracking-wider mt-1">{t('about.stats.stat2.label')}</span>
            </div>

            {/* Stat 3 */}
            <div className="p-8 rounded-[16px] bg-white border border-brand-neutral shadow-sm text-center space-y-3 hover:border-white/10 transition-all duration-300">
              <span className="block text-4xl sm:text-5xl font-extrabold text-brand-accent tracking-tight">{t('about.stats.stat3.value')}</span>
              <span className="block text-xs sm:text-sm font-semibold text-[#6B7280] uppercase tracking-wider">{t('about.stats.stat3.label')}</span>
            </div>

            {/* Stat 4 */}
            <div className="p-8 rounded-[16px] bg-white border border-brand-neutral shadow-sm text-center space-y-3 hover:border-white/10 transition-all duration-300">
              <span className="block text-4xl sm:text-5xl font-extrabold text-brand-accent tracking-tight">{t('about.stats.stat4.value')}</span>
              <span className="block text-xs sm:text-sm font-semibold text-[#6B7280] uppercase tracking-wider">{t('about.stats.stat4.label')}</span>
            </div>

            {/* Stat 5 */}
            <div className="p-8 rounded-[16px] bg-white border border-brand-neutral shadow-sm text-center space-y-3 hover:border-white/10 transition-all duration-300">
              <span className="block text-4xl sm:text-5xl font-extrabold text-brand-accent tracking-tight">{t('about.stats.stat5.value')}</span>
              <span className="block text-xs sm:text-sm font-semibold text-[#6B7280] uppercase tracking-wider">{t('about.stats.stat5.label')}</span>
            </div>

            {/* Stat 6 */}
            <div className="p-8 rounded-[16px] bg-white border border-brand-neutral shadow-sm text-center space-y-3 hover:border-white/10 transition-all duration-300 flex flex-col justify-center">
              <span className="block text-lg sm:text-xl font-bold text-brand-primary tracking-tight leading-snug">{t('about.stats.stat6.value')}</span>
              <span className="block text-xs sm:text-sm font-semibold text-[#6B7280] uppercase tracking-wider mt-1">{t('about.stats.stat6.label')}</span>
            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          6. ÇALIŞMA ALANLARIMIZ (CATEGORIES GRID)
         ========================================== */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Bot className="w-3.5 h-3.5" />
              {t('about.fields.badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-primary">
              {t('about.fields.titlePart1')} <span className="text-brand-accent">{t('about.fields.titlePart2')}</span>
            </h2>
            <p className="text-[#6B7280] text-base">
              {t('about.fields.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. Eğitim Robotları */}
            <div className="p-8 rounded-[32px] bg-white border border-brand-neutral hover:border-brand-accent transition-all duration-300 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 text-brand-accent border border-brand-accent/20 flex items-center justify-center">
                  <BookOpen className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-mono font-bold rounded-full border border-brand-accent/20">
                  {t('about.fields.card1.badge')}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-primary">{t('about.fields.card1.title')}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {t('about.fields.card1.desc')}
              </p>
            </div>

            {/* 2. Sağlık Robotları */}
            <div className="p-8 rounded-[32px] bg-white border border-brand-neutral hover:border-brand-accent transition-all duration-300 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 text-brand-accent border border-brand-accent/20 flex items-center justify-center">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-mono font-bold rounded-full border border-brand-accent/20">
                  {t('about.fields.card2.badge')}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-primary">{t('about.fields.card2.title')}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {t('about.fields.card2.desc')}
              </p>
            </div>

            {/* 3. Hizmet Robotları */}
            <div className="p-8 rounded-[32px] bg-white border border-brand-neutral hover:border-brand-accent transition-all duration-300 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 text-brand-accent border border-brand-accent/20 flex items-center justify-center">
                  <ConciergeBell className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-mono font-bold rounded-full border border-brand-accent/20">
                  {t('about.fields.card3.badge')}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-primary">{t('about.fields.card3.title')}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {t('about.fields.card3.desc')}
              </p>
            </div>

            {/* 4. Endüstriyel Robotlar */}
            <div className="p-8 rounded-[32px] bg-white border border-brand-neutral hover:border-brand-accent transition-all duration-300 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 text-brand-accent border border-brand-accent/20 flex items-center justify-center">
                  <Factory className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-mono font-bold rounded-full border border-brand-accent/20">
                  {t('about.fields.card4.badge')}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-primary">{t('about.fields.card4.title')}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {t('about.fields.card4.desc')}
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          7. NCT ROBOTİK YOLCULUĞU (TIMELINE)
         ========================================== */}
      <section className="py-24 bg-[#F8FAFC] border-t border-brand-neutral relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-neutral text-brand-primary text-xs font-bold uppercase tracking-wider">
              <Rocket className="w-4 h-4 text-brand-accent" />
              {t('about.timeline.badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary">
              {t('about.timeline.titlePart1')} <span className="text-brand-accent">{t('about.timeline.titlePart2')}</span>
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
              {t('about.timeline.description')}
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative pt-8 pb-4">
            
            {/* Horizontal Line connecting points for Desktop/Tablet (hidden on mobile) */}
            <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-[1px] bg-brand-neutral hidden md:block z-0" />

            {/* Timeline Milestones Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12 relative z-10">
              
              {/* Milestone 1 */}
              <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-4 group">
                {/* Vertical connector line for mobile (hidden on desktop) */}
                <div className="absolute left-[7.5px] top-6 bottom-[-48px] w-[1px] bg-brand-neutral md:hidden z-0" />

                <div className="flex flex-col items-center shrink-0 z-10">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 hidden md:block">
                    {t('about.timeline.m2018.year')}
                  </span>
                  <div className="w-4 h-4 rounded-full bg-[#F47A20] border-4 border-white ring-2 ring-[#F47A20]/20 mt-1 md:mt-4 transition-transform group-hover:scale-125 duration-200" />
                </div>
                
                <div className="space-y-2 max-w-xs md:max-w-none">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 md:hidden block">
                    {t('about.timeline.m2018.year')}
                  </span>
                  <h3 className="text-base font-bold text-brand-primary">{t('about.timeline.m2018.title')}</h3>
                  <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                    {t('about.timeline.m2018.desc')}
                  </p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-4 group">
                <div className="absolute left-[7.5px] top-6 bottom-[-48px] w-[1px] bg-slate-800 md:hidden z-0" />

                <div className="flex flex-col items-center shrink-0 z-10">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 hidden md:block">
                    {t('about.timeline.m2019.year')}
                  </span>
                  <div className="w-4 h-4 rounded-full bg-[#F47A20] border-4 border-white ring-2 ring-[#F47A20]/20 mt-1 md:mt-4 transition-transform group-hover:scale-125 duration-200" />
                </div>
                
                <div className="space-y-2 max-w-xs md:max-w-none">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 md:hidden block">
                    {t('about.timeline.m2019.year')}
                  </span>
                  <h3 className="text-base font-bold text-brand-primary">{t('about.timeline.m2019.title')}</h3>
                  <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                    {t('about.timeline.m2019.desc')}
                  </p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-4 group">
                <div className="absolute left-[7.5px] top-6 bottom-[-48px] w-[1px] bg-slate-800 md:hidden z-0" />

                <div className="flex flex-col items-center shrink-0 z-10">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 hidden md:block">
                    {t('about.timeline.m2022.year')}
                  </span>
                  <div className="w-4 h-4 rounded-full bg-[#F47A20] border-4 border-white ring-2 ring-[#F47A20]/20 mt-1 md:mt-4 transition-transform group-hover:scale-125 duration-200" />
                </div>
                
                <div className="space-y-2 max-w-xs md:max-w-none">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 md:hidden block">
                    {t('about.timeline.m2022.year')}
                  </span>
                  <h3 className="text-base font-bold text-brand-primary">{t('about.timeline.m2022.title')}</h3>
                  <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                    {t('about.timeline.m2022.desc')}
                  </p>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-4 group">
                <div className="flex flex-col items-center shrink-0 z-10">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 hidden md:block">
                    {t('about.timeline.m2024.year')}
                  </span>
                  <div className="w-4 h-4 rounded-full bg-[#F47A20] border-4 border-white ring-2 ring-[#F47A20]/20 mt-1 md:mt-4 transition-transform group-hover:scale-125 duration-200" />
                </div>
                
                <div className="space-y-2 max-w-xs md:max-w-none">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 md:hidden block">
                    {t('about.timeline.m2024.year')}
                  </span>
                  <h3 className="text-base font-bold text-brand-primary">{t('about.timeline.m2024.title')}</h3>
                  <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                    {t('about.timeline.m2024.desc')}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          8 & 9. MİSYON VE VİZYON
         ========================================== */}
      <section className="py-24 bg-white border-t border-brand-neutral relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight">
              {t('about.missionVision.title')}
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
              {t('about.missionVision.description')}
            </p>
          </div>

          {/* Two Balanced Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column: Misyonumuz */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-brand-accent shrink-0" />
                <h3 className="text-xl font-bold text-brand-primary tracking-tight">{t('about.missionVision.missionTitle')}</h3>
              </div>
              
              {/* Thin Divider Line */}
              <div className="h-[1px] bg-brand-primary/10 w-full" />
              
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
                {t('about.missionVision.missionDesc')}
              </p>
            </div>

            {/* Right Column: Vizyonumuz */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-accent shrink-0" />
                <h3 className="text-xl font-bold text-brand-primary tracking-tight">{t('about.missionVision.visionTitle')}</h3>
              </div>
              
              {/* Thin Divider Line */}
              <div className="h-[1px] bg-brand-primary/10 w-full" />
              
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
                {t('about.missionVision.visionDesc')}
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          10. ALT CTA (CALL TO ACTION)
         ========================================== */}
      <section className="py-24 bg-white border-t border-brand-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="max-w-3xl space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-neutral text-brand-primary text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F47A20]" />
              {t('about.cta.badge')}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight">
              {t('about.cta.title')}
            </h2>

            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              {t('about.cta.description')}
            </p>

            <div className="flex items-center gap-6 pt-2">
              <button
                onClick={onOpenContact}
                className="group flex items-center gap-2 h-11 px-6 bg-brand-accent hover:bg-[#D35A00] text-white font-semibold text-sm rounded-[12px] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
              >
                <span>{t('about.cta.contactBtn')}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onNavigateProducts}
                className="group flex items-center gap-1 text-brand-accent hover:text-[#E66F16] text-sm font-semibold transition-colors cursor-pointer border-b border-transparent hover:border-[#F47A20]"
              >
                <span>{t('about.cta.productsBtn')}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
