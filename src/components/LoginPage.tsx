import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthLayout, FormInput, PasswordInput, AuthButton, AuthError } from './AuthComponents';
import { api, ApiError } from '../lib/api';

interface LoginPageProps {
  onLoginSuccess: (user: { email: string; name?: string }) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const { t } = useTranslation();
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
    verified ? t('login.verifiedSuccess') : null
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
        setError(t('login.connectionError'));
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
      title={t('login.title')}
      subtitle={t('login.subtitle')}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthError message={error} />
        
        {infoMessage && (
          <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm text-left animate-fade-in">
            {infoMessage}
          </div>
        )}

        <FormInput
          label={t('login.emailLabel')}
          id="login-email"
          type="email"
          required
          placeholder={t('login.emailPlaceholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="space-y-1.5 w-full relative">
          <div className="flex items-center justify-between">
            <label htmlFor="login-password" className="block text-xs font-bold text-[#111827] uppercase tracking-wider">
              {t('login.passwordLabel')}
            </label>
            <Link
              to={forgotPasswordLink}
              className="text-xs sm:text-sm font-semibold text-[#FF7417] hover:underline"
            >
              {t('login.forgotPassword')}
            </Link>
          </div>
          <PasswordInput
            label=""
            id="login-password"
            required
            placeholder={t('login.passwordPlaceholder')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="pt-2">
          <AuthButton loading={loading}>{t('login.submitButton')}</AuthButton>
        </div>

        <div className="text-center text-xs sm:text-sm text-slate-500 font-medium pt-4 border-t border-slate-100">
          <span>{t('login.noAccountPrompt')}</span>
          <Link
            to={signupLink}
            className="text-[#FF7417] font-bold hover:underline"
          >
            {t('login.signupLink')}
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
