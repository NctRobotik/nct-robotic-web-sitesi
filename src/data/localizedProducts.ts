import type { Product } from '../types';
import { PRODUCTS_LIST } from './nctData';
import i18n from '../i18n';
import { isLanguageEnabled, SupportedLanguage } from '../i18n/languages';

const categoryKeyMap: Record<string, string> = {
  'Eğitim Robotları': 'educationRobots',
  'Sağlık Robotları': 'healthRobots',
  'Hizmet Robotları': 'serviceRobots',
  'Endüstriyel Robotlar': 'industrialRobots',
  'Eğitim Robotu': 'educationRobot',
  'Endüstriyel Robot': 'industrialRobot',
  'Hizmet Robotu': 'serviceRobot',
  'Mobil Robot': 'mobileRobot',
  'Eğitim': 'education',
  'Endüstri': 'industry',
  'Hizmet': 'service',
  'Lojistik': 'logistics',
};

const resolveLang = (language?: string): SupportedLanguage => {
  const code = (language || i18n.resolvedLanguage || i18n.language || 'tr').toLowerCase().split('-')[0] as SupportedLanguage;
  return isLanguageEnabled(code) ? code : 'tr';
};

export const getLocalizedCategory = (category: string, language?: string): string => {
  const currentLang = resolveLang(language);
  const key = categoryKeyMap[category];
  return key ? i18n.t(`products.categories.${key}`, { lng: currentLang, defaultValue: category }) : category;
};

export const getLocalizedProduct = (product: Product, language?: string): Product => {
  const currentLang = resolveLang(language);
  const item = i18n.t(`products.items.${product.id}`, { lng: currentLang, returnObjects: true }) as {
    tag?: string;
    shortDescription?: string;
    shortDesc?: string;
    longDescription?: string;
  } | undefined;

  const localizeCat = (c: string) => getLocalizedCategory(c, currentLang);

  if (!item || typeof item !== 'object') {
    return {
      ...product,
      primaryCategory: localizeCat(product.primaryCategory),
      categories: product.categories?.map(localizeCat),
    };
  }

  return {
    ...product,
    shortDescription: item.shortDescription || product.shortDescription,
    shortDesc: item.shortDesc || item.shortDescription || product.shortDesc,
    longDescriotion: item.longDescription || product.longDescriotion,
    longDescription: item.longDescription || product.longDescription,
    tag: item.tag || product.tag,
    primaryCategory: localizeCat(product.primaryCategory),
    categories: product.categories?.map(localizeCat),
  };
};

export const getLocalizedProducts = (language?: string): Product[] =>
  PRODUCTS_LIST.map(product => getLocalizedProduct(product, language));
