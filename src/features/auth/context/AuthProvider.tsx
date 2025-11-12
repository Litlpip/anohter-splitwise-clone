import { type ReactNode, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { tokenStorage } from '@/lib/storage'
import { ROUTES } from '@/lib/constants'
import { AuthContext } from './AuthContext'

interface Props {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const [isAuthenticated, setIsAuthenticated] = useState(tokenStorage.hasToken())

  const login = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    tokenStorage.removeToken()
    setIsAuthenticated(false)
    queryClient.clear()
    navigate(ROUTES.LOGIN)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
