import React from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ModalShell, ModalBody } from './ModalOverlaySystem';

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
  const { t } = useTranslation();

  if (!isOpen) return null;

  const headingClass = 'font-bold text-slate-900 text-sm mb-2';
  const paragraphClass = 'text-xs text-slate-500 mb-2';
  const bulletsClass = 'list-disc pl-6 space-y-1';

  const collectedItems = (t('legalModal.privacy.sections.collectedItems', { returnObjects: true }) as string[]) || [];
  const purposesItems = (t('legalModal.privacy.sections.purposesItems', { returnObjects: true }) as string[]) || [];

  const kvkkSection1Items = (t('legalModal.kvkk.section1Items', { returnObjects: true }) as string[]) || [];
  const kvkkSection2Items = (t('legalModal.kvkk.section2Items', { returnObjects: true }) as string[]) || [];
  const kvkkSection5Items = (t('legalModal.kvkk.section5Items', { returnObjects: true }) as string[]) || [];
  const kvkkSection7Items = (t('legalModal.kvkk.section7Items', { returnObjects: true }) as string[]) || [];

  const isPrivacy = activeTab === 'privacy';
  const title = isPrivacy ? t('legalModal.privacy.title') : t('legalModal.kvkk.title');
  const subtitle = isPrivacy ? t('legalModal.privacy.subtitle') : t('legalModal.kvkk.subtitle');
  const icon = isPrivacy ? <Eye className="h-8 w-8 text-slate-700" /> : <ShieldCheck className="h-8 w-8 text-slate-700" />;

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
          aria-label={t('legalModal.closeAria')}
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
          {t('legalModal.tabs.privacy')}
        </button>
        <button
          onClick={() => setActiveTab('kvkk')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'kvkk'
              ? 'bg-brand-primary text-white'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          {t('legalModal.tabs.kvkk')}
        </button>
      </div>

      {/* Body */}
      <ModalBody className="bg-white">
        {isPrivacy ? (
          <div className="space-y-6 text-slate-600 leading-relaxed text-sm font-sans">
            <p>
              {t('legalModal.privacy.intro')}
            </p>

            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-2">
                {t('legalModal.privacy.sections.campaignTitle')}
              </h4>
              <p className="text-xs text-slate-500 mb-2">
                {t('legalModal.privacy.sections.campaignDesc')}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-2">
                {t('legalModal.privacy.sections.securityTitle')}
              </h4>
              <p className="text-xs text-slate-500 mb-2">
                {t('legalModal.privacy.sections.securityDesc')}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-2">
                {t('legalModal.privacy.sections.ipTitle')}
              </h4>
              <p className="text-xs text-slate-500 mb-2">
                {t('legalModal.privacy.sections.ipDesc')}
              </p>
              <h4 className="font-bold text-slate-900 text-sm mb-2">
                {t('legalModal.privacy.sections.ccTitle')}
              </h4>
              <p className="text-xs text-slate-500 mb-2">
                {t('legalModal.privacy.sections.ccDesc')}
              </p>
              <h4 className="font-bold text-slate-900 text-sm mb-2">
                {t('legalModal.privacy.sections.sslTitle')}
              </h4>
              <p className="text-xs text-slate-500 mb-2">
                {t('legalModal.privacy.sections.sslDesc')}
              </p>
              <h4 className="font-bold text-slate-900 text-sm mb-2">
                {t('legalModal.privacy.sections.collectedTitle')}
              </h4>
              <ul className={bulletsClass}>
                {collectedItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <h4 className="font-bold text-slate-900 text-sm mb-2">
                {t('legalModal.privacy.sections.purposesTitle')}
              </h4>
              <ul className={bulletsClass}>
                {purposesItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <h4 className="font-bold text-slate-900 text-sm mb-2">
                {t('legalModal.privacy.sections.sharingTitle')}
              </h4>
              <p className="text-xs text-slate-500 mb-2">
                {t('legalModal.privacy.sections.sharingDesc')}
              </p>
              <h4 className="font-bold text-slate-900 text-sm mb-2">
                {t('legalModal.privacy.sections.cookiesTitle')}
              </h4>
              <p className="text-xs text-slate-500 mb-2">
                {t('legalModal.privacy.sections.cookiesDesc')}
              </p>
              <h4 className="font-bold text-slate-900 text-sm mb-2">
                {t('legalModal.privacy.sections.rightsTitle')}
              </h4>
              <p className="text-xs text-slate-500 mb-2">
                {t('legalModal.privacy.sections.rightsDesc')}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mt-4">
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {t('legalModal.privacy.footerNote.prefix')}
                <a
                  href="mailto:info@nctrobotic.com"
                  className="font-sans text-slate-900 underline font-extrabold tracking-tight"
                >
                  info@nctrobotic.com
                </a>
                {t('legalModal.privacy.footerNote.suffix')}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
            <p>
              {t('legalModal.kvkk.intro')}
            </p>

            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                {t('legalModal.kvkk.section1Title')}
              </h4>
              <ul className={bulletsClass}>
                {kvkkSection1Items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                {t('legalModal.kvkk.section2Title')}
              </h4>
              <ul className={bulletsClass}>
                {kvkkSection2Items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                {t('legalModal.kvkk.section4Title')}
              </h4>
              <p>
                {t('legalModal.kvkk.section4Desc')}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                {t('legalModal.kvkk.section5Title')}
              </h4>
              <p>
                {t('legalModal.kvkk.section5Desc')}
              </p>

              <ul className={bulletsClass}>
                {kvkkSection5Items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                {t('legalModal.kvkk.section6Title')}
              </h4>
              <p>
                {t('legalModal.kvkk.section6Desc')}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                {t('legalModal.kvkk.section7Title')}
              </h4>
              <p>
                {t('legalModal.kvkk.section7Desc')}
              </p>

              <ul className={bulletsClass}>
                {kvkkSection7Items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                {t('legalModal.kvkk.section8Title')}
              </h4>
              <p>
                {t('legalModal.kvkk.section8Desc')}
              </p>

              <ul className={bulletsClass}>
                <li>{t('legalModal.kvkk.section8Email')}</li>
              </ul>

              <p>
                {t('legalModal.kvkk.section8Resolution')}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                {t('legalModal.kvkk.section9Title')}
              </h4>
              <p>
                {t('legalModal.kvkk.section9Desc')}
              </p>
            </div>
            <div className="flex gap-2.5 items-center p-4 bg-slate-50 border border-slate-100 rounded-xl mt-6 text-xs text-slate-500 leading-snug">
              <HeartHandshake className="h-5 w-5 text-slate-400 shrink-0" />
              <span>
                {t('legalModal.kvkk.guarantee')}
              </span>
            </div>
          </div>
        )}
      </ModalBody>
    </ModalShell>
  );
};
