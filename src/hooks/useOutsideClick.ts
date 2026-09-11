/**
 * Hook for detecting click outside a referenced element.
 */
export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void,
  events?: readonly string[]
): void {
  const { current } = ref;
  const savedHandler = useCallback(handler, [handler]);

  useEffect(() => {
    if (typeof window === 'undefined' || !current) return;

    const onClick = (event: MouseEvent) => {
      if (!current.contains(event.target as Node)) {
        savedHandler();
      }
    };

    const eventArray = events || ['mousedown', 'touchstart'];
    eventArray.forEach((event) => {
      document.addEventListener(event, onClick);
    });

    return () => {
      eventArray.forEach((event) => {
        document.removeEventListener(event, onClick);
      });
    };
  }, [ref, savedHandler, events]);
}

/**
 * Hook for calculating click position relative to a referenced element.
 */
export function useClickPosition<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>
): { x: number; y: number; relativeX: number; relativeY: number } | null {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
    relativeX: number;
    relativeY: number;
  } | null>(null);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      setPosition({
        x: event.clientX,
        y: event.clientY,
        relativeX: event.clientX - rect.left,
        relativeY: event.clientY - rect.top,
      });
    },
    [ref]
  );

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return;

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, handleClick]);

  return position;
}
