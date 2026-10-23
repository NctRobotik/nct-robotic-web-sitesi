import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { AuthLayout, FormInput, PasswordInput, AuthButton, AuthError } from './AuthComponents';
import { api, ApiError } from '../lib/api';

export const ForgotPasswordPage: React.FC = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const isEnglish = i18n.resolvedLanguage?.startsWith('en') || i18n.language.startsWith('en');
  const tr = (turkish: string, english: string) => isEnglish ? english : turkish;

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
        setError(tr('Bağlantı hatası oluştu. Lütfen e-posta adresinizi kontrol edip tekrar deneyin.', 'A connection error occurred. Please check your email address and try again.'));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (newPassword !== confirmPassword) {
      setError(tr('Şifreler uyuşmuyor. Lütfen tekrar kontrol edin.', 'Passwords do not match. Please check and try again.'));
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
        setError(tr('Şifre sıfırlanamadı. Kod geçersiz veya süresi dolmuş olabilir.', 'Password could not be reset. The code may be invalid or expired.'));
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
          ? tr('Şifrenizi mi unuttunuz?', 'Forgot Your Password?')
          : step === 'reset'
          ? tr('Yeni Şifre Belirleyin', 'Set a New Password')
          : tr('Şifreniz Sıfırlandı', 'Password Reset Successful')
      }
      subtitle={
        step === 'request'
          ? tr('E-posta adresinizi girin, şifrenizi sıfırlamanız için gerekli kodu gönderelim.', 'Enter your email address and we will send you a code to reset your password.')
          : step === 'reset'
          ? tr(`${email} adresine gönderilen sıfırlama kodunu girip yeni şifrenizi belirleyin.`, `Enter the reset code sent to ${email} and set your new password.`)
          : tr('Yeni şifreniz başarıyla kaydedildi. Şimdi giriş yapabilirsiniz.', 'Your new password has been saved successfully. You can now sign in.')
      }
    >
      {step === 'success' && (
        <div className="space-y-6 text-center animate-fade-in">
          <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm text-left">
            {tr('Şifreniz başarıyla güncellendi. Yeni şifrenizle giriş yapabilirsiniz.', 'Your password has been updated successfully. You can now sign in with your new password.')}
          </div>
          <Link
            to={loginLink}
            className="w-full flex items-center justify-center py-3.5 px-6 bg-[#FF7417] hover:bg-[#D35A00] text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
          >
            {tr('Giriş Yap', 'Sign In')}
          </Link>
        </div>
      )}

      {step === 'request' && (
        <form onSubmit={handleRequestCode} className="space-y-5 animate-fade-in">
          <AuthError message={error} />

          <FormInput
            label={tr('E-posta', 'Email')}
            id="forgot-email"
            type="email"
            required
            placeholder={tr('E-posta adresiniz', 'Your email address')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="pt-2">
            <AuthButton loading={loading}>{tr('Sıfırlama Kodu Gönder', 'Send Reset Code')}</AuthButton>
          </div>

          <div className="text-center text-xs sm:text-sm font-medium pt-2 border-t border-slate-100">
            <Link
              to={loginLink}
              className="text-[#FF7417] hover:underline"
            >
              {tr('Giriş Ekranına Dön', 'Back to Sign In')}
            </Link>
          </div>
        </form>
      )}

      {step === 'reset' && (
        <form onSubmit={handleResetPassword} className="space-y-5 animate-fade-in">
          <AuthError message={error} />

          <FormInput
            label={tr('Sıfırlama Kodu', 'Reset Code')}
            id="reset-code"
            type="text"
            required
            placeholder={tr('E-postanıza gelen kod', 'Code sent to your email')}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <PasswordInput
            label={tr('Yeni Şifre', 'New Password')}
            id="reset-password-1"
            required
            placeholder={tr('Yeni şifreniz', 'Your new password')}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <PasswordInput
            label={tr('Yeni Şifre Tekrar', 'Confirm New Password')}
            id="reset-password-2"
            required
            placeholder={tr('Yeni şifrenizi tekrar girin', 'Re-enter your new password')}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="pt-2">
            <AuthButton loading={loading}>{tr('Şifreyi Sıfırla', 'Reset Password')}</AuthButton>
          </div>

          <div className="text-center text-xs sm:text-sm font-medium pt-2 border-t border-slate-100 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setStep('request')}
              className="text-[#FF7417] hover:underline font-bold text-center"
            >
              {tr('Kodu Tekrar Gönder', 'Resend Code')}
            </button>
            <Link
              to={loginLink}
              className="text-slate-500 hover:text-slate-800"
            >
              {tr('Giriş Ekranına Dön', 'Back to Sign In')}
            </Link>
          </div>
        </form>
      )}
    </AuthLayout>
  );
};
