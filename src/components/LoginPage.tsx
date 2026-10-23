import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthLayout, FormInput, PasswordInput, AuthButton, AuthError } from './AuthComponents';
import { api, ApiError } from '../lib/api';

interface LoginPageProps {
  onLoginSuccess: (user: { email: string; name?: string }) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language?.toLowerCase().startsWith('en');
  const localized = (tr: string, en: string) => isEnglish ? en : tr;
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract redirect_uri from URL query params (which can be null)
  const queryParams = new URLSearchParams(location.search);
  const redirectUri = queryParams.get('redirect_uri');
  const verified = queryParams.get('verified') === 'true';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(
    verified ? (i18n.language?.toLowerCase().startsWith('en') ? 'Your email address has been verified. You can now sign in.' : 'E-posta adresiniz başarıyla doğrulandı. Şimdi giriş yapabilirsiniz.') : null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);
    setInfoMessage(null);

    try {
      const data = await api.signIn(email, password);

      // Save minimal user metadata to track login state (no secret tokens in localStorage)
      const userObj = { email, name: data.user?.name || email.split('@')[0] };
      localStorage.setItem('nct_user', JSON.stringify(userObj));
      onLoginSuccess(userObj);

      // Security check: prioritize redirect URL confirmed or provided by the backend.
      // If not provided, fallback to redirectUri from query parameters, or default to home '/'
      // In reference API, redirectUrl might not exist on data but check anyway
      const dataAny = data as any;
      const targetUrl = dataAny.redirectUrl || dataAny.redirect_uri || redirectUri;
      if (targetUrl) {
        window.location.href = targetUrl;
      } else {
        navigate('/');
      }
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

  const signupLink = redirectUri
    ? `/signup?redirect_uri=${encodeURIComponent(redirectUri)}`
    : '/signup';

  const forgotPasswordLink = redirectUri
    ? `/forgot-password?redirect_uri=${encodeURIComponent(redirectUri)}`
    : '/forgot-password';

  return (
    <AuthLayout
      title={localized('Hesabınıza Giriş Yapın', 'Sign In to Your Account')}
      subtitle={localized('NCT hesabınızla uygulamalarınıza güvenli şekilde erişin.', 'Securely access your applications with your NCT account.')}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthError message={error} />
        
        {infoMessage && (
          <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm text-left animate-fade-in">
            {infoMessage}
          </div>
        )}

        <FormInput
          label={localized('E-posta', 'Email')}
          id="login-email"
          type="email"
          required
          placeholder={localized('E-posta adresiniz', 'Your email address')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="space-y-1.5 w-full relative">
          <div className="flex items-center justify-between">
            <label htmlFor="login-password" className="block text-xs font-bold text-[#111827] uppercase tracking-wider">
              {localized('Şifre', 'Password')}
            </label>
            <Link
              to={forgotPasswordLink}
              className="text-xs sm:text-sm font-semibold text-[#FF7417] hover:underline"
            >
              {localized('Şifremi Unuttum', 'Forgot Password?')}
            </Link>
          </div>
          <PasswordInput
            label=""
            id="login-password"
            required
            placeholder={localized('Şifreniz', 'Your password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="pt-2">
          <AuthButton loading={loading}>{localized('Giriş Yap', 'Sign In')}</AuthButton>
        </div>

        <div className="text-center text-xs sm:text-sm text-slate-500 font-medium pt-4 border-t border-slate-100">
          <span>{localized('Hesabınız yok mu? ', "Don't have an account? " )}</span>
          <Link
            to={signupLink}
            className="text-[#FF7417] font-bold hover:underline"
          >
            {localized('Hesap Oluştur', 'Create an Account')}
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
