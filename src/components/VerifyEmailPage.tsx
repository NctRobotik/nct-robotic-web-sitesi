import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthLayout, FormInput, AuthButton, AuthError } from './AuthComponents';
import { api, ApiError } from '../lib/api';

export const VerifyEmailPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

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
    ? t('verifyEmail.info.initialSent', { email: initialEmail })
    : infoStatus === 'resent'
      ? t('verifyEmail.info.resent')
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
        setError(t('verifyEmail.errors.connection'));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (resending) return;

    if (!email) {
      setError(t('verifyEmail.errors.enterEmail'));
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
        setError(t('verifyEmail.errors.resendFailed'));
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
      title={t('verifyEmail.title')}
      subtitle={t('verifyEmail.subtitle')}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthError message={error} />

        {infoMessage && (
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm text-left animate-fade-in">
            {infoMessage}
          </div>
        )}

        <FormInput
          label={t('verifyEmail.emailLabel')}
          id="verification-email"
          type="email"
          required
          placeholder={t('verifyEmail.emailPlaceholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          label={t('verifyEmail.codeLabel')}
          id="verification-code"
          type="text"
          required
          placeholder={t('verifyEmail.codePlaceholder')}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div className="pt-2">
          <AuthButton loading={loading}>{t('verifyEmail.verifyButton')}</AuthButton>
        </div>

        <div className="flex flex-col gap-3 pt-3 border-t border-slate-100 text-center text-xs sm:text-sm font-medium">
          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="text-[#FF7417] hover:underline focus:outline-none disabled:text-slate-400 font-bold"
          >
            {resending ? t('verifyEmail.resendButton.sending') : t('verifyEmail.resendButton.default')}
          </button>
          
          <Link
            to={loginLink}
            className="text-slate-500 hover:text-slate-800"
          >
            {t('verifyEmail.backToLogin')}
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
