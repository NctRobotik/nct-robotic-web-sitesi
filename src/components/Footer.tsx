import React from 'react';
import { Bot, Phone, Mail, MapPin, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenContact: () => void;
  onSelectProduct: (productId: string) => void;
  onNavigate?: (tab: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'kvkk') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onOpenContact, onSelectProduct, onNavigate, onOpenLegal }) => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.resolvedLanguage === 'en' || i18n.language?.startsWith('en');
  const translate = (tr: string, en: string) => isEnglish ? en : tr;
  // Preserve locale in actual link targets for opening in a new tab.
  const localeHref = (path: string) => isEnglish ? `/en${path === '/' ? '' : path}` : path;

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
              {translate('NCT Robotik, yerli yapay zeka altyapısı ile yeni nesil eğitim ve endüstriyel robotik çözümleri geliştirir.', 'NCT Robotik develops next-generation educational and industrial robotics solutions with locally developed AI technology.')}
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
            <h4 className="font-bold text-brand-light text-sm uppercase tracking-wider">{translate('Ürünlerimiz', 'Products')}</h4>
            <ul className="space-y-2 text-brand-light/80 text-sm">
              <li>
                <a
                  href={localeHref("/products/orbit-pix")}
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
                  href={localeHref("/products/orbit-mini")}
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
                  href={localeHref("/products/orbit")}
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
                  href={localeHref("/products/orbit-s")}
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
                  href={localeHref("/products/amr")}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectProduct('amr');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  {translate('AMR Lojistik', 'AMR Logistics')}
                </a>
              </li>
              <li>
                <a
                  href={localeHref("/products/nct-serve")}
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
            <h4 className="font-bold text-brand-light text-sm uppercase tracking-wider">{translate('Hızlı Erişim', 'Quick Links')}</h4>
            <ul className="space-y-2 text-brand-light/80 text-sm">
              <li>
                <a
                  href={localeHref("/")}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('home');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  {translate('Ana Sayfa', 'Home')}
                </a>
              </li>
              <li>
                <a
                  href={localeHref("/products")}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('products');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  {translate('Ürünlerimiz', 'Products')}
                </a>
              </li>
              <li>
                <a
                  href={localeHref("/ogrenme-modeli")}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('learning-model');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  {translate('Öğrenme Modeli', 'Learning Model')}
                </a>
              </li>
              <li>
                <a
                  href={localeHref("/about")}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('about');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  {translate('Hakkımızda', 'About Us')}
                </a>
              </li>
              <li>
                <a
                  href={localeHref("/satis-noktalari")}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('satis-noktalari');
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  {translate('Satış Noktaları', 'Sales Locations')}
                </a>
              </li>
              <li>
                <a
                  href={localeHref("/contact")}
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenContact();
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  {translate('İletişim', 'Contact')}
                </a>
              </li>
              <li>
                <a
                  href={localeHref("/quote")}
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenQuote();
                  }}
                  className="hover:text-brand-accent text-brand-accent font-semibold transition-colors"
                >
                  {translate('Teklif Al', 'Request a Quote')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-light text-sm uppercase tracking-wider">{translate('İletişim', 'Contact')}</h4>
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
          <p>© {new Date().getFullYear()} NCT Robotik A.Ş. {translate('Tüm hakları saklıdır.', 'All rights reserved.')}</p>

          <div className="flex items-center gap-6">
            <span 
              onClick={() => onOpenLegal?.('privacy')}
              className="hover:text-brand-accent cursor-pointer"
            >
              {translate('Gizlilik Politikası', 'Privacy Policy')}
            </span>
            <span 
              onClick={() => onOpenLegal?.('kvkk')}
              className="hover:text-brand-accent cursor-pointer"
            >
              {translate('KVKK Aydınlatma Metni', 'Personal Data Protection Notice (KVKK)')}
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-brand-accent text-brand-light hover:text-white flex items-center justify-center transition-colors ml-2 cursor-pointer"
              title={translate("Yukarı Çık", "Back to Top")}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
