import { useEffect, useState } from 'react';
import { Theme, getThemeFromStorage, setThemeToStorage, isDarkTheme } from './theme';

interface UseThemeResult {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const [theme, setThemeState] = useState<Theme>(getThemeFromStorage);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => isDarkTheme(getThemeFromStorage()));

  useEffect(() => {
    const dark = isDarkTheme(theme);
    setResolvedTheme(dark ? 'dark' : 'light');

    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', dark);
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setThemeToStorage(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  };

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  };
}
