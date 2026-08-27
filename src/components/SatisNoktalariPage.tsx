import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, ChevronRight, Building, Phone, Mail, Tag, Gift } from 'lucide-react';

interface SatisNoktalariPageProps {
  onOpenContact: () => void;
}

interface Representative {
  id: string;
  city: string;
  name: string;
  status: string;
  img: string;
  address: string;
  phones: string[];
  email: string;
  details: string;
  coverage?: string;
}

export const SatisNoktalariPage: React.FC<SatisNoktalariPageProps> = ({ onOpenContact }) => {
  const [activeRepId, setActiveRepId] = useState<string | null>(null);
  const [svgContent, setSvgContent] = useState<string>('');

  // Fetch the Turkey SVG map and inject our custom geometric coordinate pins
  useEffect(() => {
    fetch('/Turkiye-haritasi.svg')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load SVG: ${res.statusText}`);
        }
        return res.text();
      })
      .then((data) => {
        const svgStartIdx = data.indexOf('<svg');
        if (svgStartIdx !== -1) {
          let svgMarkup = data.substring(svgStartIdx);

          // Custom pin SVG elements positioned at mathematically exact path center coordinates
          // calculated by tracing the vector boundaries in the 1007.478 x 527.323 viewBox:
          // Bursa center: X = 173.647, Y = 142.581
          // Sakarya center: X = 250.220, Y = 103.890
          // Antalya center: X = 257.501, Y = 375.469
          // Denizli center: X = 175.963, Y = 306.335
          const pinsMarkup = `
            <g id="map-interactive-pins">
              <!-- Bursa Pin -->
              <g transform="translate(173.647, 142.581)" class="map-svg-pin" data-id="bursa">
                <circle cx="0" cy="0" r="14" fill="rgba(255, 116, 23, 0.25)" class="ping-circle" />
                <circle cx="0" cy="0" r="6" fill="#FF7417" stroke="#FFFFFF" stroke-width="2" />
                
                <!-- Bursa Label: Bottom-Left to avoid overlap with Sakarya -->
                <foreignObject x="-120" y="8" width="110" height="30" style="overflow: visible;">
                  <div xmlns="http://www.w3.org/1999/xhtml" class="flex justify-end">
                    <span class="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold border bg-white/95 text-brand-primary border-slate-200 shadow-2xs whitespace-nowrap label-bursa">
                      Bursa
                    </span>
                  </div>
                </foreignObject>
              </g>

              <!-- Sakarya Pin -->
              <g transform="translate(250.220, 103.890)" class="map-svg-pin" data-id="sakarya">
                <circle cx="0" cy="0" r="14" fill="rgba(255, 116, 23, 0.25)" class="ping-circle" />
                <circle cx="0" cy="0" r="6" fill="#FF7417" stroke="#FFFFFF" stroke-width="2" />
                
                <!-- Sakarya Label: Bottom-Right to avoid overlap with Bursa -->
                <foreignObject x="10" y="8" width="110" height="30" style="overflow: visible;">
                  <div xmlns="http://www.w3.org/1999/xhtml" class="flex justify-start">
                    <span class="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold border bg-white/95 text-brand-primary border-slate-200 shadow-2xs whitespace-nowrap label-sakarya">
                      Sakarya
                    </span>
                  </div>
                </foreignObject>
              </g>

              <!-- Antalya Pin -->
              <g transform="translate(257.501, 355.469)" class="map-svg-pin" data-id="antalya">
                <circle cx="0" cy="0" r="14" fill="rgba(255, 116, 23, 0.25)" class="ping-circle" />
                <circle cx="0" cy="0" r="6" fill="#FF7417" stroke="#FFFFFF" stroke-width="2" />
                
                <!-- Antalya Label: Bottom-Center -->
                <foreignObject x="-60" y="8" width="120" height="30" style="overflow: visible;">
                  <div xmlns="http://www.w3.org/1999/xhtml" class="flex justify-center">
                    <span class="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold border bg-white/95 text-brand-primary border-slate-200 shadow-2xs whitespace-nowrap label-antalya">
                      Antalya
                    </span>
                  </div>
                </foreignObject>
              </g>

              <!-- Denizli / NCT Robotik Ana Merkez Pin (yalnızca haritada; liste ve kart yok) -->
              <g transform="translate(175.963, 306.335)" class="map-svg-pin map-svg-hq-pin" data-id="denizli">
                <circle cx="0" cy="0" r="16" fill="rgba(17, 24, 39, 0.15)" class="ping-circle" />
                <circle cx="0" cy="0" r="6" fill="#111827" stroke="#FF7417" stroke-width="2.5" />

                <!-- Denizli Label -->
                <foreignObject x="10" y="-18" width="135" height="48" style="overflow: visible;">
                  <div xmlns="http://www.w3.org/1999/xhtml" class="flex justify-start">
                    <span class="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold border bg-[#111827] text-white border-[#111827] shadow-sm whitespace-nowrap label-denizli leading-tight">
                      Denizli <span class="text-[#FF7417]">· Ana Merkez</span>
                    </span>
                  </div>
                </foreignObject>
              </g>
            </g>
          `;

          // Insert our pin elements right before the closing tag of the SVG
          const insertIdx = svgMarkup.lastIndexOf('</svg>');
          if (insertIdx !== -1) {
            svgMarkup = svgMarkup.substring(0, insertIdx) + pinsMarkup + svgMarkup.substring(insertIdx);
          }

          setSvgContent(svgMarkup);
        }
      })
      .catch((err) => console.error('Error loading Turkey SVG map:', err));
  }, []);

  const reps: Representative[] = [
    {
      id: "antalya",
      city: "Antalya",
      name: "Ecerem Bilişim Teknolojileri",
      status: "Bölge Bayii",
      img: "/baser_bilisim.png",
      address: "Muratpaşa, Antalya",
      phones: ["0 553 919 13 06"],
      email: "info@baserbilisim.com",
      details:
        "Ecerem Bilişim Teknolojileri, Akdeniz Bölge Bayii olarak Antalya ve çevre illerde NCT Robotik eğitim robotlarımızın tedarik, kurulum ve yerel destek süreçlerini yürütmektedir.",
    },
    {
      id: "sakarya",
      city: "Sakarya",
      name: "East To West Yabancı Dil Kursu",
      status: "Bölge Bayii",
      img: "/east_to_west_bayii.png",
      address: "Adapazarı, Sakarya",
      phones: ["0 (553) 769 83 89", "0 (552) 242 68 77"],
      email: "easttowest@easttowest.com.tr",
      details:
        "East To West Yabancı Dil Kursu, Doğu Marmara Bölge Bayii olarak Sakarya ve çevre illerde Orbit ailesi robotik setlerimizin dağıtımını ve eğitim uygulamalarını gerçekleştirmektedir.",
    },
    {
      id: "bursa",
      city: "Bursa",
      name: "Gülşah Kılınç",
      status: "Bölge Temsilcisi",
      img: "/gulsah-kilinc-bursa.jpeg",
      address: "Nilüfer, Bursa",
      phones: ["0 537 498 28 69"],
      email: "gulshgulr@gmail.com",
      coverage: "Bursa ve Çevre İller",
      details:
        "Gülşah Kılınç, Güney Marmara Bölge Temsilcisi olarak Bursa ve çevre illerdeki okullar, eğitim kurumları ve velilerimiz için bölgesel danışmanlık ve satış hizmeti sunmaktadır.",
    },
  ];

  const handleListItemClick = (id: string) => {
    const cardElement = document.getElementById(`rep-card-${id}`);
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Event Delegation for Interactive Map Hovers & Clicks
  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const pinGroup = target.closest('.map-svg-pin') || target.closest('[id]');
    if (pinGroup) {
      const id = pinGroup.getAttribute('data-id') || pinGroup.getAttribute('id');
      if (id && ['antalya', 'bursa', 'sakarya'].includes(id)) {
        handleListItemClick(id);
      }
    }
  };

  const handleMapMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const pinGroup = target.closest('.map-svg-pin') || target.closest('[id]');
    if (pinGroup) {
      const id = pinGroup.getAttribute('data-id') || pinGroup.getAttribute('id');
      if (id && ['antalya', 'bursa', 'sakarya', 'denizli'].includes(id)) {
        setActiveRepId(id);
      } else {
        setActiveRepId(null);
      }
    } else {
      setActiveRepId(null);
    }
  };

  const handleMapMouseOut = () => {
    setActiveRepId(null);
  };

  return (
    <div className="bg-white text-brand-primary min-h-screen font-sans selection:bg-brand-accent selection:text-white">
      {/* Dynamic Scoped Style block for SVG Vector Map & Coordinate Pins */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .turkey-map svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        .turkey-map path {
          fill: #FFE1CC !important;
          stroke: #FFFFFF !important;
          stroke-width: 1.2 !important;
          transition: fill 0.25s ease;
        }
        /* Hovering province shapes directly turns them orange */
        .turkey-map #antalya:hover path,
        .turkey-map #bursa:hover path,
        .turkey-map #sakarya:hover path,
        .turkey-map #denizli:hover path {
          fill: #FF7417 !important;
          cursor: pointer;
        }
        @keyframes svg-pulse {
          0% {
            transform: scale(0.9);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.75);
            opacity: 0;
          }
        }
        .ping-circle {
          transform-origin: 0px 0px;
          animation: svg-pulse 1.8s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        .map-svg-hq-pin circle:nth-child(2) {
          filter: drop-shadow(0 2px 4px rgba(17, 24, 39, 0.18));
        }
        /* Style adjustments when list/card/pin hover highlights a rep city */
        ${
          activeRepId
            ? `
          .turkey-map #${activeRepId} path {
            fill: #FF7417 !important;
          }
          .turkey-map g[data-id="${activeRepId}"] .ping-circle {
            transform: scale(2.0);
            animation: svg-pulse 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          }
          .turkey-map g[data-id="${activeRepId}"] circle:nth-child(2) {
            fill: ${activeRepId === "denizli" ? "#FF7417" : "#FF7417"} !important;
            stroke: ${activeRepId === "denizli" ? "#111827" : "#FFFFFF"} !important;
            transform: scale(1.15);
            transform-origin: 0px 0px;
            transition: all 0.2s ease;
          }
          .turkey-map .label-${activeRepId} {
            background-color: #111827 !important;
            color: #FFFFFF !important;
            border-color: #111827 !important;
            transform: scale(1.05);
            transition: all 0.2s ease;
          }
        `
            : ""
        }
      `,
        }}
      />

      {/* ==========================================
          1. HERO SECTION
         ========================================== */}
      <section className="w-full">
        {/* Desktop Hero Section */}
        <div
          className="hidden md:flex relative w-full min-h-[500px] lg:min-h-[560px] text-white flex-col justify-center overflow-hidden select-none"
          style={{
            backgroundImage: "url('/bayii-hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/95 to-transparent z-1" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-white z-1" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-xl lg:max-w-2xl space-y-6 text-left">
              <span className="font-manrope text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-brand-accent block">
                SATIŞ NOKTALARI
              </span>

              <h1 className="font-manrope text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#111827] leading-[1.12]">
                Size en yakın <br />
                NCT Robotik temsilcisini <br />
                keşfedin.
              </h1>

              <p className="font-manrope text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                Orbit ailesi ürünlerine, Türkiye'nin farklı şehirlerindeki bölge
                temsilcilerimiz aracılığıyla ulaşabilirsiniz. Size en yakın
                temsilcimizi seçerek ürünlerimiz hakkında detaylı bilgi alabilir
                ve satın alma sürecinizi kolayca başlatabilirsiniz.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Hero Section */}
        <div className="flex md:hidden flex-col bg-white">
          <div className="px-5 py-12 space-y-5 text-left">
            <span className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-brand-accent block">
              SATIŞ NOKTALARI
            </span>

            <h1 className="font-manrope text-3xl sm:text-4xl font-extrabold text-[#111827] leading-[1.15]">
              Size en yakın <br />
              NCT Robotik temsilcisini <br />
              keşfedin.
            </h1>

            <p className="font-manrope text-slate-600 text-base leading-relaxed">
              Orbit ailesi ürünlerine, Türkiye'nin farklı şehirlerindeki bölge
              temsilcilerimiz aracılığıyla ulaşabilirsiniz. Size en yakın
              temsilcimizi seçerek ürünlerimiz hakkında detaylı bilgi alabilir
              ve satın alma sürecinizi kolayca başlatabilirsiniz.
            </p>
          </div>
          <div className="w-full aspect-[3/2] overflow-hidden">
            <img
              src="/bayii-hero.png"
              alt="Size en yakın temsilcimizi keşfedin"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          ÖZEL FİYAT AVANTAJI BİLGİ BANDI
         ========================================== */}
      <section className="mt-8 mb-8 sm:mt-10 sm:mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFF8F3]/60 border border-[#FED7BE] rounded-2xl p-5 md:py-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
            {/* Left Column: Advantage Title & Details */}
            <div className="flex items-start gap-4 flex-1">
              <div className="mt-1 p-2 bg-[#FF7417]/10 rounded-xl text-[#FF7417] shrink-0">
                <Tag className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 text-left">
                <h3 className="text-base font-bold text-[#111827] leading-snug">
                  Bölge temsilcilerimize özel fiyat avantajı
                </h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed font-normal">
                  NCT Robotik ürünlerinde bulunduğunuz bölgedeki temsilcimiz
                  üzerinden gerçekleştirilen satın alımlarda özel fiyatlandırma
                  seçeneklerinden yararlanın.
                </p>
              </div>
            </div>

            {/* Vertical Separator Line (Hidden on Mobile) */}
            <div className="hidden md:block h-12 w-px bg-[#FED7BE]" />

            {/* Right Column: CTA/Information message */}
            <div className="flex items-center gap-3 shrink-0 text-left w-full md:w-auto">
              <div className="p-2 bg-[#FF7417]/10 rounded-xl text-[#FF7417] shrink-0 md:block hidden">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[#FF7417] text-xs sm:text-sm font-semibold leading-snug">
                  Özel fiyat avantajları hakkında
                  <br className="hidden sm:inline" />
                  temsilcinizden bilgi alın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. TURKEY MAP & SIDEBAR SECTION
         ========================================== */}
      <section className="pb-16 sm:pb-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="font-manrope text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-brand-accent block mb-3">
              SATIŞ NOKTALARIMIZ VE TEMSİLCİLERİMİZ
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4">
              Türkiye Geneli Satış Noktalarımız ve Temsilcilerimiz
            </h2>
            <p className="font-manrope text-slate-500 text-base">
              Aşağıdaki haritadan veya listeden size en yakın NCT Robotik satış noktasını ya da bölge temsilcimizi bulabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Left: Turkey Map Area (2 Columns) */}
            <div className="lg:col-span-2 bg-[#F8FAFC]/60 border border-slate-100 rounded-3xl p-4 sm:p-8 shadow-2xs">
              {/* Responsive Container wrapping inline SVG map and absolute coordinate pins */}
              <div
                className="relative w-full aspect-[1007.5/527.3] select-none"
                onClick={handleMapClick}
                onMouseOver={handleMapMouseOver}
                onMouseOut={handleMapMouseOut}
              >
                {svgContent ? (
                  <div
                    className="turkey-map w-full h-full"
                    dangerouslySetInnerHTML={{ __html: svgContent }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">
                    Harita yükleniyor...
                  </div>
                )}
              </div>
            </div>

            {/* Right: Sidebar Directory List (1 Column) */}
            <div className="space-y-4">
              {reps.map((rep) => {
                const isActive = activeRepId === rep.id;
                return (
                  <div
                    key={rep.id}
                    onMouseEnter={() => setActiveRepId(rep.id)}
                    onMouseLeave={() => setActiveRepId(null)}
                    onClick={() => handleListItemClick(rep.id)}
                    className={`group flex items-center justify-between p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-brand-accent/5 border-brand-accent/30 shadow-xs translate-x-1"
                        : "bg-white border-slate-200/80 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Orange Pin Icon */}
                      <div
                        className={`mt-1 flex-shrink-0 transition-transform duration-200 ${
                          isActive ? "scale-110" : "group-hover:scale-105"
                        }`}
                      >
                        <MapPin className="w-5 h-5 text-[#FF7417]" />
                      </div>

                      <div className="text-left">
                        <h4 className="text-[#111827] font-bold text-base leading-tight">
                          {rep.city}
                        </h4>
                        <p className="text-slate-500 text-sm mt-1 font-medium leading-tight">
                          {rep.name}
                        </p>
                        <p className="text-slate-400 text-xs mt-1 font-normal leading-tight">
                          {rep.status}
                        </p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 ml-4">
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-brand-accent group-hover:translate-x-0.5 transition-all duration-200" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. REPRESENTATIVE CARDS SECTION
         ========================================== */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="font-manrope text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-brand-accent block mb-3">
              YETKİLİ NOKTALARIMIZ
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl font-extrabold text-[#111827]">
              Bölge Bayilerimiz ve Temsilcimiz
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reps.map((rep) => {
              const isActive = activeRepId === rep.id;
              return (
                <div
                  id={`rep-card-${rep.id}`}
                  key={rep.id}
                  onMouseEnter={() => setActiveRepId(rep.id)}
                  onMouseLeave={() => setActiveRepId(null)}
                  className={`bg-white rounded-[24px] overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? "border-brand-accent/50 shadow-md -translate-y-1.5"
                      : "border-slate-200/60 shadow-2xs hover:border-slate-300 hover:shadow-xs hover:-translate-y-0.5"
                  }`}
                >
                  <div>
                    {/* Image Panel */}
                    <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden relative select-none">
                      <img
                        src={rep.img}
                        alt={rep.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-102"
                      />

                      {/* Absolute Badges */}
                      <span className="absolute top-4 left-4 bg-brand-accent text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-sm tracking-wider">
                        {rep.status.toLocaleUpperCase('tr-TR')}
                      </span>
                      {rep.coverage && (
                        <span className="absolute top-4 right-4 bg-brand-primary text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-sm">
                          {rep.coverage}
                        </span>
                      )}
                    </div>

                    {/* Card Description */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="text-left">
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-1">
                          {rep.city}
                        </span>
                        <h3 className="text-xl font-bold text-[#111827] line-clamp-1 leading-snug">
                          {rep.name}
                        </h3>
                      </div>

                      <p className="text-slate-500 text-sm leading-relaxed min-h-[72px] text-left">
                        {rep.details}
                      </p>

                      {/* Contact Fields with icons */}
                      <div className="pt-4 border-t border-slate-100 space-y-2.5">
                        <div className="flex items-center gap-3 text-slate-600 text-xs">
                          <Building className="w-4 h-4 text-slate-400 shrink-0" />
                          <span className="truncate">{rep.address}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 text-xs">
                          <Phone className="w-4 h-4 text-slate-400 shrink-0" />

                          <div className="flex items-center gap-2">
                            {rep.phones.map((phone, index) => (
                              <React.Fragment key={phone}>
                                <a
                                  href={`tel:${phone.replace(/\D/g, "")}`}
                                  className="hover:text-brand-accent transition-colors font-medium"
                                >
                                  {phone}
                                </a>

                                {index < rep.phones.length - 1 && (
                                  <span className="text-slate-300">/</span>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 text-xs">
                          <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                          <a
                            href={`mailto:${rep.email}`}
                            className="hover:text-brand-accent transition-colors font-medium"
                          >
                            {rep.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detaylı Bilgi Button */}
                  <div className="px-6 pb-8 pt-2">
                    <button
                      onClick={() => onOpenContact()}
                      className="w-full flex items-center justify-center gap-2 py-3 px-5 bg-[#F8FAFC] hover:bg-brand-accent text-[#111827] hover:text-white border border-slate-200 hover:border-brand-accent text-sm font-bold rounded-xl transition-all duration-200 cursor-pointer"
                    >
                      <span>Detaylı Bilgi</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
