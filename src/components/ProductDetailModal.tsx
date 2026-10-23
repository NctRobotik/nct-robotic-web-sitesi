import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocalizedProduct } from '../data/localizedProducts';
import { getLocalizedProductDetails, localizedColorName } from '../data/localizedProductDetails';
import { CheckCircle2, ShieldCheck, Video, ExternalLink, X, ArrowRight, Info, Sparkles } from 'lucide-react';
import { Product, ProductColor, ProductImage, TechnicalDetail } from '../types';
import { ModalShell, ModalBody, StatusBadge, PrimaryActionButton } from './ModalOverlaySystem';

const PRODUCT_LINKS: Record<string, string> = {
  "orbit-pix": "https://shop.nctrobotic.com/#detail/robot/orbit-pix",
  "orbit-s": "https://shop.nctrobotic.com/#detail/robot/orbit-pro",
  "orbit-lite": "https://shop.nctrobotic.com/#detail/robot/orbit-lite",
  "orbit-bloom": "https://shop.nctrobotic.com/#detail/robot/orbit-bloom",
  "amr": "https://shop.nctrobotic.com/#detail/robot/amr",
  "nct-serve": "https://shop.nctrobotic.com/#detail/robot/nct-serve",
  "nct-guide": "https://shop.nctrobotic.com/#detail/robot/nct-guide",
};

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onOpenTechDetail?: () => void;
  onOpenQuoteWithProduct?: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  isOpen,
  onClose,
  product,
  onOpenTechDetail,
  onOpenQuoteWithProduct,
}) => {
  const { i18n } = useTranslation();
  const isEn = i18n.resolvedLanguage?.startsWith('en') || i18n.language.startsWith('en');
  const copy = (tr: string, en: string) => isEn ? en : tr;
  const displayProduct = product ? getLocalizedProductDetails(getLocalizedProduct(product, isEn ? 'en' : 'tr'), isEn ? 'en' : 'tr') : null;
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
        setActiveImage(product.colors[0].images[0]?.url || product.image || product.imageUrl || '');
      } else {
        setSelectedColor(null);
        setActiveImage(product.image || product.imageUrl || '');
      }
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const shown = displayProduct!;
  const longDesc = shown.longDescriotion || shown.longDescription || shown.shortDescription || shown.shortDesc;
  const isInStock = product.inStock !== false;

  const currentImages: ProductImage[] = selectedColor?.images && selectedColor.images.length > 0
    ? selectedColor.images
    : (product.images && product.images.length > 0
      ? product.images
      : [{ url: product.image || product.imageUrl || '', alt: product.name }]);

  const handleColorChange = (color: ProductColor) => {
    setSelectedColor(color);
    if (color.images && color.images.length > 0) {
      setActiveImage(color.images[0].url);
    }
  };

  const groupedTechDetails = (shown.technicalDetails || []).reduce((acc, item) => {
    const grp = item.group || 'Genel';
    if (!acc[grp]) acc[grp] = [];
    acc[grp].push(item);
    return acc;
  }, {} as Record<string, TechnicalDetail[]>);

  // Split name and series dynamically
  const [mainName, ...subtitleParts] = product.name.split(' - ');
  const tagline = subtitleParts.join(' - ') || shown.tag || copy("NCT Robotik Serisi", "NCT Robotics Series");

  // Price formatting
  const formattedPrice = product.price ? `${product.price.toLocaleString(isEn ? 'en-US' : 'tr-TR')} ₺` : null;

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
      {/* Absolute Close Button at Top-Right */}
      <button
        onClick={onClose}
        aria-label={copy("Kapat", "Close")}
        className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-slate-100/80 hover:bg-slate-200 text-[#6B7280] hover:text-[#111827] flex items-center justify-center transition-colors cursor-pointer shadow-xs backdrop-blur-xs border border-brand-neutral"
      >
        <X className="w-5 h-5" />
      </button>

      <ModalBody className="pt-12 sm:pt-14 pb-8 space-y-10">
        {/* Two-Column Layout (Image Showcase left, Product Details right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (col-span-6): Product Images & Gallery */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative h-[280px] sm:h-[360px] flex items-center justify-center overflow-hidden bg-brand-light rounded-[24px] border border-brand-neutral shadow-xs p-6">
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/src/assets/images/orbit_pix_hero_1784901007208.jpg';
                }}
                className="max-h-full max-w-full object-contain transition-all duration-300 drop-shadow-sm group-hover:scale-102"
              />
            </div>

            {/* Gallery Thumbnails */}
            {currentImages.length > 1 && (
              <div className="flex items-center justify-center gap-2.5 overflow-x-auto py-1 scrollbar-none">
                {currentImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img.url)}
                    className="focus:outline-none shrink-0 cursor-pointer"
                  >
                    <div className={`w-14 h-14 p-1.5 bg-white border rounded-[12px] overflow-hidden transition-all duration-200 hover:border-brand-accent ${
                      activeImage === img.url ? 'border-brand-accent shadow-xs' : 'border-brand-neutral'
                    }`}>
                      <img
                        src={img.url}
                        alt={img.alt || product.name}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = '/src/assets/images/orbit_pix_hero_1784901007208.jpg';
                        }}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column (col-span-6): Info, Price, Colors, Specs, CTA */}
          <div className="md:col-span-6 space-y-6">
            {/* Header Block (Name & Series Tagline) */}
            <div className="space-y-1.5">
              <h2 className="text-3xl sm:text-4xl font-black text-brand-primary tracking-tight leading-none">
                {mainName}
              </h2>
              <p className="text-brand-accent font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                {tagline}
              </p>
            </div>

            {/* Price & Stock status badge row */}
            <div className="flex items-center gap-4 pt-1">
              {formattedPrice && (
                <div className="text-2xl sm:text-3xl font-black text-brand-primary tracking-tight">
                  {formattedPrice}
                </div>
              )}
              <StatusBadge
                status={isInStock}
                trueText={copy("Stokta Var", "In Stock")}
                falseText={copy("Stokta Yok", "Out of Stock")}
              />
            </div>

            {/* Color Switcher */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2.5 pt-4 border-t border-brand-neutral">
                <span className="text-xs font-semibold text-[#6B7280] flex items-center gap-1.5">
                  <span>{copy("Renk Seçeneği:", "Color:")}</span>
                  <span className="text-brand-primary font-bold">{selectedColor ? localizedColorName(selectedColor.name, isEn ? "en" : "tr") : ""}</span>
                </span>

                <div className="flex items-center gap-3">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor?.name === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => handleColorChange(color)}
                        title={color.name}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                          isSelected
                            ? 'ring-2 ring-brand-accent ring-offset-2'
                            : 'hover:scale-105'
                        }`}
                      >
                        <span
                          className="w-6 h-6 rounded-full border border-black/10 shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Specifications / Highlights */}
            {shown.specs && shown.specs.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-brand-neutral">
                <h4 className="font-semibold text-xs tracking-wider text-brand-accent uppercase">
                  {copy("Öne Çıkan Özellikler", "Key Features")}
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {shown.specs.slice(0, 4).map((spec, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-brand-primary/90 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span className="font-medium leading-tight">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Order Button (CTA) */}
            <div className="pt-4">
              {product.id === 'orbit-pix' && onOpenTechDetail ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <PrimaryActionButton
                    id={`product-cta-${product.id}`}
                    disabled={!isInStock}
                    className="w-full h-12 text-base font-bold shadow-md hover:shadow-lg"
                    onClick={() => {
                      const url = PRODUCT_LINKS[product.id] || `https://shop.nctrobotic.com/#detail/robot/${product.id}`;
                      if (url) {
                        window.location.href = url;
                      }
                    }}
                  >
                    {isInStock ? copy("Sipariş Ver", "Order Now") : copy("Stokta Yok", "Out of Stock")}
                  </PrimaryActionButton>
                  
                  <button
                    type="button"
                    onClick={onOpenTechDetail}
                    className="w-full h-12 flex items-center justify-center gap-2 bg-[#B6D637]/15 hover:bg-[#B6D637]/25 text-[#8CAC1D] hover:text-[#99BD25] font-extrabold text-sm sm:text-base rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-xs border border-[#B6D637]/35"
                  >
                    <span>{copy("Donanımı İncele", "Explore Hardware")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <PrimaryActionButton
                  id={`product-cta-${product.id}`}
                  disabled={!isInStock}
                  className="w-full h-12 text-base font-bold shadow-md hover:shadow-lg"
                  onClick={() => {
                    const url = PRODUCT_LINKS[product.id] || `https://shop.nctrobotic.com/#detail/robot/${product.id}`;
                    if (url) {
                      window.location.href = url;
                    }
                  }}
                >
                  {isInStock ? (product.id === "orbit-pix" ? copy("Sipariş Ver", "Order Now") : copy("Teklif Al", "Request a Quote")) : copy("Stokta Yok", "Out of Stock")}
                </PrimaryActionButton>
              )}

              {product.id === 'orbit-pix' && (
                <div className="mt-3 p-3 rounded-[12px] bg-brand-light/60 border border-brand-neutral text-left flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                    {copy("İlk 2 yılın ardından Pix mevcut özellikleriyle çalışmaya devam eder. Yeni yazılım güncellemelerini almaya devam etmek isteyen kullanıcılar aylık 20 USD abonelik seçeneğinden yararlanabilir.", "After the first two years, Pix continues working with its existing features. Users who wish to receive new software updates can choose an optional USD 20 monthly subscription.")}
                  </p>
                </div>
              )}

              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#6B7280] font-semibold mt-3 justify-center">
                <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0" />
                <span>{copy("2 Yıl Yerli Garanti & Teknik Servis Desteği", "2-Year Domestic Warranty & Technical Support")}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-t border-brand-neutral" />

        {/* Bottom Detailed Sections: Product Description, Dedicated Info, Tech Details & Video */}
        <div className="space-y-8">
          {/* Product Description */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-primary text-xs tracking-wider uppercase">{copy("Ürün Hakkında", "About the Product")}</h4>
            <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
              {longDesc}
            </p>
          </div>

          {/* Dedicated Orbit Pix Software & Update Information Section */}
          {product.id === 'orbit-pix' && (
            <div className="rounded-[20px] bg-slate-50/90 border border-brand-neutral p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-3 border-b border-brand-neutral pb-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base sm:text-lg text-brand-primary tracking-tight">
                    {copy("2 Yıl Yazılım ve Güncelleme Dahil", "2 Years of Software & Updates Included")}
                  </h4>
                  <p className="text-xs text-[#6B7280]">
                    {copy("Sürdürülebilir yapay zekâ deneyimi ve şeffaf güncelleme modeli", "A sustainable AI experience with a transparent update model")}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  {copy("Orbit Pix, satın alma tarihinden itibaren 2 yıl boyunca desteklenen yazılım güncellemelerinden ek ücret ödemeden yararlanır.", "Orbit Pix includes supported software updates at no additional cost for two years from the purchase date.")}
                </p>
                <p>
                  {copy("2 yıllık sürenin sonunda Pix mevcut özellikleriyle çalışmaya devam eder. Yeni yayınlanacak yazılım güncellemelerini almaya devam etmek isteyen kullanıcılar aylık 20 USD abonelik seçeneğini tercih edebilir.", "At the end of the two-year period, Pix remains usable with its existing features. A USD 20 monthly subscription is available for users who want future software updates.")}
                </p>
              </div>

              {/* Güven Mesajı */}
              <div className="pt-3 border-t border-brand-neutral flex items-start sm:items-center gap-2 text-xs font-semibold text-brand-accent">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5 sm:mt-0" />
                <span>{copy("Abonelik zorunlu değildir. Pix, abonelik olmadan mevcut özellikleriyle kullanılmaya devam eder.", "A subscription is optional. Pix remains usable with its existing features without one.")}</span>
              </div>

              {/* Sıkça Sorulan Sorular / Güvence Notları */}
              <div className="pt-3 border-t border-brand-neutral/60 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-brand-neutral space-y-1.5 shadow-2xs">
                  <span className="font-bold text-brand-primary block">
                    {copy("Orbit Pix için abonelik gerekiyor mu?", "Does Orbit Pix require a subscription?")}
                  </span>
                  <p className="text-slate-500 font-normal leading-relaxed">
                    {copy("Hayır. Orbit Pix satın alımına ilk 2 yıllık yazılım ve güncelleme hizmeti dahildir. 2 yıllık sürenin sonunda Pix mevcut özellikleriyle çalışmaya devam eder. Yeni yazılım güncellemelerini almaya devam etmek isteyen kullanıcılar isteğe bağlı olarak aylık 20 USD abonelik başlatabilir.", "No. The purchase includes two years of software updates. After that, Pix continues to work with its existing features. Users who want future updates may opt into a USD 20 monthly subscription.")}
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-brand-neutral space-y-1.5 shadow-2xs">
                  <span className="font-bold text-brand-primary block">
                    {copy("2 yıl sonunda abonelik satın almazsam Pix kapanır mı?", "Will Pix stop working if I do not subscribe after two years?")}
                  </span>
                  <p className="text-slate-500 font-normal leading-relaxed">
                    {copy("Hayır. Orbit Pix mevcut özellikleriyle kullanılmaya devam eder. Abonelik yalnızca 2 yıllık dahil sürenin ardından yayınlanacak yeni yazılım güncellemelerini almaya devam etmek isteyen kullanıcılar içindir.", "No. Orbit Pix continues to work with its existing features. The subscription is only for users who want new software updates released after the included two-year period.")}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Specs Extension (if more specs exist) */}
          {shown.specs && shown.specs.length > 4 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-xs tracking-wider text-brand-accent uppercase">
                {copy("Ek Özellikler", "Additional Features")}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {shown.specs.slice(4).map((spec, i) => (
                  <div key={i} className="flex items-start gap-2 text-brand-primary/90 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span className="font-normal leading-normal">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Details */}
          {groupedTechDetails && Object.keys(groupedTechDetails).length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-xs tracking-wider text-brand-accent uppercase">
                {copy("Teknik Detaylar", "Technical Details")}
              </h4>
              <div className="space-y-4 border border-brand-neutral p-5 rounded-[16px] bg-brand-light">
                {(Object.entries(groupedTechDetails) as [string, TechnicalDetail[]][]).map(([groupName, items]) => (
                  <div key={groupName} className="space-y-2">
                    <span className="text-[10px] font-bold text-brand-primary/45 uppercase tracking-widest block border-b border-brand-neutral pb-1">
                      {groupName}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                      {items?.map((detail, idx) => (
                        <div key={idx} className="flex justify-between items-center py-1">
                          <span className="font-normal text-[#6B7280]">{detail.label}</span>
                          <span className="font-semibold text-brand-primary text-right">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Use Cases */}
          {shown.useCases && shown.useCases.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-xs tracking-wider text-brand-accent uppercase">
                {copy("Kullanım Alanları & Senaryolar", "Use Cases & Scenarios")}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {shown.useCases.map((uc, i) => (
                  <div key={i} className="space-y-1">
                    <h5 className="font-semibold text-sm text-brand-primary">{uc.title}</h5>
                    <p className="text-xs text-[#6B7280] font-normal leading-relaxed">{uc.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video Section */}
          {product.videoUrl && product.videoUrl.trim() !== '' && (
            <div className="p-5 border border-brand-neutral rounded-[16px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white shadow-xs">
              <div className="space-y-1">
                <h5 className="font-bold text-sm text-brand-primary">{copy("Tanıtım & İnceleme Videosu", "Product Demo & Review Video")}</h5>
                <p className="text-xs text-[#6B7280] font-normal">{copy("Ürünün performansını ve kullanım detaylarını izleyin.", "See the product in action and explore its features.")}</p>
              </div>
              <a
                href={product.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 h-10 px-5 bg-brand-light hover:bg-[#EEEEEE] text-brand-primary border border-brand-neutral font-semibold text-xs rounded-[10px] transition-all shrink-0 cursor-pointer"
              >
                <Video className="w-4 h-4 text-brand-accent" />
                <span>{copy("İzle", "Watch")}</span>
                <ExternalLink className="w-3 h-3 text-brand-primary/40" />
              </a>
            </div>
          )}
        </div>
      </ModalBody>
    </ModalShell>
  );
};
