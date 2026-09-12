import { useEffect, useState } from "react";

interface UseMediaQueryState {
  matches: boolean;
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}

/**
 * Track media query match state
 * Re-evaluates on resize and matches change
 *
 * @param query - CSS media query string (e.g. '(max-width: 768px)')
 * @param initialState - initial matches state (default: false)
 * @returns true when the media query matches
 */
export function useMediaQuery(
  query: string,
  initialState = false
): boolean {
  const [matches, setMatches] = useState(initialState);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
