import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Bot, Factory, GraduationCap } from 'lucide-react';
import { PRODUCTS_LIST } from '../data/nctData';
import { Product } from '../types';

interface ProductsSectionProps {
  onSelectProduct: (product: Product) => void;
  onViewAllProducts: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onViewAllProducts,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-white border-t border-brand-neutral" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid Layout */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10">
          
          {/* LEFT COLUMN: Fixed Section Info (approx 22-25% width) */}
          <div className="w-full lg:w-[280px] shrink-0 flex flex-col justify-between py-2 border-b lg:border-b-0 lg:border-r border-brand-neutral pr-0 lg:pr-8">
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <span className="text-brand-accent font-extrabold text-[11px] uppercase tracking-[0.2em] block">
                ROBOT AİLEMİZ
              </span>
 
              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl font-black text-brand-primary leading-tight tracking-tight">
                Her İhtiyaca Uygun<br />
                <span className="text-brand-primary">Robotik Çözümler</span>
              </h2>
 
              {/* Short Description */}
              <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-normal">
                Eğitimden endüstriye, hizmetten lojistiğe uzanan geniş ürün ailemizle geleceği birlikte şekillendiriyoruz.
              </p>
            </div>
 
            {/* Bottom Action: Brand Rounded Button */}
            <div className="mt-6 lg:mt-0 pt-2">
              <button
                onClick={onViewAllProducts}
                id="view-all-products-btn"
                className="group inline-flex items-center justify-between gap-3 bg-brand-accent hover:bg-[#D35A00] text-white px-5 py-3 rounded-full text-xs font-bold transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                <span>Tüm Ürünleri Gör</span>
                <div className="w-6 h-6 rounded-full bg-white text-brand-accent flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>
 
          {/* RIGHT COLUMN: Product Cards Horizontal Slider (approx 75-78% width) */}
          <div className="flex-1 min-w-0 relative flex flex-col justify-center">
            
            {/* Slider Navigation Arrows (Placed floating at top right) */}
            <div className="flex items-center justify-end gap-2 mb-3">
              <button
                onClick={() => scroll('left')}
                id="products-scroll-left"
                aria-label="Önceki"
                className="w-9 h-9 rounded-full border border-brand-neutral bg-white hover:bg-brand-light text-brand-primary flex items-center justify-center shadow-2xs hover:border-brand-accent hover:text-brand-accent transition-all active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                id="products-scroll-right"
                aria-label="Sonraki"
                className="w-9 h-9 rounded-full border border-brand-neutral bg-white hover:bg-brand-light text-brand-primary flex items-center justify-center shadow-2xs hover:border-brand-accent hover:text-brand-accent transition-all active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
 
            {/* Horizontal Product Cards Container */}
            <div
              ref={scrollContainerRef}
              className="flex items-center gap-5 overflow-x-auto scrollbar-none py-4 px-1 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {PRODUCTS_LIST.map((product) => {
                const isFeatured = product.id === 'orbit-pix';
 
                return (
                  <div
                    key={product.id}
                    onClick={() => onSelectProduct(product)}
                    id={`product-card-${product.id}`}
                    className={`group cursor-pointer shrink-0 rounded-[24px] bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-sm ${
                      isFeatured
                        ? 'w-[250px] h-[320px] border-brand-accent/40 hover:shadow-[0_12px_30px_rgba(244,122,32,0.15)] hover:border-brand-accent hover:-translate-y-2 ring-1 ring-brand-accent/10'
                        : 'w-[225px] h-[300px] border-brand-neutral hover:shadow-[0_10px_25px_rgba(244,122,32,0.1)] hover:border-brand-accent hover:-translate-y-2'
                    }`}
                  >
                    {/* Featured Badge for Orbit Pix */}
                    {isFeatured && (
                      <div className="absolute top-3 left-3 z-20">
                        <span className="inline-flex items-center gap-1 bg-brand-accent text-white text-[9px] font-extrabold px-2.5 py-1 rounded-full shadow-sm tracking-tight">
                          <span>⭐</span>
                          <span>En Çok Tercih Edilen</span>
                        </span>
                      </div>
                    )}
 
                    {/* Top ~60% Image Container */}
                    <div className="relative h-[170px] bg-brand-light/30 p-3 flex items-center justify-center overflow-hidden border-b border-brand-neutral">
                      <img
                        src={product.image || product.imageUrl}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = '/src/assets/images/orbit_pix_hero_1784901007208.jpg';
                        }}
                        className="max-h-[135px] w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-sm"
                      />
                    </div>
 
                    {/* Bottom Specs */}
                    <div className="p-4 flex flex-col justify-between flex-grow bg-white">
                      <div>
                        {/* Title & Tag */}
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-extrabold text-brand-primary text-sm group-hover:text-brand-accent transition-colors truncate">
                            {product.name}
                          </h3>
                          <span className="text-[9px] font-bold text-[#6B7280] bg-brand-light px-2 py-0.5 rounded-full shrink-0 border border-brand-neutral">
                            {product.tag || product.primaryCategory}
                          </span>
                        </div>
 
                        {/* Single Line Description */}
                        <p className="text-[#6B7280] text-xs mt-1 truncate font-normal">
                          {product.shortDescription || product.shortDesc}
                        </p>
                      </div>
 
                      {/* Card Bottom Row: Category & Arrow */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-brand-neutral">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] group-hover:text-brand-accent transition-colors">
                          {product.primaryCategory || (product.category === 'education' ? 'Eğitim Robotu' : 'Industrial')}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-brand-light group-hover:bg-brand-accent group-hover:text-white text-brand-primary flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5 shadow-2xs">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
 
                  </div>
                );
              })}
            </div>
 
          </div>
 
        </div>
 
      </div>
    </section>
  );
};

