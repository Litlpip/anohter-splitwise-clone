import { type ReactNode } from 'react'
import { useQueryClient, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { tokenStorage } from '@/shared/api/tokenStorage'
import { ROUTES } from '@/shared/config/constants'
import type { GetUserEntry } from '@/api/generated'
import { AuthContext } from './AuthContext'

interface Props {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  // Get current user from query cache
  const { data: currentUser = null } = useQuery<GetUserEntry>({
    queryKey: ['currentUser'],
    enabled: false, // Don't auto-fetch, data is set by useLogin
  })

  const isAuthenticated = tokenStorage.hasToken()

  const logout = () => {
    tokenStorage.removeToken()
    queryClient.clear()
    navigate(ROUTES.LOGIN)
  }

  return (
    <AuthContext.Provider value={{ currentUser, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
