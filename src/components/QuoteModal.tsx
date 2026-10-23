import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_LIST } from '../data/nctData';
import { ModalShell, ModalHeader, ModalBody, PrimaryActionButton } from './ModalOverlaySystem';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProductId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedProductId,
}) => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.resolvedLanguage?.startsWith('en') || i18n.language?.startsWith('en');
  const text = (tr: string, en: string) => isEnglish ? en : tr;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    productId: preselectedProductId || 'orbit-pix',
    quantity: '2-5 Adet',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMsg(isEnglish
          ? 'Your quote request has been received. We will contact you shortly.'
          : (data.message || 'Talebiniz başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.'));
        setSubmitted(true);
      } else {
        setError(isEnglish ? 'We could not submit your quote request. Please try again.' : (data.error || 'Teklif talebi gönderilirken bir hata oluştu.'));
      }
    } catch (err) {
      setError(text('Ağ hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.', 'A network error occurred. Check your internet connection and try again.'));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError(null);
    setSuccessMsg('');
    setFormData({
      name: '',
      institution: '',
      email: '',
      phone: '',
      productId: preselectedProductId || 'orbit-pix',
      quantity: '2-5 Adet',
      message: '',
    });
    onClose();
  };

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
      <ModalHeader
        title={text('NCT Robotik Teklif Formu', 'NCT Robotik Quote Request Form')}
        subtitle={text('Okul veya kurumunuz için fiyat teklifi alın', 'Request a quote for your school or organization')}
        onClose={onClose}
      />

      <ModalBody>
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-brand-accent/15 text-brand-accent flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-brand-primary">{text('Teklif Talebiniz Alındı!', 'Quote Request Received!')}</h4>
            <p className="text-brand-primary/80 text-sm leading-relaxed max-w-md mx-auto font-normal">
              {successMsg}
            </p>
            <PrimaryActionButton
              hasArrow={false}
              onClick={handleReset}
              className="mx-auto mt-4 px-8"
            >
              {text('Tamam', 'Done')}
            </PrimaryActionButton>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  {text('Ad Soyad *', 'Full Name *')}
                </label>
                <input
                  type="text"
                  required
                  placeholder={text('Örn: Ahmet Yılmaz', 'e.g. Alex Smith')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  {text('Kurum / Okul Adı *', 'Institution / School Name *')}
                </label>
                <input
                  type="text"
                  required
                  placeholder={text('Örn: Doğa Koleji', 'e.g. Example School')}
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  {text('E-posta Adresi *', 'Email Address *')}
                </label>
                <input
                  type="email"
                  required
                  placeholder="ahmet@kolej.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  {text('Telefon Numarası *', 'Phone Number *')}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0555 123 45 67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  {text('İlgilendiğiniz Ürün *', 'Product of Interest *')}
                </label>
                <select
                  value={formData.productId}
                  onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                >
                  {PRODUCTS_LIST.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({isEnglish ? ({'6+ YAŞ': 'AGE 6+'} as Record<string, string>)[p.tag || ''] || p.tag : p.tag})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  {text('Tahmini Adet', 'Estimated Quantity')}
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                >
                  <option value="1 Adet">{text('1 Adet (Bireysel)', '1 Unit (Individual)')}</option>
                  <option value="2-5 Adet">{text('2-5 Adet (Sınıf Paketi)', '2–5 Units (Classroom Package)')}</option>
                  <option value="6-20 Adet">{text('6-20 Adet (Okul / Kampüs)', '6–20 Units (School / Campus)')}</option>
                  <option value="20+ Adet">{text('20+ Adet (Kurumsal Toplu)', '20+ Units (Bulk Order)')}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                {text('Ek Notlar veya Özel İstekler', 'Additional Notes or Special Requests')}
              </label>
              <textarea
                rows={3}
                placeholder={text('Eğitim seviyesi, kullanım amacı veya teslimat ili belirtebilirsiniz...', 'You can specify grade level, intended use, or delivery location...')}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white resize-none"
              />
            </div>

            {error && (
              <div className="p-3 bg-brand-neutral/15 border border-brand-neutral/20 text-brand-primary/85 text-xs rounded-[10px] text-center font-medium">
                {error}
              </div>
            )}

            <div className="pt-2">
              <PrimaryActionButton
                type="submit"
                hasArrow={false}
                className="w-full h-12 gap-2"
                disabled={loading}
              >
                <Send className="w-4 h-4 text-white" />
                <span>{loading ? text('Gönderiliyor...', 'Sending...') : text('Teklif Talebini Gönder', 'Submit Quote Request')}</span>
              </PrimaryActionButton>
            </div>
          </form>
        )}
      </ModalBody>
    </ModalShell>
  );
};
