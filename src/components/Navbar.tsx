import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, ArrowRight, Menu, X, Bot, UserRound, LogOut, ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenContact: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: { email: string; name?: string } | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuote,
  onOpenContact,
  activeTab,
  setActiveTab,
  user,
  onLogout,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.resolvedLanguage === 'en' || i18n.language?.toLowerCase().startsWith('en');
  const changeLanguage = (lang: 'tr' | 'en') => {
    const current = location.pathname.replace(/^\/(en|tr)(?=\/|$)/, '') || '/';
    // Auth pages are deliberately kept on their existing routes.
    const authRoute = /^\/(login|signup|profile|hesabim|forgot-password|reset-password|verify-email)(\/|$)/.test(current);
    // Keep authentication routes unchanged; translate the sales-points slug for public pages.
    const localizedCurrent = /^\/(satis-noktalari|sales-points)(\/|$)/.test(current)
      ? current.replace(/^\/(satis-noktalari|sales-points)/, lang === 'en' ? '/sales-points' : '/satis-noktalari')
      : current;
    const destination = authRoute ? current : lang === 'en'
      ? `/en${localizedCurrent === '/' ? '' : localizedCurrent}`
      : localizedCurrent;
    void i18n.changeLanguage(lang);
    localStorage.setItem('nct_language', lang);
    setMobileMenuOpen(false);
    navigate(destination + location.search + location.hash);
  };
  const languageSwitcher = (mobile = false) => (
    <div role="group" aria-label="Site language" className={`flex items-center rounded-xl bg-slate-100 border border-slate-200 p-1 ${mobile ? 'w-fit' : ''}`}>
      {(['tr', 'en'] as const).map(lang => (
        <button key={lang} type="button" onClick={() => changeLanguage(lang)}
          aria-pressed={(isEnglish ? 'en' : 'tr') === lang}
          className={`px-2.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${
            (isEnglish ? 'en' : 'tr') === lang ? 'bg-white text-brand-accent shadow-sm' : 'text-slate-500 hover:text-slate-900'
          }`}>
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'home', label: t('navigation.home') },
    { id: 'products', label: t('navigation.products') },
    { id: 'learning-model', label: t('navigation.learningModel') },
    { id: 'about', label: t('navigation.about') },
    { id: 'satis-noktalari', label: t('navigation.salesPoints') },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  const navHeaderClass = "sticky top-0 z-40 bg-white/92 backdrop-blur-md border-b border-[#E5E7EB] transition-all duration-200 text-[#111827]";

  return (
    <header className={navHeaderClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="focus:outline-none"
            id="nav-logo"
          >
            <BrandLogo size="md" theme="light" />
          </a>

          {/* Middle: Nav Links (Desktop) */}
          <nav 
            className="hidden md:flex items-center gap-1 p-1 rounded-full border transition-colors bg-slate-100 border-slate-200/50" 
            id="desktop-nav"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const hrefValue = item.id === 'home' ? '/' : (item.id === 'learning-model' ? '/ogrenme-modeli' : (item.id === 'satis-noktalari' ? '/satis-noktalari' : `/${item.id}`));
              return (
                <a
                  key={item.id}
                  href={hrefValue}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  id={`nav-link-${item.id}`}
                  className={`relative px-5 py-2 text-sm font-semibold transition-all duration-200 block text-center rounded-full ${
                    isActive
                      ? 'text-brand-accent'
                      : 'text-[#6B7280] hover:text-[#111827]'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-brand-accent rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>
 
          {/* Right: Phone & User Account & Action Button */}
          <div className="hidden md:flex items-center gap-3" id="nav-actions">
            {/* Circular Phone Icon */}
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
              }}
              id="phone-btn"
              title={t('navigation.contact')}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 border bg-slate-100 hover:bg-slate-200 text-[#6B7280] hover:text-brand-accent border-slate-200/60"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Circular User/Account Icon */}
            <div className="relative" ref={dropdownRef}>
              {user ? (
                <>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    id="user-btn"
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 border ${
                      dropdownOpen 
                        ? 'bg-[#FF7417]/10 border-[#FF7417]/30 text-[#FF7417]' 
                        : 'bg-slate-100 hover:bg-slate-200 text-[#6B7280] hover:text-brand-accent border-slate-200/60'
                    }`}
                  >
                    <UserRound className="w-5 h-5" />
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2.5 w-52 bg-white rounded-2xl border border-slate-150 shadow-xl py-2 z-50 text-left animate-fade-in">
                      <div className="px-4 py-2.5 border-b border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('account.signedIn')}</p>
                        <p className="text-xs font-bold text-[#111827] truncate mt-0.5">{user.name || user.email}</p>
                      </div>
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          navigate('/profile');
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#111827] hover:bg-slate-50 transition-colors text-left"
                      >
                        <UserRound className="w-4 h-4 text-slate-400" />
                        <span>{t('account.myAccount')}</span>
                      </button>
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          onLogout();
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>{t('account.logout')}</span>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="relative group">
                  <a
                    href="/login"
                    id="user-btn"
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 border bg-slate-100 hover:bg-slate-200 text-[#6B7280] hover:text-brand-accent border-slate-200/60"
                  >
                    <UserRound className="w-5 h-5" />
                  </a>
                  {/* Tooltip */}
                  <div className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 bg-[#111827] text-white text-[10px] sm:text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    Giriş Yap
                  </div>
                </div>
              )}
            </div>

            {languageSwitcher()}
            <a
              href="/quote"
              onClick={(e) => {
                e.preventDefault();
                onOpenQuote();
              }}
              id="quote-btn"
              className="group flex items-center justify-center gap-2 h-11 px-7 bg-brand-accent hover:bg-[#D35A00] text-white font-semibold text-sm rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
            >
              <span>{t('navigation.getQuote')}</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center border bg-slate-100 text-[#6B7280] border-slate-200"
            >
              <Phone className="w-4 h-4" />
            </a>
            
            {/* Mobile User Icon */}
            {user ? (
              <a
                href="/profile"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/profile');
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center border bg-[#FF7417]/10 text-[#FF7417] border-[#FF7417]/30"
              >
                <UserRound className="w-4 h-4" />
              </a>
            ) : (
              <a
                href="/login"
                className="w-10 h-10 rounded-full flex items-center justify-center border bg-slate-100 text-[#6B7280] border-slate-200"
              >
                <UserRound className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2.5 rounded-xl border transition-colors bg-slate-100 text-[#6B7280] border-slate-200 hover:bg-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EB] px-4 pt-3 pb-6 space-y-4 shadow-2xl text-[#111827]">
          <div className="flex items-center justify-between gap-3 px-4 pb-3 border-b border-slate-200">
            <span className="text-sm font-semibold text-slate-600">{isEnglish ? 'Language' : 'Dil'}</span>
            {languageSwitcher(true)}
          </div>
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const hrefValue = item.id === 'home' ? '/' : (item.id === 'learning-model' ? '/ogrenme-modeli' : (item.id === 'satis-noktalari' ? '/satis-noktalari' : `/${item.id}`));
              return (
                <a
                  key={item.id}
                  href={hrefValue}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`text-left px-4 py-3 rounded-xl font-semibold text-base transition-colors block ${
                    activeTab === item.id
                      ? 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20'
                      : 'text-[#6B7280] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-[#E5E7EB] flex flex-col gap-3">
            {user ? (
              <>
                <div className="px-4 py-1 flex flex-col text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('account.account')}</span>
                  <span className="text-sm font-bold text-[#111827] truncate mt-0.5">{user.name || user.email}</span>
                </div>
                <a
                  href="/profile"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    navigate('/profile');
                  }}
                  className="w-full flex items-center justify-center gap-2 h-12 bg-slate-100 hover:bg-slate-200 text-[#111827] font-semibold text-sm rounded-[14px] border border-slate-200"
                >
                  <UserRound className="w-4 h-4 text-slate-500" />
                  <span>{t('account.myAccount')}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout();
                  }}
                  className="w-full flex items-center justify-center gap-2 h-12 bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-sm rounded-[14px] border border-red-200/50"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{t('account.logout')}</span>
                </button>
              </>
            ) : (
              <a
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 h-12 bg-slate-100 hover:bg-slate-200 text-[#111827] font-semibold text-sm rounded-[14px] border border-slate-200"
              >
                <UserRound className="w-4 h-4" />
                <span>{t('account.login')}</span>
              </a>
            )}
            
            <a
              href="/quote"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 h-12 bg-brand-accent hover:bg-[#D35A00] text-white font-semibold text-sm rounded-[14px]"
            >
              <span>{t('navigation.getQuote')}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
