import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './locales/tr.json';
import en from './locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    en: { translation: en }
  },
  // Public pages follow the URL; existing auth URLs retain the saved language.
  lng: (() => {
    const pathname = window.location.pathname;
    const isAuthPath = /^\/(login|signup|profile|hesabim|forgot-password|reset-password|verify-email)(\/|$)/.test(pathname);
    if (isAuthPath) {
      try {
        return window.localStorage.getItem('nct_language') === 'en' ? 'en' : 'tr';
      } catch {
        return 'tr';
      }
    }
    return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'tr';
  })(),
  fallbackLng: 'tr',
  interpolation: { escapeValue: false }
});
export default i18n;