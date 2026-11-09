import React, { useState, useRef, useEffect, useId } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check } from 'lucide-react';
import {
  SupportedLanguage,
  getEnabledLanguages,
  getLanguageConfig,
  isRTL
} from '../i18n/languages';

interface LanguageSelectorProps {
  /** Callback fired when a new language is chosen */
  onSelectLanguage: (code: SupportedLanguage) => void;
  /** Whether the selector is rendered inside the mobile navigation drawer */
  mobile?: boolean;
  /** Additional custom class names for the container */
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onSelectLanguage,
  mobile = false,
  className = ''
}) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const listboxId = useId();
  const enabledLanguages = getEnabledLanguages();

  // Current active language code normalized
  const currentCode = (i18n.resolvedLanguage || i18n.language || 'tr').toLowerCase().split('-')[0] as SupportedLanguage;
  const currentConfig = getLanguageConfig(currentCode);
  const isCurrentRTL = isRTL(currentCode);

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Handle focus when menu opens
  useEffect(() => {
    if (isOpen) {
      const activeIdx = enabledLanguages.findIndex((lang) => lang.code === currentCode);
      setFocusedIndex(activeIdx >= 0 ? activeIdx : 0);
    } else {
      setFocusedIndex(-1);
    }
  }, [isOpen, currentCode, enabledLanguages]);

  // Focus the item when focusedIndex changes
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && menuRef.current) {
      const items = menuRef.current.querySelectorAll<HTMLButtonElement>('[role="option"]');
      if (items[focusedIndex]) {
        items[focusedIndex].focus();
      }
    }
  }, [focusedIndex, isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (code: SupportedLanguage) => {
    setIsOpen(false);
    triggerRef.current?.focus();
    if (code !== currentCode) {
      onSelectLanguage(code);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % enabledLanguages.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + enabledLanguages.length) % enabledLanguages.length);
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(enabledLanguages.length - 1);
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
        break;
      case 'Tab':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  // Mobile layout: Compact segmented list with native names
  if (mobile) {
    return (
      <div
        role="radiogroup"
        aria-label={t('navigation.language') || 'Site language'}
        className={`flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200/80 ${className}`}
      >
        {enabledLanguages.map((lang) => {
          const isSelected = lang.code === currentCode;
          return (
            <button
              key={lang.code}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleSelect(lang.code)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 ${
                isSelected
                  ? 'bg-white text-brand-accent shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <span>{lang.nativeName}</span>
              {isSelected && <Check className="w-3.5 h-3.5 text-brand-accent" aria-hidden="true" />}
            </button>
          );
        })}
      </div>
    );
  }

  // Desktop layout: Compact popover selector
  return (
    <div
      ref={containerRef}
      className={`relative inline-block text-left rtl:text-right ${className}`}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={triggerRef}
        type="button"
        id="language-selector-trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-label={`${t('navigation.language') || 'Language'}: ${currentConfig.nativeName}`}
        onClick={handleToggle}
        className="flex items-center gap-2 h-11 px-3.5 rounded-full bg-slate-100 hover:bg-slate-200/80 border border-slate-200/60 text-[#111827] text-xs font-bold transition-all duration-200 hover:scale-[1.02] cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-brand-accent/40"
      >
        <Globe className="w-4 h-4 text-slate-500" aria-hidden="true" />
        <span className="font-semibold">{currentConfig.nativeName}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <ul
          ref={menuRef}
          id={listboxId}
          role="listbox"
          aria-label={t('navigation.language') || 'Language selector'}
          tabIndex={-1}
          className={`absolute mt-2 w-44 rounded-2xl bg-white border border-slate-200/80 p-1.5 shadow-xl z-50 focus:outline-hidden animate-in fade-in zoom-in-95 duration-100 ${
            isCurrentRTL ? 'left-0' : 'right-0'
          }`}
        >
          {enabledLanguages.map((lang, idx) => {
            const isSelected = lang.code === currentCode;
            const isFocused = idx === focusedIndex;

            return (
              <li key={lang.code} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={isFocused ? 0 : -1}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium transition-colors cursor-pointer text-left rtl:text-right ${
                    isSelected
                      ? 'bg-brand-accent/10 text-brand-accent font-bold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  } ${isFocused ? 'ring-2 ring-brand-accent/30' : ''}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="uppercase text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {lang.code}
                    </span>
                    <span>{lang.nativeName}</span>
                  </span>
                  {isSelected && (
                    <Check className="w-4 h-4 text-brand-accent shrink-0" aria-hidden="true" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default LanguageSelector;
