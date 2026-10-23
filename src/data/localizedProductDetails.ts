import type { Product } from '../types';

// English translations are keyed by stable product IDs. Turkish source objects stay untouched.
const details: Record<string, { specs: string[]; technicalValues: string[]; cases: [string, string][] }> = {
  'orbit-pix': {
    specs: ['2-year warranty', '2 years of software and updates included', 'Parent–student mobile app', 'Over-the-air (OTA) updates', 'Subject-specific revision', 'AI-powered homework guidance', 'Interactive English speaking practice', 'Voice-based learning experience', 'Support for 49+ languages'],
    technicalValues: ['2 years included (OTA updates)', 'Voice-based revision in school subjects', 'Guides students through homework', 'Interactive English conversation practice', 'Activity tracking via the parent–student app', 'Voice interaction via microphone and speaker', 'Desktop learning robot', 'Available', 'OTA supported'],
    cases: [['School Subjects', 'Supports learning through revision in Turkish, mathematics, science, social studies and other subjects.'], ['Homework Support', 'Guides students through homework and answers their spoken questions to support learning.'], ['English Conversation Practice', 'Helps students improve spoken English through AI-powered interactive dialogue.'], ['Parent Monitoring', 'The parent–student mobile app makes it possible to follow robot interactions and learning progress.']]
  },
  'orbit-s': {
    specs: ['AI-powered voice interaction and natural-language processing', 'Multilingual communication', 'Python, ROS and Orbit block coding support', 'Fully autonomous navigation with cameras, LiDAR, IMU, RFID and distance sensors', 'LiDAR-assisted autonomous mapping', 'Management via mobile app and instructor dashboard', 'Suitable for education, healthcare, tourism, exhibitions and events'],
    technicalValues: ['Camera, LiDAR, IMU, RFID, temperature and distance sensors', '6-hour battery life', 'Fully autonomous mobile platform (LiDAR and mapping)', 'Voice interaction and natural-language processing', 'Orbit block coding, Python and ROS', 'Mobile app and instructor dashboard', 'Remote updates supported', 'Available', 'Available', 'Available'],
    cases: [['Education', 'Robotics education with block coding, Python and ROS.'], ['Healthcare', 'Voice dialogue with patients, preliminary assessment and guidance scenarios.'], ['Tourism', 'Guest reception, wayfinding and multilingual information.'], ['Exhibitions & Events', 'Visitor reception, QR interactions, surveys and brand visibility.']]
  },
  'orbit-lite': {
    specs: ['AI-powered voice interaction and natural-language processing', 'Multilingual communication', 'Python, ROS and Orbit block coding support', 'Camera, IMU, RFID and distance sensors (no LiDAR)', 'Remote management via mobile app and instructor dashboard', 'Suitable for education, healthcare, tourism, exhibitions and events'],
    technicalValues: ['Camera, IMU, RFID, temperature and distance sensors (no LiDAR)', '6-hour battery life', 'Remote-controlled / manual operation (not autonomous)', 'Voice interaction and natural-language processing', 'Orbit block coding, Python and ROS', 'Mobile app and instructor dashboard', 'Remote updates supported', 'Available', 'Available', 'Available'],
    cases: [['Education', 'Robotics education with block coding, Python and ROS.'], ['Healthcare', 'Voice dialogue with patients, preliminary assessment and guidance scenarios.'], ['Tourism', 'Guest reception, wayfinding and multilingual information.'], ['Exhibitions & Events', 'Visitor reception, QR interactions, surveys and brand visibility.']]
  },
  'orbit-bloom': {
    specs: ['AI assistant for pregnancy', 'Information tailored to the week of pregnancy', 'Voice-based Q&A', 'Mobile app synchronization', 'Reminders and routine tracking', 'Support for 49+ languages'],
    technicalValues: ['Smart touchscreen', 'Microphone and speaker', 'Suitable for home and clinical environments', 'Pregnancy support assistant', '49+ languages', 'Weekly pregnancy content', 'Customizable tracking system', 'iOS & Android', 'Available', 'Available', 'OTA supported'],
    cases: [['Pregnancy Tracking', 'Information, suggestions and guidance tailored to each week of pregnancy.'], ['Daily Reminders', 'Reminders for appointments, hydration, exercise and routine checkups.'], ['Voice Assistant', 'Answers expectant mothers’ questions in natural language.'], ['Mobile App Integration', 'Synchronizes with a mobile app to make tracking easier.']]
  },
  'amr': {
    specs: ['Fully autonomous navigation', 'SLAM-based mapping', 'Obstacle detection and avoidance', 'Task and route management', 'Factory and warehouse integration', '24/7 operational support'],
    technicalValues: ['LiDAR + IMU', 'LiDAR, IMU and distance sensors', 'Optional', 'Industrial battery system', 'SLAM', 'Automatic task scheduling', 'Multi-robot support', 'Remote updates', 'Available', 'Available', 'Web-based', 'Supported'],
    cases: [['In-Factory Transport', 'Autonomously transports materials and semi-finished goods between production lines.'], ['Warehouse Operations', 'Improves logistics efficiency in storage and order-picking processes.'], ['Logistics Centers', 'Accelerates intralogistics operations and reduces human error.'], ['Smart Manufacturing', 'Supports production processes through integration with Industry 4.0 infrastructure.']]
  },
  'nct-serve': {
    specs: ['Autonomous navigation system', 'Multi-level service and transport shelves', 'Touchscreen interface', 'Obstacle detection and avoidance', 'Suitable for restaurants, hotels and hospitals', '24/7 operational support'],
    technicalValues: ['10.1-inch touchscreen', 'LiDAR, ultrasonic and collision sensors', 'Three-tier service shelf', 'Extended operating time', 'Autonomous route planning', 'SLAM supported', 'Multi-task support', 'OTA supported', 'Available', 'Web-based', 'Available', 'Available'],
    cases: [['Restaurants', 'Delivers food and beverages quickly and safely.'], ['Hotels', 'Provides room service and other deliveries for guests.'], ['Hospitals', 'Helps transport medication, documents and medical supplies.'], ['Offices & Workplaces', 'Transports documents, parcels and other materials within organizations.']]
  },
  'nct-guide': {
    specs: ['Touchscreen interface', 'Visitor reception and wayfinding', 'Interactive information display', 'Autonomous navigation', 'Multilingual support', 'Designed for institutional environments'],
    technicalValues: ['15.6-inch touchscreen', 'LiDAR and obstacle detection sensors', 'Autonomous mobile platform', 'Extended operating time', 'Autonomous route planning', 'Interactive user interface', '49+ languages', 'OTA supported', 'Available', 'Web-based', 'Available'],
    cases: [['Hospitals', 'Wayfinding for patients and visitors.'], ['Shopping Malls', 'Guidance to stores and floors.'], ['Exhibitions', 'Visitor reception and information services.'], ['Hotels', 'Guest reception and information services.']]
  }
};

