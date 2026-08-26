import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AuthLayout, FormInput, AuthButton, AuthError } from './AuthComponents';

export const ForgotPasswordPage: React.FC = () => {
  const location = useLocation();

  // Extract redirect_uri from URL query params
  const queryParams = new URLSearchParams(location.search);
  const redirectUri = queryParams.get('redirect_uri');

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // API call using query parameter (No JSON body)
      const url = `/auth/forgot-password?email=${encodeURIComponent(email)}`;
      const response = await fetch(url, {
        method: 'POST',
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data.message || data.error || 'Şifre sıfırlama talebi gönderilemedi.');
      }
    } catch (err) {
      setError('Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const loginLink = redirectUri
    ? `/login?redirect_uri=${encodeURIComponent(redirectUri)}`
    : '/login';

  return (
    <AuthLayout
      title="Şifrenizi mi unuttunuz?"
      subtitle="E-posta adresinizi girin, şifrenizi yenilemeniz için gerekli bağlantıyı gönderelim."
    >
      {success ? (
        <div className="space-y-6 text-center animate-fade-in">
          <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm text-left">
            Şifre sıfırlama bağlantısı e-posta adresinize gönderildi. Lütfen gelen kutunuzu (ve spam klasörünü) kontrol edin.
          </div>
          <Link
            to={loginLink}
            className="w-full flex items-center justify-center py-3.5 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition-colors border border-slate-200"
          >
            Giriş ekranına geri dön
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
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
            <AuthButton loading={loading}>Bağlantı Gönder</AuthButton>
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
    </AuthLayout>
  );
};
