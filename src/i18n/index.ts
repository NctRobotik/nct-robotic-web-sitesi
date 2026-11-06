import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './locales/tr.json';
import en from './locales/en.json';
import de from './locales/de.json';
import ru from './locales/ru.json';
import ar from './locales/ar.json';
import {
  DEFAULT_LANGUAGE,
  SupportedLanguage,
  isLanguageEnabled
} from './languages';
import { isAuthPath } from './routing';

/**
 * Translation resources.
 * - Published / active: Turkish (tr), English (en), German (de), Russian (ru), Arabic (ar).
 */
const resources: Record<string, { translation: Record<string, any> }> = {
  tr: { translation: tr },
  en: { translation: en },
  de: { translation: de },
  ru: { translation: ru },
  ar: { translation: ar }
};

/**
 * Locale registration mechanism for future resource files (ru.json, ar.json).
 * Allows modular registration without creating placeholder or fake dictionaries.
 */
export function registerLocaleResource(lang: SupportedLanguage, resource: Record<string, any>): void {
  resources[lang] = { translation: resource };
  if (!i18n.hasResourceBundle(lang, 'translation')) {
    i18n.addResourceBundle(lang, 'translation', resource, true, true);
  }
}

/**
 * Developer preview hook to test unpublished languages (such as German 'de')
 * locally without enabling them in production.
 *
 * Supports:
 * - URL query parameter: ?preview_lang=de or (in dev mode) ?lang=de
 * - localStorage: localStorage.getItem('nct_dev_preview_lang') === 'de'
 * - Console helper: window.__NCT_SET_LANG__('de')
 */
export function getDevPreviewLanguage(): SupportedLanguage | null {
  if (typeof window === 'undefined') return null;
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const param = searchParams.get('preview_lang') || (import.meta.env.DEV ? searchParams.get('lang') : null);
    if (param && (param === 'ar' || param === 'ru' || param === 'de' || param === 'en' || param === 'tr')) {
      return param as SupportedLanguage;
    }
    const devStorage = window.localStorage.getItem('nct_dev_preview_lang');
    if (devStorage && (devStorage === 'ar' || devStorage === 'ru' || devStorage === 'de' || devStorage === 'en' || devStorage === 'tr')) {
      return devStorage as SupportedLanguage;
    }
  } catch {
    // Storage or search parsing unavailable
  }
  return null;
}

// Global console helper for testing unpublished languages in browser devtools
if (typeof window !== 'undefined') {
  (window as any).__NCT_SET_LANG__ = (lang: string) => {
    if (['tr', 'en', 'de', 'ru', 'ar'].includes(lang)) {
      window.localStorage.setItem('nct_dev_preview_lang', lang);
      console.log(`[NCT Dev Preview] Language set to: ${lang}. Reloading page...`);
      window.location.reload();
    } else {
      console.warn(`[NCT Dev Preview] Unsupported language: ${lang}. Valid options: 'tr', 'en', 'de', 'ru', 'ar'`);
    }
  };
  (window as any).__NCT_CLEAR_DEV_LANG__ = () => {
    window.localStorage.removeItem('nct_dev_preview_lang');
    console.log('[NCT Dev Preview] Preview cleared. Reloading page...');
    window.location.reload();
  };
}

/**
 * Resolves the initial active language from URL prefix, stored auth preference, or default.
 * Disabled or unknown language codes safely fall back to DEFAULT_LANGUAGE ('tr').
 */
export function resolveInitialLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  // Development / Preview mode check
  const devPreview = getDevPreviewLanguage();
  if (devPreview) {
    return devPreview;
  }

  const pathname = window.location.pathname;
  if (isAuthPath(pathname)) {
    try {
      const saved = window.localStorage.getItem('nct_language');
      if (saved && isLanguageEnabled(saved)) {
        return saved as SupportedLanguage;
      }
    } catch {
      // Storage unavailable
    }
    return DEFAULT_LANGUAGE;
  }

  // Check URL prefix for enabled languages
  const firstSegment = pathname.split('/').filter(Boolean)[0] || '';
  if (isLanguageEnabled(firstSegment) && firstSegment !== DEFAULT_LANGUAGE) {
    return firstSegment as SupportedLanguage;
  }

  return DEFAULT_LANGUAGE;
}

i18n.use(initReactI18next).init({
  resources,
  lng: resolveInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false }
});

export default i18n;
