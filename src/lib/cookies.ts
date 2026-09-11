import { cookies } from "next/headers";
import { THEME_KEY, CONSENT_KEY } from "./constants";

export type Theme = "light" | "dark" | "system";

export function getTheme(): string {
  if (typeof window === "undefined") return "system";
  const cookieStore = cookies();
  return cookieStore.get(THEME_KEY)?.value || "system";
}

export function setTheme(theme: Theme): void {
  if (typeof window === "undefined") return;
  cookies().set(THEME_KEY, theme, { maxAge: 60 * 60 * 24 * 365, path: "/" });
}

export function getConsent(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  const cookieStore = cookies();
  const value = cookieStore.get(CONSENT_KEY)?.value;
  if (!value) return {};
  try {
    return JSON.parse(value) as Record<string, boolean>;
  } catch {
    return {};
  }
}

export function setConsent(consent: Record<string, boolean>): void {
  if (typeof window === "undefined") return;
  cookies().set(CONSENT_KEY, JSON.stringify(consent), {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
}

export function removeConsent(key: string): void {
  const current = getConsent();
  delete current[key];
  setConsent(current);
}
