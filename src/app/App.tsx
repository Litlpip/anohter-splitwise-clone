import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Providers } from './providers'
import { AppErrorBoundary } from './providers/AppErrorBoundary'
import { AuthProvider } from '@/features/auth/context/AuthProvider'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { PublicRoute } from '@/components/PublicRoute'
import { PublicLayout } from '@/components/layouts/PublicLayout'
import { AuthenticatedLayout } from '@/components/layouts/AuthenticatedLayout'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ROUTES } from '@/lib/constants'

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
                    <AuthenticatedLayout>
                      <HomePage />
                    </AuthenticatedLayout>
                  </ProtectedRoute>
                }
              />
              <Route
                path={ROUTES.LOGIN}
                element={
                  <PublicRoute>
                    <PublicLayout>
                      <LoginPage />
                    </PublicLayout>
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
