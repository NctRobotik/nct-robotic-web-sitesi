import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { AuthLayout, FormInput, PasswordInput, AuthButton, AuthError } from './AuthComponents';
import { api, ApiError } from '../lib/api';

export const ForgotPasswordPage: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  // Extract redirect_uri from URL query params
  const queryParams = new URLSearchParams(location.search);
  const redirectUri = queryParams.get('redirect_uri');

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [step, setStep] = useState<'request' | 'reset' | 'success'>('request'); // 'request', 'reset', 'success'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      await api.forgotPassword(email);
      setStep('reset');
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError(t('forgotPassword.errors.connection'));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (newPassword !== confirmPassword) {
      setError(t('forgotPassword.errors.passwordMismatch'));
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await api.resetPassword(email, code, newPassword);
      setStep('success');
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError(t('forgotPassword.errors.resetFailed'));
      }
    } finally {
      setLoading(false);
    }
  };

  const loginLink = redirectUri
    ? `/login?redirect_uri=${encodeURIComponent(redirectUri)}`
    : '/login';

  return (
    <AuthLayout
      title={
        step === 'request'
          ? t('forgotPassword.titles.request')
          : step === 'reset'
          ? t('forgotPassword.titles.reset')
          : t('forgotPassword.titles.success')
      }
      subtitle={
        step === 'request'
          ? t('forgotPassword.subtitles.request')
          : step === 'reset'
          ? t('forgotPassword.subtitles.reset', { email })
          : t('forgotPassword.subtitles.success')
      }
    >
      {step === 'success' && (
        <div className="space-y-6 text-center animate-fade-in">
          <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm text-left">
            {t('forgotPassword.successMessage')}
          </div>
          <Link
            to={loginLink}
            className="w-full flex items-center justify-center py-3.5 px-6 bg-[#FF7417] hover:bg-[#D35A00] text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
          >
            {t('forgotPassword.loginButton')}
          </Link>
        </div>
      )}

      {step === 'request' && (
        <form onSubmit={handleRequestCode} className="space-y-5 animate-fade-in">
          <AuthError message={error} />

          <FormInput
            label={t('forgotPassword.emailLabel')}
            id="forgot-email"
            type="email"
            required
            placeholder={t('forgotPassword.emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="pt-2">
            <AuthButton loading={loading}>{t('forgotPassword.sendCodeButton')}</AuthButton>
          </div>

          <div className="text-center text-xs sm:text-sm font-medium pt-2 border-t border-slate-100">
            <Link
              to={loginLink}
              className="text-[#FF7417] hover:underline"
            >
              {t('forgotPassword.backToLogin')}
            </Link>
          </div>
        </form>
      )}

      {step === 'reset' && (
        <form onSubmit={handleResetPassword} className="space-y-5 animate-fade-in">
          <AuthError message={error} />

          <FormInput
            label={t('forgotPassword.codeLabel')}
            id="reset-code"
            type="text"
            required
            placeholder={t('forgotPassword.codePlaceholder')}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <PasswordInput
            label={t('forgotPassword.newPasswordLabel')}
            id="reset-password-1"
            required
            placeholder={t('forgotPassword.newPasswordPlaceholder')}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <PasswordInput
            label={t('forgotPassword.confirmPasswordLabel')}
            id="reset-password-2"
            required
            placeholder={t('forgotPassword.confirmPasswordPlaceholder')}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="pt-2">
            <AuthButton loading={loading}>{t('forgotPassword.resetPasswordButton')}</AuthButton>
          </div>

          <div className="text-center text-xs sm:text-sm font-medium pt-2 border-t border-slate-100 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setStep('request')}
              className="text-[#FF7417] hover:underline font-bold text-center"
            >
              {t('forgotPassword.resendCodeButton')}
            </button>
            <Link
              to={loginLink}
              className="text-slate-500 hover:text-slate-800"
            >
              {t('forgotPassword.backToLogin')}
            </Link>
          </div>
        </form>
      )}
    </AuthLayout>
  );
};
