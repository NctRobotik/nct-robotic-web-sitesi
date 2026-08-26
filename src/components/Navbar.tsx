import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, ArrowRight, Menu, X, Bot, UserRound, LogOut, ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

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
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'products', label: 'Ürünlerimiz' },
    { id: 'learning-model', label: 'Öğrenme Modeli' },
    { id: 'about', label: 'Hakkımızda' },
    { id: 'satis-noktalari', label: 'Satış Noktaları' },
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
              title="İletişim & Destek Hattı"
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
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Giriş Yapıldı</p>
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
                        <span>Hesabım</span>
                      </button>
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          onLogout();
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Çıkış Yap</span>
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

            <a
              href="/quote"
              onClick={(e) => {
                e.preventDefault();
                onOpenQuote();
              }}
              id="quote-btn"
              className="group flex items-center justify-center gap-2 h-11 px-7 bg-brand-accent hover:bg-[#D35A00] text-white font-semibold text-sm rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
            >
              <span>Teklif Al</span>
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
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hesap</span>
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
                  <span>Hesabım</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout();
                  }}
                  className="w-full flex items-center justify-center gap-2 h-12 bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-sm rounded-[14px] border border-red-200/50"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Çıkış Yap</span>
                </button>
              </>
            ) : (
              <a
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 h-12 bg-slate-100 hover:bg-slate-200 text-[#111827] font-semibold text-sm rounded-[14px] border border-slate-200"
              >
                <UserRound className="w-4 h-4" />
                <span>Giriş Yap</span>
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
              <span>Teklif Al</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
