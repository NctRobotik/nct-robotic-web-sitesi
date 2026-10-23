import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { i18n } = useTranslation();
  const isEnglish = i18n.resolvedLanguage?.toLowerCase().startsWith('en') || i18n.language?.toLowerCase().startsWith('en');
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

  // English translations mirror the original Turkish policy; source text is preserved above.
  const getEnglishLegalContent = (tab: 'privacy' | 'kvkk') => {
    const heading = 'font-bold text-slate-900 text-sm mb-2';
    const paragraph = 'text-xs text-slate-500 mb-2';
    const bullets = 'list-disc pl-6 space-y-1';
    if (tab === 'privacy') {
      return {
        title: 'Privacy Policy',
        subtitle: 'The security of your personal data and corporate information systems is one of our highest priorities.',
        icon: <Eye className="h-8 w-8 text-slate-700" />,
        content: (
          <div className="space-y-6 text-slate-600 leading-relaxed text-sm font-sans">
            <p>At NCT Robotik, we value the privacy and security of the personal data of our customers, visitors, and business partners.</p>
            <div>
              <h4 className={heading}>CAMPAIGNS AND INFORMATION</h4>
              <p className={paragraph}>We may inform our users about products, campaigns, events, training programs, and new services via email, SMS, or telephone.</p>
            </div>
            <div>
              <h4 className={heading}>SECURITY OF PERSONAL INFORMATION</h4>
              <p className={paragraph}>Personal data collected is used solely to provide services, manage orders, offer technical support, and fulfill legal obligations.</p>
            </div>
            <div>
              <h4 className={heading}>USE OF IP ADDRESSES</h4>
              <p className={paragraph}>IP addresses may be recorded to maintain system security, identify technical issues, and improve service quality.</p>
              <h4 className={heading}>CREDIT CARD SECURITY</h4>
              <p className={paragraph}>We do not record, store, or view credit card information used for online payments. Payment transactions are processed by authorized payment service providers.</p>
              <h4 className={heading}>SSL SECURITY</h4>
              <p className={paragraph}>Our website uses an SSL security certificate to protect the transmission of data between the user and the server through encryption.</p>
              <h4 className={heading}>1. INFORMATION COLLECTED</h4>
              <ul className={bullets}>
                <li>First and last name</li><li>Phone number</li><li>Email address</li>
                <li>Delivery and billing addresses</li><li>Order information</li><li>Payment information</li>
                <li>Technical support records</li><li>IP address and cookie information</li>
              </ul>
              <h4 className={heading}>2. PURPOSES OF USING INFORMATION</h4>
              <ul className={bullets}>
                <li>Processing orders</li><li>Delivering products</li><li>Providing technical support</li>
                <li>Handling warranty and service procedures</li><li>Issuing invoices</li><li>Improving service quality</li>
              </ul>
              <h4 className={heading}>3. SHARING DATA WITH THIRD PARTIES</h4>
              <p className={paragraph}>Your personal information may be shared only as necessary for legal obligations, with payment institutions, shipping companies, and essential service providers.</p>
              <h4 className={heading}>4. COOKIES</h4>
              <p className={paragraph}>Our website may use cookies to improve the user experience.</p>
              <h4 className={heading}>5. YOUR RIGHTS UNDER THE KVKK</h4>
              <p className={paragraph}>Under Personal Data Protection Law No. 6698 (KVKK), you have the right to request information about, correction of, and deletion of your personal data, and to object to its processing.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mt-4">
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Any changes to our privacy policy will be published on this page. For privacy or security questions, please contact us at{' '}
                <a href="mailto:info@nctrobotic.com" className="font-sans text-slate-900 underline font-extrabold tracking-tight">info@nctrobotic.com</a>.
              </p>
            </div>
          </div>
        ),
      };
    }
    return {
      title: 'Personal Data Protection Notice (KVKK)',
      subtitle: 'Your rights, how your data is processed, and the declaration of explicit consent under the Personal Data Protection Law.',
      icon: <ShieldCheck className="h-8 w-8 text-slate-700" />,
      content: (
        <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
          <p>Under Personal Data Protection Law No. 6698 (KVKK), your personal data may be processed by İsmail OVALI / NCT DANIŞMANLIK in its capacity as data controller.</p>
          <div>
            <h4 className={heading}>1. Purposes of Processing Your Personal Data</h4>
            <ul className={bullets}>
              <li>Processing orders</li><li>Delivering products</li><li>Providing technical service and warranty support</li>
              <li>Carrying out accounting and invoicing procedures</li><li>Fulfilling legal obligations</li>
              <li>Managing customer relations</li><li>Ensuring information security</li>
              <li>Conducting promotional campaigns and information activities (where explicit consent has been given)</li>
            </ul>
          </div>
          <div>
            <h4 className={heading}>2. Personal Data Processed</h4>
            <ul className={bullets}>
              <li>First and last name</li><li>Turkish Republic identification number (where necessary)</li>
              <li>Phone number</li><li>Email address</li><li>Delivery and billing addresses</li>
              <li>Order information</li><li>Payment information</li><li>Technical service and warranty records</li>
              <li>IP address and cookie data</li>
            </ul>
          </div>
          <div>
            <h4 className={heading}>4. Methods and Legal Grounds for Collecting Personal Data</h4>
            <p>Your personal data may be collected electronically or physically through the website, order forms, email correspondence, telephone conversations, technical service requests, and payment systems.</p>
          </div>
          <div>
            <h4 className={heading}>5. Transfer of Personal Data</h4>
            <p>Your personal data may be transferred to the following parties under the conditions prescribed by applicable legislation and Articles 8 and 9 of the KVKK:</p>
            <ul className={bullets}>
              <li>Authorized public institutions and authorities</li><li>Courts and enforcement offices</li>
              <li>Financial advisors and accounting service providers</li><li>Shipping and logistics companies</li>
              <li>Payment institutions</li><li>Banks</li><li>Information technology service providers</li>
            </ul>
          </div>
          <div>
            <h4 className={heading}>6. Storage and Security of Personal Data</h4>
            <p>Your personal data is protected by firewalls, access control systems, and encryption methods. At the end of the retention period, data is deleted, destroyed, or anonymized.</p>
          </div>
          <div>
            <h4 className={heading}>7. Your Rights Under the KVKK</h4>
            <p>Under Article 11 of Personal Data Protection Law No. 6698, you have the following rights concerning your personal data:</p>
            <ul className={bullets}>
              <li>To learn whether your personal data is being processed</li>
              <li>To request information if your personal data has been processed</li>
              <li>To learn the purpose of processing and whether the data is used in line with that purpose</li>
              <li>To know the third parties to whom your personal data is transferred, in Türkiye or abroad</li>
              <li>To request correction of incomplete or inaccurate personal data</li>
              <li>To request deletion or destruction of personal data under the conditions stipulated by the KVKK</li>
              <li>To request notification of correction, deletion, or destruction to third parties to whom the data has been transferred</li>
              <li>To object to a result against you arising exclusively from automated analysis of processed data</li>
              <li>To request compensation for damages arising from unlawful processing of personal data</li>
            </ul>
          </div>
          <div>
            <h4 className={heading}>8. Right to Apply</h4>
            <p>You may submit your requests under the KVKK via the following contact channel:</p>
            <ul className={bullets}><li>Email: info@nctrobotic.com</li></ul>
            <p>Your applications will be concluded free of charge as soon as possible and within 30 (thirty) days at the latest, depending on the nature of the request.</p>
          </div>
          <div>
            <h4 className={heading}>9. Updates</h4>
            <p>İsmail OVALI / NCT DANIŞMANLIK reserves the right to amend this Notice when deemed necessary. The updated notice will take effect on the date it is published on the website.</p>
          </div>
          <div className="flex gap-2.5 items-center p-4 bg-slate-50 border border-slate-100 rounded-xl mt-6 text-xs text-slate-500 leading-snug">
            <HeartHandshake className="h-5 w-5 text-slate-400 shrink-0" />
            <span>NCT Robotik upholds the principles of data protection to the highest degree within the constitutional guarantees of the Republic of Türkiye.</span>
          </div>
        </div>
      ),
    };
  };

  const { title, subtitle, icon, content } = isEnglish ? getEnglishLegalContent(activeTab) : getLegalContent(activeTab);

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
          aria-label={isEnglish ? "Close" : "Kapat"}
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
          {isEnglish ? "Privacy Policy" : "Gizlilik Politikası"}
        </button>
        <button
          onClick={() => setActiveTab('kvkk')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'kvkk'
              ? 'bg-brand-primary text-white'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          {isEnglish ? "Personal Data Protection Notice (KVKK)" : "KVKK Aydınlatma Metni"}
        </button>
      </div>

      {/* Body */}
      <ModalBody className="bg-white">
        {content}
      </ModalBody>
    </ModalShell>
  );
};
