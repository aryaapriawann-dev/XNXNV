/**
 * Shared TypeScript types for XNXNV project.
 * Includes common interfaces for API responses and data models.
 */

/**
 * Generic API response wrapper.
 */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
  success: boolean;
}

/**
 * Paginated response.
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
  status: number;
  message?: string;
  success: boolean;
}

/**
 * Generic error response.
 */
export interface ApiError {
  code: string;
  message: string;
  details?: string[];
  statusCode: number;
}

/**
 * Common pagination params.
 */
export interface PaginationParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

/**
 * Common filter params.
 */
export interface FilterParams {
  search?: string;
  category?: string;
  tags?: string[];
  minValue?: number;
  maxValue?: number;
  startDate?: string;
  endDate?: string;
}

/**
 * User data model.
 */
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'member' | 'viewer';
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

/**
 * User preferences.
 */
export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  timezone: string;
  dateFormat: string;
}

/**
 * Activity log entry.
 */
export interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  resource: string;
  resourceId: string;
  details?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
}

/**
 * Audit trail entry.
 */
export interface AuditEntry {
  id: string;
  actorId: string;
  actorType: 'user' | 'system' | 'api';
  action: string;
  resource: string;
  resourceId: string;
  before?: Record<string, unknown>;
  after?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

/**
 * API request metadata.
 */
export interface RequestMetadata {
  requestId: string;
  timestamp: string;
  clientIp?: string;
  userAgent?: string;
  requestPath: string;
  requestMethod: string;
  responseTimeMs: number;
  statusCode: number;
}

/**
 * Health check response.
 */
export interface HealthCheck {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  uptime: number;
  version: string;
  checks: {
    name: string;
    status: 'pass' | 'fail' | 'warn';
    message?: string;
    responseTimeMs?: number;
  }[];
}

/**
 * Cache stats.
 */
export interface CacheStats {
  hits: number;
  misses: number;
  evictions: number;
  size: number;
  maxSize: number;
  hitRate: number;
  averageResponseTimeMs: number;
}

/**
 * Feature flag.
 */
export interface FeatureFlag {
  key: string;
  enabled: boolean;
  rolloutPercentage?: number;
  targets?: string[];
  condition?: string;
  version: string;
}

/**
 * Configuration object.
 */
export interface Config {
  appName: string;
  version: string;
  environment: 'development' | 'staging' | 'production';
  apiUrl: string;
  features: Record<string, FeatureFlag>;
  limits: {
    maxUploadSize: number;
    maxRequestSize: number;
    rateLimit: number;
    rateLimitWindow: number;
  };
}
