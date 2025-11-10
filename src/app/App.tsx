import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Providers } from './providers'
import { AppErrorBoundary } from './providers/AppErrorBoundary'
import { AuthProvider } from '@/features/auth/context/AuthProvider.tsx'
import { ProtectedRoute } from '@/shared/components/ProtectedRoute'
import { PublicRoute } from '@/shared/components/PublicRoute'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ROUTES } from '@/shared/config/constants'

export function App() {
  return (
    <Providers>
      <BrowserRouter>
        <AuthProvider>
          <AppErrorBoundary>
            <Routes>
              <Route
                path={ROUTES.HOME}
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path={ROUTES.LOGIN}
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AppErrorBoundary>
        </AuthProvider>
      </BrowserRouter>
    </Providers>
  )
}
