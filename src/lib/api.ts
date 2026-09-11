/**
 * Data fetching and API client utilities for XNXNV project.
 * Provides typed hooks and functions for common data operations.
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import type { ApiResponse, PaginatedResponse } from '@/types';

/**
 * Fetch with abort controller and timeout.
 */
async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout = 15000
): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(id);
  }
}

/**
 * Parse JSON response with error handling.
 */
async function parseResponse<T>(response: Response): Promise<ApiResponse<T>> {
  if (!response.ok) {
    let errorMessage = `Request failed with status ${response.status}`;
    try {
      const errorBody = await response.json();
      errorMessage = errorBody.message || errorMessage;
    } catch {
      // If response is not JSON, use status text
    }
    throw new ApiError(response.status, errorMessage);
  }

  const data = await response.json();
  return data as ApiResponse<T>;
}

/**
 * GET request.
 */
export async function get<T>(
  url: string,
  options?: RequestInit,
  timeout?: number
): Promise<T> {
  const response = await fetchWithTimeout(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  }, timeout);

  const apiResponse = await parseResponse<T>(response);
  return apiResponse.data;
}

/**
 * POST request.
 */
export async function post<T>(
  url: string,
  data?: unknown,
  options?: RequestInit,
  timeout?: number
): Promise<T> {
  const response = await fetchWithTimeout(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    body: data ? JSON.stringify(data) : undefined,
    ...options,
  }, timeout);

  const apiResponse = await parseResponse<T>(response);
  return apiResponse.data;
}

/**
 * PUT request.
 */
export async function put<T>(
  url: string,
  data?: unknown,
  options?: RequestInit,
  timeout?: number
): Promise<T> {
  const response = await fetchWithTimeout(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    body: data ? JSON.stringify(data) : undefined,
    ...options,
  }, timeout);

  const apiResponse = await parseResponse<T>(response);
  return apiResponse.data;
}

/**
 * PATCH request.
 */
export async function patch<T>(
  url: string,
  data?: unknown,
  options?: RequestInit,
  timeout?: number
): Promise<T> {
  const response = await fetchWithTimeout(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    body: data ? JSON.stringify(data) : undefined,
    ...options,
  }, timeout);

  const apiResponse = await parseResponse<T>(response);
  return apiResponse.data;
}

/**
 * DELETE request.
 */
export async function del<T>(
  url: string,
  options?: RequestInit,
  timeout?: number
): Promise<T> {
  const response = await fetchWithTimeout(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  }, timeout);

  const apiResponse = await parseResponse<T>(response);
  return apiResponse.data;
}

/**
 * Paginated GET request.
 */
export async function getPaginated<T>(
  url: string,
  params?: { page?: number; pageSize?: number },
  options?: RequestInit,
  timeout?: number
): Promise<PaginatedResponse<T>> {
  const urlWithParams = new URL(url, window.location.origin);
  if (params?.page) urlWithParams.searchParams.set('page', params.page.toString());
  if (params?.pageSize) urlWithParams.searchParams.set('pageSize', params.pageSize.toString());

  const response = await fetchWithTimeout(urlWithParams.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  }, timeout);

  const apiResponse = await parseResponse<PaginatedResponse<T>>(response);
  return apiResponse;
}

/**
 * Error class for API errors.
 */
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public errorCode?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Data fetching hook with loading, error, and caching states.
 */
