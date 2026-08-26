import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthLayout, FormInput, AuthButton, AuthError } from './AuthComponents';
import { api, ApiError } from '../lib/api';

export const VerifyEmailPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract email and redirect_uri from URL query params
  const queryParams = new URLSearchParams(location.search);
  const initialEmail = queryParams.get('email') || '';
  const redirectUri = queryParams.get('redirect_uri');

  const [email, setEmail] = useState(initialEmail);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(
    initialEmail ? `${initialEmail} adresine bir doğrulama kodu gönderildi.` : null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);
    setInfoMessage(null);

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
        setError('Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (resending) return;

    if (!email) {
      setError('Lütfen e-posta adresinizi girin.');
      return;
    }

    setResending(true);
    setError(null);
    setInfoMessage(null);

    try {
      await api.resendVerificationEmail(email);
      setInfoMessage('Doğrulama e-postası tekrar gönderildi. Lütfen gelen kutunuzu kontrol edin.');
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('Bağlantı hatası oluştu. Lütfen tekrar deneyin.');
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
      title="E-posta Adresinizi Doğrulayın"
      subtitle="Kaydınızı tamamlamak için e-posta adresinize gönderilen doğrulama kodunu girin."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthError message={error} />

        {infoMessage && (
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm text-left animate-fade-in">
            {infoMessage}
          </div>
        )}

        <FormInput
          label="E-posta"
          id="verification-email"
          type="email"
          required
          placeholder="E-posta adresiniz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          label="Doğrulama Kodu"
          id="verification-code"
          type="text"
          required
          placeholder="Doğrulama kodu"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div className="pt-2">
          <AuthButton loading={loading}>E-postayı Doğrula</AuthButton>
        </div>

        <div className="flex flex-col gap-3 pt-3 border-t border-slate-100 text-center text-xs sm:text-sm font-medium">
          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="text-[#FF7417] hover:underline focus:outline-none disabled:text-slate-400 font-bold"
          >
            {resending ? 'Gönderiliyor...' : 'Doğrulama Kodunu Tekrar Gönder'}
          </button>
          
          <Link
            to={loginLink}
            className="text-slate-500 hover:text-slate-800"
          >
            Giriş ekranına geri dön
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