const labels: Record<string, string> = {
  'Genel': 'General', 'Yazılım': 'Software', 'Donanım': 'Hardware', 'Bağlantı': 'Connectivity',
  'Yazılım & Güncelleme': 'Software & Updates', 'Konu Tekrarı': 'Revision', 'Ödev Desteği': 'Homework Support',
  'İngilizce Diyalog': 'English Dialogue', 'Veli Takibi': 'Parent Monitoring', 'Sesli Etkileşim': 'Voice Interaction',
  'Kullanım Tipi': 'Usage Type', 'Uzaktan Güncelleme': 'Remote Updates', 'Sensörler': 'Sensors',
  'Batarya': 'Battery', 'Hareket': 'Movement', 'Yapay Zekâ': 'Artificial Intelligence', 'Kodlama': 'Coding',
  'Yönetim': 'Management', 'Güncelleme': 'Updates', 'Mobil Uygulama': 'Mobile App', 'Eğitmen Paneli': 'Instructor Dashboard',
  'Uzaktan Yönetim': 'Remote Management', 'Ekran': 'Display', 'Ses Sistemi': 'Audio System', 'Kullanım': 'Usage',
  'Dil Desteği': 'Language Support', 'Bilgilendirme': 'Information', 'Hatırlatmalar': 'Reminders',
  'Bulut Senkronizasyonu': 'Cloud Synchronization', 'Navigasyon': 'Navigation', 'Taşıma Kapasitesi': 'Load Capacity',
  'Haritalama': 'Mapping', 'Görev Yönetimi': 'Task Management', 'Filo Yönetimi': 'Fleet Management',
  'Uzaktan İzleme': 'Remote Monitoring', 'Yönetim Paneli': 'Management Dashboard', 'ERP / MES Entegrasyonu': 'ERP / MES Integration',
  'Raf Sayısı': 'Number of Shelves', 'Karşılama Sistemi': 'Reception System', 'Çoklu Dil': 'Multilingual Support',
  'Bildirim Sistemi': 'Notification System', 'Wi-Fi': 'Wi-Fi'
};

const colorNames: Record<string, string> = { 'Mavi': 'Blue', 'Turuncu': 'Orange', 'Lime Yeşili': 'Lime Green', 'Gold': 'Gold' };
export const localizedColorName = (name: string, language: string) => language.startsWith('en') ? (colorNames[name] || name) : name;

export function getLocalizedProductDetails(product: Product, language: string): Product {
  if (!language.startsWith('en')) return product;
  const data = details[product.id];
  if (!data) return product;
  return {
    ...product,
    specs: product.specs?.map((s, i) => data.specs[i] ?? s),
    technicalDetails: product.technicalDetails?.map((item, i) => ({ ...item,
      group: labels[item.group] ?? item.group,
      label: labels[item.label] ?? item.label,
      value: data.technicalValues[i] ?? item.value,
    })),
    useCases: product.useCases?.map((item, i) => ({ ...item,
      title: data.cases[i]?.[0] ?? item.title,
      description: data.cases[i]?.[1] ?? item.description,
    })),
  };
}
