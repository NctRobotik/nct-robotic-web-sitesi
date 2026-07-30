import React from 'react';
import { X, ArrowRight } from 'lucide-react';

interface ModalShellProps {
  isOpen: boolean;
  onClose: () => void;
  maxWidth?: string; // e.g. "max-w-3xl", "max-w-2xl", "max-w-xl"
  children: React.ReactNode;
  id?: string;
}

export const ModalShell: React.FC<ModalShellProps> = ({
  isOpen,
  onClose,
  maxWidth = 'max-w-3xl',
  children,
  id,
}) => {
  if (!isOpen) return null;

  // Handle overlay click to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-brand-primary/80 backdrop-blur-md animate-fade-in"
      id={id}
    >
      <div
        className={`relative w-full ${maxWidth} bg-white rounded-[16px] border border-brand-neutral shadow-2xl overflow-hidden text-brand-primary max-h-[92vh] flex flex-col`}
      >
        {children}
      </div>
    </div>
  );
};

interface ModalHeaderProps {
  title: string;
  subtitle?: string;
  category?: string;
  onClose: () => void;
  badge?: React.ReactNode;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  subtitle,
  category,
  onClose,
  badge,
}) => {
  return (
    <div className="px-6 py-5 sm:px-8 sm:py-6 bg-brand-surface text-brand-light flex items-start justify-between shrink-0 border-b border-white/5">
      <div className="space-y-1">
        {(category || badge) && (
          <div className="flex items-center gap-2">
            {category && (
              <span className="text-[10px] font-bold tracking-wider uppercase text-brand-light/60">
                {category}
              </span>
            )}
            {badge}
          </div>
        )}
        
        <h3 className="font-extrabold text-xl sm:text-2xl text-brand-light tracking-tight leading-snug">
          {title}
        </h3>
        
        {subtitle && (
          <p className="text-brand-light/65 text-xs font-normal">
            {subtitle}
          </p>
        )}
      </div>

      <CloseButton onClose={onClose} />
    </div>
  );
};

interface CloseButtonProps {
  onClose: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <button
      onClick={onClose}
      aria-label="Kapat"
      className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-brand-light hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
    >
      <X className="w-5 h-5" />
    </button>
  );
};

interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow ${className}`}>
      {children}
    </div>
  );
};

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`px-6 py-5 sm:px-8 sm:py-6 bg-brand-light border-t border-brand-neutral flex items-center justify-between gap-4 shrink-0 ${className}`}
    >
      {children}
    </div>
  );
};

interface StatusBadgeProps {
  status: boolean;
  trueText: string;
  falseText: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  trueText,
  falseText,
}) => {
  return status ? (
    <span className="bg-brand-accent/15 text-brand-accent border border-brand-accent/20 text-[10px] font-bold px-2 py-0.5 rounded">
      {trueText}
    </span>
  ) : (
    <span className="bg-brand-light text-brand-primary/60 border border-brand-neutral text-[10px] font-bold px-2 py-0.5 rounded">
      {falseText}
    </span>
  );
};

interface PrimaryActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  hasArrow?: boolean;
}

export const PrimaryActionButton: React.FC<PrimaryActionButtonProps> = ({
  children,
  hasArrow = true,
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`group flex items-center justify-center gap-2 h-11 px-7 bg-brand-primary hover:bg-brand-surface disabled:bg-brand-light disabled:text-brand-primary/40 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${className}`}
    >
      <span>{children}</span>
      {hasArrow && !props.disabled && (
        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-200" />
      )}
    </button>
  );
};

interface SecondaryActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const SecondaryActionButton: React.FC<SecondaryActionButtonProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`h-11 px-7 bg-white hover:bg-brand-light text-brand-primary font-semibold text-sm rounded-[14px] border border-brand-neutral transition-all duration-200 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};
