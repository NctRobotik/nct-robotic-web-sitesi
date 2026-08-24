import { Product, FeatureCard, StatItem, InfoBarItem } from '../types';
import { ROBOT_DATA } from './robotData';

export { ROBOT_DATA };
export const PRODUCTS_LIST: Product[] = ROBOT_DATA;

export const HERO_FEATURE_CARDS: FeatureCard[] = [
  {
    id: 'f1',
    title: '%100 Güvenli AI',
    subtitle: 'Çocuk güvenliğini odağına alan %100 kapalı ve güvenli sistem',
    iconName: 'ShieldCheck',
    badgeBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: 'f2',
    title: 'Akıllı Sohbet ve Öğrenme',
    subtitle: 'Doğal Türkçe dil işleme ve kişiselleştirilmiş eğitim',
    iconName: 'MessageSquareSparkles',
    badgeBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    id: 'f3',
    title: 'Hızlı ve Güçlü Donanım',
    subtitle: 'Yapay zeka işlemcisi ile anında tepki ve akıcı etkileşim',
    iconName: 'Cpu',
    badgeBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 'f4',
    title: 'Uzun Pil Ömrü ve Kesintisiz Öğrenme',
    subtitle: 'Tüm gün kesintisiz çalışma ve akıllı şarj takibi',
    iconName: 'BatteryCharging',
    badgeBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
];

export const HERO_INFO_BAR: InfoBarItem[] = [
  {
    title: 'Türkçe Konuşur',
    subtitle: 'Akıllı Anlar',
    iconName: 'Mic',
  },
  {
    title: '1–8. Sınıf',
    subtitle: 'Tüm Dersler',
    iconName: 'GraduationCap',
  },
  {
    title: 'Güvenli',
    subtitle: 'Çocuk Dostu',
    iconName: 'Shield',
  },
  {
    title: '49 Dil',
    subtitle: 'Destekler',
    iconName: 'Languages',
  },
  {
    title: 'Yerli Yapay Zeka',
    subtitle: '%100 Güvenli',
    iconName: 'CheckCircle2',
  },
];



export const STATS_LIST: StatItem[] = [
  {
    value: '49',
    label: 'Desteklenen Dil',
    iconName: 'Globe',
  },
  {
    value: '1–8',
    label: 'Sınıf Desteği',
    iconName: 'GraduationCap',
  },
  {
    value: '15+',
    label: 'Eğitim Robotu',
    iconName: 'Bot',
  },
  {
    value: '%100',
    label: 'Yerli ve Güvenli',
    iconName: 'ShieldCheck',
  },
  {
    value: '2018',
    label: 'Kuruluş Yılı',
    iconName: 'Award',
  },
];

export const TECHNICAL_HIGHLIGHTS = [
  {
    title: '6 Mikrofon Dizilimi',
    subtitle: 'Net Ses Algılama',
    desc: 'Odadaki çocuk sesini arka plan gürültüsünden ayırarak 360 derece hassas algılar.',
  },
  {
    title: 'Yapay Zeka İşlemcisi',
    subtitle: 'Hızlı ve Güçlü Hesaplama',
    desc: 'Cihaz içi yapay zeka çipi sayesinde milisaniyeler içinde doğal Türkçe cevaplar üretir.',
  },
  {
    title: 'Uzun Pil Ömrü',
    subtitle: 'Kesintisiz Performans',
    desc: 'Optimize edilmiş lityum batarya yönetimi ile tüm gün kesintisiz öğrenme deneyimi sunar.',
  },
  {
    title: 'Yerli Yazılım Altyapısı',
    subtitle: 'Güvenli Sistem',
    desc: 'Siber güvenlik ve KVKK uyumlu %100 yerli yazılım mimarisiyle çocuk mahreriyetini korur.',
  },
];
