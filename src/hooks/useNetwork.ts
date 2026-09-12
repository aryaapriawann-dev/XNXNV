import { useState, useEffect } from 'react';

type NetworkStatus = 'online' | 'offline';

interface UseNetworkReturn {
  isOnline: boolean;
  status: NetworkStatus;
}

/**
 * Track network connectivity status
 * Uses navigator.onLine and online/offline events
 *
 * @returns object with isOnline boolean and status string
 */
export function useNetwork(): UseNetworkReturn {
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [status, setStatus] = useState<NetworkStatus>(
    typeof navigator !== 'undefined' ? (navigator.onLine ? 'online' : 'offline') : 'online'
  );

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setStatus('online');
    };
    const handleOffline = () => {
      setIsOnline(false);
      setStatus('offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline, status };
}
