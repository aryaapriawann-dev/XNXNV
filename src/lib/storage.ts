/**
 * Safely get item from localStorage with fallback
 */
export function getLocalStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

/**
 * Safely set item to localStorage
 */
export function setLocalStorage<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Failed to save to localStorage:", error);
  }
}

/**
 * Remove item from localStorage
 */
export function removeLocalStorage(key: string): void {
  if (typeof window === "undefined") return;
  
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error("Failed to remove from localStorage:", error);
  }
}

/**
 * Clear all localStorage items
 */
export function clearLocalStorage(): void {
  if (typeof window === "undefined") return;
  
  try {
    window.localStorage.clear();
  } catch (error) {
    console.error("Failed to clear localStorage:", error);
  }
}
