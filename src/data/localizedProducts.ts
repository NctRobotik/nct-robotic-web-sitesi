import type { Product } from '../types';
import { PRODUCTS_LIST } from './nctData';

// Keep Turkish source data unchanged. English copy is selected at render time.
const englishCopy: Record<string, { short: string; long: string; tag: string }> = {
  "orbit-pix": {
    "short": "An AI-powered learning companion that adapts to each student across school subjects.",
    "long": "Orbit Pix is a desktop learning robot that personalizes support based on a student’s learning style, current level, and study progress. It helps with revision, homework, and problem-solving through guiding questions and step-by-step hints rather than simply giving answers. Its learning profile evolves with the student. It also offers English conversation practice from A1 to C2, while a parent–student mobile app helps families follow learning activity and progress.",
    "tag": "Ages 6+"
  },
  "orbit-s": {
    "short": "An AI-powered, fully autonomous robot platform.",
    "long": "Orbit-S is a versatile, fully autonomous platform for education, healthcare, tourism, exhibitions, and events. It combines voice interaction, natural-language processing, multilingual communication, cameras, LiDAR, IMU, RFID and other sensors with SLAM-based mapping to support intelligent institutional applications.",
    "tag": "Pro"
  },
  "orbit-lite": {
    "short": "An AI-powered, remotely operated mobile robot platform.",
    "long": "Orbit-S Lite is a versatile mobile robot for education, healthcare, tourism, exhibitions, and events. It supports voice interaction, natural-language processing, multilingual communication, and sensors including cameras, IMU and RFID. It does not support autonomous driving, LiDAR or mapping, and is operated manually or by remote control.",
    "tag": "Lite"
  },
  "orbit-bloom": {
    "short": "An AI-powered digital health assistant supporting expectant mothers throughout pregnancy.",
    "long": "Orbit Bloom helps expectant mothers access pregnancy-related information, manage routine check-ins, and interact by voice. Features include daily reminders, week-by-week pregnancy content, mobile-app integration, and multilingual communication.",
    "tag": "Health"
  },
  "amr": {
    "short": "Smart, efficient intralogistics with an autonomous mobile transport robot.",
    "long": "The Autonomous Mobile Robot (AMR) is designed to automate material transport in warehouses, production facilities, factories, and logistics centers. With advanced sensors and autonomous navigation, it detects its surroundings, travels safely, and performs assigned tasks without continuous human intervention.",
    "tag": "Industrial"
  },
  "nct-serve": {
    "short": "An intelligent service robot designed for autonomous delivery and transport.",
    "long": "NCT Serve is an autonomous service robot for safely transporting food, beverages, documents, and other items in restaurants, cafés, hotels, hospitals, and workplaces. Its navigation system, multi-tier shelves, and touchscreen help streamline service and reduce staff workload.",
    "tag": "Service"
  },
  "nct-guide": {
    "short": "An intelligent service robot for welcoming, guiding, and informing visitors.",
    "long": "NCT Guide is an autonomous service robot for visitor reception, information, and wayfinding in shopping centers, hospitals, exhibitions, hotels, public institutions, and workplaces. Its touchscreen, interactive interface, and autonomous mobility improve the visitor experience and reduce staff workload.",
    "tag": "Guide"
  }
};

const categoryNames: Record<string, string> = {
  'Eğitim Robotları': 'Educational Robots',
  'Sağlık Robotları': 'Healthcare Robots',
  'Hizmet Robotları': 'Service Robots',
  'Endüstriyel Robotlar': 'Industrial Robots',
  'Eğitim Robotu': 'Educational Robot',
};

export const getLocalizedProduct = (product: Product, language: string): Product => {
  if (!language.startsWith('en')) return product;
  const copy = englishCopy[product.id];
  if (!copy) return product;
  return {
    ...product,
    shortDescription: copy.short,
    shortDesc: copy.short,
    longDescriotion: copy.long,
    tag: copy.tag,
    primaryCategory: categoryNames[product.primaryCategory] ?? product.primaryCategory,
    categories: product.categories?.map(c => categoryNames[c] ?? c),
  };
};

export const getLocalizedProducts = (language: string): Product[] =>
  PRODUCTS_LIST.map(product => getLocalizedProduct(product, language));
