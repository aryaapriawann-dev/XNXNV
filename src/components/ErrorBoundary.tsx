"use client";

import { Component, ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("[ErrorBoundary] Caught error:", error, errorInfo);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-6">
            <div className="max-w-md text-center">
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                Terjadi kesalahan
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Ada yang tidak beres. Silakan muat ulang halaman.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-700 transition-colors"
              >
                Muat ulang
              </button>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
