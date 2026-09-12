/**
 * Hook for parsing URL parameters.
 */
export function useUrlParams(): URLSearchParams {
  const [params, setParams] = useState<URLSearchParams>(() => {
    if (typeof window === 'undefined') return new URLSearchParams();
    return new URLSearchParams(window.location.search);
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = () => {
      setParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return params;
}

/**
 * Hook for getting a specific URL parameter.
 */
export function useUrlParam<T = string>(name: string, defaultValue?: T): T | undefined {
  const params = useUrlParams();
  const value = params.get(name);
  if (value === null) return defaultValue;
  return (value as unknown) as T;
}

/**
 * Hook for checking if a URL parameter exists.
 */
export function useHasUrlParam(name: string): boolean {
  const params = useUrlParams();
  return params.has(name);
}

/**
 * Hook for updating URL parameters and optionally navigating.
 *
 * @returns object with updateParam, removeParam, clearParams, and replaceHistory functions
 */
export function useUpdateUrlParams(): {
  updateParam: (name: string, value: string | null) => void;
  removeParam: (name: string) => void;
  clearParams: () => void;
  replaceHistory: (params: Record<string, string>) => void;
} {
  const updateParam = useCallback(
    (name: string, value: string | null) => {
      const params = new URLSearchParams(window.location.search);
      if (value === null) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      const newQuery = params.toString();
      const newUrl = `${window.location.pathname}${newQuery ? `?${newQuery}` : ''}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
      window.dispatchEvent(new PopStateEvent('popstate'));
    },
    []
  );

  const removeParam = useCallback(
    (name: string) => {
      const params = new URLSearchParams(window.location.search);
      params.delete(name);
      const newQuery = params.toString();
      const newUrl = `${window.location.pathname}${newQuery ? `?${newQuery}` : ''}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
      window.dispatchEvent(new PopStateEvent('popstate'));
    },
    []
  );

  const clearParams = useCallback(() => {
    window.history.pushState({ path: window.location.pathname }, '', window.location.pathname);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }, []);

  const replaceHistory = useCallback(
    (params: Record<string, string>) => {
      const currentParams = new URLSearchParams(window.location.search);
      Object.entries(params).forEach(([key, value]) => currentParams.set(key, value));
      const newQuery = currentParams.toString();
      const newUrl = `${window.location.pathname}${newQuery ? `?${newQuery}` : ''}`;
      window.history.replaceState({ path: newUrl }, '', newUrl);
      window.dispatchEvent(new PopStateEvent('popstate'));
    },
    []
  );

  return { updateParam, removeParam, clearParams, replaceHistory };
}
