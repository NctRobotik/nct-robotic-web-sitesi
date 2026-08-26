import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthLayout, FormInput, PasswordInput, AuthButton, AuthError } from './AuthComponents';
import { api, ApiError } from '../lib/api';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
        setError('Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.');
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
      title="Hesap Oluştur"
      subtitle="NCT dünyasına katılın ve robotik eğitimlerinizi yönetmeye başlayın."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthError message={error} />

        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label="Ad"
            id="signup-name"
            type="text"
            required
            placeholder="Adınız"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormInput
            label="Soyad"
            id="signup-surname"
            type="text"
            required
            placeholder="Soyadınız"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <FormInput
          label="E-posta"
          id="signup-email"
          type="email"
          required
          placeholder="E-posta adresiniz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          label="Şifre"
          id="signup-password"
          required
          placeholder="Şifreniz"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="pt-2">
          <AuthButton loading={loading}>Hesap Oluştur</AuthButton>
        </div>

        <div className="text-center text-xs sm:text-sm text-slate-500 font-medium pt-2 border-t border-slate-100">
          <span>Zaten hesabınız var mı? </span>
          <Link
            to={loginLink}
            className="text-[#FF7417] font-bold hover:underline"
          >
            Giriş Yap
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
