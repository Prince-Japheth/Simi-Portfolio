'use client';

import React from 'react';
import { useAppDispatch } from '@/store';
import { clearError } from '@/store/slices/uiSlice';

interface ErrorStateProps {
  error?: Error | { message: string } | null;
  resetErrorBoundary?: () => void;
}

export default function ErrorState({ error, resetErrorBoundary }: ErrorStateProps) {
  const dispatch = useAppDispatch();
  const errorMessage = error?.message || 'An unexpected error occurred. Please try again.';

  const handleReset = () => {
    dispatch(clearError());
    if (resetErrorBoundary) {
      resetErrorBoundary();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-zinc-950/80 p-8 text-center backdrop-blur-md">
      <div className="mb-4 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-red-500/10 text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      </div>
      <h3 className="mb-2 font-righteous text-2xl text-white">Something went wrong</h3>
      <p className="mb-6 max-w-md text-sm text-zinc-400">{errorMessage}</p>
      <button
        onClick={handleReset}
        className="rounded-full bg-accent-coral px-6 py-2.5 font-righteous text-sm text-white transition-all hover:bg-accent-bright-orange hover:shadow-lg hover:shadow-accent-coral/25 active:scale-95"
      >
        Try Again
      </button>
    </div>
  );
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.group('%c[Error Boundary Caught]', 'color: #ff3333; font-weight: bold;');
    console.error('Error:', error);
    console.info('Component Stack:', errorInfo.componentStack);
    console.groupEnd();
  }

  resetBoundary = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="flex min-h-screen items-center justify-center bg-black p-4">
          <div className="w-full max-w-lg">
            <ErrorState error={this.state.error} resetErrorBoundary={this.resetBoundary} />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
