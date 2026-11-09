import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLocalizedPath } from '../i18n/routing';
import { SupportedLanguage } from '../i18n/languages';
import { 
  ArrowLeft, 
  Brain, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  ClipboardList, 
  MessageSquare, 
  GraduationCap, 
  Heart, 
  TrendingUp, 
  Activity, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Users 
} from 'lucide-react';

export const ProfileMethodologyPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'tr').toLowerCase().split('-')[0] as SupportedLanguage;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate(getLocalizedPath(currentLang, '/learning-model'));
  };

  return (
    <div className="bg-white text-brand-primary min-h-screen font-sans selection:bg-brand-accent selection:text-white pt-24 sm:pt-28 pb-20">
      
      {/* Container wrapper */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back breadcrumb */}
        <div className="mb-10 text-left">
          <button
            onClick={handleBack}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#6B7280] hover:text-[#111827] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>{t('profileMethodology.backLink')}</span>
          </button>
        </div>

        {/* ==========================================
            HERO SECTION (Apple/Stripe Doc Style)
           ========================================== */}
        <header className="relative border-b border-[#E5E7EB] pb-16 mb-16 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-[#0066FF] bg-[#EBF2FF] px-3.5 py-1.5 rounded-full inline-block">
                {t('profileMethodology.hero.badge')}
              </span>

              <h1 className="font-manrope text-4xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.12]">
                {t('profileMethodology.hero.title')}
              </h1>

              <p className="font-manrope text-[#4B5563] text-base sm:text-lg leading-relaxed font-normal">
                {t('profileMethodology.hero.description')}
              </p>
            </div>

            {/* Right Hardware Visual with floating icons */}
            <div className="lg:col-span-5 flex justify-center items-center relative select-none">
              <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center bg-radial from-[#F4F8FF] to-transparent rounded-full p-4">
                
                {/* Floating Educational Icons */}
                <div className="absolute top-[8%] left-[10%] w-9 h-9 rounded-full bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center text-[#0066FF] opacity-85 animate-bounce" style={{ animationDuration: '3s' }}>
                  <Brain className="w-4.5 h-4.5" />
                </div>
                <div className="absolute top-[4%] right-[15%] w-8 h-8 rounded-full bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center text-[#8CAC1D] opacity-75 animate-pulse" style={{ animationDuration: '4s' }}>
                  <BookOpen className="w-4.5 h-4.5" />
                </div>
                <div className="absolute bottom-[20%] left-[2%] w-8 h-8 rounded-full bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center text-[#FF7A00] opacity-85 animate-pulse" style={{ animationDuration: '3.5s' }}>
                  <GraduationCap className="w-4.5 h-4.5" />
                </div>
                <div className="absolute bottom-[10%] right-[12%] w-9 h-9 rounded-full bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center text-[#8B5CF6] opacity-75 animate-bounce" style={{ animationDuration: '4.5s' }}>
                  <Sparkles className="w-4.5 h-4.5" />
                </div>

                {/* Real Robot Hardware Photo */}
                <img
                  src="/donanim-foto.png"
                  alt={t('profileMethodology.hero.imageAlt')}
                  className="max-h-[85%] max-w-[85%] object-contain drop-shadow-md z-10"
                />
              </div>
            </div>

          </div>
        </header>

        {/* ==========================================
            SECTION 1: İlk öğrenme profili nasıl oluşturulur?
           ========================================== */}
        <section className="mb-20 text-left">
          <div className="space-y-2 mb-10">
            <h2 className="font-manrope text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              {t('profileMethodology.section1.title')}
            </h2>
            <p className="font-manrope text-[#6B7280] text-sm sm:text-base font-normal">
              {t('profileMethodology.section1.description')}
            </p>
          </div>

          {/* Timeline Cards Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 space-y-4 relative shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#D1D5DB] transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-[#EBF2FF] border border-[#D8E6FF] flex items-center justify-center text-[#0066FF] shrink-0">
                <ClipboardList className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-manrope text-base sm:text-lg font-bold text-[#111827]">
                  {t('profileMethodology.section1.step1.title')}
                </h3>
                <p className="font-manrope text-[#4B5563] text-sm leading-relaxed font-normal">
                  {t('profileMethodology.section1.step1.desc')}
                </p>
              </div>
            </div>

            {/* Connecting Arrow (Desktop) */}
            <div className="hidden md:flex items-center justify-center absolute left-[30.5%] top-[45%] z-20 text-[#D1D5DB]">
              <span className="text-xl font-bold">→</span>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 space-y-4 relative shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#D1D5DB] transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-center justify-center text-[#15803D] shrink-0">
                <UserCheck className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-manrope text-base sm:text-lg font-bold text-[#111827]">
                  {t('profileMethodology.section1.step2.title')}
                </h3>
                <p className="font-manrope text-[#4B5563] text-sm leading-relaxed font-normal">
                  {t('profileMethodology.section1.step2.desc')}
                </p>
              </div>
            </div>

            {/* Connecting Arrow (Desktop) */}
            <div className="hidden md:flex items-center justify-center absolute left-[64%] top-[45%] z-20 text-[#D1D5DB]">
              <span className="text-xl font-bold">→</span>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 space-y-4 relative shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#D1D5DB] transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] flex items-center justify-center text-[#C2410C] shrink-0">
                <Brain className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-manrope text-base sm:text-lg font-bold text-[#111827]">
                  {t('profileMethodology.section1.step3.title')}
                </h3>
                <p className="font-manrope text-[#4B5563] text-sm leading-relaxed font-normal">
                  {t('profileMethodology.section1.step3.desc')}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
            SECTION 2: Pix hangi özellikleri dikkate alır?
           ========================================== */}
        <section className="mb-20 text-left">
          <div className="space-y-2 mb-10">
            <h2 className="font-manrope text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              {t('profileMethodology.section2.title')}
            </h2>
            <p className="font-manrope text-[#6B7280] text-sm sm:text-base font-normal">
              {t('profileMethodology.section2.description')}
            </p>
          </div>

          {/* Features Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 space-y-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-200">
              <div className="w-8 h-8 rounded-lg bg-[#EBF2FF] flex items-center justify-center text-[#0066FF]">
                <BookOpen className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-manrope text-base font-bold text-[#111827]">
                {t('profileMethodology.section2.feature1.title')}
              </h4>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('profileMethodology.section2.feature1.desc')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 space-y-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-200">
              <div className="w-8 h-8 rounded-lg bg-[#F3E8FF] flex items-center justify-center text-[#8B5CF6]">
                <MessageSquare className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-manrope text-base font-bold text-[#111827]">
                {t('profileMethodology.section2.feature2.title')}
              </h4>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('profileMethodology.section2.feature2.desc')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 space-y-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-200">
              <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] flex items-center justify-center text-[#15803D]">
                <GraduationCap className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-manrope text-base font-bold text-[#111827]">
                {t('profileMethodology.section2.feature3.title')}
              </h4>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('profileMethodology.section2.feature3.desc')}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 space-y-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-200">
              <div className="w-8 h-8 rounded-lg bg-[#FFF1F2] flex items-center justify-center text-[#E11D48]">
                <Heart className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-manrope text-base font-bold text-[#111827]">
                {t('profileMethodology.section2.feature4.title')}
              </h4>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('profileMethodology.section2.feature4.desc')}
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 space-y-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-200 sm:col-span-2 lg:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-[#FFF7ED] flex items-center justify-center text-[#EA580C]">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-manrope text-base font-bold text-[#111827]">
                {t('profileMethodology.section2.feature5.title')}
              </h4>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('profileMethodology.section2.feature5.desc')}
              </p>
            </div>

          </div>
        </section>

        {/* ==========================================
            SECTION 3: Profil zamanla nasıl gelişir?
           ========================================== */}
        <section className="mb-20 text-left">
          <div className="space-y-2 mb-10">
            <h2 className="font-manrope text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              {t('profileMethodology.section3.title')}
            </h2>
            <p className="font-manrope text-[#6B7280] text-sm sm:text-base font-normal">
              {t('profileMethodology.section3.description')}
            </p>
          </div>

          {/* Development Timeline Grid */}
          <div className="relative border border-[#E5E7EB] rounded-[24px] bg-[#FAFAF9] p-8 lg:p-10 shadow-2xs">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              
              {/* Connector line (Desktop) */}
              <div className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-[1px] bg-[#E5E7EB] z-0" />

              {/* Day 1 */}
              <div className="flex flex-col items-center text-center space-y-3 z-10">
                <div className="w-14 h-14 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center shadow-xs text-[#0066FF]">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-manrope text-sm font-bold text-[#111827]">{t('profileMethodology.section3.dayOne.phase')}</h4>
                  <p className="font-manrope text-[#6B7280] text-xs leading-normal max-w-[160px] font-normal">{t('profileMethodology.section3.dayOne.desc')}</p>
                </div>
              </div>

              {/* Week 1 */}
              <div className="flex flex-col items-center text-center space-y-3 z-10">
                <div className="w-14 h-14 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center shadow-xs text-[#8CAC1D]">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-manrope text-sm font-bold text-[#111827]">{t('profileMethodology.section3.weekOne.phase')}</h4>
                  <p className="font-manrope text-[#6B7280] text-xs leading-normal max-w-[160px] font-normal">{t('profileMethodology.section3.weekOne.desc')}</p>
                </div>
              </div>

              {/* Month 1 */}
              <div className="flex flex-col items-center text-center space-y-3 z-10">
                <div className="w-14 h-14 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center shadow-xs text-[#EA580C]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-manrope text-sm font-bold text-[#111827]">{t('profileMethodology.section3.monthOne.phase')}</h4>
                  <p className="font-manrope text-[#6B7280] text-xs leading-normal max-w-[160px] font-normal">{t('profileMethodology.section3.monthOne.desc')}</p>
                </div>
              </div>

              {/* Month 3+ */}
              <div className="flex flex-col items-center text-center space-y-3 z-10">
                <div className="w-14 h-14 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center shadow-xs text-[#8B5CF6]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-manrope text-sm font-bold text-[#111827]">{t('profileMethodology.section3.monthThree.phase')}</h4>
                  <p className="font-manrope text-[#6B7280] text-xs leading-normal max-w-[160px] font-normal">{t('profileMethodology.section3.monthThree.desc')}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 4: Kişiselleştirme neleri etkiler?
           ========================================== */}
        <section className="mb-20 text-left">
          <div className="space-y-2 mb-10">
            <h2 className="font-manrope text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              {t('profileMethodology.section4.title')}
            </h2>
            <p className="font-manrope text-[#6B7280] text-sm sm:text-base font-normal">
              {t('profileMethodology.section4.description')}
            </p>
          </div>

          {/* List items block */}
          <div className="bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden divide-y divide-[#E5E7EB] shadow-2xs">
            
            {/* Row 1 */}
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                <span className="font-manrope text-sm sm:text-base font-bold text-[#111827]">
                  {t('profileMethodology.section4.row1.title')}
                </span>
              </div>
              <span className="font-manrope text-[#6B7280] text-sm font-normal sm:text-right pl-4 sm:pl-0">
                {t('profileMethodology.section4.row1.desc')}
              </span>
            </div>

            {/* Row 2 */}
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8CAC1D]" />
                <span className="font-manrope text-sm sm:text-base font-bold text-[#111827]">
                  {t('profileMethodology.section4.row2.title')}
                </span>
              </div>
              <span className="font-manrope text-[#6B7280] text-sm font-normal sm:text-right pl-4 sm:pl-0">
                {t('profileMethodology.section4.row2.desc')}
              </span>
            </div>

            {/* Row 3 */}
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                <span className="font-manrope text-sm sm:text-base font-bold text-[#111827]">
                  {t('profileMethodology.section4.row3.title')}
                </span>
              </div>
              <span className="font-manrope text-[#6B7280] text-sm font-normal sm:text-right pl-4 sm:pl-0">
                {t('profileMethodology.section4.row3.desc')}
              </span>
            </div>

            {/* Row 4 */}
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                <span className="font-manrope text-sm sm:text-base font-bold text-[#111827]">
                  {t('profileMethodology.section4.row4.title')}
                </span>
              </div>
              <span className="font-manrope text-[#6B7280] text-sm font-normal sm:text-right pl-4 sm:pl-0">
                {t('profileMethodology.section4.row4.desc')}
              </span>
            </div>

            {/* Row 5 */}
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                <span className="font-manrope text-sm sm:text-base font-bold text-[#111827]">
                  {t('profileMethodology.section4.row5.title')}
                </span>
              </div>
              <span className="font-manrope text-[#6B7280] text-sm font-normal sm:text-right pl-4 sm:pl-0">
                {t('profileMethodology.section4.row5.desc')}
              </span>
            </div>

          </div>
        </section>

        {/* ==========================================
            SECTION 5: Güvenlik ve gizlilik
           ========================================== */}
        <section className="mb-20 text-left">
          <div className="space-y-2 mb-10">
            <h2 className="font-manrope text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              {t('profileMethodology.section5.title')}
            </h2>
            <p className="font-manrope text-[#6B7280] text-sm sm:text-base font-normal">
              {t('profileMethodology.section5.description')}
            </p>
          </div>

          {/* Privacy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-[#FAFDFB] border border-[#DCFCE7] rounded-[24px] p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#15803D]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-manrope text-base font-bold text-[#111827]">{t('profileMethodology.section5.card1.title')}</h4>
                <p className="font-manrope text-[#4B5563] text-sm leading-relaxed font-normal">
                  {t('profileMethodology.section5.card1.desc')}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAFBFE] border border-[#E0ECFF] rounded-[24px] p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#E0ECFF] flex items-center justify-center text-[#0066FF]">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-manrope text-base font-bold text-[#111827]">{t('profileMethodology.section5.card2.title')}</h4>
                <p className="font-manrope text-[#4B5563] text-sm leading-relaxed font-normal">
                  {t('profileMethodology.section5.card2.desc')}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FCFDF9] border border-[#F0FDF4] rounded-[24px] p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center text-[#8CAC1D]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-manrope text-base font-bold text-[#111827]">{t('profileMethodology.section5.card3.title')}</h4>
                <p className="font-manrope text-[#4B5563] text-sm leading-relaxed font-normal">
                  {t('profileMethodology.section5.card3.desc')}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
            SECTION 6: Bilimsel temel
           ========================================== */}
        <section className="mb-20 text-left">
          <div className="space-y-2 mb-10">
            <h2 className="font-manrope text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              {t('profileMethodology.section6.title')}
            </h2>
            <p className="font-manrope text-[#6B7280] text-sm sm:text-base font-normal">
              {t('profileMethodology.section6.description')}
            </p>
          </div>

          {/* Academic Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-[#8CAC1D] shrink-0" />
                <h3 className="font-manrope text-lg font-bold text-[#111827]">
                  {t('profileMethodology.section6.col1.title')}
                </h3>
              </div>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('profileMethodology.section6.col1.desc')}
              </p>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#0066FF] shrink-0" />
                <h3 className="font-manrope text-lg font-bold text-[#111827]">
                  {t('profileMethodology.section6.col2.title')}
                </h3>
              </div>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('profileMethodology.section6.col2.desc')}
              </p>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#8B5CF6] shrink-0" />
                <h3 className="font-manrope text-lg font-bold text-[#111827]">
                  {t('profileMethodology.section6.col3.title')}
                </h3>
              </div>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                {t('profileMethodology.section6.col3.desc')}
              </p>
            </div>

          </div>
        </section>

        {/* ==========================================
            FINAL QUOTE BLOCK (Notion/Linear style)
           ========================================== */}
        <footer className="border-t border-[#E5E7EB] pt-16 text-center space-y-4">
          <blockquote className="font-manrope text-lg sm:text-xl font-medium text-[#111827] italic max-w-2xl mx-auto leading-relaxed">
            {t('profileMethodology.footer.quote')}
          </blockquote>
          <cite className="font-manrope text-sm font-bold text-[#FF7A00] uppercase tracking-wider block not-italic">
            {t('profileMethodology.footer.cite')}
          </cite>
        </footer>

      </div>
    </div>
  );
};
