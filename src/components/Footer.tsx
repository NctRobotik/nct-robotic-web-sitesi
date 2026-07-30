import React from 'react';
import { Bot, Phone, Mail, MapPin, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenContact: () => void;
  onSelectProduct: (productId: string) => void;
  onNavigate?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onOpenContact, onSelectProduct, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (tab: string) => {
    if (onNavigate) {
      onNavigate(tab);
    } else {
      const element = document.getElementById(tab);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-brand-primary text-brand-light/80 text-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1 & 2: Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="sm" />

            <p className="text-brand-light/80 text-sm leading-relaxed max-w-sm">
              NCT Robotik, yerli yapay zeka altyapısı ile yeni nesil eğitim ve endüstriyel robotik çözümleri geliştirir.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.youtube.com/@NCTRobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-brand-accent hover:text-brand-accent flex items-center justify-center text-brand-light transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/nctrobotics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-brand-accent hover:text-brand-accent flex items-center justify-center text-brand-light transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/nct-robotics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-brand-accent hover:text-brand-accent flex items-center justify-center text-brand-light transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-light text-sm uppercase tracking-wider">Ürünlerimiz</h4>
            <ul className="space-y-2 text-brand-light/80 text-sm">
              <li>
                <a
                  href="/products/orbit-pix"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectProduct('orbit-pix');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  Orbit Pix
                </a>
              </li>
              <li>
                <a
                  href="/products/orbit-mini"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectProduct('orbit-mini');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  Orbit Mini
                </a>
              </li>
              <li>
                <a
                  href="/products/orbit"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectProduct('orbit');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  Orbit
                </a>
              </li>
              <li>
                <a
                  href="/products/orbit-s"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectProduct('orbit-s');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  Orbit S
                </a>
              </li>
              <li>
                <a
                  href="/products/amr"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectProduct('amr');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  AMR Lojistik
                </a>
              </li>
              <li>
                <a
                  href="/products/nct-serve"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectProduct('nct-serve');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  NCT Serve
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-light text-sm uppercase tracking-wider">Hızlı Erişim</h4>
            <ul className="space-y-2 text-brand-light/80 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('home');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('products');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  Ürünlerimiz
                </a>
              </li>
              <li>
                <a
                  href="/ogrenme-modeli"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('learning-model');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  Öğrenme Modeli
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('about');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenContact();
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  İletişim
                </a>
              </li>
              <li>
                <a
                  href="/quote"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenQuote();
                  }}
                  className="hover:text-brand-accent text-brand-accent font-semibold transition-colors"
                >
                  Teklif Al
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-light text-sm uppercase tracking-wider">İletişim</h4>
            <ul className="space-y-2.5 text-brand-light/80 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-1" />
                <span>Pamukkale Üniversitesi Teknokent, Hüseyin Yılmaz Cad. No: 67, Kat: 2 D Blok Kapı No: 201</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                <a href="tel:+905433507587" className="hover:text-brand-accent transition-colors">0543 350 7587</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                <a href="mailto:info@nctrobotic.com" className="hover:text-brand-accent transition-colors">info@nctrobotic.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-light/60">
          <p>© {new Date().getFullYear()} NCT Robotik A.Ş. Tüm hakları saklıdır.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-brand-accent cursor-pointer">Gizlilik Politikası</span>
            <span className="hover:text-brand-accent cursor-pointer">KVKK Aydınlatma Metni</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-brand-accent text-brand-light hover:text-white flex items-center justify-center transition-colors ml-2 cursor-pointer"
              title="Yukarı Çık"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
