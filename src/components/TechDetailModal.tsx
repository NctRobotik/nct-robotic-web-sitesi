import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  if (!isOpen) return null;

  const specifications = [
    t('techDetails.specs.spec1'),
    t('techDetails.specs.spec2'),
    t('techDetails.specs.spec3'),
    t('techDetails.specs.spec4'),
    t('techDetails.specs.spec5'),
    t('techDetails.specs.spec6'),
    t('techDetails.specs.spec7'),
    t('techDetails.specs.spec8'),
    t('techDetails.specs.spec9'),
    t('techDetails.specs.spec10'),
  ];

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} maxWidth="max-w-3xl">
      <ModalHeader
        title={t('techDetails.headerTitle')}
        subtitle={t('techDetails.headerSubtitle')}
        category={t('techDetails.category')}
        onClose={onClose}
      />

      <ModalBody>
        {/* Main Cutaway Image Showcase */}
        <div className="relative rounded-[12px] overflow-hidden border border-brand-neutral bg-brand-primary aspect-[16/9] flex items-center justify-center">
          <img
            src="/donanim-foto.png"
            alt={t('techDetails.imageAlt')}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 bg-brand-accent text-white font-mono text-[10px] font-bold px-3 py-1 rounded-[6px] shadow-md">
            {t('techDetails.badge')}
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
          {t('techDetails.footerNote')}
        </span>
        <PrimaryActionButton
          onClick={() => {
            onClose();
            onOpenQuote();
          }}
          hasArrow={true}
        >
          {t('techDetails.quoteBtn')}
        </PrimaryActionButton>
      </ModalFooter>
    </ModalShell>
  );
};
