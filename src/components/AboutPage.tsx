import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  Cpu, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Globe, 
  Rocket, 
  CheckCircle2, 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  Lightbulb, 
  ArrowRight, 
  Bot, 
  MapPin, 
  History, 
  Target, 
  Compass, 
  Stethoscope, 
  ConciergeBell, 
  Factory, 
  BookOpen, 
  Quote
} from 'lucide-react';

interface AboutPageProps {
  onNavigateProducts: () => void;
  onOpenContact: () => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateProducts,
  onOpenContact,
  onOpenQuote,
}) => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.resolvedLanguage === 'en' || i18n.language.startsWith('en');
  const localize = (tr: string, en: string) => isEnglish ? en : tr;

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
                <span>{localize("KURUMSAL PROFİL", "CORPORATE PROFILE")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {localize("Geleceğin Otonom Teknolojilerini Üreten Mühendislik Gücü", "Engineering the Autonomous Technologies of Tomorrow")}
              </h1>

              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal text-[#6B7280]">
                {localize("2018 yılında kurulan NCT Robotik, yapay zekâ, otonom sürüş ve servis robotiği alanlarında dünya standartlarında teknolojiler tasarlayan ve üreten bir mühendislik şirketidir. Pamukkale Üniversitesi Teknokent bünyesinde geliştirdiğimiz yerli yazılım ve donanım altyapısıyla, geleceğin güvenilir robotik sistemlerini tasarlıyoruz.", "Founded in 2018, NCT Robotik is an engineering company designing and manufacturing advanced technologies in artificial intelligence, autonomous mobility, and service robotics. Through software and hardware developed at Pamukkale University Technopark, we engineer dependable robotic systems for the future.")}
              </p>

              <div className="pt-4">
                <button
                  onClick={onNavigateProducts}
                  className="group flex items-center gap-2 h-11 px-6 bg-brand-accent hover:bg-[#994800] text-white font-semibold text-sm rounded-[12px] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
                >
                  <span>{localize("Teknolojilerimizi İnceleyin", "Explore Our Technologies")}</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Hero Visual Composite */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-[16px] overflow-hidden border border-white/5 bg-white/5 p-2">
                <img
                  src="/hero-pix-orbit.jpeg"
                  alt="NCT Robotik Laboratuvarı"
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
              {localize("ŞİRKET HİKÂYESİ", "OUR STORY")}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight">
              {localize("Akademik Birikimden", "From Academic Expertise to")} <span className="text-brand-accent">{localize("Geleceğin Robotlarına", "Tomorrow’s Robots")}</span>
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
              {localize("Akademik bilgi birikimini sanayiye ve toplumsal faydaya dönüştüren NCT Robotik hikayesi.", "The story of NCT Robotik: bringing academic knowledge into industry and creating value for society.")}
            </p>
          </div>

          {/* Row of 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-[16px] bg-white border border-brand-neutral hover:border-white/10 transition-all duration-200 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-[10px] bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center font-bold text-lg font-mono">
                2018
              </div>
              <h3 className="text-lg font-bold text-brand-primary">{localize("Teknokent Doğuşu", "Founded at the Technopark")}</h3>
              <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                {localize("Pamukkale Teknokent bünyesinde akademik vizyon ve Ar-Ge odağıyla kuruldu. İlk gömülü sistem çalışmaları başlatıldı.", "Established at Pamukkale Technopark with an academic vision and an R&D focus. Initial work on embedded systems began.")}
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-[16px] bg-white border border-brand-neutral hover:border-white/10 transition-all duration-200 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-[10px] bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center font-bold text-lg">
                Ar-Ge
              </div>
              <h3 className="text-lg font-bold text-brand-primary">{localize("Akademik Temeller", "Academic Foundations")}</h3>
              <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                {localize("Mechatronics ve yapay zeka alanında doktoralı akademisyen kadrosu ile bilimsel metodolojiler robotlara aktarıldı.", "A team of researchers with doctorates in mechatronics and AI brought scientific methods into robotics development.")}
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-[16px] bg-white border border-brand-neutral hover:border-white/10 transition-all duration-200 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-[10px] bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center font-bold text-lg">
                %100
              </div>
              <h3 className="text-lg font-bold text-brand-primary">{localize("Yerli Üretim Gücü", "Domestic Engineering Expertise")}</h3>
              <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                {localize("Yazılımdan devre kartlarına, 3D mekanik tasarımdan yapay zeka algoritmalarına kadar %100 yerli özgün mühendislik.", "Original domestic engineering across software, circuit boards, 3D mechanical design, and AI algorithms.")}
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-[16px] bg-white border border-brand-neutral hover:border-white/10 transition-all duration-200 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-[10px] bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center font-bold text-lg">
                {localize("Vizyon", "Vision")}
              </div>
              <h3 className="text-lg font-bold text-brand-primary">{localize("Geleceğin İnovasyonu", "Innovation for the Future")}</h3>
              <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                {localize("Eğitimden lojistiğe, sağlıktan servise çok geniş bir yelpazede geleceği şekillendiren otonom platformlar.", "Autonomous platforms shaping the future across education, logistics, healthcare, and service industries.")}
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
            
            {/* Subtle Ambient Background Glows */}
            
            

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
              
              {/* LEFT SIDE: Portrait & Profile */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-full max-w-[280px] rounded-[24px] overflow-hidden border border-brand-neutral bg-slate-50 p-2 shadow-xs shadow-md">
                  <img
                    src="/iovali.png"
                    alt="Prof. Dr. İsmail Ovalı"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-brand-primary">Prof. Dr. İsmail Ovalı</h3>
                  <div className="space-y-1 text-[#6B7280] text-xs sm:text-sm font-medium">
                    <p>{localize("NCT Robotik Kurucusu", "Founder of NCT Robotik")}</p>
                    <p>{localize("NCT Mucit Atölyesi Kurucusu", "Founder of NCT Inventors’ Workshop")}</p>
                    <p>{localize("Pamukkale Üniversitesi Teknoloji Fakültesi Dekanı", "Dean, Faculty of Technology, Pamukkale University")}</p>
                    <p className="text-[#6B7280] text-xs mt-1.5 font-normal">{localize("Akademisyen, Mekatronik ve Robotik Uzmanı", "Academic, Mechatronics and Robotics Specialist")}</p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Message, Institutional Rows & Quote */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-neutral text-brand-primary text-xs font-bold uppercase tracking-wider">
                  <Users className="w-4 h-4 text-brand-accent" />
                  {localize("KURUCUMUZUN MESAJI", "A MESSAGE FROM OUR FOUNDER")}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary leading-tight">
                  {localize("“Bilimsel Derinliği Milli Üretim Gücüyle Buluşturuyoruz”", "“Bringing Scientific Expertise Together with Domestic Manufacturing”")}
                </h2>

                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
                  {localize("Prof. Dr. İsmail Ovalı liderliğinde kurulan NCT Robotik, akademik araştırma ve mühendislik deneyimini yerli teknoloji ürünlerine dönüştürmektedir. Prof. Dr. İsmail Ovalı, çocukların teknolojiyle yalnızca tüketici olarak değil, üreten bireyler olarak tanışmasını sağlamak amacıyla 2018 yılında NCT Mucit Atölyesi’ni kurmuştur. Bugün Ege Bölgesi’nin önde gelen kodlama atölyelerinden biri olan bu yapı, NCT Robotik’in eğitim teknolojileri vizyonunun temelini oluşturmaktadır.", "Founded under the leadership of Prof. Dr. İsmail Ovalı, NCT Robotik transforms academic research and engineering experience into locally developed technology products. In 2018, Prof. Dr. Ovalı established NCT Inventors’ Workshop to help children engage with technology as creators, not merely consumers. Today, the workshop is among the leading coding education centers in the Aegean region and forms the foundation of NCT Robotik’s educational technology vision.")}
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
                        alt="NCT Mucit Atölyesi Logo"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    {/* Vertical Divider */}
                    <div className="self-stretch w-[1px] bg-brand-neutral shrink-0" />
                    {/* Text Area */}
                    <div className="space-y-1 py-1">
                      <h4 className="text-base font-bold text-brand-primary leading-snug">NCT Mucit Atölyesi</h4>
                      <p className="text-[#6B7280] text-xs sm:text-sm font-normal leading-relaxed">
                        {localize("Prof. Dr. İsmail Ovalı tarafından 2018 yılında kurulan kodlama ve teknoloji atölyesi.", "A coding and technology workshop established by Prof. Dr. İsmail Ovalı in 2018.")}
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
                        alt="POLO Otomasyon Logo"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    {/* Vertical Divider */}
                    <div className="self-stretch w-[1px] bg-brand-neutral shrink-0" />
                    {/* Text Area */}
                    <div className="space-y-1 py-1">
                      <h4 className="text-base font-bold text-brand-primary leading-snug">{localize("Üretim Partnerimiz", "Our Manufacturing Partner")}</h4>
                      <p className="text-[#6B7280] text-xs sm:text-sm font-normal leading-relaxed">
                        {localize("Robotik sistemlerimizin üretim süreçlerinde POLO Otomasyon ile iş birliği gerçekleştiriyoruz.", "We collaborate with POLO Otomasyon in the manufacturing of our robotic systems.")}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Quote Panel */}
                <div className="p-6 rounded-[16px] bg-brand-light border border-brand-neutral border-l-2 border-l-brand-accent text-[#6B7280] text-sm sm:text-base italic leading-relaxed space-y-2.5">
                  <p className="relative z-10 font-normal">
                    {localize("“Amacımız yalnızca robot üretmek değil; çocukların güvenle iletişim kurabileceği eğitim teknolojileri ve endüstrinin yükünü hafifleten otonom sistemler geliştirmektir. Bilimsel birikimi üretim gücüyle birleştirerek teknoloji tüketen değil, teknoloji geliştiren nesillere katkı sağlamayı hedefliyoruz.”", "“Our goal is not simply to build robots, but to develop educational technologies children can interact with safely and autonomous systems that ease the workload of industry. By combining scientific expertise with manufacturing capabilities, we aim to help raise generations that develop technology rather than merely consume it.”")}
                  </p>
                  <span className="block font-bold text-xs text-brand-accent not-italic text-right pt-1">
                    — Prof. Dr. İsmail Ovalı
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
              {localize("DEĞERLERİMİZ", "OUR VALUES")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight">
              {localize("Geleceği Şekillendiren İlkelerimiz", "The Principles Shaping Our Future")}
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
              {localize("NCT Robotik ürün geliştirme ve kurumsal kültür temelini oluşturan altı ana değerimiz.", "Six core values guide NCT Robotik’s product development and company culture.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-7 rounded-[24px] bg-white border border-brand-neutral hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-200 space-y-4 group shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary transition-colors group-hover:text-brand-accent">{localize("Akademik Yaklaşım", "Academic Approach")}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                {localize("Tüm yazılım ve pedagojik içeriklerimizi bilimsel araştırmalara, müfredat standartlarına ve akademik doğruluğa dayandırıyoruz.", "We ground our software and educational content in scientific research, curriculum standards, and academic rigor.")}
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-[24px] bg-white border border-brand-neutral hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-200 space-y-4 group shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary transition-colors group-hover:text-brand-accent">{localize("Yerli Teknoloji", "Locally Developed Technology")}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                {localize("Yazılım kodlarından mekanik aksamlara ve elektronik kart tasarımlarına kadar %100 özgün ve milli üretim felsefesi.", "A commitment to original, domestic development—from software and mechanical components to electronic circuit board design.")}
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-[24px] bg-white border border-brand-neutral hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-200 space-y-4 group shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary transition-colors group-hover:text-brand-accent">{localize("Ar-Ge Kültürü", "R&D Culture")}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                {localize("Pamukkale Teknokent merkezli dinamik mühendislik ekibimizle sürekli test eden, öğrenen ve geliştiren bir araştırma iklimi.", "Based at Pamukkale Technopark, our engineering team fosters a culture of continuous testing, learning, and improvement.")}
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-[24px] bg-white border border-brand-neutral hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-200 space-y-4 group shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary transition-colors group-hover:text-brand-accent">{localize("Güvenilir Yapay Zekâ", "Trustworthy Artificial Intelligence")}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                {localize("Açık internet risklerinden izole, %100 kapalı devre çalışan ve filtreli pedagojik AI algoritmaları.", "Filtered, education-focused AI algorithms operating in a closed environment isolated from open-internet risks.")}
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-7 rounded-[24px] bg-white border border-brand-neutral hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-200 space-y-4 group shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary transition-colors group-hover:text-brand-accent">{localize("Çocuk Güvenliği", "Child Safety")}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                {localize("KVKK ve uluslararası çocuk veri mahremiyeti standartlarına %100 tam uyumlu, aile dostu sistem mimarisi.", "A family-focused system architecture designed for compliance with KVKK and international child data privacy standards.")}
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-7 rounded-[24px] bg-white border border-brand-neutral hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-200 space-y-4 group shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary transition-colors group-hover:text-brand-accent">{localize("Sürekli İnovasyon", "Continuous Innovation")}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                {localize("Robotik cihazlarımızı bulut güncellemeleri ve düzenli yazılım sürüm yükseltmeleri ile her gün daha akıllı hale getiriyoruz.", "We continually improve our robotic devices through cloud updates and regular software releases.")}
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
              {localize("RAKAMLARLA BİZ", "AT A GLANCE")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary">{localize("Sayılarla NCT Robotik", "NCT Robotik in Numbers")}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Stat 1 */}
            <div className="p-8 rounded-[16px] bg-white border border-brand-neutral shadow-sm text-center space-y-3 hover:border-white/10 transition-all duration-300">
              <span className="block text-4xl sm:text-5xl font-extrabold text-brand-accent tracking-tight">2018</span>
              <span className="block text-xs sm:text-sm font-semibold text-[#6B7280] uppercase tracking-wider">{localize("Kuruluş Yılı", "Year Founded")}</span>
            </div>

            {/* Stat 2 */}
            <div className="p-8 rounded-[16px] bg-white border border-brand-neutral shadow-sm text-center space-y-3 hover:border-white/10 transition-all duration-300 flex flex-col justify-center">
              <span className="block text-lg sm:text-xl font-bold text-brand-primary tracking-tight leading-snug">{localize("Pamukkale Üniversitesi Teknokent", "Pamukkale University Technopark")}</span>
              <span className="block text-xs sm:text-sm font-semibold text-[#6B7280] uppercase tracking-wider mt-1">{localize("Ar-Ge Merkezi", "R&D Center")}</span>
            </div>

            {/* Stat 3 */}
            <div className="p-8 rounded-[16px] bg-white border border-brand-neutral shadow-sm text-center space-y-3 hover:border-white/10 transition-all duration-300">
              <span className="block text-4xl sm:text-5xl font-extrabold text-brand-accent tracking-tight">%100</span>
              <span className="block text-xs sm:text-sm font-semibold text-[#6B7280] uppercase tracking-wider">{localize("Yerli Mühendislik", "Domestic Engineering")}</span>
            </div>

            {/* Stat 4 */}
            <div className="p-8 rounded-[16px] bg-white border border-brand-neutral shadow-sm text-center space-y-3 hover:border-white/10 transition-all duration-300">
              <span className="block text-4xl sm:text-5xl font-extrabold text-brand-accent tracking-tight">49+</span>
              <span className="block text-xs sm:text-sm font-semibold text-[#6B7280] uppercase tracking-wider">{localize("Dil Desteği", "Supported Languages")}</span>
            </div>

            {/* Stat 5 */}
            <div className="p-8 rounded-[16px] bg-white border border-brand-neutral shadow-sm text-center space-y-3 hover:border-white/10 transition-all duration-300">
              <span className="block text-4xl sm:text-5xl font-extrabold text-brand-accent tracking-tight">7+</span>
              <span className="block text-xs sm:text-sm font-semibold text-[#6B7280] uppercase tracking-wider">{localize("Robot Platformu", "Robot Platforms")}</span>
            </div>

            {/* Stat 6 */}
            <div className="p-8 rounded-[16px] bg-white border border-brand-neutral shadow-sm text-center space-y-3 hover:border-white/10 transition-all duration-300 flex flex-col justify-center">
              <span className="block text-lg sm:text-xl font-bold text-brand-primary tracking-tight leading-snug">{localize("Robotik & Yapay Zekâ", "Robotics & AI")}</span>
              <span className="block text-xs sm:text-sm font-semibold text-[#6B7280] uppercase tracking-wider mt-1">{localize("Uzmanlık Alanı", "Area of Expertise")}</span>
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
              {localize("ÇALIŞMA ALANLARIMIZ", "OUR FIELDS")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-primary">
              {localize("Sektörlere Özel", "Industry-Specific")} <span className="text-brand-accent">{localize("Robotik Çözümler", "Robotics Solutions")}</span>
            </h2>
            <p className="text-[#6B7280] text-base">
              {localize("NCT Robotik bünyesinde tasarlanan ve üretilen 4 temel faaliyet alanı.", "Four core fields in which NCT Robotik designs and develops robotic solutions.")}
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
                  {localize("Orbit Ailesi", "Orbit Family")}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-primary">{localize("Eğitim Robotları", "Educational Robots")}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {localize("Orbit Pix, Orbit Pro ve Orbit Lite: Okul öncesinden liseye çocukların konu tekrarı yapmasını, yabancı dil pratiği kazanmasını ve ödevlerine yardımcı olmasını sağlayan güvenli masaüstü AI robotlarıdır. Ayrıca eğitim kurumlarında Robotik Kodlama derslerinde ve branş derslerinde öğretmene yardımcı asistanlık yapar.", "Orbit Pix, Orbit Pro, and Orbit Lite support learning from preschool through high school, including subject review, foreign-language practice, and homework assistance. Across the product family, they also support teachers in robotics coding and subject-specific classroom activities.")}
              </p>
            </div>

            {/* 2. Sağlık Robotları */}
            <div className="p-8 rounded-[32px] bg-white border border-brand-neutral hover:border-brand-accent transition-all duration-300 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 text-brand-accent border border-brand-accent/20 flex items-center justify-center">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-mono font-bold rounded-full border border-brand-accent/20">
                  {localize("Medikal Destek", "Medical Support")}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-primary">{localize("Sağlık & Bakım Robotları", "Healthcare & Care Robots")}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {localize("Orbit Bloom, hamilelik sürecinde anne adaylarına yapay zekâ destekli rehberlik sunmak üzere geliştirilmiştir. Sağlık kurumlarına yönelik robotlarımız ise hastane, klinik ve rehabilitasyon merkezlerinde ziyaretçi karşılama, yönlendirme ve bilgilendirme görevlerini güvenilir şekilde yerine getirir.", "Orbit Bloom is designed to provide AI-powered guidance for expectant mothers throughout pregnancy. Our robots for healthcare institutions also welcome, guide, and inform visitors in hospitals, clinics, and rehabilitation centers.")}
              </p>
            </div>

            {/* 3. Hizmet Robotları */}
            <div className="p-8 rounded-[32px] bg-white border border-brand-neutral hover:border-brand-accent transition-all duration-300 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 text-brand-accent border border-brand-accent/20 flex items-center justify-center">
                  <ConciergeBell className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-mono font-bold rounded-full border border-brand-accent/20">
                  NCT Serve & Guide
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-primary">{localize("Hizmet & Ağırlama Robotları", "Service & Hospitality Robots")}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {localize("Restoran, kafe, otel, fuar ve kurumsal binalarda ziyaretçi karşılama, yönlendirme, broşür sunumu ve ikram servisi yapan yüksek teknolojili garson ve rehber robotlar.", "Advanced service and guide robots for greeting visitors, offering directions and information, distributing brochures, and serving refreshments in restaurants, cafés, hotels, trade shows, and corporate facilities.")}
              </p>
            </div>

            {/* 4. Endüstriyel Robotlar */}
            <div className="p-8 rounded-[32px] bg-white border border-brand-neutral hover:border-brand-accent transition-all duration-300 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 text-brand-accent border border-brand-accent/20 flex items-center justify-center">
                  <Factory className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-mono font-bold rounded-full border border-brand-accent/20">
                  {localize("AMR Otonom", "Autonomous AMR")}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-primary">{localize("Endüstriyel & Lojistik Robotlar", "Industrial & Logistics Robots")}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {localize("AMR (Autonomous Mobile Robots) platformlarımız: Fabrika iç lojistiğinde, depolarda ve ağır sanayi tesislerinde malzeme ve ham madde nakliyesini insan müdahalesine gerek duymadan gerçekleştiren otonom filolar.", "Our autonomous mobile robot (AMR) platforms support material and raw-material transport in factories, warehouses, and heavy-industry facilities without constant human intervention.")}
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
              {localize("KRONOLOJİ", "TIMELINE")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary">
              {localize("NCT Robotik", "NCT Robotik")} <span className="text-brand-accent">{localize("Yolculuğu", "Journey")}</span>
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
              {localize("2018'den günümüze uzanan inovasyon kilometretaşı.", "Key milestones in innovation since 2018.")}
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
                    2018
                  </span>
                  <div className="w-4 h-4 rounded-full bg-[#F47A20] border-4 border-white ring-2 ring-[#F47A20]/20 mt-1 md:mt-4 transition-transform group-hover:scale-125 duration-200" />
                </div>
                
                <div className="space-y-2 max-w-xs md:max-w-none">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 md:hidden block">
                    2018
                  </span>
                  <h3 className="text-base font-bold text-brand-primary">{localize("Kuruluş", "Founding")}</h3>
                  <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                    {localize("NCT Robotik, Pamukkale Üniversitesi Teknokent’te kuruldu. Aynı yıl Prof. Dr. İsmail Ovalı tarafından çocuklara yönelik NCT Mucit Atölyesi hayata geçirildi.", "NCT Robotik was founded at Pamukkale University Technopark. In the same year, Prof. Dr. İsmail Ovalı established NCT Inventors’ Workshop for children.")}
                  </p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-4 group">
                <div className="absolute left-[7.5px] top-6 bottom-[-48px] w-[1px] bg-slate-800 md:hidden z-0" />

                <div className="flex flex-col items-center shrink-0 z-10">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 hidden md:block">
                    2019
                  </span>
                  <div className="w-4 h-4 rounded-full bg-[#F47A20] border-4 border-white ring-2 ring-[#F47A20]/20 mt-1 md:mt-4 transition-transform group-hover:scale-125 duration-200" />
                </div>
                
                <div className="space-y-2 max-w-xs md:max-w-none">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 md:hidden block">
                    2019
                  </span>
                  <h3 className="text-base font-bold text-brand-primary">{localize("İlk Ar-Ge Projeleri", "First R&D Projects")}</h3>
                  <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                    {localize("Robotik, yapay zekâ ve gömülü sistemler alanındaki ilk Ar-Ge projeleri geliştirildi.", "The first R&D projects in robotics, artificial intelligence, and embedded systems were developed.")}
                  </p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-4 group">
                <div className="absolute left-[7.5px] top-6 bottom-[-48px] w-[1px] bg-slate-800 md:hidden z-0" />

                <div className="flex flex-col items-center shrink-0 z-10">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 hidden md:block">
                    2022
                  </span>
                  <div className="w-4 h-4 rounded-full bg-[#F47A20] border-4 border-white ring-2 ring-[#F47A20]/20 mt-1 md:mt-4 transition-transform group-hover:scale-125 duration-200" />
                </div>
                
                <div className="space-y-2 max-w-xs md:max-w-none">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 md:hidden block">
                    2022
                  </span>
                  <h3 className="text-base font-bold text-brand-primary">{localize("Endüstriyel Robotik Çözümler", "Industrial Robotics Solutions")}</h3>
                  <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                    {localize("Otonom mobil robotlar, hizmet robotları ve endüstriyel otomasyon çözümleri geliştirilmeye başlandı.", "Development began on autonomous mobile robots, service robots, and industrial automation solutions.")}
                  </p>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-4 group">
                <div className="flex flex-col items-center shrink-0 z-10">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 hidden md:block">
                    2024
                  </span>
                  <div className="w-4 h-4 rounded-full bg-[#F47A20] border-4 border-white ring-2 ring-[#F47A20]/20 mt-1 md:mt-4 transition-transform group-hover:scale-125 duration-200" />
                </div>
                
                <div className="space-y-2 max-w-xs md:max-w-none">
                  <span className="text-lg font-mono font-bold text-brand-primary transition-colors group-hover:text-brand-accent duration-200 md:hidden block">
                    2024
                  </span>
                  <h3 className="text-base font-bold text-brand-primary">{localize("Orbit Ürün Ailesi", "Orbit Product Family")}</h3>
                  <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                    {localize("Eğitim, hizmet ve yapay zekâ destekli robotik çözümleri kapsayan Orbit ürün ailesi oluşturuldu.", "The Orbit product family was established, bringing together educational, service, and AI-powered robotic solutions.")}
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
              {localize("Misyonumuz & Vizyonumuz", "Our Mission & Vision")}
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
              {localize("Geleceği güvenilir teknolojilerle inşa ederken bağlı kaldığımız temel pusulamız.", "The guiding principles behind our commitment to building the future with dependable technology.")}
            </p>
          </div>

          {/* Two Balanced Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column: Misyonumuz */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-brand-accent shrink-0" />
                <h3 className="text-xl font-bold text-brand-primary tracking-tight">{localize("Misyonumuz", "Our Mission")}</h3>
              </div>
              
              {/* Thin Divider Line */}
              <div className="h-[1px] bg-brand-primary/10 w-full" />
              
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
                {localize("İnsan hayatını kolaylaştıran, eğitimi eğlenceli, etkileşimli ve güvenli kılan, milli mühendislik gücüyle geliştirilmiş yenilikçi, güvenilir ve ulaşılabilir robotik teknolojiler üretmek.", "To develop innovative, reliable, and accessible robotics technologies through domestic engineering, making everyday life easier and education more engaging, interactive, and safe.")}
              </p>
            </div>

            {/* Right Column: Vizyonumuz */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-accent shrink-0" />
                <h3 className="text-xl font-bold text-brand-primary tracking-tight">{localize("Vizyonumuz", "Our Vision")}</h3>
              </div>
              
              {/* Thin Divider Line */}
              <div className="h-[1px] bg-brand-primary/10 w-full" />
              
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
                {localize("Türkiye’den doğarak dünya çapında standartları belirleyen, güvenilir yapay zeka, eğitim robotiği ve otonom hizmet sistemlerinde küresel ölçekte öncü bir teknoloji markası olmak.", "To become a globally leading technology brand originating in Türkiye, helping set worldwide standards in trustworthy AI, educational robotics, and autonomous service systems.")}
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
              {localize("İLETİŞİM", "CONTACT")}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight">
              {localize("NCT Robotik ile İletişime Geçin", "Get in Touch with NCT Robotik")}
            </h2>

            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              {localize("Robotik çözümlerimiz, ürünlerimiz ve kurumsal iş birlikleri hakkında bilgi almak için bizimle iletişime geçebilirsiniz.", "Contact us to learn more about our robotics solutions, products, and institutional partnerships.")}
            </p>

            <div className="flex items-center gap-6 pt-2">
              <button
                onClick={onOpenContact}
                className="group flex items-center gap-2 h-11 px-6 bg-brand-accent hover:bg-[#D35A00] text-white font-semibold text-sm rounded-[12px] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
              >
                <span>{localize("İletişime Geç", "Contact Us")}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onNavigateProducts}
                className="group flex items-center gap-1 text-brand-accent hover:text-[#E66F16] text-sm font-semibold transition-colors cursor-pointer border-b border-transparent hover:border-[#F47A20]"
              >
                <span>{localize("Ürünlerimizi İncele", "Explore Our Products")}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
