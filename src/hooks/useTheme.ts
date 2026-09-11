import { useEffect, useState } from "react";
import { getTheme, resolveTheme, type Theme } from "@/lib/auth";

export function useTheme(theme: Theme = "system") {
  const [resolved, setResolved] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const resolvedTheme = resolveTheme(theme);
    setResolved(resolvedTheme);
    return () => {
      /* cleanup */
      ;
    };
  }, [theme]);

  return {
    theme: resolved,
    mounted,
    isDark: resolved === "dark",
    isLight: resolved === "light",
  };
}

export function useSystemTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? "dark" : "light");
    setTheme(media.matches ? "dark" : "light");
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return theme;
}
