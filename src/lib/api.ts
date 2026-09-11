import { API_BASE_URL, TIMEOUT_MS } from "./constants";

const API_BASE_URL_VAL = process.env.NEXT_PUBLIC_API_URL || "https://api.xvnpnx.com";
const TIMEOUT_MS_VAL = parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || "10000", 10);

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS_VAL);

  try {
    const response = await fetch(`${API_BASE_URL_VAL}${endpoint}`, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new ApiError(response.status, error.message || "Request failed", response.statusText);
    }

    const data = await response.json();
    return data as T;
  } finally {
    clearTimeout(timeout);
  }
}

export async function postApi<T>(
  endpoint: string,
  body: unknown,
  options: RequestInit = {}
): Promise<T> {
  return fetchApi<T>(endpoint, {
    ...options,
    method: "POST",
    body: JSON.stringify(body),
  });
}

export async function putApi<T>(
  endpoint: string,
  body: unknown,
  options: RequestInit = {}
): Promise<T> {
  return fetchApi<T>(endpoint, {
    ...options,
    method: "PUT",
    body: JSON.stringify(body),
  });
}

export async function patchApi<T>(
  endpoint: string,
  body: unknown,
  options: RequestInit = {}
): Promise<T> {
  return fetchApi<T>(endpoint, {
    ...options,
    method: "PATCH",
    body: JSON.stringify(body),
  });
}

export async function deleteApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  return fetchApi<T>(endpoint, {
    ...options,
    method: "DELETE",
  });
}

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public statusText: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}