export function useFetch<T>(
  url: string,
  options?: {
    enabled?: boolean;
    timeout?: number;
    onSuccess?: (data: T) => void;
    onError?: (error: ApiError) => void;
    refetchInterval?: number;
  }
) {
  const {
    enabled = true,
    timeout = 15000,
    onSuccess,
    onError,
    refetchInterval,
  } = options || {};

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [refetchCount, setRefetchCount] = useState(0);
  const abortControllerRef = useRef<AbortController | null>(null);
  const lastUrlRef = useRef(url);

  const fetchData = useCallback(async (fetchUrl: string = url) => {
    if (!enabled) return;

    // Cancel previous request if URL changed
    if (fetchUrl !== lastUrlRef.current && abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    lastUrlRef.current = fetchUrl;
    setLoading(true);
    setError(null);

    abortControllerRef.current = new AbortController();

    try {
      const result = await fetchWithTimeout(fetchUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: abortControllerRef.current.signal,
      }, timeout);

      const apiResponse = await parseResponse<T>(result);
      setData(apiResponse.data);
      onSuccess?.(apiResponse.data);
      setRefetchCount(prev => prev + 1);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err);
        onError?.(err);
      } else {
        setError(new ApiError(500, 'Unknown error occurred'));
        onError?.(new ApiError(500, 'Unknown error occurred'));
      }
    } finally {
      setLoading(false);
    }
  }, [enabled, url, timeout, onSuccess, onError]);

  // Initial fetch
  useEffect(() => {
    if (enabled && url) {
      fetchData();
    }
  }, [enabled, url, fetchData]);

  // Refetch on interval
  useEffect(() => {
    if (refetchInterval && enabled && url) {
      const interval = setInterval(() => {
        fetchData();
      }, refetchInterval);
      return () => clearInterval(interval);
    }
  }, [refetchInterval, enabled, url, fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const cancel = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setLoading(false);
    setError(new ApiError(499, 'Request cancelled by user'));
  }, []);

  return {
    data,
    loading,
    error,
    refetch,
    cancel,
    refetchCount,
  };
}

/**
 * Mutation hook for POST/PUT/PATCH/DELETE operations.
 */
export function useMutate<TData = unknown, TVariables = unknown>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: {
    onSuccess?: (data: TData, variables: TVariables) => void;
    onError?: (error: ApiError, variables: TVariables) => void;
    retry?: number;
    retryDelay?: number;
  }
) {
  const { onSuccess, onError, retry = 0, retryDelay = 1000 } = options || {};

  const [isMutating, setIsMutating] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [data, setData] = useState<TData | null>(null);

  const mutate = useCallback(async (variables: TVariables) => {
    setIsMutating(true);
    setError(null);

    let attempts = 0;
    let lastError: ApiError | null = null;

    while (attempts <= retry) {
      try {
        const result = await mutationFn(variables);
        setData(result);
        onSuccess?.(result, variables);
        setIsMutating(false);
        return result;
      } catch (err) {
        lastError = err instanceof ApiError ? err : new ApiError(500, 'Mutation failed');
        setError(lastError);
        onError?.(lastError, variables);

        if (attempts < retry) {
          await new Promise(resolve => setTimeout(resolve, retryDelay * (attempts + 1)));
          attempts++;
        } else {
          setIsMutating(false);
          return Promise.reject(lastError);
        }
      }
    }

    setIsMutating(false);
    return Promise.reject(lastError);
  }, [mutationFn, onSuccess, onError, retry, retryDelay]);

  const execute = useCallback(async (variables: TVariables) => {
    return mutate(variables);
  }, [mutate]);

  return {
    mutate: execute,
    isMutating,
    error,
    data,
  };
}

/**
 * Optimistic update hook for mutations with rollback support.
 */
export function useOptimisticUpdate<TData, TVariables>(
  getData: () => TData,
  updateFn: (data: TData, variables: TVariables) => TData,
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: {
    onSuccess?: (data: TData, variables: TVariables) => void;
    onError?: (error: ApiError, variables: TVariables, rolledBackData: TData) => void;
  }
) {
  const { onSuccess, onError } = options || {};

  const [optimisticData, setOptimisticData] = useState<TData>(getData());
  const [error, setError] = useState<ApiError | null>(null);

  const update = useCallback(async (variables: TVariables) => {
    const previousData = optimisticData;
    const optimisticUpdate = updateFn(optimisticData, variables);

    setOptimisticData(optimisticUpdate);

    try {
      const result = await mutationFn(variables);
      setOptimisticData(result);
      onSuccess?.(result, variables);
      return result;
    } catch (err) {
      setOptimisticData(previousData);
      const errorObj = err instanceof ApiError ? err : new ApiError(500, 'Update failed');
      setError(errorObj);
      onError?.(errorObj, variables, previousData);
      return Promise.reject(errorObj);
    }
  }, [optimisticData, getData, updateFn, mutationFn, onSuccess, onError]);

  return {
    data: optimisticData,
    update,
    error,
    reset: () => setOptimisticData(getData()),
  };
}
