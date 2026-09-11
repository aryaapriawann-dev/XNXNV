export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "editor";
  createdAt: string;
}

export interface ErrorResponse {
  code: string;
  message: string;
  details?: string[];
}

export type SortOrder = "asc" | "desc";

export interface SortConfig {
  field: string;
  order: SortOrder;
}

export interface FilterConfig {
  field: string;
  value: string | string[];
  matchMode: "contains" | "equals" | "startsWith" | "endsWith";
}
