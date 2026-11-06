import {
  DEFAULT_LANGUAGE,
  SupportedLanguage,
  getLanguageConfig,
  isLanguageEnabled
} from './languages';

export const AUTH_ROUTES = [
  'login',
  'signup',
  'profile',
  'hesabim',
  'forgot-password',
  'reset-password',
  'verify-email'
] as const;

export type RouteKey =
  | 'home'
  | 'about'
  | 'products'
  | 'salesPoints'
  | 'learningModel'
  | 'profileMethodology'
  | 'contact'
  | 'quote'
  | 'videoGallery'
  | 'productDetail'
  | 'login'
  | 'signup'
  | 'profile'
  | 'forgotPassword'
  | 'resetPassword'
  | 'verifyEmail';

export interface RouteSlugs {
  tr: string;
  en: string;
  de: string;
  ru: string;
  ar: string;
}

/**
 * Canonical route slugs for all supported pages.
 * Turkish and English slugs reflect currently active and published routes.
 * Future language slugs (DE, RU, AR) are mapped for architectural readiness.
 */
export const ROUTE_SLUGS: Record<Exclude<RouteKey, 'productDetail' | 'login' | 'signup' | 'profile' | 'forgotPassword' | 'resetPassword' | 'verifyEmail'>, RouteSlugs> = {
  home: {
    tr: '',
    en: '',
    de: '',
    ru: '',
    ar: ''
  },
  about: {
    tr: 'about',
    en: 'about',
    de: 'ueber-uns',
    ru: 'about',
    ar: 'about'
  },
  products: {
    tr: 'urunlerimiz',
    en: 'products',
    de: 'produkte',
    ru: 'products',
    ar: 'products'
  },
  salesPoints: {
    tr: 'satis-noktalari',
    en: 'sales-points',
    de: 'vertriebsstellen',
    ru: 'sales-points',
    ar: 'sales-points'
  },
  learningModel: {
    tr: 'ogrenme-modeli',
    en: 'learning-model',
    de: 'lernmodell',
    ru: 'learning-model',
    ar: 'learning-model'
  },
  profileMethodology: {
    tr: 'profil-metodolojisi',
    en: 'profile-methodology',
    de: 'profil-methodik',
    ru: 'profile-methodology',
    ar: 'profile-methodology'
  },
  contact: {
    tr: 'contact',
    en: 'contact',
    de: 'kontakt',
    ru: 'contact',
    ar: 'contact'
  },
  quote: {
    tr: 'quote',
    en: 'quote',
    de: 'angebot',
    ru: 'quote',
    ar: 'quote'
  },
  videoGallery: {
    tr: 'videolar',
    en: 'videos',
    de: 'videos',
    ru: 'videos',
    ar: 'videos'
  }
};

/**
 * Checks whether a given path is an authentication utility route.
 */
export function isAuthPath(pathname: string): boolean {
  const first = pathname.split('?')[0].split('#')[0].replace(/^\/+|\/+$/g, '').toLowerCase().split('/')[0];
  return (AUTH_ROUTES as readonly string[]).includes(first);
}

/**
 * Analyzes a URL path and extracts its route key, language, and details.
 */
