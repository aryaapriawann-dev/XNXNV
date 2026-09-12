/**
 * Hook for generating unique IDs.
 *
 * @param prefix - ID prefix (default: 'id')
 * @returns unique ID string in format `${prefix}-{timestamp}-{random}`
 */
export function useId(prefix: string = 'id'): string {
  const [id] = useState(() => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `${prefix}-${timestamp}-${random}`;
  });

  return id;
}

/**
 * Hook for generating a unique ID without prefix.
 *
 * @returns UUID v4 formatted string
 */
export function useUUID(): string {
  const [uuid] = useState(() => {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    const hex = Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    const version = hex.substring(12, 16);
    const variant = hex.substring(16, 20);
    return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${version}-${variant}-${hex.substring(20, 32)}`;
  });

  return uuid;
}

/**
 * Hook for generating a short unique ID.
 *
 * @param length - length of the ID (default: 8)
 * @returns random alphanumeric string of specified length
 */
export function useShortId(length: number = 8): string {
  const [shortId] = useState(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  });

  return shortId;
}

/**
 * Hook for generating a hash ID from a string.
 *
 * @param input - string to hash
 * @param length - max length of hash (default: 8)
 * @returns hashed string of specified length
 */
export function useHashId(input: string, length: number = 8): string {
  const [hashId] = useState(() => {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    const hashStr = Math.abs(hash).toString(36);
    return hashStr.substring(0, length) || '0'.repeat(length);
  });

  return hashId;
}
