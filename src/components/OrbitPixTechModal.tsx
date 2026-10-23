import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  X, 
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Shield, 
  Flame, 
  EyeOff, 
  Lock, 
  Compass, 
  Wrench, 
  Cpu, 
  Award, 
  CheckCircle2, 
  MessageSquare, 
  Mic, 
  Volume2, 
  Brain, 
  Info, 
  Activity, 
  Binary, 
  Check, 
  Monitor, 
  Eye, 
  Sparkles, 
  Fingerprint, 
  Heart, 
  Settings, 
  Factory, 
  PenTool, 
  Layers, 
  Blocks, 
  VolumeX, 
  Moon, 
  Zap, 
  Waves, 
  Sliders, 
  RefreshCw, 
  CloudLightning, 
  Cloud, 
  BookOpen, 
  LineChart, 
  Wifi,
  Battery,
  Clock,
  Smartphone
} from 'lucide-react';

interface OrbitPixTechModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote?: () => void;
}

interface InfoCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
}

interface TabContent {
  id: number;
  menuLabel: string;
  icon: React.ReactNode;
  headerIcon: React.ReactNode;
  title: string;
  subtitle: string;
  intro: string;
  heroImage: string;
  heroBadge: string;
  infoGrid: InfoCard[];
  processTitle: string;
  processSteps: ProcessStep[];
  bottomHighlight: {
    icon: React.ReactNode;
    message: string;
  };
}

