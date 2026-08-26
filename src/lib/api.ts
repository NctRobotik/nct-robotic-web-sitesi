/// <reference types="vite/client" />
import { User } from "./types";

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

function extractDetail(body: unknown): string | null {
  if (!body || typeof body !== "object") return null;
  const detail = (body as { detail?: unknown }).detail;
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) {
    return detail
      .map((d) => (d && typeof d === "object" && "msg" in d ? String(d.msg) : JSON.stringify(d)))
      .join(", ");
  }
  return null;
}

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || (import.meta.env.DEV ? "/api" : "https://api.nctrobotic.com/api");

export function getApiUrl(path: string): string {
  const base = API_BASE_URL.endsWith("/") ? API_BASE_URL.slice(0, -1) : API_BASE_URL;

  if (typeof path !== "string") return path;

  let cleanPath = path;
  if (cleanPath.startsWith("https://api.nctrobotic.com")) {
    cleanPath = cleanPath.substring("https://api.nctrobotic.com".length);
  } else if (cleanPath.startsWith("http://api.nctrobotic.com")) {
    cleanPath = cleanPath.substring("http://api.nctrobotic.com".length);
  }

  if (cleanPath.startsWith("http://") || cleanPath.startsWith("https://") || cleanPath.startsWith("data:")) {
    return cleanPath;
  }

  if (cleanPath.startsWith("/api/")) {
    return `${base}/${cleanPath.substring(5)}`;
  }
  if (cleanPath === "/api") {
    return base;
  }

  const finalPath = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
  return `${base}${finalPath}`;
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const fetchUrl = getApiUrl(path);
  const res = await fetch(fetchUrl, {
    credentials: "include",
    ...init,
  });
  let body: unknown = null;
  const text = await res.text();
  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }
  }
  if (!res.ok) {
    throw new ApiError(res.status, extractDetail(body) ?? `Request failed (${res.status})`);
  }
  return body as T;
}

function qs(params: Record<string, string | number | null | undefined>): string {
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v !== null && v !== undefined && v !== "") sp.set(k, String(v));
  }
  const s = sp.toString();
  return s ? `?${s}` : "";
}

const json = (body: unknown): RequestInit => ({
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

export const api = {
  signIn: (email: string, password: string) =>
    request<{ access_token: string; token_type: string; user: User }>("/auth/signin", { method: "POST", ...json({ email, password }) }),
  
  signUp: (data: { name: string; surname?: string; email: string; password: string; role: string }) =>
    request<{ message: string; user: User }>("/auth/signup", { method: "POST", ...json(data) }),

  verifyEmail: (email: string, code: string) =>
    request<unknown>(`/auth/verify-email${qs({ email, code })}`, { method: "POST" }),

  resendVerificationEmail: (email: string) =>
    request<unknown>(`/auth/resend-verification-email${qs({ email })}`, { method: "POST" }),

  forgotPassword: (email: string) =>
    request<unknown>(`/auth/forgot-password${qs({ email })}`, { method: "POST" }),

  resetPassword: (email: string, resetCode: string, newPassword: string) =>
    request<unknown>(`/auth/reset-password${qs({ email, reset_code: resetCode, new_password: newPassword })}`, { method: "POST" }),

  signOut: () => request<unknown>("/auth/signout", { method: "POST" }),
  
  me: () => request<User>("/user/me"),

  updateMe: (name?: string, surname?: string) =>
    request<User>(`/user/update${qs({ name, surname })}`, { method: "PUT" }),

  resetMyPassword: (oldPassword: string, newPassword: string) =>
    request<unknown>(`/user/reset-password${qs({ old_password: oldPassword, new_password: newPassword })}`, { method: "PUT" }),
};
