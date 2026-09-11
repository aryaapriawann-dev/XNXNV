import { useCallback } from 'react';

const isStorageAvailable = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

interface UseLocalStorageOptions<T> {
  serialize?: (value: T) => string;
  deserialize?: (value: string) => T;
  onError?: (error: unknown) => void;
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  options: UseLocalStorageOptions<T> = {}
): [T, (value: T | ((prev: T) => T)) => void] {
  const { serialize = JSON.stringify, deserialize = JSON.parse, onError } = options;

  if (!isStorageAvailable) {
    return [initialValue, () => {}];
  }

  try {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue !== null) {
      try {
        const parsed = deserialize(storedValue);
        return [parsed, setStoredValue];
      } catch {
        // If deserialization fails, return initial value
      }
    }
  } catch (error) {
    onError?.(error);
  }

  return [initialValue, setStoredValue];

  function setStoredValue(value: T | ((prev: T) => T)) {
    try {
      const valueToStore = value instanceof Function ? value(initialValue) : value;
      window.localStorage.setItem(key, serialize(valueToStore));
    } catch (error) {
      onError?.(error);
    }
  }
}

export function useSessionStorage<T>(
  key: string,
  initialValue: T,
  options: UseLocalStorageOptions<T> = {}
): [T, (value: T | ((prev: T) => T)) => void] {
  const { serialize = JSON.stringify, deserialize = JSON.parse, onError } = options;

  if (!isStorageAvailable) {
    return [initialValue, () => {}];
  }

  try {
    const storedValue = window.sessionStorage.getItem(key);
    if (storedValue !== null) {
      try {
        const parsed = deserialize(storedValue);
        return [parsed, setStoredValueSession];
      } catch {
        // If deserialization fails, return initial value
      }
    }
  } catch (error) {
    onError?.(error);
  }

  return [initialValue, setStoredValueSession];

  function setStoredValueSession(value: T | ((prev: T) => T)) {
    try {
      const valueToStore = value instanceof Function ? value(initialValue) : value;
      window.sessionStorage.setItem(key, serialize(valueToStore));
    } catch (error) {
      onError?.(error);
    }
  }
}

export function useCookieStorage<T>(
  key: string,
  initialValue: T,
  options: UseLocalStorageOptions<T> = {}
): [T, (value: T | ((prev: T) => T)) => void] {
  const { serialize = JSON.stringify, deserialize = JSON.parse, onError } = options;

  if (!isStorageAvailable) {
    return [initialValue, () => {}];
  }

  const cookieValue = typeof document !== 'undefined'
    ? document.cookie
        .split('; ')
        .find(row => row.startsWith(`${key}=`))
        ?.split('=')[1]
    : null;

  let storedValue = initialValue;
  if (cookieValue) {
    try {
      storedValue = deserialize(decodeURIComponent(cookieValue));
    } catch {
      // If deserialization fails, use initial value
    }
  }

  return [storedValue, setStoredValueCookie];

  function setStoredValueCookie(value: T | ((prev: T) => T)) {
    try {
      const valueToStore = value instanceof Function ? value(initialValue) : value;
      const encoded = encodeURIComponent(serialize(valueToStore));
      document.cookie = `${key}=${encoded}; path=/; max-age=${60 * 60 * 24 * 365}`;
    } catch (error) {
      onError?.(error);
    }
  }
}
