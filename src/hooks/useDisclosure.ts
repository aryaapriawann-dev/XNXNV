/**
 * Hook for managing disclosure (open/close) state.
 * Useful for modals, dropdowns, accordions, and drawers.
 */
export function useDisclosure({
  initialOpen = false,
  onOpen,
  onClose,
  onCreate,
}: {
  initialOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onCreate?: () => void;
} = {}) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = useCallback(() => {
    setIsOpen(true);
    onOpen?.();
  }, [onOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        onOpen?.();
      } else {
        onClose?.();
      }
      return next;
    });
  }, [onOpen, onClose]);

  const setOpen = useCallback((open: boolean) => {
    setIsOpen(open);
    if (open) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [onOpen, onClose]);

  const reset = useCallback(() => {
    setIsOpen(initialOpen);
  }, [initialOpen]);

  // Trigger onCreate when component mounts and isOpen is true
  useEffect(() => {
    if (isOpen) {
      onCreate?.();
    }
  }, [isOpen, onCreate]);

  return {
    isOpen,
    open,
    close,
    toggle,
    setOpen,
    reset,
  };
}

/**
 * Hook for managing multiple disclosure states.
 * Returns an object with methods to open, close, toggle, and check individual items.
 */
export function useMultipleDisclosures<T extends string>(
  initialStates: Partial<Record<T, boolean>> = {},
  options?: {
    onOpen?: (key: T) => void;
    onClose?: (key: T) => void;
  }
) {
  const [openStates, setOpenStates] = useState<Record<T, boolean>>(
    (Object.keys(initialStates) as T[]).reduce(
      (acc, key) => {
        acc[key] = initialStates[key] ?? false;
        return acc;
      },
      {} as Record<T, boolean>
    )
  );

  const open = useCallback(
    (key: T) => {
      setOpenStates((prev) => ({
        ...prev,
        [key]: true,
      }));
      options?.onOpen?.(key);
    },
    [options]
  );

  const close = useCallback(
    (key: T) => {
      setOpenStates((prev) => ({
        ...prev,
        [key]: false,
      }));
      options?.onClose?.(key);
    },
    [options]
  );

  const toggle = useCallback(
    (key: T) => {
      setOpenStates((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    },
    []
  );

  const isOpen = useCallback(
    (key: T): boolean => {
      return openStates[key];
    },
    [openStates]
  );

  const openAll = useCallback(() => {
    setOpenStates(
      Object.keys(openStates).reduce((acc, key) => {
        acc[key as T] = true;
        return acc;
      }, {} as Record<T, boolean>)
    );
  }, []);

  const closeAll = useCallback(() => {
    setOpenStates(
      Object.keys(openStates).reduce((acc, key) => {
        acc[key as T] = false;
        return acc;
      }, {} as Record<T, boolean>)
    );
  }, []);

  const getOpenCount = useCallback(() => {
    return Object.values(openStates).filter(Boolean).length;
  }, [openStates]);

  const isAnyOpen = useCallback((): boolean => {
    return Object.values(openStates).some(Boolean);
  }, [openStates]);

  return {
    isOpen,
    open,
    close,
    toggle,
    openAll,
    closeAll,
    getOpenCount,
    isAnyOpen,
    allStates: openStates,
  };
}
