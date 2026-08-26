import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthLayout, FormInput, PasswordInput, AuthButton, AuthError } from './AuthComponents';

interface LoginPageProps {
  onLoginSuccess: (user: { email: string; name?: string }) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
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
    verified ? 'E-posta adresiniz başarıyla doğrulandı. Şimdi giriş yapabilirsiniz.' : null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);
    setInfoMessage(null);

    try {
      const response = await fetch('/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save minimal user metadata to track login state (no secret tokens in localStorage)
        const userObj = { email, name: data.name || email.split('@')[0] };
        localStorage.setItem('nct_user', JSON.stringify(userObj));
        onLoginSuccess(userObj);

        // Security check: prioritize redirect URL confirmed or provided by the backend.
        // If not provided, fallback to redirectUri from query parameters, or default to home '/'
        const targetUrl = data.redirectUrl || data.redirect_uri || redirectUri;
        if (targetUrl) {
          window.location.href = targetUrl;
        } else {
          navigate('/');
        }
      } else {
        setError(data.message || data.error || 'Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.');
      }
    } catch (err) {
      setError('Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.');
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
      title="Hesabınıza Giriş Yapın"
      subtitle="NCT hesabınızla uygulamalarınıza güvenli şekilde erişin."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthError message={error} />
        
        {infoMessage && (
          <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm text-left animate-fade-in">
            {infoMessage}
          </div>
        )}

        <FormInput
          label="E-posta"
          id="login-email"
          type="email"
          required
          placeholder="E-posta adresiniz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="space-y-1.5 w-full relative">
          <div className="flex items-center justify-between">
            <label htmlFor="login-password" className="block text-xs font-bold text-[#111827] uppercase tracking-wider">
              Şifre
            </label>
            <Link
              to={forgotPasswordLink}
              className="text-xs sm:text-sm font-semibold text-[#FF7417] hover:underline"
            >
              Şifremi Unuttum
            </Link>
          </div>
          <PasswordInput
            label=""
            id="login-password"
            required
            placeholder="Şifreniz"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="pt-2">
          <AuthButton loading={loading}>Giriş Yap</AuthButton>
        </div>

        <div className="text-center text-xs sm:text-sm text-slate-500 font-medium pt-4 border-t border-slate-100">
          <span>Hesabınız yok mu? </span>
          <Link
            to={signupLink}
            className="text-[#FF7417] font-bold hover:underline"
          >
            Hesap Oluştur
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
