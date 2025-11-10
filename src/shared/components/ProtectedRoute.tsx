import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config/constants'
import { useAuth } from '@features/auth/context/useAuth.ts'

interface Props {
  children: ReactNode
}

export function ProtectedRoute({ children }: Props) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />
  }

  return <>{children}</>
}
