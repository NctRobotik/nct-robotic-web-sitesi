import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { TechnologySection } from './components/TechnologySection';
import { StatsSection } from './components/StatsSection';
import { AboutPage } from './components/AboutPage';
import { LearningModelPage } from './components/LearningModelPage';
import { ProfileMethodologyPage } from './components/ProfileMethodologyPage';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ContactModal } from './components/ContactModal';
import { VideoModal } from './components/VideoModal';
import { TechDetailModal } from './components/TechDetailModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { OrbitPixTechModal } from './components/OrbitPixTechModal';
import { Product, VideoItem } from './types';
import { VideoGalleryModal } from './components/VideoGalleryModal';
import { UrunlerimizPage } from './components/UrunlerimizPage';
import { PRODUCTS_LIST } from './data/nctData';
import { NCT_VIDEOS, FEATURED_NCT_VIDEOS } from './data/videoData';

const parsePathname = (pathname: string) => {
  const pathOnly = pathname.split('?')[0].split('#')[0];
  const cleanPath = pathOnly.replace(/^\/+|\/+$/g, '').toLowerCase();
  
  if (cleanPath === '' || cleanPath === 'home' || cleanPath === 'ana-sayfa') {
    return { tab: 'home', productId: null, isContact: false, isQuote: false, isUrunlerimizPage: false };
  }
  if (cleanPath === 'about' || cleanPath === 'hakkimizda') {
    return { tab: 'about', productId: null, isContact: false, isQuote: false, isUrunlerimizPage: false };
  }
  if (cleanPath === 'ogrenme-modeli' || cleanPath === 'learning-model') {
    return { tab: 'learning-model', productId: null, isContact: false, isQuote: false, isUrunlerimizPage: false };
  }
  if (cleanPath === 'profil-metodolojisi' || cleanPath === 'profile-methodology') {
    return { tab: 'profile-methodology', productId: null, isContact: false, isQuote: false, isUrunlerimizPage: false };
  }
  if (cleanPath === 'urunlerimiz') {
    return { tab: 'products', productId: null, isContact: false, isQuote: false, isUrunlerimizPage: true };
  }
  if (cleanPath === 'products' || cleanPath === 'solutions' || cleanPath === 'urunler' || cleanPath === 'cozumler') {
    return { tab: 'products', productId: null, isContact: false, isQuote: false, isUrunlerimizPage: false };
  }
  if (cleanPath === 'contact' || cleanPath === 'iletisim') {
    return { tab: 'contact', productId: null, isContact: true, isQuote: false, isUrunlerimizPage: false };
  }
  if (cleanPath === 'quote' || cleanPath === 'teklif') {
    return { tab: 'home', productId: null, isContact: false, isQuote: true, isUrunlerimizPage: false };
  }
  
  const productMatch = cleanPath.match(/^(products|urunler|urunlerimiz|urun)\/([^/]+)$/);
  if (productMatch) {
    const isUrunlerimiz = productMatch[1] === 'urunlerimiz';
    return { tab: 'products', productId: productMatch[2], isContact: false, isQuote: false, isUrunlerimizPage: isUrunlerimiz };
  }

  return { tab: 'home', productId: null, isContact: false, isQuote: false, isUrunlerimizPage: false };
};

const updateTitle = (pathname: string) => {
  const route = parsePathname(pathname);
  if (route.isContact) {
    document.title = 'İletişim | NCT Robotik';
  } else if (route.isQuote) {
    document.title = 'Teklif Al | NCT Robotik';
  } else if (route.productId) {
    const p = PRODUCTS_LIST.find((item) => item.id === route.productId);
    if (p) {
      document.title = `${p.name} | NCT Robotik`;
    } else {
      document.title = 'NCT Robotik | Resmi Web Sitesi';
    }
  } else if (route.tab === 'about') {
    document.title = 'Hakkımızda | NCT Robotik';
  } else if (route.tab === 'learning-model') {
    document.title = 'Öğrenme Modeli | NCT Robotik';
  } else if (route.tab === 'profile-methodology') {
    document.title = 'Profil Metodolojisi | NCT Robotik';
  } else if (route.tab === 'products') {
    document.title = 'Ürünlerimiz | NCT Robotik';
  } else {
    document.title = 'NCT Robotik | Resmi Web Sitesi';
  }
};

