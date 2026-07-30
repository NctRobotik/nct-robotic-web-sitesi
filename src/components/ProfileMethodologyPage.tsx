import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  BookOpenCheck,
  Calendar,
  Clock,
  CheckCircle2,
  Users
} from 'lucide-react';

export const ProfileMethodologyPage: React.FC = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate('/ogrenme-modeli');
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
            <span>Öğrenme Modeli</span>
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
                PROFİL METODOLOJİSİ
              </span>

              <h1 className="font-manrope text-4xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.12]">
                Orbit Pix öğrenme profilini nasıl oluşturur?
              </h1>

              <p className="font-manrope text-[#4B5563] text-base sm:text-lg leading-relaxed font-normal">
                NCT Bireyselleştirilmiş Robotik Öğrenme Refakat Modeli, her öğrencinin benzersiz öğrenme yolculuğunu anlamak ve ona en uygun öğrenme deneyimini sunmak için geliştirilmiştir.
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
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="absolute bottom-[20%] left-[2%] w-8 h-8 rounded-full bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center text-[#FF7A00] opacity-85 animate-pulse" style={{ animationDuration: '3.5s' }}>
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="absolute bottom-[10%] right-[12%] w-9 h-9 rounded-full bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center text-[#8B5CF6] opacity-75 animate-bounce" style={{ animationDuration: '4.5s' }}>
                  <Sparkles className="w-4.5 h-4.5" />
                </div>

                {/* Real Robot Hardware Photo */}
                <img
                  src="/donanim-foto.png"
                  alt="Orbit Pix Robot"
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
              İlk öğrenme profili nasıl oluşturulur?
            </h2>
            <p className="font-manrope text-[#6B7280] text-sm sm:text-base font-normal">
              Öğrenciyi tanımak için çok adımlı, bilimsel bir yaklaşım izleriz.
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
                  Veli bilgileri alınır
                </h3>
                <p className="font-manrope text-[#4B5563] text-sm leading-relaxed font-normal">
                  Mobil uygulamada verilen bilgiler ve kısa sorular, başlangıç verisi olarak kullanılır.
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
                  İlk profil oluşturulur
                </h3>
                <p className="font-manrope text-[#4B5563] text-sm leading-relaxed font-normal">
                  Toplanan bilgiler ışığında öğrenci için ilk öğrenme profili oluşturulur.
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
                  İlk etkileşimler analiz edilir
                </h3>
                <p className="font-manrope text-[#4B5563] text-sm leading-relaxed font-normal">
                  Pix ile yapılan konuşmalar ve etkileşimler analiz edilerek profil geliştirilmeye başlanır.
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
              Pix hangi özellikleri dikkate alır?
            </h2>
            <p className="font-manrope text-[#6B7280] text-sm sm:text-base font-normal">
              Öğrenciyi farklı boyutlarda analiz ederek anlamaya çalışır.
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
                Öğrenme tercihleri
              </h4>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                Görsel, işitsel veya örneklerle öğrenme eğilimleri
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 space-y-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-200">
              <div className="w-8 h-8 rounded-lg bg-[#F3E8FF] flex items-center justify-center text-[#8B5CF6]">
                <MessageSquare className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-manrope text-base font-bold text-[#111827]">
                İletişim tarzı
              </h4>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                Konuşma biçimi, soru sorma ve ifade etme özellikleri
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 space-y-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-200">
              <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] flex items-center justify-center text-[#15803D]">
                <GraduationCap className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-manrope text-base font-bold text-[#111827]">
                Akademik ihtiyaçlar
              </h4>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                Ders bazlı güçlü yönler ve destek gereksinimleri
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 space-y-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-200">
              <div className="w-8 h-8 rounded-lg bg-[#FFF1F2] flex items-center justify-center text-[#E11D48]">
                <Heart className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-manrope text-base font-bold text-[#111827]">
                İlgi alanları
              </h4>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                İlgisini çeken konular, örnekler ve aktiviteler
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 space-y-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-200 sm:col-span-2 lg:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-[#FFF7ED] flex items-center justify-center text-[#EA580C]">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-manrope text-base font-bold text-[#111827]">
                Çalışma alışkanlıkları
              </h4>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                Odaklanma süresi, çalışma temposu ve motivasyon faktörleri
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
              Profil zamanla nasıl gelişir?
            </h2>
            <p className="font-manrope text-[#6B7280] text-sm sm:text-base font-normal">
              Dinamik yapı sayesinde her geçen gün öğrenciyi daha iyi tanır.
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
                  <h4 className="font-manrope text-sm font-bold text-[#111827]">İlk gün</h4>
                  <p className="font-manrope text-[#6B7280] text-xs leading-normal max-w-[160px] font-normal">Başlangıç profili oluşturulur.</p>
                </div>
              </div>

              {/* Week 1 */}
              <div className="flex flex-col items-center text-center space-y-3 z-10">
                <div className="w-14 h-14 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center shadow-xs text-[#8CAC1D]">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-manrope text-sm font-bold text-[#111827]">1. hafta</h4>
                  <p className="font-manrope text-[#6B7280] text-xs leading-normal max-w-[160px] font-normal">İlk etkileşimler analiz edilir.</p>
                </div>
              </div>

              {/* Month 1 */}
              <div className="flex flex-col items-center text-center space-y-3 z-10">
                <div className="w-14 h-14 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center shadow-xs text-[#EA580C]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-manrope text-sm font-bold text-[#111827]">1. ay</h4>
                  <p className="font-manrope text-[#6B7280] text-xs leading-normal max-w-[160px] font-normal">Profil gözle görülür şekilde gelişir.</p>
                </div>
              </div>

              {/* Month 3+ */}
              <div className="flex flex-col items-center text-center space-y-3 z-10">
                <div className="w-14 h-14 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center shadow-xs text-[#8B5CF6]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-manrope text-sm font-bold text-[#111827]">3. ay ve sonrası</h4>
                  <p className="font-manrope text-[#6B7280] text-xs leading-normal max-w-[160px] font-normal">Profil sürekli güncellenir ve kişiselleştirme artar.</p>
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
              Kişiselleştirme neleri etkiler?
            </h2>
            <p className="font-manrope text-[#6B7280] text-sm sm:text-base font-normal">
              Profil, Pix'in sunduğu tüm öğrenme deneyimini iyileştirir.
            </p>
          </div>

          {/* List items block */}
          <div className="bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden divide-y divide-[#E5E7EB] shadow-2xs">
            
            {/* Row 1 */}
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                <span className="font-manrope text-sm sm:text-base font-bold text-[#111827]">
                  Anlatım dili ve üslubu
                </span>
              </div>
              <span className="font-manrope text-[#6B7280] text-sm font-normal sm:text-right pl-4 sm:pl-0">
                Öğrencinin seviyesine ve tarzına uygun anlatım
              </span>
            </div>

            {/* Row 2 */}
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8CAC1D]" />
                <span className="font-manrope text-sm sm:text-base font-bold text-[#111827]">
                  Örnek ve içerik seçimi
                </span>
              </div>
              <span className="font-manrope text-[#6B7280] text-sm font-normal sm:text-right pl-4 sm:pl-0">
                İlgi alanlarına ve ihtiyaçlarına uygun örnekler
              </span>
            </div>

            {/* Row 3 */}
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                <span className="font-manrope text-sm sm:text-base font-bold text-[#111827]">
                  Çalışma ve alıştırma önerileri
                </span>
              </div>
              <span className="font-manrope text-[#6B7280] text-sm font-normal sm:text-right pl-4 sm:pl-0">
                Doğru seviyede, doğru zamanda öneriler
              </span>
            </div>

            {/* Row 4 */}
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                <span className="font-manrope text-sm sm:text-base font-bold text-[#111827]">
                  Destek ve yönlendirme yaklaşımı
                </span>
              </div>
              <span className="font-manrope text-[#6B7280] text-sm font-normal sm:text-right pl-4 sm:pl-0">
                Motivasyon ve destek seviyesi öğrenciye göre belirlenir
              </span>
            </div>

            {/* Row 5 */}
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                <span className="font-manrope text-sm sm:text-base font-bold text-[#111827]">
                  Hedef ve gelişim takibi
                </span>
              </div>
              <span className="font-manrope text-[#6B7280] text-sm font-normal sm:text-right pl-4 sm:pl-0">
                Gelişim alanları belirlenir ve takip edilir
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
              Güvenlik ve gizlilik
            </h2>
            <p className="font-manrope text-[#6B7280] text-sm sm:text-base font-normal">
              Verileriniz bizim için değerlidir ve güvendedir.
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
                <h4 className="font-manrope text-base font-bold text-[#111827]">Veriler güvende</h4>
                <p className="font-manrope text-[#4B5563] text-sm leading-relaxed font-normal">
                  Tüm veriler şifrelenir ve güvenli sunucularda saklanır.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAFBFE] border border-[#E0ECFF] rounded-[24px] p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#E0ECFF] flex items-center justify-center text-[#0066FF]">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-manrope text-base font-bold text-[#111827]">Sadece eğitim için</h4>
                <p className="font-manrope text-[#4B5563] text-sm leading-relaxed font-normal">
                  Veriler yalnızca eğitim deneyimini kişiselleştirmek amacıyla kullanılır.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FCFDF9] border border-[#F0FDF4] rounded-[24px] p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center text-[#8CAC1D]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-manrope text-base font-bold text-[#111827]">KVKK uyumlu</h4>
                <p className="font-manrope text-[#4B5563] text-sm leading-relaxed font-normal">
                  Tüm süreçler KVKK'ya uygun olarak yürütülür.
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
              Bilimsel temel
            </h2>
            <p className="font-manrope text-[#6B7280] text-sm sm:text-base font-normal">
              Modelimiz, güncel bilimsel yaklaşımlar ve alanında uzman eğitimcilerin katkısına dayanır.
            </p>
          </div>

          {/* Academic Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-[#8CAC1D] shrink-0" />
                <h3 className="font-manrope text-lg font-bold text-[#111827]">
                  Eğitim Bilimleri
                </h3>
              </div>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                Öğrenme kuramları ve öğretim yöntemlerinden faydalanır.
              </p>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#0066FF] shrink-0" />
                <h3 className="font-manrope text-lg font-bold text-[#111827]">
                  Yapay Zekâ
                </h3>
              </div>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                Makine öğrenmesi ve doğal dil işleme teknolojileriyle sürekli gelişir.
              </p>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#8B5CF6] shrink-0" />
                <h3 className="font-manrope text-lg font-bold text-[#111827]">
                  Öğrenme Psikolojisi
                </h3>
              </div>
              <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal">
                Bilişsel gelişim ve motivasyon faktörleri dikkate alınır.
              </p>
            </div>

          </div>
        </section>

        {/* ==========================================
            FINAL QUOTE BLOCK (Notion/Linear style)
           ========================================== */}
        <footer className="border-t border-[#E5E7EB] pt-16 text-center space-y-4">
          <blockquote className="font-manrope text-lg sm:text-xl font-medium text-[#111827] italic max-w-2xl mx-auto leading-relaxed">
            "Amacımız öğrenciyi değiştirmek değil, öğrencinin öğrenme biçimine uyum sağlamaktır."
          </blockquote>
          <cite className="font-manrope text-sm font-bold text-[#FF7A00] uppercase tracking-wider block not-italic">
            — NCT Robotik
          </cite>
        </footer>

      </div>
    </div>
  );
};
