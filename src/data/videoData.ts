// updated videoData.ts
export type VideoCategory =
  | "kurum"
  | "urun-tanitimi"
  | "yabanci-dil"
  | "egitim"
  | "kurucu-anlatimi";

export interface NctVideoItem {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  organization?: string;
  category: VideoCategory;
  videoUrl: string;
  featured: boolean;
  order: number;
}

export const NCT_VIDEOS: NctVideoItem[] = [
  { id:"orbit-pix-turkce-matematik", title:"Türkçe ve Matematik", shortTitle:"Türkçe & Matematik", description:"Orbit Pix ile öğrencilerin Türkçe ve Matematik derslerinde gerçekleştirdiği etkileşimli öğrenme deneyimleri.", category:"egitim", videoUrl:"/videos/products/orbit-pix-turkce-matematik.mp4", featured:false, order:1 },

  { id:"orbit-pix-velihan",  title:"Pix ve Velihan", shortTitle:"Pix Velihan ile ingilizce sohbet ediyor.", description:"Orbit Pix ile öğrencilerin İngilizce konuşma pratiğini ve aktif dil kullanımını destekleyen yapay zekâ destekli etkileşim.", category: "urun-tanitimi", videoUrl:"/videos/products/pix-velihan.mp4", featured:false, order:2},

  { id:"orbit-pix-sinifta",  title:"Pix Yabancı Dil Sınıfında", shortTitle:"Pix İngilizce Yabancı Dil Merkezinde.", description:"Orbit Pix’in yabancı dil kurslarında öğrencilerle sınıf içi İngilizce iletişimi", category: "kurum", 
  organization:"East to West", videoUrl:"/videos/products/pix-sinif.mp4", featured:false, order:3},

  { id:"karaman-basari-koleji", title:"Karaman Başarı Koleji", shortTitle:"Başarı Koleji", description:"Orbit robotlarının Karaman Başarı Koleji’ndeki gerçek sınıf içi kullanım görüntüleri.", organization:"Karaman Başarı Koleji", category:"kurum", videoUrl:"/videos/institutions/karaman-basari-koleji.mp4", featured:false, order:4 },

  { id:"orbit-pix-tanitim", title:"Orbit Pix Tanıtımı", shortTitle:"Orbit Pix", description:"Orbit Pix’in öne çıkan özelliklerini ve öğrencilerle kurduğu etkileşimli öğrenme deneyimini keşfedin.", category:"urun-tanitimi", videoUrl:"/videos/products/orbit-pix-tanitim.mp4", featured:true, order:5 },

  { id:"tek-kampus", title:"Tek Kampüs", shortTitle:"Tek Kampüs", description:"Orbit robotlarının Tek Kampüs’teki eğitim süreçlerine nasıl katkı sağladığını gösteren gerçek kullanım görüntüleri.", organization:"Tek Kampüs", category:"kurum", videoUrl:"/videos/institutions/tek-kampus.mp4", featured:false, order:6 },

  { id:"nct-mucit-atolyesi", title:"NCT Mucit Atölyesi", shortTitle:"Mucit Atölyesi", description:"NCT Mucit Atölyesi’nde Orbit robotlarıyla gerçekleştirilen uygulamalı eğitim deneyimleri.", organization:"NCT Mucit Atölyesi", category:"kurum", videoUrl:"/videos/institutions/nct-mucit-atolyesi.mp4", featured:false, order:7 },

  { id:"east-to-west", title:"East to West Yabancı Dil Merkezi", shortTitle:"East to West", description:"Orbit robotlarının East to West Yabancı Dil Merkezi’nde yabancı dil eğitimine katkı sağladığı gerçek uygulamalar.", organization:"East to West", category:"kurum", videoUrl:"/videos/institutions/east-to-west.mp4", featured:false, order:8 },

  { id:"orbit-s-yabanci-dil", title:"Orbit-S ile Yabancı Dil Eğitimi", shortTitle:"Yabancı Dil Eğitimi", description:"Orbit-S’nin yabancı dil kurslarında öğrencilerle etkileşim kurduğu gerçek eğitim senaryoları.", category:"yabanci-dil", videoUrl:"/videos/institutions/orbit-s-yabanci-dil.mp4", featured:false, order:9},

  { id:"zeplin-cocuk-akademisi", title:"Zeplin Çocuk Akademisi'nde Orbit", shortTitle:"Zeplin Çocuk Akademisi", description:"Zeplin Çocuk Akademisi’nde Orbit robotlarının öğrencilerle gerçekleştirdiği gerçek eğitim deneyimleri.", organization:"Zeplin Çocuk Akademisi", category:"kurum", videoUrl:"/videos/institutions/zeplin-cocuk-akademisi.mp4", featured:true, order:10 },

  { id:"orbit-pix-genel-kultur", title:"Genel Kültür", shortTitle:"Genel Kültür", description:"Orbit Pix ile öğrencilerin genel kültür ve merak odaklı öğrenme süreçlerinden örnekler.", category:"egitim", videoUrl:"/videos/products/orbit-pix-genel-kultur.mp4", featured:false, order:11 },

  { id:"orbit-pix-yapay-zeka", title:"Yapay Zekâ Desteği", shortTitle:"Yapay Zekâ", description:"Orbit Pix’in yapay zekâ destekli öğrenme deneyimini ve doğal sesli etkileşim özelliklerini keşfedin.", category:"urun-tanitimi", videoUrl:"/videos/products/orbit-pix-yapay-zeka.mp4", featured:false, order:12 },
  
  { id:"prof-dr-ismail-ovali", title:"Prof. Dr. İsmail Ovalı", shortTitle:"Kurucu", description:"NCT Robotik Kurucusu Prof. Dr. İsmail Ovalı’dan şirketin vizyonu, teknolojileri ve gelecek hedefleri.", category:"kurucu-anlatimi", videoUrl:"/videos/founder/prof-dr-ismail-ovali.mp4", featured:true, order:13},

  { id:"east-to-west-ingilizce", title:"Orbit-S East To West Kurumlarında", shortTitle:"Yabancı Dil", description:"Orbit-S aktif diyolog kurma özelliği sayesinde kurumunuzda ingilizce pratiğinizi destekler.", category:"yabanci-dil",organization:"East To West", videoUrl:"/videos/institutions/eastTowest-orbits.mp4", featured:true, order:14}
];

export const FEATURED_NCT_VIDEOS = NCT_VIDEOS.filter(v => v.featured);
export const getVideosByCategory = (category: VideoCategory) =>
  NCT_VIDEOS.filter(v => v.category === category);





