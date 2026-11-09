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
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  hreflangs: Record<string, string> | null;
  lang: SupportedLanguage;
  direction: 'ltr' | 'rtl';
}

export function parseSeoRoute(pathname: string) {
  const pathOnly = pathname.split('?')[0].split('#')[0];
  let cleanPath = pathOnly.replace(/^\/+|\/+$/g, '').toLowerCase();

  const isEn = cleanPath.startsWith('en/') || cleanPath === 'en';
  const isDe = cleanPath.startsWith('de/') || cleanPath === 'de';
  const isRu = cleanPath.startsWith('ru/') || cleanPath === 'ru';
  const isAr = cleanPath.startsWith('ar/') || cleanPath === 'ar';
  if (cleanPath.startsWith('en/')) cleanPath = cleanPath.substring(3);
  else if (cleanPath === 'en') cleanPath = '';
  else if (cleanPath.startsWith('de/')) cleanPath = cleanPath.substring(3);
  else if (cleanPath === 'de') cleanPath = '';
  else if (cleanPath.startsWith('ru/')) cleanPath = cleanPath.substring(3);
  else if (cleanPath === 'ru') cleanPath = '';
  else if (cleanPath.startsWith('ar/')) cleanPath = cleanPath.substring(3);
  else if (cleanPath === 'ar') cleanPath = '';
  else if (cleanPath.startsWith('tr/')) cleanPath = cleanPath.substring(3);
  else if (cleanPath === 'tr') cleanPath = '';

  const authRoutes = ['login', 'signup', 'forgot-password', 'reset-password', 'verify-email', 'profile', 'hesabim'];
  if (authRoutes.includes(cleanPath)) {
    return {
      routeKey: cleanPath === 'hesabim' ? 'profile' : cleanPath === 'forgot-password' ? 'forgotPassword' : cleanPath === 'reset-password' ? 'resetPassword' : cleanPath === 'verify-email' ? 'verifyEmail' : cleanPath,
      productId: null,
      isAuth: true,
      cleanPath: cleanPath === 'hesabim' ? 'profile' : cleanPath,
      isEn,
      isDe,
      isRu,
      isAr
    };
  }

  if (cleanPath === '' || cleanPath === 'home' || cleanPath === 'ana-sayfa') {
    return { routeKey: 'home', productId: null, isAuth: false, cleanPath: '', isEn, isDe, isRu, isAr };
  }
  if (cleanPath === 'about' || cleanPath === 'hakkimizda' || cleanPath === 'ueber-uns' || cleanPath === 'o-nas') {
    return { routeKey: 'about', productId: null, isAuth: false, cleanPath: 'about', isEn, isDe, isRu, isAr };
  }
  if (cleanPath === 'satis-noktalari' || cleanPath === 'sales-points' || cleanPath === 'bolge-temsilcilerimiz' || cleanPath === 'vertriebsstellen' || cleanPath === 'tochki-prodazh') {
    return { routeKey: 'salesPoints', productId: null, isAuth: false, cleanPath: 'satis-noktalari', isEn, isDe, isRu, isAr };
  }
  if (cleanPath === 'ogrenme-modeli' || cleanPath === 'learning-model' || cleanPath === 'lernmodell' || cleanPath === 'model-obucheniya') {
    return { routeKey: 'learningModel', productId: null, isAuth: false, cleanPath: 'ogrenme-modeli', isEn, isDe, isRu, isAr };
  }
  if (cleanPath === 'profil-metodolojisi' || cleanPath === 'profile-methodology' || cleanPath === 'profil-methodik' || cleanPath === 'metodologiya-profilya') {
    return { routeKey: 'profileMethodology', productId: null, isAuth: false, cleanPath: 'profil-metodolojisi', isEn, isDe, isRu, isAr };
  }
  if (cleanPath === 'urunlerimiz' || cleanPath === 'products' || cleanPath === 'produkte' || cleanPath === 'produkti' || cleanPath === 'solutions' || cleanPath === 'urunler' || cleanPath === 'cozumler') {
    return { routeKey: 'products', productId: null, isAuth: false, cleanPath: 'urunlerimiz', isEn, isDe, isRu, isAr };
  }
  if (cleanPath === 'contact' || cleanPath === 'iletisim' || cleanPath === 'kontakt' || cleanPath === 'kontakty') {
    return { routeKey: 'contact', productId: null, isAuth: false, cleanPath: 'contact', isEn, isDe, isRu, isAr };
  }
  if (cleanPath === 'quote' || cleanPath === 'teklif' || cleanPath === 'angebot' || cleanPath === 'zapros-ceny') {
    return { routeKey: 'quote', productId: null, isAuth: false, cleanPath: 'quote', isEn, isDe, isRu, isAr };
  }
  if (cleanPath === 'videolar' || cleanPath === 'videos' || cleanPath === 'video-galerisi' || cleanPath === 'video') {
    return { routeKey: 'videoGallery', productId: null, isAuth: false, cleanPath: 'videolar', isEn, isDe, isRu, isAr };
  }

  const productMatch = cleanPath.match(/^(products|urunler|urunlerimiz|urun|produkte|produkti)\/([^/]+)$/);
  if (productMatch) {
    return { routeKey: 'productDetail', productId: productMatch[2], isAuth: false, cleanPath: `urunlerimiz/${productMatch[2]}`, isEn, isDe, isRu, isAr };
  }

  return { routeKey: 'home', productId: null, isAuth: false, cleanPath: '', isEn, isDe, isRu, isAr };
}

