import React, { useState } from 'react';
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
    quantity: '1-5 Adet',
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
        setSuccessMsg(data.message || 'Talebiniz başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.');
        setSubmitted(true);
      } else {
        setError(data.error || 'Teklif talebi gönderilirken bir hata oluştu.');
      }
    } catch (err) {
      setError('Ağ hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.');
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
      quantity: '1-5 Adet',
      message: '',
    });
    onClose();
  };

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
      <ModalHeader
        title="NCT Robotik Teklif Formu"
        subtitle="Okul veya kurumunuz için fiyat teklifi alın"
        onClose={onClose}
      />

      <ModalBody>
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-brand-accent/15 text-brand-accent flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-brand-primary">Teklif Talebiniz Alındı!</h4>
            <p className="text-brand-primary/80 text-sm leading-relaxed max-w-md mx-auto font-normal">
              {successMsg}
            </p>
            <PrimaryActionButton
              hasArrow={false}
              onClick={handleReset}
              className="mx-auto mt-4 px-8"
            >
              Tamam
            </PrimaryActionButton>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Ahmet Yılmaz"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  Kurum / Okul Adı *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Doğa Koleji"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  E-posta Adresi *
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
                  Telefon Numarası *
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
                  İlgilendiğiniz Ürün *
                </label>
                <select
                  value={formData.productId}
                  onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                >
                  {PRODUCTS_LIST.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.tag})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                  Tahmini Adet
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full h-11 px-4 rounded-[14px] bg-white border border-brand-neutral text-brand-primary text-sm focus:outline-none focus:border-brand-accent focus:bg-white"
                >
                  <option value="1 Adet">1 Adet (Bireysel)</option>
                  <option value="2-5 Adet">2-5 Adet (Sınıf Paketi)</option>
                  <option value="6-20 Adet">6-20 Adet (Okul / Kampüs)</option>
                  <option value="20+ Adet">20+ Adet (Kurumsal Toplu)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider mb-1">
                Ek Notlar veya Özel İstekler
              </label>
              <textarea
                rows={3}
                placeholder="Eğitim seviyesi, kullanım amacı veya teslimat ili belirtebilirsiniz..."
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
                <span>{loading ? 'Gönderiliyor...' : 'Teklif Talebini Gönder'}</span>
              </PrimaryActionButton>
            </div>
          </form>
        )}
      </ModalBody>
    </ModalShell>
  );
};
