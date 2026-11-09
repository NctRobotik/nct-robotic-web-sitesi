import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  X, 
  ChevronRight,
  ChevronDown,
  Shield, 
  Flame, 
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
  Sparkles, 
  Heart, 
  Settings, 
  Factory, 
  PenTool, 
  Layers, 
  Blocks, 
  Zap, 
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
import { useModalDismiss } from './ModalOverlaySystem';

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
}) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Scroll to top of dynamic column when tab changes
  useEffect(() => {
    if (rightColumnRef.current) {
      rightColumnRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  // Manage Escape dismissal, stacking, scroll-lock, and focus restoration
  useModalDismiss({ isOpen, onClose, id: 'orbit-pix-tech-modal' });

  // Handle overlay click to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const tabData: TabContent[] = [
    {
      id: 0,
      menuLabel: t('orbitPixTech.tabs.tab0.menuLabel'),
      icon: <Shield className="w-4 h-4" />,
      headerIcon: <Shield className="w-8 h-8 text-[#8CAC1D]" />,
      title: t('orbitPixTech.tabs.tab0.title'),
      subtitle: t('orbitPixTech.tabs.tab0.subtitle'),
      intro: t('orbitPixTech.tabs.tab0.intro'),
      heroImage: "/pix-cocuk-guvenlik.png",
      heroBadge: t('orbitPixTech.tabs.tab0.heroBadge'),
      infoGrid: [
        {
          icon: <Shield className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab0.grid1Title'),
          description: t('orbitPixTech.tabs.tab0.grid1Desc'),
        },
        {
          icon: <Flame className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab0.grid2Title'),
          description: t('orbitPixTech.tabs.tab0.grid2Desc'),
        },
        {
          icon: <Mic className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab0.grid3Title'),
          description: t('orbitPixTech.tabs.tab0.grid3Desc'),
        },
        {
          icon: <Lock className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab0.grid4Title'),
          description: t('orbitPixTech.tabs.tab0.grid4Desc'),
        },
      ],
      processTitle: t('orbitPixTech.tabs.tab0.processTitle'),
      processSteps: [
        { icon: <Compass className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab0.step1') },
        { icon: <Wrench className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab0.step2') },
        { icon: <Cpu className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab0.step3') },
        { icon: <Award className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab0.step4') },
      ],
      bottomHighlight: {
        icon: <CheckCircle2 className="w-5 h-5 text-[#84A81D]" />,
        message: t('orbitPixTech.tabs.tab0.highlight'),
      },
    },
    {
      id: 1,
      menuLabel: t('orbitPixTech.tabs.tab1.menuLabel'),
      icon: <MessageSquare className="w-4 h-4" />,
      headerIcon: <MessageSquare className="w-8 h-8 text-[#8CAC1D]" />,
      title: t('orbitPixTech.tabs.tab1.title'),
      subtitle: t('orbitPixTech.tabs.tab1.subtitle'),
      intro: t('orbitPixTech.tabs.tab1.intro'),
      heroImage: "/pix-iletisim3.png",
      heroBadge: t('orbitPixTech.tabs.tab1.heroBadge'),
      infoGrid: [
        {
          icon: <Mic className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab1.grid1Title'),
          description: t('orbitPixTech.tabs.tab1.grid1Desc'),
        },
        {
          icon: <Volume2 className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab1.grid2Title'),
          description: t('orbitPixTech.tabs.tab1.grid2Desc'),
        },
        {
          icon: <Brain className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab1.grid3Title'),
          description: t('orbitPixTech.tabs.tab1.grid3Desc'),
        },
        {
          icon: <Info className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab1.grid4Title'),
          description: t('orbitPixTech.tabs.tab1.grid4Desc'),
        },
      ],
      processTitle: t('orbitPixTech.tabs.tab1.processTitle'),
      processSteps: [
        { icon: <Activity className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab1.step1') },
        { icon: <Binary className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab1.step2') },
        { icon: <Lock className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab1.step3') },
        { icon: <Check className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab1.step4') },
      ],
      bottomHighlight: {
        icon: <Sparkles className="w-5 h-5 text-[#84A81D]" />,
        message: t('orbitPixTech.tabs.tab1.highlight'),
      },
    },
    {
      id: 2,
      menuLabel: t('orbitPixTech.tabs.tab2.menuLabel'),
      icon: <Smartphone className="w-4 h-4" />,
      headerIcon: <Smartphone className="w-8 h-8 text-[#8CAC1D]" />,
      title: t('orbitPixTech.tabs.tab2.title'),
      subtitle: t('orbitPixTech.tabs.tab2.subtitle'),
      intro: t('orbitPixTech.tabs.tab2.intro'),
      heroImage: "/pix-veli.png",
      heroBadge: t('orbitPixTech.tabs.tab2.heroBadge'),
      infoGrid: [
        {
          icon: <Smartphone className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab2.grid1Title'),
          description: t('orbitPixTech.tabs.tab2.grid1Desc'),
        },
        {
          icon: <LineChart className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab2.grid2Title'),
          description: t('orbitPixTech.tabs.tab2.grid2Desc'),
        },
        {
          icon: <BookOpen className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab2.grid3Title'),
          description: t('orbitPixTech.tabs.tab2.grid3Desc'),
        },
        {
          icon: <Heart className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab2.grid4Title'),
          description: t('orbitPixTech.tabs.tab2.grid4Desc'),
        }
      ],
      processTitle: t('orbitPixTech.tabs.tab2.processTitle'),
      processSteps: [
        { icon: <Smartphone className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab2.step1') },
        { icon: <Wifi className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab2.step2') },
        { icon: <LineChart className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab2.step3') },
        { icon: <Settings className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab2.step4') }
      ],
      bottomHighlight: {
        icon: <Smartphone className="w-5 h-5 text-[#84A81D]" />,
        message: t('orbitPixTech.tabs.tab2.highlight'),
      }
    },
    {
      id: 3,
      menuLabel: t('orbitPixTech.tabs.tab3.menuLabel'),
      icon: <Cpu className="w-4 h-4" />,
      headerIcon: <Cpu className="w-8 h-8 text-[#8CAC1D]" />,
      title: t('orbitPixTech.tabs.tab3.title'),
      subtitle: t('orbitPixTech.tabs.tab3.subtitle'),
      intro: t('orbitPixTech.tabs.tab3.intro'),
      heroImage: "/yerli-muhendislik.png",
      heroBadge: t('orbitPixTech.tabs.tab3.heroBadge'),
      infoGrid: [
        {
          icon: <Cpu className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab3.grid1Title'),
          description: t('orbitPixTech.tabs.tab3.grid1Desc'),
        },
        {
          icon: <Settings className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab3.grid2Title'),
          description: t('orbitPixTech.tabs.tab3.grid2Desc'),
        },
        {
          icon: <Wrench className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab3.grid3Title'),
          description: t('orbitPixTech.tabs.tab3.grid3Desc'),
        },
        {
          icon: <Factory className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab3.grid4Title'),
          description: t('orbitPixTech.tabs.tab3.grid4Desc'),
        },
      ],
      processTitle: t('orbitPixTech.tabs.tab3.processTitle'),
      processSteps: [
        { icon: <PenTool className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab3.step1') },
        { icon: <Cpu className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab3.step2') },
        { icon: <Layers className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab3.step3') },
        { icon: <Blocks className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab3.step4') },
      ],
      bottomHighlight: {
        icon: <Award className="w-5 h-5 text-[#84A81D]" />,
        message: t('orbitPixTech.tabs.tab3.highlight'),
      },
    },
    {
      id: 4,
      menuLabel: t('orbitPixTech.tabs.tab4.menuLabel'),
      icon: <Battery className="w-4 h-4" />,
      headerIcon: <Battery className="w-8 h-8 text-[#8CAC1D]" />,
      title: t('orbitPixTech.tabs.tab4.title'),
      subtitle: t('orbitPixTech.tabs.tab4.subtitle'),
      intro: t('orbitPixTech.tabs.tab4.intro'),
      heroImage: "/pix-pil-omru.png",
      heroBadge: t('orbitPixTech.tabs.tab4.heroBadge'),
      infoGrid: [
        {
          icon: <Battery className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab4.grid1Title'),
          description: t('orbitPixTech.tabs.tab4.grid1Desc'),
        },
        {
          icon: <Zap className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab4.grid2Title'),
          description: t('orbitPixTech.tabs.tab4.grid2Desc'),
        },
        {
          icon: <Heart className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab4.grid3Title'),
          description: t('orbitPixTech.tabs.tab4.grid3Desc'),
        },
        {
          icon: <Activity className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab4.grid4Title'),
          description: t('orbitPixTech.tabs.tab4.grid4Desc'),
        }
      ],
      processTitle: t('orbitPixTech.tabs.tab4.processTitle'),
      processSteps: [
        { icon: <Zap className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab4.step1') },
        { icon: <Clock className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab4.step2') },
        { icon: <Battery className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab4.step3') },
        { icon: <RefreshCw className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab4.step4') }
      ],
      bottomHighlight: {
        icon: <Battery className="w-5 h-5 text-[#84A81D]" />,
        message: t('orbitPixTech.tabs.tab4.highlight'),
      }
    },
    {
      id: 5,
      menuLabel: t('orbitPixTech.tabs.tab5.menuLabel'),
      icon: <RefreshCw className="w-4 h-4" />,
      headerIcon: <RefreshCw className="w-8 h-8 text-[#8CAC1D]" />,
      title: t('orbitPixTech.tabs.tab5.title'),
      subtitle: t('orbitPixTech.tabs.tab5.subtitle'),
      intro: t('orbitPixTech.tabs.tab5.intro'),
      heroImage: "/pix-yazilim-guncelleme.png",
      heroBadge: t('orbitPixTech.tabs.tab5.heroBadge'),
      infoGrid: [
        {
          icon: <Cloud className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab5.grid1Title'),
          description: t('orbitPixTech.tabs.tab5.grid1Desc'),
        },
        {
          icon: <BookOpen className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab5.grid2Title'),
          description: t('orbitPixTech.tabs.tab5.grid2Desc'),
        },
        {
          icon: <LineChart className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab5.grid3Title'),
          description: t('orbitPixTech.tabs.tab5.grid3Desc'),
        },
        {
          icon: <CloudLightning className="w-5 h-5 text-[#84A81D]" />,
          title: t('orbitPixTech.tabs.tab5.grid4Title'),
          description: t('orbitPixTech.tabs.tab5.grid4Desc'),
        },
      ],
      processTitle: t('orbitPixTech.tabs.tab5.processTitle'),
      processSteps: [
        {
          icon: <CloudLightning className="w-4 h-4" />,
          title: t('orbitPixTech.tabs.tab5.step1'),
        },
        { icon: <Lock className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab5.step2') },
        { icon: <Wifi className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab5.step3') },
        { icon: <RefreshCw className="w-4 h-4" />, title: t('orbitPixTech.tabs.tab5.step4') },
      ],
      bottomHighlight: {
        icon: <Zap className="w-5 h-5 text-[#84A81D]" />,
        message: t('orbitPixTech.tabs.tab5.highlight'),
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
          aria-label={t('orbitPixTech.common.closeAria')}
          className="absolute top-6 right-6 rtl:right-auto rtl:left-6 z-30 w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-[#6B7280] hover:text-[#111827] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md border border-slate-100 hover:scale-105 active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Main Content Area - Split Columns */}
        <div className="flex-grow flex flex-col md:flex-row md:overflow-hidden min-h-0">
          
          {/* LEFT COLUMN (35% on desktop - Product Area Showcase with Warm White BG and connector lines) */}
          <div className="md:w-[35%] w-full bg-[#FAFAF9] border-b md:border-b-0 md:border-r rtl:md:border-r-0 rtl:md:border-l border-brand-neutral/30 p-6 lg:p-8 flex flex-col justify-between shrink-0 select-none md:overflow-hidden relative">
            <div className="flex flex-col justify-between md:h-full h-auto space-y-6 relative">
              
              {/* Product Label and Title */}
              <div className="space-y-4 z-10">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF] block">
                    {t('orbitPixTech.leftCol.brand')}
                  </span>
                  <h4 className="text-lg lg:text-xl font-bold text-[#111827] tracking-tight leading-none">
                    {t('orbitPixTech.leftCol.product')}
                  </h4>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-extrabold text-[#111827] tracking-tight leading-tight pt-1">
                  {t('orbitPixTech.leftCol.title')}
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
                  <h6 className="font-bold text-[10px] sm:text-[11px] text-[#111827] leading-tight">{t('orbitPixTech.leftCol.hotspot1Title')}</h6>
                  <p className="text-[9px] text-[#6B7280] leading-none mt-0.5">{t('orbitPixTech.leftCol.hotspot1Desc')}</p>
                </div>

                {/* Hotspot Card 2 (Top Right) */}
                <div className="absolute top-[18%] right-[2%] w-[100px] sm:w-[120px] bg-white p-2.5 rounded-[12px] border border-brand-neutral/30 shadow-xs text-left z-20 hover:scale-105 transition-transform duration-200">
                  <h6 className="font-bold text-[10px] sm:text-[11px] text-[#111827] leading-tight">{t('orbitPixTech.leftCol.hotspot2Title')}</h6>
                  <p className="text-[9px] text-[#6B7280] leading-none mt-0.5">{t('orbitPixTech.leftCol.hotspot2Desc')}</p>
                </div>

                {/* Hotspot Card 3 (Bottom Left) */}
                <div className="absolute bottom-[22%] left-[2%] w-[100px] sm:w-[120px] bg-white p-2.5 rounded-[12px] border border-brand-neutral/30 shadow-xs text-left z-20 hover:scale-105 transition-transform duration-200">
                  <h6 className="font-bold text-[10px] sm:text-[11px] text-[#111827] leading-tight">{t('orbitPixTech.leftCol.hotspot3Title')}</h6>
                  <p className="text-[9px] text-[#6B7280] leading-none mt-0.5">{t('orbitPixTech.leftCol.hotspot3Desc')}</p>
                </div>

                {/* Hotspot Card 4 (Bottom Right) */}
                <div className="absolute bottom-[16%] right-[2%] w-[100px] sm:w-[120px] bg-white p-2.5 rounded-[12px] border border-brand-neutral/30 shadow-xs text-left z-20 hover:scale-105 transition-transform duration-200">
                  <h6 className="font-bold text-[10px] sm:text-[11px] text-[#111827] leading-tight">{t('orbitPixTech.leftCol.hotspot4Title')}</h6>
                  <p className="text-[9px] text-[#6B7280] leading-none mt-0.5">{t('orbitPixTech.leftCol.hotspot4Desc')}</p>
                </div>

                {/* Orbit Pix Centerpiece Image (visually dominant, centered, uncropped) */}
                <img
                  src="/donanim-foto.png"
                  alt={t('orbitPixTech.leftCol.imageAlt')}
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
              <div className="bg-white rounded-[24px] shadow-sm border border-brand-neutral/20 p-8 space-y-6 text-left rtl:text-right">
                
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
                    {t('orbitPixTech.common.keyFeatures')}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {currentTab.infoGrid.map((card, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-left rtl:text-right"
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
                {t('orbitPixTech.common.categories')}
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
                          className={`w-full min-h-[44px] flex items-center gap-2.5 px-4.5 py-3 rounded-[12px] text-xs font-bold transition-all text-left rtl:text-right cursor-pointer ${
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

        {/* BOTTOM NAVIGATION (Fixed across the bottom) */}
        <div className="hidden md:grid grid-cols-6 gap-2.5 w-full pt-4 pb-4 px-6 border-t border-brand-neutral/40 bg-white z-10 shrink-0 select-none">
          {tabData.map((tab) => {
            const isActive = activeTab === tab.id;
            const numberStr = `0${tab.id + 1}`;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex flex-col items-start gap-1 p-3.5 rounded-[16px] text-left rtl:text-right transition-all duration-300 cursor-pointer overflow-hidden ${
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