export default function App() {
  const reactNavigate = useNavigate();
  const location = useLocation();
  const isProgrammaticNavRef = useRef(false);

  const [activeTab, setActiveTab] = useState<string>('home');
  const [isUrunlerimizPage, setIsUrunlerimizPage] = useState<boolean>(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [techDetailModalOpen, setTechDetailModalOpen] = useState<boolean>(false);
  const [videoGalleryOpen, setVideoGalleryOpen] = useState<boolean>(false);
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [preselectedQuoteProductId, setPreselectedQuoteProductId] = useState<string>('orbit-pix');

  const isFirstPageRef = useRef<boolean>(true);
  const previousPathnameRef = useRef<string>(window.location.pathname);

  const handleRouteChange = (pathname: string, source: 'initial' | 'popstate' | 'navigate') => {
    const route = parsePathname(pathname);

    // Validate product if productId is provided
    if (route.productId) {
      const p = PRODUCTS_LIST.find((item) => item.id === route.productId);
      if (!p) {
        navigate(route.isUrunlerimizPage ? '/urunlerimiz' : '/products', true);
        return;
      }
    }

    // Set states
    setActiveTab(route.tab);
    setIsUrunlerimizPage(route.isUrunlerimizPage || false);
    
    if (route.productId) {
      const p = PRODUCTS_LIST.find((item) => item.id === route.productId);
      setSelectedProduct(p || null);
    } else {
      setSelectedProduct(null);
    }

    setContactModalOpen(route.isContact);
    setQuoteModalOpen(route.isQuote);

    // Update document title
    updateTitle(pathname);

    // Handle scroll positions
    if (source === 'popstate') {
      previousPathnameRef.current = pathname;
      return;
    }

    const prevRoute = parsePathname(previousPathnameRef.current);
    previousPathnameRef.current = pathname;

    const prevIsModal = prevRoute.productId || prevRoute.isContact || prevRoute.isQuote;
    const currentIsModal = route.productId || route.isContact || route.isQuote;

    if (source === 'initial') {
      if (route.tab === 'products' && !route.isUrunlerimizPage) {
        setTimeout(() => {
          const el = document.getElementById('products');
          if (el) {
            el.scrollIntoView({ behavior: 'auto' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
      return;
    }

    // source === 'navigate'
    if (!prevIsModal && !currentIsModal) {
      if (route.tab === 'products' && !route.isUrunlerimizPage) {
        setTimeout(() => {
          const el = document.getElementById('products');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navigate = (path: string, replace = false) => {
    isProgrammaticNavRef.current = true;
    reactNavigate(path, { replace });
    handleRouteChange(path, 'navigate');
  };

  useEffect(() => {
    const isInitial = isFirstPageRef.current;
    if (isInitial) {
      handleRouteChange(location.pathname, 'initial');
      isFirstPageRef.current = false;
    } else {
      if (isProgrammaticNavRef.current) {
        isProgrammaticNavRef.current = false;
      } else {
        handleRouteChange(location.pathname, 'popstate');
      }
    }
  }, [location.pathname]);

  // Actions
  const handleOpenQuote = (productId?: string) => {
    if (productId) {
      setPreselectedQuoteProductId(productId);
    }
    navigate('/quote');
  };

  const handleCloseQuote = () => {
    if (!isFirstPageRef.current) {
      window.history.back();
    } else {
      navigate('/');
    }
  };

  const handleOpenContact = () => {
    navigate('/contact');
  };

  const handleCloseContact = () => {
    if (!isFirstPageRef.current) {
      window.history.back();
    } else {
      navigate('/');
    }
  };

  const handleDiscoverOrbitPix = () => {
    navigate('/products/orbit-pix');
  };

  const handleWatchHeroVideo = () => {
    const mainVideo = NCT_VIDEOS.find(v => v.id === 'orbit-pix-turkce-matematik') || NCT_VIDEOS[0];
    if (mainVideo) {
      setSelectedVideo(mainVideo);
    }
  };

  const handleSelectProduct = (product: Product) => {
    if (isUrunlerimizPage) {
      navigate(`/urunlerimiz/${product.id}`);
    } else {
      navigate(`/products/${product.id}`);
    }
  };

  const handleSelectProductById = (productId: string) => {
    const p = PRODUCTS_LIST.find((item) => item.id === productId);
    if (p) {
      if (isUrunlerimizPage) {
        navigate(`/urunlerimiz/${productId}`);
      } else {
        navigate(`/products/${productId}`);
      }
    } else {
      navigate(isUrunlerimizPage ? '/urunlerimiz' : '/products');
    }
  };

  const handleCloseProductDetail = () => {
    if (!isFirstPageRef.current) {
      window.history.back();
    } else {
      navigate(isUrunlerimizPage ? '/urunlerimiz' : '/products');
    }
  };

  const handlePlayVideo = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  const handleViewAllProducts = () => {
    navigate('/urunlerimiz');
  };

  const handleViewAllVideos = () => {
    setVideoGalleryOpen(true);
  };

  const handleNavigateProducts = () => {
    navigate('/products');
  };

  const handleFooterNavigate = (tab: string) => {
    if (tab === 'contact') {
      navigate('/contact');
    } else if (tab === 'about') {
      navigate('/about');
    } else if (tab === 'products') {
      navigate('/products');
    } else if (tab === 'learning-model') {
      navigate('/ogrenme-modeli');
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-primary font-sans antialiased selection:bg-brand-accent selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'contact') {
            navigate('/contact');
          } else if (tab === 'about') {
            navigate('/about');
          } else if (tab === 'products') {
            navigate('/products');
          } else if (tab === 'learning-model') {
            navigate('/ogrenme-modeli');
          } else {
            navigate('/home');
          }
        }}
        onOpenQuote={() => handleOpenQuote()}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Main Content Area */}
      <main>
        <Routes>
          <Route path="/profil-metodolojisi" element={<ProfileMethodologyPage />} />
          <Route path="/profile-methodology" element={<ProfileMethodologyPage />} />
          <Route
            path="*"
            element={
              activeTab === 'about' ? (
                <AboutPage
                  onNavigateProducts={handleNavigateProducts}
                  onOpenContact={handleOpenContact}
                  onOpenQuote={handleOpenQuote}
                />
              ) : activeTab === 'learning-model' ? (
                <LearningModelPage />
              ) : activeTab === 'profile-methodology' ? (
                <ProfileMethodologyPage />
              ) : isUrunlerimizPage ? (
                <UrunlerimizPage
                  onSelectProduct={handleSelectProduct}
                  onOpenQuote={handleOpenQuote}
                />
              ) : (
                <>
                  {/* 1. Hero Section */}
                  <HeroSection
                    onDiscoverOrbitPix={handleDiscoverOrbitPix}
                    onWatchVideo={handleWatchHeroVideo}
                    onSelectFeature={() => setTechDetailModalOpen(true)}
                  />

                  {/* 2. Products Section (Robot Ailemiz) */}
                  <ProductsSection
                    onSelectProduct={handleSelectProduct}
                    onViewAllProducts={handleViewAllProducts}
                  />

                  {/* 3. Technology & Real Users Section (NCT Teknolojisi & Gerçek Kullanıcılar) */}
                  <TechnologySection
                    onOpenTechDetail={() => setTechDetailModalOpen(true)}
                    onPlayVideo={handlePlayVideo}
                    onViewAllVideos={handleViewAllVideos}
                  />

                  {/* 4. Statistics Section */}
                  <StatsSection />

                  {/* 5. Final CTA Section */}
                  <FinalCtaSection
                    onDiscoverOrbitPix={handleDiscoverOrbitPix}
                  />
                </>
              )
            }
          />
        </Routes>
      </main>

      {/* Corporate Footer */}
      <Footer
        onOpenQuote={handleOpenQuote}
        onOpenContact={handleOpenContact}
        onSelectProduct={handleSelectProductById}
        onNavigate={handleFooterNavigate}
      />

      {/* Modals & Dialogs */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        preselectedProductId={preselectedQuoteProductId}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={handleCloseContact}
        onOpenQuote={handleOpenQuote}
      />

      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        video={selectedVideo}
      />

      <VideoGalleryModal
        isOpen={videoGalleryOpen}
        onClose={() => setVideoGalleryOpen(false)}
        onPlayVideo={handlePlayVideo}
      />

      <OrbitPixTechModal
        isOpen={techDetailModalOpen}
        onClose={() => setTechDetailModalOpen(false)}
        onOpenQuote={() => handleOpenQuote()}
      />

      <ProductDetailModal
        isOpen={selectedProduct !== null}
        onClose={handleCloseProductDetail}
        product={selectedProduct}
        onOpenQuoteWithProduct={(productId) => handleOpenQuote(productId)}
        onOpenTechDetail={() => {
          setTechDetailModalOpen(true);
          handleCloseProductDetail();
        }}
      />
    </div>
  );
}
