import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { AuthLayout, FormInput, PasswordInput, AuthButton, AuthError } from './AuthComponents';
import { api, ApiError } from '../lib/api';

export const ResetPasswordPage: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  // Extract redirect_uri from URL query parameters (which can be null)
  const queryParams = new URLSearchParams(location.search);
  const redirectUri = queryParams.get('redirect_uri');
  const initialEmail = queryParams.get('email') || '';

  const [email, setEmail] = useState(initialEmail);
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (newPassword !== confirmPassword) {
      setError(t('resetPassword.errors.passwordMismatch'));
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await api.resetPassword(email, resetCode, newPassword);
      setSuccess(true);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError(t('resetPassword.errors.connection'));
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
      title={t('resetPassword.title')}
      subtitle={t('resetPassword.subtitle')}
    >
      {success ? (
        <div className="space-y-6 text-center animate-fade-in">
          <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm text-left">
            {t('resetPassword.successMessage')}
          </div>
          <Link
            to={loginLink}
            className="w-full flex items-center justify-center py-3.5 px-6 bg-[#FF7417] hover:bg-[#D35A00] text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
          >
            {t('resetPassword.loginButton')}
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <AuthError message={error} />

          <FormInput
            label={t('resetPassword.emailLabel')}
            id="reset-email"
            type="email"
            required
            placeholder={t('resetPassword.emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            label={t('resetPassword.codeLabel')}
            id="reset-code"
            type="text"
            required
            placeholder={t('resetPassword.codePlaceholder')}
            value={resetCode}
            onChange={(e) => setResetCode(e.target.value)}
          />

          <PasswordInput
            label={t('resetPassword.newPasswordLabel')}
            id="reset-password-1"
            required
            placeholder={t('resetPassword.newPasswordPlaceholder')}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <PasswordInput
            label={t('resetPassword.confirmPasswordLabel')}
            id="reset-password-2"
            required
            placeholder={t('resetPassword.confirmPasswordPlaceholder')}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="pt-2">
            <AuthButton loading={loading}>{t('resetPassword.updateButton')}</AuthButton>
          </div>

          <div className="text-center text-xs sm:text-sm font-medium pt-2 border-t border-slate-100">
            <Link
              to={loginLink}
              className="text-slate-500 hover:text-slate-800"
            >
              {t('resetPassword.backToLogin')}
            </Link>
          </div>
        </form>
      )}
    </AuthLayout>
  );
};
