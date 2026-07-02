import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-matte-black flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-carbon-gray p-8 rounded-lg border-l-4 border-race-red shadow-2xl">
            <span className="material-symbols-outlined text-race-red text-5xl mb-4">warning</span>
            <h1 className="font-headline-lg text-off-white mb-4">System Malfunction</h1>
            <p className="font-body-md text-on-surface-variant mb-6">
              A critical error has occurred in the application rendering process. Our engineers have been notified.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-race-red text-white font-label-bold uppercase tracking-widest hover:bg-red-700 transition-colors"
            >
              Restart Telemetry
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
