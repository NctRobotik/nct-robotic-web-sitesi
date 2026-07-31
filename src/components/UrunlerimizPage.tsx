import React, { useState, useMemo } from 'react';
import { ArrowRight, ShoppingBag, Eye, FileText, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS_LIST } from '../data/nctData';

interface UrunlerimizPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenQuote: (productId?: string) => void;
}

export const UrunlerimizPage: React.FC<UrunlerimizPageProps> = ({
  onSelectProduct,
  onOpenQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');

  const categories = [
    'Tümü',
    'Eğitim Robotları',
    'Hizmet Robotları',
    'Endüstriyel Robotlar',
    'Sağlık Robotları',
  ];

  // Sorting products based on the requested order when Tümü is active
  const sortedProducts = useMemo(() => {
    const sortOrder = [
      'orbit-pix',
      'orbit-s',
      'orbit-lite',
      'orbit-bloom',
      'orbit-mini',
      'nct-serve',
      'amr',
    ];

    return [...PRODUCTS_LIST].sort((a, b) => {
      const indexA = sortOrder.indexOf(a.id);
      const indexB = sortOrder.indexOf(b.id);

      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return 0; // Keep original order for remaining products (e.g. nct-guide)
    });
  }, []);

  // Filtering products instantly by active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Tümü') {
      return sortedProducts;
    }
    return sortedProducts.filter((product) =>
      product.categories.includes(activeCategory)
    );
  }, [sortedProducts, activeCategory]);

  const renderActionButton = (product: Product) => {
    if (product.id === 'orbit-pix') {
      return (
        <a
          href="https://shop.nctrobotic.com/#detail/robot/orbit-pix"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-accent hover:bg-[#D35A00] text-white text-xs font-bold rounded-full transition-all duration-200 shadow-xs hover:shadow-sm"
        >
          <span>Sipariş Ver</span>
          <ShoppingBag className="w-3.5 h-3.5" />
        </a>
      );
    }

    if (product.id === 'orbit-s') {
      return (
        <button
          onClick={() => onSelectProduct(product)}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white hover:bg-brand-light text-brand-primary hover:text-brand-accent border border-brand-neutral hover:border-brand-accent text-xs font-bold rounded-full transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer"
        >
          <span>İncele</span>
          <Eye className="w-3.5 h-3.5" />
        </button>
      );
    }

    // Other products call quote / contact flow
    return (
      <button
        onClick={() => onOpenQuote(product.id)}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-primary hover:bg-brand-surface text-white text-xs font-bold rounded-full transition-all duration-200 shadow-xs cursor-pointer"
      >
        <span>Teklif Al</span>
        <FileText className="w-3.5 h-3.5" />
      </button>
    );
  };

  return (
    <div className="bg-white text-brand-primary min-h-screen font-sans selection:bg-brand-accent selection:text-white pt-6">
      {/* 1. HERO SECTION */}
      <section className="bg-brand-light/40 py-16 sm:py-20 border-b border-brand-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NCT Robot Teknolojileri</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-primary tracking-tight">
            Tüm Robotik Çözümlerimiz
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Eğitimden hizmet sektörüne, lojistikten özel projelere kadar farklı ihtiyaçlara yönelik robotik çözümlerimizi keşfedin.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="py-6 bg-white sticky top-20 z-30 shadow-xs border-b border-brand-neutral/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center scrollbar-none scroll-smooth" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 shrink-0 border cursor-pointer ${
                    isActive
                      ? 'bg-brand-accent border-brand-accent text-white shadow-sm hover:bg-[#D35A00]'
                      : 'bg-white hover:bg-brand-light border-brand-neutral text-brand-primary hover:border-[#CBD5E1]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="py-12 sm:py-16 bg-white min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-sm font-medium">
                Bu kategoride henüz robotumuz bulunmamaktadır.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {filteredProducts.map((product) => {
                const isFeatured = product.id === 'orbit-pix';
                return (
                  <div
                    key={product.id}
                    className="group rounded-[24px] bg-white border border-brand-neutral transition-all duration-300 flex flex-col overflow-hidden relative shadow-xs hover:shadow-[0_12px_30px_rgba(244,122,32,0.15)] hover:border-brand-accent hover:-translate-y-1.5 h-full"
                  >
                    {isFeatured && (
                      <div className="absolute top-3 left-3 z-20">
                        <span className="inline-flex items-center gap-1 bg-brand-accent text-white text-[9px] font-extrabold px-2.5 py-1 rounded-full shadow-sm tracking-tight">
                          <span>⭐</span>
                          <span>En Çok Tercih Edilen</span>
                        </span>
                      </div>
                    )}

                    {/* Image Container */}
                    <div className="relative h-[180px] sm:h-[200px] bg-brand-light/30 p-4 flex items-center justify-center overflow-hidden border-b border-brand-neutral shrink-0">
                      <img
                        src={product.image || product.imageUrl}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = '/src/assets/images/orbit_pix_hero_1784901007208.jpg';
                        }}
                        className="max-h-[140px] sm:max-h-[160px] w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-xs"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div className="space-y-2">
                        {/* Category label and Optional tag */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6B7280]">
                            {product.primaryCategory}
                          </span>
                          {product.tag && (
                            <span className="text-[9px] font-bold text-[#6B7280] bg-brand-light px-2.5 py-0.5 rounded-full shrink-0 border border-brand-neutral">
                              {product.tag}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-extrabold text-brand-primary text-sm sm:text-base group-hover:text-brand-accent transition-colors leading-tight">
                          {product.name}
                        </h3>

                        {/* Short description */}
                        <p className="text-[#6B7280] text-xs sm:text-sm font-normal leading-relaxed line-clamp-3">
                          {product.shortDescription || product.shortDesc}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="mt-5 pt-4 border-t border-brand-neutral shrink-0">
                        {renderActionButton(product)}
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