export function parseRouteInfo(pathname: string) {
  const [pathOnly] = pathname.split(/[?#]/);
  let clean = pathOnly.replace(/^\/+|\/+$/g, '').toLowerCase();

  // Check language prefix (only enabled languages are recognized as valid prefixes)
  const segments = clean.split('/').filter(Boolean);
  const firstSeg = segments[0] || '';

  let lang: SupportedLanguage = DEFAULT_LANGUAGE;
  let hasPrefix = false;

  if (isLanguageEnabled(firstSeg) && firstSeg !== DEFAULT_LANGUAGE) {
    lang = firstSeg as SupportedLanguage;
    hasPrefix = true;
    clean = segments.slice(1).join('/');
  } else if (firstSeg === DEFAULT_LANGUAGE) {
    hasPrefix = true;
    clean = segments.slice(1).join('/');
  }

  // Check auth routes
  if (isAuthPath(clean)) {
    const authKey: RouteKey = clean === 'hesabim'
      ? 'profile'
      : clean === 'forgot-password'
      ? 'forgotPassword'
      : clean === 'reset-password'
      ? 'resetPassword'
      : clean === 'verify-email'
      ? 'verifyEmail'
      : (clean as RouteKey);

    return {
      routeKey: authKey,
      productId: null,
      language: lang,
      isAuth: true,
      hasPrefix,
      cleanPath: clean === 'hesabim' ? 'profile' : clean
    };
  }

  // Match known public routes & aliases
  if (clean === '' || clean === 'home' || clean === 'ana-sayfa') {
    return { routeKey: 'home' as RouteKey, productId: null, language: lang, isAuth: false, hasPrefix, cleanPath: '' };
  }
  if (clean === 'about' || clean === 'hakkimizda' || clean === 'ueber-uns' || clean === 'o-nas') {
    return { routeKey: 'about' as RouteKey, productId: null, language: lang, isAuth: false, hasPrefix, cleanPath: 'about' };
  }
  if (clean === 'satis-noktalari' || clean === 'sales-points' || clean === 'bolge-temsilcilerimiz' || clean === 'vertriebsstellen' || clean === 'tochki-prodazh') {
    return { routeKey: 'salesPoints' as RouteKey, productId: null, language: lang, isAuth: false, hasPrefix, cleanPath: 'satis-noktalari' };
  }
  if (clean === 'ogrenme-modeli' || clean === 'learning-model' || clean === 'lernmodell' || clean === 'model-obucheniya') {
    return { routeKey: 'learningModel' as RouteKey, productId: null, language: lang, isAuth: false, hasPrefix, cleanPath: 'ogrenme-modeli' };
  }
  if (clean === 'profil-metodolojisi' || clean === 'profile-methodology' || clean === 'profil-methodik' || clean === 'metodologiya-profilya') {
    return { routeKey: 'profileMethodology' as RouteKey, productId: null, language: lang, isAuth: false, hasPrefix, cleanPath: 'profil-metodolojisi' };
  }
  if (
    clean === 'urunlerimiz' ||
    clean === 'products' ||
    clean === 'solutions' ||
    clean === 'urunler' ||
    clean === 'cozumler' ||
    clean === 'produkte' ||
    clean === 'produkti'
  ) {
    return { routeKey: 'products' as RouteKey, productId: null, language: lang, isAuth: false, hasPrefix, cleanPath: 'urunlerimiz' };
  }
  if (clean === 'contact' || clean === 'iletisim' || clean === 'kontakt' || clean === 'kontakty') {
    return { routeKey: 'contact' as RouteKey, productId: null, language: lang, isAuth: false, hasPrefix, cleanPath: 'contact' };
  }
  if (clean === 'quote' || clean === 'teklif' || clean === 'angebot' || clean === 'zapros-ceny') {
    return { routeKey: 'quote' as RouteKey, productId: null, language: lang, isAuth: false, hasPrefix, cleanPath: 'quote' };
  }
  if (clean === 'videolar' || clean === 'videos' || clean === 'video-galerisi' || clean === 'video') {
    return { routeKey: 'videoGallery' as RouteKey, productId: null, language: lang, isAuth: false, hasPrefix, cleanPath: 'videolar' };
  }

  // Product detail
  const productMatch = clean.match(/^(products|urunler|urunlerimiz|urun|produkte|produkti)\/([^/]+)$/);
  if (productMatch) {
    return {
      routeKey: 'productDetail' as RouteKey,
      productId: productMatch[2],
      language: lang,
      isAuth: false,
      hasPrefix,
      cleanPath: `urunlerimiz/${productMatch[2]}`
    };
  }

  // Default fallback
  return { routeKey: 'home' as RouteKey, productId: null, language: lang, isAuth: false, hasPrefix, cleanPath: '' };
}

/**
 * Returns the localized URL for a target language, preserving search params, hashes,
 * and dynamic product identifiers.
 *
 * Rules:
 * 1. Auth routes remain unprefixed across all languages (e.g. /login).
 * 2. Default language (TR) uses the root without prefix (e.g. /about, /urunlerimiz).
 * 3. Other enabled languages use their prefix (e.g. /en/about, /en/products).
 * 4. Disabled languages (DE, RU, AR) cannot be navigated to; requests safely fall back.
 */
export function getLocalizedPath(targetLanguage: SupportedLanguage, currentFullPath: string): string {
  // If target language is not enabled, do not expose disabled route
  if (!isLanguageEnabled(targetLanguage)) {
    return currentFullPath;
  }

  const searchIndex = currentFullPath.indexOf('?');
  const hashIndex = currentFullPath.indexOf('#');

  let rawPath = currentFullPath;
  let queryAndHash = '';

  const firstSplit = Math.min(
    searchIndex === -1 ? Infinity : searchIndex,
    hashIndex === -1 ? Infinity : hashIndex
  );

  if (firstSplit !== Infinity) {
    rawPath = currentFullPath.substring(0, firstSplit);
    queryAndHash = currentFullPath.substring(firstSplit);
  }

  // Auth routes are never prefixed
  if (isAuthPath(rawPath)) {
    return `${rawPath}${queryAndHash}`;
  }

  const info = parseRouteInfo(rawPath);
  const targetConfig = getLanguageConfig(targetLanguage);
  const prefix = targetConfig.prefix ? `/${targetConfig.prefix}` : '';

  // Product detail route
  if (info.routeKey === 'productDetail' && info.productId) {
    const productBase = targetLanguage === 'en' || targetLanguage === 'ru' || targetLanguage === 'ar' ? 'products' : targetLanguage === 'de' ? 'produkte' : 'urunlerimiz';
    return `${prefix}/${productBase}/${info.productId}${queryAndHash}`;
  }

  // Public route slug mapping
  const slugRecord = ROUTE_SLUGS[info.routeKey as keyof typeof ROUTE_SLUGS];
  const slug = slugRecord ? slugRecord[targetLanguage] : '';

  if (!slug) {
    return `${prefix || '/'}${queryAndHash}`;
  }

  return `${prefix}/${slug}${queryAndHash}`;
}
