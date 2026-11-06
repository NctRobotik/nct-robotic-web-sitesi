import i18n from '../i18n';
import { PRODUCTS_LIST } from '../data/nctData';
import { getEnabledLanguages, isLanguageEnabled, SupportedLanguage } from '../i18n/languages';

export interface SeoMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  hreflangs: Record<string, string> | null;
}

export function parseSeoRoute(pathname: string) {
  const pathOnly = pathname.split('?')[0].split('#')[0];
  let cleanPath = pathOnly.replace(/^\/+|\/+$/g, '').toLowerCase();

  const isEn = cleanPath.startsWith('en/') || cleanPath === 'en';
  if (cleanPath.startsWith('en/')) cleanPath = cleanPath.substring(3);
  else if (cleanPath === 'en') cleanPath = '';
  else if (cleanPath.startsWith('tr/')) cleanPath = cleanPath.substring(3);
  else if (cleanPath === 'tr') cleanPath = '';

  const authRoutes = ['login', 'signup', 'forgot-password', 'reset-password', 'verify-email', 'profile', 'hesabim'];
  if (authRoutes.includes(cleanPath)) {
    return {
      routeKey: cleanPath === 'hesabim' ? 'profile' : cleanPath === 'forgot-password' ? 'forgotPassword' : cleanPath === 'reset-password' ? 'resetPassword' : cleanPath === 'verify-email' ? 'verifyEmail' : cleanPath,
      productId: null,
      isAuth: true,
      cleanPath: cleanPath === 'hesabim' ? 'profile' : cleanPath,
      isEn
    };
  }

  if (cleanPath === '' || cleanPath === 'home' || cleanPath === 'ana-sayfa') {
    return { routeKey: 'home', productId: null, isAuth: false, cleanPath: '', isEn };
  }
  if (cleanPath === 'about' || cleanPath === 'hakkimizda' || cleanPath === 'ueber-uns' || cleanPath === 'o-nas') {
    return { routeKey: 'about', productId: null, isAuth: false, cleanPath: 'about', isEn };
  }
  if (cleanPath === 'satis-noktalari' || cleanPath === 'sales-points' || cleanPath === 'bolge-temsilcilerimiz') {
    return { routeKey: 'salesPoints', productId: null, isAuth: false, cleanPath: 'satis-noktalari', isEn };
  }
  if (cleanPath === 'ogrenme-modeli' || cleanPath === 'learning-model') {
    return { routeKey: 'learningModel', productId: null, isAuth: false, cleanPath: 'ogrenme-modeli', isEn };
  }
  if (cleanPath === 'profil-metodolojisi' || cleanPath === 'profile-methodology') {
    return { routeKey: 'profileMethodology', productId: null, isAuth: false, cleanPath: 'profil-metodolojisi', isEn };
  }
  if (cleanPath === 'urunlerimiz' || cleanPath === 'products' || cleanPath === 'solutions' || cleanPath === 'urunler' || cleanPath === 'cozumler') {
    return { routeKey: 'products', productId: null, isAuth: false, cleanPath: 'urunlerimiz', isEn };
  }
  if (cleanPath === 'contact' || cleanPath === 'iletisim' || cleanPath === 'kontakt') {
    return { routeKey: 'contact', productId: null, isAuth: false, cleanPath: 'contact', isEn };
  }
  if (cleanPath === 'quote' || cleanPath === 'teklif' || cleanPath === 'angebot') {
    return { routeKey: 'quote', productId: null, isAuth: false, cleanPath: 'quote', isEn };
  }
  if (cleanPath === 'videolar' || cleanPath === 'videos' || cleanPath === 'video-galerisi') {
    return { routeKey: 'videoGallery', productId: null, isAuth: false, cleanPath: 'videolar', isEn };
  }

  const productMatch = cleanPath.match(/^(products|urunler|urunlerimiz|urun)\/([^/]+)$/);
  if (productMatch) {
    return { routeKey: 'productDetail', productId: productMatch[2], isAuth: false, cleanPath: `urunlerimiz/${productMatch[2]}`, isEn };
  }

  return { routeKey: 'home', productId: null, isAuth: false, cleanPath: '', isEn };
}

