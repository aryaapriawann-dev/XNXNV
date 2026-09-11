import { useEffect, useState } from "react";

interface UseMediaQueryState {
  matches: boolean;
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}

export function useMediaQuery(
  query: string,
  initialState = false
): boolean {
  const [matches, setMatches] = useState(initialState);

  useEffect(() => {
    if (typeof window == "undefined") {
      return;
    }
    const media = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    setMatches(media.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

export function useScreenSize(): UseMediaQueryState {
  const matches = useMediaQuery("(min-width: 0px)", true);
  const mobile = useMediaQuery("(max-width: 767px)", false);
  const tablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)", false);
  const desktop = useMediaQuery("(min-width: 1024px)", false);

  return { matches, mobile, tablet, desktop };
}

export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)", false);
}

export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window == "undefined") {
      return;
    }
    setIsTouch(
      "ontouchstart" in window ||
        (window as unknown as { DocumentTouch?: unknown }).DocumentTouch ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    );
  }, []);

  return isTouch;
}
