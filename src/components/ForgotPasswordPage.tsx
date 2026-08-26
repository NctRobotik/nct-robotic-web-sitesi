import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AuthLayout, FormInput, PasswordInput, AuthButton, AuthError } from './AuthComponents';
import { api, ApiError } from '../lib/api';

export const ForgotPasswordPage: React.FC = () => {
  const location = useLocation();

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
        setError('Bağlantı hatası oluştu. Lütfen e-posta adresinizi kontrol edip tekrar deneyin.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (newPassword !== confirmPassword) {
      setError('Şifreler uyuşmuyor. Lütfen tekrar kontrol edin.');
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
        setError('Şifre sıfırlanamadı. Kod geçersiz veya süresi dolmuş olabilir.');
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
          ? 'Şifrenizi mi unuttunuz?'
          : step === 'reset'
          ? 'Yeni Şifre Belirleyin'
          : 'Şifreniz Sıfırlandı'
      }
      subtitle={
        step === 'request'
          ? 'E-posta adresinizi girin, şifrenizi sıfırlamanız için gerekli kodu gönderelim.'
          : step === 'reset'
          ? `${email} adresine gönderilen sıfırlama kodunu girip yeni şifrenizi belirleyin.`
          : 'Yeni şifreniz başarıyla kaydedildi. Şimdi giriş yapabilirsiniz.'
      }
    >
      {step === 'success' && (
        <div className="space-y-6 text-center animate-fade-in">
          <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm text-left">
            Şifreniz başarıyla güncellendi. Yeni şifrenizle giriş yapabilirsiniz.
          </div>
          <Link
            to={loginLink}
            className="w-full flex items-center justify-center py-3.5 px-6 bg-[#FF7417] hover:bg-[#D35A00] text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
          >
            Giriş Yap
          </Link>
        </div>
      )}

      {step === 'request' && (
        <form onSubmit={handleRequestCode} className="space-y-5 animate-fade-in">
          <AuthError message={error} />

          <FormInput
            label="E-posta"
            id="forgot-email"
            type="email"
            required
            placeholder="E-posta adresiniz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="pt-2">
            <AuthButton loading={loading}>Sıfırlama Kodu Gönder</AuthButton>
          </div>

          <div className="text-center text-xs sm:text-sm font-medium pt-2 border-t border-slate-100">
            <Link
              to={loginLink}
              className="text-[#FF7417] hover:underline"
            >
              Giriş Ekranına Dön
            </Link>
          </div>
        </form>
      )}

      {step === 'reset' && (
        <form onSubmit={handleResetPassword} className="space-y-5 animate-fade-in">
          <AuthError message={error} />

          <FormInput
            label="Sıfırlama Kodu"
            id="reset-code"
            type="text"
            required
            placeholder="E-postanıza gelen kod"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <PasswordInput
            label="Yeni Şifre"
            id="reset-password-1"
            required
            placeholder="Yeni şifreniz"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <PasswordInput
            label="Yeni Şifre Tekrar"
            id="reset-password-2"
            required
            placeholder="Yeni şifrenizi tekrar girin"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="pt-2">
            <AuthButton loading={loading}>Şifreyi Sıfırla</AuthButton>
          </div>

          <div className="text-center text-xs sm:text-sm font-medium pt-2 border-t border-slate-100 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setStep('request')}
              className="text-[#FF7417] hover:underline font-bold text-center"
            >
              Kodu Tekrar Gönder
            </button>
            <Link
              to={loginLink}
              className="text-slate-500 hover:text-slate-800"
            >
              Giriş Ekranına Dön
            </Link>
          </div>
        </form>
      )}
    </AuthLayout>
  );
};
