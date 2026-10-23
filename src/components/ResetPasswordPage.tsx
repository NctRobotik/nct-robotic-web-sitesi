import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { AuthLayout, FormInput, PasswordInput, AuthButton, AuthError } from './AuthComponents';
import { api, ApiError } from '../lib/api';

export const ResetPasswordPage: React.FC = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const isEnglish = i18n.resolvedLanguage?.startsWith('en') || i18n.language?.startsWith('en');
  const localized = (tr: string, en: string) => isEnglish ? en : tr;

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
      setError(localized('Şifreler uyuşmuyor. Lütfen tekrar kontrol edin.', 'Passwords do not match. Please check and try again.'));
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
        setError(localized('Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.', 'Connection error. Please check your internet connection and try again.'));
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
      title={localized("Yeni Şifrenizi Belirleyin", "Set Your New Password")}
      subtitle={localized("Güvenliğiniz için güçlü ve tahmin edilmesi zor yeni bir şifre seçin.", "For your security, choose a strong password that is difficult to guess.")}
    >
      {success ? (
        <div className="space-y-6 text-center animate-fade-in">
          <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm text-left">
            {localized('Şifreniz başarıyla güncellendi. Yeni şifrenizle giriş yapabilirsiniz.', 'Your password has been updated successfully. You can now sign in with your new password.')}
          </div>
          <Link
            to={loginLink}
            className="w-full flex items-center justify-center py-3.5 px-6 bg-[#FF7417] hover:bg-[#D35A00] text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
          >
            {localized('Giriş Yap', 'Sign In')}
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <AuthError message={error} />

          <FormInput
            label={localized("E-posta", "Email")}
            id="reset-email"
            type="email"
            required
            placeholder={localized("E-posta adresiniz", "Your email address")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            label={localized("Doğrulama / Reset Kodu", "Verification / Reset Code")}
            id="reset-code"
            type="text"
            required
            placeholder={localized("Sıfırlama kodu", "Reset code")}
            value={resetCode}
            onChange={(e) => setResetCode(e.target.value)}
          />

          <PasswordInput
            label={localized("Yeni Şifre", "New Password")}
            id="reset-password-1"
            required
            placeholder={localized("Yeni şifreniz", "Your new password")}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <PasswordInput
            label={localized("Yeni Şifre Tekrar", "Confirm New Password")}
            id="reset-password-2"
            required
            placeholder={localized("Yeni şifrenizi tekrar girin", "Enter your new password again")}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="pt-2">
            <AuthButton loading={loading}>{localized('Şifreyi Güncelle', 'Update Password')}</AuthButton>
          </div>

          <div className="text-center text-xs sm:text-sm font-medium pt-2 border-t border-slate-100">
            <Link
              to={loginLink}
              className="text-slate-500 hover:text-slate-800"
            >
              {localized('Giriş Ekranına Dön', 'Back to Sign In')}
            </Link>
          </div>
        </form>
      )}
    </AuthLayout>
  );
};