export function getSeoMetadata(pathname: string, language?: string): SeoMetadata {
  const { routeKey, productId, isAuth, cleanPath, isEn } = parseSeoRoute(pathname);
  
  // Safely resolve language from central config; only enabled languages are valid
  let currentLang: SupportedLanguage = 'tr';
  if (language && isLanguageEnabled(language)) {
    currentLang = language.toLowerCase().split('-')[0] as SupportedLanguage;
  } else if (isAuth) {
    const resolved = (i18n.resolvedLanguage || i18n.language || 'tr').toLowerCase().split('-')[0];
    currentLang = isLanguageEnabled(resolved) ? (resolved as SupportedLanguage) : 'tr';
  } else {
    currentLang = isEn ? 'en' : 'tr';
  }

  // Title
  let title = '';
  if (routeKey === 'productDetail' && productId) {
    const product = PRODUCTS_LIST.find((p) => p.id === productId);
    if (product) {
      title = i18n.t('meta.titles.productDetail', { name: product.name, lng: currentLang });
    } else {
      title = i18n.t('meta.defaultTitle', { lng: currentLang });
    }
  } else {
    title = i18n.t(`meta.titles.${routeKey}`, {
      lng: currentLang,
      defaultValue: i18n.t('meta.defaultTitle', { lng: currentLang })
    });
  }

  // Description
  const description = i18n.t(`meta.descriptions.${routeKey}`, {
    lng: currentLang,
    defaultValue: i18n.t('meta.defaultDescription', { lng: currentLang })
  });

  // URLs & Hreflang
  const baseUrl = 'https://nctrobotic.com';

  if (isAuth) {
    const canonical = `${baseUrl}/${cleanPath}`;
    return {
      title,
      description,
      canonical,
      ogTitle: title,
      ogDescription: description,
      ogUrl: canonical,
      twitterTitle: title,
      twitterDescription: description,
      hreflangs: null
    };
  }

  // Public route URLs
  let trPath = '';
  let enPath = 'en';

  if (routeKey === 'home') {
    trPath = '';
    enPath = 'en';
  } else if (routeKey === 'about') {
    trPath = 'about';
    enPath = 'en/about';
  } else if (routeKey === 'salesPoints') {
    trPath = 'satis-noktalari';
    enPath = 'en/sales-points';
  } else if (routeKey === 'learningModel') {
    trPath = 'ogrenme-modeli';
    enPath = 'en/ogrenme-modeli';
  } else if (routeKey === 'profileMethodology') {
    trPath = 'profil-metodolojisi';
    enPath = 'en/profile-methodology';
  } else if (routeKey === 'products') {
    trPath = 'urunlerimiz';
    enPath = 'en/products';
  } else if (routeKey === 'contact') {
    trPath = 'contact';
    enPath = 'en/contact';
  } else if (routeKey === 'quote') {
    trPath = 'quote';
    enPath = 'en/quote';
  } else if (routeKey === 'videoGallery') {
    trPath = 'videolar';
    enPath = 'en/videos';
  } else if (routeKey === 'productDetail' && productId) {
    trPath = `urunlerimiz/${productId}`;
    enPath = `en/products/${productId}`;
  } else {
    trPath = cleanPath;
    enPath = `en/${cleanPath}`;
  }

  const trUrl = `${baseUrl}${trPath ? '/' + trPath : '/'}`;
  const enUrl = `${baseUrl}/${enPath}`;
  const canonical = isEn ? enUrl : trUrl;

  // Build hreflangs dynamically reading from central language configuration.
  // ONLY actively enabled languages are published and indexed.
  const hreflangs: Record<string, string> = {};
  for (const lang of getEnabledLanguages()) {
    if (lang.code === 'tr') {
      hreflangs.tr = trUrl;
    } else if (lang.code === 'en') {
      hreflangs.en = enUrl;
    }
  }
  hreflangs['x-default'] = trUrl;

  return {
    title,
    description,
    canonical,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    twitterTitle: title,
    twitterDescription: description,
    hreflangs
  };
}

export function updateDocumentMetadata(pathname: string, language?: string): void {
  if (typeof document === 'undefined') return;

  const metadata = getSeoMetadata(pathname, language);

  // 1. Title
  document.title = metadata.title;

  // Helper for meta tags
  const setMeta = (nameOrProperty: 'name' | 'property', attrValue: string, content: string) => {
    let el = document.querySelector(`meta[${nameOrProperty}="${attrValue}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(nameOrProperty, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 2. Standard Description
  setMeta('name', 'description', metadata.description);

  // 3. OpenGraph
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:title', metadata.ogTitle);
  setMeta('property', 'og:description', metadata.ogDescription);
  setMeta('property', 'og:url', metadata.ogUrl);
  setMeta('property', 'og:image', 'https://nctrobotic.com/og-image.png');

  // 4. Twitter Card
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', metadata.twitterTitle);
  setMeta('name', 'twitter:description', metadata.twitterDescription);
  setMeta('name', 'twitter:image', 'https://nctrobotic.com/og-image.png');

  // 5. Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', metadata.canonical);

  // 6. Hreflang Alternate Links
  const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
  existingHreflangs.forEach((el) => el.remove());

  if (metadata.hreflangs) {
    for (const [hreflang, href] of Object.entries(metadata.hreflangs)) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    }
  }
}
