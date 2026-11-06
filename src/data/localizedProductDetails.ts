import type { Product } from '../types';
import i18n from '../i18n';

export const localizedColorName = (name: string, language?: string): string => {
  const lang = (language || i18n.resolvedLanguage || i18n.language || 'tr').toLowerCase();
  const currentLang = lang.startsWith('en') ? 'en' : 'tr';
  return i18n.t(`products.colors.${name}`, { lng: currentLang, defaultValue: name });
};

export function getLocalizedProductDetails(product: Product, language?: string): Product {
  const lang = (language || i18n.resolvedLanguage || i18n.language || 'tr').toLowerCase();
  const currentLang = lang.startsWith('en') ? 'en' : 'tr';
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
