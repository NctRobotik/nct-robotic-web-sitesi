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
  const { t } = useTranslation();

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

    setError(null);

    // Form doğrulaması
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError(t('quoteModal.errorRequired'));
      return;
    }

    if (!formData.email.includes('@')) {
      setError(t('quoteModal.errorEmail'));
      return;
    }

    setLoading(true);

    try {
      const selectedProduct = PRODUCTS_LIST.find((p) => p.id === formData.productId);
      const productName = selectedProduct ? selectedProduct.name : formData.productId;

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        robot_type: productName || 'Eğitim Robotları',
        message: `[Teklif Talebi]\nKurum/Okul: ${formData.institution.trim() || 'Belirtilmedi'}\nTahmini Adet: ${formData.quantity}\nMesaj: ${formData.message.trim() || 'Özel bir not belirtilmedi.'}`,
      };

      const rawApiUrl = import.meta.env.VITE_API_URL || '/api';
      const baseApiUrl = rawApiUrl.endsWith('/') ? rawApiUrl.slice(0, -1) : rawApiUrl;
      const endpoint = `${baseApiUrl}/contact/`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`İletişim isteği başarısız oldu (${response.status})`);
      }

      const data = await response.json().catch(() => null);
      if (data && data.result && data.result !== 'success') {
        throw new Error('Sunucu işlem sonucu başarısız döndü.');
      }

      setSuccessMsg(t('quoteModal.successMessage'));
      setSubmitted(true);
    } catch (err) {
      console.error('Contact submit error:', err);
      setError(t('quoteModal.errorGeneral'));
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
        title={t('quoteModal.title')}
        subtitle={t('quoteModal.subtitle')}
        onClose={onClose}
      />

      <ModalBody>
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-brand-accent/15 text-brand-accent flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-brand-primary">{t('quoteModal.successTitle')}</h4>
            <p className="text-brand-primary/80 text-sm leading-relaxed max-w-md mx-auto font-normal">
              {successMsg}
            </p>
            <PrimaryActionButton
              hasArrow={false}
              onClick={handleReset}
              className="mx-auto mt-4 px-8"
            >
              {t('quoteModal.doneBtn')}
            </PrimaryActionButton>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  {t('quoteModal.labels.fullName')}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t('quoteModal.placeholders.fullName')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  {t('quoteModal.labels.institution')}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t('quoteModal.placeholders.institution')}
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  {t('quoteModal.labels.email')}
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
                  {t('quoteModal.labels.phone')}
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
                  {t('quoteModal.labels.product')}
                </label>
                <select
                  value={formData.productId}
                  onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                >
                  {PRODUCTS_LIST.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.tag === '6+ YAŞ' ? t('quoteModal.ageTag') : p.tag})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  {t('quoteModal.labels.quantity')}
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                >
                  <option value="1 Adet">{t('quoteModal.quantities.qty1')}</option>
                  <option value="2-5 Adet">{t('quoteModal.quantities.qty2_5')}</option>
                  <option value="6-20 Adet">{t('quoteModal.quantities.qty6_20')}</option>
                  <option value="20+ Adet">{t('quoteModal.quantities.qty20plus')}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                {t('quoteModal.labels.message')}
              </label>
              <textarea
                rows={3}
                placeholder={t('quoteModal.placeholders.message')}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white resize-none"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-[10px] text-center font-medium">
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
                <span>{loading ? t('quoteModal.sendingBtn') : t('quoteModal.submitBtn')}</span>
              </PrimaryActionButton>
            </div>
          </form>
        )}
      </ModalBody>
    </ModalShell>
  );
};
