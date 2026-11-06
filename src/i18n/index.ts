import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './locales/tr.json';
import en from './locales/en.json';
import {
  DEFAULT_LANGUAGE,
  SupportedLanguage,
  isLanguageEnabled
} from './languages';
import { isAuthPath } from './routing';

/**
 * Initial active translation resources for published languages (TR & EN).
 * Future languages (DE, RU, AR) will be registered dynamically via registerLocaleResource()
 * once their translation files are completed and approved.
 */
const resources: Record<string, { translation: Record<string, any> }> = {
  tr: { translation: tr },
  en: { translation: en }
};

/**
 * Locale registration mechanism for future resource files (de.json, ru.json, ar.json).
 * Allows modular registration without creating placeholder or fake dictionaries.
 */
export function registerLocaleResource(lang: SupportedLanguage, resource: Record<string, any>): void {
  resources[lang] = { translation: resource };
  if (!i18n.hasResourceBundle(lang, 'translation')) {
    i18n.addResourceBundle(lang, 'translation', resource, true, true);
  }
}

/**
 * Resolves the initial active language from URL prefix, stored auth preference, or default.
 * Disabled or unknown language codes safely fall back to DEFAULT_LANGUAGE ('tr').
 */
export function resolveInitialLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

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
