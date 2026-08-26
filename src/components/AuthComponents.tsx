import React, { useState } from 'react';
import { Eye, EyeOff, AlertCircle, ArrowRight } from 'lucide-react';

// Shared Page layout for Auth views (Centers form on the left, displays marketing on the right on Desktop)
interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-[80vh] flex bg-[#F8FAFC]">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-16">
        <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/60 shadow-xs text-left">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">{title}</h2>
            <p className="text-slate-500 text-sm leading-relaxed">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
      
      {/* Right-side decoration panel for desktop view */}
      <div className="hidden lg:flex w-1/2 bg-[#111827] relative items-center justify-center text-white p-16 select-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e293b,transparent)] opacity-40" />
        <div className="relative z-10 max-w-lg space-y-6 text-left">
          <div className="w-16 h-16 rounded-3xl bg-[#FF7417]/10 flex items-center justify-center border border-[#FF7417]/20">
            <svg className="w-8 h-8 text-[#FF7417]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3 className="text-4xl font-extrabold tracking-tight">Orbit Ailesi Eğitim Robotları</h3>
          <p className="text-slate-400 text-lg leading-relaxed font-normal">
            Yapay zeka destekli robotik kodlama setleri ile geleceğin eğitim teknolojilerini bugünden sınıflarınıza taşıyın.
          </p>
        </div>
      </div>
    </div>
  );
};

// Reusable standard text/email input field
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormInput: React.FC<FormInputProps> = ({ label, id, ...props }) => {
  return (
    <div className="space-y-1.5 w-full">
      <label htmlFor={id} className="block text-xs font-bold text-[#111827] uppercase tracking-wider">
        {label}
      </label>
      <input
        id={id}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF7417] focus:ring-1 focus:ring-[#FF7417] transition-all bg-slate-50/50"
        {...props}
      />
    </div>
  );
};

// Reusable password input with show/hide password toggle
interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ label, id, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1.5 w-full relative">
      <label htmlFor={id} className="block text-xs font-bold text-[#111827] uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          className="w-full pl-4 pr-11 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF7417] focus:ring-1 focus:ring-[#FF7417] transition-all bg-slate-50/50"
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

// Reusable primary action button with loading spinner
interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ loading, children, ...props }) => {
  return (
    <button
      type="submit"
      disabled={loading || props.disabled}
      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#FF7417] hover:bg-[#D35A00] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-sm focus:outline-none cursor-pointer"
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : (
        <>
          <span>{children}</span>
          <ArrowRight className="w-4 h-4" />
        </>
      )}
    </button>
  );
};

// Reusable alert notification for authentication errors
interface AuthErrorProps {
  message: string | null;
}

export const AuthError: React.FC<AuthErrorProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="flex items-start gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm text-left animate-fade-in">
      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
      <span className="leading-relaxed font-medium">{message}</span>
    </div>
  );
};
