import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutGrid,
  GraduationCap,
  Heart,
  ConciergeBell,
  Cog,
  ChevronDown,
  ArrowRight,
  Star,
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS_LIST } from '../data/nctData';
import { getLocalizedProduct } from '../data/localizedProducts';
import { useTranslation } from 'react-i18next';
import { getLocalizedPath } from '../i18n/routing';
import { SupportedLanguage } from '../i18n/languages';

interface UrunlerimizPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenQuote?: (productId?: string) => void;
}

interface FilterCategory {
  id: string;
  key: string;
  categoryName: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FILTER_CATEGORIES: FilterCategory[] = [
  { id: 'all', key: 'filterAll', categoryName: 'all', icon: LayoutGrid },
  { id: 'education', key: 'filterEducation', categoryName: 'Eğitim Robotları', icon: GraduationCap },
  { id: 'health', key: 'filterHealth', categoryName: 'Sağlık Robotları', icon: Heart },
  { id: 'service', key: 'filterService', categoryName: 'Hizmet Robotları', icon: ConciergeBell },
  { id: 'industry', key: 'filterIndustry', categoryName: 'Endüstriyel Robotlar', icon: Cog },
];

export const UrunlerimizPage: React.FC<UrunlerimizPageProps> = ({
  onSelectProduct,
  onOpenQuote,
}) => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'tr').toLowerCase().split('-')[0] as SupportedLanguage;
  const isEn = currentLang === 'en';

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'name-desc'>('featured');

  // Base list filtered by selected category
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS_LIST];

    if (activeCategory !== 'all') {
      list = list.filter((p) =>
        p.categories?.includes(activeCategory) || p.primaryCategory === activeCategory
      );
    }

    if (sortBy === 'featured') {
      const preferredOrder = [
        'orbit-pix',
        'orbit-s',
        'orbit-lite',
        'orbit-bloom',
        'nct-serve',
        'nct-guide',
        'amr',
      ];
      return list.sort((a, b) => {
        const indexA = preferredOrder.indexOf(a.id);
        const indexB = preferredOrder.indexOf(b.id);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return 0;
      });
    }

    if (sortBy === 'name-asc') {
      return list.sort((a, b) => {
        const nameA = getLocalizedProduct(a, i18n.language).name.toLowerCase();
        const nameB = getLocalizedProduct(b, i18n.language).name.toLowerCase();
        return nameA.localeCompare(nameB, i18n.language);
      });
    }

    if (sortBy === 'name-desc') {
      return list.sort((a, b) => {
        const nameA = getLocalizedProduct(a, i18n.language).name.toLowerCase();
        const nameB = getLocalizedProduct(b, i18n.language).name.toLowerCase();
        return nameB.localeCompare(nameA, i18n.language);
      });
    }

    return list;
  }, [activeCategory, sortBy, i18n.language]);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-[#F37021] selection:text-white">
      {/* 1. INTRODUCTION SECTION */}
      <section className="relative pt-8 pb-8 sm:pt-12 sm:pb-10 bg-white overflow-hidden border-b border-slate-100">
        {/* Subtle orange contour wave graphic on top right matching design reference */}
        <div className="absolute top-0 right-0 w-80 sm:w-96 lg:w-[460px] h-full pointer-events-none opacity-30 select-none overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 500 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M50 0C160 50 260 40 500 110" stroke="#F37021" strokeWidth="1.2" />
            <path d="M20 22C140 70 270 60 500 135" stroke="#F37021" strokeWidth="1.2" />
            <path d="M-10 45C120 90 280 80 500 160" stroke="#F37021" strokeWidth="1.2" />
            <path d="M-30 70C110 115 300 100 500 185" stroke="#F37021" strokeWidth="1.2" />
            <path d="M-50 95C100 140 320 125 500 210" stroke="#F37021" strokeWidth="1.2" />
            <path d="M-70 120C90 165 340 150 500 235" stroke="#F37021" strokeWidth="1.2" />
            <path d="M-90 145C80 190 360 175 500 260" stroke="#F37021" strokeWidth="1.2" />
            <path d="M-110 170C70 215 380 200 500 285" stroke="#F37021" strokeWidth="1.2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3.5">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link
              to={getLocalizedPath(currentLang, '/')}
              className="hover:text-slate-900 transition-colors"
            >
              {t('productCatalog.breadcrumbHome')}
            </Link>
            <span className="text-slate-400 select-none">›</span>
            <span className="text-slate-900 font-semibold">
              {t('productCatalog.breadcrumbProducts')}
            </span>
          </nav>

          {/* Eyebrow */}
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#F37021] block">
              {t('productCatalog.eyebrow')}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#111827] tracking-tight leading-[1.15] max-w-4xl">
            {t('productCatalog.heading')}
          </h1>

          {/* Description */}
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
            {t('productCatalog.description')}
          </p>
        </div>
      </section>

      {/* 2. FILTERS & PRODUCTS GRID SECTION */}
      <section className="py-8 sm:py-10 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Controls Bar: Category Filter Pills + Sort Dropdown */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Category Pills (horizontally scrollable on small mobile) */}
            <div
              className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {FILTER_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.categoryName;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.categoryName)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 border cursor-pointer ${
                      isActive
                        ? 'bg-[#F37021] border-[#F37021] text-white shadow-xs'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-600'}`} />
                    <span className="whitespace-nowrap">{t(`productCatalog.${cat.key}`)}</span>
                  </button>
                );
              })}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <span className="text-xs sm:text-sm text-slate-500 font-medium">
                {t('productCatalog.sortBy')}
              </span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'featured' | 'name-asc' | 'name-desc')}
                  className="appearance-none bg-white border border-slate-200 hover:border-slate-300 rounded-full pl-3.5 pr-8 py-2 text-xs sm:text-sm font-semibold text-slate-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F37021]/30 focus:border-[#F37021] transition-all"
                >
                  <option value="featured">{t('productCatalog.sortFeatured')}</option>
                  <option value="name-asc">{t('productCatalog.sortNameAsc')}</option>
                  <option value="name-desc">{t('productCatalog.sortNameDesc')}</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-slate-50/50 rounded-2xl border border-slate-100">
              <p className="text-slate-400 text-sm font-medium">
                {t('productCatalog.emptyMessage')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const isFeatured = product.id === 'orbit-pix';
                const displayProduct = getLocalizedProduct(product, i18n.language);

                return (
                  <div
                    key={product.id}
                    onClick={() => onSelectProduct(product)}
                    className={`group rounded-2xl bg-white border transition-all duration-300 flex flex-col overflow-hidden relative cursor-pointer hover:-translate-y-1 hover:shadow-lg ${
                      isFeatured
                        ? 'border-[#F37021]/80 ring-1 ring-[#F37021]/30 shadow-xs'
                        : 'border-slate-200 hover:border-[#F37021]/60 shadow-xs'
                    }`}
                  >
                    {/* Featured / Most Popular Badge */}
                    {isFeatured && (
                      <div className="absolute top-3.5 left-3.5 z-20">
                        <span className="inline-flex items-center gap-1.5 bg-[#F37021] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-xs tracking-tight">
                          <Star className="w-3 h-3 fill-white text-white" />
                          <span>{t('productCatalog.mostPopular')}</span>
                        </span>
                      </div>
                    )}

                    {/* Image Container */}
                    <div className="relative h-48 sm:h-52 bg-white p-4 flex items-center justify-center overflow-hidden shrink-0">
                      <img
                        src={product.image || product.imageUrl}
                        alt={displayProduct.name}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.src = '/orbit-pix-on.png';
                        }}
                        className="max-h-[160px] sm:max-h-[175px] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105 select-none"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        {/* Title and Tag Badge */}
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-bold text-[#111827] text-base sm:text-lg group-hover:text-[#F37021] transition-colors tracking-tight line-clamp-1">
                            {displayProduct.name}
                          </h3>
                          {displayProduct.tag && (
                            <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full shrink-0 border border-slate-200/60">
                              {displayProduct.tag}
                            </span>
                          )}
                        </div>

                        {/* Short Description */}
                        <p className="mt-2 text-slate-500 text-xs sm:text-[13px] leading-relaxed line-clamp-2 sm:line-clamp-3 min-h-[40px]">
                          {displayProduct.shortDescription || displayProduct.shortDesc}
                        </p>
                      </div>

                      {/* Bottom Row: Category & "Ürünü İncele" Action */}
                      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 truncate">
                          {displayProduct.primaryCategory}
                        </span>
                        <span className="text-xs sm:text-[13px] font-bold text-[#F37021] group-hover:text-[#D35A00] flex items-center gap-1 shrink-0 transition-colors">
                          <span>{t('productCatalog.viewProduct')}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
