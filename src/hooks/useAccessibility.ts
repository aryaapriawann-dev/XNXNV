/**
 * Hook for detecting reduced motion preference.
 * Returns true when the user has requested reduced motion in their OS settings.
 */
export function usePrefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;

  const [reduced, setReduced] = useState<boolean>(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);

    mediaQuery.addEventListener('change', handler);
    setReduced(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  return reduced;
}

/**
 * Hook for detecting if the user prefers a dark color scheme.
 * Returns true when the user prefers dark mode in their OS settings.
 */
export function usePrefersColorScheme(): 'light' | 'dark' | 'no-preference' {
  if (typeof window === 'undefined') return 'no-preference';

  const getScheme = (): 'light' | 'dark' | 'no-preference' => {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    if (match.matches) return 'dark';
    const lightMatch = window.matchMedia('(prefers-color-scheme: light)');
    if (lightMatch.matches) return 'light';
    return 'no-preference';
  };

  const [scheme, setScheme] = useState<'light' | 'dark' | 'no-preference'>(getScheme);

  useEffect(() => {
    const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const lightMedia = window.matchMedia('(prefers-color-scheme: light)');
    const handl|er = () => setScheme(getScheme());

    darkMedia.addEventListener('change', handler);
    lightMedia.addEventListener('change', handler);
    return () => {
      darkMedia.removeEventListener('change', handler);
      lightMedia.removeEventListener('change', handler);
    };
  }, []);

  return scheme;
}

/**
 * Hook for detecting high contrast mode preference.
 * Returns true when the user has enabled high contrast mode in their OS.
 */
export function usePrefersHighContrast(): boolean {
  if (typeof window === 'undefined') return false;

  const [highContrast, setHighContrast] = useState<boolean>(
    window.matchMedia('(prefers-contrast: high)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    const handler = (e: MediaQueryListEvent) => setHighContrast(e.matches);

    mediaQuery.addEventListener('change', handler);
    setHighContrast(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  return highContrast;
}

/**
 * Hook that returns all motion and accessibility preferences.
 */
export function useAccessibilityPreferences() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersColorScheme = usePrefersColorScheme();
  const prefersHighContrast = usePrefersHighContrast();

  return {
    prefersReducedMotion,
    prefersColorScheme,
    prefersHighContrast,
    shouldAnimate: !prefersReducedMotion,
    shouldUseHighContrastStyles: prefersHighContrast,
  };
}