export function getSeoMetadata(pathname: string, language?: string): SeoMetadata {
  const { routeKey, productId, isAuth, cleanPath, isEn, isDe, isRu, isAr } = parseSeoRoute(pathname);
  
  // Safely resolve language from central config; only enabled languages are valid
  let currentLang: SupportedLanguage = 'tr';
  if (language && isLanguageEnabled(language)) {
    currentLang = language.toLowerCase().split('-')[0] as SupportedLanguage;
  } else if (isAuth) {
    const resolved = (i18n.resolvedLanguage || i18n.language || 'tr').toLowerCase().split('-')[0];
    currentLang = isLanguageEnabled(resolved) ? (resolved as SupportedLanguage) : 'tr';
  } else {
    currentLang = isAr ? 'ar' : isRu ? 'ru' : isDe ? 'de' : isEn ? 'en' : 'tr';
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
  let description = '';
  if (routeKey === 'productDetail' && productId) {
    const prodDesc = i18n.t(`products.items.${productId}.shortDescription`, {
      lng: currentLang,
      defaultValue: ''
    });
    if (prodDesc && prodDesc !== `products.items.${productId}.shortDescription`) {
      description = prodDesc;
    }
  }
  if (!description) {
    description = i18n.t(`meta.descriptions.${routeKey}`, {
      lng: currentLang,
      defaultValue: i18n.t('meta.defaultDescription', { lng: currentLang })
    });
  }

  // URLs & Hreflang
  const baseUrl = 'https://nctrobotic.com';

  if (isAuth) {
    const canonical = `${baseUrl}/${cleanPath}`;
    const defaultOgImage = `${baseUrl}/og-image.png`;
    return {
      title,
      description,
      canonical,
      ogTitle: title,
      ogDescription: description,
      ogUrl: canonical,
      ogImage: defaultOgImage,
      twitterTitle: title,
      twitterDescription: description,
      twitterImage: defaultOgImage,
      hreflangs: null,
      lang: currentLang,
      direction: currentLang === 'ar' ? 'rtl' : 'ltr'
    };
  }

  // Public route URLs
  let trPath = '';
  let enPath = 'en';
  let dePath = 'de';
  let ruPath = 'ru';
  let arPath = 'ar';

  if (routeKey === 'home') {
    trPath = '';
    enPath = 'en';
    dePath = 'de';
    ruPath = 'ru';
    arPath = 'ar';
  } else if (routeKey === 'about') {
    trPath = 'about';
    enPath = 'en/about';
    dePath = 'de/ueber-uns';
    ruPath = 'ru/about';
    arPath = 'ar/about';
  } else if (routeKey === 'salesPoints') {
    trPath = 'satis-noktalari';
    enPath = 'en/sales-points';
    dePath = 'de/vertriebsstellen';
    ruPath = 'ru/sales-points';
    arPath = 'ar/sales-points';
  } else if (routeKey === 'learningModel') {
    trPath = 'ogrenme-modeli';
    enPath = 'en/learning-model';
    dePath = 'de/lernmodell';
    ruPath = 'ru/learning-model';
    arPath = 'ar/learning-model';
  } else if (routeKey === 'profileMethodology') {
    trPath = 'profil-metodolojisi';
    enPath = 'en/profile-methodology';
    dePath = 'de/profil-methodik';
    ruPath = 'ru/profile-methodology';
    arPath = 'ar/profile-methodology';
  } else if (routeKey === 'products') {
    trPath = 'urunlerimiz';
    enPath = 'en/products';
    dePath = 'de/produkte';
    ruPath = 'ru/products';
    arPath = 'ar/products';
  } else if (routeKey === 'contact') {
    trPath = 'contact';
    enPath = 'en/contact';
    dePath = 'de/kontakt';
    ruPath = 'ru/contact';
    arPath = 'ar/contact';
  } else if (routeKey === 'quote') {
    trPath = 'quote';
    enPath = 'en/quote';
    dePath = 'de/angebot';
    ruPath = 'ru/quote';
    arPath = 'ar/quote';
  } else if (routeKey === 'videoGallery') {
    trPath = 'videolar';
    enPath = 'en/videos';
    dePath = 'de/videos';
    ruPath = 'ru/videos';
    arPath = 'ar/videos';
  } else if (routeKey === 'productDetail' && productId) {
    trPath = `urunlerimiz/${productId}`;
    enPath = `en/products/${productId}`;
    dePath = `de/produkte/${productId}`;
    ruPath = `ru/products/${productId}`;
    arPath = `ar/products/${productId}`;
  } else {
    trPath = cleanPath;
    enPath = `en/${cleanPath}`;
    dePath = `de/${cleanPath}`;
    ruPath = `ru/${cleanPath}`;
    arPath = `ar/${cleanPath}`;
  }

  const trUrl = `${baseUrl}${trPath ? '/' + trPath : '/'}`;
  const enUrl = `${baseUrl}/${enPath}`;
  const deUrl = `${baseUrl}/${dePath}`;
  const ruUrl = `${baseUrl}/${ruPath}`;
  const arUrl = `${baseUrl}/${arPath}`;
  const canonical = currentLang === 'ar' ? arUrl : currentLang === 'ru' ? ruUrl : currentLang === 'de' ? deUrl : currentLang === 'en' ? enUrl : trUrl;

  // Build hreflangs dynamically reading from central language configuration.
  // ONLY actively enabled languages are published and indexed.
  const hreflangs: Record<string, string> = {};
  for (const lang of getEnabledLanguages()) {
    if (lang.code === 'tr') {
      hreflangs.tr = trUrl;
    } else if (lang.code === 'en') {
      hreflangs.en = enUrl;
    } else if (lang.code === 'de') {
      hreflangs.de = deUrl;
    } else if (lang.code === 'ru') {
      hreflangs.ru = ruUrl;
    } else if (lang.code === 'ar') {
      hreflangs.ar = arUrl;
    }
  }
  hreflangs['x-default'] = trUrl;

  let ogImage = `${baseUrl}/og-image.png`;
  if (routeKey === 'productDetail' && productId) {
    const product = PRODUCTS_LIST.find((p) => p.id === productId);
    if (product && (product.image || product.imageUrl)) {
      const imgPath = product.image || product.imageUrl;
      ogImage = imgPath.startsWith('http') ? imgPath : `${baseUrl}${imgPath.startsWith('/') ? '' : '/'}${imgPath}`;
    }
  }

  return {
    title,
    description,
    canonical,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    ogImage,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    hreflangs,
    lang: currentLang,
    direction: currentLang === 'ar' ? 'rtl' : 'ltr'
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
  setMeta('property', 'og:image', metadata.ogImage);

  // 4. Twitter Card
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', metadata.twitterTitle);
  setMeta('name', 'twitter:description', metadata.twitterDescription);
  setMeta('name', 'twitter:image', metadata.twitterImage);

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
