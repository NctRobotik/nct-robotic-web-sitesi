import { Product } from '../types';

export const ROBOT_DATA: Product[] = [
  {
    id: "orbit-pix",
    name: "Orbit Pix",
    primaryCategory: "Eğitim Robotları",
    categories: [
      "Eğitim Robotları"
    ],
    price: 49999,
    shortDescription: "Branş derslerinde konu tekrarı, ödev desteği ve İngilizce konuşma pratiği sunan yapay zekâ destekli eğitim koçu.",
    longDescriotion: "Orbit Pix, öğrencilerin branş derslerinde konu tekrarından ödev yardımına kadar öğrenme süreçlerini desteklemek amacıyla geliştirilmiş yapay zekâ destekli masaüstü eğitim robotudur. Öğrenciyle doğal sesli etkileşim kurarak dersleri tekrar etmesine, ödevlerinde rehberlik almasına ve bilgilerini pekiştirmesine yardımcı olur. İngilizce aktif diyalog kurma yeteneği sayesinde konuşma pratiği yapılmasını sağlar. Ayrıca NCT Robotik tarafından geliştirilen veli-öğrenci mobil uygulaması üzerinden öğrencinin robotla olan etkileşimi ve kullanım geçmişi kolayca takip edilebilir.",
    image: "/orbit-pix-on.png",
    images: [
      {
        url: "/orbit-pix-on.png",
        alt: "Orbit Pix Ön Görünüm"
      },
      {
        url: "/orbit-pix-1.png",
        alt: "Orbit Pix Yan Görünüm"
      },
      {
        url: "/orbit-pix-2.png",
        alt: "Orbit Pix Kullanım Senaryosu"
      },
      {
        url: "/dort-renk.png",
        alt: "Orbit Pix Kullanım Senaryosu"
      }
    ],
    colors: [
      // {
      //   name: "Gold",
      //   hex: "#E7C898",
      //   images: [
      //     {
      //       url: "/gold-pix-on.png",
      //       alt: "Orbit Pix Gold Ön Görünüm"
      //     },
      //     {
      //       url: "/gold-pix-arka.png",
      //       alt: "Orbit Pix Gold Arka Görünüm"
      //     },
      //     {
      //       url: "/gold-pix-sag.png",
      //       alt: "Orbit Pix Gold Sağ Görünüm"
      //     },
      //     {
      //       url: "/gold-pix-izo.png",
      //       alt: "Orbit Pix Gold İzometrik Görünüm"
      //     },
      //     {
      //       url: "/dort-renk.png",
      //       alt: "Orbit Pix Kullanım Senaryosu"
      //     },
      //     {
      //       url: "/orbit pix- insanlı.png",
      //       alt: "Orbit Pix Kullanım Senaryosu"
      //     }
      //   ]
      // },
      {
        name: "Mavi",
        hex: "#0059E8",
        images: [
          {
            url: "/mavi-pix-on.png",
            alt: "Orbit Pix Mavi Ön Görünüm"
          },
          {
            url: "/mavi-pix-arka.png",
            alt: "Orbit Pix Mavi Arka Görünüm"
          },
          {
            url: "/mavi-pix-sag.png",
            alt: "Orbit Pix Mavi Sağ Görünüm"
          },
          {
            url: "/mavi-pix-izo.png",
            alt: "Orbit Pix Mavi İzometrik Görünüm"
          },
          {
            url: "/dort-renk.png",
            alt: "Orbit Pix Kullanım Senaryosu"
          },
          {
            url: "/orbit pix- insanlı.png",
            alt: "Orbit Pix Kullanım Senaryosu"
          }
        ]
      },
      {
        name: "Turuncu",
        hex: "#F78200",
        images: [
          {
            url: "/turuncu-pix-on.png",
            alt: "Orbit Pix Turuncu Ön Görünüm"
          },
          {
            url: "/turuncu-pix-arka.png",
            alt: "Orbit Pix Turuncu Arka Görünüm"
          },
          {
            url: "/turuncu-pix-sag.png",
            alt: "Orbit Pix Turuncu Sağ Görünüm"
          },
          {
            url: "/turuncu-pix-izo.png",
            alt: "Orbit Pix Turuncu İzometrik Görünüm"
          },
          {
            url: "/dort-renk.png",
            alt: "Orbit Pix Kullanım Senaryosu"
          },
          {
            url: "/orbit pix- insanlı.png",
            alt: "Orbit Pix Kullanım Senaryosu"
          }
        ]
      },
      {
        name: "Lime Yeşili",
        hex: "#B9D500",
        images: [
          {
            url: "/yeşil-pix-on.png",
            alt: "Orbit Pix Lime Yeşili Ön Görünüm"
          },
          {
            url: "/yeşil-pix-arka.png",
            alt: "Orbit Pix Lime Yeşili Arka Görünüm"
          },
          {
            url: "/yeşil-pix-sag.png",
            alt: "Orbit Pix Lime Yeşili Sağ Görünüm"
          },
          {
            url: "/yeşil-pix-izo.png",
            alt: "Orbit Pix Lime Yeşili İzometrik Görünüm"
          },
          {
            url: "/dort-renk.png",
            alt: "Orbit Pix Kullanım Senaryosu"
          },
          {
            url: "/orbit pix- insanlı.png",
            alt: "Orbit Pix Kullanım Senaryosu"
          }
        ]
      }
    ],
    specs: [
      "Branş derslerinde konu tekrarı",
      "Ödev yardımına yapay zekâ desteği",
      "İngilizce aktif konuşma pratiği",
      "Sesli etkileşimli eğitim deneyimi",
      "Veli-öğrenci mobil uygulaması",
      "49+ dil desteği"
    ],
    technicalDetails: [
      {
        group: "Yazılım",
        label: "Konu Tekrarı",
        value: "Branş derslerinde sesli konu tekrarı desteği"
      },
      {
        group: "Yazılım",
        label: "Ödev Desteği",
        value: "Öğrencinin ödev süreçlerine rehberlik eder"
      },
      {
        group: "Yazılım",
        label: "İngilizce Diyalog",
        value: "Aktif diyalog kurarak İngilizce konuşma pratiği sağlar"
      },
      {
        group: "Yazılım",
        label: "Veli Takibi",
        value: "Veli-öğrenci uygulaması üzerinden kullanım takibi sunar"
      },
      {
        group: "Donanım",
        label: "Sesli Etkileşim",
        value: "Mikrofon ve hoparlör desteğiyle sesli iletişim kurar"
      },
      {
        group: "Donanım",
        label: "Kullanım Tipi",
        value: "Masaüstü eğitim robotu"
      },
      {
        group: "Bağlantı",
        label: "Wi-Fi",
        value: "Var"
      },
      {
        group: "Bağlantı",
        label: "Uzaktan Güncelleme",
        value: "OTA Desteği"
      }
    ],
    videoUrl: "https://www.youtube.com/watch?v=srMI3GBKOXA",
    useCases: [
      {
        title: "Branş Dersleri",
        description: "Türkçe, Matematik, Fen Bilimleri, Sosyal Bilgiler ve diğer derslerde konu tekrarı yaparak öğrencinin öğrenmesini destekler.",
        image: "/robots/orbit-pix/use-subjects.png"
      },
      {
        title: "Ödev Yardımcısı",
        description: "Ödev süreçlerinde öğrenciye rehberlik eder, sorularını sesli olarak yanıtlar ve öğrenme sürecini destekler.",
        image: "/robots/orbit-pix/use-homework.png"
      },
      {
        title: "İngilizce Konuşma Pratiği",
        description: "Yapay zekâ destekli aktif diyalog kurarak öğrencinin İngilizce konuşma becerisini geliştirmesine yardımcı olur.",
        image: "/robots/orbit-pix/use-english.png"
      },
      {
        title: "Veli Takip Sistemi",
        description: "Veli-öğrenci mobil uygulaması sayesinde öğrencinin robotla olan etkileşimi ve gelişimi takip edilebilir.",
        image: "/robots/orbit-pix/use-parent-app.png"
      }
    ],
    inStock: true,
    shortDesc: "Branş derslerinde konu tekrarı, ödev desteği ve İngilizce konuşma pratiği sunan yapay zekâ destekli eğitim koçu.",
    tag: "6+ yaş",
    category: "education",
    imageUrl: "/orbit-pix-on.png"
  },
  {
    id: "orbit-s",
    name: "Orbit-S Pro",
    primaryCategory: "Eğitim Robotları",
    categories: [
      "Eğitim Robotları",
      "Sağlık Robotları",
      "Hizmet Robotları"
    ],
    price: 684999,
    shortDescription: "Yapay zekâ destekli tam otonom robot platformu.",
    longDescriotion: "Orbit-S, eğitimden sağlığa, turizmden fuar ve etkinliklere kadar farklı senaryolarda görev alabilen çok amaçlı tam otonom robot platformudur. Sesli etkileşim, doğal dil işleme, çok dilli iletişim, kamera, LIDAR, IMU ve RFID gibi gelişmiş sensör altyapısı ve SLAM tabanlı haritalandırma özellikleri sayesinde kurumlara akıllı ve tam otonom bir deneyim sunar.",
    image: "/orbit-s-on.png",
    images: [
      {
        url: "/orbit-s-on.png",
        alt: "Orbit-S ön görünüm"
      },
      {
        url: "/orbit-s-1.png",
        alt: "Orbit-S ön ve arka görünüm"
      },
      {
        url: "/orbit-s-2.png",
        alt: "Orbit-S ön ve arka görünüm"
      },
      {
        url: "/orbit-s_insanli.jpeg",
        alt: "Orbit-S ön ve arka görünüm"
      }
    ],
    specs: [
      "Yapay zekâ ile sesli etkileşim ve doğal dil işleme",
      "Çok dilli iletişim desteği",
      "Python, ROS ve Orbit Blok Kodlama desteği",
      "Kamera, LIDAR, IMU, RFID ve mesafe sensörleri ile tam otonom sürüş",
      "LIDAR destekli otonom haritalandırma yapabilme",
      "Mobil uygulama ve eğitmen paneli ile yönetim",
      "Eğitim, sağlık, turizm, fuar ve etkinlik kullanımına uygun"
    ],
    technicalDetails: [
      {
        group: "Donanım",
        label: "Sensörler",
        value: "Kamera, LIDAR, IMU, RFID, sıcaklık ve mesafe sensörleri"
      },
      {
        group: "Donanım",
        label: "Batarya",
        value: "6 saat pil süresi"
      },
      {
        group: "Donanım",
        label: "Hareket",
        value: "Tam otonom mobil robot platformu (LIDAR & Haritalandırma özellikli)"
      },
      {
        group: "Yazılım",
        label: "Yapay Zekâ",
        value: "Sesli etkileşim ve doğal dil işleme"
      },
      {
        group: "Yazılım",
        label: "Kodlama",
        value: "Orbit Blok Kodlama, Python ve ROS desteği"
      },
      {
        group: "Yazılım",
        label: "Yönetim",
        value: "Mobil uygulama ve eğitmen paneli"
      },
      {
        group: "Yazılım",
        label: "Güncelleme",
        value: "Uzaktan güncelleme desteği"
      },
      {
        group: "Bağlantı",
        label: "Mobil Uygulama",
        value: "Var"
      },
      {
        group: "Bağlantı",
        label: "Eğitmen Paneli",
        value: "Var"
      },
      {
        group: "Bağlantı",
        label: "Uzaktan Yönetim",
        value: "Var"
      }
    ],
    videoUrl: "",
    useCases: [
      {
        title: "Eğitim",
        description: "Blok kodlama, Python ve ROS destekli robotik eğitim senaryoları.",
        image: "/robots/orbit-s/use-education.png"
      },
      {
        title: "Sağlık",
        description: "Hasta ile sesli diyalog, ön değerlendirme ve yönlendirme senaryoları.",
        image: "/robots/orbit-s/use-health.png"
      },
      {
        title: "Turizm",
        description: "Misafir karşılama, yönlendirme ve çok dilli tanıtım deneyimi.",
        image: "/robots/orbit-s/use-tourism.png"
      },
      {
        title: "Fuar & Etkinlik",
        description: "Ziyaretçi karşılama, QR etkileşimi, anket ve marka görünürlüğü.",
        image: "/robots/orbit-s/use-event.png"
      }
    ],
    inStock: true,
    shortDesc: "Yapay zekâ destekli tam otonom robot platformu.",
    tag: "Pro",
    category: "education",
    imageUrl: "/orbit-s-on.png"
  },
  {
    id: "orbit-lite",
    name: "Orbit-S Lite",
    primaryCategory: "Eğitim Robotları",
    categories: [
      "Eğitim Robotları",
      "Sağlık Robotları",
      "Hizmet Robotları"
    ],
    price: 456999,
    shortDescription: "Yapay zekâ destekli uzaktan kontrollü mobil robot platformu.",
    longDescriotion: "Orbit-Lite, eğitimden sağlığa, turizmden fuar ve etkinliklere kadar farklı senaryolarda görev alabilen çok amaçlı mobil robot platformudur. Sesli etkileşim, doğal dil işleme, çok dilli iletişim, kamera, IMU ve RFID gibi sensör altyapılarıyla kurumlara akıllı ve etkileşimli bir deneyim sunar. Otonom sürüş, LIDAR ve haritalandırma özellikleri bulunmaz; manuel veya uzaktan kumanda ile yönlendirilir.",
    image: "/orbit-lite-on.png",
    images: [
      {
        url: "/orbit-lite-on.png",
        alt: "Orbit-Lite ön görünüm"
      },
      {
        url: "/lite-yan.png",
        alt: "Orbit-Lite ön ve arka görünüm"
      },
      {
        url: "/orbit-s_insanli.jpeg",
        alt: "Orbit-Pro ön ve arka görünüm"
      }
    ],
    specs: [
      "Yapay zekâ ile sesli etkileşim ve doğal dil işleme",
      "Çok dilli iletişim desteği",
      "Python, ROS ve Orbit Blok Kodlama desteği",
      "Kamera, IMU, RFID ve mesafe sensörleri (LIDAR bulunmaz)",
      "Mobil uygulama ve eğitmen paneli ile uzaktan yönetim",
      "Eğitim, sağlık, turizm, fuar ve etkinlik kullanımına uygun"
    ],
    technicalDetails: [
      {
        group: "Donanım",
        label: "Sensörler",
        value: "Kamera, IMU, RFID, sıcaklık ve mesafe sensörleri (LIDAR bulunmaz)"
      },
      {
        group: "Donanım",
        label: "Batarya",
        value: "6 saat pil süresi"
      },
      {
        group: "Donanım",
        label: "Hareket",
        value: "Uzaktan kontrollü / Manuel sürüş (Otonom sürüş özelliği bulunmaz)"
      },
      {
        group: "Yazılım",
        label: "Yapay Zekâ",
        value: "Sesli etkileşim ve doğal dil işleme"
      },
      {
        group: "Yazılım",
        label: "Kodlama",
        value: "Orbit Blok Kodlama, Python ve ROS desteği"
      },
      {
        group: "Yazılım",
        label: "Yönetim",
        value: "Mobil uygulama ve eğitmen paneli"
      },
      {
        group: "Yazılım",
        label: "Güncelleme",
        value: "Uzaktan güncelleme desteği"
      },
      {
        group: "Bağlantı",
        label: "Mobil Uygulama",
        value: "Var"
      },
      {
        group: "Bağlantı",
        label: "Eğitmen Paneli",
        value: "Var"
      },
      {
        group: "Bağlantı",
        label: "Uzaktan Yönetim",
        value: "Var"
      }
    ],
    videoUrl: "",
    useCases: [
      {
        title: "Eğitim",
        description: "Blok kodlama, Python ve ROS destekli robotik eğitim senaryoları.",
        image: "/robots/orbit-s/use-education.png"
      },
      {
        title: "Sağlık",
        description: "Hasta ile sesli diyalog, ön değerlendirme ve yönlendirme senaryoları.",
        image: "/robots/orbit-s/use-health.png"
      },
      {
        title: "Turizm",
        description: "Misafir karşılama, yönlendirme ve çok dilli tanıtım deneyimi.",
        image: "/robots/orbit-s/use-tourism.png"
      },
      {
        title: "Fuar & Etkinlik",
        description: "Ziyaretçi karşılama, QR etkileşimi, anket ve marka görünürlüğü.",
        image: "/robots/orbit-s/use-event.png"
      }
    ],
    inStock: true,
    shortDesc: "Yapay zekâ destekli uzaktan kontrollü mobil robot platformu.",
    tag: "Lite",
    category: "education",
    imageUrl: "/orbit-lite-on.png"
  },
  {
    id: "orbit-bloom",
    name: "Orbit Bloom",
    primaryCategory: "Sağlık Robotları",
    categories: [
      "Sağlık Robotları"
    ],
    price: 49999,
    shortDescription: "Hamilelik sürecinde anne adaylarına rehberlik eden yapay zekâ destekli dijital sağlık asistanı.",
    longDescriotion: "Orbit Bloom, hamilelik sürecinde anne adaylarının ihtiyaç duyduğu bilgilere kolay erişim sağlayan, rutin takiplerini destekleyen ve sesli etkileşim sunan yapay zekâ destekli bir sağlık asistanıdır. Günlük hatırlatmalar, gebelik haftasına özel içerikler, mobil uygulama entegrasyonu ve çok dilli iletişim özellikleriyle anne adaylarına süreç boyunca eşlik eder.",
    image: "/orbit-bloom-on-resmi.png",
    images: [
      {
        url: "/orbit-bloom-on-resmi.png",
        alt: "Orbit Bloom Ön Görünüm"
      },
      {
        url: "/orbit-bloom-2.png",
        alt: "Orbit Bloom Detay Görünümü"
      },
      {
        url: "/orbit-bloom-3.png",
        alt: "Orbit Bloom Yan Görünüm"
      }
    ],
    specs: [
      "Hamilelik sürecine özel yapay zekâ asistanı",
      "Gebelik haftasına uygun içerik ve bilgilendirme",
      "Sesli soru-cevap desteği",
      "Mobil uygulama senkronizasyonu",
      "Hatırlatma ve rutin takip sistemi",
      "49+ dil desteği"
    ],
    technicalDetails: [
      {
        group: "Donanım",
        label: "Ekran",
        value: "Dokunmatik Akıllı Ekran"
      },
      {
        group: "Donanım",
        label: "Ses Sistemi",
        value: "Mikrofon + Hoparlör"
      },
      {
        group: "Donanım",
        label: "Kullanım",
        value: "Ev ve klinik ortamına uygun"
      },
      {
        group: "Yazılım",
        label: "Yapay Zekâ",
        value: "Gebelik Destek Asistanı"
      },
      {
        group: "Yazılım",
        label: "Dil Desteği",
        value: "49+ Dil"
      },
      {
        group: "Yazılım",
        label: "Bilgilendirme",
        value: "Haftalık Gebelik İçerikleri"
      },
      {
        group: "Yazılım",
        label: "Hatırlatmalar",
        value: "Kişiselleştirilebilir Takip Sistemi"
      },
      {
        group: "Bağlantı",
        label: "Mobil Uygulama",
        value: "iOS & Android"
      },
      {
        group: "Bağlantı",
        label: "Wi-Fi",
        value: "Var"
      },
      {
        group: "Bağlantı",
        label: "Bulut Senkronizasyonu",
        value: "Var"
      },
      {
        group: "Bağlantı",
        label: "Uzaktan Güncelleme",
        value: "OTA Desteği"
      }
    ],
    videoUrl: "",
    useCases: [
      {
        title: "Hamilelik Takibi",
        description: "Gebelik haftasına özel bilgi, öneri ve yönlendirmeler sunar.",
        image: "/robots/orbit-pix/use-pregnancy.png"
      },
      {
        title: "Günlük Hatırlatmalar",
        description: "Randevu, su tüketimi, egzersiz ve rutin kontroller için hatırlatmalar sağlar.",
        image: "/robots/orbit-pix/use-reminders.png"
      },
      {
        title: "Sesli Asistan",
        description: "Anne adaylarının sorularını doğal dil ile yanıtlar.",
        image: "/robots/orbit-pix/use-voice.png"
      },
      {
        title: "Mobil Uygulama Entegrasyonu",
        description: "Mobil uygulama ile senkron çalışarak tüm sürecin takibini kolaylaştırır.",
        image: "/robots/orbit-pix/use-app.png"
      }
    ],
    inStock: true,
    shortDesc: "Hamilelik sürecinde anne adaylarına rehberlik eden yapay zekâ destekli dijital sağlık asistanı.",
    tag: "Sağlık",
    category: "education",
    imageUrl: "/orbit-bloom-on-resmi.png"
  },
  {
    id: "amr",
    name: "AMR",
    primaryCategory: "Endüstriyel Robotlar",
    categories: [
      "Endüstriyel Robotlar"
    ],
    price: 459999,
    shortDescription: "Otonom mobil taşıma robotu ile akıllı ve verimli iç lojistik çözümleri.",
    longDescriotion: "AMR (Autonomous Mobile Robot), depo, üretim tesisi, fabrika ve lojistik merkezlerinde malzeme taşıma süreçlerini otonom hale getirmek için geliştirilmiştir. Gelişmiş sensör yapısı ve otonom navigasyon altyapısı sayesinde çevresini algılar, güvenli şekilde hareket eder ve belirlenen görevleri insan müdahalesi olmadan yerine getirir.",
    image: "/amr-1.png",
    images: [
      {
        url: "/amr-1.png",
        alt: "AMR Genel Görünüm"
      },
      {
        url: "/amr-2.png",
        alt: "AMR Fabrika Kullanımı"
      },
      {
        url: "/amr-3.png",
        alt: "AMR Lojistik Senaryosu"
      }
    ],
    specs: [
      "Tam otonom navigasyon",
      "SLAM tabanlı haritalama",
      "Engel algılama ve kaçınma",
      "Görev ve rota yönetimi",
      "Fabrika ve depo entegrasyonu",
      "7/24 kesintisiz operasyon desteği"
    ],
    technicalDetails: [
      {
        group: "Donanım",
        label: "Navigasyon",
        value: "LIDAR + IMU"
      },
      {
        group: "Donanım",
        label: "Sensörler",
        value: "LIDAR, IMU, Mesafe Sensörleri"
      },
      {
        group: "Donanım",
        label: "Taşıma Kapasitesi",
        value: "Opsiyonel"
      },
      {
        group: "Donanım",
        label: "Batarya",
        value: "Endüstriyel Batarya Sistemi"
      },
      {
        group: "Yazılım",
        label: "Haritalama",
        value: "SLAM"
      },
      {
        group: "Yazılım",
        label: "Görev Yönetimi",
        value: "Otomatik Görev Planlama"
      },
      {
        group: "Yazılım",
        label: "Filo Yönetimi",
        value: "Çoklu Robot Desteği"
      },
      {
        group: "Yazılım",
        label: "Güncelleme",
        value: "Uzaktan Güncelleme"
      },
      {
        group: "Bağlantı",
        label: "Wi-Fi",
        value: "Var"
      },
      {
        group: "Bağlantı",
        label: "Uzaktan İzleme",
        value: "Var"
      },
      {
        group: "Bağlantı",
        label: "Yönetim Paneli",
        value: "Web Tabanlı"
      },
      {
        group: "Bağlantı",
        label: "ERP / MES Entegrasyonu",
        value: "Desteklenir"
      }
    ],
    videoUrl: "",
    useCases: [
      {
        title: "Fabrika İçi Taşıma",
        description: "Üretim hatları arasında malzeme ve yarı mamul taşımalarını otonom olarak gerçekleştirir.",
        image: "/robots/amr/use-factory.png"
      },
      {
        title: "Depo Operasyonları",
        description: "Depolama ve sipariş hazırlama süreçlerinde lojistik verimliliği artırır.",
        image: "/robots/amr/use-warehouse.png"
      },
      {
        title: "Lojistik Merkezleri",
        description: "İç lojistik süreçlerini hızlandırır ve insan kaynaklı hataları azaltır.",
        image: "/robots/amr/use-logistics.png"
      },
      {
        title: "Akıllı Üretim",
        description: "Endüstri 4.0 altyapıları ile entegre çalışarak üretim süreçlerini destekler.",
        image: "/robots/amr/use-industry.png"
      }
    ],
    inStock: true,
    shortDesc: "Otonom mobil taşıma robotu ile akıllı ve verimli iç lojistik çözümleri.",
    tag: "Endüstriyel",
    category: "industrial",
    imageUrl: "/amr-1.png"
  },
  {
    id: "nct-serve",
    name: "NCT Serve",
    primaryCategory: "Hizmet Robotları",
    categories: [
      "Hizmet Robotları",
      "Sağlık Robotları"
    ],
    price: 399999,
    shortDescription: "Otonom servis ve teslimat görevleri için geliştirilmiş akıllı servis robotu.",
    longDescriotion: "NCT Serve; restoran, kafe, otel, hastane ve kurumsal alanlarda yiyecek, içecek, evrak ve çeşitli materyallerin güvenli şekilde taşınmasını sağlayan otonom servis robotudur. Gelişmiş navigasyon sistemi, çok katlı taşıma rafları ve dokunmatik ekranı sayesinde işletmelerde operasyonel verimliliği artırır, servis süreçlerini hızlandırır ve personel iş yükünü azaltır.",
    image: "/servis-robot-1.png",
    images: [
      {
        url: "/servis-robot-1.png",
        alt: "NCT Serve Ön Görünüm"
      },
      {
        url: "/servis-robot-2.png",
        alt: "NCT Serve Yan Görünüm"
      }
    ],
    specs: [
      "Otonom navigasyon sistemi",
      "Çok katlı servis ve taşıma rafları",
      "Dokunmatik ekran arayüzü",
      "Engel algılama ve kaçınma",
      "Restoran, otel ve hastane kullanımına uygun",
      "7/24 kesintisiz çalışma desteği"
    ],
    technicalDetails: [
      {
        group: "Donanım",
        label: "Ekran",
        value: "10.1 İnç Dokunmatik Ekran"
      },
      {
        group: "Donanım",
        label: "Sensörler",
        value: "LIDAR, Ultrasonik ve Çarpışma Sensörleri"
      },
      {
        group: "Donanım",
        label: "Raf Sayısı",
        value: "3 Katlı Servis Rafı"
      },
      {
        group: "Donanım",
        label: "Batarya",
        value: "Uzun Süreli Çalışma"
      },
      {
        group: "Yazılım",
        label: "Navigasyon",
        value: "Otonom Rota Planlama"
      },
      {
        group: "Yazılım",
        label: "Haritalama",
        value: "SLAM Destekli"
      },
      {
        group: "Yazılım",
        label: "Görev Yönetimi",
        value: "Çoklu Görev Desteği"
      },
      {
        group: "Yazılım",
        label: "Uzaktan Güncelleme",
        value: "OTA Desteği"
      },
      {
        group: "Bağlantı",
        label: "Wi-Fi",
        value: "Var"
      },
      {
        group: "Bağlantı",
        label: "Yönetim Paneli",
        value: "Web Tabanlı"
      },
      {
        group: "Bağlantı",
        label: "Uzaktan İzleme",
        value: "Var"
      },
      {
        group: "Bağlantı",
        label: "Bildirim Sistemi",
        value: "Var"
      }
    ],
    videoUrl: "",
    useCases: [
      {
        title: "Restoran",
        description: "Yemek ve içecek servislerini hızlı ve güvenli şekilde gerçekleştirir.",
        image: "/robots/nct-serve/use-restaurant.png"
      },
      {
        title: "Otel",
        description: "Misafirlere oda servisi ve çeşitli teslimat hizmetleri sunar.",
        image: "/robots/nct-serve/use-hotel.png"
      },
      {
        title: "Hastane",
        description: "İlaç, evrak ve tıbbi malzemelerin taşınmasına yardımcı olur.",
        image: "/robots/nct-serve/use-hospital.png"
      },
      {
        title: "Ofis ve Kurumsal Alanlar",
        description: "Evrak, paket ve çeşitli materyallerin kurum içinde taşınmasını sağlar.",
        image: "/robots/nct-serve/use-office.png"
      }
    ],
    inStock: true,
    shortDesc: "Otonom servis ve teslimat görevleri için geliştirilmiş akıllı servis robotu.",
    tag: "Servis",
    category: "industrial",
    imageUrl: "/servis-robot-1.png"
  },
  {
    id: "nct-guide",
    name: "NCT Guide",
    primaryCategory: "Hizmet Robotları",
    categories: [
      "Hizmet Robotları"
    ],
    price: 379999,
    shortDescription: "Karşılama, yönlendirme ve bilgilendirme görevleri için geliştirilmiş akıllı hizmet robotu.",
    longDescriotion: "NCT Guide; alışveriş merkezleri, hastaneler, fuarlar, oteller, kamu kurumları ve kurumsal alanlarda ziyaretçileri karşılamak, bilgi vermek ve yönlendirmek amacıyla geliştirilmiş otonom hizmet robotudur. Dokunmatik ekranı, etkileşimli arayüzü ve otonom hareket kabiliyeti sayesinde kullanıcı deneyimini geliştirirken personel yükünü azaltır.",
    image: "/tek-servis-1.png",
    images: [
      {
        url: "/tek-servis-4.png",
        alt: "NCT Guide AVM Kullanımı"
      },
      {
        url: "/tek-servis-1.png",
        alt: "NCT Guide Ön Görünüm"
      },
      {
        url: "/tek-servis-2.png",
        alt: "NCT Guide Yan Görünüm"
      },
      {
        url: "/tek-servis-3.png",
        alt: "NCT Guide Hastane Kullanımı"
      },
      {
        url: "/tek-servis-5.png",
        alt: "NCT Guide Hastane Kullanımı"
      }
    ],
    specs: [
      "Dokunmatik ekran arayüzü",
      "Ziyaretçi karşılama ve yönlendirme",
      "İnteraktif bilgi ekranı",
      "Otonom navigasyon sistemi",
      "Çok dilli kullanım desteği",
      "Kurumsal alanlara uygun tasarım"
    ],
    technicalDetails: [
      {
        group: "Donanım",
        label: "Ekran",
        value: "15.6 İnç Dokunmatik Ekran"
      },
      {
        group: "Donanım",
        label: "Sensörler",
        value: "LIDAR ve Engel Algılama Sensörleri"
      },
      {
        group: "Donanım",
        label: "Hareket",
        value: "Otonom Mobil Platform"
      },
      {
        group: "Donanım",
        label: "Batarya",
        value: "Uzun Süreli Çalışma"
      },
      {
        group: "Yazılım",
        label: "Navigasyon",
        value: "Otonom Rota Planlama"
      },
      {
        group: "Yazılım",
        label: "Karşılama Sistemi",
        value: "İnteraktif Kullanıcı Arayüzü"
      },
      {
        group: "Yazılım",
        label: "Çoklu Dil",
        value: "49+ Dil Desteği"
      },
      {
        group: "Yazılım",
        label: "Uzaktan Güncelleme",
        value: "OTA Desteği"
      },
      {
        group: "Bağlantı",
        label: "Wi-Fi",
        value: "Var"
      },
      {
        group: "Bağlantı",
        label: "Yönetim Paneli",
        value: "Web Tabanlı"
      },
      {
        group: "Bağlantı",
        label: "Uzaktan İzleme",
        value: "Var"
      }
    ],
    videoUrl: "",
    useCases: [
      {
        title: "Hastane",
        description: "Hasta ve ziyaretçi yönlendirme hizmetleri.",
        image: "/robots/nct-guide/use-hospital.png"
      },
      {
        title: "AVM",
        description: "Mağaza ve kat yönlendirme çözümleri.",
        image: "/robots/nct-guide/use-mall.png"
      },
      {
        title: "Fuar",
        description: "Karşılama ve ziyaretçi bilgilendirme hizmetleri.",
        image: "/robots/nct-guide/use-fair.png"
      },
      {
        title: "Otel",
        description: "Misafir karşılama ve bilgi hizmetleri.",
        image: "/robots/nct-guide/use-hotel.png"
      }
    ],
    inStock: true,
    shortDesc: "Karşılama, yönlendirme ve bilgilendirme görevleri için geliştirilmiş akıllı hizmet robotu.",
    tag: "Rehber",
    category: "industrial",
    imageUrl: "/tek-servis-1.png"
  }
];