export const OrbitPixTechModal: React.FC<OrbitPixTechModalProps> = ({
  isOpen,
  onClose,
  onOpenQuote,
}) => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.resolvedLanguage?.startsWith('en') || i18n.language.startsWith('en');
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Scroll to top of dynamic column when tab changes
  useEffect(() => {
    if (rightColumnRef.current) {
      rightColumnRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  // Handle overlay click to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const tabData: TabContent[] = [
    {
      id: 0,
      menuLabel: (isEnglish ? "Child Safety Comes First" : "Çocuk Güvenliği Önceliğimiz"),
      icon: <Shield className="w-4 h-4" />,
      headerIcon: <Shield className="w-8 h-8 text-[#8CAC1D]" />,
      title: (isEnglish ? "Child Safety Comes First" : "Çocuk Güvenliği Önceliğimiz"),
      subtitle: (isEnglish ? "Physical and Digital Safety Standards" : "Fiziksel ve Dijital Güvenlik Standartları"),
      intro:
        (isEnglish ? "Orbit Pix is designed to help children interact safely in both physical and digital environments, with safety at the heart of its design." : "Orbit Pix, çocukların hem fiziksel hem de dijital dünyada güvenle etkileşim kurması için en yüksek endüstri standartlarında tasarlanmıştır."),
      heroImage: "/pix-cocuk-guvenlik.png",
      heroBadge: (isEnglish ? "SAFE AND BALANCED DESIGN" : "GÜVENLİ VE DENGELİ TASARIM"),
      infoGrid: [
        {
          icon: <Shield className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Rounded Edges" : "Yuvarlatılmış Kenarlar"),
          description:
            (isEnglish ? "The smooth outer shell has no sharp corners and is designed to reduce the risk of injury from accidental bumps." : "Keskin köşe barındırmayan yumuşak dış gövde yapısı, fiziksel çarpmalarda oluşabilecek yaralanmaları tamamen önler."),
        },
        {
          icon: <Flame className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Non-Toxic Materials" : "Toksik Olmayan Malzeme"),
          description:
            (isEnglish ? "BPA-free, food-grade plastic components and environmentally friendly paints are used with child safety in mind." : "Çocuk sağlığına %100 uyumlu, gıda sınıfı (BPA-free) plastik bileşenler ve çevre dostu boyalar kullanılmıştır."),
        },
        {
          icon: <Mic className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Voice-First Interaction" : "Ses Odaklı Etkileşim"),
          description:
            (isEnglish ? "Orbit Pix is designed around voice communication rather than a camera, offering a natural and secure interaction experience." : "Orbit Pix, görüntü yerine sesli iletişim üzerine tasarlanmıştır. Böylece öğrenciyle doğal ve güvenli bir etkileşim sunar."),
        },
        {
          icon: <Lock className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "KVKK-Compliant Cloud" : "KVKK Uyumlu Bulut"),
          description:
            (isEnglish ? "Personal data is securely stored on our encrypted servers located in Türkiye." : "Kişisel veriler, yurt içinde yerleşik uçtan uca şifrelenmiş sunucularımızda güvenle saklanır."),
        },
      ],
      processTitle: (isEnglish ? "SAFETY AND COMPLIANCE TESTING" : "GÜVENLİK VE UYGUNLUK TESTLERİ"),
      processSteps: [
        { icon: <Compass className="w-4 h-4" />, title: (isEnglish ? "Design Analysis" : "Tasarım Analizi") },
        { icon: <Wrench className="w-4 h-4" />, title: (isEnglish ? "Drop & Impact Testing" : "Düşme & Darbe Testi") },
        { icon: <Cpu className="w-4 h-4" />, title: (isEnglish ? "Data Encryption Testing" : "Veri Şifreleme Testi") },
        { icon: <Award className="w-4 h-4" />, title: (isEnglish ? "Certification" : "Sertifikasyon") },
      ],
      bottomHighlight: {
        icon: <CheckCircle2 className="w-5 h-5 text-[#84A81D]" />,
        message:
          (isEnglish ? "Orbit Pix is developed with a simple, intuitive, and user-friendly design that takes children’s everyday habits into account." : "Orbit Pix, çocukların günlük kullanım alışkanlıkları göz önünde bulundurularak sade, anlaşılır ve kullanıcı dostu bir tasarım anlayışıyla geliştirilmiştir."),
      },
    },
    {
      id: 1,
      menuLabel: (isEnglish ? "Natural Communication Experience" : "Doğal İletişim Deneyimi"),
      icon: <MessageSquare className="w-4 h-4" />,
      headerIcon: <MessageSquare className="w-8 h-8 text-[#8CAC1D]" />,
      title: (isEnglish ? "Natural Communication Experience" : "Doğal İletişim Deneyimi"),
      subtitle: (isEnglish ? "AI-Powered Turkish Voice Interaction" : "Yapay Zeka Destekli Türkçe Ses Ağı"),
      intro:
        (isEnglish ? "Children can speak with Orbit Pix naturally and fluently in Turkish, much like talking with a friend." : "Çocuklar Orbit Pix ile konuşurken sanki bir arkadaşıyla konuşuyormuş gibi doğal, akıcı ve Türkçe dil yapısına tamamen uygun etkileşime girerler."),
      heroImage: "/pix-iletisim3.png",
      heroBadge: (isEnglish ? "TURKISH VOICE INTERACTION" : "TÜRKÇE SES ETKİLEŞİMİ"),
      infoGrid: [
        {
          icon: <Mic className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Intelligent Voice Focus" : "Akıllı Ses Odaklama"),
          description:
            (isEnglish ? "The advanced microphone array filters classroom and household noise to better capture the child’s voice." : "Gelişmiş mikrofon dizisi, sınıf veya ev içi gürültüleri filtreleyerek sadece çocuğun sesini net şekilde algılar."),
        },
        {
          icon: <Volume2 className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Child-Friendly Voice Tone" : "Pedagojik Ses Tonu"),
          description:
            (isEnglish ? "A warm, natural-sounding voice designed to make words easy for children to hear and understand." : "Çocukların kelimeleri net ve doğru tonlamayla duyabilmesi için özel olarak eğitilmiş, sıcak ve yapaylıktan uzak ses."),
        },
        {
          icon: <Brain className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Semantic Language Analysis" : "Semantik Kelime Analizi"),
          description:
            (isEnglish ? "The language model interprets incomplete or unconventional sentences and generates meaningful responses." : "Robotik dil modeli, çocukların kurduğu yarım veya devrik cümleleri analiz ederek mantıklı cevaplar üretir."),
        },
        {
          icon: <Info className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Harmful Content Filter" : "Zararlı İçerik Filtresi"),
          description:
            (isEnglish ? "Incoming and outgoing speech content passes through safeguards designed to keep interactions age-appropriate." : "Gelen ve giden tüm ses dalgaları, pedagojik güvenlik duvarımızdan geçerek çocuk yaş grubuna uygun hale getirilir."),
        },
      ],
      processTitle: (isEnglish ? "VOICE INTERACTION STAGES" : "SES ETKİLEŞİM AŞAMALARI"),
      processSteps: [
        { icon: <Activity className="w-4 h-4" />, title: (isEnglish ? "Noise Filtering" : "Gürültü Filtreleme") },
        { icon: <Binary className="w-4 h-4" />, title: (isEnglish ? "Speech Understanding" : "Konuşmayı Anlama") },
        { icon: <Lock className="w-4 h-4" />, title: (isEnglish ? "Educational Safety Filter" : "Pedagojik Filtre") },
        { icon: <Check className="w-4 h-4" />, title: (isEnglish ? "Natural Speech Synthesis" : "Doğal Ses Sentezi") },
      ],
      bottomHighlight: {
        icon: <Sparkles className="w-5 h-5 text-[#84A81D]" />,
        message:
          (isEnglish ? "The AI voice system is optimized for clear, well-paced speech to support children’s language development." : "Yapay zeka ses motoru, çocukların dil gelişimini desteklemek amacıyla tane tane konuşacak şekilde optimize edilmiştir."),
      },
    },
    {
      id: 2,
      menuLabel: (isEnglish ? "Student Orbit Mobile App" : "Student Orbit Mobil Uygulaması"),
      icon: <Smartphone className="w-4 h-4" />,
      headerIcon: <Smartphone className="w-8 h-8 text-[#8CAC1D]" />,
      title: (isEnglish ? "Student Orbit Mobile App" : "Student Orbit Mobil Uygulaması"),
      subtitle: (isEnglish ? "Mobile Management and Progress Tracking" : "Mobil Yönetim ve Gelişim Takibi"),
      intro: (isEnglish ? "With the Student Orbit mobile app, parents can conveniently monitor their child’s progress and manage the Orbit Pix experience in one place." : "Student Orbit mobil uygulaması sayesinde veliler, öğrencilerinin gelişimini tek bir uygulama üzerinden kolayca takip edebilir ve Orbit Pix deneyimini diledikleri zaman yönetebilir."),
      heroImage: "/pix-veli.png",
      heroBadge: (isEnglish ? "PARENT MOBILE APP" : "VELİ MOBİL UYGULAMASI"),
      infoGrid: [
        {
          icon: <Smartphone className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "All-in-One Management" : "Tek Uygulamadan Yönetim"),
          description: (isEnglish ? "Basic Orbit Pix settings and the user experience can be managed easily through the mobile app." : "Orbit Pix ile ilgili temel ayarlar ve kullanım deneyimi mobil uygulama üzerinden kolayca yönetilebilir.")
        },
        {
          icon: <LineChart className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Progress Tracking" : "Gelişim Takibi"),
          description: (isEnglish ? "Parents can monitor their child’s usage patterns and progress through the app." : "Öğrencinin kullanım alışkanlıkları ve gelişimi uygulama üzerinden takip edilebilir.")
        },
        {
          icon: <BookOpen className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Content Management" : "İçerik Yönetimi"),
          description: (isEnglish ? "The student’s grade level and content preferences can be updated in the app as needed." : "Öğrencinin sınıf seviyesi ve içerikleri gerektiğinde uygulama üzerinden güncellenebilir.")
        },
        {
          icon: <Heart className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Parental Controls" : "Veli Kontrolü"),
          description: (isEnglish ? "Parents can conveniently manage their child’s Orbit Pix experience in one app." : "Veliler, öğrencilerinin Orbit Pix deneyimini tek bir uygulama üzerinden kolayca yönetebilir.")
        }
      ],
      processTitle: (isEnglish ? "MOBILE APP SETUP STAGES" : "MOBİL UYGULAMA ETKİLEŞİM AŞAMALARI"),
      processSteps: [
        { icon: <Smartphone className="w-4 h-4" />, title: (isEnglish ? "Pair the Robot" : "Robotu Eşleştir") },
        { icon: <Wifi className="w-4 h-4" />, title: (isEnglish ? "Connect to the App" : "Uygulamaya Bağlan") },
        { icon: <LineChart className="w-4 h-4" />, title: (isEnglish ? "Track Progress" : "Gelişimi Takip Et") },
        { icon: <Settings className="w-4 h-4" />, title: (isEnglish ? "Manage Content" : "İçeriği Yönet") }
      ],
      bottomHighlight: {
        icon: <Smartphone className="w-5 h-5 text-[#84A81D]" />,
        message: (isEnglish ? "The Student Orbit mobile app allows parents to monitor and manage Orbit Pix usage from one place." : "Student Orbit mobil uygulaması sayesinde veliler, Orbit Pix kullanımını tek bir uygulama üzerinden takip edebilir ve yönetebilir.")
      }
    },
    {
      id: 3,
      menuLabel: (isEnglish ? "Engineering Expertise from Türkiye" : "Yerli Mühendislik Gücü"),
      icon: <Cpu className="w-4 h-4" />,
      headerIcon: <Cpu className="w-8 h-8 text-[#8CAC1D]" />,
      title: (isEnglish ? "Engineering Expertise from Türkiye" : "Yerli Mühendislik Gücü"),
      subtitle: (isEnglish ? "R&D and Engineering Capabilities" : "Ar-Ge ve Mühendislik Altyapısı"),
      intro:
        (isEnglish ? "Orbit Pix was designed in Türkiye by NCT Robotik engineers, who also carried out its research and development." : "Orbit Pix, tamamen NCT Robotik mühendisleri tarafından Türkiye'de tasarlanmış ve Ar-Ge süreçleri yürütülmüştür."),
      heroImage: "/yerli-muhendislik.png",
      heroBadge: (isEnglish ? "DESIGN AND ENGINEERING" : "TASARIM VE MÜHENDİSLİK ALTYAPISI"),
      infoGrid: [
        {
          icon: <Cpu className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Custom-Designed Mainboard" : "Özel Tasarım Anakart"),
          description:
            (isEnglish ? "A custom PCB designed at our R&D center to manage power and sensor-reading cycles." : "Robotun enerji yönetimi ve sensor okuma döngüleri için Ar-Ge merkezimizde tasarlanan yerli PCB devre kartı."),
        },
        {
          icon: <Settings className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Embedded Communication" : "Gömülü Haberleşme"),
          description:
            (isEnglish ? "Stable embedded software enables rapid communication between sensors and motor drivers." : "Sensörler ve motor sürücüler arasında mikrosaniyeler mertebesinde haberleşme sağlayan kararlı gömülü yazılım."),
        },
        {
          icon: <Wrench className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Modular Service Design" : "Modüler Servis Yapısı"),
          description:
            (isEnglish ? "A modular internal chassis designed to make hardware servicing quick and straightforward." : "Herhangi bir donanım arızasında dakikalar içinde müdahale edilmesini sağlayan modüler iç şasi tasarımı."),
        },
        {
          icon: <Factory className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Experienced Manufacturing Partner" : "Deneyimli Üretim Partneri"),
          description:
            (isEnglish ? "Our manufacturing processes are carried out in partnership with POLO Otomasyon, drawing on its extensive industrial automation experience." : "Üretim süreçlerimiz, endüstriyel otomasyon alanındaki uzun yıllara dayanan deneyimiyle POLO Otomasyon iş birliğiyle yürütülmektedir."),
        },
      ],
      processTitle: (isEnglish ? "DESIGN AND DEVELOPMENT STAGES" : "TASARIM VE GELİŞTİRME AŞAMALARI"),
      processSteps: [
        { icon: <PenTool className="w-4 h-4" />, title: "3D CAD Modelleme" },
        { icon: <Cpu className="w-4 h-4" />, title: (isEnglish ? "Circuit Board Simulation" : "Kart Simülasyonu") },
        { icon: <Layers className="w-4 h-4" />, title: (isEnglish ? "Industrial Design" : "Endüstriyel Tasarım") },
        { icon: <Blocks className="w-4 h-4" />, title: (isEnglish ? "Partner Collaboration" : "Partner İş Birliği") },
      ],
      bottomHighlight: {
        icon: <Award className="w-5 h-5 text-[#84A81D]" />,
        message:
          (isEnglish ? "Orbit Pix is engineered by NCT Robotik, with manufacturing supported by our experienced industrial automation partner, POLO Otomasyon." : "Orbit Pix, NCT Robotik mühendisliğiyle tasarlanmakta; üretim süreçleri ise endüstriyel otomasyon alanında deneyimli üretim partnerimiz POLO Otomasyon ile gerçekleştirilmektedir."),
      },
    },
    {
      id: 4,
      menuLabel: (isEnglish ? "Long Battery Life" : "Uzun Pil Ömrü"),
      icon: <Battery className="w-4 h-4" />,
      headerIcon: <Battery className="w-8 h-8 text-[#8CAC1D]" />,
      title: (isEnglish ? "Long Battery Life" : "Uzun Pil Ömrü"),
      subtitle: (isEnglish ? "Battery and Charging Performance" : "Pil ve Şarj Performansı"),
      intro: (isEnglish ? "Orbit Pix offers up to 5.5 hours of use on a single charge. With an approximately one-hour charging time, it is quickly ready to use again." : "Orbit Pix, tek şarjla 5,5 saate kadar kullanım sunar. Yaklaşık 1 saatlik şarj süresi sayesinde kısa sürede yeniden kullanıma hazır hale gelir."),
      heroImage: "/pix-pil-omru.png",
      heroBadge: (isEnglish ? "BATTERY AND CHARGING PERFORMANCE" : "PİL VE ŞARJ PERFORMANSI"),
      infoGrid: [
        {
          icon: <Battery className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Up to 5.5 Hours of Use" : "5,5 Saate Kadar Kullanım"),
          description: (isEnglish ? "Provides up to 5.5 hours of use per charge for daily learning and interaction." : "Tek şarjla 5,5 saate kadar kullanım süresi sunarak gün içerisindeki çalışma ve etkileşim deneyimini destekler.")
        },
        {
          icon: <Zap className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Charges in About 1 Hour" : "Yaklaşık 1 Saatte Şarj"),
          description: (isEnglish ? "Ready for use again after approximately one hour of charging." : "Yaklaşık 1 saatlik şarj süresinin ardından yeniden kullanıma hazır hale gelir.")
        },
        {
          icon: <Heart className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Designed for Everyday Use" : "Günlük Kullanıma Uygun"),
          description: (isEnglish ? "Battery performance is designed to support everyday use at home and in learning environments." : "Pil performansı, evde ve çalışma ortamlarında günlük kullanım ihtiyaçlarını destekleyecek şekilde planlanmıştır.")
        },
        {
          icon: <Activity className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Quick Charging, Extended Use" : "Kısa Şarj, Uzun Kullanım"),
          description: (isEnglish ? "Balances a short charging time with extended use." : "Kısa şarj süresi ile uzun kullanım süresi arasında dengeli bir deneyim sunar.")
        }
      ],
      processTitle: (isEnglish ? "BATTERY CHARGING CYCLE" : "PİL ŞARJ DÖNGÜSÜ SÜRECİ"),
      processSteps: [
        { icon: <Zap className="w-4 h-4" />, title: (isEnglish ? "Connect to Charger" : "Şarja Bağlama") },
        { icon: <Clock className="w-4 h-4" />, title: (isEnglish ? "Approximately 1 Hour of Charging" : "Yaklaşık 1 Saatlik Şarj") },
        { icon: <Battery className="w-4 h-4" />, title: (isEnglish ? "Up to 5.5 Hours of Use" : "5,5 Saate Kadar Kullanım") },
        { icon: <RefreshCw className="w-4 h-4" />, title: (isEnglish ? "Recharge" : "Yeniden Şarj") }
      ],
      bottomHighlight: {
        icon: <Battery className="w-5 h-5 text-[#84A81D]" />,
        message: (isEnglish ? "With approximately one hour of charging and up to 5.5 hours of use, Orbit Pix supports learning and interaction throughout the day." : "Orbit Pix, yaklaşık 1 saatlik şarj süresiyle 5,5 saate kadar kullanım sunarak gün içerisindeki öğrenme ve etkileşim deneyimini kesintisiz şekilde destekler.")
      }
    },
    {
      id: 5,
      menuLabel: (isEnglish ? "Continuously Updated Software" : "Sürekli Güncellenen Yazılım"),
      icon: <RefreshCw className="w-4 h-4" />,
      headerIcon: <RefreshCw className="w-8 h-8 text-[#8CAC1D]" />,
      title: (isEnglish ? "Continuously Updated Software" : "Sürekli Güncellenen Yazılım"),
      subtitle: (isEnglish ? "Wireless Updates and Cloud Infrastructure" : "Kablosuz Güncelleme ve Bulut Altyapısı"),
      intro:
        (isEnglish ? "The NCT Robotik software team continuously improves Orbit Pix. Two years of software updates are included with purchase, with supported content and features delivered wirelessly at no extra cost during that period." : "NCT Robotik yazılım ekibi, Orbit Pix'i sürekli geliştirir. Satın alıma 2 yıllık yazılım ve güncelleme hizmeti dahil olup yeni materyaller ve özellikler kablosuz ağ üzerinden ek ücret ödemeden robota yüklenir."),
      heroImage: "/pix-yazilim-guncelleme.png",
      heroBadge: (isEnglish ? "WIRELESS OTA UPDATES" : "KABLOSUZ OTA GÜNCELLEMELERİ"),
      infoGrid: [
        {
          icon: <Cloud className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "2 Years of Updates Included" : "2 Yıl Güncelleme Dahil"),
          description:
            (isEnglish ? "Supported operating-system and AI updates are included in the product price for the first two years." : "İlk 2 yıl boyunca desteklenen tüm işletim sistemi ve yapay zekâ güncellemeleri ürün fiyatına dahildir."),
        },
        {
          icon: <BookOpen className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Curriculum-Aligned Content" : "Okul Müfredatına Uygun İçerikler"),
          description:
            (isEnglish ? "New curriculum-aligned lessons and educational materials are regularly added to Orbit Pix through software updates." : "Orbit Pix'e okul müfredatına uygun yeni içerikler ve eğitim materyalleri yazılım güncellemeleriyle düzenli olarak eklenir."),
        },
        {
          icon: <LineChart className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Parent Mobile App" : "Veli Mobil Uygulaması"),
          description:
            (isEnglish ? "The parent mobile app makes it easy to manage student usage and Orbit Pix settings." : "Öğrencinin kullanım süreci ve Orbit Pix ayarları, veli mobil uygulaması üzerinden kolayca yönetilebilir."),
        },
        {
          icon: <CloudLightning className="w-5 h-5 text-[#84A81D]" />,
          title: (isEnglish ? "Cloud Security Patches" : "Bulut Güvenlik Yamaları"),
          description:
            (isEnglish ? "Security patches are installed quietly in the background to help protect the system against software vulnerabilities." : "Yazılımsal güvenlik açıklarına karşı arka planda sessizce yüklenen ve sistemi koruyan yamalar."),
        },
      ],
      processTitle: (isEnglish ? "SOFTWARE RELEASE CYCLE" : "YAZILIM DAĞITIM DÖNGÜSÜ"),
      processSteps: [
        {
          icon: <CloudLightning className="w-4 h-4" />,
          title: (isEnglish ? "Feature Development" : "Özellik Geliştirme"),
        },
        { icon: <Lock className="w-4 h-4" />, title: (isEnglish ? "Security Testing" : "Güvenlik Testi") },
        { icon: <Wifi className="w-4 h-4" />, title: (isEnglish ? "Cloud Deployment" : "Buluta Dağıtım") },
        { icon: <RefreshCw className="w-4 h-4" />, title: (isEnglish ? "Automatic Installation" : "Otomatik Yükleme") },
      ],
      bottomHighlight: {
        icon: <Zap className="w-5 h-5 text-[#84A81D]" />,
        message:
          (isEnglish ? "Orbit Pix receives supported updates at no additional cost for two years. Afterward, it continues to work with its existing features without requiring a subscription." : "Orbit Pix, 2 yıl boyunca desteklenen tüm güncellemeleri ek ücret ödemeden alır. 2 yılın ardından abonelik zorunlu olmadan mevcut tüm özellikleriyle çalışmaya devam eder."),
      },
    },
  ];

  const currentTab = tabData[activeTab];

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 sm:p-8 bg-brand-primary/80 backdrop-blur-md overlay-fade-in"
      id="orbit-pix-tech-modal"
    >
      {/* Custom Stylesheet for Premium Micro-Animations and Minimal Scrollbars */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E5E7EB;
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D1D5DB;
        }

        .overlay-fade-in {
          animation: overlayFadeIn 180ms ease-out forwards;
        }
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-scale-up {
          animation: modalScaleUp 240ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes modalScaleUp {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .tab-content-anim {
          animation: tabContentIn 280ms cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
        }
        @keyframes tabContentIn {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Modal Container: Optimized for floating, premium portrait-oriented presentation (taller than it is wide) */}
      <div
        className="relative w-full md:w-[84vw] h-full md:h-[91vh] max-w-full md:max-w-[1240px] max-h-none md:max-h-[860px] bg-white rounded-none md:rounded-[24px] shadow-2xl overflow-y-auto md:overflow-hidden text-brand-primary flex flex-col border-0 md:border border-brand-neutral/40 transition-all duration-300 modal-scale-up"
      >
        {/* Floating Close Button - Top Right, Circular, Soft Shadow */}
        <button
          onClick={onClose}
          aria-label={isEnglish ? "Close" : "Kapat"}
          className="absolute top-6 right-6 z-30 w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-[#6B7280] hover:text-[#111827] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md border border-slate-100 hover:scale-105 active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Main Content Area - Split Columns */}
        <div className="flex-grow flex flex-col md:flex-row md:overflow-hidden min-h-0">
          
          {/* LEFT COLUMN (35% on desktop - Product Area Showcase with Warm White BG and connector lines) */}
          <div className="md:w-[35%] w-full bg-[#FAFAF9] border-b md:border-b-0 md:border-r border-brand-neutral/30 p-6 lg:p-8 flex flex-col justify-between shrink-0 select-none md:overflow-hidden relative">
            <div className="flex flex-col justify-between md:h-full h-auto space-y-6 relative">
              
              {/* Product Label and Title */}
              <div className="space-y-4 z-10">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF] block">
                    NCT ROBOTİK
                  </span>
                  <h4 className="text-lg lg:text-xl font-bold text-[#111827] tracking-tight leading-none">
                    Orbit Pix
                  </h4>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-extrabold text-[#111827] tracking-tight leading-tight pt-1">
                  {isEnglish ? "Hardware Architecture" : "Donanım Mimarisi"}
                </h3>
              </div>

              {/* Centerpiece Image area with SVG Connector lines and hotspot description cards */}
              <div className="relative flex-grow flex items-center justify-center overflow-hidden min-h-[350px]">
                
                {/* SVG Vector Connector Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Top Left -> Audio interaction */}
                  <line x1="26" y1="20" x2="48" y2="29" stroke="#84A81D" strokeWidth="0.4" strokeDasharray="1.5" />
                  <circle cx="48" cy="29" r="0.8" fill="#84A81D" />
                  
                  {/* Top Right -> Screen */}
                  <line x1="74" y1="26" x2="52" y2="36" stroke="#84A81D" strokeWidth="0.4" strokeDasharray="1.5" />
                  <circle cx="52" cy="36" r="0.8" fill="#84A81D" />
                  
                  {/* Bottom Left -> Speaker */}
                  <line x1="26" y1="78" x2="48" y2="52" stroke="#84A81D" strokeWidth="0.4" strokeDasharray="1.5" />
                  <circle cx="48" cy="52" r="0.8" fill="#84A81D" />
                  
                  {/* Bottom Right -> Desktop Base */}
                  <line x1="74" y1="84" x2="52" y2="76" stroke="#84A81D" strokeWidth="0.4" strokeDasharray="1.5" />
                  <circle cx="52" cy="76" r="0.8" fill="#84A81D" />
                </svg>

                {/* Hotspot Card 1 (Top Left) */}
                <div className="absolute top-[12%] left-[2%] w-[100px] sm:w-[120px] bg-white p-2.5 rounded-[12px] border border-brand-neutral/30 shadow-xs text-left z-20 hover:scale-105 transition-transform duration-200">
                  <h6 className="font-bold text-[10px] sm:text-[11px] text-[#111827] leading-tight">{isEnglish ? "Voice Communication" : "Sesli İletişim"}</h6>
                  <p className="text-[9px] text-[#6B7280] leading-none mt-0.5">{isEnglish ? "Natural and Secure" : "Doğal ve güvenli"}</p>
                </div>

                {/* Hotspot Card 2 (Top Right) */}
                <div className="absolute top-[18%] right-[2%] w-[100px] sm:w-[120px] bg-white p-2.5 rounded-[12px] border border-brand-neutral/30 shadow-xs text-left z-20 hover:scale-105 transition-transform duration-200">
                  <h6 className="font-bold text-[10px] sm:text-[11px] text-[#111827] leading-tight">{isEnglish ? "Touchscreen" : "Dokunmatik Ekran"}</h6>
                  <p className="text-[9px] text-[#6B7280] leading-none mt-0.5">{isEnglish ? "Simple and Intuitive" : "Sade ve anlaşılır"}</p>
                </div>

                {/* Hotspot Card 3 (Bottom Left) */}
                <div className="absolute bottom-[22%] left-[2%] w-[100px] sm:w-[120px] bg-white p-2.5 rounded-[12px] border border-brand-neutral/30 shadow-xs text-left z-20 hover:scale-105 transition-transform duration-200">
                  <h6 className="font-bold text-[10px] sm:text-[11px] text-[#111827] leading-tight">{isEnglish ? "Voice-First Interface" : "Ses Odaklı Arayüz"}</h6>
                  <p className="text-[9px] text-[#6B7280] leading-none mt-0.5">{isEnglish ? "Secure, Camera-Free Interaction" : "Görüntüsüz güvenli ağ"}</p>
                </div>

                {/* Hotspot Card 4 (Bottom Right) */}
                <div className="absolute bottom-[16%] right-[2%] w-[100px] sm:w-[120px] bg-white p-2.5 rounded-[12px] border border-brand-neutral/30 shadow-xs text-left z-20 hover:scale-105 transition-transform duration-200">
                  <h6 className="font-bold text-[10px] sm:text-[11px] text-[#111827] leading-tight">{isEnglish ? "Desktop Design" : "Masaüstü Tasarım"}</h6>
                  <p className="text-[9px] text-[#6B7280] leading-none mt-0.5">{isEnglish ? "Fits into Any Space" : "Bulunduğu ortama uyumlu"}</p>
                </div>

                {/* Orbit Pix Centerpiece Image (visually dominant, centered, uncropped) */}
                <img
                  src="/donanim-foto.png"
                  alt="Orbit Pix Donanım Görünümü"
                  referrerPolicy="no-referrer"
                  className="max-h-[85%] max-w-[85%] object-contain drop-shadow-md z-0"
                />
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN (65% on desktop - Scrollable Content Area with Custom thin Scrollbar) */}
          <div 
            ref={rightColumnRef}
            className="md:w-[65%] w-full bg-[#FAFAF9] p-6 lg:p-8 md:overflow-y-auto overflow-y-visible custom-scrollbar flex flex-col justify-between scroll-smooth"
          >
            {/* Dynamic key-based container to trigger gentle fade+slide transition on active tab change */}
            <div 
              key={activeTab}
              className="tab-content-anim space-y-6"
            >
              {/* Large Rounded White Information Card */}
              <div className="bg-white rounded-[24px] shadow-sm border border-brand-neutral/20 p-8 space-y-6 text-left">
                
                {/* Header Information */}
                <div className="space-y-3">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#84A81D] block">
                    {currentTab.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                    {currentTab.title}
                  </h2>
                  <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
                    {currentTab.intro}
                  </p>
                </div>

                {/* Large Feature Image (16:11 aspect ratio for premium immersive rendering) */}
                <div className="relative aspect-[16/11] w-full rounded-[20px] overflow-hidden border border-brand-neutral/20 shadow-xs">
                  <img
                    src={currentTab.heroImage}
                    alt={currentTab.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                  />
                  {/* Visual Label overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#111827] font-mono text-[9px] sm:text-[10px] font-extrabold px-3 py-1.5 rounded-[8px] border border-slate-100/50 shadow-sm uppercase tracking-wider">
                    {currentTab.heroBadge}
                  </div>
                </div>

                {/* Checklist Grid Layout underneath the visual */}
                <div className="space-y-4 pt-6 border-t border-brand-neutral/20">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-[#9CA3AF]">
                    {isEnglish ? "Key Features" : "Öne Çıkan Ayrıntılar"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {currentTab.infoGrid.map((card, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-left"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#B6D637]/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#84A81D] stroke-[3]" />
                        </div>
                        <div className="space-y-1">
                          <h5 className="font-bold text-xs sm:text-sm text-[#111827] tracking-tight">
                            {card.title}
                          </h5>
                          <p className="text-[11px] sm:text-xs text-[#6B7280] leading-relaxed font-normal">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process Section Timeline */}
                <div className="space-y-4 pt-6 border-t border-brand-neutral/20">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-[#9CA3AF]">
                    {currentTab.processTitle}
                  </h4>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#F8FAFC] p-4 rounded-[16px]">
                    {currentTab.processSteps.map((step, idx) => {
                      const isLast = idx === currentTab.processSteps.length - 1;
                      return (
                        <React.Fragment key={idx}>
                          <div className="flex items-center gap-2.5 py-1 px-2 sm:py-0 sm:px-0">
                            <div className="w-7 h-7 rounded-full bg-white border border-brand-neutral/50 flex items-center justify-center text-xs font-bold text-[#84A81D] shadow-xs">
                              {idx + 1}
                            </div>
                            <span className="text-[11px] sm:text-xs font-semibold text-[#111827] whitespace-nowrap">
                              {step.title}
                            </span>
                          </div>
                          {!isLast && (
                            <ChevronRight className="hidden sm:block w-3.5 h-3.5 text-[#9CA3AF]" />
                          )}
                          {!isLast && (
                            <div className="sm:hidden h-px bg-brand-neutral/30 my-1 mx-4" />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Highlight Information Banner */}
                <div className="p-4 rounded-[16px] bg-[#B6D637]/8 border border-[#B6D637]/20 flex items-center gap-3">
                  <div className="shrink-0 p-1 bg-white rounded-lg border border-[#B6D637]/35 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-[#84A81D]">
                    {currentTab.bottomHighlight.icon}
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#111827] font-semibold leading-relaxed">
                    {currentTab.bottomHighlight.message}
                  </p>
                </div>

              </div>
            </div>
            
            {/* Mobile Bottom Dropdown navigation */}
            <div className="md:hidden pt-6 border-t border-brand-neutral/40 mt-6 relative select-none">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#9CA3AF] block mb-3">
                {isEnglish ? "Categories" : "Kategoriler"}
              </span>
              
              {/* Dropdown Button */}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-[14px] text-xs font-bold transition-all cursor-pointer bg-white text-[#6B7280] border border-brand-neutral/40 shadow-2xs hover:bg-slate-50 active:scale-[0.99]"
              >
                <div className="flex items-center gap-2">
                  <div className="text-[#84A81D]">
                    {tabData[activeTab].icon}
                  </div>
                  <span className="text-brand-primary">{tabData[activeTab].menuLabel}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#9CA3AF] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown List */}
              {isDropdownOpen && (
                <div className="absolute left-0 right-0 bottom-full mb-2 bg-white border border-brand-neutral/45 rounded-[16px] shadow-lg overflow-hidden z-40 transition-all duration-200">
                  <div className="p-1.5 flex flex-col gap-1 max-h-[220px] overflow-y-auto custom-scrollbar">
                    {tabData.map((tab) => {
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => {
                            setActiveTab(tab.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full min-h-[44px] flex items-center gap-2.5 px-4.5 py-3 rounded-[12px] text-xs font-bold transition-all text-left cursor-pointer ${
                            isActive
                              ? 'bg-[#B6D637]/20 text-[#84A81D]'
                              : 'text-[#6B7280] hover:bg-slate-50 hover:text-brand-primary'
                          }`}
                        >
                          {tab.icon}
                          <span>{tab.menuLabel}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* BOTTOM NAVIGATION (Fixed across the bottom - Premium restored white cards, lime background overlay, green outline border on active) */}
        <div className="hidden md:grid grid-cols-6 gap-2.5 w-full pt-4 pb-4 px-6 border-t border-brand-neutral/40 bg-white z-10 shrink-0 select-none">
          {tabData.map((tab) => {
            const isActive = activeTab === tab.id;
            const numberStr = `0${tab.id + 1}`;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex flex-col items-start gap-1 p-3.5 rounded-[16px] text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? 'bg-[#B6D637]/15 border border-[#84A81D]/45 scale-[1.02] shadow-md'
                    : 'bg-white hover:bg-slate-50 border border-brand-neutral/30 hover:border-brand-neutral/60 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`font-mono text-[10px] font-extrabold tracking-wider ${
                    isActive ? 'text-[#84A81D]' : 'text-[#9CA3AF]'
                  }`}>
                    {numberStr}
                  </span>
                  <div className={`transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? 'text-[#84A81D]' : 'text-[#9CA3AF]'
                  }`}>
                    {tab.icon}
                  </div>
                </div>
                <span className={`text-[11px] lg:text-[12px] font-bold tracking-tight leading-tight mt-1.5 transition-colors ${
                  isActive ? 'text-[#111827]' : 'text-[#6B7280] group-hover:text-[#111827]'
                }`}>
                  {tab.menuLabel}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B6D637]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
