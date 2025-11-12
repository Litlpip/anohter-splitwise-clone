import { createContext } from 'react'

interface AuthContextValue {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}
export const AuthContext = createContext<AuthContextValue | undefined>(undefined)
