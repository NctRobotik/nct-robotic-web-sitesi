import type { Product } from '../types';
import i18n from '../i18n';
import { isLanguageEnabled, SupportedLanguage } from '../i18n/languages';

const resolveLang = (language?: string): SupportedLanguage => {
  const code = (language || i18n.resolvedLanguage || i18n.language || 'tr').toLowerCase().split('-')[0] as SupportedLanguage;
  return isLanguageEnabled(code) ? code : 'tr';
};

export const localizedColorName = (name: string, language?: string): string => {
  const currentLang = resolveLang(language);
  return i18n.t(`products.colors.${name}`, { lng: currentLang, defaultValue: name });
};

export function getLocalizedProductDetails(product: Product, language?: string): Product {
  const currentLang = resolveLang(language);
  const item = i18n.t(`products.items.${product.id}`, { lng: currentLang, returnObjects: true }) as {
    specs?: string[];
    technicalDetails?: Array<{ group: string; label: string; value: string }>;
    useCases?: Array<{ title: string; description: string }>;
  } | undefined;

  if (!item || typeof item !== 'object') return product;

  return {
    ...product,
    specs: Array.isArray(item.specs) ? item.specs : product.specs,
    technicalDetails: Array.isArray(item.technicalDetails) ? item.technicalDetails : product.technicalDetails,
    useCases: Array.isArray(item.useCases)
      ? item.useCases.map((uc, i) => ({
          ...(product.useCases?.[i] || { image: '' }),
          title: uc.title ?? product.useCases?.[i]?.title ?? '',
          description: uc.description ?? product.useCases?.[i]?.description ?? '',
          image: product.useCases?.[i]?.image ?? '',
        }))
      : product.useCases,
  };
}
