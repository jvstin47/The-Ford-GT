import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import ColorSelectorWidget from './components/ColorSelectorWidget'
import ErrorBoundary from './components/ErrorBoundary'
import { ROUTES } from './constants/routes'

// Lazy loading for routes
const Home = lazy(() => import('./pages/Home'))
const Heritage = lazy(() => import('./pages/Heritage'))
const Specs = lazy(() => import('./pages/Specs'))
const Ownership = lazy(() => import('./pages/Ownership'))
const NotFound = lazy(() => import('./pages/NotFound'))

function RouteController() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Scroll to top on route change without triggering React renders
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });

    // Dynamic Title Management
    const titles = {
      [ROUTES.HOME]: 'FORD GT | Legacy Boutique',
      [ROUTES.HERITAGE]: 'Heritage | FORD GT',
      [ROUTES.SPECS]: 'Specifications | FORD GT',
      [ROUTES.OWNERSHIP]: 'Ownership | FORD GT'
    };
    document.title = titles[pathname] || 'Not Found | FORD GT';
  }, [pathname]);

  return null;
}

// Accessible Skeleton Loader
const PageLoader = () => (
  <div className="min-h-[50vh] bg-matte-black flex items-center justify-center" aria-busy="true" aria-live="polite">
    <div className="w-12 h-12 border-4 border-surface-variant border-t-liquid-blue rounded-full animate-spin"></div>
    <span className="sr-only">Loading content...</span>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <RouteController />
          
          {/* Skip to Content for Keyboard Users */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] bg-liquid-blue text-white px-4 py-2 font-label-bold rounded shadow-xl outline-none focus:ring-4 focus:ring-white"
          >
            Skip to main content
          </a>

          <Navigation />
          <ColorSelectorWidget />
          
          <main id="main-content" tabIndex="-1" className="outline-none">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.HERITAGE} element={<Heritage />} />
                <Route path={ROUTES.SPECS} element={<Specs />} />
                <Route path={ROUTES.OWNERSHIP} element={<Ownership />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          <footer className="py-20 text-center border-t border-surface-variant bg-matte-black relative z-50">
            <nav className="flex flex-col items-center gap-6" aria-label="Footer Navigation">
              <div className="flex flex-wrap justify-center gap-8">
                <a href="#" className="font-label-bold text-outline hover:text-off-white transition-colors uppercase focus-visible:ring-2 focus-visible:ring-off-white rounded outline-none p-1">Privacy Policy</a>
                <a href="#" className="font-label-bold text-outline hover:text-off-white transition-colors uppercase focus-visible:ring-2 focus-visible:ring-off-white rounded outline-none p-1">Terms of Use</a>
                <a href="#" className="font-label-bold text-outline hover:text-off-white transition-colors uppercase focus-visible:ring-2 focus-visible:ring-off-white rounded outline-none p-1">Contact Ford Performance</a>
              </div>
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                © {new Date().getFullYear()} FORD MOTOR COMPANY. LEGACY FORWARD.
              </p>
            </nav>
          </footer>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
