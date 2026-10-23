import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthLayout, FormInput, AuthButton, AuthError } from './AuthComponents';
import { api, ApiError } from '../lib/api';

export const VerifyEmailPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();
  const isEnglish = (i18n.resolvedLanguage || i18n.language || 'tr').startsWith('en');
  const localized = (tr: string, en: string) => isEnglish ? en : tr;

  // Extract email and redirect_uri from URL query params
  const queryParams = new URLSearchParams(location.search);
  const initialEmail = queryParams.get('email') || '';
  const redirectUri = queryParams.get('redirect_uri');

  const [email, setEmail] = useState(initialEmail);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [infoStatus, setInfoStatus] = useState<'initial' | 'resent' | null>(
    initialEmail ? 'initial' : null
  );
  const infoMessage = infoStatus === 'initial'
    ? localized(`${initialEmail} adresine bir doğrulama kodu gönderildi.`, `A verification code has been sent to ${initialEmail}.`)
    : infoStatus === 'resent'
      ? localized('Doğrulama e-postası tekrar gönderildi. Lütfen gelen kutunuzu kontrol edin.', 'The verification email has been sent again. Please check your inbox.')
      : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);
    setInfoStatus(null);

    try {
      await api.verifyEmail(email, code);

      // Redirect to login page on success, preserving redirect_uri
      const encodedRedirect = redirectUri ? `?redirect_uri=${encodeURIComponent(redirectUri)}` : '';
      const verifiedParam = redirectUri ? '&verified=true' : '?verified=true';
      navigate(`/login${encodedRedirect}${verifiedParam}`);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError(localized('Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.', 'A connection error occurred. Please check your internet connection and try again.'));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (resending) return;

    if (!email) {
      setError(localized('Lütfen e-posta adresinizi girin.', 'Please enter your email address.'));
      return;
    }

    setResending(true);
    setError(null);
    setInfoStatus(null);

    try {
      await api.resendVerificationEmail(email);
      setInfoStatus('resent');
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError(localized('Bağlantı hatası oluştu. Lütfen tekrar deneyin.', 'A connection error occurred. Please try again.'));
      }
    } finally {
      setResending(false);
    }
  };

  const loginLink = redirectUri
    ? `/login?redirect_uri=${encodeURIComponent(redirectUri)}`
    : '/login';

  return (
    <AuthLayout
      title={localized('E-posta Adresinizi Doğrulayın', 'Verify Your Email Address')}
      subtitle={localized('Kaydınızı tamamlamak için e-posta adresinize gönderilen doğrulama kodunu girin.', 'Enter the verification code sent to your email address to complete your registration.')}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthError message={error} />

        {infoMessage && (
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm text-left animate-fade-in">
            {infoMessage}
          </div>
        )}

        <FormInput
          label={localized('E-posta', 'Email')}
          id="verification-email"
          type="email"
          required
          placeholder={localized('E-posta adresiniz', 'Your email address')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          label={localized('Doğrulama Kodu', 'Verification Code')}
          id="verification-code"
          type="text"
          required
          placeholder={localized('Doğrulama kodu', 'Verification code')}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div className="pt-2">
          <AuthButton loading={loading}>{localized('E-postayı Doğrula', 'Verify Email')}</AuthButton>
        </div>

        <div className="flex flex-col gap-3 pt-3 border-t border-slate-100 text-center text-xs sm:text-sm font-medium">
          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="text-[#FF7417] hover:underline focus:outline-none disabled:text-slate-400 font-bold"
          >
            {resending ? localized('Gönderiliyor...', 'Sending...') : localized('Doğrulama Kodunu Tekrar Gönder', 'Resend Verification Code')}
          </button>
          
          <Link
            to={loginLink}
            className="text-slate-500 hover:text-slate-800"
          >
            {localized('Giriş ekranına geri dön', 'Back to Sign In')}
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
