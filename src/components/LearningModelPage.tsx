import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, CheckCircle, Heart, TrendingUp, Info } from 'lucide-react';

export const LearningModelPage: React.FC = () => {
  const navigate = useNavigate();
  const steps = [
    {
      num: 1,
      title: "Soruları Yanıtlayın",
      desc: "Mobil uygulamımızda çocuğunuzla ilgili kısa soruları yanıtlayarak ilk bilgileri paylaşırsınız.",
      img: "/step1.png"
    },
    {
      num: 2,
      title: "Profil Oluşturulur",
      desc: "Verdiğiniz yanıtlar doğrultusunda çocuğunuz için ilk öğrenme profili oluşturulur.",
      img: "/step2.png"
    },
    {
      num: 3,
      title: "Anlatım Uygulanır",
      desc: "Orbit Pix, aynı konuyu çocuğunuzun profiline göre en uygun şekilde anlatır ve destek olur.",
      img: "/step3.png"
    },
    {
      num: 4,
      title: "Sürekli Gelişir",
      desc: "Çocuğunuz ilerledikçe profil güncellenir. Anlatım ve destek seviyesi buna göre uyarlanır.",
      img: "/step4.png"
    }
  ];

  return (
    <div className="bg-white text-brand-primary min-h-screen font-sans selection:bg-brand-accent selection:text-white ">
      {/* ==========================================
          1. HERO SECTION
         ========================================== */}
      <section className="w-full">
        {/* Desktop Hero Section (md and above) */}
        <div
          className="hidden md:flex relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] text-white flex-col justify-center py-20 overflow-hidden select-none"
          style={{
            backgroundImage: "url('/ogrenme-modeli-hero.webp')",
            backgroundSize: "100% auto",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            {/* Hero Text Content */}
            <div className="max-w-xl sm:max-w-2xl lg:max-w-[45%] space-y-6 text-left">
              <span className="font-manrope text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-brand-accent block">
                ÖĞRENME MODELİ
              </span>

              <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12]">
                Her çocuk <br /> farklı öğrenir.
              </h1>

              <p className="font-manrope text-brand-light/95 text-base sm:text-lg leading-relaxed font-normal">
                Orbit Pix, öğrencinizi{" "}
                <span className="text-brand-accent font-semibold">tanır</span>,
                öğrenme sürecini <br></br> analiz eder ve anlatımını{" "}
                <span className="text-brand-accent font-semibold">
                  ona göre<br></br>uyarlar
                </span>
                .
                <br />
                <br />
                Böylece her öğrenci için daha verimli <br></br> bir öğrenme
                deneyimi oluşturulur.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Hero Section (below md) */}
        <div className="md:hidden bg-[#1f242b] text-white flex flex-col pt-10">
          <div className="px-5 pb-6 text-left">
            <span className="font-manrope text-xs font-bold tracking-[0.18em] uppercase text-brand-accent block mb-4">
              ÖĞRENME MODELİ
            </span>

            <h1 className="font-manrope text-[36px] xs:text-[40px] sm:text-[44px] leading-[1.05] font-extrabold text-white">
              Her çocuk farklı öğrenir.
            </h1>

            <p className="font-manrope mt-5 text-base leading-relaxed text-white/80 max-w-full">
              Orbit Pix, öğrencinizi{" "}
              <span className="text-brand-accent font-semibold">tanır</span>,
              öğrenme sürecini analiz eder ve anlatımını{" "}
              <span className="text-brand-accent font-semibold">ona göre uyarlar</span>.
            </p>

            <p className="font-manrope mt-4 text-base leading-relaxed text-white/80 max-w-full">
              Böylece her öğrenci için daha verimli bir öğrenme deneyimi oluşturulur.
            </p>
          </div>

          <div className="w-full px-3 pb-6 flex items-center justify-center">
            <img
              src="/ogrenme-modeli-hero.webp"
              alt="NCT Öğrenme Modeli"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          2. HOW IT PERSONALIZES SECTION (RESTRUCTURED)
         ========================================== */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#E5E7EB] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
            <h2 className="font-manrope text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#111827] tracking-tight leading-tight">
              Orbit Pix öğrenmeyi nasıl <span className="text-[#FF7A00]">kişiselleştirir?</span>
            </h2>
          </div>

          {/* Steps Desktop Layout */}
          <div className="hidden lg:block space-y-4">
            {/* Top Text Columns */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="space-y-3 text-left pl-6 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FF7A00] flex items-center justify-center text-white text-xs font-extrabold shrink-0">
                      {step.num}
                    </div>
                    <h3 className="font-manrope text-base xl:text-lg font-bold text-[#111827] tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal min-h-[44px]">
                    {step.desc}
                  </p>
                  {/* Vertical line centered below circle */}
                  <div className="flex justify-start pt-1">
                    <div className="h-8 w-[1px] bg-[#E5E7EB] relative ml-3">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Info Callout Card (Desktop) */}
            <div className="w-full pt-2 pb-2">
              <div className="relative w-full min-h-[110px] bg-gradient-to-r from-white to-[#F7FAFF] rounded-[20px] border border-[#E8EDF5] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-[0_2px_12px_rgba(0,0,0,0.015)] overflow-hidden">
                {/* Subtle Decorative Elements (Stripe/Linear style) */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0066FF]/4 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-36 h-36 border border-[#0066FF]/4 rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-[#0066FF]/6 blur-xs pointer-events-none" />
                
                {/* Left + Center content */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 z-10 w-full sm:w-auto">
                  {/* Circular blue info icon */}
                  <div className="w-10 h-10 rounded-full bg-[#EBF2FF] flex items-center justify-center text-[#0066FF] shrink-0 shadow-2xs">
                    <Info className="w-5 h-5 stroke-[2.5]" />
                  </div>

                  {/* Text content */}
                  <div className="space-y-1 text-center sm:text-left">
                    <h4 className="font-manrope text-sm sm:text-base font-bold text-[#111827] tracking-tight">
                      Kişiselleştirme Süreci Hakkında
                    </h4>
                    <p className="font-manrope text-[#4B5563] text-xs sm:text-sm leading-relaxed max-w-[620px] font-normal">
                      Kişiselleştirme süreci, NCT Bireyselleştirilmiş Robotik Öğrenme Refakat Modeli temel alınarak geliştirilmiştir.
                    </p>
                  </div>
                </div>

                {/* Right subtle ghost button */}
                <button
                  type="button"
                  onClick={() => navigate("/profil-metodolojisi")}
                  className="z-10 shrink-0 inline-flex items-center gap-1.5 bg-[#EBF2FF] hover:bg-[#DBE7FF] text-[#0066FF] px-4.5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border border-transparent active:scale-95 shadow-2xs hover:shadow-xs"
                >
                  <span>Daha Fazla Bilgi</span>
                  <span className="text-[14px] leading-none">→</span>
                </button>
              </div>
            </div>

            {/* Bottom Card Grid */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, idx) => {
                const imgScales = ["scale-[1.24]", "scale-[1.22]", "scale-[1.22]", "scale-[1.22]"];
                return (
                  <div
                    key={step.num}
                    className="bg-white aspect-[3/4] rounded-[24px] border border-[#E5E7EB] overflow-hidden flex items-center justify-center p-0 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <img
                      src={step.img}
                      alt={step.title}
                      className={`w-full h-full object-contain ${imgScales[idx]}`}
                      width={280}
                      height={373}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Steps Mobile & Tablet Layout */}
          <div className="block lg:hidden space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {steps.map((step, idx) => {
                const imgScales = ["scale-[1.24]", "scale-[1.22]", "scale-[1.22]", "scale-[1.22]"];
                return (
                  <div key={step.num} className="flex flex-col items-start w-full">
                    {/* Text wrapper with left padding */}
                    <div className="pl-6 pr-4 w-full">
                      {/* Text block */}
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#FF7A00] flex items-center justify-center text-white text-xs font-extrabold shrink-0">
                          {step.num}
                        </div>
                        <h3 className="font-manrope text-base sm:text-lg font-bold text-[#111827]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="font-manrope text-[#6B7280] text-sm leading-relaxed font-normal mt-3 min-h-[40px]">
                        {step.desc}
                      </p>
                      
                      {/* Vertical divider line */}
                      <div className="h-8 w-[1px] bg-[#E5E7EB] ml-3 mt-4 mb-4 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                      </div>
                    </div>

                    {/* Premium Info Callout Card (Mobile - only for step 2) */}
                    {step.num === 2 && (
                      <div className="w-full mb-6 mt-2">
                        <div className="relative w-full bg-gradient-to-r from-white to-[#F7FAFF] rounded-[20px] border border-[#E8EDF5] p-5 flex flex-col items-center justify-between gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.015)] overflow-hidden">
                          {/* Subtle Decorative Elements */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF]/4 rounded-full blur-2xl pointer-events-none" />
                          <div className="absolute -bottom-10 -left-10 w-24 h-24 border border-[#0066FF]/4 rounded-full pointer-events-none" />
                          
                          {/* Left + Center content */}
                          <div className="flex flex-col items-center gap-3 z-10 w-full">
                            {/* Circular blue info icon */}
                            <div className="w-10 h-10 rounded-full bg-[#EBF2FF] flex items-center justify-center text-[#0066FF] shrink-0 shadow-2xs">
                              <Info className="w-5 h-5 stroke-[2.5]" />
                            </div>

                            {/* Text content */}
                            <div className="space-y-1 text-center">
                              <h4 className="font-manrope text-sm font-bold text-[#111827] tracking-tight">
                                Kişiselleştirme Süreci Hakkında
                              </h4>
                              <p className="font-manrope text-[#4B5563] text-xs leading-relaxed font-normal">
                                Kişiselleştirme süreci, NCT Bireyselleştirilmiş Robotik Öğrenme Refakat Modeli temel alınarak geliştirilmiştir.
                              </p>
                            </div>
                          </div>

                          {/* Right subtle ghost button */}
                          <button
                            type="button"
                            onClick={() => navigate("/profil-metodolojisi")}
                            className="z-10 shrink-0 inline-flex items-center gap-1.5 bg-[#EBF2FF] hover:bg-[#DBE7FF] text-[#0066FF] px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border border-transparent active:scale-95 shadow-2xs"
                          >
                            <span>Daha Fazla Bilgi</span>
                            <span className="text-[14px] leading-none">→</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Card */}
                    <div
                      className="bg-white w-full aspect-[3/4] rounded-[24px] border border-[#E5E7EB] overflow-hidden flex items-center justify-center p-0 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
                    >
                      <img
                        src={step.img}
                        alt={step.title}
                        className={`w-full h-full object-contain ${imgScales[idx]}`}
                        width={280}
                        height={373}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          NEW INFOGRAPHIC SECTION
         ========================================== */}
      <section className="py-12 sm:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-full max-w-[1000px]">
            <img
              src="/kisillestirme-motoru.png"
              alt="Kişiselleştirme Motoru İnfografiği"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          3. VELI-COKUK SIDE-BY-SIDE DETAIL SECTION
         ========================================== */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Visual Column */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-lg">
                <img
                  src="/pix-veli-cocuk.png"
                  alt="Veli Öğrenci ve Orbit Pix"
                  width={580}
                  height={435}
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="font-manrope text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.2]">
                Veli öğrenciyi tanıtır, <br />
                <span className="text-brand-accent">Orbit Pix</span> onu
                çalışırken <br />
                daha yakından tanır.
              </h2>

              <p className="font-manrope text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
                Sabit bir öğrenme türü değil, sürekli güncellenen dinamik bir
                öğrenme profili.
              </p>

              {/* 4 Feature Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#E5E7EB]">
                {/* Item 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                    <Monitor className="w-5 h-5 text-brand-accent stroke-[2]" />
                  </div>
                  <h4 className="font-manrope text-sm sm:text-base font-bold text-[#111827] tracking-tight">
                    Daha doğru anlatım
                  </h4>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-brand-accent stroke-[2]" />
                  </div>
                  <h4 className="font-manrope text-sm sm:text-base font-bold text-[#111827] tracking-tight">
                    Daha verimli öğrenme
                  </h4>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-brand-accent stroke-[2]" />
                  </div>
                  <h4 className="font-manrope text-sm sm:text-base font-bold text-[#111827] tracking-tight">
                    Daha güçlü özgüven
                  </h4>
                </div>

                {/* Item 4 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-brand-accent stroke-[2]" />
                  </div>
                  <h4 className="font-manrope text-sm sm:text-base font-bold text-[#111827] tracking-tight">
                    Daha iyi sonuçlar
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. BILIMSEL DANIŞMANLIK SECTION
         ========================================== */}
      <section className="py-20 bg-[#F9FAFB] border-t border-[#E5E7EB] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Column - Photo */}
            <div className="w-full lg:w-auto shrink-0 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <div className="w-[180px] xs:w-[210px] sm:w-[240px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
                <img
                  src="/serhat-sural.jpeg"
                  alt="Prof. Dr. Serhat SÜRAL"
                  className="w-full h-full object-cover object-[center_35%]"
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="w-full lg:flex-1 flex flex-col justify-center text-left">
              <span className="font-manrope text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#FF7A00] block mb-3">
                BİLİMSEL DANIŞMANLIK
              </span>
              
              <h2 className="font-manrope text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.2] mb-6">
                Öğrenme Modelimizin Akademik Danışmanı
              </h2>

              <div className="mb-6">
                <h3 className="font-manrope text-xl sm:text-2xl font-bold text-[#111827] mb-2">
                  Prof. Dr. Serhat SÜRAL
                </h3>
                <p className="font-manrope text-[#6B7280] text-sm sm:text-base font-semibold leading-relaxed">
                  Pamukkale Üniversitesi Eğitim Fakültesi <br />
                  Eğitim Bilimleri Bölümü <br />
                  Eğitim Programları ve Öğretim Ana Bilim Dalı
                </p>
              </div>

              <p className="font-manrope text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal mb-8">
                Prof. Dr. Serhat SÜRAL, Pamukkale Üniversitesi Eğitim Fakültesi Eğitim Bilimleri Bölümü, Eğitim Programları ve Öğretim Ana Bilim Dalında öğretim üyesi olarak görev yapmaktadır. Eğitim programları, öğretim tasarımı, öğrenme-öğretme süreçleri, öğretmen yetiştirme ve ölçme-değerlendirme alanlarında çalışmalar yürütmektedir. Bilimsel çalışmalarında, kuramsal bilgiyi eğitim uygulamalarına dönüştürmeyi esas alan; öğrenci farklılıklarını gözeten, etkili ve sürdürülebilir öğrenme yaklaşımlarını benimseyen bir eğitim anlayışını merkeze almaktadır.
              </p>

              <div className="border-l-4 border-[#FF7A00] pl-4 py-1">
                <p className="font-manrope text-[#111827] text-sm sm:text-base font-semibold leading-relaxed">
                  NCT Öğrenme Modeli’nin geliştirilme sürecine bilimsel danışmanlık sağlamıştır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          5. INFORMATIONAL PAGE FOOTNOTE
         ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-center gap-2.5 text-center">
        <Info className="w-4.5 h-4.5 text-[#6B7280] shrink-0" />
        <p className="font-manrope text-xs sm:text-sm text-[#6B7280] font-medium leading-relaxed">
          Kişiselleştirme süreci, NCT Bireyselleştirilmiş Robotik Öğrenme
          Refakat Modeli temel alınarak geliştirilmiştir.
        </p>
      </div>
    </div>
  );
};
