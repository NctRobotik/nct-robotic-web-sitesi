import React from 'react';
import { Eye, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ModalShell, ModalHeader, ModalBody } from './ModalOverlaySystem';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: 'privacy' | 'kvkk';
  setActiveTab: (tab: 'privacy' | 'kvkk') => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
}) => {
  if (!isOpen) return null;

  const getLegalContent = (tab: 'privacy' | 'kvkk') => {
    switch (tab) {
      case "privacy":
        return {
          title: "Gizlilik Politikası",
          subtitle:
            "Kişisel verilerinizin ve kurumsal bilgi sistemlerinizin güvenliği en hassas olduğumuz konudur.",
          icon: <Eye className="h-8 w-8 text-slate-700" />,
          content: (
            <div className="space-y-6 text-slate-600 leading-relaxed text-sm font-sans">
              <p>
                NCT Robotik olarak müşterilerimizin, ziyaretçilerimizin ve iş
                ortaklarımızın kişisel verilerinin gizliliğine ve güvenliğine
                önem veriyoruz.
              </p>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  KAMPANYA VE BİLGİLENDİRME
                </h4>
                <p className="text-xs text-slate-500 mb-2">
                  Kullanıcılarımıza ürünler, kampanyalar, etkinlikler, eğitimler
                  ve yeni hizmetler hakkında e-posta, SMS veya telefon
                  aracılığıyla bilgilendirme yapılabilir.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  KİŞİSEL BİLGİLERİN GÜVENLİĞİ
                </h4>
                <p className="text-xs text-slate-500 mb-2">
                  Toplanan kişisel veriler yalnızca hizmetlerin sunulması,
                  sipariş süreçlerinin yürütülmesi, teknik destek sağlanması ve
                  yasal yükümlülüklerin yerine getirilmesi amacıyla
                  kullanılmaktadır.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  IP ADRESLERİNİN KULLANIMI
                </h4>
                <p className="text-xs text-slate-500 mb-2">
                  IP adresleri sistem güvenliğinin sağlanması, teknik sorunların
                  tespiti ve hizmet kalitesinin artırılması amacıyla kayıt
                  altına alınabilir.
                </p>
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  KREDİ KARTI GÜVENLİĞİ
                </h4>
                <p className="text-xs text-slate-500 mb-2">
                  Online ödeme işlemlerinde kullanılan kredi kartı bilgileri
                  tarafımızca kaydedilmez, saklanmaz veya görüntülenmez. Ödeme
                  işlemleri yetkili ödeme kuruluşları tarafından
                  gerçekleştirilir.
                </p>
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  SSL GÜVENLİĞİ
                </h4>
                <p className="text-xs text-slate-500 mb-2">
                  Web sitemiz SSL güvenlik sertifikası kullanmaktadır. Böylece
                  kullanıcı ile sunucu arasındaki veri aktarımı şifrelenerek
                  korunur.
                </p>
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  1. TOPLANAN BİLGİLER
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ad ve soyad</li>
                  <li>Telefon numarası</li>
                  <li>E-posta adresi</li>
                  <li>Teslimat ve fatura adresleri</li>
                  <li>Sipariş bilgileri</li>
                  <li>Ödeme bilgileri</li>
                  <li>Teknik destek kayıtları</li>
                  <li>IP adresi ve çerez bilgileri</li>
                </ul>
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  2. BİLGİLERİN KULLANIM AMAÇLARI
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sipariş işlemlerinin yürütülmesi</li>
                  <li>Ürün teslimatlarının gerçekleştirilmesi</li>
                  <li>Teknik destek hizmetlerinin sunulması</li>
                  <li>Garanti ve servis işlemlerinin yürütülmesi</li>
                  <li>Fatura düzenlenmesi</li>
                  <li>Hizmet kalitesinin geliştirilmesi</li>
                </ul>
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  3. VERİLERİN ÜÇÜNCÜ TARAFLARLA PAYLAŞILMASI
                </h4>
                <p className="text-xs text-slate-500 mb-2">
                  Kişisel bilgileriniz yalnızca yasal yükümlülükler, ödeme
                  kuruluşları, kargo firmaları ve gerekli hizmet sağlayıcılarla
                  paylaşılabilir.
                </p>
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  4. ÇEREZLER
                </h4>
                <p className="text-xs text-slate-500 mb-2">
                  Web sitemiz kullanıcı deneyimini geliştirmek amacıyla çerezler
                  kullanabilir.
                </p>
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  5. KVKK KAPSAMINDAKİ HAKLARINIZ
                </h4>
                <p className="text-xs text-slate-500 mb-2">
                  6698 Sayılı KVKK kapsamında kişisel verilerinize ilişkin bilgi
                  alma, düzeltme, silme ve itiraz etme haklarına sahipsiniz.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mt-4">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Gizlilik politikamız ile ilgili herhangi bir güncelleme
                  yapılması halinde, bu sayfa üzerinde yayınlanacaktır. Her
                  türlü gizlilik ve güvenlik sorunuz için{" "}
                  <a
                    href="mailto:info@nctrobotic.com"
                    className="font-sans text-slate-900 underline font-extrabold tracking-tight"
                  >
                    info@nctrobotic.com
                  </a>{" "}
                  adresiyle irtibata geçebilirsiniz.
                </p>
              </div>
            </div>
          ),
        };

      case "kvkk":
        return {
          title: "K.V.K.K. Aydınlatma Metni",
          subtitle:
            "Kişisel Verilerin Korunması Kanunu kapsamında haklarınız, verilerin işleniş usulleri ve açık rıza beyanı.",
          icon: <ShieldCheck className="h-8 w-8 text-slate-700" />,
          content: (
            <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
              <p>
                6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında
                kişisel verileriniz, veri sorumlusu sıfatıyla İsmail OVALI / NCT
                DANIŞMANLIK tarafından işlenebilecektir.
              </p>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  1. Kişisel Verilerinizin İşlenme Amacı
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sipariş süreçlerinin yürütülmesi</li>
                  <li>Ürün teslimatlarının gerçekleştirilmesi</li>
                  <li>Teknik servis ve garanti hizmetlerinin sunulması</li>
                  <li>Muhasebe ve faturalandırma işlemlerinin yürütülmesi</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                  <li>Müşteri ilişkilerinin yönetilmesi</li>
                  <li>Bilgi güvenliğinin sağlanması</li>
                  <li>
                    Kampanya ve bilgilendirme faaliyetlerinin yürütülmesi (açık
                    rıza halinde)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  2. İşlenen Kişisel Veriler
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ad ve Soyad</li>
                  <li>T.C. Kimlik Numarası (gerekli durumlarda)</li>
                  <li>Telefon Numarası</li>
                  <li>E-posta Adresi</li>
                  <li>Teslimat ve Fatura Adresi</li>
                  <li>Sipariş Bilgileri</li>
                  <li>Ödeme Bilgileri</li>
                  <li>Teknik Servis ve Garanti Kayıtları</li>
                  <li>IP Adresi ve Çerez Verileri</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi
                </h4>
                <p>
                  Kişisel verileriniz internet sitesi, sipariş formları, e-posta
                  yazışmaları, telefon görüşmeleri, teknik servis başvuruları ve
                  ödeme sistemleri aracılığıyla elektronik veya fiziki ortamda
                  toplanabilmektedir.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  5. Kişisel Verilerin Aktarılması
                </h4>
                <p>
                  Kişisel verileriniz aşağıda belirtilen kişi ve kuruluşlara,
                  ilgili mevzuatta öngörülen şartlar ve KVKK'nın 8. ve 9.
                  maddeleri kapsamında aktarılabilir:
                </p>

                <ul className="list-disc pl-6 space-y-1">
                  <li>Yetkili kamu kurum ve kuruluşlarına</li>
                  <li>Mahkemelere ve icra müdürlüklerine</li>
                  <li>Mali müşavir ve muhasebe hizmet sağlayıcılarına</li>
                  <li>Kargo ve lojistik firmalarına</li>
                  <li>Ödeme kuruluşlarına</li>
                  <li>Bankalara</li>
                  <li>Bilgi teknolojileri hizmet sağlayıcılarına</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  6. Kişisel Verilerin Saklanması ve Güvenliği
                </h4>
                <p>
                  Kişisel verileriniz güvenlik duvarları, erişim kontrol
                  sistemleri ve şifreleme yöntemleri ile korunmaktadır. Saklama
                  süresi sonunda veriler silinir, yok edilir veya anonim hale
                  getirilir.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  7. KVKK Kapsamındaki Haklarınız
                </h4>
                <p>
                  6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 11. maddesi
                  uyarınca, kişisel verilerinizle ilgili olarak aşağıdaki
                  haklara sahipsiniz:
                </p>

                <ul className="list-disc pl-6 space-y-1">
                  <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
                  <li>
                    Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,
                  </li>
                  <li>
                    Kişisel verilerin işlenme amacını ve bunların amacına uygun
                    kullanılıp kullanılmadığını öğrenme,
                  </li>
                  <li>
                    Yurt içinde veya yurt dışındaki kişisel verilerin aktarıldığı
                    üçüncü kişileri bilme,
                  </li>
                  <li>
                    Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde
                    bunların düzeltilmesini isteme,
                  </li>
                  <li>
                    KVKK'da öngörülen şartlar çerçevesinde kişisel verilerin
                    silinmesini veya yok edilmesini isteme,
                  </li>
                  <li>
                    Düzeltme, silme veya yok etme işlemlerinin kişisel verilerin
                    aktarıldığı üçüncü kişilere bildirilmesini isteme,
                  </li>
                  <li>
                    İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla
                    analiz edilmesi sonucu kişinin kendisi aleyhine bir sonucun
                    ortaya çıkmasına itiraz etme,
                  </li>
                  <li>
                    Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle
                    zarara uğraması hâlinde zararın giderilmesini talep etme.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  8. Başvuru Hakkı
                </h4>
                <p>
                  KVKK kapsamındaki taleplerinizi aşağıdaki iletişim kanalları
                  üzerinden iletebilirsiniz:
                </p>

                <ul className="list-disc pl-6 space-y-1">
                  <li>E-posta: info@nctrobotic.com</li>
                </ul>

                <p>
                  Başvurularınız, talebin niteliğine göre en kısa sürede ve en
                  geç 30 (otuz) gün içerisinde ücretsiz olarak
                  sonuçlandırılacaktır.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  9. Güncellemeler
                </h4>
                <p>
                  İsmail OVALI / NCT DANIŞMANLIK, işbu Aydınlatma Metni üzerinde
                  gerekli gördüğü durumlarda değişiklik yapma hakkını saklı
                  tutar. Güncel metin, internet sitesi üzerinden yayımlandığı
                  tarihten itibaren geçerli olacaktır.
                </p>
              </div>
              <div className="flex gap-2.5 items-center p-4 bg-slate-50 border border-slate-100 rounded-xl mt-6 text-xs text-slate-500 leading-snug">
                <HeartHandshake className="h-5 w-5 text-slate-400 shrink-0" />
                <span>
                  NCT Robotik, veri güvencesi ilkelerini Türkiye Cumhuriyeti
                  anayasal garanti hükümleri dairesinde en üst mertebede
                  savunur.
                </span>
              </div>
            </div>
          ),
        };
      default:
        return {
          title: "",
          subtitle: "",
          icon: null,
          content: null,
        };
    }
  };

  const { title, subtitle, icon, content } = getLegalContent(activeTab);

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} maxWidth="max-w-3xl" id="legal-modal">
      {/* Header */}
      <div className="px-6 py-5 sm:px-8 sm:py-6 bg-brand-surface text-brand-light flex items-start justify-between shrink-0 border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/10 rounded-lg text-brand-light shrink-0 [&>svg]:text-white">
            {icon}
          </div>
          <div className="space-y-1">
            <h3 className="font-extrabold text-xl sm:text-2xl text-brand-light tracking-tight leading-snug">
              {title}
            </h3>
            {subtitle && (
              <p className="text-brand-light/65 text-xs font-normal">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-brand-light hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-slate-50 px-6 py-2 sm:px-8 sm:py-3 border-b border-brand-neutral/40 flex gap-2 shrink-0">
        <button
          onClick={() => setActiveTab('privacy')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'privacy'
              ? 'bg-brand-primary text-white'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          Gizlilik Politikası
        </button>
        <button
          onClick={() => setActiveTab('kvkk')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'kvkk'
              ? 'bg-brand-primary text-white'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          KVKK Aydınlatma Metni
        </button>
      </div>

      {/* Body */}
      <ModalBody className="bg-white">
        {content}
      </ModalBody>
    </ModalShell>
  );
};
