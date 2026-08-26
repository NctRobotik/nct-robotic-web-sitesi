import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, KeyRound, CheckCircle2, AlertCircle } from 'lucide-react';
import { api, ApiError } from '../lib/api';
import { User as UserType } from '../lib/types';

interface ProfilePageProps {
  user: { email: string; name?: string } | null;
  onUserUpdate: (user: { email: string; name?: string } | null) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user, onUserUpdate }) => {
  const navigate = useNavigate();
  const [fullUser, setFullUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  // Profile Edit fields
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [profileBusy, setProfileBusy] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState<string | null>(null);
  const [profileError, setProfileError] = useState<string | null>(null);

  // Password fields
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordBusy, setPasswordBusy] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top immediately on mount
    window.scrollTo(0, 0);

    // If not logged in, redirect to login page
    if (!user) {
      navigate('/login');
      return;
    }

    const loadProfile = async () => {
      try {
        const data = await api.me();
        setFullUser(data);
        setName(data.name || '');
        setSurname(data.surname || '');
      } catch (err) {
        console.error('Failed to load profile:', err);
        localStorage.removeItem('nct_user');
        onUserUpdate(null);
        navigate('/login');
      } finally {
        setLoading(false);
        // Force scroll to top after loading finishes and state updates
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      }
    };

    loadProfile();
  }, [user, navigate]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (profileBusy) return;
    if (!name.trim()) {
      setProfileError('Ad alanı boş bırakılamaz.');
      return;
    }

    setProfileBusy(true);
    setProfileSuccess(null);
    setProfileError(null);

    try {
      const updated = await api.updateMe(name, surname || undefined);
      setFullUser(updated);
      onUserUpdate({ email: updated.email, name: updated.name });
      setProfileSuccess('Profil bilgileriniz başarıyla güncellendi.');
    } catch (err) {
      if (err instanceof ApiError) {
        setProfileError(err.message);
      } else {
        setProfileError('Profil güncellenirken hata oluştu.');
      }
    } finally {
      setProfileBusy(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordBusy) return;
    if (!oldPassword || !newPassword) {
      setPasswordError('Lütfen tüm şifre alanlarını doldurun.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('Yeni şifreler uyuşmuyor.');
      return;
    }

    setPasswordBusy(true);
    setPasswordSuccess(null);
    setPasswordError(null);

    try {
      await api.resetMyPassword(oldPassword, newPassword);
      setPasswordSuccess('Şifreniz başarıyla değiştirildi.');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      if (err instanceof ApiError) {
        setPasswordError(err.message);
      } else {
        setPasswordError('Şifre değiştirilirken hata oluştu.');
      }
    } finally {
      setPasswordBusy(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-slate-500 font-medium text-sm">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-5">
          <h1 className="text-3xl font-black text-[#111827] tracking-tight">Hesabım</h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Kişisel bilgilerinizi yönetin ve şifrenizi güncelleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Card 1: Personal Profile */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#FF7417]/10 rounded-xl text-[#FF7417]">
                <User className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[#111827]">Profil Bilgileri</h2>
            </div>

            {fullUser && (
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="h-12 w-12 rounded-full bg-[#FF7417] text-white flex items-center justify-center text-lg font-extrabold shadow-inner">
                  {fullUser.name?.[0]?.toUpperCase() ?? '?'}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-[#111827] truncate">
                    {fullUser.name} {fullUser.surname || ''}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-slate-500 font-mono truncate">{fullUser.email}</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FF7417]/10 text-[#FF7417] border border-[#FF7417]/20 uppercase tracking-wider">
                      {fullUser.role}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              {profileSuccess && (
                <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-green-600" />
                  <span>{profileSuccess}</span>
                </div>
              )}
              {profileError && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                  <span>{profileError}</span>
                </div>
              )}

              <div>
                <label htmlFor="profile-name" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Ad *
                </label>
                <input
                  type="text"
                  id="profile-name"
                  required
                  placeholder="Adınız"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FF7417]"
                />
              </div>

              <div>
                <label htmlFor="profile-surname" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Soyad
                </label>
                <input
                  type="text"
                  id="profile-surname"
                  placeholder="Soyadınız"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FF7417]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={profileBusy}
                  className="w-full h-11 flex items-center justify-center bg-[#FF7417] hover:bg-[#D35A00] text-white font-bold text-sm rounded-xl transition-colors disabled:bg-slate-300"
                >
                  {profileBusy ? 'Güncelleniyor...' : 'Profil Güncelle'}
                </button>
              </div>
            </form>
          </div>

          {/* Card 2: Password Update */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#FF7417]/10 rounded-xl text-[#FF7417]">
                <KeyRound className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[#111827]">Şifre Değiştir</h2>
            </div>

            <form onSubmit={handleResetPassword} className="space-y-4">
              {passwordSuccess && (
                <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-green-600" />
                  <span>{passwordSuccess}</span>
                </div>
              )}
              {passwordError && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                  <span>{passwordError}</span>
                </div>
              )}

              <div>
                <label htmlFor="old-password" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Mevcut Şifre *
                </label>
                <input
                  type="password"
                  id="old-password"
                  required
                  placeholder="••••••••"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FF7417]"
                />
              </div>

              <div>
                <label htmlFor="new-password" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Yeni Şifre *
                </label>
                <input
                  type="password"
                  id="new-password"
                  required
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FF7417]"
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Yeni Şifre Tekrar *
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  required
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#FF7417]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={passwordBusy}
                  className="w-full h-11 flex items-center justify-center bg-[#FF7417] hover:bg-[#D35A00] text-white font-bold text-sm rounded-xl transition-colors disabled:bg-slate-300"
                >
                  {passwordBusy ? 'Şifre Değiştiriliyor...' : 'Şifreyi Güncelle'}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
