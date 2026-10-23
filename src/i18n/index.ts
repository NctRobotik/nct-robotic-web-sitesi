import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: {
      navigation: { home: 'Ana Sayfa', products: 'Ürünlerimiz', learningModel: 'Öğrenme Modeli', about: 'Hakkımızda', salesPoints: 'Satış Noktaları', contact: 'İletişim', getQuote: 'Teklif Al' },
      account: { signedIn: 'Giriş Yapıldı', myAccount: 'Hesabım', logout: 'Çıkış Yap', login: 'Giriş Yap', account: 'Hesap' }
    } },
    en: { translation: {
      navigation: { home: 'Home', products: 'Products', learningModel: 'Learning Model', about: 'About Us', salesPoints: 'Sales Locations', contact: 'Contact', getQuote: 'Get a Quote' },
      account: { signedIn: 'Signed In', myAccount: 'My Account', logout: 'Log Out', login: 'Log In', account: 'Account' }
    } }
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