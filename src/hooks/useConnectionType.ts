"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Hook to detect network connection type
 * Returns connection type string or null if unavailable
 */
export function useConnectionType(): string | null {
  const [connectionType, setConnectionType] = useState<string | null>(null);

  useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.connection) {
      return;
    }

    const updateConnection = () => {
      setConnectionType(navigator.connection?.type || null);
    };

    updateConnection();
    navigator.connection?.addEventListener("change", updateConnection);
    return () => navigator.connection?.removeEventListener("change", updateConnection);
  }, []);

  return connectionType;
}
