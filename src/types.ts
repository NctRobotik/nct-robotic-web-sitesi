export interface ProductImage {
  url: string;
  alt?: string;
}

export interface ProductColor {
  name: string;
  hex: string;
  images: ProductImage[];
}

export interface TechnicalDetail {
  group: string;
  label: string;
  value: string;
}

export interface UseCase {
  title: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  slug?: string;
  primaryCategory: string;
  categories: string[];
  price?: number;
  shortDescription: string;
  longDescriotion?: string;
  longDescription?: string;
  image: string;
  images?: ProductImage[];
  colors?: ProductColor[];
  specs?: string[];
  technicalDetails?: TechnicalDetail[];
  videoUrl?: string;
  useCases?: UseCase[];
  inStock?: boolean;

  // Backwards compatibility fields
  shortDesc?: string;
  tag?: string;
  category?: 'education' | 'industrial' | string;
  imageUrl?: string;
  detailedSpecs?: {
    processor?: string;
    battery?: string;
    audio?: string;
    language?: string;
    useCase?: string;
  };
}

export interface VideoItem {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  organization?: string;
  category: string;
  videoUrl: string;
  featured: boolean;
  order: number;
}

export interface FeatureCard {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  badgeBg: string;
  iconColor: string;
}

export interface StatItem {
  value: string;
  label: string;
  iconName: string;
}

export interface InfoBarItem {
  title: string;
  subtitle: string;
  iconName: string;
}
