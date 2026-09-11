import { Cookies } from "next/headers";
import { THEME_KEY } from "./constants";

export type Theme = "light" | "dark" | "system";

export function getTheme(): Theme {
  const cookieStore = Cookies();
  const value = cookieStore.get(THEME_KEY);
  if (!value || !value.value) return "system";
  if (["light", "dark", "system"].includes(value.value)) {
    return value.value as Theme;
  }
  return "system";
}

export function setTheme(theme: Theme): void {
  const cookieStore = Cookies();
  cookieStore.set(THEME_KEY, theme, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}

export function getPreferredTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    return getPreferredTheme();
  }
  return theme;
}
