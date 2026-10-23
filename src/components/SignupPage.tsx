import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthLayout, FormInput, PasswordInput, AuthButton, AuthError } from './AuthComponents';
import { api, ApiError } from '../lib/api';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();
  const isEnglish = i18n.resolvedLanguage?.startsWith('en') || i18n.language?.startsWith('en');
  const localized = (tr: string, en: string) => isEnglish ? en : tr;

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
        setError(localized('Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.', 'A connection error occurred. Please check your internet connection and try again.'));
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
      title={localized("Hesap Oluştur", "Create an Account")}
      subtitle={localized("NCT dünyasına katılın ve robotik eğitimlerinizi yönetmeye başlayın.", "Join the NCT community and start managing your robotics learning experience.")}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthError message={error} />

        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label={localized("Ad", "First Name")}
            id="signup-name"
            type="text"
            required
            placeholder={localized("Adınız", "Your first name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormInput
            label={localized("Soyad", "Last Name")}
            id="signup-surname"
            type="text"
            required
            placeholder={localized("Soyadınız", "Your last name")}
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <FormInput
          label={localized("E-posta", "Email")}
          id="signup-email"
          type="email"
          required
          placeholder={localized("E-posta adresiniz", "Your email address")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          label={localized("Şifre", "Password")}
          id="signup-password"
          required
          placeholder={localized("Şifreniz", "Your password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="pt-2">
          <AuthButton loading={loading}>{localized("Hesap Oluştur", "Create an Account")}</AuthButton>
        </div>

        <div className="text-center text-xs sm:text-sm text-slate-500 font-medium pt-2 border-t border-slate-100">
          <span>{localized("Zaten hesabınız var mı? ", "Already have an account? ")}</span>
          <Link
            to={loginLink}
            className="text-[#FF7417] font-bold hover:underline"
          >
            {localized("Giriş Yap", "Sign In")}
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
