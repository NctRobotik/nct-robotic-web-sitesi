import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthLayout, FormInput, PasswordInput, AuthButton, AuthError } from './AuthComponents';
import { api, ApiError } from '../lib/api';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  // Extract redirect_uri from URL query params
  const queryParams = new URLSearchParams(location.search);
  const redirectUri = queryParams.get('redirect_uri');

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      await api.signUp({
        name,
        surname,
        email,
        password,
        role: 'user', // Hardcoded as requested, cannot be changed by user
      });

      // Redirect to email verification page, preserving fields in parameters
      const encodedEmail = encodeURIComponent(email);
      const encodedRedirect = redirectUri ? `&redirect_uri=${encodeURIComponent(redirectUri)}` : '';
      navigate(`/verify-email?email=${encodedEmail}${encodedRedirect}`);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError(t('signup.connectionError'));
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
      title={t('signup.title')}
      subtitle={t('signup.subtitle')}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthError message={error} />

        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label={t('signup.nameLabel')}
            id="signup-name"
            type="text"
            required
            placeholder={t('signup.namePlaceholder')}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormInput
            label={t('signup.surnameLabel')}
            id="signup-surname"
            type="text"
            required
            placeholder={t('signup.surnamePlaceholder')}
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <FormInput
          label={t('signup.emailLabel')}
          id="signup-email"
          type="email"
          required
          placeholder={t('signup.emailPlaceholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          label={t('signup.passwordLabel')}
          id="signup-password"
          required
          placeholder={t('signup.passwordPlaceholder')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="pt-2">
          <AuthButton loading={loading}>{t('signup.submitButton')}</AuthButton>
        </div>

        <div className="text-center text-xs sm:text-sm text-slate-500 font-medium pt-2 border-t border-slate-100">
          <span>{t('signup.alreadyAccountPrompt')}</span>
          <Link
            to={loginLink}
            className="text-[#FF7417] font-bold hover:underline"
          >
            {t('signup.loginLink')}
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
