import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ModalShell, ModalHeader, ModalBody, PrimaryActionButton } from './ModalOverlaySystem';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onOpenQuote }) => {
  if (!isOpen) return null;

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl" id="contact-modal">
      <ModalHeader
        title="NCT Robotik İletişim"
        subtitle="Sorularınız ve Kurumsal İşbirlikleri İçin"
        onClose={onClose}
      />

      <ModalBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone & Direct Contact Card */}
          <div className="p-6 rounded-[12px] bg-white border border-brand-neutral space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-brand-light border border-brand-neutral flex items-center justify-center shadow-xs">
              <Phone className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider block">Müşteri Destek Hattı</span>
              <a href="tel:+905433507587" className="text-2xl font-black text-brand-primary font-mono block mt-0.5 hover:text-brand-accent transition-colors">
                0543 350 7587
              </a>
              <p className="text-xs text-brand-primary/70 mt-1">Hafta içi: 09:00 - 18:30</p>
            </div>
            <PrimaryActionButton
              hasArrow={false}
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="w-full"
            >
              Hızlı Teklif İste
            </PrimaryActionButton>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-[12px] bg-white border border-brand-neutral space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-light border border-brand-neutral flex items-center justify-center shadow-xs">
                <Mail className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-brand-primary/50 uppercase tracking-wider block">E-posta Danışma</span>
                <a href="mailto:info@nctrobotic.com" className="text-lg font-bold text-brand-primary block mt-0.5 hover:text-brand-accent transition-colors">
                  info@nctrobotic.com
                </a>
                <p className="text-xs text-brand-primary/70 mt-1 font-normal">24 saat içerisinde yanıtlanmaktadır.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Address Card */}
        <div className="p-6 rounded-[12px] bg-white border border-brand-neutral flex items-start gap-4 shadow-sm">
          <div className="p-3 rounded-xl bg-brand-light border border-brand-neutral text-brand-accent shrink-0">
            <MapPin className="w-6 h-6 text-brand-accent" />
          </div>
          <div>
            <h4 className="font-bold text-brand-primary text-sm">Genel Merkez & Ar-Ge Laboratuvarı</h4>
            <p className="text-brand-primary/70 text-xs mt-1 leading-relaxed font-normal">
              Pamukkale Üniversitesi Teknokent, Hüseyin Yılmaz Cad. No: 67, Kat: 2 D Blok Kapı No: 201
            </p>
          </div>
        </div>
      </ModalBody>
    </ModalShell>
  );
};

