import React from 'react';
import { Check } from 'lucide-react';
import { ModalShell, ModalHeader, ModalBody, ModalFooter, PrimaryActionButton } from './ModalOverlaySystem';

interface TechDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const TechDetailModal: React.FC<TechDetailModalProps> = ({
  isOpen,
  onClose,
  onOpenQuote,
}) => {
  if (!isOpen) return null;

  const specifications = [
    "Branş derslerde konu tekrarı",
    "Yapay zekâ destekli sesli etkileşim",
    "Oyunlaştırılmış öğrenme deneyimi",
    "Algoritmik düşünmeyi destekleyen etkinlikler",
    "Dokunmatik akıllı ekran",
    "Dahili mikrofon ve hoparlör",
    "Yaşa uygun eğitim senaryoları",
    "Wi-Fi bağlantısı",
    "Mobil uygulama ile yönetim",
    "Uzaktan yazılım güncelleme desteği"
  ];

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} maxWidth="max-w-3xl">
      <ModalHeader
        title="Teknik Özellikler"
        subtitle="Okul veya kurumunuz için teknik spesifikasyonlar"
        category="Orbit Pix"
        onClose={onClose}
      />

      <ModalBody>
        {/* Main Cutaway Image Showcase */}
        <div className="relative rounded-[12px] overflow-hidden border border-brand-neutral bg-brand-primary aspect-[16/9] flex items-center justify-center">
          <img
            src="/donanim-foto.png"
            alt="Orbit Pix Patlatılmış Donanım Görseli"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-brand-accent text-white font-mono text-[10px] font-bold px-3 py-1 rounded-[6px] shadow-md">
            PATLATILMIŞ TEKNİK GÖRÜNÜM
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 pt-4 border-t border-brand-neutral">
          {specifications.map((spec, idx) => (
            <div key={idx} className="flex items-start gap-2.5 py-2.5 border-b border-brand-neutral last:border-b-0">
              <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
              <span className="text-brand-primary text-xs sm:text-sm font-medium leading-relaxed">
                {spec}
              </span>
            </div>
          ))}
        </div>
      </ModalBody>

      <ModalFooter>
        <span className="text-xs text-[#6B7280] font-medium">
          Teknik dökümanlar ve numune talepleri için iletişime geçin.
        </span>
        <PrimaryActionButton
          onClick={() => {
            onClose();
            onOpenQuote();
          }}
          hasArrow={true}
        >
          Kurumsal Teklif İste
        </PrimaryActionButton>
      </ModalFooter>
    </ModalShell>
  );
};
